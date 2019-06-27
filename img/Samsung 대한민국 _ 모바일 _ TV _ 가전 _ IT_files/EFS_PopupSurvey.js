// Create an immediately invoked functional expression to wrap our code
(function () {
  // Define our constructor
  this.EFS_PopupSurvey = function () {

	this.isMobile = false;
    // Create global element references
    this.options = {};
    this.page_history = [];
    this.opened_surveys = [];
    this.start_time = null;

    // Define option defaults
    let defaults = {

    };

    // Create options by extending defaults with the passed in arguments
    if (!arguments[0]) {
      this.settings = defaults;
    } else {
      if (arguments[0] && typeof arguments[0] === "object") {
        this.settings = extendDefaults(defaults, arguments[0]);
//		console.log(this.settings);
      }
    }
    width = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth,
    height = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
//console.log(width+","+height);
    
    if (this.settings.configs["mark"]) {
      window.sessionStorage.setItem('efs_popup_survey_mark', this.settings.configs["mark"]);
    }
    if (this.settings.configs["checkMark"]) {
      if (this.settings.configs["checkMark"]==window.sessionStorage.getItem('efs_popup_survey_mark')) {
        window.sessionStorage.removeItem('efs_popup_survey_mark');
      } else {
        return;
      }
    }

    for ($key in this.settings.configs) {
		this.options=this.settings.configs[$key];
		if (this.options["maxWidth"]) {
			nocheck=false;
			if (width<=this.options["maxWidth"]) {
				this.isMobile = true;
				this.showButton();
				continue;
			}
		}
		if (this.options["minWidth"]) {
			nocheck=false;
			if (width>=this.options["minWidth"]) {
				this.isMobile = false;
				this.showButton();
				continue;
			}
		}
	}
  };

  // Public Methods

  EFS_PopupSurvey.prototype.showButton = function () {
	let isMobile = this.isMobile;
	let options=this.options;
	let endright = 0;
	if (this.options.style.width) endright=this.options.style.width+"px";
	let endleft = endright;
	let surveyurl=this.options.surveyUrl;
    let button = document.createElement('img');
	button.setAttribute("id", "efs_popup_survey_button");

	let survey = document.createElement('div');
	survey.setAttribute("id", "efs_popup_survey_iframe");

	let closer = document.createElement('div');
	closer.setAttribute("id", "efs_popup_survey_iframe_closer");

	let myinterval=null;
	let hasChecked = false;
	let winwidth = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
	let winheight = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	if (window.innerHeight) winheight = window.innerHeight;

		
	let getMobileOperatingSystem = function() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		  // Windows Phone must come first because its UA also contains "Android"
		if (/windows phone/i.test(userAgent)) {
			return "Windows Phone";
		}

		if (/android/i.test(userAgent)) {
			return "Android";
		}

		// iOS detection from: http://stackoverflow.com/a/9039885/177710
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			return "iOS";
		}

		return "unknown";
	};
			
	
	let interval=function(e) {
		winheight = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
		if (window.innerHeight) winheight = window.innerHeight;
		var elem=document.getElementById("efs_popup_survey_button");
		if (elem) elem.style.top=(winheight-parseInt(elem.height))/2+"px";
		
		elem=document.getElementById("efs_popup_survey_iframe");
		if (!elem) return;
		if (isMobile /*mobile*/) {
			elem.style.top = '0px';
		}
		else { /*desktop*/
			if (options.style.heightpercentage) {
				height=Math.min(winheight,Math.max(winheight*options.style.heightpercentage/100,options.style.minheight));
				width=Math.min(winwidth,Math.max(winwidth*options.style.widthpercentage/100,options.style.minwidth));
			} else {
				height=Math.min(winheight,options.style.height);
				width=Math.min(winwidth,options.style.width);
			}
			elem.style.top = ((winheight - height)/2)+'px';
			elem.style.left = ((winwidth - width)/2)+ 'px';
//			elem.style.left = '0px';
//			elem.style.top = '0px';//(winheight-parseInt(elem.style.height))/2+"px";
		}
		ifrm = document.getElementById('efs_popup_survey_ifrm');
		if (!ifrm) {return; }
		var win = ifrm.contentWindow; // reference to iframe's window
		var doc = null;
		if (!hasChecked) {
			doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;
			hasChecked = true;
		}
		
		if (doc) {
			elems = doc.getElementsByClassName("efs_popup_survey_close");
			if (elem && elems.length > 0) {
				elems[0].addEventListener('click', function(e) {			
					buttonclickedagain();
				});
			}
		}
	}
	
	let buttonclickedagain=function (e) {
		window.clearInterval(myinterval);
		document.body.removeChild(button);
		document.body.removeChild(survey);
		sessionStorage.setItem('efs_popup_survey_url', surveyurl);
	}
	let showsurvey=function (e) {
      survey.appendChild(getcloserbutton());
      document.body.appendChild(survey);
      
      leftright='';
      survey.setAttribute("style", "background-color:#fff;transition: width 1s;border:0px solid "+options.style.borderColor+";width:0px;z-index:10000;position:fixed;"+leftright+";top:0px;height:"+(options.style.height+2)+"px");

		var winwidth=window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
		//console.log(endright+" vs "+winwidth + "button:"+button.width);
		var theIframe = document.getElementById("efs_popup_survey_iframe");
		
		if (isMobile) {
			// mobile: fullscreen
			endright = winwidth+'px';
			endheight = '100vh';
			endleft = '0px';
		}
		else {
			// desktop: keep the button (plus a bit space)
			/*
			if ((winwidth-12-button.width) < parseInt(endright)) {
				endright= (winwidth-12-button.width)+"px";			
			}
			*/
			if (parseInt(endleft) + button.width + 12 > winwidth) {
				endleft = (parseInt(endleft) + button.width + 12)+"px";			
			}
			
		}
		
//		var frameheight = (parseInt(theIframe.style.height)-2);

		var elem=document.getElementById("efs_popup_survey_iframe");
		
		if (isMobile) {
			elem.style.height = winheight+'px';
//			elem.style.height = endheight;
			elem.style.overflow='auto';
			elem.style.WebkitOverflowScrolling='touch';
			elem.style.width=winwidth+"px";
			height= winheight;
		} else {
			if (options.style.heightpercentage) {
				height=Math.min(winheight,Math.max(winheight*options.style.heightpercentage/100,options.style.minheight));
				width=Math.min(winwidth,Math.max(winwidth*options.style.widthpercentage/100,options.style.minwidth));

			} else {
				height=Math.min(winheight,options.style.height);
				width=Math.min(winwidth,options.style.width);
			}
			elem.style.top= ((winheight - height)/2)+'px';
			elem.style.left= ((winwidth - width)/2)+ 'px';
			elem.style.width=width+'px';
			elem.style.height=height+'px';
		}
		elem.style.borderWidth="1px";
		
		elem.innerHTML += '<iframe id="efs_popup_survey_ifrm" src="'+surveyurl+'" style="height:100%;width:100%" frameborder="0" ></iframe>';
		var tmp = document.getElementById('efs_popup_survey_iframe_closer');
		if (tmp) {
			tmp.style.display = 'block';
			tmp.addEventListener('click', buttoncloseiframe);
		}
		myinterval=window.setInterval(interval,100);

		return false;
	}
	
	let buttonclicked=function (e) {
		if (isMobile) {
			endright = winwidth+'px';
			endheight = '100vh';
			endleft = '0px';
		}
		else {
			if (parseInt(endleft) + button.width + 12 > winwidth) {
				endleft = (parseInt(endleft) + button.width + 12)+"px";			
			}
			
		}
		var elem=document.getElementById("efs_popup_survey_button");
		if (isMobile) {
			elem.style.right = endright;
		}
		else {
			elem.style.display = 'none';
		}
      showsurvey();
		e.stopPropagation( );
		e.preventDefault( );
		button.removeEventListener('click', buttonclicked);
		button.addEventListener('click', buttonclickedagain);
		
		return false;
	}
	
	let buttoncloseiframe=function(e) {		
      var elem=document.getElementById("efs_popup_survey_iframe");
      if (elem) document.body.removeChild(elem);
      var elem=document.getElementById("efs_popup_survey_button");
      if (elem) document.body.removeChild(elem);
      if (myinterval) window.clearInterval(myinterval);
		sessionStorage.setItem('efs_popup_survey_url', surveyurl);
	}
	let getcloserbutton = function () {
		var position = 'fixed';
		if (!isMobile) {
			position = 'absolute';
		}
      position = 'absolute';
		closer.addEventListener('click', buttoncloseiframe);

		closer.setAttribute('style', 'display:none; position:'+position+'; z-index:10500; top:10px; right:20px;cursor:pointer;text-align:center;line-height: 1.8rem;width: 2rem;height: 2rem;background-color: #1428A0;color: #ffffff;border-radius: 5px;font-weight: bold;border-top: none;font-size:2rem;border-width:0px;');
//		closer.setAttribute('onclick', 'buttoncloseiframe()');

//		closer.setAttribute('style', 'display:none; position:'+position+'; z-index:10100; top:0px; right:0px; border:1px solid black;text-align:center;line-height:1.8rem;font-size: 1.5rem;width: 2rem; height: 2rem; cursor:pointer;background-color:#fff;color:#000;');
		closer.innerHTML = 'x';
		return closer;
	}
	let installcloserhandler = function() {
		var tmp = document.getElementById('efs_popup_survey_iframe_closer');
		if (tmp) {
			tmp.style.display = 'block';
			tmp.addEventListener('click', buttoncloseiframe);
		}		
	}
	let buttonshow=function(e) {
		button.setAttribute("src",options.style.button);
		let leftright = 'right:0px';
		let transition = 'right';
		let borderradius = 'border-radius:9px 0 0 9px';// : 'border-radius:0 9px 9px 0';
		
		// changed style set
		button.setAttribute("style", "cursor:pointer;transition: "+transition+" 1s;z-index:1000;position:fixed;"+leftright+";top:-1000px;"+borderradius+"; background-color: #363636; padding: 14px 9px 14px 5px; border:1px solid #fff ");
		document.body.appendChild(button);
		myinterval=window.setInterval(interval,100);
		button.addEventListener('click', buttonclicked);
		
		survey.setAttribute("src",options.style.button);

			
		
		/*
		// dynamically add a CSS pseudo-class
		var style = document.createElement('style');
		if (style.styleSheet) {
			closer.styleSheet.cssText = '#efs_popup_survey_iframe_closer:hover { background-color:#0f0;}';
		}
		else {
			style.appendChild(document.createTextNode('#efs_popup_survey_iframe_closer:hover { background-color:#0f0;}'));
		}
		document.getElementsByTagName('head')[0].appendChild(style);
		*/
		
		survey.appendChild( getcloserbutton() );
		
		document.body.appendChild(survey);
	}
	
	let scrollinterval=function(e) {
		var scrolltop=window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop;
		var clientheight=document.documentElement.clientHeight ||document.body.clientHeight;
		var scrollheight=document.documentElement.scrollHeight ||document.body.scrollHeight;
		if (scrollheight==clientheight) {
			window.clearInterval(myscrollinterval);
			buttonshow();
		}
		if (scrolltop/(scrollheight-clientheight)>options["scroll"]) {
			window.clearInterval(myscrollinterval);
			buttonshow();
		}
	}
	
	/* INIT PART */
	
	/* X-domain javascript communication 
	   We want a message to contain 2 parts (command:parameter), divided by an colon (:), for example "route:google.com"
	
	   route:<url>
	   closeiframe:<arbitrary>
	*/ 
	let trustedDomains = ['https://scei-communication.com', 'https://xm0570.customervoice360.com', 'https://qaweb.samsung.com', 'https://www.samsung.com'];
	window.addEventListener('message', function(event) {
	  let myself = window.location.protocol + '//' + window.location.hostname;
	  let isTrusted = false;
	  trustedDomains.forEach(function(item, index) {
		  if (item == event.origin) {
			  isTrusted = true
		  }
	  });
	  if (!isTrusted) return;
	  if (typeof event.data != 'string') return;
	  var parts = event.data.split(':');
	  if (parts.length != 2) return;

	  // do your stuff...

	  switch(parts[0]) {
		case 'route':
			document.location.href = parts[1];
			break;
		case 'closeiframe':
			if (myinterval) window.clearInterval(myinterval);
			var elem=document.getElementById("efs_popup_survey_button");
			if (elem) document.body.removeChild(elem);
			var elem=document.getElementById("efs_popup_survey_iframe");
			if (elem) document.body.removeChild(elem);
			sessionStorage.setItem('efs_popup_survey_url', surveyurl);
			break;
		default:
			break;
	  }
	  
	});
	
	
	let myscrollinterval=null;
	if (options["showImmediately"]) {
      showsurvey();
      return;
		var aHeight = 0;
		var aWidth = 0;
		
		if (isMobile) {
			aHeight = winheight;
			aWidth = winwidth;
		}
		else {
			aHeight = (options.style.height+2);
			aWidth = options.style.width;
		}
		
		if (options["animate"]=="bottom") {
			survey.setAttribute("id", "efs_popup_survey_iframe");
			survey.setAttribute("style", "background-color:#fff;transition: height 1s;border:0px solid "+options.style.borderColor+";height:0px;z-index:1000;position:fixed;bottom:0px;width:"+(options.style.width+2)+"px");
			
			document.body.appendChild(survey);
			window.setTimeout(function(e) {
				var elem=document.getElementById("efs_popup_survey_iframe");
				elem.style.borderWidth = "1px";
				elem.style.height = aHeight+"px";
				elem.innerHTML='<iframe id="efs_popup_survey_ifrm" scrolling="no"  src="'+surveyurl+'" style="height:'+aHeight+'px;width:100%" frameborder="0" ></iframe>';
				survey.appendChild( getcloserbutton() );
				installcloserhandler();
			},500);
		}
		if (options["animate"]=="right") {
			survey.setAttribute("id", "efs_popup_survey_iframe");

			survey.setAttribute("style", "background-color:#fff;transition: width 1s;border:0px solid "+options.style.borderColor+";width:0px;z-index:1000;position:fixed;right:0px;top:0px;height:"+aHeight+"px");
			document.body.appendChild(survey);
			window.setTimeout(function(e) {
				var elem=document.getElementById("efs_popup_survey_iframe");
				elem.style.borderWidth = "1px";
				elem.style.width = aWidth+"px";
				elem.innerHTML='<iframe id="efs_popup_survey_ifrm" scrolling="no" src="'+surveyurl+'" style="height:'+aHeight+'px;width:100%" frameborder="0" ></iframe>';
				survey.appendChild( getcloserbutton() );
				installcloserhandler();
			},500);
		}
		if (options["animate"]=="left") {
			survey.setAttribute("id", "efs_popup_survey_iframe");
			survey.setAttribute("style", "background-color:#fff;transition: width 1s;border:0px solid "+options.style.borderColor+";width:0px;z-index:1000;position:fixed;left:0px;top:0px;height:"+aHeight+"px");
			
			document.body.appendChild(survey);
			window.setTimeout(function(e) {
				var elem=document.getElementById("efs_popup_survey_iframe");
				elem.style.borderWidth = "1px";
				elem.style.width = aWidth+"px";
				elem.innerHTML='<iframe id="efs_popup_survey_ifrm" scrolling="no" src="'+surveyurl+'" style="height:'+aHeight+'px;width:100%" frameborder="0" ></iframe>';
				survey.appendChild( getcloserbutton() );
				installcloserhandler();
			},500);
		}
		//return;
	}
	else if (this.options["scroll"]) {
		myscrollinterval=window.setInterval(scrollinterval,100);
		//return;
	}
	else {
		buttonshow();
	}
	
  }
  function extendDefaults(source, properties) {
    let property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }



}());
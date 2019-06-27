_satellite.pushAsyncScript(function(event, target, $variables){
  (function(w, d, n, s, e, o) {
    w[n] = w[n] || function() {
        (w[n].q = w[n].q || []).push(arguments)
    };
})(window, document, 'recoPick', 'script');
var async_js = function(url, callback, charset) {
    /* 이미 추가된 url인지 검증 */
    $('script').each(function() {
        if ($(this).attr('src') == url) {
            console.log(url + ' 이미 추가된 JS 파일 입니다.');
            callback();
            return false;
        }
    });
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    if (charset != null) {
        script.charset = "utf-8";
    }
    var loaded = false;
    script.onreadystatechange = function() {
        if (this.readyState == 'loaded' || this.readyState == 'complete') {
            if (loaded) {
                return;
            }
            loaded = true;
            callback();
        }
    };
    script.onload = function() {
        callback();
    };
    script.src = url;
    head.appendChild(script);
};

async_js('https://static.recopick.com/dist/production.min.js', function() {
    recoPick('service', 'samsung.com/sec');
    var recGuid = $.cookies.get('encGuid');
   // var recPgview = digitalData.page.pageInfo.pageName;
    if (recGuid !== null) {
        recoPick('setMID', recGuid);
    }
    if (navigator.userAgent.toUpperCase().indexOf('SECAPP') !== -1) {
        recoPick('setGAID', window.secapp.getGaid());
        recoPick('setUID',  window.secapp.getGaid()); 
    }
    if (digitalData.page.pageInfo.pageTrack !== "product detail" && digitalData.page.pageInfo.pageTrack !== "product search") {
        recoPick('sendLog', 'visit');
    }
//    recoPick('sendLog', 'view', 'recPgview');
}, null);
});

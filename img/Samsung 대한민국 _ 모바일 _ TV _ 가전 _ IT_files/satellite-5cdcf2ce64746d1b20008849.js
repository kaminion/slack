_satellite.pushAsyncScript(function(event, target, $variables){
  popUp = new EFS_PopupSurvey({

  configs: {
    "mobile": {

      "maxWidth":720,

      "scroll":0.7,

      "surveyUrl":'https://xm0570.customervoice360.com/uc/samsung_cei/?a=ko_KR&b=3',

      "style": {

        "minwidth": 720,

        "minheight": 720,
      
        "widthpercentage": 75,

        "heightpercentage": 75,

        "borderColor": "#000000",

        "button":"https://xm0570.customervoice360.com/uc/images/smsng/oo_tab_korean_ffffff.png",
      }

    },
    "desktop": {
      "minWidth":721,

      "scroll":0.7,

      "surveyUrl":'https://xm0570.customervoice360.com/uc/samsung_cei/?a=ko_KR&b=3',

      "style": {

        "minwidth": 420,

        "minheight": 520,
      
        "widthpercentage": 25,

        "heightpercentage": 50,

        "borderColor": "#000000",

        "button":"https://xm0570.customervoice360.com/uc/images/smsng/oo_tab_korean_ffffff.png",
      }

    }

  }

});

});

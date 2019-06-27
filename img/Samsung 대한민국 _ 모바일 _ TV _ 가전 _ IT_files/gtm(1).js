
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"80",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"\"!=digitalData.page.pageInfo.pageTrack)return\"support landing\"==digitalData.page.pageInfo.pageTrack?\"support home\":$.trim(digitalData.page.pageInfo.pageTrack);var a=window.location.href.split(\"\/\").length;return a=window.location.href.split(\"\/\")[a-2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C$(\"#no_result_view \\x3e\").length?\"no result\":\"result\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"INPUT\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")\u0026\u0026\"checkbox\"==$(",["escape",["macro",2],8,16],").attr(\"type\")\u0026\u0026$(",["escape",["macro",2],8,16],").is(\":checked\"))return\"check\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=$(",["escape",["macro",2],8,16],").closest(\"button\").hasClass(\"disable\")?\"checked\":\"INPUT\"!=$(",["escape",["macro",2],8,16],").prop(\"tagName\")||$(",["escape",["macro",2],8,16],").is(\":checked\")?\"checked\"==$(\"input[type\\x3dradio]\",",["escape",["macro",2],8,16],").attr(\"checked\")?\"checked\":\"filter-sort__reset-button\"==$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\")?\"checked\":\"unchecked\":\"checked\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(window).width();return 768\u003E=a?\"mobile\":\"desktop\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(",["escape",["macro",2],8,16],").attr(\"ga-ca\")?$(",["escape",["macro",2],8,16],").attr(\"ga-ca\"):null==$(",["escape",["macro",2],8,16],").attr(\"ga-ca\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().attr(\"ga-ca\")?$(",["escape",["macro",2],8,16],").parent().attr(\"ga-ca\"):null==$(",["escape",["macro",2],8,16],").parent().attr(\"ga-ca\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ca\")?$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ca\"):null==$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ca\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ca\")?\n$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ca\"):null==$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ca\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-ca\")?$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-ca\"):\"n\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function c(a){if(a)for(var b=a.split(\":\"),c=0;c\u003Cb.length;c++)if(\"#\"==b[c].charAt(0)){b.splice(c,1);a=b.join(\":\");break}return a}var a=window.location.href.split(\"\/\").length,b=window.location.href.split(\"\/\")[a-1];\"\"!=b\u0026\u0026\"?\"!=b.charAt(0)||--a;b=digitalData.page.pageInfo.siteCode;return 4==a?window.location.href.split(\"\/\")[3]+\":home\":\"product storelocator\"==digitalData.page.pageInfo.pageTrack?digitalData.page.pageInfo.pageName.replace(\/\\s\/gi,\"\"):\"microsite\"==digitalData.page.pageInfo.pageTrack||\n\"product finder\"==digitalData.page.pageInfo.pageTrack?(a=b,\"\"!=digitalData.page.pathIndicator.depth_2\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_2),\"\"!=digitalData.page.pathIndicator.depth_3\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_3),\"\"!=digitalData.page.pathIndicator.depth_4\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_4),\"\"!=digitalData.page.pathIndicator.depth_5\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_5),c(a)):\"flagship pdp\"==digitalData.page.pageInfo.pageTrack\u0026\u0026window.location.href.split(\"\/\")[4]!=\ndigitalData.page.pathIndicator.depth_2?(a=b,\"\"!=digitalData.page.pathIndicator.depth_2\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_2),\"\"!=digitalData.page.pathIndicator.depth_3\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_3),\"\"!=digitalData.page.pathIndicator.depth_4\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_4),\"\"!=digitalData.page.pathIndicator.depth_5\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_5),\"\"!=window.location.href.split(\"\/\")[6]\u0026\u0026void 0!=window.location.href.split(\"\/\")[6]\u0026\u0026\"?\"!=\nwindow.location.href.split(\"\/\")[6].charAt(0)\u0026\u0026\"#\"!=window.location.href.split(\"\/\")[6].charAt(0)\u0026\u0026(a+=\":\"+window.location.href.split(\"\/\")[6]),\"\"!=window.location.href.split(\"\/\")[7]\u0026\u0026void 0!=window.location.href.split(\"\/\")[7]\u0026\u0026\"?\"!=window.location.href.split(\"\/\")[7].charAt(0)\u0026\u0026\"#\"!=window.location.href.split(\"\/\")[7].charAt(0)\u0026\u0026(a+=\":\"+window.location.href.split(\"\/\")[7]),c(a.toLowerCase())):\"business marketing pdp\"==digitalData.page.pageInfo.pageTrack\u0026\u0026digitalData.product.pvi_type_name?(a=b,\"\"!=digitalData.page.pathIndicator.depth_2\u0026\u0026\n(a+=\":\"+digitalData.page.pathIndicator.depth_2),\"\"!=digitalData.page.pathIndicator.depth_3\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_3),\"\"!=digitalData.page.pathIndicator.depth_4\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_4),\"\"!=digitalData.page.pathIndicator.depth_5\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_5),\"\"!=digitalData.page.pathIndicator.depth_6\u0026\u0026(a+=\":\"+digitalData.page.pathIndicator.depth_6),\"\"!=window.location.href.split(\"\/\")[7]\u0026\u0026void 0!=window.location.href.split(\"\/\")[7]\u0026\u0026\"?\"!=\nwindow.location.href.split(\"\/\")[7].charAt(0)\u0026\u0026\"#\"!=window.location.href.split(\"\/\")[7].charAt(0)\u0026\u0026(a+=\":\"+window.location.href.split(\"\/\")[7]),c(a)):\"vd marketing page\"==digitalData.page.pageInfo.pageTrack\u0026\u0026\"\"!=window.location.href.split(\"\/\")[6]\u0026\u0026void 0!=window.location.href.split(\"\/\")[6]\u0026\u0026window.location.href.split(\"\/\")[6]!=digitalData.page.pathIndicator.depth_4\u0026\u0026\"?\"!=window.location.href.split(\"\/\")[6].charAt(0)\u0026\u0026\"#\"!=window.location.href.split(\"\/\")[6].charAt(0)?digitalData.page.pageInfo.pageName+\n\":\"+window.location.href.split(\"\/\")[6]:c(digitalData.page.pageInfo.pageName)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").attr(\"data-omni\"))return $(",["escape",["macro",2],8,16],").attr(\"data-omni\");if(null==$(",["escape",["macro",2],8,16],").attr(\"data-omni\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\"))return $(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\");if(null==$(",["escape",["macro",2],8,16],").attr(\"data-omni\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"data-omni\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"data-omni\");if(null==$(",["escape",["macro",2],8,16],").attr(\"data-omni\")\u0026\u0026\n$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"data-omni\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"data-omni\");if(null==$(",["escape",["macro",2],8,16],").attr(\"data-omni\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().parent().attr(\"data-omni\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().parent().parent().attr(\"data-omni\");if(null==$(",["escape",["macro",2],8,16],").attr(\"data-omni\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().parent().parent().attr(\"data-omni\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().parent().parent().parent().attr(\"data-omni\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-utility js-ico-search\"))var a=\"search\";else $(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-utility js-empty-cart\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-utility js-cart\")?a=\"cart\":$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-imagepromo-figure\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-imagepromo-cta\")?(a=$(",["escape",["macro",2],8,16],").closest(\"div.gb-gnb__drop-desktop\").prev().attr(\"data-omni\"),a=\"banner:\"+a):a=$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"s-member-wrap\")?\n",["escape",["macro",2],8,16],".getAttribute(\"data-omni\"):$(",["escape",["macro",2],8,16],").hasClass(\"s-ico-login\")||$(",["escape",["macro",2],8,16],").hasClass(\"s-ico-logout\")?\"login\":",["escape",["macro",2],8,16],".getAttribute(\"data-omni\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").hasClass(\"gb-footer-2019__item-link\")?$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"data-omni\"):$(",["escape",["macro",2],8,16],").parent().hasClass(\"gb-footer__item\")?$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase():\"gb-footer-2019__info-local\"==$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\")?$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"data-omni\").toLowerCase():\"gb-footer-2019__item-headline\"==$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\")?$(",["escape",["macro",2],8,16],").closest(\"div\").siblings().children().children().children().attr(\"data-omni\").split(\"_\")[0].toLowerCase():\n\"gb-footer-2019__bottom-list\"==$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\")?$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"_\")[1].toLowerCase():\"gb-footer-2019__language-link\"==$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"class\")||\"gb-footer-2019__select-link\"==$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"class\")?\"locallist\":$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"gb-footer-2019__sns-item\")||$(",["escape",["macro",2],8,16],").parent().parent().parent().hasClass(\"gb-footer-2019__sns-item\")?\n$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"data-omni\").toLowerCase():\"\";return-1!=a.indexOf(\"footer:\")?a.split(\":\")[1]:a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").closest(\"div\");return a.hasClass(\"gb-gnb__search-history\")?$(",["escape",["macro",2],8,16],").text():\"bottom search:\"+$(",["escape",["macro",2],8,16],").text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").closest(\"div\");if(a.hasClass(\"gb-gnb__search-product\"))return a=$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"data-omni\").split(\"|\"),\"STRONG\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")?(a=a[0].replace(\"image\/text\",\"text\"),a=a.split(\":\")[1]):(a=a[0].replace(\"image\/text\",\"image\"),a=a.split(\":\")[1]),a;if(a.hasClass(\"ho-g-search-bar__product\"))return a=$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"data-omni\").split(\"|\"),a=\"STRONG\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")?\na[0].replace(\"image\/text\",\"text\"):a[0].replace(\"image\/text\",\"image\"),a=\"bottom search:\"+a.split(\":\")[2];if($(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"gb-gnb__search-suggest-list-select\")||$(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"gb-gnb__search-suggest-list-category\"))return $(",["escape",["macro",2],8,16],").text();if($(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"ho-g-search-bar__suggest-list-select\")||$(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"ho-g-search-bar__suggest-list-category\"))return\"bottom search:\"+\n$(",["escape",["macro",2],8,16],").text();if($(",["escape",["macro",2],8,16],").hasClass(\"ho-g-search-bar__suggest-list-title\"))return $(",["escape",["macro",2],8,16],").attr(\"data-omni\");a.hasClass(\"ho-g-search-bar__product-links\")||$(",["escape",["macro",2],8,16],").hasClass(\"ho-g-search-bar__product-rate-nodata\")?(a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")[0],a=\"bottom search:\"+a.split(\":\")[2]):(a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")[0],a=a.split(\":\")[1]);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"gb-gnb__search-suggest-list-category\")||-1!=$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\").indexOf(\"gb-gnb__search-product\")||$(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"ho-g-search-bar__suggest-list-category\")||-1!=$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\").indexOf(\"ho-g-search-bar__product\")?\"recommended search_product\":$(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"gb-gnb__search-suggest-list-select\")||\n$(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"ho-g-search-bar__suggest-list-select\")?\"recommended search_keyword\":\"recommended search_shop\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0\u003C$(\"#no_result_view \\x3e\").length?\"Search Result_no\":\"Search Result_yes\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"ico_grid\")||$(",["escape",["macro",2],8,16],").hasClass(\"ico_list\"))return\"view by\";if($(",["escape",["macro",2],8,16],").parent().hasClass(\"category__option-lst\"))return\"filter\";if($(",["escape",["macro",2],8,16],").hasClass(\"view-all\"))return\"view more\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(",["escape",["macro",2],8,16],").attr(\"nm\").toLowerCase()+\"_\"+$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"ico_grid\"))return\"grid\";if($(",["escape",["macro",2],8,16],").hasClass(\"ico_list\"))return\"list\";if($(",["escape",["macro",2],8,16],").hasClass(\"view-all\"))return $(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"SPAN\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")){var a=$(",["escape",["macro",2],8,16],").closest(\"button\");a=a.attr(\"onclick\").split(\"'\");a=a[9].toLowerCase()}else a=$(",["escape",["macro",2],8,16],").attr(\"onclick\").split(\"'\"),a=a[9].toLowerCase();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"result-pagination__pages\")?$(",["escape",["macro",2],8,16],").text():\"arrow\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").closest(\".result--banner\").find(\".banner-title\");return a.text()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(void 0==$(",["escape",["macro",2],8,16],").closest(\"div.result-group\").find(\"div.group-header\").attr(\"data-omni\")\u0026\u0026\"detailPageLink\"!=$(",["escape",["macro",2],8,16],").attr(\"name\")){if(\"A\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\"))return $(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")[0];if(\"IMG\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\"))return $(",["escape",["macro",2],8,16],").closest(\"a.product-img__link\").attr(\"data-omni\").split(\"|\")[0];if($(",["escape",["macro",2],8,16],").hasClass(\"btn-ico-zoom\"))return $(",["escape",["macro",2],8,16],").closest(\"li.search-result--product\").find(\".product-img__link\").attr(\"data-omni\").split(\"|\")[0]}else{if(\"detailPageLink\"==\n$(",["escape",["macro",2],8,16],").attr(\"name\")){var a=$(",["escape",["macro",2],8,16],").closest(\"div.product-details__title\").attr(\"data-omni\").split(\"|\")[0];return a}return $(",["escape",["macro",2],8,16],").closest(\"div.result-group\").find(\"div.group-header\").attr(\"data-omni\")}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"product-card__img-view-item\")){var a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\");if(null==a)return a=$(",["escape",["macro",2],8,16],").closest(\"li\").find(\".product-card__cta-btns a\").attr(\"data-omni\").toLowerCase().split(\"|\"),a[0];a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").toLowerCase().split(\"|\");return a[2]}if($(",["escape",["macro",2],8,16],").parent().parent().parent().hasClass(\"product-card__prd-info-title-wrap\")){a=$(",["escape",["macro",2],8,16],").parent().parent().attr(\"data-omni\");\nif(null==a)return a=$(",["escape",["macro",2],8,16],").closest(\"li\").find(\".product-card__cta-btns a\").attr(\"data-omni\").toLowerCase().split(\"|\"),a[0];a=$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().siblings(\".product-card__img\").children().children().children(\"a\").attr(\"data-omni\").toLowerCase().split(\"|\");return a[2]}if($(",["escape",["macro",2],8,16],").parent().hasClass(\"js-cta-stock\")||$(",["escape",["macro",2],8,16],").hasClass(\"js-cta-stock\"))return a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").toLowerCase().split(\"|\"),\na[0];if(\"getStockAlertSubmit\"==$(",["escape",["macro",2],8,16],").attr(\"id\"))return a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase().split(\"|\"),a[1];if($(",["escape",["macro",2],8,16],").hasClass(\"js-buy-now\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"js-buy-now\"))return a=(a=$(",["escape",["macro",2],8,16],").hasClass(\"js-buy-now\"))?$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase().split(\"|\"):$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").toLowerCase().split(\"|\"),a[0];if($(",["escape",["macro",2],8,16],").hasClass(\"s-btn-encased\")||\n$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-encased\"))return a=(a=$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-encased\"))?$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase().split(\"|\"):$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").toLowerCase().split(\"|\"),a[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").text().toLowerCase();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=$(",["escape",["macro",2],8,16],").prop(\"id\"),a=\"\";if(\"s-tab-1\"==b)a=\"buy online\";else if(\"s-tab-2\"==b)a=\"buy in-store\";else if(\"onlineStoreList\"==$(",["escape",["macro",2],8,16],").closest(\"div\").prop(\"id\"))a=$(",["escape",["macro",2],8,16],").attr(\"onclick\"),a=a.substring(a.indexOf(\",'\")+2,a.indexOf(\"')\")),a=\"buy online:\"+a.toLowerCase();else if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-btn-location\"))a=\"store locator\";else if($(",["escape",["macro",2],8,16],").hasClass(\"s-shop-btn-location\"))a=\"where to buy\";\nelse if(-1!=$(",["escape",["macro",2],8,16],").prop(\"class\").indexOf(\"js-cta-buy\")||\"anchorBuyNow\"==b||\"anchorBuyNow\"==$(",["escape",["macro",2],8,16],").parent().prop(\"id\")||-1!=$(",["escape",["macro",2],8,16],").parent().prop(\"class\").indexOf(\"js-cta-buy\"))a=$(",["escape",["macro",2],8,16],").attr(\"data-cta-type\")||$(",["escape",["macro",2],8,16],").parent().attr(\"data-cta-type\")?\"buynow\"==$(",["escape",["macro",2],8,16],").attr(\"data-cta-type\")||\"buynow\"==$(",["escape",["macro",2],8,16],").parent().attr(\"data-cta-type\")?\"buy now\":\"where to buy\":$(",["escape",["macro",2],8,16],").hasClass(\"js-cta-stock\")||\n$(",["escape",["macro",2],8,16],").parent().hasClass(\"js-cta-stock\")?\"stock alert\":\"where to buy\";else if(\"anchorWhereToBuy\"==b||\"anchorWhereToBuy\"==$(",["escape",["macro",2],8,16],").parent().prop(\"id\"))a=\"where to buy\";else if($(",["escape",["macro",2],8,16],").hasClass(\"product-details__cta-text\"))a=\"where to buy\";else if($(",["escape",["macro",2],8,16],").parents(\"ul\").hasClass(\"navbar-nav\")||$(",["escape",["macro",2],8,16],").hasClass(\"buy-online\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"buy-online\")||$(",["escape",["macro",2],8,16],").hasClass(\"pull-right\")){if(b=\n$(",["escape",["macro",2],8,16],").attr(\"data-omni\"))a=b.split(\"|\"),a=a[0]}else $(",["escape",["macro",2],8,16],").hasClass(\"btn-search-nav\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"btn-search-nav\")||\"tab\"==$(",["escape",["macro",2],8,16],").attr(\"data-toggle\")||$(",["escape",["macro",2],8,16],").hasClass(\"sort_nearest\")||$(",["escape",["macro",2],8,16],").hasClass(\"distance_option\")?a=\"buy in store\":\"getStockAlertSubmit\"==$(",["escape",["macro",2],8,16],").prop(\"id\")?a=\"stock alert\":(a=$(\"#isSimplePDP\").val(),\"Y\"==a?(a=$(\"#pAvailability\").val(),\na=\"undefined\"!=a?\"BACKORDERED\"==a.toUpperCase()||\"INSTOCK\"==a.toUpperCase()?\"buy now\":\"where to buy\":\"where to buy\"):a=\"buy now\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=$(",["escape",["macro",2],8,16],").prop(\"id\"),d=_satellite.getVar(\"Page Track\"),a=\"\",b=_satellite.getVar(\"Product Model Name\");if(\"\"!=b){var e=b.split(\",\");b=1\u003Ce.length?$(\"#current_model_name\").val().toUpperCase():b.toUpperCase()}if(\"s-tab-1\"==c)\"\"!=b\u0026\u0026(a=b);else if(\"s-tab-2\"==c)\"\"!=b\u0026\u0026(a=b);else if(\"onlineStoreList\"==$(",["escape",["macro",2],8,16],").closest(\"div\").prop(\"id\"))\"\"!=b\u0026\u0026(a=b);else if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-btn-location\"))\"\"!=b\u0026\u0026(a=b);else if(-1!=$(",["escape",["macro",2],8,16],").prop(\"class\").indexOf(\"js-cta-buy\"))\"product search\"==\nd||\"product finder\"==d||\"product offer\"==d||\"my account\"==d?(c=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"),a=c[0]):\"\"!=b\u0026\u0026(a=b);else if(\"SPAN\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")\u0026\u0026$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"other-shops-button\"))c=$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"data-omni\").split(\"|\"),b=c[1].replace(\/;\/g,\"\"),a=b.toLowerCase();else if($(",["escape",["macro",2],8,16],").hasClass(\"cci-trigger-overlay\"))c=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"),\nb=c[0].replace(\/;\/g,\"\"),a=b.toLowerCase();else if(\"microsite_buyAction\"==$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"data-omni-type\")||$(",["escape",["macro",2],8,16],").hasClass(\"buy-online\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"buy-online\")||$(",["escape",["macro",2],8,16],").hasClass(\"pull-right\")||$(",["escape",["macro",2],8,16],").hasClass(\"nav-track\")){if(c=$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"data-omni\"))\"localTabs\"==$(",["escape",["macro",2],8,16],").parents(\"ul\").prop(\"id\")?a=$(",["escape",["macro",2],8,16],").attr(\"href\").replace(\"#\",\n\"\"):(a=c.split(\"|\"),a=a[1].replace(\";\",\"\"))}else if($(",["escape",["macro",2],8,16],").hasClass(\"btn-search-nav\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"btn-search-nav\"))a=\"search\";else if(\"tab\"==$(",["escape",["macro",2],8,16],").attr(\"data-toggle\")){if(c=$(",["escape",["macro",2],8,16],").attr(\"data-omni\"))a=c.split(\"|\"),a=a[0]}else if($(",["escape",["macro",2],8,16],").hasClass(\"sort_nearest\")||$(",["escape",["macro",2],8,16],").hasClass(\"distance_option\"))$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?(a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"),\nc=$(",["escape",["macro",2],8,16],").parents(\"div.tab-pane\").prop(\"id\"),a=\"locations\"==c?\"locations_\"+a[0].replace(\":\",\"_\"):a[0].replace(\":\",\"_\").replace(\"kilometrow\",\"kilometer\")):a=\"locations\"==$(",["escape",["macro",2],8,16],").parents(\"div.tab-pane\").prop(\"id\")?$(",["escape",["macro",2],8,16],").parents(\"div.tab-pane\").prop(\"id\")+\"_\"+$(",["escape",["macro",2],8,16],").val():$(",["escape",["macro",2],8,16],").parents(\"div.tab-pane\").prop(\"id\")+\"_\"+$(",["escape",["macro",2],8,16],").siblings(\"label\").text();else if($(",["escape",["macro",2],8,16],").attr(\"data-tab\")){if(\"local-stores\"==\n$(",["escape",["macro",2],8,16],").attr(\"data-tab\")||\"online-shops\"==$(",["escape",["macro",2],8,16],").attr(\"data-tab\"))a=$(\"#product-header-item-code\").text()}else a=b;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"ma-g-visual-story-carousel__content-discover-full\")\u0026\u0026!$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().hasClass(\"slick-active\")){for(var a=$(",["escape",["macro",2],8,16],").closest(\"section\").find(\"a.ma-g-visual-story-carousel__content-img-wrap\"),g=a.length,c=[],b=0;b\u003Cg;b++){var d=a.eq(b).parent().parent().parent().attr(\"data-slick-index\"),f=0;if(0\u003C=d){if(1\u003C=b)for(d=0;d\u003Cc.length;d++)c[d]===a.eq(b).children(\"img\").attr(\"src\")\u0026\u0026f++;0\u003E=f\u0026\u0026c.push(a.eq(b).children(\"img\").attr(\"src\"))}}var e;\nfor(b=0;b\u003Cc.length;b++)$(",["escape",["macro",2],8,16],").parent().children(\"img\").attr(\"src\")===c[b]\u0026\u0026(e=b+1);return\"explore rolling:click_\"+e}a=digitalData.page.pageInfo.siteCode;\"sec\"==a?(a=$(",["escape",["macro",2],8,16],").parents(\"div.par-sec \\x3e div.section\"),e=$(\"div.par-sec \\x3e div.section\").index(a)+1):(a=$(",["escape",["macro",2],8,16],").parents(\"div.par \\x3e div.section\"),e=$(\"div.par \\x3e div.section\").index(a)+1);return a=\"cluster\"+e})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase().split(\":\");return a=a[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").toLowerCase().split(\":\");return a=a[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=digitalData.page.pathIndicator.depth_3;var c=digitalData.page.pathIndicator.depth_4,a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase().split(\":\");return b=\"\"==c?$(",["escape",["macro",2],8,16],").hasClass(\"js-video\")?b+\":\"+a[1]+\":\"+a[2]:a[1]+\":\"+a[2]:$(",["escape",["macro",2],8,16],").hasClass(\"js-video\")?c+\":\"+a[1]+\":\"+a[2]:a[1]+\":\"+a[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").closest(\"div\");return a=a.hasClass(\"filter-sort__sub-wrap\")||a.hasClass(\"filter-sort__filter-select-mo\")?\"sort\":$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter-list\")||$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter-grid\")?\"view by\":\"filter\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=$(",["escape",["macro",2],8,16],").closest(\"div\");if(b.hasClass(\"filter-sort__checkbox\")){b=$(",["escape",["macro",2],8,16],").closest(\"div.filter-sort__item\").prev().attr(\"data-omni\").toLowerCase();var a=$(",["escape",["macro",2],8,16],").closest(\"div.filter-sort__checkbox\").attr(\"data-omni\").toLowerCase();a=b+\"_\"+a}else b.hasClass(\"filter-sort__reset-button\")?a=\"reset\":b.hasClass(\"filter-sort__list\")?(a=b.children().attr(\"data-omni\").toLowerCase(),a=b.hasClass(\"active\")?a+\"_close\":a+\"_open\"):b.hasClass(\"filter-sort__sub-wrap\")?\na=$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"data-omni\"):b.hasClass(\"filter-sort__filter-select-mo\")?a=$(",["escape",["macro",2],8,16],").val():b.hasClass(\"filter-sort__head\")?a=b.children(\"button.filter-sort__head-title\").hasClass(\"active\")?\"close\":\"open\":b.hasClass(\"filter-sort__type\")?$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter-list\")?a=\"list\":$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter-grid\")\u0026\u0026(a=\"grid\"):b.hasClass(\"filter-sort__results-button\")?$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-result\")?\na=\"veiw result\":$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-white\")\u0026\u0026(a=\"cancel\"):a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=$(",["escape",["macro",2],8,16],").hasClass(\"picker-option\")||$(",["escape",["macro",2],8,16],").hasClass(\"colorpicker-color\")?\"Product grid_option\":\"Product grid_product\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=navigator.userAgent.toLowerCase();$(",["escape",["macro",2],8,16],").hasClass(\"picker-option\")||$(",["escape",["macro",2],8,16],").hasClass(\"colorpicker-color\")?(\"Netscape\"==navigator.appName\u0026\u0026-1!=navigator.userAgent.search(\"Trident\")||-1!=b.indexOf(\"msie\")?(b=$(\".product-card__js-picker\").eq(0).children(),console.log(\"IE\")):(b=$(",["escape",["macro",2],8,16],").closest(\"ul\"),console.log(\"Chrome\")),b.hasClass(\"color\")?a=\"color\":b.hasClass(\"tv-size\")?a=\"size\":b.hasClass(\"Capacity\")||b.hasClass(\"capacity\")?a=\n\"capacity\":b.hasClass(\"memory\")\u0026\u0026(a=\"memory\")):(a=$(",["escape",["macro",2],8,16],").closest(\"div.product-card\").attr(\"data-omni\").split(\"|\"),a=a[0]);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;if($(",["escape",["macro",2],8,16],").hasClass(\"product-details__link\"))$(",["escape",["macro",2],8,16],").find(\"img\").hasClass(\"product-details__images\")\u0026\u0026(a=\"image\");else if($(",["escape",["macro",2],8,16],").hasClass(\"product-details__thumb-btn\")||$(",["escape",["macro",2],8,16],").hasClass(\"product-details__thumb-arrow\"))a=\"image arrow\";else if($(",["escape",["macro",2],8,16],").hasClass(\"s-btn-zoom\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-zoom\"))void 0!=$(",["escape",["macro",2],8,16],").attr(\"zoomType\")||\"in\"==$(",["escape",["macro",2],8,16],").attr(\"zoomType\")?\na=\"out\"==$(",["escape",["macro",2],8,16],").attr(\"zoomType\")?\"zoom in\":\"zoom out\":void 0!=$(",["escape",["macro",2],8,16],").parent().attr(\"zoomType\")||\"in\"==$(",["escape",["macro",2],8,16],").parent().attr(\"zoomType\")?a=\"out\"==$(",["escape",["macro",2],8,16],").parent().attr(\"zoomType\")?\"zoom in\":\"zoom out\":void 0==$(",["escape",["macro",2],8,16],").attr(\"zoomType\")\u0026\u0026(a=\"zoom in\");else if($(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-up\")||$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-up\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-down\")||\n$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-down\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-left\")||$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-left\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"s-btn-right\")||$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-right\"))a=\"zoom arrow\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){0\u003E$(",["escape",["macro",2],8,16],").attr(\"class\").indexOf(\"product-details-gallerylist\")?$(",["escape",["macro",2],8,16],").parent().attr(\"aria-selected\")?dataOmni=$(",["escape",["macro",2],8,16],").children(\"span.product-details__value-name\").attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").parents(\"li.product-details__item\").attr(\"aria-selected\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").parent().siblings(\"span.product-details__value-name\").attr(\"data-omni\").split(\"|\")):dataOmni=$(\".product-details__toggler-edit\").parent(\"div[data-optioncode\\x3d'OPT-001']\").siblings(\"div.product-details__value\").children().children(\"li[aria-selected\\x3d'true']\").children().children(\"span.product-details__value-name\").attr(\"data-omni\").split(\"|\");\nreturn dataOmni[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;$(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"product-details__share-ico\")?a=$(",["escape",["macro",2],8,16],").parent().attr(\"class\").replace(\"product-details__item s-ico-\",\"\"):$(",["escape",["macro",2],8,16],").closest(\"ul\").hasClass(\"sc-page-title__share-list\")?a=$(",["escape",["macro",2],8,16],").attr(\"class\").replace(\"sc-page-title__share-link s-ico-\",\"\"):$(",["escape",["macro",2],8,16],").closest(\"li\").hasClass(\"standard-anchor-navi__share-item\")\u0026\u0026(a=$(",["escape",["macro",2],8,16],").parent().attr(\"class\").replace(\"standard-anchor-navi__share-item s-ico-\",\n\"\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(",["escape",["macro",2],8,16],").closest(\"li\").children().attr(\"data-omni\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;$(",["escape",["macro",2],8,16],").hasClass(\"s-ico-down\")?a=\"see all\":$(",["escape",["macro",2],8,16],").hasClass(\"s-ico-up\")\u0026\u0026(a=\"hide all\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").parent().hasClass(\"product-support__resource-section-btn\")){var a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\");a=\"go to support pdp\"==a?\"go to support\":a}else $(",["escape",["macro",2],8,16],").parent().hasClass(\"product-support__faq-inner\")?(a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\"),a=\"faq:\"+a):$(",["escape",["macro",2],8,16],").parent().hasClass(\"product-support__more\")\u0026\u0026(a=\"see all support\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"slick-arrow\")){$(",["escape",["macro",2],8,16],").hasClass(\"slick-prev\");var a=\"arrow\"}else if($(",["escape",["macro",2],8,16],").hasClass(\"bv_main_container\")||$(",["escape",["macro",2],8,16],").parents().hasClass(\"bv_main_container\"))a=\"read\";else if($(",["escape",["macro",2],8,16],").hasClass(\"picker-option\")||$(",["escape",["macro",2],8,16],").hasClass(\"colorpicker-color\")){var b=$(",["escape",["macro",2],8,16],").closest(\"ul\");b.hasClass(\"product-card__colorpicker\")?a=\"option:color\":b.hasClass(\"size\")?\na=\"option:size\":b.hasClass(\"Capacity\")?a=\"option:capacity\":b.hasClass(\"device-memory\")?a=\"option:memory\":b.hasClass(\"carrier\")\u0026\u0026(a=\"option:carrier\")}else $(",["escape",["macro",2],8,16],").parent().hasClass(\"product-card__img-link\")?a=\"image\":$(",["escape",["macro",2],8,16],").hasClass(\"product-card__name\")?a=\"text\":$(",["escape",["macro",2],8,16],").hasClass(\"s-btn-encased\")\u0026\u0026(a=\"button\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").parent().parent().attr(\"data-omni\").split(\"|\");return a=a[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").parent().hasClass(\"related-products-img\")){var a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\");a=a[0]}else $(",["escape",["macro",2],8,16],").hasClass(\"related-products-info__title\")\u0026\u0026(a=$(",["escape",["macro",2],8,16],").parent().parent().children().attr(\"data-omni\").split(\"|\"),a=a[0]);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter\"))var a=\"Filter\";else if(\"filter\"==$(",["escape",["macro",2],8,16],").prop(\"id\"))a=\"Filter\";else if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-filter-select-sub-wrap\"))a=\"Sort\";else if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-img-wrap\")||$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-info-wrap\"))a=\"Offer detail\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"s-btn-filter\")){var a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\");a=\"archive\"==a?\"current\":\"archive\"}else\"filter\"==$(",["escape",["macro",2],8,16],").prop(\"id\")?(a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\"),a=\"archive\"==a?\"current\":\"archive\"):$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-filter-select-sub-wrap\")?a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").toLowerCase():$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-img-wrap\")?a=$(",["escape",["macro",2],8,16],").attr(\"title\"):\n$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"s-info-wrap\")\u0026\u0026(a=$(",["escape",["macro",2],8,16],").parent().parent().parent().children().children().children().attr(\"title\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"slick-dots\"))var a=\"rolling\";else if($(",["escape",["macro",2],8,16],").hasClass(\"slick-arrow\"))a=\"arrow\";else if($(",["escape",["macro",2],8,16],").hasClass(\"s-btn-encased\")){a=$(",["escape",["macro",2],8,16],").parents(\".slick-slide\").attr(\"data-slick-index\");a++;var b=$(",["escape",["macro",2],8,16],").attr(\"data-omni\");if(void 0==b||\"\"==b)b=\"none\";a=\"kv\"+a+\":\"+b+\":view details\"}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pathIndicator.depth_2;if(\"\"!=a){if(\"store locator\"==a)a=a.replace(\/\\s\/gi,\"\");else if(-1\u003Ca.indexOf(\"#\")\u0026\u0026\"store locator\"!=a)return digitalData.page.pathIndicator.depth_2=\"\";return digitalData.page.pageInfo.siteCode+\":\"+a}return digitalData.page.pageInfo.siteCode})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"\"!=digitalData.page.pathIndicator.depth_3){var a=digitalData.page.pathIndicator.depth_3;return-1\u003Ca.indexOf(\"#\")?digitalData.page.pathIndicator.depth_3=\"\":digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2+\":\"+digitalData.page.pathIndicator.depth_3}return digitalData.page.pathIndicator.depth_2?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2:digitalData.page.pageInfo.siteCode})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pageInfo.siteCode,b=$(\"#hiddenModelCode\").val(),c=$(\"#hiddenIaUrlNamePath\").val().replace(\/\\|\/g,\":\");return a=a+\":support:\"+c+\":\"+b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pathIndicator.depth_4,b=digitalData.page.pageInfo.pageTrack;if(\"\"!=a)if(\"cid\"==a.substring(0,3)\u0026\u0026\"product finder\"==b)digitalData.page.pathIndicator.depth_4=\"all\";else return-1\u003Ca.indexOf(\"#\")\u0026\u0026\"product finder\"!=b?digitalData.page.pathIndicator.depth_4=\"\":digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2+\":\"+digitalData.page.pathIndicator.depth_3+\":\"+digitalData.page.pathIndicator.depth_4;return digitalData.page.pathIndicator.depth_3?digitalData.page.pageInfo.siteCode+\n\":\"+digitalData.page.pathIndicator.depth_2+\":\"+digitalData.page.pathIndicator.depth_3:digitalData.page.pathIndicator.depth_2?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2:digitalData.page.pageInfo.siteCode})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"\"!=digitalData.page.pathIndicator.depth_5){var a=digitalData.page.pathIndicator.depth_5;return-1\u003Ca.indexOf(\"#\")?digitalData.page.pathIndicator.depth_5=\"\":digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2+\":\"+digitalData.page.pathIndicator.depth_3+\":\"+digitalData.page.pathIndicator.depth_4+\":\"+digitalData.page.pathIndicator.depth_5}return digitalData.page.pathIndicator.depth_4?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2+\n\":\"+digitalData.page.pathIndicator.depth_3+\":\"+digitalData.page.pathIndicator.depth_4:digitalData.page.pathIndicator.depth_3?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2+\":\"+digitalData.page.pathIndicator.depth_3:digitalData.page.pathIndicator.depth_2?digitalData.page.pageInfo.siteCode+\":\"+digitalData.page.pathIndicator.depth_2:digitalData.page.pageInfo.siteCode})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",51],8,16],".split(\".\");return a[2]+\".\"+a[3]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\"#shop-storeYN\").val();return\"Y\"==a?\"sale\":\"N\"==a?\"no sale\":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=digitalData.page.pageInfo.siteSection,c=digitalData.page.pageInfo.siteCode,a=$.trim(digitalData.page.pageInfo.pageTrack);if(\"flagship pdp\"==a||\"product detail\"==a||\"vd marketing page\"==a||\"da marketing page\"==a||\"flagship configurator\"==a||\"buying configurator\"==a||\"im marketing page\"==a)b=c+\":consumer\";if(-1!=a.indexOf(\"blog\"))b=c+\":blog\";else if(-1!=a.indexOf(\"brand hub\")||-1!=a.indexOf(\"brandhub\"))b=c+\":explore\";\"product storelocator\"==a?b=c+\":storelocator\":\"microsite\"==a\u0026\u0026(b=\nc+\":campaign\");return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=$(\"#useLogin\").val(),a=_satellite.readCookie(\"xsdcxyn\");return\"N\"==b?\"logged out\":null!=a\u0026\u0026\"undefined\"!=a\u0026\u0026\"YG\"==a?\"logged in\":\"logged out\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.product.displayName;a=a.replace(\/\u0026amp;\/gi,\"\\x26\");a=a.replace(\/\u0026#37;\/gi,\"%\");a=a.replace(\/\u0026#39;\/gi,\"'\");a=a.replace(\/\u0026#40;\/gi,\"(\");a=a.replace(\/\u0026#41;\/gi,\")\");a=a.replace(\/\u0026#42;\/gi,\"*\");a=a.replace(\/\u0026#61;\/gi,\"\\x3d\");a=a.replace(\/\u0026#34;\/gi,'\"');a=a.replace(\/\u0026lt;\/gi,\"\\x3c\");return a=a.replace(\/\u0026gt;\/gi,\"\\x3e\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=_satellite.getVar(\"GUID\");if(void 0!=a\u0026\u0026\"\"!=a)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").attr(\"ga-ac\"))return $(",["escape",["macro",2],8,16],").attr(\"ga-ac\");if(null==$(",["escape",["macro",2],8,16],").attr(\"ga-ac\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().attr(\"ga-ac\"))return $(",["escape",["macro",2],8,16],").parent().attr(\"ga-ac\");if(null==$(",["escape",["macro",2],8,16],").parent().attr(\"ga-ac\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ac\"))return $(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ac\");if(null==$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-ac\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ac\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ac\");\nif(null==$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-ac\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-ac\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-ac\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").attr(\"ga-la\"))return $(",["escape",["macro",2],8,16],").attr(\"ga-la\");if(null==$(",["escape",["macro",2],8,16],").attr(\"ga-la\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().attr(\"ga-la\"))return $(",["escape",["macro",2],8,16],").parent().attr(\"ga-la\");if(null==$(",["escape",["macro",2],8,16],").parent().attr(\"ga-la\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-la\"))return $(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-la\");if(null==$(",["escape",["macro",2],8,16],").parent().parent().attr(\"ga-la\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-la\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-la\");\nif(null==$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"ga-la\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-la\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().parent().attr(\"ga-la\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(\"#hiddenModelName\").val();return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=_satellite.getVar(\"Page URL\"),a=$(\"#hiddenModelCode\").val();-1!=b.indexOf(\"\/support\/generic\")\u0026\u0026(a=$(\"#hiddenGenericCode\").val());return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"#hiddenIaUrlNamePath\").val().split(\"|\")[2]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"#hiddenIaUrlNamePath\").val().split(\"|\")[0]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"control\"))return\"pagenation\";if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"content\"))return\"promotion banner\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").closest(\"div.control\").hasClass(\"prev\"))return\"galaxy s8:previous\";if($(",["escape",["macro",2],8,16],").closest(\"div.control\").hasClass(\"next\"))return\"galaxy s8:next\";if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"content\"))return\"galaxy s8:financing\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,c=$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\"),b=$(",["escape",["macro",2],8,16],").attr(\"data-omni\");-1!=c.indexOf(\"buyAction\")?a=\"Buy now\":-1!=b.indexOf(\":tab:\")?a=\"sticky menu_click\":-1!=b.indexOf(\":body:section-to:\")\u0026\u0026(a=\"feature\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,d=$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\"),c=$(",["escape",["macro",2],8,16],").attr(\"data-omni\"),b=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\":\");-1!=d.indexOf(\"buyAction\")?a=\"c_btn_pre-type2 order-button buy\"==$(",["escape",["macro",2],8,16],").attr(\"class\")?\"galaxy s8:kv\":\"c_btn_pre-type2 order-button\"==$(",["escape",["macro",2],8,16],").attr(\"class\")?\"galaxy s8:bottom banner\":\"galaxy s8:sticky menu\":-1!=c.indexOf(\":tab:\")?a=\"galaxy s8:\"+b[4]:-1!=c.indexOf(\":body:section-to:\")\u0026\u0026(a=\"galaxy s8:\"+\nb[1]+\":learn more_\"+b[4]);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"galaxy-s8:gallery:image_galaxy s8 plus\"==$(",["escape",["macro",2],8,16],").attr(\"data-omni\"))return\"galaxy s8:tab_galaxy s8 plus\";if(\"galaxy-s8:gallery:image_galaxy s8\"==$(",["escape",["macro",2],8,16],").attr(\"data-omni\"))return\"galaxy s8:tab_galaxy s8\";if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"m_product-color\")||$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"m_ly_thumnail\"))return\"galaxy s8:image\";if($(",["escape",["macro",2],8,16],").parent().hasClass(\"c_paging-type\"))return\"galaxy s8:color\";\nif($(",["escape",["macro",2],8,16],").closest(\"a\").hasClass(\"m_btn_type2-prev\")||$(",["escape",["macro",2],8,16],").closest(\"a\").hasClass(\"m_btn_type2-next\"))return\"galaxy s8:arrow\";if($(",["escape",["macro",2],8,16],").parent().hasClass(\"zoom-area\"))return\"galaxy s8:image zoom\";if($(",["escape",["macro",2],8,16],").hasClass(\"c_btn_close-type1\"))return\"galaxy s8:close\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"omniType\";void 0!=$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\")?a=$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\"):void 0!=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni-type\")\u0026\u0026(a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni-type\"));return-1\u003Ca.indexOf(\"scAdd\")||-1\u003Ca.indexOf(\"cartandshop\")?\"y\":\"n\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pageInfo.pageTrack;return-1!=a.indexOf(\"product family showcase\")||-1!=a.indexOf(\"product category details\")||-1!=a.indexOf(\"product finder\")||-1!=a.indexOf(\"vd marketing page\")?\"y\":\"n\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"gb-gnb__my-layer\")?\"gnb menu\":$(",["escape",["macro",2],8,16],").parent().parent().parent().hasClass(\"gb-gnb__shop-layer\")?\"gnb menu\":$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"s-member-wrap\")\u0026\u0026($(",["escape",["macro",2],8,16],").hasClass(\"loginBtn\")||$(",["escape",["macro",2],8,16],").hasClass(\"logoutBtn\"))?\"gnb menu\":\"gnb\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"gb-gnb__my-layer\")?\"account\":$(",["escape",["macro",2],8,16],").parent().parent().parent().hasClass(\"gb-gnb__shop-layer\")?\"account\":$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"s-member-wrap\")\u0026\u0026($(",["escape",["macro",2],8,16],").hasClass(\"loginBtn\")||$(",["escape",["macro",2],8,16],").hasClass(\"logoutBtn\"))?\"account\":\"gnb\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"addToCart\";return $(",["escape",["macro",2],8,16],").attr(\"data-omni\")?(a=$(",["escape",["macro",2],8,16],").text(),a=$.trim(a)):-1!=$(",["escape",["macro",2],8,16],").prop(\"id\").indexOf(\"viewCart\")?\"view cart\":a})();"]
    },{
      "function":"__j",
      "vtp_name":"digitalData.product.model_name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pageInfo.pageTrack,b=\"\";if(null==a||\"\"==a)a=\"nopage\";if(-1\u003Ca.indexOf(\"flagship\")){$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").closest(\"div.shop-grid-col\").attr(\"data-omni\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").closest(\"div.shop-grid-col\").attr(\"data-omni\").split(\"|\"));\n$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"fc-content__preview-summary-btn\")?dataOmni=$(",["escape",["macro",2],8,16],").closest(\"button\").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):\"promotionAddCart_sh_g_offer_list_bund\"==$(",["escape",["macro",2],8,16],").attr(\"id\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):$(",["escape",["macro",2],8,16],").hasClass(\"account-wishlist__option-add\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"));if(\"microsite_scAddContent\"==\n$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\")||\"microsite_scAddContent\"==$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni-type\"))a=dataOmni[1].split(\";\"),b=a[1];else if(\"microsite_scAdd\"==$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\")||\"microsite_scAdd\"==$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni-type\"))if(a=dataOmni[0].split(\",\"),1\u003Ca.length){b=[];for(var d=0;d\u003Ca.length;d++){var c=a[d].split(\";\");b.push(c[1])}b=b.toString()}else c=dataOmni[0].split(\";\"),b=c[2]?c[1]:dataOmni[0].replace(\/;\/gi,\n\"\");if(null==b||\"\"==b)b=",["escape",["macro",74],8,16],"}else if(-1\u003Ca.indexOf(\"product finder\")){if(0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_stars_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_numReviews_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.reevoomark_badge\").length?dataOmni=$(",["escape",["macro",2],8,16],").parents(\"div.product-card\").attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"):\n$(",["escape",["macro",2],8,16],").parents().attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").parents().attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").parents(\"div.product-card\").attr(\"data-omni\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").parents(\"div.product-card\").attr(\"data-omni\").split(\"|\")),b=dataOmni[0].replace(\/;\/gi,\",\"),$(",["escape",["macro",2],8,16],").parent().hasClass(\"product-card__img-ctrl-item\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"),b=dataOmni[1].replace(\/;\/gi,\",\")),\nnull==b||\"\"==b)b=",["escape",["macro",74],8,16],"}else if(-1\u003Ca.indexOf(\"product search\")){if($(",["escape",["macro",2],8,16],").hasClass(\"picker-color\")||$(",["escape",["macro",2],8,16],").hasClass(\"picker-option\"))return a=$(",["escape",["macro",2],8,16],").closest(\"li\").find(\".product-card__img-view-item a\").attr(\"data-omni\").toLowerCase().split(\"|\"),a[2];if($(",["escape",["macro",2],8,16],").closest(\"a\").hasClass(\"bv_main_container\"))return a=$(",["escape",["macro",2],8,16],").closest(\"li\").find(\".product-card__img-view-item a\").attr(\"data-omni\").toLowerCase().split(\"|\"),\na[2];if($(",["escape",["macro",2],8,16],").parent().hasClass(\"cm-shop-layer__cta\"))return a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase().split(\"|\"),a[1]}else(a=$(\"#currentModelName\").val())?b=digitalData.product.model_name=a:$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?(dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"),b=\"microsite_scAddContent\"==$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\")?dataOmni[1].replace(\/;\/gi,\"\"):dataOmni[0].replace(\/;\/gi,\"\")):$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\")?\n(dataOmni=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\"),b=\"microsite_scAddContent\"==$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni-type\")?dataOmni[1].replace(\/;\/gi,\"\"):dataOmni[0].replace(\/;\/gi,\"\")):b=",["escape",["macro",74],8,16],";return b})();"]
    },{
      "function":"__j",
      "vtp_name":"digitalData.product.model_code"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pageInfo.pageTrack,b=\"\";if(null==a||\"\"==a)a=\"nopage\";if(-1\u003Ca.indexOf(\"flagship\")){if($(",["escape",["macro",2],8,16],").attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").closest(\"div.shop-grid-col\").attr(\"data-omni\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").closest(\"div.shop-grid-col\").attr(\"data-omni\").split(\"|\")),\n$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"fc-content__preview-summary-btn\")?dataOmni=$(",["escape",["macro",2],8,16],").closest(\"button\").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):\"promotionAddCart_sh_g_offer_list_bund\"==$(",["escape",["macro",2],8,16],").attr(\"id\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):$(",["escape",["macro",2],8,16],").hasClass(\"account-wishlist__option-add\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")),b=\"microsite_scAddContent\"==\n$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\")||\"microsite_scAddContent\"==$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni-type\")?dataOmni[2]:dataOmni[1].replace(\/;\/gi,\",\"),null==b||\"\"==b)b=",["escape",["macro",76],8,16],"}else if(-1\u003Ca.indexOf(\"product finder\")){if(0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_stars_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_numReviews_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.reevoomark_badge\").length?dataOmni=\n$(",["escape",["macro",2],8,16],").parents(\"div.product-card\").attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").parents().attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").parents().attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").parents(\"div.product-card\").attr(\"data-omni\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").parents(\"div.product-card\").attr(\"data-omni\").split(\"|\")),b=dataOmni[1].replace(\/;\/gi,\n\",\"),$(",["escape",["macro",2],8,16],").parent().hasClass(\"product-card__img-ctrl-item\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"),b=dataOmni[2].replace(\/;\/gi,\",\")),null==b||\"\"==b)b=",["escape",["macro",76],8,16],"}else if(-1\u003Ca.indexOf(\"product search\")){if($(",["escape",["macro",2],8,16],").hasClass(\"picker-color\")||$(",["escape",["macro",2],8,16],").hasClass(\"picker-option\"))return a=$(",["escape",["macro",2],8,16],").closest(\"li\").find(\".product-card__img-view-item a\").attr(\"data-omni\").toLowerCase().split(\"|\"),a[1];\nif($(",["escape",["macro",2],8,16],").closest(\"a\").hasClass(\"bv_main_container\"))return a=$(",["escape",["macro",2],8,16],").closest(\"li\").find(\".product-card__img-view-item a\").attr(\"data-omni\").toLowerCase().split(\"|\"),a[1];if($(",["escape",["macro",2],8,16],").parent().hasClass(\"cm-shop-layer__cta\"))return a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").toLowerCase().split(\"|\"),a[2]}else(a=$(\"#current_model_code\").val())?b=digitalData.product.model_code=a:$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?(dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").replace(\/;\/gi,\n\"\").split(\"|\"),b=\"microsite_scAddContent\"==$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\")?dataOmni[2].replace(\/;\/gi,\",\"):dataOmni[1].replace(\/;\/gi,\",\")):$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\")?(dataOmni=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\"),b=\"microsite_scAddContent\"==$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni-type\")?dataOmni[2].replace(\/;\/gi,\",\"):dataOmni[1].replace(\/;\/gi,\",\")):b=",["escape",["macro",76],8,16],";return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a,b=$(",["escape",["macro",2],8,16],").closest(\"div\");b.hasClass(\"product-card__img-view-item\")?a=\"product grid_image\":b.hasClass(\"btn-view-more\")?a=\"view more\":$(",["escape",["macro",2],8,16],").parents().hasClass(\"product-card__reevoo-de\")?a=\"review_reevoo\":0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_stars_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_numReviews_component_container\").length||$(",["escape",["macro",2],8,16],").hasClass(\"review-count\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"star-rating__star\")?\na=\"review_bazaar voice\":$(",["escape",["macro",2],8,16],").hasClass(\"js-buy-now\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"js-buy-now\")?a=\"buy now\":b.hasClass(\"product-card__cta-btns\")?a=$(",["escape",["macro",2],8,16],").closest(\"a\").hasClass(\"js-cta-stock\")?\"stock alert\":\"product grid_button\":$(",["escape",["macro",2],8,16],").parents().hasClass(\"product-card__prd-info-title-wrap\")?a=\"product grid_title\":\"getStockAlertSubmit\"==$(",["escape",["macro",2],8,16],").attr(\"id\")?a=\"stock alert\":0\u003C$(",["escape",["macro",2],8,16],").closest(\"p.s-energy-label\").length?\na=\"product fiche\":0\u003C$(",["escape",["macro",2],8,16],").closest(\"li.product-card__img-ctrl-item\").length\u0026\u0026(a=\"product grid_option\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"getStockAlertSubmit\"==$(",["escape",["macro",2],8,16],").attr(\"id\")){var a=\/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\/;var b=$(\"#getStockAlertEmailInput\").val();a=0==a.test(b)?!1:!0}else a=!0;return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",80],8,16],";switch(a){case \"start\":return\"Play\";case \"pause\":return\"Pause\";case \"seek\":return\"Seeking\";case \"progress\":return+",["escape",["macro",81],8,16],"+\"% Watched\";case \"complete\":return\"100% Watched\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\",b=$(",["escape",["macro",2],8,16],").closest(\"div\");if(b.hasClass(\"product-card__img-view-item\"))a=$(",["escape",["macro",2],8,16],").closest(\"div\").parent().parent().parent().attr(\"data-omni\").split(\"|\"),a=a[0].toLowerCase();else if($(",["escape",["macro",2],8,16],").parents().hasClass(\"product-card__prd-info-title-wrap\"))a=$(",["escape",["macro",2],8,16],").closest(\"div\").parent().parent().attr(\"data-omni\").split(\"|\"),a=a[0].toLowerCase();else if(b.hasClass(\"s-btn-more\"))a=\"\";else if($(",["escape",["macro",2],8,16],").parents().hasClass(\"product-card__reevoo-de\"))a=\n\"read\";else if(0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_stars_component_container\").length||0\u003C$(",["escape",["macro",2],8,16],").closest(\"div.bv_numReviews_component_container\").length)a=$(",["escape",["macro",2],8,16],").closest(\"button\").hasClass(\"bv_text\")?\"0\"==$(",["escape",["macro",2],8,16],").parent().children(\"meta\").attr(\"content\")?\"write\":\"read\":-1\u003CString($(",["escape",["macro",2],8,16],").closest(\"button.bv_stars_button_container\").attr(\"aria-label\")).indexOf(\"0.0\")?\"write\":\"0\"==$(",["escape",["macro",2],8,16],").children(\"meta\").attr(\"content\")?\n\"write\":\"read\";else if($(",["escape",["macro",2],8,16],").parent().hasClass(\"js-buy-now\"))a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\")[0];else if($(",["escape",["macro",2],8,16],").hasClass(\"js-buy-now\"))a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")[0];else if(b.hasClass(\"product-card__cta-btns\"))a=$(",["escape",["macro",2],8,16],").hasClass(\"cta-btn__txt\")?$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"),a=a[0];else if(\"getStockAlertSubmit\"==\n$(",["escape",["macro",2],8,16],").attr(\"id\"))a=$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"data-omni\").split(\"|\"),a=a[1];else if($(",["escape",["macro",2],8,16],").parent().hasClass(\"product-card__img-ctrl-item\"))a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\")[0];else if($(",["escape",["macro",2],8,16],").hasClass(\"review-count\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"star-rating__star\"))a=\"read\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"KRW\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").hasClass(\"ma-g-visual-story-carousel__content-discover-full\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().hasClass(\"slick-active\")||$(",["escape",["macro",2],8,16],").hasClass(\"ma-g-visual-story-carousel__content-discover-btn\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().parent().parent().hasClass(\"slick-active\")){if(null==$(",["escape",["macro",2],8,16],").attr(\"data-omni\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\"))return $(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\");\nif(null==$(",["escape",["macro",2],8,16],").attr(\"data-omni\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"data-omni\"))return $(",["escape",["macro",2],8,16],").parent().parent().parent().attr(\"data-omni\")}else return $(",["escape",["macro",2],8,16],").parent().hasClass(\"ma-g-visual-story-carousel__head-title\")?$(",["escape",["macro",2],8,16],").attr(\"data-omni\"):$(",["escape",["macro",2],8,16],").parent().hasClass(\"ma-g-visual-story-carousel__content-img-wrap\")\u0026\u0026$(",["escape",["macro",2],8,16],").hasClass(\"ma-g-visual-story-carousel__content-img\")?\n$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\"):\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slickIndex"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"component"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",86],8,16],",a=",["escape",["macro",87],8,16],",c=digitalData.page.pageInfo.pageTrack;if(\"home\"===c)return-1==a.indexOf(\"arrow\")?a+\" rolling:swipe_\"+b:a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",86],8,16],",a=",["escape",["macro",87],8,16],",b=digitalData.page.pageInfo.pageTrack;return-1!=b.indexOf(\"business\")?(a=\"b2b \"+a,-1==a.indexOf(\"arrow\")?a+\" rolling:index_\"+c:a):\"home\"===b?\"kv\"===a||\"content column\"===a?-1==a.indexOf(\"arrow\")?a+\" rolling:swipe_\"+c:a:\"\":\"product family showcase\"===b?-1==a.indexOf(\"arrow\")?a+\" rolling:swipe_\"+c:a:\"product detail\"==b?\";\"+",["escape",["macro",74],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"home\"==digitalData.page.pageInfo.pageTrack?\"home kv\":$.trim(digitalData.page.pageInfo.pageTrack)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=$(",["escape",["macro",2],8,16],").hasClass(\"ma-g-visual-story-carousel__content-discover-full\")\u0026\u0026$(",["escape",["macro",2],8,16],").parent().parent().parent().parent().hasClass(\"slick-active\")?\"home kv\":$(",["escape",["macro",2],8,16],").hasClass(\"ma-g-visual-story-carousel__content-img\")?\"home kv\":$(",["escape",["macro",2],8,16],").parent().hasClass(\"ma-g-visual-story-carousel__head-title\")?\"home kv\":\"home\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=digitalData.page.pageInfo.pageTrack,b=\"\";\"product detail\"==a?(a=$(\"#isSimplePDP\").val(),b=\"Y\"==a?$(\".product-details-anchor-navi__price-total .pd-anchor-total\").text().replace(\/[^-\\.0-9]\/g,\"\").trim():\"sec\"==digitalData.page.pageInfo.siteCode?$(\".BT_price.del_small\").text().replace(\/[^-\\.0-9]\/g,\"\").trim():$(\".product-anchor-nav__price-sale\").children(\"ins\").text().replace(\/[^-\\.0-9]\/g,\"\").trim()):\"flagship pdp\"==a\u0026\u0026(b=digitalData.product.model_price);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"product detail\"==digitalData.page.pageInfo.pageTrack){var a=$(\"#modelDisplayNmTitle\").val();\"\"!=a\u0026\u0026void 0!=a\u0026\u0026null!=a\u0026\u0026(digitalData.product.displayName=a);$(",["escape",["macro",2],8,16],").parents(\"section\").hasClass(\"product-compare\")\u0026\u0026(a=$(",["escape",["macro",2],8,16],").parents().siblings(\"div.cm-shop-card__content-top\").find(\"div.js-cm-shop-card__product\").children().find(\"strong\").text(),digitalData.product.displayName=a)}else if(\"product finder\"==digitalData.page.pageInfo.pageTrack||\"product offer\"==\ndigitalData.page.pageInfo.pageTrack){a=$(\"#newShopCountryYn\").val();if(\"Y\"==a){if(a=$(",["escape",["macro",2],8,16],").parents().siblings(\"div.cm-shop-card__content-top\").children(\"div.js-cm-shop-card__product\").children().find(\"strong\").text(),\"\"==a||null==a)a=$(",["escape",["macro",2],8,16],").parents().siblings(\"div.cm-shop-card__content-top\").children().children(\"div.js-cm-shop-card__product\").children().find(\"strong\").text()}else a=$(",["escape",["macro",2],8,16],").parents().siblings(\"div.product-card__prd-info-title\").children().children().find(\"h3\").text();\ndigitalData.product.displayName=a}else\"product search\"==digitalData.page.pageInfo.pageTrack\u0026\u0026(a=$(",["escape",["macro",2],8,16],").parents().siblings(\"div.product-card__top-wrap\").find(\"h3.product-card__prd-info-title-name\").text(),digitalData.product.displayName=a);return digitalData.product.displayName})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";if($(",["escape",["macro",2],8,16],").hasClass(\"BT_help\"))a=\"info\";else if(\"pickup-00\"==$(",["escape",["macro",2],8,16],").attr(\"id\")||\"pickup-01\"==$(",["escape",["macro",2],8,16],").attr(\"id\"))a=\"receive option\";else if(\"pickup-00\"==$(",["escape",["macro",2],8,16],").parent().attr(\"id\")||\"pickup-01\"==$(",["escape",["macro",2],8,16],").parent().attr(\"id\"))a=\"receive option\";else if($(",["escape",["macro",2],8,16],").hasClass(\"BT_btn-detail\"))a=\"benefits when purchasing\";else if($(",["escape",["macro",2],8,16],").hasClass(\"close-btn\"))a=\"stock_store\";\nelse if($(",["escape",["macro",2],8,16],").hasClass(\"btn-detail-info\")||$(",["escape",["macro",2],8,16],").hasClass(\"btn-shop-choice\"))a=\"stock_store\";else if(\"choice_store\"==$(",["escape",["macro",2],8,16],").attr(\"id\")||\"change_store\"==$(",["escape",["macro",2],8,16],").attr(\"id\"))a=\"option\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";$(",["escape",["macro",2],8,16],").hasClass(\"BT_help\")?$(",["escape",["macro",2],8,16],").siblings(\"div.BT_help-content\").children(\"div.BT_tooltip-cont\").hasClass(\"BT_buy\")?a=\"benefits when purchasing\":$(",["escape",["macro",2],8,16],").siblings(\"div.BT_help-content\").children(\"div.BT_tooltip-cont\").hasClass(\"BT_delivery\")?a=\"how to receive_info\":$(",["escape",["macro",2],8,16],").siblings(\"div.BT_help-content\").children(\"div.BT_tooltip-cont\").hasClass(\"BT_store\")?a=\"in stock store_info\":$(",["escape",["macro",2],8,16],").siblings(\"div.BT_help-content\").children(\"div.BT_tooltip-cont\").hasClass(\"BT_benefit\")?\na=\"benefit price_info\":$(",["escape",["macro",2],8,16],").siblings(\"div.BT_help-content\").children(\"div.BT_tooltip-cont\").hasClass(\"BT_member\")\u0026\u0026(a=\"membership price_info\"):\"pickup-00\"==$(",["escape",["macro",2],8,16],").prop(\"id\")||\"pickup-01\"==$(",["escape",["macro",2],8,16],").prop(\"id\")?a=\"pickup-00\"==$(",["escape",["macro",2],8,16],").prop(\"id\")?\"delivery\":\"pick up\":\"pickup-00\"==$(",["escape",["macro",2],8,16],").parent().prop(\"id\")||\"pickup-01\"==$(",["escape",["macro",2],8,16],").parent().prop(\"id\")?a=\"pickup-00\"==$(",["escape",["macro",2],8,16],").parent().prop(\"id\")?\n\"delivery\":\"pick up\":$(",["escape",["macro",2],8,16],").hasClass(\"BT_btn-detail\")?a=\"detail\":$(",["escape",["macro",2],8,16],").hasClass(\"close-btn\")?a=\"close\":$(",["escape",["macro",2],8,16],").hasClass(\"btn-detail-info\")?(a=$(",["escape",["macro",2],8,16],").parent().prev().find(\".break-word\").text(),a=\"detail:\"+a):$(",["escape",["macro",2],8,16],").hasClass(\"btn-shop-choice\")?(a=$(",["escape",["macro",2],8,16],").parent().prev().find(\".break-word\").text(),a=\"select:\"+a):\"choice_store\"==$(",["escape",["macro",2],8,16],").prop(\"id\")?a=\"select store\":\"change_store\"==\n$(",["escape",["macro",2],8,16],").prop(\"id\")\u0026\u0026(a=\"change store\");return a})();"]
    },{
      "function":"__j",
      "vtp_name":"digitalData.page.pageInfo.siteCode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"review_bazaar voice\",b=",["escape",["macro",96],8,16],";\"it\"==b\u0026\u0026(a=\"review_reevoo\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"read\";if($(",["escape",["macro",2],8,16],").hasClass(\"bv_button_component_container\")||$(",["escape",["macro",2],8,16],").hasClass(\"bv_button_buttonMinimalist\"))a=\"write\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;return a=(a=$(\"#isSimplePDP\").val())?\"simple\":\"st\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"compare\";if($(",["escape",["macro",2],8,16],").hasClass(\"bv_main_container\")||$(",["escape",["macro",2],8,16],").parents().hasClass(\"bv_main_container\"))a=\"review_bazaar voice\";return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if($(",["escape",["macro",2],8,16],").parent().parent().parent().parent().hasClass(\"s-local-list__content-links\")){var a=$(",["escape",["macro",2],8,16],").text().toLowerCase();a=a.split(\"\/\");a=a[0].replace(\/^\\s+|\\s+$\/g,\"\");$(\"div.s-visit-layer_popup .s-pop-btn\").attr(\"data-omni\",a);return a}if($(",["escape",["macro",2],8,16],").parent().hasClass(\"s-pop-btn\")){if(\"ok-button\"==$(",["escape",["macro",2],8,16],").attr(\"data-focus-id\"))return a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\"),a+\"_yes\";if(\"no-button\"==$(",["escape",["macro",2],8,16],").attr(\"data-focus-id\"))return a=\n$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\"),a+\"_no\"}else if($(",["escape",["macro",2],8,16],").hasClass(\"s-close-button\"))return a=$(\"div.s-visit-layer_popup .s-pop-btn\").attr(\"data-omni\"),a+\"_close\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"gb-footer-2019__item-list\"==$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\")||\"gb-footer-2019__item-headline\"==$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\")?\"footer\":\"gb-footer-2019__bottom-list\"==$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\")?\"footer bottom\":\"gb-footer-2019__language-link\"==$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"class\")||\"gb-footer-2019__select-link\"==$(",["escape",["macro",2],8,16],").closest(\"a\").attr(\"class\")?\"footer bottom\":\"gb-footer-2019__info-local\"==\n$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\")?\"local logo\":$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"gb-footer-2019__sns-item\")||$(",["escape",["macro",2],8,16],").parent().parent().parent().hasClass(\"gb-footer-2019__sns-item\")?\"follow\":\"back to top\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"gb-footer-2019__sns-item\")||$(",["escape",["macro",2],8,16],").parent().parent().parent().hasClass(\"gb-footer-2019__sns-item\")?\"social\":\"s-btn-gotop\"==$(",["escape",["macro",2],8,16],").attr(\"class\")||\"gb-footer-2019__btn-top\"==$(",["escape",["macro",2],8,16],").attr(\"class\")||\"btn-to-top\"==$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\")||\"f_backtotop\"==$(",["escape",["macro",2],8,16],").closest(\"div\").attr(\"class\")?\"contents interaction\":\"footer\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__j",
      "vtp_name":"digitalData.product.category"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__j",
      "vtp_name":"digitalData.product.pvi_type_name"
    },{
      "function":"__j",
      "vtp_name":"digitalData.product.pvi_subtype_name"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"samid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtmServerType"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",111],
      "vtp_defaultValue":"UA-100137701-4",
      "vtp_map":["list",["map","key","live","value","UA-100137701-4"],["map","key","staging","value","UA-101298876-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",7]],["map","fieldName","userId","value",["macro",57]],["map","fieldName","cookieExpires","value","33696000"]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",96]],["map","index","2","group",["macro",46]],["map","index","3","group",["macro",47]],["map","index","4","group",["macro",49]],["map","index","5","group",["macro",50]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",96]],["map","index","2","dimension",["macro",54]],["map","index","3","dimension",["macro",0]],["map","index","4","dimension",["macro",105]],["map","index","5","dimension",["macro",55]],["map","index","6","dimension",["macro",106]],["map","index","7","dimension",["macro",107]],["map","index","8","dimension",["macro",52]],["map","index","10","dimension",["macro",108]],["map","index","11","dimension",["macro",109]],["map","index","12","dimension",["macro",53]],["map","index","13","dimension",["macro",76]],["map","index","14","dimension",["macro",56]],["map","index","15","dimension",["macro",74]],["map","index","16","dimension",["macro",110]],["map","index","18","dimension",["macro",57]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",112],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchKeyword"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchSortAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"searchSort"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"where to buy\";$(",["escape",["macro",2],8,16],").hasClass(\"js-cta-stock\")||$(",["escape",["macro",2],8,16],").parent().hasClass(\"js-cta-stock\")?a=",["escape",["macro",0],8,16],":\"getStockAlertSubmit\"==$(",["escape",["macro",2],8,16],").prop(\"id\")\u0026\u0026(a=\"request submit\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=digitalData.page.pathIndicator.depth_2,b=digitalData.page.pathIndicator.depth_4,d=digitalData.page.pathIndicator.depth_5,e=",["escape",["macro",0],8,16],";if(\"\"!=d)c=c+\":\"+b+\":\"+d;else if(\"\"!=b)c=c+\":\"+b;else if(\"\"==c)return!1;b=1;d=$(",["escape",["macro",2],8,16],").closest(\"div.s-slick\").find(\"ul.slick-dots\");-1!=d.index()\u0026\u0026(b=d.children(\"li.slick-active\").index()+1);if(\"A\"==$(",["escape",["macro",2],8,16],").prop(\"tagName\")){var a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?$(",["escape",["macro",2],8,16],").attr(\"data-omni\"):\n\"image\";a=c+\":kv\"+b+\":\"+a}else $(",["escape",["macro",2],8,16],").parent().hasClass(\"shop-header__btn\")\u0026\u0026$(",["escape",["macro",2],8,16],").closest(\"section\").hasClass(\"section-pfs-header\")?a=c+\":kv\"+b+\":play video\":$(",["escape",["macro",2],8,16],").parent().hasClass(\"shop-header__btn\")\u0026\u0026$(",["escape",["macro",2],8,16],").closest(\"section\").hasClass(\"shop-header\")?(1==$(\"div.par div.section section.shop-header\").length\u0026\u0026\"unpacked\"==e\u0026\u0026(b=1),a=c+\":kv\"+b+\":play video\"):$(",["escape",["macro",2],8,16],").parent().hasClass(\"video-group__ct-inner\")?\n(a=$(",["escape",["macro",2],8,16],").parents(\"div.video-group__ct-inner\"),b=0\u003Cd?b:$(\"div.par div.video-group__ct-inner\").index(a)+5,a=c+\":kv\"+b+\":play video\"):$(",["escape",["macro",2],8,16],").parent().hasClass(\"pr-video-thumbnail-group__ct-inner\")?(a=$(",["escape",["macro",2],8,16],").parents(\"div.pr-video-thumbnail-group__ct-inner\"),b=$(\"div.par div.pr-video-thumbnail-group__ct-inner\").index(a)+1,a=c+\":kv thumbnail\"+b+\":play video\"):$(",["escape",["macro",2],8,16],").hasClass(\"slick-arrow\")?(a=$(",["escape",["macro",2],8,16],").attr(\"class\").split(\" \"),\na=a[0].split(\"-\"),a=\"next\"==a[1]?\"arrow_right\":\"arrow_left\"):$(",["escape",["macro",2],8,16],").parent().parent().hasClass(\"slick-dots\")\u0026\u0026(a=$(",["escape",["macro",2],8,16],").parents(),b=$(\"div.par ul.slick-dots \\x3e li\").index(a)+1,$(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"js-pd-viewer-carousel\")?a=b2b_str+\"gallery:rolling index_\"+b:$(",["escape",["macro",2],8,16],").hasClass(\"s-autoplay-pause\")?a=\"kv rolling:index_stop\":$(",["escape",["macro",2],8,16],").hasClass(\"s-autoplay-play\")?a=\"kv rolling:index_play\":(b\u003E$(\"div.par ul.slick-dots \\x3e li.slick-dots-autoplay\").index(\"div.par ul.slick-dots \\x3e li\")\u0026\u0026\n--b,a=\"kv rolling:index_\"+b));return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"scrollComp"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"flagship pdp\"!=digitalData.page.pageInfo.pageTrack||\"microsite_pdpoption\"!=$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\")\u0026\u0026\"microsite_pdpoption\"!=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni-type\")\u0026\u0026\"microsite_pdpoption\"!=$(",["escape",["macro",2],8,16],").parents(\"label\").attr(\"data-omni-type\"))\"product detail\"==digitalData.page.pageInfo.pageTrack\u0026\u0026(b=$(\"#currentModelName\").val().toUpperCase(),a=$(\"#current_model_code\").val().toUpperCase(),c=digitalData.product.displayName,d=",["escape",["macro",92],8,16],",\ne=c,f=",["escape",["macro",108],8,16],"+\"\/\"+",["escape",["macro",109],8,16],",b='{\"ecommerce\": {\"detail\": {\"products\": [{\"name\": \"'+b+'\",\"id\": \"'+a+'\",\"price\" : \"'+d+'\",\"brand\" : \"'+e+'\",\"category\" : \"'+f+'\",\"dimension9\":\"'+c+'\"}]}}}',c=JSON.parse(b));else{if($(",["escape",["macro",2],8,16],").attr(\"data-omni\")){var a=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\");var b=a[1].replace(\";\",\"\");a=a[2]}else $(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\")?(a=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\"),b=\na[1].replace(\";\",\"\"),a=a[2]):$(",["escape",["macro",2],8,16],").parents(\"label\").attr(\"data-omni\")\u0026\u0026(a=$(",["escape",["macro",2],8,16],").parents(\"label\").attr(\"data-omni\").split(\"|\"),b=a[1].replace(\";\",\"\"),a=a[2]);var c=digitalData.product.displayName;var d=$(",["escape",["macro",2],8,16],").parents(\"div.s-option-box\").attr(\"data-price\").replace(\/[^-\\.0-9]\/g,\"\").trim(),e=c,f=",["escape",["macro",108],8,16],"+\"\/\"+",["escape",["macro",109],8,16],";b='{\"ecommerce\": {\"detail\": {\"products\": [{\"name\": \"'+b+'\",\"id\": \"'+a+'\",\"price\" : \"'+d+'\",\"brand\" : \"'+\ne+'\",\"category\" : \"'+f+'\",\"dimension9\":\"'+c+'\"}]}}}';c=JSON.parse(b)}return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],".split(\":\"),b=\"\";void 0!=a[0]\u0026\"\"!=a[0]\u0026\u0026(b+=a[0]);void 0!=a[1]\u0026\"\"!=a[1]\u0026\u0026(b+=\":\"+a[1]);void 0!=a[2]\u0026\"\"!=a[2]\u0026\u0026(b+=\":\"+a[2]);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],".split(\":\"),b=\"\";void 0!=a[0]\u0026\"\"!=a[0]\u0026\u0026(b+=a[0]);void 0!=a[1]\u0026\"\"!=a[1]\u0026\u0026(b+=\":\"+a[1]);void 0!=a[2]\u0026\"\"!=a[2]\u0026\u0026(b+=\":\"+a[2]);void 0!=a[3]\u0026\"\"!=a[3]\u0026\u0026(b+=\":\"+a[3]);return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],".split(\":\"),b=\"\";void 0!=a[0]\u0026\"\"!=a[0]\u0026\u0026(b+=a[0]);void 0!=a[1]\u0026\"\"!=a[1]\u0026\u0026(b+=\":\"+a[1]);void 0!=a[2]\u0026\"\"!=a[2]\u0026\u0026(b+=\":\"+a[2]);void 0!=a[3]\u0026\"\"!=a[3]\u0026\u0026(b+=\":\"+a[3]);void 0!=a[4]\u0026\"\"!=a[4]\u0026\u0026(b+=\":\"+a[4]);return b})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",48]],["map","fieldName","userId","value",["macro",57]],["map","fieldName","cookieExpires","value","33696000"]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",96]],["map","index","2","group",["macro",46]],["map","index","3","group",["macro",122]],["map","index","4","group",["macro",123]],["map","index","5","group",["macro",124]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",96]],["map","index","2","dimension",["macro",54]],["map","index","3","dimension",["macro",0]],["map","index","4","dimension",["macro",105]],["map","index","5","dimension",["macro",55]],["map","index","6","dimension",["macro",106]],["map","index","7","dimension",["macro",107]],["map","index","8","dimension",["macro",52]],["map","index","10","dimension",["macro",63]],["map","index","11","dimension",["macro",62]],["map","index","13","dimension",["macro",61]],["map","index","14","dimension",["macro",60]],["map","index","16","dimension",["macro",110]],["map","index","18","dimension",["macro",57]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",112],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"accountVal"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",2],8,16],").parent();return a=a.hasClass(\"s-btn-top\")||a.hasClass(\"btn-view-more\")?\"contents interaction\":a.hasClass(\"js-buy-now\")||$(",["escape",["macro",2],8,16],").hasClass(\"js-buy-now\")?\"where to buy\":\"getStockAlertSubmit\"==$(",["escape",["macro",2],8,16],").attr(\"id\")?\"Request submit\":",["escape",["macro",0],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"searchvalue",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"sdsat_session"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.videoProvider",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoDuration",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoVisible",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoCurrentTime",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",72],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",71],
      "vtp_eventLabel":["macro",9],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",103],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",102],
      "vtp_eventLabel":["macro",10],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"bottom",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search layer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"Recent keyword",
      "vtp_eventLabel":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search layer",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",13],
      "vtp_eventLabel":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":10
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Site Search",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",14],
      "vtp_eventLabel":["macro",114],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result page function",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",15],
      "vtp_eventLabel":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result page function",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"filter",
      "vtp_eventLabel":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result page function",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"option",
      "vtp_eventLabel":["macro",18],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result page function",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"pagenation",
      "vtp_eventLabel":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result page function",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",115],
      "vtp_eventLabel":["macro",116],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"best match",
      "vtp_eventLabel":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"search result click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",21],
      "vtp_eventLabel":["macro",22],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Bread Crumb",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"Breadcrumb",
      "vtp_eventLabel":["macro",23],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",117],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",24],
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"home kv",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":25
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product family showcase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"feature",
      "vtp_eventLabel":["macro",27],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",0],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"key visual",
      "vtp_eventLabel":["macro",118],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product family showcase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"secondary menu",
      "vtp_eventLabel":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":28
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product category detail",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"feature",
      "vtp_eventLabel":["macro",29],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":29
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product finder",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",30],
      "vtp_eventLabel":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":32
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product finder",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",32],
      "vtp_eventLabel":["macro",33],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":33
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"sticky menu_click",
      "vtp_eventLabel":["macro",37],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"gallery",
      "vtp_eventLabel":["macro",34],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":36
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"option",
      "vtp_eventLabel":["macro",35],
      "vtp_dimension":["list",["map","index","13","dimension",["macro",77]],["map","index","15","dimension",["macro",75]],["map","index","14","dimension",["macro",93]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"sticky menu_scroll",
      "vtp_eventLabel":["macro",119],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"social",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"share",
      "vtp_eventLabel":["macro",36],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":40
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"support",
      "vtp_eventLabel":["macro",39],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":41
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"spec",
      "vtp_eventLabel":["macro",38],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":42
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"sar information",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":43
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"product details",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",100],
      "vtp_eventLabel":["macro",40],
      "vtp_dimension":["list",["map","index","13","dimension",["macro",77]],["map","index","15","dimension",["macro",75]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":44
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Recently View",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"product",
      "vtp_eventLabel":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":46
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"accessories",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"product",
      "vtp_eventLabel":["macro",42],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":47
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"accessories",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"see more",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":48
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Flagship pdp",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",66],
      "vtp_eventLabel":["macro",67],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":51
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Offer page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",43],
      "vtp_eventLabel":["macro",44],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":52
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"offer page",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"key visual",
      "vtp_eventLabel":["macro",45],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":53
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",121],
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",58],
      "vtp_eventLabel":["macro",59],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",6],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",125],
      "vtp_eventAction":["macro",58],
      "vtp_eventLabel":["macro",59],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":55
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",113],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",125],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"account",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"login success",
      "vtp_eventLabel":["macro",126],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":58
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":59
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Flagship pdp",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",64],
      "vtp_eventLabel":["macro",65],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":64
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Flagship pdp",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"Gallery",
      "vtp_eventLabel":["macro",68],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",121],
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"addToCart",
      "vtp_eventLabel":["macro",73],
      "vtp_dimension":["list",["map","index","13","dimension",["macro",77]],["map","index","15","dimension",["macro",75]],["map","index","14","dimension",["macro",93]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":68
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"detail",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":72
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":73
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"YouTube",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",82],
      "vtp_eventLabel":["macro",128],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":74
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":["macro",129],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",78],
      "vtp_eventLabel":["macro",83],
      "vtp_dimension":["list",["map","index","13","dimension",["macro",77]],["map","index","15","dimension",["macro",75]]],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":75
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",91],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",26],
      "vtp_eventLabel":["macro",85],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":76
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",0],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",88],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":78
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",90],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"key visual",
      "vtp_eventLabel":["macro",89],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",0],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",94],
      "vtp_eventLabel":["macro",95],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":81
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",0],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",97],
      "vtp_eventLabel":["macro",98],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":82
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":["macro",130],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ipredirectionlocallist",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",113],
      "vtp_eventAction":"locallist",
      "vtp_eventLabel":["macro",101],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":88
    },{
      "function":"__cl",
      "tag_id":89
    },{
      "function":"__cl",
      "tag_id":90
    },{
      "function":"__cl",
      "tag_id":91
    },{
      "function":"__cl",
      "tag_id":92
    },{
      "function":"__cl",
      "tag_id":93
    },{
      "function":"__cl",
      "tag_id":94
    },{
      "function":"__cl",
      "tag_id":95
    },{
      "function":"__cl",
      "tag_id":96
    },{
      "function":"__cl",
      "tag_id":97
    },{
      "function":"__cl",
      "tag_id":98
    },{
      "function":"__cl",
      "tag_id":99
    },{
      "function":"__cl",
      "tag_id":100
    },{
      "function":"__cl",
      "tag_id":101
    },{
      "function":"__cl",
      "tag_id":102
    },{
      "function":"__cl",
      "tag_id":103
    },{
      "function":"__cl",
      "tag_id":104
    },{
      "function":"__cl",
      "tag_id":105
    },{
      "function":"__cl",
      "tag_id":106
    },{
      "function":"__cl",
      "tag_id":107
    },{
      "function":"__cl",
      "tag_id":108
    },{
      "function":"__cl",
      "tag_id":109
    },{
      "function":"__cl",
      "tag_id":110
    },{
      "function":"__hl",
      "tag_id":111
    },{
      "function":"__cl",
      "tag_id":112
    },{
      "function":"__cl",
      "tag_id":113
    },{
      "function":"__cl",
      "tag_id":114
    },{
      "function":"__cl",
      "tag_id":115
    },{
      "function":"__cl",
      "tag_id":116
    },{
      "function":"__cl",
      "tag_id":117
    },{
      "function":"__cl",
      "tag_id":118
    },{
      "function":"__cl",
      "tag_id":119
    },{
      "function":"__cl",
      "tag_id":120
    },{
      "function":"__cl",
      "tag_id":121
    },{
      "function":"__cl",
      "tag_id":122
    },{
      "function":"__cl",
      "tag_id":123
    },{
      "function":"__cl",
      "tag_id":124
    },{
      "function":"__cl",
      "tag_id":125
    },{
      "function":"__cl",
      "tag_id":126
    },{
      "function":"__cl",
      "tag_id":127
    },{
      "function":"__cl",
      "tag_id":128
    },{
      "function":"__cl",
      "tag_id":129
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25,50,75",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"7322547_102",
      "vtp_enableTriggerStartOption":true,
      "tag_id":130
    },{
      "function":"__cl",
      "tag_id":131
    },{
      "function":"__cl",
      "tag_id":132
    },{
      "function":"__cl",
      "tag_id":133
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"7322547_152",
      "vtp_enableTriggerStartOption":true,
      "tag_id":134
    },{
      "function":"__cl",
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Eif(document.getElementById(\"content\"))var scrollBottom=new Waypoint({element:document.getElementById(\"content\"),handler:function(a){\"down\"==a\u0026\u0026dataLayer.push({event:\"home_scroll\",eventNonInteraction:!0})},offset:\"bottom-in-view\"});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E$(document).ready(function(){setTimeout(function(){dataLayer.push({event:\"search_result\",searchKeyword:",["escape",["macro",131],8,16],",eventNonInteraction:!0})},2E3)});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\"#sortBy\").change(function(){var a=$(\"#sortBy option:selected\").val();dataLayer.push({event:\"search_sortby\",searchSort:a,searchSortAction:\"sort by\",eventNonInteraction:!0})});$(\"#resultsPerPage\").change(function(){var a=$(\"#resultsPerPage option:selected\").val();dataLayer.push({event:\"search_sortby\",searchSort:a,searchSortAction:\"view by\",eventNonInteraction:!0})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":18
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar featureYN=document.getElementById(\"featureEmptyYn\"),specYN=document.getElementById(\"specEmptyYn\"),reviewYN=document.getElementById(\"reviewsEmptyYn\"),supportYN=document.getElementById(\"supportEmptyYn\"),compareYN=document.getElementById(\"compareEmptyYn\"),relatedYN=document.getElementsByClassName(\"related-products js-related-products-pd\"),galleryYN=document.getElementById(\"featureGalleryEmptyYn\"),comp_arr=[];featureYN\u0026\u0026\"N\"==featureYN.value\u0026\u0026comp_arr.push(\"benefits\");\ngalleryYN\u0026\u0026\"N\"==galleryYN.value\u0026\u0026comp_arr.push(\"gallery\");specYN\u0026\u0026\"N\"==specYN.value\u0026\u0026comp_arr.push(\"specs\");reviewYN\u0026\u0026\"N\"==reviewYN.value\u0026\u0026comp_arr.push(\"reviews\");supportYN\u0026\u0026\"N\"==supportYN.value\u0026\u0026comp_arr.push(\"support\");compareYN\u0026\u0026\"N\"==compareYN.value\u0026\u0026comp_arr.push(\"compare\");relatedYN\u0026\u0026comp_arr.push(\"related\");\nif(document.getElementsByClassName(\"feature-benefit\")[0]\u0026\u0026featureYN\u0026\u0026\"N\"==featureYN.value)var feature=new Waypoint({element:document.getElementsByClassName(\"feature-benefit\")[0],handler:function(a){\"down\"==a\u0026\u0026dataLayer.push({event:\"pd_scroll\",scrollComp:\"benefits\",eventNonInteraction:!0})},offset:150});\nif(document.getElementsByClassName(\"ma-g-c-gallery\")[0]\u0026\u0026galleryYN\u0026\u0026\"N\"==galleryYN.value)var gallery=new Waypoint({element:document.getElementsByClassName(\"ma-g-c-gallery\")[0],handler:function(a){\"down\"==a\u0026\u0026dataLayer.push({event:\"pd_scroll\",scrollComp:\"gallery\",eventNonInteraction:!0})},offset:150});\nif(document.getElementsByClassName(\"product-specs\")[0]\u0026\u0026specYN\u0026\u0026\"N\"==specYN.value)var spec=new Waypoint({element:document.getElementsByClassName(\"product-specs\")[0],handler:function(a){\"down\"==a\u0026\u0026dataLayer.push({event:\"pd_scroll\",scrollComp:\"specs\",eventNonInteraction:!0})},offset:150});\nif((document.getElementsByClassName(\"review-highlights\")[0]||document.getElementsByClassName(\"pr-g-product-reviews-highlights\")[0])\u0026\u0026reviewYN\u0026\u0026\"N\"==reviewYN.value)var review=new Waypoint({element:document.getElementById(\"reviewsContainer\"),handler:function(a){\"down\"==a\u0026\u0026dataLayer.push({event:\"pd_scroll\",scrollComp:\"reviews\",eventNonInteraction:!0})},offset:150});\nif(document.getElementsByClassName(\"product-support\")[0]\u0026\u0026supportYN\u0026\u0026\"N\"==supportYN.value)var support=new Waypoint({element:document.getElementsByClassName(\"product-support\")[0],handler:function(a){\"down\"==a\u0026\u0026dataLayer.push({event:\"pd_scroll\",scrollComp:\"support\",eventNonInteraction:!0})},offset:150});\nif(document.getElementsByClassName(\"product-compare\")[0]\u0026\u0026compareYN\u0026\u0026\"N\"==compareYN.value)var compare=new Waypoint({element:document.getElementsByClassName(\"product-compare\")[0],handler:function(a){\"down\"==a\u0026\u0026dataLayer.push({event:\"pd_scroll\",scrollComp:\"compare\",eventNonInteraction:!0})},offset:150});\nif(document.getElementsByClassName(\"related-products\")[0])var related=new Waypoint({element:document.getElementsByClassName(\"related-products\")[0],handler:function(a){\"down\"==a\u0026\u0026dataLayer.push({event:\"pd_scroll\",scrollComp:\"related\",eventNonInteraction:!0})},offset:150});$(\"a\").on(\"click\",function(){void 0!=spec\u0026\u0026spec.disable();void 0!=review\u0026\u0026review.disable();void 0!=feature\u0026\u0026feature.disable();void 0!=support\u0026\u0026support.disable();void 0!=compare\u0026\u0026compare.disable();void 0!=related\u0026\u0026related.disable()});\n$(\"html, body\").on(\"mousewheel DOMMouseScroll\",function(a){void 0!=spec\u0026\u0026spec.enable();void 0!=review\u0026\u0026review.enable();void 0!=feature\u0026\u0026feature.enable();void 0!=support\u0026\u0026support.enable();void 0!=compare\u0026\u0026compare.enable();void 0!=related\u0026\u0026related.enable()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"login_account\",accountVal:\"samsung account\",eventNonInteraction:!0});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var pageArea=digitalData.page.pageInfo.pageTrack,currencyCode=",["escape",["macro",84],8,16],",dataOmni,gaProdPrice,gaProdBrand,gaProdCategory,currencyType=\"N\";if(\"product detail\"==pageArea){var gaProdName=",["escape",["macro",74],8,16],".toUpperCase(),gaProdDisName=",["escape",["macro",56],8,16],",gaProdSKU=",["escape",["macro",76],8,16],".toUpperCase();gaProdPrice=$(\".standard-anchor-navi__price-save\").children(\"del\").text()?$(\".standard-anchor-navi__price-save\").children(\"del\").text():$(\".standard-anchor-navi__price-total .pd-anchor-total\").text();\n-1\u003CgaProdPrice.indexOf(\"\\u20ac\")\u0026\u0026(currencyType=\"Y\");gaProdPrice=gaProdPrice.replace(\/[^-\\.,0-9]\/g,\"\").replace(\/[\\.0]0*$\/g,\"\").replace(\/,\/gi,\"#\").trim();gaProdBrand=",["escape",["macro",56],8,16],";gaProdCategory=",["escape",["macro",108],8,16],"+\"\/\"+",["escape",["macro",109],8,16],";if(0\u003C$(\".product-details__addon-selected-headline\").length){for(var addOnModelNameList=[],addOnModelCodeList=[],addOnModelDispList=[],addOnModelPriceList=[],i=0;i\u003C$(\".product-details__addon-selected-headline\").length;i++){var addModel=$(\".product-details__addon-selected-headline:eq('\"+\ni+\"')\").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"),addPrice=\"IDR\"==currencyCode?$(\".product-details__addon-selected-default-price:eq('\"+i+\"')\").text().replace(\/[^-\\.,0-9]\/g,\"\").replace(\/\\.\/gi,\"\").trim():$(\".product-details__addon-selected-default-price:eq('\"+i+\"')\").text().replace(\/[^-\\.,0-9]\/g,\"\").replace(\/[\\.0]0*$\/g,\"\").replace(\/,\/gi,\"#\").trim();addOnModelNameList.push(addModel[0]);addOnModelCodeList.push(addModel[1]);var tempDisp=\";\"+$(\".product-details__addon-selected-headline:eq('\"+i+\"')\").text();\naddOnModelDispList.push(tempDisp);addOnModelPriceList.push(addPrice)}gaProdSKU=gaProdSKU+\",\"+addOnModelCodeList;gaProdName=gaProdName+\",\"+addOnModelNameList;gaProdDisName+=addOnModelDispList;gaProdPrice=gaProdPrice+\",\"+addOnModelPriceList}}else{$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\"):$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\"):$(",["escape",["macro",2],8,16],").closest(\"div.shop-grid-col\").attr(\"data-omni\")\u0026\u0026\n(dataOmni=$(",["escape",["macro",2],8,16],").closest(\"div.shop-grid-col\").attr(\"data-omni\").split(\"|\"));if($(",["escape",["macro",2],8,16],").closest(\"div\").hasClass(\"fc-content__preview-summary-btn\"))dataOmni=$(",["escape",["macro",2],8,16],").closest(\"button\").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\");else if(\"promotionAddCart_sh_g_offer_list_bund\"==$(",["escape",["macro",2],8,16],").attr(\"id\"))dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").replace(\/;\/gi,\"\").split(\"|\");else if($(",["escape",["macro",2],8,16],").hasClass(\"account-wishlist__option-add\")||\n\"additemsBtn\"==$(",["escape",["macro",2],8,16],").attr(\"id\"))dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\");gaProdName=dataOmni[0].replace(\/;\/gi,\",\").toUpperCase();gaProdSKU=dataOmni[1].replace(\/;\/gi,\",\").toUpperCase();gaProdBrand=gaProdDisName=null==",["escape",["macro",56],8,16],"||\"\"==",["escape",["macro",56],8,16],"?$(",["escape",["macro",2],8,16],").parents().siblings(\"div.product-card__prd-info-title\").children().children().children().find(\"span\").text():",["escape",["macro",56],8,16],"}\"product finder\"==pageArea||\"product offer\"==\npageArea?(gaProdPrice=$(",["escape",["macro",2],8,16],").parents().siblings(\"div.product-card__detail-price\").find(\"del\").text()?$(",["escape",["macro",2],8,16],").parents().siblings(\"div.product-card__detail-price\").find(\"del\").text():$(",["escape",["macro",2],8,16],").parents().siblings(\"div.product-card__detail-price\").find(\"span.discounted-price\").text(),-1\u003CgaProdPrice.indexOf(\"\\u20ac\")\u0026\u0026(currencyType=\"Y\"),gaProdPrice=gaProdPrice.replace(\/[^-\\.,0-9]\/g,\"\").replace(\/[\\.0]0*$\/g,\"\").replace(\/,\/gi,\"#\").trim()):\"product search\"==\npageArea\u0026\u0026(gaProdBrand=gaProdDisName=$(",["escape",["macro",2],8,16],").parents().siblings(\"div.product-card__top-wrap\").find(\"h3.product-card__prd-info-title-name\").text(),gaProdPrice=$(",["escape",["macro",2],8,16],").parents().siblings(\"div.product-card__top-wrap\").find(\"span.discounted-price\").text(),-1\u003CgaProdPrice.indexOf(\"\\u20ac\")\u0026\u0026(currencyType=\"Y\"),gaProdPrice=gaProdPrice.replace(\/[^-\\.,0-9]\/g,\"\").replace(\/[\\.0]0*$\/g,\"\").replace(\/,\/gi,\"#\").trim());var gaProdLeng=gaProdName.split(\",\").length,gaProdNameArr=gaProdName.split(\",\"),\ngaProdSKUArr=gaProdSKU.split(\",\"),gaProdPriceArr=gaProdPrice.split(\",\"),gaProdDisNameArr=gaProdDisName.split(\";\"),prodJsonArray=[];for(i=0;i\u003CgaProdLeng;i++){var prodJson={};prodJson.name=gaProdNameArr[i];prodJson.id=gaProdSKUArr[i];prodJson.dimension9=gaProdDisNameArr[i].replace(\/^,\/g,\"\").replace(\/,$\/,\"\");gaProdPriceArr[i]=\"EUR\"==currencyCode||\"RON\"==currencyCode||\"Y\"==currencyType?gaProdPriceArr[i].replace(\/\\.\/gi,\"\").replace(\/#\/gi,\".\").replace(\/\\.$\/g,\"\"):gaProdPriceArr[i].replace(\/#\/gi,\"\");prodJson.price=\ngaProdPriceArr[i];prodJson.brand=gaProdDisNameArr[i].replace(\/^,\/g,\"\").replace(\/,$\/,\"\");\"product detail\"==pageArea\u0026\u0026(prodJson.category=gaProdCategory);prodJson.quantity=1;prodJsonArray.push(prodJson)}dataLayer.push({event:\"addToCart\",ecommerce:{currencyCode:currencyCode,add:{products:prodJsonArray}}})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":69
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var dataOmni=\"\",currencyCode=",["escape",["macro",84],8,16],",gaProdName,gaProdSKU,gaProdDisName,gaProdPrice=digitalData.product.model_price,gaProdCategory=",["escape",["macro",108],8,16],"+\"\/\"+",["escape",["macro",109],8,16],";void 0!=$(",["escape",["macro",2],8,16],").attr(\"data-omni\")?dataOmni=$(",["escape",["macro",2],8,16],").attr(\"data-omni\").split(\"|\"):void 0!=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\")\u0026\u0026(dataOmni=$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni\").split(\"|\"));if(\"microsite_scAddContent\"==$(",["escape",["macro",2],8,16],").attr(\"data-omni-type\")||\n\"microsite_scAddContent\"==$(",["escape",["macro",2],8,16],").parent().attr(\"data-omni-type\")){var realmdlName=dataOmni[1].split(\";\");gaProdName=realmdlName[1].toUpperCase();gaProdSKU=dataOmni[2].toLowerCase().replace(\/;\/gi,\"\").toUpperCase();gaProdDisName=1\u003C$(",["escape",["macro",2],8,16],").parents().siblings(\".js-configurator-accessories__acc-content\").find(\"a\").length?$(",["escape",["macro",2],8,16],").parents().siblings(\".js-configurator-accessories__acc-content\").find(\"a\").text():$(",["escape",["macro",2],8,16],").parents().siblings(\".js-configurator-page-accessories__list-title\").find(\"strong\").text();\ngaProdPrice=realmdlName[2]}else{var newType=dataOmni[0].split(\",\");if(1\u003CnewType.length){for(var arrMdlNm=[],arrMdlPr=[],i=0;i\u003CnewType.length;i++){var productPrice=newType[i].split(\";\");arrMdlNm.push(productPrice[1]);arrMdlPr.push(productPrice[2])}0\u003CarrMdlPr.length?(gaProdName=arrMdlNm.toString(),gaProdPrice=arrMdlPr.toString()):gaProdName=arrMdlNm.toString()}else productPrice=dataOmni[0].split(\";\"),productPrice[2]?(gaProdName=productPrice[1],gaProdPrice=productPrice[2]):gaProdName=dataOmni[0].replace(\/;\/gi,\n\"\").toUpperCase();gaProdSKU=dataOmni[1].replace(\/;\/gi,\"\").toUpperCase();gaProdDisName=",["escape",["macro",56],8,16],"}var gaProdLeng=gaProdName.split(\",\").length,gaProdNameArr=gaProdName.split(\",\"),gaProdSKUArr=gaProdSKU.split(\",\"),gaProdDisNameArr=gaProdDisName.split(\";\"),prodJsonArray=[];for(i=0;i\u003CgaProdLeng;i++){var prodJson={};prodJson.name=gaProdNameArr[i];prodJson.id=gaProdSKUArr[i];1\u003CgaProdDisNameArr.length?(prodJson.dimension9=gaProdDisNameArr[i].replace(\/^,\/g,\"\").replace(\/,$\/,\"\"),prodJson.brand=gaProdDisNameArr[i].replace(\/^,\/g,\n\"\").replace(\/,$\/,\"\")):(prodJson.brand=gaProdDisName,prodJson.dimension9=gaProdDisName);if(gaProdPrice){var gaProdPriceArr=gaProdPrice.split(\",\");gaProdPriceArr[i]\u0026\u0026(prodJson.price=gaProdPriceArr[i])}prodJson.category=gaProdCategory;prodJson.quantity=1;prodJsonArray.push(prodJson)}dataLayer.push({event:\"addToCart\",ecommerce:{currencyCode:currencyCode,add:{products:prodJsonArray}}})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{setTimeout(function(){var d=[\"IDR\",\"SEK\",\"CZK\"],e=",["escape",["macro",84],8,16],",h=\"N\",f=digitalData.product.model_name.toUpperCase(),k=\"\"==digitalData.product.model_code.toUpperCase()||null==digitalData.product.model_code.toUpperCase()?digitalData.product.model_name.toUpperCase():digitalData.product.model_code.toUpperCase(),l=digitalData.product.displayName,a;\"product detail\"==digitalData.page.pageInfo.pageTrack?(a=$(\"#isSimplePDP\").val())?d.includes(e)?(a=$(\".product-details-anchor-navi__price-save\").text()?\n$(\".product-details-anchor-navi__price-save .pd-anchor-price\").text():$(\".product-details-anchor-navi__price-total .pd-anchor-total\").text(),a=a.replace(\/[^-\\.,0-9]\/g,\"\").replace(\/\\.\/gi,\"#\").trim()):(a=$(\".product-details-anchor-navi__price-save\").text()?$(\".product-details-anchor-navi__price-save .pd-anchor-price\").text():$(\".product-details-anchor-navi__price-total .pd-anchor-total\").text(),-1\u003Ca.indexOf(\"\\u20ac\")\u0026\u0026(h=\"Y\"),a=a.replace(\/[^-\\.,0-9]\/g,\"\").replace(\/[\\.0]0*$\/g,\"\").replace(\/,\/gi,\"#\").trim()):\n\"sec\"==digitalData.page.pageInfo.siteCode?a=$(\".BT_price.del_small\").text().replace(\/[^-\\.0-9]\/g,\"\").trim():(a=$(\".standard-anchor-navi__price-save\").children(\"del\").text()?$(\".standard-anchor-navi__price-save\").children(\"del\").text():$(\".standard-anchor-navi__price-total .pd-anchor-total\").text(),-1\u003Ca.indexOf(\"\\u20ac\")\u0026\u0026(h=\"Y\"),a=d.includes(e)?a.replace(\/[^-\\.,0-9]\/g,\"\").replace(\/,\/gi,\"#\").trim():a.replace(\/[^-\\.,0-9]\/g,\"\").replace(\/[\\.0]0*$\/g,\"\").replace(\/,\/gi,\"#\").trim()):\"flagship pdp\"==digitalData.page.pageInfo.pageTrack\u0026\u0026\n(a=digitalData.product.model_price);d=",["escape",["macro",108],8,16],"+\"\/\"+",["escape",["macro",109],8,16],";var p=f.split(\",\").length;f=f.split(\",\");k=k.split(\",\");for(var m=l.split(\";\"),n=[],b=0;b\u003Cp;b++){var c={};c.name=f[b];c.id=k[b];1\u003Cm.length?(c.dimension9=m[b].replace(\/^,\/g,\"\"),c.brand=m[b].replace(\/^,\/g,\"\")):(c.dimension9=l,c.brand=l);if(a){var g=a.split(\",\");g[b]=\"EUR\"==e||\"RON\"==e||\"Y\"==h?g[b].replace(\/\\.\/gi,\"\").replace(\/#\/gi,\".\").replace(\/\\.$\/g,\"\"):g[b].replace(\/#\/gi,\"\");c.price=g[b]}c.category=d;c.quantity=1;\nn.push(c)}dataLayer.push({event:\"detail\",ecommerce:{currencyCode:e,detail:{products:n}}})},2E3)}catch(d){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":71
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\".ho-g-main-kv-carousel\").length\u0026\u0026($(\".ho-g-main-kv-carousel\").on(\"beforeChange\",function(a,b,c,d){a=$(b.$slides.get(d)).attr(\"data-slick-index\");dataLayer.push({slickIndex:parseInt(a)+1,component:\"kv\"})}),$(\".ho-g-main-kv-carousel\").on(\"swipe\",function(a,b,c){dataLayer.push({event:\"swipe_slick_kc\",eventNonInteraction:!0})}));\n$(\".ho-product-3column-group\").length\u0026\u0026($(\".ho-product-3column-group\").on(\"beforeChange\",function(a,b,c,d){a=$(b.$slides.get(d)).attr(\"data-slick-index\");dataLayer.push({slickIndex:parseInt(a)+1,component:\"content column\"})}),$(\".ho-product-3column-group\").on(\"swipe\",function(a,b,c){dataLayer.push({event:\"swipe_slick_kc\",eventNonInteraction:!0})}));\n$(\".ma-g-product-tile__slide-wrap\").length\u0026\u0026($(\".ma-g-product-tile__slide-wrap\").on(\"beforeChange\",function(a,b,c,d){a=$(b.$slides.get(d)).attr(\"data-slick-index\");dataLayer.push({slickIndex:parseInt(a)+1,component:\"shopping keyword\"})}),$(\".ma-g-product-tile__slide-wrap\").on(\"swipe\",function(a,b,c){dataLayer.push({event:\"swipe_slick_se\",eventNonInteraction:!0})}));\n$(\".ma-g-visual-story-carousel__content\").length\u0026\u0026($(\".ma-g-visual-story-carousel__content\").on(\"beforeChange\",function(a,b,c,d){a=$(b.$slides.get(d)).attr(\"data-slick-index\");dataLayer.push({slickIndex:parseInt(a)+1,component:\"explore\"})}),$(\".ma-g-visual-story-carousel__content\").on(\"swipe\",function(a,b,c){dataLayer.push({event:\"swipe_slick_se\",eventNonInteraction:!0})}));\n$(\".pr-carousel-container\").length\u0026\u0026($(\".pr-carousel-container\").on(\"beforeChange\",function(a,b,c,d){a=$(b.$slides.get(d)).attr(\"data-slick-index\");dataLayer.push({slickIndex:parseInt(a)+1,component:\"kv\"})}),$(\".pr-carousel-container\").on(\"swipe\",function(a,b,c){dataLayer.push({event:\"swipe_slick_kc\",eventNonInteraction:!0})}));\n$(\".pr-video-thumbnail-group\").length\u0026\u0026($(\".pr-video-thumbnail-group\").on(\"beforeChange\",function(a,b,c,d){a=$(b.$slides.get(d)).attr(\"data-slick-index\");dataLayer.push({slickIndex:parseInt(a)+1,component:\"kv thumbnail\"})}),$(\".pr-video-thumbnail-group\").on(\"swipe\",function(a,b,c){dataLayer.push({event:\"swipe_slick_kc\",eventNonInteraction:!0})}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E$(document).ready(function(){setTimeout(function(){var d=[\"IDR\",\"SEK\",\"CZK\",\"DKK\",\"NOK\"],c=",["escape",["macro",84],8,16],",a=\"N\";if(\"product detail\"==digitalData.page.pageInfo.pageTrack)var f=$(\"#currentModelName\").val().toUpperCase(),g=$(\"#current_model_code\").val().toUpperCase(),e=$(\"#modelDisplayNmTitle\").val();else f=digitalData.product.model_name.toUpperCase(),g=\"\"==digitalData.product.model_code||null==digitalData.product.model_code?digitalData.product.model_name.toUpperCase():digitalData.product.model_code.toUpperCase(),\ne=digitalData.product.displayName;var b=$(\".standard-anchor-navi__price-save\").children(\"del\").text()?$(\".standard-anchor-navi__price-save\").children(\"del\").text():$(\".standard-anchor-navi__price-total .pd-anchor-total\").text();-1\u003Cb.indexOf(\"\\u20ac\")\u0026\u0026(a=\"Y\");b=d.includes(c)?b.replace(\/[^-\\.,0-9]\/g,\"\").replace(\/,\/gi,\"#\").trim():b.replace(\/[^-\\.,0-9]\/g,\"\").replace(\/[\\.0]0*$\/g,\"\").replace(\/,\/gi,\"#\").trim();d=",["escape",["macro",108],8,16],"+\"\/\"+",["escape",["macro",109],8,16],";b=\"EUR\"==c||\"RON\"==c||\"Y\"==a?b.replace(\/\\.\/gi,\n\"\").replace(\/#\/gi,\".\").replace(\/\\.$\/g,\"\"):b.replace(\/#\/gi,\"\");c=[];a={};a.name=f;a.id=g;a.dimension9=e;b\u0026\u0026(a.price=b);a.brand=e;a.category=d;a.quantity=1;c.push(a);dataLayer.push({event:\"detail\",ecommerce:{detail:{products:c}}});dataLayer.push({event:\"option_time\"})},4E3)});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    }],
  "predicates":[{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"li.s-depth1-wrap a.s-btn-link,  div.s-depth2-col a,  div.gb-gnb__drop-mobile-wrap a:not(.s-btn-back), button.js-ico-search span.s-svg.s-ico-search,  .gb-gnb__utility \u003E li .s-btn-utility, div.s-col-imagepromo a img, a.s-btn-login, a.s-btn-utility.js-empty-cart, span.s-svg.s-ico-cart-empty, span.s-svg.s-ico-cart, .gb-gnb__submenu-bar-inner \u003E a, .s-text-transform-none, .s-text-transform-none span, .s-member-wrap .s-depth1-link, .s-member-wrap .s-depth1-link span, .gb-gnb__my-layer li a, button.s-btn-utility span, div.s-col-imagepromo .s-imagepromo-cta span"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":".gb-footer__nav-link a,  .s-support-link li a,.gb-footer-2019__item-list ul li a, .gb-footer-2019__item-headline button,.gb-footer-2019__language-link span,.gb-footer-2019__language-link img,.gb-footer-2019__language ul li a span,.gb-footer-2019__language ul li a img,.gb-footer-2019__info-local ul li a img,.gb-footer-2019__sns ul li a svg,.gb-footer-2019__sns ul li a svg path,.gb-footer__btn-top a, div.btn-to-top a, button.s-btn-gotop, div.f_backtotop a,.gb-footer-2019__btn-top,.gb-footer-2019__bottom-list li a"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"home_scroll"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.gb-gnb__search-history a, div.gb-gnb__search-history ul li a,div.ho-g-search-bar__history a, div.ho-g-search-bar__history ul li a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.gb-gnb__search-product-title strong,a.gb-gnb__search-product-title span img, div.gb-gnb__search-product-links a.s-btn, div.gb-gnb__search-suggest-list a, a.ho-g-search-bar__product-title strong,a.ho-g-search-bar__product-title span img,div.ho-g-search-bar__product-links a.s-btn,div.ho-g-search-bar__suggest-list a,.gb-gnb__search-product-rate a, .ho-g-search-bar__product-rate a"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"search_result"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"button.ico_grid, button.ico_list, a.view-all, div.result-filter__option a.result-filter__option-all"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"result"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"li.category__option-lst input"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"check"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"button[onclick*=fmyChipchange], button[onclick*=fmyChipchange]\u003Espan"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.btn-arrow.btn-next.active\u003Espan, a.btn-arrow.btn-next.active, a.btn-arrow.btn-prev.active\u003Espan, a.btn-arrow.btn-prev.active, ul.result-pagination__pages li a"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"search_sortby"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.result--banner a, div.result--banner a img"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"li.search-result--product a.product-img__link, li.search-result--product a.product-img__link img, li.search-result--product div.product-details__title, li.search-result--product div.product-details__title a, li.search-result--article a, div.product-links a[name=detailPageLink], li.search-result--video a, button.btn-ico-zoom, li.search-result--article a.product-img__link, li.search-result--article a.product-img__link img"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"result"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"ul.cm-breadcrumb__path a, ul.cm-breadcrumb__path a span"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"ul.s-layer-tab a.s-tab-link,  span.s-link a,  div.s-btn-location a,  a.product-anchor-nav__link,  a.product-anchor-nav-mo__link, a.product-anchor-nav-nonprice__link,  a.product-anchor-nav-nonprice-mo__link,  div.hp-header__btn-primary a[class=s-btn-encased],  a.js-cta-buy-etc, button.js-cta-buy-etc,  a.js-cta-buy, button.js-cta-buy,  a#anchorWhereToBuy, a#anchorWhereToBuy span,  a#anchorWhereToBuy.product-anchor-nav__link.js-cta-buy span, div.other-shops-button span.s-ico-location, div.other-shops-button span.product-details__cta-text, button.product-details__link span.product-details__cta-text, a[config-url*=buy], a[config-url*=buy] \u003E span, a.js-cta-buy span, ul.navbar-nav li a, button.btn-search-nav, button.btn-search-nav i, div.ng-scope a.buy-online, div.ng-scope a.buy-online i, ul#localTabs li a, ul.wtb-list div.radio input, div.retailer-local button.pull-right, div.standard-anchor-navi__cta-wrap a.js-cta-stock, div.standard-anchor-navi__cta-wrap a.js-cta-stock span, section.product-details input#getStockAlertSubmit"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.home-unpacked-teasing__cta a.s-btn-encased,div.ho-g-main-kv-carousel__cta \u003E a, div.ho-g-main-kv-carousel__cta \u003E button,ul.ma-g-product-tile__container-list a span,.ma-g-product-tile__item-inner .ma-g-product-tile__item-inner-wrap,.ma-g-product-tile__item-buynow-wrap .ma-g-product-tile__item-buynow a,div.ho-product-3column-group__ct-inner a,div.ho-product-3column-group__ct-inner button, .ma-g-visual-story-carousel__content-desc-wrap .ma-g-visual-story-carousel__content-desc-mo, div.home-unpacked-teasing__cta a.js-video"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"home"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.feature-benefit__desc-wrap a.s-btn-encased,button.feature-benefit__btn-play, section.feature-benefit button.slick-arrow,section.feature-benefit ul.slick-dots button"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product family showcase"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div:not([class*=recently]):not([class*=cm-shop-card]) \u003E ul.slick-dots li button, div:not([class*=recently]):not([class*=cm-shop-card]) \u003E button.slick-arrow, div.shop-header__btn \u003E a.s-btn-encased, .shop-header__ico-play, .video-group__btn-play, .pr-video-thumbnail-group__btn-play, div.pr-flagship-header__btn-wrap \u003E a.s-btn-encased, div.shop-header__btn \u003E button.s-btn-play-round,div.pr-video-thumbnail-group \u003E div \u003E ul.slick-dots \u003E li \u003E button,div.shop-header__btn \u003E a.s-btn-text-underline"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"n"
    },{
      "function":"_eq",
      "arg0":["macro",70],
      "arg1":"y"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.secondary-menu__item-link span"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.feature-benefit__desc-wrap a, .feature-benefit button.js-video"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product category details"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product finder"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.filter-sort__sub-wrap a span, div.filter-sort__checkbox input, div.filter-sort__radio,  div.filter-sort__reset-button button, div.filter-sort__reset-button button span,  div.filter-sort__list\u003Ea.filter-sort__list-title, div.filter-sort__list\u003Ea.filter-sort__list-title span, div.filter-sort__filter-select-mo select, div.filter-sort__head\u003Ebutton.filter-sort__head-title, div.filter-sort__head\u003Ebutton.filter-sort__head-title span, div.filter-sort__results-button button, div.filter-sort__type\u003E*, div.filter-sort__sub-wrap a"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"unchecked"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.picker-option,  a.colorpicker-color, span.product-card__img-inner img, p.product-card__name"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.product-anchor-nav__item-link span,  a.product-anchor-nav-mo__item-link span,  a.product-anchor-nav-nonprice__item-link span,  a.product-anchor-nav-nonprice-mo__item-link span, a.product-anchor-nav__item-link,  a.product-anchor-nav-mo__item-link,  a.product-anchor-nav-nonprice__item-link,  a.product-anchor-nav-nonprice-mo__item-link"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product detail"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.product-details__thumb-list a.product-details__link, button.product-details__thumb-arrow,  span.product-details__thumb-btn,  button.s-btn-zoom span,  div.s-btn-arrow button,  button.s-btn-up span,  button.s-btn-down span,  button.s-btn-left span, button.s-btn-right span,  .product-details__zoom-btn .s-btn-zoom"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"option_time"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"pd_scroll"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"ul.product-details__share-ico a.product-details__link, ul.sc-page-title__share-list li a, li.standard-anchor-navi__share-item a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.product-support__faq-inner a.s-btn-text,div.product-support__resource-section-btn a, div.product-support__more a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.product-specs__btn-wrap a.s-btn-text.show_btn, div.product-specs__btn-wrap a.s-btn-text.s-ico-up"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.product-specs__more-wrap a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"ul.product-card__picker a, div.product-card__btn-wrap a, a.product-card__img-link img, div.product-card__prd-info a p,section.product-compare button.slick-arrow, ul.product-card__colorpicker a, div.cm-shop-card__review .bv_main_container *"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.recently-viewed__img-wrap img"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.related-products-img img, a.related-products-info__title, div.related-products-info a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"button.s-btn-text.s-btn-text--pd"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.subnav-menus div.inside ul li a, a.order-button.buy, div.f_header-inner a, ul.nav.navbar-nav li a,   button.btn.btn-primary.hidden-xs, .f_header-type1 a, div.m_banner_header.buy a, .m_banner_article a.c_btn_pre-type2, div.nav-list ul li a"
    },{
      "function":"_cn",
      "arg0":["macro",106],
      "arg1":"smartphones\/galaxy-s8"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"product offer"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.s-tit-filter button.s-btn-filter,  button#filter,  div.s-filter-select-sub-wrap a span, div.s-img-wrap a img, div.s-info-wrap p a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.s-btn-primary a"
    },{
      "function":"_re",
      "arg0":["macro",120],
      "arg1":"^.*\/support\/model\/.*$|^.*\/support\/app\/.*$|^.*\/support\/generic\/.*$"
    },{
      "function":"_sw",
      "arg0":["macro",7],
      "arg1":"vn:campaign:savina:"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"buying configurator"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"login_account"
    },{
      "function":"_re",
      "arg0":["macro",120],
      "arg1":"^.*\/support\/.*$"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.control.prev a, div.control.next a, div.control.prev a span, div.control.next a span, div.control.prev a strong, div.control.next a strong, div.content a"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":".m_btn_type2-prev, .m_btn_type2-next, .m_btn_type2-prev span, .m_btn_type2-next span, .m_product-gallery ul li a img, .m_gallery-title a.s882, .m_gallery-title a#s881,  div.c_paging-type a,  div.color-chip a, button.c_btn_close-type1, a.zoom-area img, div.m_ly_thumnail img, div.m_gallery-title a"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"detail"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",127],
      "arg1":"(^$|((^|,)7322547_102($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.product-card-pdp-link img, a.cta-default, a.cta-default span, #getStockAlertSubmit, div.reevoomark_badge a.reviews, a.bv_main_container *, div.btn-view-more a, p.s-energy-label *, a.bv_main_container, li.product-card__img-ctrl-item a, div.product-card__prd-info-title-wrap a span, a:not([link_info$=cart]).js-buy-now, a:not([link_info$=cart]).js-buy-now\u003Espan, a:not([link_info$=cart]).js-pop-buy-now, a:not([link_info$=cart]).js-pop-buy-now\u003Espan, div.product-card__detail-reviews-wrap p.review-count, div.product-card__detail-reviews-wrap div.star-rating__star span"
    },{
      "function":"_eq",
      "arg0":["macro",79],
      "arg1":"true"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.ma-g-visual-story-carousel__content-img-wrap .ma-g-visual-story-carousel__content-discover-full,a.ma-g-visual-story-carousel__content-img-wrap .ma-g-visual-story-carousel__content-discover-btn, .ma-g-visual-story-carousel__head .ma-g-visual-story-carousel__head-title a, .ma-g-visual-story-carousel__content-list-item .ma-g-visual-story-carousel__content-img"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"swipe_slick_se"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"swipe_slick_kc"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.BT_help, a.BT_btn-detail, button.btn-pickup.active, button.btn-pickup.active span, button.close-btn, a.btn-detail-info, a.btn-shop-choice, a#choice_store, a#change_store, button#pickup-01 , button#pickup-00"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.bv_stars_component_container, button.bv_stars_button_container *, button.bv_avgRating, div.bv_avgRating_component_container, button.bv_button_buttonMinimalist, div.bv_button_component_container, div.bv_numReviews_component_container *, div.product-details__rating-reviews a#totalReviewCount"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^product detail$|^flagship pdp$"
    },{
      "function":"_eq",
      "arg0":["macro",99],
      "arg1":"st"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"flagship pdp"
    },{
      "function":"_cn",
      "arg0":["macro",106],
      "arg1":"\/buy\/"
    },{
      "function":"_cn",
      "arg0":["macro",106],
      "arg1":"\/shop\/"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",127],
      "arg1":"(^$|((^|,)7322547_152($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":".s-local-list__content-links ul li a span, .s-pop-btn .button, .s-close-button"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"product search"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"product search"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"login"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"a.product-anchor-nav-mo__link span, #anchorAddCart, div.product-details__info a.detailAddCart:not(.js-cta-stock):not([config-url*=buy]),div.product-details__info a.detailAddCart:not(.js-cta-stock):not([config-url*=buy])\u003Espan, p.product-anchor-nav__link-wrap a.detailAddCart:not(.js-cta-stock):not([config-url*=buy]), a.detailAddCart:not(.js-cta-stock):not([config-url*=buy])\u003Espan, div.pd-pop-content-cta button#viewCart, a[link_info$=cart].js-buy-now, a[link_info$=cart].js-buy-now\u003Espan, a[link_info$=cart].js-pop-buy-now, a[link_info$=cart].js-pop-buy-now\u003Espan, ul.search-result__list a[link_info*=cart], ul.search-result__list a[link_info*=cart]\u003Espan"
    },{
      "function":"_eq",
      "arg0":["macro",69],
      "arg1":"y"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^product category$|^product detail$|^home$|^product family showcase$"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"mobile"
    },{
      "function":"_css",
      "arg0":["macro",2],
      "arg1":"div.s-color-wrap span, ul.product-details__list li a"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"gtm.historyChange"
    }],
  "rules":[
    [["if",0,1],["add",0]],
    [["if",1,2],["add",1]],
    [["if",3],["add",2]],
    [["if",1,4],["add",3]],
    [["if",1,5],["add",4]],
    [["if",6],["add",5]],
    [["if",1,7,8],["add",6]],
    [["if",1,8,9,10],["add",7]],
    [["if",1,8,11],["add",8]],
    [["if",1,8,12],["add",9]],
    [["if",13],["add",10]],
    [["if",1,8,14],["add",11]],
    [["if",1,15,16],["add",12]],
    [["if",1,17],["add",13]],
    [["if",1,18],["add",14]],
    [["if",1,19,20],["add",15]],
    [["if",1,21,22],["add",16]],
    [["if",1,23,24,25],["add",17]],
    [["if",1,22,26],["add",18]],
    [["if",1,27,28],["add",19]],
    [["if",1,29,30,31],["add",20]],
    [["if",1,29,32],["add",21]],
    [["if",1,33,34],["add",22]],
    [["if",1,34,35],["add",23]],
    [["if",34,36],["add",24]],
    [["if",37],["add",25]],
    [["if",1,38],["add",26]],
    [["if",1,34,39],["add",27]],
    [["if",1,34,40],["add",28]],
    [["if",1,34,41],["add",29]],
    [["if",1,34,42],["add",30]],
    [["if",1,34,43],["add",31]],
    [["if",1,29,43],["add",31]],
    [["if",1,34,44],["add",32]],
    [["if",1,34,45],["add",33]],
    [["if",1,46,47],["add",34]],
    [["if",1,48,49],["add",35]],
    [["if",1,48,50],["add",36]],
    [["if",1],["unless",24,51],["add",37]],
    [["if",1,51],["unless",24],["add",38]],
    [["if",54],["unless",51,52,53],["add",39]],
    [["if",51,54],["add",40]],
    [["if",55],["add",41]],
    [["if",54],["unless",56],["add",42]],
    [["if",1,47,57],["add",43]],
    [["if",1,47,58],["add",44]],
    [["if",59],["add",45]],
    [["if",60],["add",46]],
    [["if",61],["add",47,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103]],
    [["if",62,63],["add",48]],
    [["if",1,29,64,65],["add",49]],
    [["if",1,20,66],["add",50]],
    [["if",67],["add",51]],
    [["if",68],["add",52]],
    [["if",1,34,69],["add",53]],
    [["if",1,70,71,72],["add",54]],
    [["if",73,76,77],["unless",74,75],["add",55]],
    [["if",1,78],["add",56]],
    [["if",20,54],["add",104]],
    [["if",54,79],["add",105]],
    [["if",54,80],["add",106]],
    [["if",34,54],["add",107]],
    [["if",81],["add",108]],
    [["if",1,82],["add",109]],
    [["if",1,83],["add",110]],
    [["if",61,71],["add",111]],
    [["if",61,84,85],["unless",56],["add",112]],
    [["if",34,86,87],["add",113]]]
},
"runtime":[
[],[]
]



};
var aa,ba=this||self,ca=/^[\w+/_-]+[=]{0,2}$/,da=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},na=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},pa=function(a,b){for(var c=new oa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},ra=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},sa=function(a){return Math.round(Number(a))||0},ta=function(a){return"false"==String(a).toLowerCase()?!1:!!a},ua=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},va=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},wa=function(){return(new Date).getTime()},oa=function(){this.prefix="gtm.";this.values={}};oa.prototype.set=function(a,b){this.values[this.prefix+a]=b};oa.prototype.get=function(a){return this.values[this.prefix+a]};oa.prototype.contains=function(a){return void 0!==this.get(a)};
var xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},za=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Aa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ca=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Da=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ea=function(a){if(null==a)return String(a);var b=Da.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Fa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ga=function(a){if(!a||"object"!=Ea(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Fa(a,"constructor")&&!Fa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Fa(a,b)},Ha=function(a,b){var c=b||("array"==Ea(a)?[]:{}),d;for(d in a)if(Fa(a,d)){var e=a[d];"array"==Ea(e)?("array"!=Ea(c[d])&&(c[d]=[]),c[d]=Ha(e,c[d])):Ga(e)?(Ga(c[d])||(c[d]={}),c[d]=Ha(e,c[d])):c[d]=e}return c};var f=window,u=document,Ia=navigator,Ka=u.currentScript&&u.currentScript.src,La=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Ma=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Na=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ma(d,b);c&&(d.onerror=c);var e;if(null===da)b:{var g=ba.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ca.test(k)){da=k;break b}}da=""}e=da;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},Oa=function(){if(Ka){var a=Ka.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Pa=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Ma(c,b);void 0!==a&&(c.src=a);return c},Qa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ra=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Sa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},A=function(a){f.setTimeout(a,0)},Ta=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ua=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Va=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wa=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},Xa=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Ya=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Za={},$a=function(a,b){Za[a]=Za[a]||[];Za[a][b]=!0},bb=function(a){for(var b=[],c=Za[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var cb=/:[0-9]+$/,db=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},gb=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=eb(a.protocol)||eb(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(cb,"").toLowerCase());var g=b,h,k=eb(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=fb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(cb,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||$a("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=db(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},eb=function(a){return a?a.replace(":","").toLowerCase():""},fb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
hb=function(a){var b=u.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||$a("TAGGING",1),c="/"+c);var d=b.hostname.replace(cb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var ib=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},lb=function(a,b,c,d){var e=jb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=kb(e,function(g){return g.Cb},b);if(1===e.length)return e[0].id;e=kb(e,function(g){return g.Ua},c);return e[0]?e[0].id:void 0}};
function mb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=ib(b,e).indexOf(c)}
var pb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var w=nb(),v=0;v<w.length;++v){var y="none"!=w[v]?w[v]:void 0;if(!ob(y,t)&&mb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!ob(p,t)&&mb(m,a,l)}return k};function kb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function jb(a,b){for(var c=[],d=ib(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Cb:1*k[0]||1,Ua:1*k[1]||1}))}}return c}
var qb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,rb=/(^|\.)doubleclick\.net$/i,ob=function(a,b){return rb.test(document.location.hostname)||"/"===b&&qb.test(a)},nb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var tb=[],ub={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},vb=function(a){return ub[a]},wb=/[\x00\x22\x26\x27\x3c\x3e]/g;var Ab=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Bb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Cb=function(a){return Bb[a]};
tb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Ab,Cb)+"'"}};var Lb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Mb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Nb=function(a){return Mb[a]};tb[16]=function(a){return a};var Pb=[],Qb=[],Rb=[],Sb=[],Tb=[],Ub={},Vb,Wb,Xb,Yb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Zb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Ub[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Ub[c](e):(void 0)(c,e,b)},ac=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=$b(a[e],b,c));return d},
bc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Ub[b];return c?c.priorityOverride||0:0},$b=function(a,b,c){if(ka(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push($b(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=Pb[g];if(!h||b.wc(h))return;c[g]=!0;try{var k=ac(h,b,c);k.vtp_gtmEventId=b.id;d=Zb(k,b);Xb&&(d=Xb.qf(d,k))}catch(v){b.Pd&&b.Pd(v,Number(g)),d=!1}c[g]=!1;return d;
case "map":d={};for(var l=1;l<a.length;l+=2)d[$b(a[l],b,c)]=$b(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var p=$b(a[n],b,c);Wb&&(m=m||p===Wb.rb);d.push(p)}return Wb&&m?Wb.tf(d):d.join("");case "escape":d=$b(a[1],b,c);if(Wb&&ka(a[1])&&"macro"===a[1][0]&&Wb.Vf(a))return Wb.eg(d);d=String(d);for(var t=2;t<a.length;t++)tb[a[t]]&&(d=tb[a[t]](d));return d;case "tag":var q=a[1];if(!Sb[q])throw Error("Unable to resolve tag reference "+q+".");return d={Bd:a[2],index:q};case "zb":var r=
{arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var w=cc(r,b,c);a[4]&&(w=!w);return w;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},cc=function(a,b,c){try{return Vb(ac(a,b,c))}catch(d){JSON.stringify(a)}return null};var dc=function(){var a=function(b){return{toString:function(){return b}}};return{Zc:a("convert_case_to"),$c:a("convert_false_to"),ad:a("convert_null_to"),bd:a("convert_true_to"),cd:a("convert_undefined_to"),ra:a("function"),Fe:a("instance_name"),Ge:a("live_only"),He:a("malware_disabled"),Ie:a("metadata"),Og:a("original_vendor_template_id"),Je:a("once_per_event"),rd:a("once_per_load"),sd:a("setup_tags"),td:a("tag_id"),ud:a("teardown_tags")}}();var ec=null,hc=function(a){function b(p){for(var t=0;t<p.length;t++)d[p[t]]=!0}var c=[],d=[];ec=fc(a);for(var e=0;e<Qb.length;e++){var g=Qb[e],h=gc(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<Sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},gc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=ec(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=ec(e[g]);if(null===h)return null;
if(h)return!1}return!0},fc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=cc(Rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ic,jc=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Ze&&(l["fix_"+m]=!0),l.Cd=l.Cd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var w=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(w)return{tagName:q.tagName,F:q.F,content:w[1],length:w[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(w,v,y,x,z){var B=y||x||z||g.test(v)&&v||null,C=document.createElement("div");C.innerHTML=B;r[v]=C.textContent||C.innerText||B});return{tagName:q[1],F:r,Za:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Cd&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,w=[];w.Od=function(){return this[this.length-1]};w.Bc=function(C){var E=this.Od();return E&&E.tagName&&E.tagName.toUpperCase()===C.toUpperCase()};w.pf=
function(C){for(var E=0,F;F=this[E];E++)if(F.tagName===C)return!0;return!1};var v=function(C){C&&"startTag"===C.type&&(C.Za=q.test(C.tagName)||C.Za);return C},y=t,x=function(){k="</"+w.pop().tagName+">"+k},z={startTag:function(C){var E=C.tagName;"TR"===E.toUpperCase()&&w.Bc("TABLE")?(k="<TBODY>"+k,B()):l.Wg&&r.test(E)&&w.pf(E)?w.Bc(E)?x():(k="</"+C.tagName+">"+k,B()):C.Za||w.push(C)},endTag:function(C){w.Od()?l.Df&&!w.Bc(C.tagName)?x():w.pop():l.Df&&(y(),B())}},B=function(){var C=k,E=v(y());k=C;if(E&&
z[E.type])z[E.type](E)};t=function(){B();return v(y())}}();return{append:function(q){k+=q},ng:t,bh:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},dh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.jh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.fh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.kh=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.F){var t=m.F[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Za?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Vg=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.df=a.df||!b[h]&&h;ic=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,w=p&&p.length||0;for(r=0;r<w;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={Pe:a,Qe:a,Re:a,Se:a,$e:a,af:function(p){return p},done:a,error:function(p){throw p;},rg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,w){var v="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(v);return b(y)?String(y):y}b(w)&&""!==w?q.setAttribute(v,
w):q.removeAttribute(v)}function t(q,r){var w=q.ownerDocument;e(this,{root:q,options:r,$a:w.defaultView||w.parentWindow,xa:w,Hb:ic("",{Ze:!0}),hc:[q],Jc:"",Kc:w.createElement(q.nodeName),Xa:[],la:[]});p(this.Kc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.la,arguments);for(var q;!this.Bb&&this.la.length;)q=this.la.shift(),"function"===typeof q?this.jf(q):this.Vc(q)};t.prototype.jf=function(q){var r={type:"function",value:q.name||q.toString()};this.Gc(r);q.call(this.$a,this.xa);this.Td(r)};
t.prototype.Vc=function(q){this.Hb.append(q);for(var r,w=[],v,y;(r=this.Hb.ng())&&!(v=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)w.push(r);this.Lg(w);v&&this.Jf(r);y&&this.Kf(r)};t.prototype.Lg=function(q){var r=this.ef(q);r.wd&&(r.uc=this.Jc+r.wd,this.Jc+=r.jg,this.Kc.innerHTML=r.uc,this.Ig())};t.prototype.ef=function(q){var r=this.hc.length,w=[],v=[],y=[];c(q,function(x){w.push(x.text);if(x.F){if(!/^noscript$/i.test(x.tagName)){var z=
r++;v.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.F.id&&"ps-style"!==x.F.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.Za?" />":">"))}}else v.push(x.text),y.push("endTag"===x.type?x.text:"")});return{lh:q,raw:w.join(""),wd:v.join(""),jg:y.join("")}};t.prototype.Ig=function(){for(var q,r=[this.Kc];b(q=r.shift());){var w=1===q.nodeType;if(!w||!p(q,"proxyof")){w&&(this.hc[p(q,"id")]=q,p(q,"id",null));var v=q.parentNode&&p(q.parentNode,"proxyof");
v&&this.hc[v].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Jf=function(q){var r=this.Hb.clear();r&&this.la.unshift(r);q.src=q.F.src||q.F.Pg;q.src&&this.Xa.length?this.Bb=q:this.Gc(q);var w=this;this.Kg(q,function(){w.Td(q)})};t.prototype.Kf=function(q){var r=this.Hb.clear();r&&this.la.unshift(r);q.type=q.F.type||q.F.Qg||"text/css";this.Mg(q);r&&this.write()};t.prototype.Mg=function(q){var r=this.hf(q);this.Tf(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.xa.createTextNode(q.content)))};t.prototype.hf=function(q){var r=this.xa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.F,function(w,v){r.setAttribute(w,v)});return r};t.prototype.Tf=function(q){this.Vc('<span id="ps-style"/>');var r=this.xa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Gc=function(q){q.ag=this.la;this.la=[];this.Xa.unshift(q)};t.prototype.Td=function(q){q!==this.Xa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Xa.shift(),this.write.apply(this,q.ag),!this.Xa.length&&this.Bb&&(this.Gc(this.Bb),this.Bb=null))};t.prototype.Kg=function(q,r){var w=this.ff(q),v=this.yg(w),y=this.options.Pe;q.src&&(w.src=q.src,this.wg(w,v?y:function(){r();y()}));try{this.Sf(w),q.src&&!v||r()}catch(x){this.options.error(x),r()}};t.prototype.ff=function(q){var r=this.xa.createElement(q.tagName);d(q.F,function(w,v){r.setAttribute(w,v)});q.content&&(r.text=q.content);return r};t.prototype.Sf=function(q){this.Vc('<span id="ps-script"/>');
var r=this.xa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.wg=function(q,r){function w(){q=q.onload=q.onreadystatechange=q.onerror=null}var v=this.options.error;e(q,{onload:function(){w();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(w(),r())},onerror:function(){var y={message:"remote script failed "+q.src};w();v(y);r()}})};t.prototype.yg=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.rg&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var v=r.shift(),y;v&&(y=v[v.length-1],y.Qe(),v.stream=t.apply(null,v),y.Re())}function t(v,y,x){function z(F){F=x.af(F);w.write(F);x.Se(F)}w=new n(v,x);w.id=q++;w.name=x.name||w.id;var B=v.ownerDocument,C={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=w.$a.onerror||a;w.$a.onerror=function(F,Q,W){x.error({Zg:F+
" - "+Q+":"+W});E.apply(w.$a,arguments)};w.write(y,function(){e(B,C);w.$a.onerror=E;x.done();w=null;p()});return w}var q=0,r=[],w=null;return e(function(v,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);v=/^#/.test(v)?l.document.getElementById(v.substr(1)):v.Xg?v[0]:v;var z=[v,y,x];v.dg={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.$e(z);r.push(z);w||p();return v.dg},{streams:{},ah:r,Rg:n})}();jc=l.postscribe}})();var yc={},zc=null,Ac=Math.random();yc.i="GTM-N2ZVVQC";yc.vb="651";var Bc="www.googletagmanager.com/gtm.js";var Cc=Bc,Dc=null,Ec=null,Fc=null,Gc="//www.googletagmanager.com/a?id="+yc.i+"&cv=80",Hc={},Ic={},Jc=function(){var a=zc.sequence||0;zc.sequence=a+1;return a};var D=function(a,b,c,d){return(2===Kc()||d||"http:"!=f.location.protocol?a:b)+c},Kc=function(){var a=Oa(),b;if(1===a)a:{var c=Cc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Lc=!1;
var Pc=function(){return"&tc="+Sb.filter(function(a){return a}).length},Yc=function(){Qc&&(f.clearTimeout(Qc),Qc=void 0);void 0===Rc||Sc[Rc]&&!Tc||(Uc[Rc]||Vc.Xf()||0>=Wc--?($a("GTM",1),Uc[Rc]=!0):(Vc.pg(),Qa(Xc()),Sc[Rc]=!0,Tc=""))},Xc=function(){var a=Rc;if(void 0===a)return"";var b=bb("GTM"),c=bb("TAGGING");return[Zc,Sc[a]?"":"&es=1",$c[a],b?"&u="+b:"",c?"&ut="+c:"",Pc(),Tc,"&z=0"].join("")},ad=function(){return[Gc,"&v=3&t=t","&pid="+na(),"&rv="+yc.vb].join("")},bd="0.005000">
Math.random(),Zc=ad(),cd=function(){Zc=ad()},Sc={},Tc="",Rc=void 0,$c={},Uc={},Qc=void 0,Vc=function(a,b){var c=0,d=0;return{Xf:function(){if(c<a)return!1;wa()-d>=b&&(c=0);return c>=a},pg:function(){wa()-d>=b&&(c=0);c++;d=wa()}}}(2,1E3),Wc=1E3,dd=function(a,b){if(bd&&!Uc[a]&&Rc!==a){Yc();Rc=a;Tc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";$c[a]="&e="+c+"&eid="+a;Qc||(Qc=f.setTimeout(Yc,500))}},ed=function(a,b,c){if(bd&&!Uc[a]&&b){a!==Rc&&(Yc(),Rc=a);var d=String(b[dc.ra]||"").replace(/_/g,
"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;Tc=Tc?Tc+"."+e:"&tr="+e;Qc||(Qc=f.setTimeout(Yc,500));2022<=Xc().length&&Yc()}};var fd={},gd=new oa,hd={},id={},md={name:"dataLayer",set:function(a,b){Ha(jd(a,b),hd);kd()},get:function(a){return ld(a,2)},reset:function(){gd=new oa;hd={};kd()}},ld=function(a,b){if(2!=b){var c=gd.get(a);if(bd){var d=nd(a);c!==d&&$a("GTM",5)}return c}return nd(a)},nd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:pd(d)},pd=function(a){for(var b=hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var sd=function(a,b){id.hasOwnProperty(a)||(gd.set(a,b),Ha(jd(a,b),hd),kd())},jd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},kd=function(a){ra(id,function(b,c){gd.set(b,c);Ha(jd(b,void 0),hd);Ha(jd(b,c),hd);a&&delete id[b]})},td=function(a,b,c){fd[a]=fd[a]||{};var d=1!==c?nd(b):gd.get(b);"array"===Ea(d)||"object"===Ea(d)?fd[a][b]=Ha(d):fd[a][b]=d},ud=function(a,b){if(fd[a])return fd[a][b]};var vd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),wd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},xd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},yd="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ad=function(a){var b=ld("gtm.whitelist");b&&$a("GTM",9);var c=b&&Ca(ua(b),wd),d=ld("gtm.blacklist");d||(d=ld("tagTypeBlacklist"))&&$a("GTM",3);
d?$a("GTM",8):d=[];zd()&&(d=ua(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(ua(d),"google")&&$a("GTM",2);var e=d&&Ca(ua(d),xd),g={};return function(h){var k=h&&h[dc.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Ic[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>
la(c,l[p])){$a("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r=pa(e,l||[]);r&&$a("GTM",10);t=r}}var w=!m||t;w||!(0<=la(l,"sandboxedScripts"))||c&&-1!==la(c,"sandboxedScripts")||(w=pa(e,yd));return g[k]=w}},zd=function(){return vd.test(f.location&&f.location.hostname)};var Bd={qf:function(a,b){b[dc.Zc]&&"string"===typeof a&&(a=1==b[dc.Zc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(dc.ad)&&null===a&&(a=b[dc.ad]);b.hasOwnProperty(dc.cd)&&void 0===a&&(a=b[dc.cd]);b.hasOwnProperty(dc.bd)&&!0===a&&(a=b[dc.bd]);b.hasOwnProperty(dc.$c)&&!1===a&&(a=b[dc.$c]);return a}};var Cd={active:!0,isWhitelisted:function(){return!0}},Dd=function(a){var b=zc.zones;!b&&a&&(b=zc.zones=a());return b};var Ed=!1,Fd=0,Gd=[];function Hd(a){if(!Ed){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ed=!0;for(var e=0;e<Gd.length;e++)A(Gd[e])}Gd.push=function(){for(var g=0;g<arguments.length;g++)A(arguments[g]);return 0}}}function Id(){if(!Ed&&140>Fd){Fd++;try{u.documentElement.doScroll("left"),Hd()}catch(a){f.setTimeout(Id,50)}}}var Jd=function(a){Ed?a():Gd.push(a)};var Kd={},Ld={},Md=function(a,b,c){if(!Ld[a])return-1;var d={};Ga(c)&&(d=Ha(c,d));d.id=b;d.status="timeout";return Ld[a].tags.push(d)-1},Nd=function(a,b,c,d){if(Ld[a]){var e=Ld[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Od(a){for(var b=Kd[a]||[],c=0;c<b.length;c++)b[c]();Kd[a]={push:function(d){var e=!1;d(yc.i,Ld[a]),e=!0;!e&&d(yc.i)}}}
var Rd=function(a,b,c){Ld[a]={tags:[]};ha(b)&&Pd(a,b);c&&f.setTimeout(function(){return Od(a)},Number(c));return Qd(a)},Pd=function(a,b){Kd[a]=Kd[a]||[];Kd[a].push(ya(function(){return A(function(){var c=!1;b(yc.i,Ld[a]),c=!0;!c&&b(yc.i)})}))};function Qd(a){var b=0,c=0,d=!1;return{add:function(){c++;return ya(function(){b++;d&&b>=c&&Od(a)})},Xe:function(){d=!0;b>=c&&Od(a)}}};var Sd=function(){function a(d){return!ja(d)||0>d?0:d}if(!zc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ja(md.get("gtm.start"))?md.get("gtm.start"):0;zc._li={cst:a(c-b),cbt:a(Ec-b)}}};var Wd=!1,Xd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Yd=!1;
var Zd=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||$a("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Sd();return f[b]},$d=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Xd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var be=function(){},ae=function(){return f.GoogleAnalyticsObject||"ga"},ce=!1;var je=function(a){};function ie(a,b){a.containerId=yc.i;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function ke(a,b,c,d){var e=Sb[a],g=le(a,b,c,d);if(!g)return null;var h=$b(e[dc.sd],c,[]);if(h&&h.length){var k=h[0];g=ke(k.index,{K:g,P:1===k.Bd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function le(a,b,c,d){function e(){if(g[dc.He])k();else{var v=ac(g,c,[]),y=Md(c.id,Number(g[dc.td]),v[dc.Ie]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"5");Nd(c.id,y,"success",C);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var C=wa()-B;ed(c.id,Sb[a],"6");Nd(c.id,y,"failure",C);k()}};v.vtp_gtmTagId=g.tag_id;v.vtp_gtmEventId=
c.id;ed(c.id,g,"1");var z=function(C){var E=wa()-B;je(C);ed(c.id,g,"7");Nd(c.id,y,"exception",E);x||(x=!0,k())};var B=wa();try{Zb(v,c)}catch(C){z(C)}}}
var g=Sb[a],h=b.K,k=b.P,l=b.terminate;if(c.wc(g))return null;var m=$b(g[dc.ud],c,[]);if(m&&m.length){var n=m[0],p=ke(n.index,{K:h,P:k,terminate:l},c,d);if(!p)return null;h=p;k=2===n.Bd?l:p}if(g[dc.rd]||g[dc.Je]){var t=g[dc.rd]?Tb:c.Ag,q=h,r=k;if(!t[a]){e=ya(e);var w=me(a,t,e);h=w.K;k=w.P}return function(){t[a](q,r)}}return e}function me(a,b,c){var d=[],e=[];b[a]=ne(d,e,c);return{K:function(){b[a]=oe;for(var g=0;g<d.length;g++)d[g]()},P:function(){b[a]=pe;for(var g=0;g<e.length;g++)e[g]()}}}
function ne(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function oe(a){a()}function pe(a,b){b()};var se=function(a,b){for(var c=[],d=0;d<Sb.length;d++)if(a.Ta[d]){var e=Sb[d];var g=b.add();try{var h=ke(d,{K:g,P:g,terminate:g},a,d);h?c.push({ce:d,b:bc(e),Bf:h}):(qe(d,a),g())}catch(l){g()}}b.Xe();c.sort(re);for(var k=0;k<c.length;k++)c[k].Bf();return 0<c.length};function re(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.ce,k=b.ce;g=h>k?1:h<k?-1:0}return g}
function qe(a,b){if(!bd)return;var c=function(d){var e=b.wc(Sb[d])?"3":"4",g=$b(Sb[d][dc.sd],b,[]);g&&g.length&&c(g[0].index);ed(b.id,Sb[d],e);var h=$b(Sb[d][dc.ud],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var te=!1,ue=function(a,b,c,d,e){if("gtm.js"==b){if(te)return!1;te=!0}dd(a,b);var g=Rd(a,d,e);td(a,"event",1);td(a,"ecommerce",1);td(a,"gtm");var h={id:a,name:b,wc:Ad(c),Ta:[],Ag:[],Pd:function(p){$a("GTM",6);je(p)}};h.Ta=hc(h);var k=se(h,g);"gtm.js"!==b&&"gtm.sync"!==b||be();if(!k)return k;for(var l={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,
__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},m=0;m<h.Ta.length;m++)if(h.Ta[m]){var n=Sb[m];if(n&&!l[n[dc.ra]])return!0}return!1};var G={Sb:"event_callback",Ub:"event_timeout"};var we={};var xe=/[A-Z]+/,ye=/\s/,ze=function(a){if(ia(a)&&(a=va(a),!ye.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(xe.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],fa:d}}}}},Be=function(a){for(var b={},c=0;c<a.length;++c){var d=ze(a[c]);d&&(b[d.id]=d)}Ae(b);var e=[];ra(b,function(g,h){e.push(h)});return e};
function Ae(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.fa[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ce=null,De={},Ee={},Ge,He=function(a,b){var c={event:a};b&&(c.eventModel=Ha(b),b[G.Sb]&&(c.eventCallback=b[G.Sb]),b[G.Ub]&&(c.eventTimeout=b[G.Ub]));return c};
var Me={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Ga(a[2]))return;c=a[2]}var d=He(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];we[b]||(we[b]=[]);we[b].push(c)}},set:function(a){var b;2==a.length&&Ga(a[1])?b=Ha(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Ha(b),b.event="gtag.set",b._clear=!0,b}},Ne={policy:!0};var Oe=function(){var a=!1;return a};var Qe=function(a){return Pe?u.querySelectorAll(a):null},Re=function(a,b){if(!Pe)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Se=!1;if(u.querySelectorAll)try{var Te=u.querySelectorAll(":root");Te&&1==Te.length&&Te[0]==u.documentElement&&(Se=!0)}catch(a){}var Pe=Se;var $e=function(a){if(Ze(a))return a;this.Hg=a};$e.prototype.If=function(){return this.Hg};var Ze=function(a){return!a||"object"!==Ea(a)||Ga(a)?!1:"getUntrustedUpdateValue"in a};$e.prototype.getUntrustedUpdateValue=$e.prototype.If;var af=!1,bf=[];function cf(){if(!af){af=!0;for(var a=0;a<bf.length;a++)A(bf[a])}}var df=function(a){af?A(a):bf.push(a)};var ef=[],ff=!1,gf=function(a){return f["dataLayer"].push(a)},hf=function(a){var b=zc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}},kf=function(a){var b=a._clear;ra(a,function(g,h){"_clear"!==g&&(b&&sd(g,void 0),sd(g,h))});Dc||(Dc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Jc(),a["gtm.uniqueEventId"]=d,sd("gtm.uniqueEventId",d));Fc=c;var e=jf(a);
Fc=null;return e};function jf(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=zc.zones;d=e?e.checkState(yc.i,c):Cd;return d.active?ue(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
var lf=function(){for(var a=!1;!ff&&0<ef.length;){ff=!0;delete hd.eventModel;kd();var b=ef.shift();if(null!=b){var c=Ze(b);if(c){var d=b;b=Ze(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ld(h,1);if(ka(k)||Ga(k))k=Ha(k);id[h]=k}}try{if(ha(b))try{b.call(md)}catch(w){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=ld(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(w){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=Me[b[0]];if(r&&(!c||!Ne[b[0]])){b=r(b);break a}}b=void 0}if(!b){ff=!1;continue}}a=kf(b)||a}}finally{c&&kd(!0)}}ff=!1}
return!a},mf=function(){var a=lf();try{var b=yc.i,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},nf=function(){var a=La("dataLayer",[]),b=La("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Jd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});df(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||
0)+1;var c=a.push;a.push=function(){var d;if(0<zc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new $e(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);ef.push.apply(ef,d);if(300<this.length)for($a("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return lf()&&h};ef.push.apply(ef,a.slice(0));A(mf)};var of;var Kf={};Kf.rb=new String("undefined");
var Lf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Kf.rb?b:a[d]);return c.join("")}};Lf.prototype.toString=function(){return this.resolve("undefined")};Lf.prototype.valueOf=Lf.prototype.toString;Kf.Ke=Lf;Kf.fc={};Kf.tf=function(a){return new Lf(a)};var Mf={};Kf.qg=function(a,b){var c=Jc();Mf[c]=[a,b];return c};Kf.zd=function(a){var b=a?0:1;return function(c){var d=Mf[c];if(d&&"function"===typeof d[b])d[b]();Mf[c]=void 0}};Kf.Vf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Kf.eg=function(a){if(a===Kf.rb)return a;var b=Jc();Kf.fc[b]=a;return'google_tag_manager["'+yc.i+'"].macro('+b+")"};Kf.Zf=function(a,b,c){a instanceof Kf.Ke&&(a=a.resolve(Kf.qg(b,c)),b=fa);return{uc:a,K:b}};var Nf=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ta(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Of=function(a){zc.hasOwnProperty("autoEventsSettings")||(zc.autoEventsSettings={});var b=zc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Pf=function(a,b,c){Of(a)[b]=c},Qf=function(a,b,c,d){var e=Of(a),g=xa(e,b,d);e[b]=c(g)},Rf=function(a,b,c){var d=Of(a);return xa(d,b,c)};var Sf=function(){for(var a=Ia.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(wa()/1E3)].join(".")},Vf=function(a,b,c,d){var e=Tf(b);return lb(a,e,Uf(c),d)},Tf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Uf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Wf(a,b){var c=""+Tf(a),d=Uf(b);1<d&&(c+="-"+d);return c};var Xf=["1"],Yf={},bg=function(a,b,c,d){var e=Zf(a);Yf[e]||$f(e,b,c)||(ag(e,Sf(),b,c,d),$f(e,b,c))};function ag(a,b,c,d,e){var g;g=["1",Wf(d,c),b].join(".");pb(a,g,c,d,0==e?void 0:new Date(wa()+1E3*(void 0==e?7776E3:e)))}function $f(a,b,c){var d=Vf(a,b,c,Xf);d&&(Yf[a]=d);return d}function Zf(a){return(a||"_gcl")+"_au"};var cg=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Rc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Rc]||(g[a[h].Rc]=[]),g[a[h].Rc].push({timestamp:k[1],Ff:k[2]}))}return g};function dg(){for(var a=eg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function fg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var eg,gg,hg=function(a){eg=eg||fg();gg=gg||dg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(eg[l],eg[m],eg[n],eg[p])}return b.join("")},ig=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=gg[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}eg=eg||fg();gg=gg||
dg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var jg;function kg(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var og=function(){var a=lg,b=mg,c=ng(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Ra(u,"mousedown",d);Ra(u,"keyup",d);Ra(u,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},ng=function(){var a=La("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var pg=/(.*?)\*(.*?)\*(.*)/,qg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,rg=/^(?:www\.|m\.|amp\.)+/,sg=/([^?#]+)(\?[^#]*)?(#.*)?/,tg=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,vg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(hg(String(d))))}var e=b.join("*");return["1",ug(e),e].join("*")},ug=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=jg)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}jg=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^jg[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},xg=function(){return function(a){var b=hb(f.location.href),c=b.search.replace("?",""),d=db(c,"_gl",!0)||"";a.query=wg(d)||{};var e=gb(b,"fragment").match(tg);a.fragment=wg(e&&e[3]||
"")||{}}},wg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=pg.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===ug(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=ig(t[q+1]);return p}}}}catch(r){}};
function yg(a,b,c){function d(m){var n=m,p=tg.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+l}c=void 0===c?!1:c;var e=sg.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function zg(a,b,c){for(var d={},e={},g=ng().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&kg(k.domains,b)&&(k.fragment?za(e,k.callback()):za(d,k.callback()))}if(Aa(d)){var l=vg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var w=yg(l,a.action);Ya.test(w)&&(a.action=w)}}}else Ag(l,a,!1)}if(!c&&Aa(e)){var v=vg(e);Ag(v,a,!0)}}function Ag(a,b,c){if(b.href){var d=yg(a,b.href,void 0===c?!1:c);Ya.test(d)&&(b.href=d)}}
var lg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||zg(e,e.hostname,!1)}}catch(h){}},mg=function(a){try{if(a.action){var b=gb(hb(a.action),"host");zg(a,b,!0)}}catch(c){}},Bg=function(a,b,c,d){og();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};ng().decorators.push(e)},Cg=function(){var a=u.location.hostname,b=qg.exec(u.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(rg,"")===e.replace(rg,"")},Dg=function(a,b){return!1===a?!1:a||b||Cg()};var Eg={};var Fg=/^\w+$/,Gg=/^[\w-]+$/,Hg=/^~?[\w-]+$/,Ig={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function Jg(a){return a&&"string"==typeof a&&a.match(Fg)?a:"_gcl"}var Lg=function(){var a=hb(f.location.href),b=gb(a,"query",!1,void 0,"gclid"),c=gb(a,"query",!1,void 0,"gclsrc"),d=gb(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||db(e,"gclid",void 0);c=c||db(e,"gclsrc",void 0)}return Kg(b,c,d)};
function Kg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Gg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Eg.gtm_3pds?0:Eg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function Mg(a,b,c){function d(p,t){var q=Ng(p,e);q&&pb(q,t,h,g,l,!0)}b=b||{};var e=Jg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Qd?7776E3:b.Qd;c=c||wa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.nh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var Ng=function(a,b){var c=Ig[a];if(void 0!==c)return b+c},Og=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function Pg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Qg=function(a,b,c,d,e){if(ka(b)){var g=Jg(e);Bg(function(){for(var h={},k=0;k<a.length;++k){var l=Ng(a[k],g);if(l){var m=ib(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Rg=function(a){return a.filter(function(b){return Hg.test(b)})},Sg=function(a){for(var b=["aw","dc"],c=Jg(a&&a.prefix),d={},e=0;e<b.length;e++)Ig[b[e]]&&(d[b[e]]=Ig[b[e]]);ra(d,function(g,h){var k=ib(c+h,u.cookie);if(k.length){var l=k[0],m=Og(l),n={};n[g]=[Pg(l)];Mg(n,a,m)}})};var Tg=/^\d+\.fls\.doubleclick\.net$/;function Ug(a){var b=hb(f.location.href),c=gb(b,"host",!1);if(c&&c.match(Tg)){var d=gb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Vg(a,b){if("aw"==a||"dc"==a){var c=Ug("gcl"+a);if(c)return c.split(".")}var d=Jg(b);if("_gcl"==d){var e;e=Lg()[a]||[];if(0<e.length)return e}var g=Ng(a,d),h;if(g){var k=[];if(u.cookie){var l=ib(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Pg(l[m]);n&&-1===la(k,n)&&k.push(n)}h=Rg(k)}else h=k}else h=k}else h=[];return h}
var Wg=function(){var a=Ug("gac");if(a)return decodeURIComponent(a);var b=cg(),c=[];ra(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].Ff);g=Rg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Xg=function(a,b,c,d,e){bg(b,c,d,e);var g=Yf[Zf(b)],h=Lg().dc||[],k=!1;if(g&&0<h.length){var l=zc.joined_au=zc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ia.sendBeacon&&Ia.sendBeacon(t)||Qa(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=Zf(b),r=Yf[q];r&&ag(q,r,c,d,e)}};var Yg;if(3===yc.vb.length)Yg="g";else{var Zg="G";Yg=Zg}
var $g={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Yg,OPT:"o"},ah=function(a){var b=yc.i.split("-"),c=b[0].toUpperCase(),d=$g[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===yc.vb.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+yc.vb+e};var hh=!!f.MutationObserver,ih=void 0,jh=function(a){if(!ih){var b=function(){var c=u.body;if(c)if(hh)(new MutationObserver(function(){for(var e=0;e<ih.length;e++)A(ih[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ra(c,"DOMNodeInserted",function(){d||(d=!0,A(function(){d=!1;for(var e=0;e<ih.length;e++)A(ih[e])}))})}};ih=[];u.body?b():A(b)}ih.push(a)};
var zh=function(){var a=u.body,b=u.documentElement||a&&a.parentElement,c,d;if(u.compatMode&&"BackCompat"!==u.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};$a("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Ah=function(a){var b=zh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,
0)+Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},Bh=function(a){if(u.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!f.getComputedStyle)return!0;var c=f.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=f.getComputedStyle(d,null))}return!1};
var Ih=function(a,b,c){function d(){var h=a();g+=e?(wa()-e)*h.playbackRate/1E3:0;e=wa()}var e=0,g=0;return{Db:function(h,k,l){var m=a(),n=m.Ad,p=void 0!==l?Math.round(l):void 0!==k?Math.round(m.Ad*k):Math.round(m.uf),t=void 0!==k?Math.round(100*k):0>=n?0:Math.round(p/n*100),q=u.hidden?!1:.5<=Ah(c);d();var r=Nf(c,"gtm.video",[b]);r["gtm.videoProvider"]="youtube";r["gtm.videoStatus"]=h;r["gtm.videoUrl"]=m.url;r["gtm.videoTitle"]=m.title;r["gtm.videoDuration"]=Math.round(n);r["gtm.videoCurrentTime"]=
Math.round(p);r["gtm.videoElapsedTime"]=Math.round(g);r["gtm.videoPercent"]=t;r["gtm.videoVisible"]=q;gf(r)},sg:function(){e=wa()},gc:function(){d()}}};var Jh=f.clearTimeout,Kh=f.setTimeout,H=function(a,b,c){if(Oe()){b&&A(b)}else return Na(a,b,c)},Lh=function(){return new Date},Mh=function(){return f.location.href},Nh=function(a){return gb(hb(a),"fragment")},Oh=function(a){return fb(hb(a))},Ph=null;
var Qh=function(a,b){return ld(a,b||2)},Rh=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return gf(a)},Sh=function(a,b){f[a]=b},K=function(a,b,c){b&&(void 0===f[a]||c&&!f[a])&&(f[a]=b);return f[a]},Th=function(a,b,c){return ib(a,b,void 0===c?!0:!!c)},Uh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Qd:d},g=Lg();Mg(g,e);Sg(e)},Vh=function(a,b,c,d,e){var g=xg(),h=ng();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&
(za(k,l.query),za(k,l.fragment));for(var m=Jg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==Ig[p]){var t=Ng(p,m),q=k[t];if(q){var r=Math.min(Og(q),wa()),w;b:{for(var v=r,y=ib(t,u.cookie),x=0;x<y.length;++x)if(Og(y[x])>v){w=!0;break b}w=!1}w||pb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var z={prefix:b,path:c,domain:d};Mg(Kg(k.gclid,k.gclsrc),z);},Wh=function(a,b,c,d,e){Qg(a,b,c,d,e);},
Xh=function(a,b){if(Oe()){b&&A(b)}else Pa(a,b)},Yh=function(a){return!!Rf(a,"init",!1)},Zh=function(a){Pf(a,"init",!0)},$h=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Cc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ra(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});H(D("https://","http://",d))},ai=function(a,b){var c=a[b];return c};
var ci=Kf.Zf;var di=new oa,ei=function(a,b){function c(h){var k=hb(h),l=gb(k,"protocol"),m=gb(k,"host",!0),n=gb(k,"port"),p=gb(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0},fi=function(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(fi({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=
String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(w){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");
return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=di.get(q);r||(r=new RegExp(c,t),di.set(q,r));p=r.test(b)}catch(w){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ei(b,c)}return!1};var hi=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ii={},ji=encodeURI,L=encodeURIComponent,ki=Qa;var li=function(a,b){if(!a)return!1;var c=gb(hb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var mi=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};ii.Wf=function(){var a=!1;return a};var ni=function(){var a=!1;return a};var Xi=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},Yi=function(){this.c=1;this.e=[];this.p=null};function Zi(a){var b=zc,c=b.gss=b.gss||{};return c[a]=c[a]||new Yi}var $i=function(a,b){Zi(a).p=b},aj=function(a){var b=Zi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var cj=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||na();return a.hid};var rj=window,sj=document,tj=function(a){var b=rj._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===rj["ga-disable-"+a])return!0;try{var c=rj.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=ib("AMP_TOKEN",sj.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return sj.getElementById("__gaOptOutExtension")?!0:!1};var Aj=function(a,b,c){zj(a);var d=Math.floor(wa()/1E3);Zi(a).e.push(new Xi(b,d,c,void 0));aj(a)},Bj=function(a,b,c){zj(a);var d=Math.floor(wa()/1E3);Zi(a).e.push(new Xi(b,d,c,!0))},zj=function(a){if(1===Zi(a).c&&(Zi(a).c=2,!Oe())){var b=encodeURIComponent(a);Na(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Dj=function(a,b){},Cj=function(a,
b){};var Y={a:{}};

Y.a.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],B=x.split(","),C=0;C<B.length;C++){var E=Number(B[C]);if(isNaN(E))return[];n.test(B[C])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var B=zh(),C=B.height;x=Math.max(w.scrollLeft+B.width,x);z=Math.max(w.scrollTop+C,z);return{wf:x,xf:z}}}function d(){q=K("self");
r=q.document;w=r.scrollingElement||r.body&&r.body.parentNode;y=c()}function e(x,z,B,C){var E=l(z),F={},Q;for(Q in E){F.ma=Q;if(E.hasOwnProperty(F.ma)){var W=Number(F.ma);x<W||(Rh({event:"gtm.scrollDepth","gtm.scrollThreshold":W,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":E[F.ma].join(",")}),Qf("sdl",z,function(R){return function(T){delete T[R.ma];return T}}(F),{}))}F={ma:F.ma}}}function g(){var x=y(),z=x.wf,B=x.xf,C=z/w.scrollWidth*100,E=B/w.scrollHeight*100;e(z,"horiz.pix",
p.tb,t.qd);e(C,"horiz.pct",p.sb,t.qd);e(B,"vert.pix",p.tb,t.vd);e(E,"vert.pct",p.sb,t.vd);Pf("sdl","pending",!1)}function h(){var x=250,z=!1;r.scrollingElement&&r.documentElement&&q.addEventListener&&(x=50,z=!0);var B=0,C=!1,E=function(){C?B=Kh(E,x):(B=0,g(),Yh("sdl")&&!a()&&(Sa(q,"scroll",F),Sa(q,"resize",F),Pf("sdl","init",!1)));C=!1},F=function(){z&&y();B?C=!0:(B=Kh(E,x),Pf("sdl","pending",!0))};return F}function k(x,z,B){if(z){var C=b(String(x));Qf("sdl",B,function(E){for(var F=0;F<C.length;F++){var Q=
String(C[F]);E.hasOwnProperty(Q)||(E[Q]=[]);E[Q].push(z)}return E},{})}}function l(x){return Rf("sdl",x,{})}function m(x){A(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,F=x.vtp_verticalThresholdsPixels,Q=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case p.tb:k(B,z,"horiz.pix");break;case p.sb:k(C,z,"horiz.pct")}switch(E){case p.tb:k(F,z,"vert.pix");break;case p.sb:k(Q,
z,"vert.pct")}Yh("sdl")?Rf("sdl","pending")||(v||(d(),v=!0),A(function(){return g()})):(d(),v=!0,w&&(Zh("sdl"),Pf("sdl","pending",!0),A(function(){g();if(a()){var W=h();Ra(q,"scroll",W);Ra(q,"resize",W)}else Pf("sdl","init",!1)})))}var n=/^\s*$/,p={sb:"PERCENT",tb:"PIXELS"},t={vd:"vertical",qd:"horizontal"},q,r,w,v=!1,y;(function(x){Y.__sdl=x;Y.__sdl.g="sdl";Y.__sdl.h=!0;Y.__sdl.b=0})(function(x){x.vtp_triggerStartOption?m(x):df(function(){m(x)})})}();
Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.g="jsm";Y.__jsm.h=!0;Y.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=K("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();


Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.g="e";Y.__e.h=!0;Y.__e.b=0})(function(a){return String(ud(a.vtp_gtmEventId,"event"))})}();Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.g="f";Y.__f.h=!0;Y.__f.b=0})(function(a){var b=Qh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?gb(hb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Oh(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Nf(c,"gtm.click");Rh(d)}}(function(b){Y.__cl=b;Y.__cl.g="cl";Y.__cl.h=!0;Y.__cl.b=0})(function(b){if(!Yh("cl")){var c=K("document");Ra(c,"click",a,!0);Zh("cl")}A(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.g="j";Y.__j.h=!0;Y.__j.b=0})(function(a){for(var b=String(a.vtp_name).split("."),c=K(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Y.a.k=["google"],function(){(function(a){Y.__k=a;Y.__k.g="k";Y.__k.h=!0;Y.__k.b=0})(function(a){return Th(a.vtp_name,Qh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.g="u";Y.__u.h=!0;Y.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Qh("gtm.url",1))||Mh();var d=b[a("vtp_component")];if(!d||"URL"==d)return Oh(String(c));var e=hb(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ka(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var p=gb(e,"QUERY",void 0,void 0,m[n]);if(void 0!=p&&(!l||""!==p)){g=p;break a}}g=void 0}else g=gb(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.g="v";Y.__v.h=!0;Y.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Qh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={},l=void 0;if(c.vtp_gaSettings){var m=c.vtp_gaSettings;Ha(mi(m.vtp_fieldsToSet,"fieldName","value"),e);Ha(mi(m.vtp_contentGroup,"index","group"),g);Ha(mi(m.vtp_dimension,"index","dimension"),h);Ha(mi(m.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;m.vtp_fieldsToSet=void 0;m.vtp_contentGroup=void 0;m.vtp_dimension=void 0;m.vtp_metric=void 0;var n=Ha(m);c=Ha(c,n)}Ha(mi(c.vtp_fieldsToSet,"fieldName","value"),e);Ha(mi(c.vtp_contentGroup,
"index","group"),g);Ha(mi(c.vtp_dimension,"index","dimension"),h);Ha(mi(c.vtp_metric,"index","metric"),k);var p=Zd(c.vtp_functionName);if(ha(p)){var t="",q="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(q=c.vtp_trackerName,t=q+"."):(q="gtm"+Jc(),t=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(U){var N=[].slice.call(arguments,0);N[0]=t+N[0];p.apply(window,N)},y=function(U,N){return void 0===N?N:U(N)},x=function(U,N){if(N)for(var Z in N)N.hasOwnProperty(Z)&&v("set",U+Z,N[Z])},z=function(){
var U=function(Db,sb,tc){if(!Ga(sb))return!1;for(var uc=xa(Object(sb),tc,[]),Fe=0;uc&&Fe<uc.length;Fe++)v(Db,uc[Fe]);return!!uc&&0<uc.length},N;if(c.vtp_useEcommerceDataLayer){var Z=!1;Z||(N=Qh("ecommerce",1))}else c.vtp_ecommerceMacroData&&(N=c.vtp_ecommerceMacroData.ecommerce);if(!Ga(N))return;N=Object(N);var qa=xa(e,"currencyCode",N.currencyCode);
void 0!==qa&&v("set","&cu",qa);U("ec:addImpression",N,"impressions");if(U("ec:addPromo",N[N.promoClick?"promoClick":"promoView"],"promotions")&&N.promoClick){v("ec:setAction","promo_click",N.promoClick.actionField);return}for(var Ba="detail checkout checkout_option click add remove purchase refund".split(" "),Ja=0;Ja<Ba.length;Ja++){var ab=N[Ba[Ja]];if(ab){U("ec:addProduct",ab,"products");v("ec:setAction",Ba[Ja],ab.actionField);break}}},
B=function(U,N,Z){var qa=0;if(U)for(var Ba in U)if(U.hasOwnProperty(Ba)&&(Z&&r[Ba]||!Z&&void 0===r[Ba])){var Ja=w[Ba]?ta(U[Ba]):U[Ba];"anonymizeIp"!=Ba||Ja||(Ja=void 0);N[Ba]=Ja;qa++}return qa},C={name:q};B(e,C,!0);(function(){})();p("create",c.vtp_trackingId||d.trackingId,C);v("set","&gtm",ah(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(U,N){void 0!==
c[N]&&v("set",U,c[N])})("nonInteraction","vtp_nonInteraction");x("contentGroup",g);x("dimension",h);x("metric",k);var E={};B(e,E,!1)&&v("set",E);var F;c.vtp_enableLinkId&&v("require","linkid","linkid.js");v("set","hitCallback",function(){var U=e&&e.hitCallback;ha(U)&&U();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){
c.vtp_enableEcommerce&&(v("require","ec","ec.js"),z());var Q={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:y(String,c.vtp_eventLabel||d.label),eventValue:y(sa,c.vtp_eventValue||d.value)};B(F,Q,!1);v("send",Q);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),z());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var S="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:S})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var X="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,
"");v("require","adfeatures",{cookieName:X})}F?v("send","pageview",F):v("send","pageview");}if(!a){var V=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(V="internal/"+V);a=!0;var ea=D("https:","http:",
"//www.google-analytics.com/"+V,e&&e.forceSSL);H(ea,function(){var U=Xd();U&&U.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else A(c.vtp_gtmOnFailure)};Y.__ua=b;Y.__ua.g="ua";Y.__ua.h=!0;Y.__ua.b=0}();




Y.a.ytl=["google"],function(){function a(){var v=Math.round(1E9*Math.random())+"";return u.getElementById(v)?a():v}function b(v,y){if(!v)return!1;for(var x=0;x<t.length;x++)if(0<=v.indexOf("//"+t[x]+"/"+y))return!0;return!1}function c(v){var y=-1!==v.indexOf("?")?"&":"?";if(-1<v.indexOf("origin="))return v+y+"enablejsapi=1";if(!r){var x=K("document");r=x.location.protocol+"//"+x.location.hostname;x.location.port&&(r+=":"+x.location.port)}return v+y+"enablejsapi=1&origin="+encodeURIComponent(r)}function d(v,
y){var x=v.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return v.setAttribute("src",c(x)),!0}return!1}function e(v,y){if(!v.getAttribute("data-gtm-yt-inspected-"+y.Tc)&&(v.setAttribute("data-gtm-yt-inspected-"+y.Tc,"true"),d(v,y.Dd))){v.id||(v.id=a());var x=K("YT"),z=x.get(v.id);z||(z=new x.Player(v.id));var B=h(z,y),C={},E;for(E in B)C.Fa=E,B.hasOwnProperty(C.Fa)&&z.addEventListener(C.Fa,function(F){return function(Q){return B[F.Fa](Q.data)}}(C)),C={Fa:C.Fa}}}
function g(v){A(function(){function y(){for(var z=x.getElementsByTagName("iframe"),B=z.length,C=0;C<B;C++)e(z[C],v)}var x=K("document");y();jh(y)})}function h(v,y){var x,z;function B(){M=Ih(function(){return{url:P,title:S,Ad:J,uf:v.getCurrentTime(),playbackRate:X}},y.Tc,v.getIframe());J=0;S=P="";X=1;return C}function C(N){switch(N){case q.PLAYING:J=Math.round(v.getDuration());P=v.getVideoUrl();if(v.getVideoData){var Z=v.getVideoData();S=Z?Z.title:""}X=v.getPlaybackRate();y.nf?M.Db("start"):M.gc();
I=m(y.hg,y.gg,v.getDuration());return E(N);default:return C}}function E(){V=v.getCurrentTime();ea=Lh().getTime();M.sg();O();return F}function F(N){var Z;switch(N){case q.ENDED:return W(N);case q.PAUSED:Z="pause";case q.BUFFERING:var qa=v.getCurrentTime()-V;Z=1<Math.abs((Lh().getTime()-ea)/1E3*X-qa)?"seek":Z||"buffering";v.getCurrentTime()&&(y.lf?M.Db(Z):M.gc());T();return Q;case q.UNSTARTED:return B(N);default:return F}}function Q(N){switch(N){case q.ENDED:return W(N);case q.PLAYING:return E(N);case q.UNSTARTED:return B(N);
default:return Q}}function W(){for(;z;){var N=x;Jh(z);N()}y.kf&&M.Db("complete",1);return B(q.UNSTARTED)}function R(){}function T(){z&&(Jh(z),z=0,x=R)}function O(){if(I.length&&0!==X){var N=-1,Z;do{Z=I[0];if(Z.ka>v.getDuration())return;N=(Z.ka-v.getCurrentTime())/X;if(0>N&&(I.shift(),0===I.length))return}while(0>N);x=function(){z=0;x=R;0<I.length&&I[0].ka===Z.ka&&(I.shift(),M.Db("progress",Z.Wd,Z.ae));O()};z=Kh(x,1E3*N)}}var M,I=[],J,P,S,X,V,ea,U=B(q.UNSTARTED);z=0;x=R;return{onStateChange:function(N){U=
U(N)},onPlaybackRateChange:function(N){V=v.getCurrentTime();ea=Lh().getTime();M.gc();X=N;T();O()}}}function k(v){for(var y=v.split(","),x=y.length,z=[],B=0;B<x;B++){var C=parseInt(y[B],10);isNaN(C)||100<C||0>C||z.push(C/100)}z.sort(function(E,F){return E-F});return z}function l(v){for(var y=v.split(","),x=y.length,z=[],B=0;B<x;B++){var C=parseInt(y[B],10);isNaN(C)||0>C||z.push(C)}z.sort(function(E,F){return E-F});return z}function m(v,y,x){var z=v.map(function(E){return{ka:E,ae:E,Wd:void 0}});if(!y.length)return z;
var B=y.map(function(E){return{ka:E*x,ae:void 0,Wd:E}});if(!z.length)return B;var C=z.concat(B);C.sort(function(E,F){return E.ka-F.ka});return C}function n(v){v.vtp_triggerStartOption?p(v):Jd(function(){p(v)})}function p(v){var y=!!v.vtp_captureStart,x=!!v.vtp_captureComplete,z=!!v.vtp_capturePause,B=k(v.vtp_progressThresholdsPercent+""),C=l(v.vtp_progressThresholdsTimeInSeconds+""),E=!!v.vtp_fixMissingApi;if(y||x||z||B.length||C.length){var F={nf:y,kf:x,lf:z,gg:B,hg:C,Dd:E,Tc:void 0===v.vtp_uniqueTriggerId?
"":v.vtp_uniqueTriggerId},Q=K("YT"),W=function(){g(F)};A(v.vtp_gtmOnSuccess);if(Q)Q.ready&&Q.ready(W);else{var R=K("onYouTubeIframeAPIReady");Sh("onYouTubeIframeAPIReady",function(){R&&R();W()});A(function(){for(var T=K("document"),O=T.getElementsByTagName("script"),M=O.length,I=0;I<M;I++){var J=O[I].getAttribute("src");if(b(J,"iframe_api")||b(J,"player_api"))return}for(var P=T.getElementsByTagName("iframe"),S=P.length,X=0;X<S;X++)if(!w&&d(P[X],F.Dd)){H("https://www.youtube.com/iframe_api");w=!0;
break}})}}else A(v.vtp_gtmOnSuccess)}var t=["www.youtube.com","www.youtube-nocookie.com"],q={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},r,w=!1;Y.__ytl=n;Y.__ytl.g="ytl";Y.__ytl.h=!0;Y.__ytl.b=0}();
Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){Y.__gclidw=b;Y.__gclidw.g="gclidw";Y.__gclidw.h=!0;Y.__gclidw.b=100})(function(b){A(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||Cg())&&
Vh(a,h,k,l));Uh(e,c,d);Xg(g,e,c,d);var m=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Wh(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,m)}})}();
Y.a.aev=["google"],function(){function a(m,n){var p=!1,t;var q=ud(m,"gtm");if(!q)return;p=!0;t=q[n];p||(t=Qh("gtm."+n,1));return t}function b(m,n,p,t){t||(t="element");var q=m+"."+n,r;if(h.hasOwnProperty(q))r=h[q];else{var w=a(m,t);if(w&&(r=p(w),h[q]=r,k.push(q),35<k.length)){var v=k.shift();delete h[v]}}return r}function c(m,n,p){var t=a(m,l[n]);return void 0!==t?t:p}function d(m,n){if(!m)return!1;
var p=e(Mh());ka(n)||(n=String(n||"").replace(/\s+/g,"").split(","));for(var t=[p],q=0;q<n.length;q++)if(n[q]instanceof RegExp){if(n[q].test(m))return!1}else{var r=n[q];if(0!=r.length){if(0<=e(m).indexOf(r))return!1;t.push(e(r))}}return!li(m,t)}function e(m){g.test(m)||(m="http://"+m);return gb(hb(m),"HOST",!0)}var g=/^https?:\/\//i,h={},k=[],l={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",
HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(m){Y.__aev=m;Y.__aev.g="aev";Y.__aev.h=!0;Y.__aev.b=0})(function(m){var n=m.vtp_gtmEventId,p=m.vtp_defaultValue,t=m.vtp_varType;switch(t){case "TAG_NAME":var q=a(n,"element");return q&&q.tagName||p;case "TEXT":return b(n,t,Ua)||p;case "URL":var r;a:{var w=String(a(n,"elementUrl")||p||""),v=hb(w),y=String(m.vtp_component||"URL");switch(y){case "URL":r=
w;break a;case "IS_OUTBOUND":r=d(w,m.vtp_affiliatedDomains);break a;default:r=gb(v,y,m.vtp_stripWww,m.vtp_defaultPages,m.vtp_queryKey)}}return r;case "ATTRIBUTE":var x;if(void 0===m.vtp_attribute)x=c(n,t,p);else{var z=m.vtp_attribute,B=a(n,"element");x=B&&Ta(B,z)||p||""}return x;case "MD":var C=m.vtp_mdValue,E=b(n,"MD",xh);return C&&E?yh(E,C)||p:E||p;default:return c(n,t,p)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.g="gas";Y.__gas.h=!0;Y.__gas.b=0})(function(a){var b=Ha(a),c=b;c[dc.ra]=null;c[dc.Fe]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.hl=["google"],function(){function a(g){return g.target&&g.target.location&&g.target.location.href?g.target.location.href:Mh()}function b(g,h){Ra(g,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:Oh(l),D:Nh(l)})})}function c(g,h){Ra(g,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:Oh(l),D:Nh(l)})})}function d(g,h,k){var l=h.history,m=l[g];if(ha(m))try{l[g]=function(n,p,t){m.apply(l,[].slice.call(arguments,0));k({source:g,state:n,url:Oh(Mh()),
D:Nh(Mh())})}}catch(n){}}function e(){var g={source:null,state:K("history").state||null,url:Oh(Mh()),D:Nh(Mh())};return function(h){var k=g,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.D!=h.D){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":g.D,"gtm.newUrlFragment":h.D,"gtm.oldHistoryState":g.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=g.url,m["gtm.newUrl"]=h.url;
g=h;Rh(m)}}}(function(g){Y.__hl=g;Y.__hl.g="hl";Y.__hl.h=!0;Y.__hl.b=0})(function(g){var h=K("self");if(!Yh("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);Zh("hl")}A(g.vtp_gtmOnSuccess)})}();

Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.g="smm";Y.__smm.h=!0;Y.__smm.b=0})(function(a){var b=a.vtp_input,c=mi(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.g="paused";Y.__paused.h=!0;Y.__paused.b=0})(function(a){A(a.vtp_gtmOnFailure)})}();

Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Ma(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){A(h)}}}var b=function(d,e,g){Jd(function(){var h,k=zc;k.postscribe||(k.postscribe=jc);h=k.postscribe;var l={done:e},m=u.createElement("div");m.style.display="none";m.style.visibility="hidden";u.body.appendChild(m);try{h(m,d,l)}catch(n){A(g)}})};var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=ci(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.uc,k=g.K;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Va(h),k,e)()}else Kh(function(){c(d)},
200)};Y.__html=c;Y.__html.g="html";Y.__html.h=!0;Y.__html.b=0}();



var Ej={};Ej.macro=function(a){if(Kf.fc.hasOwnProperty(a))return Kf.fc[a]},Ej.onHtmlSuccess=Kf.zd(!0),Ej.onHtmlFailure=Kf.zd(!1);Ej.dataLayer=md;Ej.callback=function(a){Hc.hasOwnProperty(a)&&ha(Hc[a])&&Hc[a]();delete Hc[a]};Ej.bf=function(){zc[yc.i]=Ej;za(Ic,Y.a);Wb=Wb||Kf;Xb=Bd};
Ej.Rf=function(){Eg.gtm_3pds=!0;zc=f.google_tag_manager=f.google_tag_manager||{};if(zc[yc.i]){var a=zc.zones;a&&a.unregisterChild(yc.i)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Sb.push(e[g]);for(var h=b.predicates||[],
k=0;k<h.length;k++)Rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Qb.push(p)}Ub=Y;Vb=fi;Ej.bf();nf();Ed=!1;Fd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)Hd();else{Ra(u,"DOMContentLoaded",Hd);Ra(u,"readystatechange",Hd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&Id()}Ra(f,"load",Hd)}af=!1;"complete"===u.readyState?cf():
Ra(f,"load",cf);a:{if(!bd)break a;f.setInterval(cd,864E5);}
Ec=(new Date).getTime();}};(0,Ej.Rf)();

})()

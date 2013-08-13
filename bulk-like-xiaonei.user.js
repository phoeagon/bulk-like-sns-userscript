// ==UserScript==
// @name          Bulk Like on Xiaonei
// @namespace     http://about.me/phoeagon
// @description   Bulk like every item on your timeline
// @include       *://*.renren.com/*
// @include       *://*.renren.com/
// @include       *://renren.com/*
// @include       *://renren.com/
// @exclude       *://*.renren.com/ajaxproxy.html*
// @updateURL   https://github.com/phoeagon/bulk-like-sns-userscript/raw/master/bulk-like-xiaonei.user.js
// @downloadURL   https://github.com/phoeagon/bulk-like-sns-userscript/raw/master/bulk-like-xiaonei.user.js
// ==/UserScript==

function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
    script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
    }, false);
    document.body.appendChild(script);
}
addJQuery(callback)
function callback() {
    if (!window)return;
     //       alert("fuck")
      //  console.log( " JQUERY loaded" )
       jQ('.nav-main').append(
            jQ('<div>').addClass('menu').append(
                jQ('<div>').addClass('menu-title').append(
                    jQ('<a>').attr('href','#').click(function(){
                            jQ('.ilike_icon').each( function ( ind , ele ){
                                if ( jQ(ele).html().indexOf("取消")==-1 ){
                                    setTimeout( function(){
                                        jQ(ele).click();
                                        console.log(ind);
                                    }  , ind*2000 );
                                }
                            })
                        }).html('點讚')
                )
       ))

}


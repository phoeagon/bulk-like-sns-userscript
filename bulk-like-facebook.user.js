// ==UserScript==
// @name          Bulk Like on Facebook
// @namespace     http://about.me/phoeagon
// @description   Bulk like every item on your timeline
// @include       *://*.facebook.com/*
// @include       *://*.facebook.com/
// @include       *://facebook.com/*
// @include       *://facebook.com/
// @updateURL   https://github.com/phoeagon/bulk-like-sns-userscript/raw/master/bulk-like-facebook.user.js
// @downloadURL   https://github.com/phoeagon/bulk-like-sns-userscript/raw/master/bulk-like-facebook.user.js
// ==/UserScript==

/*
 *  phoeagon
 *      http://about.me/phoeagon
 * */
function addJQuery(callback) {
    var script = document.createElement("script");
    script.setAttribute("src", "//code.jquery.com/jquery-1.10.2.min.js");
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
       jQ('#pageNav').append(
            jQ('<li>').addClass('navItem').append(
                    jQ('<a>').attr('href','#').addClass('navLink bigPadding')
                    .click(function(){
                            alert("Bulk-like-facebook,\tby phoeagon\n2013, Aug 13七姐誕版\n點讚過程已開始")
                            jQ('.UFILikeLink').each( function ( ind , ele ){
                                if ( jQ(ele).html().indexOf("Unlike")==-1 ){
                                    setTimeout( function(){
                                        jQ(ele).click();
                                        console.log(ind);
                                    }  , ind*2000 );
                                }
                            })
                        }).html('點讚')
       ))

}
//------------------------------------------------------------------
/*
 * Changelog:
 *  2013 Aug 13 Initial Deployable
 * */

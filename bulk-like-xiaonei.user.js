// ==UserScript==
// @id            bulk-like-xiaonei@phoeagon
// @name          Bulk Like on Xiaonei
// @namespace     http://about.me/phoeagon
// @description   Bulk like every item on your timeline
// @include       *://*.renren.com/*
// @include       *://*.renren.com/
// @include       *://renren.com/*
// @include       *://renren.com/
// @exclude       *://*.renren.com/ajaxproxy.htm*
// @exclude       *://webpager.renren.com/api/*.jsp 
// @updateURL   https://github.com/phoeagon/bulk-like-sns-userscript/raw/master/bulk-like-xiaonei.user.js
// @downloadURL   https://github.com/phoeagon/bulk-like-sns-userscript/raw/master/bulk-like-xiaonei.user.js
// @grant none
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

function delay(){          
    if (document.getElementsByClassName('piece_msg').length > 0 )
        addJQuery(callback);
   	else setTimeout( delay , 1000 );
}
console.log(document.location.href)
if ((document.getElementsByTagName('html')[0].getAttribute('class') || "" ).indexOf('nx-main')!=0){
        //not new, load directly
        addJQuery( callback );
    }  
else
    delay(); //V7: wait till fully loaded

function callback() {
    console.log("callback1");
    var setQueryConfig = function (queryConfig){ 
	var _str = ""; 
	for(var o in queryConfig){ 
	if(queryConfig[o] != -1){ 
	    _str += o + "=" + queryConfig[o] + "&"; 
	    } 
	} 
	var _str = _str.substring(0, _str.length-1); 
	return encodeURI(_str); 
    } 
    if (!window)return;
     //       alert("fuck")
      //  console.log( " JQUERY loaded" )
      if (jQ('html').attr('class') && jQ('html').attr('class').indexOf('nx-main')==0){
	  jQ('body').append(
	    jQ('<iframe>').addClass('myproxy').css('display','none')
	  )
		  jQ('.fd-nav-list').append(
			jQ('<li>').addClass('fd-nav-item').attr('data-tip','點讚')
			.append(
				jQ('<a>').attr('href','#').css('font-size','150%').html('點讚').click( function (){
                            alert("Bulk-like-xiaonei,\tby phoeagon\n2014, Apr 24GRE前作死版\n點讚過程已開始")
                            jQ('.feed-btn.like,.ilike-button').each( function ( ind , ele ){
								try{
                                if (! jQ(ele).hasClass('liked') ){
                                    setTimeout( function(){
                                    jQ(ele).toggleClass('liked');
                                    //console.log(ele)
                                    var data = eval("("+( jQ(ele).attr('data-ilike') || jQ(ele).attr('data-like') )+")");
                                    delete data.othfirst;
                                    delete data.othsecond;
                                    delete data.oththird;
                                    delete data.othforth;
                                    data.name = data.name || data.mname;
                                    data.uid = data.uid || data.mid ;
                                    data.style = data.stype ||  data.type ;
                                    data.sourceId = data.sourceId || data.id ;
                                    delete data.id;
                                    delete data.type;
                                    delete data.mname;
                                    delete data.mid;
                                    //http://blog.csdn.net/longshen747/article/details/17374535
                                    data.requestToken = nx.user.requestToken;
                                    data._rtk = nx.user._rtk
                                    //{type: "share", id: 17225243983, owner: 274231940, mid: myid, mname: "xx"} 
                                    //{"stype":"share","sourceId":"17228424514","owner":"547286422","uid":"myid","name":"xx","othfirst":"","othsecond":"","oththird":"","othforth":""}"
                                    data.gid = jQ(ele).attr('data-ilikeid') || ( data.stype+'_'+data.sourceId );
                                    //console.log(data);
                                    console.log(setQueryConfig(data));
                                    // http://like.renren.com/addlike?stype=share&sourceId=17228385612&owner=262896918&uid=282089378&name=myname&requestToken=requestTk&_rtk=_rtk&gid=share_17228385612
                                    //image: http://like.renren.com/addlike?gid=photo_7799453860&name=myname&owner=274231940&uid=myid&type=2&t=1399303954201
                                    //share: http://like.renren.com/addlike?gid=share_17207978143&name=myname&owner=274231940&uid=myid&type=3&t=1399304359378
                                    jQ('.myproxy').attr('src','http://like.renren.com/addlike?'+setQueryConfig(data));

                                    }  , ind*2000 );
                                }
								}catch(err){
									console.log(err)
								}
                            })
					} )
			)
		  )
	  }else{
	// old version
       jQ('.nav-main').append(
            jQ('<div>').addClass('menu').append(
                jQ('<div>').addClass('menu-title').append(
                    jQ('<a>').attr('href','#').click( 
						function (){
                            alert("Bulk-like-xiaonei,\tby phoeagon\n2014, Apr 24GRE前作死版\n點讚過程已開始")
                            jQ('.ilike_icon').each( function ( ind , ele ){
                                if ( jQ(ele).html().indexOf("取消")==-1 ){
                                    setTimeout( function(){
                                        jQ(ele).click();
                                        console.log(ind);
                                    }  , ind*2000 );
                                }
                            })
                        } ).html('點讚')
                )
       ))
	  }

}
//------------------------------------------------------------------
/*
 * Changelog:
 *  2013 Aug 13 Initial Deployable
 * 2014 Apr 24  fit V7
 * */

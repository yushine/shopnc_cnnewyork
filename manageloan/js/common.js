(function(f,l,h){function n(){var b=window[h];b&&(b.loadedTime=(new Date).getTime())}if(!f[h]||"object"!==typeof f[h]){var m={};m.startTime=(new Date).getTime();var d={clickRecorder:function(b){var g=new Image,e=(new Date).getTime()+"_"+Math.random()*Math.pow(10,18);window["_img_"+e]=g;g.onload=g.onerror=function(){window["_img_"+e]=null};g.src="//log.info.hc360.com/click.htm?"+b+"&r="+e},getBrowser:function(){var b={},g=f.navigator.userAgent,e=/(Chrome)\/([\d.]+)/,a=/(Firefox)\/([\d.]+)/,c=/(Safari)\/([\d.]+)/,
p=/(Opera)\/([\d.]+)/,e=g.match(/(MSIE) ([\d.]+)/)||g.match(e)||g.match(a)||g.match(c)||g.match(p);"Opera"===e[1]&&(e[2]=g.match(/(Version)\/([\d.]+)/)[2]);g=g.match(/(QQBrowser)|(Maxthon)|(360EE)|(360SE)|(SE 2.X MetaSr 1.0)/);b[e[1]]=e[2];b.name=e[1];b.version=e[2];g&&g[0]&&(b.cover=g[0]);return b},addEvent:function(b,g,a){b.addEventListener(a,g,!1)},removeEvent:function(b,g,a){b.removeEventListener(a,g,!1)},parseXML:function(b){return(new DOMParser).parseFromString(b,"text/xml")},addCss:function(b,
g){if(b){var a=l.createElement("link");a.href=b;a.type="text/css";a.rel="stylesheet";/(6.0)|(7.0)|(8.0)/.test(m.b.MSIE)?a.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState||!g||g()}:a.onload=function(){g&&g()};l.getElementsByTagName("head")[0].appendChild(a)}},addScript:function(b,g){if(b){var a=l.createElement("script");/(6.0)|(7.0)|(8.0)/.test(m.b.MSIE)?a.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState||!g||g()}:a.onload=
function(){g&&g()};a.type="text/javascript";a.src=b;a.setAttribute("charset","utf-8");l.getElementsByTagName("head")[0].appendChild(a)}},addScriptList:function(b,a){function e(){k.push(1);k.length===c&&a&&a()}for(var k=[],c=b.length,p=0;p<c;p++)this.addScript(b[p],e)},jsonp:function(b,a,e){var k="HC_"+Math.floor(1E10*Math.random())+"_"+(new Date).getTime(),c=a.data;b+="?"+a.callback+"="+k;if(c)for(parm in c)b+="&"+parm+"="+c[parm];window[k]=function(b){"function"===typeof e&&e(b);window[k]=null};
this.addScript(b)},checkFP:function(){var b=null,a=null;(b=navigator.plugins["Shockwave Flash"])&&(a=parseFloat(b.description.split(" ")[2]));return a},getSWFObject:function(b){return document.embeds[b]},addSWF:function(b,a,e,k,c,p){var d=l.createElement("embed");c&&p?(d.width=c,d.height=p):(d.style.visibility="hidden",d.width=0,d.height=0);d.type="application/x-shockwave-flash";d.id=a;d.setAttribute("name",a);d.setAttribute("allowScriptAccess","always");d.setAttribute("flashvars",k);d.src=e;b.appendChild(d)},
addIframe:function(b,a,e,k,c,d){var f=l.createElement("iframe");f.id=e;f.setAttribute("name",e);f.width=c;f.height=d;c&&d||(f.style.display="none");b.appendChild(f);this.addEvent(f,k,"load");f.src=a},LocalCookie:{getTodayLastTime:function(){var b=new Date,a=23-b.getHours(),e=59-b.getMinutes(),b=60-b.getSeconds();return 1E3*(3600*a+60*e+b)},getExpireTimeString:function(b){b=0===b?this.getTodayLastTime():864E5*b;var a=(new Date).getTime();return(new Date(a+b)).toUTCString()},set:function(b){var a=";expires=",
a=isNaN(b.day)?"":a+this.getExpireTimeString(b.day),e=b.domain?";domain="+b.domain:"",k=b.path?";path="+b.path:"";l.cookie=b.key+"="+encodeURIComponent(b.value)+a+e+k},get:function(b){var a;return(a=document.cookie.match(RegExp("(^| )"+b+"=([^;]*)(;|$)")))?decodeURIComponent(a[2]):null},remove:function(b){this.set({key:b,value:"",day:-1})}}};m.b=d.getBrowser();"MSIE"===m.b.name&&(d.checkFP=function(){var b=null,a=null;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(e){}b&&(a=parseFloat(b.GetVariable("$version").split(" ")[1].replace(",",
".")));return a},d.getSWFObject=function(b){return document[b]},d.parseXML=function(b){var a=new ActiveXObject("Microsoft.XMLDOM");a.async="false";a.loadXML(b);return a});/6.0|7.0|8.0|9.0|10.0/.test(m.b.MSIE)&&(d.addEvent=function(b,a,e){b.attachEvent("on"+e,a)},d.removeEvent=function(b,a,e){b.detachEvent("on"+e,a)},d.addSWF=function(a,g,e,k,c,d){k='<object id="'+g+'" name="'+g+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+c+'" height="'+d+'"><param name="allowScriptAccess" value="always" />'+
('<param name="flashvars" value="'+k+'" />')+"</object>";var f=l.createElement("div");f.innerHTML=k;a.appendChild(f);l[g].movie=e;c&&d||(f.style.display="none")});if(/6.0|7.0|8.0/.test(m.b.MSIE)){var c="";document.attachEvent("onpropertychange",function(a){"title"===a.propertyName&&document.title!==c&&(c||(c=l.title.split("#")[0]),setTimeout(function(){document.title=c},1))})}m.W={};m.HUB=d;f[h]=m;var a={connected:[],message:[],receiveListener:[],changedSpeaker:[],changedListener:[],pingSpeakerSucceed:[],
pingSpeakerError:[],broadcastComplete:[],ldsLoaded:[]};m.LDS={inited:!1,loadedCB:function(b){this.inited?b():void 0!==a.ldsLoaded&&a.ldsLoaded.push(b)}};d.addEvent(f,n,"load")}})(window,document,"HC");window.jQuery||document.write("<script src='//styles.hc360.com/js/build/source/core/jquery.min.js'>\x3c/script>");
(function(f,l){var h={},n={},m={},d=function(c,a){this.init.call(this,c,a)};d.prototype={init:function(c,a){for(var b=this,g=document.getElementsByTagName("link"),e=0,k=g.length;e<k;e++)m[g[e].href]=1;HC.W[c+"Urls"]?b.loadUrls(0,HC.W[c+"Urls"],a):h[c]?b.addTaskQueue(c,function(){b.loadUrls(0,HC.W[c+"Urls"],a)}):(h[c]=1,HC.HUB.addScript("//styles.hc360.com/js/build/source/widgets/loader/hc."+c+".urls.js",function(){h[c]=0;b.loadUrls(0,HC.W[c+"Urls"],a);b.callTaskQueue(c)}))},addTaskQueue:function(c,
a){n[c]||(n[c]=[]);n[c].push(a)},callTaskQueue:function(c){if(n[c]){for(var a=0,b=n[c].length;a<b;a++)n[c][a]();n[c].length=0}},loadUrls:function(c,a,b){var g=this,e=c;if(e===a.length)b&&b(),b=null;else{c=a[e];var k=function(k,c){h[k]?g.addTaskQueue(k,function(){g.loadUrls(++e,a,b)}):(h[k]=1,HC.HUB[c](k,function(){h[k]=0;g.loadUrls(++e,a,b);"css"===c&&(m[k]=1);g.callTaskQueue(k)}))};if(c.css)m[c.css]?g.loadUrls(++e,a,b):k(c.css,"addCss");else try{eval(c.isExisted)?g.loadUrls(++e,a,b):k(c.js,"addScript")}catch(d){k(c.js,
"addScript")}}}};HC.W.Loader=d;HC.W.load=function(c,a){new d(c,a)}})(window,document);
(function(){function f(){this.id=this.createUUID()}function l(a,b,g,e,k,c){var d="";0!=g&&(d=g?"; expires="+g.toGMTString():"");g=a+"="+escape(b)+d+(e?"; path="+e:"")+(k?"; domain="+k:"")+(c?"; secure":"");4E3>=(a+"="+escape(b)).length?document.cookie=g:confirm("cookie\u5927\u5c0f\u8d85\u51fa4KB")&&(document.cookie=g)}function h(a){var b="";window.RegExp&&(b=RegExp(";\\s*"+a+"=([^;]*)","i").exec(";"+document.cookie));return b?unescape(b[1]):""}function n(a){var b=(new Date(0)).getTime();0<b&&a.setTime(a.getTime()-
b)}if(!HC.UUID){f.prototype.valueOf=function(){return this.id};f.prototype.toString=function(){return this.id};f.prototype.createUUID=function(){var a=new Date(1582,10,15,0,0,0,0),b=(new Date).getTime()-a.getTime(),a=f.getIntegerBits(b,0,31),g=f.getIntegerBits(b,32,47),b=f.getIntegerBits(b,48,59)+"1",e=f.getIntegerBits(f.rand(4095),0,7),k=f.getIntegerBits(f.rand(4095),0,7),c=f.getIntegerBits(f.rand(8191),0,7)+f.getIntegerBits(f.rand(8191),8,15)+f.getIntegerBits(f.rand(8191),0,7)+f.getIntegerBits(f.rand(8191),
8,15)+f.getIntegerBits(f.rand(8191),0,15);return a+""+g+""+b+""+e+k+""+c};f.getIntegerBits=function(a,b,g){a=f.returnBase(a,16);for(var e=[],k="",c=0,c=0;c<a.length;c++)e.push(a.substring(c,c+1));for(c=Math.floor(b/4);c<=Math.floor(g/4);c++)k=e[c]&&""!=e[c]?k+e[c]:k+"0";return k};f.returnBase=function(a,b){var g="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");if(a<b)g=g[a];else var e=""+Math.floor(a/b),c=a-e*b,g=e>=b?this.returnBase(e,b)+g[c]:g[e]+g[c];return g};f.rand=function(a){return Math.floor(Math.random()*
a)};HC.UUID=f;window.setCookie=l;window.getCookie=h;HC.setCookie=l;HC.getCookie=h;var m=h("hc360visitid"),d=new Date;n(d);d.setTime(d.getTime()+31536E7);if(!m||""==m){var m=(new f).createUUID(),c=new Date;visitid_time=c.getFullYear()+"-"+(c.getMonth()+1)+"-"+c.getDate()+" "+c.getHours()+":"+c.getMinutes()+":"+c.getSeconds();l("visitid_time",visitid_time,d,"/",".hc360.com");l("hc360visitid",m,d,"/",".hc360.com")}h("hcbrowserid")||(m=(new f).id,l("hcbrowserid",m,d,"/",".hc360.com"));HC.LDS.loadedCB(function(){var a=
HC.HUB.LocalCookie.get("hc360visitid"),b=(new f).createUUID();a?HC.LS.set("hc360visitid",a):((a=HC.LS.get("hc360visitid"))?b=a:HC.LS.set("hc360visitid",b),HC.HUB.LocalCookie.set({key:"hc360visitid",value:b,day:3650,path:"/",domain:".hc360.com"}))});HC.hck={_curCookieList:["viewwords1","viewwords2","viewwords5","viewwords","regkeyword"],callback:{set:null,get:null,del:null,rec:null},hckGetJSON:function(a,b,g,e){var c=HC.hck,d=(Math.random()+"").substring(2),d=b+d;a=a+"&callback=HC.hck.callback."+d;
c.callback[d]=function(a){switch(b){case "get":"null"==a.value?c.hckRecord("get_backError",e.key,"null"):c.hckRecord("get_backSuccess",e.key,a.value);g&&g("null"==a.value||"undefined"==a.value?"":a.value.replace(/&quot;/g,'"'));break;case "set":var d=e.sp1,f=e.sp2,h=e._domain_,m=e._hckExistTime_,n=e._exp_,q=e.lastValue,r=e.isIndex;key=e.key;if("true"==a.value){c.hckRecord("set_backSuccess",key,"true");a=1;for(var y=q.length;a<y;a+=1){var x=q[a].split(f);if(x[0]==h&&x[1]==key){r=a;break}}-1!=r?(a=
q[r].split(f),a[2]=n,a=a.join(f),q.splice(r,1,a),q=q.join(d),l("hckIndex",q,m,"/",h)):(q.push(h+f+key+f+n),q.join(d));g&&g()}else c.hckRecord("set_backError",key,"null")}};script=document.createElement("script");script.setAttribute("src",a);document.getElementsByTagName("head")[0].appendChild(script)},hckRecord:function(a,b,c){HC.hck.callback.rec=function(a){}},hckCreateExp:function(){var a=new Date,b=a.getFullYear()+10;_curMonth_=a.getMonth()+1;_curDate_=a.getDate();return _hckExistTime_=new Date(b+
"/"+_curMonth_+"/"+_curDate_)},hckSet:function(a,b,c,e,d,m){var p=HC.hck,n,s=(arguments[3]||"hc360.com").replace(/^\./,""),t=p.hckCreateExp();_exp_=Math.abs((c||t)-(new Date).getTime());lastValue="";isIndex=-1;h("hckIndex")||(n=(new f).id,l("hckIndex",n,t,"/",s));n=h("hckIndex");var u=h("hcktemp");n="url:"+location.href+"<br>hckIndex:"+n+"<br>hcktemp:"+u;if(!a||!b||""==a.replace(/[\s\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/gm,"")||""==b.replace(/[\s\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/gm,
""))return p.hckRecord("set_whenCall",a,n),d&&d(!1),null;var w="//sessiondatas.hc360.com/SessionData/cookieServlet?action=set&domain="+s+"&key="+encodeURIComponent(a)+"&expiry="+_exp_+"&value="+encodeURIComponent(b);n=h("hckIndex");u=h("hcktemp");p.hckRecord("set_whenSend",a,"url:"+w+"<br>hckIndex:"+n+"<br>hcktemp:"+u);lastValue=h("hckIndex").replace(/^"|"$/g,"").split("#1#");2>lastValue.length&&0==arguments.length||p.hckGetJSON(w,"set",d,{key:a,sp1:"#1#",sp2:"#2#",_domain_:s,_hckExistTime_:t,_exp_:_exp_,
lastValue:lastValue,isIndex:isIndex})},hckGet:function(a,b,c){var e=HC.hck,d=h("hckIndex");b=(b||"hc360.com").replace(/^\./,"");if(!d||!d.length||!a||""==a.replace(/[\s\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/gm,"")||0>d.indexOf("#2#"+a+"#2#")){var d=h("hckIndex"),f=h("hcktemp"),d="url:"+location.href+"<br>hckIndex:"+d+"<br>hcktemp:"+f;e.hckRecord("get_whenCall",a,d);c&&c("");return null}b=b.replace(/^\./,"");b="//sessiondatas.hc360.com/SessionData/cookieServlet?action=get&domain="+
b+"&key="+encodeURIComponent(a);d=h("hckIndex");f=h("hcktemp");d="url:"+location.href+"<br>hckIndex:"+d+"<br>hcktemp:"+f;e.hckRecord("get_whenSend",a,d);e.hckGetJSON(b,"get",c,{key:a})},hckDel:function(a,b,c){var e=HC.hck,d=h("hckIndex");e.hckCreateExp();b=(b||"hc360.com").replace(/^\./,"");if(!d||!d.length||!a||""==a.replace(/[\s\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/gm,"")||0>d.indexOf("#2#"+a+"#2#"))return c&&c(""),null;d.split(",");a="//sessiondatas.hc360.com/SessionData/cookieServlet?action=del&domain="+
b+"&key="+encodeURIComponent(a);h("hckIndex");e.hckGetJSON(a,"del",c)},hckBakeCookie:function(a){var b=HC.hck;a=a||b._curCookieList;for(var c=0,d=a.length;c<d;c+=1){var f=h(a[c]),n=new Date((new Date).getTime()+864E6),m=new Date("1900/01/01");f&&""!=f.replace(/[\s\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/gm,"")&&(l(a[c]+"_bak",f,n,"/","hc360.com"),b.hckSet(a[c],f,m,"hc360.com"),l(a[c],null,m,"/","hc360.com"))}},hckRevert:function(a){var b=HC.hck,c=b._curCookieList;!a&&function(){b.hckInit=
function(){return null}}();for(var d=0,f=c.length;d<f;d+=1){var m=h(c[d]+"_bak"),n=b.hckCreateExp(),v=new Date("1900/01/01");m&&""!=m.replace(/[\s\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/gm,"")&&(!a&&l(c[d],m,n,"/","hc360.com"),l("hckIndex",null,v,"/","hc360.com"),l(c[d]+"_bak",null,v,"/","hc360.com"))}},hckAdd:function(a,b,c,d){encodeURIComponent(b);b=(new Date).getTime();var f=new Image;d="&expiry="+(d||this.hckCreateExp());f.src="//sessiondatas.hc360.com/SessionData/cookieServlet?action=append&domain="+
c+d+"&key="+a+"&r="+b},hckInit:function(){var a=HC.hck;if(h("viewwords")||h("viewwords1")||h("viewwords2")||h("viewwords5")||h("regkeyword")||!h("hckIndex"))a.hckBakeCookie(),a.hckSet();h("hcktemp")&&l("hcktemp","",this.hckCreateExp(),"/","hc360.com")}};HC.hckSet=HC.hck.hckSet;HC.hckGet=HC.hck.hckGet;HC.hckDel=HC.hck.hckDel;HC.hckBakeCookie=HC.hck.hckBakeCookie;HC.hckRevert=HC.hck.hckRevert;HC.hckInit=HC.hck.hckInit;HC.hckInit()}})();
(function(f,l,h){if(h){var n=!1;try{n=f.self==f.top}catch(m){}/(6.0)/.test(h.b.MSIE)&&"ignore"!=h.getCookie("ie6UpgradeVersionPrompt")&&n&&f.attachEvent("onload",function(){h.HUB.addCss("http://style.org.hc360.com/css/IE6/style.css",function(){var d=[];d.push('<div class="ie6UpgradeVersionPrompt">');d.push('<div class="ie6Box">');d.push('<div class="ie6alertCon">');d.push('<div class="ie6alertBorder"></div>');d.push('<div class="ie6proTop">');d.push("<h2>");d.push("\u63d0\u793a");d.push("</h2>");
d.push('<a class="ie6close" href="javascript:void(0);" onclick="return false;"></a>');d.push("</div>");d.push('<div class="ie6proBox">');d.push("<h3>");d.push("\u4f60\u77e5\u9053\u4f60\u7684Internet Explorer\u8fc7\u65f6\u4e86\u5417?");d.push("</h3>");d.push("<p>");d.push("\u4e3a\u4e86\u8ba9\u60a8\u5f97\u5230\u6700\u597d\u7684\u4f53\u9a8c\u6548\u679c,\u6211\u4eec\u5efa\u8bae\u60a8\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u7684IE\u6d4f\u89c8\u5668\u6216\u9009\u62e9\u5176\u4ed6\u6d4f\u89c8\u5668.\u63a8\u8350\u7ed9\u5927\u5bb6\u51e0\u6b3e\u725b\u903c\u7684\u6d4f\u89c8\u5668\u5427\uff01");
d.push("</p>");d.push("</div>");d.push('<div class="ie6BoxIco">');d.push('<a href="http://www.google.cn/chrome/browser/desktop/index.html" class="chrome" target="_blank">chrome</a> <a href="http://windows.microsoft.com/zh-cn/internet-explorer/download-ie" class="IE" target="_blank">IE</a> <a href="http://se.360.cn/" class="l360" target="_blank">360\u5b89\u5168</a> <a href="http://www.firefox.com.cn/" class="huohu" target="_blank">\u706b\u72d0</a> <a href="http://ie.sogou.com/" class="sougou" target="_blank">\u641c\u72d7</a> <a href="http://browser.qq.com/" class="LQQ" target="_blank">QQ</a>');
d.push("</div>");d.push("</div>");d.push("</div>");d.push('<div class="ie6Bg"><iframe frameborder="0" scrolling="no" class="ie6BgFrame"></iframe></div>');d.push("</div>");jQuery(".ie6UpgradeVersionPrompt",jQuery(l)).remove();var c=jQuery(d.join("")).appendTo(jQuery("body",jQuery(l)));setTimeout(function(){jQuery("a.ie6close",c).focus()},0);l.getElementsByTagName("html")[0].style.overflow="hidden";l.body.onmousewheel=function(a){return!1};jQuery("div.ie6Bg",c).css({height:jQuery(l).height()+"px"});
jQuery("a.ie6close",c).click(function(a){c.remove();a=new Date;var b=(new Date(0)).getTime();0<b&&a.setTime(a.getTime()-b);a.setTime(a.getTime()+864E5);h.setCookie("ie6UpgradeVersionPrompt","ignore",a,"/",".hc360.com");l.getElementsByTagName("html")[0].style.overflowX="auto";l.getElementsByTagName("html")[0].style.overflowY="scroll";l.body.onmousewheel=function(a){return!0}});jQuery(f).resize(function(){var a=jQuery(f).height(),b=jQuery(f).width(),d=jQuery(f).scrollTop(),e=jQuery("body").height();
e<a&&(e=a);var h=jQuery("div.ie6Box",c).outerWidth(),l=jQuery("div.ie6Box",c).height(),b=b/2-h/2,a=d+(a-l)/2;jQuery("div.ie6Box",c).css({left:b+"px",top:a+"px",position:"absolute",margin:"0px"});jQuery("div.ie6Bg",c).css({height:e+"px"})});jQuery(f).resize()})})}})(window,document,HC);

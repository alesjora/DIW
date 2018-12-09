document.addEventListener("DOMContentLoaded",init);


function init(){
    inserccionCodigo();
    comprobarAudio();
    comprobarCanvas();
    comprobarVibracion();
    comprobarIndexedDB();
    comprobarBatteryAPI();
    comprobarEmoji();
    comprobarGamePadAPI();
}

function inserccionCodigo(){
    /*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-batteryapi-canvas-emoji-gamepads-indexeddb-vibrate-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,a,i,s;for(var l in _)if(_.hasOwnProperty(l)){if(e=[],n=_[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),C.push((o?"":"no-")+s.join("-"))}}function a(e){var n=w.className,t=Modernizr._config.classPrefix||"";if(T&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),T?w.className.baseVal=n:w.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):T?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){if("object"==typeof e)for(var t in e)S(e,t)&&l(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),a([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function u(e,n){return!!~(""+e).indexOf(n)}function f(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var o;for(var a in e)if(e[a]in n)return t===!1?e[a]:(o=n[e[a]],r(o,"function")?f(o,t||n):o);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var a=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(a){var i=a.error?"error":"log";a[i].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function v(){var e=n.body;return e||(e=i(T?"svg":"body"),e.fake=!0),e}function y(e,t,r,o){var a,s,l,u,f="modernizr",d=i("div"),c=v();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return a=i("style"),a.type="text/css",a.id="s"+f,(c.fake?c:d).appendChild(a),c.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),d.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),s=t(d,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=u,w.offsetHeight):d.parentNode.removeChild(d),!!s}function g(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+c(n[o])+":"+r+")");return a=a.join(" or "),y("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==p(e,null,"position")})}return t}function m(e,n,o,a){function l(){d&&(delete L.style,delete L.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var f=g(e,o);if(!r(f,"undefined"))return f}for(var d,c,p,v,y,m=["modernizr","tspan","samp"];!L.style&&m.length;)d=!0,L.modElem=i(m.shift()),L.style=L.modElem.style;for(p=e.length,c=0;p>c;c++)if(v=e[c],y=L.style[v],u(v,"-")&&(v=s(v)),L.style[v]!==t){if(a||r(o,"undefined"))return l(),"pfx"==n?v:!0;try{L.style[v]=o}catch(h){}if(L.style[v]!=y)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+E.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?m(s,n,o,a):(s=(e+" "+j.join(i+" ")+i).split(" "),d(s,n,t))}function x(e,n){var t=e.deleteDatabase(n);t.onsuccess=function(){l("indexeddb.deletedatabase",!0)},t.onerror=function(){l("indexeddb.deletedatabase",!1)}}var C=[],_=[],b={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){_.push({name:e,fn:n,options:t})},addAsyncTest:function(e){_.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=b,Modernizr=new Modernizr;var w=n.documentElement,T="svg"===w.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=i("audio"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))});var S;!function(){var e={}.hasOwnProperty;S=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),b._l={},b.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},b._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){b.addTest=l});var P="Moz O ms Webkit",E=b._config.usePrefixes?P.split(" "):[];b._cssomPrefixes=E;var z=function(n){var r,o=prefixes.length,a=e.CSSRule;if("undefined"==typeof a)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in a)return"@"+n;for(var i=0;o>i;i++){var s=prefixes[i],l=s.toUpperCase()+"_"+r;if(l in a)return"@-"+s.toLowerCase()+"-"+n}return!1};b.atRule=z;var j=b._config.usePrefixes?P.toLowerCase().split(" "):[];b._domPrefixes=j;var N={elem:i("modernizr")};Modernizr._q.push(function(){delete N.elem});var L={style:N.elem.style};Modernizr._q.unshift(function(){delete L.style}),b.testAllProps=h;var O=b.prefixed=function(e,n,t){return 0===e.indexOf("@")?z(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};Modernizr.addTest("batteryapi",!!O("battery",navigator),{aliases:["battery-api"]}),Modernizr.addTest("gamepads",!!O("getGamepads",navigator)),Modernizr.addAsyncTest(function(){var n;try{n=O("indexedDB",e)}catch(t){}if(n){var r="modernizr-"+Math.random(),o=n.open(r);o.onerror=function(){o.error&&"InvalidStateError"===o.error.name?l("indexeddb",!1):(l("indexeddb",!0),x(n,r))},o.onsuccess=function(){l("indexeddb",!0),x(n,r)}}else l("indexeddb",!1)}),Modernizr.addTest("vibrate",!!O("vibrate",navigator)),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof i("canvas").getContext("2d").fillText}),Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var n=e.devicePixelRatio||1,t=12*n,r=i("canvas"),o=r.getContext("2d");return o.fillStyle="#f00",o.textBaseline="top",o.font="32px Arial",o.fillText("🐨",0,0),0!==o.getImageData(t,t,1,1).data[0]}),o(),a(C),delete b.addTest,delete b.addAsyncTest;for(var $=0;$<Modernizr._q.length;$++)Modernizr._q[$]();e.Modernizr=Modernizr}(window,document);
}
function comprobarAudio(){
    let contenido1 = document.getElementById("contenido1");
    if(Modernizr.audio){
        contenido1.innerHTML = "Modernizr ha comprobado que funciona la funcionalidad audio";
        contenido1.style.color = "green";
    }
    else{
        contenido1.innerHTML = "Modernizr ha comprobado que no funciona la funcionalidad audio";
        contenido1.style.color = "red";
    } 
}

function comprobarCanvas(){
    let contenido2 = document.getElementById("contenido2");
    if(Modernizr.audio){
        contenido2.innerHTML = "Modernizr ha comprobado que funciona la funcionalidad canvas";
        contenido2.style.color = "green";
    }
    else{
        contenido2.innerHTML = "Modernizr ha comprobado que no funciona la funcionalidad canvas";
        contenido2.style.color = "red";
    }   
}

function comprobarVibracion(){
    let contenido3 = document.getElementById("contenido3");
    if(Modernizr.vibration){
        contenido3.innerHTML = "Modernizr ha comprobado que funciona la funcionalidad vibración";
        contenido3.style.color = "green";
    }    
    else{
        contenido3.innerHTML = "Modernizr ha comprobado que no funciona la funcionalidad vibración";
        contenido3.style.color = "red";
    }  
}

function comprobarIndexedDB(){
    let contenido4 = document.getElementById("contenido4");
    Modernizr.on('indexeddb', function(result) {
        if (result) {
            contenido4.innerHTML = "Modernizr ha comprobado que funciona la funcionalidad indexedDB";
            contenido4.style.color = "green";
        } else {
            contenido4.innerHTML = "Modernizr ha comprobado que no funciona la funcionalidad indexedDB";
            contenido4.style.color = "red";
        }
      });
}
function comprobarBatteryAPI(){
    let contenido5 = document.getElementById("contenido5");
    if (Modernizr.batteryapi) {
        contenido5.innerHTML = "Modernizr ha comprobado que funciona la funcionalidad batteryAPI";
        contenido5.style.color = "green";
      } else {
        contenido5.innerHTML = "Modernizr ha comprobado que no funciona la funcionalidad batteryAPI";
        contenido5.style.color = "red";
      }
}
function comprobarEmoji(){
    let contenido6 = document.getElementById("contenido6");
    if (Modernizr.emoji) {
        contenido6.innerHTML = "Modernizr ha comprobado que funciona la funcionalidad emoji";
        contenido6.style.color = "green";
      } else {
        contenido6.innerHTML = "Modernizr ha comprobado que no funciona la funcionalidad emoji";
        contenido6.style.color = "red";
      }
}
function comprobarGamePadAPI(){
    let contenido7 = document.getElementById("contenido7");
    if (Modernizr.gamepads) {
        contenido7.innerHTML = "Modernizr ha comprobado que funciona la funcionalidad gamepadAPI";
        contenido7.style.color = "green";
      } else {
        contenido7.innerHTML = "Modernizr ha comprobado que no funciona la funcionalidad gamepadAPI";
        contenido7.style.color = "red";
      }
}
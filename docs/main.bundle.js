/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7980:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
var _get=function t(e,i,n){null===e&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,i);if(void 0===s){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,i,n)}if("value"in s)return s.value;var a=s.get;return void 0!==a?a.call(n):void 0},_createClass=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}window.cash=function(){var i,o=document,a=window,t=Array.prototype,r=t.slice,n=t.filter,s=t.push,e=function(){},h=function(t){return typeof t==typeof e&&t.call},d=function(t){return"string"==typeof t},l=/^#[\w-]*$/,u=/^\.[\w-]*$/,c=/<.+>/,p=/^\w+$/;function v(t,e){e=e||o;var i=u.test(t)?e.getElementsByClassName(t.slice(1)):p.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t);return i}function f(t){if(!i){var e=(i=o.implementation.createHTMLDocument(null)).createElement("base");e.href=o.location.href,i.head.appendChild(e)}return i.body.innerHTML=t,i.body.childNodes}function m(t){"loading"!==o.readyState?t():o.addEventListener("DOMContentLoaded",t)}function g(t,e){if(!t)return this;if(t.cash&&t!==a)return t;var i,n=t,s=0;if(d(t))n=l.test(t)?o.getElementById(t.slice(1)):c.test(t)?f(t):v(t,e);else if(h(t))return m(t),this;if(!n)return this;if(n.nodeType||n===a)this[0]=n,this.length=1;else for(i=this.length=n.length;s<i;s++)this[s]=n[s];return this}function _(t,e){return new g(t,e)}var y=_.fn=_.prototype=g.prototype={cash:!0,length:0,push:s,splice:t.splice,map:t.map,init:g};function k(t,e){for(var i=t.length,n=0;n<i&&!1!==e.call(t[n],t[n],n,t);n++);}function b(t,e){var i=t&&(t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector);return!!i&&i.call(t,e)}function w(e){return d(e)?b:e.cash?function(t){return e.is(t)}:function(t,e){return t===e}}function C(t){return _(r.call(t).filter(function(t,e,i){return i.indexOf(t)===e}))}Object.defineProperty(y,"constructor",{value:_}),_.parseHTML=f,_.noop=e,_.isFunction=h,_.isString=d,_.extend=y.extend=function(t){t=t||{};var e=r.call(arguments),i=e.length,n=1;for(1===e.length&&(t=this,n=0);n<i;n++)if(e[n])for(var s in e[n])e[n].hasOwnProperty(s)&&(t[s]=e[n][s]);return t},_.extend({merge:function(t,e){for(var i=+e.length,n=t.length,s=0;s<i;n++,s++)t[n]=e[s];return t.length=n,t},each:k,matches:b,unique:C,isArray:Array.isArray,isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}});var E=_.uid="_cash"+Date.now();function M(t){return t[E]=t[E]||{}}function O(t,e,i){return M(t)[e]=i}function x(t,e){var i=M(t);return void 0===i[e]&&(i[e]=t.dataset?t.dataset[e]:_(t).attr("data-"+e)),i[e]}y.extend({data:function(e,i){if(d(e))return void 0===i?x(this[0],e):this.each(function(t){return O(t,e,i)});for(var t in e)this.data(t,e[t]);return this},removeData:function(s){return this.each(function(t){return i=s,void((n=M(e=t))?delete n[i]:e.dataset?delete e.dataset[i]:_(e).removeAttr("data-"+name));var e,i,n})}});var L=/\S+/g;function T(t){return d(t)&&t.match(L)}function $(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}function B(t,e,i){t.classList?t.classList.add(e):i.indexOf(" "+e+" ")&&(t.className+=" "+e)}function D(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(e,"")}y.extend({addClass:function(t){var n=T(t);return n?this.each(function(e){var i=" "+e.className+" ";k(n,function(t){B(e,t,i)})}):this},attr:function(e,i){if(e){if(d(e))return void 0===i?this[0]?this[0].getAttribute?this[0].getAttribute(e):this[0][e]:void 0:this.each(function(t){t.setAttribute?t.setAttribute(e,i):t[e]=i});for(var t in e)this.attr(t,e[t]);return this}},hasClass:function(t){var e=!1,i=T(t);return i&&i.length&&this.each(function(t){return!(e=$(t,i[0]))}),e},prop:function(e,i){if(d(e))return void 0===i?this[0][e]:this.each(function(t){t[e]=i});for(var t in e)this.prop(t,e[t]);return this},removeAttr:function(e){return this.each(function(t){t.removeAttribute?t.removeAttribute(e):delete t[e]})},removeClass:function(t){if(!arguments.length)return this.attr("class","");var i=T(t);return i?this.each(function(e){k(i,function(t){D(e,t)})}):this},removeProp:function(e){return this.each(function(t){delete t[e]})},toggleClass:function(t,e){if(void 0!==e)return this[e?"addClass":"removeClass"](t);var n=T(t);return n?this.each(function(e){var i=" "+e.className+" ";k(n,function(t){$(e,t)?D(e,t):B(e,t,i)})}):this}}),y.extend({add:function(t,e){return C(_.merge(this,_(t,e)))},each:function(t){return k(this,t),this},eq:function(t){return _(this.get(t))},filter:function(e){if(!e)return this;var i=h(e)?e:w(e);return _(n.call(this,function(t){return i(t,e)}))},first:function(){return this.eq(0)},get:function(t){return void 0===t?r.call(this):t<0?this[t+this.length]:this[t]},index:function(t){var e=t?_(t)[0]:this[0],i=t?this:_(e).parent().children();return r.call(i).indexOf(e)},last:function(){return this.eq(-1)}});var S,I,A,R,H,P,W=(H=/(?:^\w|[A-Z]|\b\w)/g,P=/[\s-_]+/g,function(t){return t.replace(H,function(t,e){return t[0===e?"toLowerCase":"toUpperCase"]()}).replace(P,"")}),j=(S={},I=document,A=I.createElement("div"),R=A.style,function(e){if(e=W(e),S[e])return S[e];var t=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+["webkit","moz","ms","o"].join(t+" ")+t).split(" ");return k(i,function(t){if(t in R)return S[t]=e=S[e]=t,!1}),S[e]});function F(t,e){return parseInt(a.getComputedStyle(t[0],null)[e],10)||0}function q(e,i,t){var n,s=x(e,"_cashEvents"),o=s&&s[i];o&&(t?(e.removeEventListener(i,t),0<=(n=o.indexOf(t))&&o.splice(n,1)):(k(o,function(t){e.removeEventListener(i,t)}),o=[]))}function N(t,e){return"&"+encodeURIComponent(t)+"="+encodeURIComponent(e).replace(/%20/g,"+")}function z(t){var e,i,n,s=t.type;if(!s)return null;switch(s.toLowerCase()){case"select-one":return 0<=(n=(i=t).selectedIndex)?i.options[n].value:null;case"select-multiple":return e=[],k(t.options,function(t){t.selected&&e.push(t.value)}),e.length?e:null;case"radio":case"checkbox":return t.checked?t.value:null;default:return t.value?t.value:null}}function V(e,i,n){var t=d(i);t||!i.length?k(e,t?function(t){return t.insertAdjacentHTML(n?"afterbegin":"beforeend",i)}:function(t,e){return function(t,e,i){if(i){var n=t.childNodes[0];t.insertBefore(e,n)}else t.appendChild(e)}(t,0===e?i:i.cloneNode(!0),n)}):k(i,function(t){return V(e,t,n)})}_.prefixedProp=j,_.camelCase=W,y.extend({css:function(e,i){if(d(e))return e=j(e),1<arguments.length?this.each(function(t){return t.style[e]=i}):a.getComputedStyle(this[0])[e];for(var t in e)this.css(t,e[t]);return this}}),k(["Width","Height"],function(e){var t=e.toLowerCase();y[t]=function(){return this[0].getBoundingClientRect()[t]},y["inner"+e]=function(){return this[0]["client"+e]},y["outer"+e]=function(t){return this[0]["offset"+e]+(t?F(this,"margin"+("Width"===e?"Left":"Top"))+F(this,"margin"+("Width"===e?"Right":"Bottom")):0)}}),y.extend({off:function(e,i){return this.each(function(t){return q(t,e,i)})},on:function(a,i,r,l){var n;if(!d(a)){for(var t in a)this.on(t,i,a[t]);return this}return h(i)&&(r=i,i=null),"ready"===a?(m(r),this):(i&&(n=r,r=function(t){for(var e=t.target;!b(e,i);){if(e===this||null===e)return e=!1;e=e.parentNode}e&&n.call(e,t)}),this.each(function(t){var e,i,n,s,o=r;l&&(o=function(){r.apply(this,arguments),q(t,a,o)}),i=a,n=o,(s=x(e=t,"_cashEvents")||O(e,"_cashEvents",{}))[i]=s[i]||[],s[i].push(n),e.addEventListener(i,n)}))},one:function(t,e,i){return this.on(t,e,i,!0)},ready:m,trigger:function(t,e){if(document.createEvent){var i=document.createEvent("HTMLEvents");return i.initEvent(t,!0,!1),i=this.extend(i,e),this.each(function(t){return t.dispatchEvent(i)})}}}),y.extend({serialize:function(){var s="";return k(this[0].elements||this,function(t){if(!t.disabled&&"FIELDSET"!==t.tagName){var e=t.name;switch(t.type.toLowerCase()){case"file":case"reset":case"submit":case"button":break;case"select-multiple":var i=z(t);null!==i&&k(i,function(t){s+=N(e,t)});break;default:var n=z(t);null!==n&&(s+=N(e,n))}}}),s.substr(1)},val:function(e){return void 0===e?z(this[0]):this.each(function(t){return t.value=e})}}),y.extend({after:function(t){return _(t).insertAfter(this),this},append:function(t){return V(this,t),this},appendTo:function(t){return V(_(t),this),this},before:function(t){return _(t).insertBefore(this),this},clone:function(){return _(this.map(function(t){return t.cloneNode(!0)}))},empty:function(){return this.html(""),this},html:function(t){if(void 0===t)return this[0].innerHTML;var e=t.nodeType?t[0].outerHTML:t;return this.each(function(t){return t.innerHTML=e})},insertAfter:function(t){var s=this;return _(t).each(function(t,e){var i=t.parentNode,n=t.nextSibling;s.each(function(t){i.insertBefore(0===e?t:t.cloneNode(!0),n)})}),this},insertBefore:function(t){var s=this;return _(t).each(function(e,i){var n=e.parentNode;s.each(function(t){n.insertBefore(0===i?t:t.cloneNode(!0),e)})}),this},prepend:function(t){return V(this,t,!0),this},prependTo:function(t){return V(_(t),this,!0),this},remove:function(){return this.each(function(t){if(t.parentNode)return t.parentNode.removeChild(t)})},text:function(e){return void 0===e?this[0].textContent:this.each(function(t){return t.textContent=e})}});var X=o.documentElement;return y.extend({position:function(){var t=this[0];return{left:t.offsetLeft,top:t.offsetTop}},offset:function(){var t=this[0].getBoundingClientRect();return{top:t.top+a.pageYOffset-X.clientTop,left:t.left+a.pageXOffset-X.clientLeft}},offsetParent:function(){return _(this[0].offsetParent)}}),y.extend({children:function(e){var i=[];return this.each(function(t){s.apply(i,t.children)}),i=C(i),e?i.filter(function(t){return b(t,e)}):i},closest:function(t){return!t||this.length<1?_():this.is(t)?this.filter(t):this.parent().closest(t)},is:function(e){if(!e)return!1;var i=!1,n=w(e);return this.each(function(t){return!(i=n(t,e))}),i},find:function(e){if(!e||e.nodeType)return _(e&&this.has(e).length?e:null);var i=[];return this.each(function(t){s.apply(i,v(e,t))}),C(i)},has:function(e){var t=d(e)?function(t){return 0!==v(e,t).length}:function(t){return t.contains(e)};return this.filter(t)},next:function(){return _(this[0].nextElementSibling)},not:function(e){if(!e)return this;var i=w(e);return this.filter(function(t){return!i(t,e)})},parent:function(){var e=[];return this.each(function(t){t&&t.parentNode&&e.push(t.parentNode)}),C(e)},parents:function(e){var i,n=[];return this.each(function(t){for(i=t;i&&i.parentNode&&i!==o.body.parentNode;)i=i.parentNode,(!e||e&&b(i,e))&&n.push(i)}),C(n)},prev:function(){return _(this[0].previousElementSibling)},siblings:function(t){var e=this.parent().children(t),i=this[0];return e.filter(function(t){return t!==i})}}),_}();var Component=function(){function s(t,e,i){_classCallCheck(this,s),e instanceof Element||console.error(Error(e+" is not an HTML Element"));var n=t.getInstance(e);n&&n.destroy(),this.el=e,this.$el=cash(e)}return _createClass(s,null,[{key:"init",value:function(t,e,i){var n=null;if(e instanceof Element)n=new t(e,i);else if(e&&(e.jquery||e.cash||e instanceof NodeList)){for(var s=[],o=0;o<e.length;o++)s.push(new t(e[o],i));n=s}return n}}]),s}();!function(t){t.Package?M={}:t.M={},M.jQueryLoaded=!!t.jQuery}(window), true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return M}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0,M.version="1.0.0",M.keys={TAB:9,ENTER:13,ESC:27,ARROW_UP:38,ARROW_DOWN:40},M.tabPressed=!1,M.keyDown=!1;var docHandleKeydown=function(t){M.keyDown=!0,t.which!==M.keys.TAB&&t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ARROW_UP||(M.tabPressed=!0)},docHandleKeyup=function(t){M.keyDown=!1,t.which!==M.keys.TAB&&t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ARROW_UP||(M.tabPressed=!1)},docHandleFocus=function(t){M.keyDown&&document.body.classList.add("keyboard-focused")},docHandleBlur=function(t){document.body.classList.remove("keyboard-focused")};document.addEventListener("keydown",docHandleKeydown,!0),document.addEventListener("keyup",docHandleKeyup,!0),document.addEventListener("focus",docHandleFocus,!0),document.addEventListener("blur",docHandleBlur,!0),M.initializeJqueryWrapper=function(n,s,o){jQuery.fn[s]=function(e){if(n.prototype[e]){var i=Array.prototype.slice.call(arguments,1);if("get"===e.slice(0,3)){var t=this.first()[0][o];return t[e].apply(t,i)}return this.each(function(){var t=this[o];t[e].apply(t,i)})}if("object"==typeof e||!e)return n.init(this,e),this;jQuery.error("Method "+e+" does not exist on jQuery."+s)}},M.AutoInit=function(t){var e=t||document.body,i={Autocomplete:e.querySelectorAll(".autocomplete:not(.no-autoinit)"),Carousel:e.querySelectorAll(".carousel:not(.no-autoinit)"),Chips:e.querySelectorAll(".chips:not(.no-autoinit)"),Collapsible:e.querySelectorAll(".collapsible:not(.no-autoinit)"),Datepicker:e.querySelectorAll(".datepicker:not(.no-autoinit)"),Dropdown:e.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),Materialbox:e.querySelectorAll(".materialboxed:not(.no-autoinit)"),Modal:e.querySelectorAll(".modal:not(.no-autoinit)"),Parallax:e.querySelectorAll(".parallax:not(.no-autoinit)"),Pushpin:e.querySelectorAll(".pushpin:not(.no-autoinit)"),ScrollSpy:e.querySelectorAll(".scrollspy:not(.no-autoinit)"),FormSelect:e.querySelectorAll("select:not(.no-autoinit)"),Sidenav:e.querySelectorAll(".sidenav:not(.no-autoinit)"),Tabs:e.querySelectorAll(".tabs:not(.no-autoinit)"),TapTarget:e.querySelectorAll(".tap-target:not(.no-autoinit)"),Timepicker:e.querySelectorAll(".timepicker:not(.no-autoinit)"),Tooltip:e.querySelectorAll(".tooltipped:not(.no-autoinit)"),FloatingActionButton:e.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")};for(var n in i){M[n].init(i[n])}},M.objectSelectorString=function(t){return((t.prop("tagName")||"")+(t.attr("id")||"")+(t.attr("class")||"")).replace(/\s/g,"")},M.guid=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(),M.escapeHash=function(t){return t.replace(/(:|\.|\[|\]|,|=|\/)/g,"\\$1")},M.elementOrParentIsFixed=function(t){var e=$(t),i=e.add(e.parents()),n=!1;return i.each(function(){if("fixed"===$(this).css("position"))return!(n=!0)}),n},M.checkWithinContainer=function(t,e,i){var n={top:!1,right:!1,bottom:!1,left:!1},s=t.getBoundingClientRect(),o=t===document.body?Math.max(s.bottom,window.innerHeight):s.bottom,a=t.scrollLeft,r=t.scrollTop,l=e.left-a,h=e.top-r;return(l<s.left+i||l<i)&&(n.left=!0),(l+e.width>s.right-i||l+e.width>window.innerWidth-i)&&(n.right=!0),(h<s.top+i||h<i)&&(n.top=!0),(h+e.height>o-i||h+e.height>window.innerHeight-i)&&(n.bottom=!0),n},M.checkPossibleAlignments=function(t,e,i,n){var s={top:!0,right:!0,bottom:!0,left:!0,spaceOnTop:null,spaceOnRight:null,spaceOnBottom:null,spaceOnLeft:null},o="visible"===getComputedStyle(e).overflow,a=e.getBoundingClientRect(),r=Math.min(a.height,window.innerHeight),l=Math.min(a.width,window.innerWidth),h=t.getBoundingClientRect(),d=e.scrollLeft,u=e.scrollTop,c=i.left-d,p=i.top-u,v=i.top+h.height-u;return s.spaceOnRight=o?window.innerWidth-(h.left+i.width):l-(c+i.width),s.spaceOnRight<0&&(s.left=!1),s.spaceOnLeft=o?h.right-i.width:c-i.width+h.width,s.spaceOnLeft<0&&(s.right=!1),s.spaceOnBottom=o?window.innerHeight-(h.top+i.height+n):r-(p+i.height+n),s.spaceOnBottom<0&&(s.top=!1),s.spaceOnTop=o?h.bottom-(i.height+n):v-(i.height-n),s.spaceOnTop<0&&(s.bottom=!1),s},M.getOverflowParent=function(t){return null==t?null:t===document.body||"visible"!==getComputedStyle(t).overflow?t:M.getOverflowParent(t.parentElement)},M.getIdFromTrigger=function(t){var e=t.getAttribute("data-target");return e||(e=(e=t.getAttribute("href"))?e.slice(1):""),e},M.getDocumentScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},M.getDocumentScrollLeft=function(){return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0};var getTime=Date.now||function(){return(new Date).getTime()};M.throttle=function(i,n,s){var o=void 0,a=void 0,r=void 0,l=null,h=0;s||(s={});var d=function(){h=!1===s.leading?0:getTime(),l=null,r=i.apply(o,a),o=a=null};return function(){var t=getTime();h||!1!==s.leading||(h=t);var e=n-(t-h);return o=this,a=arguments,e<=0?(clearTimeout(l),l=null,h=t,r=i.apply(o,a),o=a=null):l||!1===s.trailing||(l=setTimeout(d,e)),r}};var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,i){if(i.get||i.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=i.value)},$jscomp.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:"undefined"!=typeof __webpack_require__.g&&null!=__webpack_require__.g?__webpack_require__.g:t},$jscomp.global=$jscomp.getGlobal(this),$jscomp.SYMBOL_PREFIX="jscomp_symbol_",$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){},$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)},$jscomp.symbolCounter_=0,$jscomp.Symbol=function(t){return $jscomp.SYMBOL_PREFIX+(t||"")+$jscomp.symbolCounter_++},$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var t=$jscomp.global.Symbol.iterator;t||(t=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&$jscomp.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}}),$jscomp.initSymbolIterator=function(){}},$jscomp.arrayIterator=function(t){var e=0;return $jscomp.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},$jscomp.iteratorPrototype=function(t){return $jscomp.initSymbolIterator(),(t={next:t})[$jscomp.global.Symbol.iterator]=function(){return this},t},$jscomp.array=$jscomp.array||{},$jscomp.iteratorFromArray=function(e,i){$jscomp.initSymbolIterator(),e instanceof String&&(e+="");var n=0,s={next:function(){if(n<e.length){var t=n++;return{value:i(t,e[t]),done:!1}}return s.next=function(){return{done:!0,value:void 0}},s.next()}};return s[Symbol.iterator]=function(){return s},s},$jscomp.polyfill=function(t,e,i,n){if(e){for(i=$jscomp.global,t=t.split("."),n=0;n<t.length-1;n++){var s=t[n];s in i||(i[s]={}),i=i[s]}(e=e(n=i[t=t[t.length-1]]))!=n&&null!=e&&$jscomp.defineProperty(i,t,{configurable:!0,writable:!0,value:e})}},$jscomp.polyfill("Array.prototype.keys",function(t){return t||function(){return $jscomp.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var $jscomp$this=this;M.anime=function(){function s(t){if(!B.col(t))try{return document.querySelectorAll(t)}catch(t){}}function b(t,e){for(var i=t.length,n=2<=arguments.length?e:void 0,s=[],o=0;o<i;o++)if(o in t){var a=t[o];e.call(n,a,o,t)&&s.push(a)}return s}function d(t){return t.reduce(function(t,e){return t.concat(B.arr(e)?d(e):e)},[])}function o(t){return B.arr(t)?t:(B.str(t)&&(t=s(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function a(t,e){return t.some(function(t){return t===e})}function r(t){var e,i={};for(e in t)i[e]=t[e];return i}function u(t,e){var i,n=r(t);for(i in t)n[i]=e.hasOwnProperty(i)?e[i]:t[i];return n}function c(t,e){var i,n=r(t);for(i in e)n[i]=B.und(t[i])?e[i]:t[i];return n}function l(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function h(t,e){return B.fnc(t)?t(e.target,e.id,e.total):t}function w(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function p(t,e){return B.dom(t)&&a($,e)?"transform":B.dom(t)&&(t.getAttribute(e)||B.svg(t)&&t[e])?"attribute":B.dom(t)&&"transform"!==e&&w(t,e)?"css":null!=t[e]?"object":void 0}function v(t,e){switch(p(t,e)){case"transform":return function(t,i){var e,n=-1<(e=i).indexOf("translate")||"perspective"===e?"px":-1<e.indexOf("rotate")||-1<e.indexOf("skew")?"deg":void 0,n=-1<i.indexOf("scale")?1:0+n;if(!(t=t.style.transform))return n;for(var s=[],o=[],a=[],r=/(\w+)\((.+?)\)/g;s=r.exec(t);)o.push(s[1]),a.push(s[2]);return(t=b(a,function(t,e){return o[e]===i})).length?t[0]:n}(t,e);case"css":return w(t,e);case"attribute":return t.getAttribute(e)}return t[e]||0}function f(t,e){var i=/^(\*=|\+=|-=)/.exec(t);if(!i)return t;var n=l(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(i[0],"")),i[0][0]){case"+":return e+t+n;case"-":return e-t+n;case"*":return e*t+n}}function m(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function i(t){t=t.points;for(var e,i=0,n=0;n<t.numberOfItems;n++){var s=t.getItem(n);0<n&&(i+=m(e,s)),e=s}return i}function g(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return m({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return i(t);case"polygon":var e=t.points;return i(t)+m(e.getItem(e.numberOfItems-1),e.getItem(0))}}function C(e,i){function t(t){return t=void 0===t?0:t,e.el.getPointAtLength(1<=i+t?i+t:0)}var n=t(),s=t(-1),o=t(1);switch(e.property){case"x":return n.x;case"y":return n.y;case"angle":return 180*Math.atan2(o.y-s.y,o.x-s.x)/Math.PI}}function _(t,e){var i,n=/-?\d*\.?\d+/g;if(i=B.pth(t)?t.totalLength:t,B.col(i))if(B.rgb(i)){var s=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(i);i=s?"rgba("+s[1]+",1)":i}else i=B.hex(i)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,i,n){return e+e+i+i+n+n});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var i=parseInt(e[2],16),e=parseInt(e[3],16);return"rgba("+t+","+i+","+e+",1)"}(i):B.hsl(i)?function(t){function e(t,e,i){return i<0&&(i+=1),1<i&&--i,i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}var i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(i[1])/360;var n=parseInt(i[2])/100,s=parseInt(i[3])/100,i=i[4]||1;if(0==n)s=n=t=s;else{var o=s<.5?s*(1+n):s+n-s*n,a=2*s-o,s=e(a,o,t+1/3),n=e(a,o,t);t=e(a,o,t-1/3)}return"rgba("+255*s+","+255*n+","+255*t+","+i+")"}(i):void 0;else s=(s=l(i))?i.substr(0,i.length-s.length):i,i=e&&!/\s/g.test(i)?s+e:s;return{original:i+="",numbers:i.match(n)?i.match(n).map(Number):[0],strings:B.str(t)||e?i.split(n):[]}}function y(t){return b(t=t?d(B.arr(t)?t.map(o):o(t)):[],function(t,e,i){return i.indexOf(t)===e})}function k(t,i){var e=r(i);if(B.arr(t)){var n=t.length;2!==n||B.obj(t[0])?B.fnc(i.duration)||(e.duration=i.duration/n):t={value:t}}return o(t).map(function(t,e){return e=e?0:i.delay,t=B.obj(t)&&!B.pth(t)?t:{value:t},B.und(t.delay)&&(t.delay=e),t}).map(function(t){return c(t,e)})}function E(o,a){var r;return o.tweens.map(function(t){var e=(t=function(t,e){var i,n={};for(i in t){var s=h(t[i],e);B.arr(s)&&1===(s=s.map(function(t){return h(t,e)})).length&&(s=s[0]),n[i]=s}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(t,a)).value,i=v(a.target,o.name),n=r?r.to.original:i,n=B.arr(e)?e[0]:n,s=f(B.arr(e)?e[1]:e,n),i=l(s)||l(n)||l(i);return t.from=_(n,i),t.to=_(s,i),t.start=r?r.end:o.offset,t.end=t.start+t.delay+t.duration,t.easing=function(t){return B.arr(t)?D.apply(this,t):S[t]}(t.easing),t.elasticity=(1e3-Math.min(Math.max(t.elasticity,1),999))/1e3,t.isPath=B.pth(e),t.isColor=B.col(t.from.original),t.isColor&&(t.round=1),r=t})}function M(e,t,i,n){var s="delay"===e;return t.length?(s?Math.min:Math.max).apply(Math,t.map(function(t){return t[e]})):s?n.delay:i.offset+n.delay+n.duration}function n(t){var e,i,n,s,o=u(L,t),a=u(T,t),r=(i=t.targets,(n=y(i)).map(function(t,e){return{target:t,id:e,total:n.length}})),l=[],h=c(o,a);for(e in t)h.hasOwnProperty(e)||"targets"===e||l.push({name:e,offset:h.offset,tweens:k(t[e],a)});return s=l,t=b(d(r.map(function(n){return s.map(function(t){var e=p(n.target,t.name);if(e){var i=E(t,n);t={type:e,property:t.name,animatable:n,tweens:i,duration:i[i.length-1].end,delay:i[0].delay}}else t=void 0;return t})})),function(t){return!B.und(t)}),c(o,{children:[],animatables:r,animations:t,duration:M("duration",t,o,a),delay:M("delay",t,o,a)})}function O(t){function d(){return window.Promise&&new Promise(function(t){return _=t})}function u(t){return k.reversed?k.duration-t:t}function c(e){for(var t=0,i={},n=k.animations,s=n.length;t<s;){var o=n[t],a=o.animatable,r=o.tweens,l=r.length-1,h=r[l];l&&(h=b(r,function(t){return e<t.end})[0]||h);for(var r=Math.min(Math.max(e-h.start-h.delay,0),h.duration)/h.duration,d=isNaN(r)?1:h.easing(r,h.elasticity),r=h.to.strings,u=h.round,l=[],c=void 0,c=h.to.numbers.length,p=0;p<c;p++){var v=void 0,v=h.to.numbers[p],f=h.from.numbers[p],v=h.isPath?C(h.value,d*v):f+d*(v-f);u&&(h.isColor&&2<p||(v=Math.round(v*u)/u)),l.push(v)}if(h=r.length)for(c=r[0],d=0;d<h;d++)u=r[d+1],p=l[d],isNaN(p)||(c=u?c+(p+u):c+(p+" "));else c=l[0];I[o.type](a.target,o.property,c,i,a.id),o.currentValue=c,t++}if(t=Object.keys(i).length)for(n=0;n<t;n++)x||(x=w(document.body,"transform")?"transform":"-webkit-transform"),k.animatables[n].target.style[x]=i[n].join(" ");k.currentTime=e,k.progress=e/k.duration*100}function p(t){k[t]&&k[t](k)}function v(){k.remaining&&!0!==k.remaining&&k.remaining--}function e(t){var e=k.duration,i=k.offset,n=i+k.delay,s=k.currentTime,o=k.reversed,a=u(t);if(k.children.length){var r=k.children,l=r.length;if(a>=k.currentTime)for(var h=0;h<l;h++)r[h].seek(a);else for(;l--;)r[l].seek(a)}(n<=a||!e)&&(k.began||(k.began=!0,p("begin")),p("run")),i<a&&a<e?c(a):(a<=i&&0!==s&&(c(0),o&&v()),(e<=a&&s!==e||!e)&&(c(e),o||v())),p("update"),e<=t&&(k.remaining?(m=f,"alternate"===k.direction&&(k.reversed=!k.reversed)):(k.pause(),k.completed||(k.completed=!0,p("complete"),"Promise"in window&&(_(),y=d()))),g=0)}t=void 0===t?{}:t;var f,m,g=0,_=null,y=d(),k=n(t);return k.reset=function(){var t=k.direction,e=k.loop;for(k.currentTime=0,k.progress=0,k.paused=!0,k.began=!1,k.completed=!1,k.reversed="reverse"===t,k.remaining="alternate"===t&&1===e?2:e,c(0),t=k.children.length;t--;)k.children[t].reset()},k.tick=function(t){f=t,m||(m=f),e((g+f-m)*O.speed)},k.seek=function(t){e(u(t))},k.pause=function(){var t=A.indexOf(k);-1<t&&A.splice(t,1),k.paused=!0},k.play=function(){k.paused&&(k.paused=!1,m=0,g=u(k.currentTime),A.push(k),R||H())},k.reverse=function(){k.reversed=!k.reversed,m=0,g=u(k.currentTime)},k.restart=function(){k.pause(),k.reset(),k.play()},k.finished=y,k.reset(),k.autoplay&&k.play(),k}var x,L={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},T={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},$="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),B={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return B.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||B.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return B.hex(t)||B.rgb(t)||B.hsl(t)}},D=function(){function u(t,e,i){return(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t}return function(a,r,l,h){if(0<=a&&a<=1&&0<=l&&l<=1){var d=new Float32Array(11);if(a!==r||l!==h)for(var t=0;t<11;++t)d[t]=u(.1*t,a,l);return function(t){if(a===r&&l===h)return t;if(0===t)return 0;if(1===t)return 1;for(var e=0,i=1;10!==i&&d[i]<=t;++i)e+=.1;var i=e+(t-d[--i])/(d[i+1]-d[i])*.1,n=3*(1-3*l+3*a)*i*i+2*(3*l-6*a)*i+3*a;if(.001<=n){for(e=0;e<4&&0!=(n=3*(1-3*l+3*a)*i*i+2*(3*l-6*a)*i+3*a);++e)var s=u(i,a,l)-t,i=i-s/n;t=i}else if(0===n)t=i;else{for(var i=e,e=e+.1,o=0;0<(n=u(s=i+(e-i)/2,a,l)-t)?e=s:i=s,1e-7<Math.abs(n)&&++o<10;);t=s}return u(t,r,h)}}}}(),S=function(){function i(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var t,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),e={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],i],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(t,e){return 1-i(1-t,e)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(t,e){return t<.5?i(2*t,e)/2:1-i(-2*t+2,e)/2}]},s={linear:D(.25,.25,.75,.75)},o={};for(t in e)o.type=t,e[o.type].forEach(function(i){return function(t,e){s["ease"+i.type+n[e]]=B.fnc(t)?t:D.apply($jscomp$this,t)}}(o)),o={type:o.type};return s}(),I={css:function(t,e,i){return t.style[e]=i},attribute:function(t,e,i){return t.setAttribute(e,i)},object:function(t,e,i){return t[e]=i},transform:function(t,e,i,n,s){n[s]||(n[s]=[]),n[s].push(e+"("+i+")")}},A=[],R=0,H=function(){function n(){R=requestAnimationFrame(t)}function t(t){var e=A.length;if(e){for(var i=0;i<e;)A[i]&&A[i].tick(t),i++;n()}else cancelAnimationFrame(R),R=0}return n}();return O.version="2.2.0",O.speed=1,O.running=A,O.remove=function(t){t=y(t);for(var e=A.length;e--;)for(var i=A[e],n=i.animations,s=n.length;s--;)a(t,n[s].animatable.target)&&(n.splice(s,1),n.length||i.pause())},O.getValue=v,O.path=function(t,e){var i=B.str(t)?s(t)[0]:t,n=e||100;return function(t){return{el:i,property:t,totalLength:g(i)*(n/100)}}},O.setDashoffset=function(t){var e=g(t);return t.setAttribute("stroke-dasharray",e),e},O.bezier=D,O.easings=S,O.timeline=function(n){var s=O(n);return s.pause(),s.duration=0,s.add=function(t){return s.children.forEach(function(t){t.began=!0,t.completed=!0}),o(t).forEach(function(t){var e=c(t,u(T,n||{}));e.targets=e.targets||n.targets,t=s.duration;var i=e.offset;e.autoplay=!1,e.direction=s.direction,e.offset=B.und(i)?t:f(i,t),s.began=!0,s.completed=!0,s.seek(e.offset),(e=O(e)).began=!0,e.completed=!0,e.duration>t&&(s.duration=e.duration),s.children.push(e)}),s.seek(0),s.reset(),s.autoplay&&s.restart(),s},s},O.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},O}(),function(r,l){"use strict";var e={accordion:!0,onOpenStart:void 0,onOpenEnd:void 0,onCloseStart:void 0,onCloseEnd:void 0,inDuration:300,outDuration:300},t=function(t){function s(t,e){_classCallCheck(this,s);var i=_possibleConstructorReturn(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,e));(i.el.M_Collapsible=i).options=r.extend({},s.defaults,e),i.$headers=i.$el.children("li").children(".collapsible-header"),i.$headers.attr("tabindex",0),i._setupEventHandlers();var n=i.$el.children("li.active").children(".collapsible-body");return i.options.accordion?n.first().css("display","block"):n.css("display","block"),i}return _inherits(s,Component),_createClass(s,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Collapsible=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleCollapsibleClickBound=this._handleCollapsibleClick.bind(this),this._handleCollapsibleKeydownBound=this._handleCollapsibleKeydown.bind(this),this.el.addEventListener("click",this._handleCollapsibleClickBound),this.$headers.each(function(t){t.addEventListener("keydown",e._handleCollapsibleKeydownBound)})}},{key:"_removeEventHandlers",value:function(){var e=this;this.el.removeEventListener("click",this._handleCollapsibleClickBound),this.$headers.each(function(t){t.removeEventListener("keydown",e._handleCollapsibleKeydownBound)})}},{key:"_handleCollapsibleClick",value:function(t){var e=r(t.target).closest(".collapsible-header");if(t.target&&e.length){var i=e.closest(".collapsible");if(i[0]===this.el){var n=e.closest("li"),s=i.children("li"),o=n[0].classList.contains("active"),a=s.index(n);o?this.close(a):this.open(a)}}}},{key:"_handleCollapsibleKeydown",value:function(t){13===t.keyCode&&this._handleCollapsibleClickBound(t)}},{key:"_animateIn",value:function(t){var e=this,i=this.$el.children("li").eq(t);if(i.length){var n=i.children(".collapsible-body");l.remove(n[0]),n.css({display:"block",overflow:"hidden",height:0,paddingTop:"",paddingBottom:""});var s=n.css("padding-top"),o=n.css("padding-bottom"),a=n[0].scrollHeight;n.css({paddingTop:0,paddingBottom:0}),l({targets:n[0],height:a,paddingTop:s,paddingBottom:o,duration:this.options.inDuration,easing:"easeInOutCubic",complete:function(t){n.css({overflow:"",paddingTop:"",paddingBottom:"",height:""}),"function"==typeof e.options.onOpenEnd&&e.options.onOpenEnd.call(e,i[0])}})}}},{key:"_animateOut",value:function(t){var e=this,i=this.$el.children("li").eq(t);if(i.length){var n=i.children(".collapsible-body");l.remove(n[0]),n.css("overflow","hidden"),l({targets:n[0],height:0,paddingTop:0,paddingBottom:0,duration:this.options.outDuration,easing:"easeInOutCubic",complete:function(){n.css({height:"",overflow:"",padding:"",display:""}),"function"==typeof e.options.onCloseEnd&&e.options.onCloseEnd.call(e,i[0])}})}}},{key:"open",value:function(t){var i=this,e=this.$el.children("li").eq(t);if(e.length&&!e[0].classList.contains("active")){if("function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,e[0]),this.options.accordion){var n=this.$el.children("li");this.$el.children("li.active").each(function(t){var e=n.index(r(t));i.close(e)})}e[0].classList.add("active"),this._animateIn(t)}}},{key:"close",value:function(t){var e=this.$el.children("li").eq(t);e.length&&e[0].classList.contains("active")&&("function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,e[0]),e[0].classList.remove("active"),this._animateOut(t))}}],[{key:"init",value:function(t,e){return _get(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Collapsible}},{key:"defaults",get:function(){return e}}]),s}();M.Collapsible=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"collapsible","M_Collapsible")}(cash,M.anime),function(h,i){"use strict";var e={alignment:"left",autoFocus:!0,constrainWidth:!0,container:null,coverTrigger:!0,closeOnClick:!0,hover:!1,inDuration:150,outDuration:250,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,onItemClick:null},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return i.el.M_Dropdown=i,n._dropdowns.push(i),i.id=M.getIdFromTrigger(t),i.dropdownEl=document.getElementById(i.id),i.$dropdownEl=h(i.dropdownEl),i.options=h.extend({},n.defaults,e),i.isOpen=!1,i.isScrollable=!1,i.isTouchMoving=!1,i.focusedIndex=-1,i.filterQuery=[],i.options.container?h(i.options.container).append(i.dropdownEl):i.$el.after(i.dropdownEl),i._makeDropdownFocusable(),i._resetFilterQueryBound=i._resetFilterQuery.bind(i),i._handleDocumentClickBound=i._handleDocumentClick.bind(i),i._handleDocumentTouchmoveBound=i._handleDocumentTouchmove.bind(i),i._handleDropdownClickBound=i._handleDropdownClick.bind(i),i._handleDropdownKeydownBound=i._handleDropdownKeydown.bind(i),i._handleTriggerKeydownBound=i._handleTriggerKeydown.bind(i),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._resetDropdownStyles(),this._removeEventHandlers(),n._dropdowns.splice(n._dropdowns.indexOf(this),1),this.el.M_Dropdown=void 0}},{key:"_setupEventHandlers",value:function(){this.el.addEventListener("keydown",this._handleTriggerKeydownBound),this.dropdownEl.addEventListener("click",this._handleDropdownClickBound),this.options.hover?(this._handleMouseEnterBound=this._handleMouseEnter.bind(this),this.el.addEventListener("mouseenter",this._handleMouseEnterBound),this._handleMouseLeaveBound=this._handleMouseLeave.bind(this),this.el.addEventListener("mouseleave",this._handleMouseLeaveBound),this.dropdownEl.addEventListener("mouseleave",this._handleMouseLeaveBound)):(this._handleClickBound=this._handleClick.bind(this),this.el.addEventListener("click",this._handleClickBound))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("keydown",this._handleTriggerKeydownBound),this.dropdownEl.removeEventListener("click",this._handleDropdownClickBound),this.options.hover?(this.el.removeEventListener("mouseenter",this._handleMouseEnterBound),this.el.removeEventListener("mouseleave",this._handleMouseLeaveBound),this.dropdownEl.removeEventListener("mouseleave",this._handleMouseLeaveBound)):this.el.removeEventListener("click",this._handleClickBound)}},{key:"_setupTemporaryEventHandlers",value:function(){document.body.addEventListener("click",this._handleDocumentClickBound,!0),document.body.addEventListener("touchend",this._handleDocumentClickBound),document.body.addEventListener("touchmove",this._handleDocumentTouchmoveBound),this.dropdownEl.addEventListener("keydown",this._handleDropdownKeydownBound)}},{key:"_removeTemporaryEventHandlers",value:function(){document.body.removeEventListener("click",this._handleDocumentClickBound,!0),document.body.removeEventListener("touchend",this._handleDocumentClickBound),document.body.removeEventListener("touchmove",this._handleDocumentTouchmoveBound),this.dropdownEl.removeEventListener("keydown",this._handleDropdownKeydownBound)}},{key:"_handleClick",value:function(t){t.preventDefault(),this.open()}},{key:"_handleMouseEnter",value:function(){this.open()}},{key:"_handleMouseLeave",value:function(t){var e=t.toElement||t.relatedTarget,i=!!h(e).closest(".dropdown-content").length,n=!1,s=h(e).closest(".dropdown-trigger");s.length&&s[0].M_Dropdown&&s[0].M_Dropdown.isOpen&&(n=!0),n||i||this.close()}},{key:"_handleDocumentClick",value:function(t){var e=this,i=h(t.target);this.options.closeOnClick&&i.closest(".dropdown-content").length&&!this.isTouchMoving?setTimeout(function(){e.close()},0):!i.closest(".dropdown-trigger").length&&i.closest(".dropdown-content").length||setTimeout(function(){e.close()},0),this.isTouchMoving=!1}},{key:"_handleTriggerKeydown",value:function(t){t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ENTER||this.isOpen||(t.preventDefault(),this.open())}},{key:"_handleDocumentTouchmove",value:function(t){h(t.target).closest(".dropdown-content").length&&(this.isTouchMoving=!0)}},{key:"_handleDropdownClick",value:function(t){if("function"==typeof this.options.onItemClick){var e=h(t.target).closest("li")[0];this.options.onItemClick.call(this,e)}}},{key:"_handleDropdownKeydown",value:function(t){if(t.which===M.keys.TAB)t.preventDefault(),this.close();else if(t.which!==M.keys.ARROW_DOWN&&t.which!==M.keys.ARROW_UP||!this.isOpen)if(t.which===M.keys.ENTER&&this.isOpen){var e=this.dropdownEl.children[this.focusedIndex],i=h(e).find("a, button").first();i.length?i[0].click():e&&e.click()}else t.which===M.keys.ESC&&this.isOpen&&(t.preventDefault(),this.close());else{t.preventDefault();var n=t.which===M.keys.ARROW_DOWN?1:-1,s=this.focusedIndex,o=!1;do{if(s+=n,this.dropdownEl.children[s]&&-1!==this.dropdownEl.children[s].tabIndex){o=!0;break}}while(s<this.dropdownEl.children.length&&0<=s);o&&(this.focusedIndex=s,this._focusFocusedItem())}var a=String.fromCharCode(t.which).toLowerCase();if(a&&-1===[9,13,27,38,40].indexOf(t.which)){this.filterQuery.push(a);var r=this.filterQuery.join(""),l=h(this.dropdownEl).find("li").filter(function(t){return 0===h(t).text().toLowerCase().indexOf(r)})[0];l&&(this.focusedIndex=h(l).index(),this._focusFocusedItem())}this.filterTimeout=setTimeout(this._resetFilterQueryBound,1e3)}},{key:"_resetFilterQuery",value:function(){this.filterQuery=[]}},{key:"_resetDropdownStyles",value:function(){this.$dropdownEl.css({display:"",width:"",height:"",left:"",top:"","transform-origin":"",transform:"",opacity:""})}},{key:"_makeDropdownFocusable",value:function(){this.dropdownEl.tabIndex=0,h(this.dropdownEl).children().each(function(t){t.getAttribute("tabindex")||t.setAttribute("tabindex",0)})}},{key:"_focusFocusedItem",value:function(){0<=this.focusedIndex&&this.focusedIndex<this.dropdownEl.children.length&&this.options.autoFocus&&this.dropdownEl.children[this.focusedIndex].focus()}},{key:"_getDropdownPosition",value:function(){this.el.offsetParent.getBoundingClientRect();var t=this.el.getBoundingClientRect(),e=this.dropdownEl.getBoundingClientRect(),i=e.height,n=e.width,s=t.left-e.left,o=t.top-e.top,a={left:s,top:o,height:i,width:n},r=this.dropdownEl.offsetParent?this.dropdownEl.offsetParent:this.dropdownEl.parentNode,l=M.checkPossibleAlignments(this.el,r,a,this.options.coverTrigger?0:t.height),h="top",d=this.options.alignment;if(o+=this.options.coverTrigger?0:t.height,this.isScrollable=!1,l.top||(l.bottom?h="bottom":(this.isScrollable=!0,l.spaceOnTop>l.spaceOnBottom?(h="bottom",i+=l.spaceOnTop,o-=l.spaceOnTop):i+=l.spaceOnBottom)),!l[d]){var u="left"===d?"right":"left";l[u]?d=u:l.spaceOnLeft>l.spaceOnRight?(d="right",n+=l.spaceOnLeft,s-=l.spaceOnLeft):(d="left",n+=l.spaceOnRight)}return"bottom"===h&&(o=o-e.height+(this.options.coverTrigger?t.height:0)),"right"===d&&(s=s-e.width+t.width),{x:s,y:o,verticalAlignment:h,horizontalAlignment:d,height:i,width:n}}},{key:"_animateIn",value:function(){var e=this;i.remove(this.dropdownEl),i({targets:this.dropdownEl,opacity:{value:[0,1],easing:"easeOutQuad"},scaleX:[.3,1],scaleY:[.3,1],duration:this.options.inDuration,easing:"easeOutQuint",complete:function(t){e.options.autoFocus&&e.dropdownEl.focus(),"function"==typeof e.options.onOpenEnd&&e.options.onOpenEnd.call(e,e.el)}})}},{key:"_animateOut",value:function(){var e=this;i.remove(this.dropdownEl),i({targets:this.dropdownEl,opacity:{value:0,easing:"easeOutQuint"},scaleX:.3,scaleY:.3,duration:this.options.outDuration,easing:"easeOutQuint",complete:function(t){e._resetDropdownStyles(),"function"==typeof e.options.onCloseEnd&&e.options.onCloseEnd.call(e,e.el)}})}},{key:"_placeDropdown",value:function(){var t=this.options.constrainWidth?this.el.getBoundingClientRect().width:this.dropdownEl.getBoundingClientRect().width;this.dropdownEl.style.width=t+"px";var e=this._getDropdownPosition();this.dropdownEl.style.left=e.x+"px",this.dropdownEl.style.top=e.y+"px",this.dropdownEl.style.height=e.height+"px",this.dropdownEl.style.width=e.width+"px",this.dropdownEl.style.transformOrigin=("left"===e.horizontalAlignment?"0":"100%")+" "+("top"===e.verticalAlignment?"0":"100%")}},{key:"open",value:function(){this.isOpen||(this.isOpen=!0,"function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this._resetDropdownStyles(),this.dropdownEl.style.display="block",this._placeDropdown(),this._animateIn(),this._setupTemporaryEventHandlers())}},{key:"close",value:function(){this.isOpen&&(this.isOpen=!1,this.focusedIndex=-1,"function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this._animateOut(),this._removeTemporaryEventHandlers(),this.options.autoFocus&&this.el.focus())}},{key:"recalculateDimensions",value:function(){this.isOpen&&(this.$dropdownEl.css({width:"",height:"",left:"",top:"","transform-origin":""}),this._placeDropdown())}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Dropdown}},{key:"defaults",get:function(){return e}}]),n}();t._dropdowns=[],M.Dropdown=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"dropdown","M_Dropdown")}(cash,M.anime),function(s,i){"use strict";var e={opacity:.5,inDuration:250,outDuration:250,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,preventScrolling:!0,dismissible:!0,startingTop:"4%",endingTop:"10%"},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Modal=i).options=s.extend({},n.defaults,e),i.isOpen=!1,i.id=i.$el.attr("id"),i._openingTrigger=void 0,i.$overlay=s('<div class="modal-overlay"></div>'),i.el.tabIndex=0,i._nthModalOpened=0,n._count++,i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){n._count--,this._removeEventHandlers(),this.el.removeAttribute("style"),this.$overlay.remove(),this.el.M_Modal=void 0}},{key:"_setupEventHandlers",value:function(){this._handleOverlayClickBound=this._handleOverlayClick.bind(this),this._handleModalCloseClickBound=this._handleModalCloseClick.bind(this),1===n._count&&document.body.addEventListener("click",this._handleTriggerClick),this.$overlay[0].addEventListener("click",this._handleOverlayClickBound),this.el.addEventListener("click",this._handleModalCloseClickBound)}},{key:"_removeEventHandlers",value:function(){0===n._count&&document.body.removeEventListener("click",this._handleTriggerClick),this.$overlay[0].removeEventListener("click",this._handleOverlayClickBound),this.el.removeEventListener("click",this._handleModalCloseClickBound)}},{key:"_handleTriggerClick",value:function(t){var e=s(t.target).closest(".modal-trigger");if(e.length){var i=M.getIdFromTrigger(e[0]),n=document.getElementById(i).M_Modal;n&&n.open(e),t.preventDefault()}}},{key:"_handleOverlayClick",value:function(){this.options.dismissible&&this.close()}},{key:"_handleModalCloseClick",value:function(t){s(t.target).closest(".modal-close").length&&this.close()}},{key:"_handleKeydown",value:function(t){27===t.keyCode&&this.options.dismissible&&this.close()}},{key:"_handleFocus",value:function(t){this.el.contains(t.target)||this._nthModalOpened!==n._modalsOpen||this.el.focus()}},{key:"_animateIn",value:function(){var t=this;s.extend(this.el.style,{display:"block",opacity:0}),s.extend(this.$overlay[0].style,{display:"block",opacity:0}),i({targets:this.$overlay[0],opacity:this.options.opacity,duration:this.options.inDuration,easing:"easeOutQuad"});var e={targets:this.el,duration:this.options.inDuration,easing:"easeOutCubic",complete:function(){"function"==typeof t.options.onOpenEnd&&t.options.onOpenEnd.call(t,t.el,t._openingTrigger)}};this.el.classList.contains("bottom-sheet")?s.extend(e,{bottom:0,opacity:1}):s.extend(e,{top:[this.options.startingTop,this.options.endingTop],opacity:1,scaleX:[.8,1],scaleY:[.8,1]}),i(e)}},{key:"_animateOut",value:function(){var t=this;i({targets:this.$overlay[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuart"});var e={targets:this.el,duration:this.options.outDuration,easing:"easeOutCubic",complete:function(){t.el.style.display="none",t.$overlay.remove(),"function"==typeof t.options.onCloseEnd&&t.options.onCloseEnd.call(t,t.el)}};this.el.classList.contains("bottom-sheet")?s.extend(e,{bottom:"-100%",opacity:0}):s.extend(e,{top:[this.options.endingTop,this.options.startingTop],opacity:0,scaleX:.8,scaleY:.8}),i(e)}},{key:"open",value:function(t){if(!this.isOpen)return this.isOpen=!0,n._modalsOpen++,this._nthModalOpened=n._modalsOpen,this.$overlay[0].style.zIndex=1e3+2*n._modalsOpen,this.el.style.zIndex=1e3+2*n._modalsOpen+1,this._openingTrigger=t?t[0]:void 0,"function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el,this._openingTrigger),this.options.preventScrolling&&(document.body.style.overflow="hidden"),this.el.classList.add("open"),this.el.insertAdjacentElement("afterend",this.$overlay[0]),this.options.dismissible&&(this._handleKeydownBound=this._handleKeydown.bind(this),this._handleFocusBound=this._handleFocus.bind(this),document.addEventListener("keydown",this._handleKeydownBound),document.addEventListener("focus",this._handleFocusBound,!0)),i.remove(this.el),i.remove(this.$overlay[0]),this._animateIn(),this.el.focus(),this}},{key:"close",value:function(){if(this.isOpen)return this.isOpen=!1,n._modalsOpen--,this._nthModalOpened=0,"function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this.el.classList.remove("open"),0===n._modalsOpen&&(document.body.style.overflow=""),this.options.dismissible&&(document.removeEventListener("keydown",this._handleKeydownBound),document.removeEventListener("focus",this._handleFocusBound,!0)),i.remove(this.el),i.remove(this.$overlay[0]),this._animateOut(),this}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Modal}},{key:"defaults",get:function(){return e}}]),n}();t._modalsOpen=0,t._count=0,M.Modal=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"modal","M_Modal")}(cash,M.anime),function(o,a){"use strict";var e={inDuration:275,outDuration:200,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Materialbox=i).options=o.extend({},n.defaults,e),i.overlayActive=!1,i.doneAnimating=!0,i.placeholder=o("<div></div>").addClass("material-placeholder"),i.originalWidth=0,i.originalHeight=0,i.originInlineStyles=i.$el.attr("style"),i.caption=i.el.getAttribute("data-caption")||"",i.$el.before(i.placeholder),i.placeholder.append(i.$el),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Materialbox=void 0,o(this.placeholder).after(this.el).remove(),this.$el.removeAttr("style")}},{key:"_setupEventHandlers",value:function(){this._handleMaterialboxClickBound=this._handleMaterialboxClick.bind(this),this.el.addEventListener("click",this._handleMaterialboxClickBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleMaterialboxClickBound)}},{key:"_handleMaterialboxClick",value:function(t){!1===this.doneAnimating||this.overlayActive&&this.doneAnimating?this.close():this.open()}},{key:"_handleWindowScroll",value:function(){this.overlayActive&&this.close()}},{key:"_handleWindowResize",value:function(){this.overlayActive&&this.close()}},{key:"_handleWindowEscape",value:function(t){27===t.keyCode&&this.doneAnimating&&this.overlayActive&&this.close()}},{key:"_makeAncestorsOverflowVisible",value:function(){this.ancestorsChanged=o();for(var t=this.placeholder[0].parentNode;null!==t&&!o(t).is(document);){var e=o(t);"visible"!==e.css("overflow")&&(e.css("overflow","visible"),void 0===this.ancestorsChanged?this.ancestorsChanged=e:this.ancestorsChanged=this.ancestorsChanged.add(e)),t=t.parentNode}}},{key:"_animateImageIn",value:function(){var t=this,e={targets:this.el,height:[this.originalHeight,this.newHeight],width:[this.originalWidth,this.newWidth],left:M.getDocumentScrollLeft()+this.windowWidth/2-this.placeholder.offset().left-this.newWidth/2,top:M.getDocumentScrollTop()+this.windowHeight/2-this.placeholder.offset().top-this.newHeight/2,duration:this.options.inDuration,easing:"easeOutQuad",complete:function(){t.doneAnimating=!0,"function"==typeof t.options.onOpenEnd&&t.options.onOpenEnd.call(t,t.el)}};this.maxWidth=this.$el.css("max-width"),this.maxHeight=this.$el.css("max-height"),"none"!==this.maxWidth&&(e.maxWidth=this.newWidth),"none"!==this.maxHeight&&(e.maxHeight=this.newHeight),a(e)}},{key:"_animateImageOut",value:function(){var t=this,e={targets:this.el,width:this.originalWidth,height:this.originalHeight,left:0,top:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){t.placeholder.css({height:"",width:"",position:"",top:"",left:""}),t.attrWidth&&t.$el.attr("width",t.attrWidth),t.attrHeight&&t.$el.attr("height",t.attrHeight),t.$el.removeAttr("style"),t.originInlineStyles&&t.$el.attr("style",t.originInlineStyles),t.$el.removeClass("active"),t.doneAnimating=!0,t.ancestorsChanged.length&&t.ancestorsChanged.css("overflow",""),"function"==typeof t.options.onCloseEnd&&t.options.onCloseEnd.call(t,t.el)}};a(e)}},{key:"_updateVars",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.caption=this.el.getAttribute("data-caption")||""}},{key:"open",value:function(){var t=this;this._updateVars(),this.originalWidth=this.el.getBoundingClientRect().width,this.originalHeight=this.el.getBoundingClientRect().height,this.doneAnimating=!1,this.$el.addClass("active"),this.overlayActive=!0,"function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this.placeholder.css({width:this.placeholder[0].getBoundingClientRect().width+"px",height:this.placeholder[0].getBoundingClientRect().height+"px",position:"relative",top:0,left:0}),this._makeAncestorsOverflowVisible(),this.$el.css({position:"absolute","z-index":1e3,"will-change":"left, top, width, height"}),this.attrWidth=this.$el.attr("width"),this.attrHeight=this.$el.attr("height"),this.attrWidth&&(this.$el.css("width",this.attrWidth+"px"),this.$el.removeAttr("width")),this.attrHeight&&(this.$el.css("width",this.attrHeight+"px"),this.$el.removeAttr("height")),this.$overlay=o('<div id="materialbox-overlay"></div>').css({opacity:0}).one("click",function(){t.doneAnimating&&t.close()}),this.$el.before(this.$overlay);var e=this.$overlay[0].getBoundingClientRect();this.$overlay.css({width:this.windowWidth+"px",height:this.windowHeight+"px",left:-1*e.left+"px",top:-1*e.top+"px"}),a.remove(this.el),a.remove(this.$overlay[0]),a({targets:this.$overlay[0],opacity:1,duration:this.options.inDuration,easing:"easeOutQuad"}),""!==this.caption&&(this.$photocaption&&a.remove(this.$photoCaption[0]),this.$photoCaption=o('<div class="materialbox-caption"></div>'),this.$photoCaption.text(this.caption),o("body").append(this.$photoCaption),this.$photoCaption.css({display:"inline"}),a({targets:this.$photoCaption[0],opacity:1,duration:this.options.inDuration,easing:"easeOutQuad"}));var i=0,n=this.originalWidth/this.windowWidth,s=this.originalHeight/this.windowHeight;this.newWidth=0,this.newHeight=0,s<n?(i=this.originalHeight/this.originalWidth,this.newWidth=.9*this.windowWidth,this.newHeight=.9*this.windowWidth*i):(i=this.originalWidth/this.originalHeight,this.newWidth=.9*this.windowHeight*i,this.newHeight=.9*this.windowHeight),this._animateImageIn(),this._handleWindowScrollBound=this._handleWindowScroll.bind(this),this._handleWindowResizeBound=this._handleWindowResize.bind(this),this._handleWindowEscapeBound=this._handleWindowEscape.bind(this),window.addEventListener("scroll",this._handleWindowScrollBound),window.addEventListener("resize",this._handleWindowResizeBound),window.addEventListener("keyup",this._handleWindowEscapeBound)}},{key:"close",value:function(){var t=this;this._updateVars(),this.doneAnimating=!1,"function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),a.remove(this.el),a.remove(this.$overlay[0]),""!==this.caption&&a.remove(this.$photoCaption[0]),window.removeEventListener("scroll",this._handleWindowScrollBound),window.removeEventListener("resize",this._handleWindowResizeBound),window.removeEventListener("keyup",this._handleWindowEscapeBound),a({targets:this.$overlay[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){t.overlayActive=!1,t.$overlay.remove()}}),this._animateImageOut(),""!==this.caption&&a({targets:this.$photoCaption[0],opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){t.$photoCaption.remove()}})}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Materialbox}},{key:"defaults",get:function(){return e}}]),n}();M.Materialbox=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"materialbox","M_Materialbox")}(cash,M.anime),function(s){"use strict";var e={responsiveThreshold:0},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Parallax=i).options=s.extend({},n.defaults,e),i._enabled=window.innerWidth>i.options.responsiveThreshold,i.$img=i.$el.find("img").first(),i.$img.each(function(){this.complete&&s(this).trigger("load")}),i._updateParallax(),i._setupEventHandlers(),i._setupStyles(),n._parallaxes.push(i),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){n._parallaxes.splice(n._parallaxes.indexOf(this),1),this.$img[0].style.transform="",this._removeEventHandlers(),this.$el[0].M_Parallax=void 0}},{key:"_setupEventHandlers",value:function(){this._handleImageLoadBound=this._handleImageLoad.bind(this),this.$img[0].addEventListener("load",this._handleImageLoadBound),0===n._parallaxes.length&&(n._handleScrollThrottled=M.throttle(n._handleScroll,5),window.addEventListener("scroll",n._handleScrollThrottled),n._handleWindowResizeThrottled=M.throttle(n._handleWindowResize,5),window.addEventListener("resize",n._handleWindowResizeThrottled))}},{key:"_removeEventHandlers",value:function(){this.$img[0].removeEventListener("load",this._handleImageLoadBound),0===n._parallaxes.length&&(window.removeEventListener("scroll",n._handleScrollThrottled),window.removeEventListener("resize",n._handleWindowResizeThrottled))}},{key:"_setupStyles",value:function(){this.$img[0].style.opacity=1}},{key:"_handleImageLoad",value:function(){this._updateParallax()}},{key:"_updateParallax",value:function(){var t=0<this.$el.height()?this.el.parentNode.offsetHeight:500,e=this.$img[0].offsetHeight-t,i=this.$el.offset().top+t,n=this.$el.offset().top,s=M.getDocumentScrollTop(),o=window.innerHeight,a=e*((s+o-n)/(t+o));this._enabled?s<i&&n<s+o&&(this.$img[0].style.transform="translate3D(-50%, "+a+"px, 0)"):this.$img[0].style.transform=""}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Parallax}},{key:"_handleScroll",value:function(){for(var t=0;t<n._parallaxes.length;t++){var e=n._parallaxes[t];e._updateParallax.call(e)}}},{key:"_handleWindowResize",value:function(){for(var t=0;t<n._parallaxes.length;t++){var e=n._parallaxes[t];e._enabled=window.innerWidth>e.options.responsiveThreshold}}},{key:"defaults",get:function(){return e}}]),n}();t._parallaxes=[],M.Parallax=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"parallax","M_Parallax")}(cash),function(a,s){"use strict";var e={duration:300,onShow:null,swipeable:!1,responsiveThreshold:1/0},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Tabs=i).options=a.extend({},n.defaults,e),i.$tabLinks=i.$el.children("li.tab").children("a"),i.index=0,i._setupActiveTabLink(),i.options.swipeable?i._setupSwipeableTabs():i._setupNormalTabs(),i._setTabsAndTabWidth(),i._createIndicator(),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this._indicator.parentNode.removeChild(this._indicator),this.options.swipeable?this._teardownSwipeableTabs():this._teardownNormalTabs(),this.$el[0].M_Tabs=void 0}},{key:"_setupEventHandlers",value:function(){this._handleWindowResizeBound=this._handleWindowResize.bind(this),window.addEventListener("resize",this._handleWindowResizeBound),this._handleTabClickBound=this._handleTabClick.bind(this),this.el.addEventListener("click",this._handleTabClickBound)}},{key:"_removeEventHandlers",value:function(){window.removeEventListener("resize",this._handleWindowResizeBound),this.el.removeEventListener("click",this._handleTabClickBound)}},{key:"_handleWindowResize",value:function(){this._setTabsAndTabWidth(),0!==this.tabWidth&&0!==this.tabsWidth&&(this._indicator.style.left=this._calcLeftPos(this.$activeTabLink)+"px",this._indicator.style.right=this._calcRightPos(this.$activeTabLink)+"px")}},{key:"_handleTabClick",value:function(t){var e=this,i=a(t.target).closest("li.tab"),n=a(t.target).closest("a");if(n.length&&n.parent().hasClass("tab"))if(i.hasClass("disabled"))t.preventDefault();else if(!n.attr("target")){this.$activeTabLink.removeClass("active");var s=this.$content;this.$activeTabLink=n,this.$content=a(M.escapeHash(n[0].hash)),this.$tabLinks=this.$el.children("li.tab").children("a"),this.$activeTabLink.addClass("active");var o=this.index;this.index=Math.max(this.$tabLinks.index(n),0),this.options.swipeable?this._tabsCarousel&&this._tabsCarousel.set(this.index,function(){"function"==typeof e.options.onShow&&e.options.onShow.call(e,e.$content[0])}):this.$content.length&&(this.$content[0].style.display="block",this.$content.addClass("active"),"function"==typeof this.options.onShow&&this.options.onShow.call(this,this.$content[0]),s.length&&!s.is(this.$content)&&(s[0].style.display="none",s.removeClass("active"))),this._setTabsAndTabWidth(),this._animateIndicator(o),t.preventDefault()}}},{key:"_createIndicator",value:function(){var t=this,e=document.createElement("li");e.classList.add("indicator"),this.el.appendChild(e),this._indicator=e,setTimeout(function(){t._indicator.style.left=t._calcLeftPos(t.$activeTabLink)+"px",t._indicator.style.right=t._calcRightPos(t.$activeTabLink)+"px"},0)}},{key:"_setupActiveTabLink",value:function(){this.$activeTabLink=a(this.$tabLinks.filter('[href="'+location.hash+'"]')),0===this.$activeTabLink.length&&(this.$activeTabLink=this.$el.children("li.tab").children("a.active").first()),0===this.$activeTabLink.length&&(this.$activeTabLink=this.$el.children("li.tab").children("a").first()),this.$tabLinks.removeClass("active"),this.$activeTabLink[0].classList.add("active"),this.index=Math.max(this.$tabLinks.index(this.$activeTabLink),0),this.$activeTabLink.length&&(this.$content=a(M.escapeHash(this.$activeTabLink[0].hash)),this.$content.addClass("active"))}},{key:"_setupSwipeableTabs",value:function(){var i=this;window.innerWidth>this.options.responsiveThreshold&&(this.options.swipeable=!1);var n=a();this.$tabLinks.each(function(t){var e=a(M.escapeHash(t.hash));e.addClass("carousel-item"),n=n.add(e)});var t=a('<div class="tabs-content carousel carousel-slider"></div>');n.first().before(t),t.append(n),n[0].style.display="";var e=this.$activeTabLink.closest(".tab").index();this._tabsCarousel=M.Carousel.init(t[0],{fullWidth:!0,noWrap:!0,onCycleTo:function(t){var e=i.index;i.index=a(t).index(),i.$activeTabLink.removeClass("active"),i.$activeTabLink=i.$tabLinks.eq(i.index),i.$activeTabLink.addClass("active"),i._animateIndicator(e),"function"==typeof i.options.onShow&&i.options.onShow.call(i,i.$content[0])}}),this._tabsCarousel.set(e)}},{key:"_teardownSwipeableTabs",value:function(){var t=this._tabsCarousel.$el;this._tabsCarousel.destroy(),t.after(t.children()),t.remove()}},{key:"_setupNormalTabs",value:function(){this.$tabLinks.not(this.$activeTabLink).each(function(t){if(t.hash){var e=a(M.escapeHash(t.hash));e.length&&(e[0].style.display="none")}})}},{key:"_teardownNormalTabs",value:function(){this.$tabLinks.each(function(t){if(t.hash){var e=a(M.escapeHash(t.hash));e.length&&(e[0].style.display="")}})}},{key:"_setTabsAndTabWidth",value:function(){this.tabsWidth=this.$el.width(),this.tabWidth=Math.max(this.tabsWidth,this.el.scrollWidth)/this.$tabLinks.length}},{key:"_calcRightPos",value:function(t){return Math.ceil(this.tabsWidth-t.position().left-t[0].getBoundingClientRect().width)}},{key:"_calcLeftPos",value:function(t){return Math.floor(t.position().left)}},{key:"updateTabIndicator",value:function(){this._setTabsAndTabWidth(),this._animateIndicator(this.index)}},{key:"_animateIndicator",value:function(t){var e=0,i=0;0<=this.index-t?e=90:i=90;var n={targets:this._indicator,left:{value:this._calcLeftPos(this.$activeTabLink),delay:e},right:{value:this._calcRightPos(this.$activeTabLink),delay:i},duration:this.options.duration,easing:"easeOutQuad"};s.remove(this._indicator),s(n)}},{key:"select",value:function(t){var e=this.$tabLinks.filter('[href="#'+t+'"]');e.length&&e.trigger("click")}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Tabs}},{key:"defaults",get:function(){return e}}]),n}();M.Tabs=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"tabs","M_Tabs")}(cash,M.anime),function(d,e){"use strict";var i={exitDelay:200,enterDelay:0,html:null,margin:5,inDuration:250,outDuration:200,position:"bottom",transitionMovement:10},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Tooltip=i).options=d.extend({},n.defaults,e),i.isOpen=!1,i.isHovered=!1,i.isFocused=!1,i._appendTooltipEl(),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){d(this.tooltipEl).remove(),this._removeEventHandlers(),this.el.M_Tooltip=void 0}},{key:"_appendTooltipEl",value:function(){var t=document.createElement("div");t.classList.add("material-tooltip"),this.tooltipEl=t;var e=document.createElement("div");e.classList.add("tooltip-content"),e.innerHTML=this.options.html,t.appendChild(e),document.body.appendChild(t)}},{key:"_updateTooltipContent",value:function(){this.tooltipEl.querySelector(".tooltip-content").innerHTML=this.options.html}},{key:"_setupEventHandlers",value:function(){this._handleMouseEnterBound=this._handleMouseEnter.bind(this),this._handleMouseLeaveBound=this._handleMouseLeave.bind(this),this._handleFocusBound=this._handleFocus.bind(this),this._handleBlurBound=this._handleBlur.bind(this),this.el.addEventListener("mouseenter",this._handleMouseEnterBound),this.el.addEventListener("mouseleave",this._handleMouseLeaveBound),this.el.addEventListener("focus",this._handleFocusBound,!0),this.el.addEventListener("blur",this._handleBlurBound,!0)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("mouseenter",this._handleMouseEnterBound),this.el.removeEventListener("mouseleave",this._handleMouseLeaveBound),this.el.removeEventListener("focus",this._handleFocusBound,!0),this.el.removeEventListener("blur",this._handleBlurBound,!0)}},{key:"open",value:function(t){this.isOpen||(t=void 0===t||void 0,this.isOpen=!0,this.options=d.extend({},this.options,this._getAttributeOptions()),this._updateTooltipContent(),this._setEnterDelayTimeout(t))}},{key:"close",value:function(){this.isOpen&&(this.isHovered=!1,this.isFocused=!1,this.isOpen=!1,this._setExitDelayTimeout())}},{key:"_setExitDelayTimeout",value:function(){var t=this;clearTimeout(this._exitDelayTimeout),this._exitDelayTimeout=setTimeout(function(){t.isHovered||t.isFocused||t._animateOut()},this.options.exitDelay)}},{key:"_setEnterDelayTimeout",value:function(t){var e=this;clearTimeout(this._enterDelayTimeout),this._enterDelayTimeout=setTimeout(function(){(e.isHovered||e.isFocused||t)&&e._animateIn()},this.options.enterDelay)}},{key:"_positionTooltip",value:function(){var t,e=this.el,i=this.tooltipEl,n=e.offsetHeight,s=e.offsetWidth,o=i.offsetHeight,a=i.offsetWidth,r=this.options.margin,l=void 0,h=void 0;this.xMovement=0,this.yMovement=0,l=e.getBoundingClientRect().top+M.getDocumentScrollTop(),h=e.getBoundingClientRect().left+M.getDocumentScrollLeft(),"top"===this.options.position?(l+=-o-r,h+=s/2-a/2,this.yMovement=-this.options.transitionMovement):"right"===this.options.position?(l+=n/2-o/2,h+=s+r,this.xMovement=this.options.transitionMovement):"left"===this.options.position?(l+=n/2-o/2,h+=-a-r,this.xMovement=-this.options.transitionMovement):(l+=n+r,h+=s/2-a/2,this.yMovement=this.options.transitionMovement),t=this._repositionWithinScreen(h,l,a,o),d(i).css({top:t.y+"px",left:t.x+"px"})}},{key:"_repositionWithinScreen",value:function(t,e,i,n){var s=M.getDocumentScrollLeft(),o=M.getDocumentScrollTop(),a=t-s,r=e-o,l={left:a,top:r,width:i,height:n},h=this.options.margin+this.options.transitionMovement,d=M.checkWithinContainer(document.body,l,h);return d.left?a=h:d.right&&(a-=a+i-window.innerWidth),d.top?r=h:d.bottom&&(r-=r+n-window.innerHeight),{x:a+s,y:r+o}}},{key:"_animateIn",value:function(){this._positionTooltip(),this.tooltipEl.style.visibility="visible",e.remove(this.tooltipEl),e({targets:this.tooltipEl,opacity:1,translateX:this.xMovement,translateY:this.yMovement,duration:this.options.inDuration,easing:"easeOutCubic"})}},{key:"_animateOut",value:function(){e.remove(this.tooltipEl),e({targets:this.tooltipEl,opacity:0,translateX:0,translateY:0,duration:this.options.outDuration,easing:"easeOutCubic"})}},{key:"_handleMouseEnter",value:function(){this.isHovered=!0,this.isFocused=!1,this.open(!1)}},{key:"_handleMouseLeave",value:function(){this.isHovered=!1,this.isFocused=!1,this.close()}},{key:"_handleFocus",value:function(){M.tabPressed&&(this.isFocused=!0,this.open(!1))}},{key:"_handleBlur",value:function(){this.isFocused=!1,this.close()}},{key:"_getAttributeOptions",value:function(){var t={},e=this.el.getAttribute("data-tooltip"),i=this.el.getAttribute("data-position");return e&&(t.html=e),i&&(t.position=i),t}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Tooltip}},{key:"defaults",get:function(){return i}}]),n}();M.Tooltip=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"tooltip","M_Tooltip")}(cash,M.anime),function(i){"use strict";var t=t||{},e=document.querySelectorAll.bind(document);function m(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}var g={duration:750,show:function(t,e){if(2===t.button)return!1;var i=e||this,n=document.createElement("div");n.className="waves-ripple",i.appendChild(n);var s,o,a,r,l,h,d,u=(h={top:0,left:0},d=(s=i)&&s.ownerDocument,o=d.documentElement,void 0!==s.getBoundingClientRect&&(h=s.getBoundingClientRect()),a=null!==(l=r=d)&&l===l.window?r:9===r.nodeType&&r.defaultView,{top:h.top+a.pageYOffset-o.clientTop,left:h.left+a.pageXOffset-o.clientLeft}),c=t.pageY-u.top,p=t.pageX-u.left,v="scale("+i.clientWidth/100*10+")";"touches"in t&&(c=t.touches[0].pageY-u.top,p=t.touches[0].pageX-u.left),n.setAttribute("data-hold",Date.now()),n.setAttribute("data-scale",v),n.setAttribute("data-x",p),n.setAttribute("data-y",c);var f={top:c+"px",left:p+"px"};n.className=n.className+" waves-notransition",n.setAttribute("style",m(f)),n.className=n.className.replace("waves-notransition",""),f["-webkit-transform"]=v,f["-moz-transform"]=v,f["-ms-transform"]=v,f["-o-transform"]=v,f.transform=v,f.opacity="1",f["-webkit-transition-duration"]=g.duration+"ms",f["-moz-transition-duration"]=g.duration+"ms",f["-o-transition-duration"]=g.duration+"ms",f["transition-duration"]=g.duration+"ms",f["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",n.setAttribute("style",m(f))},hide:function(t){l.touchup(t);var e=this,i=(e.clientWidth,null),n=e.getElementsByClassName("waves-ripple");if(!(0<n.length))return!1;var s=(i=n[n.length-1]).getAttribute("data-x"),o=i.getAttribute("data-y"),a=i.getAttribute("data-scale"),r=350-(Date.now()-Number(i.getAttribute("data-hold")));r<0&&(r=0),setTimeout(function(){var t={top:o+"px",left:s+"px",opacity:"0","-webkit-transition-duration":g.duration+"ms","-moz-transition-duration":g.duration+"ms","-o-transition-duration":g.duration+"ms","transition-duration":g.duration+"ms","-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,"-o-transform":a,transform:a};i.setAttribute("style",m(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},g.duration)},r)},wrapInput:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("input"===i.tagName.toLowerCase()){var n=i.parentNode;if("i"===n.tagName.toLowerCase()&&-1!==n.className.indexOf("waves-effect"))continue;var s=document.createElement("i");s.className=i.className+" waves-input-wrapper";var o=i.getAttribute("style");o||(o=""),s.setAttribute("style",o),i.className="waves-button-input",i.removeAttribute("style"),n.replaceChild(s,i),s.appendChild(i)}}}},l={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?l.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){0<l.touches&&(l.touches-=1)},500):"mousedown"===t.type&&0<l.touches&&(e=!1),e},touchup:function(t){l.allowEvent(t)}};function n(t){var e=function(t){if(!1===l.allowEvent(t))return null;for(var e=null,i=t.target||t.srcElement;null!==i.parentNode;){if(!(i instanceof SVGElement)&&-1!==i.className.indexOf("waves-effect")){e=i;break}i=i.parentNode}return e}(t);null!==e&&(g.show(t,e),"ontouchstart"in i&&(e.addEventListener("touchend",g.hide,!1),e.addEventListener("touchcancel",g.hide,!1)),e.addEventListener("mouseup",g.hide,!1),e.addEventListener("mouseleave",g.hide,!1),e.addEventListener("dragend",g.hide,!1))}t.displayEffect=function(t){"duration"in(t=t||{})&&(g.duration=t.duration),g.wrapInput(e(".waves-effect")),"ontouchstart"in i&&document.body.addEventListener("touchstart",n,!1),document.body.addEventListener("mousedown",n,!1)},t.attach=function(t){"input"===t.tagName.toLowerCase()&&(g.wrapInput([t]),t=t.parentNode),"ontouchstart"in i&&t.addEventListener("touchstart",n,!1),t.addEventListener("mousedown",n,!1)},i.Waves=t,document.addEventListener("DOMContentLoaded",function(){t.displayEffect()},!1)}(window),function(i,n){"use strict";var t={html:"",displayLength:4e3,inDuration:300,outDuration:375,classes:"",completeCallback:null,activationPercent:.8},e=function(){function s(t){_classCallCheck(this,s),this.options=i.extend({},s.defaults,t),this.message=this.options.html,this.panning=!1,this.timeRemaining=this.options.displayLength,0===s._toasts.length&&s._createContainer(),s._toasts.push(this);var e=this._createToast();(e.M_Toast=this).el=e,this.$el=i(e),this._animateIn(),this._setTimer()}return _createClass(s,[{key:"_createToast",value:function(){var t=document.createElement("div");return t.classList.add("toast"),this.options.classes.length&&i(t).addClass(this.options.classes),("object"==typeof HTMLElement?this.message instanceof HTMLElement:this.message&&"object"==typeof this.message&&null!==this.message&&1===this.message.nodeType&&"string"==typeof this.message.nodeName)?t.appendChild(this.message):this.message.jquery?i(t).append(this.message[0]):t.innerHTML=this.message,s._container.appendChild(t),t}},{key:"_animateIn",value:function(){n({targets:this.el,top:0,opacity:1,duration:this.options.inDuration,easing:"easeOutCubic"})}},{key:"_setTimer",value:function(){var t=this;this.timeRemaining!==1/0&&(this.counterInterval=setInterval(function(){t.panning||(t.timeRemaining-=20),t.timeRemaining<=0&&t.dismiss()},20))}},{key:"dismiss",value:function(){var t=this;window.clearInterval(this.counterInterval);var e=this.el.offsetWidth*this.options.activationPercent;this.wasSwiped&&(this.el.style.transition="transform .05s, opacity .05s",this.el.style.transform="translateX("+e+"px)",this.el.style.opacity=0),n({targets:this.el,opacity:0,marginTop:-40,duration:this.options.outDuration,easing:"easeOutExpo",complete:function(){"function"==typeof t.options.completeCallback&&t.options.completeCallback(),t.$el.remove(),s._toasts.splice(s._toasts.indexOf(t),1),0===s._toasts.length&&s._removeContainer()}})}}],[{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Toast}},{key:"_createContainer",value:function(){var t=document.createElement("div");t.setAttribute("id","toast-container"),t.addEventListener("touchstart",s._onDragStart),t.addEventListener("touchmove",s._onDragMove),t.addEventListener("touchend",s._onDragEnd),t.addEventListener("mousedown",s._onDragStart),document.addEventListener("mousemove",s._onDragMove),document.addEventListener("mouseup",s._onDragEnd),document.body.appendChild(t),s._container=t}},{key:"_removeContainer",value:function(){document.removeEventListener("mousemove",s._onDragMove),document.removeEventListener("mouseup",s._onDragEnd),i(s._container).remove(),s._container=null}},{key:"_onDragStart",value:function(t){if(t.target&&i(t.target).closest(".toast").length){var e=i(t.target).closest(".toast")[0].M_Toast;e.panning=!0,(s._draggedToast=e).el.classList.add("panning"),e.el.style.transition="",e.startingXPos=s._xPos(t),e.time=Date.now(),e.xPos=s._xPos(t)}}},{key:"_onDragMove",value:function(t){if(s._draggedToast){t.preventDefault();var e=s._draggedToast;e.deltaX=Math.abs(e.xPos-s._xPos(t)),e.xPos=s._xPos(t),e.velocityX=e.deltaX/(Date.now()-e.time),e.time=Date.now();var i=e.xPos-e.startingXPos,n=e.el.offsetWidth*e.options.activationPercent;e.el.style.transform="translateX("+i+"px)",e.el.style.opacity=1-Math.abs(i/n)}}},{key:"_onDragEnd",value:function(){if(s._draggedToast){var t=s._draggedToast;t.panning=!1,t.el.classList.remove("panning");var e=t.xPos-t.startingXPos,i=t.el.offsetWidth*t.options.activationPercent;Math.abs(e)>i||1<t.velocityX?(t.wasSwiped=!0,t.dismiss()):(t.el.style.transition="transform .2s, opacity .2s",t.el.style.transform="",t.el.style.opacity=""),s._draggedToast=null}}},{key:"_xPos",value:function(t){return t.targetTouches&&1<=t.targetTouches.length?t.targetTouches[0].clientX:t.clientX}},{key:"dismissAll",value:function(){for(var t in s._toasts)s._toasts[t].dismiss()}},{key:"defaults",get:function(){return t}}]),s}();e._toasts=[],e._container=null,e._draggedToast=null,M.Toast=e,M.toast=function(t){return new e(t)}}(cash,M.anime),function(s,o){"use strict";var e={edge:"left",draggable:!0,inDuration:250,outDuration:200,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,preventScrolling:!0},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Sidenav=i).id=i.$el.attr("id"),i.options=s.extend({},n.defaults,e),i.isOpen=!1,i.isFixed=i.el.classList.contains("sidenav-fixed"),i.isDragged=!1,i.lastWindowWidth=window.innerWidth,i.lastWindowHeight=window.innerHeight,i._createOverlay(),i._createDragTarget(),i._setupEventHandlers(),i._setupClasses(),i._setupFixed(),n._sidenavs.push(i),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this._enableBodyScrolling(),this._overlay.parentNode.removeChild(this._overlay),this.dragTarget.parentNode.removeChild(this.dragTarget),this.el.M_Sidenav=void 0,this.el.style.transform="";var t=n._sidenavs.indexOf(this);0<=t&&n._sidenavs.splice(t,1)}},{key:"_createOverlay",value:function(){var t=document.createElement("div");this._closeBound=this.close.bind(this),t.classList.add("sidenav-overlay"),t.addEventListener("click",this._closeBound),document.body.appendChild(t),this._overlay=t}},{key:"_setupEventHandlers",value:function(){0===n._sidenavs.length&&document.body.addEventListener("click",this._handleTriggerClick),this._handleDragTargetDragBound=this._handleDragTargetDrag.bind(this),this._handleDragTargetReleaseBound=this._handleDragTargetRelease.bind(this),this._handleCloseDragBound=this._handleCloseDrag.bind(this),this._handleCloseReleaseBound=this._handleCloseRelease.bind(this),this._handleCloseTriggerClickBound=this._handleCloseTriggerClick.bind(this),this.dragTarget.addEventListener("touchmove",this._handleDragTargetDragBound),this.dragTarget.addEventListener("touchend",this._handleDragTargetReleaseBound),this._overlay.addEventListener("touchmove",this._handleCloseDragBound),this._overlay.addEventListener("touchend",this._handleCloseReleaseBound),this.el.addEventListener("touchmove",this._handleCloseDragBound),this.el.addEventListener("touchend",this._handleCloseReleaseBound),this.el.addEventListener("click",this._handleCloseTriggerClickBound),this.isFixed&&(this._handleWindowResizeBound=this._handleWindowResize.bind(this),window.addEventListener("resize",this._handleWindowResizeBound))}},{key:"_removeEventHandlers",value:function(){1===n._sidenavs.length&&document.body.removeEventListener("click",this._handleTriggerClick),this.dragTarget.removeEventListener("touchmove",this._handleDragTargetDragBound),this.dragTarget.removeEventListener("touchend",this._handleDragTargetReleaseBound),this._overlay.removeEventListener("touchmove",this._handleCloseDragBound),this._overlay.removeEventListener("touchend",this._handleCloseReleaseBound),this.el.removeEventListener("touchmove",this._handleCloseDragBound),this.el.removeEventListener("touchend",this._handleCloseReleaseBound),this.el.removeEventListener("click",this._handleCloseTriggerClickBound),this.isFixed&&window.removeEventListener("resize",this._handleWindowResizeBound)}},{key:"_handleTriggerClick",value:function(t){var e=s(t.target).closest(".sidenav-trigger");if(t.target&&e.length){var i=M.getIdFromTrigger(e[0]),n=document.getElementById(i).M_Sidenav;n&&n.open(e),t.preventDefault()}}},{key:"_startDrag",value:function(t){var e=t.targetTouches[0].clientX;this.isDragged=!0,this._startingXpos=e,this._xPos=this._startingXpos,this._time=Date.now(),this._width=this.el.getBoundingClientRect().width,this._overlay.style.display="block",this._initialScrollTop=this.isOpen?this.el.scrollTop:M.getDocumentScrollTop(),this._verticallyScrolling=!1,o.remove(this.el),o.remove(this._overlay)}},{key:"_dragMoveUpdate",value:function(t){var e=t.targetTouches[0].clientX,i=this.isOpen?this.el.scrollTop:M.getDocumentScrollTop();this.deltaX=Math.abs(this._xPos-e),this._xPos=e,this.velocityX=this.deltaX/(Date.now()-this._time),this._time=Date.now(),this._initialScrollTop!==i&&(this._verticallyScrolling=!0)}},{key:"_handleDragTargetDrag",value:function(t){if(this.options.draggable&&!this._isCurrentlyFixed()&&!this._verticallyScrolling){this.isDragged||this._startDrag(t),this._dragMoveUpdate(t);var e=this._xPos-this._startingXpos,i=0<e?"right":"left";e=Math.min(this._width,Math.abs(e)),this.options.edge===i&&(e=0);var n=e,s="translateX(-100%)";"right"===this.options.edge&&(s="translateX(100%)",n=-n),this.percentOpen=Math.min(1,e/this._width),this.el.style.transform=s+" translateX("+n+"px)",this._overlay.style.opacity=this.percentOpen}}},{key:"_handleDragTargetRelease",value:function(){this.isDragged&&(.2<this.percentOpen?this.open():this._animateOut(),this.isDragged=!1,this._verticallyScrolling=!1)}},{key:"_handleCloseDrag",value:function(t){if(this.isOpen){if(!this.options.draggable||this._isCurrentlyFixed()||this._verticallyScrolling)return;this.isDragged||this._startDrag(t),this._dragMoveUpdate(t);var e=this._xPos-this._startingXpos,i=0<e?"right":"left";e=Math.min(this._width,Math.abs(e)),this.options.edge!==i&&(e=0);var n=-e;"right"===this.options.edge&&(n=-n),this.percentOpen=Math.min(1,1-e/this._width),this.el.style.transform="translateX("+n+"px)",this._overlay.style.opacity=this.percentOpen}}},{key:"_handleCloseRelease",value:function(){this.isOpen&&this.isDragged&&(.8<this.percentOpen?this._animateIn():this.close(),this.isDragged=!1,this._verticallyScrolling=!1)}},{key:"_handleCloseTriggerClick",value:function(t){s(t.target).closest(".sidenav-close").length&&!this._isCurrentlyFixed()&&this.close()}},{key:"_handleWindowResize",value:function(){this.lastWindowWidth!==window.innerWidth&&(992<window.innerWidth?this.open():this.close()),this.lastWindowWidth=window.innerWidth,this.lastWindowHeight=window.innerHeight}},{key:"_setupClasses",value:function(){"right"===this.options.edge&&(this.el.classList.add("right-aligned"),this.dragTarget.classList.add("right-aligned"))}},{key:"_removeClasses",value:function(){this.el.classList.remove("right-aligned"),this.dragTarget.classList.remove("right-aligned")}},{key:"_setupFixed",value:function(){this._isCurrentlyFixed()&&this.open()}},{key:"_isCurrentlyFixed",value:function(){return this.isFixed&&992<window.innerWidth}},{key:"_createDragTarget",value:function(){var t=document.createElement("div");t.classList.add("drag-target"),document.body.appendChild(t),this.dragTarget=t}},{key:"_preventBodyScrolling",value:function(){document.body.style.overflow="hidden"}},{key:"_enableBodyScrolling",value:function(){document.body.style.overflow=""}},{key:"open",value:function(){!0!==this.isOpen&&(this.isOpen=!0,"function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.el),this._isCurrentlyFixed()?(o.remove(this.el),o({targets:this.el,translateX:0,duration:0,easing:"easeOutQuad"}),this._enableBodyScrolling(),this._overlay.style.display="none"):(this.options.preventScrolling&&this._preventBodyScrolling(),this.isDragged&&1==this.percentOpen||this._animateIn()))}},{key:"close",value:function(){if(!1!==this.isOpen)if(this.isOpen=!1,"function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.el),this._isCurrentlyFixed()){var t="left"===this.options.edge?"-105%":"105%";this.el.style.transform="translateX("+t+")"}else this._enableBodyScrolling(),this.isDragged&&0==this.percentOpen?this._overlay.style.display="none":this._animateOut()}},{key:"_animateIn",value:function(){this._animateSidenavIn(),this._animateOverlayIn()}},{key:"_animateSidenavIn",value:function(){var t=this,e="left"===this.options.edge?-1:1;this.isDragged&&(e="left"===this.options.edge?e+this.percentOpen:e-this.percentOpen),o.remove(this.el),o({targets:this.el,translateX:[100*e+"%",0],duration:this.options.inDuration,easing:"easeOutQuad",complete:function(){"function"==typeof t.options.onOpenEnd&&t.options.onOpenEnd.call(t,t.el)}})}},{key:"_animateOverlayIn",value:function(){var t=0;this.isDragged?t=this.percentOpen:s(this._overlay).css({display:"block"}),o.remove(this._overlay),o({targets:this._overlay,opacity:[t,1],duration:this.options.inDuration,easing:"easeOutQuad"})}},{key:"_animateOut",value:function(){this._animateSidenavOut(),this._animateOverlayOut()}},{key:"_animateSidenavOut",value:function(){var t=this,e="left"===this.options.edge?-1:1,i=0;this.isDragged&&(i="left"===this.options.edge?e+this.percentOpen:e-this.percentOpen),o.remove(this.el),o({targets:this.el,translateX:[100*i+"%",105*e+"%"],duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){"function"==typeof t.options.onCloseEnd&&t.options.onCloseEnd.call(t,t.el)}})}},{key:"_animateOverlayOut",value:function(){var t=this;o.remove(this._overlay),o({targets:this._overlay,opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){s(t._overlay).css("display","none")}})}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Sidenav}},{key:"defaults",get:function(){return e}}]),n}();t._sidenavs=[],M.Sidenav=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"sidenav","M_Sidenav")}(cash,M.anime),function(o,a){"use strict";var e={throttle:100,scrollOffset:200,activeClass:"active",getActiveElement:function(t){return'a[href="#'+t+'"]'}},t=function(t){function c(t,e){_classCallCheck(this,c);var i=_possibleConstructorReturn(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,c,t,e));return(i.el.M_ScrollSpy=i).options=o.extend({},c.defaults,e),c._elements.push(i),c._count++,c._increment++,i.tickId=-1,i.id=c._increment,i._setupEventHandlers(),i._handleWindowScroll(),i}return _inherits(c,Component),_createClass(c,[{key:"destroy",value:function(){c._elements.splice(c._elements.indexOf(this),1),c._elementsInView.splice(c._elementsInView.indexOf(this),1),c._visibleElements.splice(c._visibleElements.indexOf(this.$el),1),c._count--,this._removeEventHandlers(),o(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass),this.el.M_ScrollSpy=void 0}},{key:"_setupEventHandlers",value:function(){var t=M.throttle(this._handleWindowScroll,200);this._handleThrottledResizeBound=t.bind(this),this._handleWindowScrollBound=this._handleWindowScroll.bind(this),1===c._count&&(window.addEventListener("scroll",this._handleWindowScrollBound),window.addEventListener("resize",this._handleThrottledResizeBound),document.body.addEventListener("click",this._handleTriggerClick))}},{key:"_removeEventHandlers",value:function(){0===c._count&&(window.removeEventListener("scroll",this._handleWindowScrollBound),window.removeEventListener("resize",this._handleThrottledResizeBound),document.body.removeEventListener("click",this._handleTriggerClick))}},{key:"_handleTriggerClick",value:function(t){for(var e=o(t.target),i=c._elements.length-1;0<=i;i--){var n=c._elements[i];if(e.is('a[href="#'+n.$el.attr("id")+'"]')){t.preventDefault();var s=n.$el.offset().top+1;a({targets:[document.documentElement,document.body],scrollTop:s-n.options.scrollOffset,duration:400,easing:"easeOutCubic"});break}}}},{key:"_handleWindowScroll",value:function(){c._ticks++;for(var t=M.getDocumentScrollTop(),e=M.getDocumentScrollLeft(),i=e+window.innerWidth,n=t+window.innerHeight,s=c._findElements(t,i,n,e),o=0;o<s.length;o++){var a=s[o];a.tickId<0&&a._enter(),a.tickId=c._ticks}for(var r=0;r<c._elementsInView.length;r++){var l=c._elementsInView[r],h=l.tickId;0<=h&&h!==c._ticks&&(l._exit(),l.tickId=-1)}c._elementsInView=s}},{key:"_enter",value:function(){(c._visibleElements=c._visibleElements.filter(function(t){return 0!=t.height()}))[0]?(o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),c._visibleElements[0][0].M_ScrollSpy&&this.id<c._visibleElements[0][0].M_ScrollSpy.id?c._visibleElements.unshift(this.$el):c._visibleElements.push(this.$el)):c._visibleElements.push(this.$el),o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass)}},{key:"_exit",value:function(){var e=this;(c._visibleElements=c._visibleElements.filter(function(t){return 0!=t.height()}))[0]&&(o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).removeClass(this.options.activeClass),(c._visibleElements=c._visibleElements.filter(function(t){return t.attr("id")!=e.$el.attr("id")}))[0]&&o(this.options.getActiveElement(c._visibleElements[0].attr("id"))).addClass(this.options.activeClass))}}],[{key:"init",value:function(t,e){return _get(c.__proto__||Object.getPrototypeOf(c),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_ScrollSpy}},{key:"_findElements",value:function(t,e,i,n){for(var s=[],o=0;o<c._elements.length;o++){var a=c._elements[o],r=t+a.options.scrollOffset||200;if(0<a.$el.height()){var l=a.$el.offset().top,h=a.$el.offset().left,d=h+a.$el.width(),u=l+a.$el.height();!(e<h||d<n||i<l||u<r)&&s.push(a)}}return s}},{key:"defaults",get:function(){return e}}]),c}();t._elements=[],t._elementsInView=[],t._visibleElements=[],t._count=0,t._increment=0,t._ticks=0,M.ScrollSpy=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"scrollSpy","M_ScrollSpy")}(cash,M.anime),function(h){"use strict";var e={data:{},limit:1/0,onAutocomplete:null,minLength:1,sortFunction:function(t,e,i){return t.indexOf(i)-e.indexOf(i)}},t=function(t){function s(t,e){_classCallCheck(this,s);var i=_possibleConstructorReturn(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,s,t,e));return(i.el.M_Autocomplete=i).options=h.extend({},s.defaults,e),i.isOpen=!1,i.count=0,i.activeIndex=-1,i.oldVal,i.$inputField=i.$el.closest(".input-field"),i.$active=h(),i._mousedown=!1,i._setupDropdown(),i._setupEventHandlers(),i}return _inherits(s,Component),_createClass(s,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeDropdown(),this.el.M_Autocomplete=void 0}},{key:"_setupEventHandlers",value:function(){this._handleInputBlurBound=this._handleInputBlur.bind(this),this._handleInputKeyupAndFocusBound=this._handleInputKeyupAndFocus.bind(this),this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleContainerMousedownAndTouchstartBound=this._handleContainerMousedownAndTouchstart.bind(this),this._handleContainerMouseupAndTouchendBound=this._handleContainerMouseupAndTouchend.bind(this),this.el.addEventListener("blur",this._handleInputBlurBound),this.el.addEventListener("keyup",this._handleInputKeyupAndFocusBound),this.el.addEventListener("focus",this._handleInputKeyupAndFocusBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.el.addEventListener("click",this._handleInputClickBound),this.container.addEventListener("mousedown",this._handleContainerMousedownAndTouchstartBound),this.container.addEventListener("mouseup",this._handleContainerMouseupAndTouchendBound),void 0!==window.ontouchstart&&(this.container.addEventListener("touchstart",this._handleContainerMousedownAndTouchstartBound),this.container.addEventListener("touchend",this._handleContainerMouseupAndTouchendBound))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("blur",this._handleInputBlurBound),this.el.removeEventListener("keyup",this._handleInputKeyupAndFocusBound),this.el.removeEventListener("focus",this._handleInputKeyupAndFocusBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound),this.el.removeEventListener("click",this._handleInputClickBound),this.container.removeEventListener("mousedown",this._handleContainerMousedownAndTouchstartBound),this.container.removeEventListener("mouseup",this._handleContainerMouseupAndTouchendBound),void 0!==window.ontouchstart&&(this.container.removeEventListener("touchstart",this._handleContainerMousedownAndTouchstartBound),this.container.removeEventListener("touchend",this._handleContainerMouseupAndTouchendBound))}},{key:"_setupDropdown",value:function(){var e=this;this.container=document.createElement("ul"),this.container.id="autocomplete-options-"+M.guid(),h(this.container).addClass("autocomplete-content dropdown-content"),this.$inputField.append(this.container),this.el.setAttribute("data-target",this.container.id),this.dropdown=M.Dropdown.init(this.el,{autoFocus:!1,closeOnClick:!1,coverTrigger:!1,onItemClick:function(t){e.selectOption(h(t))}}),this.el.removeEventListener("click",this.dropdown._handleClickBound)}},{key:"_removeDropdown",value:function(){this.container.parentNode.removeChild(this.container)}},{key:"_handleInputBlur",value:function(){this._mousedown||(this.close(),this._resetAutocomplete())}},{key:"_handleInputKeyupAndFocus",value:function(t){"keyup"===t.type&&(s._keydown=!1),this.count=0;var e=this.el.value.toLowerCase();13!==t.keyCode&&38!==t.keyCode&&40!==t.keyCode&&(this.oldVal===e||!M.tabPressed&&"focus"===t.type||this.open(),this.oldVal=e)}},{key:"_handleInputKeydown",value:function(t){s._keydown=!0;var e=t.keyCode,i=void 0,n=h(this.container).children("li").length;e===M.keys.ENTER&&0<=this.activeIndex?(i=h(this.container).children("li").eq(this.activeIndex)).length&&(this.selectOption(i),t.preventDefault()):e!==M.keys.ARROW_UP&&e!==M.keys.ARROW_DOWN||(t.preventDefault(),e===M.keys.ARROW_UP&&0<this.activeIndex&&this.activeIndex--,e===M.keys.ARROW_DOWN&&this.activeIndex<n-1&&this.activeIndex++,this.$active.removeClass("active"),0<=this.activeIndex&&(this.$active=h(this.container).children("li").eq(this.activeIndex),this.$active.addClass("active")))}},{key:"_handleInputClick",value:function(t){this.open()}},{key:"_handleContainerMousedownAndTouchstart",value:function(t){this._mousedown=!0}},{key:"_handleContainerMouseupAndTouchend",value:function(t){this._mousedown=!1}},{key:"_highlight",value:function(t,e){var i=e.find("img"),n=e.text().toLowerCase().indexOf(""+t.toLowerCase()),s=n+t.length-1,o=e.text().slice(0,n),a=e.text().slice(n,s+1),r=e.text().slice(s+1);e.html("<span>"+o+"<span class='highlight'>"+a+"</span>"+r+"</span>"),i.length&&e.prepend(i)}},{key:"_resetCurrentElement",value:function(){this.activeIndex=-1,this.$active.removeClass("active")}},{key:"_resetAutocomplete",value:function(){h(this.container).empty(),this._resetCurrentElement(),this.oldVal=null,this.isOpen=!1,this._mousedown=!1}},{key:"selectOption",value:function(t){var e=t.text().trim();this.el.value=e,this.$el.trigger("change"),this._resetAutocomplete(),this.close(),"function"==typeof this.options.onAutocomplete&&this.options.onAutocomplete.call(this,e)}},{key:"_renderDropdown",value:function(t,i){var n=this;this._resetAutocomplete();var e=[];for(var s in t)if(t.hasOwnProperty(s)&&-1!==s.toLowerCase().indexOf(i)){if(this.count>=this.options.limit)break;var o={data:t[s],key:s};e.push(o),this.count++}if(this.options.sortFunction){e.sort(function(t,e){return n.options.sortFunction(t.key.toLowerCase(),e.key.toLowerCase(),i.toLowerCase())})}for(var a=0;a<e.length;a++){var r=e[a],l=h("<li></li>");r.data?l.append('<img src="'+r.data+'" class="right circle"><span>'+r.key+"</span>"):l.append("<span>"+r.key+"</span>"),h(this.container).append(l),this._highlight(i,l)}}},{key:"open",value:function(){var t=this.el.value.toLowerCase();this._resetAutocomplete(),t.length>=this.options.minLength&&(this.isOpen=!0,this._renderDropdown(this.options.data,t)),this.dropdown.isOpen?this.dropdown.recalculateDimensions():this.dropdown.open()}},{key:"close",value:function(){this.dropdown.close()}},{key:"updateData",value:function(t){var e=this.el.value.toLowerCase();this.options.data=t,this.isOpen&&this._renderDropdown(t,e)}}],[{key:"init",value:function(t,e){return _get(s.__proto__||Object.getPrototypeOf(s),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Autocomplete}},{key:"defaults",get:function(){return e}}]),s}();t._keydown=!1,M.Autocomplete=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"autocomplete","M_Autocomplete")}(cash),function(d){M.updateTextFields=function(){d("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea").each(function(t,e){var i=d(this);0<t.value.length||d(t).is(":focus")||t.autofocus||null!==i.attr("placeholder")?i.siblings("label").addClass("active"):t.validity?i.siblings("label").toggleClass("active",!0===t.validity.badInput):i.siblings("label").removeClass("active")})},M.validate_field=function(t){var e=null!==t.attr("data-length"),i=parseInt(t.attr("data-length")),n=t[0].value.length;0!==n||!1!==t[0].validity.badInput||t.is(":required")?t.hasClass("validate")&&(t.is(":valid")&&e&&n<=i||t.is(":valid")&&!e?(t.removeClass("invalid"),t.addClass("valid")):(t.removeClass("valid"),t.addClass("invalid"))):t.hasClass("validate")&&(t.removeClass("valid"),t.removeClass("invalid"))},M.textareaAutoResize=function(t){if(t instanceof Element&&(t=d(t)),t.length){var e=d(".hiddendiv").first();e.length||(e=d('<div class="hiddendiv common"></div>'),d("body").append(e));var i=t.css("font-family"),n=t.css("font-size"),s=t.css("line-height"),o=t.css("padding-top"),a=t.css("padding-right"),r=t.css("padding-bottom"),l=t.css("padding-left");n&&e.css("font-size",n),i&&e.css("font-family",i),s&&e.css("line-height",s),o&&e.css("padding-top",o),a&&e.css("padding-right",a),r&&e.css("padding-bottom",r),l&&e.css("padding-left",l),t.data("original-height")||t.data("original-height",t.height()),"off"===t.attr("wrap")&&e.css("overflow-wrap","normal").css("white-space","pre"),e.text(t[0].value+"\n");var h=e.html().replace(/\n/g,"<br>");e.html(h),0<t[0].offsetWidth&&0<t[0].offsetHeight?e.css("width",t.width()+"px"):e.css("width",window.innerWidth/2+"px"),t.data("original-height")<=e.innerHeight()?t.css("height",e.innerHeight()+"px"):t[0].value.length<t.data("previous-length")&&t.css("height",t.data("original-height")+"px"),t.data("previous-length",t[0].value.length)}else console.error("No textarea element found")},d(document).ready(function(){var n="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";d(document).on("change",n,function(){0===this.value.length&&null===d(this).attr("placeholder")||d(this).siblings("label").addClass("active"),M.validate_field(d(this))}),d(document).ready(function(){M.updateTextFields()}),d(document).on("reset",function(t){var e=d(t.target);e.is("form")&&(e.find(n).removeClass("valid").removeClass("invalid"),e.find(n).each(function(t){this.value.length&&d(this).siblings("label").removeClass("active")}),setTimeout(function(){e.find("select").each(function(){this.M_FormSelect&&d(this).trigger("change")})},0))}),document.addEventListener("focus",function(t){d(t.target).is(n)&&d(t.target).siblings("label, .prefix").addClass("active")},!0),document.addEventListener("blur",function(t){var e=d(t.target);if(e.is(n)){var i=".prefix";0===e[0].value.length&&!0!==e[0].validity.badInput&&null===e.attr("placeholder")&&(i+=", label"),e.siblings(i).removeClass("active"),M.validate_field(e)}},!0);d(document).on("keyup","input[type=radio], input[type=checkbox]",function(t){if(t.which===M.keys.TAB)return d(this).addClass("tabbed"),void d(this).one("blur",function(t){d(this).removeClass("tabbed")})});var t=".materialize-textarea";d(t).each(function(){var t=d(this);t.data("original-height",t.height()),t.data("previous-length",this.value.length),M.textareaAutoResize(t)}),d(document).on("keyup",t,function(){M.textareaAutoResize(d(this))}),d(document).on("keydown",t,function(){M.textareaAutoResize(d(this))}),d(document).on("change",'.file-field input[type="file"]',function(){for(var t=d(this).closest(".file-field").find("input.file-path"),e=d(this)[0].files,i=[],n=0;n<e.length;n++)i.push(e[n].name);t[0].value=i.join(", "),t.trigger("change")})})}(cash),function(s,o){"use strict";var e={indicators:!0,height:400,duration:500,interval:6e3},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Slider=i).options=s.extend({},n.defaults,e),i.$slider=i.$el.find(".slides"),i.$slides=i.$slider.children("li"),i.activeIndex=i.$slides.filter(function(t){return s(t).hasClass("active")}).first().index(),-1!=i.activeIndex&&(i.$active=i.$slides.eq(i.activeIndex)),i._setSliderHeight(),i.$slides.find(".caption").each(function(t){i._animateCaptionIn(t,0)}),i.$slides.find("img").each(function(t){var e="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";s(t).attr("src")!==e&&(s(t).css("background-image",'url("'+s(t).attr("src")+'")'),s(t).attr("src",e))}),i._setupIndicators(),i.$active?i.$active.css("display","block"):(i.$slides.first().addClass("active"),o({targets:i.$slides.first()[0],opacity:1,duration:i.options.duration,easing:"easeOutQuad"}),i.activeIndex=0,i.$active=i.$slides.eq(i.activeIndex),i.options.indicators&&i.$indicators.eq(i.activeIndex).addClass("active")),i.$active.find("img").each(function(t){o({targets:i.$active.find(".caption")[0],opacity:1,translateX:0,translateY:0,duration:i.options.duration,easing:"easeOutQuad"})}),i._setupEventHandlers(),i.start(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this.pause(),this._removeIndicators(),this._removeEventHandlers(),this.el.M_Slider=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleIntervalBound=this._handleInterval.bind(this),this._handleIndicatorClickBound=this._handleIndicatorClick.bind(this),this.options.indicators&&this.$indicators.each(function(t){t.addEventListener("click",e._handleIndicatorClickBound)})}},{key:"_removeEventHandlers",value:function(){var e=this;this.options.indicators&&this.$indicators.each(function(t){t.removeEventListener("click",e._handleIndicatorClickBound)})}},{key:"_handleIndicatorClick",value:function(t){var e=s(t.target).index();this.set(e)}},{key:"_handleInterval",value:function(){var t=this.$slider.find(".active").index();this.$slides.length===t+1?t=0:t+=1,this.set(t)}},{key:"_animateCaptionIn",value:function(t,e){var i={targets:t,opacity:0,duration:e,easing:"easeOutQuad"};s(t).hasClass("center-align")?i.translateY=-100:s(t).hasClass("right-align")?i.translateX=100:s(t).hasClass("left-align")&&(i.translateX=-100),o(i)}},{key:"_setSliderHeight",value:function(){this.$el.hasClass("fullscreen")||(this.options.indicators?this.$el.css("height",this.options.height+40+"px"):this.$el.css("height",this.options.height+"px"),this.$slider.css("height",this.options.height+"px"))}},{key:"_setupIndicators",value:function(){var n=this;this.options.indicators&&(this.$indicators=s('<ul class="indicators"></ul>'),this.$slides.each(function(t,e){var i=s('<li class="indicator-item"></li>');n.$indicators.append(i[0])}),this.$el.append(this.$indicators[0]),this.$indicators=this.$indicators.children("li.indicator-item"))}},{key:"_removeIndicators",value:function(){this.$el.find("ul.indicators").remove()}},{key:"set",value:function(t){var e=this;if(t>=this.$slides.length?t=0:t<0&&(t=this.$slides.length-1),this.activeIndex!=t){this.$active=this.$slides.eq(this.activeIndex);var i=this.$active.find(".caption");this.$active.removeClass("active"),o({targets:this.$active[0],opacity:0,duration:this.options.duration,easing:"easeOutQuad",complete:function(){e.$slides.not(".active").each(function(t){o({targets:t,opacity:0,translateX:0,translateY:0,duration:0,easing:"easeOutQuad"})})}}),this._animateCaptionIn(i[0],this.options.duration),this.options.indicators&&(this.$indicators.eq(this.activeIndex).removeClass("active"),this.$indicators.eq(t).addClass("active")),o({targets:this.$slides.eq(t)[0],opacity:1,duration:this.options.duration,easing:"easeOutQuad"}),o({targets:this.$slides.eq(t).find(".caption")[0],opacity:1,translateX:0,translateY:0,duration:this.options.duration,delay:this.options.duration,easing:"easeOutQuad"}),this.$slides.eq(t).addClass("active"),this.activeIndex=t,this.start()}}},{key:"pause",value:function(){clearInterval(this.interval)}},{key:"start",value:function(){clearInterval(this.interval),this.interval=setInterval(this._handleIntervalBound,this.options.duration+this.options.interval)}},{key:"next",value:function(){var t=this.activeIndex+1;t>=this.$slides.length?t=0:t<0&&(t=this.$slides.length-1),this.set(t)}},{key:"prev",value:function(){var t=this.activeIndex-1;t>=this.$slides.length?t=0:t<0&&(t=this.$slides.length-1),this.set(t)}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Slider}},{key:"defaults",get:function(){return e}}]),n}();M.Slider=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"slider","M_Slider")}(cash,M.anime),function(n,s){n(document).on("click",".card",function(t){if(n(this).children(".card-reveal").length){var i=n(t.target).closest(".card");void 0===i.data("initialOverflow")&&i.data("initialOverflow",void 0===i.css("overflow")?"":i.css("overflow"));var e=n(this).find(".card-reveal");n(t.target).is(n(".card-reveal .card-title"))||n(t.target).is(n(".card-reveal .card-title i"))?s({targets:e[0],translateY:0,duration:225,easing:"easeInOutQuad",complete:function(t){var e=t.animatables[0].target;n(e).css({display:"none"}),i.css("overflow",i.data("initialOverflow"))}}):(n(t.target).is(n(".card .activator"))||n(t.target).is(n(".card .activator i")))&&(i.css("overflow","hidden"),e.css({display:"block"}),s({targets:e[0],translateY:"-100%",duration:300,easing:"easeInOutQuad"}))}})}(cash,M.anime),function(h){"use strict";var e={data:[],placeholder:"",secondaryPlaceholder:"",autocompleteOptions:{},limit:1/0,onChipAdd:null,onChipSelect:null,onChipDelete:null},t=function(t){function l(t,e){_classCallCheck(this,l);var i=_possibleConstructorReturn(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,l,t,e));return(i.el.M_Chips=i).options=h.extend({},l.defaults,e),i.$el.addClass("chips input-field"),i.chipsData=[],i.$chips=h(),i._setupInput(),i.hasAutocomplete=0<Object.keys(i.options.autocompleteOptions).length,i.$input.attr("id")||i.$input.attr("id",M.guid()),i.options.data.length&&(i.chipsData=i.options.data,i._renderChips(i.chipsData)),i.hasAutocomplete&&i._setupAutocomplete(),i._setPlaceholder(),i._setupLabel(),i._setupEventHandlers(),i}return _inherits(l,Component),_createClass(l,[{key:"getData",value:function(){return this.chipsData}},{key:"destroy",value:function(){this._removeEventHandlers(),this.$chips.remove(),this.el.M_Chips=void 0}},{key:"_setupEventHandlers",value:function(){this._handleChipClickBound=this._handleChipClick.bind(this),this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputFocusBound=this._handleInputFocus.bind(this),this._handleInputBlurBound=this._handleInputBlur.bind(this),this.el.addEventListener("click",this._handleChipClickBound),document.addEventListener("keydown",l._handleChipsKeydown),document.addEventListener("keyup",l._handleChipsKeyup),this.el.addEventListener("blur",l._handleChipsBlur,!0),this.$input[0].addEventListener("focus",this._handleInputFocusBound),this.$input[0].addEventListener("blur",this._handleInputBlurBound),this.$input[0].addEventListener("keydown",this._handleInputKeydownBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleChipClickBound),document.removeEventListener("keydown",l._handleChipsKeydown),document.removeEventListener("keyup",l._handleChipsKeyup),this.el.removeEventListener("blur",l._handleChipsBlur,!0),this.$input[0].removeEventListener("focus",this._handleInputFocusBound),this.$input[0].removeEventListener("blur",this._handleInputBlurBound),this.$input[0].removeEventListener("keydown",this._handleInputKeydownBound)}},{key:"_handleChipClick",value:function(t){var e=h(t.target).closest(".chip"),i=h(t.target).is(".close");if(e.length){var n=e.index();i?(this.deleteChip(n),this.$input[0].focus()):this.selectChip(n)}else this.$input[0].focus()}},{key:"_handleInputFocus",value:function(){this.$el.addClass("focus")}},{key:"_handleInputBlur",value:function(){this.$el.removeClass("focus")}},{key:"_handleInputKeydown",value:function(t){if(l._keydown=!0,13===t.keyCode){if(this.hasAutocomplete&&this.autocomplete&&this.autocomplete.isOpen)return;t.preventDefault(),this.addChip({tag:this.$input[0].value}),this.$input[0].value=""}else 8!==t.keyCode&&37!==t.keyCode||""!==this.$input[0].value||!this.chipsData.length||(t.preventDefault(),this.selectChip(this.chipsData.length-1))}},{key:"_renderChip",value:function(t){if(t.tag){var e=document.createElement("div"),i=document.createElement("i");if(e.classList.add("chip"),e.textContent=t.tag,e.setAttribute("tabindex",0),h(i).addClass("material-icons close"),i.textContent="close",t.image){var n=document.createElement("img");n.setAttribute("src",t.image),e.insertBefore(n,e.firstChild)}return e.appendChild(i),e}}},{key:"_renderChips",value:function(){this.$chips.remove();for(var t=0;t<this.chipsData.length;t++){var e=this._renderChip(this.chipsData[t]);this.$el.append(e),this.$chips.add(e)}this.$el.append(this.$input[0])}},{key:"_setupAutocomplete",value:function(){var e=this;this.options.autocompleteOptions.onAutocomplete=function(t){e.addChip({tag:t}),e.$input[0].value="",e.$input[0].focus()},this.autocomplete=M.Autocomplete.init(this.$input[0],this.options.autocompleteOptions)}},{key:"_setupInput",value:function(){this.$input=this.$el.find("input"),this.$input.length||(this.$input=h("<input></input>"),this.$el.append(this.$input)),this.$input.addClass("input")}},{key:"_setupLabel",value:function(){this.$label=this.$el.find("label"),this.$label.length&&this.$label.setAttribute("for",this.$input.attr("id"))}},{key:"_setPlaceholder",value:function(){void 0!==this.chipsData&&!this.chipsData.length&&this.options.placeholder?h(this.$input).prop("placeholder",this.options.placeholder):(void 0===this.chipsData||this.chipsData.length)&&this.options.secondaryPlaceholder&&h(this.$input).prop("placeholder",this.options.secondaryPlaceholder)}},{key:"_isValid",value:function(t){if(t.hasOwnProperty("tag")&&""!==t.tag){for(var e=!1,i=0;i<this.chipsData.length;i++)if(this.chipsData[i].tag===t.tag){e=!0;break}return!e}return!1}},{key:"addChip",value:function(t){if(this._isValid(t)&&!(this.chipsData.length>=this.options.limit)){var e=this._renderChip(t);this.$chips.add(e),this.chipsData.push(t),h(this.$input).before(e),this._setPlaceholder(),"function"==typeof this.options.onChipAdd&&this.options.onChipAdd.call(this,this.$el,e)}}},{key:"deleteChip",value:function(t){var e=this.$chips.eq(t);this.$chips.eq(t).remove(),this.$chips=this.$chips.filter(function(t){return 0<=h(t).index()}),this.chipsData.splice(t,1),this._setPlaceholder(),"function"==typeof this.options.onChipDelete&&this.options.onChipDelete.call(this,this.$el,e[0])}},{key:"selectChip",value:function(t){var e=this.$chips.eq(t);(this._selectedChip=e)[0].focus(),"function"==typeof this.options.onChipSelect&&this.options.onChipSelect.call(this,this.$el,e[0])}}],[{key:"init",value:function(t,e){return _get(l.__proto__||Object.getPrototypeOf(l),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Chips}},{key:"_handleChipsKeydown",value:function(t){l._keydown=!0;var e=h(t.target).closest(".chips"),i=t.target&&e.length;if(!h(t.target).is("input, textarea")&&i){var n=e[0].M_Chips;if(8===t.keyCode||46===t.keyCode){t.preventDefault();var s=n.chipsData.length;if(n._selectedChip){var o=n._selectedChip.index();n.deleteChip(o),n._selectedChip=null,s=Math.max(o-1,0)}n.chipsData.length&&n.selectChip(s)}else if(37===t.keyCode){if(n._selectedChip){var a=n._selectedChip.index()-1;if(a<0)return;n.selectChip(a)}}else if(39===t.keyCode&&n._selectedChip){var r=n._selectedChip.index()+1;r>=n.chipsData.length?n.$input[0].focus():n.selectChip(r)}}}},{key:"_handleChipsKeyup",value:function(t){l._keydown=!1}},{key:"_handleChipsBlur",value:function(t){l._keydown||(h(t.target).closest(".chips")[0].M_Chips._selectedChip=null)}},{key:"defaults",get:function(){return e}}]),l}();t._keydown=!1,M.Chips=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"chips","M_Chips"),h(document).ready(function(){h(document.body).on("click",".chip .close",function(){var t=h(this).closest(".chips");t.length&&t[0].M_Chips||h(this).closest(".chip").remove()})})}(cash),function(s){"use strict";var e={top:0,bottom:1/0,offset:0,onPositionChange:null},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Pushpin=i).options=s.extend({},n.defaults,e),i.originalOffset=i.el.offsetTop,n._pushpins.push(i),i._setupEventHandlers(),i._updatePosition(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this.el.style.top=null,this._removePinClasses(),this._removeEventHandlers();var t=n._pushpins.indexOf(this);n._pushpins.splice(t,1)}},{key:"_setupEventHandlers",value:function(){document.addEventListener("scroll",n._updateElements)}},{key:"_removeEventHandlers",value:function(){document.removeEventListener("scroll",n._updateElements)}},{key:"_updatePosition",value:function(){var t=M.getDocumentScrollTop()+this.options.offset;this.options.top<=t&&this.options.bottom>=t&&!this.el.classList.contains("pinned")&&(this._removePinClasses(),this.el.style.top=this.options.offset+"px",this.el.classList.add("pinned"),"function"==typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pinned")),t<this.options.top&&!this.el.classList.contains("pin-top")&&(this._removePinClasses(),this.el.style.top=0,this.el.classList.add("pin-top"),"function"==typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pin-top")),t>this.options.bottom&&!this.el.classList.contains("pin-bottom")&&(this._removePinClasses(),this.el.classList.add("pin-bottom"),this.el.style.top=this.options.bottom-this.originalOffset+"px","function"==typeof this.options.onPositionChange&&this.options.onPositionChange.call(this,"pin-bottom"))}},{key:"_removePinClasses",value:function(){this.el.classList.remove("pin-top"),this.el.classList.remove("pinned"),this.el.classList.remove("pin-bottom")}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Pushpin}},{key:"_updateElements",value:function(){for(var t in n._pushpins){n._pushpins[t]._updatePosition()}}},{key:"defaults",get:function(){return e}}]),n}();t._pushpins=[],M.Pushpin=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"pushpin","M_Pushpin")}(cash),function(r,s){"use strict";var e={direction:"top",hoverEnabled:!0,toolbarEnabled:!1};r.fn.reverse=[].reverse;var t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_FloatingActionButton=i).options=r.extend({},n.defaults,e),i.isOpen=!1,i.$anchor=i.$el.children("a").first(),i.$menu=i.$el.children("ul").first(),i.$floatingBtns=i.$el.find("ul .btn-floating"),i.$floatingBtnsReverse=i.$el.find("ul .btn-floating").reverse(),i.offsetY=0,i.offsetX=0,i.$el.addClass("direction-"+i.options.direction),"top"===i.options.direction?i.offsetY=40:"right"===i.options.direction?i.offsetX=-40:"bottom"===i.options.direction?i.offsetY=-40:i.offsetX=40,i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_FloatingActionButton=void 0}},{key:"_setupEventHandlers",value:function(){this._handleFABClickBound=this._handleFABClick.bind(this),this._handleOpenBound=this.open.bind(this),this._handleCloseBound=this.close.bind(this),this.options.hoverEnabled&&!this.options.toolbarEnabled?(this.el.addEventListener("mouseenter",this._handleOpenBound),this.el.addEventListener("mouseleave",this._handleCloseBound)):this.el.addEventListener("click",this._handleFABClickBound)}},{key:"_removeEventHandlers",value:function(){this.options.hoverEnabled&&!this.options.toolbarEnabled?(this.el.removeEventListener("mouseenter",this._handleOpenBound),this.el.removeEventListener("mouseleave",this._handleCloseBound)):this.el.removeEventListener("click",this._handleFABClickBound)}},{key:"_handleFABClick",value:function(){this.isOpen?this.close():this.open()}},{key:"_handleDocumentClick",value:function(t){r(t.target).closest(this.$menu).length||this.close()}},{key:"open",value:function(){this.isOpen||(this.options.toolbarEnabled?this._animateInToolbar():this._animateInFAB(),this.isOpen=!0)}},{key:"close",value:function(){this.isOpen&&(this.options.toolbarEnabled?(window.removeEventListener("scroll",this._handleCloseBound,!0),document.body.removeEventListener("click",this._handleDocumentClickBound,!0),this._animateOutToolbar()):this._animateOutFAB(),this.isOpen=!1)}},{key:"_animateInFAB",value:function(){var e=this;this.$el.addClass("active");var i=0;this.$floatingBtnsReverse.each(function(t){s({targets:t,opacity:1,scale:[.4,1],translateY:[e.offsetY,0],translateX:[e.offsetX,0],duration:275,delay:i,easing:"easeInOutQuad"}),i+=40})}},{key:"_animateOutFAB",value:function(){var e=this;this.$floatingBtnsReverse.each(function(t){s.remove(t),s({targets:t,opacity:0,scale:.4,translateY:e.offsetY,translateX:e.offsetX,duration:175,easing:"easeOutQuad",complete:function(){e.$el.removeClass("active")}})})}},{key:"_animateInToolbar",value:function(){var t,e=this,i=window.innerWidth,n=window.innerHeight,s=this.el.getBoundingClientRect(),o=r('<div class="fab-backdrop"></div>'),a=this.$anchor.css("background-color");this.$anchor.append(o),this.offsetX=s.left-i/2+s.width/2,this.offsetY=n-s.bottom,t=i/o[0].clientWidth,this.btnBottom=s.bottom,this.btnLeft=s.left,this.btnWidth=s.width,this.$el.addClass("active"),this.$el.css({"text-align":"center",width:"100%",bottom:0,left:0,transform:"translateX("+this.offsetX+"px)",transition:"none"}),this.$anchor.css({transform:"translateY("+-this.offsetY+"px)",transition:"none"}),o.css({"background-color":a}),setTimeout(function(){e.$el.css({transform:"",transition:"transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"}),e.$anchor.css({overflow:"visible",transform:"",transition:"transform .2s"}),setTimeout(function(){e.$el.css({overflow:"hidden","background-color":a}),o.css({transform:"scale("+t+")",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"}),e.$menu.children("li").children("a").css({opacity:1}),e._handleDocumentClickBound=e._handleDocumentClick.bind(e),window.addEventListener("scroll",e._handleCloseBound,!0),document.body.addEventListener("click",e._handleDocumentClickBound,!0)},100)},0)}},{key:"_animateOutToolbar",value:function(){var t=this,e=window.innerWidth,i=window.innerHeight,n=this.$el.find(".fab-backdrop"),s=this.$anchor.css("background-color");this.offsetX=this.btnLeft-e/2+this.btnWidth/2,this.offsetY=i-this.btnBottom,this.$el.removeClass("active"),this.$el.css({"background-color":"transparent",transition:"none"}),this.$anchor.css({transition:"none"}),n.css({transform:"scale(0)","background-color":s}),this.$menu.children("li").children("a").css({opacity:""}),setTimeout(function(){n.remove(),t.$el.css({"text-align":"",width:"",bottom:"",left:"",overflow:"","background-color":"",transform:"translate3d("+-t.offsetX+"px,0,0)"}),t.$anchor.css({overflow:"",transform:"translate3d(0,"+t.offsetY+"px,0)"}),setTimeout(function(){t.$el.css({transform:"translate3d(0,0,0)",transition:"transform .2s"}),t.$anchor.css({transform:"translate3d(0,0,0)",transition:"transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"})},20)},200)}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_FloatingActionButton}},{key:"defaults",get:function(){return e}}]),n}();M.FloatingActionButton=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"floatingActionButton","M_FloatingActionButton")}(cash,M.anime),function(g){"use strict";var e={autoClose:!1,format:"mmm dd, yyyy",parse:null,defaultDate:null,setDefaultDate:!1,disableWeekends:!1,disableDayFn:null,firstDay:0,minDate:null,maxDate:null,yearRange:10,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,container:null,showClearBtn:!1,i18n:{cancel:"Cancel",clear:"Clear",done:"Ok",previousMonth:"‹",nextMonth:"›",months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysAbbrev:["S","M","T","W","T","F","S"]},events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null},t=function(t){function B(t,e){_classCallCheck(this,B);var i=_possibleConstructorReturn(this,(B.__proto__||Object.getPrototypeOf(B)).call(this,B,t,e));(i.el.M_Datepicker=i).options=g.extend({},B.defaults,e),e&&e.hasOwnProperty("i18n")&&"object"==typeof e.i18n&&(i.options.i18n=g.extend({},B.defaults.i18n,e.i18n)),i.options.minDate&&i.options.minDate.setHours(0,0,0,0),i.options.maxDate&&i.options.maxDate.setHours(0,0,0,0),i.id=M.guid(),i._setupVariables(),i._insertHTMLIntoDOM(),i._setupModal(),i._setupEventHandlers(),i.options.defaultDate||(i.options.defaultDate=new Date(Date.parse(i.el.value)));var n=i.options.defaultDate;return B._isDate(n)?i.options.setDefaultDate?(i.setDate(n,!0),i.setInputValue()):i.gotoDate(n):i.gotoDate(new Date),i.isOpen=!1,i}return _inherits(B,Component),_createClass(B,[{key:"destroy",value:function(){this._removeEventHandlers(),this.modal.destroy(),g(this.modalEl).remove(),this.destroySelects(),this.el.M_Datepicker=void 0}},{key:"destroySelects",value:function(){var t=this.calendarEl.querySelector(".orig-select-year");t&&M.FormSelect.getInstance(t).destroy();var e=this.calendarEl.querySelector(".orig-select-month");e&&M.FormSelect.getInstance(e).destroy()}},{key:"_insertHTMLIntoDOM",value:function(){this.options.showClearBtn&&(g(this.clearBtn).css({visibility:""}),this.clearBtn.innerHTML=this.options.i18n.clear),this.doneBtn.innerHTML=this.options.i18n.done,this.cancelBtn.innerHTML=this.options.i18n.cancel,this.options.container?this.$modalEl.appendTo(this.options.container):this.$modalEl.insertBefore(this.el)}},{key:"_setupModal",value:function(){var t=this;this.modalEl.id="modal-"+this.id,this.modal=M.Modal.init(this.modalEl,{onCloseEnd:function(){t.isOpen=!1}})}},{key:"toString",value:function(t){var e=this;return t=t||this.options.format,B._isDate(this.date)?t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g).map(function(t){return e.formats[t]?e.formats[t]():t}).join(""):""}},{key:"setDate",value:function(t,e){if(!t)return this.date=null,this._renderDateDisplay(),this.draw();if("string"==typeof t&&(t=new Date(Date.parse(t))),B._isDate(t)){var i=this.options.minDate,n=this.options.maxDate;B._isDate(i)&&t<i?t=i:B._isDate(n)&&n<t&&(t=n),this.date=new Date(t.getTime()),this._renderDateDisplay(),B._setToStartOfDay(this.date),this.gotoDate(this.date),e||"function"!=typeof this.options.onSelect||this.options.onSelect.call(this,this.date)}}},{key:"setInputValue",value:function(){this.el.value=this.toString(),this.$el.trigger("change",{firedBy:this})}},{key:"_renderDateDisplay",value:function(){var t=B._isDate(this.date)?this.date:new Date,e=this.options.i18n,i=e.weekdaysShort[t.getDay()],n=e.monthsShort[t.getMonth()],s=t.getDate();this.yearTextEl.innerHTML=t.getFullYear(),this.dateTextEl.innerHTML=i+", "+n+" "+s}},{key:"gotoDate",value:function(t){var e=!0;if(B._isDate(t)){if(this.calendars){var i=new Date(this.calendars[0].year,this.calendars[0].month,1),n=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),s=t.getTime();n.setMonth(n.getMonth()+1),n.setDate(n.getDate()-1),e=s<i.getTime()||n.getTime()<s}e&&(this.calendars=[{month:t.getMonth(),year:t.getFullYear()}]),this.adjustCalendars()}}},{key:"adjustCalendars",value:function(){this.calendars[0]=this.adjustCalendar(this.calendars[0]),this.draw()}},{key:"adjustCalendar",value:function(t){return t.month<0&&(t.year-=Math.ceil(Math.abs(t.month)/12),t.month+=12),11<t.month&&(t.year+=Math.floor(Math.abs(t.month)/12),t.month-=12),t}},{key:"nextMonth",value:function(){this.calendars[0].month++,this.adjustCalendars()}},{key:"prevMonth",value:function(){this.calendars[0].month--,this.adjustCalendars()}},{key:"render",value:function(t,e,i){var n=this.options,s=new Date,o=B._getDaysInMonth(t,e),a=new Date(t,e,1).getDay(),r=[],l=[];B._setToStartOfDay(s),0<n.firstDay&&(a-=n.firstDay)<0&&(a+=7);for(var h=0===e?11:e-1,d=11===e?0:e+1,u=0===e?t-1:t,c=11===e?t+1:t,p=B._getDaysInMonth(u,h),v=o+a,f=v;7<f;)f-=7;v+=7-f;for(var m=!1,g=0,_=0;g<v;g++){var y=new Date(t,e,g-a+1),k=!!B._isDate(this.date)&&B._compareDates(y,this.date),b=B._compareDates(y,s),w=-1!==n.events.indexOf(y.toDateString()),C=g<a||o+a<=g,E=g-a+1,M=e,O=t,x=n.startRange&&B._compareDates(n.startRange,y),L=n.endRange&&B._compareDates(n.endRange,y),T=n.startRange&&n.endRange&&n.startRange<y&&y<n.endRange;C&&(g<a?(E=p+E,M=h,O=u):(E-=o,M=d,O=c));var $={day:E,month:M,year:O,hasEvent:w,isSelected:k,isToday:b,isDisabled:n.minDate&&y<n.minDate||n.maxDate&&y>n.maxDate||n.disableWeekends&&B._isWeekend(y)||n.disableDayFn&&n.disableDayFn(y),isEmpty:C,isStartRange:x,isEndRange:L,isInRange:T,showDaysInNextAndPreviousMonths:n.showDaysInNextAndPreviousMonths};l.push(this.renderDay($)),7==++_&&(r.push(this.renderRow(l,n.isRTL,m)),_=0,m=!(l=[]))}return this.renderTable(n,r,i)}},{key:"renderDay",value:function(t){var e=[],i="false";if(t.isEmpty){if(!t.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';e.push("is-outside-current-month"),e.push("is-selection-disabled")}return t.isDisabled&&e.push("is-disabled"),t.isToday&&e.push("is-today"),t.isSelected&&(e.push("is-selected"),i="true"),t.hasEvent&&e.push("has-event"),t.isInRange&&e.push("is-inrange"),t.isStartRange&&e.push("is-startrange"),t.isEndRange&&e.push("is-endrange"),'<td data-day="'+t.day+'" class="'+e.join(" ")+'" aria-selected="'+i+'"><button class="datepicker-day-button" type="button" data-year="'+t.year+'" data-month="'+t.month+'" data-day="'+t.day+'">'+t.day+"</button></td>"}},{key:"renderRow",value:function(t,e,i){return'<tr class="datepicker-row'+(i?" is-selected":"")+'">'+(e?t.reverse():t).join("")+"</tr>"}},{key:"renderTable",value:function(t,e,i){return'<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="'+i+'">'+this.renderHead(t)+this.renderBody(e)+"</table></div>"}},{key:"renderHead",value:function(t){var e=void 0,i=[];for(e=0;e<7;e++)i.push('<th scope="col"><abbr title="'+this.renderDayName(t,e)+'">'+this.renderDayName(t,e,!0)+"</abbr></th>");return"<thead><tr>"+(t.isRTL?i.reverse():i).join("")+"</tr></thead>"}},{key:"renderBody",value:function(t){return"<tbody>"+t.join("")+"</tbody>"}},{key:"renderTitle",value:function(t,e,i,n,s,o){var a,r,l=void 0,h=void 0,d=void 0,u=this.options,c=i===u.minYear,p=i===u.maxYear,v='<div id="'+o+'" class="datepicker-controls" role="heading" aria-live="assertive">',f=!0,m=!0;for(d=[],l=0;l<12;l++)d.push('<option value="'+(i===s?l-e:12+l-e)+'"'+(l===n?' selected="selected"':"")+(c&&l<u.minMonth||p&&l>u.maxMonth?'disabled="disabled"':"")+">"+u.i18n.months[l]+"</option>");for(a='<select class="datepicker-select orig-select-month" tabindex="-1">'+d.join("")+"</select>",g.isArray(u.yearRange)?(l=u.yearRange[0],h=u.yearRange[1]+1):(l=i-u.yearRange,h=1+i+u.yearRange),d=[];l<h&&l<=u.maxYear;l++)l>=u.minYear&&d.push('<option value="'+l+'" '+(l===i?'selected="selected"':"")+">"+l+"</option>");r='<select class="datepicker-select orig-select-year" tabindex="-1">'+d.join("")+"</select>";v+='<button class="month-prev'+(f?"":" is-disabled")+'" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg></button>',v+='<div class="selects-container">',u.showMonthAfterYear?v+=r+a:v+=a+r,v+="</div>",c&&(0===n||u.minMonth>=n)&&(f=!1),p&&(11===n||u.maxMonth<=n)&&(m=!1);return(v+='<button class="month-next'+(m?"":" is-disabled")+'" type="button"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg></button>')+"</div>"}},{key:"draw",value:function(t){if(this.isOpen||t){var e,i=this.options,n=i.minYear,s=i.maxYear,o=i.minMonth,a=i.maxMonth,r="";this._y<=n&&(this._y=n,!isNaN(o)&&this._m<o&&(this._m=o)),this._y>=s&&(this._y=s,!isNaN(a)&&this._m>a&&(this._m=a)),e="datepicker-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);for(var l=0;l<1;l++)this._renderDateDisplay(),r+=this.renderTitle(this,l,this.calendars[l].year,this.calendars[l].month,this.calendars[0].year,e)+this.render(this.calendars[l].year,this.calendars[l].month,e);this.destroySelects(),this.calendarEl.innerHTML=r;var h=this.calendarEl.querySelector(".orig-select-year"),d=this.calendarEl.querySelector(".orig-select-month");M.FormSelect.init(h,{classes:"select-year",dropdownOptions:{container:document.body,constrainWidth:!1}}),M.FormSelect.init(d,{classes:"select-month",dropdownOptions:{container:document.body,constrainWidth:!1}}),h.addEventListener("change",this._handleYearChange.bind(this)),d.addEventListener("change",this._handleMonthChange.bind(this)),"function"==typeof this.options.onDraw&&this.options.onDraw(this)}}},{key:"_setupEventHandlers",value:function(){this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleInputChangeBound=this._handleInputChange.bind(this),this._handleCalendarClickBound=this._handleCalendarClick.bind(this),this._finishSelectionBound=this._finishSelection.bind(this),this._handleMonthChange=this._handleMonthChange.bind(this),this._closeBound=this.close.bind(this),this.el.addEventListener("click",this._handleInputClickBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.el.addEventListener("change",this._handleInputChangeBound),this.calendarEl.addEventListener("click",this._handleCalendarClickBound),this.doneBtn.addEventListener("click",this._finishSelectionBound),this.cancelBtn.addEventListener("click",this._closeBound),this.options.showClearBtn&&(this._handleClearClickBound=this._handleClearClick.bind(this),this.clearBtn.addEventListener("click",this._handleClearClickBound))}},{key:"_setupVariables",value:function(){var e=this;this.$modalEl=g(B._template),this.modalEl=this.$modalEl[0],this.calendarEl=this.modalEl.querySelector(".datepicker-calendar"),this.yearTextEl=this.modalEl.querySelector(".year-text"),this.dateTextEl=this.modalEl.querySelector(".date-text"),this.options.showClearBtn&&(this.clearBtn=this.modalEl.querySelector(".datepicker-clear")),this.doneBtn=this.modalEl.querySelector(".datepicker-done"),this.cancelBtn=this.modalEl.querySelector(".datepicker-cancel"),this.formats={d:function(){return e.date.getDate()},dd:function(){var t=e.date.getDate();return(t<10?"0":"")+t},ddd:function(){return e.options.i18n.weekdaysShort[e.date.getDay()]},dddd:function(){return e.options.i18n.weekdays[e.date.getDay()]},m:function(){return e.date.getMonth()+1},mm:function(){var t=e.date.getMonth()+1;return(t<10?"0":"")+t},mmm:function(){return e.options.i18n.monthsShort[e.date.getMonth()]},mmmm:function(){return e.options.i18n.months[e.date.getMonth()]},yy:function(){return(""+e.date.getFullYear()).slice(2)},yyyy:function(){return e.date.getFullYear()}}}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleInputClickBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound),this.el.removeEventListener("change",this._handleInputChangeBound),this.calendarEl.removeEventListener("click",this._handleCalendarClickBound)}},{key:"_handleInputClick",value:function(){this.open()}},{key:"_handleInputKeydown",value:function(t){t.which===M.keys.ENTER&&(t.preventDefault(),this.open())}},{key:"_handleCalendarClick",value:function(t){if(this.isOpen){var e=g(t.target);e.hasClass("is-disabled")||(!e.hasClass("datepicker-day-button")||e.hasClass("is-empty")||e.parent().hasClass("is-disabled")?e.closest(".month-prev").length?this.prevMonth():e.closest(".month-next").length&&this.nextMonth():(this.setDate(new Date(t.target.getAttribute("data-year"),t.target.getAttribute("data-month"),t.target.getAttribute("data-day"))),this.options.autoClose&&this._finishSelection()))}}},{key:"_handleClearClick",value:function(){this.date=null,this.setInputValue(),this.close()}},{key:"_handleMonthChange",value:function(t){this.gotoMonth(t.target.value)}},{key:"_handleYearChange",value:function(t){this.gotoYear(t.target.value)}},{key:"gotoMonth",value:function(t){isNaN(t)||(this.calendars[0].month=parseInt(t,10),this.adjustCalendars())}},{key:"gotoYear",value:function(t){isNaN(t)||(this.calendars[0].year=parseInt(t,10),this.adjustCalendars())}},{key:"_handleInputChange",value:function(t){var e=void 0;t.firedBy!==this&&(e=this.options.parse?this.options.parse(this.el.value,this.options.format):new Date(Date.parse(this.el.value)),B._isDate(e)&&this.setDate(e))}},{key:"renderDayName",value:function(t,e,i){for(e+=t.firstDay;7<=e;)e-=7;return i?t.i18n.weekdaysAbbrev[e]:t.i18n.weekdays[e]}},{key:"_finishSelection",value:function(){this.setInputValue(),this.close()}},{key:"open",value:function(){if(!this.isOpen)return this.isOpen=!0,"function"==typeof this.options.onOpen&&this.options.onOpen.call(this),this.draw(),this.modal.open(),this}},{key:"close",value:function(){if(this.isOpen)return this.isOpen=!1,"function"==typeof this.options.onClose&&this.options.onClose.call(this),this.modal.close(),this}}],[{key:"init",value:function(t,e){return _get(B.__proto__||Object.getPrototypeOf(B),"init",this).call(this,this,t,e)}},{key:"_isDate",value:function(t){return/Date/.test(Object.prototype.toString.call(t))&&!isNaN(t.getTime())}},{key:"_isWeekend",value:function(t){var e=t.getDay();return 0===e||6===e}},{key:"_setToStartOfDay",value:function(t){B._isDate(t)&&t.setHours(0,0,0,0)}},{key:"_getDaysInMonth",value:function(t,e){return[31,B._isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]}},{key:"_isLeapYear",value:function(t){return t%4==0&&t%100!=0||t%400==0}},{key:"_compareDates",value:function(t,e){return t.getTime()===e.getTime()}},{key:"_setToStartOfDay",value:function(t){B._isDate(t)&&t.setHours(0,0,0,0)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Datepicker}},{key:"defaults",get:function(){return e}}]),B}();t._template=['<div class= "modal datepicker-modal">','<div class="modal-content datepicker-container">','<div class="datepicker-date-display">','<span class="year-text"></span>','<span class="date-text"></span>',"</div>",'<div class="datepicker-calendar-container">','<div class="datepicker-calendar"></div>','<div class="datepicker-footer">','<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>','<div class="confirmation-btns">','<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>','<button class="btn-flat datepicker-done waves-effect" type="button"></button>',"</div>","</div>","</div>","</div>","</div>"].join(""),M.Datepicker=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"datepicker","M_Datepicker")}(cash),function(h){"use strict";var e={dialRadius:135,outerRadius:105,innerRadius:70,tickRadius:20,duration:350,container:null,defaultTime:"now",fromNow:0,showClearBtn:!1,i18n:{cancel:"Cancel",clear:"Clear",done:"Ok"},autoClose:!1,twelveHour:!0,vibrate:!0,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null,onSelect:null},t=function(t){function f(t,e){_classCallCheck(this,f);var i=_possibleConstructorReturn(this,(f.__proto__||Object.getPrototypeOf(f)).call(this,f,t,e));return(i.el.M_Timepicker=i).options=h.extend({},f.defaults,e),i.id=M.guid(),i._insertHTMLIntoDOM(),i._setupModal(),i._setupVariables(),i._setupEventHandlers(),i._clockSetup(),i._pickerSetup(),i}return _inherits(f,Component),_createClass(f,[{key:"destroy",value:function(){this._removeEventHandlers(),this.modal.destroy(),h(this.modalEl).remove(),this.el.M_Timepicker=void 0}},{key:"_setupEventHandlers",value:function(){this._handleInputKeydownBound=this._handleInputKeydown.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),this._handleClockClickStartBound=this._handleClockClickStart.bind(this),this._handleDocumentClickMoveBound=this._handleDocumentClickMove.bind(this),this._handleDocumentClickEndBound=this._handleDocumentClickEnd.bind(this),this.el.addEventListener("click",this._handleInputClickBound),this.el.addEventListener("keydown",this._handleInputKeydownBound),this.plate.addEventListener("mousedown",this._handleClockClickStartBound),this.plate.addEventListener("touchstart",this._handleClockClickStartBound),h(this.spanHours).on("click",this.showView.bind(this,"hours")),h(this.spanMinutes).on("click",this.showView.bind(this,"minutes"))}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleInputClickBound),this.el.removeEventListener("keydown",this._handleInputKeydownBound)}},{key:"_handleInputClick",value:function(){this.open()}},{key:"_handleInputKeydown",value:function(t){t.which===M.keys.ENTER&&(t.preventDefault(),this.open())}},{key:"_handleClockClickStart",value:function(t){t.preventDefault();var e=this.plate.getBoundingClientRect(),i=e.left,n=e.top;this.x0=i+this.options.dialRadius,this.y0=n+this.options.dialRadius,this.moved=!1;var s=f._Pos(t);this.dx=s.x-this.x0,this.dy=s.y-this.y0,this.setHand(this.dx,this.dy,!1),document.addEventListener("mousemove",this._handleDocumentClickMoveBound),document.addEventListener("touchmove",this._handleDocumentClickMoveBound),document.addEventListener("mouseup",this._handleDocumentClickEndBound),document.addEventListener("touchend",this._handleDocumentClickEndBound)}},{key:"_handleDocumentClickMove",value:function(t){t.preventDefault();var e=f._Pos(t),i=e.x-this.x0,n=e.y-this.y0;this.moved=!0,this.setHand(i,n,!1,!0)}},{key:"_handleDocumentClickEnd",value:function(t){var e=this;t.preventDefault(),document.removeEventListener("mouseup",this._handleDocumentClickEndBound),document.removeEventListener("touchend",this._handleDocumentClickEndBound);var i=f._Pos(t),n=i.x-this.x0,s=i.y-this.y0;this.moved&&n===this.dx&&s===this.dy&&this.setHand(n,s),"hours"===this.currentView?this.showView("minutes",this.options.duration/2):this.options.autoClose&&(h(this.minutesView).addClass("timepicker-dial-out"),setTimeout(function(){e.done()},this.options.duration/2)),"function"==typeof this.options.onSelect&&this.options.onSelect.call(this,this.hours,this.minutes),document.removeEventListener("mousemove",this._handleDocumentClickMoveBound),document.removeEventListener("touchmove",this._handleDocumentClickMoveBound)}},{key:"_insertHTMLIntoDOM",value:function(){this.$modalEl=h(f._template),this.modalEl=this.$modalEl[0],this.modalEl.id="modal-"+this.id;var t=document.querySelector(this.options.container);this.options.container&&t?this.$modalEl.appendTo(t):this.$modalEl.insertBefore(this.el)}},{key:"_setupModal",value:function(){var t=this;this.modal=M.Modal.init(this.modalEl,{onOpenStart:this.options.onOpenStart,onOpenEnd:this.options.onOpenEnd,onCloseStart:this.options.onCloseStart,onCloseEnd:function(){"function"==typeof t.options.onCloseEnd&&t.options.onCloseEnd.call(t),t.isOpen=!1}})}},{key:"_setupVariables",value:function(){this.currentView="hours",this.vibrate=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null,this._canvas=this.modalEl.querySelector(".timepicker-canvas"),this.plate=this.modalEl.querySelector(".timepicker-plate"),this.hoursView=this.modalEl.querySelector(".timepicker-hours"),this.minutesView=this.modalEl.querySelector(".timepicker-minutes"),this.spanHours=this.modalEl.querySelector(".timepicker-span-hours"),this.spanMinutes=this.modalEl.querySelector(".timepicker-span-minutes"),this.spanAmPm=this.modalEl.querySelector(".timepicker-span-am-pm"),this.footer=this.modalEl.querySelector(".timepicker-footer"),this.amOrPm="PM"}},{key:"_pickerSetup",value:function(){var t=h('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.clear+"</button>").appendTo(this.footer).on("click",this.clear.bind(this));this.options.showClearBtn&&t.css({visibility:""});var e=h('<div class="confirmation-btns"></div>');h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.cancel+"</button>").appendTo(e).on("click",this.close.bind(this)),h('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="'+(this.options.twelveHour?"3":"1")+'">'+this.options.i18n.done+"</button>").appendTo(e).on("click",this.done.bind(this)),e.appendTo(this.footer)}},{key:"_clockSetup",value:function(){this.options.twelveHour&&(this.$amBtn=h('<div class="am-btn">AM</div>'),this.$pmBtn=h('<div class="pm-btn">PM</div>'),this.$amBtn.on("click",this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm),this.$pmBtn.on("click",this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm)),this._buildHoursView(),this._buildMinutesView(),this._buildSVGClock()}},{key:"_buildSVGClock",value:function(){var t=this.options.dialRadius,e=this.options.tickRadius,i=2*t,n=f._createSVGEl("svg");n.setAttribute("class","timepicker-svg"),n.setAttribute("width",i),n.setAttribute("height",i);var s=f._createSVGEl("g");s.setAttribute("transform","translate("+t+","+t+")");var o=f._createSVGEl("circle");o.setAttribute("class","timepicker-canvas-bearing"),o.setAttribute("cx",0),o.setAttribute("cy",0),o.setAttribute("r",4);var a=f._createSVGEl("line");a.setAttribute("x1",0),a.setAttribute("y1",0);var r=f._createSVGEl("circle");r.setAttribute("class","timepicker-canvas-bg"),r.setAttribute("r",e),s.appendChild(a),s.appendChild(r),s.appendChild(o),n.appendChild(s),this._canvas.appendChild(n),this.hand=a,this.bg=r,this.bearing=o,this.g=s}},{key:"_buildHoursView",value:function(){var t=h('<div class="timepicker-tick"></div>');if(this.options.twelveHour)for(var e=1;e<13;e+=1){var i=t.clone(),n=e/6*Math.PI,s=this.options.outerRadius;i.css({left:this.options.dialRadius+Math.sin(n)*s-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(n)*s-this.options.tickRadius+"px"}),i.html(0===e?"00":e),this.hoursView.appendChild(i[0])}else for(var o=0;o<24;o+=1){var a=t.clone(),r=o/6*Math.PI,l=0<o&&o<13?this.options.innerRadius:this.options.outerRadius;a.css({left:this.options.dialRadius+Math.sin(r)*l-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(r)*l-this.options.tickRadius+"px"}),a.html(0===o?"00":o),this.hoursView.appendChild(a[0])}}},{key:"_buildMinutesView",value:function(){for(var t=h('<div class="timepicker-tick"></div>'),e=0;e<60;e+=5){var i=t.clone(),n=e/30*Math.PI;i.css({left:this.options.dialRadius+Math.sin(n)*this.options.outerRadius-this.options.tickRadius+"px",top:this.options.dialRadius-Math.cos(n)*this.options.outerRadius-this.options.tickRadius+"px"}),i.html(f._addLeadingZero(e)),this.minutesView.appendChild(i[0])}}},{key:"_handleAmPmClick",value:function(t){var e=h(t.target);this.amOrPm=e.hasClass("am-btn")?"AM":"PM",this._updateAmPmView()}},{key:"_updateAmPmView",value:function(){this.options.twelveHour&&(this.$amBtn.toggleClass("text-primary","AM"===this.amOrPm),this.$pmBtn.toggleClass("text-primary","PM"===this.amOrPm))}},{key:"_updateTimeFromInput",value:function(){var t=((this.el.value||this.options.defaultTime||"")+"").split(":");if(this.options.twelveHour&&void 0!==t[1]&&(0<t[1].toUpperCase().indexOf("AM")?this.amOrPm="AM":this.amOrPm="PM",t[1]=t[1].replace("AM","").replace("PM","")),"now"===t[0]){var e=new Date(+new Date+this.options.fromNow);t=[e.getHours(),e.getMinutes()],this.options.twelveHour&&(this.amOrPm=12<=t[0]&&t[0]<24?"PM":"AM")}this.hours=+t[0]||0,this.minutes=+t[1]||0,this.spanHours.innerHTML=this.hours,this.spanMinutes.innerHTML=f._addLeadingZero(this.minutes),this._updateAmPmView()}},{key:"showView",value:function(t,e){"minutes"===t&&h(this.hoursView).css("visibility");var i="hours"===t,n=i?this.hoursView:this.minutesView,s=i?this.minutesView:this.hoursView;this.currentView=t,h(this.spanHours).toggleClass("text-primary",i),h(this.spanMinutes).toggleClass("text-primary",!i),s.classList.add("timepicker-dial-out"),h(n).css("visibility","visible").removeClass("timepicker-dial-out"),this.resetClock(e),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout(function(){h(s).css("visibility","hidden")},this.options.duration)}},{key:"resetClock",value:function(t){var e=this.currentView,i=this[e],n="hours"===e,s=i*(Math.PI/(n?6:30)),o=n&&0<i&&i<13?this.options.innerRadius:this.options.outerRadius,a=Math.sin(s)*o,r=-Math.cos(s)*o,l=this;t?(h(this.canvas).addClass("timepicker-canvas-out"),setTimeout(function(){h(l.canvas).removeClass("timepicker-canvas-out"),l.setHand(a,r)},t)):this.setHand(a,r)}},{key:"setHand",value:function(t,e,i){var n=this,s=Math.atan2(t,-e),o="hours"===this.currentView,a=Math.PI/(o||i?6:30),r=Math.sqrt(t*t+e*e),l=o&&r<(this.options.outerRadius+this.options.innerRadius)/2,h=l?this.options.innerRadius:this.options.outerRadius;this.options.twelveHour&&(h=this.options.outerRadius),s<0&&(s=2*Math.PI+s);var d=Math.round(s/a);s=d*a,this.options.twelveHour?o?0===d&&(d=12):(i&&(d*=5),60===d&&(d=0)):o?(12===d&&(d=0),d=l?0===d?12:d:0===d?0:d+12):(i&&(d*=5),60===d&&(d=0)),this[this.currentView]!==d&&this.vibrate&&this.options.vibrate&&(this.vibrateTimer||(navigator[this.vibrate](10),this.vibrateTimer=setTimeout(function(){n.vibrateTimer=null},100))),this[this.currentView]=d,o?this.spanHours.innerHTML=d:this.spanMinutes.innerHTML=f._addLeadingZero(d);var u=Math.sin(s)*(h-this.options.tickRadius),c=-Math.cos(s)*(h-this.options.tickRadius),p=Math.sin(s)*h,v=-Math.cos(s)*h;this.hand.setAttribute("x2",u),this.hand.setAttribute("y2",c),this.bg.setAttribute("cx",p),this.bg.setAttribute("cy",v)}},{key:"open",value:function(){this.isOpen||(this.isOpen=!0,this._updateTimeFromInput(),this.showView("hours"),this.modal.open())}},{key:"close",value:function(){this.isOpen&&(this.isOpen=!1,this.modal.close())}},{key:"done",value:function(t,e){var i=this.el.value,n=e?"":f._addLeadingZero(this.hours)+":"+f._addLeadingZero(this.minutes);this.time=n,!e&&this.options.twelveHour&&(n=n+" "+this.amOrPm),(this.el.value=n)!==i&&this.$el.trigger("change"),this.close(),this.el.focus()}},{key:"clear",value:function(){this.done(null,!0)}}],[{key:"init",value:function(t,e){return _get(f.__proto__||Object.getPrototypeOf(f),"init",this).call(this,this,t,e)}},{key:"_addLeadingZero",value:function(t){return(t<10?"0":"")+t}},{key:"_createSVGEl",value:function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}},{key:"_Pos",value:function(t){return t.targetTouches&&1<=t.targetTouches.length?{x:t.targetTouches[0].clientX,y:t.targetTouches[0].clientY}:{x:t.clientX,y:t.clientY}}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Timepicker}},{key:"defaults",get:function(){return e}}]),f}();t._template=['<div class= "modal timepicker-modal">','<div class="modal-content timepicker-container">','<div class="timepicker-digital-display">','<div class="timepicker-text-container">','<div class="timepicker-display-column">','<span class="timepicker-span-hours text-primary"></span>',":",'<span class="timepicker-span-minutes"></span>',"</div>",'<div class="timepicker-display-column timepicker-display-am-pm">','<div class="timepicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="timepicker-analog-display">','<div class="timepicker-plate">','<div class="timepicker-canvas"></div>','<div class="timepicker-dial timepicker-hours"></div>','<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>',"</div>",'<div class="timepicker-footer"></div>',"</div>","</div>","</div>"].join(""),M.Timepicker=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"timepicker","M_Timepicker")}(cash),function(s){"use strict";var e={},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_CharacterCounter=i).options=s.extend({},n.defaults,e),i.isInvalid=!1,i.isValidLength=!1,i._setupCounter(),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.CharacterCounter=void 0,this._removeCounter()}},{key:"_setupEventHandlers",value:function(){this._handleUpdateCounterBound=this.updateCounter.bind(this),this.el.addEventListener("focus",this._handleUpdateCounterBound,!0),this.el.addEventListener("input",this._handleUpdateCounterBound,!0)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("focus",this._handleUpdateCounterBound,!0),this.el.removeEventListener("input",this._handleUpdateCounterBound,!0)}},{key:"_setupCounter",value:function(){this.counterEl=document.createElement("span"),s(this.counterEl).addClass("character-counter").css({float:"right","font-size":"12px",height:1}),this.$el.parent().append(this.counterEl)}},{key:"_removeCounter",value:function(){s(this.counterEl).remove()}},{key:"updateCounter",value:function(){var t=+this.$el.attr("data-length"),e=this.el.value.length;this.isValidLength=e<=t;var i=e;t&&(i+="/"+t,this._validateInput()),s(this.counterEl).html(i)}},{key:"_validateInput",value:function(){this.isValidLength&&this.isInvalid?(this.isInvalid=!1,this.$el.removeClass("invalid")):this.isValidLength||this.isInvalid||(this.isInvalid=!0,this.$el.removeClass("valid"),this.$el.addClass("invalid"))}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_CharacterCounter}},{key:"defaults",get:function(){return e}}]),n}();M.CharacterCounter=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"characterCounter","M_CharacterCounter")}(cash),function(b){"use strict";var e={duration:200,dist:-100,shift:0,padding:0,numVisible:5,fullWidth:!1,indicators:!1,noWrap:!1,onCycleTo:null},t=function(t){function i(t,e){_classCallCheck(this,i);var n=_possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,i,t,e));return(n.el.M_Carousel=n).options=b.extend({},i.defaults,e),n.hasMultipleSlides=1<n.$el.find(".carousel-item").length,n.showIndicators=n.options.indicators&&n.hasMultipleSlides,n.noWrap=n.options.noWrap||!n.hasMultipleSlides,n.pressed=!1,n.dragged=!1,n.offset=n.target=0,n.images=[],n.itemWidth=n.$el.find(".carousel-item").first().innerWidth(),n.itemHeight=n.$el.find(".carousel-item").first().innerHeight(),n.dim=2*n.itemWidth+n.options.padding||1,n._autoScrollBound=n._autoScroll.bind(n),n._trackBound=n._track.bind(n),n.options.fullWidth&&(n.options.dist=0,n._setCarouselHeight(),n.showIndicators&&n.$el.find(".carousel-fixed-item").addClass("with-indicators")),n.$indicators=b('<ul class="indicators"></ul>'),n.$el.find(".carousel-item").each(function(t,e){if(n.images.push(t),n.showIndicators){var i=b('<li class="indicator-item"></li>');0===e&&i[0].classList.add("active"),n.$indicators.append(i)}}),n.showIndicators&&n.$el.append(n.$indicators),n.count=n.images.length,n.options.numVisible=Math.min(n.count,n.options.numVisible),n.xform="transform",["webkit","Moz","O","ms"].every(function(t){var e=t+"Transform";return void 0===document.body.style[e]||(n.xform=e,!1)}),n._setupEventHandlers(),n._scroll(n.offset),n}return _inherits(i,Component),_createClass(i,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.M_Carousel=void 0}},{key:"_setupEventHandlers",value:function(){var i=this;this._handleCarouselTapBound=this._handleCarouselTap.bind(this),this._handleCarouselDragBound=this._handleCarouselDrag.bind(this),this._handleCarouselReleaseBound=this._handleCarouselRelease.bind(this),this._handleCarouselClickBound=this._handleCarouselClick.bind(this),void 0!==window.ontouchstart&&(this.el.addEventListener("touchstart",this._handleCarouselTapBound),this.el.addEventListener("touchmove",this._handleCarouselDragBound),this.el.addEventListener("touchend",this._handleCarouselReleaseBound)),this.el.addEventListener("mousedown",this._handleCarouselTapBound),this.el.addEventListener("mousemove",this._handleCarouselDragBound),this.el.addEventListener("mouseup",this._handleCarouselReleaseBound),this.el.addEventListener("mouseleave",this._handleCarouselReleaseBound),this.el.addEventListener("click",this._handleCarouselClickBound),this.showIndicators&&this.$indicators&&(this._handleIndicatorClickBound=this._handleIndicatorClick.bind(this),this.$indicators.find(".indicator-item").each(function(t,e){t.addEventListener("click",i._handleIndicatorClickBound)}));var t=M.throttle(this._handleResize,200);this._handleThrottledResizeBound=t.bind(this),window.addEventListener("resize",this._handleThrottledResizeBound)}},{key:"_removeEventHandlers",value:function(){var i=this;void 0!==window.ontouchstart&&(this.el.removeEventListener("touchstart",this._handleCarouselTapBound),this.el.removeEventListener("touchmove",this._handleCarouselDragBound),this.el.removeEventListener("touchend",this._handleCarouselReleaseBound)),this.el.removeEventListener("mousedown",this._handleCarouselTapBound),this.el.removeEventListener("mousemove",this._handleCarouselDragBound),this.el.removeEventListener("mouseup",this._handleCarouselReleaseBound),this.el.removeEventListener("mouseleave",this._handleCarouselReleaseBound),this.el.removeEventListener("click",this._handleCarouselClickBound),this.showIndicators&&this.$indicators&&this.$indicators.find(".indicator-item").each(function(t,e){t.removeEventListener("click",i._handleIndicatorClickBound)}),window.removeEventListener("resize",this._handleThrottledResizeBound)}},{key:"_handleCarouselTap",value:function(t){"mousedown"===t.type&&b(t.target).is("img")&&t.preventDefault(),this.pressed=!0,this.dragged=!1,this.verticalDragged=!1,this.reference=this._xpos(t),this.referenceY=this._ypos(t),this.velocity=this.amplitude=0,this.frame=this.offset,this.timestamp=Date.now(),clearInterval(this.ticker),this.ticker=setInterval(this._trackBound,100)}},{key:"_handleCarouselDrag",value:function(t){var e=void 0,i=void 0,n=void 0;if(this.pressed)if(e=this._xpos(t),i=this._ypos(t),n=this.reference-e,Math.abs(this.referenceY-i)<30&&!this.verticalDragged)(2<n||n<-2)&&(this.dragged=!0,this.reference=e,this._scroll(this.offset+n));else{if(this.dragged)return t.preventDefault(),t.stopPropagation(),!1;this.verticalDragged=!0}if(this.dragged)return t.preventDefault(),t.stopPropagation(),!1}},{key:"_handleCarouselRelease",value:function(t){if(this.pressed)return this.pressed=!1,clearInterval(this.ticker),this.target=this.offset,(10<this.velocity||this.velocity<-10)&&(this.amplitude=.9*this.velocity,this.target=this.offset+this.amplitude),this.target=Math.round(this.target/this.dim)*this.dim,this.noWrap&&(this.target>=this.dim*(this.count-1)?this.target=this.dim*(this.count-1):this.target<0&&(this.target=0)),this.amplitude=this.target-this.offset,this.timestamp=Date.now(),requestAnimationFrame(this._autoScrollBound),this.dragged&&(t.preventDefault(),t.stopPropagation()),!1}},{key:"_handleCarouselClick",value:function(t){if(this.dragged)return t.preventDefault(),t.stopPropagation(),!1;if(!this.options.fullWidth){var e=b(t.target).closest(".carousel-item").index();0!==this._wrap(this.center)-e&&(t.preventDefault(),t.stopPropagation()),this._cycleTo(e)}}},{key:"_handleIndicatorClick",value:function(t){t.stopPropagation();var e=b(t.target).closest(".indicator-item");e.length&&this._cycleTo(e.index())}},{key:"_handleResize",value:function(t){this.options.fullWidth?(this.itemWidth=this.$el.find(".carousel-item").first().innerWidth(),this.imageHeight=this.$el.find(".carousel-item.active").height(),this.dim=2*this.itemWidth+this.options.padding,this.offset=2*this.center*this.itemWidth,this.target=this.offset,this._setCarouselHeight(!0)):this._scroll()}},{key:"_setCarouselHeight",value:function(t){var i=this,e=this.$el.find(".carousel-item.active").length?this.$el.find(".carousel-item.active").first():this.$el.find(".carousel-item").first(),n=e.find("img").first();if(n.length)if(n[0].complete){var s=n.height();if(0<s)this.$el.css("height",s+"px");else{var o=n[0].naturalWidth,a=n[0].naturalHeight,r=this.$el.width()/o*a;this.$el.css("height",r+"px")}}else n.one("load",function(t,e){i.$el.css("height",t.offsetHeight+"px")});else if(!t){var l=e.height();this.$el.css("height",l+"px")}}},{key:"_xpos",value:function(t){return t.targetTouches&&1<=t.targetTouches.length?t.targetTouches[0].clientX:t.clientX}},{key:"_ypos",value:function(t){return t.targetTouches&&1<=t.targetTouches.length?t.targetTouches[0].clientY:t.clientY}},{key:"_wrap",value:function(t){return t>=this.count?t%this.count:t<0?this._wrap(this.count+t%this.count):t}},{key:"_track",value:function(){var t,e,i,n;e=(t=Date.now())-this.timestamp,this.timestamp=t,i=this.offset-this.frame,this.frame=this.offset,n=1e3*i/(1+e),this.velocity=.8*n+.2*this.velocity}},{key:"_autoScroll",value:function(){var t=void 0,e=void 0;this.amplitude&&(t=Date.now()-this.timestamp,2<(e=this.amplitude*Math.exp(-t/this.options.duration))||e<-2?(this._scroll(this.target-e),requestAnimationFrame(this._autoScrollBound)):this._scroll(this.target))}},{key:"_scroll",value:function(t){var e=this;this.$el.hasClass("scrolling")||this.el.classList.add("scrolling"),null!=this.scrollingTimeout&&window.clearTimeout(this.scrollingTimeout),this.scrollingTimeout=window.setTimeout(function(){e.$el.removeClass("scrolling")},this.options.duration);var i,n,s,o,a=void 0,r=void 0,l=void 0,h=void 0,d=void 0,u=void 0,c=this.center,p=1/this.options.numVisible;if(this.offset="number"==typeof t?t:this.offset,this.center=Math.floor((this.offset+this.dim/2)/this.dim),o=-(s=(n=this.offset-this.center*this.dim)<0?1:-1)*n*2/this.dim,i=this.count>>1,this.options.fullWidth?(l="translateX(0)",u=1):(l="translateX("+(this.el.clientWidth-this.itemWidth)/2+"px) ",l+="translateY("+(this.el.clientHeight-this.itemHeight)/2+"px)",u=1-p*o),this.showIndicators){var v=this.center%this.count,f=this.$indicators.find(".indicator-item.active");f.index()!==v&&(f.removeClass("active"),this.$indicators.find(".indicator-item").eq(v)[0].classList.add("active"))}if(!this.noWrap||0<=this.center&&this.center<this.count){r=this.images[this._wrap(this.center)],b(r).hasClass("active")||(this.$el.find(".carousel-item").removeClass("active"),r.classList.add("active"));var m=l+" translateX("+-n/2+"px) translateX("+s*this.options.shift*o*a+"px) translateZ("+this.options.dist*o+"px)";this._updateItemStyle(r,u,0,m)}for(a=1;a<=i;++a){if(this.options.fullWidth?(h=this.options.dist,d=a===i&&n<0?1-o:1):(h=this.options.dist*(2*a+o*s),d=1-p*(2*a+o*s)),!this.noWrap||this.center+a<this.count){r=this.images[this._wrap(this.center+a)];var g=l+" translateX("+(this.options.shift+(this.dim*a-n)/2)+"px) translateZ("+h+"px)";this._updateItemStyle(r,d,-a,g)}if(this.options.fullWidth?(h=this.options.dist,d=a===i&&0<n?1-o:1):(h=this.options.dist*(2*a-o*s),d=1-p*(2*a-o*s)),!this.noWrap||0<=this.center-a){r=this.images[this._wrap(this.center-a)];var _=l+" translateX("+(-this.options.shift+(-this.dim*a-n)/2)+"px) translateZ("+h+"px)";this._updateItemStyle(r,d,-a,_)}}if(!this.noWrap||0<=this.center&&this.center<this.count){r=this.images[this._wrap(this.center)];var y=l+" translateX("+-n/2+"px) translateX("+s*this.options.shift*o+"px) translateZ("+this.options.dist*o+"px)";this._updateItemStyle(r,u,0,y)}var k=this.$el.find(".carousel-item").eq(this._wrap(this.center));c!==this.center&&"function"==typeof this.options.onCycleTo&&this.options.onCycleTo.call(this,k[0],this.dragged),"function"==typeof this.oneTimeCallback&&(this.oneTimeCallback.call(this,k[0],this.dragged),this.oneTimeCallback=null)}},{key:"_updateItemStyle",value:function(t,e,i,n){t.style[this.xform]=n,t.style.zIndex=i,t.style.opacity=e,t.style.visibility="visible"}},{key:"_cycleTo",value:function(t,e){var i=this.center%this.count-t;this.noWrap||(i<0?Math.abs(i+this.count)<Math.abs(i)&&(i+=this.count):0<i&&Math.abs(i-this.count)<i&&(i-=this.count)),this.target=this.dim*Math.round(this.offset/this.dim),i<0?this.target+=this.dim*Math.abs(i):0<i&&(this.target-=this.dim*i),"function"==typeof e&&(this.oneTimeCallback=e),this.offset!==this.target&&(this.amplitude=this.target-this.offset,this.timestamp=Date.now(),requestAnimationFrame(this._autoScrollBound))}},{key:"next",value:function(t){(void 0===t||isNaN(t))&&(t=1);var e=this.center+t;if(e>=this.count||e<0){if(this.noWrap)return;e=this._wrap(e)}this._cycleTo(e)}},{key:"prev",value:function(t){(void 0===t||isNaN(t))&&(t=1);var e=this.center-t;if(e>=this.count||e<0){if(this.noWrap)return;e=this._wrap(e)}this._cycleTo(e)}},{key:"set",value:function(t,e){if((void 0===t||isNaN(t))&&(t=0),t>this.count||t<0){if(this.noWrap)return;t=this._wrap(t)}this._cycleTo(t,e)}}],[{key:"init",value:function(t,e){return _get(i.__proto__||Object.getPrototypeOf(i),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Carousel}},{key:"defaults",get:function(){return e}}]),i}();M.Carousel=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"carousel","M_Carousel")}(cash),function(S){"use strict";var e={onOpen:void 0,onClose:void 0},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_TapTarget=i).options=S.extend({},n.defaults,e),i.isOpen=!1,i.$origin=S("#"+i.$el.attr("data-target")),i._setup(),i._calculatePositioning(),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this.el.TapTarget=void 0}},{key:"_setupEventHandlers",value:function(){this._handleDocumentClickBound=this._handleDocumentClick.bind(this),this._handleTargetClickBound=this._handleTargetClick.bind(this),this._handleOriginClickBound=this._handleOriginClick.bind(this),this.el.addEventListener("click",this._handleTargetClickBound),this.originEl.addEventListener("click",this._handleOriginClickBound);var t=M.throttle(this._handleResize,200);this._handleThrottledResizeBound=t.bind(this),window.addEventListener("resize",this._handleThrottledResizeBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("click",this._handleTargetClickBound),this.originEl.removeEventListener("click",this._handleOriginClickBound),window.removeEventListener("resize",this._handleThrottledResizeBound)}},{key:"_handleTargetClick",value:function(t){this.open()}},{key:"_handleOriginClick",value:function(t){this.close()}},{key:"_handleResize",value:function(t){this._calculatePositioning()}},{key:"_handleDocumentClick",value:function(t){S(t.target).closest(".tap-target-wrapper").length||(this.close(),t.preventDefault(),t.stopPropagation())}},{key:"_setup",value:function(){this.wrapper=this.$el.parent()[0],this.waveEl=S(this.wrapper).find(".tap-target-wave")[0],this.originEl=S(this.wrapper).find(".tap-target-origin")[0],this.contentEl=this.$el.find(".tap-target-content")[0],S(this.wrapper).hasClass(".tap-target-wrapper")||(this.wrapper=document.createElement("div"),this.wrapper.classList.add("tap-target-wrapper"),this.$el.before(S(this.wrapper)),this.wrapper.append(this.el)),this.contentEl||(this.contentEl=document.createElement("div"),this.contentEl.classList.add("tap-target-content"),this.$el.append(this.contentEl)),this.waveEl||(this.waveEl=document.createElement("div"),this.waveEl.classList.add("tap-target-wave"),this.originEl||(this.originEl=this.$origin.clone(!0,!0),this.originEl.addClass("tap-target-origin"),this.originEl.removeAttr("id"),this.originEl.removeAttr("style"),this.originEl=this.originEl[0],this.waveEl.append(this.originEl)),this.wrapper.append(this.waveEl))}},{key:"_calculatePositioning",value:function(){var t="fixed"===this.$origin.css("position");if(!t)for(var e=this.$origin.parents(),i=0;i<e.length&&!(t="fixed"==S(e[i]).css("position"));i++);var n=this.$origin.outerWidth(),s=this.$origin.outerHeight(),o=t?this.$origin.offset().top-M.getDocumentScrollTop():this.$origin.offset().top,a=t?this.$origin.offset().left-M.getDocumentScrollLeft():this.$origin.offset().left,r=window.innerWidth,l=window.innerHeight,h=r/2,d=l/2,u=a<=h,c=h<a,p=o<=d,v=d<o,f=.25*r<=a&&a<=.75*r,m=this.$el.outerWidth(),g=this.$el.outerHeight(),_=o+s/2-g/2,y=a+n/2-m/2,k=t?"fixed":"absolute",b=f?m:m/2+n,w=g/2,C=p?g/2:0,E=u&&!f?m/2-n:0,O=n,x=v?"bottom":"top",L=2*n,T=L,$=g/2-T/2,B=m/2-L/2,D={};D.top=p?_+"px":"",D.right=c?r-y-m+"px":"",D.bottom=v?l-_-g+"px":"",D.left=u?y+"px":"",D.position=k,S(this.wrapper).css(D),S(this.contentEl).css({width:b+"px",height:w+"px",top:C+"px",right:"0px",bottom:"0px",left:E+"px",padding:O+"px",verticalAlign:x}),S(this.waveEl).css({top:$+"px",left:B+"px",width:L+"px",height:T+"px"})}},{key:"open",value:function(){this.isOpen||("function"==typeof this.options.onOpen&&this.options.onOpen.call(this,this.$origin[0]),this.isOpen=!0,this.wrapper.classList.add("open"),document.body.addEventListener("click",this._handleDocumentClickBound,!0),document.body.addEventListener("touchend",this._handleDocumentClickBound))}},{key:"close",value:function(){this.isOpen&&("function"==typeof this.options.onClose&&this.options.onClose.call(this,this.$origin[0]),this.isOpen=!1,this.wrapper.classList.remove("open"),document.body.removeEventListener("click",this._handleDocumentClickBound,!0),document.body.removeEventListener("touchend",this._handleDocumentClickBound))}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_TapTarget}},{key:"defaults",get:function(){return e}}]),n}();M.TapTarget=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"tapTarget","M_TapTarget")}(cash),function(d){"use strict";var e={classes:"",dropdownOptions:{}},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return i.$el.hasClass("browser-default")?_possibleConstructorReturn(i):((i.el.M_FormSelect=i).options=d.extend({},n.defaults,e),i.isMultiple=i.$el.prop("multiple"),i.el.tabIndex=-1,i._keysSelected={},i._valueDict={},i._setupDropdown(),i._setupEventHandlers(),i)}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeDropdown(),this.el.M_FormSelect=void 0}},{key:"_setupEventHandlers",value:function(){var e=this;this._handleSelectChangeBound=this._handleSelectChange.bind(this),this._handleOptionClickBound=this._handleOptionClick.bind(this),this._handleInputClickBound=this._handleInputClick.bind(this),d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t){t.addEventListener("click",e._handleOptionClickBound)}),this.el.addEventListener("change",this._handleSelectChangeBound),this.input.addEventListener("click",this._handleInputClickBound)}},{key:"_removeEventHandlers",value:function(){var e=this;d(this.dropdownOptions).find("li:not(.optgroup)").each(function(t){t.removeEventListener("click",e._handleOptionClickBound)}),this.el.removeEventListener("change",this._handleSelectChangeBound),this.input.removeEventListener("click",this._handleInputClickBound)}},{key:"_handleSelectChange",value:function(t){this._setValueToInput()}},{key:"_handleOptionClick",value:function(t){t.preventDefault();var e=d(t.target).closest("li")[0],i=e.id;if(!d(e).hasClass("disabled")&&!d(e).hasClass("optgroup")&&i.length){var n=!0;if(this.isMultiple){var s=d(this.dropdownOptions).find("li.disabled.selected");s.length&&(s.removeClass("selected"),s.find('input[type="checkbox"]').prop("checked",!1),this._toggleEntryFromArray(s[0].id)),n=this._toggleEntryFromArray(i)}else d(this.dropdownOptions).find("li").removeClass("selected"),d(e).toggleClass("selected",n);d(this._valueDict[i].el).prop("selected")!==n&&(d(this._valueDict[i].el).prop("selected",n),this.$el.trigger("change"))}t.stopPropagation()}},{key:"_handleInputClick",value:function(){this.dropdown&&this.dropdown.isOpen&&(this._setValueToInput(),this._setSelectedStates())}},{key:"_setupDropdown",value:function(){var n=this;this.wrapper=document.createElement("div"),d(this.wrapper).addClass("select-wrapper "+this.options.classes),this.$el.before(d(this.wrapper)),this.wrapper.appendChild(this.el),this.el.disabled&&this.wrapper.classList.add("disabled"),this.$selectOptions=this.$el.children("option, optgroup"),this.dropdownOptions=document.createElement("ul"),this.dropdownOptions.id="select-options-"+M.guid(),d(this.dropdownOptions).addClass("dropdown-content select-dropdown "+(this.isMultiple?"multiple-select-dropdown":"")),this.$selectOptions.length&&this.$selectOptions.each(function(t){if(d(t).is("option")){var e=void 0;e=n.isMultiple?n._appendOptionWithIcon(n.$el,t,"multiple"):n._appendOptionWithIcon(n.$el,t),n._addOptionToValueDict(t,e)}else if(d(t).is("optgroup")){var i=d(t).children("option");d(n.dropdownOptions).append(d('<li class="optgroup"><span>'+t.getAttribute("label")+"</span></li>")[0]),i.each(function(t){var e=n._appendOptionWithIcon(n.$el,t,"optgroup-option");n._addOptionToValueDict(t,e)})}}),this.$el.after(this.dropdownOptions),this.input=document.createElement("input"),d(this.input).addClass("select-dropdown dropdown-trigger"),this.input.setAttribute("type","text"),this.input.setAttribute("readonly","true"),this.input.setAttribute("data-target",this.dropdownOptions.id),this.el.disabled&&d(this.input).prop("disabled","true"),this.$el.before(this.input),this._setValueToInput();var t=d('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');if(this.$el.before(t[0]),!this.el.disabled){var e=d.extend({},this.options.dropdownOptions);e.onOpenEnd=function(t){var e=d(n.dropdownOptions).find(".selected").first();if(e.length&&(M.keyDown=!0,n.dropdown.focusedIndex=e.index(),n.dropdown._focusFocusedItem(),M.keyDown=!1,n.dropdown.isScrollable)){var i=e[0].getBoundingClientRect().top-n.dropdownOptions.getBoundingClientRect().top;i-=n.dropdownOptions.clientHeight/2,n.dropdownOptions.scrollTop=i}},this.isMultiple&&(e.closeOnClick=!1),this.dropdown=M.Dropdown.init(this.input,e)}this._setSelectedStates()}},{key:"_addOptionToValueDict",value:function(t,e){var i=Object.keys(this._valueDict).length,n=this.dropdownOptions.id+i,s={};e.id=n,s.el=t,s.optionEl=e,this._valueDict[n]=s}},{key:"_removeDropdown",value:function(){d(this.wrapper).find(".caret").remove(),d(this.input).remove(),d(this.dropdownOptions).remove(),d(this.wrapper).before(this.$el),d(this.wrapper).remove()}},{key:"_appendOptionWithIcon",value:function(t,e,i){var n=e.disabled?"disabled ":"",s="optgroup-option"===i?"optgroup-option ":"",o=this.isMultiple?'<label><input type="checkbox"'+n+'"/><span>'+e.innerHTML+"</span></label>":e.innerHTML,a=d("<li></li>"),r=d("<span></span>");r.html(o),a.addClass(n+" "+s),a.append(r);var l=e.getAttribute("data-icon");if(l){var h=d('<img alt="" src="'+l+'">');a.prepend(h)}return d(this.dropdownOptions).append(a[0]),a[0]}},{key:"_toggleEntryFromArray",value:function(t){var e=!this._keysSelected.hasOwnProperty(t),i=d(this._valueDict[t].optionEl);return e?this._keysSelected[t]=!0:delete this._keysSelected[t],i.toggleClass("selected",e),i.find('input[type="checkbox"]').prop("checked",e),i.prop("selected",e),e}},{key:"_setValueToInput",value:function(){var i=[];if(this.$el.find("option").each(function(t){if(d(t).prop("selected")){var e=d(t).text();i.push(e)}}),!i.length){var t=this.$el.find("option:disabled").eq(0);t.length&&""===t[0].value&&i.push(t.text())}this.input.value=i.join(", ")}},{key:"_setSelectedStates",value:function(){for(var t in this._keysSelected={},this._valueDict){var e=this._valueDict[t],i=d(e.el).prop("selected");d(e.optionEl).find('input[type="checkbox"]').prop("checked",i),i?(this._activateOption(d(this.dropdownOptions),d(e.optionEl)),this._keysSelected[t]=!0):d(e.optionEl).removeClass("selected")}}},{key:"_activateOption",value:function(t,e){e&&(this.isMultiple||t.find("li.selected").removeClass("selected"),d(e).addClass("selected"))}},{key:"getSelectedValues",value:function(){var t=[];for(var e in this._keysSelected)t.push(this._valueDict[e].el.value);return t}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_FormSelect}},{key:"defaults",get:function(){return e}}]),n}();M.FormSelect=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"formSelect","M_FormSelect")}(cash),function(s,e){"use strict";var i={},t=function(t){function n(t,e){_classCallCheck(this,n);var i=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,t,e));return(i.el.M_Range=i).options=s.extend({},n.defaults,e),i._mousedown=!1,i._setupThumb(),i._setupEventHandlers(),i}return _inherits(n,Component),_createClass(n,[{key:"destroy",value:function(){this._removeEventHandlers(),this._removeThumb(),this.el.M_Range=void 0}},{key:"_setupEventHandlers",value:function(){this._handleRangeChangeBound=this._handleRangeChange.bind(this),this._handleRangeMousedownTouchstartBound=this._handleRangeMousedownTouchstart.bind(this),this._handleRangeInputMousemoveTouchmoveBound=this._handleRangeInputMousemoveTouchmove.bind(this),this._handleRangeMouseupTouchendBound=this._handleRangeMouseupTouchend.bind(this),this._handleRangeBlurMouseoutTouchleaveBound=this._handleRangeBlurMouseoutTouchleave.bind(this),this.el.addEventListener("change",this._handleRangeChangeBound),this.el.addEventListener("mousedown",this._handleRangeMousedownTouchstartBound),this.el.addEventListener("touchstart",this._handleRangeMousedownTouchstartBound),this.el.addEventListener("input",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("mousemove",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("touchmove",this._handleRangeInputMousemoveTouchmoveBound),this.el.addEventListener("mouseup",this._handleRangeMouseupTouchendBound),this.el.addEventListener("touchend",this._handleRangeMouseupTouchendBound),this.el.addEventListener("blur",this._handleRangeBlurMouseoutTouchleaveBound),this.el.addEventListener("mouseout",this._handleRangeBlurMouseoutTouchleaveBound),this.el.addEventListener("touchleave",this._handleRangeBlurMouseoutTouchleaveBound)}},{key:"_removeEventHandlers",value:function(){this.el.removeEventListener("change",this._handleRangeChangeBound),this.el.removeEventListener("mousedown",this._handleRangeMousedownTouchstartBound),this.el.removeEventListener("touchstart",this._handleRangeMousedownTouchstartBound),this.el.removeEventListener("input",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("mousemove",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("touchmove",this._handleRangeInputMousemoveTouchmoveBound),this.el.removeEventListener("mouseup",this._handleRangeMouseupTouchendBound),this.el.removeEventListener("touchend",this._handleRangeMouseupTouchendBound),this.el.removeEventListener("blur",this._handleRangeBlurMouseoutTouchleaveBound),this.el.removeEventListener("mouseout",this._handleRangeBlurMouseoutTouchleaveBound),this.el.removeEventListener("touchleave",this._handleRangeBlurMouseoutTouchleaveBound)}},{key:"_handleRangeChange",value:function(){s(this.value).html(this.$el.val()),s(this.thumb).hasClass("active")||this._showRangeBubble();var t=this._calcRangeOffset();s(this.thumb).addClass("active").css("left",t+"px")}},{key:"_handleRangeMousedownTouchstart",value:function(t){if(s(this.value).html(this.$el.val()),this._mousedown=!0,this.$el.addClass("active"),s(this.thumb).hasClass("active")||this._showRangeBubble(),"input"!==t.type){var e=this._calcRangeOffset();s(this.thumb).addClass("active").css("left",e+"px")}}},{key:"_handleRangeInputMousemoveTouchmove",value:function(){if(this._mousedown){s(this.thumb).hasClass("active")||this._showRangeBubble();var t=this._calcRangeOffset();s(this.thumb).addClass("active").css("left",t+"px"),s(this.value).html(this.$el.val())}}},{key:"_handleRangeMouseupTouchend",value:function(){this._mousedown=!1,this.$el.removeClass("active")}},{key:"_handleRangeBlurMouseoutTouchleave",value:function(){if(!this._mousedown){var t=7+parseInt(this.$el.css("padding-left"))+"px";s(this.thumb).hasClass("active")&&(e.remove(this.thumb),e({targets:this.thumb,height:0,width:0,top:10,easing:"easeOutQuad",marginLeft:t,duration:100})),s(this.thumb).removeClass("active")}}},{key:"_setupThumb",value:function(){this.thumb=document.createElement("span"),this.value=document.createElement("span"),s(this.thumb).addClass("thumb"),s(this.value).addClass("value"),s(this.thumb).append(this.value),this.$el.after(this.thumb)}},{key:"_removeThumb",value:function(){s(this.thumb).remove()}},{key:"_showRangeBubble",value:function(){var t=-7+parseInt(s(this.thumb).parent().css("padding-left"))+"px";e.remove(this.thumb),e({targets:this.thumb,height:30,width:30,top:-30,marginLeft:t,duration:300,easing:"easeOutQuint"})}},{key:"_calcRangeOffset",value:function(){var t=this.$el.width()-15,e=parseFloat(this.$el.attr("max"))||100,i=parseFloat(this.$el.attr("min"))||0;return(parseFloat(this.$el.val())-i)/(e-i)*t}}],[{key:"init",value:function(t,e){return _get(n.__proto__||Object.getPrototypeOf(n),"init",this).call(this,this,t,e)}},{key:"getInstance",value:function(t){return(t.jquery?t[0]:t).M_Range}},{key:"defaults",get:function(){return i}}]),n}();M.Range=t,M.jQueryLoaded&&M.initializeJqueryWrapper(t,"range","M_Range"),t.init(s("input[type=range]"))}(cash,M.anime);

/***/ }),

/***/ 8104:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meiosisSetup = void 0;
var setup_1 = __webpack_require__(2793);
Object.defineProperty(exports, "meiosisSetup", ({ enumerable: true, get: function () { return setup_1.meiosisSetup; } }));


/***/ }),

/***/ 2793:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meiosisSetup = void 0;
const simple_stream_1 = __webpack_require__(706);
const util_1 = __webpack_require__(7489);
const mergerino_1 = __importDefault(__webpack_require__(1038));
const assoc = (prop, value, target) => {
    target[prop] = value;
    return target;
};
const concatIfPresent = (target, source) => source ? target.concat(source) : target;
const assembleInitialState = (nestedComponents) => nestedComponents
    ? Object.keys(nestedComponents).reduce((result, key) => assoc(key, Object.assign({}, nestedComponents[key].initial, assembleInitialState(nestedComponents[key].nested)), result), {})
    : {};
const getInitialState = (app) => Object.assign({}, app.initial, assembleInitialState(app.nested));
const assembleView = (nestedComponents) => nestedComponents
    ? Object.keys(nestedComponents).reduce((result, key) => {
        const nestedApp = nestedComponents[key];
        if (nestedApp.view !== undefined) {
            const view = nestedApp.view;
            return assoc(key, {
                view: (cell, ...args) => view(cell.nest(key), ...args),
                nested: assembleView(nestedApp.nested)
            }, result);
        }
        return result;
    }, {})
    : {};
const getView = (app) => assembleView(app.nested);
const assembleServices = (nestedComponents, getCell = (cell) => cell, getState = (state) => state) => nestedComponents
    ? Object.keys(nestedComponents).reduce((result, key) => {
        var _a;
        const nextGetCell = (cell) => getCell(cell).nest(key);
        const nextGetState = (state) => getState(state)[key];
        const nestedApp = nestedComponents[key];
        return concatIfPresent(result, (_a = nestedApp.services) === null || _a === void 0 ? void 0 : _a.map((service) => ({
            onchange: (state) => (service.onchange ? service.onchange(nextGetState(state)) : state),
            run: (cell) => service.run(nextGetCell(cell))
        }))).concat(assembleServices(nestedApp.nested, nextGetCell, nextGetState));
    }, [])
    : [];
const getServices = (app) => concatIfPresent([], app.services).concat(assembleServices(app.nested));
const baseSetup = ({ stream, app }) => {
    if (!stream) {
        stream = simple_stream_1.simpleStream;
    }
    const safeApp = app || {};
    const initial = getInitialState(safeApp);
    const view = getView(safeApp);
    const createStream = typeof stream === 'function' ? stream : stream.stream;
    const scan = stream.scan;
    const update = createStream();
    const states = scan((state, patch) => (0, mergerino_1.default)(state, patch), initial, update);
    return {
        states,
        update,
        view
    };
};
const nestPatch = (patch, prop) => ({ [prop]: patch });
const nestUpdate = (parentUpdate, prop) => (patch) => parentUpdate(nestPatch(patch, prop));
const nestCell = (states, parentUpdate, components) => (prop) => {
    const nestedStates = states.map((state) => state[prop]);
    const getNestedState = () => states()[prop];
    const nestedUpdate = nestUpdate(parentUpdate, prop);
    const nestedComponents = (0, util_1.get)(components, [prop, 'nested']);
    return {
        states: nestedStates,
        state: getNestedState(),
        getState: getNestedState,
        update: nestedUpdate,
        nest: nestCell(nestedStates, nestedUpdate, nestedComponents),
        nested: nestedComponents
    };
};
/**
 * Helper to setup the Meiosis pattern with [Mergerino](https://github.com/fuzetsu/mergerino).
 *
 * @template S the State type.
 *
 * @param config the Meiosis config for use with Mergerino
 *
 * @returns a stream of Meiosis cells.
 */
const meiosisSetup = (config) => {
    const stream = config === null || config === void 0 ? void 0 : config.stream;
    const app = config === null || config === void 0 ? void 0 : config.app;
    const { states, update, view } = baseSetup({
        stream,
        app
    });
    const nest = nestCell(states, update, view);
    const getState = () => states();
    const getCell = (state) => ({ states, state, getState, update, nest, nested: view });
    const dropRepeats = (0, simple_stream_1.createDropRepeats)(stream);
    if (app) {
        getServices(app).forEach((service) => {
            dropRepeats(states, service.onchange).map((state) => service.run(getCell(state)));
        });
    }
    const cells = dropRepeats(states).map(getCell);
    return cells;
};
exports.meiosisSetup = meiosisSetup;


/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dropRepeats = exports.createDropRepeats = exports.simpleStream = exports.scan = exports.stream = void 0;
/**
 * Creates a stream.
 *
 * @template T the type of the stream's values.
 *
 * @param initial the stream's initial value.
 *
 * @returns the created stream.
 */
const stream = (initial) => {
    const mapFunctions = [];
    let latestValue = initial;
    const createdStream = function (value) {
        if (arguments.length > 0 && !createdStream.ended) {
            latestValue = value;
            for (const i in mapFunctions) {
                // credit @cmnstmntmn for discovering this bug.
                // Make sure to send the latest value.
                // Otherwise, if f1 triggers another update, f2 will be called with value2 and
                // then value1 (old value).
                mapFunctions[i](latestValue);
            }
        }
        return latestValue;
    };
    createdStream.map = (mapFunction) => {
        const newStream = (0, exports.stream)();
        const mappedFunction = (value) => {
            newStream(mapFunction(value));
        };
        mapFunctions.push(mappedFunction);
        newStream.end = (_value) => {
            const idx = mapFunctions.indexOf(mappedFunction);
            newStream.ended = true;
            mapFunctions.splice(idx, 1);
        };
        if (latestValue !== undefined) {
            newStream(mapFunction(latestValue));
        }
        return newStream;
    };
    createdStream.end = (_value) => {
        createdStream.ended = true;
    };
    return createdStream;
};
exports.stream = stream;
/**
 * Creates a new stream that starts with the initial value and, for each value arriving onto the
 * source stream, emits the result of calling the accumulator function with the latest result and
 * the source stream value.
 */
const scan = (accumulator, initial, sourceStream) => {
    const newStream = (0, exports.stream)(initial);
    let accumulated = initial;
    sourceStream.map((value) => {
        accumulated = accumulator(accumulated, value);
        newStream(accumulated);
    });
    return newStream;
};
exports.scan = scan;
exports.simpleStream = {
    stream: exports.stream,
    scan: exports.scan
};
/**
 * Credit: James Forbes (https://james-forbes.com/)
 *
 * Creates a `dropRepeats` function, which returns new stream that drops repeated values from the
 * source stream.
 *
 * @param stream the stream library, defaults to simpleStream.
 */
const createDropRepeats = (stream = exports.simpleStream) => 
/**
 * @param source the source stream.
 * @param onchange function that receives the current state of the source stream and returns the
 * value for which changes will emit onto the returned stream.
 * @returns a stream that does not emit repeated values.
 */
(source, onchange = (state) => state) => {
    const createStream = typeof stream === 'function' ? stream : stream.stream;
    let prev = undefined;
    const result = createStream();
    source.map((state) => {
        const next = onchange(state);
        if (next !== prev) {
            prev = next;
            result(state);
        }
    });
    return result;
};
exports.createDropRepeats = createDropRepeats;
/**
 * `dropRepeats` function that uses `simpleStream`.
 */
exports.dropRepeats = (0, exports.createDropRepeats)();


/***/ }),

/***/ 7489:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateFormFloatValue = exports.updateFormIntValue = exports.updateFormValue = exports.get = void 0;
/**
 * Safely gets a property path from an object. The path is an array. If any property along the path
 * is `undefined`, the function returns `undefined`.
 *
 * @param object the object on which to get the property.
 * @param path the property path.
 *
 * @returns the property value, or `undefined` if any property along the path is `undefined`.
 */
const get = (object, path) => path.reduce((obj, key) => (obj == undefined ? undefined : obj[key]), object);
exports.get = get;
const intoPath = (path, value) => ({
    [path[0]]: path.length === 1 ? value : intoPath(path.slice(1), value)
});
const toPath = (pathOrProp) => Array.isArray(pathOrProp) ? pathOrProp : [pathOrProp];
const updateParseValue = (parseFn, cell, path) => (evt) => {
    const value = parseFn(evt.currentTarget.value);
    if (!isNaN(value)) {
        cell.update(intoPath(toPath(path), value));
    }
};
/**
 * Convenience function to update a form value. Pass the Meiosis cell and the state property (such
 * as `'firstName'`) or path (such as `['person', 'firstName']`) into which to update the value.
 * Returns a function that you can pass to a DOM handler, such as `oninput` (Mithril) or `onInput`
 * (Preact, React). For example:
 *
 * ```js
 * // Using Mithil
 * m('input[type=text]', { oninput: updateFormValue(cell, 'firstName') })
 *
 * // Using Preact/React
 * <input type="text" onInput={updateFormValue(cell, ['person', 'firstName'])}/>
 * ```
 *
 * @param cell the Meiosis cell.
 * @param path the property or path into which to update the value.
 * @param fn (optional) a function to modify the value before updating it.
 *
 * @returns a function that accepts a DOM event and updates the value on the Meiosis state.
 */
const updateFormValue = (cell, path, fn = (value) => value) => (evt) => cell.update(intoPath(toPath(path), fn(evt.currentTarget.value)));
exports.updateFormValue = updateFormValue;
/**
 * Convenience function to update a form value with an Integer value. If the user input does not
 * return a number with `parseInt`, no state change occurs. Pass the Meiosis cell and the state
 * property (such as `'counter'`) or path (such as `['book', 'counter']`) into which to update the
 * value. Returns a function that you can pass to a DOM handler, such as `oninput` (Mithril) or
 * `onInput` (Preact, React). For example:
 *
 * ```js
 * // Using Mithil
 * m('input[type=text]', { oninput: updateFormIntValue(cell, 'counter') })
 *
 * // Using Preact/React
 * <input type="text" onInput={updateFormIntValue(cell, ['book', 'counter'])}/>
 * ```
 *
 * @param cell the Meiosis cell.
 * @param path the property or path into which to update the value.
 *
 * @returns a function that accepts a DOM event and updates the value on the Meiosis state.
 */
const updateFormIntValue = (cell, path) => (evt) => updateParseValue(parseInt, cell, path)(evt);
exports.updateFormIntValue = updateFormIntValue;
/**
 * Convenience function to update a form value with a Float value. If the user input does not return
 * a number with `parseFloat`, no state change occurs. Pass the Meiosis cell and the state property
 * (such as `'pH'`) or path (such as `['water', 'pH']`) into which to update the value. Returns a
 * function that you can pass to a DOM handler, such as `oninput` (Mithril) or `onInput` (Preact,
 * React). For example:
 *
 * ```js
 * // Using Mithil
 * m('input[type=text]', { oninput: updateFormFloatValue(cell, 'pH') })
 *
 * // Using Preact/React
 * <input type="text" onInput={updateFormFloatValue(cell, ['water', 'pH'])}/>
 * ```
 *
 * @param cell the Meiosis cell.
 * @param path the property or path into which to update the value.
 *
 * @returns a function that accepts a DOM event and updates the value on the Meiosis state.
 */
const updateFormFloatValue = (cell, path) => (evt) => updateParseValue(parseFloat, cell, path)(evt);
exports.updateFormFloatValue = updateFormFloatValue;


/***/ }),

/***/ 1038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const e=Object.assign||((e,t)=>(t&&Object.keys(t).forEach(o=>e[o]=t[o]),e)),t=(e,r,s)=>{const c=typeof s;if(s&&"object"===c)if(Array.isArray(s))for(const o of s)r=t(e,r,o);else for(const c of Object.keys(s)){const f=s[c];"function"==typeof f?r[c]=f(r[c],o):void 0===f?e&&!isNaN(c)?r.splice(c,1):delete r[c]:null===f||"object"!=typeof f||Array.isArray(f)?r[c]=f:"object"==typeof r[c]?r[c]=f===r[c]?f:o(r[c],f):r[c]=t(!1,{},f)}else"function"===c&&(r=s(r,o));return r},o=(o,...r)=>{const s=Array.isArray(o);return t(s,s?o.slice():e({},o),r)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);
//# sourceMappingURL=mergerino.min.js.map

/***/ }),

/***/ 8255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 7804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnchorItem: () => (/* binding */ Q),
/* harmony export */   Autocomplete: () => (/* binding */ $),
/* harmony export */   Button: () => (/* binding */ V),
/* harmony export */   ButtonFactory: () => (/* binding */ T),
/* harmony export */   Carousel: () => (/* binding */ F),
/* harmony export */   CarouselItem: () => (/* binding */ E),
/* harmony export */   Chips: () => (/* binding */ D),
/* harmony export */   CodeBlock: () => (/* binding */ K),
/* harmony export */   Collapsible: () => (/* binding */ B),
/* harmony export */   CollapsibleItem: () => (/* binding */ _),
/* harmony export */   Collection: () => (/* binding */ ee),
/* harmony export */   CollectionMode: () => (/* binding */ H),
/* harmony export */   ColorInput: () => (/* binding */ ue),
/* harmony export */   DatePicker: () => (/* binding */ Ie),
/* harmony export */   Dropdown: () => (/* binding */ ae),
/* harmony export */   EmailInput: () => (/* binding */ ve),
/* harmony export */   FileInput: () => (/* binding */ be),
/* harmony export */   FlatButton: () => (/* binding */ R),
/* harmony export */   FloatingActionButton: () => (/* binding */ le),
/* harmony export */   HelperText: () => (/* binding */ k),
/* harmony export */   Icon: () => (/* binding */ I),
/* harmony export */   InputCheckbox: () => (/* binding */ ge),
/* harmony export */   Label: () => (/* binding */ N),
/* harmony export */   LargeButton: () => (/* binding */ S),
/* harmony export */   ListItem: () => (/* binding */ G),
/* harmony export */   Mandatory: () => (/* binding */ w),
/* harmony export */   MapEditor: () => (/* binding */ fe),
/* harmony export */   MaterialBox: () => (/* binding */ xe),
/* harmony export */   ModalPanel: () => (/* binding */ we),
/* harmony export */   NumberInput: () => (/* binding */ pe),
/* harmony export */   Options: () => (/* binding */ ye),
/* harmony export */   Pagination: () => (/* binding */ ke),
/* harmony export */   Parallax: () => (/* binding */ $e),
/* harmony export */   PasswordInput: () => (/* binding */ de),
/* harmony export */   RadioButton: () => (/* binding */ Te),
/* harmony export */   RadioButtons: () => (/* binding */ Ve),
/* harmony export */   RangeInput: () => (/* binding */ he),
/* harmony export */   RoundIconButton: () => (/* binding */ j),
/* harmony export */   SecondaryContent: () => (/* binding */ Y),
/* harmony export */   Select: () => (/* binding */ Se),
/* harmony export */   SmallButton: () => (/* binding */ O),
/* harmony export */   SubmitButton: () => (/* binding */ L),
/* harmony export */   Switch: () => (/* binding */ Re),
/* harmony export */   Tabs: () => (/* binding */ je),
/* harmony export */   TextArea: () => (/* binding */ se),
/* harmony export */   TextInput: () => (/* binding */ ce),
/* harmony export */   TimePicker: () => (/* binding */ Ae),
/* harmony export */   Timeline: () => (/* binding */ Ee),
/* harmony export */   UrlInput: () => (/* binding */ me),
/* harmony export */   camelToSnake: () => (/* binding */ n),
/* harmony export */   compose: () => (/* binding */ i),
/* harmony export */   disable: () => (/* binding */ d),
/* harmony export */   isNumeric: () => (/* binding */ u),
/* harmony export */   join: () => (/* binding */ o),
/* harmony export */   map: () => (/* binding */ l),
/* harmony export */   move: () => (/* binding */ g),
/* harmony export */   padLeft: () => (/* binding */ v),
/* harmony export */   pipe: () => (/* binding */ h),
/* harmony export */   req: () => (/* binding */ p),
/* harmony export */   swap: () => (/* binding */ b),
/* harmony export */   toAttributeString: () => (/* binding */ s),
/* harmony export */   toAttrs: () => (/* binding */ m),
/* harmony export */   uniqueId: () => (/* binding */ t),
/* harmony export */   uuid4: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1497);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
const t=()=>"idxxxxxxxx".replace(/[x]/g,()=>(16*Math.random()|0).toString(16)),a=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),i=(...e)=>t=>e.reduceRight((e,t)=>t(e),t),l=e=>t=>Array.prototype.map.call(t,e),o=e=>t=>Array.prototype.join.call(t,e),n=e=>e.replace(/([A-Z])/g,e=>"-"+e.toLowerCase()),s=e=>e?i(o(""),l(t=>`[${n(t)}="${((e="")=>e.toString().replace(/"/g,"&quot;"))(e[t])}"]`),Object.keys)(e):"",r=["min","max","minLength","maxLength","rows","cols","placeholder","autocomplete","pattern","readOnly","step"],c=e=>r.indexOf(e)>=0,d=({disabled:e})=>e?"[disabled]":"",p=({required:e,isMandatory:t})=>e||t?"[required][aria-required=true]":"",m=e=>(e=>{const t=(a=e,e=>void 0!==a[e]);var a;return Object.keys(e).filter(c).filter(t).reduce((t,a)=>{const i=e[a];return t.push(`[${a.toLowerCase()}=${i}]`),t},[]).join("")})(e)+(e=>e.maxLength?`[data-length=${e.maxLength}]`:"")(e)+d(e)+p(e)+(({autofocus:e})=>"boolean"==typeof e&&e||e&&e()?"[autofocus]":"")(e),u=e=>!isNaN(parseFloat(e))&&isFinite(e),h=(...e)=>t=>e.reduce((e,t)=>t(e),t),v=(e,t=2,a="0")=>(e+="").length>=t?e:new Array(t-e.length+1).join(a)+e,b=(e,t,a)=>{const i=e[t];e[t]=e[a],e[a]=i},g=(e,t,a)=>{const i=e[t];e.splice(t,1),e.splice(a,0,i)};function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},y.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,i,l={},o=Object.keys(e);for(i=0;i<o.length;i++)t.indexOf(a=o[i])>=0||(l[a]=e[a]);return l}const x=["label","id","isMandatory","isActive"],w={view:({attrs:t})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.mandatory",t,"*")},N=()=>({view:t=>{let{attrs:{label:a,id:i,isMandatory:l,isActive:o}}=t,n=f(t.attrs,x);return a?mithril__WEBPACK_IMPORTED_MODULE_0___default()(`label${o?".active":""}${i?`[for=${i}]`:""}`,n,[mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(a),l?mithril__WEBPACK_IMPORTED_MODULE_0___default()(w):void 0]):void 0}}),k=()=>({view:({attrs:{helperText:t,dataError:a,dataSuccess:i,className:l}})=>t||a||i?mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.helper-text",{className:l,dataError:a,dataSuccess:i},t?mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(t):""):void 0}),$=()=>{const a={id:t()};return{view:({attrs:t})=>{const i=t.id||a.id,l=m(t),{label:o,helperText:n,initialValue:s,onchange:r,newRow:c,className:d="col s12",style:p,iconName:u,isMandatory:h}=t;return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field"+(c?".clear":""),{className:c?d+" clear":d,style:p},[u?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",u):"",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input.autocomplete[type=text][tabindex=0]${l}`,{id:i,oncreate:({dom:e})=>{M.Autocomplete.init(e,t)},onchange:r?e=>{e.target&&e.target.value&&r(e.target.value)}:void 0,value:s}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:o,id:i,isMandatory:h,isActive:s}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(k,{helperText:n})])}}},C=["iconName"],I=()=>({view:t=>{let{attrs:{iconName:a}}=t,i=f(t.attrs,C);return mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",i,a)}}),A=["modalId","tooltip","tooltipPostion","iconName","iconClass","label","attr"],T=(t,a="")=>()=>{const i=`${t}${a}`;return{view:({attrs:t})=>{const{modalId:a,tooltip:l,tooltipPostion:o,iconName:n,iconClass:r,label:c,attr:d}=t,p=f(t,A);return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`${i}${a?`.modal-trigger[href=#${a}]`:""}${l?`.tooltipped[data-position=${o||"top"}][data-tooltip=${l}]`:""}${s(d)}`,p,n?mithril__WEBPACK_IMPORTED_MODULE_0___default()(I,{iconName:n,className:r||"left"}):void 0,c||void 0)}}},V=T("a.waves-effect.waves-light.btn"),S=T("a.waves-effect.waves-light.btn-large"),O=T("a.waves-effect.waves-light.btn-small"),R=T("a.waves-effect.waves-teal.btn-flat"),j=T("button.btn-floating.btn-large.waves-effect.waves-light"),L=T("button.btn.waves-effect.waves-light","[type=submit]"),E=()=>({view:({attrs:{href:t,src:a}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.carousel-item",{href:t},mithril__WEBPACK_IMPORTED_MODULE_0___default()(`img[src=${a}]`))}),F=()=>({view:({attrs:t})=>{const{items:a}=t;return a&&a.length>0?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".carousel",{oncreate:({dom:e})=>{M.Carousel.init(e,t)}},a.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(E,t))):void 0}}),D=()=>({oncreate:({attrs:e,dom:t})=>{const{onchange:a,onChipAdd:i,onChipDelete:l}=e,o=M.Chips.getInstance(t.children[0]),n=i?i.bind(o):void 0;e.onChipAdd=function(e,t){a&&a(this.chipsData),n&&n(e,t)};const s=l?l.bind(o):void 0;e.onChipDelete=function(e,t){a&&a(this.chipsData),s&&s(e,t)},M.Chips.init(t.children[0],e)},onupdate:({dom:e,attrs:{data:t}})=>{if(!t||0===t.length)return;const a=M.Chips.getInstance(e.children[0]);t.forEach(e=>a.addChip(e))},view:({attrs:{placeholder:t,required:a,isMandatory:i=a,data:l,className:o="col s12",label:n,helperText:s}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field",{className:o},[mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.chips.chips-autocomplete${t?".chips-placeholder":""}${l?".chips-initial":""}`),n?mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:n,isMandatory:i,className:"active"}):void 0,s?mithril__WEBPACK_IMPORTED_MODULE_0___default()(k,{helperText:s}):void 0])}),K=()=>({view:({attrs:t})=>{const{newRow:a,code:i,language:l}=t,o=l||"lang-TypeScript",n=o.replace("lang-",""),s=i instanceof Array?i.join("\n"):i;return mithril__WEBPACK_IMPORTED_MODULE_0___default()("pre.codeblock"+(a?".clear":""),t,[mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",mithril__WEBPACK_IMPORTED_MODULE_0___default()("label",n)),mithril__WEBPACK_IMPORTED_MODULE_0___default()(`code.${o}`,s)])}}),_=()=>({view:({attrs:{header:t,body:a,active:i,iconName:l}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(i?"li.active":"li",[t||l?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".collapsible-header",[l?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",l):void 0,t?"string"==typeof t?mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",t):t:void 0]):void 0,a?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".collapsible-body",a):void 0])}),B=()=>({oncreate:({dom:e,attrs:t})=>{M.Collapsible.init(e,t)},view:({attrs:t})=>{const{items:a,class:i,className:l,style:o,id:n}=t;return a&&a.length>0?mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.collapsible",{class:i||l,style:o,id:n},a.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(_,t))):void 0}}),q=["header","items","mode"],P=["title","active","href"],U=["items","header"],z=["items","header","mode"];var H;!function(e){e[e.BASIC=0]="BASIC",e[e.LINKS=1]="LINKS",e[e.AVATAR=2]="AVATAR"}(H||(H={}));const W=e=>e&&/https?:\/\//.test(e),Y=()=>({view:({attrs:t})=>{const{href:a,iconName:i="send",onclick:l,style:o={cursor:"pointer"}}=t,n={href:a,style:o,className:"secondary-content",onclick:l?()=>l(t):void 0};return W(a)||!a?mithril__WEBPACK_IMPORTED_MODULE_0___default()("a[target=_]",n,mithril__WEBPACK_IMPORTED_MODULE_0___default()(I,{iconName:i})):mithril__WEBPACK_IMPORTED_MODULE_0___default()((mithril__WEBPACK_IMPORTED_MODULE_0___default().route).Link,n,mithril__WEBPACK_IMPORTED_MODULE_0___default()(I,{iconName:i}))}}),Z=(e="")=>/\./.test(e),G=()=>({view:({attrs:{item:t,mode:a}})=>{const{title:i,content:l="",active:o,iconName:n,avatar:s,className:r,onclick:c}=t;return a===H.AVATAR?mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.collection-item.avatar"+(o?".active":""),{onclick:c?()=>c(t):void 0},[Z(s)?mithril__WEBPACK_IMPORTED_MODULE_0___default()("img.circle",{src:s}):mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.circle",{className:r},s),mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.title",i),mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(l)),mithril__WEBPACK_IMPORTED_MODULE_0___default()(Y,t)]):mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.collection-item"+(o?".active":""),n?mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",[i,mithril__WEBPACK_IMPORTED_MODULE_0___default()(Y,t)]):i)}}),J=()=>({view:t=>{let{attrs:{header:a,items:i,mode:l=H.BASIC}}=t,o=f(t.attrs,q);const n=i.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(G,{key:t.id,item:t,mode:l}));return a?mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.collection.with-header",o,[mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.collection-header",mithril__WEBPACK_IMPORTED_MODULE_0___default()("h4",a)),n]):mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.collection",o,n)}}),Q=()=>({view:({attrs:{item:t}})=>{const{title:a,active:i,href:l}=t,o=y({},f(t,P),{className:"collection-item "+(i?"active":""),href:l});return W(l)||!l?mithril__WEBPACK_IMPORTED_MODULE_0___default()("a[target=_]",o,a):mithril__WEBPACK_IMPORTED_MODULE_0___default()((mithril__WEBPACK_IMPORTED_MODULE_0___default().route).Link,o,a)}}),X=()=>({view:t=>{let{attrs:{items:a,header:i}}=t,l=f(t.attrs,U);return i?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".collection.with-header",l,[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".collection-header",mithril__WEBPACK_IMPORTED_MODULE_0___default()("h4",i)),a.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(Q,{key:t.id,item:t}))]):mithril__WEBPACK_IMPORTED_MODULE_0___default()(".collection",l,a.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(Q,{key:t.id,item:t})))}}),ee=()=>({view:t=>{let{attrs:{items:a,header:i,mode:l=H.BASIC}}=t,o=f(t.attrs,z);return i||a&&a.length>0?l===H.LINKS?mithril__WEBPACK_IMPORTED_MODULE_0___default()(X,y({header:i,items:a},o)):mithril__WEBPACK_IMPORTED_MODULE_0___default()(J,y({header:i,items:a,mode:l},o)):void 0}}),te=["key","label","onchange","disabled","items","iconName","helperText","style","className"],ae=()=>{const a={};return{oninit:({attrs:{id:e=t(),initialValue:i,checkedId:l}})=>{a.id=e,a.initialValue=i||l},view:t=>{let{attrs:{key:i,label:l,onchange:o,disabled:n=!1,items:s,iconName:r,helperText:c,style:d,className:p="col s12"}}=t,m=f(t.attrs,te);const{id:u,initialValue:h}=a,v=h?s.filter(e=>e.id?e.id===h:e.label===h).shift():void 0,b=v?v.label:l||"Select";return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field",{className:p,key:i,style:d},[r?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",r):void 0,mithril__WEBPACK_IMPORTED_MODULE_0___default()(k,{helperText:c}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(`a.dropdown-trigger.btn.truncate[href=#][data-target=${u}]${n?"[disabled]":""}`,{className:"col s12",style:d||(r?"margin: 0.2em 0 0 3em;":void 0),oncreate:({dom:e})=>{M.Dropdown.init(e,m)}},b),mithril__WEBPACK_IMPORTED_MODULE_0___default()(`ul.dropdown-content[id=${u}]`,s.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("li"+(t.divider?".divider[tabindex=-1]":""),t.divider?void 0:mithril__WEBPACK_IMPORTED_MODULE_0___default()("a",{onclick:o?()=>{a.initialValue=t.id||t.label,o(a.initialValue)}:void 0},[t.iconName?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",t.iconName):void 0,t.label]))))])}}},ie=["className","iconName","iconClass","position","style","buttons"],le=()=>({view:t=>{let{attrs:{className:a,iconName:i,iconClass:l="large",position:o,style:n=("left"===o||"inline-left"===o?"position: absolute; display: inline-block; left: 24px;":"right"===o||"inline-right"===o?"position: absolute; display: inline-block; right: 24px;":void 0),buttons:s}}=t,r=f(t.attrs,ie);const c=mithril__WEBPACK_IMPORTED_MODULE_0___default()(".fixed-action-btn",{style:n,oncreate:({dom:e})=>M.FloatingActionButton.init(e,r)},[mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.btn-floating.btn-large",{className:a},mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",{classNames:l},i)),s?mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul",s.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("li",mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.btn-floating",{className:t.className,onclick:e=>t.onClick&&t.onClick(e)},mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",{className:t.iconClass},t.iconName))))):void 0]);return"inline-right"===o||"inline-left"===o?mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{style:"position: relative; height: 70px;"},c):c}}),oe=["className","helperText","iconName","id","initialValue","isMandatory","label","onchange","style"],ne=["className","dataError","dataSuccess","helperText","iconName","id","initialValue","isMandatory","label","maxLength","newRow","onchange","onkeydown","onkeypress","onkeyup","style","validate"],se=()=>{const a={id:t()};return{view:({attrs:t})=>{const{className:i="col s12",helperText:l,iconName:o,id:n=a.id,initialValue:s,isMandatory:r,label:c,onchange:d,style:p}=t,u=f(t,oe),h=m(u);return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field",{className:i,style:p},[o?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",o):"",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`textarea.materialize-textarea[tabindex=0][id=${n}]${h}`,{oncreate:({dom:e})=>{M.textareaAutoResize(e),t.maxLength&&M.CharacterCounter.init(e)},onchange:d?e=>{const t=e.target;d(t&&"string"==typeof t.value?t.value:"")}:void 0,value:s}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:c,id:n,isMandatory:r,isActive:s||t.placeholder}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(k,{helperText:l})])}}},re=(a,i="")=>()=>{const l={id:t()},o=e=>{const t=e.value;return!t||"number"!==a&&"range"!==a?t:+t},n=(e,t)=>{e.setCustomValidity("boolean"==typeof t?t?"":"Custom validation failed":t)};return{view:({attrs:t})=>{const{className:s="col s12",dataError:r,dataSuccess:c,helperText:d,iconName:p,id:u=l.id,initialValue:h,isMandatory:v,label:b,maxLength:g,newRow:y,onchange:x,onkeydown:w,onkeypress:$,onkeyup:C,style:I,validate:A}=t,T=f(t,ne),V=m(T);return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.input-field${y?".clear":""}${i}`,{className:s,style:I},[p?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",p):void 0,mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input.validate[type=${a}][tabindex=0][id=${u}]${V}`,{oncreate:({dom:e})=>{(({autofocus:e})=>!!e&&("boolean"==typeof e?e:e()))(t)&&e.focus(),g&&M.CharacterCounter.init(e),"range"===a&&M.Range.init(e)},onkeyup:C?e=>{C(e,o(e.target))}:void 0,onkeydown:w?e=>{w(e,o(e.target))}:void 0,onkeypress:$?e=>{$(e,o(e.target))}:void 0,onupdate:A?({dom:e})=>{const t=e;n(t,A(o(t),t))}:void 0,onchange:e=>{const t=e.target;if(t){const e=o(t);x&&x(e),A&&n(t,A(e,t))}},value:h}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:b,id:u,isMandatory:v,isActive:!(void 0===h&&!t.placeholder&&"number"!==a&&"color"!==a&&"range"!==a)}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(k,{helperText:d,dataError:r,dataSuccess:c})])}}},ce=re("text"),de=re("password"),pe=re("number"),me=re("url"),ue=re("color"),he=re("range",".range-field"),ve=re("email"),be=()=>{let t,a=!1;return{view:({attrs:i})=>{const{multiple:l,disabled:o,initialValue:n,placeholder:s,onchange:r,className:c="col s12",accept:d,label:p="File"}=i,m=d?d instanceof Array?d.join(", "):d:void 0,u=m?`[accept=${m}]`:"",h=l?"[multiple]":"",v=o?"[disabled]":"",b=s?`[placeholder=${s}]`:"";return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".file-field.input-field",{className:i.class||c},[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".btn",[mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",p),mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input[type=file]${h}${v}${u}`,{onchange:r?e=>{const t=e.target;t&&t.files&&r&&(a=!0,r(t.files))}:void 0})]),mithril__WEBPACK_IMPORTED_MODULE_0___default()(".file-path-wrapper",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input.file-path.validate${b}[type=text]`,{oncreate:({dom:e})=>{t=e,n&&(t.value=n)}})),(a||n)&&mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.waves-effect.waves-teal.btn-flat",{style:"float: right;position: relative;top: -3rem; padding: 0",onclick:()=>{a=!1,t.value="",r&&r({})}},mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons","clear"))])}}},ge=()=>({view:({attrs:{className:t="col s12",onchange:a,label:i,checked:l,disabled:o,description:n}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{className:t},mithril__WEBPACK_IMPORTED_MODULE_0___default()("label",[mithril__WEBPACK_IMPORTED_MODULE_0___default()("input[type=checkbox][tabindex=0]",{checked:l,disabled:o,onclick:a?e=>{e.target&&void 0!==e.target.checked&&a(e.target.checked)}:void 0}),i?"string"==typeof i?mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",i):i:void 0]),n&&mithril__WEBPACK_IMPORTED_MODULE_0___default()(k,{className:"input-checkbox-desc",helperText:n}))}),ye=()=>{const t={},a=e=>t.checkedIds.indexOf(e)>=0;return{oninit:({attrs:{initialValue:e,checkedId:a}})=>{const i=a||e;t.checkedId=a,t.checkedIds=i?i instanceof Array?[...i]:[i]:[]},view:({attrs:{label:i,id:l,options:o,checkedId:n,description:s,className:r="col s12",disabled:c,checkboxClass:d,newRow:p,isMandatory:m,onchange:u}})=>{n&&t.checkedId!==n&&(t.checkedId=n,t.checkedIds=n instanceof Array?n:[n]);const h=u?(e,a)=>{const i=t.checkedIds.filter(t=>t!==e);a&&i.push(e),t.checkedIds=i,u(i)}:void 0;return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div"+(p?".clear":""),{className:r},[mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{className:"input-field options"},mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{id:l,label:i,isMandatory:m})),mithril__WEBPACK_IMPORTED_MODULE_0___default()(k,{helperText:s}),...o.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(ge,{disabled:c||t.disabled,label:t.label,onchange:h?e=>h(t.id,e):void 0,className:t.className||d,checked:a(t.id),description:t.description}))])}}},fe=()=>{const a=e=>i.curKey=i.id=e,i={elementId:t(),id:"",curKey:"",kvc:(t,a,i)=>{const{keyClass:l=".col.s4",valueClass:o=".col.s8"}=i,n=a instanceof Array?a.join(", "):"boolean"==typeof a?mithril__WEBPACK_IMPORTED_MODULE_0___default()(ge,{label:" ",checked:a,disabled:!0,className:"checkbox-in-collection"}):a.toString();return{title:mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row",{style:"margin-bottom: 0"},[mithril__WEBPACK_IMPORTED_MODULE_0___default()(l,mithril__WEBPACK_IMPORTED_MODULE_0___default()("b",t)),mithril__WEBPACK_IMPORTED_MODULE_0___default()(o,n)])}}},l=()=>{i.id="",i.curKey=""};return{oninit:({attrs:{keyValueConverter:e,id:t}})=>{e&&(i.kvc=e),t&&(i.elementId=t)},view:({attrs:{className:t="col s12",disabled:o,disallowArrays:n,header:s,iconName:r,iconNameKey:c=(r?"label":void 0),isMandatory:d,label:p,labelKey:m="Key",labelValue:u="Value",properties:h,keyClass:v,valueClass:b,onchange:g,falsy:y=["false"],truthy:f=["true"]}})=>{const x=()=>g?g(h):void 0,w=((e,t)=>Object.keys(e).map(t=>({key:t,value:e[t]})).map(e=>((e,t)=>{const l=t.onclick;return t.id=t.id||e,t.active=e===i.curKey,t.onclick=l?()=>a(e)&&l(t):()=>a(e),t})(e.key,i.kvc(e.key,e.value,{keyClass:t.keyClass,valueClass:t.valueClass}))))(h,{keyClass:v,valueClass:b}),k=i.curKey,$=h[k],M="boolean"==typeof $||"number"==typeof $?$:$?$ instanceof Array?`[${$.join(", ")}]`:$:"",C=i.elementId;return[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".map-editor",mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field",{className:t,style:"min-height: 1.5em;"},[r?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",r):"",mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:p,isMandatory:d,isActive:w.length>0}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(ee,{id:C,items:w,mode:H.LINKS,header:s})])),o?void 0:[mithril__WEBPACK_IMPORTED_MODULE_0___default()(ce,{label:m,iconName:c,className:"col s5",initialValue:k,onchange:e=>{i.curKey=e,i.id&&(delete h[i.id],h[e]=$,i.id=e),x()}}),"string"==typeof M?mithril__WEBPACK_IMPORTED_MODULE_0___default()(se,{label:u,initialValue:M,className:"col s7",onchange:e=>{const t=(i=y,f.indexOf(a=e)>=0||!(i.indexOf(a)>=0)&&void 0);var a,i;const l=void 0===t&&/^\s*\d+\s*$/i.test(e)?+e:void 0;h[k]="boolean"==typeof t?t:"number"==typeof l?l:((e,t=!1)=>{if(t)return e;if(!e)return;const a=/\s*\[(.*)\]\s*/gi.exec(e);return a&&2===a.length?a[1].split(",").map(e=>e.trim()).map(e=>/^\d+$/g.test(e)?+e:e):void 0})(e,n)||e,x()}}):"number"==typeof M?mithril__WEBPACK_IMPORTED_MODULE_0___default()(pe,{label:u,initialValue:M,className:"col s7",onchange:e=>{h[k]=e,x()}}):mithril__WEBPACK_IMPORTED_MODULE_0___default()(ge,{label:u,checked:M,className:"input-field col s7",onchange:e=>{h[k]=e,x()}}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(".col.s12.right-align",[mithril__WEBPACK_IMPORTED_MODULE_0___default()(R,{iconName:"add",onclick:l}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(R,{iconName:"delete",disabled:!k,onclick:()=>{delete h[k],l(),x()}})])]]}}},xe=()=>({oncreate:({dom:e,attrs:t})=>{M.Materialbox.init(e,t)},view:({attrs:t})=>{const{src:a,width:i,height:l}=t;return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`img.materialboxed[src=${a}]${i?`[width=${i}]`:""}${l?`[height=${l}]`:""}`,t)}}),we=()=>({oncreate:({dom:e,attrs:{options:t,onCreate:a}})=>{const i=M.Modal.init(e,t);a&&a(i)},view:({attrs:{id:t,title:a,description:i,fixedFooter:l,bottomSheet:o,buttons:n,richContent:s}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.modal${l?".modal-fixed-footer":""}${o?".bottom-sheet":""}[id=${t}]`,[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".modal-content",[mithril__WEBPACK_IMPORTED_MODULE_0___default()("h4",a),s&&"string"==typeof i?mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(i||""):"string"==typeof i?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",i):i]),n?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".modal-footer",n.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(R,y({},t,{className:"modal-close"})))):void 0])}),Ne=()=>({view:({attrs:{title:t,href:a,active:i,disabled:l}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("li",{className:i?"active":l?"disabled":"waves-effect"},"number"==typeof t?mithril__WEBPACK_IMPORTED_MODULE_0___default()((mithril__WEBPACK_IMPORTED_MODULE_0___default().route).Link,{href:a},t):t)}),ke=()=>{const t={pagIndex:0};return{view:({attrs:{items:a,curPage:i=1,size:l=Math.min(9,a.length)}})=>{const{pagIndex:o}=t,n=o*l,s=n+l,r=o>0,c=s<a.length,d=[{title:mithril__WEBPACK_IMPORTED_MODULE_0___default()("a",{onclick:()=>r&&t.pagIndex--},mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons","chevron_left")),disabled:!r},...a.filter((e,t)=>n<=t&&t<s),{title:mithril__WEBPACK_IMPORTED_MODULE_0___default()("a",{onclick:()=>c&&t.pagIndex++},mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons","chevron_right")),disabled:!c}];return mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.pagination",d.map((t,a)=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(Ne,y({title:n+a},t,{active:n+a===i}))))}}},$e=()=>({oncreate:({dom:e,attrs:t})=>{M.Parallax.init(e,t)},view:({attrs:{src:t}})=>t?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".parallax-container",mithril__WEBPACK_IMPORTED_MODULE_0___default()(".parallax",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`img[src=${t}]`))):void 0}),Me=["label","helperText","initialValue","newRow","className","iconName","isMandatory","onchange","disabled"],Ce=["label","helperText","initialValue","newRow","className","iconName","isMandatory","onchange","disabled"],Ie=()=>{const a={id:t()};return{view:t=>{let{attrs:{label:i,helperText:l,initialValue:o,newRow:n,className:s="col s12",iconName:r,isMandatory:c,onchange:d,disabled:p}}=t,u=f(t.attrs,Me);const h=a.id,v=m(u),b=d?()=>a.dp&&d(a.dp.date):void 0;return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field"+(n?".clear":""),{className:s,onremove:()=>a.dp&&a.dp.destroy()},[r?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",r):"",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input.datepicker[type=text][tabindex=0][id=${h}]${v}${p?"[disabled]":""}`,{oncreate:({dom:e})=>{a.dp=M.Datepicker.init(e,y({format:"yyyy/mm/dd",showClearBtn:!0,setDefaultDate:!0,defaultDate:o?new Date(o):new Date},u,{onClose:b}))}}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:i,id:h,isMandatory:c,isActive:!!o}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(k,{helperText:l})])}}},Ae=()=>{const a={id:t()};return{view:t=>{let{attrs:{label:i,helperText:l,initialValue:o,newRow:n,className:s="col s12",iconName:r,isMandatory:c,onchange:d,disabled:p}}=t,u=f(t.attrs,Ce);const h=a.id,v=m(u),b=n?".clear":"",g=new Date,x=d?()=>a.tp&&d(a.tp.time||o||`${g.getHours()}:${g.getMinutes()}`):void 0;return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.input-field.timepicker${b}`,{className:s,onremove:()=>a.tp&&a.tp.destroy()},[r?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",r):"",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input[type=text][tabindex=0][id=${h}]${v}${p?"[disabled]":""}`,{value:o,oncreate:({dom:e})=>{a.tp=M.Timepicker.init(e,y({twelveHour:!1,showClearBtn:!0,defaultTime:o},u,{onCloseEnd:x}))}}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:i,id:h,isMandatory:c,isActive:o}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(k,{helperText:l})])}}},Te=()=>({view:({attrs:{id:t,groupId:a,label:i,onchange:l,className:o="col s12",checked:n,disabled:s}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{className:o},mithril__WEBPACK_IMPORTED_MODULE_0___default()("label",[mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input[type=radio][tabindex=0][name=${a}]${n?"[checked=checked]":""}${s?"[disabled]":""}`,{onclick:l?()=>l(t):void 0}),mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(i))]))}),Ve=()=>{const a={groupId:t()};return{oninit:({attrs:{checkedId:e,initialValue:t}})=>{a.oldCheckedId=e,a.checkedId=e||t},view:({attrs:{id:t,checkedId:i,newRow:l,className:o="col s12",label:n="",disabled:s,description:r,options:c,isMandatory:d,checkboxClass:p,onchange:m}})=>{a.oldCheckedId!==i&&(a.oldCheckedId=a.checkedId=i);const{groupId:u,checkedId:h}=a,v=e=>{a.checkedId=e,m&&m(e)};return l&&(o+=" clear"),mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{id:t,className:o},[mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{className:"input-field options"},mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{id:t,label:n,isMandatory:d})),r?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p.helper-text",mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(r)):"",...c.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(Te,y({},t,{onchange:v,groupId:u,disabled:s,className:p,checked:t.id===h})))])}}},Se=()=>{const t={},a=e=>e.map(e=>e.id).join(""),i=(e,t,a=!1)=>a||(t instanceof Array&&(e||"number"==typeof e)?t.indexOf(e)>=0:t===e);return{oninit:({attrs:{checkedId:e,initialValue:i,options:l}})=>{t.ids=a(l);const o=e||i;t.checkedId=e instanceof Array?[...e]:e,t.initialValue=null!=o?o instanceof Array?o.filter(e=>null!=e):[o]:[]},view:({attrs:{id:l,newRow:o,className:n="col s12",checkedId:s,key:r,options:c,multiple:d,label:p,helperText:m,placeholder:h="",isMandatory:v,iconName:b,disabled:g,classes:y="",dropdownOptions:f,onchange:x}})=>{t.checkedId!==s&&(t.initialValue=s?s instanceof Array?s:[s]:void 0);const{initialValue:w}=t,$=x?d?()=>{const e=t.instance&&t.instance.getSelectedValues(),a=e?e.length>0&&u(e[0])?e.map(e=>+e):e.filter(e=>null!==e||void 0!==e):void 0;t.initialValue=a||[],x(t.initialValue)}:e=>{if(e&&e.currentTarget){const a=e.currentTarget,i=u(a.value)?+a.value:a.value;t.initialValue=void 0!==typeof i?[i]:[]}t.initialValue&&x(t.initialValue)}:void 0;o&&(n+=" clear");const C=!c.some(e=>i(e.id,w)),I=c.reduce((e,t)=>(t.group&&e.indexOf(t.group)<0&&e.push(t.group),e),[]);return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field.select-space",{className:n,key:r,oncreate:d?({dom:e})=>t.wrapper=e:void 0},[b&&mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",b),mithril__WEBPACK_IMPORTED_MODULE_0___default()("select",{id:l,title:p,disabled:g,multiple:d,oncreate:({dom:e})=>{t.instance=M.FormSelect.init(e,{classes:y,dropdownOptions:f})},onupdate:({dom:e})=>{if(d){const e=b?1:0;!t.inputEl&&t.wrapper&&t.wrapper.childNodes&&t.wrapper.childNodes.length>0&&t.wrapper.childNodes[e].childNodes&&t.wrapper.childNodes[e].childNodes[0]&&(t.inputEl=t.wrapper.childNodes[e].childNodes[0]),t.inputEl&&t.inputEl.value&&t.inputEl.value.startsWith(`${h}, `)&&(t.inputEl.value=t.inputEl.value.replace(`${h}, `,""))}const i=a(c);let l=s&&t.checkedId!==s.toString();t.ids!==i&&(t.ids=i,l=!0),(t.checkedId instanceof Array&&s instanceof Array?t.checkedId.join()!==s.join():t.checkedId!==s)&&(t.checkedId=s,l=!0),l&&(t.instance=M.FormSelect.init(e,{classes:y,dropdownOptions:f}))},onchange:$},mithril__WEBPACK_IMPORTED_MODULE_0___default()("option",{value:"",disabled:!0,selected:!!C||void 0},h),0===I.length?c.map((t,a)=>{var l;return mithril__WEBPACK_IMPORTED_MODULE_0___default()("option",{value:t.id,title:t.title||void 0,disabled:t.disabled?"true":void 0,"data-icon":t.img||void 0,selected:i(t.id,w,0===a&&C&&!h)},null==(l=t.label)?void 0:l.replace("&amp;","&"))}):I.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("optgroup",{label:t},c.filter(e=>e.group===t).map((t,a)=>{var l;return mithril__WEBPACK_IMPORTED_MODULE_0___default()("option",{value:t.id,title:t.title||void 0,disabled:t.disabled?"true":void 0,"data-icon":t.img||void 0,selected:i(t.id,w,0===a&&C&&!h)},null==(l=t.label)?void 0:l.replace("&amp;","&"))})))),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:p,isMandatory:v}),m&&mithril__WEBPACK_IMPORTED_MODULE_0___default()(k,{helperText:m})])}}},Oe=["label","left","right","disabled","newRow","onchange","checked","isMandatory","className"],Re=()=>{const a={id:t()};return{view:({attrs:t})=>{const i=t.id||a.id,{label:l,left:o,right:n,disabled:s,newRow:r,onchange:c,checked:p,isMandatory:m,className:u="col s12"}=t,h=f(t,Oe);return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div"+(r?".clear":""),{className:u},[l?mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:l||"",id:i,isMandatory:m}):void 0,mithril__WEBPACK_IMPORTED_MODULE_0___default()(".switch",h,mithril__WEBPACK_IMPORTED_MODULE_0___default()("label",[o||"Off",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input[id=${i}][type=checkbox]${d({disabled:s})}${p?"[checked]":""}`,{onclick:c?e=>{e.target&&void 0!==e.target.checked&&c(e.target.checked)}:void 0}),mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.lever"),n||"On"]))])}}},je=()=>{const t={},a=(e,t)=>t||e.replace(/ /g,"").toLowerCase();return{view:({attrs:{tabWidth:i,selectedTabId:l,tabs:o,className:n,style:s,duration:r,onShow:c,swipeable:d,responsiveThreshold:p}})=>{const m=o.filter(e=>e.active).shift(),u=l||(m?a(m.title,m.id):"");return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row",[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".col.s12",mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.tabs"+("fill"===i?".tabs-fixed-width":""),{className:n,style:s,oncreate:({dom:e})=>{t.instance=M.Tabs.init(e,{duration:r,onShow:c,responsiveThreshold:p,swipeable:d})},onupdate:()=>{if(u){const e=document.getElementById(`tab_${u}`);e&&e.click()}},onremove:()=>t.instance.destroy()},o.map(({className:t,title:l,id:n,active:s,disabled:r,target:c,href:d})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(`li.tab${r?".disabled":""}${"fixed"===i?`.col.s${Math.floor(12/o.length)}`:""}`,{className:t},mithril__WEBPACK_IMPORTED_MODULE_0___default()(`a[id=tab_${a(l,n)}]${s?".active":""}`,{target:c,href:d||`#${a(l,n)}`},l))))),o.filter(({href:e})=>void 0===e).map(({id:t,title:i,vnode:l,contentClass:o})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.col.s12[id=${a(i,t)}]`,{className:o},l))])}}},Le=()=>({view:({attrs:{id:t,title:a,datetime:i,active:l,content:o,iconName:n,dateFormatter:s,timeFormatter:r,onSelect:c}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(`li${l?".active":""}${t?`[id=${t}]`:""}`,{onclick:c?()=>c({id:t,title:a,datetime:i,active:l,content:o}):void 0,style:c?"cursor: pointer;":void 0},[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mm_time",{datetime:i},[mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",s(i)),mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",r(i))]),n?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mm_icon",mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",n)):void 0,mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mm_label",[a?"string"==typeof a?mithril__WEBPACK_IMPORTED_MODULE_0___default()("h5",a):a:void 0,o?"string"==typeof o?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",o):o:void 0])])}),Ee=()=>{const t=e=>`${e.getUTCDate()}/${e.getUTCMonth()+1}/${e.getUTCFullYear()}`,a=e=>`${v(e.getUTCHours())}:${v(e.getUTCMinutes())}`;return{view:({attrs:{items:i,onSelect:l,timeFormatter:o=a,dateFormatter:n=t}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.mm_timeline",i.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(Le,y({onSelect:l,dateFormatter:n,timeFormatter:o},t))))}};
//# sourceMappingURL=index.modern.js.map


/***/ }),

/***/ 1782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FormFieldFactory: () => (/* binding */ K),
  LayoutForm: () => (/* binding */ ae),
  ReadonlyComponent: () => (/* binding */ G),
  RepeatList: () => (/* binding */ Z),
  SlimdownView: () => (/* binding */ Y),
  addRule: () => (/* reexport */ e),
  capitalizeFirstLetter: () => (/* binding */ S),
  deepCopy: () => (/* binding */ R),
  flatten: () => (/* binding */ T),
  formatExpression: () => (/* binding */ H),
  getPath: () => (/* binding */ A),
  isComponentType: () => (/* binding */ N),
  labelResolver: () => (/* binding */ J),
  padLeft: () => (/* binding */ j),
  range: () => (/* binding */ z),
  registerPlugin: () => (/* binding */ te),
  render: () => (/* reexport */ slimdown_modern_n),
  resolveExpression: () => (/* binding */ M),
  stripSpaces: () => (/* binding */ q),
  toHourMin: () => (/* binding */ $)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/index.js
var mithril = __webpack_require__(1497);
var mithril_default = /*#__PURE__*/__webpack_require__.n(mithril);
;// CONCATENATED MODULE: ./node_modules/.pnpm/slimdown-js@0.7.2/node_modules/slimdown-js/dist/slimdown.modern.mjs
const t=[[/\r\n/g,"\n"],[/\n(#+)(.*)/g,(t,n,e="")=>{const r=n.length;return`<h${r}>${e.trim()}</h${r}>`}],[/!\[([^\[]+)\]\((?:javascript:)?([^\)]+)\)/g,'<img src="$2" alt="$1">'],[/\[([^\[]+)\]\((?:javascript:)?([^\)]+)\)/g,'<a href="$2">$1</a>'],[/([^\\])(\*\*|__)(.*?(_|\*)?)\2/g,"$1<strong>$3</strong>"],[/([^\\])(\*|_)(.*?)\2/g,"$1<em>$3</em>"],[/\\_/g,"&#95;"],[/\~\~(.*?)\~\~/g,"<del>$1</del>"],[/\:\"(.*?)\"\:/g,"<q>$1</q>"],[/\n\s*```\n([^]*?)\n\s*```\s*\n/g,"\n<pre>$1</pre>"],[/`(.*?)`/g,(t,n)=>`<code>${(t=>{t=t.replace(/\&/g,"&amp;");const n="'#<>`*-~_=:\"![]()nt",e=n.length;for(let r=0;r<e;r++)t=t.replace(RegExp("\\"+n[r],"g"),t=>`&#${t.charCodeAt(0)};`);return t})(n)}</code>`],[/\n(\*|\-|\+)(.*)/g,(t,n,e="")=>`<ul>\n\t<li>${e.trim()}</li>\n</ul>`],[/\n[0-9]+\.(.*)/g,(t,n="")=>`<ol>\n\t<li>${n.trim()}</li>\n</ol>`],[/\n(&gt;|\>)(.*)/g,(t,n,e="")=>`\n<blockquote>${e.trim()}</blockquote>`],[/(\^)(.*?)\1/g,"<sup>$2</sup>"],[/(\~)(.*?)\1/g,"<sub>$2</sub>"],[/\n-{5,}/g,"\n<hr />"],[/( *\|[^\n]+\|\r?\n)((?: *\|:?[ -]+:?)+ *\|)(\n(?: *\|[^\n]+\|\r?\n?)*)?/g,(t,n,e,r)=>{const l=e.split("|").filter((t,n,e)=>n>0&&n<e.length-1).map(t=>/:-+:/g.test(t)?"center":/-+:/g.test(t)?"right":/:-+/.test(t)?"left":""),g=t=>{const n=l[t];return n?` align="${n}"`:""};return`\n<table><tbody><tr>${n.split("|").map(t=>t.trim()).filter(t=>t&&t.length).map((t,n)=>`<th${g(n)}>${t}</th>`).join("")}</tr>${r.split("\n").map(t=>t.trim()).filter(t=>t&&t.length).map(t=>`<tr>${t.split("|").filter((t,n,e)=>n>0&&n<e.length-1).map((t,n)=>`<td${g(n)}>${t.trim()}</td>`).join("")}</tr>`).join("")}</tbody></table>\n`}],[/\n([^\n]+)\n/g,(t,n)=>{const e=n.trim();return/^<\/?(ul|ol|li|h|p|bl|table|tr|td)/i.test(e)?`\n${n}\n`:`\n<p>\n${e}\n</p>\n`}],[/\s?<\/ul>\s?<ul>/g,""],[/\s?<\/ol>\s?<ol>/g,""],[/<\/blockquote>\n<blockquote>/g,"<br>\n"],[/https?:\/\/[^"']*/g,t=>t.replace(/<\/?em>/g,"_")],[/&#95;/g,"_"]],slimdown_modern_n=(n,e=!1,r=!1)=>(n=`\n${n}\n`,t.forEach(([t,e])=>{n=n.replace(t,e)}),e?r?n.trim().replace(/^<p>([\s\S]*)<\/p>$/,"$1").replace(/<a href="/,'<a target="_blank" href="'):n.trim().replace(/^<p>([\s\S]*)<\/p>$/,"$1"):r?n.trim().replace(/<a href="/,'<a target="_blank" href="'):n.trim()),e=(n,e)=>{t.push([n,e])};
//# sourceMappingURL=slimdown.modern.mjs.map

// EXTERNAL MODULE: ./node_modules/.pnpm/mithril-materialized@1.1.4/node_modules/mithril-materialized/dist/index.modern.js
var index_modern = __webpack_require__(2445);
;// CONCATENATED MODULE: ./node_modules/.pnpm/mithril-ui-form@1.10.4/node_modules/mithril-ui-form/lib/index.esm.js
const S=e=>e.charAt(0).toUpperCase()+e.slice(1),N=e=>"string"==typeof e,j=(e,t=2,n="0")=>e.toString().length>=t?e.toString():j(n+e,t,n),$=e=>e?`${j(e.getHours())}:${j(e.getMinutes())}`:"00:00",A=(e,t)=>{const n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split(".");let a={...e};for(let t=0,i=n.length;t<i;++t){const i=n[t];if("object"==typeof a&&i in a)a=a[i];else{if(!(a instanceof Array))return;{const t=e[i]||i,n=/([A-Z]\w+)/.exec(i),o=n&&n[0][0].toLowerCase()+n[0].substr(1)||i,r=a.filter(e=>e[o]===t).shift();if(!r)return;a=r}}}return a},T=e=>e.reduce((e,t)=>t instanceof Array?[...e,...t]:[...e,t],[]),V=/([^ =><]*)\s*([=><]*)\s*(\S*)/i,L=/^\s*!\s*/,C=/===?|[^<>=]/i,P=function(e){var t=[].slice.call(arguments,1);return 0===e.length||(e instanceof Array?e:[e]).some(e=>((e,t)=>e.split("&").reduce((e,n)=>{const a=L.test(n),i=a?n.replace(L,""):n;return e=e&&t.filter(Boolean).reduce((e,t)=>e||((e,t)=>{if(!t||0===Object.keys(t).length)return!1;const n=V.exec(e);if(n){const[e,a,i,o]=n,r=A(t,a.trim());if(void 0===r||"string"==typeof r&&0===r.length)return!1;if(!i||!o)return!0;{const t=isNaN(+o)?"true"===o||"false"!==o&&o:+o;switch(i){case"=":case"==":case"===":return r instanceof Array?r.indexOf(t)>=0:r===t;case"<=":return r<=t;case">=":return r>=t;case"<":return r<t;case">":return r>t;default:return console.error(`Unrecognized operand (${i}) in expression: ${e}`),!1}}}return!0})(i.trim(),t),!1),a?!e:e},!0))(e,C.test(e)?[t[0]]:T(t)))},M=(e,t)=>A(t.filter(Boolean).reduceRight((e,t)=>({...t,...e})),e.trim()),E=(e,t)=>void 0!==M(e,t),F=/{{\s*([^\s"'`:]*):?([^\s]*)\s*}}/g,_=function(e){if(!F.test(e))return!0;let t;F.lastIndex=0;let n=!0;do{t=F.exec(e),t&&(t.index===F.lastIndex&&F.lastIndex++,t.forEach((e,t,[,a])=>{n=n&&E(a,[].slice.call(arguments,1))}))}while(n&&null!==t);return n},H=(e,t)=>{if(void 0===e)return"";if(e instanceof Array)return e.map(e=>H(e,t)).join(", ");if(!t)return e.toString();if("boolean"==typeof e){const n=t.indexOf(":");return e?t.substring(0,n):t.substring(n+1)}switch(t){default:return e.toString();case"date":return new Date(e).toLocaleDateString();case"time":return new Date(e).toLocaleTimeString();case"iso":return new Date(e).toISOString();case"utc":return new Date(e).toUTCString()}},U=function(e){if(!F.test(e))return e;let t;F.lastIndex=0;do{t=F.exec(e),t&&(t.index===F.lastIndex&&F.lastIndex++,t.forEach((t,n,[a,i,o])=>{const r=M(i,[].slice.call(arguments,1));!r||r instanceof Array||(e=e.replace(a,H(r,o)))}))}while(null!==t);return e},R=e=>{if(null===e)return e;if(e instanceof Date)return new Date(e.getTime());if(e instanceof Array){const t=[];return e.forEach(e=>{t.push(e)}),t.map(e=>R(e))}if("object"==typeof e){const t={...e};return Object.keys(t).forEach(e=>{t[e]=R(t[e])}),t}return e},J=e=>{const t=(e,n="")=>e.filter(e=>"section"!==e.type&&"md"!==e.type).reduce((e,a)=>{const i=(n?`${n}.`:"")+String(a.id),o=a.type||(a.options&&a.options.length>0?"select":"text");return"string"==typeof o?e[i]=a:e={...e,...t(o,i)},e},{}),n=t(e),a=(e,t)=>{if(!n.hasOwnProperty(e)||void 0===t)return t;const a=n[e],i=t instanceof Array?t.filter(e=>null!=e):[t];switch(a.type||(a.options?"options":"none")){default:return t;case"radio":case"select":case"options":const e="string"==typeof a.options?M(a.options,[n]):a.options;return i.map(t=>e.filter(e=>e.id===t).map(e=>e.label||S(e.id)).shift()).filter(e=>void 0!==e)}},i=(e,t="")=>{if(e&&("object"!=typeof e||0!==Object.keys(e).length)){if(e instanceof Array)return e.map(e=>i(e,t));{const n={};return Object.keys(e).forEach(o=>{const r=t?`${t}.${o}`:o,l=e[o];if("boolean"==typeof l)n[o]=l;else if("number"==typeof l||"string"==typeof l){const e=a(r,l);e&&(n[o]=e instanceof Array&&1===e.length?e[0]:e)}else if(l instanceof Array)if("string"==typeof l[0]||null===l[0]){const e=a(r,l);e&&(n[o]=e)}else n[o]=i(l,o);else"object"==typeof l&&(n[o]=l)}),n}}};return i},q=(e="")=>e.replace(/\s|,|\./g,"").toLowerCase(),z=(e,t,n=1)=>{const a=[];for(let i=e;i<=t;i+=n)a.push(i);return a},W=e=>{"string"!=typeof e&&(e=JSON.stringify(e));let t=0;if(0===e.length)return t;for(var n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t&=t;return t},B=(e,t,n)=>{const a=Object.assign({},t,n);return`${e}?${Object.keys(a).map(e=>`${e}=${a[e]}`).join("&")}`},Y=()=>({view:({attrs:{md:n="",removeParagraphs:a=!1,externalLinks:i=!1,...o}})=>mithril_default()(".slimdown-view.markdown",o,mithril_default().trust(slimdown_modern_n(n,a,i)))}),G=()=>({view:({attrs:{type:t,props:n,label:a="",initialValue:i,inline:o=!1}})=>{const r={className:n.className||"col s12"};if(i instanceof Array&&i.length>3)return mithril_default()(".readonly",r,[mithril_default()("label",a),mithril_default()(Y,{md:"\n- "+i.join("\n- ")})]);if("string"==typeof i)return mithril_default()(".readonly",r,"url"===t?[mithril_default()("label",`${a.trim()}: `),mithril_default()("a[target=_blank]",{href:i},i)]:"color"===t?[mithril_default()("label",`${a.trim()}: `),mithril_default()(".color",{style:`height: 1rem; width: 40px; border-radius: 4px; background-color: ${i}`})]:[mithril_default()("label",a),mithril_default()(Y,{md:i})]);const l=i instanceof Array?i.join(", "):i;return mithril_default()(".readonly",r,[a&&mithril_default()("label",a),o?mithril_default()("span",l?`: ${l}`:mithril_default().trust("&nbsp;")):mithril_default()("p",l||mithril_default().trust("&nbsp;"))])}}),K=(x={},I={})=>()=>{const O={key:Date.now()};return{view:({attrs:{i18n:D,field:k,obj:N,autofocus:j,onchange:A,context:T=[],containerId:V,disabled:L,readonly:C}})=>{const{id:E="",type:F,disabled:H=L,readonly:R=C,value:J,required:q,autogenerate:z,show:W,label:B,description:K,i18n:Z=D||{},checkAllOptions:Q,transform:X,effect:ee}=k;if(W&&!P(W,N,T)||B&&!_(B,N,T)||K&&!_(K,N,T))return void console.table({show:W,obj:N,context:T});const te="string"==typeof k.options?M(k.options,[N,...T]):k.options,ne=te&&te instanceof Array?te.filter(e=>void 0!==e.id&&(e.label||!/[0-9]/.test(e.id))&&(!e.show||P(e.show,N,T))).map(e=>e.label?e:{...e,label:S(e.id)}):[],ie="boolean"==typeof L&&L,oe=((e,n=!1,i=!1)=>{const{id:o="",label:r,description:l,required:s,multiple:c,className:d,checkboxClass:u,icon:p,iconClass:m,placeholder:f,maxLength:h,minLength:g,max:y,min:b,step:v,dateTimeOutput:w,dateTimeSeconds:x,dateFormat:I,twelveHour:O}=e,D={id:`mui_${String(o)}-${(0,index_modern.uniqueId)()}`,label:r};return void 0===r&&o&&(D.label=S(String(o))),l&&(D.helperText=slimdown_modern_n(l,!0)),d&&(D.className=d),p&&(D.iconName=p),m&&(D.iconClass=m),u&&(D.checkboxClass=u),f&&(D.placeholder=f),s&&(D.isMandatory=!0),c&&(D.multiple=c),i&&(D.disabled=!0),n&&(D.autofocus=!0),void 0!==h&&(D.maxLength=h),void 0!==g&&(D.minLength=g),void 0!==y&&(D.max=y),void 0!==b&&(D.min=b),void 0!==v&&(D.step=v),w&&(D.dateTimeOutput=w),x&&(D.dateTimeSeconds=x),I&&(D.dateFormat=I),O&&(D.twelveHour=O),D})(k,j,"boolean"==typeof H||void 0===H?ie||H:ie||P(H,N,T));B&&(oe.label=slimdown_modern_n(U(oe.label||B,N,T),!0)),K&&(oe.description=slimdown_modern_n(U(oe.description||K,N,T),!0));const re=q?e=>e instanceof Array?e&&e.length>0:void 0!==typeof e:void 0;if(N instanceof Array)return void console.warn("Only a repeat list can deal with arrays!");const le=function(e){try{return void 0===e||"undefined"===e?(delete N[E],A(N),Promise.resolve()):(N[E]=X?X("to",e):e,ee?Promise.resolve(ee(N,N[E],T)).then(function(e){A(void 0!==e?e:N)}):Promise.resolve(A(N)))}catch(e){return Promise.reject(e)}};if(F instanceof Array)return E?(N.hasOwnProperty(E)||(N[E]={}),mithril_default()(".muf-form",{className:k.className},[mithril_default()(".muf-form-header",mithril_default().trust(slimdown_modern_n(oe.label||S(String(E)),!0))),oe.description&&mithril_default()("div",mithril_default().trust(slimdown_modern_n(oe.description))),mithril_default()(".row",mithril_default()(ae,{...oe,i18n:Z,readonly:R,form:F,obj:N[E],context:T instanceof Array?[N,...T]:[N,T],onchange:()=>A&&A(N),containerId:V}))])):void console.warn("Missing ID for type "+JSON.stringify(F));z&&!N[E]&&(N[E]="guid"===z?(0,index_modern.uuid4)():"id"===z?(0,index_modern.uniqueId)():Date.now());const se=N.hasOwnProperty(E)&&void 0!==N[E]?X?X("from",N[E]):N[E]:J;E&&void 0!==J&&void 0!==se&&(N[E]=X?X("to",se):se);const[ce,de]=Q?Q.split("|"):["",""];if(R&&F&&["md","none"].indexOf(F)<0){if(I.hasOwnProperty(F))return mithril_default()(I[F],{iv:se,field:k,props:oe,label:oe.label,obj:N,context:T});if(F&&x.hasOwnProperty(F))return mithril_default()(x[F],{iv:se,field:k,props:oe,label:oe.label,onchange:le,obj:N,context:T});switch(F){case"time":{const t=Z.dateTimeOptions?{hour:"2-digit",minute:"2-digit",second:void 0,...Z.dateTimeOptions,weekday:void 0,month:void 0,day:void 0,year:void 0}:void 0,n="number"==typeof se||"string"==typeof se||se instanceof Date?new Date(se):void 0,a=n?n.toLocaleTimeString(Z.locales,t):"";return mithril_default()(G,{props:oe,label:oe.label,initialValue:a})}case"date":{const t=Z.dateTimeOptions?{...Z.dateTimeOptions,hour:void 0,hour12:void 0,minute:void 0,second:void 0}:void 0,n="number"==typeof se||"string"==typeof se||se instanceof Date?new Date(se):void 0,a=n?n.toLocaleDateString(Z.locales,t):"";return mithril_default()(G,{props:oe,label:oe.label,initialValue:a})}case"datetime":{const t=Z.dateTimeOptions?{hour:"2-digit",minute:"2-digit",month:"numeric",day:"numeric",...Z.dateTimeOptions}:void 0,n="number"==typeof se||"string"==typeof se||se instanceof Date?new Date(se):void 0,a=n?n.toLocaleTimeString(Z.locales,t):"";return mithril_default()(G,{props:oe,label:oe.label,initialValue:a})}case"switch":case"checkbox":return mithril_default()(G,{props:oe,label:oe.label,initialValue:se?"✔":"✘",inline:!0});case"tags":return mithril_default()(G,{props:oe,label:oe.label,initialValue:se||[]});case"options":case"select":{const t=void 0!==se?se instanceof Array?se:[se]:[],n=ne.filter(e=>t.indexOf(e.id)>=0),a=n&&0===n.length?"?":1===n.length?n[0].label:n.map(e=>e.label);return mithril_default()(G,{props:oe,label:oe.label,initialValue:a})}case"radio":{const t=se,n=ne.filter(e=>e.id===t);return mithril_default()(G,{props:oe,label:oe.label,initialValue:n&&n.length?n[0].label:"?"})}case"base64":{const t=se;return!(!t||!/data:image/i.test(t))&&mithril_default()("div",mithril_default()("img.responsive-img",{src:t,alt:N.title||N.alt||N.name||"",style:`max-height: ${k.max||50}px`}))}case"file":return mithril_default()("div",oe,(se instanceof Array?se:[se]).map((t="")=>{const n=/data:image|.jpg$|.jpeg$|.png$|.gif$|.svg$|.bmp$|.tif$|.tiff$/i.test(t),a=`${new URL(k.url).origin}${t}`;return mithril_default()("a[target=_blank]",{href:a},n?mithril_default()("img",{src:a,alt:a,style:`max-height: ${k.max||50}`}):mithril_default()(G,{props:oe,label:k.placeholder||"File",initialValue:t}))}));case"md":case"markdown":{const n="string"==typeof se&&se?slimdown_modern_n(se):"";return mithril_default()(G,{props:oe,label:oe.label,initialValue:n})}default:return mithril_default()(G,{props:oe,type:F,label:oe.label,initialValue:se})}}else{if(F&&x.hasOwnProperty(F))return mithril_default()(x[F],{iv:se,field:k,props:oe,label:oe.label,onchange:le,obj:N,context:T});switch(F){case"colour":case"color":{const t=se;return mithril_default()(index_modern.ColorInput,{...oe,initialValue:t,onchange:le})}case"time":{const{twelveHour:t=!1}=oe,n=se?"number"==typeof se||"string"==typeof se?new Date(se):se:new Date,a=$(n);return N[E]=X?X("to",n):n,mithril_default()(index_modern.TimePicker,{...oe,twelveHour:t,initialValue:a,onchange:e=>{const t=e.split(":").map(e=>+e);n.setHours(t[0],t[1]),le(n)},container:V})}case"date":{const{format:t="mmmm d, yyyy"}=oe,n="number"==typeof se||"string"==typeof se?new Date(se):se;N[E]=n?X?X("to",n.valueOf()):n.valueOf():n;const{min:a,max:i}=oe,o=a?!n||a<n.valueOf()?new Date(a):n:void 0,r=i?!n||i>n.valueOf()?new Date(i):n:void 0;return mithril_default()(index_modern.DatePicker,{...oe,minDate:o,maxDate:r,setDefaultDate:!!n,format:t,initialValue:n,onchange:e=>{le(new Date(e))},container:V})}case"datetime":{const{label:t,className:n="col s12",dateTimeSeconds:a=!1,twelveHour:i=!1,format:o="mmmm d, yyyy",...r}=oe,l="number"==typeof se||"string"==typeof se?new Date(se):se,s={initialDateTime:l},c=l||void 0,d=l?$(l):"",{min:u,max:p}=oe,m=u?!l||u<l.valueOf()?new Date(u):l:void 0,f=p?!l||p>l.valueOf()?new Date(p):l:void 0,h=oe.dateTimeOutput||"UTC",y=e=>{s.initialDateTime=e,le("UTC"===h?e.toUTCString():"ISO"===h?e.toISOString():e.valueOf())};return mithril_default()("div",{className:n},mithril_default()(".row",[mithril_default()(a?".col.s6":".col.s8",{style:"padding: 0"},mithril_default()(index_modern.DatePicker,{...r,label:t,minDate:m,maxDate:f,setDefaultDate:!!l,format:o,initialValue:c,container:V,onchange:e=>{const t=new Date(s.initialDateTime);t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(e.getDate()),y(t)}})),mithril_default()(".col.s4",{style:"min-width: 6rem; padding-right: 0; padding-left: 0"},mithril_default()(index_modern.TimePicker,{...r,label:"",helperText:"",twelveHour:i,initialValue:d,container:V,onchange:e=>{const t=e.split(":").map(e=>+e),n=s.initialDateTime||new Date((new Date).setSeconds(0,0));n.setHours(t[0],t[1]),y(n)}})),a&&mithril_default()(index_modern.NumberInput,{style:"min-width: 4rem; padding-right: 0; padding-left: 0",className:"col s2",min:0,max:59,onchange:e=>{const t=s.initialDateTime||new Date((new Date).setSeconds(0,0));t.setSeconds(e,0),y(t)}})]))}case"email":{const t=se;return mithril_default()(index_modern.EmailInput,{...oe,validate:re,autofocus:j,onchange:le,initialValue:t})}case"number":{const t=se;return mithril_default()(index_modern.NumberInput,{...oe,validate:re,autofocus:j,onchange:le,initialValue:t})}case"radio":{const t=se;return mithril_default()(index_modern.RadioButtons,{label:"",...oe,options:ne,checkedId:t,onchange:le})}case"checkbox":{const t=se;return mithril_default()(index_modern.InputCheckbox,{...oe,checked:t,onchange:le})}case"options":{const t=se;return[[mithril_default()(index_modern.Options,{key:O.key,checkboxClass:"col s6 m4 l3",className:"input-field col s12",...oe,disabled:oe.disabled||!ne||0===ne.length,options:ne,checkedId:t,onchange:e=>le(1===e.length?e[0]:e.filter(e=>null!==e))})],void 0!==Q&&mithril_default()(".col.s12.option-buttons",[mithril_default()(index_modern.FlatButton,{disabled:oe.disabled,label:ce,iconName:"check",onclick:()=>{O.key=Date.now(),le(ne.map(e=>e.id))}}),de&&mithril_default()(index_modern.FlatButton,{disabled:oe.disabled,label:de,iconName:"check_box_outline_blank",onclick:()=>{const e=N[E]||[];e.length=0,O.key=Date.now(),le(e)}})])]}case"select":{const t=se;return mithril_default()(index_modern.Select,{placeholder:oe.multiple?Z.pickOneOrMore||"Pick one or more":Z.pickOne||"Pick one",...oe,disabled:oe.disabled||!ne||0===ne.length,options:ne,initialValue:t,onchange:e=>le(1!==e.length||oe.multiple?e.filter(e=>null!==e||void 0!==e):e[0])})}case"markdown":case"md":{const{label:t,className:n="col s12"}=oe,a=U((E?se:J||t)||"",N,T);return mithril_default()(Y,{md:a,className:n})}case"section":return mithril_default()(".divider");case"switch":{const t=se,n=ne&&ne.length>0?ne[0].label:"",a=ne&&ne.length>1?ne[1].label:"";return mithril_default()(index_modern.Switch,{...oe,left:n,right:a,checked:t,onchange:le})}case"tags":{const t=(se?se instanceof Array?se:[se]:[]).map(e=>({tag:e})),n=ne&&ne.length>0?{data:ne.reduce((e,t)=>(e[t.id]=null,e),{}),limit:k.maxLength||Infinity,minLength:k.minLength||1}:{},{label:a,isMandatory:i,className:o,helperText:r}=oe;return mithril_default()(index_modern.Chips,{className:o,label:a,isMandatory:i,helperText:r,onchange:e=>le(e.map(e=>e.tag)),placeholder:k.placeholder||"Add a tag",secondaryPlaceholder:k.secondaryPlaceholder||"+tag",data:t,autocompleteOptions:n})}case"autocomplete":{const t=se,n=ne&&ne.length>0?{data:ne.reduce((e,t)=>(e[t.id]=null,e),{}),limit:k.maxLength||Infinity,minLength:k.minLength||1}:{data:{}},{label:a,isMandatory:i,className:o,helperText:r}=oe;return mithril_default()(index_modern.Autocomplete,{initialValue:t,className:o,label:a,isMandatory:i,helperText:r,onchange:le,placeholder:k.placeholder||"...",...n})}case"textarea":{const t=se;return mithril_default()(index_modern.TextArea,{...oe,validate:re,autofocus:j,onchange:le,initialValue:t})}case"file":{const t=se,{url:n,placeholder:a}=k;if(!n)throw Error('Input field "url" not defined, which indicates the URL to the upload folder.');const i=ne?ne.map(e=>e.id):void 0,o=t=>{if(!t||t.length<1)return void le("");const a=new FormData;a.append("file",t[0]),mithril_default().request({method:"POST",url:n,body:a}).then(e=>le(e)).catch(console.error)};return mithril_default()(index_modern.FileInput,{...oe,accept:i,placeholder:a,onchange:o,initialValue:t})}case"base64":{const t=se,n=!(!t||!/data:image/i.test(t)),{placeholder:a}=k,i=ne?ne.map(e=>e.id).join(","):void 0,o=t=>{if(!t||t.length<1)return void le("");const n=new FileReader;n.onloadend=()=>{"string"==typeof n.result&&le(n.result),mithril_default().redraw()},n.readAsDataURL(t[0])};return n?mithril_default()("div",[mithril_default()("img.responsive-img",{src:t,alt:N.title||N.alt||N.name||"",style:`max-height: ${k.max||50}px`}),mithril_default()(index_modern.FlatButton,{iconName:"clear",onclick:()=>le("")})]):mithril_default()(index_modern.FileInput,{...oe,accept:i,placeholder:a,onchange:o,initialValue:t})}case"url":{const t=se;return mithril_default()(index_modern.UrlInput,{placeholder:"http(s)://www.example.com",...oe,validate:re,autofocus:j,onchange:le,initialValue:t})}case"text":{const t=se;return mithril_default()(index_modern.TextInput,{...oe,validate:re,autofocus:j,onchange:le,initialValue:t,tabindex:15})}default:return}}}}},Z=()=>{const t={},n=(e,n)=>{const a=t.onNewItem?t.onNewItem(e,n):{};e instanceof Array?e.push(a):e.hasOwnProperty(n)?e[n].push(a):e[n]=[a]};let o;return{oninit:({attrs:{i18n:e={},field:{id:n="",sortProperty:a,onNewItem:i}}})=>{t.editLabel=e.editRepeat||`Edit ${String(n)}`,t.createLabel=e.createRepeat||`Create new ${String(n)}`,t.onNewItem=i,o=(e=>{if(!e)return(e,t)=>0;const t="!"===e[0],n=t?e.substring(1):e;return t?(e,t)=>e[n]>t[n]?-1:e[n]<t[n]?1:0:(e,t)=>e[n]>t[n]?1:e[n]<t[n]?-1:0})(a)},view:({attrs:{field:l,obj:s,context:c,className:d=(l.className?"."+l.className.split(" ").join("."):".col.s12"),section:u,containerId:p,disabled:m=("boolean"==typeof l.disabled?l.disabled:void 0),readonly:f,i18n:h={},onchange:g}})=>{const{modalKey:y,filterValue:b}=t,{id:v,label:w,type:D,min:k,max:S,pageSize:N,propertyFilter:j,filterLabel:$,readonly:A=f,repeatItemClass:T=""}=l,V="edit_"+(w?w.toLowerCase().replace(/\s/gi,"_"):(0,index_modern.uniqueId)()),L=((e,t)=>e instanceof Array?e:(e.hasOwnProperty(t)||(e[t]=[]),e[t]))(s,v),C=b?q(b):void 0,P=j&&C&&C.length>2?L.filter(e=>q(`${e[j]}`).indexOf(C)>=0):L,M=mithril_default().route.param(String(v))?Math.min(P.length,+mithril_default().route.param(String(v))):1,E=N&&P&&(M-1)*N<P.length?M:1,F=N?(e,t)=>(E-1)*N<=t&&t<E*N:()=>!0,_=mithril_default().route.get(),H=N?Math.ceil(P.length/N):0,U=!!(S&&P.length>=S),R=!m&&!A&&(!k||P.length>k),J=_?_.split("?")[0]:"",Y=(e=>{const t=e?e.split("?")[1]:window.location.search.slice(1),n={};if(t){const e=t.split("&");for(var a=0;a<e.length;a++){const t=e[a].split("="),i=t[0],o=void 0===t[1]||t[1];if(i.match(/\[(\d+)?\]$/)){const e=n[i.replace(/\[(\d+)?\]/,"")]||[];i.match(/\[\d+\]$/)?e[+/\[(\d+)\]/.exec(i)[1]]=o:e.push(o)}else n[i]?"string"==typeof n[i]?(n[i]=[n[i]],n[i].push(o)):n[i].push(o):n[i]=o}}return n})(_),G=30+10*Math.floor(Math.log10(P.length));return[[mithril_default()(`#${String(v)}.mui-repeat-list${d}`,[mithril_default()(".row.mui-repeat-list-controls",mithril_default()(".col.s12",[mithril_default()(index_modern.FlatButton,{iconName:m||A||U?"":"add",iconClass:"right",label:w,onclick:()=>{n(s,String(v)),v&&mithril_default().route.set(J,Object.assign(Y,{[v]:P.length})),g&&g(s)},style:"padding: 0",className:"left",disabled:m||U,readonly:A}),H>1&&mithril_default()(".right",mithril_default()(index_modern.Pagination,{curPage:E,items:z(1,H).map(e=>({href:B(J,Y,{[v]:e})}))})),(P.length>1||b)&&j&&!m&&mithril_default()(index_modern.TextInput,{style:"margin-top: -6px; margin-bottom: -1rem;",iconName:"filter_list",iconClass:"small",placeholder:$,onkeyup:(e,n)=>t.filterValue=n,className:"right",disabled:m,readonly:A})])),P&&P.length>0&&"string"!=typeof D&&P.sort(o).filter(F).map((n,a)=>mithril_default()(".mui-repeat-item",{style:"display: flex;"},[R&&[(!N||N>1)&&mithril_default()("span.mui-show-item-number left",{style:`flex: 0 0 ${G}px;`},`[${(N?(E-1)*N+a:a)+1}]`)],[mithril_default()(".row.repeat-item",{className:T,key:M+W(n),style:"flex: 1;"},[D&&mithril_default()(ae,{form:D,obj:n,i18n:h,context:c instanceof Array?[s,...c]:[s,c],section:u,containerId:p,disabled:m,readonly:A,onchange:()=>g&&g(s)})])],R&&[mithril_default()(index_modern.FlatButton,{type:"button",iconName:"clear",className:"row mui-delete-item btn-small",style:"flex: 0 0 48px;",disabled:m,readonly:A,onclick:()=>{t.curItemIdx=N?(E-1)*N+a:a}})]])),!(m||U||A||!P||0===P.length||1===N)&&mithril_default()(index_modern.RoundIconButton,{type:"button",iconName:"add",className:"row mui-add-new-item btn-small right",title:w,style:"padding: 0; margin-top: -10px; margin-right: -25px",onclick:()=>{n(s,String(v)),mithril_default().route.set(J,Object.assign(Y,{[v]:P.length})),g&&g(s)}})])],void 0!==t.curItemIdx&&mithril_default()(index_modern.ModalPanel,{id:"deleteItem",onCreate:e=>e.open(),options:{onCloseStart:()=>{t.curItemIdx=void 0,mithril_default().redraw()}},fixedFooter:!0,title:h.deleteItem||"Delete item",description:mithril_default()(ae,{form:D,obj:P[t.curItemIdx],context:c instanceof Array?[s,...c]:[s,c],section:u,containerId:p,readonly:!0,i18n:h}),buttons:[{label:h.disagree||"Disagree"},{label:h.agree||"Agree",onclick:()=>{void 0!==t.curItemIdx&&(P.splice(t.curItemIdx,1),s instanceof Array?s=[...P]:s[v]=[...P],g&&g(s))}}]}),"string"==typeof D||void 0===D?void 0:mithril_default()(index_modern.ModalPanel,{onCreate:e=>t.editModal=e,id:V,title:t.editItem?t.editLabel:t.createLabel,fixedFooter:!0,description:mithril_default()(".row.form-item",mithril_default()(ae,{key:y,form:D,i18n:h,obj:t.editItem||t.newItem||{},onchange:e=>t.canSave=e,context:c instanceof Array?[s,...c]:[s,c],containerId:p,disabled:m})),buttons:[{iconName:"cancel",label:h.cancel||"Cancel"},{iconName:"save",label:h.save||"Save",disabled:!t.canSave,onclick:()=>{if(t.editItem&&void 0!==t.curItemIdx){const e=t.editItem,n=t.curItemIdx;D.forEach(t=>{t.id&&(n[t.id]=e[t.id])})}else t.newItem&&P.push(t.newItem);g&&g(s)}}]})]}}},Q=()=>{const t={};return{oninit:({attrs:{i18n:e={}}})=>{const{raw:n="RAW",view:a="VIEW"}=e;t.raw=n,t.view=a},view:({attrs:{field:{id:n="",type:a,onSelect:i},obj:o,context:r,containerId:l,disabled:c,readonly:d,i18n:u,onchange:p}})=>{if(o instanceof Array)return;const m=o[n],f=m?JSON.parse(m):void 0,h=f&&f.features||[],g=[],y={title:t.raw,vnode:mithril_default()(index_modern.TextArea,{class:"col s12",initialValue:f?JSON.stringify(f,null,2):void 0,placeholder:"Enter GeoJSON",onchange:e=>o[n]=e})};if(!a||"string"==typeof a)return;const b=a,v=b.length>0?b[0].id:void 0,w={title:t.view,vnode:h.length?mithril_default()(index_modern.Collapsible,{oncreate:({dom:e})=>t.dom=e,onOpenStart:i?e=>{const n=t.dom.children||[];for(let t=0;t<n.length;t++)if(n[t]===e)return void i(t,h[t])}:void 0,className:"geojson-feature-list",items:h.map((t,a)=>(t.properties||(t.properties={}),{id:"erik_"+a,key:a,header:v&&t.properties[v]||t.geometry.type,body:mithril_default()(".row",mithril_default()(ae,{class:"col s12",form:b,obj:t.properties,i18n:u,context:r instanceof Array?[o,...r]:[o,r],containerId:l,disabled:c,readonly:d,onchange:(e,t)=>{t&&(h[a].properties=t),o[n]=JSON.stringify(f,null,2),p&&p(o)}}))}))}):mithril_default()("span","...")};return g.push(w),g.push(y),mithril_default()(index_modern.Tabs,{tabs:g,tabWidth:"fill"})}}},X={},ee={},te=(e,t,n)=>{X[e]=t,n&&(ee[e]=n)},ne=K(X,ee),ae=()=>({view:({attrs:{i18n:t,form:n,obj:a,onchange:i,disabled:o,readonly:r,context:l,section:s}})=>{const c=e=>i&&i(((e,t)=>t.filter(e=>e.required&&void 0!==typeof e.id).reduce((t,n)=>t&&!(n.id&&(void 0===e[n.id]||e[n.id]instanceof Array&&0===e[n.id].length||"string"==typeof e[n.id]&&0===e[n.id].length)),!0))(e,n),e);return n.filter((e=>{if(!e)return e=>!0;let t=!1;return({type:n,id:a})=>"section"===n?(t=a===e,!1):t})(s)).filter(e=>!e.show||P(e.show,a,...l||[])).reduce((n,i)=>(i.type||(i.type=(e=>{const{autogenerate:t,value:n,options:a}=e;return t?"none":n?"string"==typeof n?"md":"number"==typeof n?"number":"boolean"==typeof n?"checkbox":"none":a&&a.length>0?"select":"none"})(i)),[...n,void 0===i.repeat||!1===i.repeat?mithril_default()(ne,{i18n:t,field:i,obj:a,onchange:c,disabled:o,readonly:r,context:l,section:s,containerId:"body"}):mithril_default()("geojson"===i.repeat?Q:Z,{obj:a,field:i,onchange:c,context:l,i18n:t,containerId:"body",disabled:o,readonly:r})]),[])}});
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 5475:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(3836)

module.exports = function(render, schedule, console) {
	var subscriptions = []
	var pending = false
	var offset = -1

	function sync() {
		for (offset = 0; offset < subscriptions.length; offset += 2) {
			try { render(subscriptions[offset], Vnode(subscriptions[offset + 1]), redraw) }
			catch (e) { console.error(e) }
		}
		offset = -1
	}

	function redraw() {
		if (!pending) {
			pending = true
			schedule(function() {
				pending = false
				sync()
			})
		}
	}

	redraw.sync = sync

	function mount(root, component) {
		if (component != null && component.view == null && typeof component !== "function") {
			throw new TypeError("m.mount expects a component, not a vnode.")
		}

		var index = subscriptions.indexOf(root)
		if (index >= 0) {
			subscriptions.splice(index, 2)
			if (index <= offset) offset -= 2
			render(root, [])
		}

		if (component != null) {
			subscriptions.push(root, component)
			render(root, Vnode(component), redraw)
		}
	}

	return {mount: mount, redraw: redraw}
}


/***/ }),

/***/ 809:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(3836)
var m = __webpack_require__(4767)
var Promise = __webpack_require__(1334)

var buildPathname = __webpack_require__(158)
var parsePathname = __webpack_require__(6861)
var compileTemplate = __webpack_require__(4121)
var assign = __webpack_require__(6293)
var censor = __webpack_require__(5198)

var sentinel = {}

function decodeURIComponentSave(component) {
	try {
		return decodeURIComponent(component)
	} catch(e) {
		return component
	}
}

module.exports = function($window, mountRedraw) {
	var callAsync = $window == null
		// In case Mithril.js' loaded globally without the DOM, let's not break
		? null
		: typeof $window.setImmediate === "function" ? $window.setImmediate : $window.setTimeout
	var p = Promise.resolve()

	var scheduled = false

	// state === 0: init
	// state === 1: scheduled
	// state === 2: done
	var ready = false
	var state = 0

	var compiled, fallbackRoute

	var currentResolver = sentinel, component, attrs, currentPath, lastUpdate

	var RouterRoot = {
		onbeforeupdate: function() {
			state = state ? 2 : 1
			return !(!state || sentinel === currentResolver)
		},
		onremove: function() {
			$window.removeEventListener("popstate", fireAsync, false)
			$window.removeEventListener("hashchange", resolveRoute, false)
		},
		view: function() {
			if (!state || sentinel === currentResolver) return
			// Wrap in a fragment to preserve existing key semantics
			var vnode = [Vnode(component, attrs.key, attrs)]
			if (currentResolver) vnode = currentResolver.render(vnode[0])
			return vnode
		},
	}

	var SKIP = route.SKIP = {}

	function resolveRoute() {
		scheduled = false
		// Consider the pathname holistically. The prefix might even be invalid,
		// but that's not our problem.
		var prefix = $window.location.hash
		if (route.prefix[0] !== "#") {
			prefix = $window.location.search + prefix
			if (route.prefix[0] !== "?") {
				prefix = $window.location.pathname + prefix
				if (prefix[0] !== "/") prefix = "/" + prefix
			}
		}
		// This seemingly useless `.concat()` speeds up the tests quite a bit,
		// since the representation is consistently a relatively poorly
		// optimized cons string.
		var path = prefix.concat()
			.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponentSave)
			.slice(route.prefix.length)
		var data = parsePathname(path)

		assign(data.params, $window.history.state)

		function reject(e) {
			console.error(e)
			setPath(fallbackRoute, null, {replace: true})
		}

		loop(0)
		function loop(i) {
			// state === 0: init
			// state === 1: scheduled
			// state === 2: done
			for (; i < compiled.length; i++) {
				if (compiled[i].check(data)) {
					var payload = compiled[i].component
					var matchedRoute = compiled[i].route
					var localComp = payload
					var update = lastUpdate = function(comp) {
						if (update !== lastUpdate) return
						if (comp === SKIP) return loop(i + 1)
						component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
						attrs = data.params, currentPath = path, lastUpdate = null
						currentResolver = payload.render ? payload : null
						if (state === 2) mountRedraw.redraw()
						else {
							state = 2
							mountRedraw.redraw.sync()
						}
					}
					// There's no understating how much I *wish* I could
					// use `async`/`await` here...
					if (payload.view || typeof payload === "function") {
						payload = {}
						update(localComp)
					}
					else if (payload.onmatch) {
						p.then(function () {
							return payload.onmatch(data.params, path, matchedRoute)
						}).then(update, path === fallbackRoute ? null : reject)
					}
					else update("div")
					return
				}
			}

			if (path === fallbackRoute) {
				throw new Error("Could not resolve default route " + fallbackRoute + ".")
			}
			setPath(fallbackRoute, null, {replace: true})
		}
	}

	// Set it unconditionally so `m.route.set` and `m.route.Link` both work,
	// even if neither `pushState` nor `hashchange` are supported. It's
	// cleared if `hashchange` is used, since that makes it automatically
	// async.
	function fireAsync() {
		if (!scheduled) {
			scheduled = true
			// TODO: just do `mountRedraw.redraw()` here and elide the timer
			// dependency. Note that this will muck with tests a *lot*, so it's
			// not as easy of a change as it sounds.
			callAsync(resolveRoute)
		}
	}

	function setPath(path, data, options) {
		path = buildPathname(path, data)
		if (ready) {
			fireAsync()
			var state = options ? options.state : null
			var title = options ? options.title : null
			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path)
			else $window.history.pushState(state, title, route.prefix + path)
		}
		else {
			$window.location.href = route.prefix + path
		}
	}

	function route(root, defaultRoute, routes) {
		if (!root) throw new TypeError("DOM element being rendered to does not exist.")

		compiled = Object.keys(routes).map(function(route) {
			if (route[0] !== "/") throw new SyntaxError("Routes must start with a '/'.")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})
		fallbackRoute = defaultRoute
		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)

			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes.")
			}
		}

		if (typeof $window.history.pushState === "function") {
			$window.addEventListener("popstate", fireAsync, false)
		} else if (route.prefix[0] === "#") {
			$window.addEventListener("hashchange", resolveRoute, false)
		}

		ready = true
		mountRedraw.mount(root, RouterRoot)
		resolveRoute()
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = "#!"
	route.Link = {
		view: function(vnode) {
			// Omit the used parameters from the rendered element - they are
			// internal. Also, censor the various lifecycle methods.
			//
			// We don't strip the other parameters because for convenience we
			// let them be specified in the selector as well.
			var child = m(
				vnode.attrs.selector || "a",
				censor(vnode.attrs, ["options", "params", "selector", "onclick"]),
				vnode.children
			)
			var options, onclick, href

			// Let's provide a *right* way to disable a route link, rather than
			// letting people screw up accessibility on accident.
			//
			// The attribute is coerced so users don't get surprised over
			// `disabled: 0` resulting in a button that's somehow routable
			// despite being visibly disabled.
			if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
				child.attrs.href = null
				child.attrs["aria-disabled"] = "true"
				// If you *really* do want add `onclick` on a disabled link, use
				// an `oncreate` hook to add it.
			} else {
				options = vnode.attrs.options
				onclick = vnode.attrs.onclick
				// Easier to build it now to keep it isomorphic.
				href = buildPathname(child.attrs.href, vnode.attrs.params)
				child.attrs.href = route.prefix + href
				child.attrs.onclick = function(e) {
					var result
					if (typeof onclick === "function") {
						result = onclick.call(e.currentTarget, e)
					} else if (onclick == null || typeof onclick !== "object") {
						// do nothing
					} else if (typeof onclick.handleEvent === "function") {
						onclick.handleEvent(e)
					}

					// Adapted from React Router's implementation:
					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
					//
					// Try to be flexible and intuitive in how we handle links.
					// Fun fact: links aren't as obvious to get right as you
					// would expect. There's a lot more valid ways to click a
					// link than this, and one might want to not simply click a
					// link, but right click or command-click it to copy the
					// link target, etc. Nope, this isn't just for blind people.
					if (
						// Skip if `onclick` prevented default
						result !== false && !e.defaultPrevented &&
						// Ignore everything but left clicks
						(e.button === 0 || e.which === 0 || e.which === 1) &&
						// Let the browser handle `target=_blank`, etc.
						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
						// No modifier keys
						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
					) {
						e.preventDefault()
						e.redraw = false
						route.set(href, null, options)
					}
				}
			}
			return child
		},
	}
	route.param = function(key) {
		return attrs && key != null ? attrs[key] : attrs
	}

	return route
}


/***/ }),

/***/ 6412:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hyperscript = __webpack_require__(4767)

hyperscript.trust = __webpack_require__(1972)
hyperscript.fragment = __webpack_require__(9784)

module.exports = hyperscript


/***/ }),

/***/ 1497:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hyperscript = __webpack_require__(6412)
var request = __webpack_require__(4092)
var mountRedraw = __webpack_require__(2422)

var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.Fragment = "["
m.mount = mountRedraw.mount
m.route = __webpack_require__(5576)
m.render = __webpack_require__(409)
m.redraw = mountRedraw.redraw
m.request = request.request
m.jsonp = request.jsonp
m.parseQueryString = __webpack_require__(8676)
m.buildQueryString = __webpack_require__(9335)
m.parsePathname = __webpack_require__(6861)
m.buildPathname = __webpack_require__(158)
m.vnode = __webpack_require__(3836)
m.PromisePolyfill = __webpack_require__(2012)
m.censor = __webpack_require__(5198)

module.exports = m


/***/ }),

/***/ 2422:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var render = __webpack_require__(409)

module.exports = __webpack_require__(5475)(render, typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : null, typeof console !== "undefined" ? console : null)


/***/ }),

/***/ 158:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var buildQueryString = __webpack_require__(9335)
var assign = __webpack_require__(6293)

// Returns `path` from `template` + `params`
module.exports = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}

	assign(query, params)

	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
		delete query[key]
		// If no such parameter exists, don't interpolate it.
		if (params[key] == null) return m
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key] : encodeURIComponent(String(params[key]))
	})

	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result = resolved.slice(0, newPathEnd)

	if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result += template.slice(hashIndex)
	if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result
}


/***/ }),

/***/ 4121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var parsePathname = __webpack_require__(6861)

// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m, key, extra) {
			if (key == null) return "\\" + m
			keys.push({k: key, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "$")
	return function(data) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data.path)
		var values = regexp.exec(data.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}


/***/ }),

/***/ 6861:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var parseQueryString = __webpack_require__(8676)

// Returns `{path, params}` from `url`
module.exports = function(url) {
	var queryIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	var queryEnd = hashIndex < 0 ? url.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/")

	if (!path) path = "/"
	else {
		if (path[0] !== "/") path = "/" + path
		if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1)
	}
	return {
		path: path,
		params: queryIndex < 0
			? {}
			: parseQueryString(url.slice(queryIndex + 1, queryEnd)),
	}
}


/***/ }),

/***/ 2012:
/***/ ((module) => {

"use strict";

/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with 'new'.")
	if (typeof executor !== "function") throw new TypeError("executor must be a function.")

	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved with itself.")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}

	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}

module.exports = PromisePolyfill


/***/ }),

/***/ 1334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* global window */


var PromisePolyfill = __webpack_require__(2012)

if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = window.Promise
} else if (typeof __webpack_require__.g !== "undefined") {
	if (typeof __webpack_require__.g.Promise === "undefined") {
		__webpack_require__.g.Promise = PromisePolyfill
	} else if (!__webpack_require__.g.Promise.prototype.finally) {
		__webpack_require__.g.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = __webpack_require__.g.Promise
} else {
	module.exports = PromisePolyfill
}


/***/ }),

/***/ 9335:
/***/ ((module) => {

"use strict";


module.exports = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""

	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}

	return args.join("&")

	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}


/***/ }),

/***/ 8676:
/***/ ((module) => {

"use strict";


function decodeURIComponentSave(str) {
	try {
		return decodeURIComponent(str)
	} catch(err) {
		return str
	}
}

module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), counters = {}, data = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponentSave(entry[0])
		var value = entry.length === 2 ? decodeURIComponentSave(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) {
					counters[key] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key]++
			}
			// Disallow direct prototype pollution
			else if (level === "__proto__") break
			if (j === levels.length - 1) cursor[level] = value
			else {
				// Read own properties exclusively to disallow indirect
				// prototype pollution
				var desc = Object.getOwnPropertyDescriptor(cursor, level)
				if (desc != null) desc = desc.value
				if (desc == null) cursor[level] = desc = isNumber ? [] : {}
				cursor = desc
			}
		}
	}
	return data
}


/***/ }),

/***/ 409:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(484)(typeof window !== "undefined" ? window : null)


/***/ }),

/***/ 9784:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(3836)
var hyperscriptVnode = __webpack_require__(5497)

module.exports = function() {
	var vnode = hyperscriptVnode.apply(0, arguments)

	vnode.tag = "["
	vnode.children = Vnode.normalizeChildren(vnode.children)
	return vnode
}


/***/ }),

/***/ 4767:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(3836)
var hyperscriptVnode = __webpack_require__(5497)
var hasOwn = __webpack_require__(8088)

var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}

function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}

function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}

function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className

	vnode.tag = state.tag
	vnode.attrs = {}

	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}

		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}

		attrs = newAttrs
	}

	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null

	if (hasClass) attrs.class = null

	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}

	return vnode
}

function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}

	var vnode = hyperscriptVnode.apply(1, arguments)

	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}

	vnode.tag = selector
	return vnode
}

module.exports = hyperscript


/***/ }),

/***/ 5497:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(3836)

// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril.js requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
	var attrs = arguments[this], start = this + 1, children

	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = this
	}

	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}

	return Vnode("", attrs.key, attrs, children)
}


/***/ }),

/***/ 484:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(3836)

module.exports = function($window) {
	var $doc = $window && $window.document
	var currentRedraw

	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}

	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}

	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("'vnode.state' must not be modified.")
	}

	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}

	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": createText(parent, vnode, nextSibling); break
				case "<": createHTML(parent, vnode, ns, nextSibling); break
				case "[": createFragment(parent, vnode, hooks, ns, nextSibling); break
				default: createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode, ns, nextSibling) {
		var match = vnode.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode.children
		}
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		// Capture nodes to remove, so we don't confuse them.
		vnode.instance = []
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			vnode.instance.push(child)
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs = vnode.attrs
		var is = attrs && attrs.is

		ns = getNameSpace(vnode) || ns

		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element

		if (attrs != null) {
			setAttrs(vnode, attrs, ns)
		}

		insertNode(parent, element, nextSibling)

		if (!maybeSetContentEditable(vnode)) {
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs)
			}
		}
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		initLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
		}
		else {
			vnode.domSize = 0
		}
	}

	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.

	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.

	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
	// over the new list and for each new vnode, find the corresponding vnode in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).


	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.

	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)
		else {
			var isOldKeyed = old[0] != null && old[0].key != null
			var isKeyed = vnodes[0] != null && vnodes[0].key != null
			var start = 0, oldStart = 0
			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++
			if (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++
			if (isOldKeyed !== isKeyed) {
				removeNodes(parent, old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(parent, o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(parent, old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling

				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o.key !== v.key) break
					oldStart++, start++
					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (start === end) break
					if (o.key !== ve.key || oe.key !== v.key) break
					topSibling = getNextSibling(old, oldStart, nextSibling)
					moveNodes(parent, oe, topSibling)
					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
					if (++start <= --end) moveNodes(parent, o, nextSibling)
					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldStart++; oldEnd--
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						var oldIndex = map[ve.key]
						if (oldIndex != null) {
							pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
							oldIndices[i-start] = oldIndex
							oe = old[oldIndex]
							old[oldIndex] = null
							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
							if (ve.dom != null) nextSibling = ve.dom
							matched++
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else moveNodes(parent, v, nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode.events = old.events
			if (shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, ns)
		}
		else {
			removeNode(parent, old)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, ns, nextSibling) {
		if (old.children !== vnode.children) {
			removeHTML(parent, old)
			createHTML(parent, vnode, ns, nextSibling)
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
		}
	}
	function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns

		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (!maybeSetContentEditable(vnode)) {
			updateNodes(element, old.children, vnode.children, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(parent, old.instance)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode = vnodes[start]
			if (vnode != null) {
				var key = vnode.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequence
	var lisTemp = []
	function makeLisIndices(a) {
		var result = [0]
		var u = 0, v = 0, i = 0
		var il = lisTemp.length = a.length
		for (var i = 0; i < il; i++) lisTemp[i] = a[i]
		for (var i = 0; i < il; ++i) {
			if (a[i] === -1) continue
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				lisTemp[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				// Fast integer average without overflow.
				// eslint-disable-next-line no-bitwise
				var c = (u >>> 1) + (v >>> 1) + (u & v & 1)
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) lisTemp[i] = result[u - 1]
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = lisTemp[v]
		}
		lisTemp.length = 0
		return result
	}

	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}

	// This covers a really specific edge case:
	// - Parent node is keyed and contains child
	// - Child is removed, returns unresolved promise in `onbeforeremove`
	// - Parent node is moved in keyed diff
	// - Remaining children still need moved appropriately
	//
	// Ideally, I'd track removed nodes as well, but that introduces a lot more
	// complexity and I'm not exactly interested in doing that.
	function moveNodes(parent, vnode, nextSibling) {
		var frag = $doc.createDocumentFragment()
		moveChildToFrag(parent, frag, vnode)
		insertNode(parent, frag, nextSibling)
	}
	function moveChildToFrag(parent, frag, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				for (var i = 0; i < vnode.instance.length; i++) {
					frag.appendChild(vnode.instance[i])
				}
			} else if (vnode.tag !== "[") {
				// Don't recurse for text nodes *or* elements, just fragments
				frag.appendChild(vnode.dom)
			} else if (vnode.children.length === 1) {
				vnode = vnode.children[0]
				if (vnode != null) continue
			} else {
				for (var i = 0; i < vnode.children.length; i++) {
					var child = vnode.children[i]
					if (child != null) moveChildToFrag(parent, frag, child)
				}
			}
			break
		}
	}

	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}

	function maybeSetContentEditable(vnode) {
		if (vnode.attrs == null || (
			vnode.attrs.contenteditable == null && // attribute
			vnode.attrs.contentEditable == null // property
		)) return false
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted.")
		return true
	}

	//remove
	function removeNodes(parent, vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) removeNode(parent, vnode)
		}
	}
	function removeNode(parent, vnode) {
		var mask = 0
		var original = vnode.state
		var stateResult, attrsResult
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
			var result = callHook.call(vnode.state.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				mask = 1
				stateResult = result
			}
		}
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode.attrs.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				// eslint-disable-next-line no-bitwise
				mask |= 2
				attrsResult = result
			}
		}
		checkState(vnode, original)

		// If we can, try to fast-path it and avoid all the overhead of awaiting
		if (!mask) {
			onremove(vnode)
			removeChild(parent, vnode)
		} else {
			if (stateResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 1) { mask &= 2; if (!mask) reallyRemove() }
				}
				stateResult.then(next, next)
			}
			if (attrsResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 2) { mask &= 1; if (!mask) reallyRemove() }
				}
				attrsResult.then(next, next)
			}
		}

		function reallyRemove() {
			checkState(vnode, original)
			onremove(vnode)
			removeChild(parent, vnode)
		}
	}
	function removeHTML(parent, vnode) {
		for (var i = 0; i < vnode.instance.length; i++) {
			parent.removeChild(vnode.instance[i])
		}
	}
	function removeChild(parent, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				removeHTML(parent, vnode)
			} else {
				if (vnode.tag !== "[") {
					parent.removeChild(vnode.dom)
					if (!Array.isArray(vnode.children)) break
				}
				if (vnode.children.length === 1) {
					vnode = vnode.children[0]
					if (vnode != null) continue
				} else {
					for (var i = 0; i < vnode.children.length; i++) {
						var child = vnode.children[i]
						if (child != null) removeChild(parent, child)
					}
				}
			}
			break
		}
	}
	function onremove(vnode) {
		if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}

	//attrs
	function setAttrs(vnode, attrs, ns) {
		// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
		//
		// Also, the DOM does things to inputs based on the value, so it needs set first.
		// See: https://github.com/MithrilJS/mithril.js/issues/2622
		if (vnode.tag === "input" && attrs.type != null) vnode.dom.setAttribute("type", attrs.type)
		var isFileInput = attrs != null && vnode.tag === "input" && attrs.type === "file"
		for (var key in attrs) {
			setAttr(vnode, key, null, attrs[key], ns, isFileInput)
		}
	}
	function setAttr(vnode, key, old, value, ns, isFileInput) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== "object" || key === "type" && vnode.tag === "input") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
		if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode.dom, old, value)
		else if (hasPropertyKey(vnode, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				//setting input[type=file][value] to same value causes an error to be generated if it's non-empty
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && (isFileInput || vnode.dom === activeElement())) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return
				//setting input[type=file][value] to different value is an error if it's non-empty
				// Not ideal, but it at least works around the most common source of uncaught exceptions for now.
				if (isFileInput && "" + value !== "") { console.error("`value` is read-only on file inputs!"); return }
				/* eslint-enable no-implicit-coercion */
			}
			vnode.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode.dom.setAttribute(key, "")
				else vnode.dom.removeAttribute(key)
			}
			else vnode.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n") updateEvent(vnode, key, undefined)
		else if (key === "style") updateStyle(vnode.dom, old, null)
		else if (
			hasPropertyKey(vnode, key, ns)
			&& key !== "className"
			&& key !== "title" // creates "null" as title
			&& !(key === "value" && (
				vnode.tag === "option"
				|| vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement()
			))
			&& !(vnode.tag === "input" && key === "type")
		) {
			vnode.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode, attrs) {
		if ("value" in attrs) {
			if(attrs.value === null) {
				if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null
			} else {
				var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
				if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
					vnode.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined)
	}
	function updateAttrs(vnode, old, attrs, ns) {
		if (old && old === attrs) {
			console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major")
		}
		if (attrs != null) {
			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
			//
			// Also, the DOM does things to inputs based on the value, so it needs set first.
			// See: https://github.com/MithrilJS/mithril.js/issues/2622
			if (vnode.tag === "input" && attrs.type != null) vnode.dom.setAttribute("type", attrs.type)
			var isFileInput = vnode.tag === "input" && attrs.type === "file"
			for (var key in attrs) {
				setAttr(vnode, key, old && old[key], attrs[key], ns, isFileInput)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {
					removeAttr(vnode, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode.dom
	}

	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}

	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {
		// Save this, so the current redraw is correctly tracked.
		this._ = currentRedraw
	}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler = this["on" + ev.type]
		var result
		if (typeof handler === "function") result = handler.call(ev.currentTarget, ev)
		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev)
		if (this._ && ev.redraw !== false) (0, this._)()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}

	//event
	function updateEvent(vnode, key, value) {
		if (vnode.events != null) {
			vnode.events._ = currentRedraw
			if (vnode.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = value
			} else {
				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key.slice(2), vnode.events, false)
			vnode.events[key] = value
		}
	}

	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		do {
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode.state.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode.dom = old.dom
		vnode.domSize = old.domSize
		vnode.instance = old.instance
		// One would think having the actual latest attributes would be ideal,
		// but it doesn't let us properly diff based on our current internal
		// representation. We have to save not only the old DOM info, but also
		// the attributes used to create it, as we diff *that*, not against the
		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
		// need to save the children and text as they are conceptually not
		// unlike special "attributes" internally.
		vnode.attrs = old.attrs
		vnode.children = old.children
		vnode.text = old.text
		return true
	}

	var currentDOM

	return function(dom, vnodes, redraw) {
		if (!dom) throw new TypeError("DOM element being rendered to does not exist.")
		if (currentDOM != null && dom.contains(currentDOM)) {
			throw new TypeError("Node is currently being rendered to and thus is locked.")
		}
		var prevRedraw = currentRedraw
		var prevDOM = currentDOM
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI

		currentDOM = dom
		currentRedraw = typeof redraw === "function" ? redraw : undefined
		try {
			// First time rendering into a node clears it out
			if (dom.vnodes == null) dom.textContent = ""
			vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
			dom.vnodes = vnodes
			// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
			if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
			for (var i = 0; i < hooks.length; i++) hooks[i]()
		} finally {
			currentRedraw = prevRedraw
			currentDOM = prevDOM
		}
	}
}


/***/ }),

/***/ 1972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(3836)

module.exports = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}


/***/ }),

/***/ 3836:
/***/ ((module) => {

"use strict";


function Vnode(tag, key, attrs, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node == null || typeof node === "boolean") return null
	if (typeof node === "object") return node
	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
}
Vnode.normalizeChildren = function(input) {
	var children = []
	if (input.length) {
		var isKeyed = input[0] != null && input[0].key != null
		// Note: this is a *very* perf-sensitive check.
		// Fun fact: merging the loop like this is somehow faster than splitting
		// it, noticeably so.
		for (var i = 1; i < input.length; i++) {
			if ((input[i] != null && input[i].key != null) !== isKeyed) {
				throw new TypeError(
					isKeyed && (input[i] != null || typeof input[i] === "boolean")
						? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole."
						: "In fragments, vnodes must either all have keys or none have keys."
				)
			}
		}
		for (var i = 0; i < input.length; i++) {
			children[i] = Vnode.normalize(input[i])
		}
	}
	return children
}

module.exports = Vnode


/***/ }),

/***/ 4092:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var PromisePolyfill = __webpack_require__(1334)
var mountRedraw = __webpack_require__(2422)

module.exports = __webpack_require__(1714)(typeof window !== "undefined" ? window : null, PromisePolyfill, mountRedraw.redraw)


/***/ }),

/***/ 1714:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var buildPathname = __webpack_require__(158)
var hasOwn = __webpack_require__(8088)

module.exports = function($window, Promise, oncompletion) {
	var callbackCount = 0

	function PromiseProxy(executor) {
		return new Promise(executor)
	}

	// In case the global Promise is some userland library's where they rely on
	// `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
	// similar. Let's *not* break them.
	PromiseProxy.prototype = Promise.prototype
	PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto

	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise = new Promise(function(resolve, reject) {
				factory(buildPathname(url, args.params), args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}

			return wrap(promise)

			function wrap(promise) {
				var then = promise.then
				// Set the constructor, so engines know to not await or resolve
				// this as a native promise. At the time of writing, this is
				// only necessary for V8, but their behavior is the correct
				// behavior per spec. See this spec issue for more details:
				// https://github.com/tc39/ecma262/issues/1577. Also, see the
				// corresponding comment in `request/tests/test-request.js` for
				// a bit more background on the issue at hand.
				promise.constructor = PromiseProxy
				promise.then = function() {
					count++
					var next = then.apply(promise, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise
			}
		}
	}

	function hasHeader(args, name) {
		for (var key in args.headers) {
			if (hasOwn.call(args.headers, key) && key.toLowerCase() === name) return true
		}
		return false
	}

	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData || body instanceof $window.URLSearchParams)
			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")

			var xhr = new $window.XMLHttpRequest(), aborted = false, isTimeout = false
			var original = xhr, replacedAbort
			var abort = xhr.abort

			xhr.abort = function() {
				aborted = true
				abort.call(this)
			}

			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)

			if (assumeJSON && body != null && !hasHeader(args, "content-type")) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, "accept")) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = responseType

			for (var key in args.headers) {
				if (hasOwn.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}

			xhr.onreadystatechange = function(ev) {
				// Don't throw errors on xhr.abort().
				if (aborted) return

				if (ev.target.readyState === 4) {
					try {
						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url)
						// When the response type isn't "" or "text",
						// `xhr.responseText` is the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = ev.target.response, message

						if (responseType === "json") {
							// For IE and Edge, which don't implement
							// `responseType: "json"`.
							if (!ev.target.responseType && typeof args.extract !== "function") {
								// Handle no-content which will not parse.
								try { response = JSON.parse(ev.target.responseText) }
								catch (e) { response = null }
							}
						} else if (!responseType || responseType === "text") {
							// Only use this default if it's text. If a parsed
							// document is needed on old IE and friends (all
							// unsupported), the user should use a custom
							// `config` instead. They're already using this at
							// their own risk.
							if (response == null) response = ev.target.responseText
						}

						if (typeof args.extract === "function") {
							response = args.extract(ev.target, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}
						if (success) resolve(response)
						else {
							var completeErrorResponse = function() {
								try { message = ev.target.responseText }
								catch (e) { message = response }
								var error = new Error(message)
								error.code = ev.target.status
								error.response = response
								reject(error)
							}

							if (xhr.status === 0) {
								// Use setTimeout to push this code block onto the event queue
								// This allows `xhr.ontimeout` to run in the case that there is a timeout
								// Without this setTimeout, `xhr.ontimeout` doesn't have a chance to reject
								// as `xhr.onreadystatechange` will run before it
								setTimeout(function() {
									if (isTimeout) return
									completeErrorResponse()
								})
							} else completeErrorResponse()
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}

			xhr.ontimeout = function (ev) {
				isTimeout = true
				var error = new Error("Request timed out")
				error.code = ev.target.status
				reject(error)
			}

			if (typeof args.config === "function") {
				xhr = args.config(xhr, args, url) || xhr

				// Propagate the `abort` to any replacement XHR as well.
				if (xhr !== original) {
					replacedAbort = xhr.abort
					xhr.abort = function() {
						aborted = true
						replacedAbort.call(this)
					}
				}
			}

			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData || body instanceof $window.URLSearchParams) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				resolve(data)
			}
			script.onerror = function() {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
			}
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
	}
}


/***/ }),

/***/ 5576:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var mountRedraw = __webpack_require__(2422)

module.exports = __webpack_require__(809)(typeof window !== "undefined" ? window : null, mountRedraw)


/***/ }),

/***/ 6293:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// This exists so I'm only saving it once.


var hasOwn = __webpack_require__(8088)

module.exports = Object.assign || function(target, source) {
	for (var key in source) {
		if (hasOwn.call(source, key)) target[key] = source[key]
	}
}


/***/ }),

/***/ 5198:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// Note: this is mildly perf-sensitive.
//
// It does *not* use `delete` - dynamic `delete`s usually cause objects to bail
// out into dictionary mode and just generally cause a bunch of optimization
// issues within engines.
//
// Ideally, I would've preferred to do this, if it weren't for the optimization
// issues:
//
// ```js
// const hasOwn = require("./hasOwn")
// const magic = [
//     "key", "oninit", "oncreate", "onbeforeupdate", "onupdate",
//     "onbeforeremove", "onremove",
// ]
// module.exports = (attrs, extras) => {
//     const result = Object.assign(Object.create(null), attrs)
//     for (const key of magic) delete result[key]
//     if (extras != null) for (const key of extras) delete result[key]
//     return result
// }
// ```

var hasOwn = __webpack_require__(8088)
// Words in RegExp literals are sometimes mangled incorrectly by the internal bundler, so use RegExp().
var magic = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$")

module.exports = function(attrs, extras) {
	var result = {}

	if (extras != null) {
		for (var key in attrs) {
			if (hasOwn.call(attrs, key) && !magic.test(key) && extras.indexOf(key) < 0) {
				result[key] = attrs[key]
			}
		}
	} else {
		for (var key in attrs) {
			if (hasOwn.call(attrs, key) && !magic.test(key)) {
				result[key] = attrs[key]
			}
		}
	}

	return result
}


/***/ }),

/***/ 8088:
/***/ ((module) => {

"use strict";
// This exists so I'm only saving it once.


module.exports = {}.hasOwnProperty


/***/ }),

/***/ 4468:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mithril_1 = __importDefault(__webpack_require__(1497));
__webpack_require__(8255);
__webpack_require__(733);
__webpack_require__(7980);
__webpack_require__(7804);
var routing_service_1 = __webpack_require__(3580);
var register_service_worker_1 = __webpack_require__(8128);
(0, register_service_worker_1.registerServiceWorker)({
    onSuccess: function (registration) { return console.log('SW registered: ', registration); },
    onUpdate: function (registration) { return console.log('SW updated: ', registration); },
});
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }
mithril_1.default.route(document.body, routing_service_1.routingSvc.defaultRoute, routing_service_1.routingSvc.routingTable());


/***/ }),

/***/ 9599:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveImg = void 0;
var pharma_webp_1 = __importDefault(__webpack_require__(7563));
var nutrition_webp_1 = __importDefault(__webpack_require__(7534));
var beverage_webp_1 = __importDefault(__webpack_require__(831));
var resolveImg = function (label, img) {
    return label === 'pharma'
        ? pharma_webp_1.default
        : label === 'nutrition'
            ? nutrition_webp_1.default
            : label === 'beverage'
                ? beverage_webp_1.default
                : img;
};
exports.resolveImg = resolveImg;


/***/ }),

/***/ 6353:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AboutPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var mithril_materialized_1 = __webpack_require__(2445);
var mithril_ui_form_1 = __webpack_require__(1782);
var models_1 = __webpack_require__(3962);
var md = function (highlight) {
    if (highlight === void 0) { highlight = false; }
    return "#### About\n\nThis website offers an overview of state-of-the-art interventions to enhance human performance. In order to use it, contact TNO to obtain the JSON database file describing all interventions.\n\n##### Disclaimer\n\n**This platform is intended for informational purposes only and it does not provide medical advice.** It is not a substitute for professional medical advice, diagnosis or treatment. The information, including but not limited to, text, graphics, images and other material contained on this website are for informational purposes only. No material on this site is intended to be a substitute for professional medical advice, diagnosis or treatment. The use and/or implementation of information presented on this platform is users own responsibility. TNO is not liable for the information which is offered on and/or via this platform.\n\n##### How to use this platform\n\n###### Ministry of Defence employee\n\n<p class=\"".concat(highlight ? 'red-text' : '', "\">In order to use this platform, you will need to upload a configuration file (JSON) on the home page. You can request the latest version of this configuration file by contacting the HCSE (Human Capability & Survivability Enhancement) program leader, [Olaf Binsch](mailto:olaf.binsch@tno.nl). Without this file, there will be no interventions displayed on the platform.</p>\n\nYou can use this platform to browse through the collection of intervention technologies on the overview page. You can use filters in the Advanced Search bar to specify what you are looking for in an intervention.\n\nBy selecting \u2018Compare\u2019, recognizable by the <i class=\"material-icons\">balance</i> icon, for different intervention technologies, you can view them alongside each other on the Compare page. Bookmarking an intervention allows you to find them more easily next time you visit the platform. If you have any questions about the HCSE interventions, you can contact the expert that is listed at the bottom of each intervention page.\n\n###### Administrator\n\nIf you are an administrator and you want to contribute to the platform by adding or updating an HCSE intervention, you can change the current user to administrator. This allows you to add and change interventions using the button \"Add new intervention\". Remember that the changes will only be saved locally on your own PC. If you want to implement your changes in the master file, do the following:\n\n1. Make sure you have uploaded the latest configuration file from the HCSE sharepoint folder\n2. Implement you changes or additions to the platform\n3. Download your new configuration file (.json) and place this file in the HCSE sharepoint folder as the new master file. Make sure to move the previous version into the Archive folder.\n\n**HCSE program leader:** [Olaf Binsch](mailto:olaf.binsch@tno.nl)<br>**Email:** olaf.binsch@tno.nl \n");
};
var AboutPage = function () {
    return {
        oninit: function (_a) {
            var setPage = _a.attrs.actions.setPage;
            return setPage(models_1.Dashboards.ABOUT);
        },
        view: function (_a) {
            var _b = _a.attrs, _c = _b.state, curUser = _c.curUser, model = _c.model, saveCurUser = _b.actions.saveCurUser;
            var isCleared = !model || !model.interventions || model.interventions.length === 0;
            if (!curUser)
                saveCurUser('mod');
            return [
                (0, mithril_1.default)('.row', [
                    [
                        (0, mithril_1.default)(mithril_materialized_1.Select, {
                            key: curUser,
                            label: 'Current user',
                            initialValue: curUser,
                            placeholder: 'Select user',
                            options: [
                                { id: 'mod', label: 'Defence employee' },
                                { id: 'admin', label: 'Administrator' },
                            ],
                            // data: users.reduce((acc, cur) => {
                            //   acc[cur.name] = cur.url || null;
                            //   return acc;
                            // }, {} as Record<string, string | null>),
                            onchange: function (v) { return v && saveCurUser(v[0]); },
                            className: 'col s6',
                        }),
                    ],
                    // m(FlatButton, {
                    //   label: 'Logout',
                    //   onclick: () => saveCurUser(''),
                    //   iconName: 'logout',
                    //   className: 'col s6',
                    // }),
                ]),
                (0, mithril_1.default)('.row', mithril_1.default.trust((0, mithril_ui_form_1.render)(md(isCleared)))),
            ];
        },
    };
};
exports.AboutPage = AboutPage;


/***/ }),

/***/ 715:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComparisonPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var models_1 = __webpack_require__(3962);
var mithril_materialized_1 = __webpack_require__(2445);
var utils_1 = __webpack_require__(6849);
var mithril_ui_form_1 = __webpack_require__(1782);
var ComparisonPage = function () {
    var ASPECT_COL_WIDTH = 100;
    var isInitialized = false;
    var interventionLookup = {};
    var autocompleteData = {};
    var pageWidth = 400;
    var toName = function (t) {
        return "".concat(t.intervention, ": ").concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, t.mainCap, false));
    };
    var initialize = function (model) {
        var technologies = model.interventions;
        if (technologies.length === 0)
            return;
        technologies.forEach(function (cur) {
            var counter = 1;
            var name = toName(cur);
            while (interventionLookup[name]) {
                name = "".concat(toName(cur), " (").concat(counter++, ")");
            }
            interventionLookup[cur.id] = { name: name, technology: cur };
            interventionLookup[name] = { name: cur.id };
            autocompleteData[name] = null;
        });
        isInitialized = true;
    };
    return {
        oninit: function (_a) {
            var setPage = _a.attrs.actions.setPage;
            setPage(models_1.Dashboards.COMPARE);
        },
        oncreate: function (_a) {
            var dom = _a.dom;
            pageWidth = dom.clientWidth;
        },
        view: function (_a) {
            var _b = _a.attrs, _c = _b.state, _d = _c.compareList, compareList = _d === void 0 ? [] : _d, model = _c.model, setCompareList = _b.actions.setCompareList;
            if (!isInitialized)
                initialize(model);
            var selectedInterventions = compareList.map(function (c) { return interventionLookup[c].technology; });
            var colWidth = Math.round((pageWidth - ASPECT_COL_WIDTH) / selectedInterventions.length);
            return (0, mithril_1.default)('.row.compare', { style: 'height: 85vh' }, [
                (0, mithril_1.default)('.col.s12', [
                    (0, mithril_1.default)(mithril_materialized_1.Chips, {
                        label: 'Selected for comparison',
                        secondaryPlaceholder: 'Add an intervention',
                        autocompleteOptions: {
                            data: autocompleteData,
                            minLength: 3,
                        },
                        data: compareList.map(function (id) { return ({ tag: interventionLookup[id].name }); }),
                        onchange: function (chips) {
                            var ids = chips.filter(function (c) { return c.tag; }).map(function (c) { return interventionLookup[c.tag].name; });
                            setCompareList(ids);
                        },
                    }),
                ]),
                compareList.length > 0 &&
                    (0, mithril_1.default)('table', [
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('th', { style: "width: ".concat(ASPECT_COL_WIDTH, "px") }, 'Aspect')
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('th', { style: "width: ".concat(colWidth, "px") }, t.intervention);
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Category'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.interventionCategoryOptions, t.category, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Capability'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', "".concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, t.mainCap, false), " ").concat((0, utils_1.getOptionsLabel)(utils_1.hpeClassificationOptions, t.hpeClassification, false)));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Specific cap.'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.joinListWithAnd)((0, utils_1.optionsToTxt)(t.specificCap, utils_1.specificCapabilityOptions, false)));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Description'))
                        ], selectedInterventions.map(function (t) { return (0, mithril_1.default)('td', t.desc); }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Invasive'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.invasivenessOptions, t.invasive, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Maturity'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.maturityOptions, t.maturity, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Booster'))
                        ], selectedInterventions.map(function (t) { return (0, mithril_1.default)('td', t.booster ? 'Yes' : 'No'); }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Side effects'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', { className: t.hasSideEffects === models_1.CHOICE.YES && t.sideEffects ? 'tooltip' : '' }, [
                                (0, utils_1.getOptionsLabel)(utils_1.NoYesUnknown, t.hasSideEffects, false),
                                t.sideEffects && (0, mithril_1.default)('span.tooltiptext', (0, mithril_ui_form_1.render)(t.sideEffects, true)),
                            ]);
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Ind. diff.'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', { className: t.hasIndDiff === models_1.CHOICE.YES && t.diff ? 'tooltip' : '' }, [
                                (0, utils_1.getOptionsLabel)(utils_1.NoYesUnknown, t.hasIndDiff, false),
                                t.diff && (0, mithril_1.default)('span.tooltiptext', (0, mithril_ui_form_1.render)(t.diff, true)),
                            ]);
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Ethical'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', { className: t.hasEthical === models_1.CHOICE.YES && t.ethical ? 'tooltip' : '' }, [
                                (0, utils_1.getOptionsLabel)(utils_1.NoYesUnknown, t.hasEthical, false),
                                t.ethical && (0, mithril_1.default)('span.tooltiptext', (0, mithril_ui_form_1.render)(t.ethical, true)),
                            ]);
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Evidence indication'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.evidenceDirOptions, t.evidenceDir, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Quality of evidence'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.evidenceLevelOptions, t.evidenceScore, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Availability'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.availabilityOptions, t.availability, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Incubation'))
                        ], selectedInterventions.map(function (t) { return (0, mithril_1.default)('td', t.incubation); }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Effect duration'))
                        ], selectedInterventions.map(function (t) { return (0, mithril_1.default)('td', t.effectDuration); }), true)),
                        // m('tr', [
                        //   m('td', m('b', 'Examples')),
                        //   ...selectedInterventions.map((t) => m('td', t.examples)),
                        // ]),
                        // m('tr', [
                        //   m('td', m('b', 'Practical')),
                        //   ...selectedInterventions.map((t) => m('td', t.practical)),
                        // ]),
                    ]),
            ]);
        },
    };
};
exports.ComparisonPage = ComparisonPage;


/***/ }),

/***/ 7257:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HomePage = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var mithril_materialized_1 = __webpack_require__(2445);
var background_jpg_1 = __importDefault(__webpack_require__(9025));
var services_1 = __webpack_require__(7852);
var models_1 = __webpack_require__(3962);
var utils_1 = __webpack_require__(6849);
var mithril_ui_form_1 = __webpack_require__(1782);
var HomePage = function () {
    var readerAvailable = window.File && window.FileReader && window.FileList && window.Blob;
    return {
        oninit: function (_a) {
            var setPage = _a.attrs.actions.setPage;
            setPage(models_1.Dashboards.HOME);
            // const uriModel = m.route.param('model');
            // if (!uriModel) {
            //   return;
            // }
            // try {
            //   const decompressed = lz.decompressFromEncodedURIComponent(uriModel);
            //   if (!decompressed) {
            //     return;
            //   }
            //   const model = JSON.parse(decompressed);
            //   saveModel(model);
            //   changePage(Dashboards.OVERVIEW);
            // } catch (err) {
            //   console.error(err);
            // }
        },
        view: function (_a) {
            var _b = _a.attrs, _c = _b.state.model, model = _c === void 0 ? models_1.defaultModel : _c, _d = _b.actions, saveModel = _d.saveModel, changePage = _d.changePage;
            var isCleared = !model.interventions || model.interventions.length === 0;
            return [
                (0, mithril_1.default)('div', { style: 'position: relative;' }, [
                    (0, mithril_1.default)('.overlay.center', { style: 'position: absolute;' }, (0, mithril_1.default)('h3.bold', { style: 'background-color: #ffffff50; padding: 10px 0; border-radius: 10px;' }, mithril_1.default.trust("H'PAD<br/>Human Performance Augmentation Dashboard"))),
                    (0, mithril_1.default)('img.responsive-img.center', { src: background_jpg_1.default }),
                    (0, mithril_1.default)('.buttons.center', { style: 'margin: 10px auto;' }, [
                        (0, mithril_1.default)(mithril_materialized_1.Button, {
                            iconName: 'clear',
                            disabled: isCleared,
                            className: 'btn-large',
                            label: 'Clear',
                            modalId: 'clearAll',
                        }),
                        // typeof model.version === "number" && m(
                        // 	Button,
                        // 	{
                        // 		iconName: "edit",
                        // 		className: "btn-large",
                        // 		label: "Continue",
                        // 		onclick: () => {
                        // 			routingSvc.switchTo(Dashboards.OVERVIEW);
                        // 		},
                        // 	},
                        // ),
                        (0, mithril_1.default)('a#downloadAnchorElem', { style: 'display:none' }),
                        (0, mithril_1.default)(mithril_materialized_1.Button, {
                            iconName: 'download',
                            disabled: isCleared,
                            className: 'btn-large',
                            label: 'Download',
                            onclick: function () {
                                var dlAnchorElem = document.getElementById('downloadAnchorElem');
                                if (!dlAnchorElem) {
                                    return;
                                }
                                var version = typeof model.version === 'undefined' ? 1 : model.version++;
                                var dataStr = 'data:text/json;charset=utf-8,' +
                                    encodeURIComponent(JSON.stringify(__assign(__assign({}, model), { version: version }), null, 2));
                                dlAnchorElem.setAttribute('href', dataStr);
                                dlAnchorElem.setAttribute('download', "".concat((0, utils_1.formatDate)(), "_v").concat((0, mithril_ui_form_1.padLeft)(version, 3), "_hpte_model.json"));
                                dlAnchorElem.click();
                            },
                        }),
                        (0, mithril_1.default)('input#selectFiles[type=file][accept=.json]', { style: 'display:none' }),
                        readerAvailable &&
                            (0, mithril_1.default)(mithril_materialized_1.Button, {
                                iconName: 'upload',
                                className: 'btn-large',
                                label: 'Upload',
                                onclick: function () {
                                    var fileInput = document.getElementById('selectFiles');
                                    fileInput.onchange = function () {
                                        if (!fileInput) {
                                            return;
                                        }
                                        var files = fileInput.files;
                                        if (files && files.length <= 0) {
                                            return;
                                        }
                                        var reader = new FileReader();
                                        reader.onload = function (e) {
                                            var result = e &&
                                                e.target &&
                                                e.target.result &&
                                                JSON.parse(e.target.result.toString());
                                            result && result.version && saveModel(result);
                                            changePage(models_1.Dashboards.INTERVENTIONS);
                                        };
                                        var data = files && files.item(0);
                                        data && reader.readAsText(data);
                                    };
                                    fileInput.click();
                                },
                            }),
                        // m(Button, {
                        //   iconName: 'link',
                        //   className: 'btn-large',
                        //   label: 'Permalink',
                        //   onclick: () => {
                        //     const permLink = document.createElement('input') as HTMLInputElement;
                        //     document.body.appendChild(permLink);
                        //     if (!permLink) {
                        //       return;
                        //     }
                        //     const compressed = lz.compressToEncodedURIComponent(JSON.stringify(model));
                        //     const url = `${window.location.href}${
                        //       /\?/.test(window.location.href) ? '&' : '?'
                        //     }model=${compressed}`;
                        //     permLink.value = url;
                        //     permLink.select();
                        //     permLink.setSelectionRange(0, 999999); // For mobile devices
                        //     try {
                        //       const successful = document.execCommand('copy');
                        //       if (successful) {
                        //         M.toast({
                        //           html: 'Copied permanent link to clipboard.',
                        //           classes: 'yellow black-text',
                        //         });
                        //       }
                        //     } catch (err) {
                        //       M.toast({
                        //         html: 'Failed copying link to clipboard: ' + err,
                        //         classes: 'red',
                        //       });
                        //     } finally {
                        //       document.body.removeChild(permLink);
                        //     }
                        //   },
                        // }),
                    ]),
                    (0, mithril_1.default)('.section.white', (0, mithril_1.default)('.row.container.center', [
                        (0, mithril_1.default)('.row', [
                            (0, mithril_1.default)('.col.s12.m4', (0, mithril_1.default)('.icon-block', [
                                (0, mithril_1.default)('.center', (0, mithril_1.default)(mithril_materialized_1.Icon, { iconName: 'dashboard' })),
                                (0, mithril_1.default)('h5.center', 'Prepare'),
                                (0, mithril_1.default)('p.light', 'Create or select the interventions that are important for your mission.'),
                            ])),
                            (0, mithril_1.default)('.col.s12.m4', (0, mithril_1.default)('.icon-block', [
                                (0, mithril_1.default)('.center', (0, mithril_1.default)(mithril_materialized_1.Icon, { iconName: 'visibility' })),
                                (0, mithril_1.default)('h5.center', 'Assess'),
                                (0, mithril_1.default)('p.light', "Determine for each intervention how important it is, and your current performance, so you can prioritise and focus on the ones you really need."),
                            ])),
                            (0, mithril_1.default)('.col.s12.m4', (0, mithril_1.default)('.icon-block', [
                                (0, mithril_1.default)('.center', (0, mithril_1.default)(mithril_materialized_1.Icon, { iconName: 'balance' })),
                                (0, mithril_1.default)('h5.center', 'Compare'),
                                (0, mithril_1.default)('p.light', 'Compare and select interventions so you can choose the one that fits best with your needs.'),
                            ])),
                        ]),
                    ])),
                    (0, mithril_1.default)(mithril_materialized_1.ModalPanel, {
                        id: 'clearAll',
                        title: 'Do you really want to delete everything?',
                        description: 'Are you sure that you want to delete your model?',
                        buttons: [
                            {
                                label: 'Yes',
                                iconName: 'delete',
                                onclick: function () {
                                    saveModel(models_1.defaultModel);
                                    services_1.routingSvc.switchTo(models_1.Dashboards.OVERVIEW);
                                },
                            },
                            { label: 'No', iconName: 'cancel' },
                        ],
                    }),
                ]),
            ];
        },
    };
};
exports.HomePage = HomePage;


/***/ }),

/***/ 3012:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6353), exports);
__exportStar(__webpack_require__(7257), exports);
__exportStar(__webpack_require__(4745), exports);
__exportStar(__webpack_require__(4195), exports);
__exportStar(__webpack_require__(2547), exports);
__exportStar(__webpack_require__(5199), exports);
__exportStar(__webpack_require__(715), exports);
__exportStar(__webpack_require__(4068), exports);


/***/ }),

/***/ 2547:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterventionOverviewPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var mithril_materialized_1 = __webpack_require__(2445);
var mithril_ui_form_1 = __webpack_require__(1782);
var images_1 = __webpack_require__(9599);
var models_1 = __webpack_require__(3962);
var services_1 = __webpack_require__(7852);
var utils_1 = __webpack_require__(6849);
var ui_1 = __webpack_require__(2755);
var InterventionOverviewPage = function () {
    var toOptions = function (opt) {
        return __spreadArray([{ id: 0, label: '-', title: '' }], opt, true);
    };
    var mainCapOpt = toOptions(utils_1.mainCapabilityOptions);
    var techCatOpt = toOptions(utils_1.interventionCategoryOptions);
    var invasivenessOpt = toOptions(utils_1.invasivenessOptions);
    var maturityOpt = toOptions(utils_1.maturityOptions);
    var availabilityOpt = toOptions(utils_1.availabilityOptions);
    var ethicalOpt = toOptions(utils_1.ethicalConsiderationsOptions);
    var evidenceDirOpt = toOptions(utils_1.evidenceDirOptions);
    var evidenceQualityOpt = toOptions(utils_1.evidenceLevelOptions);
    var boosterOpt = toOptions(utils_1.boosterOptions);
    var specificCognitiveCapabilityOpt = toOptions(utils_1.specificCognitiveCapabilityOptions);
    var specificPhysicalCapabilityOpt = toOptions(utils_1.specificPhysicalCapabilityOptions);
    var specificMentalCapabilityOpt = toOptions(utils_1.specificMentalCapabilityOptions);
    var specificSocialCapabilityOpt = toOptions(utils_1.specificSocialCapabilityOptions);
    var specificPersonalityCapabilityOpt = toOptions(utils_1.specificPersonalityCapabilityOptions);
    var toInterventions = function (allInterventions) {
        return Object.values(allInterventions.reduce(function (acc, cur) {
            var _a, _b;
            var id = cur.id, img = cur.img, url = cur.url, intervention = cur.intervention, mechanism = cur.mechanism, desc = cur.desc, keywords = cur.keywords, booster = cur.booster, mainCap = cur.mainCap, hpeClassification = cur.hpeClassification, category = cur.category, invasive = cur.invasive, availability = cur.availability, maturity = cur.maturity, _c = cur.specificCap, specificCap = _c === void 0 ? [] : _c, hasEthical = cur.hasEthical, evidenceDir = cur.evidenceDir, evidenceScore = cur.evidenceScore, _d = cur.future, future = _d === void 0 ? false : _d;
            var key = intervention;
            var sc = specificCap instanceof Array ? specificCap : [specificCap];
            var search = "".concat(intervention, " ").concat(desc, " ").concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, mainCap), " ").concat(mechanism, " ").concat(keywords && keywords.length ? keywords.join(' ') : '', " ").concat((0, utils_1.getOptionsLabel)(utils_1.interventionCategoryOptions, category), " ").concat(sc.map(function (c) { return (0, utils_1.getOptionsLabel)(utils_1.specificCapabilityOptions, c); }).join(' '));
            if (acc.hasOwnProperty(key)) {
                acc[key].id.push(id);
                mechanism && acc[key].mechanism.push(mechanism);
                desc && acc[key].desc.push(desc);
                keywords && (_a = acc[key].desc).push.apply(_a, keywords);
                booster && acc[key].booster.push(booster);
                mainCap && acc[key].mainCap.push(mainCap);
                specificCap && specificCap instanceof Array && (_b = acc[key].specificCap).push.apply(_b, specificCap);
                hpeClassification && acc[key].hpeClassification.push(hpeClassification);
                category && acc[key].category.push(category);
                invasive && acc[key].invasive.push(invasive);
                availability && acc[key].availability.push(availability);
                maturity && acc[key].maturity.push(maturity);
                hasEthical && acc[key].ethicalConsiderations.push(hasEthical);
                evidenceDir && acc[key].evidenceDir.push(evidenceDir);
                evidenceScore && acc[key].evidenceScore.push(evidenceScore);
                acc[key].search += " ".concat(search);
            }
            else {
                acc[key] = {
                    id: [id],
                    intervention: intervention,
                    img: img,
                    url: url,
                    mechanism: [mechanism],
                    desc: desc ? [desc] : [],
                    keywords: keywords && keywords.length ? __spreadArray([], keywords, true) : [],
                    booster: [booster],
                    mainCap: [mainCap],
                    specificCap: specificCap instanceof Array ? __spreadArray([], specificCap, true) : [specificCap],
                    hpeClassification: [hpeClassification],
                    category: [category],
                    invasive: [invasive],
                    availability: [availability],
                    maturity: [maturity],
                    ethicalConsiderations: [],
                    evidenceDir: [],
                    evidenceScore: [],
                    search: search,
                    future: future,
                };
            }
            return acc;
        }, {}));
    };
    var interventions = [];
    return {
        oninit: function (_a) {
            var _b = _a.attrs, _c = _b.state, model = _c.model, showFutureInterventions = _c.showFutureInterventions, setPage = _b.actions.setPage;
            var _d = model.interventions, allInterventions = _d === void 0 ? [] : _d;
            var futureInterventionFilter = (0, utils_1.createInterventionFilter)(showFutureInterventions);
            interventions = toInterventions(allInterventions.filter(futureInterventionFilter));
            setPage(models_1.Dashboards.INTERVENTIONS);
        },
        view: function (_a) {
            var _b, _c, _d, _e, _f, _g, _h, _j;
            var _k = _a.attrs, _l = _k.state, model = _l.model, curUser = _l.curUser, _m = _l.bookmarks, bookmarks = _m === void 0 ? [] : _m, _o = _l.compareList, compareList = _o === void 0 ? [] : _o, searchFilters = _l.searchFilters, showFutureInterventions = _l.showFutureInterventions, _p = _k.actions, saveModel = _p.saveModel, changePage = _p.changePage, bookmark = _p.bookmark, compare = _p.compare, setSearchFilters = _p.setSearchFilters;
            if (interventions.length === 0) {
                var futureInterventionFilter = (0, utils_1.createInterventionFilter)(showFutureInterventions);
                var allInterventions = model.interventions;
                interventions = toInterventions(allInterventions.filter(futureInterventionFilter));
            }
            var searchFilter = searchFilters.searchFilter, mainCapFilter = searchFilters.mainCapFilter, specificCapFilter = searchFilters.specificCapFilter, categoryFilter = searchFilters.categoryFilter, invasivenessFilter = searchFilters.invasivenessFilter, maturityFilter = searchFilters.maturityFilter, availabilityFilter = searchFilters.availabilityFilter, boosterFilter = searchFilters.boosterFilter, ethicalFilter = searchFilters.ethicalFilter, evidenceDirFilter = searchFilters.evidenceDirFilter, evidenceQualityFilter = searchFilters.evidenceQualityFilter, bookmarked = searchFilters.bookmarked;
            var searchRegex = searchFilter ? new RegExp(searchFilter, 'i') : undefined;
            var filteredInterventions = interventions.filter(function (t) {
                if (searchRegex && !searchRegex.test(t.search || '')) {
                    return false;
                }
                if (bookmarked && t.id.every(function (id) { return bookmarks.indexOf(id) < 0; }))
                    return false;
                if ((boosterFilter && boosterFilter === 1 && !t.booster) ||
                    (boosterFilter === 2 && t.booster))
                    return false;
                if (mainCapFilter && !t.mainCap.some(function (c) { return c === mainCapFilter; })) {
                    return false;
                }
                if (specificCapFilter && !t.specificCap.some(function (c) { return c === specificCapFilter; })) {
                    return false;
                }
                if (categoryFilter && !t.category.some(function (c) { return c === categoryFilter; })) {
                    return false;
                }
                if (invasivenessFilter && !t.invasive.some(function (c) { return c === invasivenessFilter; })) {
                    return false;
                }
                if (maturityFilter && !t.maturity.some(function (c) { return c === maturityFilter; })) {
                    return false;
                }
                if (availabilityFilter && !t.availability.some(function (c) { return c === availabilityFilter; })) {
                    return false;
                }
                if (boosterFilter &&
                    !t.booster.some(function (c) { return (boosterFilter === models_1.YES_NO.YES && c) || (boosterFilter === models_1.YES_NO.NO && !c); })) {
                    return false;
                }
                if (ethicalFilter && !t.ethicalConsiderations.some(function (c) { return c === ethicalFilter; })) {
                    return false;
                }
                if (evidenceDirFilter && !t.evidenceDir.some(function (c) { return c === evidenceDirFilter; })) {
                    return false;
                }
                if (evidenceQualityFilter && !t.evidenceScore.some(function (c) { return c === evidenceQualityFilter; })) {
                    return false;
                }
                return true;
            });
            var hasFilters = filteredInterventions.length !== interventions.length;
            return [
                (0, mithril_1.default)('.row.intervention-overview-page', { style: 'height: 95vh' }, [
                    (0, mithril_1.default)('.col.s12', (0, mithril_1.default)('.row.search-filters', (0, mithril_1.default)('.col.s12.m3', {
                        style: 'height: 81px',
                    }, (0, mithril_1.default)(ui_1.TextInputWithClear, {
                        key: searchFilter || 'searchKey',
                        label: 'Search',
                        iconName: 'search',
                        className: 'bottom-margin0',
                        initialValue: searchFilter,
                        oninput: function (s) {
                            setSearchFilters({ searchFilter: s || '' });
                            // m.redraw();
                        },
                    })), (0, mithril_1.default)('.col.s6.m3', (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                        modalId: 'search',
                        iconName: 'manage_search',
                        iconClass: 'large-icon',
                        label: 'Adv.search',
                        onclick: function () {
                            setSearchFilters({ searchFilter: '' });
                        },
                    })), (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                        label: 'Bookmarked',
                        className: 'col s6 m3',
                        iconName: bookmarked ? 'star' : 'star_border',
                        iconClass: 'large-icon amber-text',
                        onclick: function () {
                            setSearchFilters({ bookmarked: !bookmarked });
                        },
                    }), 
                    // m(InputCheckbox, {
                    //   label: 'Bookmarked',
                    //   className: 'col s6 m3',
                    //   onchange: (v) => {
                    //     setSearchFilters({ bookmarked: v });
                    //   },
                    // }),
                    curUser &&
                        curUser === 'admin' &&
                        (0, mithril_1.default)('.right-align', (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                            label: 'Add new intervention',
                            iconName: 'add',
                            className: 'small',
                            onclick: function () {
                                var newTech = { id: (0, mithril_materialized_1.uniqueId)() };
                                model.interventions.push(newTech);
                                saveModel(model);
                                changePage(models_1.Dashboards.INTERVENTION, { id: newTech.id, edit: 'true' });
                            },
                        })))),
                    hasFilters && [
                        (0, mithril_1.default)('.col.s12.filters', [
                            (0, mithril_1.default)('span', "".concat(filteredInterventions.length, " search result").concat(filteredInterventions.length === 1 ? '' : 's', ": ")),
                            mainCapFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Capability: ".concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, mainCapFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', { onclick: function () { return setSearchFilters({ mainCapFilter: 0 }); } }, 'close'),
                                ]),
                            specificCapFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Spec.cap.: ".concat((0, utils_1.getOptionsLabel)(utils_1.specificCapabilityOptions, specificCapFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', { onclick: function () { return setSearchFilters({ specificCapFilter: 0 }); } }, 'close'),
                                ]),
                            categoryFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Category: ".concat((0, utils_1.getOptionsLabel)(utils_1.interventionCategoryOptions, categoryFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', { onclick: function () { return setSearchFilters({ categoryFilter: 0 }); } }, 'close'),
                                ]),
                            invasivenessFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Invasiveness: ".concat((0, utils_1.getOptionsLabel)(utils_1.invasivenessOptions, invasivenessFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ invasivenessFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            maturityFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Maturity: ".concat((0, utils_1.getOptionsLabel)(utils_1.maturityOptions, maturityFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ maturityFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            availabilityFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Availability: ".concat((0, utils_1.getOptionsLabel)(utils_1.availabilityOptions, availabilityFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ availabilityFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            boosterFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Booster: ".concat((0, utils_1.getOptionsLabel)(utils_1.boosterOptions, boosterFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ boosterFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            ethicalFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Ethical: ".concat((0, utils_1.getOptionsLabel)(utils_1.NoYesUnknown, ethicalFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ ethicalFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            evidenceDirFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Evidence indication: ".concat((0, utils_1.getOptionsLabel)(utils_1.evidenceDirOptions, evidenceDirFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ evidenceDirFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            evidenceQualityFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Evidence quality: ".concat((0, utils_1.getOptionsLabel)(utils_1.evidenceLevelOptions, evidenceQualityFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ evidenceQualityFilter: 0 }); },
                                    }, 'close'),
                                ]),
                        ]),
                    ],
                    filteredInterventions.map(function (t) {
                        var isBookmarked = t.id.some(function (id) { return bookmarks.indexOf(id) >= 0; });
                        var selectedForComparison = t.id.some(function (id) { return compareList.indexOf(id) >= 0; });
                        return (0, mithril_1.default)('.col.s12.m6.l4.xl3', (0, mithril_1.default)('.card.medium', {
                            className: t.future ? 'future-intervention-color' : undefined,
                        }, [
                            (0, mithril_1.default)('.v-responsive.card-img-height', [
                                (0, mithril_1.default)('a', {
                                    href: services_1.routingSvc.href(models_1.Dashboards.INTERVENTION, "?id=".concat(t.id[0])),
                                }, [
                                    (t.url || t.img) &&
                                        (0, mithril_1.default)('.v-image', {
                                            style: "background-image: url(".concat((0, images_1.resolveImg)(t.url, t.img), ")"),
                                            // alt: t.intervention,
                                        }),
                                    (0, mithril_1.default)('span.card-title.bold.sharpen.black-text', { title: t.intervention, style: 'z-index: 100' }, 
                                    // { className: isBookmarked ? 'amber-text' : 'black-text' },
                                    t.intervention),
                                ]),
                            ]),
                            (0, mithril_1.default)('.card-content', [
                                (0, mithril_1.default)('span.bold', t.mainCap
                                    .map(function (c, i) {
                                    return "".concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, c, false), " ").concat((0, utils_1.getOptionsLabel)(utils_1.hpeClassificationOptions, t.hpeClassification[i], false)).toUpperCase();
                                })
                                    .filter(utils_1.isUnique)
                                    .join(', ')),
                                (0, mithril_1.default)('p.overflow', t.desc[0]),
                            ]),
                            (0, mithril_1.default)('.card-action', (0, mithril_1.default)('a.tooltip', 
                            // 'a.tooltip.tooltipped[data-position=bottom][data-tooltip=SHOW]',
                            {
                                href: services_1.routingSvc.href(models_1.Dashboards.INTERVENTION, "?id=".concat(t.id[0])),
                            }, (0, mithril_1.default)(mithril_materialized_1.Icon, { iconName: 'visibility' }), (0, mithril_1.default)('span.tooltiptext', 'SHOW')), (0, mithril_1.default)('a.tooltip', 
                            // 'a.tooltip.tooltipped[data-position=bottom][data-tooltip=BOOKMARK]',
                            {
                                href: services_1.routingSvc.href(models_1.Dashboards.INTERVENTIONS),
                                onclick: function () {
                                    if (isBookmarked) {
                                        t.id.forEach(function (id) {
                                            if (bookmarks.indexOf(id) >= 0)
                                                bookmark(id);
                                        });
                                    }
                                    else {
                                        bookmark(t.id[0]);
                                    }
                                },
                            }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                                iconName: isBookmarked ? 'star' : 'star_border',
                                className: isBookmarked ? 'amber-text' : '',
                            }), (0, mithril_1.default)('span.tooltiptext', isBookmarked ? 'BOOKMARKED' : 'BOOKMARK')), t.future
                                ? (0, mithril_1.default)('a.tooltip', {
                                    href: services_1.routingSvc.href(models_1.Dashboards.INTERVENTION, "?id=".concat(t.id[0])),
                                }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                                    iconName: 'new_releases',
                                    className: 'right amber-text',
                                }), (0, mithril_1.default)('span.tooltiptext', 'FUTURE'))
                                : (0, mithril_1.default)('a.tooltip', {
                                    href: services_1.routingSvc.href(models_1.Dashboards.INTERVENTIONS),
                                    onclick: function () {
                                        if (selectedForComparison) {
                                            t.id.forEach(function (id) {
                                                if (compareList.indexOf(id) >= 0)
                                                    compare(id);
                                            });
                                        }
                                        else {
                                            compare(t.id[0]);
                                        }
                                    },
                                }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                                    iconName: 'balance',
                                    className: selectedForComparison ? 'amber-text' : '',
                                }), (0, mithril_1.default)('span.tooltiptext', selectedForComparison ? 'COMPARING' : 'COMPARE'))),
                        ]));
                    }),
                ]),
                (0, mithril_1.default)(mithril_materialized_1.ModalPanel, {
                    id: 'search',
                    title: 'Advanced search',
                    description: (0, mithril_1.default)('#adv-search.row', (0, mithril_1.default)(mithril_ui_form_1.LayoutForm, {
                        form: [
                            {
                                id: 'selectedFilters',
                                label: 'Select filters',
                                className: 'col s12',
                                multiple: true,
                                options: [
                                    { id: 'mainCapFilter', label: 'Capability' },
                                    { id: 'categoryFilter', label: 'Category' },
                                    { id: 'invasivenessFilter', label: 'Invasiveness' },
                                    { id: 'maturityFilter', label: 'Maturity' },
                                    { id: 'availabilityFilter', label: 'Availability' },
                                    { id: 'boosterFilter', label: 'Booster' },
                                    { id: 'ethicalFilter', label: 'Ethical' },
                                    { id: 'evidenceDirFilter', label: 'Evidence indication' },
                                    { id: 'evidenceQualityFilter', label: 'Evidence quality' },
                                ],
                                description: mainCapFilter
                                    ? (_b = mainCapOpt.filter(function (o) { return +o.id === mainCapFilter; }).shift()) === null || _b === void 0 ? void 0 : _b.title
                                    : undefined,
                            },
                            {
                                id: 'mainCapFilter',
                                label: 'Main capability',
                                className: 'col s12 m6 l4',
                                options: mainCapOpt,
                                description: mainCapFilter
                                    ? (_c = mainCapOpt.filter(function (o) { return +o.id === mainCapFilter; }).shift()) === null || _c === void 0 ? void 0 : _c.title
                                    : undefined,
                                show: 'selectedFilters = mainCapFilter',
                            },
                            {
                                id: 'specificCapFilter',
                                label: 'Specific cognitive capabilities',
                                type: 'select',
                                options: specificCognitiveCapabilityOpt,
                                className: 'col s12 m6 l4',
                                show: 'mainCapFilter = 1',
                            },
                            {
                                id: 'specificCapFilter',
                                label: 'Specific physical capabilities',
                                type: 'select',
                                options: specificPhysicalCapabilityOpt,
                                className: 'col s12 m6 l4',
                                show: 'mainCapFilter = 2',
                            },
                            {
                                id: 'specificCapFilter',
                                label: 'Specific mental capabilities',
                                type: 'select',
                                options: specificMentalCapabilityOpt,
                                className: 'col s12 m6 l4',
                                show: 'mainCapFilter = 3',
                            },
                            {
                                id: 'specificCapFilter',
                                label: 'Specific social capabilities',
                                type: 'select',
                                options: specificSocialCapabilityOpt,
                                className: 'col s12 m6 l4',
                                show: 'mainCapFilter = 4',
                            },
                            {
                                id: 'specificCapFilter',
                                label: 'Specific personality capabilities',
                                type: 'select',
                                options: specificPersonalityCapabilityOpt,
                                className: 'col s12 m6 l4',
                                show: 'mainCapFilter = 5',
                            },
                            {
                                id: 'categoryFilter',
                                label: 'Category',
                                className: 'col s12 m6 l4',
                                options: techCatOpt,
                                description: categoryFilter
                                    ? (_d = techCatOpt.filter(function (o) { return +o.id === categoryFilter; }).shift()) === null || _d === void 0 ? void 0 : _d.title
                                    : undefined,
                                show: 'selectedFilters = categoryFilter',
                            },
                            {
                                id: 'invasivenessFilter',
                                label: 'Invasiveness',
                                className: 'col s12 m6 l4',
                                options: invasivenessOpt,
                                description: invasivenessFilter
                                    ? (_e = invasivenessOpt.filter(function (o) { return +o.id === invasivenessFilter; }).shift()) === null || _e === void 0 ? void 0 : _e.title
                                    : undefined,
                                show: 'selectedFilters = invasivenessFilter',
                            },
                            {
                                id: 'maturityFilter',
                                label: 'Maturity',
                                className: 'col s12 m6 l4',
                                options: maturityOpt,
                                description: maturityFilter
                                    ? (_f = maturityOpt.filter(function (o) { return +o.id === maturityFilter; }).shift()) === null || _f === void 0 ? void 0 : _f.title
                                    : undefined,
                                show: 'selectedFilters = maturityFilter',
                            },
                            {
                                id: 'availabilityFilter',
                                label: 'Availability',
                                className: 'col s12 m6 l4',
                                options: availabilityOpt,
                                // description: availabilityFilter
                                //   ? availabilityOpt.filter((o) => o.id === availabilityFilter).shift()?.title
                                //   : undefined,
                                show: 'selectedFilters = availabilityFilter',
                            },
                            {
                                id: 'boosterFilter',
                                label: 'Booster',
                                className: 'col s12 m6 l4',
                                options: boosterOpt,
                                // description: boosterFilter
                                //   ? availabilityOpt.filter((o) => o.id === boosterFilter).shift()?.title
                                //   : undefined,
                                show: 'selectedFilters = boosterFilter',
                            },
                            {
                                id: 'ethicalFilter',
                                label: 'Ethical considerations',
                                className: 'col s12 m6 l4',
                                options: ethicalOpt,
                                description: ethicalFilter
                                    ? (_g = ethicalOpt.filter(function (o) { return +o.id === ethicalFilter; }).shift()) === null || _g === void 0 ? void 0 : _g.title
                                    : undefined,
                                show: 'selectedFilters = ethicalFilter',
                            },
                            {
                                id: 'evidenceDirFilter',
                                label: 'Evidence indication',
                                className: 'col s12 m6 l4',
                                options: evidenceDirOpt,
                                description: evidenceDirFilter
                                    ? (_h = evidenceDirOpt.filter(function (o) { return +o.id === evidenceDirFilter; }).shift()) === null || _h === void 0 ? void 0 : _h.title
                                    : undefined,
                                show: 'selectedFilters = evidenceDirFilter',
                            },
                            {
                                id: 'evidenceQualityFilter',
                                label: 'Evidence quality',
                                className: 'col s12 m6 l4',
                                options: evidenceQualityOpt,
                                description: evidenceQualityFilter
                                    ? (_j = evidenceQualityOpt.filter(function (o) { return +o.id === evidenceQualityFilter; }).shift()) === null || _j === void 0 ? void 0 : _j.title
                                    : undefined,
                                show: 'selectedFilters = evidenceQualityFilter',
                            },
                        ],
                        obj: searchFilters,
                        onchange: function () { return setSearchFilters(searchFilters); },
                    })),
                    bottomSheet: true,
                    fixedFooter: true,
                    buttons: [{ label: 'DONE' }],
                }),
            ];
        },
    };
};
exports.InterventionOverviewPage = InterventionOverviewPage;


/***/ }),

/***/ 4195:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterventionPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var mithril_materialized_1 = __webpack_require__(2445);
var mithril_ui_form_1 = __webpack_require__(1782);
var images_1 = __webpack_require__(9599);
var models_1 = __webpack_require__(3962);
var services_1 = __webpack_require__(7852);
var utils_1 = __webpack_require__(6849);
var InterventionPage = function () {
    var futureInterventionFilter;
    var initInterventionForm = function (interventions, id, users) {
        var added = new Set();
        var interventionOptions = interventions
            .filter(function (t) {
            if (added.has(t.intervention))
                return false;
            added.add(t.intervention);
            return t.id !== id;
        })
            .map(function (t) { return ({ id: t.id, label: t.intervention }); });
        return (0, utils_1.interventionForm)(users, interventionOptions);
    };
    var suggestSimilarInt = function (intervention, interventions) {
        var mainCap = intervention.mainCap, specificCap = intervention.specificCap;
        var sc = new Set(specificCap instanceof Array ? specificCap : [specificCap]);
        return interventions
            .filter(function (i) {
            return i.id !== intervention.id &&
                i.mainCap === mainCap &&
                i.specificCap &&
                (i.specificCap instanceof Array
                    ? i.specificCap.some(function (s) { return sc.has(s); })
                    : sc.has(i.specificCap));
        })
            .map(function (s) { return s.id; });
    };
    var id = '';
    var isEditing = false;
    var form1a = [];
    var form1b = [];
    var allInterventions = [];
    var isBookmarked = false;
    return {
        oninit: function (_a) {
            var _b;
            var _c = _a.attrs, _d = _c.state, model = _d.model, _e = _d.curIntervention, curIntervention = _e === void 0 ? {} : _e, showFutureInterventions = _d.showFutureInterventions, _f = _c.actions, setPage = _f.setPage, setIntervention = _f.setIntervention;
            var _g = model.interventions, technologies = _g === void 0 ? [] : _g, _h = model.users, users = _h === void 0 ? [] : _h;
            futureInterventionFilter = (0, utils_1.createInterventionFilter)(showFutureInterventions);
            setPage(models_1.Dashboards.INTERVENTION);
            id = mithril_1.default.route.param('id') || curIntervention.id || '';
            isEditing = mithril_1.default.route.param('edit') === true ? true : false;
            _b = initInterventionForm(technologies, id, users), form1a = _b[0], form1b = _b[1];
            var found = id === curIntervention.id
                ? curIntervention
                : technologies.filter(function (t) { return t.id === id; }).shift() || technologies[0];
            allInterventions = found
                ? technologies.filter(function (t) { return t.intervention === found.intervention; })
                : [];
            if (found !== curIntervention)
                setIntervention(found);
            window.scrollTo({ top: 0, left: 0 });
        },
        view: function (_a) {
            var _b;
            var _c = _a.attrs, _d = _c.state, _e = _d.curIntervention, curIntervention = _e === void 0 ? {} : _e, bookmarks = _d.bookmarks, _f = _d.compareList, compareList = _f === void 0 ? [] : _f, _g = _d.model, model = _g === void 0 ? models_1.defaultModel : _g, curUser = _d.curUser, _h = _c.actions, saveModel = _h.saveModel, changePage = _h.changePage, setIntervention = _h.setIntervention, bookmark = _h.bookmark, compare = _h.compare;
            id = mithril_1.default.route.param('id') || curIntervention.id || '';
            var users = model.users, _j = model.interventions, allTechnologies = _j === void 0 ? [] : _j;
            var interventions = allTechnologies.filter(futureInterventionFilter);
            if (!curIntervention.id || curIntervention.id !== id) {
                _b = initInterventionForm(interventions, id, users), form1a = _b[0], form1b = _b[1];
                var found_1 = interventions.filter(function (t) { return t.id === id; }).shift() || interventions[0];
                if (found_1) {
                    allInterventions = interventions.filter(function (t) { return t.intervention === found_1.intervention; });
                    setIntervention(found_1);
                }
                return;
            }
            isBookmarked = bookmarks.indexOf(curIntervention.id) >= 0;
            var selectedForComparison = compareList.indexOf(curIntervention.id) >= 0;
            var ownerId = curIntervention.owner;
            var updated = curIntervention.updated ? new Date(curIntervention.updated) : undefined;
            var owner = users.filter(function (u) { return u.id === ownerId; }).shift();
            var usedLiterature = curIntervention.literature;
            var md = (0, utils_1.resolveRefs)(curIntervention.literature).md2html;
            var mailtoLink = owner &&
                "mailto:".concat(owner.email, "?subject=").concat(curIntervention.intervention.replace(/ /g, '%20'));
            var similarTech = curIntervention.similar &&
                curIntervention.similar.length > 0 &&
                interventions.filter(function (t) { return curIntervention.similar.indexOf(t.id) >= 0; });
            var filteredSpecCapOpt = utils_1.specificCapabilityOptions.filter(function (c) { return c.mc === curIntervention.mainCap; });
            var separatorClassName = curIntervention.future
                ? 'black-text future-intervention-color'
                : undefined;
            console.log(curIntervention);
            console.log((0, utils_1.getOptionsLabel)(utils_1.interventionCategoryOptions, curIntervention.category));
            return [
                (0, mithril_1.default)('.row.intervention-page', { style: 'height: 95vh' }, curUser &&
                    curUser === 'admin' && [
                    (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                        className: 'right no-print',
                        label: isEditing ? 'Save' : 'Edit',
                        // disabled: isEditing,
                        iconName: isEditing ? 'save' : 'edit',
                        onclick: function () {
                            // if (
                            //   !isEditing &&
                            //   (!curIntervention.similar || curIntervention.similar.length === 0)
                            // ) {
                            //   curIntervention.similar = suggestSimilarInt(
                            //     curIntervention,
                            //     interventions
                            //   );
                            // }
                            isEditing = !isEditing;
                        },
                    }),
                    isEditing
                        ? [
                            (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                                className: 'right',
                                label: 'Delete',
                                iconName: 'delete',
                                modalId: 'deleteIntervention',
                            }),
                        ]
                        : (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                            className: 'right no-print',
                            label: 'Duplicate',
                            iconName: 'content_copy',
                            onclick: function () {
                                var clone = JSON.parse(JSON.stringify(curIntervention));
                                clone.intervention += ' (COPY)';
                                clone.id = (0, mithril_materialized_1.uuid4)();
                                model.interventions.push(clone);
                                isEditing = true;
                                setIntervention(clone);
                                changePage(models_1.Dashboards.INTERVENTION, { id: clone.id });
                            },
                        }),
                ], isEditing
                    ? (0, mithril_1.default)('.col.s12', [
                        (0, mithril_1.default)(mithril_ui_form_1.LayoutForm, {
                            form: form1a,
                            obj: curIntervention,
                            onchange: function () {
                                model.interventions = model.interventions.map(function (t) {
                                    return t.id === curIntervention.id ? curIntervention : t;
                                });
                                saveModel(model);
                            },
                        }),
                        (0, mithril_1.default)('.row', (0, mithril_1.default)('.col.s12.margin-top7', (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                            className: 'right',
                            label: 'Suggest similar',
                            iconName: 'auto_awesome',
                            disabled: !(curIntervention.mainCap &&
                                curIntervention.specificCap &&
                                (!(curIntervention.specificCap instanceof Array) ||
                                    curIntervention.specificCap.length > 0)),
                            onclick: function () {
                                curIntervention.similar = suggestSimilarInt(curIntervention, interventions);
                            },
                        }))),
                        (0, mithril_1.default)(mithril_ui_form_1.LayoutForm, {
                            form: form1b,
                            obj: curIntervention,
                            onchange: function () {
                                model.interventions = model.interventions.map(function (t) {
                                    return t.id === curIntervention.id ? curIntervention : t;
                                });
                                saveModel(model);
                            },
                        }),
                    ])
                    : [
                        (0, mithril_1.default)('h3', [
                            curIntervention.intervention,
                            (0, mithril_1.default)('a.btn-flat.btn-large.clean', {
                                style: 'padding: 0 5px',
                                onclick: function () { return bookmark(curIntervention.id); },
                            }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                                iconName: isBookmarked ? 'star' : 'star_border',
                                className: isBookmarked ? 'amber-text white' : 'white',
                            })),
                            !curIntervention.future &&
                                (0, mithril_1.default)('a.btn-flat.btn-large.clean', {
                                    style: 'padding: 0 5px',
                                    onclick: function () { return compare(curIntervention.id); },
                                }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                                    iconName: 'balance',
                                    className: selectedForComparison ? 'amber-text white' : 'white',
                                })),
                        ]),
                        curIntervention.desc && (0, mithril_1.default)('p.bold', md(curIntervention.desc)),
                        (0, mithril_1.default)('.col.s12.m6', (0, mithril_1.default)('.row.bottom-margin-15', allInterventions.length === 1
                            ? (0, mithril_1.default)('h5.separator', { className: separatorClassName }, 'Description')
                            : (0, mithril_1.default)('h5.separator.button-row', { className: separatorClassName }, __spreadArray([
                                'Description'
                            ], allInterventions.map(function (t, i) {
                                return (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                                    className: t.id === curIntervention.id
                                        ? 'bold grey lighten-3'
                                        : 'grey lighten-3',
                                    label: (0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, t.mainCap, false) ||
                                        "v".concat(i + 1),
                                    onclick: function () { return changePage(models_1.Dashboards.INTERVENTION, { id: t.id }); },
                                });
                            }), true)), (0, mithril_1.default)('section', [
                            curIntervention.category &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Category: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.interventionCategoryOptions, curIntervention.category),
                                ]),
                            curIntervention.mainCap &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Main capability: '),
                                    "".concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, curIntervention.mainCap, false), " ").concat((0, utils_1.getOptionsLabel)(utils_1.hpeClassificationOptions, curIntervention.hpeClassification, false)),
                                ]),
                            curIntervention.specificCap &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Specific capability: '),
                                    (0, utils_1.joinListWithAnd)((0, utils_1.optionsToTxt)(curIntervention.specificCap, filteredSpecCapOpt, false)) + '.',
                                ]),
                            curIntervention.invasive &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Invasive: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.invasivenessOptions, curIntervention.invasive) + '.',
                                ]),
                            curIntervention.maturity &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Maturity: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.maturityOptions, curIntervention.maturity) + '.',
                                ]),
                            typeof curIntervention.booster !== 'undefined' &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Can be used as booster: '),
                                    "".concat(curIntervention.booster
                                        ? 'Yes, the intervention can be applied quickly (approx. < 1 hour)'
                                        : 'No, the intervention can not be applied quickly (approx. < 1 hour)', "."),
                                ]),
                        ]))),
                        curIntervention.url &&
                            (0, mithril_1.default)('.col.s6.m6', (0, mithril_1.default)('img.responsive-img', {
                                src: (0, images_1.resolveImg)(curIntervention.url, curIntervention.img),
                                alt: curIntervention.intervention,
                            })),
                        similarTech &&
                            (0, mithril_1.default)('.col.s12', (0, mithril_1.default)('.row.bottom-margin0', (0, mithril_1.default)('p', (0, mithril_1.default)('span.bold', "Similar intervention".concat(similarTech.length > 1 ? 's' : '', ": ")), similarTech.map(function (s, i) {
                                return (0, mithril_1.default)('a', {
                                    href: services_1.routingSvc.href(models_1.Dashboards.INTERVENTION, "?id=".concat(s.id)),
                                    onclick: function () { return changePage(models_1.Dashboards.INTERVENTION, { id: s.id }); },
                                }, s.intervention + (i < similarTech.length - 1 ? ', ' : '.'));
                            })))),
                        (0, mithril_1.default)('.col.s12', (0, mithril_1.default)('.row.bottom-margin0', [
                            (0, mithril_1.default)('h5.separator', { className: separatorClassName }, 'How it works'),
                            curIntervention.mechanism &&
                                (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Mechanism: '), md(curIntervention.mechanism)]),
                            curIntervention.future &&
                                curIntervention.sota &&
                                (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'State of the art: '), md(curIntervention.sota)]),
                            curIntervention.examples &&
                                (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Examples: '), md(curIntervention.examples)]),
                            curIntervention.incubation &&
                                (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Incubation: '), md(curIntervention.incubation)]),
                            curIntervention.effectDuration &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Effect duration: '),
                                    md(curIntervention.effectDuration),
                                ]),
                            curIntervention.future &&
                                curIntervention.implications &&
                                (0, mithril_1.default)('h5.separator', { className: separatorClassName }, 'Future possibilities & implications'),
                            (0, mithril_1.default)('p.white', md(curIntervention.implications)),
                            (curIntervention.practical ||
                                curIntervention.sideEffects ||
                                curIntervention.diff ||
                                curIntervention.ethical ||
                                curIntervention.evidenceDir ||
                                curIntervention.evidenceScore ||
                                curIntervention.availability ||
                                (curIntervention.future && curIntervention.challenges)) &&
                                (0, mithril_1.default)('h5.separator', { className: separatorClassName }, 'Keep in mind'),
                            curIntervention.practical &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold[title=This information is not medical advice, please read the disclaimer!]', mithril_1.default.trust('Practical execution<sup class="red-text" style="font-size:1rem">*</sup>: ')),
                                    md(curIntervention.practical),
                                ]),
                            curIntervention.sideEffects &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Possible side-effects: '),
                                    md((0, utils_1.resolveChoice)(curIntervention.hasSideEffects, curIntervention.sideEffects)),
                                ]),
                            curIntervention.future &&
                                curIntervention.challenges &&
                                (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Challenges: '), md(curIntervention.challenges)]),
                            curIntervention.diff &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Individual differences: '),
                                    md((0, utils_1.resolveChoice)(curIntervention.hasIndDiff, curIntervention.diff)),
                                ]),
                            curIntervention.ethical &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Ethical considerations: '),
                                    md((0, utils_1.resolveChoice)(curIntervention.hasEthical, curIntervention.ethical)),
                                ]),
                            curIntervention.evidenceDir &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Evidence indication: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.evidenceDirOptions, curIntervention.evidenceDir) + '.',
                                ]),
                            curIntervention.evidenceScore &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Quality of evidence: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.evidenceLevelOptions, curIntervention.evidenceScore) + '.',
                                ]),
                            curIntervention.availability &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Availability: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.availabilityOptions, curIntervention.availability) + '.',
                                ]),
                            usedLiterature &&
                                usedLiterature.length > 0 &&
                                (0, mithril_1.default)('h5.separator', { className: separatorClassName }, 'References'),
                        ])),
                        (0, mithril_1.default)('.col.s12.m8', (0, mithril_1.default)('.row', [
                            usedLiterature && [
                                (0, mithril_1.default)('ol.browser-default', usedLiterature.map(function (l) {
                                    return (0, mithril_1.default)('li', (0, mithril_1.default)('a', {
                                        href: l.doi,
                                        alt: l.title,
                                        target: '_blank',
                                    }, l.title));
                                })),
                            ],
                        ])),
                        owner &&
                            (0, mithril_1.default)('.col.s12.m4', (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Expert: '), owner.name]), (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Email: '), (0, mithril_1.default)('a', { href: mailtoLink }, owner.email)]), owner.phone &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Phone: '),
                                    (0, mithril_1.default)('a', { href: "tel:".concat(owner.phone) }, owner.phone),
                                ]), updated && (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Last update: '), updated.toDateString()])),
                    ]),
                (0, mithril_1.default)(mithril_materialized_1.ModalPanel, {
                    id: 'deleteIntervention',
                    title: "Delete ".concat(curIntervention.intervention, "?"),
                    description: "Are you sure that you want to delete ".concat(curIntervention.intervention, "?"),
                    buttons: [
                        {
                            label: 'Yes',
                            iconName: 'delete',
                            onclick: function () {
                                model.interventions = model.interventions.filter(function (t) { return t.id !== curIntervention.id; });
                                saveModel(model);
                                changePage(models_1.Dashboards.INTERVENTIONS);
                            },
                        },
                        { label: 'No', iconName: 'cancel' },
                    ],
                }),
            ];
        },
    };
};
exports.InterventionPage = InterventionPage;


/***/ }),

/***/ 4068:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Layout = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var mithril_materialized_1 = __webpack_require__(2445);
var tno_svg_1 = __importDefault(__webpack_require__(3131));
var models_1 = __webpack_require__(3962);
var routing_service_1 = __webpack_require__(3580);
var Layout = function () { return ({
    view: function (_a) {
        var children = _a.children, _b = _a.attrs, _c = _b.state, page = _c.page, curUser = _c.curUser, changePage = _b.actions.changePage;
        var isActive = function (d) { return (page === d.id ? '.active' : ''); };
        var routes = routing_service_1.routingSvc
            .getList()
            .filter(function (d) { return curUser === 'admin' || d.id !== models_1.Dashboards.SETTINGS; })
            .filter(function (d) { return (typeof d.visible === 'boolean' ? d.visible : d.visible()) || isActive(d); });
        return (0, mithril_1.default)('.main', { style: 'overflow-x: hidden' }, [
            (0, mithril_1.default)('.navbar-fixed', { style: 'z-index: 1001' }, (0, mithril_1.default)('nav', (0, mithril_1.default)('.nav-wrapper', [
                (0, mithril_1.default)('a.brand-logo[href=#].show-on-large', { style: 'margin-left: 20px' }, [
                    (0, mithril_1.default)("img[width=60][height=60][src=".concat(tno_svg_1.default, "]"), {
                        style: 'margin-top: 5px; margin-left: -5px;',
                    }),
                    // m(
                    //   'div',
                    //   {
                    //     style:
                    //       'margin-top: 0px; position: absolute; top: 10px; left: 60px; width: 350px;',
                    //   },
                    //   m(
                    //     'h4.center.show-on-med-and-up.black-text',
                    //     { style: 'text-align: left; margin: 0;' },
                    //     'Zicht op overgewicht'
                    //   )
                    // ),
                ]),
                (0, mithril_1.default)(
                // 'a.sidenav-trigger[href=#!/home][data-target=slide-out]',
                // { onclick: (e: UIEvent) => e.preventDefault() },
                mithril_1.default.route.Link, {
                    className: 'sidenav-trigger',
                    'data-target': 'slide-out',
                    href: mithril_1.default.route.get(),
                }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                    iconName: 'menu',
                    className: 'hide-on-med-and-up black-text',
                    style: 'margin-left: 5px;',
                })),
                (0, mithril_1.default)('ul#slide-out.sidenav.hide-on-med-and-up', {
                    oncreate: function () {
                        var elems = document.querySelectorAll('.sidenav');
                        M.Sidenav.init(elems);
                    },
                }, routes.map(function (d) {
                    return (0, mithril_1.default)("li.tooltip".concat(isActive(d), ".unselectable"), [
                        (0, mithril_1.default)('a', { href: routing_service_1.routingSvc.href(d.id) }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                            className: d.iconClass ? " ".concat(d.iconClass) : '',
                            iconName: typeof d.icon === 'string' ? d.icon : d.icon(),
                        }), (typeof d.title === 'string' ? d.title : d.title()).toUpperCase()),
                    ]);
                })),
                (0, mithril_1.default)('ul.right.hide-on-med-and-down', routes.map(function (d) {
                    return (0, mithril_1.default)("li.tooltip".concat(isActive(d), ".unselectable"), [
                        (0, mithril_1.default)(mithril_materialized_1.Icon, {
                            className: 'hoverable' + (d.iconClass ? " ".concat(d.iconClass) : ''),
                            style: 'font-size: 2.2rem; width: 4rem;',
                            iconName: typeof d.icon === 'string' ? d.icon : d.icon(),
                            onclick: function () { return changePage(d.id); },
                        }),
                        (0, mithril_1.default)('span.tooltiptext', (typeof d.title === 'string' ? d.title : d.title()).toUpperCase()),
                    ]);
                })),
            ]))),
            (0, mithril_1.default)('.container', { style: 'padding-top: 1rem' }, children),
        ]);
    },
}); };
exports.Layout = Layout;


/***/ }),

/***/ 5199:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var mithril_materialized_1 = __webpack_require__(2445);
var mithril_ui_form_1 = __webpack_require__(1782);
var models_1 = __webpack_require__(3962);
var userForm = [
    { id: 'id', type: 'none', autogenerate: 'id' },
    {
        id: 'name',
        label: 'Name',
        icon: 'title',
        type: 'text',
        required: true,
        className: 'col s3',
    },
    {
        id: 'email',
        label: 'Email',
        icon: 'email',
        type: 'email',
        required: true,
        className: 'col s4',
    },
    {
        id: 'phone',
        label: 'Phone',
        icon: 'phone',
        type: 'text',
        className: 'col s3',
    },
    {
        id: 'isAuthor',
        label: 'Author',
        icon: 'edit_note',
        type: 'checkbox',
        className: 'col s2',
    },
    {
        id: 'url',
        label: 'Image link',
        icon: 'link',
        type: 'url',
        className: 'col s12',
    },
];
var SettingsPage = function () {
    var newUser = {};
    var addUser = false;
    var canSaveUser = false;
    return {
        oninit: function (_a) {
            var setPage = _a.attrs.actions.setPage;
            return setPage(models_1.Dashboards.SETTINGS);
        },
        view: function (_a) {
            var _b = _a.attrs, _c = _b.state, _d = _c.model, model = _d === void 0 ? models_1.defaultModel : _d, showFutureInterventions = _c.showFutureInterventions, _e = _b.actions, saveModel = _e.saveModel, setFutureInterventions = _e.setFutureInterventions;
            var _f = model.users, users = _f === void 0 ? [] : _f;
            return [
                (0, mithril_1.default)('.settings.page', [
                    (0, mithril_1.default)('.row', (0, mithril_1.default)('.col.s12', [
                        (0, mithril_1.default)('h4', 'Settings'),
                        (0, mithril_1.default)(mithril_materialized_1.Select, {
                            checkedId: showFutureInterventions,
                            label: 'Database settings',
                            options: [
                                { id: 'HIDE', label: 'Standard: Include only currently available interventions' },
                                { id: 'SHOW', label: 'All: Include currently possible and future interventions' },
                                { id: 'ONLY', label: 'Future: Include only future interventions' },
                            ],
                            onchange: function (showFutureInterventions) {
                                setFutureInterventions(showFutureInterventions[0]);
                            },
                        }),
                    ])),
                    (0, mithril_1.default)('.row.users', [
                        (0, mithril_1.default)('h4', 'Users'),
                        (0, mithril_1.default)(mithril_materialized_1.Collapsible, {
                            items: users.map(function (user) { return ({
                                key: user.id,
                                header: user.name || 'Empty',
                                body: (0, mithril_1.default)('.row', [
                                    (0, mithril_1.default)(mithril_ui_form_1.LayoutForm, {
                                        form: userForm,
                                        obj: user,
                                        onchange: function () { return saveModel(model); },
                                    }),
                                    (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                                        label: 'Delete',
                                        iconName: 'delete',
                                        className: 'right',
                                        onclick: function () {
                                            model.users = users.filter(function (u) { return u.id !== user.id; });
                                            saveModel(model);
                                        },
                                    }),
                                    (0, mithril_1.default)('a.waves-effect.waves-teal.btn-flat.right', { href: "mailto:".concat(user.email) }, (0, mithril_1.default)('i.material-icons left', 'email'), 'Open email'),
                                ]),
                            }); }),
                        }),
                        addUser &&
                            (0, mithril_1.default)(mithril_ui_form_1.LayoutForm, {
                                form: userForm,
                                obj: newUser,
                                onchange: function (isValid) {
                                    canSaveUser = isValid;
                                },
                            }),
                        (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                            label: addUser ? 'Save' : 'Add User',
                            disabled: addUser ? !canSaveUser : false,
                            iconName: addUser ? 'save' : 'add',
                            className: 'right',
                            onclick: function () {
                                if (addUser && canSaveUser) {
                                    model.users.push(newUser);
                                    model.users = model.users.sort(function (a, b) {
                                        return a.name.split(' ').pop().localeCompare(b.name.split(' ').pop());
                                    });
                                    saveModel(model);
                                    newUser = {};
                                    canSaveUser = false;
                                }
                                addUser = !addUser;
                            },
                        }),
                        addUser &&
                            (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                                label: 'Cancel',
                                iconName: 'cancel',
                                className: 'right',
                                onclick: function () {
                                    newUser = {};
                                    canSaveUser = false;
                                    addUser = false;
                                },
                            }),
                    ]),
                ]),
            ];
        },
    };
};
exports.SettingsPage = SettingsPage;


/***/ }),

/***/ 4745:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllWordsPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var mithril_ui_form_1 = __webpack_require__(1782);
var models_1 = __webpack_require__(3962);
var utils_1 = __webpack_require__(6849);
var ui_1 = __webpack_require__(2755);
var md = "#### Definition of terms";
var toLexicon = function (arr, header) {
    return arr
        .filter(function (c) { return c.title; })
        .map(function (_a) {
        var label = _a.label, title = _a.title;
        return ({
            a: "".concat(header ? "".concat(header, ": ").concat(label) : label),
            b: title + '.',
        });
    });
};
var lexicon = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], toLexicon(utils_1.mainCapabilityOptions, 'Main capability'), true), toLexicon(utils_1.specificCapabilityOptions, 'Specific capability'), true), toLexicon(utils_1.invasivenessOptions, 'Invasiveness'), true), toLexicon(utils_1.maturityOptions, 'Maturity'), true), toLexicon(utils_1.ethicalConsiderationsOptions, 'Ethical considerations'), true), [
    { a: 'Booster', b: 'The intervention can be applied quickly (approx. < 1 hour).' },
    { a: 'Booster', b: 'The intervention can be applied quickly (approx. < 1 hour).' },
    {
        a: 'Quality of evidence',
        b: 'Is based on what the type of research, e.g. meta-analyses, large or small sample sizes, randomized controlled trials, controlled environments, peer-reviewed.',
    },
    { a: 'Evidence indication', b: 'Whether an effect is present, absent, or undecided.' },
    {
        a: 'Effect direction',
        b: 'Whether the intervention increases or decreases a subjects capability level.',
    },
    {
        a: 'HCSE',
        b: 'Human Capability & Survivability Enhancement.',
    },
], false).sort(function (a, b) { return a.a.localeCompare(b.a); });
var textFilter = '';
var AllWordsPage = function () { return ({
    oninit: function (_a) {
        var setPage = _a.attrs.actions.setPage;
        return setPage(models_1.Dashboards.TAXONOMY);
    },
    view: function () {
        var regexFilter = textFilter && new RegExp(textFilter.toLowerCase(), 'i');
        var filteredLexicon = regexFilter
            ? lexicon.filter(function (l) { return regexFilter.test(l.a) || regexFilter.test(l.b); })
            : lexicon;
        return [
            (0, mithril_1.default)('.row', { style: 'height: 100vh' }, [
                (0, mithril_1.default)(ui_1.TextInputWithClear, {
                    label: 'Search for a definition',
                    id: 'filter',
                    initialValue: textFilter,
                    placeholder: 'Part of a word...',
                    iconName: 'filter_list',
                    oninput: function (v) {
                        textFilter = v ? v : '';
                        mithril_1.default.redraw();
                    },
                    style: 'margin-bottom: -4rem',
                    className: 'col s6 offset-m8 m4',
                }),
                (0, mithril_1.default)('.intro.col.s12', mithril_1.default.trust((0, mithril_ui_form_1.render)(md, false))),
                filteredLexicon &&
                    (0, mithril_1.default)('table.highlight', { style: 'margin-bottom: 3rem' }, [
                        (0, mithril_1.default)('thead', (0, mithril_1.default)('tr', [
                            (0, mithril_1.default)('th', 'Term'),
                            (0, mithril_1.default)('th', 'Definition'),
                            // m('th.hide-on-med-and-down', 'Reference'),
                        ])),
                        (0, mithril_1.default)('tbody', filteredLexicon.map(function (l) {
                            return (0, mithril_1.default)('tr', [
                                (0, mithril_1.default)('td', mithril_1.default.trust((0, mithril_ui_form_1.render)((0, utils_1.subSup)(l.a)))),
                                (0, mithril_1.default)('td', mithril_1.default.trust((0, mithril_ui_form_1.render)((0, utils_1.subSup)(l.b)))),
                                // l.ref &&
                                //   m(
                                //     'td.hide-on-med-and-down',
                                //     l.url ? m('a', { target: '_', alt: l.ref, href: l.url }, l.ref) : l.ref
                                //   ),
                            ]);
                        })),
                    ]),
            ]),
        ];
    },
}); };
exports.AllWordsPage = AllWordsPage;


/***/ }),

/***/ 2755:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9085), exports);
__exportStar(__webpack_require__(3474), exports);


/***/ }),

/***/ 9085:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircularSpinner = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var CircularSpinner = function () {
    return {
        view: function (_a) {
            var _b = _a.attrs, _c = _b === void 0 ? {} : _b, className = _c.className, style = _c.style;
            className = className || 'center-align';
            style = style || 'margin-top: 20%;';
            return (0, mithril_1.default)('div', { className: className, style: style }, (0, mithril_1.default)('.preloader-wrapper.big.active', (0, mithril_1.default)('.spinner-layer.spinner-blue-only', [
                (0, mithril_1.default)('.circle-clipper.left', (0, mithril_1.default)('.circle')),
                (0, mithril_1.default)('.gap.patch', (0, mithril_1.default)('.circle')),
                (0, mithril_1.default)('.circle-clipper.right', (0, mithril_1.default)('.circle')),
            ])));
        },
    };
};
exports.CircularSpinner = CircularSpinner;


/***/ }),

/***/ 3474:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextInputWithClear = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var mithril_materialized_1 = __webpack_require__(2445);
var utils_1 = __webpack_require__(6849);
var TextInputWithClear = function () {
    var id;
    var input;
    var clearButton;
    var labelElement;
    var debouncedOnInput;
    return {
        oninit: function (_a) {
            var _b = _a.attrs, oninput = _b.oninput, defId = _b.id;
            id = defId || (0, mithril_materialized_1.uniqueId)();
            debouncedOnInput = oninput && (0, utils_1.debounce)(oninput, 500);
        },
        view: function (_a) {
            var _b = _a.attrs, label = _b.label, initialValue = _b.initialValue, placeholder = _b.placeholder, iconName = _b.iconName, _c = _b.className, className = _c === void 0 ? 'col s12' : _c, style = _b.style, onchange = _b.onchange, oninput = _b.oninput;
            return (0, mithril_1.default)('.input-field', { className: className, style: style }, [
                iconName && (0, mithril_1.default)('i.material-icons prefix', iconName),
                (0, mithril_1.default)('input', {
                    id: id,
                    type: 'text',
                    placeholder: placeholder,
                    oncreate: function (_a) {
                        var dom = _a.dom;
                        input = dom;
                        if (initialValue) {
                            input.value = initialValue;
                        }
                    },
                    oninput: function () {
                        clearButton.style.opacity = typeof input.value !== 'undefined' ? '1' : '0';
                        input.value
                            ? labelElement.classList.add('active')
                            : labelElement.classList.remove('active');
                        debouncedOnInput && debouncedOnInput(input.value);
                    },
                    onchange: function () {
                        onchange && onchange(input.value);
                    },
                }),
                (0, mithril_1.default)('label', {
                    for: id,
                    className: initialValue || placeholder ? 'active' : undefined,
                    oncreate: function (_a) {
                        var dom = _a.dom;
                        return (labelElement = dom);
                    },
                }, label),
                (0, mithril_1.default)('a.waves-effect.waves-light.btn-flat', {
                    style: 'opacity: 0; float: right; position: relative; top: -45px; transition: opacity 0.2s linear;',
                    onclick: function () {
                        input.value = '';
                        !placeholder && labelElement.classList.remove('active');
                        clearButton.style.opacity = '0';
                        onchange && onchange('');
                        oninput && oninput('');
                    },
                    oncreate: function (_a) {
                        var dom = _a.dom;
                        clearButton = dom;
                        if (initialValue) {
                            clearButton.style.opacity = '1';
                        }
                    },
                }, (0, mithril_1.default)('i.material-icons', 'clear')),
            ]);
        },
    };
};
exports.TextInputWithClear = TextInputWithClear;


/***/ }),

/***/ 8330:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dashboards = void 0;
var Dashboards;
(function (Dashboards) {
    Dashboards["HOME"] = "HOME";
    Dashboards["TAXONOMY"] = "TAXONOMY";
    Dashboards["INTERVENTIONS"] = "INTERVENTIONS";
    Dashboards["INTERVENTION"] = "INTERVENTION";
    Dashboards["ABOUT"] = "ABOUT";
    Dashboards["SETTINGS"] = "SETTINGS";
    Dashboards["OVERVIEW"] = "OVERVIEW";
    Dashboards["COMPARE"] = "COMPARE";
    Dashboards["HELP"] = "HELP";
})(Dashboards || (exports.Dashboards = Dashboards = {}));


/***/ }),

/***/ 6868:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AVAILABILITY = exports.EVIDENCE_DIRECTION = exports.EVIDENCE_LEVEL = exports.LITERATURE_TYPE = exports.MATURITY = exports.EFFECT_DIRECTION = exports.INVASIVENESS_OBTRUSIVENESS = exports.YES_NO = exports.PERSONALITY_CAPABILITY = exports.SOCIAL_CAPABILITY = exports.MENTAL_CAPABILITY = exports.PHYSICAL_CAPABILITY = exports.COGNITION_CAPABILITY = exports.SPECIFIC_CAPABILITY = exports.MAIN_CAPABILITY = exports.HPE_CLASSIFICATION = exports.CHOICE = exports.STATUS = exports.INTERVENTION_CATEGORY = exports.defaultModel = void 0;
exports.defaultModel = {
    version: 1,
    lastUpdate: new Date().valueOf(),
    interventions: [],
    users: [],
};
var INTERVENTION_CATEGORY;
(function (INTERVENTION_CATEGORY) {
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["HARDWARE"] = 1] = "HARDWARE";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["BIO_ENHANCEMENT"] = 2] = "BIO_ENHANCEMENT";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["PHARMACOLOGICAL_SUBSTANCES_SUPPLEMENTS_AND_NUTRITION"] = 3] = "PHARMACOLOGICAL_SUBSTANCES_SUPPLEMENTS_AND_NUTRITION";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["TRAINING"] = 4] = "TRAINING";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["SELF_REGULATION"] = 5] = "SELF_REGULATION";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["NUTRITION"] = 6] = "NUTRITION";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["THERAPY"] = 7] = "THERAPY";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["OTHER"] = 8] = "OTHER";
})(INTERVENTION_CATEGORY || (exports.INTERVENTION_CATEGORY = INTERVENTION_CATEGORY = {}));
var STATUS;
(function (STATUS) {
    STATUS[STATUS["FIRST_DRAFT"] = 1] = "FIRST_DRAFT";
    STATUS[STATUS["READY_FOR_REVIEW"] = 2] = "READY_FOR_REVIEW";
    STATUS[STATUS["UNDER_REVIEW"] = 3] = "UNDER_REVIEW";
    STATUS[STATUS["REVIEWED"] = 4] = "REVIEWED";
    STATUS[STATUS["FINISHED"] = 5] = "FINISHED";
})(STATUS || (exports.STATUS = STATUS = {}));
var CHOICE;
(function (CHOICE) {
    CHOICE[CHOICE["NONE"] = 1] = "NONE";
    CHOICE[CHOICE["UNKNOWN"] = 2] = "UNKNOWN";
    CHOICE[CHOICE["YES"] = 3] = "YES";
})(CHOICE || (exports.CHOICE = CHOICE = {}));
var HPE_CLASSIFICATION;
(function (HPE_CLASSIFICATION) {
    HPE_CLASSIFICATION[HPE_CLASSIFICATION["OPTIMIZATION"] = 1] = "OPTIMIZATION";
    HPE_CLASSIFICATION[HPE_CLASSIFICATION["ENHANCEMENT"] = 2] = "ENHANCEMENT";
    HPE_CLASSIFICATION[HPE_CLASSIFICATION["DEGRADATION"] = 3] = "DEGRADATION";
})(HPE_CLASSIFICATION || (exports.HPE_CLASSIFICATION = HPE_CLASSIFICATION = {}));
var MAIN_CAPABILITY;
(function (MAIN_CAPABILITY) {
    MAIN_CAPABILITY[MAIN_CAPABILITY["COGNITION"] = 1] = "COGNITION";
    MAIN_CAPABILITY[MAIN_CAPABILITY["PHYSICAL"] = 2] = "PHYSICAL";
    MAIN_CAPABILITY[MAIN_CAPABILITY["MENTAL"] = 3] = "MENTAL";
    MAIN_CAPABILITY[MAIN_CAPABILITY["SOCIAL"] = 4] = "SOCIAL";
    MAIN_CAPABILITY[MAIN_CAPABILITY["PERSONALITY"] = 5] = "PERSONALITY";
})(MAIN_CAPABILITY || (exports.MAIN_CAPABILITY = MAIN_CAPABILITY = {}));
var SPECIFIC_CAPABILITY;
(function (SPECIFIC_CAPABILITY) {
    // Cognitive
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SITUATION_AWARENESS"] = 1] = "SITUATION_AWARENESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["EXECUTIVE_FUNCTIONS"] = 2] = "EXECUTIVE_FUNCTIONS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["LONG_TERM_MEMORY"] = 3] = "LONG_TERM_MEMORY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SHORT_TERM_MEMORY"] = 4] = "SHORT_TERM_MEMORY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["DECLARATIVE_MEMORY"] = 5] = "DECLARATIVE_MEMORY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["VIGILANCE"] = 6] = "VIGILANCE";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["PSYCHOMOTOR"] = 7] = "PSYCHOMOTOR";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["ATTENTION"] = 8] = "ATTENTION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SPEECH"] = 9] = "SPEECH";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["LEARNING"] = 10] = "LEARNING";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["ARITHMETIC"] = 11] = "ARITHMETIC";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["WORKING_MEMORY"] = 12] = "WORKING_MEMORY";
    // Physical
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["STRENGTH"] = 13] = "STRENGTH";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["ENDURANCE"] = 14] = "ENDURANCE";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["RECOVERY"] = 15] = "RECOVERY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["STRUCTURAL_TOUGHNESS"] = 16] = "STRUCTURAL_TOUGHNESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["THERMO_REGULATION"] = 17] = "THERMO_REGULATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["BLOOD_PRESSURE_REGULATION"] = 18] = "BLOOD_PRESSURE_REGULATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["IMMUNITY"] = 19] = "IMMUNITY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["PAIN"] = 20] = "PAIN";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["VISUAL_PERCEPTION"] = 21] = "VISUAL_PERCEPTION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["AUDITORY_PERCEPTION"] = 22] = "AUDITORY_PERCEPTION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["TACTILE_PERCEPTION"] = 23] = "TACTILE_PERCEPTION";
    // Mental
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["EMOTION_REGULATION"] = 24] = "EMOTION_REGULATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["STRESS"] = 25] = "STRESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["RESILIENCE"] = 26] = "RESILIENCE";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["MOTIVATION"] = 27] = "MOTIVATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SELF_ESTEEM"] = 28] = "SELF_ESTEEM";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SENSE_OF_FATIGUE"] = 29] = "SENSE_OF_FATIGUE";
    // Social
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["COLLABORATION"] = 30] = "COLLABORATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["COMMUNICATION"] = 31] = "COMMUNICATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SOCIAL_INTELLIGENCE"] = 32] = "SOCIAL_INTELLIGENCE";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SOCIAL_INTERACTION"] = 33] = "SOCIAL_INTERACTION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["EMPATHY"] = 34] = "EMPATHY";
    // Personality
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["LEADERSHIP"] = 35] = "LEADERSHIP";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["OBEDIENCE"] = 36] = "OBEDIENCE";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["RISK_TAKING"] = 37] = "RISK_TAKING";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["PERSISTANCE"] = 38] = "PERSISTANCE";
    // New
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["INC_EXPLOSIVENESS"] = 39] = "INC_EXPLOSIVENESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["INC_TRANQUILITY"] = 40] = "INC_TRANQUILITY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["DEC_PAIN_PERCEPTION"] = 41] = "DEC_PAIN_PERCEPTION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["CONSCIENSCIOUSNESS"] = 42] = "CONSCIENSCIOUSNESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["OPENNESS"] = 43] = "OPENNESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["EXTRAVERSION"] = 44] = "EXTRAVERSION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["NEUROTICISM"] = 45] = "NEUROTICISM";
})(SPECIFIC_CAPABILITY || (exports.SPECIFIC_CAPABILITY = SPECIFIC_CAPABILITY = {}));
var COGNITION_CAPABILITY;
(function (COGNITION_CAPABILITY) {
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["SITUATION_AWARENESS"] = 1] = "SITUATION_AWARENESS";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["EXECUTIVE_FUNCTIONS"] = 2] = "EXECUTIVE_FUNCTIONS";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["LONG_TERM_MEMORY"] = 3] = "LONG_TERM_MEMORY";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["SHORT_TERM_MEMORY"] = 4] = "SHORT_TERM_MEMORY";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["DECLARATIVE_MEMORY"] = 5] = "DECLARATIVE_MEMORY";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["VIGILANCE"] = 6] = "VIGILANCE";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["PSYCHOMOTOR"] = 7] = "PSYCHOMOTOR";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["VISUAL_PERCEPTION"] = 8] = "VISUAL_PERCEPTION";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["AUDITORY_PERCEPTION"] = 9] = "AUDITORY_PERCEPTION";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["TACTILE_PERCEPTION"] = 10] = "TACTILE_PERCEPTION";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["PAIN"] = 11] = "PAIN";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["ATTENTION"] = 12] = "ATTENTION";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["SPEECH"] = 13] = "SPEECH";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["LEARNING"] = 14] = "LEARNING";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["ARITHMETIC"] = 15] = "ARITHMETIC";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["SOCIAL_INTERACTION"] = 16] = "SOCIAL_INTERACTION";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["RECOVERY"] = 17] = "RECOVERY";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["WORKING_MEMORY"] = 18] = "WORKING_MEMORY";
})(COGNITION_CAPABILITY || (exports.COGNITION_CAPABILITY = COGNITION_CAPABILITY = {}));
var PHYSICAL_CAPABILITY;
(function (PHYSICAL_CAPABILITY) {
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["STRENGTH"] = 1] = "STRENGTH";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["ENDURANCE"] = 2] = "ENDURANCE";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["RECOVERY"] = 3] = "RECOVERY";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["SPEED"] = 4] = "SPEED";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["STRUCTURAL_TOUGHNESS"] = 5] = "STRUCTURAL_TOUGHNESS";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["PRECISION"] = 6] = "PRECISION";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["VISION"] = 7] = "VISION";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["HEARING"] = 8] = "HEARING";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["SENSE_OF_TOUCH"] = 9] = "SENSE_OF_TOUCH";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["ENERGY_EFFICIENCY"] = 10] = "ENERGY_EFFICIENCY";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["SLEEP_REGULATION"] = 11] = "SLEEP_REGULATION";
})(PHYSICAL_CAPABILITY || (exports.PHYSICAL_CAPABILITY = PHYSICAL_CAPABILITY = {}));
var MENTAL_CAPABILITY;
(function (MENTAL_CAPABILITY) {
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["EMOTION"] = 1] = "EMOTION";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["STRESS"] = 2] = "STRESS";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["RESILIENCE"] = 3] = "RESILIENCE";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["MOTIVATION"] = 4] = "MOTIVATION";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["SELF_ESTEEM"] = 5] = "SELF_ESTEEM";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["PAIN"] = 6] = "PAIN";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["SELF_REPORTED_FATIGUE"] = 7] = "SELF_REPORTED_FATIGUE";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["EMPATHY"] = 8] = "EMPATHY";
})(MENTAL_CAPABILITY || (exports.MENTAL_CAPABILITY = MENTAL_CAPABILITY = {}));
var SOCIAL_CAPABILITY;
(function (SOCIAL_CAPABILITY) {
    SOCIAL_CAPABILITY[SOCIAL_CAPABILITY["COLLABORATION"] = 1] = "COLLABORATION";
    SOCIAL_CAPABILITY[SOCIAL_CAPABILITY["COMMUNICATION"] = 2] = "COMMUNICATION";
    SOCIAL_CAPABILITY[SOCIAL_CAPABILITY["SOCIAL_INTELLIGENCE"] = 3] = "SOCIAL_INTELLIGENCE";
})(SOCIAL_CAPABILITY || (exports.SOCIAL_CAPABILITY = SOCIAL_CAPABILITY = {}));
var PERSONALITY_CAPABILITY;
(function (PERSONALITY_CAPABILITY) {
    PERSONALITY_CAPABILITY[PERSONALITY_CAPABILITY["LEADERSHIP"] = 1] = "LEADERSHIP";
    PERSONALITY_CAPABILITY[PERSONALITY_CAPABILITY["OBEDIENCE"] = 2] = "OBEDIENCE";
    PERSONALITY_CAPABILITY[PERSONALITY_CAPABILITY["MORALE"] = 3] = "MORALE";
    PERSONALITY_CAPABILITY[PERSONALITY_CAPABILITY["RISK_TAKING"] = 4] = "RISK_TAKING";
    PERSONALITY_CAPABILITY[PERSONALITY_CAPABILITY["PERSISTANCE"] = 5] = "PERSISTANCE";
})(PERSONALITY_CAPABILITY || (exports.PERSONALITY_CAPABILITY = PERSONALITY_CAPABILITY = {}));
var YES_NO;
(function (YES_NO) {
    //CAN BE USED AS A BOOSTER
    YES_NO[YES_NO["YES"] = 1] = "YES";
    YES_NO[YES_NO["NO"] = 2] = "NO";
})(YES_NO || (exports.YES_NO = YES_NO = {}));
var INVASIVENESS_OBTRUSIVENESS;
(function (INVASIVENESS_OBTRUSIVENESS) {
    INVASIVENESS_OBTRUSIVENESS[INVASIVENESS_OBTRUSIVENESS["LOW"] = 1] = "LOW";
    INVASIVENESS_OBTRUSIVENESS[INVASIVENESS_OBTRUSIVENESS["MEDIUM"] = 2] = "MEDIUM";
    INVASIVENESS_OBTRUSIVENESS[INVASIVENESS_OBTRUSIVENESS["HIGH"] = 3] = "HIGH";
})(INVASIVENESS_OBTRUSIVENESS || (exports.INVASIVENESS_OBTRUSIVENESS = INVASIVENESS_OBTRUSIVENESS = {}));
var EFFECT_DIRECTION;
(function (EFFECT_DIRECTION) {
    EFFECT_DIRECTION[EFFECT_DIRECTION["NEGATIVE"] = 1] = "NEGATIVE";
    EFFECT_DIRECTION[EFFECT_DIRECTION["POSITIVE"] = 2] = "POSITIVE";
})(EFFECT_DIRECTION || (exports.EFFECT_DIRECTION = EFFECT_DIRECTION = {}));
var MATURITY;
(function (MATURITY) {
    MATURITY[MATURITY["LOW"] = 1] = "LOW";
    MATURITY[MATURITY["MEDIUM"] = 2] = "MEDIUM";
    MATURITY[MATURITY["HIGH"] = 3] = "HIGH";
})(MATURITY || (exports.MATURITY = MATURITY = {}));
var LITERATURE_TYPE;
(function (LITERATURE_TYPE) {
    LITERATURE_TYPE[LITERATURE_TYPE["CASE_STUDY"] = 1] = "CASE_STUDY";
    LITERATURE_TYPE[LITERATURE_TYPE["THESIS"] = 2] = "THESIS";
    LITERATURE_TYPE[LITERATURE_TYPE["REPORT"] = 3] = "REPORT";
    LITERATURE_TYPE[LITERATURE_TYPE["TECHNICAL_REPORT"] = 4] = "TECHNICAL_REPORT";
    LITERATURE_TYPE[LITERATURE_TYPE["PRODUCER_WEBSITE"] = 5] = "PRODUCER_WEBSITE";
    LITERATURE_TYPE[LITERATURE_TYPE["WHITE_PAPER"] = 6] = "WHITE_PAPER";
    LITERATURE_TYPE[LITERATURE_TYPE["CONFERENCE_PROCEEDING"] = 7] = "CONFERENCE_PROCEEDING";
    LITERATURE_TYPE[LITERATURE_TYPE["PATENT"] = 8] = "PATENT";
    LITERATURE_TYPE[LITERATURE_TYPE["POPULAR_MEDIA"] = 9] = "POPULAR_MEDIA";
    LITERATURE_TYPE[LITERATURE_TYPE["CONSENSUS_STATEMENT"] = 10] = "CONSENSUS_STATEMENT";
    LITERATURE_TYPE[LITERATURE_TYPE["EMPERICAL_PR"] = 11] = "EMPERICAL_PR";
    LITERATURE_TYPE[LITERATURE_TYPE["REVIEW_PR"] = 12] = "REVIEW_PR";
    LITERATURE_TYPE[LITERATURE_TYPE["SYSTEMATIC_REVIEW_PR"] = 13] = "SYSTEMATIC_REVIEW_PR";
    LITERATURE_TYPE[LITERATURE_TYPE["META_ANALYSIS_PR"] = 14] = "META_ANALYSIS_PR";
})(LITERATURE_TYPE || (exports.LITERATURE_TYPE = LITERATURE_TYPE = {}));
var EVIDENCE_LEVEL;
(function (EVIDENCE_LEVEL) {
    EVIDENCE_LEVEL[EVIDENCE_LEVEL["GOOD"] = 1] = "GOOD";
    EVIDENCE_LEVEL[EVIDENCE_LEVEL["MEDIUM"] = 2] = "MEDIUM";
    EVIDENCE_LEVEL[EVIDENCE_LEVEL["LOW"] = 3] = "LOW";
})(EVIDENCE_LEVEL || (exports.EVIDENCE_LEVEL = EVIDENCE_LEVEL = {}));
var EVIDENCE_DIRECTION;
(function (EVIDENCE_DIRECTION) {
    EVIDENCE_DIRECTION[EVIDENCE_DIRECTION["GENERALLY_IN_FAVOR"] = 1] = "GENERALLY_IN_FAVOR";
    EVIDENCE_DIRECTION[EVIDENCE_DIRECTION["GENERALLY_AGAINST"] = 2] = "GENERALLY_AGAINST";
    EVIDENCE_DIRECTION[EVIDENCE_DIRECTION["UNDECIDED"] = 3] = "UNDECIDED";
})(EVIDENCE_DIRECTION || (exports.EVIDENCE_DIRECTION = EVIDENCE_DIRECTION = {}));
var AVAILABILITY;
(function (AVAILABILITY) {
    AVAILABILITY[AVAILABILITY["YES_WITHIN_THE_NETHERLANDS"] = 1] = "YES_WITHIN_THE_NETHERLANDS";
    AVAILABILITY[AVAILABILITY["YES_WITHIN_THE_EU"] = 2] = "YES_WITHIN_THE_EU";
    AVAILABILITY[AVAILABILITY["YES_OUTSIDE_THE_EU"] = 3] = "YES_OUTSIDE_THE_EU";
    AVAILABILITY[AVAILABILITY["NO"] = 4] = "NO";
    AVAILABILITY[AVAILABILITY["UNKNOWN"] = 5] = "UNKNOWN";
})(AVAILABILITY || (exports.AVAILABILITY = AVAILABILITY = {}));


/***/ }),

/***/ 3962:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(8330), exports);
__exportStar(__webpack_require__(6868), exports);
__exportStar(__webpack_require__(7183), exports);


/***/ }),

/***/ 7183:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 7852:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(9895), exports);
__exportStar(__webpack_require__(3580), exports);


/***/ }),

/***/ 9895:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cells = exports.appActions = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var meiosis_setup_1 = __webpack_require__(8104);
var _1 = __webpack_require__(7852);
var models_1 = __webpack_require__(3962);
var local_ldb_1 = __webpack_require__(3365);
var MODEL_KEY = 'HPET_MODEL';
var CUR_USER_KEY = 'HPET_CUR_USER';
var BOOKMARKS_KEY = 'HPET_BOOKMARK';
var COMPARE_LIST_KEY = 'HPET_COMPARE_LIST_KEY';
var SHOW_FUTURE_INTERVENTIONS = 'HPET_SHOW_FUTURE_INTERVENTIONS';
var appActions = function (_a) {
    var update = _a.update;
    return ({
        // addDucks: (cell, amount) => {
        //   cell.update({ ducks: (value) => value + amount });
        // },
        setPage: function (page) { return update({ page: page }); },
        changePage: function (page, params, query) {
            _1.routingSvc && _1.routingSvc.switchTo(page, params, query);
            update({ page: page });
        },
        saveModel: function (model) {
            model.lastUpdate = Date.now();
            model.version = model.version ? ++model.version : 1;
            if (model.interventions)
                model.interventions.sort(function (a, b) {
                    return (a.intervention || '').localeCompare(b.intervention || '');
                });
            local_ldb_1.ldb.set(MODEL_KEY, JSON.stringify(model));
            // console.log(JSON.stringify(model, null, 2));
            update({ model: function () { return model; } });
        },
        saveCurUser: function (curUser) {
            local_ldb_1.ldb.set(CUR_USER_KEY, curUser);
            update({ curUser: curUser });
        },
        setIntervention: function (curIntervention) {
            return update({ curIntervention: function () { return curIntervention; } });
        },
        bookmark: function (id) {
            return update({
                bookmarks: function (bookmarks) {
                    if (bookmarks === void 0) { bookmarks = []; }
                    var newBookmarks = (function () {
                        if (bookmarks.indexOf(id) >= 0)
                            return bookmarks.filter(function (b) { return b !== id; });
                        bookmarks.push(id);
                        return bookmarks;
                    })();
                    local_ldb_1.ldb.set(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
                    return newBookmarks;
                },
            });
        },
        compare: function (id) {
            return update({
                compareList: function (compareList) {
                    if (compareList === void 0) { compareList = []; }
                    var newCompareList = (function () {
                        if (compareList.indexOf(id) >= 0)
                            return compareList.filter(function (b) { return b !== id; });
                        compareList.push(id);
                        return compareList;
                    })();
                    local_ldb_1.ldb.set(COMPARE_LIST_KEY, JSON.stringify(newCompareList));
                    return newCompareList;
                },
            });
        },
        setCompareList: function (ids) {
            local_ldb_1.ldb.set(COMPARE_LIST_KEY, JSON.stringify(ids));
            update({ compareList: function () { return ids; } });
        },
        setSearchFilters: function (searchFilters) {
            // console.log(JSON.stringify(searchFilters, null, 2));
            update({ searchFilters: searchFilters });
        },
        setFutureInterventions: function (showFutureInterventions) {
            local_ldb_1.ldb.set(SHOW_FUTURE_INTERVENTIONS, showFutureInterventions);
            update({ showFutureInterventions: showFutureInterventions });
        },
    });
};
exports.appActions = appActions;
var initialize = function (update) { return __awaiter(void 0, void 0, void 0, function () {
    var ds, model, b, bookmarks, c, compareList, showFutureInterventions, curUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, local_ldb_1.ldb.get(MODEL_KEY)];
            case 1:
                ds = _a.sent();
                model = ds ? JSON.parse(ds) : models_1.defaultModel;
                return [4 /*yield*/, local_ldb_1.ldb.get(BOOKMARKS_KEY)];
            case 2:
                b = _a.sent();
                bookmarks = b ? JSON.parse(b) : [];
                return [4 /*yield*/, local_ldb_1.ldb.get(COMPARE_LIST_KEY)];
            case 3:
                c = _a.sent();
                compareList = c ? JSON.parse(c) : [];
                return [4 /*yield*/, local_ldb_1.ldb.get(SHOW_FUTURE_INTERVENTIONS)];
            case 4:
                showFutureInterventions = (_a.sent()) || 'HIDE';
                return [4 /*yield*/, local_ldb_1.ldb.get(CUR_USER_KEY)];
            case 5:
                curUser = (_a.sent()) || '';
                update({
                    model: function () { return model; },
                    bookmarks: function () { return bookmarks; },
                    compareList: function () { return compareList; },
                    curUser: curUser,
                    showFutureInterventions: showFutureInterventions,
                });
                return [2 /*return*/];
        }
    });
}); };
var app = {
    initial: {
        page: models_1.Dashboards.HOME,
        model: models_1.defaultModel,
        curIntervention: undefined,
        bookmarks: [],
        compareList: [],
        curUser: 'mod',
        searchFilters: {},
        showFutureInterventions: 'HIDE',
    },
};
exports.cells = (0, meiosis_setup_1.meiosisSetup)({ app: app });
initialize((0, exports.cells)().update);
exports.cells.map(function () {
    mithril_1.default.redraw();
});


/***/ }),

/***/ 8128:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Source: https://github.com/cra-template/pwa/blob/fc9613279681a06606f90514926b8078db629ec6/packages/cra-template-pwa/template/src/serviceWorkerRegistration.js
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unregister = exports.registerServiceWorker = void 0;
var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function registerServiceWorker(config) {
    if ( true && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        var publicUrl = new URL({"NODE_ENV":"production","PUBLIC_URL":"https://tno.github.io/hei/"}.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            console.log("Could not register service worker. Public path ".concat(publicUrl, " is not origin."));
            return;
        }
        window.addEventListener('load', function () {
            var swUrl = "".concat({"NODE_ENV":"production","PUBLIC_URL":"https://tno.github.io/hei/"}.PUBLIC_URL, "service-worker.js");
            if (isLocalhost) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                checkValidServiceWorker(swUrl, config);
                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                navigator.serviceWorker.ready.then(function () {
                    console.log('This web app is being served cache-first by a service worker.');
                });
            }
            else {
                // Is not localhost. Just register service worker
                registerValidSW(swUrl, config);
            }
        });
    }
}
exports.registerServiceWorker = registerServiceWorker;
function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(function (registration) {
        registration.onupdatefound = function () {
            var installingWorker = registration.installing;
            if (installingWorker == null) {
                return;
            }
            installingWorker.onstatechange = function () {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        // At this point, the updated precached content has been fetched,
                        // but the previous service worker will still serve the older
                        // content until all client tabs are closed.
                        console.log('New content is available and will be used when all ' +
                            'tabs for this page are closed. See https://cra.link/PWA.');
                        // Execute callback
                        if (config && config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    }
                    else {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "Content is cached for offline use." message.
                        console.log('Content is cached for offline use.');
                        // Execute callback
                        if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    })
        .catch(function (error) {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' },
    })
        .then(function (response) {
        // Ensure service worker exists, and that we really are getting a JS file.
        var contentType = response.headers.get('content-type');
        if (response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(function (registration) {
                registration.unregister().then(function () {
                    window.location.reload();
                });
            });
        }
        else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, config);
        }
    })
        .catch(function () {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then(function (registration) {
            registration.unregister();
        })
            .catch(function (error) {
            console.error(error.message);
        });
    }
}
exports.unregister = unregister;


/***/ }),

/***/ 3580:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routingSvc = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var models_1 = __webpack_require__(3962);
var meiosis_1 = __webpack_require__(9895);
var layout_1 = __webpack_require__(4068);
var components_1 = __webpack_require__(3012);
var intervention_overview_page_1 = __webpack_require__(2547);
var RoutingService = /** @class */ (function () {
    function RoutingService(dashboards) {
        this.setList(dashboards);
    }
    RoutingService.prototype.getList = function () {
        return this.dashboards;
    };
    RoutingService.prototype.setList = function (list) {
        this.dashboards = Object.freeze(list);
    };
    Object.defineProperty(RoutingService.prototype, "defaultRoute", {
        get: function () {
            var dashboard = this.dashboards.filter(function (d) { return d.default; }).shift();
            return dashboard ? dashboard.route : this.dashboards[0].route;
        },
        enumerable: false,
        configurable: true
    });
    RoutingService.prototype.route = function (dashboardId, query) {
        var dashboard = this.dashboards.filter(function (d) { return d.id === dashboardId; }).shift();
        return dashboard
            ? '#!' + dashboard.route + (query ? '?' + mithril_1.default.buildQueryString(query) : '')
            : this.defaultRoute;
    };
    RoutingService.prototype.href = function (dashboardId, params) {
        if (params === void 0) { params = ''; }
        var dashboard = this.dashboards.filter(function (d) { return d.id === dashboardId; }).shift();
        return dashboard ? "#!".concat(dashboard.route.replace(/:\w*/, '')).concat(params) : this.defaultRoute;
    };
    RoutingService.prototype.switchTo = function (dashboardId, params, query) {
        var dashboard = this.dashboards.filter(function (d) { return d.id === dashboardId; }).shift();
        if (dashboard) {
            var url = dashboard.route + (query ? '?' + mithril_1.default.buildQueryString(query) : '');
            mithril_1.default.route.set(url, params);
        }
    };
    RoutingService.prototype.routingTable = function () {
        // console.log('INIT');
        return this.dashboards.reduce(function (p, c) {
            p[c.route] =
                c.hasNavBar === false
                    ? {
                        render: function () {
                            var cell = (0, meiosis_1.cells)();
                            var actions = (0, meiosis_1.appActions)(cell);
                            return (0, mithril_1.default)(c.component, __assign(__assign({}, cell), { actions: actions }));
                        },
                    }
                    : {
                        // onmatch:
                        //   c.id === Dashboards.LOGIN
                        //     ? undefined
                        //     : () => {
                        //         if (c.id !== Dashboards.HOME && !Auth.isLoggedIn()) m.route.set('/login');
                        //       },
                        render: function () {
                            var cell = (0, meiosis_1.cells)();
                            var actions = (0, meiosis_1.appActions)(cell);
                            return (0, mithril_1.default)(layout_1.Layout, __assign(__assign({}, cell), { actions: actions, options: {} }), (0, mithril_1.default)(c.component, __assign(__assign({}, cell), { actions: actions })));
                        },
                    };
            return p;
        }, {});
    };
    return RoutingService;
}());
exports.routingSvc = new RoutingService([
    {
        id: models_1.Dashboards.HOME,
        title: 'HOME',
        icon: 'home',
        route: '/',
        visible: true,
        component: components_1.HomePage,
    },
    {
        id: models_1.Dashboards.INTERVENTIONS,
        title: 'OVERVIEW',
        icon: 'dashboard',
        // icon: 'display_settings',
        route: '/overview',
        visible: true,
        component: intervention_overview_page_1.InterventionOverviewPage,
    },
    {
        id: models_1.Dashboards.INTERVENTION,
        title: 'INTERVENTION',
        icon: 'visibility',
        route: '/intervention',
        visible: true,
        component: components_1.InterventionPage,
    },
    {
        id: models_1.Dashboards.COMPARE,
        title: 'Compare',
        icon: 'balance',
        route: '/compare',
        visible: true,
        component: components_1.ComparisonPage,
    },
    {
        id: models_1.Dashboards.SETTINGS,
        title: 'Settings',
        icon: 'settings',
        route: '/settings',
        visible: true,
        component: components_1.SettingsPage,
    },
    {
        id: models_1.Dashboards.TAXONOMY,
        title: 'TAXONOMY',
        icon: 'book',
        route: '/taxonomy',
        visible: true,
        component: components_1.AllWordsPage,
    },
    {
        id: models_1.Dashboards.ABOUT,
        title: 'About',
        icon: 'info',
        route: '/about',
        visible: true,
        component: components_1.AboutPage,
    },
]);


/***/ }),

/***/ 6849:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createInterventionFilter = exports.isUnique = exports.resolveRefs = exports.refRegex = exports.markdown2html = exports.interventionForm = exports.boosterOptions = exports.availabilityOptions = exports.evidenceLevelOptions = exports.evidenceDirOptions = exports.ethicalConsiderationsOptions = exports.effectDirectionOptions = exports.maturityOptions = exports.invasivenessOptions = exports.specificPersonalityCapabilityOptions = exports.specificSocialCapabilityOptions = exports.specificMentalCapabilityOptions = exports.specificPhysicalCapabilityOptions = exports.specificCognitiveCapabilityOptions = exports.specificCapabilityOptions = exports.mainCapabilityOptions = exports.hpeClassificationOptions = exports.interventionCategoryOptions = exports.resolveChoice = exports.NoYesUnknown = exports.statusOptions = exports.optionsToTxt = exports.joinListWithAnd = exports.getOptionsLabel = exports.getTextColorFromBackground = exports.formatDate = exports.debounce = exports.capitalize = exports.subSup = void 0;
var mithril_1 = __importDefault(__webpack_require__(1497));
var mithril_materialized_1 = __webpack_require__(2445);
var mithril_ui_form_1 = __webpack_require__(1782);
var models_1 = __webpack_require__(3962);
var supRegex = /\^([^_ ]+)(_|$|\s)/g;
var subRegex = /\_([^\^ ]+)(\^|$|\s)/g;
/** Expand markdown notation by converting A_1 to subscript and x^2 to superscript. */
var subSup = function (s) {
    return s ? s.replace(supRegex, "<sup>$1</sup>").replace(subRegex, "<sub>$1</sub>") : s;
};
exports.subSup = subSup;
var capitalize = function (s) { return s && s.charAt(0).toUpperCase() + s.slice(1); };
exports.capitalize = capitalize;
/**
 * Debounce function wrapper, i.e. between consecutive calls of the wrapped function,
 * there will be at least TIMEOUT milliseconds.
 * @param func Function to execute
 * @param timeout Timeout in milliseconds
 * @returns
 */
var debounce = function (func, timeout) {
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = window.setTimeout(function () {
            func.apply(void 0, args);
        }, timeout);
    };
};
exports.debounce = debounce;
var formatDate = function (date) {
    if (date === void 0) { date = new Date(); }
    var d = new Date(date);
    return "".concat(d.getFullYear(), "-").concat((0, mithril_materialized_1.padLeft)(d.getMonth() + 1), "-").concat((0, mithril_materialized_1.padLeft)(d.getDate()));
};
exports.formatDate = formatDate;
/**
 * Get a color that is clearly visible against a background color
 * @param backgroundColor Background color, e.g. #99AABB
 * @returns
 */
var getTextColorFromBackground = function (backgroundColor) {
    if (!backgroundColor) {
        return 'black-text';
    }
    var c = backgroundColor.substring(1); // strip #
    var rgb = parseInt(c, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >> 8) & 0xff; // extract green
    var b = (rgb >> 0) & 0xff; // extract blue
    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    return luma < 105 ? 'white-text' : 'black-text';
};
exports.getTextColorFromBackground = getTextColorFromBackground;
var getOptionsLabel = function (options, id, showTitle) {
    if (showTitle === void 0) { showTitle = true; }
    if (!id) {
        return '';
    }
    var print = function (o) {
        return showTitle ? "".concat(o.label).concat(o.title ? " (".concat(o.title.replace(/\.\s*$/, ''), ")") : '') : o.label;
    };
    if (id instanceof Array) {
        return options
            .filter(function (o) { return id.indexOf(o.id) >= 0; })
            .map(function (o) { return print(o); })
            .join(', ');
    }
    var found = options.filter(function (o) { return o.id === id; }).shift();
    return found ? print(found) : '';
};
exports.getOptionsLabel = getOptionsLabel;
/** Join a list of items with a comma, and use AND for the last item in the list. */
var joinListWithAnd = function (arr, and, prefix) {
    if (arr === void 0) { arr = []; }
    if (and === void 0) { and = 'and'; }
    if (prefix === void 0) { prefix = ''; }
    var terms = arr.filter(function (term) { return term; });
    return terms.length === 0
        ? ''
        : prefix +
            (terms.length === 1
                ? terms[0]
                : "".concat(terms
                    .slice(0, terms.length - 1)
                    .map(function (t, i) { return (i === 0 || typeof t === 'undefined' ? t : t.toLowerCase()); })
                    .join(', '), " ").concat(and, " ").concat(terms[terms.length - 1].toLowerCase()));
};
exports.joinListWithAnd = joinListWithAnd;
/** Convert a list of options to text (label + title?) */
var optionsToTxt = function (selectedIds, options, showTitle) {
    if (showTitle === void 0) { showTitle = true; }
    if (!selectedIds || (selectedIds instanceof Array && selectedIds.length === 0))
        return ['−'];
    var ids = selectedIds instanceof Array ? selectedIds : [selectedIds];
    var lookup = options.reduce(function (acc, cur) {
        acc[cur.id] = "".concat(cur.label).concat(showTitle && cur.title ? " (".concat(cur.title, ")") : '');
        return acc;
    }, {});
    return ids.map(function (id) { return lookup[id]; });
};
exports.optionsToTxt = optionsToTxt;
exports.statusOptions = [
    { id: models_1.STATUS.FIRST_DRAFT, label: 'First draft' },
    { id: models_1.STATUS.READY_FOR_REVIEW, label: 'Ready for review' },
    { id: models_1.STATUS.UNDER_REVIEW, label: 'Under review' },
    { id: models_1.STATUS.REVIEWED, label: 'Reviewed' },
    { id: models_1.STATUS.FINISHED, label: 'Finished' },
];
exports.NoYesUnknown = [
    { id: models_1.CHOICE.NONE, label: 'None' },
    { id: models_1.CHOICE.UNKNOWN, label: 'Unknown' },
    { id: models_1.CHOICE.YES, label: 'Yes' },
];
var resolveChoice = function (choice, text) {
    return !choice || choice === models_1.CHOICE.NONE
        ? exports.NoYesUnknown[0].label
        : choice === models_1.CHOICE.UNKNOWN
            ? exports.NoYesUnknown[1].label
            : text;
};
exports.resolveChoice = resolveChoice;
exports.interventionCategoryOptions = [
    { id: models_1.INTERVENTION_CATEGORY.BIO_ENHANCEMENT, label: 'Bio-enhancement', title: '' },
    { id: models_1.INTERVENTION_CATEGORY.HARDWARE, label: 'Hardware', title: '' },
    { id: models_1.INTERVENTION_CATEGORY.NUTRITION, label: 'Nutrition', title: '' },
    {
        id: models_1.INTERVENTION_CATEGORY.PHARMACOLOGICAL_SUBSTANCES_SUPPLEMENTS_AND_NUTRITION,
        label: 'Pharmacological substances, supplements and nutrition',
        title: '',
    },
    { id: models_1.INTERVENTION_CATEGORY.SELF_REGULATION, label: 'Self-regulation', title: '' },
    { id: models_1.INTERVENTION_CATEGORY.THERAPY, label: 'Therapy', title: '' },
    { id: models_1.INTERVENTION_CATEGORY.TRAINING, label: 'Training', title: '' },
    { id: models_1.INTERVENTION_CATEGORY.OTHER, label: 'Other', title: '' },
];
exports.hpeClassificationOptions = [
    {
        id: models_1.HPE_CLASSIFICATION.OPTIMIZATION,
        label: 'Optimization',
        title: 'The intervention improves human performance on a specific capability within biological limits',
    },
    {
        id: models_1.HPE_CLASSIFICATION.ENHANCEMENT,
        label: 'Enhancement',
        title: 'The intervention improves human performance on a specific capability above biological limits',
    },
    {
        id: models_1.HPE_CLASSIFICATION.DEGRADATION,
        label: 'Degradation',
        title: 'The intervention decreases human performance on a specific capability',
    },
];
exports.mainCapabilityOptions = [
    {
        id: models_1.MAIN_CAPABILITY.COGNITION,
        label: 'Cognition',
        title: 'The capability to perform intellectual functions and activities such as thinking, planning, maintaining situation awareness, vigilance, perception and memory',
    },
    {
        id: models_1.MAIN_CAPABILITY.PHYSICAL,
        label: 'Physical',
        title: 'The capability to perform body movements at, for instance, high speed, accuracy, strength or with long endurance',
    },
    {
        id: models_1.MAIN_CAPABILITY.MENTAL,
        label: 'Mental',
        title: 'The capability to achieve an optimal emotional and motivational state, for instance through self-confidence or mental thoughness',
    },
    {
        id: models_1.MAIN_CAPABILITY.SOCIAL,
        label: 'Social',
        title: 'The capability to achieve goals with others, for instance through leadership, team situational awareness, or connectedness',
    },
    {
        id: models_1.MAIN_CAPABILITY.PERSONALITY,
        label: 'Personality',
        title: 'Having an optimal, long-term, style of thinking, feeling and behaving. Examples include dispositional optimism, internal locus of control, self-regulation, and anxiety sensitivity',
    },
];
exports.specificCapabilityOptions = [
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.SITUATION_AWARENESS,
        label: 'Improved situation awareness',
        title: 'The perception of environmental elements and events with respect to time or space, the comprehension of their meaning, and the projection of their future status',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.EXECUTIVE_FUNCTIONS,
        label: 'Improved executive functions',
        title: 'Executive functions (collectively referred to as executive function and cognitive control) are a set of cognitive processes that are necessary for the cognitive control of behavior: selecting and successfully monitoring behaviors that facilitate the attainment of chosen goals. Executive functions include basic cognitive processes such as attentional control, cognitive inhibition, inhibitory control, working memory, and cognitive flexibility',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.LONG_TERM_MEMORY,
        label: 'Increased long-term memory',
        title: 'Long-term memory allows us to store information for long periods of time. This information may be retrieved consciously (explicit memory) or unconsciously (implicit memory)',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.SHORT_TERM_MEMORY,
        label: 'Increased short-term memory',
        title: 'Short-term memory refers to the information processed by the individual in a short period of time. Working memory performs this processing',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.DECLARATIVE_MEMORY,
        label: 'Increased declarative memory',
        title: 'What defines declarative memory is the ability to consciously recollect the situation in which you learned something new',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.VIGILANCE,
        label: 'Increased vigilance',
        title: 'Vigilance is devoted attentiveness or watchfulness',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.PSYCHOMOTOR,
        label: 'Increased psychomotor ability',
        title: 'Psychomotor abilities are skills such as hand-eye coordination, balance, and reaction time that arise from a unity of cognitive and physical functions',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.ATTENTION,
        label: 'Increased attention',
        title: 'Attention is the ability to focus and maintain interest in a given task or idea while avoiding distractions',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.SPEECH,
        label: 'Improved speech',
        title: 'The delivery of language through the mouth',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.LEARNING,
        label: 'Increased learning',
        title: 'The acquisition of knowledge or skills through study, experience, or being taught',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.ARITHMETIC,
        label: 'Increased arithmetic ability',
        title: 'The ability to perform numerical calculations, such as addition, subtraction, multiplication, and division',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.WORKING_MEMORY,
        label: 'Increased working memory',
        title: 'Working memory is the small amount of information that can be held briefly in the mind and is used in the execution of cognitive tasks',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.STRENGTH,
        label: 'Increased strength',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.ENDURANCE,
        label: 'Increased endurance',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.RECOVERY,
        label: 'Increased recovery',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.STRUCTURAL_TOUGHNESS,
        label: 'Increased structural toughness',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.THERMO_REGULATION,
        label: 'Increased thermoregulation',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.BLOOD_PRESSURE_REGULATION,
        label: 'Improved blood pressure regulation',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.IMMUNITY,
        label: 'Inreased immunity',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.PAIN,
        label: 'Decreased pain',
        title: 'Potentially damaging mechanical, thermal, and chemical stimuli are detected by nerve endings called nociceptors, which are found in the skin, on internal surfaces such as the periosteum, joint surfaces, and in some internal organs',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.VISUAL_PERCEPTION,
        label: 'Increased visual perception',
        title: 'Visual perception is the ability to perceive our surroundings through the light that enters our eyes',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.AUDITORY_PERCEPTION,
        label: 'Increased auditory perception',
        title: 'Auditory perception could be defined as the ability to receive and interpret information that reached the ears through audible frequency waves transmitted through the air or other means.',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.TACTILE_PERCEPTION,
        label: 'Increased tactile perception',
        title: 'The ability to perceive objects or judge sensations through the sense of touch.',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.INC_EXPLOSIVENESS,
        label: 'Increased explosiveness',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.EMOTION_REGULATION,
        label: 'Improved mood',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.INC_TRANQUILITY,
        label: 'Increased tranquility',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.STRESS,
        label: 'Decreased stress',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.RESILIENCE,
        label: 'Improved resilience',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.MOTIVATION,
        label: 'Increased motivation',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.SELF_ESTEEM,
        label: 'Increased self-esteem',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.SENSE_OF_FATIGUE,
        label: 'Decreased sense of fatigue',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.DEC_PAIN_PERCEPTION,
        label: 'Decreased pain perception',
    },
    {
        mc: models_1.MAIN_CAPABILITY.SOCIAL,
        id: models_1.SPECIFIC_CAPABILITY.COLLABORATION,
        label: 'Increased collaboration',
    },
    {
        mc: models_1.MAIN_CAPABILITY.SOCIAL,
        id: models_1.SPECIFIC_CAPABILITY.COMMUNICATION,
        label: 'Improved communication',
    },
    {
        mc: models_1.MAIN_CAPABILITY.SOCIAL,
        id: models_1.SPECIFIC_CAPABILITY.SOCIAL_INTELLIGENCE,
        label: 'Improved social intelligence',
    },
    {
        mc: models_1.MAIN_CAPABILITY.SOCIAL,
        id: models_1.SPECIFIC_CAPABILITY.SOCIAL_INTERACTION,
        label: 'Social interaction',
    },
    {
        mc: models_1.MAIN_CAPABILITY.SOCIAL,
        id: models_1.SPECIFIC_CAPABILITY.EMPATHY,
        label: 'Increased empathy',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.LEADERSHIP,
        label: 'Improved leadership',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.OBEDIENCE,
        label: 'Increased obedience',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.RISK_TAKING,
        label: 'Increased risk-taking',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.PERSISTANCE,
        label: 'Increased persistance',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.CONSCIENSCIOUSNESS,
        label: 'Consciensciousness',
        title: 'Conscientiousness is the personality trait of being careful, or diligent. Conscientiousness implies a desire to do a task well, and to take obligations to others seriously',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.OPENNESS,
        label: 'Openness',
        title: 'Openness involves: active imagination (fantasy), aesthetic sensitivity, attentiveness to inner feelings, preference for variety (adventurousness), intellectual curiosity, and challenging authority (psychological liberalism)',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.EXTRAVERSION,
        label: 'Extraversion',
        title: 'Extraversion is defined by the general tendency to experience positive emotions, as well as by traits such as sociable, lively, and active',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.NEUROTICISM,
        label: 'Neuroticism',
        title: 'Neuroticism is the trait disposition to experience negative affects, including anger, anxiety, self‐consciousness, irritability, emotional instability, and depression',
    },
];
exports.specificCognitiveCapabilityOptions = exports.specificCapabilityOptions.filter(function (_a) {
    var mc = _a.mc;
    return mc === models_1.MAIN_CAPABILITY.COGNITION;
});
exports.specificPhysicalCapabilityOptions = exports.specificCapabilityOptions.filter(function (_a) {
    var mc = _a.mc;
    return mc === models_1.MAIN_CAPABILITY.PHYSICAL;
});
exports.specificMentalCapabilityOptions = exports.specificCapabilityOptions.filter(function (_a) {
    var mc = _a.mc;
    return mc === models_1.MAIN_CAPABILITY.MENTAL;
});
exports.specificSocialCapabilityOptions = exports.specificCapabilityOptions.filter(function (_a) {
    var mc = _a.mc;
    return mc === models_1.MAIN_CAPABILITY.SOCIAL;
});
exports.specificPersonalityCapabilityOptions = exports.specificCapabilityOptions.filter(function (_a) {
    var mc = _a.mc;
    return mc === models_1.MAIN_CAPABILITY.PERSONALITY;
});
exports.invasivenessOptions = [
    {
        id: models_1.INVASIVENESS_OBTRUSIVENESS.LOW,
        label: 'Low',
        title: 'No physical substance enters the body',
    },
    {
        id: models_1.INVASIVENESS_OBTRUSIVENESS.MEDIUM,
        label: 'Medium',
        title: 'Supplement, heavy training, intervention with low risk',
    },
    {
        id: models_1.INVASIVENESS_OBTRUSIVENESS.HIGH,
        label: 'High',
        title: 'High-impact pharma, implant, body modification, intervention with high risk or pain',
    },
];
exports.maturityOptions = [
    {
        id: models_1.MATURITY.LOW,
        label: 'Low',
        title: 'Little to no research has been performed on the intervention. Existing research is inconclusive about the effectiveness',
    },
    {
        id: models_1.MATURITY.MEDIUM,
        label: 'Medium',
        title: 'A small body of research exists indicating effectiveness of the intervention. Low TRL level applications',
    },
    {
        id: models_1.MATURITY.HIGH,
        label: 'High',
        title: 'One or more meta-analyses indicate effectiveness. The intervention is already applied in practice',
    },
];
exports.effectDirectionOptions = [
    {
        id: models_1.EFFECT_DIRECTION.NEGATIVE,
        label: 'Negative',
        title: 'The intervention decreases a subjects capability level',
    },
    {
        id: models_1.EFFECT_DIRECTION.POSITIVE,
        label: 'Positive',
        title: 'The intervention increases a subjects capability level',
    },
];
exports.ethicalConsiderationsOptions = [
    {
        id: models_1.CHOICE.NONE,
        label: 'None',
        title: 'No ethical considerations known',
    },
    {
        id: models_1.CHOICE.YES,
        label: 'Yes',
        title: 'Ethical considerations exist',
    },
    {
        id: models_1.CHOICE.UNKNOWN,
        label: 'Unknown',
        title: 'Unclear about ethical considerations',
    },
];
exports.evidenceDirOptions = [
    {
        id: models_1.EVIDENCE_DIRECTION.GENERALLY_IN_FAVOR,
        label: 'Effect present',
        title: 'Evidence generally indicates the presence of an effect',
    },
    {
        id: models_1.EVIDENCE_DIRECTION.GENERALLY_AGAINST,
        label: 'Effect absent',
        title: 'Evidence generally indicates the absence of an effect',
    },
    {
        id: models_1.EVIDENCE_DIRECTION.UNDECIDED,
        label: 'Undecided',
        title: 'Evidence indicates neither presence nor absence of an effect',
    },
];
exports.evidenceLevelOptions = [
    {
        id: models_1.EVIDENCE_LEVEL.GOOD,
        label: 'High',
        title: 'Based on good quality research: meta-analyses, large sample sizes, randomized controlled trials, controlled environments, peer-reviewed',
    },
    {
        id: models_1.EVIDENCE_LEVEL.MEDIUM,
        label: 'Medium',
        title: 'Based on limited-quality research: smaller sample sizes, explorative studies, pilots',
    },
    { id: models_1.EVIDENCE_LEVEL.LOW, label: 'Low', title: 'Based on consensus, usual practice, opinion' },
];
exports.availabilityOptions = [
    {
        id: models_1.AVAILABILITY.YES_WITHIN_THE_NETHERLANDS,
        label: 'Yes, within The Netherlands',
    },
    { id: models_1.AVAILABILITY.YES_WITHIN_THE_EU, label: 'Yes, within the EU' },
    { id: models_1.AVAILABILITY.YES_OUTSIDE_THE_EU, label: 'Yes, outside the EU' },
    { id: models_1.AVAILABILITY.NO, label: 'No' },
    { id: models_1.AVAILABILITY.UNKNOWN, label: 'Unknown' },
];
exports.boosterOptions = [
    { id: 1, label: 'Yes', title: 'The intervention can be applied quickly (approx. < 1 hour)' },
    { id: 2, label: 'No', title: 'The intervention can not be applied quickly (approx. < 1 hour)' },
];
var literatureTypeOptions = [
    { id: models_1.LITERATURE_TYPE.CASE_STUDY, label: 'Case study' },
    { id: models_1.LITERATURE_TYPE.THESIS, label: 'Thesis' },
    { id: models_1.LITERATURE_TYPE.REPORT, label: 'Report' },
    { id: models_1.LITERATURE_TYPE.TECHNICAL_REPORT, label: 'Technical report' },
    { id: models_1.LITERATURE_TYPE.PRODUCER_WEBSITE, label: 'Producer website' },
    { id: models_1.LITERATURE_TYPE.WHITE_PAPER, label: 'White paper' },
    { id: models_1.LITERATURE_TYPE.CONFERENCE_PROCEEDING, label: 'Conference proceedings' },
    { id: models_1.LITERATURE_TYPE.PATENT, label: 'Patent' },
    { id: models_1.LITERATURE_TYPE.POPULAR_MEDIA, label: 'Popular media' },
    { id: models_1.LITERATURE_TYPE.CONSENSUS_STATEMENT, label: 'Consensus statement' },
    { id: models_1.LITERATURE_TYPE.EMPERICAL_PR, label: 'Emperical (Peer Reviewed)' },
    { id: models_1.LITERATURE_TYPE.REVIEW_PR, label: 'Review (Peer Reviewed)' },
    {
        id: models_1.LITERATURE_TYPE.SYSTEMATIC_REVIEW_PR,
        label: 'Systematic review (Peer Reviewed)',
    },
    {
        id: models_1.LITERATURE_TYPE.META_ANALYSIS_PR,
        label: 'Meta analysis (Peer Reviewed)',
    },
];
var literatureForm = [
    {
        id: 'title',
        label: 'Title',
        required: true,
        type: 'text',
        className: 'col s12 m4',
    },
    { id: 'doi', label: 'DOI', required: true, type: 'text', className: 'col s8 m5' },
    {
        id: 'type',
        label: 'Type',
        required: true,
        type: 'select',
        options: literatureTypeOptions,
        className: 'col s4 m3',
    },
];
var interventionForm = function (users, interventionOptions) {
    return [
        [
            { id: 'id', type: 'none', autogenerate: 'id' },
            { id: 'updated', type: 'none', autogenerate: 'timestamp' },
            {
                id: 'intervention',
                label: 'Intervention title',
                required: true,
                type: 'text',
                className: 'col s6 m4',
            },
            {
                id: 'category',
                label: 'Category',
                type: 'select',
                required: true,
                multiple: true,
                options: exports.interventionCategoryOptions,
                className: 'col s3 m6',
            },
            {
                id: 'future',
                label: 'Future intervention',
                type: 'switch',
                options: [
                    { id: 'no', label: 'NO' },
                    { id: 'yes', label: 'YES' },
                ],
                className: 'col s3 m2 highlight-switch',
            },
            {
                id: 'desc',
                label: 'Description',
                type: 'textarea',
                className: 'col s12',
            },
            {
                id: 'keywords',
                label: 'Synonyms and keywords',
                type: 'tags',
                className: 'col s12',
            },
            // {
            //   id: 'owner',
            //   label: 'Owner',
            //   type: 'select',
            //   options: users.map((u) => ({ id: u.id, label: u.name })),
            //   className: 'col s12',
            // },
            // {
            //   id: 'status',
            //   label: 'Status',
            //   type: 'select',
            //   options: statusOptions,
            //   className: 'col s4',
            // },
            // {
            //   id: 'reviewer',
            //   label: 'Reviewer',
            //   type: 'select',
            //   multiple: true,
            //   options: users.map((u) => ({ id: u.id, label: u.name })),
            //   className: 'col s4',
            // },
            {
                id: 'mainCap',
                label: 'Main capability',
                required: true,
                type: 'select',
                className: 'col s6 m3',
                options: exports.mainCapabilityOptions,
            },
            {
                id: 'hpeClassification',
                label: 'HPE classification',
                type: 'select',
                className: 'col s6 m3',
                options: exports.hpeClassificationOptions,
            },
            {
                id: 'invasive',
                label: 'Invasive?',
                type: 'select',
                className: 'col s6 m2',
                options: exports.invasivenessOptions,
            },
            {
                id: 'booster',
                label: 'Can be applied as booster?',
                type: 'checkbox',
                className: 'col s6 m4 form-checkbox',
            },
            {
                id: 'specificCap',
                label: 'Specific cognitive capabilities',
                type: 'options',
                multiple: true,
                options: exports.specificCognitiveCapabilityOptions,
                className: 'col s12',
                checkboxClass: 'col s4',
                show: 'mainCap = 1',
            },
            {
                id: 'specificCap',
                label: 'Specific physical capabilities',
                type: 'options',
                multiple: true,
                options: exports.specificPhysicalCapabilityOptions,
                className: 'col s12',
                checkboxClass: 'col s4',
                show: 'mainCap = 2',
            },
            {
                id: 'specificCap',
                label: 'Specific mental capabilities',
                type: 'options',
                multiple: true,
                options: exports.specificMentalCapabilityOptions,
                className: 'col s12',
                checkboxClass: 'col s4',
                show: 'mainCap = 3',
            },
            {
                id: 'specificCap',
                label: 'Specific social capabilities',
                type: 'options',
                multiple: true,
                options: exports.specificSocialCapabilityOptions,
                className: 'col s12',
                checkboxClass: 'col s4',
                show: 'mainCap = 4',
            },
            {
                id: 'specificCap',
                label: 'Specific personality capabilities',
                type: 'options',
                multiple: true,
                options: exports.specificPersonalityCapabilityOptions,
                className: 'col s12',
                checkboxClass: 'col s4',
                show: 'mainCap = 5',
            },
        ],
        [
            {
                id: 'similar',
                label: 'Similar interventions',
                type: 'select',
                multiple: true,
                options: interventionOptions,
                className: 'col s12',
            },
            {
                id: 'mechanism',
                label: 'How it works',
                type: 'textarea',
                className: 'col s12',
            },
            {
                id: 'sota',
                label: 'State of the art',
                type: 'textarea',
                show: 'future = true',
                className: 'col s12',
            },
            {
                id: 'implications',
                label: 'Future possibilities & implications',
                type: 'textarea',
                show: 'future = true',
                className: 'col s12',
            },
            {
                id: 'challenges',
                label: 'Challenges',
                type: 'textarea',
                show: 'future = true',
                className: 'col s12',
            },
            {
                id: 'effectDuration',
                label: 'Effect duration',
                type: 'textarea',
                className: 'col s12',
            },
            {
                id: 'incubation',
                label: 'Effect incubation',
                type: 'textarea',
                className: 'col s12',
            },
            {
                id: 'practical',
                label: 'Practical execution',
                type: 'textarea',
                className: 'col s12',
            },
            {
                id: 'hasIndDiff',
                label: 'Has individual differences?',
                type: 'select',
                options: exports.NoYesUnknown,
                className: 'col s4',
            },
            {
                id: 'hasSideEffects',
                label: 'Has side effects?',
                type: 'select',
                options: exports.NoYesUnknown,
                className: 'col s4',
            },
            {
                id: 'hasEthical',
                label: 'Has ethical considerations?',
                type: 'select',
                options: exports.NoYesUnknown,
                className: 'col s4',
            },
            {
                id: 'diff',
                label: 'Individual differences',
                type: 'textarea',
                className: 'col s12',
                show: 'hasIndDiff > 2',
            },
            {
                id: 'sideEffects',
                label: 'Side effects',
                type: 'textarea',
                className: 'col s12',
                show: 'hasSideEffects > 2',
            },
            {
                id: 'ethical',
                label: 'Ethical considerations',
                type: 'textarea',
                className: 'col s12',
                show: 'hasEthical > 2',
            },
            {
                id: 'examples',
                label: 'Examples of the intervention being used in practice',
                type: 'textarea',
                className: 'col s12',
            },
            {
                id: 'maturity',
                label: 'Maturity',
                type: 'select',
                className: 'col s6 m2',
                options: exports.maturityOptions,
            },
            {
                id: 'availability',
                label: 'Availability',
                type: 'select',
                className: 'col s12 m3',
                options: exports.availabilityOptions,
            },
            {
                id: 'evidenceDir',
                label: 'Evidence indication',
                type: 'select',
                className: 'col s12 m2',
                options: exports.evidenceDirOptions,
            },
            {
                id: 'evidenceScore',
                label: 'Evidence quality',
                type: 'select',
                className: 'col s12 m2',
                options: exports.evidenceLevelOptions,
            },
            {
                id: 'owner',
                label: 'Owner',
                type: 'select',
                options: users.map(function (u) { return ({ id: u.id, label: u.name }); }),
                className: 'col s12 m3',
            },
            // {
            //   id: 'evidenceScore',
            //   label: 'Quality of evidence',
            //   type: 'radio',
            //   checkboxClass: 'col s4',
            //   className: 'col s12',
            //   options: evidenceLevelOptions,
            // },
            {
                id: 'url',
                label: 'Use default image',
                type: 'select',
                className: 'col s3',
                options: [
                    { id: 'nutrition', label: 'Nutrition' },
                    { id: 'pharma', label: 'Pharma/supplement' },
                    { id: 'beverage', label: 'Beverage' },
                    { id: 'upload', label: 'Upload your own' },
                ],
            },
            { id: 'img', label: 'Upload image', type: 'base64', className: 'col s9', show: 'url=upload' },
            {
                id: 'literature',
                label: 'Literature',
                className: 'col s12',
                repeat: true,
                pageSize: 20,
                type: literatureForm,
            },
        ],
    ];
};
exports.interventionForm = interventionForm;
/** Convert markdown text to HTML */
var markdown2html = function (markdown) {
    if (markdown === void 0) { markdown = ''; }
    return mithril_1.default.trust((0, mithril_ui_form_1.render)(markdown, true, true));
};
exports.markdown2html = markdown2html;
/** RegExp for references of type [vullings2022] */
exports.refRegex = /\[(\d*)\]/gi;
/** Convert markdown text to HTML after resolving all references. */
var resolveRefs = function (literature) {
    if (literature === void 0) { literature = []; }
    var ids = __spreadArray([], literature.map(function (lit, i) { return ({ id: i + 1, title: lit.title, url: lit.doi, type: 'LIT' }); }), true).reduce(function (acc, cur) {
        acc[cur.id] = cur;
        return acc;
    }, {});
    return {
        ids: ids,
        md2html: function (markdown) {
            if (markdown === void 0) { markdown = ''; }
            var md = markdown.replace(exports.refRegex, function (replaceValue) {
                var reference = ids[replaceValue.replace(/\[|\]/g, '')];
                // console.log(replaceValue);
                return reference
                    ? "<a href=\"".concat(reference.url, "\" target=\"_blank\" alt=\"").concat(reference.title, "\" title=\"").concat(reference.title, "\">").concat(replaceValue, "</a>")
                    : "<span class=\"red-text\">".concat(replaceValue, "</span>");
            });
            return (0, exports.markdown2html)(md);
        },
    };
};
exports.resolveRefs = resolveRefs;
var isUnique = function (item, pos, arr) { return arr.indexOf(item) == pos; };
exports.isUnique = isUnique;
var createInterventionFilter = function (showFutureInterventions) {
    if (showFutureInterventions === void 0) { showFutureInterventions = 'HIDE'; }
    switch (showFutureInterventions) {
        case 'HIDE':
            return function (intervention, _index, _arr) {
                return intervention.future !== true;
            };
        case 'SHOW':
            return function (_intervention, _index, _arr) { return true; };
        case 'ONLY':
            return function (intervention, _index, _arr) {
                return intervention.future === true;
            };
    }
};
exports.createInterventionFilter = createInterventionFilter;


/***/ }),

/***/ 3365:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ldb = void 0;
/**
 * Use IndexedDB for local storage.
 * Based on https://github.com/DVLP/localStorageDB, but converted to TypeScript and using async instead of callbacks.
 * @source: https://github.com/DVLP/localStorageDB/blob/master/localdata.js
 *
 * Usage example
 *
 *
```ts
const test = async () => {
  ldb.set('nameGoesHere', 'value goes here');
  ldb.set('nameGoesHere2', 'value 2 goes here');

  const asyncValue = await ldb.get('nameGoesHere');
  console.log('And the async value is', asyncValue);
  console.log('List of keys', await ldb.list());
  console.log('All values', await ldb.getAll());

  // Deleting one value
  await ldb.delete('nameGoesHere');
  const asyncValue2 = await ldb.get('nameGoesHere');
  console.log('And the async value after delete is', asyncValue2);
  console.log('All values', await ldb.getAll());

  // Clear everything
  console.log('Storage cleared', await ldb.clear());
  console.log('All values', await ldb.getAll());
};
test();
```
 */
(function () {
    var _this = this;
    var win = typeof window !== 'undefined' ? window : undefined;
    if (!win) {
        console.error('indexedDB cannot get window');
        return;
    }
    var indexedDB = win.indexedDB ||
        win.mozIndexedDB ||
        win.webkitIndexedDB ||
        win.msIndexedDB;
    if (typeof window !== 'undefined' && !indexedDB) {
        console.error('indexDB not supported');
        return;
    }
    var db;
    var request = indexedDB.open('ldb', 1);
    request.onsuccess = function () {
        db = this.result;
    };
    request.onerror = function (event) {
        console.error('indexedDB request error');
        console.log(event);
    };
    request.onupgradeneeded = function (event) {
        db = null;
        var store = event &&
            event.target &&
            event.target.result.createObjectStore('s', {
                keyPath: 'k',
            });
        store.transaction.oncomplete = function (e) {
            db = e.target.db;
        };
    };
    var localDb = {
        get: function (key) {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.get(key)];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                db.transaction('s').objectStore('s').get(key).onsuccess = function (event) {
                    var result = (event.target.result && event.target.result['v']) || null;
                    resolve(result);
                };
            });
        },
        set: function (key, value) {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.set(key, value)];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                var txn = db.transaction('s', 'readwrite');
                txn.oncomplete = function () { return resolve(); };
                txn.objectStore('s').put({
                    k: key,
                    v: value,
                });
                txn.commit();
            });
        },
        delete: function (key) {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.delete(key)];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                db.transaction('s', 'readwrite').objectStore('s').delete(key).onsuccess = function () {
                    resolve();
                };
            });
        },
        list: function () {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.list()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                db.transaction('s').objectStore('s').getAllKeys().onsuccess = function (event) {
                    var result = event.target.result || null;
                    resolve(result);
                };
            });
        },
        getAll: function () {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.getAll()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                db.transaction('s').objectStore('s').getAll().onsuccess = function (event) {
                    var result = event.target.result || null;
                    resolve(result);
                };
            });
        },
        clear: function () {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.clear()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                db.transaction('s', 'readwrite').objectStore('s').clear().onsuccess = function () {
                    resolve();
                };
            });
        },
    };
    exports.ldb = localDb;
})();


/***/ }),

/***/ 9025:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e814e07d3652ff27bbf5.jpg";

/***/ }),

/***/ 831:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "daa9f69cfe2d801887aa.webp";

/***/ }),

/***/ 7534:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ebcbb1571881e2c73825.webp";

/***/ }),

/***/ 7563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b08b9fdad985ae5003ec.webp";

/***/ }),

/***/ 3131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0dd34d8173d8eabed924.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "https://tno.github.io/hei/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(4468);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map
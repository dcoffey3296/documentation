/*! For license information please see typeahead.jquery.js.LICENSE.txt */
!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],(function(t){return e(t)})):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(t.jQuery)}(this,(function(t){var e=function(){"use strict";return{isMsie:function(){return!!/(msie|trident)/i.test(navigator.userAgent)&&navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]},isBlankString:function(t){return!t||/^\s*$/.test(t)},escapeRegExChars:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isArray:t.isArray,isFunction:t.isFunction,isObject:t.isPlainObject,isUndefined:function(t){return void 0===t},isElement:function(t){return!(!t||1!==t.nodeType)},isJQuery:function(e){return e instanceof t},toStr:function(t){return e.isUndefined(t)||null===t?"":t+""},bind:t.proxy,each:function(e,n){t.each(e,(function(t,e){return n(e,t)}))},map:t.map,filter:t.grep,every:function(e,n){var i=!0;return e?(t.each(e,(function(t,s){if(!(i=n.call(null,s,t,e)))return!1})),!!i):i},some:function(e,n){var i=!1;return e?(t.each(e,(function(t,s){if(i=n.call(null,s,t,e))return!1})),!!i):i},mixin:t.extend,identity:function(t){return t},clone:function(e){return t.extend(!0,{},e)},getIdGenerator:function(){var t=0;return function(){return t++}},templatify:function(e){return t.isFunction(e)?e:function(){return String(e)}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,n){var i,s;return function(){var r,a,o=this,u=arguments;return r=function(){i=null,n||(s=t.apply(o,u))},a=n&&!i,clearTimeout(i),i=setTimeout(r,e),a&&(s=t.apply(o,u)),s}},throttle:function(t,e){var n,i,s,r,a,o;return a=0,o=function(){a=new Date,s=null,r=t.apply(n,i)},function(){var u=new Date,c=e-(u-a);return n=this,i=arguments,c<=0?(clearTimeout(s),s=null,a=u,r=t.apply(n,i)):s||(s=setTimeout(o,c)),r}},stringify:function(t){return e.isString(t)?t:JSON.stringify(t)},guid:function(){function t(t){var e=(Math.random().toString(16)+"000000000").substr(2,8);return t?"-"+e.substr(0,4)+"-"+e.substr(4,4):e}return"tt-"+t()+t(!0)+t(!0)+t()},noop:function(){}}}(),n=function(){"use strict";var t={wrapper:"twitter-typeahead",input:"tt-input",hint:"tt-hint",menu:"tt-menu",dataset:"tt-dataset",suggestion:"tt-suggestion",selectable:"tt-selectable",empty:"tt-empty",open:"tt-open",cursor:"tt-cursor",highlight:"tt-highlight"};return function(r){var a,o;return o=e.mixin({},t,r),{css:(a={css:s(),classes:o,html:n(o),selectors:i(o)}).css,html:a.html,classes:a.classes,selectors:a.selectors,mixin:function(t){e.mixin(t,a)}}};function n(t){return{wrapper:'<span class="'+t.wrapper+'"></span>',menu:'<div role="listbox" class="'+t.menu+'"></div>'}}function i(t){var n={};return e.each(t,(function(t,e){n[e]="."+t})),n}function s(){var t={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},menu:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return e.isMsie()&&e.mixin(t.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),t}}(),i=function(){"use strict";var n;function i(e){e&&e.el||t.error("EventBus initialized without el"),this.$el=t(e.el)}return"typeahead:",n={render:"rendered",cursorchange:"cursorchanged",select:"selected",autocomplete:"autocompleted"},e.mixin(i.prototype,{_trigger:function(e,n){var i=t.Event("typeahead:"+e);return this.$el.trigger.call(this.$el,i,n||[]),i},before:function(t){var e;return e=[].slice.call(arguments,1),this._trigger("before"+t,e).isDefaultPrevented()},trigger:function(t){var e;this._trigger(t,[].slice.call(arguments,1)),(e=n[t])&&this._trigger(e,[].slice.call(arguments,1))}}),i}(),s=function(){"use strict";var t=/\s+/,e=function(){var t;t=window.setImmediate?function(t){setImmediate((function(){t()}))}:function(t){setTimeout((function(){t()}),0)};return t}();return{onSync:function(t,e,i){return n.call(this,"sync",t,e,i)},onAsync:function(t,e,i){return n.call(this,"async",t,e,i)},off:function(e){var n;if(!this._callbacks)return this;e=e.split(t);for(;n=e.shift();)delete this._callbacks[n];return this},trigger:function(n){var s,r,a,o,u;if(!this._callbacks)return this;n=n.split(t),a=[].slice.call(arguments,1);for(;(s=n.shift())&&(r=this._callbacks[s]);)o=i(r.sync,this,[s].concat(a)),u=i(r.async,this,[s].concat(a)),o()&&e(u);return this}};function n(e,n,i,s){var r;if(!i)return this;for(n=n.split(t),i=s?function(t,e){return t.bind?t.bind(e):function(){t.apply(e,[].slice.call(arguments,0))}}(i,s):i,this._callbacks=this._callbacks||{};r=n.shift();)this._callbacks[r]=this._callbacks[r]||{sync:[],async:[]},this._callbacks[r][e].push(i);return this}function i(t,e,n){return function(){for(var i,s=0,r=t.length;!i&&s<r;s+=1)i=!1===t[s].apply(e,n);return!i}}}(),r=function(t){"use strict";var n={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1,diacriticInsensitive:!1},i={A:"[Aa\xaa\xc0-\xc5\xe0-\xe5\u0100-\u0105\u01cd\u01ce\u0200-\u0203\u0226\u0227\u1d2c\u1d43\u1e00\u1e01\u1e9a\u1ea0-\u1ea3\u2090\u2100\u2101\u213b\u249c\u24b6\u24d0\u3371-\u3374\u3380-\u3384\u3388\u3389\u33a9-\u33af\u33c2\u33ca\u33df\u33ff\uff21\uff41]",B:"[Bb\u1d2e\u1d47\u1e02-\u1e07\u212c\u249d\u24b7\u24d1\u3374\u3385-\u3387\u33c3\u33c8\u33d4\u33dd\uff22\uff42]",C:"[Cc\xc7\xe7\u0106-\u010d\u1d9c\u2100\u2102\u2103\u2105\u2106\u212d\u216d\u217d\u249e\u24b8\u24d2\u3376\u3388\u3389\u339d\u33a0\u33a4\u33c4-\u33c7\uff23\uff43]",D:"[Dd\u010e\u010f\u01c4-\u01c6\u01f1-\u01f3\u1d30\u1d48\u1e0a-\u1e13\u2145\u2146\u216e\u217e\u249f\u24b9\u24d3\u32cf\u3372\u3377-\u3379\u3397\u33ad-\u33af\u33c5\u33c8\uff24\uff44]",E:"[Ee\xc8-\xcb\xe8-\xeb\u0112-\u011b\u0204-\u0207\u0228\u0229\u1d31\u1d49\u1e18-\u1e1b\u1eb8-\u1ebd\u2091\u2121\u212f\u2130\u2147\u24a0\u24ba\u24d4\u3250\u32cd\u32ce\uff25\uff45]",F:"[Ff\u1da0\u1e1e\u1e1f\u2109\u2131\u213b\u24a1\u24bb\u24d5\u338a-\u338c\u3399\ufb00-\ufb04\uff26\uff46]",G:"[Gg\u011c-\u0123\u01e6\u01e7\u01f4\u01f5\u1d33\u1d4d\u1e20\u1e21\u210a\u24a2\u24bc\u24d6\u32cc\u32cd\u3387\u338d-\u338f\u3393\u33ac\u33c6\u33c9\u33d2\u33ff\uff27\uff47]",H:"[Hh\u0124\u0125\u021e\u021f\u02b0\u1d34\u1e22-\u1e2b\u1e96\u210b-\u210e\u24a3\u24bd\u24d7\u32cc\u3371\u3390-\u3394\u33ca\u33cb\u33d7\uff28\uff48]",I:"[Ii\xcc-\xcf\xec-\xef\u0128-\u0130\u0132\u0133\u01cf\u01d0\u0208-\u020b\u1d35\u1d62\u1e2c\u1e2d\u1ec8-\u1ecb\u2071\u2110\u2111\u2139\u2148\u2160-\u2163\u2165-\u2168\u216a\u216b\u2170-\u2173\u2175-\u2178\u217a\u217b\u24a4\u24be\u24d8\u337a\u33cc\u33d5\ufb01\ufb03\uff29\uff49]",J:"[Jj\u0132-\u0135\u01c7-\u01cc\u01f0\u02b2\u1d36\u2149\u24a5\u24bf\u24d9\u2c7c\uff2a\uff4a]",K:"[Kk\u0136\u0137\u01e8\u01e9\u1d37\u1d4f\u1e30-\u1e35\u212a\u24a6\u24c0\u24da\u3384\u3385\u3389\u338f\u3391\u3398\u339e\u33a2\u33a6\u33aa\u33b8\u33be\u33c0\u33c6\u33cd-\u33cf\uff2b\uff4b]",L:"[Ll\u0139-\u0140\u01c7-\u01c9\u02e1\u1d38\u1e36\u1e37\u1e3a-\u1e3d\u2112\u2113\u2121\u216c\u217c\u24a7\u24c1\u24db\u32cf\u3388\u3389\u33d0-\u33d3\u33d5\u33d6\u33ff\ufb02\ufb04\uff2c\uff4c]",M:"[Mm\u1d39\u1d50\u1e3e-\u1e43\u2120\u2122\u2133\u216f\u217f\u24a8\u24c2\u24dc\u3377-\u3379\u3383\u3386\u338e\u3392\u3396\u3399-\u33a8\u33ab\u33b3\u33b7\u33b9\u33bd\u33bf\u33c1\u33c2\u33ce\u33d0\u33d4-\u33d6\u33d8\u33d9\u33de\u33df\uff2d\uff4d]",N:"[Nn\xd1\xf1\u0143-\u0149\u01ca-\u01cc\u01f8\u01f9\u1d3a\u1e44-\u1e4b\u207f\u2115\u2116\u24a9\u24c3\u24dd\u3381\u338b\u339a\u33b1\u33b5\u33bb\u33cc\u33d1\uff2e\uff4e]",O:"[Oo\xba\xd2-\xd6\xf2-\xf6\u014c-\u0151\u01a0\u01a1\u01d1\u01d2\u01ea\u01eb\u020c-\u020f\u022e\u022f\u1d3c\u1d52\u1ecc-\u1ecf\u2092\u2105\u2116\u2134\u24aa\u24c4\u24de\u3375\u33c7\u33d2\u33d6\uff2f\uff4f]",P:"[Pp\u1d3e\u1d56\u1e54-\u1e57\u2119\u24ab\u24c5\u24df\u3250\u3371\u3376\u3380\u338a\u33a9-\u33ac\u33b0\u33b4\u33ba\u33cb\u33d7-\u33da\uff30\uff50]",Q:"[Qq\u211a\u24ac\u24c6\u24e0\u33c3\uff31\uff51]",R:"[Rr\u0154-\u0159\u0210-\u0213\u02b3\u1d3f\u1d63\u1e58-\u1e5b\u1e5e\u1e5f\u20a8\u211b-\u211d\u24ad\u24c7\u24e1\u32cd\u3374\u33ad-\u33af\u33da\u33db\uff32\uff52]",S:"[Ss\u015a-\u0161\u017f\u0218\u0219\u02e2\u1e60-\u1e63\u20a8\u2101\u2120\u24ae\u24c8\u24e2\u33a7\u33a8\u33ae-\u33b3\u33db\u33dc\ufb06\uff33\uff53]",T:"[Tt\u0162-\u0165\u021a\u021b\u1d40\u1d57\u1e6a-\u1e71\u1e97\u2121\u2122\u24af\u24c9\u24e3\u3250\u32cf\u3394\u33cf\ufb05\ufb06\uff34\uff54]",U:"[Uu\xd9-\xdc\xf9-\xfc\u0168-\u0173\u01af\u01b0\u01d3\u01d4\u0214-\u0217\u1d41\u1d58\u1d64\u1e72-\u1e77\u1ee4-\u1ee7\u2106\u24b0\u24ca\u24e4\u3373\u337a\uff35\uff55]",V:"[Vv\u1d5b\u1d65\u1e7c-\u1e7f\u2163-\u2167\u2173-\u2177\u24b1\u24cb\u24e5\u2c7d\u32ce\u3375\u33b4-\u33b9\u33dc\u33de\uff36\uff56]",W:"[Ww\u0174\u0175\u02b7\u1d42\u1e80-\u1e89\u1e98\u24b2\u24cc\u24e6\u33ba-\u33bf\u33dd\uff37\uff57]",X:"[Xx\u02e3\u1e8a-\u1e8d\u2093\u213b\u2168-\u216b\u2178-\u217b\u24b3\u24cd\u24e7\u33d3\uff38\uff58]",Y:"[Yy\xdd\xfd\xff\u0176-\u0178\u0232\u0233\u02b8\u1e8e\u1e8f\u1e99\u1ef2-\u1ef9\u24b4\u24ce\u24e8\u33c9\uff39\uff59]",Z:"[Zz\u0179-\u017e\u01f1-\u01f3\u1dbb\u1e90-\u1e95\u2124\u2128\u24b5\u24cf\u24e9\u3390-\u3394\uff3a\uff5a]"};return function(i){var r;(i=e.mixin({},n,i)).node&&i.pattern&&(i.pattern=e.isArray(i.pattern)?i.pattern:[i.pattern],r=function(t,n,i,r){for(var a,o=[],u=0,c=t.length;u<c;u++){var h=e.escapeRegExChars(t[u]);r&&(h=h.replace(/\S/g,s)),o.push(h)}return a=i?"\\b("+o.join("|")+")\\b":"("+o.join("|")+")",n?new RegExp(a):new RegExp(a,"i")}(i.pattern,i.caseSensitive,i.wordsOnly,i.diacriticInsensitive),function t(e,n){for(var i,s=0;s<e.childNodes.length;s++)3===(i=e.childNodes[s]).nodeType?s+=n(i)?1:0:t(i,n)}(i.node,(function(e){var n,s,a;(n=r.exec(e.data))&&(a=t.createElement(i.tagName),i.className&&(a.className=i.className),(s=e.splitText(n.index)).splitText(n[0].length),a.appendChild(s.cloneNode(!0)),e.parentNode.replaceChild(a,s));return!!n})))};function s(t){return i[t.toUpperCase()]||t}}(window.document),a=function(){"use strict";var n;function i(n,i){var s,r;(n=n||{}).input||t.error("input is missing"),i.mixin(this),this.$hint=t(n.hint),this.$input=t(n.input),this.$menu=t(n.menu),s=this.$input.attr("id")||e.guid(),this.$menu.attr("id",s+"_listbox"),this.$hint.attr({"aria-hidden":!0}),this.$input.attr({"aria-owns":s+"_listbox","aria-controls":s+"_listbox",role:"combobox","aria-autocomplete":"list","aria-expanded":!1}),this.query=this.$input.val(),this.queryWhenFocused=this.hasFocus()?this.query:null,this.$overflowHelper=(r=this.$input,t('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:r.css("font-family"),fontSize:r.css("font-size"),fontStyle:r.css("font-style"),fontVariant:r.css("font-variant"),fontWeight:r.css("font-weight"),wordSpacing:r.css("word-spacing"),letterSpacing:r.css("letter-spacing"),textIndent:r.css("text-indent"),textRendering:r.css("text-rendering"),textTransform:r.css("text-transform")}).insertAfter(r)),this._checkLanguageDirection(),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=e.noop),this.onSync("cursorchange",this._updateDescendent)}return n={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},i.normalizeQuery=function(t){return e.toStr(t).replace(/^\s*/g,"").replace(/\s{2,}/g," ")},e.mixin(i.prototype,s,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.queryWhenFocused=this.query,this.trigger("focused")},_onKeydown:function(t){var e=n[t.which||t.keyCode];this._managePreventDefault(e,t),e&&this._shouldTrigger(e,t)&&this.trigger(e+"Keyed",t)},_onInput:function(){this._setQuery(this.getInputValue()),this.clearHintIfInvalid(),this._checkLanguageDirection()},_managePreventDefault:function(t,e){var n;switch(t){case"up":case"down":n=!r(e);break;default:n=!1}n&&e.preventDefault()},_shouldTrigger:function(t,e){var n;if("tab"===t)n=!r(e);else n=!0;return n},_checkLanguageDirection:function(){var t=(this.$input.css("direction")||"ltr").toLowerCase();this.dir!==t&&(this.dir=t,this.$hint.attr("dir",t),this.trigger("langDirChanged",t))},_setQuery:function(t,e){var n,s,r,a;r=t,a=this.query,s=!!(n=i.normalizeQuery(r)===i.normalizeQuery(a))&&this.query.length!==t.length,this.query=t,e||n?!e&&s&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},_updateDescendent:function(t,e){this.$input.attr("aria-activedescendant",e)},bind:function(){var t,i,s,r,a=this;return t=e.bind(this._onBlur,this),i=e.bind(this._onFocus,this),s=e.bind(this._onKeydown,this),r=e.bind(this._onInput,this),this.$input.on("blur.tt",t).on("focus.tt",i).on("keydown.tt",s),!e.isMsie()||e.isMsie()>9?this.$input.on("input.tt",r):this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",(function(t){n[t.which||t.keyCode]||e.defer(e.bind(a._onInput,a,t))})),this},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getLangDir:function(){return this.dir},getQuery:function(){return this.query||""},setQuery:function(t,e){this.setInputValue(t),this._setQuery(t,e)},hasQueryChangedSinceLastFocus:function(){return this.query!==this.queryWhenFocused},getInputValue:function(){return this.$input.val()},setInputValue:function(t){this.$input.val(t),this.clearHintIfInvalid(),this._checkLanguageDirection()},resetInputValue:function(){this.setInputValue(this.query)},getHint:function(){return this.$hint.val()},setHint:function(t){this.$hint.val(t)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var t,e,n;n=(t=this.getInputValue())!==(e=this.getHint())&&0===e.indexOf(t),!(""!==t&&n&&!this.hasOverflow())&&this.clearHint()},hasFocus:function(){return this.$input.is(":focus")},hasOverflow:function(){var t=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=t},isCursorAtEnd:function(){var t,n,i;return t=this.$input.val().length,n=this.$input[0].selectionStart,e.isNumber(n)?n===t:!document.selection||((i=document.selection.createRange()).moveStart("character",-t),t===i.text.length)},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$overflowHelper.remove(),this.$hint=this.$input=this.$overflowHelper=t("<div>")},setAriaExpanded:function(t){this.$input.attr("aria-expanded",t)}}),i;function r(t){return t.altKey||t.ctrlKey||t.metaKey||t.shiftKey}}(),o=function(){"use strict";var n,i;function a(n,s){var r;(n=n||{}).templates=n.templates||{},n.templates.notFound=n.templates.notFound||n.templates.empty,n.source||t.error("missing source"),n.node||t.error("missing node"),n.name&&(r=n.name,!/^[_a-zA-Z0-9-]+$/.test(r))&&t.error("invalid dataset name: "+n.name),s.mixin(this),this.highlight=!!n.highlight,this.name=e.toStr(n.name||i()),this.limit=n.limit||5,this.displayFn=function(t){return t=t||e.stringify,e.isFunction(t)?t:n;function n(e){return e[t]}}(n.display||n.displayKey),this.templates=function(n,i){return{notFound:n.notFound&&e.templatify(n.notFound),pending:n.pending&&e.templatify(n.pending),header:n.header&&e.templatify(n.header),footer:n.footer&&e.templatify(n.footer),suggestion:n.suggestion?s:r};function s(i){var s=n.suggestion;return t(s(i)).attr("id",e.guid())}function r(n){return t('<div role="option">').attr("id",e.guid()).text(i(n))}}(n.templates,this.displayFn),this.source=n.source.__ttAdapter?n.source.__ttAdapter():n.source,this.async=e.isUndefined(n.async)?this.source.length>2:!!n.async,this._resetLastSuggestion(),this.$el=t(n.node).attr("role","presentation").addClass(this.classes.dataset).addClass(this.classes.dataset+"-"+this.name)}return n={dataset:"tt-selectable-dataset",val:"tt-selectable-display",obj:"tt-selectable-object"},i=e.getIdGenerator(),a.extractData=function(e){var i=t(e);return i.data(n.obj)?{dataset:i.data(n.dataset)||"",val:i.data(n.val)||"",obj:i.data(n.obj)||null}:null},e.mixin(a.prototype,s,{_overwrite:function(t,e){(e=e||[]).length?this._renderSuggestions(t,e):this.async&&this.templates.pending?this._renderPending(t):!this.async&&this.templates.notFound?this._renderNotFound(t):this._empty(),this.trigger("rendered",e,!1,this.name)},_append:function(t,e){(e=e||[]).length&&this.$lastSuggestion.length?this._appendSuggestions(t,e):e.length?this._renderSuggestions(t,e):!this.$lastSuggestion.length&&this.templates.notFound&&this._renderNotFound(t),this.trigger("rendered",e,!0,this.name)},_renderSuggestions:function(t,e){var n;n=this._getSuggestionsFragment(t,e),this.$lastSuggestion=n.children().last(),this.$el.html(n).prepend(this._getHeader(t,e)).append(this._getFooter(t,e))},_appendSuggestions:function(t,e){var n,i;i=(n=this._getSuggestionsFragment(t,e)).children().last(),this.$lastSuggestion.after(n),this.$lastSuggestion=i},_renderPending:function(t){var e=this.templates.pending;this._resetLastSuggestion(),e&&this.$el.html(e({query:t,dataset:this.name}))},_renderNotFound:function(t){var e=this.templates.notFound;this._resetLastSuggestion(),e&&this.$el.html(e({query:t,dataset:this.name}))},_empty:function(){this.$el.empty(),this._resetLastSuggestion()},_getSuggestionsFragment:function(i,s){var a,o=this;return a=document.createDocumentFragment(),e.each(s,(function(e){var s,r;r=o._injectQuery(i,e),s=t(o.templates.suggestion(r)).data(n.dataset,o.name).data(n.obj,e).data(n.val,o.displayFn(e)).addClass(o.classes.suggestion+" "+o.classes.selectable),a.appendChild(s[0])})),this.highlight&&r({className:this.classes.highlight,node:a,pattern:i}),t(a)},_getFooter:function(t,e){return this.templates.footer?this.templates.footer({query:t,suggestions:e,dataset:this.name}):null},_getHeader:function(t,e){return this.templates.header?this.templates.header({query:t,suggestions:e,dataset:this.name}):null},_resetLastSuggestion:function(){this.$lastSuggestion=t()},_injectQuery:function(t,n){return e.isObject(n)?e.mixin({_query:t},n):n},update:function(e){var n=this,i=!1,s=!1,r=0;function a(t){s||(s=!0,t=(t||[]).slice(0,n.limit),r=t.length,n._overwrite(e,t),r<n.limit&&n.async&&n.trigger("asyncRequested",e,n.name))}this.cancel(),this.cancel=function(){i=!0,n.cancel=t.noop,n.async&&n.trigger("asyncCanceled",e,n.name)},this.source(e,a,(function(s){if(s=s||[],!i&&r<n.limit){n.cancel=t.noop;var a=Math.abs(r-n.limit);r+=a,n._append(e,s.slice(0,a)),n.async&&n.trigger("asyncReceived",e,n.name)}})),!s&&a([])},cancel:t.noop,clear:function(){this._empty(),this.cancel(),this.trigger("cleared")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=t("<div>")}}),a}(),u=function(){"use strict";function n(n,i){var s=this;(n=n||{}).node||t.error("node is required"),i.mixin(this),this.$node=t(n.node),this.query=null,this.datasets=e.map(n.datasets,(function(e){var n=s.$node.find(e.node).first();return e.node=n.length?n:t("<div>").appendTo(s.$node),new o(e,i)}))}return e.mixin(n.prototype,s,{_onSelectableClick:function(e){this.trigger("selectableClicked",t(e.currentTarget))},_onRendered:function(t,e,n,i){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetRendered",e,n,i)},_onCleared:function(){this.$node.toggleClass(this.classes.empty,this._allDatasetsEmpty()),this.trigger("datasetCleared")},_propagate:function(){this.trigger.apply(this,arguments)},_allDatasetsEmpty:function(){return e.every(this.datasets,e.bind((function(t){var e=t.isEmpty();return this.$node.attr("aria-expanded",!e),e}),this))},_getSelectables:function(){return this.$node.find(this.selectors.selectable)},_removeCursor:function(){var t=this.getActiveSelectable();t&&t.removeClass(this.classes.cursor)},_ensureVisible:function(t){var e,n,i,s;n=(e=t.position().top)+t.outerHeight(!0),i=this.$node.scrollTop(),s=this.$node.height()+parseInt(this.$node.css("paddingTop"),10)+parseInt(this.$node.css("paddingBottom"),10),e<0?this.$node.scrollTop(i+e):s<n&&this.$node.scrollTop(i+(n-s))},bind:function(){var n,i=this;return n=e.bind(this._onSelectableClick,this),this.$node.on("click.tt",this.selectors.selectable,n),this.$node.on("mouseover",this.selectors.selectable,(function(){i.setCursor(t(this))})),this.$node.on("mouseleave",(function(){i._removeCursor()})),e.each(this.datasets,(function(t){t.onSync("asyncRequested",i._propagate,i).onSync("asyncCanceled",i._propagate,i).onSync("asyncReceived",i._propagate,i).onSync("rendered",i._onRendered,i).onSync("cleared",i._onCleared,i)})),this},isOpen:function(){return this.$node.hasClass(this.classes.open)},open:function(){this.$node.scrollTop(0),this.$node.addClass(this.classes.open)},close:function(){this.$node.attr("aria-expanded",!1),this.$node.removeClass(this.classes.open),this._removeCursor()},setLanguageDirection:function(t){this.$node.attr("dir",t)},selectableRelativeToCursor:function(t){var e,n,i;return n=this.getActiveSelectable(),e=this._getSelectables(),-1===(i=(i=((i=(n?e.index(n):-1)+t)+1)%(e.length+1)-1)<-1?e.length-1:i)?null:e.eq(i)},setCursor:function(t){this._removeCursor(),(t=t&&t.first())&&(t.addClass(this.classes.cursor),this._ensureVisible(t))},getSelectableData:function(t){return t&&t.length?o.extractData(t):null},getActiveSelectable:function(){var t=this._getSelectables().filter(this.selectors.cursor).first();return t.length?t:null},getTopSelectable:function(){var t=this._getSelectables().first();return t.length?t:null},update:function(t){var n=t!==this.query;return n&&(this.query=t,e.each(this.datasets,(function(e){e.update(t)}))),n},empty:function(){e.each(this.datasets,(function(t){t.clear()})),this.query=null,this.$node.addClass(this.classes.empty)},destroy:function(){this.$node.off(".tt"),this.$node=t("<div>"),e.each(this.datasets,(function(t){t.destroy()}))}}),n}(),c=function(){"use strict";function n(n){this.$el=t("<span></span>",{role:"status","aria-live":"polite"}).css({position:"absolute",padding:"0",border:"0",height:"1px",width:"1px","margin-bottom":"-1px","margin-right":"-1px",overflow:"hidden",clip:"rect(0 0 0 0)","white-space":"nowrap"}),n.$input.after(this.$el),e.each(n.menu.datasets,e.bind((function(t){t.onSync&&(t.onSync("rendered",e.bind(this.update,this)),t.onSync("cleared",e.bind(this.cleared,this)))}),this))}return e.mixin(n.prototype,{update:function(t,e){var n,i=e.length;n=1===i?{result:"result",is:"is"}:{result:"results",is:"are"},this.$el.text(i+" "+n.result+" "+n.is+" available, use up and down arrow keys to navigate.")},cleared:function(){this.$el.text("")}}),n}(),h=function(){"use strict";var t=u.prototype;function n(){u.apply(this,[].slice.call(arguments,0))}return e.mixin(n.prototype,u.prototype,{open:function(){return!this._allDatasetsEmpty()&&this._show(),t.open.apply(this,[].slice.call(arguments,0))},close:function(){return this._hide(),t.close.apply(this,[].slice.call(arguments,0))},_onRendered:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),t._onRendered.apply(this,[].slice.call(arguments,0))},_onCleared:function(){return this._allDatasetsEmpty()?this._hide():this.isOpen()&&this._show(),t._onCleared.apply(this,[].slice.call(arguments,0))},setLanguageDirection:function(e){return this.$node.css("ltr"===e?this.css.ltr:this.css.rtl),t.setLanguageDirection.apply(this,[].slice.call(arguments,0))},_hide:function(){this.$node.hide()},_show:function(){this.$node.css("display","block")}}),n}(),l=function(){"use strict";function n(n,s){var r,a,o,u,c,h,l,d,p,f,g;(n=n||{}).input||t.error("missing input"),n.menu||t.error("missing menu"),n.eventBus||t.error("missing event bus"),s.mixin(this),this.eventBus=n.eventBus,this.minLength=e.isNumber(n.minLength)?n.minLength:1,this.input=n.input,this.menu=n.menu,this.enabled=!0,this.autoselect=!!n.autoselect,this.active=!1,this.input.hasFocus()&&this.activate(),this.dir=this.input.getLangDir(),this._hacks(),this.menu.bind().onSync("selectableClicked",this._onSelectableClicked,this).onSync("asyncRequested",this._onAsyncRequested,this).onSync("asyncCanceled",this._onAsyncCanceled,this).onSync("asyncReceived",this._onAsyncReceived,this).onSync("datasetRendered",this._onDatasetRendered,this).onSync("datasetCleared",this._onDatasetCleared,this),r=i(this,"activate","open","_onFocused"),a=i(this,"deactivate","_onBlurred"),o=i(this,"isActive","isOpen","_onEnterKeyed"),u=i(this,"isActive","isOpen","_onTabKeyed"),c=i(this,"isActive","_onEscKeyed"),h=i(this,"isActive","open","_onUpKeyed"),l=i(this,"isActive","open","_onDownKeyed"),d=i(this,"isActive","isOpen","_onLeftKeyed"),p=i(this,"isActive","isOpen","_onRightKeyed"),f=i(this,"_openIfActive","_onQueryChanged"),g=i(this,"_openIfActive","_onWhitespaceChanged"),this.input.bind().onSync("focused",r,this).onSync("blurred",a,this).onSync("enterKeyed",o,this).onSync("tabKeyed",u,this).onSync("escKeyed",c,this).onSync("upKeyed",h,this).onSync("downKeyed",l,this).onSync("leftKeyed",d,this).onSync("rightKeyed",p,this).onSync("queryChanged",f,this).onSync("whitespaceChanged",g,this).onSync("langDirChanged",this._onLangDirChanged,this)}return e.mixin(n.prototype,{_hacks:function(){var n,i;n=this.input.$input||t("<div>"),i=this.menu.$node||t("<div>"),n.on("blur.tt",(function(t){var s,r,a;s=document.activeElement,r=i.is(s),a=i.has(s).length>0,e.isMsie()&&(r||a)&&(t.preventDefault(),t.stopImmediatePropagation(),e.defer((function(){n.focus()})))})),i.on("mousedown.tt",(function(t){t.preventDefault()}))},_onSelectableClicked:function(t,e){this.select(e)},_onDatasetCleared:function(){this._updateHint()},_onDatasetRendered:function(t,e,n,i){if(this._updateHint(),this.autoselect){var s=this.selectors.cursor.substr(1);this.menu.$node.find(this.selectors.suggestion).first().addClass(s)}this.eventBus.trigger("render",e,n,i)},_onAsyncRequested:function(t,e,n){this.eventBus.trigger("asyncrequest",n,e)},_onAsyncCanceled:function(t,e,n){this.eventBus.trigger("asynccancel",n,e)},_onAsyncReceived:function(t,e,n){this.eventBus.trigger("asyncreceive",n,e)},_onFocused:function(){this._minLengthMet()&&this.menu.update(this.input.getQuery())},_onBlurred:function(){this.input.hasQueryChangedSinceLastFocus()&&this.eventBus.trigger("change",this.input.getQuery())},_onEnterKeyed:function(t,e){var n;(n=this.menu.getActiveSelectable())?this.select(n)&&(e.preventDefault(),e.stopPropagation()):this.autoselect&&this.select(this.menu.getTopSelectable())&&(e.preventDefault(),e.stopPropagation())},_onTabKeyed:function(t,e){var n;(n=this.menu.getActiveSelectable())?this.select(n)&&e.preventDefault():this.autoselect&&(n=this.menu.getTopSelectable())&&this.autocomplete(n)&&e.preventDefault()},_onEscKeyed:function(){this.close()},_onUpKeyed:function(){this.moveCursor(-1)},_onDownKeyed:function(){this.moveCursor(1)},_onLeftKeyed:function(){"rtl"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getActiveSelectable()||this.menu.getTopSelectable())},_onRightKeyed:function(){"ltr"===this.dir&&this.input.isCursorAtEnd()&&this.autocomplete(this.menu.getActiveSelectable()||this.menu.getTopSelectable())},_onQueryChanged:function(t,e){this._minLengthMet(e)?this.menu.update(e):this.menu.empty()},_onWhitespaceChanged:function(){this._updateHint()},_onLangDirChanged:function(t,e){this.dir!==e&&(this.dir=e,this.menu.setLanguageDirection(e))},_openIfActive:function(){this.isActive()&&this.open()},_minLengthMet:function(t){return(t=e.isString(t)?t:this.input.getQuery()||"").length>=this.minLength},_updateHint:function(){var t,n,i,s,r,o;t=this.menu.getTopSelectable(),n=this.menu.getSelectableData(t),i=this.input.getInputValue(),!n||e.isBlankString(i)||this.input.hasOverflow()?this.input.clearHint():(s=a.normalizeQuery(i),r=e.escapeRegExChars(s),(o=new RegExp("^(?:"+r+")(.+$)","i").exec(n.val))&&this.input.setHint(i+o[1]))},isEnabled:function(){return this.enabled},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},isActive:function(){return this.active},activate:function(){return!!this.isActive()||!(!this.isEnabled()||this.eventBus.before("active"))&&(this.active=!0,this.eventBus.trigger("active"),!0)},deactivate:function(){return!this.isActive()||!this.eventBus.before("idle")&&(this.active=!1,this.close(),this.eventBus.trigger("idle"),!0)},isOpen:function(){return this.menu.isOpen()},open:function(){return this.isOpen()||this.eventBus.before("open")||(this.input.setAriaExpanded(!0),this.menu.open(),this._updateHint(),this.eventBus.trigger("open")),this.isOpen()},close:function(){return this.isOpen()&&!this.eventBus.before("close")&&(this.input.setAriaExpanded(!1),this.menu.close(),this.input.clearHint(),this.input.resetInputValue(),this.eventBus.trigger("close")),!this.isOpen()},setVal:function(t){this.input.setQuery(e.toStr(t))},getVal:function(){return this.input.getQuery()},select:function(t){var e=this.menu.getSelectableData(t);return!(!e||this.eventBus.before("select",e.obj,e.dataset))&&(this.input.setQuery(e.val,!0),this.eventBus.trigger("select",e.obj,e.dataset),this.close(),!0)},autocomplete:function(t){var e,n;return e=this.input.getQuery(),!(!((n=this.menu.getSelectableData(t))&&e!==n.val)||this.eventBus.before("autocomplete",n.obj,n.dataset))&&(this.input.setQuery(n.val),this.eventBus.trigger("autocomplete",n.obj,n.dataset),!0)},moveCursor:function(t){var e,n,i,s,r,a;return e=this.input.getQuery(),n=this.menu.selectableRelativeToCursor(t),s=(i=this.menu.getSelectableData(n))?i.obj:null,r=i?i.dataset:null,a=n?n.attr("id"):null,this.input.trigger("cursorchange",a),!(this._minLengthMet()&&this.menu.update(e))&&!this.eventBus.before("cursorchange",s,r)&&(this.menu.setCursor(n),i?"string"==typeof i.val&&this.input.setInputValue(i.val):(this.input.resetInputValue(),this._updateHint()),this.eventBus.trigger("cursorchange",s,r),!0)},destroy:function(){this.input.destroy(),this.menu.destroy()}}),n;function i(t){var n=[].slice.call(arguments,1);return function(){var i=[].slice.call(arguments);e.each(n,(function(e){return t[e].apply(t,i)}))}}}();!function(){"use strict";var s,r,o;function d(e,n){e.each((function(){var e,i=t(this);(e=i.data(r.typeahead))&&n(e,i)}))}function p(n){var i;return(i=e.isJQuery(n)||e.isElement(n)?t(n).first():[]).length?i:null}s=t.fn.typeahead,r={www:"tt-www",attrs:"tt-attrs",typeahead:"tt-typeahead"},o={initialize:function(s,o){var d;return o=e.isArray(o)?o:[].slice.call(arguments,1),d=n((s=s||{}).classNames),this.each((function(){var n,f,g,m,y,v,b,_,S,$,w;e.each(o,(function(t){t.highlight=!!s.highlight})),n=t(this),f=t(d.html.wrapper),g=p(s.hint),m=p(s.menu),y=!1!==s.hint&&!g,v=!1!==s.menu&&!m,y&&(g=function(t,e){return t.clone().addClass(e.classes.hint).removeData().css(e.css.hint).css((n=t,{backgroundAttachment:n.css("background-attachment"),backgroundClip:n.css("background-clip"),backgroundColor:n.css("background-color"),backgroundImage:n.css("background-image"),backgroundOrigin:n.css("background-origin"),backgroundPosition:n.css("background-position"),backgroundRepeat:n.css("background-repeat"),backgroundSize:n.css("background-size")})).prop({readonly:!0,required:!1}).removeAttr("id name placeholder").removeClass("required").attr({spellcheck:"false",tabindex:-1});var n}(n,d)),v&&(m=t(d.html.menu).css(d.css.menu)),g&&g.val(""),n=function(t,e){t.data(r.attrs,{dir:t.attr("dir"),autocomplete:t.attr("autocomplete"),spellcheck:t.attr("spellcheck"),style:t.attr("style")}),t.addClass(e.classes.input).attr({spellcheck:!1});try{!t.attr("dir")&&t.attr("dir","auto")}catch(n){}return t}(n,d),(y||v)&&(f.css(d.css.wrapper),n.css(y?d.css.input:d.css.inputWithNoHint),n.wrap(f).parent().prepend(y?g:null).append(v?m:null));w=v?h:u,b=new i({el:n}),_=new a({hint:g,input:n,menu:m},d),S=new w({node:m,datasets:o},d),new c({$input:n,menu:S}),$=new l({input:_,menu:S,eventBus:b,minLength:s.minLength,autoselect:s.autoselect},d),n.data(r.www,d),n.data(r.typeahead,$)}))},isEnabled:function(){var t;return d(this.first(),(function(e){t=e.isEnabled()})),t},enable:function(){return d(this,(function(t){t.enable()})),this},disable:function(){return d(this,(function(t){t.disable()})),this},isActive:function(){var t;return d(this.first(),(function(e){t=e.isActive()})),t},activate:function(){return d(this,(function(t){t.activate()})),this},deactivate:function(){return d(this,(function(t){t.deactivate()})),this},isOpen:function(){var t;return d(this.first(),(function(e){t=e.isOpen()})),t},open:function(){return d(this,(function(t){t.open()})),this},close:function(){return d(this,(function(t){t.close()})),this},select:function(e){var n=!1,i=t(e);return d(this.first(),(function(t){n=t.select(i)})),n},autocomplete:function(e){var n=!1,i=t(e);return d(this.first(),(function(t){n=t.autocomplete(i)})),n},moveCursor:function(t){var e=!1;return d(this.first(),(function(n){e=n.moveCursor(t)})),e},val:function(t){var n;return arguments.length?(d(this,(function(n){n.setVal(e.toStr(t))})),this):(d(this.first(),(function(t){n=t.getVal()})),n)},destroy:function(){return d(this,(function(t,n){!function(t){var n,i;n=t.data(r.www),i=t.parent().filter(n.selectors.wrapper),e.each(t.data(r.attrs),(function(n,i){e.isUndefined(n)?t.removeAttr(i):t.attr(i,n)})),t.removeData(r.typeahead).removeData(r.www).removeData(r.attr).removeClass(n.classes.input),i.length&&(t.detach().insertAfter(i),i.remove())}(n),t.destroy()})),this}},t.fn.typeahead=function(t){return o[t]?o[t].apply(this,[].slice.call(arguments,1)):o.initialize.apply(this,arguments)},t.fn.typeahead.noConflict=function(){return t.fn.typeahead=s,this}}()}));
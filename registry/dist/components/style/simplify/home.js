!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/simplify/home"]=t():e["style/simplify/home"]=t()}(self,(function(){return function(){var e,t,i={929:function(e,t,i){var n=i(645)((function(e){return e[1]}));n.push([e.id,"body.simplifyHome-switch-categories .bili-header-m > .bili-wrapper {\n  visibility: hidden !important;\n  height: 18px !important;\n}\nbody.simplifyHome-switch-categories .primary-menu-itnl {\n  visibility: hidden !important;\n  height: 24px !important;\n  padding: 0 !important;\n}\nbody.simplifyHome-switch-categories .bili-header__channel {\n  height: 12px !important;\n}\nbody.simplifyHome-switch-categories .bili-header__channel > * {\n  display: none !important;\n}\nbody.simplifyHome-switch-trends .first-screen #reportFirst1 {\n  display: none !important;\n}\nbody.simplifyHome-switch-trends .first-screen .space-between {\n  margin-bottom: 0 !important;\n}\nbody.simplifyHome-switch-trends .bili-layout .bili-grid:first-child,\nbody.simplifyHome-switch-trends .rcmd-box-wrap {\n  display: none !important;\n}\nbody.simplifyHome-switch-online .first-screen #reportFirst2 {\n  display: none !important;\n}\nbody.simplifyHome-switch-ext-box .first-screen #reportFirst3 {\n  display: none !important;\n}\nbody.simplifyHome-switch-special #bili_report_spe_rec {\n  display: none !important;\n}\nbody.simplifyHome-switch-contact .bili-footer .b-footer-wrap,\nbody.simplifyHome-switch-contact .international-footer {\n  display: none !important;\n}\nbody.simplifyHome-switch-elevator .storey-box .elevator {\n  display: none !important;\n}",""]),e.exports=n},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,i,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(n)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&o[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),t.push(l))}},t}},245:function(e,t,i){var n=i(929);e.exports="string"==typeof n?n:n.toString()}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,exports:{}};return i[e](r,r.exports,o),r.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"==typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"==typeof i.then)return i}var r=Object.create(null);o.r(r);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&i;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){s[e]=function(){return i[e]}}));return s.default=function(){return i},o.d(r,s),r},o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";o.d(r,{component:function(){return p}});var e=coreApis.componentApis.switchOptions,t=coreApis.settings,i=coreApis.spinQuery,n=coreApis.style,s=coreApis.utils,a=coreApis.utils.urls;const l={name:"simplifyOptions",dimAt:"checked",switchProps:{checkedIcon:"mdi-eye-off-outline",notCheckedIcon:"mdi-eye-outline"},switches:{categories:{defaultValue:!1,displayName:"分区栏"},trends:{defaultValue:!1,displayName:"活动/热门视频"},online:{defaultValue:!1,displayName:"在线列表(旧)"},"ext-box":{defaultValue:!1,displayName:"电竞赛事(旧)"},special:{defaultValue:!1,displayName:"特别推荐(旧)"},contact:{defaultValue:!1,displayName:"联系方式"},elevator:{defaultValue:!1,displayName:"右侧分区导航(旧)"}}},c={name:"simplifyHome",displayName:"简化首页",description:{"zh-CN":"隐藏原版首页不需要的元素/分区."},instantStyles:[{name:"simplifyHome",style:()=>Promise.resolve().then(o.t.bind(o,245,23))}],urlInclude:a.mainSiteUrls,tags:[componentsTags.style],entry:async()=>{if("https://www.bilibili.com/"!==document.URL)return;const{options:e}=(0,t.getComponentSettings)(c.name),o="-1"===(0,s.getCookieValue)("i-wanna-go-back"),r=await(async()=>{const e="https://www.bilibili.com/"!==document.URL;if(!o){const t=await(0,i.sq)((()=>dqa(".proxy-box > div")),(t=>t.length>0||e));return Object.fromEntries(t.map((e=>[e.id.replace(/^bili_/,""),{displayName:e.querySelector("header .name")?.textContent?.trim()??"未知分区",defaultValue:!1}])))}const t=["推广"],n=await(0,i.sq)((()=>dqa(".bili-grid .the-world")),(t=>t.length>3||e));console.log(n);const r=n?.filter((e=>!t.includes(e.id))).map((e=>{const t=(e=>{let t=e;for(;t.parentElement;){if(t.classList.contains("bili-grid"))return t;t=t.parentElement}return null})(e),i=e.id;return t?(t.dataset.area=i,[i,{displayName:i,defaultValue:!1}]):null})).filter((e=>null!==e))??[];return Object.fromEntries(r)})();Object.entries(r).forEach((([i,{displayName:n,defaultValue:o}])=>{const r={defaultValue:o,displayName:n},s=`switch-${i}`;void 0===e[s]&&(e[s]=o);const a=`switch-${i}`;(0,t.addComponentListener)(`${c.name}.${a}`,(e=>{document.body.classList.toggle(`${c.name}-${a}`,e)}),!0),l.switches[i]=r,e.simplifyOptions.switches[i]=r}));const a=Object.keys(r).map((e=>`\n        body.simplifyHome-switch-${e} .bili-layout .bili-grid[data-area="${e}"],\n        body.simplifyHome-switch-${e} .storey-box .proxy-box #bili_${e} {\n          display: none !important;\n        }\n      `.trim())).join("\n");(0,n.addStyle)(a,"simplify-home-generated")}},p=(0,e.createSwitchOptions)(l)(c)}(),r=r.component}()}));
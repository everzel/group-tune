!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.GroupTune=e():t.GroupTune=e()}(self,(function(){return function(){"use strict";var t={630:function(t,e,n){function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(t);for(var a in Array.isArray(n)?(e=o.classList).add.apply(e,r(n)):n&&o.classList.add(n),i)o[a]=i[a];return o}n.r(e),n.d(e,{make:function(){return o}})},424:function(t,e,n){var r=n(645),i=n.n(r)()((function(t){return t[1]}));i.push([t.id,".cdx-stretch-tune--wrapper{}\n.cdx-stretch-tune--applied{}\n",""]),e.Z=i},645:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),e.push(l))}},e}},548:function(t,e,n){var r=n(379),i=n.n(r),o=n(424);i()(o.Z,{insert:"head",singleton:!1}),o.Z.locals},379:function(t,e,n){var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function a(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],i=0;i<t.length;i++){var c=t[i],l=e.base?c[0]+e.base:c[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var d=a(u),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(o[d].references++,o[d].updater(f)):o.push({identifier:u,updater:v(f,e),references:1}),r.push(u)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,u=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function d(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function f(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(t,e){var n,r,i;if(e.singleton){var o=h++;n=p||(p=l(e)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=l(e),r=f.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var l=c(t,e),s=0;s<n.length;s++){var u=a(n[s]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=l}}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(r),n.d(r,{default:function(){return i}}),n(548).toString();var e=n(630).make,i=function(){function n(t){var e=t.api,r=t.data,i=t.config,o=t.block;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.api=e,this.data=Boolean(r||!1),this.config=i,this.block=o,this.settings=Object.assign({},i,{icon:'<svg width="20px" height="20px" viewBox="0 0 1024 1024" style="fill: none;">\n    <g id="Layer_1">\n        <rect x="0.173" y="0.462" width="1024.001" height="1024"/>\n    </g>\n    <g id="Layer_2">\n    </g>\n    <g id="Layer_3">\n        <g style="fill: currentColor;">\n            <path d="M68.198,383.617l35.77,23.273l45.583,29.683l75.455,49.137l45.583,29.702l177.954,115.875\n\t\t\tc13.121,8.545,30.061,12.875,50.356,12.875c32.282,0,69.603-11.362,99.814-30.382l145.181-91.354l46.888-29.494l79.878-50.271\n\t\t\tl46.889-29.494L936,401.559c33.748-21.25,53.315-49.023,53.655-76.23c0.265-19.02-8.792-35.6-25.485-46.755L566.157,13.245\n\t\t\tc-13.404-8.942-31.1-13.65-51.217-13.65c-32.726,0-69.754,12.346-99.049,33.011L93.777,259.99\n\t\t\tc-32.698,23.065-51.169,51.935-50.659,79.179C43.459,357.526,52.374,373.332,68.198,383.617z M122.921,301.28L445.036,73.896\n\t\t\tc20.778-14.671,47.558-23.746,69.905-23.746c9.963,0,18.169,1.815,23.16,5.143L936.151,320.64\n\t\t\tc3.005,2.023,2.986,3.138,2.986,4.027c-0.076,6.164-8.167,20.305-30.06,34.088l-37.624,23.689l-46.869,29.512l-79.896,50.234\n\t\t\tl-46.869,29.512l-126.01,79.274c-22.178,13.973-50.121,22.632-72.912,22.632c-14.057,0-20.626-3.29-22.792-4.69L315.046,484.046\n\t\t\tl-45.592-29.683l-75.464-49.156l-45.583-29.683l-52.625-34.277c-2.099-1.36-2.099-1.984-2.127-3.043\n\t\t\tC93.532,331.776,101.227,316.594,122.921,301.28z"/>\n            <path d="M955.757,470.245l-38.209-25.505l-46.889,29.494l57.059,38.058c3.007,2.004,2.988,3.12,2.988,4.027\n\t\t\tc-0.075,6.163-8.167,20.324-30.041,34.089l-36.547,22.988L817.25,602.91l-253.854,159.7c-22.177,13.971-50.13,22.629-72.93,22.629\n\t\t\tc-14.047,0-20.608-3.271-22.773-4.67L193.053,601.717l-45.592-29.681l-60.103-39.154c-2.099-1.343-2.108-1.968-2.136-3.026\n\t\t\tc-0.104-6.465,7.581-21.647,29.276-36.924l35.052-24.767l-45.583-29.683l-18.613,13.159\n\t\t\tc-32.708,23.084-51.17,51.936-50.659,79.161c0.34,18.358,9.254,34.125,25.088,44.447l43.239,28.189l45.592,29.664L440.12,822.921\n\t\t\tc13.111,8.544,30.061,12.855,50.347,12.855c32.291,0,69.603-11.344,99.852-30.363l273.007-171.781l46.868-29.514l17.373-10.927\n\t\t\tc33.767-21.23,53.316-49.005,53.676-76.211C981.507,497.961,972.45,481.361,955.757,470.245z"/>\n            <path d="M955.757,659.76l-45.563-30.345l-46.868,29.475l64.393,42.937c3.007,2.023,2.988,3.138,2.988,4.027\n\t\t\tc-0.075,6.145-8.167,20.306-30.041,34.088L563.396,952.162c-22.177,13.953-50.13,22.632-72.93,22.632\n\t\t\tc-14.047,0-20.608-3.29-22.773-4.689L87.359,722.434c-2.099-1.38-2.108-1.984-2.136-3.044\n\t\t\tc-0.104-6.465,7.581-21.609,29.276-36.924l34.116-24.105l-45.592-29.683l-17.668,12.479\n\t\t\tc-32.708,23.085-51.17,51.953-50.659,79.197c0.34,18.357,9.254,34.145,25.088,44.431l380.336,247.671\n\t\t\tc13.111,8.564,30.061,12.875,50.347,12.875c32.291,0,69.603-11.344,99.852-30.383l337.248-212.221\n\t\t\tc33.767-21.214,53.316-49.024,53.676-76.231C981.507,687.496,972.45,670.895,955.757,659.76z"/>\n        </g>\n    </g>\n</svg>\n',title:this.api.i18n.t("Grouped")})}var r,i,o;return r=n,o=[{key:"isTune",get:function(){return!0}},{key:"CSS",get:function(){return{wrapper:"cdx-stretch-tune--wrapper",applied:"cdx-stretch-tune--applied"}}}],(i=[{key:"render",value:function(){var t=this,n=e("div",""),r=[this.api.styles.settingsButton];this.data&&r.push(this.api.styles.settingsButtonActive);var i=e("div",r,{innerHTML:this.settings.icon});return i.dataset.name="grouped",this.api.tooltip.onHover(i,this.settings.title,{placement:"top",hidingDelay:500}),n.appendChild(i),this.api.listeners.on(n,"click",(function(e){t.tuneClicked(e),i.classList.toggle(t.api.styles.settingsButtonActive,t.data)})),n}},{key:"tuneClicked",value:function(t){this.data=!this.data,this.wrapper.classList.toggle(n.CSS.applied,this.data)}},{key:"wrap",value:function(t){return this.wrapper=e("div",n.CSS.wrapper),this.wrapper.classList.toggle(n.CSS.applied,!!this.data),this.wrapper.appendChild(t),this.wrapper}},{key:"save",value:function(){return Boolean(this.data||!1)}}])&&t(r.prototype,i),o&&t(r,o),n}()}(),r}()}));
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GroupTune"] = factory();
	else
		root["GroupTune"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GroupTune; }\n/* harmony export */ });\n/* harmony import */ var _assets_grouped_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/grouped.svg */ \"./src/assets/grouped.svg\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n__webpack_require__(/*! ./index.css */ \"./src/index.css\").toString();\n\nvar _require = __webpack_require__(/*! ./util */ \"./src/util.js\"),\n    make = _require.make;\n\n\n/**\n * This Block Tunes allows user to select some of predefined text variant.\n *\n * @see TextVariant enum for the details.\n * @uses Block Tunes API  {@link https://editorjs.io/block-tunes-api}\n */\n\nvar GroupTune = /*#__PURE__*/function () {\n  /**\n   * Tune constructor. Called on Block creation\n   *\n   * @param {object} options - constructor params\n   * @param {API} api - editor.js Core API\n   * @param {BlockAPI} block - editor.js Block API\n   * @param {boolean} data - previously saved data\n   * @param {Object} config - configuration supported by Tune\n   */\n  function GroupTune(_ref) {\n    var api = _ref.api,\n        data = _ref.data,\n        config = _ref.config,\n        block = _ref.block;\n\n    _classCallCheck(this, GroupTune);\n\n    this.api = api;\n    this.data = Boolean(data || false);\n    this.config = config;\n    this.block = block;\n    this.settings = Object.assign({}, config, {\n      icon: _assets_grouped_svg__WEBPACK_IMPORTED_MODULE_0__.default,\n      title: this.api.i18n.t('Grouped')\n    }); // this.wrapper = undefined;\n  }\n  /**\n   * Tell editor.js that this Tool is a Block Tune\n   *\n   * @returns {boolean}\n   */\n\n\n  _createClass(GroupTune, [{\n    key: \"render\",\n    value:\n    /**\n     * Create Tunes controls wrapper that will be appended to the Block Tunes panel\n     *\n     * @returns {Element}\n     */\n    function render() {\n      var _this = this;\n\n      var wrapper = make('div', '');\n      var classes = [this.api.styles.settingsButton];\n\n      if (this.data) {\n        classes.push(this.api.styles.settingsButtonActive);\n      }\n\n      var toggler = make('div', classes, {\n        innerHTML: this.settings.icon\n      });\n      toggler.dataset.name = 'grouped';\n      this.api.tooltip.onHover(toggler, this.settings.title, {\n        placement: 'top',\n        hidingDelay: 500\n      });\n      wrapper.appendChild(toggler);\n      /**\n       * Delegate click event on all the controls\n       */\n\n      this.api.listeners.on(wrapper, 'click', function (event) {\n        _this.tuneClicked(event);\n\n        toggler.classList.toggle(_this.api.styles.settingsButtonActive, _this.data);\n      });\n      return wrapper;\n    }\n    /**\n     * Handler for Tune controls click\n     *\n     * @param {MouseEvent} event - click\n     * @returns {void}\n     */\n\n  }, {\n    key: \"tuneClicked\",\n    value: function tuneClicked(event) {\n      this.data = !this.data;\n      this.wrapper.classList.toggle(GroupTune.CSS.applied, this.data);\n    }\n    /**\n     * Wraps Block Content to the Tunes wrapper\n     *\n     * @param {Element} blockContent - editor.js block inner container\n     * @returns {Element} - created wrapper\n     */\n\n  }, {\n    key: \"wrap\",\n    value: function wrap(blockContent) {\n      this.wrapper = make('div', GroupTune.CSS.wrapper);\n      this.wrapper.classList.toggle(GroupTune.CSS.applied, !!this.data);\n      this.wrapper.appendChild(blockContent);\n      return this.wrapper;\n    }\n    /**\n     * Returns Tune state\n     *\n     * @returns {boolean}\n     */\n\n  }, {\n    key: \"save\",\n    value: function save() {\n      return Boolean(this.data || false);\n    }\n  }], [{\n    key: \"isTune\",\n    get: function get() {\n      return true;\n    }\n    /**\n     * CSS selectors used in Tune\n     */\n\n  }, {\n    key: \"CSS\",\n    get: function get() {\n      return {\n        wrapper: 'cdx-stretch-tune--wrapper',\n        applied: 'cdx-stretch-tune--applied'\n      };\n    }\n  }]);\n\n  return GroupTune;\n}();\n\n\n\n//# sourceURL=webpack://GroupTune/./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"make\": function() { return /* binding */ make; }\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n * node 作成用\n * @param tagName\n * @param classNames\n * @param attributes\n * @returns {*}\n */\nfunction make(tagName) {\n  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var el = document.createElement(tagName);\n\n  if (Array.isArray(classNames)) {\n    var _el$classList;\n\n    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));\n  } else if (classNames) {\n    el.classList.add(classNames);\n  }\n\n  for (var attrName in attributes) {\n    el[attrName] = attributes[attrName];\n  }\n\n  return el;\n}\n\n//# sourceURL=webpack://GroupTune/./src/util.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".cdx-stretch-tune--wrapper{}\\n.cdx-stretch-tune--applied{}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://GroupTune/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://GroupTune/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/assets/grouped.svg":
/*!********************************!*\
  !*** ./src/assets/grouped.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<svg width=\\\"20px\\\" height=\\\"20px\\\" viewBox=\\\"0 0 1024 1024\\\" fill=\\\"none\\\">\\n    <g id=\\\"Layer_1\\\">\\n        <rect x=\\\"0.173\\\" y=\\\"0.462\\\" width=\\\"1024.001\\\" height=\\\"1024\\\"/>\\n    </g>\\n    <g id=\\\"Layer_2\\\">\\n    </g>\\n    <g id=\\\"Layer_3\\\">\\n        <g style=\\\"fill: currentColor;\\\">\\n            <path d=\\\"M68.198,383.617l35.77,23.273l45.583,29.683l75.455,49.137l45.583,29.702l177.954,115.875\\n\\t\\t\\tc13.121,8.545,30.061,12.875,50.356,12.875c32.282,0,69.603-11.362,99.814-30.382l145.181-91.354l46.888-29.494l79.878-50.271\\n\\t\\t\\tl46.889-29.494L936,401.559c33.748-21.25,53.315-49.023,53.655-76.23c0.265-19.02-8.792-35.6-25.485-46.755L566.157,13.245\\n\\t\\t\\tc-13.404-8.942-31.1-13.65-51.217-13.65c-32.726,0-69.754,12.346-99.049,33.011L93.777,259.99\\n\\t\\t\\tc-32.698,23.065-51.169,51.935-50.659,79.179C43.459,357.526,52.374,373.332,68.198,383.617z M122.921,301.28L445.036,73.896\\n\\t\\t\\tc20.778-14.671,47.558-23.746,69.905-23.746c9.963,0,18.169,1.815,23.16,5.143L936.151,320.64\\n\\t\\t\\tc3.005,2.023,2.986,3.138,2.986,4.027c-0.076,6.164-8.167,20.305-30.06,34.088l-37.624,23.689l-46.869,29.512l-79.896,50.234\\n\\t\\t\\tl-46.869,29.512l-126.01,79.274c-22.178,13.973-50.121,22.632-72.912,22.632c-14.057,0-20.626-3.29-22.792-4.69L315.046,484.046\\n\\t\\t\\tl-45.592-29.683l-75.464-49.156l-45.583-29.683l-52.625-34.277c-2.099-1.36-2.099-1.984-2.127-3.043\\n\\t\\t\\tC93.532,331.776,101.227,316.594,122.921,301.28z\\\"/>\\n            <path d=\\\"M955.757,470.245l-38.209-25.505l-46.889,29.494l57.059,38.058c3.007,2.004,2.988,3.12,2.988,4.027\\n\\t\\t\\tc-0.075,6.163-8.167,20.324-30.041,34.089l-36.547,22.988L817.25,602.91l-253.854,159.7c-22.177,13.971-50.13,22.629-72.93,22.629\\n\\t\\t\\tc-14.047,0-20.608-3.271-22.773-4.67L193.053,601.717l-45.592-29.681l-60.103-39.154c-2.099-1.343-2.108-1.968-2.136-3.026\\n\\t\\t\\tc-0.104-6.465,7.581-21.647,29.276-36.924l35.052-24.767l-45.583-29.683l-18.613,13.159\\n\\t\\t\\tc-32.708,23.084-51.17,51.936-50.659,79.161c0.34,18.358,9.254,34.125,25.088,44.447l43.239,28.189l45.592,29.664L440.12,822.921\\n\\t\\t\\tc13.111,8.544,30.061,12.855,50.347,12.855c32.291,0,69.603-11.344,99.852-30.363l273.007-171.781l46.868-29.514l17.373-10.927\\n\\t\\t\\tc33.767-21.23,53.316-49.005,53.676-76.211C981.507,497.961,972.45,481.361,955.757,470.245z\\\"/>\\n            <path d=\\\"M955.757,659.76l-45.563-30.345l-46.868,29.475l64.393,42.937c3.007,2.023,2.988,3.138,2.988,4.027\\n\\t\\t\\tc-0.075,6.145-8.167,20.306-30.041,34.088L563.396,952.162c-22.177,13.953-50.13,22.632-72.93,22.632\\n\\t\\t\\tc-14.047,0-20.608-3.29-22.773-4.689L87.359,722.434c-2.099-1.38-2.108-1.984-2.136-3.044\\n\\t\\t\\tc-0.104-6.465,7.581-21.609,29.276-36.924l34.116-24.105l-45.592-29.683l-17.668,12.479\\n\\t\\t\\tc-32.708,23.085-51.17,51.953-50.659,79.197c0.34,18.357,9.254,34.145,25.088,44.431l380.336,247.671\\n\\t\\t\\tc13.111,8.564,30.061,12.875,50.347,12.875c32.291,0,69.603-11.344,99.852-30.383l337.248-212.221\\n\\t\\t\\tc33.767-21.214,53.316-49.024,53.676-76.231C981.507,687.496,972.45,670.895,955.757,659.76z\\\"/>\\n        </g>\\n    </g>\\n</svg>\\n\");\n\n//# sourceURL=webpack://GroupTune/./src/assets/grouped.svg?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://GroupTune/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://GroupTune/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
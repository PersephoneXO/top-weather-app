/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    font-family: \"Aleo\", serif;\n    overflow: hidden;\n}\n\n.content{\n    display: grid;\n    grid-template-areas: 'header'\n    'main-container'\n    'footer';\n    min-height: 100vh;\n    grid-template-rows: 10vh 80vh 10vh;\n}\n\n\n/*header*/\n.header-container{\n    grid-area: header;\n}\n\n#search-bar{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 50px 0;\n}\n\n#location{\n    font-family: \"Aleo\", serif;\n    height: 48px;\n    width: 790px;\n    padding-inline: 10px;\n    border-color: #b7b7b7;\n    border-style:solid;\n}\n\n#search-icon{\n    height: 30px;\n    object-fit: cover;\n}\n\n.search-button{\n    border: none;\n    background: none;\n    padding: 0;\n    margin: 0;\n    height: min-content;\n    width: min-content;\n    margin-left: -40px;\n}\n\n\n\n/*main*/\n.main-container{\n    grid-area: main;\n    display: flex;\n    justify-content: center;\n    margin-top: 50px;\n}\n\n\n/*landing page*/\n.landing-page-container, .error-page-container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n}\n\n.error-page-container{\n    margin-top: 50px;\n}\n\n#error-page-img{\n    height: 300px;\n    margin-top: 50px;\n}\n\n.loader{\n    border: 16px solid #f3f3f3;\n    border-top: 16px solid #3498db;\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    display: none;\n    position: absolute;\n    top: 45vh;\n    left: 46vw;\n    animation: spin 2s linear infinite;\n    -webkit-animation: spin 2s linear infinite;\n}\n\n@keyframes spin{\n    0%{transform:rotate(0deg);}\n    100%{transform: rotate(360deg);}\n}\n\n@keyframes spin{\n    0%{-webkit-transform: rotate(0deg);}\n    100%{-webkit-transform: rotate(360deg);}\n}\n\n\n/*current container*/\n.main-container-current{\n    display: flex;\n    align-items: center;\n    gap: 80px;\n}\n\n\n.mc-current-text *{\n    margin: 0;\n}\n\n.location-title{\n    font-size: 40px;\n    font-weight: bold;\n    margin-bottom:8px;\n}\n\n.current-condition{\n    font-size: 16px;\n    margin-bottom: 25px;\n}\n\n.current-temp{\n    font-size: 64px;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n.current-img{\n    height: 154px;\n}\n\n/*dom divider*/\n.dom-divider{\n    border: 1px solid #F0F0F0;\n}\n\n\n/*today container*/\n    .main-container-today{\n        display: flex;\n        flex-direction: column;\n        margin-top: 25px;\n    }\n\n    .main-container-today *{\n        margin: 0;\n    }\n\n    .mc-today-title{\n        font-size: 14px;\n        font-weight: bold;\n    }\n\n    .mc-today-hours-container{\n        display: flex;\n        justify-content: space-around;\n        margin-top: 24px;\n        margin-bottom: 25px;\n    }\n\n    .hour-container{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .mc-today-time{\n        font-weight: bold;\n    }\n\n    .mc-today-img{\n        height: 60px;\n        margin: 5px 0;\n    }\n\n    .mc-today-temp{\n        font-size: 24px;\n        font-weight: bold;\n    }\n\n    /*3-day container*/\n    .main-container-three{\n        margin-top: 25px;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .main-container-three *{\n        margin: 0;\n    }\n\n    .mc-three-title{\n        font-size: 14px;\n        font-weight: bold\n    }\n\n    .mc-three-days-container{\n        margin-top: 25px;\n    }\n\n    .day-container{\n        display: grid;\n        grid-template-areas: \"weekday condition temp\";\n        align-items: center;\n        grid-template-columns: 85px auto min-content;\n        height: 75px;\n    }\n\n    .three-day-weekday{\n        grid-area: weekday;\n    }\n\n    .three-day-condition-container{\n        display: flex;\n        align-items: center;\n        text-wrap: wrap;\n        grid-area: condition;\n        gap: 20px;\n        margin-right: 30px;\n    }\n\n    .three-day-condition{\n        font-weight: bold;\n        width: 150px;\n    }\n\n    .three-day-temp{\n        font-weight: bold;\n        grid-area: temp;\n    }\n\n    footer{\n        grid-area: footer;\n        margin-top: auto;\n        text-align: center;\n    }\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://setup-template/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://setup-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://setup-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://setup-template/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://setup-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://setup-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://setup-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://setup-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://setup-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://setup-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data-manager.js":
/*!*****************************!*\
  !*** ./src/data-manager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataManager: () => (/* binding */ dataManager)\n/* harmony export */ });\n/* harmony import */ var _dist_1466ef00c00a12679445_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../dist/1466ef00c00a12679445.svg */ \"./dist/1466ef00c00a12679445.svg\");\nfunction createDOM(type,className){\n    let element=document.createElement(type);\n    element.classList.add(className);\n    return element;\n}\n\n\n\nconst dataManager=(function(){\n    //function to get whatever the user inputted into the search bar\n    function getLocation(){\n        let location=document.querySelector('#location').value;\n        return location;\n    }\n\n    //function to fetch the data about the location from the weather api\n    async function getData(){\n        try{\n            const location=getLocation();\n\n            //get forcast data\n            let forecastUrl='https://api.weatherapi.com/v1/forecast.json?key=800e3d8069c34e27aaa193928241202&q='+location+'&days=3';\n            const forecastResponse=await fetch(forecastUrl,{mode:'cors'});\n            const weatherData=await forecastResponse.json();\n\n            return weatherData;\n\n        } catch(error){\n            console.log(error);\n        }\n    }\n\n    //function to create the page's contents after retrieving the data\n    function showData(data){\n        let mainContainerContent=createDOM('div','main-container-content');\n        //current container\n        let mainContainerCurrent=createDOM('div','main-container-current');\n        let currentTextDiv=createDOM('div','mc-current-text');\n        //location title\n        let locationTitle=createDOM('p','location-title');\n        locationTitle.textContent=`${data.location.name}`;\n        currentTextDiv.appendChild(locationTitle);\n        //current condition\n        let currentCondition=createDOM('p','current-condition');\n        currentCondition.textContent=`${data.current.condition.text}`;\n        currentTextDiv.appendChild(currentCondition);\n        //current temp\n        let currentTemp=createDOM('p','current-temp');\n        currentTemp.textContent=`${data.current.temp_c}°C`;\n        currentTextDiv.appendChild(currentTemp);\n        mainContainerCurrent.appendChild(currentTextDiv);\n        //current condition image\n        let currentImage=createDOM('img','current-img');\n        currentImage.setAttribute('src',`${data.current.condition.icon}`);\n        mainContainerCurrent.appendChild(currentImage);\n        //div divider\n        let divDividerCurrent=createDOM('hr','dom-divider');\n        mainContainerContent.appendChild(mainContainerCurrent);\n        mainContainerContent.appendChild(divDividerCurrent);\n        //\n        //today's forecast container\n        let mainContainerToday=createDOM('div','main-container-today');\n        //today's forecast title\n        let todayForecast=createDOM('p','mc-today-title');\n        todayForecast.textContent=\"Today's forecast\"\n        mainContainerToday.appendChild(todayForecast);\n        //hours container\n        let todayConditions=createDOM('div','mc-today-hours-container');\n        //6am condition\n        let sixAM=getDataAtSpecificTime(data.forecast.forecastday[0],\"6\");\n        todayConditions.appendChild(createHourContainer('6:00 AM',sixAM.condition.icon,sixAM.temp_c));\n        //12pm condition\n        let twelvePM=getDataAtSpecificTime(data.forecast.forecastday[0],\"12\");\n        todayConditions.appendChild(createHourContainer('12:00 PM', twelvePM.condition.icon, twelvePM.temp_c));\n        //6pm condition\n        let sixPM=getDataAtSpecificTime(data.forecast.forecastday[0],\"18\");\n        todayConditions.appendChild(createHourContainer('6:00 PM', sixPM.condition.icon, sixPM.temp_c));\n        mainContainerToday.appendChild(todayConditions);\n        let divDividerToday=createDOM('hr','dom-divider');\n        mainContainerToday.appendChild(divDividerToday);\n        mainContainerContent.appendChild(mainContainerToday);\n        //\n        //3-day forecast container\n        let mainContainerThree=createDOM('div','main-container-three');\n        //3-day title\n        let threeTitle=createDOM('p','mc-three-title');\n        threeTitle.textContent=\"3-day forecast\";\n        mainContainerThree.appendChild(threeTitle);\n        //days container\n        let threeConditions=createDOM('div','mc-three-days-container');\n        //day 1\n        threeConditions.appendChild(createDayContainers(data.forecast.forecastday[0],'yes'));\n        let divDividerThree1=createDOM('hr','dom-divider');\n        threeConditions.appendChild(divDividerThree1);\n        //day 2\n        threeConditions.appendChild(createDayContainers(data.forecast.forecastday[1]));\n        let divDividerThree2=createDOM('hr','dom-divider');\n        threeConditions.appendChild(divDividerThree2);\n        //day 3\n        threeConditions.appendChild(createDayContainers(data.forecast.forecastday[2]));\n        mainContainerThree.appendChild(threeConditions);\n        mainContainerContent.appendChild(mainContainerThree);\n        return mainContainerContent;\n    }\n\n    //function to create each of the hour containers\n    function createHourContainer(time,icon,temp){\n        let hourContainer=createDOM('div','hour-container');\n        let todayTime=createDOM('p','mc-today-time');\n        todayTime.textContent=`${time}`;\n        hourContainer.appendChild(todayTime);\n        let todayIcon=createDOM('img','mc-today-img');\n        todayIcon.setAttribute('src',icon);\n        hourContainer.appendChild(todayIcon);\n        let todayTemp=createDOM('p','mc-today-temp');\n        todayTemp.textContent=`${temp}°C`;\n        hourContainer.appendChild(todayTemp);\n        return hourContainer;\n    }\n\n    //function to get the specific time at a specific date\n    function getDataAtSpecificTime(date,chosenTime){\n        let hourArray=date.hour;\n        let n;\n        switch(chosenTime){\n            case \"6\":\n                n=\"06:00\";\n                break;\n            case \"12\":\n                n=\"12:00\";\n                break;\n            case \"18\":\n                n=\"18:00\";\n                break;\n        }\n        let timeData;\n        for(let i=0;i<hourArray.length;i++){\n            if(hourArray[i].time.includes(n)){\n                timeData=hourArray[i];\n            }\n        }\n        return timeData;\n    }\n\n    //function to create each of the 3-day forecast containers\n    function createDayContainers(day, today='no'){\n        let date=new Date(day.date);\n        let dayIndex=date.getDay();\n        let dayNames=[\"Mon\",\"Tue\",\"Wed\",\"Thu\",\"Fri\",\"Sat\",\"Sun\"];\n        let dayOfWeek=dayNames[dayIndex];\n        let dayContainer=createDOM('div','day-container');\n        //weekday\n        let weekday=createDOM('p','three-day-weekday');\n        if(today=='no'){\n            weekday.textContent=`${dayOfWeek}`;\n        }else{\n            weekday.textContent='Today';\n        }\n        dayContainer.appendChild(weekday);\n        //condition container\n        let conditionContainer=createDOM('div','three-day-condition-container');\n        //condition icon\n        let conditionIcon=createDOM('img','three-day-icon');\n        conditionIcon.setAttribute('src',day.day.condition.icon);\n        conditionContainer.appendChild(conditionIcon);\n        //condition text\n        let conditionText=createDOM('p','three-day-condition');\n        conditionText.textContent=`${day.day.condition.text}`;\n        conditionContainer.appendChild(conditionText);\n        dayContainer.appendChild(conditionContainer);\n        //avg temp\n        let avgTemp=createDOM('p','three-day-temp');\n        avgTemp.textContent=`${day.day.avgtemp_c}°C`;\n        dayContainer.appendChild(avgTemp);\n        return dayContainer\n\n    }\n\n    //function to create the landing page screen\n    function createLandingPage(){\n        let container=createDOM('div','landing-page-container');\n        let text=createDOM('h1','landing-page-text');\n        text.textContent=\"Enter your location to get started!\";\n        container.appendChild(text);\n        let img=createDOM('img','landing-page-img');\n        img.setAttribute('src',_dist_1466ef00c00a12679445_svg__WEBPACK_IMPORTED_MODULE_0__);\n        container.appendChild(img);\n        let attribution=createDOM('p','img-attr');\n        attribution.innerHTML='<a href=\"https://www.freepik.com/free-vector/earth-moon-concept-illustration_22881458.htm#query=globe&position=40&from_view=search&track=sph&uuid=40530c76-ce83-4458-ab7f-a6bab1e21b68\">Image by storyset</a> on Freepik';\n        container.appendChild(attribution);\n        return container;\n    }\n\n    //function to create error page if the location cannot be found\n    function createErrorPage(){\n        let container=createDOM('div','error-page-container');\n        let text=createDOM('h1','error-page-text');\n        text.innerHTML=`Your location could not be found!<br>Please check the spelling or try a different location.`;\n        container.appendChild(text);\n        let img=createDOM('div','error-page-img-container');\n        img.innerHTML='<svg id=\"error-page-img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>map-marker-question-outline</title><path d=\"M12,1C7.59,1 4,4.59 4,9C4,14.57 10.96,22.34 11.26,22.67L12,23.5L12.74,22.67C13.04,22.34 20,14.57 20,9C20,4.59 16.41,1 12,1M12,20.47C9.82,17.86 6,12.54 6,9A6,6 0 0,1 12,3A6,6 0 0,1 18,9C18,12.83 13.75,18.36 12,20.47M11.13,14H12.88V15.75H11.13M12,5A3.5,3.5 0 0,0 8.5,8.5H10.25A1.75,1.75 0 0,1 12,6.75A1.75,1.75 0 0,1 13.75,8.5C13.75,10.26 11.13,10.04 11.13,12.88H12.88C12.88,10.91 15.5,10.69 15.5,8.5A3.5,3.5 0 0,0 12,5Z\" /></svg>';\n        container.appendChild(img);\n        return container;\n    }\n\n    //function to show loader\n    function showLoader(loader){\n        loader.style.display='block';\n    }\n\n    //function to hide loader\n    function hideLoader(loader){\n        loader.style.display='none';\n    }\n\n\n    return{\n        getData,\n        showData,\n        createLandingPage,\n        createErrorPage,\n        showLoader,\n        hideLoader\n    }\n})();\n\n\n//# sourceURL=webpack://setup-template/./src/data-manager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _data_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-manager */ \"./src/data-manager.js\");\n\n\n\n//import functions from external files\n\n\n//DOM elements\nconst searchBar=document.querySelector('#search-bar');\nconst mainContainer=document.querySelector('.main-container');\nconst loader=document.querySelector('.loader');\n\n\n//run functions to create landing page on page load\ndocument.addEventListener('DOMContentLoaded',()=>{\n    mainContainer.appendChild(_data_manager__WEBPACK_IMPORTED_MODULE_1__.dataManager.createLandingPage());\n});\n\n//show data on page load\nsearchBar.addEventListener('submit', async (e)=>{\n    e.preventDefault();\n    mainContainer.innerHTML=\"\";\n    //show loader while data is fetched\n    _data_manager__WEBPACK_IMPORTED_MODULE_1__.dataManager.showLoader(loader);\n\n    try{\n    let weatherData=await _data_manager__WEBPACK_IMPORTED_MODULE_1__.dataManager.getData();\n    //mainContainer.innerHTML=\"\";\n    let weatherContent=await _data_manager__WEBPACK_IMPORTED_MODULE_1__.dataManager.showData(weatherData);\n    mainContainer.appendChild(weatherContent);\n    }catch(error){\n        console.error('Error fetching data:',error);\n        //handle error\n        //mainContainer.innerHTML=\"\";\n        mainContainer.appendChild(_data_manager__WEBPACK_IMPORTED_MODULE_1__.dataManager.createErrorPage());\n    }finally{\n        //hide loader when fetching is complete\n        _data_manager__WEBPACK_IMPORTED_MODULE_1__.dataManager.hideLoader(loader);\n    }\n});\n\n\n//# sourceURL=webpack://setup-template/./src/index.js?");

/***/ }),

/***/ "./dist/1466ef00c00a12679445.svg":
/*!***************************************!*\
  !*** ./dist/1466ef00c00a12679445.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1466ef00c00a12679445.svg\";\n\n//# sourceURL=webpack://setup-template/./dist/1466ef00c00a12679445.svg?");

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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/btn2.png */ \"./src/img/btn2.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! img/btn1.png */ \"./src/img/btn1.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box; \\r\\n}\\r\\n\\r\\n.nav-wrap {\\r\\n    position: absolute;\\r\\n    top: 20px;\\r\\n    right: 20px;\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.back {\\r\\n    color: #000;\\r\\n    background-color: #fff;\\r\\n    padding: 10px 15px;\\r\\n    font-size: 22px;\\r\\n    cursor: pointer;\\r\\n    border-radius: 40px;\\r\\n}\\r\\n\\r\\n.back:hover {\\r\\n    box-shadow: 0 0 5px #000;\\r\\n}\\r\\n\\r\\n.tip {\\r\\n    border: 1px solid #000;\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    line-height: 50px;\\r\\n    text-align: center;\\r\\n    display: inline-block;\\r\\n    font-size: 30px;\\r\\n    border-radius: 50%;\\r\\n    cursor: pointer;\\r\\n    margin-right: 30px;\\r\\n    background-color: #fff;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.tip:hover .tip-block {\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.tip-block {\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    top: 45px;\\r\\n    right: 45px;\\r\\n    border: 1px solid #000;\\r\\n    border-radius: 5px;\\r\\n    background-color: #fff;\\r\\n}\\r\\n\\r\\n.tip-gif {\\r\\n    width: 400px;\\r\\n    height: 400px;\\r\\n}\\r\\n\\r\\n.game-background{\\r\\n    background-image: linear-gradient(to bottom, transparent 90%, blue 90%),\\r\\n                      linear-gradient(to right, #fff 90%, blue 90%);\\r\\n    background-size: 57px 57px, 57px 57px;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    opacity: 10%;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    z-index: -99;\\r\\n}\\r\\n\\r\\n.game-background-line{\\r\\n    width: 5px;\\r\\n    height: 100%;\\r\\n    background-color: red;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 222px; \\r\\n    z-index: -98;\\r\\n}\\r\\n\\r\\n.title-wrap {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: start;\\r\\n    margin-top: 100px;\\r\\n}\\r\\n\\r\\n.game-container {\\r\\n    margin-top: 50px;\\r\\n}\\r\\n\\r\\n.board {\\r\\n    margin-top: -50px;\\r\\n}\\r\\n\\r\\n.game-title {\\r\\n    font-size: 36px;\\r\\n    text-align: center;\\r\\n    width: 600px;\\r\\n    border-radius: 20px;\\r\\n    padding: 15px 30px;\\r\\n    box-shadow: 1px 1px 10px #000;\\r\\n    background-color: #fff;\\r\\n}\\r\\n\\r\\n.mode {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.mode-selection-AI,.mode-selection-player {\\r\\n    font-size: 30px;\\r\\n    cursor: pointer;\\r\\n    border: 1px solid #000;\\r\\n    padding: 55px 100px;\\r\\n    width: 420px;\\r\\n    border-radius: 20px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.mode-selection-AI:hover,.mode-selection-player:hover {\\r\\n    box-shadow: 0 0 10px #000;\\r\\n}\\r\\n\\r\\n.mode-selection-AI {\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center / cover;\\r\\n}\\r\\n\\r\\n.mode-selection-player {\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat center / cover;\\r\\n}\\r\\n\\r\\n.board-size {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.board-size-title {\\r\\n    font-size: 36px;\\r\\n    font-weight: 700;\\r\\n    margin-bottom: 100px;\\r\\n}\\r\\n\\r\\n.choose-size-btns-wrapper {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.choose-size-block {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.choose-size-btn {\\r\\n    padding: 20px 30px;\\r\\n    border-radius: 10px;\\r\\n    font-size: 24px;\\r\\n    cursor: pointer;\\r\\n    background-color: #fff;\\r\\n    margin-bottom: 30px;\\r\\n    width: 130px;\\r\\n}\\r\\n\\r\\n.choose-size-btn:hover {\\r\\n    box-shadow: 0 0 10px #000;\\r\\n}\\r\\n\\r\\n.choose-size-img {\\r\\n    width: 500px;\\r\\n    height: 500px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.turn-text {\\r\\n    font-size: 36px;\\r\\n}\\r\\n\\r\\n#turn-text-wrap {\\r\\n    font-size: 30px;\\r\\n    font-weight: 700;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.player {\\r\\n    text-align: center;\\r\\n    width: 280px;\\r\\n    background-color: #fff;\\r\\n    box-shadow: 1px 1px 10px #000;\\r\\n    border-radius: 10px;\\r\\n    padding: 15px 0;\\r\\n}\\r\\n\\r\\n.player-nickname {\\r\\n    font-weight: 700;\\r\\n    font-size: 45px;\\r\\n    margin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.player-score {\\r\\n    font-size: 30px;\\r\\n}\\r\\n\\r\\n.player-score-number {\\r\\n    font-weight: 700;\\r\\n}\\r\\n\\r\\n.player-colors {\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.player-color {\\r\\n    margin: 10px 10px 0 10px;\\r\\n    width: 50px;\\r\\n    height: 50px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.player-colors-text {\\r\\n    font-size: 24px;\\r\\n    width: 280px;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n.row-hor, .row-vert {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.row-hor {\\r\\n    height: 10px;\\r\\n}\\r\\n\\r\\n.row-vert {\\r\\n    height: 45px;\\r\\n}\\r\\n\\r\\n.line {\\r\\n    display: inline-block;\\r\\n    background-color: rgba(207, 206, 206);\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.line:hover {\\r\\n    background-color: #000;\\r\\n}\\r\\n\\r\\n.line-game {\\r\\n    background-color: #000;\\r\\n    cursor: auto;\\r\\n}\\r\\n\\r\\n.line-hor {\\r\\n    width: 45px;\\r\\n    height: 10px;\\r\\n    margin: 0 6px;\\r\\n    border-radius: 3px;\\r\\n}\\r\\n  \\r\\n.line-vert {\\r\\n    width: 10px;\\r\\n    height: 45px;\\r\\n    border-radius: 3px;\\r\\n}\\r\\n\\r\\n.square {\\r\\n    width: 47px;\\r\\n    height: 47px;\\r\\n    background-color:#fff;\\r\\n}\\r\\n\\r\\n.board-button {\\r\\n    border-radius: 25px;\\r\\n    padding: 10px 20px;\\r\\n    font-size: 30px;\\r\\n    cursor: pointer;\\r\\n    background: linear-gradient(rgb(1, 255, 1), rgb(30, 168, 84));\\r\\n    display: block;\\r\\n    margin: 20px auto 0 auto;\\r\\n    border: none;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://web_app_test/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://web_app_test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://web_app_test/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://web_app_test/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://web_app_test/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://web_app_test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://web_app_test/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://web_app_test/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://web_app_test/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://web_app_test/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://web_app_test/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_board7_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/board7.png */ \"./src/img/board7.png\");\n/* harmony import */ var _img_board9_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/board9.png */ \"./src/img/board9.png\");\n/* harmony import */ var _img_board11_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/board11.png */ \"./src/img/board11.png\");\n/* harmony import */ var _img_tip_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/tip.gif */ \"./src/img/tip.gif\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst root = document.getElementById('root');\r\n\r\nlet board;\r\nlet game;\r\nlet players;\r\n\r\nfunction initBlocks () {\r\n    const navWrap = createElem('div','nav-wrap');\r\n\r\n    const tip = createElem('div','tip','?');\r\n    const tipBlock = createElem('div','tip-block','Close as much squares as you can');\r\n    const tipGIFElem = createElem('img','tip-gif');\r\n    tipGIFElem.src = _img_tip_gif__WEBPACK_IMPORTED_MODULE_4__;\r\n    tipBlock.appendChild(tipGIFElem);\r\n    tip.appendChild(tipBlock);\r\n    navWrap.appendChild(tip);\r\n\r\n    const resetBtn = createResetBtn();\r\n    navWrap.appendChild(resetBtn);\r\n\r\n    root.innerHTML = \" \";\r\n    root.appendChild(navWrap);\r\n\r\n    const titleWrap = createElem('div','title-wrap');\r\n    const title = createElem('h1','game-title');\r\n    titleWrap.appendChild(title);\r\n    root.appendChild(titleWrap);\r\n\r\n    const container = createElem('div','game-container');\r\n    root.appendChild(container);\r\n\r\n    const background = createElem('div','game-background');\r\n    const redLine = createElem('div','game-background-line');\r\n    background.appendChild(redLine);\r\n    root.appendChild(background);\r\n\r\n    game = Game();\r\n    game.initGame();\r\n}\r\n\r\nconst Game = () => {\r\n    const playersReady = [false,false];\r\n    let firstPlayerTurn = true;\r\n    \r\n    let isModeAI;\r\n    const setMode = (mode) => isModeAI = mode;\r\n    const getIsAIMode = () => isModeAI;\r\n\r\n    let boardSize;\r\n    const setBoardSize = (size) => boardSize = size;\r\n    const getBoardSize = () => boardSize;\r\n\r\n    async function initGame() {\r\n        const mode = await chooseMode();\r\n        setMode(mode);\r\n        const boardSize = await chooseBoardSize();\r\n        setBoardSize(boardSize);\r\n        start();\r\n    }\r\n\r\n    function chooseMode() {\r\n        return new Promise((resolve) => {\r\n            const title = document.querySelector('.game-title');\r\n            title.textContent = 'Choose the mode you want to play';\r\n            const modeContainer = createElem('div','mode');\r\n\r\n            const btnPlsyer = createElem('button','mode-selection-player',\"Player vs Player\");\r\n            btnPlsyer.addEventListener('click', function(){\r\n                resolve(false);\r\n            });\r\n\r\n            const btnAI = createElem('button','mode-selection-AI',\"Player vs AI\");\r\n            btnAI.addEventListener('click', function(){\r\n                resolve(true);\r\n            });\r\n            modeContainer.appendChild(btnPlsyer);\r\n            modeContainer.appendChild(btnAI);\r\n            append(modeContainer);\r\n        })\r\n    }\r\n    \r\n    async function chooseBoardSize() {\r\n            const boardSize = await createBoardSizeContent()\r\n            return boardSize\r\n    }\r\n    \r\n    const createBoardSizeContent = () => {\r\n       return new Promise((resolve) => {\r\n            const title = document.querySelector('.game-title');\r\n            title.textContent = 'Choose board size';\r\n\r\n            const wrapper = createElem(\"div\",\"board-size\");\r\n            const btnswrapper = createElem(\"div\",\"choose-size-btns-wrapper\");\r\n        \r\n            const btnBlock1 = createElem(\"div\",\"choose-size-block\");\r\n            const btnImage1 = createBtnImage(_img_board7_png__WEBPACK_IMPORTED_MODULE_1__,'board7x7');\r\n            btnBlock1.addEventListener('click', function(){\r\n                resolve(7);\r\n            });\r\n            btnBlock1.appendChild(btnImage1);\r\n            btnswrapper.appendChild(btnBlock1);\r\n        \r\n            const btnBlock2 = createElem(\"div\",\"choose-size-block\");\r\n            const btnImage2 = createBtnImage(_img_board9_png__WEBPACK_IMPORTED_MODULE_2__,'board9x9');\r\n            btnBlock2.addEventListener('click', function(){\r\n                resolve(9);\r\n            });\r\n            btnBlock2.appendChild(btnImage2);\r\n            btnswrapper.appendChild(btnBlock2);\r\n        \r\n            const btnBlock3 = createElem(\"div\",\"choose-size-block\");\r\n            const btnImage3 = createBtnImage(_img_board11_png__WEBPACK_IMPORTED_MODULE_3__,'board11x11');\r\n            btnBlock3.addEventListener('click', function(){\r\n                resolve(11);\r\n            });\r\n            btnBlock3.appendChild(btnImage3);\r\n            btnswrapper.appendChild(btnBlock3);\r\n        \r\n            wrapper.appendChild(btnswrapper);\r\n            append(wrapper);\r\n        })\r\n    }\r\n    \r\n    const createBtnImage = (source,alt) => {\r\n        const btnImage = createElem('img','choose-size-img')\r\n        btnImage.src = source;\r\n        btnImage.alt = alt;\r\n        return btnImage\r\n    }\r\n    \r\n    const start = () => {\r\n        append(\" \");\r\n        board = Board();\r\n        if(isModeAI){\r\n            players = [Player(\"Player\",0),AIPlayer()];\r\n        }\r\n        else players = [Player(\"Player 1\",0),Player(\"Player 2\",1)];\r\n\r\n        createScoreBoard(isModeAI ? \"player vs AI\":\"player vs player\");\r\n\r\n        \r\n    }\r\n\r\n    const restart = () => {\r\n        board.destroyBoard();\r\n        game.firstPlayerTurn = true;\r\n        board = Board();\r\n        players[0].resetScore();\r\n        players[1].resetScore();\r\n        board.createBoard();\r\n    }\r\n\r\n    const createScoreBoard = (mode) => {\r\n        const colors = [\"#2852DF\",\"#DC2B36\",\"#1CBE29\", \"#f2dc11\"];\r\n        let player1Name;\r\n        let player2Name;\r\n        let isAI = false;\r\n        switch(mode) {\r\n            case \"player vs player\":\r\n                player1Name = \"Player 1\";\r\n                player2Name = \"Player 2\";\r\n                break\r\n            case \"player vs AI\":\r\n                player1Name = \"Player\";\r\n                player2Name = \"AI\";\r\n                isAI = true;\r\n                break\r\n        }\r\n        \r\n        const title = document.querySelector('.game-title');\r\n        title.textContent = 'Every player must choose color before the game starts';\r\n        title.insertAdjacentHTML('beforebegin',`\r\n        <div class=\"player\">\r\n            <h2 class=\"player-nickname\">${player1Name}</h2>\r\n            <div class=\"player-score\">Squares = <span class=\"player-score-number\" data-player-score=\"0\">0</span></div>\r\n            <div class=\"player-colors\"><p class=\"player-colors-text\">Choose color:</p></div>\r\n        </div>`)\r\n\r\n        title.insertAdjacentHTML('afterend',`\r\n        <div class=\"player\">\r\n            <h2 class=\"player-nickname\">${player2Name}</h2>\r\n            <div class=\"player-score\">Squares = <span class=\"player-score-number\" data-player-score=\"1\">0</span></div>\r\n            <div class=\"player-colors\"><p class=\"player-colors-text\">Choose color:</p></div>\r\n        </div>`)\r\n\r\n        const colorsChoice = document.getElementsByClassName(\"player-colors\");\r\n        if(isAI){\r\n            createColors(colors,colorsChoice[0],0);\r\n            setPlayerColor(1,players[1].getColor());\r\n        }\r\n        else {\r\n            createColors(colors,colorsChoice[0],0);\r\n            createColors(colors,colorsChoice[1],1);\r\n        }\r\n    }\r\n\r\n    const createColorBlock = (count,color) => {\r\n        const playerColor = createElem('div','player-color')\r\n        playerColor.setAttribute('data-color-numder', count);\r\n        playerColor.style.backgroundColor = color;\r\n        return playerColor\r\n    }\r\n\r\n    const createColors = (colors,colorsChoice,i) => {\r\n        let count = 0;\r\n        colors.forEach(color => {\r\n            const playerColor = createColorBlock(count,color);\r\n            playerColor.addEventListener(\"click\",  () => clickColor(i,color)); \r\n            colorsChoice.appendChild(playerColor);\r\n            count++;\r\n        })\r\n    }\r\n\r\n    const clickColor = (i,color) => {\r\n        const colorNumber = event.target.getAttribute(\"data-color-numder\");\r\n        document.querySelectorAll(`[data-color-numder=\"${colorNumber}\"]`).forEach(element => {\r\n            element.remove();\r\n        });\r\n        setPlayerColor(i,color)\r\n        players[i].setColor(color);\r\n        checkStartGame();\r\n    }\r\n\r\n    const setPlayerColor = (i,color) => {\r\n        const playerColor = createColorBlock(10,color);\r\n        document.getElementsByClassName(\"player-nickname\")[i].style.color = color;\r\n        const colorsChoice = document.getElementsByClassName(\"player-colors\");\r\n        colorsChoice[i].innerHTML = \" \";\r\n        colorsChoice[i].appendChild(playerColor);\r\n        playersReady[i] = true;\r\n    }\r\n\r\n    const checkStartGame = () => {\r\n        if(playersReady[0] && playersReady[1]) {\r\n            board.createBoard();\r\n        }\r\n    }\r\n\r\n    const endGame = (isFirstPlayerWon) => {\r\n        const title = document.querySelector('.game-title');\r\n        title.textContent = '';\r\n        \r\n        const text = createElem('div','winner-text')\r\n\r\n        const name = document.createElement('span');\r\n        let winnerText = isFirstPlayerWon ? players[0].getName():players[1].getName();\r\n        winnerText = winnerText + ' is won';\r\n        name.textContent = winnerText;\r\n        name.style.color = isFirstPlayerWon ? players[0].getColor():players[1].getColor();\r\n        text.appendChild(name);\r\n        title.appendChild(text);\r\n\r\n        const createBoardButton = createElem('button','board-button','Restart');\r\n        createBoardButton.onclick = restart;\r\n        title.appendChild(createBoardButton);\r\n    }\r\n\r\n    return {initGame,setMode,getIsAIMode,setBoardSize,getBoardSize,createScoreBoard,firstPlayerTurn,endGame}\r\n}\r\n\r\nconst Board = () => {\r\n    let squares = {};\r\n    let remainingSquares;\r\n    let lastLine;\r\n    const boardSize = game.getBoardSize();\r\n    const setRemainingSquares = (arr) => remainingSquares = arr;\r\n    const getRemainingSquares = () => remainingSquares;\r\n    const createBoard = () => {\r\n        let upSize = Math.ceil(boardSize/2);\r\n        let numb = 1,c=0;\r\n        const board = document.createElement('div');\r\n        board.classList.add(\"board\");\r\n        for(let i = 0; i < upSize; i++){\r\n            board.appendChild(createRowHor(numb,i,c));\r\n            board.appendChild(createRowVert(numb+1,i));\r\n            numb=numb+2;\r\n        }\r\n    \r\n        c=-1;  // coefficient for making the board\r\n        for(let i = 0; i < boardSize-upSize; i++){\r\n            numb=numb-2;\r\n            board.appendChild(createRowHor(numb,i+upSize,c));\r\n            board.appendChild(createRowVert(numb-1,i+upSize));\r\n        }\r\n\r\n        board.appendChild(createRowHor(1,9,c));\r\n        board.querySelector(\"[data-numbs='00']\").style.background= \"#b5b0b0\";\r\n        board.querySelector(`[data-numbs='${boardSize-upSize}0']`).style.background= \"#b5b0b0\";\r\n        board.querySelector(`[data-numbs='${(boardSize-upSize).toString() + boardSize-1}']`).style.background= \"#b5b0b0\";\r\n        board.querySelector(`[data-numbs='${boardSize-1}0']`).style.background= \"#b5b0b0\";\r\n\r\n        const container = document.getElementsByClassName('game-container');\r\n        container[0].appendChild(board);\r\n        setRemainingSquares(Object.keys(squares));\r\n\r\n        const title = document.querySelector('.game-title');\r\n        title.textContent = '';\r\n        const turnText = createTurnText();\r\n        title.appendChild(turnText);\r\n    }\r\n\r\n    const createRowHor = (numb,i,c) => {\r\n        const row1 = document.createElement('div');\r\n        row1.classList.add(\"row-hor\");\r\n        for(let h = 0; h < numb; h++) {\r\n            if(h === 0 || h === numb-1 || numb < 4) {\r\n                row1.appendChild(createBorderLine(\"line-hor\", (i+c).toString() + h));\r\n            }\r\n            else {\r\n                row1.appendChild(createLine(\"line-hor\", (i+c).toString() + h, (i-1+Math.abs(c)).toString() + h-1));\r\n            }\r\n        }\r\n        return row1\r\n    }\r\n\r\n    const createRowVert = (numb,i) => {\r\n        const row2 = createElem('div','row-vert')\r\n        for(let v = 0; v < numb; v++) {\r\n            if(v === 0 || v === numb-1) {\r\n                if(v !== numb-1){\r\n                    row2.appendChild(createBorderLine(\"line-vert\", (i).toString() + v));\r\n                    row2.appendChild(createSquare(i.toString() + v));\r\n                }\r\n                else row2.appendChild(createBorderLine(\"line-vert\", (i).toString() + v-1));\r\n            }\r\n            else if(numb === boardSize +1)\r\n            {\r\n                if(v === 1 || v === numb-2){\r\n                    row2.appendChild(createBorderLine(\"line-vert\", (i).toString() + v));\r\n                    row2.appendChild(createSquare(i.toString() + v));\r\n                }\r\n                else {\r\n                    row2.appendChild(createLine(\"line-vert\",(i).toString() + (v-1),(i).toString() + v));\r\n                    row2.appendChild(createSquare(i.toString() + v));\r\n                }\r\n            } \r\n            else {\r\n                row2.appendChild(createLine(\"line-vert\", (i).toString() + (v-1), (i).toString() + v));\r\n                row2.appendChild(createSquare(i.toString() + v));\r\n            }\r\n        }\r\n        return row2\r\n    }\r\n\r\n    const createBorderLine = (nameClass,index) => {\r\n        let line = createElem('div','line');\r\n        line.classList.add(\"line-game\");\r\n        line.classList.add(nameClass);\r\n        line.setAttribute('data-numb1', index);\r\n        return line\r\n    }\r\n    \r\n    const createLine = (nameClass,index1,index2) => {\r\n        let line = createElem('div','line');\r\n        line.classList.add(nameClass);\r\n        line.setAttribute('data-numb1', index1);\r\n        line.setAttribute('data-numb2', index2);\r\n        let index3 = (index1).toString() + index2;\r\n        if(squares[index1] == undefined){\r\n            squares[index1] = {[index3] : false};\r\n        }\r\n        else {\r\n            squares[index1] = Object.assign(squares[index1], {[index3] : false});\r\n        }\r\n    \r\n        if(squares[index2] == undefined){\r\n            squares[index2] = {[index3] : false};\r\n        }\r\n        else {\r\n            squares[index2] = Object.assign(squares[index2], {[index3] : false});\r\n        }\r\n    \r\n        line.addEventListener(\"click\", lineClick);\r\n        return line\r\n    }\r\n    \r\n    const createSquare = (index) => {\r\n        const square = createElem('div','square')\r\n        square.setAttribute('data-numbS', index);\r\n        return square\r\n    }\r\n\r\n    const createTurnText = () => {\r\n        const turnText = createElem('h1','turn-text')\r\n        const turnNickname = document.createElement(\"span\");\r\n        turnNickname.setAttribute(\"id\", \"turn-nickname\");\r\n        turnNickname.textContent = \"Player\";\r\n        turnNickname.style.color = `${players[0].getColor()}`\r\n        turnText.appendChild(turnNickname);\r\n        turnText.insertAdjacentHTML(\"beforeend\",\" turn\");\r\n        return turnText\r\n    }\r\n\r\n    const lineChangeColor = (line,i,change) => {\r\n        if(lastLine !== undefined){\r\n            lastLine.style.backgroundColor = '#000';\r\n        }\r\n        line.classList.add('line-game');\r\n        if(change){\r\n            line.style.backgroundColor = players[i].getColor();\r\n        }\r\n        lastLine = line;\r\n    }\r\n\r\n    const lineHandle = (index1,index2,index3,line,i) => {\r\n        let isSquareClosed = false;\r\n        squares[index1][index3] = true;\r\n        squares[index2][index3] = true;\r\n        const indexKeys1 = Object.keys(squares[index1]);\r\n        const indexKeys2 = Object.keys(squares[index2]);\r\n        if(checkIsSquareClosed(index1,indexKeys1)){\r\n            isSquareClosed = true;\r\n            lineChangeColor(line,i,false);\r\n            closedSquare(index1);\r\n        }\r\n        if(checkIsSquareClosed(index2,indexKeys2)){\r\n            isSquareClosed = true;\r\n            lineChangeColor(line,i,false);\r\n            closedSquare(index2);\r\n        }\r\n        if(!isSquareClosed) {\r\n            lineChangeColor(line,i,true);\r\n            game.firstPlayerTurn = !game.firstPlayerTurn;\r\n            document.getElementById(\"turn-nickname\").style.color = `${game.firstPlayerTurn ? players[0].getColor():players[1].getColor()}`;\r\n        }\r\n        else {\r\n            if(remainingSquares.length === 0){\r\n                if(players[0].getScore() > players[1].getScore()){\r\n                    game.endGame(true);\r\n                }\r\n                else  game.endGame(false);\r\n            }\r\n        }\r\n    }\r\n\r\n    const checkIsSquareClosed = (index, indexKeys) => {\r\n        for(let i = 0; i < indexKeys.length; i++) {\r\n            if(!board.squares[index][indexKeys[i]]){\r\n                return false\r\n            }\r\n        }\r\n\r\n        return true\r\n    }\r\n\r\n    const closedSquare = (index) => {\r\n        const squareElement = document.querySelector(`[data-numbS=\"${index}\"]`);\r\n        const i = game.firstPlayerTurn ? 0:1;\r\n        squareElement.style.background = `${players[i].getColor()}`; //change the color of the closed square\r\n\r\n        players[i].scoreCount();\r\n        const playerScore = document.querySelector(`[data-player-score=\"${i}\"]`);\r\n        playerScore.textContent = `${players[i].getScore()}`; //update score display\r\n\r\n        deleteSquareFromRemaining(index);\r\n    }\r\n\r\n    const deleteSquareFromRemaining = (index) => {  //deleting present square from non closed\r\n        let sqaureNumbers = getRemainingSquares();\r\n        for(let i = 0; i < sqaureNumbers.length; i++){ \r\n            if (sqaureNumbers[i] == index) { \r\n                sqaureNumbers.splice(i, 1);\r\n                break\r\n            }\r\n        }\r\n        setRemainingSquares(sqaureNumbers);\r\n    }\r\n\r\n    const destroyBoard = () => {\r\n        const board = document.getElementsByClassName(\"board\");\r\n        board[0].remove();\r\n    }\r\n\r\n    return {getRemainingSquares,createBoard,squares,lineHandle,destroyBoard}\r\n}\r\n\r\nconst Player = (playerName,i) => {\r\n    let name = playerName\r\n    let score = 0;\r\n    let color;\r\n    const getName = () => name;\r\n    const setColor = (chosenColor) => {color = chosenColor};\r\n    const getColor = () => color;\r\n    const getScore = () => score;\r\n    const resetScore = () => {\r\n        score = 0;\r\n        document.querySelector(`[data-player-score=\"${i}\"]`).textContent = score;\r\n    }\r\n    const scoreCount = () => {\r\n        score++;\r\n    }\r\n    return {getName,setColor,getColor,getScore,resetScore,scoreCount}\r\n}\r\n\r\nconst AIPlayer = () => {\r\n    let score = 0;\r\n    let color = \"#fa6c00\";\r\n    const getName = () => \"AI\";\r\n    const getColor = () => color;\r\n    const getScore = () => score;\r\n    const resetScore = () => {\r\n        score = 0;\r\n        document.querySelector(`[data-player-score=\"${1}\"]`).textContent = score;\r\n    }\r\n    const scoreCount = () => {\r\n        score++;\r\n    }\r\n\r\n    const getRandomFreeLine = (squaresObj) => {\r\n        const squaresCopyKeys = board.getRemainingSquares();\r\n        let randomSquare = getRandomNumb(0,squaresCopyKeys.length);\r\n        const squareKeys = Object.keys(squaresObj[squaresCopyKeys[randomSquare]]);\r\n        for(let j = 0; j < squareKeys.length; j++){\r\n            if(!squaresObj[squaresCopyKeys[randomSquare]][squareKeys[j]]){ // if that random line not activated, return it\r\n                return squareKeys[j]\r\n            }\r\n        }\r\n    }\r\n\r\n    const getRandomLine = (squaresObj,count) => {\r\n        let squaresObj1 = JSON.parse(JSON.stringify(squaresObj));\r\n        let randomLine = getRandomFreeLine(squaresObj1);\r\n        const twoSquares = sliceLine(randomLine);\r\n        squaresObj1[twoSquares[0]][randomLine] = true;\r\n        squaresObj1[twoSquares[1]][randomLine] = true;\r\n        let checkBadMove = closureMove(squaresObj1);\r\n        if(checkBadMove == null){\r\n            return randomLine\r\n        }\r\n        else if(count >= 9){\r\n            return findLessClosureToPlayer(squaresObj)\r\n        }\r\n        else return false\r\n    }\r\n\r\n    const closureMove = (squaresObj) => {\r\n        const squaresKeys = Object.keys(squaresObj);\r\n        for(let i = 0; i < squaresKeys.length; i++){\r\n            const squareKeys = Object.keys(squaresObj[squaresKeys[i]]);\r\n            let chosenLine;\r\n            let linesLeft = 0;\r\n            squareKeys.forEach(key1 => {\r\n                if(!squaresObj[squaresKeys[i]][key1]){\r\n                    linesLeft++;\r\n                    chosenLine = key1;\r\n                }\r\n            })\r\n            if(linesLeft == 1){\r\n               return chosenLine;\r\n            }\r\n        }\r\n        return null\r\n    }\r\n\r\n    const addLineToBoard = (line,squaresObj) => {\r\n        const twoSquares = sliceLine(line);\r\n        squaresObj[twoSquares[0]][line] = true;\r\n        squaresObj[twoSquares[1]][line] = true;\r\n        return squaresObj\r\n    }\r\n\r\n    const findLessClosureToPlayer = (squaresObj) => {\r\n        let resultCount = {};\r\n        let chosenLine;\r\n        const remainingSquares = board.getRemainingSquares();\r\n        remainingSquares.forEach((square) => {\r\n            Object.keys(squaresObj[square]).forEach((squareLine) => {\r\n                if(!squaresObj[square][squareLine]){\r\n                    let ClosedSquares = 0;\r\n                    let squaresObjModel = JSON.parse(JSON.stringify(squaresObj));\r\n                    squaresObjModel = addLineToBoard(squareLine,squaresObjModel)\r\n                    while(true){\r\n                        let closureLine = closureMove(squaresObjModel);\r\n                        if(closureLine != null){\r\n                            squaresObjModel = addLineToBoard(closureLine,squaresObjModel)\r\n                            ClosedSquares++;\r\n                        }\r\n                        else {\r\n                            resultCount[squareLine] = ClosedSquares;\r\n                            break\r\n                        }\r\n                    }\r\n                }\r\n            })\r\n        })\r\n        let minClosedSquares = 37;\r\n        Object.keys(resultCount).forEach((line) =>{\r\n            if(minClosedSquares > resultCount[line]){\r\n                minClosedSquares = resultCount[line];\r\n                chosenLine = line;\r\n            } \r\n        })\r\n        return chosenLine\r\n    }\r\n    \r\n    const findBestNove = () => {\r\n        let bestMove;\r\n        let squaresCopy = JSON.parse(JSON.stringify(board.squares));\r\n        bestMove = closureMove(squaresCopy);\r\n        if(bestMove == null){\r\n            for(let t = 0; t < 10; t++) {\r\n                let res = getRandomLine(squaresCopy,t);\r\n                if(res != false){\r\n                    bestMove = res;\r\n                    break\r\n                }\r\n            }\r\n        }\r\n        \r\n        return bestMove\r\n    }\r\n    \r\n    const AIMove = () => {\r\n        const index3AI = findBestNove();\r\n        const twoSquares = sliceLine(index3AI);\r\n        const chosenLine = document.querySelectorAll(`[data-numb1=\"${twoSquares[0]}\"]`);\r\n        let line;\r\n        for(let i = 0;i < chosenLine.length;i++){\r\n            if(chosenLine[i].dataset.numb1 == twoSquares[0] && chosenLine[i].dataset.numb2 == twoSquares[1]){\r\n                line = chosenLine[i];\r\n                break \r\n            }\r\n        }\r\n\r\n        board.lineHandle(twoSquares[0],twoSquares[1],index3AI,line,1);\r\n    };\r\n\r\n    const AITurn = () => {\r\n        AIMove()\r\n        if(!game.firstPlayerTurn && board.getRemainingSquares().length >= 1) {\r\n            setTimeout(AITurn,500);\r\n        }\r\n    }\r\n\r\n    return {getName,getColor,getScore,resetScore,scoreCount,AITurn}\r\n}\r\n\r\nfunction lineClick(e){ // Player click on empty line\r\n    if(!(game.getIsAIMode() && !game.firstPlayerTurn)){ \r\n        const index1 = e.currentTarget.getAttribute(\"data-numb1\");\r\n        const index2 = e.currentTarget.getAttribute(\"data-numb2\");\r\n        const index3 = (index1).toString() + index2;\r\n        board.lineHandle(index1,index2,index3,e.currentTarget,0);\r\n\r\n        e.currentTarget.removeEventListener(\"click\", lineClick);\r\n\r\n        if(game.getIsAIMode() && !game.firstPlayerTurn){ //if its Player vs AI and Player turn over, start AI turn\r\n            setTimeout(players[1].AITurn,500);\r\n        }\r\n    }\r\n}\r\n\r\nfunction sliceLine(fullLine) {\r\n    return [fullLine.slice(0,2),fullLine.slice(2,4)]\r\n}\r\n\r\nfunction append(elem){ //add element to game-container \r\n    const container = document.getElementsByClassName('game-container');\r\n    container[0].innerHTML = ' ';\r\n    if(typeof elem === 'object'){\r\n        container[0].appendChild(elem);\r\n    }\r\n}\r\n\r\nfunction createElem(tag,className,textContent){ //short way to create an element\r\n    const elem = document.createElement(tag);\r\n    if(className){\r\n        elem.classList.add(className);\r\n    }\r\n    if(textContent){\r\n        elem.textContent = textContent;\r\n    }\r\n    return elem\r\n}\r\n\r\nfunction createResetBtn(){\r\n    const resetElem = createElem('button','back','Reset');\r\n    resetElem.addEventListener('click', ()=>{\r\n        board = null;\r\n        game = null;\r\n        players = null;\r\n        initBlocks();\r\n    })\r\n    return resetElem\r\n}\r\n\r\nfunction getRandomNumb(min, max) {\r\n    const number = Math.floor(Math.random() * (max - min)) + min;\r\n    return number\r\n}\r\n\r\ninitBlocks();\n\n//# sourceURL=webpack://web_app_test/./src/index.js?");

/***/ }),

/***/ "./src/img/board11.png":
/*!*****************************!*\
  !*** ./src/img/board11.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8288eca8d1f1c2e8a2e4.png\";\n\n//# sourceURL=webpack://web_app_test/./src/img/board11.png?");

/***/ }),

/***/ "./src/img/board7.png":
/*!****************************!*\
  !*** ./src/img/board7.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"32395dcb514c3111daa7.png\";\n\n//# sourceURL=webpack://web_app_test/./src/img/board7.png?");

/***/ }),

/***/ "./src/img/board9.png":
/*!****************************!*\
  !*** ./src/img/board9.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a295f9d69dd4901e0abd.png\";\n\n//# sourceURL=webpack://web_app_test/./src/img/board9.png?");

/***/ }),

/***/ "./src/img/btn1.png":
/*!**************************!*\
  !*** ./src/img/btn1.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"008d29f1902d00a841be.png\";\n\n//# sourceURL=webpack://web_app_test/./src/img/btn1.png?");

/***/ }),

/***/ "./src/img/btn2.png":
/*!**************************!*\
  !*** ./src/img/btn2.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"735948aa2f77c0bfdda2.png\";\n\n//# sourceURL=webpack://web_app_test/./src/img/btn2.png?");

/***/ }),

/***/ "./src/img/tip.gif":
/*!*************************!*\
  !*** ./src/img/tip.gif ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"280a3db1d366bc3ebb12.gif\";\n\n//# sourceURL=webpack://web_app_test/./src/img/tip.gif?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Lato-Light.ttf */ "./src/fonts/Lato-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./logo.svg */ "./src/logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./ramen1.jpg */ "./src/ramen1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./ramen2.jpg */ "./src/ramen2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./ramen3.jpg */ "./src/ramen3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'Lato';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2');\r\n}\r\n\r\n:root {\r\n  background: orange;\r\n}\r\n\r\n* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Lato';\r\n}\r\n\r\n#content {\r\n  display: grid;\r\n  grid-template-rows: 1fr 10fr;\r\n  grid-template-areas:\r\n    \"nav\"\r\n    \"body\"\r\n  ;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n}\r\n\r\n#nav {\r\n  grid-area: nav;\r\n  background: rgb(36, 41, 46);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  place-content: flex-end center;\r\n  place-items: flex-end center;\r\n  gap: 2vw;\r\n}\r\n\r\n.navButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 100px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n}\r\n\r\n.navButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n#body {\r\n  grid-area: body;\r\n  background: rgb(47, 54, 61);\r\n  display: flex;\r\n  place-content: center center;\r\n  place-items: center center;\r\n  flex-flow: row wrap;\r\n  padding: 20px;\r\n}\r\n\r\n.bodyContainer {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  min-width: 42vw;\r\n  min-height: 100%;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  border-radius: 10px;\r\n  background: rgb(36, 41, 46);\r\n  padding: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n.logoContainer {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.contentContainer {\r\n  background: rgb(47, 54, 61);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-content: flex-start center;\r\n  flex-flow: column wrap;\r\n  width: auto;\r\n  height: auto;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.contentContainer:hover {\r\n  transform: scale(1.1);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n.contentContainer>h1 {\r\n  font-family: \"Lato\";\r\n  font-weight: normal;\r\n}\r\n\r\n.menuImage1 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage2 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage3 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage1:hover,\r\n.menuImage2:hover,\r\n.menuImage3:hover {\r\n  transform: scale(1.1);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-items: flex-start center;\r\n  flex-flow: column wrap;\r\n}\r\n\r\n.inputContainer {\r\n  display: flex;\r\n  color: white;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  flex-flow: column wrap;\r\n  margin-top: 10px;\r\n  gap: 10px;\r\n}\r\n\r\n.inputContainer>input {\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  transition: 1.1s;\r\n  border-radius: 5px;\r\n  color: white;\r\n}\r\n\r\n.inputContainer>.message {\r\n  height: 100px;\r\n  display: flex;\r\n  place-content: flex-start flex-start;\r\n  place-items: flex-start flex-start;\r\n  color: white;\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n\r\n}\r\n\r\n.inputContainer>input:hover,\r\n.inputContainer>input:focus,\r\n.inputContainer>.message:hover,\r\n.inputContainer>.message:focus {\r\n  transform: scale(1.1);\r\n  border-color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 175px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n  margin-top: 20px;\r\n}\r\n\r\n.submitButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Lato';\r\n  src: url('./fonts/Lato-Light.ttf') format('woff2');\r\n}\r\n\r\n:root {\r\n  background: orange;\r\n}\r\n\r\n* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Lato';\r\n}\r\n\r\n#content {\r\n  display: grid;\r\n  grid-template-rows: 1fr 10fr;\r\n  grid-template-areas:\r\n    \"nav\"\r\n    \"body\"\r\n  ;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n}\r\n\r\n#nav {\r\n  grid-area: nav;\r\n  background: rgb(36, 41, 46);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  place-content: flex-end center;\r\n  place-items: flex-end center;\r\n  gap: 2vw;\r\n}\r\n\r\n.navButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 100px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n}\r\n\r\n.navButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n#body {\r\n  grid-area: body;\r\n  background: rgb(47, 54, 61);\r\n  display: flex;\r\n  place-content: center center;\r\n  place-items: center center;\r\n  flex-flow: row wrap;\r\n  padding: 20px;\r\n}\r\n\r\n.bodyContainer {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  min-width: 42vw;\r\n  min-height: 100%;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  border-radius: 10px;\r\n  background: rgb(36, 41, 46);\r\n  padding: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n.logoContainer {\r\n  background-image: url(\"./logo.svg\");\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.contentContainer {\r\n  background: rgb(47, 54, 61);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-content: flex-start center;\r\n  flex-flow: column wrap;\r\n  width: auto;\r\n  height: auto;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.contentContainer:hover {\r\n  transform: scale(1.1);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n.contentContainer>h1 {\r\n  font-family: \"Lato\";\r\n  font-weight: normal;\r\n}\r\n\r\n.menuImage1 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url('./ramen1.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage2 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url('./ramen2.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage3 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url('./ramen3.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage1:hover,\r\n.menuImage2:hover,\r\n.menuImage3:hover {\r\n  transform: scale(1.1);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-items: flex-start center;\r\n  flex-flow: column wrap;\r\n}\r\n\r\n.inputContainer {\r\n  display: flex;\r\n  color: white;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  flex-flow: column wrap;\r\n  margin-top: 10px;\r\n  gap: 10px;\r\n}\r\n\r\n.inputContainer>input {\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  transition: 1.1s;\r\n  border-radius: 5px;\r\n  color: white;\r\n}\r\n\r\n.inputContainer>.message {\r\n  height: 100px;\r\n  display: flex;\r\n  place-content: flex-start flex-start;\r\n  place-items: flex-start flex-start;\r\n  color: white;\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n\r\n}\r\n\r\n.inputContainer>input:hover,\r\n.inputContainer>input:focus,\r\n.inputContainer>.message:hover,\r\n.inputContainer>.message:focus {\r\n  transform: scale(1.1);\r\n  border-color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 175px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n  margin-top: 20px;\r\n}\r\n\r\n.submitButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactContent.js":
/*!*******************************!*\
  !*** ./src/contactContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactContent": () => (/* binding */ createContactContent)
/* harmony export */ });
function createContactContent() {
    const body = document.querySelector("#body");

    while (body.firstChild)
        body.removeChild(body.firstChild);

    let bodyContainer = document.createElement("div");
    bodyContainer.classList.add("bodyContainer");

    let logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");

    let form = document.createElement("form");

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("inputContainer");
    let nameLabel = document.createElement("label");
    nameLabel.for = "name";
    nameLabel.innerHTML = "Name:";
    let nameInput = document.createElement("input");
    nameInput.setAttribute("id", "name");
    nameInput.type = "text";
    nameInput.required = true;
    nameDiv.append(nameLabel, nameInput);

    let subjectDiv = document.createElement("div");
    subjectDiv.classList.add("inputContainer");
    let subjectLabel = document.createElement("label");
    subjectLabel.for = "subject";
    subjectLabel.innerHTML = "Subject:";
    let subjectInput = document.createElement("input");
    subjectInput.setAttribute("id", "subject");
    subjectInput.type = "text";
    subjectInput.required = true;
    subjectDiv.append(subjectLabel, subjectInput);

    let messageDiv = document.createElement("div");
    messageDiv.classList.add("inputContainer");
    let messageLabel = document.createElement("label");
    messageLabel.for = "message";
    messageLabel.innerHTML = "Message:";
    let messageInput = document.createElement("textarea");
    messageInput.setAttribute("id", "message");
    messageInput.classList.add("message");
    messageInput.required = true;
    messageDiv.append(messageLabel, messageInput);

    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerHTML = "Submit >"
    submitButton.classList.add("submitButton");

    form.append(nameDiv, subjectDiv, messageDiv, submitButton);
    bodyContainer.append(logoContainer, form);
    body.append(bodyContainer);
}

createContactContent();



/***/ }),

/***/ "./src/createGrid.js":
/*!***************************!*\
  !*** ./src/createGrid.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function createGrid() {
  const content = document.querySelector("#content");

  const nav = document.createElement("div");
  nav.setAttribute("id", "nav");

  const body = document.createElement("div");
  body.setAttribute("id", "body");

  content.append(nav, body);
}

createGrid();

/***/ }),

/***/ "./src/createNav.js":
/*!**************************!*\
  !*** ./src/createNav.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homeContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeContent.js */ "./src/homeContent.js");
/* harmony import */ var _menuContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuContent.js */ "./src/menuContent.js");
/* harmony import */ var _contactContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactContent.js */ "./src/contactContent.js");





function createNav() {
    const nav = document.querySelector("#nav");

    let home = document.createElement("button");
    home.innerHTML = "Home";
    home.classList.add("navButton");
    home.addEventListener("mousedown", _homeContent_js__WEBPACK_IMPORTED_MODULE_1__.createHomeContent);

    let menu = document.createElement("button");
    menu.innerHTML = "Menu";
    menu.classList.add("navButton");
    menu.addEventListener("mousedown", _menuContent_js__WEBPACK_IMPORTED_MODULE_2__.createMenuContent);

    let contact = document.createElement("button");
    contact.innerHTML = "Contact";
    contact.classList.add("navButton");
    contact.addEventListener("mousedown", _contactContent_js__WEBPACK_IMPORTED_MODULE_3__.createContactContent);

    nav.append(home, menu, contact);
}

createNav();
(0,_homeContent_js__WEBPACK_IMPORTED_MODULE_1__.createHomeContent)();

/***/ }),

/***/ "./src/homeContent.js":
/*!****************************!*\
  !*** ./src/homeContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomeContent": () => (/* binding */ createHomeContent)
/* harmony export */ });
function createHomeContent() {
    const body = document.querySelector("#body");

    while (body.firstChild)
        body.removeChild(body.firstChild);

    let bodyContainer = document.createElement("div");
    bodyContainer.classList.add("bodyContainer");

    let logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");

    let content1 = document.createElement("div");
    content1.classList.add("contentContainer");
    let headline1 = document.createElement("h1");
    headline1.innerHTML = "Headline1";
    let p1 = document.createElement("p");
    p1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    content1.append(headline1, p1);

    let content2 = document.createElement("div");
    content2.classList.add("contentContainer");
    let headline2 = document.createElement("h1");
    headline2.innerHTML = "Headline2";
    let p2 = document.createElement("p");
    p2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    content2.append(headline2, p2)

    let content3 = document.createElement("div");
    content3.classList.add("contentContainer");
    let headline3 = document.createElement("h1");
    headline3.innerHTML = "Headline3";
    let p3 = document.createElement("p");
    p3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    content3.append(headline3, p3)

    bodyContainer.append(logoContainer, content1, content2, content3);
    body.append(bodyContainer);
}

createHomeContent();



/***/ }),

/***/ "./src/menuContent.js":
/*!****************************!*\
  !*** ./src/menuContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuContent": () => (/* binding */ createMenuContent)
/* harmony export */ });
function createMenuContent() {
    const body = document.querySelector("#body");

    while (body.firstChild)
        body.removeChild(body.firstChild);

    let bodyContainer = document.createElement("div");
    bodyContainer.classList.add("bodyContainer");

    let logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");

    let food1 = document.createElement("div");
    food1.classList.add("menuImage1");

    let food2 = document.createElement("div");
    food2.classList.add("menuImage2");

    let food3 = document.createElement("div");
    food3.classList.add("menuImage3");

    bodyContainer.append(logoContainer, food1, food2, food3);
    body.append(bodyContainer);
}



/***/ }),

/***/ "./src/fonts/Lato-Light.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Lato-Light.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7400fcad9e48ca9043f.ttf";

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28062f062b7761f1239c.svg";

/***/ }),

/***/ "./src/ramen1.jpg":
/*!************************!*\
  !*** ./src/ramen1.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "126b6ad39137c2620274.jpg";

/***/ }),

/***/ "./src/ramen2.jpg":
/*!************************!*\
  !*** ./src/ramen2.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1c5a9e253f6a3f8a34c.jpg";

/***/ }),

/***/ "./src/ramen3.jpg":
/*!************************!*\
  !*** ./src/ramen3.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02b207fe200592978f21.jpg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGrid.js */ "./src/createGrid.js");
/* harmony import */ var _createNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNav.js */ "./src/createNav.js");
/* harmony import */ var _homeContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeContent */ "./src/homeContent.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLFFBQVEsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLHNDQUFzQywwQkFBMEIseURBQXlELEtBQUssZUFBZSx5QkFBeUIs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dGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0Q29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jcmVhdGVHcmlkLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NyZWF0ZU5hdi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lQ29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51Q29udGVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0xhdG8tTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vcmFtZW4xLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vcmFtZW4yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vcmFtZW4zLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJuYXZcXFwiXFxyXFxuICAgIFxcXCJib2R5XFxcIlxcclxcbiAgO1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IHtcXHJcXG4gIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LWVuZCBjZW50ZXI7XFxyXFxuICBwbGFjZS1pdGVtczogZmxleC1lbmQgY2VudGVyO1xcclxcbiAgZ2FwOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5uYXZCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIxNCwgMCwgMTA3KTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXZCdXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ1LCAyMDAsIDAuNSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9keSB7XFxyXFxuICBncmlkLWFyZWE6IGJvZHk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNDcsIDU0LCA2MSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2R5Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgbWluLXdpZHRoOiA0MnZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBmbGV4LXN0YXJ0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvQ29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRDb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDQ3LCA1NCwgNjEpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRDb250YWluZXI6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ1LCAyMDAsIDAuNSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudENvbnRhaW5lcj5oMSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJbWFnZTEge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxufVxcclxcblxcclxcbi5tZW51SW1hZ2UyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUltYWdlMyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMyLCAxNywgNzQpO1xcclxcbiAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXHJcXG4gIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxufVxcclxcblxcclxcbi5tZW51SW1hZ2UxOmhvdmVyLFxcclxcbi5tZW51SW1hZ2UyOmhvdmVyLFxcclxcbi5tZW51SW1hZ2UzOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDE0NSwgMjAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0Q29udGFpbmVyPmlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICB0cmFuc2l0aW9uOiAxLjFzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb250YWluZXI+Lm1lc3NhZ2Uge1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0Q29udGFpbmVyPmlucHV0OmhvdmVyLFxcclxcbi5pbnB1dENvbnRhaW5lcj5pbnB1dDpmb2N1cyxcXHJcXG4uaW5wdXRDb250YWluZXI+Lm1lc3NhZ2U6aG92ZXIsXFxyXFxuLmlucHV0Q29udGFpbmVyPi5tZXNzYWdlOmZvY3VzIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjE0LCAwLCAxMDcpO1xcclxcbiAgd2lkdGg6IDE3NXB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ1LCAyMDAsIDAuNSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDREQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qjs7O0VBR0E7RUFDQSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsa0RBQWtEO0VBQ2xELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHlEQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixrREFBa0Q7RUFDbEQsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5REFBcUM7RUFDckMsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5REFBcUM7RUFDckMsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix5REFBcUM7RUFDckMsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtDQUFrQzs7QUFFcEM7O0FBRUE7Ozs7RUFJRSxxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixrREFBa0Q7RUFDbEQsNEJBQTRCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcXHJcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL0xhdG8tTGlnaHQudHRmJykgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJuYXZcXFwiXFxyXFxuICAgIFxcXCJib2R5XFxcIlxcclxcbiAgO1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IHtcXHJcXG4gIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LWVuZCBjZW50ZXI7XFxyXFxuICBwbGFjZS1pdGVtczogZmxleC1lbmQgY2VudGVyO1xcclxcbiAgZ2FwOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5uYXZCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIxNCwgMCwgMTA3KTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXZCdXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ1LCAyMDAsIDAuNSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9keSB7XFxyXFxuICBncmlkLWFyZWE6IGJvZHk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNDcsIDU0LCA2MSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2R5Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgbWluLXdpZHRoOiA0MnZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBmbGV4LXN0YXJ0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvQ29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9sb2dvLnN2Z1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50Q29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYig0NywgNTQsIDYxKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBjZW50ZXI7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50Q29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDE0NSwgMjAwLCAwLjUpO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRDb250YWluZXI+aDEge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5tZW51SW1hZ2UxIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3JhbWVuMS5qcGcnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUltYWdlMiB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMyLCAxNywgNzQpO1xcclxcbiAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9yYW1lbjIuanBnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJbWFnZTMge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vcmFtZW4zLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XFxyXFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUltYWdlMTpob3ZlcixcXHJcXG4ubWVudUltYWdlMjpob3ZlcixcXHJcXG4ubWVudUltYWdlMzpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAxNDUsIDIwMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBjZW50ZXI7XFxyXFxuICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBjZW50ZXI7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBmbGV4LXN0YXJ0O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lcj5pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMyLCAxNywgNzQpO1xcclxcbiAgdHJhbnNpdGlvbjogMS4xcztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0Q29udGFpbmVyPi5tZXNzYWdlIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lcj5pbnB1dDpob3ZlcixcXHJcXG4uaW5wdXRDb250YWluZXI+aW5wdXQ6Zm9jdXMsXFxyXFxuLmlucHV0Q29udGFpbmVyPi5tZXNzYWdlOmhvdmVyLFxcclxcbi5pbnB1dENvbnRhaW5lcj4ubWVzc2FnZTpmb2N1cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIxNCwgMCwgMTA3KTtcXHJcXG4gIHdpZHRoOiAxNzVweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDE0NSwgMjAwLCAwLjUpO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RDb250ZW50KCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9keVwiKTtcclxuXHJcbiAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKVxyXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcclxuXHJcbiAgICBsZXQgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2R5Q29udGFpbmVyXCIpO1xyXG5cclxuICAgIGxldCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ29Db250YWluZXJcIik7XHJcblxyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuXHJcbiAgICBsZXQgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dENvbnRhaW5lclwiKTtcclxuICAgIGxldCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBuYW1lTGFiZWwuZm9yID0gXCJuYW1lXCI7XHJcbiAgICBuYW1lTGFiZWwuaW5uZXJIVE1MID0gXCJOYW1lOlwiO1xyXG4gICAgbGV0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVcIik7XHJcbiAgICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIG5hbWVEaXYuYXBwZW5kKG5hbWVMYWJlbCwgbmFtZUlucHV0KTtcclxuXHJcbiAgICBsZXQgc3ViamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdWJqZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dENvbnRhaW5lclwiKTtcclxuICAgIGxldCBzdWJqZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBzdWJqZWN0TGFiZWwuZm9yID0gXCJzdWJqZWN0XCI7XHJcbiAgICBzdWJqZWN0TGFiZWwuaW5uZXJIVE1MID0gXCJTdWJqZWN0OlwiO1xyXG4gICAgbGV0IHN1YmplY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHN1YmplY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1YmplY3RcIik7XHJcbiAgICBzdWJqZWN0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgc3ViamVjdElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIHN1YmplY3REaXYuYXBwZW5kKHN1YmplY3RMYWJlbCwgc3ViamVjdElucHV0KTtcclxuXHJcbiAgICBsZXQgbWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoXCJpbnB1dENvbnRhaW5lclwiKTtcclxuICAgIGxldCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBtZXNzYWdlTGFiZWwuZm9yID0gXCJtZXNzYWdlXCI7XHJcbiAgICBtZXNzYWdlTGFiZWwuaW5uZXJIVE1MID0gXCJNZXNzYWdlOlwiO1xyXG4gICAgbGV0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIG1lc3NhZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lc3NhZ2VcIik7XHJcbiAgICBtZXNzYWdlSW5wdXQuY2xhc3NMaXN0LmFkZChcIm1lc3NhZ2VcIik7XHJcbiAgICBtZXNzYWdlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgbWVzc2FnZURpdi5hcHBlbmQobWVzc2FnZUxhYmVsLCBtZXNzYWdlSW5wdXQpO1xyXG5cclxuICAgIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgc3VibWl0QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xyXG4gICAgc3VibWl0QnV0dG9uLmlubmVySFRNTCA9IFwiU3VibWl0ID5cIlxyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRCdXR0b25cIik7XHJcblxyXG4gICAgZm9ybS5hcHBlbmQobmFtZURpdiwgc3ViamVjdERpdiwgbWVzc2FnZURpdiwgc3VibWl0QnV0dG9uKTtcclxuICAgIGJvZHlDb250YWluZXIuYXBwZW5kKGxvZ29Db250YWluZXIsIGZvcm0pO1xyXG4gICAgYm9keS5hcHBlbmQoYm9keUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmNyZWF0ZUNvbnRhY3RDb250ZW50KCk7XHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlQ29udGFjdENvbnRlbnRcclxufTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBuYXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXZcIik7XHJcblxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGJvZHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJib2R5XCIpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZChuYXYsIGJvZHkpO1xyXG59XHJcblxyXG5jcmVhdGVHcmlkKCk7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUhvbWVDb250ZW50IH0gZnJvbSAnLi9ob21lQ29udGVudC5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnVDb250ZW50IH0gZnJvbSAnLi9tZW51Q29udGVudC5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RDb250ZW50IH0gZnJvbSAnLi9jb250YWN0Q29udGVudC5qcyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdlwiKTtcclxuXHJcbiAgICBsZXQgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBob21lLmlubmVySFRNTCA9IFwiSG9tZVwiO1xyXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwibmF2QnV0dG9uXCIpO1xyXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNyZWF0ZUhvbWVDb250ZW50KTtcclxuXHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBtZW51LmlubmVySFRNTCA9IFwiTWVudVwiO1xyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibmF2QnV0dG9uXCIpO1xyXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNyZWF0ZU1lbnVDb250ZW50KTtcclxuXHJcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb250YWN0LmlubmVySFRNTCA9IFwiQ29udGFjdFwiO1xyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2QnV0dG9uXCIpO1xyXG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNyZWF0ZUNvbnRhY3RDb250ZW50KTtcclxuXHJcbiAgICBuYXYuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xyXG59XHJcblxyXG5jcmVhdGVOYXYoKTtcclxuY3JlYXRlSG9tZUNvbnRlbnQoKTsiLCJmdW5jdGlvbiBjcmVhdGVIb21lQ29udGVudCgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvZHlcIik7XHJcblxyXG4gICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZClcclxuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgbGV0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm9keUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9keUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2dvQ29udGFpbmVyXCIpO1xyXG5cclxuICAgIGxldCBjb250ZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50MS5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvbnRhaW5lclwiKTtcclxuICAgIGxldCBoZWFkbGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoZWFkbGluZTEuaW5uZXJIVE1MID0gXCJIZWFkbGluZTFcIjtcclxuICAgIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcDEuaW5uZXJIVE1MID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIjtcclxuICAgIGNvbnRlbnQxLmFwcGVuZChoZWFkbGluZTEsIHAxKTtcclxuXHJcbiAgICBsZXQgY29udGVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudDIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb250YWluZXJcIik7XHJcbiAgICBsZXQgaGVhZGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaGVhZGxpbmUyLmlubmVySFRNTCA9IFwiSGVhZGxpbmUyXCI7XHJcbiAgICBsZXQgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAyLmlubmVySFRNTCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCI7XHJcbiAgICBjb250ZW50Mi5hcHBlbmQoaGVhZGxpbmUyLCBwMilcclxuXHJcbiAgICBsZXQgY29udGVudDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudDMuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb250YWluZXJcIik7XHJcbiAgICBsZXQgaGVhZGxpbmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaGVhZGxpbmUzLmlubmVySFRNTCA9IFwiSGVhZGxpbmUzXCI7XHJcbiAgICBsZXQgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAzLmlubmVySFRNTCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCI7XHJcbiAgICBjb250ZW50My5hcHBlbmQoaGVhZGxpbmUzLCBwMylcclxuXHJcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZChsb2dvQ29udGFpbmVyLCBjb250ZW50MSwgY29udGVudDIsIGNvbnRlbnQzKTtcclxuICAgIGJvZHkuYXBwZW5kKGJvZHlDb250YWluZXIpO1xyXG59XHJcblxyXG5jcmVhdGVIb21lQ29udGVudCgpO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZUhvbWVDb250ZW50XHJcbn07IiwiZnVuY3Rpb24gY3JlYXRlTWVudUNvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2R5XCIpO1xyXG5cclxuICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGxldCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJvZHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvZHlDb250YWluZXJcIik7XHJcblxyXG4gICAgbGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nb0NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgZm9vZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vZDEuY2xhc3NMaXN0LmFkZChcIm1lbnVJbWFnZTFcIik7XHJcblxyXG4gICAgbGV0IGZvb2QyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvb2QyLmNsYXNzTGlzdC5hZGQoXCJtZW51SW1hZ2UyXCIpO1xyXG5cclxuICAgIGxldCBmb29kMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb29kMy5jbGFzc0xpc3QuYWRkKFwibWVudUltYWdlM1wiKTtcclxuXHJcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZChsb2dvQ29udGFpbmVyLCBmb29kMSwgZm9vZDIsIGZvb2QzKTtcclxuICAgIGJvZHkuYXBwZW5kKGJvZHlDb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlTWVudUNvbnRlbnRcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2NyZWF0ZUdyaWQuanMnO1xyXG5pbXBvcnQgJy4vY3JlYXRlTmF2LmpzJztcclxuaW1wb3J0ICcuL2hvbWVDb250ZW50JzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
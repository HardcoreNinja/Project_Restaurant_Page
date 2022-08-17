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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'Lato';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2');\r\n}\r\n\r\n:root {\r\n  background: black;\r\n}\r\n\r\n* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Lato';\r\n}\r\n\r\n#content {\r\n  display: grid;\r\n  grid-template-rows: 1fr 10fr;\r\n  grid-template-areas:\r\n    \"nav\"\r\n    \"body\"\r\n  ;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n}\r\n\r\n#nav {\r\n  grid-area: nav;\r\n  background: rgb(36, 41, 46);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  place-content: flex-end center;\r\n  place-items: flex-end center;\r\n  gap: 2vw;\r\n}\r\n\r\n.navButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 100px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n}\r\n\r\n.navButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n#body {\r\n  grid-area: body;\r\n  background: rgb(47, 54, 61);\r\n  display: flex;\r\n  place-content: center center;\r\n  place-items: center center;\r\n  flex-flow: row wrap;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.bodyContainer {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  min-width: 362px;\r\n  min-height: 100%;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  border-radius: 10px;\r\n  background: rgb(36, 41, 46);\r\n  padding: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n.logoContainer {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.contentContainer {\r\n  background: rgb(47, 54, 61);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-content: flex-start center;\r\n  flex-flow: column wrap;\r\n  width: auto;\r\n  height: auto;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.contentContainer:hover {\r\n  transform: scale(1.025);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n.contentContainer>h1 {\r\n  font-family: \"Lato\";\r\n  font-weight: normal;\r\n}\r\n\r\n.menuImage1 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage2 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage3 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage1:hover,\r\n.menuImage2:hover,\r\n.menuImage3:hover {\r\n  transform: scale(1.05);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-items: flex-start center;\r\n  flex-flow: column wrap;\r\n}\r\n\r\n.inputContainer {\r\n  display: flex;\r\n  color: white;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  flex-flow: column wrap;\r\n  margin-top: 10px;\r\n  gap: 10px;\r\n}\r\n\r\n.inputContainer>input {\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  transition: 1.1s;\r\n  border-radius: 5px;\r\n  color: white;\r\n}\r\n\r\n.inputContainer>.message {\r\n  height: 100px;\r\n  display: flex;\r\n  place-content: flex-start flex-start;\r\n  place-items: flex-start flex-start;\r\n  color: white;\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n\r\n}\r\n\r\n.inputContainer>input:hover,\r\n.inputContainer>input:focus,\r\n.inputContainer>.message:hover,\r\n.inputContainer>.message:focus {\r\n  transform: scale(1.1);\r\n  border-color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 175px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n  margin-top: 20px;\r\n}\r\n\r\n.submitButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Lato';\r\n  src: url('./fonts/Lato-Light.ttf') format('woff2');\r\n}\r\n\r\n:root {\r\n  background: black;\r\n}\r\n\r\n* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Lato';\r\n}\r\n\r\n#content {\r\n  display: grid;\r\n  grid-template-rows: 1fr 10fr;\r\n  grid-template-areas:\r\n    \"nav\"\r\n    \"body\"\r\n  ;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n}\r\n\r\n#nav {\r\n  grid-area: nav;\r\n  background: rgb(36, 41, 46);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  place-content: flex-end center;\r\n  place-items: flex-end center;\r\n  gap: 2vw;\r\n}\r\n\r\n.navButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 100px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n}\r\n\r\n.navButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n#body {\r\n  grid-area: body;\r\n  background: rgb(47, 54, 61);\r\n  display: flex;\r\n  place-content: center center;\r\n  place-items: center center;\r\n  flex-flow: row wrap;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.bodyContainer {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  min-width: 362px;\r\n  min-height: 100%;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  border-radius: 10px;\r\n  background: rgb(36, 41, 46);\r\n  padding: 10px;\r\n  gap: 20px;\r\n}\r\n\r\n.logoContainer {\r\n  background-image: url(\"./logo.svg\");\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.contentContainer {\r\n  background: rgb(47, 54, 61);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-content: flex-start center;\r\n  flex-flow: column wrap;\r\n  width: auto;\r\n  height: auto;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.contentContainer:hover {\r\n  transform: scale(1.025);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n.contentContainer>h1 {\r\n  font-family: \"Lato\";\r\n  font-weight: normal;\r\n}\r\n\r\n.menuImage1 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url('./ramen1.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage2 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url('./ramen2.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage3 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 300px;\r\n  transition: 0.75s;\r\n  height: 200px;\r\n  background-image: url('./ramen3.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage1:hover,\r\n.menuImage2:hover,\r\n.menuImage3:hover {\r\n  transform: scale(1.05);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-items: flex-start center;\r\n  flex-flow: column wrap;\r\n}\r\n\r\n.inputContainer {\r\n  display: flex;\r\n  color: white;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  flex-flow: column wrap;\r\n  margin-top: 10px;\r\n  gap: 10px;\r\n}\r\n\r\n.inputContainer>input {\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  transition: 1.1s;\r\n  border-radius: 5px;\r\n  color: white;\r\n}\r\n\r\n.inputContainer>.message {\r\n  height: 100px;\r\n  display: flex;\r\n  place-content: flex-start flex-start;\r\n  place-items: flex-start flex-start;\r\n  color: white;\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n\r\n}\r\n\r\n.inputContainer>input:hover,\r\n.inputContainer>input:focus,\r\n.inputContainer>.message:hover,\r\n.inputContainer>.message:focus {\r\n  transform: scale(1.1);\r\n  border-color: rgb(0, 145, 200);\r\n}\r\n\r\n.submitButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 175px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n  margin-top: 20px;\r\n}\r\n\r\n.submitButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksY0FBYyxPQUFPLFFBQVEsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLHNDQUFzQywwQkFBMEIseURBQXlELEtBQUss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YnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY3JlYXRlR3JpZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jcmVhdGVOYXYuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaG9tZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9MYXRvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL3JhbWVuMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL3JhbWVuMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL3JhbWVuMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJuYXZcXFwiXFxyXFxuICAgIFxcXCJib2R5XFxcIlxcclxcbiAgO1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IHtcXHJcXG4gIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LWVuZCBjZW50ZXI7XFxyXFxuICBwbGFjZS1pdGVtczogZmxleC1lbmQgY2VudGVyO1xcclxcbiAgZ2FwOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5uYXZCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIxNCwgMCwgMTA3KTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXZCdXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ1LCAyMDAsIDAuNSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9keSB7XFxyXFxuICBncmlkLWFyZWE6IGJvZHk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNDcsIDU0LCA2MSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2R5Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgbWluLXdpZHRoOiAzNjJweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgZmxleC1zdGFydDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXIgZmxleC1zdGFydDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nb0NvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50Q29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYig0NywgNTQsIDYxKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBjZW50ZXI7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50Q29udGFpbmVyOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ1LCAyMDAsIDAuNSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudENvbnRhaW5lcj5oMSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJbWFnZTEge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxufVxcclxcblxcclxcbi5tZW51SW1hZ2UyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUltYWdlMyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMyLCAxNywgNzQpO1xcclxcbiAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXHJcXG4gIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxufVxcclxcblxcclxcbi5tZW51SW1hZ2UxOmhvdmVyLFxcclxcbi5tZW51SW1hZ2UyOmhvdmVyLFxcclxcbi5tZW51SW1hZ2UzOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAxNDUsIDIwMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBjZW50ZXI7XFxyXFxuICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBjZW50ZXI7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBmbGV4LXN0YXJ0O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lcj5pbnB1dCB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMyLCAxNywgNzQpO1xcclxcbiAgdHJhbnNpdGlvbjogMS4xcztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0Q29udGFpbmVyPi5tZXNzYWdlIHtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtY29udGVudDogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgcGxhY2UtaXRlbXM6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lcj5pbnB1dDpob3ZlcixcXHJcXG4uaW5wdXRDb250YWluZXI+aW5wdXQ6Zm9jdXMsXFxyXFxuLmlucHV0Q29udGFpbmVyPi5tZXNzYWdlOmhvdmVyLFxcclxcbi5pbnB1dENvbnRhaW5lcj4ubWVzc2FnZTpmb2N1cyB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIxNCwgMCwgMTA3KTtcXHJcXG4gIHdpZHRoOiAxNzVweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDE0NSwgMjAwLCAwLjUpO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQiw0REFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUI7OztFQUdBO0VBQ0EsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qiw0QkFBNEI7RUFDNUIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLGtEQUFrRDtFQUNsRCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UseURBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxnQ0FBZ0M7RUFDaEMsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGtEQUFrRDtFQUNsRCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHlEQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHlEQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHlEQUFxQztFQUNyQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0Isa0NBQWtDOztBQUVwQzs7QUFFQTs7OztFQUlFLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLGtEQUFrRDtFQUNsRCw0QkFBNEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcclxcbiAgc3JjOiB1cmwoJy4vZm9udHMvTGF0by1MaWdodC50dGYnKSBmb3JtYXQoJ3dvZmYyJyk7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwibmF2XFxcIlxcclxcbiAgICBcXFwiYm9keVxcXCJcXHJcXG4gIDtcXHJcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICBncmlkLWFyZWE6IG5hdjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgcGxhY2UtY29udGVudDogZmxleC1lbmQgY2VudGVyO1xcclxcbiAgcGxhY2UtaXRlbXM6IGZsZXgtZW5kIGNlbnRlcjtcXHJcXG4gIGdhcDogMnZ3O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyMTQsIDAsIDEwNyk7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2QnV0dG9uOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDE0NSwgMjAwLCAwLjUpO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuI2JvZHkge1xcclxcbiAgZ3JpZC1hcmVhOiBib2R5O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDQ3LCA1NCwgNjEpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyIGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBwYWRkaW5nLXRvcDogMjBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9keUNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIG1pbi13aWR0aDogMzYycHg7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29Db250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2xvZ28uc3ZnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRDb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDQ3LCA1NCwgNjEpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRDb250YWluZXI6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAxNDUsIDIwMCwgMC41KTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50Q29udGFpbmVyPmgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUltYWdlMSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMyLCAxNywgNzQpO1xcclxcbiAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9yYW1lbjEuanBnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJbWFnZTIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vcmFtZW4yLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxufVxcclxcblxcclxcbi5tZW51SW1hZ2UzIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3JhbWVuMy5qcGcnKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJbWFnZTE6aG92ZXIsXFxyXFxuLm1lbnVJbWFnZTI6aG92ZXIsXFxyXFxuLm1lbnVJbWFnZTM6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDE0NSwgMjAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0Q29udGFpbmVyPmlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICB0cmFuc2l0aW9uOiAxLjFzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb250YWluZXI+Lm1lc3NhZ2Uge1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICBwbGFjZS1pdGVtczogZmxleC1zdGFydCBmbGV4LXN0YXJ0O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0Q29udGFpbmVyPmlucHV0OmhvdmVyLFxcclxcbi5pbnB1dENvbnRhaW5lcj5pbnB1dDpmb2N1cyxcXHJcXG4uaW5wdXRDb250YWluZXI+Lm1lc3NhZ2U6aG92ZXIsXFxyXFxuLmlucHV0Q29udGFpbmVyPi5tZXNzYWdlOmZvY3VzIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjE0LCAwLCAxMDcpO1xcclxcbiAgd2lkdGg6IDE3NXB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ1LCAyMDAsIDAuNSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2R5XCIpO1xyXG5cclxuICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGxldCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJvZHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvZHlDb250YWluZXJcIik7XHJcblxyXG4gICAgbGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nb0NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG5cclxuICAgIGxldCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZChcImlucHV0Q29udGFpbmVyXCIpO1xyXG4gICAgbGV0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIG5hbWVMYWJlbC5mb3IgPSBcIm5hbWVcIjtcclxuICAgIG5hbWVMYWJlbC5pbm5lckhUTUwgPSBcIk5hbWU6XCI7XHJcbiAgICBsZXQgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmFtZVwiKTtcclxuICAgIG5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgbmFtZURpdi5hcHBlbmQobmFtZUxhYmVsLCBuYW1lSW5wdXQpO1xyXG5cclxuICAgIGxldCBzdWJqZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1YmplY3REaXYuY2xhc3NMaXN0LmFkZChcImlucHV0Q29udGFpbmVyXCIpO1xyXG4gICAgbGV0IHN1YmplY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIHN1YmplY3RMYWJlbC5mb3IgPSBcInN1YmplY3RcIjtcclxuICAgIHN1YmplY3RMYWJlbC5pbm5lckhUTUwgPSBcIlN1YmplY3Q6XCI7XHJcbiAgICBsZXQgc3ViamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgc3ViamVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViamVjdFwiKTtcclxuICAgIHN1YmplY3RJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBzdWJqZWN0SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgc3ViamVjdERpdi5hcHBlbmQoc3ViamVjdExhYmVsLCBzdWJqZWN0SW5wdXQpO1xyXG5cclxuICAgIGxldCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lc3NhZ2VEaXYuY2xhc3NMaXN0LmFkZChcImlucHV0Q29udGFpbmVyXCIpO1xyXG4gICAgbGV0IG1lc3NhZ2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIG1lc3NhZ2VMYWJlbC5mb3IgPSBcIm1lc3NhZ2VcIjtcclxuICAgIG1lc3NhZ2VMYWJlbC5pbm5lckhUTUwgPSBcIk1lc3NhZ2U6XCI7XHJcbiAgICBsZXQgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gICAgbWVzc2FnZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVzc2FnZVwiKTtcclxuICAgIG1lc3NhZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiKTtcclxuICAgIG1lc3NhZ2VJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBtZXNzYWdlRGl2LmFwcGVuZChtZXNzYWdlTGFiZWwsIG1lc3NhZ2VJbnB1dCk7XHJcblxyXG4gICAgbGV0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XHJcbiAgICBzdWJtaXRCdXR0b24uaW5uZXJIVE1MID0gXCJTdWJtaXQgPlwiXHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdEJ1dHRvblwiKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZChuYW1lRGl2LCBzdWJqZWN0RGl2LCBtZXNzYWdlRGl2LCBzdWJtaXRCdXR0b24pO1xyXG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmQobG9nb0NvbnRhaW5lciwgZm9ybSk7XHJcbiAgICBib2R5LmFwcGVuZChib2R5Q29udGFpbmVyKTtcclxufVxyXG5cclxuY3JlYXRlQ29udGFjdENvbnRlbnQoKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVDb250YWN0Q29udGVudFxyXG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlR3JpZCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG5hdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdlwiKTtcclxuXHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYm9keS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJvZHlcIik7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kKG5hdiwgYm9keSk7XHJcbn1cclxuXHJcbmNyZWF0ZUdyaWQoKTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlSG9tZUNvbnRlbnQgfSBmcm9tICcuL2hvbWVDb250ZW50LmpzJztcclxuaW1wb3J0IHsgY3JlYXRlTWVudUNvbnRlbnQgfSBmcm9tICcuL21lbnVDb250ZW50LmpzJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFjdENvbnRlbnQgfSBmcm9tICcuL2NvbnRhY3RDb250ZW50LmpzJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2XCIpO1xyXG5cclxuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCI7XHJcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJuYXZCdXR0b25cIik7XHJcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY3JlYXRlSG9tZUNvbnRlbnQpO1xyXG5cclxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG1lbnUuaW5uZXJIVE1MID0gXCJNZW51XCI7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZCdXR0b25cIik7XHJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY3JlYXRlTWVudUNvbnRlbnQpO1xyXG5cclxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNvbnRhY3QuaW5uZXJIVE1MID0gXCJDb250YWN0XCI7XHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJuYXZCdXR0b25cIik7XHJcbiAgICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY3JlYXRlQ29udGFjdENvbnRlbnQpO1xyXG5cclxuICAgIG5hdi5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XHJcbn1cclxuXHJcbmNyZWF0ZU5hdigpO1xyXG5jcmVhdGVIb21lQ29udGVudCgpOyIsImZ1bmN0aW9uIGNyZWF0ZUhvbWVDb250ZW50KCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9keVwiKTtcclxuXHJcbiAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKVxyXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcclxuXHJcbiAgICBsZXQgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2R5Q29udGFpbmVyXCIpO1xyXG5cclxuICAgIGxldCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ29Db250YWluZXJcIik7XHJcblxyXG4gICAgbGV0IGNvbnRlbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQxLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29udGFpbmVyXCIpO1xyXG4gICAgbGV0IGhlYWRsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhlYWRsaW5lMS5pbm5lckhUTUwgPSBcIkhlYWRsaW5lMVwiO1xyXG4gICAgbGV0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwMS5pbm5lckhUTUwgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiO1xyXG4gICAgY29udGVudDEuYXBwZW5kKGhlYWRsaW5lMSwgcDEpO1xyXG5cclxuICAgIGxldCBjb250ZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50Mi5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvbnRhaW5lclwiKTtcclxuICAgIGxldCBoZWFkbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoZWFkbGluZTIuaW5uZXJIVE1MID0gXCJIZWFkbGluZTJcIjtcclxuICAgIGxldCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcDIuaW5uZXJIVE1MID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIjtcclxuICAgIGNvbnRlbnQyLmFwcGVuZChoZWFkbGluZTIsIHAyKVxyXG5cclxuICAgIGxldCBjb250ZW50MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50My5jbGFzc0xpc3QuYWRkKFwiY29udGVudENvbnRhaW5lclwiKTtcclxuICAgIGxldCBoZWFkbGluZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoZWFkbGluZTMuaW5uZXJIVE1MID0gXCJIZWFkbGluZTNcIjtcclxuICAgIGxldCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcDMuaW5uZXJIVE1MID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cIjtcclxuICAgIGNvbnRlbnQzLmFwcGVuZChoZWFkbGluZTMsIHAzKVxyXG5cclxuICAgIGJvZHlDb250YWluZXIuYXBwZW5kKGxvZ29Db250YWluZXIsIGNvbnRlbnQxLCBjb250ZW50MiwgY29udGVudDMpO1xyXG4gICAgYm9keS5hcHBlbmQoYm9keUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmNyZWF0ZUhvbWVDb250ZW50KCk7XHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlSG9tZUNvbnRlbnRcclxufTsiLCJmdW5jdGlvbiBjcmVhdGVNZW51Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvZHlcIik7XHJcblxyXG4gICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZClcclxuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgbGV0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm9keUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9keUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2dvQ29udGFpbmVyXCIpO1xyXG5cclxuICAgIGxldCBmb29kMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb29kMS5jbGFzc0xpc3QuYWRkKFwibWVudUltYWdlMVwiKTtcclxuXHJcbiAgICBsZXQgZm9vZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vZDIuY2xhc3NMaXN0LmFkZChcIm1lbnVJbWFnZTJcIik7XHJcblxyXG4gICAgbGV0IGZvb2QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvb2QzLmNsYXNzTGlzdC5hZGQoXCJtZW51SW1hZ2UzXCIpO1xyXG5cclxuICAgIGJvZHlDb250YWluZXIuYXBwZW5kKGxvZ29Db250YWluZXIsIGZvb2QxLCBmb29kMiwgZm9vZDMpO1xyXG4gICAgYm9keS5hcHBlbmQoYm9keUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVNZW51Q29udGVudFxyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vY3JlYXRlR3JpZC5qcyc7XHJcbmltcG9ydCAnLi9jcmVhdGVOYXYuanMnO1xyXG5pbXBvcnQgJy4vaG9tZUNvbnRlbnQnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
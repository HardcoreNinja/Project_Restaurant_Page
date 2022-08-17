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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'Lato';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2');\r\n}\r\n\r\n:root {\r\n  background: black;\r\n}\r\n\r\n* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Lato';\r\n}\r\n\r\n#content {\r\n  display: grid;\r\n  grid-template-rows: 1fr 10fr;\r\n  grid-template-areas:\r\n    \"nav\"\r\n    \"body\"\r\n  ;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n}\r\n\r\n#nav {\r\n  grid-area: nav;\r\n  background: rgb(36, 41, 46);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  place-content: flex-end center;\r\n  place-items: flex-end center;\r\n  gap: 2vw;\r\n}\r\n\r\n.navButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 100px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n}\r\n\r\n.navButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n#body {\r\n  grid-area: body;\r\n  background: rgb(47, 54, 61);\r\n  display: flex;\r\n  place-content: center center;\r\n  place-items: center center;\r\n  flex-flow: row wrap;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.bodyContainer {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  min-width: 362px;\r\n  max-width: 362px;\r\n  min-height: 868px;\r\n  max-height: 1000px;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  border-radius: 10px;\r\n  background: rgb(36, 41, 46);\r\n  padding: 20px;\r\n  gap: 20px;\r\n}\r\n\r\n.logoContainer {\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.contentContainer {\r\n  background: rgb(47, 54, 61);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-content: flex-start center;\r\n  flex-flow: column wrap;\r\n  width: auto;\r\n  height: auto;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.contentContainer:hover {\r\n  transform: scale(1.025);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n.contentContainer>h1 {\r\n  font-family: \"Lato\";\r\n  font-weight: normal;\r\n}\r\n\r\n.menuImage1 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 250px;\r\n  transition: 0.75s;\r\n  width: 312px;\r\n  height: 156px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage2 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 250px;\r\n  transition: 0.75s;\r\n  width: 312px;\r\n  height: 156px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage3 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 250px;\r\n  transition: 0.75s;\r\n  width: 312px;\r\n  height: 156px;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage1:hover,\r\n.menuImage2:hover,\r\n.menuImage3:hover {\r\n  transform: scale(1.05);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-items: flex-start center;\r\n  flex-flow: column wrap;\r\n}\r\n\r\n.inputContainer {\r\n  display: flex;\r\n  color: white;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  flex-flow: column wrap;\r\n  margin-top: 10px;\r\n  gap: 10px;\r\n\r\n  width: 300px;\r\n}\r\n\r\n.inputContainer>input {\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  width:100%;\r\n  height: 25px;\r\n  transition: 0.75s;\r\n  border-radius: 5px;\r\n  color: white;\r\n}\r\n\r\n.inputContainer>.message {\r\n  height: 100px;\r\n  display: flex;\r\n  place-content: flex-start flex-start;\r\n  place-items: flex-start flex-start;\r\n  color: white;\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  transition: 0.75s;\r\n  width:100%;\r\n}\r\n\r\n.inputContainer>input:hover,\r\n.inputContainer>input:focus,\r\n.inputContainer>.message:hover,\r\n.inputContainer>.message:focus {\r\n  transform: scale(1.1);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n}\r\n\r\n.submitButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 175px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n  margin-top: 20px;\r\n  width:100%;\r\n}\r\n\r\n.submitButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'Lato';\r\n  src: url('./fonts/Lato-Light.ttf') format('woff2');\r\n}\r\n\r\n:root {\r\n  background: black;\r\n}\r\n\r\n* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-family: 'Lato';\r\n}\r\n\r\n#content {\r\n  display: grid;\r\n  grid-template-rows: 1fr 10fr;\r\n  grid-template-areas:\r\n    \"nav\"\r\n    \"body\"\r\n  ;\r\n  min-width: 100vw;\r\n  min-height: 100vh;\r\n  max-width: 100vw;\r\n  max-height: 100vh;\r\n}\r\n\r\n#nav {\r\n  grid-area: nav;\r\n  background: rgb(36, 41, 46);\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  place-content: flex-end center;\r\n  place-items: flex-end center;\r\n  gap: 2vw;\r\n}\r\n\r\n.navButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 100px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n}\r\n\r\n.navButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n#body {\r\n  grid-area: body;\r\n  background: rgb(47, 54, 61);\r\n  display: flex;\r\n  place-content: center center;\r\n  place-items: center center;\r\n  flex-flow: row wrap;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.bodyContainer {\r\n  display: flex;\r\n  flex-flow: column wrap;\r\n  min-width: 362px;\r\n  max-width: 362px;\r\n  min-height: 868px;\r\n  max-height: 1000px;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  border-radius: 10px;\r\n  background: rgb(36, 41, 46);\r\n  padding: 20px;\r\n  gap: 20px;\r\n}\r\n\r\n.logoContainer {\r\n  background-image: url(\"./logo.svg\");\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.contentContainer {\r\n  background: rgb(47, 54, 61);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-content: flex-start center;\r\n  flex-flow: column wrap;\r\n  width: auto;\r\n  height: auto;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.contentContainer:hover {\r\n  transform: scale(1.025);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}\r\n\r\n.contentContainer>h1 {\r\n  font-family: \"Lato\";\r\n  font-weight: normal;\r\n}\r\n\r\n.menuImage1 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 250px;\r\n  transition: 0.75s;\r\n  width: 312px;\r\n  height: 156px;\r\n  background-image: url('./ramen1.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage2 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 250px;\r\n  transition: 0.75s;\r\n  width: 312px;\r\n  height: 156px;\r\n  background-image: url('./ramen2.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage3 {\r\n  border: 1px solid rgb(132, 17, 74);\r\n  min-width: 250px;\r\n  transition: 0.75s;\r\n  width: 312px;\r\n  height: 156px;\r\n  background-image: url('./ramen3.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: bottom;\r\n  max-width: 450px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  padding: 20px;\r\n  gap: 20px;\r\n  transition: 0.75s;\r\n}\r\n\r\n.menuImage1:hover,\r\n.menuImage2:hover,\r\n.menuImage3:hover {\r\n  transform: scale(1.05);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  place-content: flex-start center;\r\n  place-items: flex-start center;\r\n  flex-flow: column wrap;\r\n}\r\n\r\n.inputContainer {\r\n  display: flex;\r\n  color: white;\r\n  place-content: center flex-start;\r\n  place-items: center flex-start;\r\n  flex-flow: column wrap;\r\n  margin-top: 10px;\r\n  gap: 10px;\r\n\r\n  width: 300px;\r\n}\r\n\r\n.inputContainer>input {\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  width:100%;\r\n  height: 25px;\r\n  transition: 0.75s;\r\n  border-radius: 5px;\r\n  color: white;\r\n}\r\n\r\n.inputContainer>.message {\r\n  height: 100px;\r\n  display: flex;\r\n  place-content: flex-start flex-start;\r\n  place-items: flex-start flex-start;\r\n  color: white;\r\n  background: rgb(36, 41, 46);\r\n  border: 1px solid rgb(132, 17, 74);\r\n  transition: 0.75s;\r\n  width:100%;\r\n}\r\n\r\n.inputContainer>input:hover,\r\n.inputContainer>input:focus,\r\n.inputContainer>.message:hover,\r\n.inputContainer>.message:focus {\r\n  transform: scale(1.1);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n}\r\n\r\n.submitButton {\r\n  background: rgb(214, 0, 107);\r\n  width: 175px;\r\n  height: 50px;\r\n  border-radius: 5px;\r\n  transition: 0.75s;\r\n  border: 1px solid black;\r\n  margin-top: 20px;\r\n  width:100%;\r\n}\r\n\r\n.submitButton:hover {\r\n  transform: scale(1.2);\r\n  border-color: rgb(0, 145, 200);\r\n  box-shadow: 2px 2px 2px 2px rgba(0, 145, 200, 0.5);\r\n  background: rgb(0, 145, 200);\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFB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RCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY3JlYXRlR3JpZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jcmVhdGVOYXYuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaG9tZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3RfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0X3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9MYXRvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vbG9nby5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL3JhbWVuMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL3JhbWVuMi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL3JhbWVuMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJuYXZcXFwiXFxyXFxuICAgIFxcXCJib2R5XFxcIlxcclxcbiAgO1xcclxcbiAgbWluLXdpZHRoOiAxMDB2dztcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jbmF2IHtcXHJcXG4gIGdyaWQtYXJlYTogbmF2O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LWVuZCBjZW50ZXI7XFxyXFxuICBwbGFjZS1pdGVtczogZmxleC1lbmQgY2VudGVyO1xcclxcbiAgZ2FwOiAydnc7XFxyXFxufVxcclxcblxcclxcbi5uYXZCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIxNCwgMCwgMTA3KTtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXZCdXR0b246aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ1LCAyMDAsIDAuNSk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbn1cXHJcXG5cXHJcXG4jYm9keSB7XFxyXFxuICBncmlkLWFyZWE6IGJvZHk7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoNDcsIDU0LCA2MSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGNlbnRlcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ib2R5Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgbWluLXdpZHRoOiAzNjJweDtcXHJcXG4gIG1heC13aWR0aDogMzYycHg7XFxyXFxuICBtaW4taGVpZ2h0OiA4NjhweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMDBweDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBmbGV4LXN0YXJ0O1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBmbGV4LXN0YXJ0O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvQ29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRDb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDQ3LCA1NCwgNjEpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRDb250YWluZXI6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAxNDUsIDIwMCwgMC41KTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50Q29udGFpbmVyPmgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUltYWdlMSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMyLCAxNywgNzQpO1xcclxcbiAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgd2lkdGg6IDMxMnB4O1xcclxcbiAgaGVpZ2h0OiAxNTZweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJbWFnZTIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG4gIHdpZHRoOiAzMTJweDtcXHJcXG4gIGhlaWdodDogMTU2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxufVxcclxcblxcclxcbi5tZW51SW1hZ2UzIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICBtaW4td2lkdGg6IDI1MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICB3aWR0aDogMzEycHg7XFxyXFxuICBoZWlnaHQ6IDE1NnB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJbWFnZTE6aG92ZXIsXFxyXFxuLm1lbnVJbWFnZTI6aG92ZXIsXFxyXFxuLm1lbnVJbWFnZTM6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDE0NSwgMjAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0Q29udGFpbmVyPmlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICB3aWR0aDoxMDAlO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lcj4ubWVzc2FnZSB7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMyLCAxNywgNzQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICB3aWR0aDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb250YWluZXI+aW5wdXQ6aG92ZXIsXFxyXFxuLmlucHV0Q29udGFpbmVyPmlucHV0OmZvY3VzLFxcclxcbi5pbnB1dENvbnRhaW5lcj4ubWVzc2FnZTpob3ZlcixcXHJcXG4uaW5wdXRDb250YWluZXI+Lm1lc3NhZ2U6Zm9jdXMge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ1LCAyMDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIxNCwgMCwgMTA3KTtcXHJcXG4gIHdpZHRoOiAxNzVweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAxNDUsIDIwMCwgMC41KTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNERBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCOzs7RUFHQTtFQUNBLGdCQUFn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QUFrQztFQUNsQyxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBOzs7O0VBSUUscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDhCQUE4QjtFQUM5QixrREFBa0Q7RUFDbEQsNEJBQTRCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcXHJcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL0xhdG8tTGlnaHQudHRmJykgZm9ybWF0KCd3b2ZmMicpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcIm5hdlxcXCJcXHJcXG4gICAgXFxcImJvZHlcXFwiXFxyXFxuICA7XFxyXFxuICBtaW4td2lkdGg6IDEwMHZ3O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNuYXYge1xcclxcbiAgZ3JpZC1hcmVhOiBuYXY7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGZsZXgtZW5kIGNlbnRlcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBmbGV4LWVuZCBjZW50ZXI7XFxyXFxuICBnYXA6IDJ2dztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjE0LCAwLCAxMDcpO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAxNDUsIDIwMCwgMC41KTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVxcclxcblxcclxcbiNib2R5IHtcXHJcXG4gIGdyaWQtYXJlYTogYm9keTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYig0NywgNTQsIDYxKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlciBjZW50ZXI7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvZHlDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxuICBtaW4td2lkdGg6IDM2MnB4O1xcclxcbiAgbWF4LXdpZHRoOiAzNjJweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDg2OHB4O1xcclxcbiAgbWF4LWhlaWdodDogMTAwMHB4O1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDM2LCA0MSwgNDYpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ29Db250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2xvZ28uc3ZnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRDb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDQ3LCA1NCwgNjEpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRDb250YWluZXI6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyNSk7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAxNDUsIDIwMCwgMC41KTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50Q29udGFpbmVyPmgxIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCI7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUltYWdlMSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMyLCAxNywgNzQpO1xcclxcbiAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgd2lkdGg6IDMxMnB4O1xcclxcbiAgaGVpZ2h0OiAxNTZweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9yYW1lbjEuanBnJyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJbWFnZTIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzMiwgMTcsIDc0KTtcXHJcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG4gIHdpZHRoOiAzMTJweDtcXHJcXG4gIGhlaWdodDogMTU2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vcmFtZW4yLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxufVxcclxcblxcclxcbi5tZW51SW1hZ2UzIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICBtaW4td2lkdGg6IDI1MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICB3aWR0aDogMzEycHg7XFxyXFxuICBoZWlnaHQ6IDE1NnB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL3JhbWVuMy5qcGcnKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xcclxcbiAgbWF4LXdpZHRoOiA0NTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjc1cztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJbWFnZTE6aG92ZXIsXFxyXFxuLm1lbnVJbWFnZTI6aG92ZXIsXFxyXFxuLm1lbnVJbWFnZTM6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gIGJvcmRlci1jb2xvcjogcmdiKDAsIDE0NSwgMjAwKTtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsIDE0NSwgMjAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyIGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG5cXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0Q29udGFpbmVyPmlucHV0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigzNiwgNDEsIDQ2KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMzIsIDE3LCA3NCk7XFxyXFxuICB3aWR0aDoxMDAlO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dENvbnRhaW5lcj4ubWVzc2FnZSB7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgZmxleC1zdGFydDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBmbGV4LXN0YXJ0IGZsZXgtc3RhcnQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDQxLCA0Nik7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTMyLCAxNywgNzQpO1xcclxcbiAgdHJhbnNpdGlvbjogMC43NXM7XFxyXFxuICB3aWR0aDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRDb250YWluZXI+aW5wdXQ6aG92ZXIsXFxyXFxuLmlucHV0Q29udGFpbmVyPmlucHV0OmZvY3VzLFxcclxcbi5pbnB1dENvbnRhaW5lcj4ubWVzc2FnZTpob3ZlcixcXHJcXG4uaW5wdXRDb250YWluZXI+Lm1lc3NhZ2U6Zm9jdXMge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMCwgMTQ1LCAyMDApO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwgMTQ1LCAyMDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdXR0b24ge1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDIxNCwgMCwgMTA3KTtcXHJcXG4gIHdpZHRoOiAxNzVweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuNzVzO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgd2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ1dHRvbjpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICBib3JkZXItY29sb3I6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLCAxNDUsIDIwMCwgMC41KTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigwLCAxNDUsIDIwMCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0Q29udGVudCgpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvZHlcIik7XHJcblxyXG4gICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZClcclxuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XHJcblxyXG4gICAgbGV0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYm9keUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9keUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsb2dvQ29udGFpbmVyXCIpO1xyXG5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcblxyXG4gICAgbGV0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRDb250YWluZXJcIik7XHJcbiAgICBsZXQgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbmFtZUxhYmVsLmZvciA9IFwibmFtZVwiO1xyXG4gICAgbmFtZUxhYmVsLmlubmVySFRNTCA9IFwiTmFtZTpcIjtcclxuICAgIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lXCIpO1xyXG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBuYW1lRGl2LmFwcGVuZChuYW1lTGFiZWwsIG5hbWVJbnB1dCk7XHJcblxyXG4gICAgbGV0IHN1YmplY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3ViamVjdERpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRDb250YWluZXJcIik7XHJcbiAgICBsZXQgc3ViamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgc3ViamVjdExhYmVsLmZvciA9IFwic3ViamVjdFwiO1xyXG4gICAgc3ViamVjdExhYmVsLmlubmVySFRNTCA9IFwiU3ViamVjdDpcIjtcclxuICAgIGxldCBzdWJqZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBzdWJqZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJqZWN0XCIpO1xyXG4gICAgc3ViamVjdElucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIHN1YmplY3RJbnB1dC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBzdWJqZWN0RGl2LmFwcGVuZChzdWJqZWN0TGFiZWwsIHN1YmplY3RJbnB1dCk7XHJcblxyXG4gICAgbGV0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWVzc2FnZURpdi5jbGFzc0xpc3QuYWRkKFwiaW5wdXRDb250YWluZXJcIik7XHJcbiAgICBsZXQgbWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgbWVzc2FnZUxhYmVsLmZvciA9IFwibWVzc2FnZVwiO1xyXG4gICAgbWVzc2FnZUxhYmVsLmlubmVySFRNTCA9IFwiTWVzc2FnZTpcIjtcclxuICAgIGxldCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XHJcbiAgICBtZXNzYWdlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZXNzYWdlXCIpO1xyXG4gICAgbWVzc2FnZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlXCIpO1xyXG4gICAgbWVzc2FnZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgIG1lc3NhZ2VEaXYuYXBwZW5kKG1lc3NhZ2VMYWJlbCwgbWVzc2FnZUlucHV0KTtcclxuXHJcbiAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICAgIHN1Ym1pdEJ1dHRvbi5pbm5lckhUTUwgPSBcIlN1Ym1pdCA+XCJcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0QnV0dG9uXCIpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kKG5hbWVEaXYsIHN1YmplY3REaXYsIG1lc3NhZ2VEaXYsIHN1Ym1pdEJ1dHRvbik7XHJcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZChsb2dvQ29udGFpbmVyLCBmb3JtKTtcclxuICAgIGJvZHkuYXBwZW5kKGJvZHlDb250YWluZXIpO1xyXG59XHJcblxyXG5jcmVhdGVDb250YWN0Q29udGVudCgpO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZUNvbnRhY3RDb250ZW50XHJcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHcmlkKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2XCIpO1xyXG5cclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBib2R5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYm9keVwiKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmQobmF2LCBib2R5KTtcclxufVxyXG5cclxuY3JlYXRlR3JpZCgpOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVIb21lQ29udGVudCB9IGZyb20gJy4vaG9tZUNvbnRlbnQuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW51Q29udGVudCB9IGZyb20gJy4vbWVudUNvbnRlbnQuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250YWN0Q29udGVudCB9IGZyb20gJy4vY29udGFjdENvbnRlbnQuanMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZcIik7XHJcblxyXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgaG9tZS5pbm5lckhUTUwgPSBcIkhvbWVcIjtcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdkJ1dHRvblwiKTtcclxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjcmVhdGVIb21lQ29udGVudCk7XHJcblxyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgbWVudS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcclxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdkJ1dHRvblwiKTtcclxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjcmVhdGVNZW51Q29udGVudCk7XHJcblxyXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY29udGFjdC5pbm5lckhUTUwgPSBcIkNvbnRhY3RcIjtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcIm5hdkJ1dHRvblwiKTtcclxuICAgIGNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBjcmVhdGVDb250YWN0Q29udGVudCk7XHJcblxyXG4gICAgbmF2LmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcclxufVxyXG5cclxuY3JlYXRlTmF2KCk7XHJcbmNyZWF0ZUhvbWVDb250ZW50KCk7IiwiZnVuY3Rpb24gY3JlYXRlSG9tZUNvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2R5XCIpO1xyXG5cclxuICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgIGxldCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGJvZHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJvZHlDb250YWluZXJcIik7XHJcblxyXG4gICAgbGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nb0NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBsZXQgY29udGVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudDEuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRDb250YWluZXJcIik7XHJcbiAgICBsZXQgaGVhZGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaGVhZGxpbmUxLmlubmVySFRNTCA9IFwiSGVhZGxpbmUxXCI7XHJcbiAgICBsZXQgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHAxLmlubmVySFRNTCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuXCI7XHJcbiAgICBjb250ZW50MS5hcHBlbmQoaGVhZGxpbmUxLCBwMSk7XHJcblxyXG4gICAgbGV0IGNvbnRlbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29udGFpbmVyXCIpO1xyXG4gICAgbGV0IGhlYWRsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhlYWRsaW5lMi5pbm5lckhUTUwgPSBcIkhlYWRsaW5lMlwiO1xyXG4gICAgbGV0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwMi5pbm5lckhUTUwgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiO1xyXG4gICAgY29udGVudDIuYXBwZW5kKGhlYWRsaW5lMiwgcDIpXHJcblxyXG4gICAgbGV0IGNvbnRlbnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnQzLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50Q29udGFpbmVyXCIpO1xyXG4gICAgbGV0IGhlYWRsaW5lMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGhlYWRsaW5lMy5pbm5lckhUTUwgPSBcIkhlYWRsaW5lM1wiO1xyXG4gICAgbGV0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwMy5pbm5lckhUTUwgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlwiO1xyXG4gICAgY29udGVudDMuYXBwZW5kKGhlYWRsaW5lMywgcDMpXHJcblxyXG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmQobG9nb0NvbnRhaW5lciwgY29udGVudDEsIGNvbnRlbnQyLCBjb250ZW50Myk7XHJcbiAgICBib2R5LmFwcGVuZChib2R5Q29udGFpbmVyKTtcclxufVxyXG5cclxuY3JlYXRlSG9tZUNvbnRlbnQoKTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVIb21lQ29udGVudFxyXG59OyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnVDb250ZW50KCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9keVwiKTtcclxuXHJcbiAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKVxyXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcclxuXHJcbiAgICBsZXQgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBib2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2R5Q29udGFpbmVyXCIpO1xyXG5cclxuICAgIGxldCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ29Db250YWluZXJcIik7XHJcblxyXG4gICAgbGV0IGZvb2QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvb2QxLmNsYXNzTGlzdC5hZGQoXCJtZW51SW1hZ2UxXCIpO1xyXG5cclxuICAgIGxldCBmb29kMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb29kMi5jbGFzc0xpc3QuYWRkKFwibWVudUltYWdlMlwiKTtcclxuXHJcbiAgICBsZXQgZm9vZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vZDMuY2xhc3NMaXN0LmFkZChcIm1lbnVJbWFnZTNcIik7XHJcblxyXG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmQobG9nb0NvbnRhaW5lciwgZm9vZDEsIGZvb2QyLCBmb29kMyk7XHJcbiAgICBib2R5LmFwcGVuZChib2R5Q29udGFpbmVyKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGNyZWF0ZU1lbnVDb250ZW50XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9jcmVhdGVHcmlkLmpzJztcclxuaW1wb3J0ICcuL2NyZWF0ZU5hdi5qcyc7XHJcbmltcG9ydCAnLi9ob21lQ29udGVudCc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
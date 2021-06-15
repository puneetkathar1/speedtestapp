module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/listing": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/listing.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/GridCard/GridCard.js":
/*!*****************************************!*\
  !*** ./components/GridCard/GridCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GridCard_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridCard.style */ "./components/GridCard/GridCard.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\GridCard\\GridCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const GridCard = ({
  className,
  favorite,
  location,
  title,
  price,
  rating,
  editBtn,
  viewDetailsBtn,
  children
}) => {
  let classes = viewDetailsBtn || editBtn ? `has_btn ${className}` : className;
  return __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: `grid_card ${classes}`.trim(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["ImageWrapper"], {
    className: "media_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, children), __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    className: "content_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, location && __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["LocationArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 22
    }
  }, location), title && __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["TitleArea"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, title), __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["MetaWrapper"], {
    className: "meta_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, price && __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["PriceArea"], {
    className: "price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, price), rating && __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["RatingArea"], {
    className: "rating",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 22
    }
  }, rating), viewDetailsBtn || editBtn ? __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    className: "button_group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, viewDetailsBtn, editBtn) : null)), favorite && __jsx(_GridCard_style__WEBPACK_IMPORTED_MODULE_2__["FavoriteIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 20
    }
  }, favorite));
};

GridCard.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),
  price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  rating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),
  editBtn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  viewDetailsBtn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (GridCard);

/***/ }),

/***/ "./components/GridCard/GridCard.style.js":
/*!***********************************************!*\
  !*** ./components/GridCard/GridCard.style.js ***!
  \***********************************************/
/*! exports provided: ImageWrapper, FavoriteIcon, ContentWrapper, LocationArea, TitleArea, PriceArea, RatingArea, MetaWrapper, ButtonGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteIcon", function() { return FavoriteIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationArea", function() { return LocationArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleArea", function() { return TitleArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceArea", function() { return PriceArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingArea", function() { return RatingArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaWrapper", function() { return MetaWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const GridCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__GridCardWrapper",
  componentId: "sc-6ijidl-0"
})(["position:relative;border-radius:6px;overflow:hidden;margin-bottom:30px;@media only screen and (max-width:480px){margin-bottom:20px;}&.has_btn{.button_group{@media only screen and (min-width:481px){position:absolute;top:5px;padding-top:3px;}}}&:hover{box-shadow:0 6px 12px ", ";.content_wrapper{border-color:transparent;}&.has_btn{.meta_wrapper{.rating{@media only screen and (min-width:481px){opacity:0;visibility:hidden;}}}@media only screen and (min-width:481px){.button_group{top:19px;opacity:1;visibility:visible;}}}.react-multiple-carousel__arrow{opacity:1;visibility:visible;}.react-multi-carousel-dot-list{bottom:0;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('boxShadow.2', 'rgba(0, 0, 0, 0.16)'));
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__ImageWrapper",
  componentId: "sc-6ijidl-1"
})(["> img{max-width:100%;height:auto;}.react-multi-carousel-list{min-height:150px;background-color:#e9e8ec;}.react-multi-carousel-item{height:170px;}.react-multiple-carousel__arrow{top:0;width:22%;height:100%;border-radius:0;padding:0;opacity:0;visibility:hidden;z-index:1;&::before{font-weight:700;}}.react-multiple-carousel__arrow--left{left:0;background:linear-gradient( to left,transparent 0%,rgba(0,0,0,0.25) 100% );&:hover{background:linear-gradient( to left,transparent 0%,rgba(0,0,0,0.25) 100% );}}.react-multiple-carousel__arrow--right{right:0;background:linear-gradient( to right,transparent 0%,rgba(0,0,0,0.25) 100% );&:hover{background:linear-gradient( to right,transparent 0%,rgba(0,0,0,0.25) 100% );}}.react-multi-carousel-dot-list{position:absolute;bottom:-30%;left:0;width:100%;padding-top:10px;padding-bottom:10px;display:flex;justify-content:center;align-items:center;background:linear-gradient( to bottom,transparent 0%,rgba(0,0,0,0.25) 100% );transition:bottom 0.3s ease;}.react-multi-carousel-dot{align-items:center;button{width:6px;height:6px;border:0;background-color:", ";box-shadow:0 2px 2px rgba(0,0,0,0.05);transition:all 0.3s ease;}}.react-multi-carousel-dot--active{button{width:8px;height:8px;background-color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.3', '#E9E8E8'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
const FavoriteIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__FavoriteIcon",
  componentId: "sc-6ijidl-2"
})(["position:absolute;top:10px;right:8px;z-index:9;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__ContentWrapper",
  componentId: "sc-6ijidl-3"
})(["padding:15px;border-width:1px;border-style:solid;border-top-width:0;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-color:", ";transition:border-color 0.2s ease;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'));
const LocationArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__LocationArea",
  componentId: "sc-6ijidl-4"
})(["color:", ";font-size:13px;font-weight:400;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'));
const TitleArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__TitleArea",
  componentId: "sc-6ijidl-5"
})(["color:", ";font-size:17px;font-weight:700;margin-bottom:2px;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;@media only screen and (max-width:480px){font-size:15px;margin:4px 0 5px;}a{color:", ";font-size:17px;font-weight:700;margin-bottom:2px;@media only screen and (max-width:480px){font-size:15px;margin:4px 0 5px;}&:hover{color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const PriceArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__PriceArea",
  componentId: "sc-6ijidl-6"
})(["color:", ";font-size:13px;font-weight:400;margin-top:1px;white-space:nowrap;width:100%;overflow:hidden;text-overflow:ellipsis;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const RatingArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__RatingArea",
  componentId: "sc-6ijidl-7"
})(["display:flex;align-items:center;color:", ";font-size:13px;margin-top:4px;span{flex-shrink:0;}i{color:", ";}svg{fill:", ";}strong{margin-top:-2px;font-weight:700;margin-left:8px;}.ant-rate{.ant-rate-star{margin-right:4px;font-size:15px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const MetaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__MetaWrapper",
  componentId: "sc-6ijidl-8"
})(["position:relative;transition:all 0.3s ease-out;"]);
const ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GridCardstyle__ButtonGroup",
  componentId: "sc-6ijidl-9"
})(["padding-top:7px;@media only screen and (min-width:481px){opacity:0;visibility:hidden;}> a{display:inline-flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:", ";transition:all 0.3s ease;&:hover,&:focus{outline:0;text-decoration:none;color:", ";}svg{margin-right:5px;width:18px;height:18px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.1', '#399C9F'));
/* harmony default export */ __webpack_exports__["default"] = (GridCardWrapper);

/***/ }),

/***/ "./components/Loader/Loader.js":
/*!*************************************!*\
  !*** ./components/Loader/Loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.style */ "./components/Loader/Loader.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\Loader\\Loader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Loader = ({
  fill,
  className
}) => {
  // default className
  const addAllClasses = ['loader']; // add new class using className prop

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_Loader_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: addAllClasses.join(' '),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("svg", {
    enableBackground: "new 0 0 0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("circle", {
    fill: fill,
    stroke: "none",
    cx: "6",
    cy: "50",
    r: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })), __jsx("circle", {
    fill: fill,
    stroke: "none",
    cx: "26",
    cy: "50",
    r: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })), __jsx("circle", {
    fill: fill,
    stroke: "none",
    cx: "46",
    cy: "50",
    r: "6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx("animate", {
    attributeName: "opacity",
    dur: "1s",
    values: "0;1;0",
    repeatCount: "indefinite",
    begin: "0.3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))));
};

Loader.propTypes = {
  /** ClassName of the Loader component. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Add Loader color using fill prop. */
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Loader.defaultProps = {
  fill: '#008489'
};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./components/Loader/Loader.style.js":
/*!*******************************************!*\
  !*** ./components/Loader/Loader.style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LoaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Loaderstyle__LoaderWrapper",
  componentId: "xriqg-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;svg{width:52px;height:100px;display:inline-block;}"]);
/* harmony default export */ __webpack_exports__["default"] = (LoaderWrapper);

/***/ }),

/***/ "./components/Map/ListingPageMap.js":
/*!******************************************!*\
  !*** ./components/Map/ListingPageMap.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapInfoWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapInfoWindow */ "./components/Map/MapInfoWindow.js");
/* harmony import */ var _hotelMapMarker_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotelMapMarker.png */ "./components/Map/hotelMapMarker.png");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\Map\\ListingPageMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HotelMapMarkerCluster = ({
  location
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: markerIndex,
    1: setMarkerIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  let hotelData = [];

  const infoWindowToggle = index => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  location && location.forEach(item => {
    hotelData.push({
      id: item.id,
      lat: parseFloat(item.location.lat),
      lng: parseFloat(item.location.lng),
      title: item.title,
      thumbUrl: item.image.thumb_url,
      formattedAddress: item.location.formattedAddress,
      price: item.price,
      rating: item.rating,
      ratingCount: item.ratingCount
    });
  });
  return hotelData.map((singlePostLoaction, index) => {
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      key: index,
      icon: _hotelMapMarker_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      position: singlePostLoaction,
      onClick: () => infoWindowToggle(singlePostLoaction.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, isOpen && markerIndex === singlePostLoaction.id ? __jsx(_MapInfoWindow__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: singlePostLoaction,
      onCloseClick: () => infoWindowToggle(singlePostLoaction.id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }) : '');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HotelMapMarkerCluster);

/***/ }),

/***/ "./components/Map/Map.js":
/*!*******************************!*\
  !*** ./components/Map/Map.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps_lib_components_addons_MarkerClusterer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps/lib/components/addons/MarkerClusterer */ "react-google-maps/lib/components/addons/MarkerClusterer");
/* harmony import */ var react_google_maps_lib_components_addons_MarkerClusterer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_addons_MarkerClusterer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapWrapper */ "./components/Map/MapWrapper.js");
/* harmony import */ var _ListingPageMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListingPageMap */ "./components/Map/ListingPageMap.js");
/* harmony import */ var _SinglePageMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SinglePageMap */ "./components/Map/SinglePageMap.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\Map\\Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Map = props => {
  const {
    multiple,
    location
  } = props;

  const handleClustererClick = data => {
    const markerClusterer = data.getMarkers();
    console.log(`Current clicked markers length: ${markerClusterer.length}`);
    console.log(markerClusterer);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, multiple && multiple === true ? __jsx(_MapWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerElement: __jsx("div", {
      style: {
        height: '400px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 29
      }
    }),
    mapElement: __jsx("div", {
      style: {
        height: '100%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 23
      }
    }),
    defaultZoom: 7,
    defaultCenter: {
      lat: 41.8858,
      lng: -75.7223
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(react_google_maps_lib_components_addons_MarkerClusterer__WEBPACK_IMPORTED_MODULE_1___default.a, {
    gridSize: 60,
    averageCenter: true,
    defaultEnableRetinaIcons: true,
    onClick: handleClustererClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(_ListingPageMap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    location: location,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }))) : __jsx(_MapWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerElement: __jsx("div", {
      style: {
        height: '400px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }),
    mapElement: __jsx("div", {
      style: {
        height: '100%'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 23
      }
    }),
    defaultZoom: 8,
    defaultCenter: {
      lat: 40.706877,
      lng: -74.011265
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_SinglePageMap__WEBPACK_IMPORTED_MODULE_4__["default"], {
    location: location,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/Map/MapInfoWindow.js":
/*!*****************************************!*\
  !*** ./components/Map/MapInfoWindow.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UI_Rating_Rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/Rating/Rating */ "./components/UI/Rating/Rating.js");
/* harmony import */ var _GridCard_GridCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GridCard/GridCard */ "./components/GridCard/GridCard.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\Map\\MapInfoWindow.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const MapInfoWindow = ({
  data,
  onCloseClick
}) => {
  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["InfoWindow"], {
    id: data === null || data === void 0 ? void 0 : data.id,
    onCloseClick: onCloseClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_GridCard_GridCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "info_window_card",
    location: data === null || data === void 0 ? void 0 : data.formattedAddress,
    title: data === null || data === void 0 ? void 0 : data.title,
    price: `$${data === null || data === void 0 ? void 0 : data.price}/Night - Free Cancellation`,
    rating: __jsx(components_UI_Rating_Rating__WEBPACK_IMPORTED_MODULE_2__["default"], {
      rating: data === null || data === void 0 ? void 0 : data.rating,
      ratingCount: data === null || data === void 0 ? void 0 : data.ratingCount,
      type: "bulk",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: data === null || data === void 0 ? void 0 : data.thumbUrl,
    alt: data === null || data === void 0 ? void 0 : data.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MapInfoWindow);

/***/ }),

/***/ "./components/Map/MapWrapper.js":
/*!**************************************!*\
  !*** ./components/Map/MapWrapper.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\Map\\MapWrapper.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Map = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(props => __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], _extends({}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 28
  }
}), props.children)));

const MapWrapper = props => {
  return __jsx(Map, _extends({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY&libraries=geometry,drawing,places",
    loadingElement: __jsx("div", {
      style: {
        height: `100%`
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    })
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (MapWrapper);

/***/ }),

/***/ "./components/Map/SinglePageMap.js":
/*!*****************************************!*\
  !*** ./components/Map/SinglePageMap.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapInfoWindow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapInfoWindow */ "./components/Map/MapInfoWindow.js");
/* harmony import */ var _hotelMapMarker_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hotelMapMarker.png */ "./components/Map/hotelMapMarker.png");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\Map\\SinglePageMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const SingleMapDisplay = ({
  location
}) => {
  let hotelData = [];
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: markerIndex,
    1: setMarkerIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const infoWindowToggle = index => {
    setIsOpen(!isOpen);
    setMarkerIndex(index);
  };

  hotelData.push({
    lat: location === null || location === void 0 ? void 0 : location.location.lat,
    lng: location === null || location === void 0 ? void 0 : location.location.lng,
    id: location === null || location === void 0 ? void 0 : location.id,
    title: location === null || location === void 0 ? void 0 : location.title,
    thumbUrl: location === null || location === void 0 ? void 0 : location.image.thumb_url,
    formattedAddress: location === null || location === void 0 ? void 0 : location.location.formattedAddress,
    price: location === null || location === void 0 ? void 0 : location.price,
    rating: location === null || location === void 0 ? void 0 : location.rating,
    ratingCount: location === null || location === void 0 ? void 0 : location.ratingCount
  });
  return hotelData.map((singlePostLoaction, index) => {
    return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      key: index,
      icon: _hotelMapMarker_png__WEBPACK_IMPORTED_MODULE_3__["default"],
      position: singlePostLoaction,
      onClick: () => {
        infoWindowToggle(singlePostLoaction.id);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, isOpen && markerIndex === singlePostLoaction.id ? __jsx(_MapInfoWindow__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: singlePostLoaction,
      onCloseClick: () => {
        infoWindowToggle(singlePostLoaction.id);
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }) : '');
  });
};

const HotelMapMarkerSingle = props => {
  return __jsx(SingleMapDisplay, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HotelMapMarkerSingle);

/***/ }),

/***/ "./components/Map/hotelMapMarker.png":
/*!*******************************************!*\
  !*** ./components/Map/hotelMapMarker.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./components/ProductCard/ProductCard.js":
/*!***********************************************!*\
  !*** ./components/ProductCard/ProductCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_UI_Rating_Rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Rating/Rating */ "./components/UI/Rating/Rating.js");
/* harmony import */ var components_UI_Favorite_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/Favorite/Favorite */ "./components/UI/Favorite/Favorite.js");
/* harmony import */ var _GridCard_GridCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GridCard/GridCard */ "./components/GridCard/GridCard.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\ProductCard\\ProductCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    paritialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
function ProductCard({
  title,
  rating,
  location,
  price,
  ratingCount,
  gallery,
  slug,
  link,
  deviceType
}) {
  return __jsx(_GridCard_GridCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    favorite: __jsx(components_UI_Favorite_Favorite__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: event => {
        console.log(event);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }),
    location: location.formattedAddress,
    title: title,
    price: `$${price}/Night - Free Cancellation`,
    rating: __jsx(components_UI_Rating_Rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rating: rating,
      ratingCount: ratingCount,
      type: "bulk",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }),
    viewDetailsBtn: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${link}/[slug]`,
      as: `${link}/${slug}`,
      prefetch: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiExternalLink"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }), " View Details")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    ssr: true,
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    containerClass: "container",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    renderDotsOutside: false,
    responsive: responsive,
    deviceType: deviceType,
    showDots: true,
    sliderClass: "",
    slidesToSlide: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, gallery.map(({
    url,
    title
  }, index) => __jsx("img", {
    src: url,
    alt: title,
    key: index,
    draggable: false,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'relative'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/SectionGrid/SectionGrid.js":
/*!***********************************************!*\
  !*** ./components/SectionGrid/SectionGrid.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionGrid; });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Text/Text */ "./components/UI/Text/Text.js");
/* harmony import */ var components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Box/Box */ "./components/UI/Box/Box.js");
/* harmony import */ var _ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ProductCard/ProductCard */ "./components/ProductCard/ProductCard.js");

var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\SectionGrid\\SectionGrid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const LoadMore = ({
  handleLoadMore,
  showButton,
  buttonText,
  loading,
  loadMoreComponent,
  loadMoreStyle
}) => {
  return !!showButton && __jsx(components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    className: "loadmore_wrapper"
  }, loadMoreStyle, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), loadMoreComponent ? loadMoreComponent : __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    loading: loading,
    onClick: handleLoadMore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, buttonText || 'Load More'));
};

function SectionGrid({
  data = [],
  totalItem,
  limit,
  columnWidth,
  paginationComponent,
  handleLoadMore,
  loadMoreComponent,
  placeholder,
  loading,
  buttonText,
  rowStyle,
  columnStyle,
  loadMoreStyle,
  link
}) {
  const n = limit ? Number(limit) : 1;
  const limits = Array(n).fill(0);
  let showButton = data.length < totalItem;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    className: "grid_wrapper"
  }, rowStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), data && data.length ? data.map(item => {
    return __jsx(components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      className: "grid_column",
      width: columnWidth,
      key: item.id
    }, columnStyle, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }), __jsx(_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      link: link
    }, item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 19
      }
    })));
  }) : null, loading && limits.map((item, i) => __jsx(components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    className: "grid_column",
    width: columnWidth,
    key: i
  }, columnStyle, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), placeholder ? placeholder : __jsx(components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: "Loading ...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 44
    }
  })))), showButton && __jsx(LoadMore, {
    showButton: showButton,
    handleLoadMore: handleLoadMore,
    loading: loading,
    buttonText: buttonText,
    loadMoreComponent: loadMoreComponent,
    loadMoreStyle: loadMoreStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), paginationComponent && __jsx(components_UI_Box_Box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "pagination_wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, paginationComponent));
}
SectionGrid.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  totalItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  columnWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array]),
  paginationComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  handleLoadMore: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  loadMoreComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  buttonText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  rowStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  columnStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  loadMoreStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
SectionGrid.defaultProps = {
  rowStyle: {
    flexBox: true,
    flexWrap: 'wrap',
    mr: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px'],
    ml: ['-10px', '-10px', '-10px', '-10px', '-10px', '-15px']
  },
  columnStyle: {
    pr: ['10px', '10px', '10px', '10px', '10px', '15px'],
    pl: ['10px', '10px', '10px', '10px', '10px', '15px']
  },
  loadMoreStyle: {
    flexBox: true,
    justifyContent: 'center',
    mt: '1rem'
  }
};

/***/ }),

/***/ "./components/UI/Base.js":
/*!*******************************!*\
  !*** ./components/UI/Base.js ***!
  \*******************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** This is our base component every components must be extend it. */

const themed = key => props => props.theme[key];
const base = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["compose"])(() => ({
  boxSizing: 'border-box'
}), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"], styled_system__WEBPACK_IMPORTED_MODULE_0__["width"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["height"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_0__["color"], styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_0__["order"], styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_0__["display"]);
base.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_0__["display"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["width"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["height"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["color"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["order"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"].propTypes);

/***/ }),

/***/ "./components/UI/Box/Box.js":
/*!**********************************!*\
  !*** ./components/UI/Box/Box.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Base */ "./components/UI/Base.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\Box\\Box.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "sc-1w2buan-0"
})(_Base__WEBPACK_IMPORTED_MODULE_4__["base"], Object(_Base__WEBPACK_IMPORTED_MODULE_4__["themed"])('Box'), props => props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])({
  display: 'flex'
}, styled_system__WEBPACK_IMPORTED_MODULE_3__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_3__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["justifyContent"], Object(_Base__WEBPACK_IMPORTED_MODULE_4__["themed"])('FlexBox')));

const Box = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(BoxWrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);
Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,

  /** Using this props we can convert our Box Component to a Flex Container or Component */
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main']),
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  flex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  display: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  borderTop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  borderRight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))])
};
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "./components/UI/ContentLoader/ContentLoader.js":
/*!******************************************************!*\
  !*** ./components/UI/ContentLoader/ContentLoader.js ***!
  \******************************************************/
/*! exports provided: SinglePageLoader, PostPlaceholder, ProfilePicLoader, ImageCardLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePageLoader", function() { return SinglePageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPlaceholder", function() { return PostPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicLoader", function() { return ProfilePicLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCardLoader", function() { return ImageCardLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\ContentLoader\\ContentLoader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SinglePageLoader = props => {
  return __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    height: 1000,
    width: 800,
    speed: 3,
    primaryColor: "#f3f3f3",
    secondaryColor: "#e9e8ec"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("rect", {
    x: "5.02",
    y: "16.7",
    rx: "0",
    ry: "0",
    width: "782.02",
    height: "319.55",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "7.77",
    y: "360.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "207.77",
    y: "360.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "104.77",
    y: "362.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "305.77",
    y: "361.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "611.78",
    y: "359.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "709.78",
    y: "360.22",
    rx: "0",
    ry: "0",
    width: "82.47",
    height: "39",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "8.02",
    y: "421.71",
    rx: "0",
    ry: "0",
    width: "522.01",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "550.03",
    y: "418.71",
    rx: "0",
    ry: "0",
    width: "240",
    height: "301.56",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "9.04",
    y: "561.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "7.06",
    y: "690.71",
    rx: "0",
    ry: "0",
    width: "522.01",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "272.25",
    y: "560.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "405.04",
    y: "558.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "142.04",
    y: "559.71",
    rx: "0",
    ry: "0",
    width: "120.06",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "6.06",
    y: "819.71",
    rx: "0",
    ry: "0",
    width: "522.01",
    height: "120.96",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }));
};
const PostPlaceholder = props => {
  return __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    height: 400,
    width: 400,
    speed: 2,
    className: "placeholder",
    primaryColor: "#f3f3f3",
    secondaryColor: "#e9e8ec"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }), __jsx("circle", {
    cx: "39.34",
    cy: "17.32",
    r: "0.71",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "751.46",
    cy: "58.81",
    r: "40.21",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "605.25",
    y: "39.6",
    rx: "0",
    ry: "0",
    width: "66",
    height: "41",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "639.25",
    y: "59.6",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "518.25",
    y: "38.6",
    rx: "0",
    ry: "0",
    width: "66",
    height: "41",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "435.25",
    y: "40.6",
    rx: "0",
    ry: "0",
    width: "66",
    height: "41",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "264.25",
    y: "216.6",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "31.25",
    y: "451.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "399.25",
    y: "531.94",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "217.25",
    y: "450.94",
    rx: "0",
    ry: "0",
    width: "176.33",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "415.25",
    y: "449.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "608.17",
    y: "448.94",
    rx: "0",
    ry: "0",
    width: "171.75",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "30.25",
    y: "609.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "417.25",
    y: "612.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "609.25",
    y: "612.94",
    rx: "0",
    ry: "0",
    width: "167.17",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "220.25",
    y: "612.94",
    rx: "0",
    ry: "0",
    width: "174.04",
    height: "147.66",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "9.63",
    y: "18.61",
    rx: "0",
    ry: "0",
    width: "381.03",
    height: "186",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "80.63",
    y: "132.61",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "9.63",
    y: "218.61",
    rx: "0",
    ry: "0",
    width: "183",
    height: "25",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "8.63",
    y: "258.61",
    rx: "0",
    ry: "0",
    width: "381",
    height: "43",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "8.63",
    y: "319.61",
    rx: "0",
    ry: "0",
    width: "204",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "229.63",
    y: "320.61",
    rx: "0",
    ry: "0",
    width: "164.45",
    height: "23",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "336.63",
    y: "328.61",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "20.56",
    cy: "370.54",
    r: "11.93",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "53.63",
    cy: "376.61",
    r: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "52.56",
    cy: "370.54",
    r: "11.93",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "81.56",
    cy: "370.54",
    r: "11.93",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "112.56",
    cy: "371.54",
    r: "11.93",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }), __jsx("circle", {
    cx: "141.56",
    cy: "371.54",
    r: "11.93",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "168.63",
    y: "360.61",
    rx: "0",
    ry: "0",
    width: "104",
    height: "24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }), __jsx("rect", {
    x: "213.63",
    y: "397.61",
    rx: "0",
    ry: "0",
    width: "0",
    height: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }));
};
const ProfilePicLoader = () => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 180,
  width: 180,
  speed: 3,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143,
    columnNumber: 3
  }
}, __jsx("circle", {
  cx: "76",
  cy: "60",
  r: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150,
    columnNumber: 5
  }
}), __jsx("circle", {
  cx: "90",
  cy: "50",
  r: "41",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 5
  }
}), __jsx("rect", {
  x: "16",
  y: "94",
  rx: "0",
  ry: "0",
  width: "149",
  height: "80",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 5
  }
}));
const ImageCardLoader = () => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 270,
  width: 215,
  speed: 2,
  primaryColor: "#f3f3f3",
  secondaryColor: "#ecebeb",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157,
    columnNumber: 3
  }
}, __jsx("circle", {
  cx: "138",
  cy: "80",
  r: "1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 5
  }
}), __jsx("rect", {
  x: "87",
  y: "24",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 165,
    columnNumber: 5
  }
}), __jsx("rect", {
  x: "87",
  y: "24",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166,
    columnNumber: 5
  }
}), __jsx("rect", {
  x: "0",
  y: "0",
  rx: "0",
  ry: "0",
  width: "223",
  height: "277",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167,
    columnNumber: 5
  }
}));

/***/ }),

/***/ "./components/UI/DatePicker/ReactDates.js":
/*!************************************************!*\
  !*** ./components/UI/DatePicker/ReactDates.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dates/initialize */ "react-dates/initialize");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dates */ "react-dates");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ReactDates_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReactDates.style */ "./components/UI/DatePicker/ReactDates.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\DatePicker\\ReactDates.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/*
 * For Localization enable this code [example : French language as "fr"]
 */
// import moment from 'moment';
// import 'moment/locale/fr';

class DateRangePickerBox extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onDateChangeFunc", ({
      startDate,
      endDate
    }) => {
      const {
        dateFormat
      } = this.state;
      this.setState({
        startDate,
        endDate
      });

      if (startDate !== null && endDate !== null) {
        this.props.updateSearchData({
          setStartDate: startDate.format(dateFormat),
          setEndDate: endDate.format(dateFormat)
        });
      }
    });

    _defineProperty(this, "onFocusChangeFunc", focusedInput => {
      return this.setState({
        focusedInput
      });
    });

    const separator = this.props.item && this.props.item.separator ? this.props.item.separator : '/';

    const _dateFormat = this.props.item && this.props.item.format ? this.props.item.format : 'llll';

    this.state = {
      focusedInput: null,
      startDate: this.props.startDate ? this.props.startDate : null,
      endDate: this.props.endDate ? this.props.endDate : null,
      dateFormat: _dateFormat,
      separator
    };
    this.onDateChangeFunc = this.onDateChangeFunc.bind(this);
    this.onFocusChangeFunc = this.onFocusChangeFunc.bind(this);
    /*
     * For Localization enable this code [example : French language as "fr"]
     */
    // moment.locale('fr');
  }

  render() {
    const {
      focusedInput,
      startDate,
      endDate
    } = this.state; // DateRangePickerBox props list

    const {
      className,
      startDateId,
      endDateId,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      showClearDates,
      isRTL,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      small,
      block,
      numberOfMonths,
      regular,
      noBorder
    } = this.props; // Add all classs to an array **************

    const addAllClasses = ['date_picker']; // className prop checking **************

    if (className) {
      addAllClasses.push(className);
    } // React-Dates DateRangePicker Props List


    const defaultCalenderProps = {
      startDateId: startDateId ? startDateId : 'start_unique_id',
      endDateId: endDateId ? endDateId : 'end_date_unique_id',
      startDate,
      endDate,
      focusedInput,
      onFocusChange: this.onFocusChangeFunc,
      onDatesChange: this.onDateChangeFunc,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      isRTL,
      showClearDates: showClearDates ? showClearDates : false,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      small,
      numberOfMonths: numberOfMonths ? numberOfMonths : 2,
      block,
      regular,
      noBorder
    };
    return __jsx(_ReactDates_style__WEBPACK_IMPORTED_MODULE_4__["ReactDatesStyleWrapper"], {
      className: addAllClasses.join(' '),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }
    }, __jsx(react_dates__WEBPACK_IMPORTED_MODULE_1__["DateRangePicker"], _extends({}, defaultCalenderProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    })));
  }

}

DateRangePickerBox.propTypes = {
  /** startDateId of the date-picker field */
  startDateId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,

  /** endDateId of the date-picker field */
  endDateId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  //

  /** startDatePlaceholderText of the date-picker field */
  startDatePlaceholderText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** endDatePlaceholderText of the date-picker field */
  endDatePlaceholderText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** disabled of the date-picker field */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['START_DATE', 'END_DATE'])]),

  /** showClearDates of the date-picker field */
  showClearDates: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** isRTL of the date-picker field */
  isRTL: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** orientation of the date-picker field */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['horizontal', 'vertical']),

  /** anchorDirection of the date-picker field */
  anchorDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']),

  /** withPortal of the date-picker field */
  withPortal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** withFullScreenPortal of the date-picker field */
  withFullScreenPortal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** small of the date-picker field */
  small: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** numberOfMonths of the date-picker field */
  numberOfMonths: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** block of the date-picker field */
  block: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** regular of the date-picker field */
  regular: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** noBorder of the date-picker field */
  noBorder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** updateSearchData of the date-picker field to send component data to parent component */
  updateSearchData: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (DateRangePickerBox);

/***/ }),

/***/ "./components/UI/DatePicker/ReactDates.style.js":
/*!******************************************************!*\
  !*** ./components/UI/DatePicker/ReactDates.style.js ***!
  \******************************************************/
/*! exports provided: ReactDatesStyleWrapper, ReactDatesWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactDatesStyleWrapper", function() { return ReactDatesStyleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactDatesWrapper", function() { return ReactDatesWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var library_helpers_rtl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! library/helpers/rtl */ "./library/helpers/rtl.js");


const ReactDatesStyleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ReactDatesstyle__ReactDatesStyleWrapper",
  componentId: "kysuqv-0"
})(["display:flex;flex-wrap:wrap;align-items:center;margin-bottom:40px;.ant-form-item{display:flex;align-items:center;margin-right:30px;margin-bottom:0;margin-left:0;&:last-child{margin-right:0;}.ant-form-item-label{label{font-size:13px;}}}"]);

const ReactDateWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "ReactDatesstyle__ReactDateWrapper",
  componentId: "kysuqv-1"
})([".isoReactDate{height:100vh;.DateInput__display-text--focused{color:#fff;font-weight:400;}.CalendarDay--selected-start,.CalendarDay--selected-end,.CalendarDay--selected{color:#fff;}.CalendarDay--selected-span{color:#fff;}.CalendarDay--hovered-span,.CalendarDay--after-hovered-start{color:#fff;}.DayPickerKeyboardShortcuts__show--bottom-right{border-top:26px solid transparent;bottom:0;right:0;}.DayPicker--horizontal{.DayPickerNavigation--horizontal{.DayPickerNavigation__prev,.DayPickerNavigation__next{-webkit-transform:", ";-ms-transform:", ";transform:", ";}}}.DateRangePickerInput{.DateRangePickerInput__arrow{-webkit-transform:", ";-ms-transform:", ";transform:", ";}}}"], props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit');

const ReactDatesWrapper = Object(library_helpers_rtl__WEBPACK_IMPORTED_MODULE_1__["default"])(ReactDateWrapper);


/***/ }),

/***/ "./components/UI/Favorite/Favorite.js":
/*!********************************************!*\
  !*** ./components/UI/Favorite/Favorite.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useToggle */ "./components/UI/Favorite/useToggle.js");
/* harmony import */ var _Favorite_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Favorite.style */ "./components/UI/Favorite/Favorite.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\Favorite\\Favorite.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Favorite = ({
  className,
  content,
  onClick
}) => {
  // use toggle hooks
  const [toggleValue, toggleHandler] = Object(_useToggle__WEBPACK_IMPORTED_MODULE_2__["default"])(false); // Add all classs to an array

  const addAllClass = ['favorite']; // className prop checking

  if (className) {
    addAllClass.push(className);
  }

  const handelClick = event => {
    toggleHandler();
    onClick(!toggleValue);
  };

  return __jsx(_Favorite_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handelClick,
    className: `${addAllClass.join(' ')} ${toggleValue ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18.64 18.232",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("path", {
    d: "M60.16,56h-.04a4.551,4.551,0,0,0-3.8,2.08A4.551,4.551,0,0,0,52.52,56h-.04A4.522,4.522,0,0,0,48,60.52a9.737,9.737,0,0,0,1.912,5.308A33.506,33.506,0,0,0,56.32,72a33.506,33.506,0,0,0,6.408-6.172A9.737,9.737,0,0,0,64.64,60.52,4.522,4.522,0,0,0,60.16,56Z",
    transform: "translate(-47 -55)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, content));
};

Favorite.propTypes = {
  /** ClassName of the Favorite */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** content of the Favorite */
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Favorite.defaultProps = {
  onClick: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (Favorite);

/***/ }),

/***/ "./components/UI/Favorite/Favorite.style.js":
/*!**************************************************!*\
  !*** ./components/UI/Favorite/Favorite.style.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const addAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:scale(1) rotate(0deg);}50%{transform:scale(1.34) rotateY(90deg);}"]);
const removeAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:scale(1.34) rotateY(90deg);}50%{transform:scale(1) rotateY(0);}"]);
const AddAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 0.4s cubic-bezier(0.38,0.7,0.6,0.29);"], addAnimation);
const RemoveAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["animation:", " 0.55s cubic-bezier(0.38,0.7,0.6,0.29);"], removeAnimation);
const FavoriteWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Favoritestyle__FavoriteWrapper",
  componentId: "ajvf5h-0"
})(["display:inline-block;cursor:pointer;border:0;padding:10px;background-color:transparent;&:hover,&:focus{border:0;box-shadow:none;outline:none;}svg{width:22px;height:20px;", " path{fill:", ";stroke:", ";stroke-width:2px;transition:fill 1s ease;}}&.active{svg{", ";path{fill:", ";}}}"], RemoveAnimation, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), AddAnimation, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.4', '#FC5C63'));
/* harmony default export */ __webpack_exports__["default"] = (FavoriteWrapper);

/***/ }),

/***/ "./components/UI/Favorite/useToggle.js":
/*!*********************************************!*\
  !*** ./components/UI/Favorite/useToggle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useToggle = initialValue => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const toggler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setValue(value => !value), []);
  return [value, toggler];
};

/* harmony default export */ __webpack_exports__["default"] = (useToggle);

/***/ }),

/***/ "./components/UI/InputIncDec/InputIncDec.js":
/*!**************************************************!*\
  !*** ./components/UI/InputIncDec/InputIncDec.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons/lib/icons/PlusOutlined */ "@ant-design/icons/lib/icons/PlusOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_lib_icons_MinusOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons/lib/icons/MinusOutlined */ "@ant-design/icons/lib/icons/MinusOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_MinusOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MinusOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _InputIncDec_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputIncDec.style */ "./components/UI/InputIncDec/InputIncDec.style.js");



var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\InputIncDec\\InputIncDec.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const InputIncDec = _ref => {
  let {
    className,
    increment,
    decrement
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "increment", "decrement"]);

  const addAllClasses = ['quantity'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_InputIncDec_style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: addAllClasses.join(' '),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("button", {
    className: "btn decBtn",
    type: "button",
    onClick: decrement,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_ant_design_icons_lib_icons_MinusOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    className: "qnt-input",
    type: "number"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  })), __jsx("button", {
    className: "btn incBtn",
    type: "button",
    onClick: increment,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(_ant_design_icons_lib_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (InputIncDec);

/***/ }),

/***/ "./components/UI/InputIncDec/InputIncDec.style.js":
/*!********************************************************!*\
  !*** ./components/UI/InputIncDec/InputIncDec.style.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InputIncDecWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "InputIncDecstyle__InputIncDecWrapper",
  componentId: "sc-1x9dp7a-0"
})(["width:104px;height:18px;display:flex;align-items:center;position:relative;overflow:hidden;input[type='number']{width:calc(100% - 54px);position:absolute;left:27px;top:0;height:100%;padding:0;border:0;text-align:center;background-color:transparent;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}&:focus{outline:none;box-shadow:none;}}button{border:0;width:27px;height:27px;border-radius:50%;display:inline-flex;align-items:center;position:absolute;top:0;padding:0;background-color:transparent;cursor:pointer;justify-content:center;&.decBtn{left:0;}&.incBtn{right:0;}&:hover,&:focus{outline:0;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (InputIncDecWrapper);

/***/ }),

/***/ "./components/UI/Portal/Portal.js":
/*!****************************************!*\
  !*** ./components/UI/Portal/Portal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Portal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
// The portal element is inserted in the DOM tree after
// the Modal's children are mounted, meaning that children
// will be mounted on a detached DOM node. If a child
// component requires to be attached to the DOM tree
// immediately when mounted, for example to measure a
// DOM node, or uses 'autoFocus' in a descendant, add
// state to Modal and only render the children when Modal
// is inserted in the DOM tree.


function Portal({
  children,
  rendererId
}) {
  const {
    0: containerEl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(document.createElement('div'));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let portalRoot = document.getElementById(rendererId) || document.body;
    portalRoot.appendChild(containerEl);
    return () => portalRoot.removeChild(containerEl);
  });
  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(children, containerEl);
}

/***/ }),

/***/ "./components/UI/Rating/Rating.js":
/*!****************************************!*\
  !*** ./components/UI/Rating/Rating.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\Rating\\Rating.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Rating = props => {
  const {
    rating,
    ratingCount,
    type,
    ratingFieldName
  } = props;
  let i, floorValue;
  let ratingView = [];

  if (rating && rating !== 0) {
    floorValue = Math.floor(rating);

    for (i = 0; i < 5; i++) {
      if (i < floorValue) {
        ratingView.push(__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosStar"], {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }
        }));
      } else {
        ratingView.push(__jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosStarOutline"], {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 25
          }
        }));
      }
    }
  }

  let listingCondition;

  if (rating && rating === 5) {
    listingCondition = 'Awesome';
  } else if (4 <= rating && rating < 5) {
    listingCondition = 'Good';
  } else if (3 <= rating && rating < 4) {
    listingCondition = 'Average';
  } else if (2 <= rating && rating < 3) {
    listingCondition = 'Bad';
  } else if (rating >= 1) {
    listingCondition = 'Terrible';
  } else {
    listingCondition = '';
  }

  let showRatingCount;

  if (ratingCount) {
    showRatingCount = `(` + ratingCount + `)`;
  } else {
    showRatingCount = '';
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, type && type === 'bulk' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, ratingView), __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, ` ${listingCondition}`, " ", `${showRatingCount}`)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, ratingFieldName), " ", ratingView));
};

Rating.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  ratingCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  rating: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  ratingFieldName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./components/UI/Text/Text.js":
/*!************************************!*\
  !*** ./components/UI/Text/Text.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Base */ "./components/UI/Base.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\Text\\Text.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "t69qtu-0"
})(_Base__WEBPACK_IMPORTED_MODULE_4__["base"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_Base__WEBPACK_IMPORTED_MODULE_4__["themed"])('Text'));

const Text = _ref => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return __jsx(TextWrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }), content);
};

Text.propTypes = _objectSpread({
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))])
}, _Base__WEBPACK_IMPORTED_MODULE_4__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  m: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/UI/Toolbar/Toolbar.js":
/*!******************************************!*\
  !*** ./components/UI/Toolbar/Toolbar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Toolbar_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.style */ "./components/UI/Toolbar/Toolbar.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\Toolbar\\Toolbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Toolbar({
  left,
  right,
  className,
  children
}) {
  const addAllClasses = ['toolbar'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_Toolbar_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: addAllClasses.join(' '),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_Toolbar_style__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, left && __jsx(_Toolbar_style__WEBPACK_IMPORTED_MODULE_1__["LeftSide"], {
    className: "toolbar_left__side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 18
    }
  }, left), right && __jsx(_Toolbar_style__WEBPACK_IMPORTED_MODULE_1__["RightSide"], {
    className: "toolbar_right__side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, right), children && children));
}

/***/ }),

/***/ "./components/UI/Toolbar/Toolbar.style.js":
/*!************************************************!*\
  !*** ./components/UI/Toolbar/Toolbar.style.js ***!
  \************************************************/
/*! exports provided: Container, LeftSide, RightSide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftSide", function() { return LeftSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSide", function() { return RightSide; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Toolbarstyle__Wrapper",
  componentId: "anmfwz-0"
})(["display:flex;align-items:center;min-height:70px;background:", ";"], props => props.bg ? props.bg : '#fff');
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Toolbarstyle__Container",
  componentId: "anmfwz-1"
})(["max-width:1920px;width:100%;margin-left:auto;margin-right:auto;display:flex;align-items:center;justify-content:space-between;"]);
const LeftSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Toolbarstyle__LeftSide",
  componentId: "anmfwz-2"
})([""]);
const RightSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Toolbarstyle__RightSide",
  componentId: "anmfwz-3"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./components/UI/ViewWithPopup/ViewWithPopup.js":
/*!******************************************************!*\
  !*** ./components/UI/ViewWithPopup/ViewWithPopup.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewWithPopup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Portal_Portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portal/Portal */ "./components/UI/Portal/Portal.js");
/* harmony import */ var _ViewWithPopup_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewWithPopup.style */ "./components/UI/ViewWithPopup/ViewWithPopup.style.js");
/* harmony import */ var _useOnClickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useOnClickOutside */ "./components/UI/ViewWithPopup/useOnClickOutside.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\ViewWithPopup\\ViewWithPopup.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ViewWithPopup({
  view,
  popup,
  noView = false,
  style,
  className
}) {
  const {
    0: showPopup,
    1: setShowPopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(_useOnClickOutside__WEBPACK_IMPORTED_MODULE_3__["useOnClickOutside"])(ref, () => setShowPopup(false)); // Add all classs to an array

  const addAllClasses = ['view_with__popup']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_ViewWithPopup_style__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    className: `${addAllClasses.join(' ')} ${showPopup ? 'active' : ''}`,
    ref: ref,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, view && noView && __jsx("div", {
    className: "popup_handler",
    onClick: () => setShowPopup(!showPopup),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, view), __jsx(_ViewWithPopup_style__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "popup_container",
    showPopup: showPopup,
    onClick: () => setShowPopup(true),
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, view && !noView && view, showPopup && __jsx("div", {
    id: "popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(_Portal_Portal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    rendererId: "popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, popup && popup))));
}

/***/ }),

/***/ "./components/UI/ViewWithPopup/ViewWithPopup.style.js":
/*!************************************************************!*\
  !*** ./components/UI/ViewWithPopup/ViewWithPopup.style.js ***!
  \************************************************************/
/*! exports provided: Container, Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ViewWithPopupstyle__Container",
  componentId: "sc-1m2a7on-0"
})(["border-radius:", "px;", " .ant-checkbox-group{display:flex;flex-direction:column;.ant-checkbox-group-item{margin:9px 0;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}}.date_picker{margin-bottom:0;.DateRangePicker{.DateRangePickerInput{border-radius:3px;}}}"], props => props.radius ? props.radius : 3, props => props.showPopup && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["box-shadow:0 2px 20px rgba(0,0,0,0.16);position:absolute;width:100%;z-index:999;min-width:300px;padding:30px;background-color:#ffffff;"]));
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ViewWithPopupstyle__Wrapper",
  componentId: "sc-1m2a7on-1"
})(["position:relative;width:100%;"]);

/***/ }),

/***/ "./components/UI/ViewWithPopup/useOnClickOutside.js":
/*!**********************************************************!*\
  !*** ./components/UI/ViewWithPopup/useOnClickOutside.js ***!
  \**********************************************************/
/*! exports provided: useOnClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnClickOutside", function() { return useOnClickOutside; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Hook

function useOnClickOutside(ref, handler) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); // Empty array ensures that effect is only run on mount and unmount
}

/***/ }),

/***/ "./container/Listing/Listing.style.js":
/*!********************************************!*\
  !*** ./container/Listing/Listing.style.js ***!
  \********************************************/
/*! exports provided: ShowMapCheckbox, PostsWrapper, FixedMap, Label, FilterArea, FilterElementsWrapper, ButtonGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowMapCheckbox", function() { return ShowMapCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsWrapper", function() { return PostsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedMap", function() { return FixedMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterArea", function() { return FilterArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterElementsWrapper", function() { return FilterElementsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
const ListingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__ListingWrapper",
  componentId: "sc-1c13aqm-0"
})(["position:relative;.ant-checkbox-group{.ant-checkbox-group-item{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}&::after{display:none;}}}span{color:", ";font-size:15px;}&:hover{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}}}}}.DateRangePicker{.DateRangePickerInput{.DateInput{.DateInput_input{&.DateInput_input__focused{border-bottom:0;}}.DateInput_fang{top:40px !important;}}}}.ant-slider{.ant-slider-rail{height:5px;border-radius:3px;background-color:", ";}.ant-slider-track{background-color:", ";}.ant-slider-step{.ant-slider-dot{width:5px;height:5px;top:0;border-color:", ";background-color:", ";&:first-child{margin-left:-1px;}&.ant-slider-dot-active{border-color:", ";}}}&:hover{.ant-slider-track{background-color:", ";}.ant-slider-handle:not(.ant-tooltip-open){border-color:", ";}}.ant-slider-handle{margin-top:-8px;width:20px;height:20px;border:6px solid ", ";box-shadow:0 2px 2px ", ";&:focus{box-shadow:none;}}.ant-slider-mark{margin-top:10px;.ant-slider-mark-text{font-size:15px;color:", ";}}}.toolbar{padding-left:30px;padding-right:30px;border-bottom:1px solid ", ";@media only screen and (min-width:1441px){min-height:78px;}}.loadmore_wrapper{margin-top:30px;> button{border:0;min-width:115px;height:40px;display:inline-flex;align-items:center;justify-content:center;padding:0 15px;font-size:15px;font-weight:700;border-radius:3px;color:", ";border-color:", ";background-color:", ";transition:all 0.3s ease;&:hover{outline:none;opacity:0.8;}&:focus{outline:none;}&::after{content:none;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const ShowMapCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__ShowMapCheckbox",
  componentId: "sc-1c13aqm-1"
})([".ant-checkbox-wrapper{display:flex;align-items:center;flex-direction:row-reverse;}.ant-checkbox{top:0;+ span{font-size:14px;font-weight:700;color:", ";}}.ant-checkbox-inner{width:20px;height:20px;border-color:", ";}.ant-checkbox-wrapper{.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";&::after{transform:rotate(45deg) scale(1) translate(-50%,-70%);}}}}.ant-checkbox-wrapper:hover .ant-checkbox-inner,.ant-checkbox:hover .ant-checkbox-inner,.ant-checkbox-input:focus + .ant-checkbox-inner{border-color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const PostsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__PostsWrapper",
  componentId: "sc-1c13aqm-2"
})(["max-width:1920px;padding:30px;&.col-24{width:100%;margin-left:auto;margin-right:auto;}&.col-12{width:60%;@media only screen and (min-width:1921px){width:calc(60% - 120px);margin-left:120px;margin-right:auto;}}"]);
const FixedMap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__FixedMap",
  componentId: "sc-1c13aqm-3"
})(["position:fixed;background-color:", ";right:0;width:40%;height:calc(100% - 152px);top:152px;z-index:9;@media only screen and (max-width:767px){width:100%;}> div{position:absolute;width:100%;height:100% !important;> div{height:100% !important;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'));
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__Label",
  componentId: "sc-1c13aqm-4"
})(["color:", ";font-size:15px;margin-right:15px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const FilterArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__FilterArea",
  componentId: "sc-1c13aqm-5"
})(["overflow:hidden;button,button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&::after{content:none;}&:hover{background-color:", ";}&.active{color:", ";border-color:", ";background-color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const FilterElementsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__FilterElementsWrapper",
  componentId: "sc-1c13aqm-6"
})(["position:relative;height:100%;overflow:hidden;.accordion{overflow-y:auto;overflow-x:hidden;padding-right:35px;margin-right:-35px;height:calc(100% - 68px);.accordion__item{border-bottom:1px solid ", ";&:last-child{border-bottom:0;}.accordion__heading{.accordion__button{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:29px 0;&:hover,&:focus{outline:0;}h4{font-size:15px;color:", ";text-transform:capitalize;}}}.accordion__panel{padding-bottom:29px;animation:0.25s ", " ease;&[hidden]{animation:0.25s ", " ease;}.date_picker{margin-bottom:0;.DateRangePicker{.DateRangePickerInput{border-color:", ";.DateInput__small{width:102px;.DateInput_input__small{padding:12px 10px 10px;font-weight:400;color:", ";}}}.DateRangePicker_picker{left:1px !important;}}}.ant-checkbox-group{display:flex;flex-direction:column;.ant-checkbox-group-item{margin-bottom:15px;.ant-checkbox{.ant-checkbox-inner{border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}&::after{display:none;}}}span{color:", ";font-size:15px;}&:hover{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}}}}}.ant-slider{margin-left:7px;max-width:320px;.ant-slider-rail{height:5px;border-radius:3px;background-color:", ";}.ant-slider-track{background-color:", ";}.ant-slider-step{.ant-slider-dot{width:5px;height:5px;top:0;border-color:", ";background-color:", ";&:first-child{margin-left:-1px;}&.ant-slider-dot-active{border-color:", ";}}}&:hover{.ant-slider-track{background-color:", ";}.ant-slider-handle:not(.ant-tooltip-open){border-color:", ";}}.ant-slider-handle{margin-top:-8px;width:20px;height:20px;border:6px solid ", ";box-shadow:0 2px 2px ", ";&:focus{box-shadow:none;}}.ant-slider-mark{margin-top:10px;.ant-slider-mark-text{font-size:15px;color:", ";}}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2c2c2c'), fadeIn, fadeIn, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Listingstyle__ButtonGroup",
  componentId: "sc-1c13aqm-7"
})(["position:absolute;bottom:0;right:0;width:100%;display:flex;justify-content:flex-end;align-items:center;button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&.ant-btn-primary{color:", ";border-color:", ";background-color:", ";margin-left:10px;}&::after{display:none;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
/* harmony default export */ __webpack_exports__["default"] = (ListingWrapper);

/***/ }),

/***/ "./container/Listing/ListingMap.js":
/*!*****************************************!*\
  !*** ./container/Listing/ListingMap.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Map_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Map/Map */ "./components/Map/Map.js");
/* harmony import */ var components_Loader_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var _Listing_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Listing.style */ "./container/Listing/Listing.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Listing\\ListingMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ListingMap = props => {
  const {
    mapData,
    loading
  } = props;
  return __jsx(_Listing_style__WEBPACK_IMPORTED_MODULE_4__["FixedMap"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(mapData) || loading ? __jsx(components_Loader_Loader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }) : __jsx(components_Map_Map__WEBPACK_IMPORTED_MODULE_2__["default"], {
    location: mapData,
    multiple: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ListingMap);

/***/ }),

/***/ "./container/Listing/Search/CategorySearch/CategorySearch.js":
/*!*******************************************************************!*\
  !*** ./container/Listing/Search/CategorySearch/CategorySearch.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/slider */ "antd/lib/slider");
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "antd/lib/checkbox");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/ViewWithPopup/ViewWithPopup */ "./components/UI/ViewWithPopup/ViewWithPopup.js");
/* harmony import */ var components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/UI/InputIncDec/InputIncDec */ "./components/UI/InputIncDec/InputIncDec.js");
/* harmony import */ var components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/DatePicker/ReactDates */ "./components/UI/DatePicker/ReactDates.js");
/* harmony import */ var context_SearchProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! context/SearchProvider */ "./context/SearchProvider.js");
/* harmony import */ var library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! library/helpers/url_handler */ "./library/helpers/url_handler.js");
/* harmony import */ var _SearchParams__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SearchParams */ "./container/Listing/Search/SearchParams.js");
/* harmony import */ var _CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CategorySearch.style */ "./container/Listing/Search/CategorySearch/CategorySearch.style.js");



var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Listing\\Search\\CategorySearch\\CategorySearch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const history = false ? undefined : false;
const location =  false && false;

function serchReducer(state, action) {
  switch (action.type) {
    case 'amenities':
      return _objectSpread(_objectSpread({}, state), {}, {
        amenities: action.payload
      });

    case 'property':
      return _objectSpread(_objectSpread({}, state), {}, {
        property: action.payload
      });

    case 'date_range':
      return _objectSpread(_objectSpread({}, state), {}, {
        setStartDate: action.payload.setStartDate,
        setEndDate: action.payload.setEndDate
      });

    case 'price':
      return _objectSpread(_objectSpread({}, state), {}, {
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice
      });

    case 'roomGuestReset':
      return _objectSpread(_objectSpread({}, state), {}, {
        room: action.payload.room,
        guest: action.payload.guest
      });

    case 'reset':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
}

const CategorySearchNext = props => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(context_SearchProvider__WEBPACK_IMPORTED_MODULE_9__["SearchContext"]);
  const initialState = {
    amenities: state.amenities || [],
    property: state.property || [],
    setStartDate: state.setStartDate || null,
    setEndDate: state.setEndDate || null,
    minPrice: parseInt(state.minPrice) || 0,
    maxPrice: parseInt(state.maxPrice) || 100,
    location_lat: state.location_lat || null,
    location_lng: state.location_lng || null,
    room: parseInt(state.room) || 0,
    guest: parseInt(state.guest) || 0
  }; // current component state with dispatching to reducer

  const {
    0: current,
    1: dispatchCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(serchReducer, initialState); // Room guest state

  const {
    0: countRoom,
    1: setRoom
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(current.room);
  const {
    0: countGuest,
    1: setGuest
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(current.guest); // data handling

  const onChange = (value, type) => {
    let query = {};
    let modifiedCurrent = current;

    for (const key in modifiedCurrent) {
      if (modifiedCurrent.hasOwnProperty(key)) {
        switch (key) {
          case 'date_range':
            delete modifiedCurrent.date_range;
            break;

          case 'price':
            delete modifiedCurrent.price;
            break;
        }
      }
    }

    if (type === 'date_range') {
      query = _objectSpread(_objectSpread({}, current), {}, {
        setStartDate: value.setStartDate,
        setEndDate: value.setEndDate
      });
      dispatchCurrent({
        type: type,
        payload: value
      });
    } else if (type === 'price') {
      query = _objectSpread(_objectSpread({}, current), {}, {
        minPrice: value ? value[0] : 0,
        maxPrice: value ? value[1] : 100
      });
      dispatchCurrent({
        type: type,
        payload: query
      });
    } else if (type === 'reset') {
      setRoom(0);
      setGuest(0);
      query = _objectSpread(_objectSpread({}, current), {}, {
        setStartDate: null,
        setEndDate: null,
        room: 0,
        guest: 0,
        amenities: [],
        property: [],
        minPrice: 0,
        maxPrice: 100,
        location_lat: null,
        location_lng: null
      });
      dispatchCurrent({
        type: type,
        payload: query
      });
    } else {
      query = _objectSpread(_objectSpread({}, current), {}, {
        [type]: value
      });
      dispatchCurrent({
        type: type,
        payload: value
      });
    }

    const params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_10__["setStateToUrl"])(query);
    dispatch({
      type: 'UPDATE',
      payload: _objectSpread(_objectSpread({}, current), query)
    });
    history.push(_objectSpread(_objectSpread({}, location), {}, {
      search: params
    }));
  };

  const handleRoomGuestApply = () => {
    const query = _objectSpread(_objectSpread({}, current), {}, {
      room: countRoom,
      guest: countGuest
    });

    const params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_10__["setStateToUrl"])(query);
    history.push(_objectSpread(_objectSpread({}, location), {}, {
      search: params
    }));
  };

  const handleRoomGuestCancel = () => {
    setRoom(0);
    setGuest(0);

    const query = _objectSpread(_objectSpread({}, current), {}, {
      room: 0,
      guest: 0
    });

    dispatchCurrent({
      type: 'roomGuestReset',
      payload: query
    });
    const params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_10__["setStateToUrl"])(query);
    history.push(_objectSpread(_objectSpread({}, location), {}, {
      search: params
    }));
  };

  const dateRangeActivateClass = current && current.setStartDate !== undefined && current.setEndDate !== undefined && current.setStartDate !== null && current.setEndDate !== null ? 'activated' : '';
  const priceRangeActivateClass = current && current.minPrice !== undefined && current.maxPrice !== undefined && current.minPrice === 0 && current.maxPrice === 100 ? '' : 'activated';
  let amenitiesLength = 0;
  let propertyLength = 0;
  let amenities = [];
  let property = [];

  if (current && current.amenities && typeof current.amenities === 'string') {
    amenities = current.amenities.split(',');
    amenitiesLength = amenities.length;
  } else if (current && current.amenities && current.amenities.length) {
    amenities = current.amenities;
    amenitiesLength = amenities.length;
  }

  if (current && current.property && typeof current.property === 'string') {
    property = current.property.split(',');
    propertyLength = property.length;
  } else if (current && current.property && current.property.length) {
    property = current.property;
    propertyLength = current.property.length;
  }

  return __jsx(_CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: amenitiesLength ? 'activated' : '',
    key: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getAmenities"].id,
    noView: true,
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 11
      }
    }, _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getAmenities"].name, amenitiesLength > 0 && `: ${amenitiesLength}`),
    popup: __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
      options: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getAmenities"].options,
      defaultValue: amenities,
      onChange: value => onChange(value, 'amenities'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: propertyLength ? 'activated' : '',
    key: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getPropertyType"].id,
    noView: true,
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 11
      }
    }, _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getPropertyType"].name, propertyLength > 0 && `: ${propertyLength}`),
    popup: __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a.Group, {
      options: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["getPropertyType"].options,
      defaultValue: property,
      onChange: value => onChange(value, 'property'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 7
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: dateRangeActivateClass,
    key: 400,
    noView: true,
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 15
      }
    }, "Choose Date"),
    popup: __jsx(components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_8__["default"], {
      startDateId: "startDate-id-category",
      endDateId: "endDate-id-category",
      startDate: current.setStartDate ? moment__WEBPACK_IMPORTED_MODULE_4___default()(current.setStartDate) : null,
      endDate: current.setEndDate ? moment__WEBPACK_IMPORTED_MODULE_4___default()(current.setEndDate) : null,
      numberOfMonths: 1,
      small: true,
      item: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["calenderItem"],
      updateSearchData: value => onChange(value, 'date_range'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: priceRangeActivateClass,
    key: 300,
    noView: true,
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 11
      }
    }, current.minPrice > 0 || current.maxPrice < 100 ? `Price Range: ${current.minPrice}, ${current.maxPrice}` : `Price per night`),
    popup: __jsx(antd_lib_slider__WEBPACK_IMPORTED_MODULE_0___default.a, {
      range: true,
      marks: _SearchParams__WEBPACK_IMPORTED_MODULE_11__["priceInit"],
      min: 0,
      max: 100,
      defaultValue: [current.minPrice, current.maxPrice],
      onAfterChange: value => onChange(value, 'price'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 11
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 7
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: 200,
    noView: true,
    className: countRoom || countGuest ? 'activated' : '',
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 11
      }
    }, "Room ", countRoom > 0 && `: ${countRoom}`, ", Guest", countGuest > 0 && `: ${countGuest}`),
    popup: __jsx(_CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__["RoomGuestWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 11
      }
    }, __jsx(_CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__["ItemWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 13
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 15
      }
    }, "Room"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "room",
      increment: () => setRoom(countRoom => countRoom + 1),
      decrement: () => setRoom(countRoom => countRoom > 0 && countRoom - 1),
      onChange: e => setRoom(e.target.value),
      value: countRoom,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 15
      }
    })), __jsx(_CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__["ItemWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 13
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 15
      }
    }, "Guest"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "guest",
      increment: () => setGuest(countGuest => countGuest + 1),
      decrement: () => setGuest(countGuest => countGuest > 0 && countGuest - 1),
      onChange: e => setGuest(e.target.value),
      value: countGuest,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 15
      }
    })), __jsx(_CategorySearch_style__WEBPACK_IMPORTED_MODULE_12__["ActionWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 13
      }
    }, countRoom || countGuest ? __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      onClick: handleRoomGuestCancel,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 17
      }
    }, "Cancel") : '', __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "primary",
      onClick: handleRoomGuestApply,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 15
      }
    }, "Apply"))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: 100,
    noView: true,
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 15
      }
    }, "Reset"),
    popup: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      onClick: () => onChange(initialState, 'reset'),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 11
      }
    }, "Reset Search Page URL"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CategorySearchNext);

/***/ }),

/***/ "./container/Listing/Search/CategorySearch/CategorySearch.style.js":
/*!*************************************************************************!*\
  !*** ./container/Listing/Search/CategorySearch/CategorySearch.style.js ***!
  \*************************************************************************/
/*! exports provided: RoomGuestWrapper, ItemWrapper, ActionWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomGuestWrapper", function() { return RoomGuestWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionWrapper", function() { return ActionWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const CategroySearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategorySearchstyle__CategroySearchWrapper",
  componentId: "sc-13yll7z-0"
})(["display:flex;align-items:center;.view_with__popup{margin-right:15px;&:last-child{margin-right:0;}.popup_handler{button,button.ant-btn{height:38px;font-size:15px;border-radius:3px;color:", ";border:1px solid ", ";&:hover{background-color:", ";}&::after{content:none;}}}&.active{.popup_handler{button,button.ant-btn{color:", ";border-color:", ";background-color:", ";}& + .popup_container{margin-top:15px;border:1px solid ", ";}}&::after{content:'';display:block;position:fixed;left:0;top:70px;background-color:rgba(255,255,255,0.9);width:100%;min-height:100vh;pointer-events:none;}}&.activated{.popup_handler{button,button.ant-btn{color:", ";border-color:", ";background-color:", ";&:hover{opacity:0.85;}}}}.popup_container{#popup{> div{> button,> .ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&::after{content:none;}&:hover{color:", ";border-color:", ";}}}}}}.date_picker{.DateRangePicker{display:block;width:100%;.DateRangePickerInput{width:100%;border-color:", ";.DateInput__small{width:102px;.DateInput_input__small{padding:12px 10px 10px;font-weight:400;color:", ";}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const RoomGuestWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategorySearchstyle__RoomGuestWrapper",
  componentId: "sc-13yll7z-1"
})(["width:100%;strong{font-size:15px;font-weight:400;color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategorySearchstyle__ItemWrapper",
  componentId: "sc-13yll7z-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
const ActionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CategorySearchstyle__ActionWrapper",
  componentId: "sc-13yll7z-3"
})(["overflow:hidden;margin-top:27px;.ant-btn{border:0;padding:0;height:auto;box-shadow:none;font-weight:600;border-radius:0;text-shadow:none;color:", ";border-bottom:1px solid transparent;&:hover{color:", ";border-bottom-color:", ";}&:focus{outline:none;}&.ant-btn-primary{float:right;border-color:transparent;background-color:transparent;color:", ";&:hover{color:", ";border-bottom-color:", ";}}&::after{display:none;}&:not([disabled]):hover{text-decoration:underline;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.2', '#777777'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.1', '#399C9F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.1', '#399C9F'));
/* harmony default export */ __webpack_exports__["default"] = (CategroySearchWrapper);

/***/ }),

/***/ "./container/Listing/Search/SearchParams.js":
/*!**************************************************!*\
  !*** ./container/Listing/Search/SearchParams.js ***!
  \**************************************************/
/*! exports provided: priceInit, calenderItem, getAmenities, getPropertyType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceInit", function() { return priceInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calenderItem", function() { return calenderItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAmenities", function() { return getAmenities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropertyType", function() { return getPropertyType; });
// default data for filter elements
const priceInit = {
  0: '$0',
  100: '$100'
};
const calenderItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en'
};
const getAmenities = {
  id: 1,
  name: 'Amenities',
  identifier: 'amenities',
  options: [{
    label: 'Free Wi-Fi',
    value: 'free-wifi'
  }, {
    label: 'Free Parking',
    value: 'free-parking'
  }, {
    label: 'Breakfast included',
    value: 'breakfast'
  }, {
    label: 'Pool',
    value: 'pool'
  }, {
    label: 'Air Conditioning',
    value: 'air-condition'
  }, {
    label: 'Hot Shower',
    value: 'hot-shower'
  }, {
    label: 'Cable TV',
    value: 'cable-tv'
  }]
};
const getPropertyType = {
  id: 2,
  name: 'Property Type',
  identifier: 'property-type',
  options: [{
    label: 'Villa',
    value: 'villa'
  }, {
    label: 'Hotel',
    value: 'hotel'
  }, {
    label: 'Resort',
    value: 'resort'
  }, {
    label: 'Cottage',
    value: 'cottage'
  }, {
    label: 'Duplex',
    value: 'duplex'
  }, {
    label: 'Landscape',
    value: 'landscape'
  }]
};

/***/ }),

/***/ "./context/SearchProvider.js":
/*!***********************************!*\
  !*** ./context/SearchProvider.js ***!
  \***********************************/
/*! exports provided: SearchContext, SearchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchContext", function() { return SearchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProvider", function() { return SearchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\context\\SearchProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SearchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
}

const SearchProvider = ({
  children,
  query
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, query);
  return __jsx(SearchContext.Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./library/helpers/get_api_data.js":
/*!*****************************************!*\
  !*** ./library/helpers/get_api_data.js ***!
  \*****************************************/
/*! exports provided: ProcessAPIData, SearchedData, SearchStateKeyCheck, Paginator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessAPIData", function() { return ProcessAPIData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchedData", function() { return SearchedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchStateKeyCheck", function() { return SearchStateKeyCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paginator", function() { return Paginator; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/shuffle */ "lodash/shuffle");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_1__);



const FetchAPIData = url => {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(r => r.json()).then(data => {
    return data;
  });
};

const ProcessAPIData = apiData => {
  let fetchData = {};

  if (apiData) {
    apiData.forEach((item, key) => {
      fetchData.data = item.data ? [...item.data] : [];
      fetchData.name = item.name ? item.name : '';
    });
  }

  const data = fetchData ? fetchData.data : [];
  return data;
};
const SearchedData = processedData => {
  const randNumber = Math.floor(Math.random() * 50 + 1);
  const data = lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default()(processedData.slice(0, randNumber));
  return data;
};
const SearchStateKeyCheck = state => {
  for (var key in state) {
    if (state[key] !== null && state[key] != '' && state[key] != [] && state[key] != 0 && state[key] != 100) {
      return true;
    }
  }

  return false;
};
const Paginator = (posts, processedData, limit) => {
  return [...posts, ...processedData.slice(posts.length, posts.length + limit)];
};

const GetAPIData = async apiUrl => {
  const promises = apiUrl.map(async repo => {
    const apiPath = `${"http://localhost:3001"}/static/data`; // read it from env variable

    const api = `${apiPath}/${repo.endpoint}.json`;
    const response = await FetchAPIData(api);
    return {
      name: repo.name,
      data: response
    };
  });
  const receviedData = await Promise.all(promises);
  return receviedData;
};

/* harmony default export */ __webpack_exports__["default"] = (GetAPIData);

/***/ }),

/***/ "./library/helpers/rtl.js":
/*!********************************!*\
  !*** ./library/helpers/rtl.js ***!
  \********************************/
/*! exports provided: default, direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "direction", function() { return direction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\library\\helpers\\rtl.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


let direction = 'ltr';

if (false) {}

const withDirection = Component => props => {
  return __jsx(Component, _extends({}, props, {
    "data-rtl": direction,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (withDirection);


/***/ }),

/***/ "./library/helpers/url_handler.js":
/*!****************************************!*\
  !*** ./library/helpers/url_handler.js ***!
  \****************************************/
/*! exports provided: createUrl, setStateToUrl, setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUrl", function() { return createUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStateToUrl", function() { return setStateToUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION", function() { return setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION; });
function createUrl(urlData) {
  const keys = Object.keys(urlData);
  let search = '';
  keys.forEach(key => {
    if (urlData[key] && urlData[key] !== null && urlData[key] !== '' && urlData[key] !== ',' && urlData[key] !== undefined && urlData[key].length !== 0) {
      // search[key] = urlData[key];
      search += `${key}=${urlData[key]}&`;
    }
  }); // return search;

  return search.substring(0, search.length - 1);
}
function setStateToUrl(state) {
  let urlData = {};

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'amenities':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'property':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }

          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }

          break;

        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }

  return createUrl(urlData);
}
function setStateToUrl_ON_NEXT_JS_ROUTER_PUSH_VERSION(state) {
  let urlData = {};

  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      switch (key) {
        case 'setStartDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'setEndDate':
          urlData[key] = state[key] ? state[key] : '';
          break;

        case 'minPrice':
          if (state[key] && state[key] > 0) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'maxPrice':
          if (state[key] && state[key] < 100) {
            urlData[key] = state[key];
          } else {
            urlData[key] = '';
          }

          break;

        case 'amenities':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'room':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'guest':
          if (state[key]) {
            urlData[key] = state[key] ? state[key] : 0;
          } else {
            urlData[key] = '';
          }

          break;

        case 'property':
          urlData[key] = state[key] && typeof state[key] !== 'string' && state[key].length ? state[key].join() : state[key];
          break;

        case 'location':
          if (state[key] && state[key].location_lat) {
            urlData[`${key}_lat`] = state[key].location_lat;
          }

          if (state[key] && state[key].location_lng) {
            urlData[`${key}_lng`] = state[key].location_lng;
          }

          break;

        case 'reset':
          urlData = state[key];
          break;

        default:
          urlData[key] = state[key];
          break;
      }
    }
  }

  return createUrl(urlData);
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/listing.js":
/*!**************************!*\
  !*** ./pages/listing.js ***!
  \**************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListingPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/checkbox */ "antd/lib/checkbox");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_UI_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/Toolbar/Toolbar */ "./components/UI/Toolbar/Toolbar.js");
/* harmony import */ var container_Listing_Search_CategorySearch_CategorySearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! container/Listing/Search/CategorySearch/CategorySearch */ "./container/Listing/Search/CategorySearch/CategorySearch.js");
/* harmony import */ var components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/SectionGrid/SectionGrid */ "./components/SectionGrid/SectionGrid.js");
/* harmony import */ var components_UI_ContentLoader_ContentLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/ContentLoader/ContentLoader */ "./components/UI/ContentLoader/ContentLoader.js");
/* harmony import */ var container_Listing_ListingMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! container/Listing/ListingMap */ "./container/Listing/ListingMap.js");
/* harmony import */ var context_SearchProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! context/SearchProvider */ "./context/SearchProvider.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! library/helpers/get_api_data */ "./library/helpers/get_api_data.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");
/* harmony import */ var settings_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! settings/config */ "./settings/config.js");
/* harmony import */ var container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! container/Listing/Listing.style */ "./container/Listing/Listing.style.js");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! fs/promises */ "fs/promises");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_17__);

var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\pages\\listing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















const FilterDrawer = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! container/Listing/Search/MobileSearchView */ "./container/Listing/Search/MobileSearchView.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! container/Listing/Search/MobileSearchView */ "./container/Listing/Search/MobileSearchView.js")],
    modules: ['container/Listing/Search/MobileSearchView']
  }
});


function ListingPage(props) {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(context_SearchProvider__WEBPACK_IMPORTED_MODULE_10__["SearchContext"]);
  const statekey = Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_12__["SearchStateKeyCheck"])(state);
  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.processedData.slice(0, settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_POST_LIMIT"]) || []);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showMap,
    1: setShowMap
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (statekey === true) {
      const newData = Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_12__["SearchedData"])(props.processedData);
      setPosts(newData);
    } else {
      setPosts(props.processedData.slice(0, settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_POST_LIMIT"]) || []);
    }
  }, [statekey]);

  const handleMapToggle = () => {
    setShowMap(showMap => !showMap);
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const data = Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_12__["Paginator"])(posts, props.processedData, settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_POST_LIMIT"]);
      setPosts(data);
      setLoading(false);
    }, 1000);
  };

  let columnWidth = settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP"];

  if (showMap) {
    columnWidth = settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_COLUMN_WIDTH_WITH_MAP"];
  }

  let columnCount = 'col-24';

  if (react_device_detect__WEBPACK_IMPORTED_MODULE_11__["deviceType"] === 'desktop' && showMap === true) {
    columnCount = 'col-12';
  }

  return __jsx(container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "Listing | A react next listing template")), __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_4___default.a, {
    top: 82,
    innerZ: 999,
    activeClass: "isHeaderSticky",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(components_UI_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    left: react_device_detect__WEBPACK_IMPORTED_MODULE_11__["deviceType"] === 'desktop' ? __jsx(container_Listing_Search_CategorySearch_CategorySearch__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 40
      }
    }) : __jsx(FilterDrawer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 61
      }
    }),
    right: __jsx(container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_15__["ShowMapCheckbox"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default.a, {
      defaultChecked: false,
      onChange: handleMapToggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }
    }, "Show map")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  })), __jsx(container_Listing_Listing_style__WEBPACK_IMPORTED_MODULE_15__["PostsWrapper"], {
    className: columnCount,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_7__["default"], {
    link: settings_constant__WEBPACK_IMPORTED_MODULE_13__["SINGLE_POST_PAGE"],
    columnWidth: columnWidth,
    deviceType: react_device_detect__WEBPACK_IMPORTED_MODULE_11__["deviceType"],
    data: posts,
    totalItem: props.processedData.length,
    limit: settings_config__WEBPACK_IMPORTED_MODULE_14__["LISTING_PAGE_POST_LIMIT"],
    loading: loading,
    handleLoadMore: handleLoadMore,
    placeholder: __jsx(components_UI_ContentLoader_ContentLoader__WEBPACK_IMPORTED_MODULE_8__["PostPlaceholder"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 24
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  })), showMap && __jsx(container_Listing_ListingMap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: loading,
    mapData: posts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }));
}
async function getStaticProps() {
  //Use when Loading data form DB
  // const apiUrl = [
  //   {
  //     endpoint: 'hotel',
  //     name: 'listingHotel',
  //   },
  // ];
  // const pageData = await GetAPIData(apiUrl);
  // const processedData = ProcessAPIData(pageData);
  //Loading data from local files
  const filePath = path__WEBPACK_IMPORTED_MODULE_17___default.a.join(process.cwd(), 'static', 'data', 'hotel.json');
  const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_16___default.a.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      processedData: data
    }
  };
}

/***/ }),

/***/ "./settings/config.js":
/*!****************************!*\
  !*** ./settings/config.js ***!
  \****************************/
/*! exports provided: HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE, HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE, HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE, HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH, LISTING_PAGE_POST_LIMIT, LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP, LISTING_PAGE_COLUMN_WIDTH_WITH_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE", function() { return HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE", function() { return HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE", function() { return HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH", function() { return HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTING_PAGE_POST_LIMIT", function() { return LISTING_PAGE_POST_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP", function() { return LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTING_PAGE_COLUMN_WIDTH_WITH_MAP", function() { return LISTING_PAGE_COLUMN_WIDTH_WITH_MAP; });
const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE = 4;
const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE = 4;
const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE = 5;
const HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];
const LISTING_PAGE_POST_LIMIT = 10;
const LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];
const LISTING_PAGE_COLUMN_WIDTH_WITH_MAP = [1 / 1, 1 / 2, 1 / 2, 1 / 2, 1 / 3];

/***/ }),

/***/ "./settings/constant.js":
/*!******************************!*\
  !*** ./settings/constant.js ***!
  \******************************/
/*! exports provided: HOME_PAGE, AGENTS_PAGE, LISTING_POSTS_PAGE, SINGLE_POST_PAGE, AGENT_PROFILE_PAGE, AGENT_ACCOUNT_SETTINGS_PAGE, AGENT_PROFILE_EDIT_PAGE, AGENT_IMAGE_EDIT_PAGE, AGENT_PASSWORD_CHANGE_PAGE, AGENT_PROFILE_DELETE, AGENT_PROFILE_FAVOURITE, AGENT_PROFILE_CONTACT, ADD_HOTEL_PAGE, PRICING_PLAN_PAGE, PRIVACY_PAGE, LOGIN_PAGE, REGISTRATION_PAGE, CHANGE_PASSWORD_PAGE, FORGET_PASSWORD_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENTS_PAGE", function() { return AGENTS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTING_POSTS_PAGE", function() { return LISTING_POSTS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_POST_PAGE", function() { return SINGLE_POST_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_PAGE", function() { return AGENT_PROFILE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_ACCOUNT_SETTINGS_PAGE", function() { return AGENT_ACCOUNT_SETTINGS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_EDIT_PAGE", function() { return AGENT_PROFILE_EDIT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_IMAGE_EDIT_PAGE", function() { return AGENT_IMAGE_EDIT_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PASSWORD_CHANGE_PAGE", function() { return AGENT_PASSWORD_CHANGE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_DELETE", function() { return AGENT_PROFILE_DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_FAVOURITE", function() { return AGENT_PROFILE_FAVOURITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGENT_PROFILE_CONTACT", function() { return AGENT_PROFILE_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_HOTEL_PAGE", function() { return ADD_HOTEL_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRICING_PLAN_PAGE", function() { return PRICING_PLAN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIVACY_PAGE", function() { return PRIVACY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_PAGE", function() { return LOGIN_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_PAGE", function() { return REGISTRATION_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_PASSWORD_PAGE", function() { return CHANGE_PASSWORD_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORGET_PASSWORD_PAGE", function() { return FORGET_PASSWORD_PAGE; });
// General Page Section
const HOME_PAGE = '/';
const AGENTS_PAGE = '/agents'; // Listing Single Page Section

const LISTING_POSTS_PAGE = '/listing';
const SINGLE_POST_PAGE = '/post'; // Agent Profile Page Section

const AGENT_PROFILE_PAGE = '/profile';
const AGENT_ACCOUNT_SETTINGS_PAGE = '/account-settings';
const AGENT_PROFILE_EDIT_PAGE = '/edit';
const AGENT_IMAGE_EDIT_PAGE = '/change-image';
const AGENT_PASSWORD_CHANGE_PAGE = '/change-password';
const AGENT_PROFILE_DELETE = '/delete';
const AGENT_PROFILE_FAVOURITE = '/favourite-post';
const AGENT_PROFILE_CONTACT = '/contact';
const ADD_HOTEL_PAGE = '/add-hotel'; // Other Pages

const PRICING_PLAN_PAGE = '/pricing-plan';
const PRIVACY_PAGE = '/privacy'; // Login / Registation Page

const LOGIN_PAGE = '/sign-in';
const REGISTRATION_PAGE = '/sign-up';
const CHANGE_PASSWORD_PAGE = '/change-password';
const FORGET_PASSWORD_PAGE = '/forget-password';

/***/ }),

/***/ "@ant-design/icons/lib/icons/MinusOutlined":
/*!************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/MinusOutlined" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/MinusOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/PlusOutlined":
/*!***********************************************************!*\
  !*** external "@ant-design/icons/lib/icons/PlusOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/PlusOutlined");

/***/ }),

/***/ "@styled-system/theme-get":
/*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/checkbox":
/*!************************************!*\
  !*** external "antd/lib/checkbox" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ "antd/lib/drawer":
/*!**********************************!*\
  !*** external "antd/lib/drawer" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/drawer");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/slider":
/*!**********************************!*\
  !*** external "antd/lib/slider" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs/promises");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/shuffle":
/*!*********************************!*\
  !*** external "lodash/shuffle" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/shuffle");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-accessible-accordion":
/*!*********************************************!*\
  !*** external "react-accessible-accordion" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-accessible-accordion");

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "react-dates":
/*!******************************!*\
  !*** external "react-dates" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dates");

/***/ }),

/***/ "react-dates/initialize":
/*!*****************************************!*\
  !*** external "react-dates/initialize" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dates/initialize");

/***/ }),

/***/ "react-device-detect":
/*!**************************************!*\
  !*** external "react-device-detect" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-device-detect");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react-google-maps/lib/components/addons/MarkerClusterer":
/*!**************************************************************************!*\
  !*** external "react-google-maps/lib/components/addons/MarkerClusterer" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/addons/MarkerClusterer");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZENhcmQvR3JpZENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkQ2FyZC9HcmlkQ2FyZC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkZXIvTG9hZGVyLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwL0xpc3RpbmdQYWdlTWFwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwL01hcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC9NYXBJbmZvV2luZG93LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwL01hcFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXAvU2luZ2xlUGFnZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC9ob3RlbE1hcE1hcmtlci5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25HcmlkL1NlY3Rpb25HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0JveC9Cb3guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Db250ZW50TG9hZGVyL0NvbnRlbnRMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9EYXRlUGlja2VyL1JlYWN0RGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9EYXRlUGlja2VyL1JlYWN0RGF0ZXMuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9GYXZvcml0ZS9GYXZvcml0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0Zhdm9yaXRlL0Zhdm9yaXRlLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRmF2b3JpdGUvdXNlVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW5wdXRJbmNEZWMvSW5wdXRJbmNEZWMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9JbnB1dEluY0RlYy9JbnB1dEluY0RlYy5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL1BvcnRhbC9Qb3J0YWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9SYXRpbmcvUmF0aW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVGV4dC9UZXh0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVG9vbGJhci9Ub29sYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVG9vbGJhci9Ub29sYmFyLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVmlld1dpdGhQb3B1cC9WaWV3V2l0aFBvcHVwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVmlld1dpdGhQb3B1cC9WaWV3V2l0aFBvcHVwLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVmlld1dpdGhQb3B1cC91c2VPbkNsaWNrT3V0c2lkZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvTGlzdGluZy9MaXN0aW5nLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9MaXN0aW5nL0xpc3RpbmdNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL0xpc3RpbmcvU2VhcmNoL0NhdGVnb3J5U2VhcmNoL0NhdGVnb3J5U2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9MaXN0aW5nL1NlYXJjaC9DYXRlZ29yeVNlYXJjaC9DYXRlZ29yeVNlYXJjaC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvTGlzdGluZy9TZWFyY2gvU2VhcmNoUGFyYW1zLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvU2VhcmNoUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGlicmFyeS9oZWxwZXJzL2dldF9hcGlfZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9saWJyYXJ5L2hlbHBlcnMvcnRsLmpzIiwid2VicGFjazovLy8uL2xpYnJhcnkvaGVscGVycy91cmxfaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9saXN0aW5nLmpzIiwid2VicGFjazovLy8uL3NldHRpbmdzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zZXR0aW5ncy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvTWludXNPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9QbHVzT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9jaGVja2JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2RyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2lucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvc2xpZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnMvcHJvbWlzZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaXN0b3J5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvc2h1ZmZsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWNvbnRlbnQtbG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kYXRlcy9pbml0aWFsaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGV2aWNlLWRldGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLW1hcHMvbGliL2NvbXBvbmVudHMvYWRkb25zL01hcmtlckNsdXN0ZXJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc3RpY2t5bm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLXN5c3RlbVwiIl0sIm5hbWVzIjpbIkdyaWRDYXJkIiwiY2xhc3NOYW1lIiwiZmF2b3JpdGUiLCJsb2NhdGlvbiIsInRpdGxlIiwicHJpY2UiLCJyYXRpbmciLCJlZGl0QnRuIiwidmlld0RldGFpbHNCdG4iLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJ0cmltIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsIkdyaWRDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInRoZW1lR2V0IiwiSW1hZ2VXcmFwcGVyIiwiRmF2b3JpdGVJY29uIiwiQ29udGVudFdyYXBwZXIiLCJMb2NhdGlvbkFyZWEiLCJUaXRsZUFyZWEiLCJQcmljZUFyZWEiLCJSYXRpbmdBcmVhIiwiTWV0YVdyYXBwZXIiLCJCdXR0b25Hcm91cCIsIkxvYWRlciIsImZpbGwiLCJhZGRBbGxDbGFzc2VzIiwicHVzaCIsImpvaW4iLCJkZWZhdWx0UHJvcHMiLCJMb2FkZXJXcmFwcGVyIiwiSG90ZWxNYXBNYXJrZXJDbHVzdGVyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJtYXJrZXJJbmRleCIsInNldE1hcmtlckluZGV4IiwiaG90ZWxEYXRhIiwiaW5mb1dpbmRvd1RvZ2dsZSIsImluZGV4IiwiZm9yRWFjaCIsIml0ZW0iLCJpZCIsImxhdCIsInBhcnNlRmxvYXQiLCJsbmciLCJ0aHVtYlVybCIsImltYWdlIiwidGh1bWJfdXJsIiwiZm9ybWF0dGVkQWRkcmVzcyIsInJhdGluZ0NvdW50IiwibWFwIiwic2luZ2xlUG9zdExvYWN0aW9uIiwiTWFrZXJJbWFnZSIsIk1hcCIsInByb3BzIiwibXVsdGlwbGUiLCJoYW5kbGVDbHVzdGVyZXJDbGljayIsImRhdGEiLCJtYXJrZXJDbHVzdGVyZXIiLCJnZXRNYXJrZXJzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImhlaWdodCIsIk1hcEluZm9XaW5kb3ciLCJvbkNsb3NlQ2xpY2siLCJ3aXRoU2NyaXB0anMiLCJ3aXRoR29vZ2xlTWFwIiwiTWFwV3JhcHBlciIsInByb2Nlc3MiLCJTaW5nbGVNYXBEaXNwbGF5IiwiSG90ZWxNYXBNYXJrZXJTaW5nbGUiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsInBhcml0aWFsVmlzaWJpbGl0eUd1dHRlciIsIm1vYmlsZSIsInRhYmxldCIsIlByb2R1Y3RDYXJkIiwiZ2FsbGVyeSIsInNsdWciLCJsaW5rIiwiZGV2aWNlVHlwZSIsImV2ZW50IiwidXJsIiwid2lkdGgiLCJvYmplY3RGaXQiLCJwb3NpdGlvbiIsIkxvYWRNb3JlIiwiaGFuZGxlTG9hZE1vcmUiLCJzaG93QnV0dG9uIiwiYnV0dG9uVGV4dCIsImxvYWRpbmciLCJsb2FkTW9yZUNvbXBvbmVudCIsImxvYWRNb3JlU3R5bGUiLCJTZWN0aW9uR3JpZCIsInRvdGFsSXRlbSIsImxpbWl0IiwiY29sdW1uV2lkdGgiLCJwYWdpbmF0aW9uQ29tcG9uZW50IiwicGxhY2Vob2xkZXIiLCJyb3dTdHlsZSIsImNvbHVtblN0eWxlIiwibiIsIk51bWJlciIsImxpbWl0cyIsIkFycmF5IiwiaSIsImFycmF5IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJib29sIiwib2JqZWN0IiwiZmxleEJveCIsImZsZXhXcmFwIiwibXIiLCJtbCIsInByIiwicGwiLCJqdXN0aWZ5Q29udGVudCIsIm10IiwidGhlbWVkIiwia2V5IiwidGhlbWUiLCJiYXNlIiwiY29tcG9zZSIsImJveFNpemluZyIsInNwYWNlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJmbGV4Iiwib3JkZXIiLCJhbGlnblNlbGYiLCJib3JkZXJzIiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwiQm94V3JhcHBlciIsImNzcyIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiQm94IiwiYW55IiwiYXMiLCJvbmVPZiIsImFycmF5T2YiLCJib3JkZXIiLCJib3JkZXJUb3AiLCJib3JkZXJSaWdodCIsImJvcmRlckJvdHRvbSIsImJvcmRlckxlZnQiLCJTaW5nbGVQYWdlTG9hZGVyIiwiUG9zdFBsYWNlaG9sZGVyIiwiUHJvZmlsZVBpY0xvYWRlciIsIkltYWdlQ2FyZExvYWRlciIsIkRhdGVSYW5nZVBpY2tlckJveCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImRhdGVGb3JtYXQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXBkYXRlU2VhcmNoRGF0YSIsInNldFN0YXJ0RGF0ZSIsImZvcm1hdCIsInNldEVuZERhdGUiLCJmb2N1c2VkSW5wdXQiLCJzZXBhcmF0b3IiLCJvbkRhdGVDaGFuZ2VGdW5jIiwiYmluZCIsIm9uRm9jdXNDaGFuZ2VGdW5jIiwicmVuZGVyIiwic3RhcnREYXRlSWQiLCJlbmREYXRlSWQiLCJzdGFydERhdGVQbGFjZWhvbGRlclRleHQiLCJlbmREYXRlUGxhY2Vob2xkZXJUZXh0IiwiZGlzYWJsZWQiLCJzaG93Q2xlYXJEYXRlcyIsImlzUlRMIiwib3JpZW50YXRpb24iLCJhbmNob3JEaXJlY3Rpb24iLCJ3aXRoUG9ydGFsIiwid2l0aEZ1bGxTY3JlZW5Qb3J0YWwiLCJzbWFsbCIsImJsb2NrIiwibnVtYmVyT2ZNb250aHMiLCJyZWd1bGFyIiwibm9Cb3JkZXIiLCJkZWZhdWx0Q2FsZW5kZXJQcm9wcyIsIm9uRm9jdXNDaGFuZ2UiLCJvbkRhdGVzQ2hhbmdlIiwiUmVhY3REYXRlc1N0eWxlV3JhcHBlciIsIlJlYWN0RGF0ZVdyYXBwZXIiLCJDb21wb25lbnROYW1lIiwiUmVhY3REYXRlc1dyYXBwZXIiLCJXaXRoRGlyZWN0aW9uIiwiRmF2b3JpdGUiLCJjb250ZW50Iiwib25DbGljayIsInRvZ2dsZVZhbHVlIiwidG9nZ2xlSGFuZGxlciIsInVzZVRvZ2dsZSIsImFkZEFsbENsYXNzIiwiaGFuZGVsQ2xpY2siLCJhZGRBbmltYXRpb24iLCJrZXlmcmFtZXMiLCJyZW1vdmVBbmltYXRpb24iLCJBZGRBbmltYXRpb24iLCJSZW1vdmVBbmltYXRpb24iLCJGYXZvcml0ZVdyYXBwZXIiLCJidXR0b24iLCJpbml0aWFsVmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwidG9nZ2xlciIsInVzZUNhbGxiYWNrIiwiSW5wdXRJbmNEZWMiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJJbnB1dEluY0RlY1dyYXBwZXIiLCJQb3J0YWwiLCJyZW5kZXJlcklkIiwiY29udGFpbmVyRWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VFZmZlY3QiLCJwb3J0YWxSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiUmF0aW5nIiwidHlwZSIsInJhdGluZ0ZpZWxkTmFtZSIsImZsb29yVmFsdWUiLCJyYXRpbmdWaWV3IiwiTWF0aCIsImZsb29yIiwibGlzdGluZ0NvbmRpdGlvbiIsInNob3dSYXRpbmdDb3VudCIsIlRleHRXcmFwcGVyIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsIlRleHQiLCJtIiwiVG9vbGJhciIsImxlZnQiLCJyaWdodCIsIldyYXBwZXIiLCJiZyIsIkNvbnRhaW5lciIsIkxlZnRTaWRlIiwiUmlnaHRTaWRlIiwiVmlld1dpdGhQb3B1cCIsInZpZXciLCJwb3B1cCIsIm5vVmlldyIsInN0eWxlIiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwicmVmIiwidXNlUmVmIiwidXNlT25DbGlja091dHNpZGUiLCJyYWRpdXMiLCJoYW5kbGVyIiwibGlzdGVuZXIiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZhZGVJbiIsIkxpc3RpbmdXcmFwcGVyIiwiU2hvd01hcENoZWNrYm94IiwiUG9zdHNXcmFwcGVyIiwiRml4ZWRNYXAiLCJMYWJlbCIsIkZpbHRlckFyZWEiLCJGaWx0ZXJFbGVtZW50c1dyYXBwZXIiLCJMaXN0aW5nTWFwIiwibWFwRGF0YSIsImlzRW1wdHkiLCJoaXN0b3J5IiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJ3aW5kb3ciLCJzZXJjaFJlZHVjZXIiLCJhY3Rpb24iLCJhbWVuaXRpZXMiLCJwYXlsb2FkIiwicHJvcGVydHkiLCJtaW5QcmljZSIsIm1heFByaWNlIiwicm9vbSIsImd1ZXN0IiwiQ2F0ZWdvcnlTZWFyY2hOZXh0IiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiU2VhcmNoQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInBhcnNlSW50IiwibG9jYXRpb25fbGF0IiwibG9jYXRpb25fbG5nIiwiZGlzcGF0Y2hDdXJyZW50IiwidXNlUmVkdWNlciIsImNvdW50Um9vbSIsInNldFJvb20iLCJjb3VudEd1ZXN0Iiwic2V0R3Vlc3QiLCJvbkNoYW5nZSIsInF1ZXJ5IiwibW9kaWZpZWRDdXJyZW50IiwiaGFzT3duUHJvcGVydHkiLCJkYXRlX3JhbmdlIiwicGFyYW1zIiwic2V0U3RhdGVUb1VybCIsInNlYXJjaCIsImhhbmRsZVJvb21HdWVzdEFwcGx5IiwiaGFuZGxlUm9vbUd1ZXN0Q2FuY2VsIiwiZGF0ZVJhbmdlQWN0aXZhdGVDbGFzcyIsInVuZGVmaW5lZCIsInByaWNlUmFuZ2VBY3RpdmF0ZUNsYXNzIiwiYW1lbml0aWVzTGVuZ3RoIiwicHJvcGVydHlMZW5ndGgiLCJzcGxpdCIsImdldEFtZW5pdGllcyIsIm5hbWUiLCJvcHRpb25zIiwiZ2V0UHJvcGVydHlUeXBlIiwibW9tZW50IiwiY2FsZW5kZXJJdGVtIiwicHJpY2VJbml0IiwiZSIsIkNhdGVncm95U2VhcmNoV3JhcHBlciIsIlJvb21HdWVzdFdyYXBwZXIiLCJJdGVtV3JhcHBlciIsIkFjdGlvbldyYXBwZXIiLCJsb2NhbGUiLCJpZGVudGlmaWVyIiwibGFiZWwiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwiU2VhcmNoUHJvdmlkZXIiLCJGZXRjaEFQSURhdGEiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIlByb2Nlc3NBUElEYXRhIiwiYXBpRGF0YSIsImZldGNoRGF0YSIsIlNlYXJjaGVkRGF0YSIsInByb2Nlc3NlZERhdGEiLCJyYW5kTnVtYmVyIiwicmFuZG9tIiwic2h1ZmZsZSIsInNsaWNlIiwiU2VhcmNoU3RhdGVLZXlDaGVjayIsIlBhZ2luYXRvciIsInBvc3RzIiwiR2V0QVBJRGF0YSIsImFwaVVybCIsInByb21pc2VzIiwicmVwbyIsImFwaVBhdGgiLCJhcGkiLCJlbmRwb2ludCIsInJlc3BvbnNlIiwicmVjZXZpZWREYXRhIiwiUHJvbWlzZSIsImFsbCIsImRpcmVjdGlvbiIsIndpdGhEaXJlY3Rpb24iLCJjcmVhdGVVcmwiLCJ1cmxEYXRhIiwia2V5cyIsIk9iamVjdCIsInN1YnN0cmluZyIsInNldFN0YXRlVG9VcmxfT05fTkVYVF9KU19ST1VURVJfUFVTSF9WRVJTSU9OIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwiZWwiLCJzZXRDaGlsZEVsbSIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm9uIiwib2ZmIiwiZW1pdCIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJGaWx0ZXJEcmF3ZXIiLCJkeW5hbWljIiwiTGlzdGluZ1BhZ2UiLCJzdGF0ZWtleSIsInNldFBvc3RzIiwiTElTVElOR19QQUdFX1BPU1RfTElNSVQiLCJzZXRMb2FkaW5nIiwic2hvd01hcCIsInNldFNob3dNYXAiLCJuZXdEYXRhIiwiaGFuZGxlTWFwVG9nZ2xlIiwic2V0VGltZW91dCIsIkxJU1RJTkdfUEFHRV9DT0xVTU5fV0lEVEhfV0lUSE9VVF9NQVAiLCJMSVNUSU5HX1BBR0VfQ09MVU1OX1dJRFRIX1dJVEhfTUFQIiwiY29sdW1uQ291bnQiLCJTSU5HTEVfUE9TVF9QQUdFIiwiZ2V0U3RhdGljUHJvcHMiLCJmaWxlUGF0aCIsImN3ZCIsImpzb25EYXRhIiwiZnMiLCJyZWFkRmlsZSIsIkpTT04iLCJwYXJzZSIsIkhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9NT0JJTEVfREVWSUNFIiwiSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX1RBQkxFVF9ERVZJQ0UiLCJIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfREVTS1RPUF9ERVZJQ0UiLCJIT01FX1BBR0VfU0VDVElPTlNfQ09MVU1OU19SRVNQT05TSVZFX1dJRFRIIiwiSE9NRV9QQUdFIiwiQUdFTlRTX1BBR0UiLCJMSVNUSU5HX1BPU1RTX1BBR0UiLCJBR0VOVF9QUk9GSUxFX1BBR0UiLCJBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0UiLCJBR0VOVF9QUk9GSUxFX0VESVRfUEFHRSIsIkFHRU5UX0lNQUdFX0VESVRfUEFHRSIsIkFHRU5UX1BBU1NXT1JEX0NIQU5HRV9QQUdFIiwiQUdFTlRfUFJPRklMRV9ERUxFVEUiLCJBR0VOVF9QUk9GSUxFX0ZBVk9VUklURSIsIkFHRU5UX1BST0ZJTEVfQ09OVEFDVCIsIkFERF9IT1RFTF9QQUdFIiwiUFJJQ0lOR19QTEFOX1BBR0UiLCJQUklWQUNZX1BBR0UiLCJMT0dJTl9QQUdFIiwiUkVHSVNUUkFUSU9OX1BBR0UiLCJDSEFOR0VfUEFTU1dPUkRfUEFHRSIsIkZPUkdFVF9QQVNTV09SRF9QQUdFIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBLG1DQUFtQztRQUNuQztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsY0FBYztRQUNkLElBQUk7UUFDSjs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDekhB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Ozs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG9GOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2xpc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9saXN0aW5nXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuLi9cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2xpc3RpbmcuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEdyaWRDYXJkV3JhcHBlciwge1xuICBJbWFnZVdyYXBwZXIsXG4gIEZhdm9yaXRlSWNvbixcbiAgQ29udGVudFdyYXBwZXIsXG4gIExvY2F0aW9uQXJlYSxcbiAgVGl0bGVBcmVhLFxuICBQcmljZUFyZWEsXG4gIFJhdGluZ0FyZWEsXG4gIE1ldGFXcmFwcGVyLFxuICBCdXR0b25Hcm91cCxcbn0gZnJvbSAnLi9HcmlkQ2FyZC5zdHlsZSc7XG5cbmNvbnN0IEdyaWRDYXJkID0gKHtcbiAgY2xhc3NOYW1lLFxuICBmYXZvcml0ZSxcbiAgbG9jYXRpb24sXG4gIHRpdGxlLFxuICBwcmljZSxcbiAgcmF0aW5nLFxuICBlZGl0QnRuLFxuICB2aWV3RGV0YWlsc0J0bixcbiAgY2hpbGRyZW4sXG59KSA9PiB7XG4gIGxldCBjbGFzc2VzID0gdmlld0RldGFpbHNCdG4gfHwgZWRpdEJ0biA/IGBoYXNfYnRuICR7Y2xhc3NOYW1lfWAgOiBjbGFzc05hbWU7XG4gIHJldHVybiAoXG4gICAgPEdyaWRDYXJkV3JhcHBlciBjbGFzc05hbWU9e2BncmlkX2NhcmQgJHtjbGFzc2VzfWAudHJpbSgpfT5cbiAgICAgIDxJbWFnZVdyYXBwZXIgY2xhc3NOYW1lPVwibWVkaWFfd3JhcHBlclwiPntjaGlsZHJlbn08L0ltYWdlV3JhcHBlcj5cbiAgICAgIDxDb250ZW50V3JhcHBlciBjbGFzc05hbWU9XCJjb250ZW50X3dyYXBwZXJcIj5cbiAgICAgICAge2xvY2F0aW9uICYmIDxMb2NhdGlvbkFyZWE+e2xvY2F0aW9ufTwvTG9jYXRpb25BcmVhPn1cbiAgICAgICAge3RpdGxlICYmIDxUaXRsZUFyZWE+e3RpdGxlfTwvVGl0bGVBcmVhPn1cbiAgICAgICAgPE1ldGFXcmFwcGVyIGNsYXNzTmFtZT1cIm1ldGFfd3JhcHBlclwiPlxuICAgICAgICAgIHtwcmljZSAmJiA8UHJpY2VBcmVhIGNsYXNzTmFtZT1cInByaWNlXCI+e3ByaWNlfTwvUHJpY2VBcmVhPn1cbiAgICAgICAgICB7cmF0aW5nICYmIDxSYXRpbmdBcmVhIGNsYXNzTmFtZT1cInJhdGluZ1wiPntyYXRpbmd9PC9SYXRpbmdBcmVhPn1cbiAgICAgICAgICB7dmlld0RldGFpbHNCdG4gfHwgZWRpdEJ0biA/IChcbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9XCJidXR0b25fZ3JvdXBcIj5cbiAgICAgICAgICAgICAge3ZpZXdEZXRhaWxzQnRufVxuICAgICAgICAgICAgICB7ZWRpdEJ0bn1cbiAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvTWV0YVdyYXBwZXI+XG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuXG4gICAgICB7ZmF2b3JpdGUgJiYgPEZhdm9yaXRlSWNvbj57ZmF2b3JpdGV9PC9GYXZvcml0ZUljb24+fVxuICAgIDwvR3JpZENhcmRXcmFwcGVyPlxuICApO1xufTtcblxuR3JpZENhcmQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBwcmljZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmF0aW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgZWRpdEJ0bjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIHZpZXdEZXRhaWxzQnRuOiBQcm9wVHlwZXMuZWxlbWVudCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRDYXJkO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5cbmNvbnN0IEdyaWRDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJi5oYXNfYnRuIHtcbiAgICAuYnV0dG9uX2dyb3VwIHtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4ICR7dGhlbWVHZXQoJ2JveFNoYWRvdy4yJywgJ3JnYmEoMCwgMCwgMCwgMC4xNiknKX07XG5cbiAgICAuY29udGVudF93cmFwcGVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJi5oYXNfYnRuIHtcbiAgICAgIC5tZXRhX3dyYXBwZXIge1xuICAgICAgICAucmF0aW5nIHtcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XG4gICAgICAgIC5idXR0b25fZ3JvdXAge1xuICAgICAgICAgIHRvcDogMTlweDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cblxuICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3QtbGlzdCB7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgPiBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtbGlzdCB7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZThlYztcbiAgfVxuXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtIHtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICB9XG5cbiAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdyB7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAyMiU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG5cbiAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tbGVmdCB7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byBsZWZ0LFxuICAgICAgdHJhbnNwYXJlbnQgMCUsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMjUpIDEwMCVcbiAgICApO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byBsZWZ0LFxuICAgICAgICB0cmFuc3BhcmVudCAwJSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLXJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXG4gICAgKTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMjUpIDEwMCVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC1saXN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMzAlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIGJvdHRvbSxcbiAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXG4gICAgKTtcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4zcyBlYXNlO1xuICB9XG5cbiAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4zJywgJyNFOUU4RTgnKX07XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgfVxuICB9XG5cbiAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC0tYWN0aXZlIHtcbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZhdm9yaXRlSWNvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogOHB4O1xuICB6LWluZGV4OiA5O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xuYDtcblxuZXhwb3J0IGNvbnN0IExvY2F0aW9uQXJlYSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjEnLCAnIzkwOTA5MCcpfTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGVBcmVhID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogNHB4IDAgNXB4O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBtYXJnaW46IDRweCAwIDVweDtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJpY2VBcmVhID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuYDtcblxuZXhwb3J0IGNvbnN0IFJhdGluZ0FyZWEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICAvKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cdFx0bWFyZ2luLXRvcDogN3B4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdH0gKi9cblxuICBzcGFuIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gIGkge1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgZmlsbDogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gIH1cblxuICBzdHJvbmcge1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIC8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdH0gKi9cbiAgfVxuXG4gIC5hbnQtcmF0ZSB7XG4gICAgLyogbWFyZ2luLXRvcDogLTJweDsgKi9cbiAgICAuYW50LXJhdGUtc3RhciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNZXRhV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLXRvcDogN3B4O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4gID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjEnLCAnIzM5OUM5RicpfTtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRDYXJkV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExvYWRlcldyYXBwZXIgZnJvbSAnLi9Mb2FkZXIuc3R5bGUnO1xuXG5jb25zdCBMb2FkZXIgPSAoeyBmaWxsLCBjbGFzc05hbWUgfSkgPT4ge1xuICAvLyBkZWZhdWx0IGNsYXNzTmFtZVxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydsb2FkZXInXTtcblxuICAvLyBhZGQgbmV3IGNsYXNzIHVzaW5nIGNsYXNzTmFtZSBwcm9wXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExvYWRlcldyYXBwZXIgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX0+XG4gICAgICA8c3ZnIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDAgMFwiPlxuICAgICAgICA8Y2lyY2xlIGZpbGw9e2ZpbGx9IHN0cm9rZT1cIm5vbmVcIiBjeD1cIjZcIiBjeT1cIjUwXCIgcj1cIjZcIj5cbiAgICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxuICAgICAgICAgICAgZHVyPVwiMXNcIlxuICAgICAgICAgICAgdmFsdWVzPVwiMDsxOzBcIlxuICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgIGJlZ2luPVwiMC4xXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgPGNpcmNsZSBmaWxsPXtmaWxsfSBzdHJva2U9XCJub25lXCIgY3g9XCIyNlwiIGN5PVwiNTBcIiByPVwiNlwiPlxuICAgICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXG4gICAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgICB2YWx1ZXM9XCIwOzE7MFwiXG4gICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgYmVnaW49XCIwLjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvY2lyY2xlPlxuICAgICAgICA8Y2lyY2xlIGZpbGw9e2ZpbGx9IHN0cm9rZT1cIm5vbmVcIiBjeD1cIjQ2XCIgY3k9XCI1MFwiIHI9XCI2XCI+XG4gICAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcbiAgICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICAgIHZhbHVlcz1cIjA7MTswXCJcbiAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICBiZWdpbj1cIjAuM1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9jaXJjbGU+XG4gICAgICA8L3N2Zz5cbiAgICA8L0xvYWRlcldyYXBwZXI+XG4gICk7XG59O1xuXG5Mb2FkZXIucHJvcFR5cGVzID0ge1xuICAvKiogQ2xhc3NOYW1lIG9mIHRoZSBMb2FkZXIgY29tcG9uZW50LiAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIEFkZCBMb2FkZXIgY29sb3IgdXNpbmcgZmlsbCBwcm9wLiAqL1xuICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZmlsbDogJyMwMDg0ODknLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IExvYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDUycHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcldyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICdyZWFjdC1nb29nbGUtbWFwcyc7XG5pbXBvcnQgSG90ZWxJbmZvV2luZG93IGZyb20gJy4vTWFwSW5mb1dpbmRvdyc7XG5pbXBvcnQgTWFrZXJJbWFnZSBmcm9tICcuL2hvdGVsTWFwTWFya2VyLnBuZyc7XG5cbmNvbnN0IEhvdGVsTWFwTWFya2VyQ2x1c3RlciA9ICh7IGxvY2F0aW9uIH0pID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21hcmtlckluZGV4LCBzZXRNYXJrZXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgbGV0IGhvdGVsRGF0YSA9IFtdO1xuXG4gIGNvbnN0IGluZm9XaW5kb3dUb2dnbGUgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgc2V0TWFya2VySW5kZXgoaW5kZXgpO1xuICB9O1xuXG4gIGxvY2F0aW9uICYmXG4gICAgbG9jYXRpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaG90ZWxEYXRhLnB1c2goe1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgbGF0OiBwYXJzZUZsb2F0KGl0ZW0ubG9jYXRpb24ubGF0KSxcbiAgICAgICAgbG5nOiBwYXJzZUZsb2F0KGl0ZW0ubG9jYXRpb24ubG5nKSxcbiAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgIHRodW1iVXJsOiBpdGVtLmltYWdlLnRodW1iX3VybCxcbiAgICAgICAgZm9ybWF0dGVkQWRkcmVzczogaXRlbS5sb2NhdGlvbi5mb3JtYXR0ZWRBZGRyZXNzLFxuICAgICAgICBwcmljZTogaXRlbS5wcmljZSxcbiAgICAgICAgcmF0aW5nOiBpdGVtLnJhdGluZyxcbiAgICAgICAgcmF0aW5nQ291bnQ6IGl0ZW0ucmF0aW5nQ291bnQsXG4gICAgICB9KTtcbiAgICB9KTtcblxuICByZXR1cm4gaG90ZWxEYXRhLm1hcCgoc2luZ2xlUG9zdExvYWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TWFya2VyXG4gICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgIGljb249e01ha2VySW1hZ2V9XG4gICAgICAgIHBvc2l0aW9uPXtzaW5nbGVQb3N0TG9hY3Rpb259XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGluZm9XaW5kb3dUb2dnbGUoc2luZ2xlUG9zdExvYWN0aW9uLmlkKX1cbiAgICAgID5cbiAgICAgICAge2lzT3BlbiAmJiBtYXJrZXJJbmRleCA9PT0gc2luZ2xlUG9zdExvYWN0aW9uLmlkID8gKFxuICAgICAgICAgIDxIb3RlbEluZm9XaW5kb3dcbiAgICAgICAgICAgIGRhdGE9e3NpbmdsZVBvc3RMb2FjdGlvbn1cbiAgICAgICAgICAgIG9uQ2xvc2VDbGljaz17KCkgPT4gaW5mb1dpbmRvd1RvZ2dsZShzaW5nbGVQb3N0TG9hY3Rpb24uaWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgJydcbiAgICAgICAgKX1cbiAgICAgIDwvTWFya2VyPlxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG90ZWxNYXBNYXJrZXJDbHVzdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE1hcmtlckNsdXN0ZXJlciBmcm9tICdyZWFjdC1nb29nbGUtbWFwcy9saWIvY29tcG9uZW50cy9hZGRvbnMvTWFya2VyQ2x1c3RlcmVyJztcbmltcG9ydCBNYXBXcmFwcGVyIGZyb20gJy4vTWFwV3JhcHBlcic7XG5pbXBvcnQgSG90ZWxNYXBNYXJrZXJDbHVzdGVyIGZyb20gJy4vTGlzdGluZ1BhZ2VNYXAnO1xuaW1wb3J0IEhvdGVsTWFwTWFya2VyU2luZ2xlIGZyb20gJy4vU2luZ2xlUGFnZU1hcCc7XG5cbmNvbnN0IE1hcCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG11bHRpcGxlLCBsb2NhdGlvbiB9ID0gcHJvcHM7XG4gIGNvbnN0IGhhbmRsZUNsdXN0ZXJlckNsaWNrID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBtYXJrZXJDbHVzdGVyZXIgPSBkYXRhLmdldE1hcmtlcnMoKTtcbiAgICBjb25zb2xlLmxvZyhgQ3VycmVudCBjbGlja2VkIG1hcmtlcnMgbGVuZ3RoOiAke21hcmtlckNsdXN0ZXJlci5sZW5ndGh9YCk7XG4gICAgY29uc29sZS5sb2cobWFya2VyQ2x1c3RlcmVyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bXVsdGlwbGUgJiYgbXVsdGlwbGUgPT09IHRydWUgPyAoXG4gICAgICAgIDxNYXBXcmFwcGVyXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc0MDBweCcgfX0gLz59XG4gICAgICAgICAgbWFwRWxlbWVudD17PGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJyB9fSAvPn1cbiAgICAgICAgICBkZWZhdWx0Wm9vbT17N31cbiAgICAgICAgICBkZWZhdWx0Q2VudGVyPXt7XG4gICAgICAgICAgICBsYXQ6IDQxLjg4NTgsXG4gICAgICAgICAgICBsbmc6IC03NS43MjIzLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TWFya2VyQ2x1c3RlcmVyXG4gICAgICAgICAgICBncmlkU2l6ZT17NjB9XG4gICAgICAgICAgICBhdmVyYWdlQ2VudGVyXG4gICAgICAgICAgICBkZWZhdWx0RW5hYmxlUmV0aW5hSWNvbnM9e3RydWV9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbHVzdGVyZXJDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SG90ZWxNYXBNYXJrZXJDbHVzdGVyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgICA8L01hcmtlckNsdXN0ZXJlcj5cbiAgICAgICAgPC9NYXBXcmFwcGVyPlxuICAgICAgKSA6IChcbiAgICAgICAgPE1hcFdyYXBwZXJcbiAgICAgICAgICBjb250YWluZXJFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzQwMHB4JyB9fSAvPn1cbiAgICAgICAgICBtYXBFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19IC8+fVxuICAgICAgICAgIGRlZmF1bHRab29tPXs4fVxuICAgICAgICAgIGRlZmF1bHRDZW50ZXI9e3tcbiAgICAgICAgICAgIGxhdDogNDAuNzA2ODc3LFxuICAgICAgICAgICAgbG5nOiAtNzQuMDExMjY1LFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8SG90ZWxNYXBNYXJrZXJTaW5nbGUgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgICAgICA8L01hcFdyYXBwZXI+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEluZm9XaW5kb3cgfSBmcm9tICdyZWFjdC1nb29nbGUtbWFwcyc7XG5pbXBvcnQgUmF0aW5nIGZyb20gJ2NvbXBvbmVudHMvVUkvUmF0aW5nL1JhdGluZyc7XG5pbXBvcnQgR3JpZENhcmQgZnJvbSAnLi4vR3JpZENhcmQvR3JpZENhcmQnO1xuXG5jb25zdCBNYXBJbmZvV2luZG93ID0gKHsgZGF0YSwgb25DbG9zZUNsaWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SW5mb1dpbmRvdyBpZD17ZGF0YT8uaWR9IG9uQ2xvc2VDbGljaz17b25DbG9zZUNsaWNrfT5cbiAgICAgIDxHcmlkQ2FyZFxuICAgICAgICBjbGFzc05hbWU9XCJpbmZvX3dpbmRvd19jYXJkXCJcbiAgICAgICAgbG9jYXRpb249e2RhdGE/LmZvcm1hdHRlZEFkZHJlc3N9XG4gICAgICAgIHRpdGxlPXtkYXRhPy50aXRsZX1cbiAgICAgICAgcHJpY2U9e2AkJHtkYXRhPy5wcmljZX0vTmlnaHQgLSBGcmVlIENhbmNlbGxhdGlvbmB9XG4gICAgICAgIHJhdGluZz17XG4gICAgICAgICAgPFJhdGluZ1xuICAgICAgICAgICAgcmF0aW5nPXtkYXRhPy5yYXRpbmd9XG4gICAgICAgICAgICByYXRpbmdDb3VudD17ZGF0YT8ucmF0aW5nQ291bnR9XG4gICAgICAgICAgICB0eXBlPVwiYnVsa1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICA8aW1nIHNyYz17ZGF0YT8udGh1bWJVcmx9IGFsdD17ZGF0YT8udGl0bGV9IC8+XG4gICAgICA8L0dyaWRDYXJkPlxuICAgIDwvSW5mb1dpbmRvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcEluZm9XaW5kb3c7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFNjcmlwdGpzLCB3aXRoR29vZ2xlTWFwLCBHb29nbGVNYXAgfSBmcm9tICdyZWFjdC1nb29nbGUtbWFwcyc7XG5cbmNvbnN0IE1hcCA9IHdpdGhTY3JpcHRqcyhcbiAgd2l0aEdvb2dsZU1hcCgocHJvcHMpID0+IDxHb29nbGVNYXAgey4uLnByb3BzfT57cHJvcHMuY2hpbGRyZW59PC9Hb29nbGVNYXA+KVxuKTtcblxuY29uc3QgTWFwV3JhcHBlciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNYXBcbiAgICAgIGdvb2dsZU1hcFVSTD17cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dPT0dMRV9NQVBfQVBJX0tFWX1cbiAgICAgIGxvYWRpbmdFbGVtZW50PXs8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDEwMCVgIH19IC8+fVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L01hcD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXJrZXIgfSBmcm9tICdyZWFjdC1nb29nbGUtbWFwcyc7XG5pbXBvcnQgSG90ZWxJbmZvV2luZG93IGZyb20gJy4vTWFwSW5mb1dpbmRvdyc7XG5pbXBvcnQgTWFrZXJJbWFnZSBmcm9tICcuL2hvdGVsTWFwTWFya2VyLnBuZyc7XG5cbmNvbnN0IFNpbmdsZU1hcERpc3BsYXkgPSAoeyBsb2NhdGlvbiB9KSA9PiB7XG4gIGxldCBob3RlbERhdGEgPSBbXTtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW21hcmtlckluZGV4LCBzZXRNYXJrZXJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBpbmZvV2luZG93VG9nZ2xlID0gKGluZGV4KSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIHNldE1hcmtlckluZGV4KGluZGV4KTtcbiAgfTtcblxuICBob3RlbERhdGEucHVzaCh7XG4gICAgbGF0OiBsb2NhdGlvbj8ubG9jYXRpb24ubGF0LFxuICAgIGxuZzogbG9jYXRpb24/LmxvY2F0aW9uLmxuZyxcbiAgICBpZDogbG9jYXRpb24/LmlkLFxuICAgIHRpdGxlOiBsb2NhdGlvbj8udGl0bGUsXG4gICAgdGh1bWJVcmw6IGxvY2F0aW9uPy5pbWFnZS50aHVtYl91cmwsXG4gICAgZm9ybWF0dGVkQWRkcmVzczogbG9jYXRpb24/LmxvY2F0aW9uLmZvcm1hdHRlZEFkZHJlc3MsXG4gICAgcHJpY2U6IGxvY2F0aW9uPy5wcmljZSxcbiAgICByYXRpbmc6IGxvY2F0aW9uPy5yYXRpbmcsXG4gICAgcmF0aW5nQ291bnQ6IGxvY2F0aW9uPy5yYXRpbmdDb3VudCxcbiAgfSk7XG5cbiAgcmV0dXJuIGhvdGVsRGF0YS5tYXAoKHNpbmdsZVBvc3RMb2FjdGlvbiwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1hcmtlclxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBpY29uPXtNYWtlckltYWdlfVxuICAgICAgICBwb3NpdGlvbj17c2luZ2xlUG9zdExvYWN0aW9ufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaW5mb1dpbmRvd1RvZ2dsZShzaW5nbGVQb3N0TG9hY3Rpb24uaWQpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7aXNPcGVuICYmIG1hcmtlckluZGV4ID09PSBzaW5nbGVQb3N0TG9hY3Rpb24uaWQgPyAoXG4gICAgICAgICAgPEhvdGVsSW5mb1dpbmRvd1xuICAgICAgICAgICAgZGF0YT17c2luZ2xlUG9zdExvYWN0aW9ufVxuICAgICAgICAgICAgb25DbG9zZUNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGluZm9XaW5kb3dUb2dnbGUoc2luZ2xlUG9zdExvYWN0aW9uLmlkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAnJ1xuICAgICAgICApfVxuICAgICAgPC9NYXJrZXI+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5jb25zdCBIb3RlbE1hcE1hcmtlclNpbmdsZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPFNpbmdsZU1hcERpc3BsYXkgey4uLnByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsTWFwTWFya2VyU2luZ2xlO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUU0QUFBQmJDQVlBQUFEZHNiTTFBQUFBQVhOU1IwSUFyczRjNlFBQUQ4VkpSRUZVZUFIdFd3bVVGT1VSL25xR1hYYTVCR0haNVZDNUJKRWJKWUFZUlVBNWxDZ0tpRVNNNXZtZVBveEduejVRSW5JTFVRUmpJaHFTRUoveENCcEE1SHBjQWdLeUhBSUNJckFjQW5Jc3NBZ3MxN0k3MDZuYTNwcjVwNitaMlprZGRwT3Q5M3JxUDZycXIvcW0vdTYvdS84R3lxa2NnWElFeWhINDMwVkF1OHFoeFRxK2ZyWDhqOVh4YVAwT04xNjQvbkJBaGV1UDFsOUgrWENPT2lwRzJXRTNqb1pod3lxanlyVzlvV20zUXRQVHlHWWFkTlNHUmh4YUhlaTZqL3BPRWo5QjlaUFVmaExRajhHbmI0V2V0d0NqUjE4a0hUdXc3TnFpZE5sZDNDNGdkNDNvZXMzMk5RcTJGandWZndXUDlnQ0ZmRGNCa3h5ZHlZQjBIdWt2Qlh4ZjRDSyt3TVFSUDFPUEdUQnpQYUFjYThFY1dLejJSRisxYTVUSFRyeUZRSnBFQWwySmUwUXdUdHhIV2JrQ3ZvS1JHUDNxaGlLYkttaHFPUzVEcWdIR3c2RFpIbVhZaEphbzRCMVBVNjF2UEFZSWIwT2Zod0wveXhnOVloZkptZ0V6MThPYmM1QXdCK29nRmxHemFvc0FtOWdBWG95RjVobE0ybXBmUk1aaUV0SjFQK2wvQXVTL2hwRWpEMUpaQlV3dEYzdVllQVNrMmpES1l5WU9vSFBZQnpRbFU4SjVsbDY1RW5vMGJJQjI2ZW1vVTZVeTZsYXRRcndLNmhGbk9uYitBbzZlUDQranVlZHhKRGNYMzJXZndPTDlCM0R5NHFYQ2Z0Y2ZYYjhNZjhGZ2pIcDFicEdjZ0NiY1ZkMnRVdzNhVGM2cFQ5WG5Fei9ncmZnYVpka29Kd1Z1NzNiRDllamRwQkh1YWRRUXJXdnp4VFE2NHFpM256aUpKUVRnZ3IzN3NQTGdZWGNEdW44TVJyNHl0a2hJQlUwdHU5c3c5YXFCbTdvaXFvcStocGRlU2tYMVdoL1RyTHpmU2JObFdpMjgzN3NudWx4WHowbWtXTzFyRHgvQjA0c1dZOGZKVXk3NitsemtaRCtDcVZQelNFZ0FFKzZpWjk4bGdkdjN1cmVLTG1kYUJpcWtMaWJ4bG5ZcTlhdFd4WVN1djhTUTFpMUw3R1RuMTNYOGEvdjNHUDdWU21SZjRPV2REZW42RnZndTl5Ri9hVjBZRzNnU3ZNMG9qazJxVGxHbXBYMUQwcTN0TkhyU2RQenN3ZnRScldKeGwydDJWcDNienVWZHdjRFpjd3ZQZ3c1U1czSG01TzJZUEpsUGttckdxV1VIMVdCekxPc3BCbEJEdFZvemlWdEE0ODdYZm5rYkZqMHlJR0dnY1ZqOEJ5MGMxQjkvNk5LWnEzYlVGdGVrMFJXM01QblZKTENUZFd6ek92YllkOGhBQm1oako0Mm1xK2VUWnRGcXljbVlPL0JCUE5tMlRZbE5UZk9ZYWwzVE5IUnJjQU51clpPQkwvZnNSYjZmVnljS2FXaUd1N3ByV0xGOEpiV3FNU2xDN2tWUmNwY3lla1hXNEdQR1B3UnYwbWRteGNwSlNjaDhZZ2o0UWxBYWFCdGRmYnQ4OEJITzUrZGIzZkg1QjJIVUs1OFhkY2hVRlc2VlYxb2luYW9DbXFFNllrUWFnZllQeFU1aGtZM05HZEN2MUlER1R2Rnk1ei85SDRCdG9CNXRPbDRjZlcyaDg4R2YwRmlEN1NFbFczc2hFcUVWTnFvaHBlcFk0bFZEdTRESlBicmg3b1lOek0xWHZjNFhxRW5kdWxyOTBMUnF1S2JpT09vdzRySktPTFpFY282VGY4QXdQbnBDYzNpOWZ5OGFMR0I0Y0l2bWVMUEhYWUY2YVN2dzJuSGZ6eitEcDI0SWFWbzczSEg3VEt4Y21VUHRhcXdoWXVaS3RCa0h1bUYvVnhtZzBGNWR1a1dhMGJlUDJYYXBxLy90M2w3Z1d6d1RlZWx1NXkxcUU5Qk0zZmJWY01DSk1lYTAwSDI5SjdFN3pLYkcwK0syb2plUzVEVnJKcmFlVXFFQ0xjUXQ3bE5Jbmo0WU02RXJlV1BFYWJnbHNkczZXY0cyMWFuUnF6MXI3cnE1VmswODNxYVZ1VGxzL2UwTm03QTc1M1JBanUwODIrR1dRTjJ1TUdiMVdoeW5tMzZoWDlTdGd5ZWlISnZsMzF5M0FidFBCOGN1dEtkNVh5UytVbXlINDI3QUNlTEd2L0Q4ODFYcEQrbG1OdmdXWFJCRTBOem5WdWYxMVlxRGh3SWk5elJzRUJhNG1kL3Z3Zzg1T1FHZDNDdFhvZ2JPUTJ1OHlYUXU3dnZacklDZHdvS0c3aGc2TkJYVHBzbGpGMTZXY0dpMnk1TndVelZvdkViNnZlYkgzTmRYcTRwZWpSc0daY3BJNmI0Ykc2UEJOZFZDdmVWSCtPblg5UTF0ZEs2RkE4N0lOa1plMC9xWnpReWlLMmxacGY3Tm0xbGQ1L2Nnd2ZPYzYwUnlBaTVVYWNDQUpMcTFzbHcyK3pWcmFoMjhqTFE4ME5UR2Q0MGU3M09zb1JTS1JWR2ZFM0NocWkxYTk2YUdWTFV4bzNKbGRLeFhWMjBxVStYYmFGMVhNOVh5Z0RvVnpkdjBpQ1FRTitDVWFWcWhyZGxZdjJZM0Z1dWlZTFp6dGVvYzNJTjJNOGJyN1VCZHdkZ2RITFFEemlZMTlReXpmbnQ2OGxEV3FRTXRaNnlrMTdhMldYUEViVGtTMU5jOEZtTTJLL0NnZkRGS3graUZ6RWYwQk5lTnp1YnhVKy80VVczclhRVGxtalZXdXhFakFZNnVxRWczSzZmVE9TNmV0SjNlRnd6NWNrRThUWWExWlJ1REVTdlBPdHYxbXhpMW02cmNKOU8xaUdzbERwdzRsRWh1bTNIUTBvcDhNR0VRNnBrVGNDd2xpbHlxSDZxR3d2ZWY1cmF5VnE5ZHlYTERUeUhvYXBJRU1UQUZGOGxVWlpVcmRJU3NiNjc0ZkVqeXVPRnVHaWxNdFJVOU1SN1d1YU9yMVBDdlZoVytuSFlWaXIwem9xQWlBMDdIY2NxNnhxcFAyUmN1b0ZIMTZtcFRUR1YrZS85b3F4YXVObDVmbXhsWDRJNVRERGFVYmRObWFZb0lYY0Ivd3F5cFBxVXc5NVdWdW4wTSt2RkkvSThNT0IwVzREamp5anJaQXFkcmNjdzQzZm92T0w0dEwwTm8yazlWYTZ4MklVV1djZUN0cEtIMDdiR0lNanBVcVpUVmVPZVRoZng2SERQT1Y3REZQTURjUFZubXBqSlhuN043ajlYbkF0ODJhNk8xeFMzamdpdm56TFZMYUtzb0wwa0N4UHZUTmgrUDZNOEo2SlNtd3Nhang1Qno2WEtvU3h6amh0VkxsY1lnQmtvakY1MkFFd1dETDFtU1Q4QXROK2xpZnRaZWMxT1pxYytuZlhVVzB2V2w0RmdOQ3NYQUpPd0VuQ3BtR1BEN0ZxcU5YSjZmWlRPNFdhaVUxdWZST3c4TEZSVEl6YktBWmhHUkJydGJDbWxqTG9jSFR6OWZGL1hySEJCRjRlc2VmeFNkeXRnRHpmVkhqcUlUN1NleDBLRjlkVEY5T3I4TjRsMDZESjRjTEJvQ3BsM0doUWl3QnBHTzk5OCtCdDF2T1hFT1hiVEVrQ2hEdjAvYithenIzeEpvL003UVBuNVRmSGJBaVlpZ0xZWjA1Ri81aTNRSzMwS1hkTjRKV1Zib2cyM2JzZFZ1R1pLWDl4N0ZFSXpWS0V2ZEVwNGJjS3F3WVdEc3FBL3BJckZWN2VEeXkzVHpuVWMzL2FXZEx0SldyMkhMVjFyZDFQWHZNSDZVekYxSHNGUkZKK0RzbEkyMjg3bS9WdzF3bWJmVFA3V1F0d0NYYm5xTUhwVGFidk0vZC9aWjhwempjNDdiRkpyYmhnKzVTSWlLVVYrNytnaTY5cUJkME5wTjBzR2NWK0ZWa3BOd1cvMTZhbk9wS2IreGJqM2UyYmpaNm8rdllCWW1qUG16MGlFQTJvRVlFSFBLdUlDQVVoQ0RRUGFKNGRRdTY1MkF5SENhQm92MjdRL1VTMHRoNllFZkMwOG5OdjdrNFdqMkswWHR3ZmhzQk0xTmJzQ3BpS3RHZGJ3NzVTRHk4bjVuTnNiWDhJR3o1bUxuS2I2aWx3N2lieC82ZlQ3SGRnNVNETS9ocis4Y0lrOGxWalZPRGtEYUxjRzRUVlVXbHVrcTZ6a3hvT0hyRmR0d1I5ZHE4SGhESHR0ZW9ZM0svTGFxUTkwTU5Lb1J2d2VkTW5BMGZCbGwydDBmejhRRnUvMi9CUVZUTVhia2xDSjdFUU1tNDRjRGp1VUVQTkVKdHUzZHN4enRPN1NqODkyTmFpZGZZVC9ac1JNMVVsS3UydHYrS2VzMzRyRzVDNUJuM25IT2p2cjlDL0hQNlUvaHpCa0J6TXhaeWpIYnVETWE0Q1RyZ2tDZU93ZFVTcG1IK3RmM0lmRFMyYUFRajdwbzN3RWNPbnNPOTlMdUlONWVsUWppZHlHL21iY1Frek0zMmtldTY5dXhlWDFmWkdieU9Wb0FpOXExU0lCam84NVJaMlg1Y0VPVGVhaFJuYjkydHJ5NDVzWG01ei9zS3Z3YXNEbHRIaXhKbXIxckR4NmE5WVh6UjNHOEJ2MHg2MzU4K3VsWjhrTkFNM04ya2R0Y3lSbVFVRFdSVXptWCtlQUxERzNMNjE0WmQzWmZSZWM4eHpjdUhXbkxBVzlFalBkSGNLc09IY1pMeTFaZ2s5dkRWYjl2UHI1YU1vUTJTZk96SkFiRzdYNDBic0RST0lHc000UEh3QmxIV3BvSHo3eXdualpZMzh3S1R0UzhaazMwYmRvWTl6VnBBdDQxNUkxeUd2dm9nN2UxaDM4cWZEckRUMmpVWFpxMll4YjRsdEFYMDd5L1Q4QVNMdG5HYWdLV2NGdFQwaWdnU0QwY0Yzbm1VdWJwem1YbURLQVhJOGZPUlhMeW5UUjFxZXBPTlZJcTBxN09SbWlma1E3ZXZTNGYrdGFuM1o3OFJTRHZLZUdQZlBtRFgvN1FseC9aODFyeExIM3NGcFpJSHdYNUN6Rm01TU1reTJDcGh3REVYQzJITmNzQzRTTUxOYVBLYzVrUFk2b2FuTi9UTW9CZXZEeHlIQ3FsRHFXcFM5V3JRSHcxdlhUeERVd2M5enFOempmU0RGcEJFVmVCa2pKMUJRRGtzaXNWSnlvVlBEWXVkUUhTQUhQTjE2dlFwbDAya2l2ZVF5SzhGZGJWa2JoMStna0hIMTFhVDU5K0FaTW5UU083NWl3VG9KaExtWWRYeTF4M3BlSUFKd1lGQ1pVYm9Fa21abjd6UFc1cXNSK3BxVDNwcVlxbkVMeVNBcENuSlQraDhma3U0cWNqdjhWNzcvQjMrQXdhQXlMZ2NWazlxQm9kWUt6QUZBdHdyTTlBc1NQTTFVTXVHQm8yYmNoQzR5WTdVYlVhWlI3dFAvRlRjQnlrVUhHQkZCdHNqNmNsMS8yK1U4amFNd2dmemxoSDVzMmdTWjFIRmdlRWl6Y1I4M2dBSjRNeGNFd0NvSlE5MkxMNUlHcW5yMFd0Mm4yb01jWDR6em5Rb29BNWFBRkNPQU1xWmVsWDVUbTdDdXM4REpIUGZ4Q2IxZzNFbk5uOHpvOUJJb0hBdVkzckFoenptQ2xXNE5nQk0xRFNKdHdBZE9lT0U2aGVZeFhTTTNyUmxLM0VuUUZTZ1dFdytCQmdwTTZjU1dTTm12SHI4MjNIL1BrUFk4MnFZOVFnZ0FsblJUNDR1OVFNVTh2VUZSM0ZDemluVVJrMGR0QUFkL2NQT1VoT1dZcjY5YnZDNDZsdU9lZHhscmtkTW9vcWsxK3dudTQ3ZjQyczNXZW9XOERpcTZlVTdZQ0xDVFIySXg3QXNSMGpxN2dVU21xN0FlRCt2V2VSZTNZQm1qUzlnOEF6UHFOV2dZaWtMR1BrWFY2SWQ5OStDcWRPWGFRbUJvcnZQd1V3NW5hZ1VYUHNGQy9nMkJNVkpDbEx0cW1lMHFyMjJHV2NPRDRQTjdmcVRPQmx1R2FaRTVBWExzekFIeWNNbzJkcXZCTG1ESk1qSEhBeFp4c0hFMC9nMko0QXhtVWhjVlFGVWFjc3VVTFQ2MHUwYXRzY1NSVWFpWEJZcm1rNlR1ZU13NVEzcHBJc2c2UUNKbE5VTW8wNWo2djZRTlhZS2Q3QXNVZDI0SW1uYWhCQWJtNCtObVl1UUlkT2paQ1UxQ3g4NXRHVzJwK09QSWRwZi9vM0dSVEFoS3VaeHVPVUdHZ2NURWtBeDNiZHdPTitKaU1MQ2dyOFdMMXFFVHAycm9PazVGWkdsOTJ2ZmdsN3M0Wmd4dlRsMUN1WkpaeEJZNkNFeXg5a2pDRmoyWmt0Wmx0SkFjZnUySUVuZ1ZqZFhmTTFQMDMyMFYxR0Ywdm1RYy9COW0yRDhlbEhtMGlSd1ZFQjQ3b0FwbWFaakNYY09tWU1MU1VKSEx0bEI1NjRLd0VGWmRhdDJZQzI3WStqVXFVZUJKNXhmK3VuaGUzbTlmMHhlOVl1VWhTUUJEdzF5eElHR2dkUTBzRHhHRUZndUJhT010ZnVRTXMyZXdtOFhyUVEzbzdGUy9wajJlS2pwS2FDSm1VR1N3NytJOVFqM0VneDlVY1hWUEdIa25HWXl5SDNzL3puY1ptNWxEMTQ4cGxPV0wxc0czYnY1bDNhRElnS2xscm1Qc2syS2dhdW9Gd3VNWktBU213QXhiQ01KY0F4Ri9BRU9MVXVxZ0tNWkJhREptWHBZODRrM0tpVjRHOWtINGpFeHdGelVGSm5Mb2NBSitEeXlOd25HU1dBQ1JjOWtXT2VFRXJFT1M1Y0lKS0pMTWRBTURrQnBiWmZOZERZUWRWcHJpZVNaR3pKTHVhY2NVelNaOVNDR1NsZ0NlZCtBVnRrRThMTkRpWmtVR1VRR1orNVhabEZCUmc3c0tSUE1abVlvamlibU5Ic1IxRjlrTEp3MFJDQXpGejZFODdORGliY0FXWEFTSDBSOEJUVnhCY2pkVGFSbmpuNVZDb0FTeVFRNVdPVkkxQ09RRGtDNVFpVUkvRC9nY0IvQVdURkdPaVhINkVEQUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBGaUV4dGVybmFsTGluayB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCc7XG5pbXBvcnQgUmF0aW5nIGZyb20gJ2NvbXBvbmVudHMvVUkvUmF0aW5nL1JhdGluZyc7XG5pbXBvcnQgRmF2b3VyaXRlIGZyb20gJ2NvbXBvbmVudHMvVUkvRmF2b3JpdGUvRmF2b3JpdGUnO1xuXG5pbXBvcnQgR3JpZENhcmQgZnJvbSAnLi4vR3JpZENhcmQvR3JpZENhcmQnO1xuXG5jb25zdCByZXNwb25zaXZlID0ge1xuICBkZXNrdG9wOiB7XG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgbWF4OiAzMDAwLFxuICAgICAgbWluOiAxMDI0LFxuICAgIH0sXG4gICAgaXRlbXM6IDEsXG4gICAgcGFyaXRpYWxWaXNpYmlsaXR5R3V0dGVyOiA0MCxcbiAgfSxcbiAgbW9iaWxlOiB7XG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgbWF4OiA0NjQsXG4gICAgICBtaW46IDAsXG4gICAgfSxcbiAgICBpdGVtczogMSxcbiAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXI6IDMwLFxuICB9LFxuICB0YWJsZXQ6IHtcbiAgICBicmVha3BvaW50OiB7XG4gICAgICBtYXg6IDEwMjQsXG4gICAgICBtaW46IDQ2NCxcbiAgICB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlcjogMzAsXG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQoe1xuICB0aXRsZSxcbiAgcmF0aW5nLFxuICBsb2NhdGlvbixcbiAgcHJpY2UsXG4gIHJhdGluZ0NvdW50LFxuICBnYWxsZXJ5LFxuICBzbHVnLFxuICBsaW5rLFxuICBkZXZpY2VUeXBlLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxHcmlkQ2FyZFxuICAgICAgZmF2b3JpdGU9e1xuICAgICAgICA8RmF2b3VyaXRlXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbi5mb3JtYXR0ZWRBZGRyZXNzfVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgcHJpY2U9e2AkJHtwcmljZX0vTmlnaHQgLSBGcmVlIENhbmNlbGxhdGlvbmB9XG4gICAgICByYXRpbmc9ezxSYXRpbmcgcmF0aW5nPXtyYXRpbmd9IHJhdGluZ0NvdW50PXtyYXRpbmdDb3VudH0gdHlwZT1cImJ1bGtcIiAvPn1cbiAgICAgIHZpZXdEZXRhaWxzQnRuPXtcbiAgICAgICAgPExpbmsgaHJlZj17YCR7bGlua30vW3NsdWddYH0gYXM9e2Ake2xpbmt9LyR7c2x1Z31gfSBwcmVmZXRjaD17ZmFsc2V9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPEZpRXh0ZXJuYWxMaW5rIC8+IFZpZXcgRGV0YWlsc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgfVxuICAgID5cbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICBzc3JcbiAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cbiAgICAgICAgYXJyb3dzXG4gICAgICAgIGF1dG9QbGF5U3BlZWQ9ezMwMDB9XG4gICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY29udGFpbmVyXCJcbiAgICAgICAgZG90TGlzdENsYXNzPVwiXCJcbiAgICAgICAgZHJhZ2dhYmxlXG4gICAgICAgIGZvY3VzT25TZWxlY3Q9e2ZhbHNlfVxuICAgICAgICBpbmZpbml0ZVxuICAgICAgICBpdGVtQ2xhc3M9XCJcIlxuICAgICAgICByZW5kZXJEb3RzT3V0c2lkZT17ZmFsc2V9XG4gICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgIGRldmljZVR5cGU9e2RldmljZVR5cGV9XG4gICAgICAgIHNob3dEb3RzPXt0cnVlfVxuICAgICAgICBzbGlkZXJDbGFzcz1cIlwiXG4gICAgICAgIHNsaWRlc1RvU2xpZGU9ezF9XG4gICAgICA+XG4gICAgICAgIHtnYWxsZXJ5Lm1hcCgoeyB1cmwsIHRpdGxlIH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt1cmx9XG4gICAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIDwvR3JpZENhcmQ+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVUkvVGV4dC9UZXh0JztcbmltcG9ydCBCb3ggZnJvbSAnY29tcG9uZW50cy9VSS9Cb3gvQm94JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uL1Byb2R1Y3RDYXJkL1Byb2R1Y3RDYXJkJztcbmNvbnN0IExvYWRNb3JlID0gKHtcbiAgaGFuZGxlTG9hZE1vcmUsXG4gIHNob3dCdXR0b24sXG4gIGJ1dHRvblRleHQsXG4gIGxvYWRpbmcsXG4gIGxvYWRNb3JlQ29tcG9uZW50LFxuICBsb2FkTW9yZVN0eWxlLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgICEhc2hvd0J1dHRvbiAmJiAoXG4gICAgICA8Qm94IGNsYXNzTmFtZT1cImxvYWRtb3JlX3dyYXBwZXJcIiB7Li4ubG9hZE1vcmVTdHlsZX0+XG4gICAgICAgIHtsb2FkTW9yZUNvbXBvbmVudCA/IChcbiAgICAgICAgICBsb2FkTW9yZUNvbXBvbmVudFxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17bG9hZGluZ30gb25DbGljaz17aGFuZGxlTG9hZE1vcmV9PlxuICAgICAgICAgICAge2J1dHRvblRleHQgfHwgJ0xvYWQgTW9yZSd9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN0aW9uR3JpZCh7XG4gIGRhdGEgPSBbXSxcbiAgdG90YWxJdGVtLFxuICBsaW1pdCxcbiAgY29sdW1uV2lkdGgsXG4gIHBhZ2luYXRpb25Db21wb25lbnQsXG4gIGhhbmRsZUxvYWRNb3JlLFxuICBsb2FkTW9yZUNvbXBvbmVudCxcbiAgcGxhY2Vob2xkZXIsXG4gIGxvYWRpbmcsXG4gIGJ1dHRvblRleHQsXG4gIHJvd1N0eWxlLFxuICBjb2x1bW5TdHlsZSxcbiAgbG9hZE1vcmVTdHlsZSxcbiAgbGluayxcbn0pIHtcbiAgY29uc3QgbiA9IGxpbWl0ID8gTnVtYmVyKGxpbWl0KSA6IDE7XG4gIGNvbnN0IGxpbWl0cyA9IEFycmF5KG4pLmZpbGwoMCk7XG5cbiAgbGV0IHNob3dCdXR0b24gPSBkYXRhLmxlbmd0aCA8IHRvdGFsSXRlbTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm94IGNsYXNzTmFtZT1cImdyaWRfd3JhcHBlclwiIHsuLi5yb3dTdHlsZX0+XG4gICAgICAgIHtkYXRhICYmIGRhdGEubGVuZ3RoXG4gICAgICAgICAgPyBkYXRhLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWRfY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtjb2x1bW5XaWR0aH1cbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgIHsuLi5jb2x1bW5TdHlsZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgbGluaz17bGlua30gey4uLml0ZW19IC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAge2xvYWRpbmcgJiZcbiAgICAgICAgICBsaW1pdHMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWRfY29sdW1uXCJcbiAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbldpZHRofVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIHsuLi5jb2x1bW5TdHlsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BsYWNlaG9sZGVyID8gcGxhY2Vob2xkZXIgOiA8VGV4dCBjb250ZW50PVwiTG9hZGluZyAuLi5cIiAvPn1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG5cbiAgICAgIHtzaG93QnV0dG9uICYmIChcbiAgICAgICAgPExvYWRNb3JlXG4gICAgICAgICAgc2hvd0J1dHRvbj17c2hvd0J1dHRvbn1cbiAgICAgICAgICBoYW5kbGVMb2FkTW9yZT17aGFuZGxlTG9hZE1vcmV9XG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICBidXR0b25UZXh0PXtidXR0b25UZXh0fVxuICAgICAgICAgIGxvYWRNb3JlQ29tcG9uZW50PXtsb2FkTW9yZUNvbXBvbmVudH1cbiAgICAgICAgICBsb2FkTW9yZVN0eWxlPXtsb2FkTW9yZVN0eWxlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtwYWdpbmF0aW9uQ29tcG9uZW50ICYmIChcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uX3dyYXBwZXJcIj57cGFnaW5hdGlvbkNvbXBvbmVudH08L0JveD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cblNlY3Rpb25HcmlkLnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHRvdGFsSXRlbTogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sdW1uV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gIF0pLFxuICBwYWdpbmF0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgaGFuZGxlTG9hZE1vcmU6IFByb3BUeXBlcy5mdW5jLFxuICBsb2FkTW9yZUNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBidXR0b25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICByb3dTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY29sdW1uU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGxvYWRNb3JlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5TZWN0aW9uR3JpZC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvd1N0eWxlOiB7XG4gICAgZmxleEJveDogdHJ1ZSxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIG1yOiBbJy0xMHB4JywgJy0xMHB4JywgJy0xMHB4JywgJy0xMHB4JywgJy0xMHB4JywgJy0xNXB4J10sXG4gICAgbWw6IFsnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTE1cHgnXSxcbiAgfSxcbiAgY29sdW1uU3R5bGU6IHtcbiAgICBwcjogWycxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTVweCddLFxuICAgIHBsOiBbJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxNXB4J10sXG4gIH0sXG4gIGxvYWRNb3JlU3R5bGU6IHtcbiAgICBmbGV4Qm94OiB0cnVlLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtdDogJzFyZW0nLFxuICB9LFxufTtcbiIsIi8qKiBUaGlzIGlzIG91ciBiYXNlIGNvbXBvbmVudCBldmVyeSBjb21wb25lbnRzIG11c3QgYmUgZXh0ZW5kIGl0LiAqL1xuaW1wb3J0IHtcbiAgc3BhY2UsXG4gIGJvcmRlcnMsXG4gIGJvcmRlckNvbG9yLFxuICB3aWR0aCxcbiAgbWluV2lkdGgsXG4gIG1heFdpZHRoLFxuICBoZWlnaHQsXG4gIG1pbkhlaWdodCxcbiAgbWF4SGVpZ2h0LFxuICBkaXNwbGF5LFxuICBmb250U2l6ZSxcbiAgZmxleCxcbiAgb3JkZXIsXG4gIGFsaWduU2VsZixcbiAgY29sb3IsXG4gIGNvbXBvc2UsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5leHBvcnQgY29uc3QgdGhlbWVkID0ga2V5ID0+IHByb3BzID0+IHByb3BzLnRoZW1lW2tleV07XG5cbmV4cG9ydCBjb25zdCBiYXNlID0gY29tcG9zZShcbiAgKCkgPT4gKHsgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcgfSksXG4gIHNwYWNlLFxuICB3aWR0aCxcbiAgbWluV2lkdGgsXG4gIG1heFdpZHRoLFxuICBoZWlnaHQsXG4gIG1pbkhlaWdodCxcbiAgbWF4SGVpZ2h0LFxuICBmb250U2l6ZSxcbiAgY29sb3IsXG4gIGZsZXgsXG4gIG9yZGVyLFxuICBhbGlnblNlbGYsXG4gIGJvcmRlcnMsXG4gIGJvcmRlckNvbG9yLFxuICBkaXNwbGF5XG4pO1xuXG5iYXNlLnByb3BUeXBlcyA9IHtcbiAgLi4uZGlzcGxheS5wcm9wVHlwZXMsXG4gIC4uLnNwYWNlLnByb3BUeXBlcyxcbiAgLi4uYm9yZGVycy5wcm9wVHlwZXMsXG4gIC4uLmJvcmRlckNvbG9yLnByb3BUeXBlcyxcbiAgLi4ud2lkdGgucHJvcFR5cGVzLFxuICAuLi5oZWlnaHQucHJvcFR5cGVzLFxuICAuLi5mb250U2l6ZS5wcm9wVHlwZXMsXG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZmxleC5wcm9wVHlwZXMsXG4gIC4uLm9yZGVyLnByb3BUeXBlcyxcbiAgLi4uYWxpZ25TZWxmLnByb3BUeXBlcyxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgZmxleFdyYXAsXG4gIGZsZXhEaXJlY3Rpb24sXG4gIGFsaWduSXRlbXMsXG4gIGp1c3RpZnlDb250ZW50LFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCB7IGJhc2UsIHRoZW1lZCB9IGZyb20gJy4uL0Jhc2UnO1xuXG5jb25zdCBCb3hXcmFwcGVyID0gc3R5bGVkKCdkaXYnKShcbiAgYmFzZSxcbiAgdGhlbWVkKCdCb3gnKSxcbiAgcHJvcHMgPT5cbiAgICBwcm9wcy5mbGV4Qm94ICYmXG4gICAgY3NzKFxuICAgICAgeyBkaXNwbGF5OiAnZmxleCcgfSxcbiAgICAgIGZsZXhXcmFwLFxuICAgICAgZmxleERpcmVjdGlvbixcbiAgICAgIGFsaWduSXRlbXMsXG4gICAgICBqdXN0aWZ5Q29udGVudCxcbiAgICAgIHRoZW1lZCgnRmxleEJveCcpXG4gICAgKVxuKTtcblxuY29uc3QgQm94ID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgPEJveFdyYXBwZXIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9Cb3hXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuXG5Cb3gucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAvKiogVXNpbmcgdGhpcyBwcm9wcyB3ZSBjYW4gY29udmVydCBvdXIgQm94IENvbXBvbmVudCB0byBhIEZsZXggQ29udGFpbmVyIG9yIENvbXBvbmVudCAqL1xuICBmbGV4Qm94OiBQcm9wVHlwZXMuYm9vbCxcbiAgYXM6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2RpdicsXG4gICAgJ2FydGljbGUnLFxuICAgICdzZWN0aW9uJyxcbiAgICAnYWRkcmVzcycsXG4gICAgJ2hlYWRlcicsXG4gICAgJ2Zvb3RlcicsXG4gICAgJ25hdicsXG4gICAgJ21haW4nLFxuICBdKSxcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBmb250U2l6ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgZmxleDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIG9yZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgYWxpZ25TZWxmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgZGlzcGxheTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGJvcmRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGJvcmRlclRvcDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGJvcmRlclJpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgYm9yZGVyQm90dG9tOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgYm9yZGVyTGVmdDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGJvcmRlckNvbG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbn07XG5cbkJveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAnZGl2Jyxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAncmVhY3QtY29udGVudC1sb2FkZXInO1xuXG5leHBvcnQgY29uc3QgU2luZ2xlUGFnZUxvYWRlciA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGVudExvYWRlclxuICAgICAgaGVpZ2h0PXsxMDAwfVxuICAgICAgd2lkdGg9ezgwMH1cbiAgICAgIHNwZWVkPXszfVxuICAgICAgcHJpbWFyeUNvbG9yPVwiI2YzZjNmM1wiXG4gICAgICBzZWNvbmRhcnlDb2xvcj1cIiNlOWU4ZWNcIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxyZWN0IHg9XCI1LjAyXCIgeT1cIjE2LjdcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjc4Mi4wMlwiIGhlaWdodD1cIjMxOS41NVwiIC8+XG4gICAgICA8cmVjdCB4PVwiNy43N1wiIHk9XCIzNjAuMjJcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjgyLjQ3XCIgaGVpZ2h0PVwiMzlcIiAvPlxuICAgICAgPHJlY3QgeD1cIjIwNy43N1wiIHk9XCIzNjAuMjJcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjgyLjQ3XCIgaGVpZ2h0PVwiMzlcIiAvPlxuICAgICAgPHJlY3QgeD1cIjEwNC43N1wiIHk9XCIzNjIuMjJcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjgyLjQ3XCIgaGVpZ2h0PVwiMzlcIiAvPlxuICAgICAgPHJlY3QgeD1cIjMwNS43N1wiIHk9XCIzNjEuMjJcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjgyLjQ3XCIgaGVpZ2h0PVwiMzlcIiAvPlxuICAgICAgPHJlY3QgeD1cIjYxMS43OFwiIHk9XCIzNTkuMjJcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjgyLjQ3XCIgaGVpZ2h0PVwiMzlcIiAvPlxuICAgICAgPHJlY3QgeD1cIjcwOS43OFwiIHk9XCIzNjAuMjJcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjgyLjQ3XCIgaGVpZ2h0PVwiMzlcIiAvPlxuICAgICAgPHJlY3QgeD1cIjguMDJcIiB5PVwiNDIxLjcxXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCI1MjIuMDFcIiBoZWlnaHQ9XCIxMjAuOTZcIiAvPlxuICAgICAgPHJlY3QgeD1cIjU1MC4wM1wiIHk9XCI0MTguNzFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjI0MFwiIGhlaWdodD1cIjMwMS41NlwiIC8+XG4gICAgICA8cmVjdCB4PVwiOS4wNFwiIHk9XCI1NjEuNzFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjEyMC4wNlwiIGhlaWdodD1cIjEyMC45NlwiIC8+XG4gICAgICA8cmVjdCB4PVwiNy4wNlwiIHk9XCI2OTAuNzFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjUyMi4wMVwiIGhlaWdodD1cIjEyMC45NlwiIC8+XG4gICAgICA8cmVjdFxuICAgICAgICB4PVwiMjcyLjI1XCJcbiAgICAgICAgeT1cIjU2MC43MVwiXG4gICAgICAgIHJ4PVwiMFwiXG4gICAgICAgIHJ5PVwiMFwiXG4gICAgICAgIHdpZHRoPVwiMTIwLjA2XCJcbiAgICAgICAgaGVpZ2h0PVwiMTIwLjk2XCJcbiAgICAgIC8+XG4gICAgICA8cmVjdFxuICAgICAgICB4PVwiNDA1LjA0XCJcbiAgICAgICAgeT1cIjU1OC43MVwiXG4gICAgICAgIHJ4PVwiMFwiXG4gICAgICAgIHJ5PVwiMFwiXG4gICAgICAgIHdpZHRoPVwiMTIwLjA2XCJcbiAgICAgICAgaGVpZ2h0PVwiMTIwLjk2XCJcbiAgICAgIC8+XG4gICAgICA8cmVjdFxuICAgICAgICB4PVwiMTQyLjA0XCJcbiAgICAgICAgeT1cIjU1OS43MVwiXG4gICAgICAgIHJ4PVwiMFwiXG4gICAgICAgIHJ5PVwiMFwiXG4gICAgICAgIHdpZHRoPVwiMTIwLjA2XCJcbiAgICAgICAgaGVpZ2h0PVwiMTIwLjk2XCJcbiAgICAgIC8+XG4gICAgICA8cmVjdCB4PVwiNi4wNlwiIHk9XCI4MTkuNzFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjUyMi4wMVwiIGhlaWdodD1cIjEyMC45NlwiIC8+XG4gICAgPC9Db250ZW50TG9hZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFBvc3RQbGFjZWhvbGRlciA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGVudExvYWRlclxuICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICB3aWR0aD17NDAwfVxuICAgICAgc3BlZWQ9ezJ9XG4gICAgICBjbGFzc05hbWU9XCJwbGFjZWhvbGRlclwiXG4gICAgICBwcmltYXJ5Q29sb3I9XCIjZjNmM2YzXCJcbiAgICAgIHNlY29uZGFyeUNvbG9yPVwiI2U5ZThlY1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPGNpcmNsZSBjeD1cIjM5LjM0XCIgY3k9XCIxNy4zMlwiIHI9XCIwLjcxXCIgLz5cbiAgICAgIDxjaXJjbGUgY3g9XCI3NTEuNDZcIiBjeT1cIjU4LjgxXCIgcj1cIjQwLjIxXCIgLz5cbiAgICAgIDxyZWN0IHg9XCI2MDUuMjVcIiB5PVwiMzkuNlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNjZcIiBoZWlnaHQ9XCI0MVwiIC8+XG4gICAgICA8cmVjdCB4PVwiNjM5LjI1XCIgeT1cIjU5LjZcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjBcIiBoZWlnaHQ9XCIwXCIgLz5cbiAgICAgIDxyZWN0IHg9XCI1MTguMjVcIiB5PVwiMzguNlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiNjZcIiBoZWlnaHQ9XCI0MVwiIC8+XG4gICAgICA8cmVjdCB4PVwiNDM1LjI1XCIgeT1cIjQwLjZcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjY2XCIgaGVpZ2h0PVwiNDFcIiAvPlxuICAgICAgPHJlY3QgeD1cIjI2NC4yNVwiIHk9XCIyMTYuNlwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiAvPlxuICAgICAgPHJlY3QgeD1cIjMxLjI1XCIgeT1cIjQ1MS45NFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMTY3LjE3XCIgaGVpZ2h0PVwiMTQ3LjY2XCIgLz5cbiAgICAgIDxyZWN0IHg9XCIzOTkuMjVcIiB5PVwiNTMxLjk0XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIwXCIgaGVpZ2h0PVwiMFwiIC8+XG4gICAgICA8cmVjdFxuICAgICAgICB4PVwiMjE3LjI1XCJcbiAgICAgICAgeT1cIjQ1MC45NFwiXG4gICAgICAgIHJ4PVwiMFwiXG4gICAgICAgIHJ5PVwiMFwiXG4gICAgICAgIHdpZHRoPVwiMTc2LjMzXCJcbiAgICAgICAgaGVpZ2h0PVwiMTQ3LjY2XCJcbiAgICAgIC8+XG4gICAgICA8cmVjdFxuICAgICAgICB4PVwiNDE1LjI1XCJcbiAgICAgICAgeT1cIjQ0OS45NFwiXG4gICAgICAgIHJ4PVwiMFwiXG4gICAgICAgIHJ5PVwiMFwiXG4gICAgICAgIHdpZHRoPVwiMTY3LjE3XCJcbiAgICAgICAgaGVpZ2h0PVwiMTQ3LjY2XCJcbiAgICAgIC8+XG4gICAgICA8cmVjdFxuICAgICAgICB4PVwiNjA4LjE3XCJcbiAgICAgICAgeT1cIjQ0OC45NFwiXG4gICAgICAgIHJ4PVwiMFwiXG4gICAgICAgIHJ5PVwiMFwiXG4gICAgICAgIHdpZHRoPVwiMTcxLjc1XCJcbiAgICAgICAgaGVpZ2h0PVwiMTQ3LjY2XCJcbiAgICAgIC8+XG4gICAgICA8cmVjdCB4PVwiMzAuMjVcIiB5PVwiNjA5Ljk0XCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIxNjcuMTdcIiBoZWlnaHQ9XCIxNDcuNjZcIiAvPlxuICAgICAgPHJlY3RcbiAgICAgICAgeD1cIjQxNy4yNVwiXG4gICAgICAgIHk9XCI2MTIuOTRcIlxuICAgICAgICByeD1cIjBcIlxuICAgICAgICByeT1cIjBcIlxuICAgICAgICB3aWR0aD1cIjE2Ny4xN1wiXG4gICAgICAgIGhlaWdodD1cIjE0Ny42NlwiXG4gICAgICAvPlxuICAgICAgPHJlY3RcbiAgICAgICAgeD1cIjYwOS4yNVwiXG4gICAgICAgIHk9XCI2MTIuOTRcIlxuICAgICAgICByeD1cIjBcIlxuICAgICAgICByeT1cIjBcIlxuICAgICAgICB3aWR0aD1cIjE2Ny4xN1wiXG4gICAgICAgIGhlaWdodD1cIjE0Ny42NlwiXG4gICAgICAvPlxuICAgICAgPHJlY3RcbiAgICAgICAgeD1cIjIyMC4yNVwiXG4gICAgICAgIHk9XCI2MTIuOTRcIlxuICAgICAgICByeD1cIjBcIlxuICAgICAgICByeT1cIjBcIlxuICAgICAgICB3aWR0aD1cIjE3NC4wNFwiXG4gICAgICAgIGhlaWdodD1cIjE0Ny42NlwiXG4gICAgICAvPlxuICAgICAgPHJlY3QgeD1cIjkuNjNcIiB5PVwiMTguNjFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjM4MS4wM1wiIGhlaWdodD1cIjE4NlwiIC8+XG4gICAgICA8cmVjdCB4PVwiODAuNjNcIiB5PVwiMTMyLjYxXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIwXCIgaGVpZ2h0PVwiMFwiIC8+XG4gICAgICA8cmVjdCB4PVwiOS42M1wiIHk9XCIyMTguNjFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjE4M1wiIGhlaWdodD1cIjI1XCIgLz5cbiAgICAgIDxyZWN0IHg9XCI4LjYzXCIgeT1cIjI1OC42MVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMzgxXCIgaGVpZ2h0PVwiNDNcIiAvPlxuICAgICAgPHJlY3QgeD1cIjguNjNcIiB5PVwiMzE5LjYxXCIgcng9XCIwXCIgcnk9XCIwXCIgd2lkdGg9XCIyMDRcIiBoZWlnaHQ9XCIyNFwiIC8+XG4gICAgICA8cmVjdCB4PVwiMjI5LjYzXCIgeT1cIjMyMC42MVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMTY0LjQ1XCIgaGVpZ2h0PVwiMjNcIiAvPlxuICAgICAgPHJlY3QgeD1cIjMzNi42M1wiIHk9XCIzMjguNjFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjBcIiBoZWlnaHQ9XCIwXCIgLz5cbiAgICAgIDxjaXJjbGUgY3g9XCIyMC41NlwiIGN5PVwiMzcwLjU0XCIgcj1cIjExLjkzXCIgLz5cbiAgICAgIDxjaXJjbGUgY3g9XCI1My42M1wiIGN5PVwiMzc2LjYxXCIgcj1cIjFcIiAvPlxuICAgICAgPGNpcmNsZSBjeD1cIjUyLjU2XCIgY3k9XCIzNzAuNTRcIiByPVwiMTEuOTNcIiAvPlxuICAgICAgPGNpcmNsZSBjeD1cIjgxLjU2XCIgY3k9XCIzNzAuNTRcIiByPVwiMTEuOTNcIiAvPlxuICAgICAgPGNpcmNsZSBjeD1cIjExMi41NlwiIGN5PVwiMzcxLjU0XCIgcj1cIjExLjkzXCIgLz5cbiAgICAgIDxjaXJjbGUgY3g9XCIxNDEuNTZcIiBjeT1cIjM3MS41NFwiIHI9XCIxMS45M1wiIC8+XG4gICAgICA8cmVjdCB4PVwiMTY4LjYzXCIgeT1cIjM2MC42MVwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMTA0XCIgaGVpZ2h0PVwiMjRcIiAvPlxuICAgICAgPHJlY3QgeD1cIjIxMy42M1wiIHk9XCIzOTcuNjFcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjBcIiBoZWlnaHQ9XCIwXCIgLz5cbiAgICA8L0NvbnRlbnRMb2FkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZVBpY0xvYWRlciA9ICgpID0+IChcbiAgPENvbnRlbnRMb2FkZXJcbiAgICBoZWlnaHQ9ezE4MH1cbiAgICB3aWR0aD17MTgwfVxuICAgIHNwZWVkPXszfVxuICAgIHByaW1hcnlDb2xvcj1cIiNmM2YzZjNcIlxuICAgIHNlY29uZGFyeUNvbG9yPVwiI2VjZWJlYlwiXG4gID5cbiAgICA8Y2lyY2xlIGN4PVwiNzZcIiBjeT1cIjYwXCIgcj1cIjFcIiAvPlxuICAgIDxjaXJjbGUgY3g9XCI5MFwiIGN5PVwiNTBcIiByPVwiNDFcIiAvPlxuICAgIDxyZWN0IHg9XCIxNlwiIHk9XCI5NFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMTQ5XCIgaGVpZ2h0PVwiODBcIiAvPlxuICA8L0NvbnRlbnRMb2FkZXI+XG4pO1xuXG5leHBvcnQgY29uc3QgSW1hZ2VDYXJkTG9hZGVyID0gKCkgPT4gKFxuICA8Q29udGVudExvYWRlclxuICAgIGhlaWdodD17MjcwfVxuICAgIHdpZHRoPXsyMTV9XG4gICAgc3BlZWQ9ezJ9XG4gICAgcHJpbWFyeUNvbG9yPVwiI2YzZjNmM1wiXG4gICAgc2Vjb25kYXJ5Q29sb3I9XCIjZWNlYmViXCJcbiAgPlxuICAgIDxjaXJjbGUgY3g9XCIxMzhcIiBjeT1cIjgwXCIgcj1cIjFcIiAvPlxuICAgIDxyZWN0IHg9XCI4N1wiIHk9XCIyNFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiAvPlxuICAgIDxyZWN0IHg9XCI4N1wiIHk9XCIyNFwiIHJ4PVwiMFwiIHJ5PVwiMFwiIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiAvPlxuICAgIDxyZWN0IHg9XCIwXCIgeT1cIjBcIiByeD1cIjBcIiByeT1cIjBcIiB3aWR0aD1cIjIyM1wiIGhlaWdodD1cIjI3N1wiIC8+XG4gIDwvQ29udGVudExvYWRlcj5cbik7XG4iLCJpbXBvcnQgJ3JlYWN0LWRhdGVzL2luaXRpYWxpemUnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSAncmVhY3QtZGF0ZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSZWFjdERhdGVzU3R5bGVXcmFwcGVyIH0gZnJvbSAnLi9SZWFjdERhdGVzLnN0eWxlJztcbi8qXG4gKiBGb3IgTG9jYWxpemF0aW9uIGVuYWJsZSB0aGlzIGNvZGUgW2V4YW1wbGUgOiBGcmVuY2ggbGFuZ3VhZ2UgYXMgXCJmclwiXVxuICovXG4vLyBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG4vLyBpbXBvcnQgJ21vbWVudC9sb2NhbGUvZnInO1xuXG5jbGFzcyBEYXRlUmFuZ2VQaWNrZXJCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzZXBhcmF0b3IgPVxuICAgICAgdGhpcy5wcm9wcy5pdGVtICYmIHRoaXMucHJvcHMuaXRlbS5zZXBhcmF0b3JcbiAgICAgICAgPyB0aGlzLnByb3BzLml0ZW0uc2VwYXJhdG9yXG4gICAgICAgIDogJy8nO1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPVxuICAgICAgdGhpcy5wcm9wcy5pdGVtICYmIHRoaXMucHJvcHMuaXRlbS5mb3JtYXRcbiAgICAgICAgPyB0aGlzLnByb3BzLml0ZW0uZm9ybWF0XG4gICAgICAgIDogJ2xsbGwnO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkSW5wdXQ6IG51bGwsXG4gICAgICBzdGFydERhdGU6IHRoaXMucHJvcHMuc3RhcnREYXRlID8gdGhpcy5wcm9wcy5zdGFydERhdGUgOiBudWxsLFxuICAgICAgZW5kRGF0ZTogdGhpcy5wcm9wcy5lbmREYXRlID8gdGhpcy5wcm9wcy5lbmREYXRlIDogbnVsbCxcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBzZXBhcmF0b3IsXG4gICAgfTtcbiAgICB0aGlzLm9uRGF0ZUNoYW5nZUZ1bmMgPSB0aGlzLm9uRGF0ZUNoYW5nZUZ1bmMuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXNDaGFuZ2VGdW5jID0gdGhpcy5vbkZvY3VzQ2hhbmdlRnVuYy5iaW5kKHRoaXMpO1xuICAgIC8qXG4gICAgICogRm9yIExvY2FsaXphdGlvbiBlbmFibGUgdGhpcyBjb2RlIFtleGFtcGxlIDogRnJlbmNoIGxhbmd1YWdlIGFzIFwiZnJcIl1cbiAgICAgKi9cbiAgICAvLyBtb21lbnQubG9jYWxlKCdmcicpO1xuICB9XG5cbiAgb25EYXRlQ2hhbmdlRnVuYyA9ICh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XG4gICAgaWYgKHN0YXJ0RGF0ZSAhPT0gbnVsbCAmJiBlbmREYXRlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlYXJjaERhdGEoe1xuICAgICAgICBzZXRTdGFydERhdGU6IHN0YXJ0RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCksXG4gICAgICAgIHNldEVuZERhdGU6IGVuZERhdGUuZm9ybWF0KGRhdGVGb3JtYXQpLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uRm9jdXNDaGFuZ2VGdW5jID0gKGZvY3VzZWRJbnB1dCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZElucHV0IH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvY3VzZWRJbnB1dCwgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIC8vIERhdGVSYW5nZVBpY2tlckJveCBwcm9wcyBsaXN0XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3RhcnREYXRlSWQsXG4gICAgICBlbmREYXRlSWQsXG4gICAgICBzdGFydERhdGVQbGFjZWhvbGRlclRleHQsXG4gICAgICBlbmREYXRlUGxhY2Vob2xkZXJUZXh0LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzaG93Q2xlYXJEYXRlcyxcbiAgICAgIGlzUlRMLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgICBhbmNob3JEaXJlY3Rpb24sXG4gICAgICB3aXRoUG9ydGFsLFxuICAgICAgd2l0aEZ1bGxTY3JlZW5Qb3J0YWwsXG4gICAgICBzbWFsbCxcbiAgICAgIGJsb2NrLFxuICAgICAgbnVtYmVyT2ZNb250aHMsXG4gICAgICByZWd1bGFyLFxuICAgICAgbm9Cb3JkZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheSAqKioqKioqKioqKioqKlxuICAgIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ2RhdGVfcGlja2VyJ107XG4gICAgLy8gY2xhc3NOYW1lIHByb3AgY2hlY2tpbmcgKioqKioqKioqKioqKipcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICAvLyBSZWFjdC1EYXRlcyBEYXRlUmFuZ2VQaWNrZXIgUHJvcHMgTGlzdFxuICAgIGNvbnN0IGRlZmF1bHRDYWxlbmRlclByb3BzID0ge1xuICAgICAgc3RhcnREYXRlSWQ6IHN0YXJ0RGF0ZUlkID8gc3RhcnREYXRlSWQgOiAnc3RhcnRfdW5pcXVlX2lkJyxcbiAgICAgIGVuZERhdGVJZDogZW5kRGF0ZUlkID8gZW5kRGF0ZUlkIDogJ2VuZF9kYXRlX3VuaXF1ZV9pZCcsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlLFxuICAgICAgZm9jdXNlZElucHV0LFxuICAgICAgb25Gb2N1c0NoYW5nZTogdGhpcy5vbkZvY3VzQ2hhbmdlRnVuYyxcbiAgICAgIG9uRGF0ZXNDaGFuZ2U6IHRoaXMub25EYXRlQ2hhbmdlRnVuYyxcbiAgICAgIHN0YXJ0RGF0ZVBsYWNlaG9sZGVyVGV4dCxcbiAgICAgIGVuZERhdGVQbGFjZWhvbGRlclRleHQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlzUlRMLFxuICAgICAgc2hvd0NsZWFyRGF0ZXM6IHNob3dDbGVhckRhdGVzID8gc2hvd0NsZWFyRGF0ZXMgOiBmYWxzZSxcbiAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgYW5jaG9yRGlyZWN0aW9uLFxuICAgICAgd2l0aFBvcnRhbCxcbiAgICAgIHdpdGhGdWxsU2NyZWVuUG9ydGFsLFxuICAgICAgc21hbGwsXG4gICAgICBudW1iZXJPZk1vbnRoczogbnVtYmVyT2ZNb250aHMgPyBudW1iZXJPZk1vbnRocyA6IDIsXG4gICAgICBibG9jayxcbiAgICAgIHJlZ3VsYXIsXG4gICAgICBub0JvcmRlcixcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdERhdGVzU3R5bGVXcmFwcGVyIGNsYXNzTmFtZT17YWRkQWxsQ2xhc3Nlcy5qb2luKCcgJyl9PlxuICAgICAgICA8RGF0ZVJhbmdlUGlja2VyIHsuLi5kZWZhdWx0Q2FsZW5kZXJQcm9wc30gLz5cbiAgICAgIDwvUmVhY3REYXRlc1N0eWxlV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbkRhdGVSYW5nZVBpY2tlckJveC5wcm9wVHlwZXMgPSB7XG4gIC8qKiBzdGFydERhdGVJZCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgc3RhcnREYXRlSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqIGVuZERhdGVJZCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgZW5kRGF0ZUlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsIC8vXG4gIC8qKiBzdGFydERhdGVQbGFjZWhvbGRlclRleHQgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIHN0YXJ0RGF0ZVBsYWNlaG9sZGVyVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIGVuZERhdGVQbGFjZWhvbGRlclRleHQgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIGVuZERhdGVQbGFjZWhvbGRlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBkaXNhYmxlZCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5vbmVPZihbJ1NUQVJUX0RBVEUnLCAnRU5EX0RBVEUnXSksXG4gIF0pLFxuXG4gIC8qKiBzaG93Q2xlYXJEYXRlcyBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgc2hvd0NsZWFyRGF0ZXM6IFByb3BUeXBlcy5ib29sLFxuICAvKiogaXNSVEwgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIGlzUlRMOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIG9yaWVudGF0aW9uIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKSxcbiAgLyoqIGFuY2hvckRpcmVjdGlvbiBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgYW5jaG9yRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuICAvKiogd2l0aFBvcnRhbCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgd2l0aFBvcnRhbDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiB3aXRoRnVsbFNjcmVlblBvcnRhbCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgd2l0aEZ1bGxTY3JlZW5Qb3J0YWw6IFByb3BUeXBlcy5ib29sLFxuICAvKiogc21hbGwgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIG51bWJlck9mTW9udGhzIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBudW1iZXJPZk1vbnRoczogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqIGJsb2NrIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBibG9jazogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiByZWd1bGFyIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICByZWd1bGFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIG5vQm9yZGVyIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBub0JvcmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiB1cGRhdGVTZWFyY2hEYXRhIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCB0byBzZW5kIGNvbXBvbmVudCBkYXRhIHRvIHBhcmVudCBjb21wb25lbnQgKi9cbiAgdXBkYXRlU2VhcmNoRGF0YTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlUmFuZ2VQaWNrZXJCb3g7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBXaXRoRGlyZWN0aW9uIGZyb20gJ2xpYnJhcnkvaGVscGVycy9ydGwnO1xuXG5jb25zdCBSZWFjdERhdGVzU3R5bGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIC5hbnQtZm9ybS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgIC5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUmVhY3REYXRlV3JhcHBlciA9IENvbXBvbmVudE5hbWUgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAuaXNvUmVhY3REYXRlIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgLkRhdGVJbnB1dF9fZGlzcGxheS10ZXh0LS1mb2N1c2VkIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAuQ2FsZW5kYXJEYXktLXNlbGVjdGVkLXN0YXJ0LFxuICAgIC5DYWxlbmRhckRheS0tc2VsZWN0ZWQtZW5kLFxuICAgIC5DYWxlbmRhckRheS0tc2VsZWN0ZWQge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLkNhbGVuZGFyRGF5LS1zZWxlY3RlZC1zcGFuIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5DYWxlbmRhckRheS0taG92ZXJlZC1zcGFuLFxuICAgIC5DYWxlbmRhckRheS0tYWZ0ZXItaG92ZXJlZC1zdGFydCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuRGF5UGlja2VyS2V5Ym9hcmRTaG9ydGN1dHNfX3Nob3ctLWJvdHRvbS1yaWdodCB7XG4gICAgICBib3JkZXItdG9wOiAyNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgLkRheVBpY2tlci0taG9yaXpvbnRhbCB7XG4gICAgICAuRGF5UGlja2VyTmF2aWdhdGlvbi0taG9yaXpvbnRhbCB7XG4gICAgICAgIC5EYXlQaWNrZXJOYXZpZ2F0aW9uX19wcmV2LFxuICAgICAgICAuRGF5UGlja2VyTmF2aWdhdGlvbl9fbmV4dCB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnaW5oZXJpdCd9O1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnaW5oZXJpdCd9O1xuICAgICAgICAgIHRyYW5zZm9ybTogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdpbmhlcml0J307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXQge1xuICAgICAgLkRhdGVSYW5nZVBpY2tlcklucHV0X19hcnJvdyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdpbmhlcml0J307XG4gICAgICAgIC1tcy10cmFuc2Zvcm06ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ2luaGVyaXQnfTtcbiAgICAgICAgdHJhbnNmb3JtOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdpbmhlcml0J307XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBSZWFjdERhdGVzV3JhcHBlciA9IFdpdGhEaXJlY3Rpb24oUmVhY3REYXRlV3JhcHBlcik7XG5cbmV4cG9ydCB7IFJlYWN0RGF0ZXNTdHlsZVdyYXBwZXIsIFJlYWN0RGF0ZXNXcmFwcGVyIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSAnLi91c2VUb2dnbGUnO1xuaW1wb3J0IEZhdm9yaXRlV3JhcHBlciBmcm9tICcuL0Zhdm9yaXRlLnN0eWxlJztcblxuY29uc3QgRmF2b3JpdGUgPSAoeyBjbGFzc05hbWUsIGNvbnRlbnQsIG9uQ2xpY2sgfSkgPT4ge1xuICAvLyB1c2UgdG9nZ2xlIGhvb2tzXG4gIGNvbnN0IFt0b2dnbGVWYWx1ZSwgdG9nZ2xlSGFuZGxlcl0gPSB1c2VUb2dnbGUoZmFsc2UpO1xuXG4gIC8vIEFkZCBhbGwgY2xhc3NzIHRvIGFuIGFycmF5XG4gIGNvbnN0IGFkZEFsbENsYXNzID0gWydmYXZvcml0ZSddO1xuXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzcy5wdXNoKGNsYXNzTmFtZSk7XG4gIH1cblxuICBjb25zdCBoYW5kZWxDbGljayA9IGV2ZW50ID0+IHtcbiAgICB0b2dnbGVIYW5kbGVyKCk7XG4gICAgb25DbGljayghdG9nZ2xlVmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZhdm9yaXRlV3JhcHBlclxuICAgICAgb25DbGljaz17aGFuZGVsQ2xpY2t9XG4gICAgICBjbGFzc05hbWU9e2Ake2FkZEFsbENsYXNzLmpvaW4oJyAnKX0gJHt0b2dnbGVWYWx1ZSA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICA+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE4LjY0IDE4LjIzMlwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNjAuMTYsNTZoLS4wNGE0LjU1MSw0LjU1MSwwLDAsMC0zLjgsMi4wOEE0LjU1MSw0LjU1MSwwLDAsMCw1Mi41Miw1NmgtLjA0QTQuNTIyLDQuNTIyLDAsMCwwLDQ4LDYwLjUyYTkuNzM3LDkuNzM3LDAsMCwwLDEuOTEyLDUuMzA4QTMzLjUwNiwzMy41MDYsMCwwLDAsNTYuMzIsNzJhMzMuNTA2LDMzLjUwNiwwLDAsMCw2LjQwOC02LjE3MkE5LjczNyw5LjczNywwLDAsMCw2NC42NCw2MC41Miw0LjUyMiw0LjUyMiwwLDAsMCw2MC4xNiw1NlpcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDcgLTU1KVwiXG4gICAgICAgIC8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzcGFuPntjb250ZW50fTwvc3Bhbj5cbiAgICA8L0Zhdm9yaXRlV3JhcHBlcj5cbiAgKTtcbn07XG5cbkZhdm9yaXRlLnByb3BUeXBlcyA9IHtcbiAgLyoqIENsYXNzTmFtZSBvZiB0aGUgRmF2b3JpdGUgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogY29udGVudCBvZiB0aGUgRmF2b3JpdGUgKi9cbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYC5cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuRmF2b3JpdGUuZGVmYXVsdFByb3BzID0ge1xuICBvbkNsaWNrOiAoKSA9PiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcbmNvbnN0IGFkZEFuaW1hdGlvbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjM0KSByb3RhdGVZKDkwZGVnKTtcbiAgfVxuYDtcblxuY29uc3QgcmVtb3ZlQW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjM0KSByb3RhdGVZKDkwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcbiAgfVxuYDtcblxuY29uc3QgQWRkQW5pbWF0aW9uID0gY3NzYFxuICBhbmltYXRpb246ICR7YWRkQW5pbWF0aW9ufSAwLjRzIGN1YmljLWJlemllcigwLjM4LCAwLjcsIDAuNiwgMC4yOSk7XG5gO1xuXG5jb25zdCBSZW1vdmVBbmltYXRpb24gPSBjc3NgXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVBbmltYXRpb259IDAuNTVzIGN1YmljLWJlemllcigwLjM4LCAwLjcsIDAuNiwgMC4yOSk7XG5gO1xuXG5jb25zdCBGYXZvcml0ZVdyYXBwZXIgPSBzdHlsZWQuYnV0dG9uYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgICR7UmVtb3ZlQW5pbWF0aW9ufVxuICAgIHBhdGgge1xuICAgICAgZmlsbDogJHt0aGVtZUdldCgnY29sb3IuNScsICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyl9O1xuICAgICAgc3Ryb2tlOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICAgIHRyYW5zaXRpb246IGZpbGwgMXMgZWFzZTtcbiAgICB9XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgc3ZnIHtcbiAgICAgICR7QWRkQW5pbWF0aW9ufTtcbiAgICAgIHBhdGgge1xuICAgICAgICBmaWxsOiAke3RoZW1lR2V0KCdjb2xvci40JywgJyNGQzVDNjMnKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZVdyYXBwZXI7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZVRvZ2dsZSA9IGluaXRpYWxWYWx1ZSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcbiAgY29uc3QgdG9nZ2xlciA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFZhbHVlKHZhbHVlID0+ICF2YWx1ZSksIFtdKTtcbiAgcmV0dXJuIFt2YWx1ZSwgdG9nZ2xlcl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUb2dnbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFBsdXNPdXRsaW5lZCwgTWludXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCBJbnB1dEluY0RlY1dyYXBwZXIgZnJvbSAnLi9JbnB1dEluY0RlYy5zdHlsZSc7XG5cbmNvbnN0IElucHV0SW5jRGVjID0gKHsgY2xhc3NOYW1lLCBpbmNyZW1lbnQsIGRlY3JlbWVudCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydxdWFudGl0eSddO1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxJbnB1dEluY0RlY1dyYXBwZXIgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX0+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBkZWNCdG5cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ZGVjcmVtZW50fT5cbiAgICAgICAgPE1pbnVzT3V0bGluZWQgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPElucHV0IGNsYXNzTmFtZT1cInFudC1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB7Li4ucHJvcHN9IC8+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBpbmNCdG5cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aW5jcmVtZW50fT5cbiAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9JbnB1dEluY0RlY1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEluY0RlYztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBJbnB1dEluY0RlY1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGlucHV0W3R5cGU9J251bWJlciddIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNTRweCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDI3cHg7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICAgICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBib3JkZXI6IDA7XG4gICAgd2lkdGg6IDI3cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmLmRlY0J0biB7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAmLmluY0J0biB7XG4gICAgICByaWdodDogMDtcbiAgICB9XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0SW5jRGVjV3JhcHBlcjtcbiIsIi8vIFRoZSBwb3J0YWwgZWxlbWVudCBpcyBpbnNlcnRlZCBpbiB0aGUgRE9NIHRyZWUgYWZ0ZXJcbi8vIHRoZSBNb2RhbCdzIGNoaWxkcmVuIGFyZSBtb3VudGVkLCBtZWFuaW5nIHRoYXQgY2hpbGRyZW5cbi8vIHdpbGwgYmUgbW91bnRlZCBvbiBhIGRldGFjaGVkIERPTSBub2RlLiBJZiBhIGNoaWxkXG4vLyBjb21wb25lbnQgcmVxdWlyZXMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIERPTSB0cmVlXG4vLyBpbW1lZGlhdGVseSB3aGVuIG1vdW50ZWQsIGZvciBleGFtcGxlIHRvIG1lYXN1cmUgYVxuLy8gRE9NIG5vZGUsIG9yIHVzZXMgJ2F1dG9Gb2N1cycgaW4gYSBkZXNjZW5kYW50LCBhZGRcbi8vIHN0YXRlIHRvIE1vZGFsIGFuZCBvbmx5IHJlbmRlciB0aGUgY2hpbGRyZW4gd2hlbiBNb2RhbFxuLy8gaXMgaW5zZXJ0ZWQgaW4gdGhlIERPTSB0cmVlLlxuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRhbCh7IGNoaWxkcmVuLCByZW5kZXJlcklkIH0pIHtcbiAgY29uc3QgW2NvbnRhaW5lckVsXSA9IHVzZVN0YXRlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgcG9ydGFsUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJlbmRlcmVySWQpIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgcG9ydGFsUm9vdC5hcHBlbmRDaGlsZChjb250YWluZXJFbCk7XG4gICAgcmV0dXJuICgpID0+IHBvcnRhbFJvb3QucmVtb3ZlQ2hpbGQoY29udGFpbmVyRWwpO1xuICB9KTtcbiAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgY29udGFpbmVyRWwpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBJb0lvc1N0YXIsIElvSW9zU3Rhck91dGxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5cbmNvbnN0IFJhdGluZyA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByYXRpbmcsIHJhdGluZ0NvdW50LCB0eXBlLCByYXRpbmdGaWVsZE5hbWUgfSA9IHByb3BzO1xuICBsZXQgaSwgZmxvb3JWYWx1ZTtcbiAgbGV0IHJhdGluZ1ZpZXcgPSBbXTtcbiAgaWYgKHJhdGluZyAmJiByYXRpbmcgIT09IDApIHtcbiAgICBmbG9vclZhbHVlID0gTWF0aC5mbG9vcihyYXRpbmcpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGlmIChpIDwgZmxvb3JWYWx1ZSkge1xuICAgICAgICByYXRpbmdWaWV3LnB1c2goPElvSW9zU3RhciBrZXk9e2l9IC8+KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhdGluZ1ZpZXcucHVzaCg8SW9Jb3NTdGFyT3V0bGluZSBrZXk9e2l9IC8+KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGV0IGxpc3RpbmdDb25kaXRpb247XG4gIGlmIChyYXRpbmcgJiYgcmF0aW5nID09PSA1KSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdBd2Vzb21lJztcbiAgfSBlbHNlIGlmICg0IDw9IHJhdGluZyAmJiByYXRpbmcgPCA1KSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdHb29kJztcbiAgfSBlbHNlIGlmICgzIDw9IHJhdGluZyAmJiByYXRpbmcgPCA0KSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdBdmVyYWdlJztcbiAgfSBlbHNlIGlmICgyIDw9IHJhdGluZyAmJiByYXRpbmcgPCAzKSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdCYWQnO1xuICB9IGVsc2UgaWYgKHJhdGluZyA+PSAxKSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdUZXJyaWJsZSc7XG4gIH0gZWxzZSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICcnO1xuICB9XG5cbiAgbGV0IHNob3dSYXRpbmdDb3VudDtcbiAgaWYgKHJhdGluZ0NvdW50KSB7XG4gICAgc2hvd1JhdGluZ0NvdW50ID0gYChgICsgcmF0aW5nQ291bnQgKyBgKWA7XG4gIH0gZWxzZSB7XG4gICAgc2hvd1JhdGluZ0NvdW50ID0gJyc7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dHlwZSAmJiB0eXBlID09PSAnYnVsaycgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNwYW4+e3JhdGluZ1ZpZXd9PC9zcGFuPlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICB7YCAke2xpc3RpbmdDb25kaXRpb259YH0ge2Ake3Nob3dSYXRpbmdDb3VudH1gfVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNwYW4+e3JhdGluZ0ZpZWxkTmFtZX08L3NwYW4+IHtyYXRpbmdWaWV3fVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5SYXRpbmcucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJhdGluZ0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICByYXRpbmc6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJhdGluZ0ZpZWxkTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBmb250RmFtaWx5LFxuICBmb250V2VpZ2h0LFxuICB0ZXh0QWxpZ24sXG4gIGxpbmVIZWlnaHQsXG4gIGxldHRlclNwYWNpbmcsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vQmFzZSc7XG5cbmNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkKCdwJykoXG4gIGJhc2UsXG4gIGZvbnRGYW1pbHksXG4gIGZvbnRXZWlnaHQsXG4gIHRleHRBbGlnbixcbiAgbGluZUhlaWdodCxcbiAgbGV0dGVyU3BhY2luZyxcbiAgdGhlbWVkKCdUZXh0Jylcbik7XG5cbmNvbnN0IFRleHQgPSAoeyBjb250ZW50LCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxUZXh0V3JhcHBlciB7Li4ucHJvcHN9Pntjb250ZW50fTwvVGV4dFdyYXBwZXI+XG4pO1xuXG5UZXh0LnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBmb250V2VpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgdGV4dEFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgbGluZUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGxldHRlclNwYWNpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICAuLi5iYXNlLnByb3BUeXBlcyxcbn07XG5cblRleHQuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ3AnLFxuICBtOiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgV3JhcHBlciwgeyBDb250YWluZXIsIExlZnRTaWRlLCBSaWdodFNpZGUgfSBmcm9tICcuL1Rvb2xiYXIuc3R5bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29sYmFyKHsgbGVmdCwgcmlnaHQsIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkge1xuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWyd0b29sYmFyJ107XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICB7bGVmdCAmJiA8TGVmdFNpZGUgY2xhc3NOYW1lPVwidG9vbGJhcl9sZWZ0X19zaWRlXCI+e2xlZnR9PC9MZWZ0U2lkZT59XG4gICAgICAgIHtyaWdodCAmJiAoXG4gICAgICAgICAgPFJpZ2h0U2lkZSBjbGFzc05hbWU9XCJ0b29sYmFyX3JpZ2h0X19zaWRlXCI+e3JpZ2h0fTwvUmlnaHRTaWRlPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW4gJiYgY2hpbGRyZW59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiAocHJvcHMuYmcgPyBwcm9wcy5iZyA6ICcjZmZmJyl9O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMTkyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IExlZnRTaWRlID0gc3R5bGVkLmRpdmBgO1xuZXhwb3J0IGNvbnN0IFJpZ2h0U2lkZSA9IHN0eWxlZC5kaXZgYDtcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi9Qb3J0YWwvUG9ydGFsJztcbmltcG9ydCB7IFdyYXBwZXIsIENvbnRhaW5lciB9IGZyb20gJy4vVmlld1dpdGhQb3B1cC5zdHlsZSc7XG5pbXBvcnQgeyB1c2VPbkNsaWNrT3V0c2lkZSB9IGZyb20gJy4vdXNlT25DbGlja091dHNpZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3V2l0aFBvcHVwKHtcbiAgdmlldyxcbiAgcG9wdXAsXG4gIG5vVmlldyA9IGZhbHNlLFxuICBzdHlsZSxcbiAgY2xhc3NOYW1lLFxufSkge1xuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgdXNlT25DbGlja091dHNpZGUocmVmLCAoKSA9PiBzZXRTaG93UG9wdXAoZmFsc2UpKTtcbiAgLy8gQWRkIGFsbCBjbGFzc3MgdG8gYW4gYXJyYXlcbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsndmlld193aXRoX19wb3B1cCddO1xuXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e2Ake2FkZEFsbENsYXNzZXMuam9pbignICcpfSAke3Nob3dQb3B1cCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgIHJlZj17cmVmfVxuICAgID5cbiAgICAgIHt2aWV3ICYmIG5vVmlldyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBfaGFuZGxlclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cCghc2hvd1BvcHVwKX0+XG4gICAgICAgICAge3ZpZXd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY2xhc3NOYW1lPVwicG9wdXBfY29udGFpbmVyXCJcbiAgICAgICAgc2hvd1BvcHVwPXtzaG93UG9wdXB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cCh0cnVlKX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgPlxuICAgICAgICB7dmlldyAmJiAhbm9WaWV3ICYmIHZpZXd9XG4gICAgICAgIHtzaG93UG9wdXAgJiYgKFxuICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cFwiPlxuICAgICAgICAgICAgPFBvcnRhbCByZW5kZXJlcklkPVwicG9wdXBcIj57cG9wdXAgJiYgcG9wdXB9PC9Qb3J0YWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gKHByb3BzLnJhZGl1cyA/IHByb3BzLnJhZGl1cyA6IDMpfXB4O1xuICAke3Byb3BzID0+XG4gICAgcHJvcHMuc2hvd1BvcHVwICYmXG4gICAgY3NzYFxuICAgICAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYH1cblxuICAuYW50LWNoZWNrYm94LWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmFudC1jaGVja2JveC1ncm91cC1pdGVtIHtcbiAgICAgIG1hcmdpbjogOXB4IDA7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRhdGVfcGlja2VyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgLkRhdGVSYW5nZVBpY2tlciB7XG4gICAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuIiwiLy8gSG9va1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU9uQ2xpY2tPdXRzaWRlKHJlZiwgaGFuZGxlcikge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gZXZlbnQgPT4ge1xuICAgICAgLy8gRG8gbm90aGluZyBpZiBjbGlja2luZyByZWYncyBlbGVtZW50IG9yIGRlc2NlbmRlbnQgZWxlbWVudHNcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xuICAgIH07XG4gIH0sIFtyZWYsIGhhbmRsZXJdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudCBhbmQgdW5tb3VudFxufVxuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5cbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3QgTGlzdGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLyogY2hlY2tib3ggZ3JvdXAgY29tcG9uZW50IHN0eWxlICovXG4gIC5hbnQtY2hlY2tib3gtZ3JvdXAge1xuICAgIC5hbnQtY2hlY2tib3gtZ3JvdXAtaXRlbSB7XG4gICAgICAuYW50LWNoZWNrYm94IHtcbiAgICAgICAgLmFudC1jaGVja2JveC1pbm5lciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjEnLCAnIzkwOTA5MCcpfTtcbiAgICAgICAgfVxuICAgICAgICAmLmFudC1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAuYW50LWNoZWNrYm94IHtcbiAgICAgICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogZGF0ZSBwaWNrZXIgY29tcG9uZW50IHN0eWxlICovXG4gIC5EYXRlUmFuZ2VQaWNrZXIge1xuICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XG4gICAgICAuRGF0ZUlucHV0IHtcbiAgICAgICAgLkRhdGVJbnB1dF9pbnB1dCB7XG4gICAgICAgICAgJi5EYXRlSW5wdXRfaW5wdXRfX2ZvY3VzZWQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLkRhdGVJbnB1dF9mYW5nIHtcbiAgICAgICAgICB0b3A6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIHByaWNlIHJhbmdlIGNvbXBvbmVudCBzdHlsZSAqL1xuICAuYW50LXNsaWRlciB7XG4gICAgLmFudC1zbGlkZXItcmFpbCB7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEzJywgJyNFMkUyRTInKX07XG4gICAgfVxuICAgIC5hbnQtc2xpZGVyLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgIH1cbiAgICAuYW50LXNsaWRlci1zdGVwIHtcbiAgICAgIC5hbnQtc2xpZGVyLWRvdCB7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMTMnLCAnI0UyRTJFMicpfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMTMnLCAnI0UyRTJFMicpfTtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5hbnQtc2xpZGVyLWRvdC1hY3RpdmUge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAuYW50LXNsaWRlci10cmFjayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgfVxuICAgICAgLmFudC1zbGlkZXItaGFuZGxlOm5vdCguYW50LXRvb2x0aXAtb3Blbikge1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgfVxuICAgIH1cbiAgICAuYW50LXNsaWRlci1oYW5kbGUge1xuICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyOiA2cHggc29saWQgJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAycHggJHt0aGVtZUdldCgnY29sb3IuNScsICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyl9O1xuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgIC5hbnQtc2xpZGVyLW1hcmsge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIC5hbnQtc2xpZGVyLW1hcmstdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIHRvb2xiYXIgYXJlYSBzdHlsZSAqL1xuICAudG9vbGJhciB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDc4cHg7XG4gICAgfVxuICB9XG5cbiAgLyogbG9hZCBtb3JlIHdyYXBwZXIgc3R5bGUgKi9cbiAgLmxvYWRtb3JlX3dyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgPiBidXR0b24ge1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgbWluLXdpZHRoOiAxMTVweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgIH1cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNob3dNYXBDaGVja2JveCA9IHN0eWxlZC5kaXZgXG4gIC5hbnQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuXG4gIC5hbnQtY2hlY2tib3gge1xuICAgIHRvcDogMDtcbiAgICArIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICB9XG4gIH1cblxuICAuYW50LWNoZWNrYm94LWlubmVyIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xuICB9XG5cbiAgLmFudC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAuYW50LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgLmFudC1jaGVja2JveC1pbm5lciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSgtNTAlLCAtNzAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hbnQtY2hlY2tib3gtd3JhcHBlcjpob3ZlciAuYW50LWNoZWNrYm94LWlubmVyLFxuICAuYW50LWNoZWNrYm94OmhvdmVyIC5hbnQtY2hlY2tib3gtaW5uZXIsXG4gIC5hbnQtY2hlY2tib3gtaW5wdXQ6Zm9jdXMgKyAuYW50LWNoZWNrYm94LWlubmVyIHtcbiAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUG9zdHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gICYuY29sLTI0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbiAgJi5jb2wtMTIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIxcHgpIHtcbiAgICAgIHdpZHRoOiBjYWxjKDYwJSAtIDEyMHB4KTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGaXhlZE1hcCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMicsICcjRjdGN0Y3Jyl9O1xuICByaWdodDogMDtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxNTJweCk7XG4gIHRvcDogMTUycHg7XG4gIHotaW5kZXg6IDk7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gID4gZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgPiBkaXYge1xuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZpbHRlckFyZWEgPSBzdHlsZWQuZGl2YFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBidXR0b24sXG4gIGJ1dHRvbi5hbnQtYnRuIHtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRmlsdGVyRWxlbWVudHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmFjY29yZGlvbiB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zNXB4O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjhweCk7XG5cbiAgICAvKiBhY2NvcmRpb24gaXRlbSBzdHlsZSAqL1xuICAgIC5hY2NvcmRpb25fX2l0ZW0ge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICAvKiBhY2NvcmRpb24gaGVhZGluZyBhcmVhIHN0eWxlICovXG4gICAgICAuYWNjb3JkaW9uX19oZWFkaW5nIHtcbiAgICAgICAgLmFjY29yZGlvbl9fYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAyOXB4IDA7XG4gICAgICAgICAgJjpob3ZlcixcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJjMmMyYycpfTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBhY2NvcmRpb24gcGFuZWwgYXJlYSBzdHlsZSAqL1xuICAgICAgLmFjY29yZGlvbl9fcGFuZWwge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjlweDtcbiAgICAgICAgYW5pbWF0aW9uOiAwLjI1cyAke2ZhZGVJbn0gZWFzZTtcbiAgICAgICAgJltoaWRkZW5dIHtcbiAgICAgICAgICBhbmltYXRpb246IDAuMjVzICR7ZmFkZUlufSBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogZGF0ZSBwaWNrZXIgY29tcG9uZW50IHN0eWxlICovXG4gICAgICAgIC5kYXRlX3BpY2tlciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAuRGF0ZVJhbmdlUGlja2VyIHtcbiAgICAgICAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICAgICAgICAgICAgLkRhdGVJbnB1dF9fc21hbGwge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDJweDtcbiAgICAgICAgICAgICAgICAuRGF0ZUlucHV0X2lucHV0X19zbWFsbCB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDEwcHggMTBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuRGF0ZVJhbmdlUGlja2VyX3BpY2tlciB7XG4gICAgICAgICAgICAgIGxlZnQ6IDFweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGNoZWNrYm94IGdyb3VwIHN0eWxlICovXG4gICAgICAgIC5hbnQtY2hlY2tib3gtZ3JvdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAuYW50LWNoZWNrYm94LWdyb3VwLWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIC5hbnQtY2hlY2tib3gge1xuICAgICAgICAgICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMScsICcjOTA5MDkwJyl9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICYuYW50LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgICAgICAgICAgIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIC5hbnQtY2hlY2tib3gge1xuICAgICAgICAgICAgICAgIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBwcmljZSByYW5nZSBjb21wb25lbnQgc3R5bGUgKi9cbiAgICAgICAgLmFudC1zbGlkZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAuYW50LXNsaWRlci1yYWlsIHtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMTMnLCAnI0UyRTJFMicpfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFudC1zbGlkZXItdHJhY2sge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbnQtc2xpZGVyLXN0ZXAge1xuICAgICAgICAgICAgLmFudC1zbGlkZXItZG90IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xMycsICcjRTJFMkUyJyl9O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xMycsICcjRTJFMkUyJyl9O1xuICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmLmFudC1zbGlkZXItZG90LWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC5hbnQtc2xpZGVyLXRyYWNrIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYW50LXNsaWRlci1oYW5kbGU6bm90KC5hbnQtdG9vbHRpcC1vcGVuKSB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbnQtc2xpZGVyLWhhbmRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDZweCBzb2xpZCAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAke3RoZW1lR2V0KCdjb2xvci41JywgJ3JnYmEoMCwgMCwgMCwgMC4yNSknKX07XG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmFudC1zbGlkZXItbWFyayB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgLmFudC1zbGlkZXItbWFyay10ZXh0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGJ1dHRvbi5hbnQtYnRuIHtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICAmLmFudC1idG4tcHJpbWFyeSB7XG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0aW5nV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgTWFwIGZyb20gJ2NvbXBvbmVudHMvTWFwL01hcCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgeyBGaXhlZE1hcCB9IGZyb20gJy4vTGlzdGluZy5zdHlsZSc7XG5cbmNvbnN0IExpc3RpbmdNYXAgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBtYXBEYXRhLCBsb2FkaW5nIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Rml4ZWRNYXA+XG4gICAgICB7aXNFbXB0eShtYXBEYXRhKSB8fCBsb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGVyIC8+XG4gICAgICApIDogKFxuICAgICAgICA8TWFwIGxvY2F0aW9uPXttYXBEYXRhfSBtdWx0aXBsZT17dHJ1ZX0gLz5cbiAgICAgICl9XG4gICAgPC9GaXhlZE1hcD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdNYXA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IFZpZXdXaXRoUG9wdXAgZnJvbSAnY29tcG9uZW50cy9VSS9WaWV3V2l0aFBvcHVwL1ZpZXdXaXRoUG9wdXAnO1xuaW1wb3J0IHsgU2xpZGVyLCBCdXR0b24sIENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgSW5wdXRJbmNEZWMgZnJvbSAnY29tcG9uZW50cy9VSS9JbnB1dEluY0RlYy9JbnB1dEluY0RlYyc7XG5pbXBvcnQgRGF0ZVJhbmdlUGlja2VyQm94IGZyb20gJ2NvbXBvbmVudHMvVUkvRGF0ZVBpY2tlci9SZWFjdERhdGVzJztcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tICdjb250ZXh0L1NlYXJjaFByb3ZpZGVyJztcbmltcG9ydCB7IHNldFN0YXRlVG9VcmwgfSBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvdXJsX2hhbmRsZXInO1xuaW1wb3J0IHtcbiAgcHJpY2VJbml0LFxuICBjYWxlbmRlckl0ZW0sXG4gIGdldEFtZW5pdGllcyxcbiAgZ2V0UHJvcGVydHlUeXBlLFxufSBmcm9tICcuLi9TZWFyY2hQYXJhbXMnO1xuaW1wb3J0IENhdGVncm95U2VhcmNoV3JhcHBlciwge1xuICBSb29tR3Vlc3RXcmFwcGVyLFxuICBJdGVtV3JhcHBlcixcbiAgQWN0aW9uV3JhcHBlcixcbn0gZnJvbSAnLi9DYXRlZ29yeVNlYXJjaC5zdHlsZSc7XG5cbmNvbnN0IGhpc3RvcnkgPSBwcm9jZXNzLmJyb3dzZXIgPyBjcmVhdGVCcm93c2VySGlzdG9yeSgpIDogZmFsc2U7XG5jb25zdCBsb2NhdGlvbiA9IHByb2Nlc3MuYnJvd3NlciAmJiB3aW5kb3cubG9jYXRpb247XG5cbmZ1bmN0aW9uIHNlcmNoUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdhbWVuaXRpZXMnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFtZW5pdGllczogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlICdwcm9wZXJ0eSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvcGVydHk6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnZGF0ZV9yYW5nZSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2V0U3RhcnREYXRlOiBhY3Rpb24ucGF5bG9hZC5zZXRTdGFydERhdGUsXG4gICAgICAgIHNldEVuZERhdGU6IGFjdGlvbi5wYXlsb2FkLnNldEVuZERhdGUsXG4gICAgICB9O1xuICAgIGNhc2UgJ3ByaWNlJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtaW5QcmljZTogYWN0aW9uLnBheWxvYWQubWluUHJpY2UsXG4gICAgICAgIG1heFByaWNlOiBhY3Rpb24ucGF5bG9hZC5tYXhQcmljZSxcbiAgICAgIH07XG4gICAgY2FzZSAncm9vbUd1ZXN0UmVzZXQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJvb206IGFjdGlvbi5wYXlsb2FkLnJvb20sXG4gICAgICAgIGd1ZXN0OiBhY3Rpb24ucGF5bG9hZC5ndWVzdCxcbiAgICAgIH07XG4gICAgY2FzZSAncmVzZXQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5jb25zdCBDYXRlZ29yeVNlYXJjaE5leHQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBhbWVuaXRpZXM6IHN0YXRlLmFtZW5pdGllcyB8fCBbXSxcbiAgICBwcm9wZXJ0eTogc3RhdGUucHJvcGVydHkgfHwgW10sXG4gICAgc2V0U3RhcnREYXRlOiBzdGF0ZS5zZXRTdGFydERhdGUgfHwgbnVsbCxcbiAgICBzZXRFbmREYXRlOiBzdGF0ZS5zZXRFbmREYXRlIHx8IG51bGwsXG4gICAgbWluUHJpY2U6IHBhcnNlSW50KHN0YXRlLm1pblByaWNlKSB8fCAwLFxuICAgIG1heFByaWNlOiBwYXJzZUludChzdGF0ZS5tYXhQcmljZSkgfHwgMTAwLFxuICAgIGxvY2F0aW9uX2xhdDogc3RhdGUubG9jYXRpb25fbGF0IHx8IG51bGwsXG4gICAgbG9jYXRpb25fbG5nOiBzdGF0ZS5sb2NhdGlvbl9sbmcgfHwgbnVsbCxcbiAgICByb29tOiBwYXJzZUludChzdGF0ZS5yb29tKSB8fCAwLFxuICAgIGd1ZXN0OiBwYXJzZUludChzdGF0ZS5ndWVzdCkgfHwgMCxcbiAgfTtcblxuICAvLyBjdXJyZW50IGNvbXBvbmVudCBzdGF0ZSB3aXRoIGRpc3BhdGNoaW5nIHRvIHJlZHVjZXJcbiAgY29uc3QgW2N1cnJlbnQsIGRpc3BhdGNoQ3VycmVudF0gPSB1c2VSZWR1Y2VyKHNlcmNoUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgLy8gUm9vbSBndWVzdCBzdGF0ZVxuICBjb25zdCBbY291bnRSb29tLCBzZXRSb29tXSA9IHVzZVN0YXRlKGN1cnJlbnQucm9vbSk7XG4gIGNvbnN0IFtjb3VudEd1ZXN0LCBzZXRHdWVzdF0gPSB1c2VTdGF0ZShjdXJyZW50Lmd1ZXN0KTtcblxuICAvLyBkYXRhIGhhbmRsaW5nXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgbGV0IG1vZGlmaWVkQ3VycmVudCA9IGN1cnJlbnQ7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtb2RpZmllZEN1cnJlbnQpIHtcbiAgICAgIGlmIChtb2RpZmllZEN1cnJlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ2RhdGVfcmFuZ2UnOlxuICAgICAgICAgICAgZGVsZXRlIG1vZGlmaWVkQ3VycmVudC5kYXRlX3JhbmdlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncHJpY2UnOlxuICAgICAgICAgICAgZGVsZXRlIG1vZGlmaWVkQ3VycmVudC5wcmljZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdkYXRlX3JhbmdlJykge1xuICAgICAgcXVlcnkgPSB7XG4gICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgIHNldFN0YXJ0RGF0ZTogdmFsdWUuc2V0U3RhcnREYXRlLFxuICAgICAgICBzZXRFbmREYXRlOiB2YWx1ZS5zZXRFbmREYXRlLFxuICAgICAgfTtcbiAgICAgIGRpc3BhdGNoQ3VycmVudCh7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHZhbHVlIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ByaWNlJykge1xuICAgICAgcXVlcnkgPSB7XG4gICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgIG1pblByaWNlOiB2YWx1ZSA/IHZhbHVlWzBdIDogMCxcbiAgICAgICAgbWF4UHJpY2U6IHZhbHVlID8gdmFsdWVbMV0gOiAxMDAsXG4gICAgICB9O1xuICAgICAgZGlzcGF0Y2hDdXJyZW50KHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcXVlcnkgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAncmVzZXQnKSB7XG4gICAgICBzZXRSb29tKDApO1xuICAgICAgc2V0R3Vlc3QoMCk7XG4gICAgICBxdWVyeSA9IHtcbiAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgc2V0U3RhcnREYXRlOiBudWxsLFxuICAgICAgICBzZXRFbmREYXRlOiBudWxsLFxuICAgICAgICByb29tOiAwLFxuICAgICAgICBndWVzdDogMCxcbiAgICAgICAgYW1lbml0aWVzOiBbXSxcbiAgICAgICAgcHJvcGVydHk6IFtdLFxuICAgICAgICBtaW5QcmljZTogMCxcbiAgICAgICAgbWF4UHJpY2U6IDEwMCxcbiAgICAgICAgbG9jYXRpb25fbGF0OiBudWxsLFxuICAgICAgICBsb2NhdGlvbl9sbmc6IG51bGwsXG4gICAgICB9O1xuICAgICAgZGlzcGF0Y2hDdXJyZW50KHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcXVlcnkgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5ID0ge1xuICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICBbdHlwZV06IHZhbHVlLFxuICAgICAgfTtcbiAgICAgIGRpc3BhdGNoQ3VycmVudCh7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHZhbHVlIH0pO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPSBzZXRTdGF0ZVRvVXJsKHF1ZXJ5KTtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnVVBEQVRFJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgLi4ucXVlcnksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGhpc3RvcnkucHVzaCh7XG4gICAgICAuLi5sb2NhdGlvbixcbiAgICAgIHNlYXJjaDogcGFyYW1zLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJvb21HdWVzdEFwcGx5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgLi4uY3VycmVudCxcbiAgICAgIHJvb206IGNvdW50Um9vbSxcbiAgICAgIGd1ZXN0OiBjb3VudEd1ZXN0LFxuICAgIH07XG4gICAgY29uc3QgcGFyYW1zID0gc2V0U3RhdGVUb1VybChxdWVyeSk7XG4gICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgIC4uLmxvY2F0aW9uLFxuICAgICAgc2VhcmNoOiBwYXJhbXMsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUm9vbUd1ZXN0Q2FuY2VsID0gKCkgPT4ge1xuICAgIHNldFJvb20oMCk7XG4gICAgc2V0R3Vlc3QoMCk7XG4gICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAuLi5jdXJyZW50LFxuICAgICAgcm9vbTogMCxcbiAgICAgIGd1ZXN0OiAwLFxuICAgIH07XG4gICAgZGlzcGF0Y2hDdXJyZW50KHsgdHlwZTogJ3Jvb21HdWVzdFJlc2V0JywgcGF5bG9hZDogcXVlcnkgfSk7XG4gICAgY29uc3QgcGFyYW1zID0gc2V0U3RhdGVUb1VybChxdWVyeSk7XG4gICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgIC4uLmxvY2F0aW9uLFxuICAgICAgc2VhcmNoOiBwYXJhbXMsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGF0ZVJhbmdlQWN0aXZhdGVDbGFzcyA9XG4gICAgY3VycmVudCAmJlxuICAgIGN1cnJlbnQuc2V0U3RhcnREYXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICBjdXJyZW50LnNldEVuZERhdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgIGN1cnJlbnQuc2V0U3RhcnREYXRlICE9PSBudWxsICYmXG4gICAgY3VycmVudC5zZXRFbmREYXRlICE9PSBudWxsXG4gICAgICA/ICdhY3RpdmF0ZWQnXG4gICAgICA6ICcnO1xuXG4gIGNvbnN0IHByaWNlUmFuZ2VBY3RpdmF0ZUNsYXNzID1cbiAgICBjdXJyZW50ICYmXG4gICAgY3VycmVudC5taW5QcmljZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgY3VycmVudC5tYXhQcmljZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgY3VycmVudC5taW5QcmljZSA9PT0gMCAmJlxuICAgIGN1cnJlbnQubWF4UHJpY2UgPT09IDEwMFxuICAgICAgPyAnJ1xuICAgICAgOiAnYWN0aXZhdGVkJztcblxuICBsZXQgYW1lbml0aWVzTGVuZ3RoID0gMDtcbiAgbGV0IHByb3BlcnR5TGVuZ3RoID0gMDtcbiAgbGV0IGFtZW5pdGllcyA9IFtdO1xuICBsZXQgcHJvcGVydHkgPSBbXTtcblxuICBpZiAoY3VycmVudCAmJiBjdXJyZW50LmFtZW5pdGllcyAmJiB0eXBlb2YgY3VycmVudC5hbWVuaXRpZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgYW1lbml0aWVzID0gY3VycmVudC5hbWVuaXRpZXMuc3BsaXQoJywnKTtcbiAgICBhbWVuaXRpZXNMZW5ndGggPSBhbWVuaXRpZXMubGVuZ3RoO1xuICB9IGVsc2UgaWYgKGN1cnJlbnQgJiYgY3VycmVudC5hbWVuaXRpZXMgJiYgY3VycmVudC5hbWVuaXRpZXMubGVuZ3RoKSB7XG4gICAgYW1lbml0aWVzID0gY3VycmVudC5hbWVuaXRpZXM7XG4gICAgYW1lbml0aWVzTGVuZ3RoID0gYW1lbml0aWVzLmxlbmd0aDtcbiAgfVxuXG4gIGlmIChjdXJyZW50ICYmIGN1cnJlbnQucHJvcGVydHkgJiYgdHlwZW9mIGN1cnJlbnQucHJvcGVydHkgPT09ICdzdHJpbmcnKSB7XG4gICAgcHJvcGVydHkgPSBjdXJyZW50LnByb3BlcnR5LnNwbGl0KCcsJyk7XG4gICAgcHJvcGVydHlMZW5ndGggPSBwcm9wZXJ0eS5sZW5ndGg7XG4gIH0gZWxzZSBpZiAoY3VycmVudCAmJiBjdXJyZW50LnByb3BlcnR5ICYmIGN1cnJlbnQucHJvcGVydHkubGVuZ3RoKSB7XG4gICAgcHJvcGVydHkgPSBjdXJyZW50LnByb3BlcnR5O1xuICAgIHByb3BlcnR5TGVuZ3RoID0gY3VycmVudC5wcm9wZXJ0eS5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXRlZ3JveVNlYXJjaFdyYXBwZXI+XG4gICAgICA8Vmlld1dpdGhQb3B1cFxuICAgICAgICBjbGFzc05hbWU9e2FtZW5pdGllc0xlbmd0aCA/ICdhY3RpdmF0ZWQnIDogJyd9XG4gICAgICAgIGtleT17Z2V0QW1lbml0aWVzLmlkfVxuICAgICAgICBub1ZpZXc9e3RydWV9XG4gICAgICAgIHZpZXc9e1xuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgIHtnZXRBbWVuaXRpZXMubmFtZX1cbiAgICAgICAgICAgIHthbWVuaXRpZXNMZW5ndGggPiAwICYmIGA6ICR7YW1lbml0aWVzTGVuZ3RofWB9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxDaGVja2JveC5Hcm91cFxuICAgICAgICAgICAgb3B0aW9ucz17Z2V0QW1lbml0aWVzLm9wdGlvbnN9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FtZW5pdGllc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKHZhbHVlLCAnYW1lbml0aWVzJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgLz5cblxuICAgICAgPFZpZXdXaXRoUG9wdXBcbiAgICAgICAgY2xhc3NOYW1lPXtwcm9wZXJ0eUxlbmd0aCA/ICdhY3RpdmF0ZWQnIDogJyd9XG4gICAgICAgIGtleT17Z2V0UHJvcGVydHlUeXBlLmlkfVxuICAgICAgICBub1ZpZXc9e3RydWV9XG4gICAgICAgIHZpZXc9e1xuICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlZmF1bHRcIj5cbiAgICAgICAgICAgIHtnZXRQcm9wZXJ0eVR5cGUubmFtZX1cbiAgICAgICAgICAgIHtwcm9wZXJ0eUxlbmd0aCA+IDAgJiYgYDogJHtwcm9wZXJ0eUxlbmd0aH1gfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8Q2hlY2tib3guR3JvdXBcbiAgICAgICAgICAgIG9wdGlvbnM9e2dldFByb3BlcnR5VHlwZS5vcHRpb25zfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wZXJ0eX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKHZhbHVlLCAncHJvcGVydHknKX1cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAvPlxuXG4gICAgICA8Vmlld1dpdGhQb3B1cFxuICAgICAgICBjbGFzc05hbWU9e2RhdGVSYW5nZUFjdGl2YXRlQ2xhc3N9XG4gICAgICAgIGtleT17NDAwfVxuICAgICAgICBub1ZpZXc9e3RydWV9XG4gICAgICAgIHZpZXc9ezxCdXR0b24gdHlwZT1cImRlZmF1bHRcIj5DaG9vc2UgRGF0ZTwvQnV0dG9uPn1cbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJCb3hcbiAgICAgICAgICAgIHN0YXJ0RGF0ZUlkPVwic3RhcnREYXRlLWlkLWNhdGVnb3J5XCJcbiAgICAgICAgICAgIGVuZERhdGVJZD1cImVuZERhdGUtaWQtY2F0ZWdvcnlcIlxuICAgICAgICAgICAgc3RhcnREYXRlPXtcbiAgICAgICAgICAgICAgY3VycmVudC5zZXRTdGFydERhdGUgPyBtb21lbnQoY3VycmVudC5zZXRTdGFydERhdGUpIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5kRGF0ZT17Y3VycmVudC5zZXRFbmREYXRlID8gbW9tZW50KGN1cnJlbnQuc2V0RW5kRGF0ZSkgOiBudWxsfVxuICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9ezF9XG4gICAgICAgICAgICBzbWFsbD17dHJ1ZX1cbiAgICAgICAgICAgIGl0ZW09e2NhbGVuZGVySXRlbX1cbiAgICAgICAgICAgIHVwZGF0ZVNlYXJjaERhdGE9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWUsICdkYXRlX3JhbmdlJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgfVxuICAgICAgLz5cblxuICAgICAgPFZpZXdXaXRoUG9wdXBcbiAgICAgICAgY2xhc3NOYW1lPXtwcmljZVJhbmdlQWN0aXZhdGVDbGFzc31cbiAgICAgICAga2V5PXszMDB9XG4gICAgICAgIG5vVmlldz17dHJ1ZX1cbiAgICAgICAgdmlldz17XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAge2N1cnJlbnQubWluUHJpY2UgPiAwIHx8IGN1cnJlbnQubWF4UHJpY2UgPCAxMDBcbiAgICAgICAgICAgICAgPyBgUHJpY2UgUmFuZ2U6ICR7Y3VycmVudC5taW5QcmljZX0sICR7Y3VycmVudC5tYXhQcmljZX1gXG4gICAgICAgICAgICAgIDogYFByaWNlIHBlciBuaWdodGB9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIH1cbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIHJhbmdlXG4gICAgICAgICAgICBtYXJrcz17cHJpY2VJbml0fVxuICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgbWF4PXsxMDB9XG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e1tjdXJyZW50Lm1pblByaWNlLCBjdXJyZW50Lm1heFByaWNlXX1cbiAgICAgICAgICAgIG9uQWZ0ZXJDaGFuZ2U9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWUsICdwcmljZScpfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgIC8+XG5cbiAgICAgIDxWaWV3V2l0aFBvcHVwXG4gICAgICAgIGtleT17MjAwfVxuICAgICAgICBub1ZpZXc9e3RydWV9XG4gICAgICAgIGNsYXNzTmFtZT17Y291bnRSb29tIHx8IGNvdW50R3Vlc3QgPyAnYWN0aXZhdGVkJyA6ICcnfVxuICAgICAgICB2aWV3PXtcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICBSb29tIHtjb3VudFJvb20gPiAwICYmIGA6ICR7Y291bnRSb29tfWB9LCBHdWVzdFxuICAgICAgICAgICAge2NvdW50R3Vlc3QgPiAwICYmIGA6ICR7Y291bnRHdWVzdH1gfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB9XG4gICAgICAgIHBvcHVwPXtcbiAgICAgICAgICA8Um9vbUd1ZXN0V3JhcHBlcj5cbiAgICAgICAgICAgIDxJdGVtV3JhcHBlcj5cbiAgICAgICAgICAgICAgPHN0cm9uZz5Sb29tPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxJbnB1dEluY0RlY1xuICAgICAgICAgICAgICAgIGlkPVwicm9vbVwiXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50PXsoKSA9PiBzZXRSb29tKChjb3VudFJvb20pID0+IGNvdW50Um9vbSArIDEpfVxuICAgICAgICAgICAgICAgIGRlY3JlbWVudD17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHNldFJvb20oKGNvdW50Um9vbSkgPT4gY291bnRSb29tID4gMCAmJiBjb3VudFJvb20gLSAxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJvb20oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudFJvb219XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0l0ZW1XcmFwcGVyPlxuXG4gICAgICAgICAgICA8SXRlbVdyYXBwZXI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+R3Vlc3Q8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPElucHV0SW5jRGVjXG4gICAgICAgICAgICAgICAgaWQ9XCJndWVzdFwiXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50PXsoKSA9PiBzZXRHdWVzdCgoY291bnRHdWVzdCkgPT4gY291bnRHdWVzdCArIDEpfVxuICAgICAgICAgICAgICAgIGRlY3JlbWVudD17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHNldEd1ZXN0KChjb3VudEd1ZXN0KSA9PiBjb3VudEd1ZXN0ID4gMCAmJiBjb3VudEd1ZXN0IC0gMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRHdWVzdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvdW50R3Vlc3R9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0l0ZW1XcmFwcGVyPlxuXG4gICAgICAgICAgICA8QWN0aW9uV3JhcHBlcj5cbiAgICAgICAgICAgICAge2NvdW50Um9vbSB8fCBjb3VudEd1ZXN0ID8gKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlZmF1bHRcIiBvbkNsaWNrPXtoYW5kbGVSb29tR3Vlc3RDYW5jZWx9PlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVJvb21HdWVzdEFwcGx5fT5cbiAgICAgICAgICAgICAgICBBcHBseVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQWN0aW9uV3JhcHBlcj5cbiAgICAgICAgICA8L1Jvb21HdWVzdFdyYXBwZXI+XG4gICAgICAgIH1cbiAgICAgIC8+XG5cbiAgICAgIDxWaWV3V2l0aFBvcHVwXG4gICAgICAgIGtleT17MTAwfVxuICAgICAgICBub1ZpZXc9e3RydWV9XG4gICAgICAgIHZpZXc9ezxCdXR0b24gdHlwZT1cImRlZmF1bHRcIj5SZXNldDwvQnV0dG9uPn1cbiAgICAgICAgcG9wdXA9e1xuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gb25DaGFuZ2UoaW5pdGlhbFN0YXRlLCAncmVzZXQnKX0+XG4gICAgICAgICAgICBSZXNldCBTZWFyY2ggUGFnZSBVUkxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L0NhdGVncm95U2VhcmNoV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5U2VhcmNoTmV4dDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBDYXRlZ3JveVNlYXJjaFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC52aWV3X3dpdGhfX3BvcHVwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG5cbiAgICAucG9wdXBfaGFuZGxlciB7XG4gICAgICBidXR0b24sXG4gICAgICBidXR0b24uYW50LWJ0biB7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICAgICAgfVxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIC5wb3B1cF9oYW5kbGVyIHtcbiAgICAgICAgYnV0dG9uLFxuICAgICAgICBidXR0b24uYW50LWJ0biB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICB9XG5cbiAgICAgICAgJiArIC5wb3B1cF9jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDcwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2YXRlZCB7XG4gICAgICAucG9wdXBfaGFuZGxlciB7XG4gICAgICAgIGJ1dHRvbixcbiAgICAgICAgYnV0dG9uLmFudC1idG4ge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnBvcHVwX2NvbnRhaW5lciB7XG4gICAgICAjcG9wdXAge1xuICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgPiBidXR0b24sXG4gICAgICAgICAgPiAuYW50LWJ0biB7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGF0ZV9waWNrZXIge1xuICAgIC5EYXRlUmFuZ2VQaWNrZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG4gICAgICAgIC5EYXRlSW5wdXRfX3NtYWxsIHtcbiAgICAgICAgICB3aWR0aDogMTAycHg7XG4gICAgICAgICAgLkRhdGVJbnB1dF9pbnB1dF9fc21hbGwge1xuICAgICAgICAgICAgcGFkZGluZzogMTJweCAxMHB4IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFJvb21HdWVzdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgc3Ryb25nIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAucXVhbnRpdHkge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBpbnB1dCB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIGJ1dHRvbi5idG4gc3ZnIHtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAyN3B4O1xuXG4gIC5hbnQtYnRuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMicsICcjNzc3Nzc3Jyl9O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjEnLCAnIzkwOTA5MCcpfTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMScsICcjOTA5MDkwJyl9O1xuICAgIH1cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJi5hbnQtYnRuLXByaW1hcnkge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjEnLCAnIzM5OUM5RicpfTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4xJywgJyMzOTlDOUYnKX07XG4gICAgICB9XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgICY6bm90KFtkaXNhYmxlZF0pOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdyb3lTZWFyY2hXcmFwcGVyO1xuIiwiLy8gZGVmYXVsdCBkYXRhIGZvciBmaWx0ZXIgZWxlbWVudHNcbmV4cG9ydCBjb25zdCBwcmljZUluaXQgPSB7XG4gIDA6ICckMCcsXG4gIDEwMDogJyQxMDAnLFxufTtcblxuZXhwb3J0IGNvbnN0IGNhbGVuZGVySXRlbSA9IHtcbiAgc2VwYXJhdG9yOiAnLScsXG4gIGZvcm1hdDogJ01NLURELVlZWVknLFxuICBsb2NhbGU6ICdlbicsXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QW1lbml0aWVzID0ge1xuICBpZDogMSxcbiAgbmFtZTogJ0FtZW5pdGllcycsXG4gIGlkZW50aWZpZXI6ICdhbWVuaXRpZXMnLFxuICBvcHRpb25zOiBbXG4gICAgeyBsYWJlbDogJ0ZyZWUgV2ktRmknLCB2YWx1ZTogJ2ZyZWUtd2lmaScgfSxcbiAgICB7IGxhYmVsOiAnRnJlZSBQYXJraW5nJywgdmFsdWU6ICdmcmVlLXBhcmtpbmcnIH0sXG4gICAgeyBsYWJlbDogJ0JyZWFrZmFzdCBpbmNsdWRlZCcsIHZhbHVlOiAnYnJlYWtmYXN0JyB9LFxuICAgIHsgbGFiZWw6ICdQb29sJywgdmFsdWU6ICdwb29sJyB9LFxuICAgIHsgbGFiZWw6ICdBaXIgQ29uZGl0aW9uaW5nJywgdmFsdWU6ICdhaXItY29uZGl0aW9uJyB9LFxuICAgIHsgbGFiZWw6ICdIb3QgU2hvd2VyJywgdmFsdWU6ICdob3Qtc2hvd2VyJyB9LFxuICAgIHsgbGFiZWw6ICdDYWJsZSBUVicsIHZhbHVlOiAnY2FibGUtdHYnIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UHJvcGVydHlUeXBlID0ge1xuICBpZDogMixcbiAgbmFtZTogJ1Byb3BlcnR5IFR5cGUnLFxuICBpZGVudGlmaWVyOiAncHJvcGVydHktdHlwZScsXG4gIG9wdGlvbnM6IFtcbiAgICB7IGxhYmVsOiAnVmlsbGEnLCB2YWx1ZTogJ3ZpbGxhJyB9LFxuICAgIHsgbGFiZWw6ICdIb3RlbCcsIHZhbHVlOiAnaG90ZWwnIH0sXG4gICAgeyBsYWJlbDogJ1Jlc29ydCcsIHZhbHVlOiAncmVzb3J0JyB9LFxuICAgIHsgbGFiZWw6ICdDb3R0YWdlJywgdmFsdWU6ICdjb3R0YWdlJyB9LFxuICAgIHsgbGFiZWw6ICdEdXBsZXgnLCB2YWx1ZTogJ2R1cGxleCcgfSxcbiAgICB7IGxhYmVsOiAnTGFuZHNjYXBlJywgdmFsdWU6ICdsYW5kc2NhcGUnIH0sXG4gIF0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1VQREFURSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hQcm92aWRlciA9ICh7IGNoaWxkcmVuLCBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBxdWVyeSk7XG4gIHJldHVybiAoXG4gICAgPFNlYXJjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2VhcmNoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBzaHVmZmxlIGZyb20gJ2xvZGFzaC9zaHVmZmxlJztcblxuY29uc3QgRmV0Y2hBUElEYXRhID0gKHVybCkgPT4ge1xuICByZXR1cm4gZmV0Y2godXJsKVxuICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgUHJvY2Vzc0FQSURhdGEgPSAoYXBpRGF0YSkgPT4ge1xuICBsZXQgZmV0Y2hEYXRhID0ge307XG4gIGlmIChhcGlEYXRhKSB7XG4gICAgYXBpRGF0YS5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcbiAgICAgIGZldGNoRGF0YS5kYXRhID0gaXRlbS5kYXRhID8gWy4uLml0ZW0uZGF0YV0gOiBbXTtcbiAgICAgIGZldGNoRGF0YS5uYW1lID0gaXRlbS5uYW1lID8gaXRlbS5uYW1lIDogJyc7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGZldGNoRGF0YSA/IGZldGNoRGF0YS5kYXRhIDogW107XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaGVkRGF0YSA9IChwcm9jZXNzZWREYXRhKSA9PiB7XG4gIGNvbnN0IHJhbmROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCArIDEpO1xuICBjb25zdCBkYXRhID0gc2h1ZmZsZShwcm9jZXNzZWREYXRhLnNsaWNlKDAsIHJhbmROdW1iZXIpKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgU2VhcmNoU3RhdGVLZXlDaGVjayA9IChzdGF0ZSkgPT4ge1xuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoXG4gICAgICBzdGF0ZVtrZXldICE9PSBudWxsICYmXG4gICAgICBzdGF0ZVtrZXldICE9ICcnICYmXG4gICAgICBzdGF0ZVtrZXldICE9IFtdICYmXG4gICAgICBzdGF0ZVtrZXldICE9IDAgJiZcbiAgICAgIHN0YXRlW2tleV0gIT0gMTAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IFBhZ2luYXRvciA9IChwb3N0cywgcHJvY2Vzc2VkRGF0YSwgbGltaXQpID0+IHtcbiAgcmV0dXJuIFsuLi5wb3N0cywgLi4ucHJvY2Vzc2VkRGF0YS5zbGljZShwb3N0cy5sZW5ndGgsIHBvc3RzLmxlbmd0aCArIGxpbWl0KV07XG59O1xuXG5jb25zdCBHZXRBUElEYXRhID0gYXN5bmMgKGFwaVVybCkgPT4ge1xuICBjb25zdCBwcm9taXNlcyA9IGFwaVVybC5tYXAoYXN5bmMgKHJlcG8pID0+IHtcbiAgICBjb25zdCBhcGlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuU0VSVkVSX0FQSX0vc3RhdGljL2RhdGFgOyAvLyByZWFkIGl0IGZyb20gZW52IHZhcmlhYmxlXG4gICAgY29uc3QgYXBpID0gYCR7YXBpUGF0aH0vJHtyZXBvLmVuZHBvaW50fS5qc29uYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEZldGNoQVBJRGF0YShhcGkpO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiByZXBvLm5hbWUsXG4gICAgICBkYXRhOiByZXNwb25zZSxcbiAgICB9O1xuICB9KTtcbiAgY29uc3QgcmVjZXZpZWREYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICByZXR1cm4gcmVjZXZpZWREYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2V0QVBJRGF0YTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmxldCBkaXJlY3Rpb24gPSAnbHRyJztcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBkaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmdldEF0dHJpYnV0ZSgnZGlyJyk7XG59XG5jb25zdCB3aXRoRGlyZWN0aW9uID0gQ29tcG9uZW50ID0+IHByb3BzID0+IHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBkYXRhLXJ0bD17ZGlyZWN0aW9ufSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXJlY3Rpb247XG5leHBvcnQgeyBkaXJlY3Rpb24gfTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwodXJsRGF0YSkge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModXJsRGF0YSk7XG4gIGxldCBzZWFyY2ggPSAnJztcbiAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKFxuICAgICAgdXJsRGF0YVtrZXldICYmXG4gICAgICB1cmxEYXRhW2tleV0gIT09IG51bGwgJiZcbiAgICAgIHVybERhdGFba2V5XSAhPT0gJycgJiZcbiAgICAgIHVybERhdGFba2V5XSAhPT0gJywnICYmXG4gICAgICB1cmxEYXRhW2tleV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdXJsRGF0YVtrZXldLmxlbmd0aCAhPT0gMFxuICAgICkge1xuICAgICAgLy8gc2VhcmNoW2tleV0gPSB1cmxEYXRhW2tleV07XG4gICAgICBzZWFyY2ggKz0gYCR7a2V5fT0ke3VybERhdGFba2V5XX0mYDtcbiAgICB9XG4gIH0pO1xuICAvLyByZXR1cm4gc2VhcmNoO1xuICByZXR1cm4gc2VhcmNoLnN1YnN0cmluZygwLCBzZWFyY2gubGVuZ3RoIC0gMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0ZVRvVXJsKHN0YXRlKSB7XG4gIGxldCB1cmxEYXRhID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ3NldFN0YXJ0RGF0ZSc6XG4gICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XSA/IHN0YXRlW2tleV0gOiAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2V0RW5kRGF0ZSc6XG4gICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XSA/IHN0YXRlW2tleV0gOiAnJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWluUHJpY2UnOlxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldICYmIHN0YXRlW2tleV0gPiAwKSB7XG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heFByaWNlJzpcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSAmJiBzdGF0ZVtrZXldIDwgMTAwKSB7XG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FtZW5pdGllcyc6XG4gICAgICAgICAgdXJsRGF0YVtrZXldID1cbiAgICAgICAgICAgIHN0YXRlW2tleV0gJiYgdHlwZW9mIHN0YXRlW2tleV0gIT09ICdzdHJpbmcnICYmIHN0YXRlW2tleV0ubGVuZ3RoXG4gICAgICAgICAgICAgID8gc3RhdGVba2V5XS5qb2luKClcbiAgICAgICAgICAgICAgOiBzdGF0ZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyb29tJzpcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSkge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XSA/IHN0YXRlW2tleV0gOiAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2d1ZXN0JzpcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSkge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XSA/IHN0YXRlW2tleV0gOiAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmxEYXRhW2tleV0gPSAnJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Byb3BlcnR5JzpcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPVxuICAgICAgICAgICAgc3RhdGVba2V5XSAmJiB0eXBlb2Ygc3RhdGVba2V5XSAhPT0gJ3N0cmluZycgJiYgc3RhdGVba2V5XS5sZW5ndGhcbiAgICAgICAgICAgICAgPyBzdGF0ZVtrZXldLmpvaW4oKVxuICAgICAgICAgICAgICA6IHN0YXRlW2tleV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xvY2F0aW9uJzpcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSAmJiBzdGF0ZVtrZXldLmxvY2F0aW9uX2xhdCkge1xuICAgICAgICAgICAgdXJsRGF0YVtgJHtrZXl9X2xhdGBdID0gc3RhdGVba2V5XS5sb2NhdGlvbl9sYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzdGF0ZVtrZXldICYmIHN0YXRlW2tleV0ubG9jYXRpb25fbG5nKSB7XG4gICAgICAgICAgICB1cmxEYXRhW2Ake2tleX1fbG5nYF0gPSBzdGF0ZVtrZXldLmxvY2F0aW9uX2xuZztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Jlc2V0JzpcbiAgICAgICAgICB1cmxEYXRhID0gc3RhdGVba2V5XTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjcmVhdGVVcmwodXJsRGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0ZVRvVXJsX09OX05FWFRfSlNfUk9VVEVSX1BVU0hfVkVSU0lPTihzdGF0ZSkge1xuICBsZXQgdXJsRGF0YSA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdzZXRTdGFydERhdGUnOlxuICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV0gPyBzdGF0ZVtrZXldIDogJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NldEVuZERhdGUnOlxuICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV0gPyBzdGF0ZVtrZXldIDogJyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21pblByaWNlJzpcbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSAmJiBzdGF0ZVtrZXldID4gMCkge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYXhQcmljZSc6XG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XSA8IDEwMCkge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbWVuaXRpZXMnOlxuICAgICAgICAgIHVybERhdGFba2V5XSA9XG4gICAgICAgICAgICBzdGF0ZVtrZXldICYmIHR5cGVvZiBzdGF0ZVtrZXldICE9PSAnc3RyaW5nJyAmJiBzdGF0ZVtrZXldLmxlbmd0aFxuICAgICAgICAgICAgICA/IHN0YXRlW2tleV0uam9pbigpXG4gICAgICAgICAgICAgIDogc3RhdGVba2V5XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncm9vbSc6XG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0pIHtcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV0gPyBzdGF0ZVtrZXldIDogMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdndWVzdCc6XG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0pIHtcbiAgICAgICAgICAgIHVybERhdGFba2V5XSA9IHN0YXRlW2tleV0gPyBzdGF0ZVtrZXldIDogMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsRGF0YVtrZXldID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwcm9wZXJ0eSc6XG4gICAgICAgICAgdXJsRGF0YVtrZXldID1cbiAgICAgICAgICAgIHN0YXRlW2tleV0gJiYgdHlwZW9mIHN0YXRlW2tleV0gIT09ICdzdHJpbmcnICYmIHN0YXRlW2tleV0ubGVuZ3RoXG4gICAgICAgICAgICAgID8gc3RhdGVba2V5XS5qb2luKClcbiAgICAgICAgICAgICAgOiBzdGF0ZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsb2NhdGlvbic6XG4gICAgICAgICAgaWYgKHN0YXRlW2tleV0gJiYgc3RhdGVba2V5XS5sb2NhdGlvbl9sYXQpIHtcbiAgICAgICAgICAgIHVybERhdGFbYCR7a2V5fV9sYXRgXSA9IHN0YXRlW2tleV0ubG9jYXRpb25fbGF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc3RhdGVba2V5XSAmJiBzdGF0ZVtrZXldLmxvY2F0aW9uX2xuZykge1xuICAgICAgICAgICAgdXJsRGF0YVtgJHtrZXl9X2xuZ2BdID0gc3RhdGVba2V5XS5sb2NhdGlvbl9sbmc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgdXJsRGF0YSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB1cmxEYXRhW2tleV0gPSBzdGF0ZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY3JlYXRlVXJsKHVybERhdGEpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdjb21wb25lbnRzL1VJL1Rvb2xiYXIvVG9vbGJhcic7XG5pbXBvcnQgQ2F0ZWdvcnlTZWFyY2ggZnJvbSAnY29udGFpbmVyL0xpc3RpbmcvU2VhcmNoL0NhdGVnb3J5U2VhcmNoL0NhdGVnb3J5U2VhcmNoJztcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgU2VjdGlvbkdyaWQgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uR3JpZC9TZWN0aW9uR3JpZCc7XG5pbXBvcnQgeyBQb3N0UGxhY2Vob2xkZXIgfSBmcm9tICdjb21wb25lbnRzL1VJL0NvbnRlbnRMb2FkZXIvQ29udGVudExvYWRlcic7XG5pbXBvcnQgTGlzdGluZ01hcCBmcm9tICdjb250YWluZXIvTGlzdGluZy9MaXN0aW5nTWFwJztcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tICdjb250ZXh0L1NlYXJjaFByb3ZpZGVyJztcbmltcG9ydCB7IGRldmljZVR5cGUgIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCc7XG5pbXBvcnQgR2V0QVBJRGF0YSwge1xuICBQYWdpbmF0b3IsXG4gIFNlYXJjaGVkRGF0YSxcbiAgU2VhcmNoU3RhdGVLZXlDaGVjayxcbiAgUHJvY2Vzc0FQSURhdGEsXG59IGZyb20gJ2xpYnJhcnkvaGVscGVycy9nZXRfYXBpX2RhdGEnO1xuaW1wb3J0IHsgU0lOR0xFX1BPU1RfUEFHRSB9IGZyb20gJ3NldHRpbmdzL2NvbnN0YW50JztcbmltcG9ydCB7XG4gIExJU1RJTkdfUEFHRV9QT1NUX0xJTUlULFxuICBMSVNUSU5HX1BBR0VfQ09MVU1OX1dJRFRIX1dJVEhPVVRfTUFQLFxuICBMSVNUSU5HX1BBR0VfQ09MVU1OX1dJRFRIX1dJVEhfTUFQLFxufSBmcm9tICdzZXR0aW5ncy9jb25maWcnO1xuaW1wb3J0IExpc3RpbmdXcmFwcGVyLCB7XG4gIFBvc3RzV3JhcHBlcixcbiAgU2hvd01hcENoZWNrYm94LFxufSBmcm9tICdjb250YWluZXIvTGlzdGluZy9MaXN0aW5nLnN0eWxlJztcblxuY29uc3QgRmlsdGVyRHJhd2VyID0gZHluYW1pYygoKSA9PlxuICBpbXBvcnQoJ2NvbnRhaW5lci9MaXN0aW5nL1NlYXJjaC9Nb2JpbGVTZWFyY2hWaWV3Jylcbik7XG5pbXBvcnQgZnMgZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdGluZ1BhZ2UocHJvcHMpIHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XG4gIGNvbnN0IHN0YXRla2V5ID0gU2VhcmNoU3RhdGVLZXlDaGVjayhzdGF0ZSk7XG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoXG4gICAgcHJvcHMucHJvY2Vzc2VkRGF0YS5zbGljZSgwLCBMSVNUSU5HX1BBR0VfUE9TVF9MSU1JVCkgfHwgW11cbiAgKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd01hcCwgc2V0U2hvd01hcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGVrZXkgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSBTZWFyY2hlZERhdGEoIHByb3BzLnByb2Nlc3NlZERhdGEpO1xuICAgICAgc2V0UG9zdHMobmV3RGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFBvc3RzKCBwcm9wcy5wcm9jZXNzZWREYXRhLnNsaWNlKDAsIExJU1RJTkdfUEFHRV9QT1NUX0xJTUlUKSB8fCBbXSk7XG4gICAgfVxuICB9LCBbc3RhdGVrZXldKTtcblxuICBjb25zdCBoYW5kbGVNYXBUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0U2hvd01hcCgoc2hvd01hcCkgPT4gIXNob3dNYXApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxvYWRNb3JlID0gKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gUGFnaW5hdG9yKHBvc3RzLCAgcHJvcHMucHJvY2Vzc2VkRGF0YSwgTElTVElOR19QQUdFX1BPU1RfTElNSVQpO1xuICAgICAgc2V0UG9zdHMoZGF0YSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCAxMDAwKTtcbiAgfTtcblxuICBsZXQgY29sdW1uV2lkdGggPSBMSVNUSU5HX1BBR0VfQ09MVU1OX1dJRFRIX1dJVEhPVVRfTUFQO1xuICBpZiAoc2hvd01hcCkge1xuICAgIGNvbHVtbldpZHRoID0gTElTVElOR19QQUdFX0NPTFVNTl9XSURUSF9XSVRIX01BUDtcbiAgfVxuXG4gIGxldCBjb2x1bW5Db3VudCA9ICdjb2wtMjQnO1xuICBpZiAoZGV2aWNlVHlwZSA9PT0gJ2Rlc2t0b3AnICYmIHNob3dNYXAgPT09IHRydWUpIHtcbiAgICBjb2x1bW5Db3VudCA9ICdjb2wtMTInO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdGluZ1dyYXBwZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxpc3RpbmcgfCBBIHJlYWN0IG5leHQgbGlzdGluZyB0ZW1wbGF0ZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxTdGlja3kgdG9wPXs4Mn0gaW5uZXJaPXs5OTl9IGFjdGl2ZUNsYXNzPVwiaXNIZWFkZXJTdGlja3lcIj5cbiAgICAgICAgPFRvb2xiYXJcbiAgICAgICAgICBsZWZ0PXtcbiAgICAgICAgICAgIGRldmljZVR5cGUgPT09ICdkZXNrdG9wJyA/IDxDYXRlZ29yeVNlYXJjaCAvPiA6IDxGaWx0ZXJEcmF3ZXIgLz5cbiAgICAgICAgICB9XG4gICAgICAgICAgcmlnaHQ9e1xuICAgICAgICAgICAgPFNob3dNYXBDaGVja2JveD5cbiAgICAgICAgICAgICAgPENoZWNrYm94IGRlZmF1bHRDaGVja2VkPXtmYWxzZX0gb25DaGFuZ2U9e2hhbmRsZU1hcFRvZ2dsZX0+XG4gICAgICAgICAgICAgICAgU2hvdyBtYXBcbiAgICAgICAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgICAgIDwvU2hvd01hcENoZWNrYm94PlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvU3RpY2t5PlxuXG4gICAgICA8UG9zdHNXcmFwcGVyIGNsYXNzTmFtZT17Y29sdW1uQ291bnR9PlxuICAgICAgICA8U2VjdGlvbkdyaWRcbiAgICAgICAgICBsaW5rPXtTSU5HTEVfUE9TVF9QQUdFfVxuICAgICAgICAgIGNvbHVtbldpZHRoPXtjb2x1bW5XaWR0aH1cbiAgICAgICAgICBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfVxuICAgICAgICAgIGRhdGE9e3Bvc3RzfVxuICAgICAgICAgIHRvdGFsSXRlbT17cHJvcHMucHJvY2Vzc2VkRGF0YS5sZW5ndGh9XG4gICAgICAgICAgbGltaXQ9e0xJU1RJTkdfUEFHRV9QT1NUX0xJTUlUfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgaGFuZGxlTG9hZE1vcmU9e2hhbmRsZUxvYWRNb3JlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXs8UG9zdFBsYWNlaG9sZGVyIC8+fVxuICAgICAgICAvPlxuICAgICAgPC9Qb3N0c1dyYXBwZXI+XG4gICAgICB7c2hvd01hcCAmJiA8TGlzdGluZ01hcCBsb2FkaW5nPXtsb2FkaW5nfSBtYXBEYXRhPXtwb3N0c30gLz59XG4gICAgPC9MaXN0aW5nV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvL1VzZSB3aGVuIExvYWRpbmcgZGF0YSBmb3JtIERCXG4gIC8vIGNvbnN0IGFwaVVybCA9IFtcbiAgLy8gICB7XG4gIC8vICAgICBlbmRwb2ludDogJ2hvdGVsJyxcbiAgLy8gICAgIG5hbWU6ICdsaXN0aW5nSG90ZWwnLFxuICAvLyAgIH0sXG4gIC8vIF07XG4gIC8vIGNvbnN0IHBhZ2VEYXRhID0gYXdhaXQgR2V0QVBJRGF0YShhcGlVcmwpO1xuICAvLyBjb25zdCBwcm9jZXNzZWREYXRhID0gUHJvY2Vzc0FQSURhdGEocGFnZURhdGEpO1xuICAgIC8vTG9hZGluZyBkYXRhIGZyb20gbG9jYWwgZmlsZXNcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3N0YXRpYycsICdkYXRhJywgJ2hvdGVsLmpzb24nKVxuICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoKVxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwcm9jZXNzZWREYXRhOiBkYXRhIH0sXG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX01PQklMRV9ERVZJQ0UgPSA0O1xuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9UQUJMRVRfREVWSUNFID0gNDtcbmV4cG9ydCBjb25zdCBIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfREVTS1RPUF9ERVZJQ0UgPSA1O1xuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19DT0xVTU5TX1JFU1BPTlNJVkVfV0lEVEggPSBbXG4gIDEgLyAxLFxuICAxIC8gMixcbiAgMSAvIDMsXG4gIDEgLyA0LFxuICAxIC8gNSxcbl07XG5leHBvcnQgY29uc3QgTElTVElOR19QQUdFX1BPU1RfTElNSVQgPSAxMDtcblxuZXhwb3J0IGNvbnN0IExJU1RJTkdfUEFHRV9DT0xVTU5fV0lEVEhfV0lUSE9VVF9NQVAgPSBbXG4gIDEgLyAxLFxuICAxIC8gMixcbiAgMSAvIDMsXG4gIDEgLyA0LFxuICAxIC8gNSxcbl07XG5leHBvcnQgY29uc3QgTElTVElOR19QQUdFX0NPTFVNTl9XSURUSF9XSVRIX01BUCA9IFtcbiAgMSAvIDEsXG4gIDEgLyAyLFxuICAxIC8gMixcbiAgMSAvIDIsXG4gIDEgLyAzLFxuXTtcbiIsIi8vIEdlbmVyYWwgUGFnZSBTZWN0aW9uXG5leHBvcnQgY29uc3QgSE9NRV9QQUdFID0gJy8nO1xuZXhwb3J0IGNvbnN0IEFHRU5UU19QQUdFID0gJy9hZ2VudHMnO1xuXG4vLyBMaXN0aW5nIFNpbmdsZSBQYWdlIFNlY3Rpb25cbmV4cG9ydCBjb25zdCBMSVNUSU5HX1BPU1RTX1BBR0UgPSAnL2xpc3RpbmcnO1xuZXhwb3J0IGNvbnN0IFNJTkdMRV9QT1NUX1BBR0UgPSAnL3Bvc3QnO1xuXG4vLyBBZ2VudCBQcm9maWxlIFBhZ2UgU2VjdGlvblxuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfUEFHRSA9ICcvcHJvZmlsZSc7XG5leHBvcnQgY29uc3QgQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFID0gJy9hY2NvdW50LXNldHRpbmdzJztcbmV4cG9ydCBjb25zdCBBR0VOVF9QUk9GSUxFX0VESVRfUEFHRSA9ICcvZWRpdCc7XG5leHBvcnQgY29uc3QgQUdFTlRfSU1BR0VfRURJVF9QQUdFID0gJy9jaGFuZ2UtaW1hZ2UnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BBU1NXT1JEX0NIQU5HRV9QQUdFID0gJy9jaGFuZ2UtcGFzc3dvcmQnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfREVMRVRFID0gJy9kZWxldGUnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfRkFWT1VSSVRFID0gJy9mYXZvdXJpdGUtcG9zdCc7XG5leHBvcnQgY29uc3QgQUdFTlRfUFJPRklMRV9DT05UQUNUID0gJy9jb250YWN0JztcbmV4cG9ydCBjb25zdCBBRERfSE9URUxfUEFHRSA9ICcvYWRkLWhvdGVsJztcblxuLy8gT3RoZXIgUGFnZXNcbmV4cG9ydCBjb25zdCBQUklDSU5HX1BMQU5fUEFHRSA9ICcvcHJpY2luZy1wbGFuJztcbmV4cG9ydCBjb25zdCBQUklWQUNZX1BBR0UgPSAnL3ByaXZhY3knO1xuXG4vLyBMb2dpbiAvIFJlZ2lzdGF0aW9uIFBhZ2VcbmV4cG9ydCBjb25zdCBMT0dJTl9QQUdFID0gJy9zaWduLWluJztcbmV4cG9ydCBjb25zdCBSRUdJU1RSQVRJT05fUEFHRSA9ICcvc2lnbi11cCc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX1BBR0UgPSAnL2NoYW5nZS1wYXNzd29yZCc7XG5leHBvcnQgY29uc3QgRk9SR0VUX1BBU1NXT1JEX1BBR0UgPSAnL2ZvcmdldC1wYXNzd29yZCc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvTWludXNPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvUGx1c091dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9idXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvY2hlY2tib3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvZHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2lucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL3NsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy9wcm9taXNlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvaXNFbXB0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvc2h1ZmZsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWNjZXNzaWJsZS1hY2NvcmRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY29udGVudC1sb2FkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0ZXMvaW5pdGlhbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbWFwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbWFwcy9saWIvY29tcG9uZW50cy9hZGRvbnMvTWFya2VyQ2x1c3RlcmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW11bHRpLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0aWNreW5vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
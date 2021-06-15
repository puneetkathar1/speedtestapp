module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./assets/images/banner/1.jpg":
/*!************************************!*\
  !*** ./assets/images/banner/1.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1-3bd6d5f8bc9d2feeca3917b6eef4ee73.jpg";

/***/ }),

/***/ "./assets/images/banner/2.jpg":
/*!************************************!*\
  !*** ./assets/images/banner/2.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-7ac6e2944d4c9e010136d67ea1ee7cf2.jpg";

/***/ }),

/***/ "./assets/images/banner/3.jpg":
/*!************************************!*\
  !*** ./assets/images/banner/3.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-b9923e4821aa7136607f06f5d605082d.jpg";

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

/***/ "./components/ImageCard/ImageCard.js":
/*!*******************************************!*\
  !*** ./components/ImageCard/ImageCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ImageCard_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageCard.style */ "./components/ImageCard/ImageCard.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\ImageCard\\ImageCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ImageCardNext = ({
  className,
  imageSrc,
  title,
  link,
  meta
}) => {
  const addAllClasses = ['image_card'];
  const pathLink = title.replace(/\s/g, '-');

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_ImageCard_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: addAllClasses.join(' '),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: `${link}`,
      query: {
        country: `${pathLink}`
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: imageSrc,
    alt: title,
    draggable: false,
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(_ImageCard_style__WEBPACK_IMPORTED_MODULE_3__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, title && __jsx(_ImageCard_style__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }, title), meta && __jsx(_ImageCard_style__WEBPACK_IMPORTED_MODULE_3__["Meta"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 22
    }
  }, meta)))));
};

ImageCardNext.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  imageSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
ImageCardNext.defaultProps = {
  link: '#'
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCardNext);

/***/ }),

/***/ "./components/ImageCard/ImageCard.style.js":
/*!*************************************************!*\
  !*** ./components/ImageCard/ImageCard.style.js ***!
  \*************************************************/
/*! exports provided: ContentWrapper, Title, Meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return Meta; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const ImageCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ImageCardstyle__ImageCardWrapper",
  componentId: "autsop-0"
})(["> a{display:block;height:370px;position:relative;border-radius:6px;overflow:hidden;> img{width:100%;height:100%;object-fit:cover;position:absolute;left:0;top:0;}}"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ImageCardstyle__ContentWrapper",
  componentId: "autsop-1"
})(["position:absolute;width:100%;height:100%;top:0;left:0;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.4);z-index:2;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "ImageCardstyle__Title",
  componentId: "autsop-2"
})(["color:", ";font-size:25px;line-height:30px;font-weight:700;text-transform:capitalize;text-align:center;text-shadow:0 2px 2px rgba(0,0,0,0.25);@media only screen and (max-width:480px){font-size:20px;line-height:28px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
const Meta = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ImageCardstyle__Meta",
  componentId: "autsop-3"
})(["color:", ";font-size:17px;line-height:21px;font-weight:400;text-transform:capitalize;text-shadow:0 2px 2px rgba(0,0,0,0.25);@media only screen and (max-width:480px){font-size:15px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
/* harmony default export */ __webpack_exports__["default"] = (ImageCardWrapper);

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

/***/ "./components/Map/MapAutoComplete.js":
/*!*******************************************!*\
  !*** ./components/Map/MapAutoComplete.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-google-maps/lib/components/places/StandaloneSearchBox */ "react-google-maps/lib/components/places/StandaloneSearchBox");
/* harmony import */ var react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\Map\\MapAutoComplete.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const SearchInput = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_2__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=YOUR_GOOGLE_MAP_API_KEY&libraries=geometry,drawing,places",
  loadingElement: __jsx("div", {
    style: {
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }),
  containerElement: __jsx("div", {
    style: {
      height: `400px`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 23
    }
  })
}), react_google_maps__WEBPACK_IMPORTED_MODULE_3__["withScriptjs"])(props => {
  const {
    getinputvalue
  } = props;
  const {
    0: locationInput,
    1: setLocationInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    searchedLocation: '',
    searchedPlaceAPIData: []
  });

  const handleOnChange = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
  };

  const refs = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])({});

  const onPlacesChanged = () => {
    const places = refs.current.getPlaces();
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : []
    });
    getinputvalue({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : []
    });
  };

  const handleOnPressEnter = event => {
    if (event.which === '13') {
      event.preventDefault();
      event.stopPropagation();
    }

    setLocationInput({
      searchedLocation: event.target.value
    });
    getinputvalue(locationInput);
  };

  return __jsx("div", {
    className: "map_autocomplete",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(react_google_maps_lib_components_places_StandaloneSearchBox__WEBPACK_IMPORTED_MODULE_4___default.a, {
    ref: refs,
    onPlacesChanged: onPlacesChanged,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "text",
    defaultValue: "",
    value: locationInput.searchedLocation || '',
    placeholder: "Search \u201CThailand, Asia\u201D",
    size: "large",
    onChange: handleOnChange,
    onPressEnter: handleOnPressEnter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })));
});

const MapAutoComplete = props => {
  const {
    updatevalue
  } = props;
  return __jsx(SearchInput, {
    getinputvalue: updatevalue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MapAutoComplete);

/***/ }),

/***/ "./components/Map/mapDataHelper.js":
/*!*****************************************!*\
  !*** ./components/Map/mapDataHelper.js ***!
  \*****************************************/
/*! exports provided: mapDataHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapDataHelper", function() { return mapDataHelper; });
function mapDataHelper(infoValue) {
  const tempMapObj = {};
  const tempMapArray = [];

  if (infoValue && infoValue.length !== 0) {
    infoValue.map(({
      place_id,
      address_components,
      formatted_address,
      geometry: {
        location
      }
    }) => {
      let id = '';
      let lat = '';
      let lng = '';
      let formattedAddress = '';
      let city = '';
      let state_long = '';
      let state_short = '';
      let zipcode = '';
      let country_long = '';
      let country_short = '';
      id = place_id;
      lat = location.lat();
      lng = location.lng();
      formattedAddress = formatted_address;

      if (address_components) {
        for (let i = 0; i < address_components.length; i++) {
          if (address_components[i].types.length) {
            switch (address_components[i].types[0]) {
              case 'locality':
                city = address_components[i].long_name;
                break;

              case 'administrative_area_level_1':
                state_long = address_components[i].long_name;
                state_short = address_components[i].short_name;
                break;

              case 'country':
                country_long = address_components[i].long_name;
                country_short = address_components[i].short_name;
                break;

              case 'postal_code':
                zipcode = address_components[i].long_name;
                break;

              default:
                break;
            }
          }
        }
      }

      tempMapObj.id = id;
      tempMapObj.lat = lat;
      tempMapObj.lng = lng;
      tempMapObj.formattedAddress = formattedAddress;
      tempMapObj.city = city;
      tempMapObj.state_short = state_short;
      tempMapObj.state_long = state_long;
      tempMapObj.zipcode = zipcode;
      tempMapObj.country_short = country_short;
      tempMapObj.country_long = country_long;
      tempMapArray.push(tempMapObj);
      return tempMapArray;
    });
  }

  return tempMapArray;
}

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

/***/ "./components/SectionTitle/SectionTitle.js":
/*!*************************************************!*\
  !*** ./components/SectionTitle/SectionTitle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UI_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/Title/Title */ "./components/UI/Title/Title.js");
/* harmony import */ var _SectionTitle_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SectionTitle.style */ "./components/SectionTitle/SectionTitle.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\SectionTitle\\SectionTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const SectionTitle = _ref => {
  let props = Object.assign({}, _ref);
  return __jsx(_SectionTitle_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(components_UI_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionTitle);

/***/ }),

/***/ "./components/SectionTitle/SectionTitle.style.js":
/*!*******************************************************!*\
  !*** ./components/SectionTitle/SectionTitle.style.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const SectionTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SectionTitlestyle__SectionTitleWrapper",
  componentId: "sc-62tmmv-0"
})(["h2,a{margin:0;}h2{color:", ";font-size:25px;line-height:30px;font-weight:700;@media only screen and (max-width:480px){font-size:17px;line-height:21px;}}a{color:", ";font-size:17px;line-height:21px;font-weight:400;@media only screen and (max-width:480px){font-size:15px;line-height:20px;}&:hover{color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
/* harmony default export */ __webpack_exports__["default"] = (SectionTitleWrapper);

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

/***/ "./components/UI/Container/Container.js":
/*!**********************************************!*\
  !*** ./components/UI/Container/Container.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container.style */ "./components/UI/Container/Container.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\Container\\Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  fluid
}) => {
  return __jsx(_Container_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    fullWidth: fullWidth,
    noGutter: noGutter,
    fluid: fluid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, children);
};

Container.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  noGutter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/UI/Container/Container.style.js":
/*!****************************************************!*\
  !*** ./components/UI/Container/Container.style.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Containerstyle__ContainerWrapper",
  componentId: "sc-2xnsly-0"
})(["margin-left:auto;margin-right:auto;", ";", ";", " @media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1200px){max-width:1170px;width:100%;}"], props => props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100%;max-width:none !important;"]), props => props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:0;padding-right:0;"]) || Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:30px;padding-right:30px;@media only screen and (max-width:480px){padding-left:25px;padding-right:25px;}"]), props => props.fluid && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["width:100% !important;max-width:1920px !important;@media only screen and (min-width:1441px){padding-left:75px;padding-right:75px;}"]));
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

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

/***/ "./components/UI/GlideCarousel/GlideCarousel.js":
/*!******************************************************!*\
  !*** ./components/UI/GlideCarousel/GlideCarousel.js ***!
  \******************************************************/
/*! exports provided: GlideSlide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlide", function() { return GlideSlide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @glidejs/glide */ "@glidejs/glide");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlideCarousel.style */ "./components/UI/GlideCarousel/GlideCarousel.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\GlideCarousel\\GlideCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const GlideCarousel = ({
  className,
  children,
  options,
  controls,
  prevButton,
  nextButton,
  bullets,
  numberOfBullets,
  carouselSelector
}) => {
  // Add all classs to an array.
  const addAllClasses = ['glide']; // className prop checking.

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop.


  const totalBullets = [];

  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide.


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_2___default.a(carouselSelector ? `#${carouselSelector}` : '#glide', _objectSpread({}, options));
    glide.mount();
  }, [carouselSelector, options]);
  return __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "glide__track",
    "data-glide-el": "track",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx("ul", {
    className: "glide__slides",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, children)), controls && __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["ButtonControlWrapper"], {
    className: "glide__controls",
    "data-glide-el": "controls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["ButtonWrapper"], {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, prevButton ? prevButton : __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["DefaultBtn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 40
    }
  }, "Prev")), __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["ButtonWrapper"], {
    className: "glide__next--area",
    "data-glide-dir": ">",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, nextButton ? nextButton : __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["DefaultBtn"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 40
    }
  }, "Next"))), bullets && __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["BulletControlWrapper"], {
    className: "glide__bullets",
    "data-glide-el": "controls[nav]",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, totalBullets.map(index => __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["BulletButton"], {
    key: index,
    className: "glide__bullet",
    "data-glide-dir": `=${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  })))));
}; // Glide Slide wrapper component.


const GlideSlide = ({
  children
}) => {
  return __jsx(_GlideCarousel_style__WEBPACK_IMPORTED_MODULE_3__["GlideSlideWrapper"], {
    className: "glide__slide",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, children);
};

GlideCarousel.propTypes = {
  /** className of the GlideCarousel. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,

  /** You can add your custom glid options using this prop. */
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /** Hide || show controls nav. */
  controls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** Hide || show bullets nav. */
  bullets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /** This prop only take your slider / carousel / testimonials data length. [Note: if "bullets" props is set TRUE, then "numberOfBullets" must be added] */
  numberOfBullets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /** Set previous button for glide carousel. */
  prevButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

  /** Set next button for glide carousel. */
  nextButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object])
};
GlideSlide.propTypes = {
  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
}; // GlideCarousel default props.

GlideCarousel.defaultProps = {
  controls: true
};

/* harmony default export */ __webpack_exports__["default"] = (GlideCarousel);

/***/ }),

/***/ "./components/UI/GlideCarousel/GlideCarousel.style.js":
/*!************************************************************!*\
  !*** ./components/UI/GlideCarousel/GlideCarousel.style.js ***!
  \************************************************************/
/*! exports provided: GlideSlideWrapper, ButtonControlWrapper, ButtonWrapper, BulletControlWrapper, BulletButton, DefaultBtn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlideWrapper", function() { return GlideSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonControlWrapper", function() { return ButtonControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletControlWrapper", function() { return BulletControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletButton", function() { return BulletButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBtn", function() { return DefaultBtn; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 // Glide wrapper style

const GlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__GlideWrapper",
  componentId: "sc-1kbmqwy-0"
})([".glide__slides{margin-bottom:0;}.glide__controls{.glide__prev--area,.glide__next--area{cursor:pointer;}}"]); // Glide slide wrapper style

const GlideSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "GlideCarouselstyle__GlideSlideWrapper",
  componentId: "sc-1kbmqwy-1"
})(["position:relative;"]); // Button wrapper style

const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__ButtonWrapper",
  componentId: "sc-1kbmqwy-2"
})(["display:inline-block;"]); // ButtonControlWrapper style

const ButtonControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__ButtonControlWrapper",
  componentId: "sc-1kbmqwy-3"
})([""]); // BulletControlWrapper style

const BulletControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "GlideCarouselstyle__BulletControlWrapper",
  componentId: "sc-1kbmqwy-4"
})([""]); // BulletButton style

const BulletButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "GlideCarouselstyle__BulletButton",
  componentId: "sc-1kbmqwy-5"
})(["cursor:pointer;width:10px;height:10px;margin:4px;border:0;padding:0;outline:none;border-radius:50%;background-color:#d6d6d6;&:hover,&.glide__bullet--active{background-color:#869791;}"]); // default button style

const DefaultBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "GlideCarouselstyle__DefaultBtn",
  componentId: "sc-1kbmqwy-6"
})(["cursor:pointer;margin:10px 3px;"]);

/* harmony default export */ __webpack_exports__["default"] = (GlideWrapper);

/***/ }),

/***/ "./components/UI/Heading/Heading.js":
/*!******************************************!*\
  !*** ./components/UI/Heading/Heading.js ***!
  \******************************************/
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
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\Heading\\Heading.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "sc-121p3m5-0"
})(_Base__WEBPACK_IMPORTED_MODULE_4__["base"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_3__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_3__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_3__["letterSpacing"], Object(_Base__WEBPACK_IMPORTED_MODULE_4__["themed"])('Heading'));

const Heading = _ref => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return __jsx(HeadingWrapper, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }), content);
};

Heading.propTypes = _objectSpread({
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),
  as: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]))])
}, _Base__WEBPACK_IMPORTED_MODULE_4__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: 0,
  fontWeight: 700
};
/* harmony default export */ __webpack_exports__["default"] = (Heading);

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

/***/ "./components/UI/Title/Title.js":
/*!**************************************!*\
  !*** ./components/UI/Title/Title.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title.style */ "./components/UI/Title/Title.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\Title\\Title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SectionTitle = _ref => {
  let {
    className,
    title,
    link
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "title", "link"]);

  // Add all classs to an array
  const addAllClasses = ['section_title']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_Title_style__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    className: addAllClasses.join(' ')
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), title && __jsx(_Title_style__WEBPACK_IMPORTED_MODULE_2__["TitleWrapper"], {
    className: "title_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, title), link && __jsx(_Title_style__WEBPACK_IMPORTED_MODULE_2__["LinkWrapper"], {
    className: "link_wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 16
    }
  }, link));
};

SectionTitle.propTypes = {
  /** ClassName of the SectionTitle. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Add here Heading component from common components. */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,

  /** Add here TextLink component from common components. */
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (SectionTitle);

/***/ }),

/***/ "./components/UI/Title/Title.style.js":
/*!********************************************!*\
  !*** ./components/UI/Title/Title.style.js ***!
  \********************************************/
/*! exports provided: TitleWrapper, LinkWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleWrapper", function() { return TitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkWrapper", function() { return LinkWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Base */ "./components/UI/Base.js");


const SectionTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Titlestyle__SectionTitleWrapper",
  componentId: "sc-1okeadk-0"
})(["display:flex;justify-content:space-between;align-items:baseline;margin:30px 0;@media only screen and (max-width:480px){margin:15px 0 20px;}", ""], _Base__WEBPACK_IMPORTED_MODULE_1__["base"]);
const TitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Titlestyle__TitleWrapper",
  componentId: "sc-1okeadk-1"
})([""]);
const LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Titlestyle__LinkWrapper",
  componentId: "sc-1okeadk-2"
})([""]);
/* harmony default export */ __webpack_exports__["default"] = (SectionTitleWrapper);

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

/***/ "./container/Home/Location/Location.js":
/*!*********************************************!*\
  !*** ./container/Home/Location/Location.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-multi-carousel */ "react-multi-carousel");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Container/Container */ "./components/UI/Container/Container.js");
/* harmony import */ var components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Heading/Heading */ "./components/UI/Heading/Heading.js");
/* harmony import */ var components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/SectionTitle/SectionTitle */ "./components/SectionTitle/SectionTitle.js");
/* harmony import */ var components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var components_ImageCard_ImageCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ImageCard/ImageCard */ "./components/ImageCard/ImageCard.js");
/* harmony import */ var _settings_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../settings/constant */ "./settings/constant.js");
/* harmony import */ var _Location_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Location.style */ "./container/Home/Location/Location.style.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Home\\Location\\Location.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import 'react-multi-carousel/lib/styles.css';









const LocationGrid = ({
  data,
  deviceType
}) => {
  return __jsx(_Location_style__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: "Explore Destinations",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 18
      }
    }),
    link: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${_settings_constant__WEBPACK_IMPORTED_MODULE_8__["LISTING_POSTS_PAGE"]}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 15
      }
    }, "Show all")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx(_Location_style__WEBPACK_IMPORTED_MODULE_9__["CarouselSection"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, data.length !== 0 ? __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    ssr: true,
    additionalTransfrom: 0,
    arrows: true,
    autoPlaySpeed: 3000,
    centerMode: false,
    containerClass: "container",
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    renderDotsOutside: false,
    responsive: {
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 5
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 3
      }
    },
    deviceType: deviceType,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, data.map((post, index) => __jsx(components_ImageCard_ImageCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: index,
    imageSrc: post.locationImage.url,
    title: post.city,
    meta: `${post.numberOfPost} Hotels`,
    link: _settings_constant__WEBPACK_IMPORTED_MODULE_8__["LISTING_POSTS_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }))) : __jsx(components_Loader_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LocationGrid);

/***/ }),

/***/ "./container/Home/Location/Location.style.js":
/*!***************************************************!*\
  !*** ./container/Home/Location/Location.style.js ***!
  \***************************************************/
/*! exports provided: CarouselSection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselSection", function() { return CarouselSection; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const LocationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Locationstyle__LocationWrapper",
  componentId: "sc-8cwnh4-0"
})(["padding:52px 0;@media only screen and (max-width:480px){padding:30px 0;}"]);
const CarouselSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Locationstyle__CarouselSection",
  componentId: "sc-8cwnh4-1"
})([".react-multi-carousel-list{.react-multi-carousel-item{padding:0 10px;transition:transform 0.3s ease;.image_card{> a{@media only screen and (max-width:1600px){height:310px;}@media only screen and (max-width:991px){height:280px;}}}}.react-multiple-carousel__arrow{opacity:0;visibility:hidden;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:", ";box-shadow:0 3px 6px ", ";transition:background-color 0.2s ease;&::before{color:", ";}&:hover{background-color:", ";&::before{color:", ";}}}&:hover{.react-multiple-carousel__arrow{opacity:1;visibility:visible;}}.react-multiple-carousel__arrow--left{left:30px;}.react-multiple-carousel__arrow--right{right:30px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('boxShadow.1', 'rgba(0, 0, 0, 0.16)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
/* harmony default export */ __webpack_exports__["default"] = (LocationWrapper);

/***/ }),

/***/ "./container/Home/Search/Search.js":
/*!*****************************************!*\
  !*** ./container/Home/Search/Search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/Container/Container */ "./components/UI/Container/Container.js");
/* harmony import */ var components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Heading/Heading */ "./components/UI/Heading/Heading.js");
/* harmony import */ var components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Text/Text */ "./components/UI/Text/Text.js");
/* harmony import */ var components_UI_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/GlideCarousel/GlideCarousel */ "./components/UI/GlideCarousel/GlideCarousel.js");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchForm */ "./container/Home/Search/SearchForm.js");
/* harmony import */ var _Search_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search.style */ "./container/Home/Search/Search.style.js");
/* harmony import */ var assets_images_banner_1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/images/banner/1.jpg */ "./assets/images/banner/1.jpg");
/* harmony import */ var assets_images_banner_1_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_1_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_images_banner_2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/images/banner/2.jpg */ "./assets/images/banner/2.jpg");
/* harmony import */ var assets_images_banner_2_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_2_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_images_banner_3_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/images/banner/3.jpg */ "./assets/images/banner/3.jpg");
/* harmony import */ var assets_images_banner_3_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner_3_jpg__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Home\\Search\\Search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








 // slider images





const HomeSearch = ({
  searchTitleStyle,
  searchDescriptionStyle
}) => {
  return __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(components_UI_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    controls: false,
    options: {
      gap: 0,
      autoplay: 5000,
      animationDuration: 1000
    },
    bullets: true,
    numberOfBullets: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_UI_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_5__["GlideSlide"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: assets_images_banner_1_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })), __jsx(components_UI_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_5__["GlideSlide"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: assets_images_banner_2_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })), __jsx(components_UI_GlideCarousel_GlideCarousel__WEBPACK_IMPORTED_MODULE_5__["GlideSlide"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: assets_images_banner_3_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })))), __jsx(components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_7__["SearchWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, searchTitleStyle, {
    content: "Latest reviews. Lowest prices.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx(components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, searchDescriptionStyle, {
    content: "compares prices from 200+ booking sites to help you find the lowest price on the right hotel for you.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), __jsx(_SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }))));
};

HomeSearch.propTypes = {
  searchTitleStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  searchDescriptionStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
HomeSearch.defaultProps = {
  searchTitleStyle: {
    color: '#2C2C2C',
    fontSize: ['20px', '24px', '28px'],
    lineHeight: ['28px', '30px', '30px'],
    mb: '9px'
  },
  searchDescriptionStyle: {
    color: '#2C2C2C',
    fontSize: '15px',
    lineHeight: '18px',
    mb: '30px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (HomeSearch);

/***/ }),

/***/ "./container/Home/Search/Search.style.js":
/*!***********************************************!*\
  !*** ./container/Home/Search/Search.style.js ***!
  \***********************************************/
/*! exports provided: SearchWrapper, FormWrapper, ComponentWrapper, RoomGuestWrapper, ItemWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchWrapper", function() { return SearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapper", function() { return FormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentWrapper", function() { return ComponentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomGuestWrapper", function() { return RoomGuestWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "@styled-system/theme-get");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__BannerWrapper",
  componentId: "dh2rqj-0"
})(["width:100%;min-height:100vh;position:relative;background-color:", ";@media only screen and (max-width:991px){> div{max-width:100%;}}.glide,.glide__track,.glide__slides{position:absolute;width:100%;height:100%;top:0;left:0;pointer-events:all;}.glide__slide{img{width:100%;height:100%;object-fit:cover;}}.glide__bullets{position:absolute;bottom:30px;width:100%;display:flex;align-items:center;justify-content:center;z-index:1;}.glide__bullet{width:7px;height:7px;background-color:", ";transition:width 0.3s ease;}.glide__bullet--active{width:25px;border-radius:8px;background-color:", ";}> div{position:relative;min-height:100vh;}&:after{display:block;content:'';width:100%;height:60%;position:absolute;bottom:0;background:linear-gradient(transparent,rgba(0,0,0,0.5));pointer-events:none;z-index:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__SearchWrapper",
  componentId: "dh2rqj-1"
})(["width:calc(100% - 60px);padding:28px 30px 30px;border-radius:6px;background-color:", ";box-shadow:0 1px 20px rgba(0,0,0,0.08);position:absolute;bottom:81px;z-index:1;@media only screen and (min-width:569px) and (max-width:991px){width:414px;left:30px;}@media only screen and (max-width:480px){width:calc(100% - 30px);padding:15px;left:15px;> p{display:none;}}> div{@media only screen and (min-width:481px){margin-top:30px;}}h2{margin-bottom:10px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'));
const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__FormWrapper",
  componentId: "dh2rqj-2"
})(["display:flex;align-items:center;justify-content:flex-end;background-color:", ";border-radius:3px 0 0 3px;min-height:60px;@media only screen and (max-width:991px){flex-direction:column;}@media only screen and (max-width:480px){margin-top:10px;}button[type='submit'].ant-btn{min-width:157px;height:60px;color:", ";background-color:", ";border-radius:0 3px 3px 0;border:0;box-shadow:none;font-size:15px;font-weight:700;text-shadow:none;@media only screen and (max-width:991px){min-width:100%;border-radius:0 0 3px 3px;}@media only screen and (max-width:480px){height:47px;}&::after{display:none;}&:hover{opacity:0.85;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
const ComponentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__ComponentWrapper",
  componentId: "dh2rqj-3"
})(["display:flex;width:100%;align-items:center;position:relative;.target{right:10px;left:auto;@media only screen and (max-width:480px){right:25px;}}.map_autocomplete{width:100%;position:relative;&::after{content:'';width:1px;height:20px;display:inline-block;position:absolute;top:calc(50% - 10px);right:auto;left:auto;background-color:", ";}@media only screen and (max-width:991px){&::after{top:auto;bottom:0;height:1px;width:calc(100% - 40px);left:20px;}}@media only screen and (max-width:480px){&::after{width:calc(100% - 30px);left:15px;}}input{border:0;font-size:15px;font-weight:400;border-radius:0;height:60px;padding:0 30px 0 40px;background:transparent;color:", ";@media only screen and (max-width:480px){height:47px;padding:0 30px 0 36px;}&:hover,&:focus{outline:none;box-shadow:none;}&::placeholder{color:", ";}}}.date_picker{min-width:calc(250px - 14px);width:calc(100% - 14px);margin:0 0 0 14px;display:flex;justify-content:center;align-items:center;@media only screen and (max-width:991px){justify-content:flex-start;height:60px;}@media only screen and (max-width:480px){height:47px;}.DayPicker__withBorder{box-shadow:0 15px 46px -10px rgba(26,26,29,0.3);}.DateRangePicker{display:block;width:100%;.DateRangePickerInput{border:0;padding-right:0;display:flex;align-items:center;justify-content:space-between;background:transparent;.DateRangePickerInput_clearDates,.DateRangePickerInput_clearDates{&.DateRangePickerInput_clearDates__small{display:none;}}.DateInput{width:100%;padding:0 15px 0 30px;background:transparent;@media only screen and (min-width:569px) and (max-width:991px){padding:0 25px 0 30px;}@media only screen and (max-width:568px){padding:0 15px 0 25px;}.DateInput_fang{display:none;}.DateInput_input{padding:0;font-weight:400;color:", ";background:transparent;&.DateInput_input__focused{border-color:transparent;}&::placeholder{color:", ";}}}.DateRangePickerInput_arrow{& + .DateInput{input{text-align:right;}}}}.DateRangePicker_picker{margin-top:-12px;z-index:2;@media only screen and (max-width:991px){top:47px !important;}@media only screen and (max-width:320px){left:-29px !important;.DayPicker,.DayPicker > div > div,.DayPicker > div > div .DayPicker_transitionContainer{width:294px !important;}.DayPicker{.DayPicker_weekHeader{padding:0 !important;}.CalendarMonth{padding:0 !important;}}}}}}.view_with__popup{max-width:100%;position:relative;&::before{content:'';width:1px;height:20px;display:inline-block;position:absolute;top:calc(50% - 10px);right:auto;left:0;z-index:1;background-color:", ";@media only screen and (max-width:991px){top:0;bottom:auto;height:1px;width:calc(100% - 40px);left:20px;}@media only screen and (max-width:480px){width:calc(100% - 30px);left:15px;}}.popup_handler{width:calc(100% - 14px);margin-left:14px;button.ant-btn{min-width:auto;width:100%;height:60px;border:0;padding:0 30px;border-radius:0;box-shadow:none;font-weight:400;font-size:15px;color:", ";background-color:", ";@media only screen and (max-width:991px){text-align:left;padding:0 25px 0 30px;}@media only screen and (max-width:480px){height:47px;padding:0 20px 0 25px;}&::after{display:none;}}}&.room_guest{.popup_handler{button.ant-btn{display:flex;align-items:center;justify-content:space-between;}}}&.active{.popup_container{margin-top:0;padding:22px;box-shadow:0 15px 46px -10px rgba(26,26,29,0.3);@media only screen and (max-width:991px){margin-top:0;}@media only screen and (max-width:480px){min-width:auto;}}}}> svg{position:absolute;z-index:1;top:auto;&.map-marker,&.calendar,&.user-friends{left:15px;right:auto;fill:", ";}&.calendar{@media only screen and (max-width:480px){width:14px;height:14px;}}&.user-friends{width:17px;height:17px;@media only screen and (max-width:480px){width:16px;height:16px;}}&.caret-down{right:12px;left:auto;fill:", ";@media only screen and (max-width:991px){right:20px;}@media only screen and (max-width:991px){right:15px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'));
const RoomGuestWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__RoomGuestWrapper",
  componentId: "dh2rqj-4"
})(["width:100%;strong{font-size:15px;font-weight:400;color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Searchstyle__ItemWrapper",
  componentId: "dh2rqj-5"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;&:last-child{margin-bottom:5px;}.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (BannerWrapper);

/***/ }),

/***/ "./container/Home/Search/SearchForm.js":
/*!*********************************************!*\
  !*** ./container/Home/Search/SearchForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "lodash/isEmpty");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Map_MapAutoComplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Map/MapAutoComplete */ "./components/Map/MapAutoComplete.js");
/* harmony import */ var components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/InputIncDec/InputIncDec */ "./components/UI/InputIncDec/InputIncDec.js");
/* harmony import */ var components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/UI/DatePicker/ReactDates */ "./components/UI/DatePicker/ReactDates.js");
/* harmony import */ var components_Map_mapDataHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Map/mapDataHelper */ "./components/Map/mapDataHelper.js");
/* harmony import */ var components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/UI/ViewWithPopup/ViewWithPopup */ "./components/UI/ViewWithPopup/ViewWithPopup.js");
/* harmony import */ var _Search_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Search.style */ "./container/Home/Search/Search.style.js");
/* harmony import */ var _settings_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../settings/constant */ "./settings/constant.js");
/* harmony import */ var _context_SearchProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../context/SearchProvider */ "./context/SearchProvider.js");

var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Home\\Search\\SearchForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const calendarItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en'
};

const SearchForm = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_SearchProvider__WEBPACK_IMPORTED_MODULE_12__["SearchContext"]);
  const {
    0: searchDate,
    1: setSearchDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    setStartDate: null,
    setEndDate: null
  });
  const {
    0: mapValue,
    1: setMapValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: roomGuest,
    1: setRoomGuest
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    room: 0,
    guest: 0
  });

  const updatevalueFunc = event => {
    const {
      searchedPlaceAPIData
    } = event;

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(searchedPlaceAPIData)) {
      setMapValue(searchedPlaceAPIData);
    }
  };

  const handleIncrement = type => {
    setRoomGuest(_objectSpread(_objectSpread({}, roomGuest), {}, {
      [type]: roomGuest[type] + 1
    }));
  };

  const handleDecrement = type => {
    if (roomGuest[type] <= 0) {
      return false;
    }

    setRoomGuest(_objectSpread(_objectSpread({}, roomGuest), {}, {
      [type]: roomGuest[type] - 1
    }));
  };

  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;
    setRoomGuest(_objectSpread(_objectSpread({}, roomGuest), {}, {
      [type]: currentValue
    }));
  };

  const goToSearchPage = () => {
    let tempLocation = [],
        dateRange = {},
        location_lat = '',
        location_lng = '';
    const mapData = mapValue ? Object(components_Map_mapDataHelper__WEBPACK_IMPORTED_MODULE_8__["mapDataHelper"])(mapValue) : [];
    mapData && mapData.map((singleMapData, i) => {
      return tempLocation.push({
        formattedAddress: singleMapData ? singleMapData.formattedAddress : '',
        lat: singleMapData ? singleMapData.lat.toFixed(3) : null,
        lng: singleMapData ? singleMapData.lng.toFixed(3) : null
      });
    });
    const location = tempLocation ? tempLocation[0] : {};
    dateRange.startDate = searchDate ? searchDate.setStartDate : null;
    dateRange.endDate = searchDate ? searchDate.setEndDate : null;

    if (location && location.lat) {
      location_lat = location.lat;
    }

    if (location && location.lng) {
      location_lng = location.lng;
    }

    let query = {
      setStartDate: searchDate.setStartDate,
      setEndDate: searchDate.setEndDate,
      room: roomGuest.room,
      guest: roomGuest.guest,
      location_lat,
      location_lng
    };

    for (const key in query) {
      if (query[key] === '' || query[key] === null || query[key] === 0) {
        delete query[key];
      }
    }

    dispatch({
      type: 'UPDATE',
      payload: _objectSpread(_objectSpread({}, state), {}, {
        setStartDate: searchDate.setStartDate,
        setEndDate: searchDate.setEndDate,
        room: roomGuest.room,
        guest: roomGuest.guest,
        location_lat,
        location_lng
      })
    });
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
      pathname: `${_settings_constant__WEBPACK_IMPORTED_MODULE_11__["LISTING_POSTS_PAGE"]}`,
      query: query
    }, {
      pathname: `${_settings_constant__WEBPACK_IMPORTED_MODULE_11__["LISTING_POSTS_PAGE"]}`,
      query: query
    }, {
      shallow: true
    });
  };

  return __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["FormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["ComponentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaMapMarkerAlt"], {
    className: "map-marker",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }), __jsx(components_Map_MapAutoComplete__WEBPACK_IMPORTED_MODULE_5__["default"], {
    updatevalue: value => updatevalueFunc(value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    width: "30",
    height: "30",
    viewBox: "0 0 144.083 144",
    enableBackground: "new 0 0 144.083 144",
    className: "target",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M117.292,69h-13.587C102.28,53.851,90.19,41.761,75.042,40.337V26.5h-6v13.837C53.893,41.761,41.802,53.851,40.378,69  H26.792v6h13.587c1.425,15.148,13.515,27.238,28.663,28.663V117.5h6v-13.837C90.19,102.238,102.28,90.148,103.705,75h13.587V69z   M72.042,97.809c-14.23,0-25.809-11.578-25.809-25.809c0-14.231,11.578-25.809,25.809-25.809S97.85,57.769,97.85,72  C97.85,86.23,86.272,97.809,72.042,97.809z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M72.042,52.541c-10.729,0-19.459,8.729-19.459,19.459s8.729,19.459,19.459,19.459S91.5,82.729,91.5,72  S82.771,52.541,72.042,52.541z M72.042,85.459c-7.421,0-13.459-6.037-13.459-13.459c0-7.421,6.038-13.459,13.459-13.459  S85.5,64.579,85.5,72C85.5,79.422,79.462,85.459,72.042,85.459z",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }))), __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["ComponentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaRegCalendar"], {
    className: "calendar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }), __jsx(components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: calendarItem,
    startDateId: "startDateId-id-home",
    endDateId: "endDateId-id-home",
    updateSearchData: setDateValue => setSearchDate(setDateValue),
    showClearDates: true,
    small: true,
    numberOfMonths: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  })), __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["ComponentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaUserFriends"], {
    className: "user-friends",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }), __jsx(components_UI_ViewWithPopup_ViewWithPopup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: 200,
    noView: true,
    className: "room_guest",
    view: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
      type: "default",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 15
      }
    }, "Room ", roomGuest.room > 0 && `: ${roomGuest.room}`), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 15
      }
    }, "-"), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 15
      }
    }, "Guest", roomGuest.guest > 0 && `: ${roomGuest.guest}`)),
    popup: __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["RoomGuestWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }, __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["ItemWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 15
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }
    }, "Room"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "room",
      increment: () => handleIncrement('room'),
      decrement: () => handleDecrement('room'),
      onChange: e => handleIncDecOnChnage(e, 'room'),
      value: roomGuest.room,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }
    })), __jsx(_Search_style__WEBPACK_IMPORTED_MODULE_10__["ItemWrapper"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 15
      }
    }, __jsx("strong", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }
    }, "Guest"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "guest",
      increment: () => handleIncrement('guest'),
      decrement: () => handleDecrement('guest'),
      onChange: e => handleIncDecOnChnage(e, 'guest'),
      value: roomGuest.guest,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }
    }))),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 9
    }
  })), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "primary",
    htmlType: "submit",
    size: "large",
    onClick: goToSearchPage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, "Find Hotels"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(SearchForm));

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Container/Container */ "./components/UI/Container/Container.js");
/* harmony import */ var components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Heading/Heading */ "./components/UI/Heading/Heading.js");
/* harmony import */ var components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/SectionTitle/SectionTitle */ "./components/SectionTitle/SectionTitle.js");
/* harmony import */ var container_Home_Search_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! container/Home/Search/Search */ "./container/Home/Search/Search.js");
/* harmony import */ var container_Home_Location_Location__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! container/Home/Location/Location */ "./container/Home/Location/Location.js");
/* harmony import */ var components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/SectionGrid/SectionGrid */ "./components/SectionGrid/SectionGrid.js");
/* harmony import */ var library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! library/helpers/get_api_data */ "./library/helpers/get_api_data.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-device-detect */ "react-device-detect");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");
/* harmony import */ var settings_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! settings/config */ "./settings/config.js");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! fs/promises */ "fs/promises");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function HomePage(props) {
  let limit;

  if (react_device_detect__WEBPACK_IMPORTED_MODULE_10__["deviceType"] === 'mobile') {
    limit = settings_config__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE"];
  }

  if (react_device_detect__WEBPACK_IMPORTED_MODULE_10__["deviceType"] === 'tablet') {
    limit = settings_config__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE"];
  }

  if (react_device_detect__WEBPACK_IMPORTED_MODULE_10__["deviceType"] === 'desktop') {
    limit = settings_config__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE"];
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "TripFinder. | A react next listing template")), __jsx(container_Home_Search_Search__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }), __jsx(container_Home_Location_Location__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: props.locationData,
    deviceType: react_device_detect__WEBPACK_IMPORTED_MODULE_10__["deviceType"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: "Travelers\u2019 Choice: Top hotels",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 18
      }
    }),
    link: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: settings_constant__WEBPACK_IMPORTED_MODULE_11__["LISTING_POSTS_PAGE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, "Show all")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    link: settings_constant__WEBPACK_IMPORTED_MODULE_11__["SINGLE_POST_PAGE"],
    columnWidth: settings_config__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH"],
    data: props.topHotelData.slice(0, limit),
    limit: limit,
    deviceType: react_device_detect__WEBPACK_IMPORTED_MODULE_10__["deviceType"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), __jsx(components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: "Best Rated: Luxary hotels",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 18
      }
    }),
    link: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: settings_constant__WEBPACK_IMPORTED_MODULE_11__["LISTING_POSTS_PAGE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }, "Show all")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx(components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    link: settings_constant__WEBPACK_IMPORTED_MODULE_11__["SINGLE_POST_PAGE"],
    columnWidth: settings_config__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH"],
    data: props.luxaryHotelData.slice(0, limit),
    limit: limit,
    deviceType: react_device_detect__WEBPACK_IMPORTED_MODULE_10__["deviceType"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })));
}
async function getStaticProps() {
  //Use when Loading data form DB
  // const apiUrl = [
  //   {
  //     endpoint: 'hotel',
  //     name: 'luxaryHotelData',
  //   },
  //   {
  //     endpoint: 'top-hotel',
  //     name: 'topHotelData',
  //   },
  //   {
  //     endpoint: 'location',
  //     name: 'locationData',
  //   },
  // ];
  // const pageData = await GetAPIData(apiUrl);
  // let locationData = [],
  //   topHotelData = [],
  //   luxaryHotelData = [];
  // if (pageData) {
  //   pageData.forEach((item, key) => {
  //     if (item.name === 'locationData') {
  //       locationData = item.data ? [...item.data] : [];
  //     } else if (item.name === 'topHotelData') {
  //       topHotelData = item.data ? [...item.data] : [];
  //     } else if (item.name === 'luxaryHotelData') {
  //       luxaryHotelData = item.data ? [...item.data] : [];
  //     }
  //   });
  // }
  //Loading data from local files
  const filePath = path__WEBPACK_IMPORTED_MODULE_14___default.a.join(process.cwd(), 'static', 'data', 'location.json');
  const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_13___default.a.readFile(filePath);
  const data = JSON.parse(jsonData);
  const filePath2 = path__WEBPACK_IMPORTED_MODULE_14___default.a.join(process.cwd(), 'static', 'data', 'top-hotel.json');
  const jsonData2 = await fs_promises__WEBPACK_IMPORTED_MODULE_13___default.a.readFile(filePath2);
  const data2 = JSON.parse(jsonData2);
  const filePath3 = path__WEBPACK_IMPORTED_MODULE_14___default.a.join(process.cwd(), 'static', 'data', 'hotel.json');
  const jsonData3 = await fs_promises__WEBPACK_IMPORTED_MODULE_13___default.a.readFile(filePath3);
  const data3 = JSON.parse(jsonData3);
  return {
    props: {
      locationData: data,
      topHotelData: data2,
      luxaryHotelData: data3
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

/***/ "@glidejs/glide":
/*!*********************************!*\
  !*** external "@glidejs/glide" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

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

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs/promises");

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-google-maps/lib/components/places/StandaloneSearchBox":
/*!******************************************************************************!*\
  !*** external "react-google-maps/lib/components/places/StandaloneSearchBox" ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/places/StandaloneSearchBox");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLzEuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLzIuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLzMuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZENhcmQvR3JpZENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkQ2FyZC9HcmlkQ2FyZC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ltYWdlQ2FyZC9JbWFnZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZUNhcmQvSW1hZ2VDYXJkLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXAvTWFwQXV0b0NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwL21hcERhdGFIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25HcmlkL1NlY3Rpb25HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQm94L0JveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0NvbnRhaW5lci9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Db250YWluZXIvQ29udGFpbmVyLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRGF0ZVBpY2tlci9SZWFjdERhdGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRGF0ZVBpY2tlci9SZWFjdERhdGVzLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRmF2b3JpdGUvRmF2b3JpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9GYXZvcml0ZS9GYXZvcml0ZS5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0Zhdm9yaXRlL3VzZVRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0dsaWRlQ2Fyb3VzZWwvR2xpZGVDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0dsaWRlQ2Fyb3VzZWwvR2xpZGVDYXJvdXNlbC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0hlYWRpbmcvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0lucHV0SW5jRGVjL0lucHV0SW5jRGVjLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW5wdXRJbmNEZWMvSW5wdXRJbmNEZWMuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Qb3J0YWwvUG9ydGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvUmF0aW5nL1JhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL1RleHQvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL1RpdGxlL1RpdGxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVGl0bGUvVGl0bGUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9WaWV3V2l0aFBvcHVwL1ZpZXdXaXRoUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9WaWV3V2l0aFBvcHVwL1ZpZXdXaXRoUG9wdXAuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9WaWV3V2l0aFBvcHVwL3VzZU9uQ2xpY2tPdXRzaWRlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9Ib21lL0xvY2F0aW9uL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9Ib21lL0xvY2F0aW9uL0xvY2F0aW9uLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9Ib21lL1NlYXJjaC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL0hvbWUvU2VhcmNoL1NlYXJjaC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvSG9tZS9TZWFyY2gvU2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1NlYXJjaFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2xpYnJhcnkvaGVscGVycy9nZXRfYXBpX2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbGlicmFyeS9oZWxwZXJzL3J0bC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXR0aW5ncy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZ3MvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL01pbnVzT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvUGx1c091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdsaWRlanMvZ2xpZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9pbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzL3Byb21pc2VzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvc2h1ZmZsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRhdGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF0ZXMvaW5pdGlhbGl6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRldmljZS1kZXRlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbWFwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzL2xpYi9jb21wb25lbnRzL3BsYWNlcy9TdGFuZGFsb25lU2VhcmNoQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlY29tcG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLXN5c3RlbVwiIl0sIm5hbWVzIjpbIkdyaWRDYXJkIiwiY2xhc3NOYW1lIiwiZmF2b3JpdGUiLCJsb2NhdGlvbiIsInRpdGxlIiwicHJpY2UiLCJyYXRpbmciLCJlZGl0QnRuIiwidmlld0RldGFpbHNCdG4iLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJ0cmltIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsIkdyaWRDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInRoZW1lR2V0IiwiSW1hZ2VXcmFwcGVyIiwiRmF2b3JpdGVJY29uIiwiQ29udGVudFdyYXBwZXIiLCJMb2NhdGlvbkFyZWEiLCJUaXRsZUFyZWEiLCJQcmljZUFyZWEiLCJSYXRpbmdBcmVhIiwiTWV0YVdyYXBwZXIiLCJCdXR0b25Hcm91cCIsIkltYWdlQ2FyZE5leHQiLCJpbWFnZVNyYyIsImxpbmsiLCJtZXRhIiwiYWRkQWxsQ2xhc3NlcyIsInBhdGhMaW5rIiwicmVwbGFjZSIsInB1c2giLCJqb2luIiwicGF0aG5hbWUiLCJxdWVyeSIsImNvdW50cnkiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwiZGVmYXVsdFByb3BzIiwiSW1hZ2VDYXJkV3JhcHBlciIsIlRpdGxlIiwiaDQiLCJNZXRhIiwiTG9hZGVyIiwiZmlsbCIsIkxvYWRlcldyYXBwZXIiLCJTZWFyY2hJbnB1dCIsImNvbXBvc2UiLCJ3aXRoUHJvcHMiLCJnb29nbGVNYXBVUkwiLCJwcm9jZXNzIiwibG9hZGluZ0VsZW1lbnQiLCJjb250YWluZXJFbGVtZW50Iiwid2l0aFNjcmlwdGpzIiwicHJvcHMiLCJnZXRpbnB1dHZhbHVlIiwibG9jYXRpb25JbnB1dCIsInNldExvY2F0aW9uSW5wdXQiLCJ1c2VTdGF0ZSIsInNlYXJjaGVkTG9jYXRpb24iLCJzZWFyY2hlZFBsYWNlQVBJRGF0YSIsImhhbmRsZU9uQ2hhbmdlIiwiZXZlbnQiLCJ3aGljaCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJyZWZzIiwidXNlUmVmIiwib25QbGFjZXNDaGFuZ2VkIiwicGxhY2VzIiwiY3VycmVudCIsImdldFBsYWNlcyIsImZvcm1hdHRlZF9hZGRyZXNzIiwiaGFuZGxlT25QcmVzc0VudGVyIiwiTWFwQXV0b0NvbXBsZXRlIiwidXBkYXRldmFsdWUiLCJtYXBEYXRhSGVscGVyIiwiaW5mb1ZhbHVlIiwidGVtcE1hcE9iaiIsInRlbXBNYXBBcnJheSIsImxlbmd0aCIsIm1hcCIsInBsYWNlX2lkIiwiYWRkcmVzc19jb21wb25lbnRzIiwiZ2VvbWV0cnkiLCJpZCIsImxhdCIsImxuZyIsImZvcm1hdHRlZEFkZHJlc3MiLCJjaXR5Iiwic3RhdGVfbG9uZyIsInN0YXRlX3Nob3J0IiwiemlwY29kZSIsImNvdW50cnlfbG9uZyIsImNvdW50cnlfc2hvcnQiLCJpIiwidHlwZXMiLCJsb25nX25hbWUiLCJzaG9ydF9uYW1lIiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXIiLCJtb2JpbGUiLCJ0YWJsZXQiLCJQcm9kdWN0Q2FyZCIsInJhdGluZ0NvdW50IiwiZ2FsbGVyeSIsInNsdWciLCJkZXZpY2VUeXBlIiwiY29uc29sZSIsImxvZyIsInVybCIsImluZGV4Iiwib2JqZWN0Rml0IiwiTG9hZE1vcmUiLCJoYW5kbGVMb2FkTW9yZSIsInNob3dCdXR0b24iLCJidXR0b25UZXh0IiwibG9hZGluZyIsImxvYWRNb3JlQ29tcG9uZW50IiwibG9hZE1vcmVTdHlsZSIsIlNlY3Rpb25HcmlkIiwiZGF0YSIsInRvdGFsSXRlbSIsImxpbWl0IiwiY29sdW1uV2lkdGgiLCJwYWdpbmF0aW9uQ29tcG9uZW50IiwicGxhY2Vob2xkZXIiLCJyb3dTdHlsZSIsImNvbHVtblN0eWxlIiwibiIsIk51bWJlciIsImxpbWl0cyIsIkFycmF5IiwiaXRlbSIsImFycmF5IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJib29sIiwib2JqZWN0IiwiZmxleEJveCIsImZsZXhXcmFwIiwibXIiLCJtbCIsInByIiwicGwiLCJqdXN0aWZ5Q29udGVudCIsIm10IiwiU2VjdGlvblRpdGxlIiwiU2VjdGlvblRpdGxlV3JhcHBlciIsInRoZW1lZCIsImtleSIsInRoZW1lIiwiYmFzZSIsImJveFNpemluZyIsInNwYWNlIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJmbGV4Iiwib3JkZXIiLCJhbGlnblNlbGYiLCJib3JkZXJzIiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwiQm94V3JhcHBlciIsImNzcyIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiQm94IiwiYW55IiwiYXMiLCJvbmVPZiIsImFycmF5T2YiLCJib3JkZXIiLCJib3JkZXJUb3AiLCJib3JkZXJSaWdodCIsImJvcmRlckJvdHRvbSIsImJvcmRlckxlZnQiLCJDb250YWluZXIiLCJmdWxsV2lkdGgiLCJub0d1dHRlciIsImZsdWlkIiwiQ29udGFpbmVyV3JhcHBlciIsIkRhdGVSYW5nZVBpY2tlckJveCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImRhdGVGb3JtYXQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXBkYXRlU2VhcmNoRGF0YSIsInNldFN0YXJ0RGF0ZSIsImZvcm1hdCIsInNldEVuZERhdGUiLCJmb2N1c2VkSW5wdXQiLCJzZXBhcmF0b3IiLCJvbkRhdGVDaGFuZ2VGdW5jIiwiYmluZCIsIm9uRm9jdXNDaGFuZ2VGdW5jIiwicmVuZGVyIiwic3RhcnREYXRlSWQiLCJlbmREYXRlSWQiLCJzdGFydERhdGVQbGFjZWhvbGRlclRleHQiLCJlbmREYXRlUGxhY2Vob2xkZXJUZXh0IiwiZGlzYWJsZWQiLCJzaG93Q2xlYXJEYXRlcyIsImlzUlRMIiwib3JpZW50YXRpb24iLCJhbmNob3JEaXJlY3Rpb24iLCJ3aXRoUG9ydGFsIiwid2l0aEZ1bGxTY3JlZW5Qb3J0YWwiLCJzbWFsbCIsImJsb2NrIiwibnVtYmVyT2ZNb250aHMiLCJyZWd1bGFyIiwibm9Cb3JkZXIiLCJkZWZhdWx0Q2FsZW5kZXJQcm9wcyIsIm9uRm9jdXNDaGFuZ2UiLCJvbkRhdGVzQ2hhbmdlIiwiUmVhY3REYXRlc1N0eWxlV3JhcHBlciIsIlJlYWN0RGF0ZVdyYXBwZXIiLCJDb21wb25lbnROYW1lIiwiUmVhY3REYXRlc1dyYXBwZXIiLCJXaXRoRGlyZWN0aW9uIiwiRmF2b3JpdGUiLCJjb250ZW50Iiwib25DbGljayIsInRvZ2dsZVZhbHVlIiwidG9nZ2xlSGFuZGxlciIsInVzZVRvZ2dsZSIsImFkZEFsbENsYXNzIiwiaGFuZGVsQ2xpY2siLCJhZGRBbmltYXRpb24iLCJrZXlmcmFtZXMiLCJyZW1vdmVBbmltYXRpb24iLCJBZGRBbmltYXRpb24iLCJSZW1vdmVBbmltYXRpb24iLCJGYXZvcml0ZVdyYXBwZXIiLCJidXR0b24iLCJpbml0aWFsVmFsdWUiLCJzZXRWYWx1ZSIsInRvZ2dsZXIiLCJ1c2VDYWxsYmFjayIsIkdsaWRlQ2Fyb3VzZWwiLCJvcHRpb25zIiwiY29udHJvbHMiLCJwcmV2QnV0dG9uIiwibmV4dEJ1dHRvbiIsImJ1bGxldHMiLCJudW1iZXJPZkJ1bGxldHMiLCJjYXJvdXNlbFNlbGVjdG9yIiwidG90YWxCdWxsZXRzIiwidXNlRWZmZWN0IiwiZ2xpZGUiLCJHbGlkZSIsIm1vdW50IiwiR2xpZGVTbGlkZSIsIkdsaWRlV3JhcHBlciIsIkdsaWRlU2xpZGVXcmFwcGVyIiwibGkiLCJCdXR0b25XcmFwcGVyIiwiQnV0dG9uQ29udHJvbFdyYXBwZXIiLCJCdWxsZXRDb250cm9sV3JhcHBlciIsIkJ1bGxldEJ1dHRvbiIsIkRlZmF1bHRCdG4iLCJIZWFkaW5nV3JhcHBlciIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJIZWFkaW5nIiwibWIiLCJJbnB1dEluY0RlYyIsImluY3JlbWVudCIsImRlY3JlbWVudCIsIklucHV0SW5jRGVjV3JhcHBlciIsIlBvcnRhbCIsInJlbmRlcmVySWQiLCJjb250YWluZXJFbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInBvcnRhbFJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiUmVhY3RET00iLCJjcmVhdGVQb3J0YWwiLCJSYXRpbmciLCJ0eXBlIiwicmF0aW5nRmllbGROYW1lIiwiZmxvb3JWYWx1ZSIsInJhdGluZ1ZpZXciLCJNYXRoIiwiZmxvb3IiLCJsaXN0aW5nQ29uZGl0aW9uIiwic2hvd1JhdGluZ0NvdW50IiwiVGV4dFdyYXBwZXIiLCJUZXh0IiwibSIsIlRpdGxlV3JhcHBlciIsIkxpbmtXcmFwcGVyIiwiVmlld1dpdGhQb3B1cCIsInZpZXciLCJwb3B1cCIsIm5vVmlldyIsInN0eWxlIiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwicmVmIiwidXNlT25DbGlja091dHNpZGUiLCJyYWRpdXMiLCJXcmFwcGVyIiwiaGFuZGxlciIsImxpc3RlbmVyIiwiY29udGFpbnMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkxvY2F0aW9uR3JpZCIsIkxJU1RJTkdfUE9TVFNfUEFHRSIsInBvc3QiLCJsb2NhdGlvbkltYWdlIiwibnVtYmVyT2ZQb3N0IiwiTG9jYXRpb25XcmFwcGVyIiwiQ2Fyb3VzZWxTZWN0aW9uIiwiSG9tZVNlYXJjaCIsInNlYXJjaFRpdGxlU3R5bGUiLCJzZWFyY2hEZXNjcmlwdGlvblN0eWxlIiwiZ2FwIiwiYXV0b3BsYXkiLCJhbmltYXRpb25EdXJhdGlvbiIsImJhbm5lckJnMSIsImJhbm5lckJnMiIsImJhbm5lckJnMyIsIkJhbm5lcldyYXBwZXIiLCJTZWFyY2hXcmFwcGVyIiwiRm9ybVdyYXBwZXIiLCJDb21wb25lbnRXcmFwcGVyIiwiUm9vbUd1ZXN0V3JhcHBlciIsIkl0ZW1XcmFwcGVyIiwiY2FsZW5kYXJJdGVtIiwibG9jYWxlIiwiU2VhcmNoRm9ybSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIlNlYXJjaENvbnRleHQiLCJzZWFyY2hEYXRlIiwic2V0U2VhcmNoRGF0ZSIsIm1hcFZhbHVlIiwic2V0TWFwVmFsdWUiLCJyb29tR3Vlc3QiLCJzZXRSb29tR3Vlc3QiLCJyb29tIiwiZ3Vlc3QiLCJ1cGRhdGV2YWx1ZUZ1bmMiLCJpc0VtcHR5IiwiaGFuZGxlSW5jcmVtZW50IiwiaGFuZGxlRGVjcmVtZW50IiwiaGFuZGxlSW5jRGVjT25DaG5hZ2UiLCJlIiwiY3VycmVudFZhbHVlIiwiZ29Ub1NlYXJjaFBhZ2UiLCJ0ZW1wTG9jYXRpb24iLCJkYXRlUmFuZ2UiLCJsb2NhdGlvbl9sYXQiLCJsb2NhdGlvbl9sbmciLCJtYXBEYXRhIiwic2luZ2xlTWFwRGF0YSIsInRvRml4ZWQiLCJwYXlsb2FkIiwiUm91dGVyIiwic2hhbGxvdyIsInNldERhdGVWYWx1ZSIsIndpdGhSb3V0ZXIiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiU2VhcmNoUHJvdmlkZXIiLCJ1c2VSZWR1Y2VyIiwiRmV0Y2hBUElEYXRhIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJQcm9jZXNzQVBJRGF0YSIsImFwaURhdGEiLCJmZXRjaERhdGEiLCJmb3JFYWNoIiwibmFtZSIsIlNlYXJjaGVkRGF0YSIsInByb2Nlc3NlZERhdGEiLCJyYW5kTnVtYmVyIiwicmFuZG9tIiwic2h1ZmZsZSIsInNsaWNlIiwiU2VhcmNoU3RhdGVLZXlDaGVjayIsIlBhZ2luYXRvciIsInBvc3RzIiwiR2V0QVBJRGF0YSIsImFwaVVybCIsInByb21pc2VzIiwicmVwbyIsImFwaVBhdGgiLCJhcGkiLCJlbmRwb2ludCIsInJlc3BvbnNlIiwicmVjZXZpZWREYXRhIiwiUHJvbWlzZSIsImFsbCIsImRpcmVjdGlvbiIsIndpdGhEaXJlY3Rpb24iLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJzdWNjZXNzIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsImVsIiwic2V0Q2hpbGRFbG0iLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJvbiIsIm9mZiIsImVtaXQiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwicGFnZSIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSG9tZVBhZ2UiLCJIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfTU9CSUxFX0RFVklDRSIsIkhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9UQUJMRVRfREVWSUNFIiwiSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX0RFU0tUT1BfREVWSUNFIiwibG9jYXRpb25EYXRhIiwiU0lOR0xFX1BPU1RfUEFHRSIsIkhPTUVfUEFHRV9TRUNUSU9OU19DT0xVTU5TX1JFU1BPTlNJVkVfV0lEVEgiLCJ0b3BIb3RlbERhdGEiLCJsdXhhcnlIb3RlbERhdGEiLCJnZXRTdGF0aWNQcm9wcyIsImZpbGVQYXRoIiwiY3dkIiwianNvbkRhdGEiLCJmcyIsInJlYWRGaWxlIiwiSlNPTiIsInBhcnNlIiwiZmlsZVBhdGgyIiwianNvbkRhdGEyIiwiZGF0YTIiLCJmaWxlUGF0aDMiLCJqc29uRGF0YTMiLCJkYXRhMyIsIkxJU1RJTkdfUEFHRV9QT1NUX0xJTUlUIiwiTElTVElOR19QQUdFX0NPTFVNTl9XSURUSF9XSVRIT1VUX01BUCIsIkxJU1RJTkdfUEFHRV9DT0xVTU5fV0lEVEhfV0lUSF9NQVAiLCJIT01FX1BBR0UiLCJBR0VOVFNfUEFHRSIsIkFHRU5UX1BST0ZJTEVfUEFHRSIsIkFHRU5UX0FDQ09VTlRfU0VUVElOR1NfUEFHRSIsIkFHRU5UX1BST0ZJTEVfRURJVF9QQUdFIiwiQUdFTlRfSU1BR0VfRURJVF9QQUdFIiwiQUdFTlRfUEFTU1dPUkRfQ0hBTkdFX1BBR0UiLCJBR0VOVF9QUk9GSUxFX0RFTEVURSIsIkFHRU5UX1BST0ZJTEVfRkFWT1VSSVRFIiwiQUdFTlRfUFJPRklMRV9DT05UQUNUIiwiQUREX0hPVEVMX1BBR0UiLCJQUklDSU5HX1BMQU5fUEFHRSIsIlBSSVZBQ1lfUEFHRSIsIkxPR0lOX1BBR0UiLCJSRUdJU1RSQVRJT05fUEFHRSIsIkNIQU5HRV9QQVNTV09SRF9QQUdFIiwiRk9SR0VUX1BBU1NXT1JEX1BBR0UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qs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Q0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHdGOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzEtM2JkNmQ1ZjhiYzlkMmZlZWNhMzkxN2I2ZWVmNGVlNzMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzItN2FjNmUyOTQ0ZDRjOWUwMTAxMzZkNjdlYTFlZTdjZjIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzMtYjk5MjNlNDgyMWFhNzEzNjYwN2YwNmY1ZDYwNTA4MmQuanBnXCI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR3JpZENhcmRXcmFwcGVyLCB7XG4gIEltYWdlV3JhcHBlcixcbiAgRmF2b3JpdGVJY29uLFxuICBDb250ZW50V3JhcHBlcixcbiAgTG9jYXRpb25BcmVhLFxuICBUaXRsZUFyZWEsXG4gIFByaWNlQXJlYSxcbiAgUmF0aW5nQXJlYSxcbiAgTWV0YVdyYXBwZXIsXG4gIEJ1dHRvbkdyb3VwLFxufSBmcm9tICcuL0dyaWRDYXJkLnN0eWxlJztcblxuY29uc3QgR3JpZENhcmQgPSAoe1xuICBjbGFzc05hbWUsXG4gIGZhdm9yaXRlLFxuICBsb2NhdGlvbixcbiAgdGl0bGUsXG4gIHByaWNlLFxuICByYXRpbmcsXG4gIGVkaXRCdG4sXG4gIHZpZXdEZXRhaWxzQnRuLFxuICBjaGlsZHJlbixcbn0pID0+IHtcbiAgbGV0IGNsYXNzZXMgPSB2aWV3RGV0YWlsc0J0biB8fCBlZGl0QnRuID8gYGhhc19idG4gJHtjbGFzc05hbWV9YCA6IGNsYXNzTmFtZTtcbiAgcmV0dXJuIChcbiAgICA8R3JpZENhcmRXcmFwcGVyIGNsYXNzTmFtZT17YGdyaWRfY2FyZCAke2NsYXNzZXN9YC50cmltKCl9PlxuICAgICAgPEltYWdlV3JhcHBlciBjbGFzc05hbWU9XCJtZWRpYV93cmFwcGVyXCI+e2NoaWxkcmVufTwvSW1hZ2VXcmFwcGVyPlxuICAgICAgPENvbnRlbnRXcmFwcGVyIGNsYXNzTmFtZT1cImNvbnRlbnRfd3JhcHBlclwiPlxuICAgICAgICB7bG9jYXRpb24gJiYgPExvY2F0aW9uQXJlYT57bG9jYXRpb259PC9Mb2NhdGlvbkFyZWE+fVxuICAgICAgICB7dGl0bGUgJiYgPFRpdGxlQXJlYT57dGl0bGV9PC9UaXRsZUFyZWE+fVxuICAgICAgICA8TWV0YVdyYXBwZXIgY2xhc3NOYW1lPVwibWV0YV93cmFwcGVyXCI+XG4gICAgICAgICAge3ByaWNlICYmIDxQcmljZUFyZWEgY2xhc3NOYW1lPVwicHJpY2VcIj57cHJpY2V9PC9QcmljZUFyZWE+fVxuICAgICAgICAgIHtyYXRpbmcgJiYgPFJhdGluZ0FyZWEgY2xhc3NOYW1lPVwicmF0aW5nXCI+e3JhdGluZ308L1JhdGluZ0FyZWE+fVxuICAgICAgICAgIHt2aWV3RGV0YWlsc0J0biB8fCBlZGl0QnRuID8gKFxuICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGNsYXNzTmFtZT1cImJ1dHRvbl9ncm91cFwiPlxuICAgICAgICAgICAgICB7dmlld0RldGFpbHNCdG59XG4gICAgICAgICAgICAgIHtlZGl0QnRufVxuICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9NZXRhV3JhcHBlcj5cbiAgICAgIDwvQ29udGVudFdyYXBwZXI+XG5cbiAgICAgIHtmYXZvcml0ZSAmJiA8RmF2b3JpdGVJY29uPntmYXZvcml0ZX08L0Zhdm9yaXRlSWNvbj59XG4gICAgPC9HcmlkQ2FyZFdyYXBwZXI+XG4gICk7XG59O1xuXG5HcmlkQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHByaWNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByYXRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIGxvY2F0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBlZGl0QnRuOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgdmlld0RldGFpbHNCdG46IFByb3BUeXBlcy5lbGVtZW50LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZENhcmQ7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgR3JpZENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAmLmhhc19idG4ge1xuICAgIC5idXR0b25fZ3JvdXAge1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggJHt0aGVtZUdldCgnYm94U2hhZG93LjInLCAncmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcblxuICAgIC5jb250ZW50X3dyYXBwZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmLmhhc19idG4ge1xuICAgICAgLm1ldGFfd3JhcHBlciB7XG4gICAgICAgIC5yYXRpbmcge1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcbiAgICAgICAgLmJ1dHRvbl9ncm91cCB7XG4gICAgICAgICAgdG9wOiAxOXB4O1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuXG4gICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC1saXN0IHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICA+IGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1saXN0IHtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOGVjO1xuICB9XG5cbiAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0ge1xuICAgIGhlaWdodDogMTcwcHg7XG4gIH1cblxuICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93IHtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDIyJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gIH1cblxuICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIGxlZnQsXG4gICAgICB0cmFuc3BhcmVudCAwJSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4yNSkgMTAwJVxuICAgICk7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIGxlZnQsXG4gICAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMjUpIDEwMCVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tcmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIHJpZ2h0LFxuICAgICAgdHJhbnNwYXJlbnQgMCUsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMjUpIDEwMCVcbiAgICApO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byByaWdodCxcbiAgICAgICAgdHJhbnNwYXJlbnQgMCUsXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4yNSkgMTAwJVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtZG90LWxpc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0zMCU7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gYm90dG9tLFxuICAgICAgdHJhbnNwYXJlbnQgMCUsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMjUpIDEwMCVcbiAgICApO1xuICAgIHRyYW5zaXRpb246IGJvdHRvbSAwLjNzIGVhc2U7XG4gIH1cblxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtZG90IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA2cHg7XG4gICAgICBoZWlnaHQ6IDZweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjMnLCAnI0U5RThFOCcpfTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB9XG4gIH1cblxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtZG90LS1hY3RpdmUge1xuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRmF2b3JpdGVJY29uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiA4cHg7XG4gIHotaW5kZXg6IDk7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2U7XG5gO1xuXG5leHBvcnQgY29uc3QgTG9jYXRpb25BcmVhID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMScsICcjOTA5MDkwJyl9O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZUFyZWEgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiA0cHggMCA1cHg7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIG1hcmdpbjogNHB4IDAgNXB4O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQcmljZUFyZWEgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5gO1xuXG5leHBvcnQgY29uc3QgUmF0aW5nQXJlYSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIC8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblx0XHRtYXJnaW4tdG9wOiA3cHg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0fSAqL1xuXG4gIHNwYW4ge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG5cbiAgaSB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICB9XG5cbiAgc3ZnIHtcbiAgICBmaWxsOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgfVxuXG4gIHN0cm9uZyB7XG4gICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDA7XG5cdFx0fSAqL1xuICB9XG5cbiAgLmFudC1yYXRlIHtcbiAgICAvKiBtYXJnaW4tdG9wOiAtMnB4OyAqL1xuICAgIC5hbnQtcmF0ZS1zdGFyIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1ldGFXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiA3cHg7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cbiAgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMScsICcjMzk5QzlGJyl9O1xuICAgIH1cblxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZENhcmRXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEltYWdlQ2FyZFdyYXBwZXIsIHtcbiAgQ29udGVudFdyYXBwZXIsXG4gIFRpdGxlLFxuICBNZXRhLFxufSBmcm9tICcuL0ltYWdlQ2FyZC5zdHlsZSc7XG5cbmNvbnN0IEltYWdlQ2FyZE5leHQgPSAoeyBjbGFzc05hbWUsIGltYWdlU3JjLCB0aXRsZSwgbGluaywgbWV0YSB9KSA9PiB7XG4gIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ2ltYWdlX2NhcmQnXTtcbiAgY29uc3QgcGF0aExpbmsgPSB0aXRsZS5yZXBsYWNlKC9cXHMvZywgJy0nKTtcblxuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxJbWFnZUNhcmRXcmFwcGVyIGNsYXNzTmFtZT17YWRkQWxsQ2xhc3Nlcy5qb2luKCcgJyl9PlxuICAgICAgPExpbmtcbiAgICAgICAgaHJlZj17e1xuICAgICAgICAgIHBhdGhuYW1lOiBgJHtsaW5rfWAsXG4gICAgICAgICAgcXVlcnk6IHsgY291bnRyeTogYCR7cGF0aExpbmt9YCB9LFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8YT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlU3JjfVxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZScgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgIHt0aXRsZSAmJiA8VGl0bGU+e3RpdGxlfTwvVGl0bGU+fVxuXG4gICAgICAgICAgICB7bWV0YSAmJiA8TWV0YT57bWV0YX08L01ldGE+fVxuICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L0ltYWdlQ2FyZFdyYXBwZXI+XG4gICk7XG59O1xuXG5JbWFnZUNhcmROZXh0LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbWFnZVNyYzogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxpbms6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1ldGE6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5JbWFnZUNhcmROZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGluazogJyMnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJkTmV4dDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBJbWFnZUNhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgPiBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgID4gaW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHotaW5kZXg6IDI7XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDRgXG4gIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1ldGEgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcmRXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTG9hZGVyV3JhcHBlciBmcm9tICcuL0xvYWRlci5zdHlsZSc7XG5cbmNvbnN0IExvYWRlciA9ICh7IGZpbGwsIGNsYXNzTmFtZSB9KSA9PiB7XG4gIC8vIGRlZmF1bHQgY2xhc3NOYW1lXG4gIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ2xvYWRlciddO1xuXG4gIC8vIGFkZCBuZXcgY2xhc3MgdXNpbmcgY2xhc3NOYW1lIHByb3BcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TG9hZGVyV3JhcHBlciBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfT5cbiAgICAgIDxzdmcgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMCAwXCI+XG4gICAgICAgIDxjaXJjbGUgZmlsbD17ZmlsbH0gc3Ryb2tlPVwibm9uZVwiIGN4PVwiNlwiIGN5PVwiNTBcIiByPVwiNlwiPlxuICAgICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXG4gICAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgICB2YWx1ZXM9XCIwOzE7MFwiXG4gICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgYmVnaW49XCIwLjFcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvY2lyY2xlPlxuICAgICAgICA8Y2lyY2xlIGZpbGw9e2ZpbGx9IHN0cm9rZT1cIm5vbmVcIiBjeD1cIjI2XCIgY3k9XCI1MFwiIHI9XCI2XCI+XG4gICAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcbiAgICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICAgIHZhbHVlcz1cIjA7MTswXCJcbiAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICBiZWdpbj1cIjAuMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9jaXJjbGU+XG4gICAgICAgIDxjaXJjbGUgZmlsbD17ZmlsbH0gc3Ryb2tlPVwibm9uZVwiIGN4PVwiNDZcIiBjeT1cIjUwXCIgcj1cIjZcIj5cbiAgICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxuICAgICAgICAgICAgZHVyPVwiMXNcIlxuICAgICAgICAgICAgdmFsdWVzPVwiMDsxOzBcIlxuICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgIGJlZ2luPVwiMC4zXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2NpcmNsZT5cbiAgICAgIDwvc3ZnPlxuICAgIDwvTG9hZGVyV3JhcHBlcj5cbiAgKTtcbn07XG5cbkxvYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKiBDbGFzc05hbWUgb2YgdGhlIExvYWRlciBjb21wb25lbnQuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQWRkIExvYWRlciBjb2xvciB1c2luZyBmaWxsIHByb3AuICovXG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Mb2FkZXIuZGVmYXVsdFByb3BzID0ge1xuICBmaWxsOiAnIzAwODQ4OScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTG9hZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgc3ZnIHtcbiAgICB3aWR0aDogNTJweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHdpdGhTY3JpcHRqcyB9IGZyb20gJ3JlYWN0LWdvb2dsZS1tYXBzJztcbmltcG9ydCBTdGFuZGFsb25lU2VhcmNoQm94IGZyb20gJ3JlYWN0LWdvb2dsZS1tYXBzL2xpYi9jb21wb25lbnRzL3BsYWNlcy9TdGFuZGFsb25lU2VhcmNoQm94JztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IFNlYXJjaElucHV0ID0gY29tcG9zZShcbiAgd2l0aFByb3BzKHtcbiAgICBnb29nbGVNYXBVUkw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9HT09HTEVfTUFQX0FQSV9LRVksXG4gICAgbG9hZGluZ0VsZW1lbnQ6IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwJScgfX0gLz4sXG4gICAgY29udGFpbmVyRWxlbWVudDogPGRpdiBzdHlsZT17eyBoZWlnaHQ6IGA0MDBweGAgfX0gLz4sXG4gIH0pLFxuICB3aXRoU2NyaXB0anNcbikoKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZ2V0aW5wdXR2YWx1ZSB9ID0gcHJvcHM7XG4gIGNvbnN0IFtsb2NhdGlvbklucHV0LCBzZXRMb2NhdGlvbklucHV0XSA9IHVzZVN0YXRlKHtcbiAgICBzZWFyY2hlZExvY2F0aW9uOiAnJyxcbiAgICBzZWFyY2hlZFBsYWNlQVBJRGF0YTogW10sXG4gIH0pO1xuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC53aGljaCA9PT0gJzEzJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBzZXRMb2NhdGlvbklucHV0KHtcbiAgICAgIHNlYXJjaGVkTG9jYXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgcmVmcyA9IHVzZVJlZih7fSk7XG4gIGNvbnN0IG9uUGxhY2VzQ2hhbmdlZCA9ICgpID0+IHtcbiAgICBjb25zdCBwbGFjZXMgPSByZWZzLmN1cnJlbnQuZ2V0UGxhY2VzKCk7XG4gICAgc2V0TG9jYXRpb25JbnB1dCh7XG4gICAgICBzZWFyY2hlZExvY2F0aW9uOiBwbGFjZXMgJiYgcGxhY2VzWzBdICYmIHBsYWNlc1swXS5mb3JtYXR0ZWRfYWRkcmVzcyxcbiAgICAgIHNlYXJjaGVkUGxhY2VBUElEYXRhOiBwbGFjZXMgPyBwbGFjZXMgOiBbXSxcbiAgICB9KTtcbiAgICBnZXRpbnB1dHZhbHVlKHtcbiAgICAgIHNlYXJjaGVkTG9jYXRpb246IHBsYWNlcyAmJiBwbGFjZXNbMF0gJiYgcGxhY2VzWzBdLmZvcm1hdHRlZF9hZGRyZXNzLFxuICAgICAgc2VhcmNoZWRQbGFjZUFQSURhdGE6IHBsYWNlcyA/IHBsYWNlcyA6IFtdLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU9uUHJlc3NFbnRlciA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC53aGljaCA9PT0gJzEzJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBzZXRMb2NhdGlvbklucHV0KHsgc2VhcmNoZWRMb2NhdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIGdldGlucHV0dmFsdWUobG9jYXRpb25JbnB1dCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcF9hdXRvY29tcGxldGVcIj5cbiAgICAgIDxTdGFuZGFsb25lU2VhcmNoQm94IHJlZj17cmVmc30gb25QbGFjZXNDaGFuZ2VkPXtvblBsYWNlc0NoYW5nZWR9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICB2YWx1ZT17bG9jYXRpb25JbnB1dC5zZWFyY2hlZExvY2F0aW9uIHx8ICcnfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIOKAnFRoYWlsYW5kLCBBc2lh4oCdXCJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICBvblByZXNzRW50ZXI9e2hhbmRsZU9uUHJlc3NFbnRlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvU3RhbmRhbG9uZVNlYXJjaEJveD5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5jb25zdCBNYXBBdXRvQ29tcGxldGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB1cGRhdGV2YWx1ZSB9ID0gcHJvcHM7XG4gIHJldHVybiA8U2VhcmNoSW5wdXQgZ2V0aW5wdXR2YWx1ZT17dXBkYXRldmFsdWV9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwQXV0b0NvbXBsZXRlO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG1hcERhdGFIZWxwZXIoaW5mb1ZhbHVlKSB7XG4gIGNvbnN0IHRlbXBNYXBPYmogPSB7fTtcbiAgY29uc3QgdGVtcE1hcEFycmF5ID0gW107XG5cbiAgaWYgKGluZm9WYWx1ZSAmJiBpbmZvVmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgaW5mb1ZhbHVlLm1hcChcbiAgICAgICh7XG4gICAgICAgIHBsYWNlX2lkLFxuICAgICAgICBhZGRyZXNzX2NvbXBvbmVudHMsXG4gICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzLFxuICAgICAgICBnZW9tZXRyeTogeyBsb2NhdGlvbiB9LFxuICAgICAgfSkgPT4ge1xuICAgICAgICBsZXQgaWQgPSAnJztcbiAgICAgICAgbGV0IGxhdCA9ICcnO1xuICAgICAgICBsZXQgbG5nID0gJyc7XG4gICAgICAgIGxldCBmb3JtYXR0ZWRBZGRyZXNzID0gJyc7XG4gICAgICAgIGxldCBjaXR5ID0gJyc7XG4gICAgICAgIGxldCBzdGF0ZV9sb25nID0gJyc7XG4gICAgICAgIGxldCBzdGF0ZV9zaG9ydCA9ICcnO1xuICAgICAgICBsZXQgemlwY29kZSA9ICcnO1xuICAgICAgICBsZXQgY291bnRyeV9sb25nID0gJyc7XG4gICAgICAgIGxldCBjb3VudHJ5X3Nob3J0ID0gJyc7XG5cbiAgICAgICAgaWQgPSBwbGFjZV9pZDtcbiAgICAgICAgbGF0ID0gbG9jYXRpb24ubGF0KCk7XG4gICAgICAgIGxuZyA9IGxvY2F0aW9uLmxuZygpO1xuICAgICAgICBmb3JtYXR0ZWRBZGRyZXNzID0gZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgICAgIGlmIChhZGRyZXNzX2NvbXBvbmVudHMpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZHJlc3NfY29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFkZHJlc3NfY29tcG9uZW50c1tpXS50eXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChhZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXNbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsb2NhbGl0eSc6XG4gICAgICAgICAgICAgICAgICBjaXR5ID0gYWRkcmVzc19jb21wb25lbnRzW2ldLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FkbWluaXN0cmF0aXZlX2FyZWFfbGV2ZWxfMSc6XG4gICAgICAgICAgICAgICAgICBzdGF0ZV9sb25nID0gYWRkcmVzc19jb21wb25lbnRzW2ldLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICAgIHN0YXRlX3Nob3J0ID0gYWRkcmVzc19jb21wb25lbnRzW2ldLnNob3J0X25hbWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjb3VudHJ5JzpcbiAgICAgICAgICAgICAgICAgIGNvdW50cnlfbG9uZyA9IGFkZHJlc3NfY29tcG9uZW50c1tpXS5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgICBjb3VudHJ5X3Nob3J0ID0gYWRkcmVzc19jb21wb25lbnRzW2ldLnNob3J0X25hbWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdwb3N0YWxfY29kZSc6XG4gICAgICAgICAgICAgICAgICB6aXBjb2RlID0gYWRkcmVzc19jb21wb25lbnRzW2ldLmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRlbXBNYXBPYmouaWQgPSBpZDtcbiAgICAgICAgdGVtcE1hcE9iai5sYXQgPSBsYXQ7XG4gICAgICAgIHRlbXBNYXBPYmoubG5nID0gbG5nO1xuICAgICAgICB0ZW1wTWFwT2JqLmZvcm1hdHRlZEFkZHJlc3MgPSBmb3JtYXR0ZWRBZGRyZXNzO1xuICAgICAgICB0ZW1wTWFwT2JqLmNpdHkgPSBjaXR5O1xuICAgICAgICB0ZW1wTWFwT2JqLnN0YXRlX3Nob3J0ID0gc3RhdGVfc2hvcnQ7XG4gICAgICAgIHRlbXBNYXBPYmouc3RhdGVfbG9uZyA9IHN0YXRlX2xvbmc7XG4gICAgICAgIHRlbXBNYXBPYmouemlwY29kZSA9IHppcGNvZGU7XG4gICAgICAgIHRlbXBNYXBPYmouY291bnRyeV9zaG9ydCA9IGNvdW50cnlfc2hvcnQ7XG4gICAgICAgIHRlbXBNYXBPYmouY291bnRyeV9sb25nID0gY291bnRyeV9sb25nO1xuICAgICAgICB0ZW1wTWFwQXJyYXkucHVzaCh0ZW1wTWFwT2JqKTtcbiAgICAgICAgcmV0dXJuIHRlbXBNYXBBcnJheTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHRlbXBNYXBBcnJheTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgRmlFeHRlcm5hbExpbmsgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xuaW1wb3J0IFJhdGluZyBmcm9tICdjb21wb25lbnRzL1VJL1JhdGluZy9SYXRpbmcnO1xuaW1wb3J0IEZhdm91cml0ZSBmcm9tICdjb21wb25lbnRzL1VJL0Zhdm9yaXRlL0Zhdm9yaXRlJztcblxuaW1wb3J0IEdyaWRDYXJkIGZyb20gJy4uL0dyaWRDYXJkL0dyaWRDYXJkJztcblxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgZGVza3RvcDoge1xuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIG1heDogMzAwMCxcbiAgICAgIG1pbjogMTAyNCxcbiAgICB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlcjogNDAsXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIG1heDogNDY0LFxuICAgICAgbWluOiAwLFxuICAgIH0sXG4gICAgaXRlbXM6IDEsXG4gICAgcGFyaXRpYWxWaXNpYmlsaXR5R3V0dGVyOiAzMCxcbiAgfSxcbiAgdGFibGV0OiB7XG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgbWF4OiAxMDI0LFxuICAgICAgbWluOiA0NjQsXG4gICAgfSxcbiAgICBpdGVtczogMSxcbiAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXI6IDMwLFxuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHtcbiAgdGl0bGUsXG4gIHJhdGluZyxcbiAgbG9jYXRpb24sXG4gIHByaWNlLFxuICByYXRpbmdDb3VudCxcbiAgZ2FsbGVyeSxcbiAgc2x1ZyxcbiAgbGluayxcbiAgZGV2aWNlVHlwZSxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZENhcmRcbiAgICAgIGZhdm9yaXRlPXtcbiAgICAgICAgPEZhdm91cml0ZVxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICBsb2NhdGlvbj17bG9jYXRpb24uZm9ybWF0dGVkQWRkcmVzc31cbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIHByaWNlPXtgJCR7cHJpY2V9L05pZ2h0IC0gRnJlZSBDYW5jZWxsYXRpb25gfVxuICAgICAgcmF0aW5nPXs8UmF0aW5nIHJhdGluZz17cmF0aW5nfSByYXRpbmdDb3VudD17cmF0aW5nQ291bnR9IHR5cGU9XCJidWxrXCIgLz59XG4gICAgICB2aWV3RGV0YWlsc0J0bj17XG4gICAgICAgIDxMaW5rIGhyZWY9e2Ake2xpbmt9L1tzbHVnXWB9IGFzPXtgJHtsaW5rfS8ke3NsdWd9YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxGaUV4dGVybmFsTGluayAvPiBWaWV3IERldGFpbHNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIH1cbiAgICA+XG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgc3NyXG4gICAgICAgIGFkZGl0aW9uYWxUcmFuc2Zyb209ezB9XG4gICAgICAgIGFycm93c1xuICAgICAgICBhdXRvUGxheVNwZWVkPXszMDAwfVxuICAgICAgICBjb250YWluZXJDbGFzcz1cImNvbnRhaW5lclwiXG4gICAgICAgIGRvdExpc3RDbGFzcz1cIlwiXG4gICAgICAgIGRyYWdnYWJsZVxuICAgICAgICBmb2N1c09uU2VsZWN0PXtmYWxzZX1cbiAgICAgICAgaW5maW5pdGVcbiAgICAgICAgaXRlbUNsYXNzPVwiXCJcbiAgICAgICAgcmVuZGVyRG90c091dHNpZGU9e2ZhbHNlfVxuICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICBkZXZpY2VUeXBlPXtkZXZpY2VUeXBlfVxuICAgICAgICBzaG93RG90cz17dHJ1ZX1cbiAgICAgICAgc2xpZGVyQ2xhc3M9XCJcIlxuICAgICAgICBzbGlkZXNUb1NsaWRlPXsxfVxuICAgICAgPlxuICAgICAgICB7Z2FsbGVyeS5tYXAoKHsgdXJsLCB0aXRsZSB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17dXJsfVxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9DYXJvdXNlbD5cbiAgICA8L0dyaWRDYXJkPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGV4dCBmcm9tICdjb21wb25lbnRzL1VJL1RleHQvVGV4dCc7XG5pbXBvcnQgQm94IGZyb20gJ2NvbXBvbmVudHMvVUkvQm94L0JveCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuLi9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZCc7XG5jb25zdCBMb2FkTW9yZSA9ICh7XG4gIGhhbmRsZUxvYWRNb3JlLFxuICBzaG93QnV0dG9uLFxuICBidXR0b25UZXh0LFxuICBsb2FkaW5nLFxuICBsb2FkTW9yZUNvbXBvbmVudCxcbiAgbG9hZE1vcmVTdHlsZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICAhIXNob3dCdXR0b24gJiYgKFxuICAgICAgPEJveCBjbGFzc05hbWU9XCJsb2FkbW9yZV93cmFwcGVyXCIgey4uLmxvYWRNb3JlU3R5bGV9PlxuICAgICAgICB7bG9hZE1vcmVDb21wb25lbnQgPyAoXG4gICAgICAgICAgbG9hZE1vcmVDb21wb25lbnRcbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9IG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlfT5cbiAgICAgICAgICAgIHtidXR0b25UZXh0IHx8ICdMb2FkIE1vcmUnfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbkdyaWQoe1xuICBkYXRhID0gW10sXG4gIHRvdGFsSXRlbSxcbiAgbGltaXQsXG4gIGNvbHVtbldpZHRoLFxuICBwYWdpbmF0aW9uQ29tcG9uZW50LFxuICBoYW5kbGVMb2FkTW9yZSxcbiAgbG9hZE1vcmVDb21wb25lbnQsXG4gIHBsYWNlaG9sZGVyLFxuICBsb2FkaW5nLFxuICBidXR0b25UZXh0LFxuICByb3dTdHlsZSxcbiAgY29sdW1uU3R5bGUsXG4gIGxvYWRNb3JlU3R5bGUsXG4gIGxpbmssXG59KSB7XG4gIGNvbnN0IG4gPSBsaW1pdCA/IE51bWJlcihsaW1pdCkgOiAxO1xuICBjb25zdCBsaW1pdHMgPSBBcnJheShuKS5maWxsKDApO1xuXG4gIGxldCBzaG93QnV0dG9uID0gZGF0YS5sZW5ndGggPCB0b3RhbEl0ZW07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJveCBjbGFzc05hbWU9XCJncmlkX3dyYXBwZXJcIiB7Li4ucm93U3R5bGV9PlxuICAgICAgICB7ZGF0YSAmJiBkYXRhLmxlbmd0aFxuICAgICAgICAgID8gZGF0YS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkX2NvbHVtblwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17Y29sdW1uV2lkdGh9XG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICB7Li4uY29sdW1uU3R5bGV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIGxpbms9e2xpbmt9IHsuLi5pdGVtfSAvPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIHtsb2FkaW5nICYmXG4gICAgICAgICAgbGltaXRzLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkX2NvbHVtblwiXG4gICAgICAgICAgICAgIHdpZHRoPXtjb2x1bW5XaWR0aH1cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICB7Li4uY29sdW1uU3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwbGFjZWhvbGRlciA/IHBsYWNlaG9sZGVyIDogPFRleHQgY29udGVudD1cIkxvYWRpbmcgLi4uXCIgLz59XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuXG4gICAgICB7c2hvd0J1dHRvbiAmJiAoXG4gICAgICAgIDxMb2FkTW9yZVxuICAgICAgICAgIHNob3dCdXR0b249e3Nob3dCdXR0b259XG4gICAgICAgICAgaGFuZGxlTG9hZE1vcmU9e2hhbmRsZUxvYWRNb3JlfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgYnV0dG9uVGV4dD17YnV0dG9uVGV4dH1cbiAgICAgICAgICBsb2FkTW9yZUNvbXBvbmVudD17bG9hZE1vcmVDb21wb25lbnR9XG4gICAgICAgICAgbG9hZE1vcmVTdHlsZT17bG9hZE1vcmVTdHlsZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7cGFnaW5hdGlvbkNvbXBvbmVudCAmJiAoXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwicGFnaW5hdGlvbl93cmFwcGVyXCI+e3BhZ2luYXRpb25Db21wb25lbnR9PC9Cb3g+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5TZWN0aW9uR3JpZC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICB0b3RhbEl0ZW06IFByb3BUeXBlcy5udW1iZXIsXG4gIGNvbHVtbldpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5LFxuICBdKSxcbiAgcGFnaW5hdGlvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIGhhbmRsZUxvYWRNb3JlOiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9hZE1vcmVDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50LFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBsaW1pdDogUHJvcFR5cGVzLm51bWJlcixcbiAgYnV0dG9uVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgcm93U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNvbHVtblN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBsb2FkTW9yZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuU2VjdGlvbkdyaWQuZGVmYXVsdFByb3BzID0ge1xuICByb3dTdHlsZToge1xuICAgIGZsZXhCb3g6IHRydWUsXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBtcjogWyctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTVweCddLFxuICAgIG1sOiBbJy0xMHB4JywgJy0xMHB4JywgJy0xMHB4JywgJy0xMHB4JywgJy0xMHB4JywgJy0xNXB4J10sXG4gIH0sXG4gIGNvbHVtblN0eWxlOiB7XG4gICAgcHI6IFsnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzE1cHgnXSxcbiAgICBwbDogWycxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTVweCddLFxuICB9LFxuICBsb2FkTW9yZVN0eWxlOiB7XG4gICAgZmxleEJveDogdHJ1ZSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbXQ6ICcxcmVtJyxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlY3Rpb25UaXRsZUV4dGVuZGVkIGZyb20gJ2NvbXBvbmVudHMvVUkvVGl0bGUvVGl0bGUnO1xuaW1wb3J0IFNlY3Rpb25UaXRsZVdyYXBwZXIgZnJvbSAnLi9TZWN0aW9uVGl0bGUuc3R5bGUnO1xuXG5jb25zdCBTZWN0aW9uVGl0bGUgPSAoeyAuLi5wcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb25UaXRsZVdyYXBwZXI+XG4gICAgICA8U2VjdGlvblRpdGxlRXh0ZW5kZWQgey4uLnByb3BzfSAvPlxuICAgIDwvU2VjdGlvblRpdGxlV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25UaXRsZTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBTZWN0aW9uVGl0bGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgaDIsXG4gIGEge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGgyIHtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICB9XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25UaXRsZVdyYXBwZXI7XG4iLCIvKiogVGhpcyBpcyBvdXIgYmFzZSBjb21wb25lbnQgZXZlcnkgY29tcG9uZW50cyBtdXN0IGJlIGV4dGVuZCBpdC4gKi9cbmltcG9ydCB7XG4gIHNwYWNlLFxuICBib3JkZXJzLFxuICBib3JkZXJDb2xvcixcbiAgd2lkdGgsXG4gIG1pbldpZHRoLFxuICBtYXhXaWR0aCxcbiAgaGVpZ2h0LFxuICBtaW5IZWlnaHQsXG4gIG1heEhlaWdodCxcbiAgZGlzcGxheSxcbiAgZm9udFNpemUsXG4gIGZsZXgsXG4gIG9yZGVyLFxuICBhbGlnblNlbGYsXG4gIGNvbG9yLFxuICBjb21wb3NlLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuZXhwb3J0IGNvbnN0IHRoZW1lZCA9IGtleSA9PiBwcm9wcyA9PiBwcm9wcy50aGVtZVtrZXldO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IGNvbXBvc2UoXG4gICgpID0+ICh7IGJveFNpemluZzogJ2JvcmRlci1ib3gnIH0pLFxuICBzcGFjZSxcbiAgd2lkdGgsXG4gIG1pbldpZHRoLFxuICBtYXhXaWR0aCxcbiAgaGVpZ2h0LFxuICBtaW5IZWlnaHQsXG4gIG1heEhlaWdodCxcbiAgZm9udFNpemUsXG4gIGNvbG9yLFxuICBmbGV4LFxuICBvcmRlcixcbiAgYWxpZ25TZWxmLFxuICBib3JkZXJzLFxuICBib3JkZXJDb2xvcixcbiAgZGlzcGxheVxuKTtcblxuYmFzZS5wcm9wVHlwZXMgPSB7XG4gIC4uLmRpc3BsYXkucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLmJvcmRlcnMucHJvcFR5cGVzLFxuICAuLi5ib3JkZXJDb2xvci5wcm9wVHlwZXMsXG4gIC4uLndpZHRoLnByb3BUeXBlcyxcbiAgLi4uaGVpZ2h0LnByb3BUeXBlcyxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmZsZXgucHJvcFR5cGVzLFxuICAuLi5vcmRlci5wcm9wVHlwZXMsXG4gIC4uLmFsaWduU2VsZi5wcm9wVHlwZXMsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIGZsZXhXcmFwLFxuICBmbGV4RGlyZWN0aW9uLFxuICBhbGlnbkl0ZW1zLFxuICBqdXN0aWZ5Q29udGVudCxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgeyBiYXNlLCB0aGVtZWQgfSBmcm9tICcuLi9CYXNlJztcblxuY29uc3QgQm94V3JhcHBlciA9IHN0eWxlZCgnZGl2JykoXG4gIGJhc2UsXG4gIHRoZW1lZCgnQm94JyksXG4gIHByb3BzID0+XG4gICAgcHJvcHMuZmxleEJveCAmJlxuICAgIGNzcyhcbiAgICAgIHsgZGlzcGxheTogJ2ZsZXgnIH0sXG4gICAgICBmbGV4V3JhcCxcbiAgICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgICBhbGlnbkl0ZW1zLFxuICAgICAganVzdGlmeUNvbnRlbnQsXG4gICAgICB0aGVtZWQoJ0ZsZXhCb3gnKVxuICAgIClcbik7XG5cbmNvbnN0IEJveCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxCb3hXcmFwcGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQm94V3JhcHBlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcblxuQm94LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgLyoqIFVzaW5nIHRoaXMgcHJvcHMgd2UgY2FuIGNvbnZlcnQgb3VyIEJveCBDb21wb25lbnQgdG8gYSBGbGV4IENvbnRhaW5lciBvciBDb21wb25lbnQgKi9cbiAgZmxleEJveDogUHJvcFR5cGVzLmJvb2wsXG4gIGFzOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdkaXYnLFxuICAgICdhcnRpY2xlJyxcbiAgICAnc2VjdGlvbicsXG4gICAgJ2FkZHJlc3MnLFxuICAgICdoZWFkZXInLFxuICAgICdmb290ZXInLFxuICAgICduYXYnLFxuICAgICdtYWluJyxcbiAgXSksXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgZm9udFNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGZsZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGFsaWduU2VsZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXJUb3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXJSaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGJvcmRlckJvdHRvbTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGJvcmRlckxlZnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXJDb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG59O1xuXG5Cb3guZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2RpdicsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29udGFpbmVyV3JhcHBlciBmcm9tICcuL0NvbnRhaW5lci5zdHlsZSc7XG5cbmNvbnN0IENvbnRhaW5lciA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGZ1bGxXaWR0aCwgbm9HdXR0ZXIsIGZsdWlkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBmdWxsV2lkdGg9e2Z1bGxXaWR0aH1cbiAgICAgIG5vR3V0dGVyPXtub0d1dHRlcn1cbiAgICAgIGZsdWlkPXtmbHVpZH1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250YWluZXJXcmFwcGVyPlxuICApO1xufTtcblxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuICBub0d1dHRlcjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ29udGFpbmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmZ1bGxXaWR0aCAmJlxuICAgIGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYH07XG4gICR7KHByb3BzKSA9PlxuICAgIChwcm9wcy5ub0d1dHRlciAmJlxuICAgICAgY3NzYFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICBgKSB8fFxuICAgIGNzc2BcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgIGB9O1xuXG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmZsdWlkICYmXG4gICAgY3NzYFxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgIG1heC13aWR0aDogMTkyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDFweCkge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDc1cHg7XG4gICAgICB9XG4gICAgYH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgbWF4LXdpZHRoOiA5NzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICBtYXgtd2lkdGg6IDExNzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyV3JhcHBlcjtcbiIsImltcG9ydCAncmVhY3QtZGF0ZXMvaW5pdGlhbGl6ZSc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tICdyZWFjdC1kYXRlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJlYWN0RGF0ZXNTdHlsZVdyYXBwZXIgfSBmcm9tICcuL1JlYWN0RGF0ZXMuc3R5bGUnO1xuLypcbiAqIEZvciBMb2NhbGl6YXRpb24gZW5hYmxlIHRoaXMgY29kZSBbZXhhbXBsZSA6IEZyZW5jaCBsYW5ndWFnZSBhcyBcImZyXCJdXG4gKi9cbi8vIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50Jztcbi8vIGltcG9ydCAnbW9tZW50L2xvY2FsZS9mcic7XG5cbmNsYXNzIERhdGVSYW5nZVBpY2tlckJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHNlcGFyYXRvciA9XG4gICAgICB0aGlzLnByb3BzLml0ZW0gJiYgdGhpcy5wcm9wcy5pdGVtLnNlcGFyYXRvclxuICAgICAgICA/IHRoaXMucHJvcHMuaXRlbS5zZXBhcmF0b3JcbiAgICAgICAgOiAnLyc7XG4gICAgY29uc3QgZGF0ZUZvcm1hdCA9XG4gICAgICB0aGlzLnByb3BzLml0ZW0gJiYgdGhpcy5wcm9wcy5pdGVtLmZvcm1hdFxuICAgICAgICA/IHRoaXMucHJvcHMuaXRlbS5mb3JtYXRcbiAgICAgICAgOiAnbGxsbCc7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvY3VzZWRJbnB1dDogbnVsbCxcbiAgICAgIHN0YXJ0RGF0ZTogdGhpcy5wcm9wcy5zdGFydERhdGUgPyB0aGlzLnByb3BzLnN0YXJ0RGF0ZSA6IG51bGwsXG4gICAgICBlbmREYXRlOiB0aGlzLnByb3BzLmVuZERhdGUgPyB0aGlzLnByb3BzLmVuZERhdGUgOiBudWxsLFxuICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgIHNlcGFyYXRvcixcbiAgICB9O1xuICAgIHRoaXMub25EYXRlQ2hhbmdlRnVuYyA9IHRoaXMub25EYXRlQ2hhbmdlRnVuYy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Gb2N1c0NoYW5nZUZ1bmMgPSB0aGlzLm9uRm9jdXNDaGFuZ2VGdW5jLmJpbmQodGhpcyk7XG4gICAgLypcbiAgICAgKiBGb3IgTG9jYWxpemF0aW9uIGVuYWJsZSB0aGlzIGNvZGUgW2V4YW1wbGUgOiBGcmVuY2ggbGFuZ3VhZ2UgYXMgXCJmclwiXVxuICAgICAqL1xuICAgIC8vIG1vbWVudC5sb2NhbGUoJ2ZyJyk7XG4gIH1cblxuICBvbkRhdGVDaGFuZ2VGdW5jID0gKHsgc3RhcnREYXRlLCBlbmREYXRlIH0pID0+IHtcbiAgICBjb25zdCB7IGRhdGVGb3JtYXQgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KTtcbiAgICBpZiAoc3RhcnREYXRlICE9PSBudWxsICYmIGVuZERhdGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VhcmNoRGF0YSh7XG4gICAgICAgIHNldFN0YXJ0RGF0ZTogc3RhcnREYXRlLmZvcm1hdChkYXRlRm9ybWF0KSxcbiAgICAgICAgc2V0RW5kRGF0ZTogZW5kRGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCksXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgb25Gb2N1c0NoYW5nZUZ1bmMgPSAoZm9jdXNlZElucHV0KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkSW5wdXQgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZm9jdXNlZElucHV0LCBzdGFydERhdGUsIGVuZERhdGUgfSA9IHRoaXMuc3RhdGU7XG4gICAgLy8gRGF0ZVJhbmdlUGlja2VyQm94IHByb3BzIGxpc3RcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdGFydERhdGVJZCxcbiAgICAgIGVuZERhdGVJZCxcbiAgICAgIHN0YXJ0RGF0ZVBsYWNlaG9sZGVyVGV4dCxcbiAgICAgIGVuZERhdGVQbGFjZWhvbGRlclRleHQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHNob3dDbGVhckRhdGVzLFxuICAgICAgaXNSVEwsXG4gICAgICBvcmllbnRhdGlvbixcbiAgICAgIGFuY2hvckRpcmVjdGlvbixcbiAgICAgIHdpdGhQb3J0YWwsXG4gICAgICB3aXRoRnVsbFNjcmVlblBvcnRhbCxcbiAgICAgIHNtYWxsLFxuICAgICAgYmxvY2ssXG4gICAgICBudW1iZXJPZk1vbnRocyxcbiAgICAgIHJlZ3VsYXIsXG4gICAgICBub0JvcmRlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIEFkZCBhbGwgY2xhc3NzIHRvIGFuIGFycmF5ICoqKioqKioqKioqKioqXG4gICAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsnZGF0ZV9waWNrZXInXTtcbiAgICAvLyBjbGFzc05hbWUgcHJvcCBjaGVja2luZyAqKioqKioqKioqKioqKlxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIC8vIFJlYWN0LURhdGVzIERhdGVSYW5nZVBpY2tlciBQcm9wcyBMaXN0XG4gICAgY29uc3QgZGVmYXVsdENhbGVuZGVyUHJvcHMgPSB7XG4gICAgICBzdGFydERhdGVJZDogc3RhcnREYXRlSWQgPyBzdGFydERhdGVJZCA6ICdzdGFydF91bmlxdWVfaWQnLFxuICAgICAgZW5kRGF0ZUlkOiBlbmREYXRlSWQgPyBlbmREYXRlSWQgOiAnZW5kX2RhdGVfdW5pcXVlX2lkJyxcbiAgICAgIHN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGUsXG4gICAgICBmb2N1c2VkSW5wdXQsXG4gICAgICBvbkZvY3VzQ2hhbmdlOiB0aGlzLm9uRm9jdXNDaGFuZ2VGdW5jLFxuICAgICAgb25EYXRlc0NoYW5nZTogdGhpcy5vbkRhdGVDaGFuZ2VGdW5jLFxuICAgICAgc3RhcnREYXRlUGxhY2Vob2xkZXJUZXh0LFxuICAgICAgZW5kRGF0ZVBsYWNlaG9sZGVyVGV4dCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaXNSVEwsXG4gICAgICBzaG93Q2xlYXJEYXRlczogc2hvd0NsZWFyRGF0ZXMgPyBzaG93Q2xlYXJEYXRlcyA6IGZhbHNlLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgICBhbmNob3JEaXJlY3Rpb24sXG4gICAgICB3aXRoUG9ydGFsLFxuICAgICAgd2l0aEZ1bGxTY3JlZW5Qb3J0YWwsXG4gICAgICBzbWFsbCxcbiAgICAgIG51bWJlck9mTW9udGhzOiBudW1iZXJPZk1vbnRocyA/IG51bWJlck9mTW9udGhzIDogMixcbiAgICAgIGJsb2NrLFxuICAgICAgcmVndWxhcixcbiAgICAgIG5vQm9yZGVyLFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0RGF0ZXNTdHlsZVdyYXBwZXIgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX0+XG4gICAgICAgIDxEYXRlUmFuZ2VQaWNrZXIgey4uLmRlZmF1bHRDYWxlbmRlclByb3BzfSAvPlxuICAgICAgPC9SZWFjdERhdGVzU3R5bGVXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxuRGF0ZVJhbmdlUGlja2VyQm94LnByb3BUeXBlcyA9IHtcbiAgLyoqIHN0YXJ0RGF0ZUlkIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBzdGFydERhdGVJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvKiogZW5kRGF0ZUlkIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBlbmREYXRlSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCwgLy9cbiAgLyoqIHN0YXJ0RGF0ZVBsYWNlaG9sZGVyVGV4dCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgc3RhcnREYXRlUGxhY2Vob2xkZXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogZW5kRGF0ZVBsYWNlaG9sZGVyVGV4dCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgZW5kRGF0ZVBsYWNlaG9sZGVyVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIGRpc2FibGVkIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmJvb2wsXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsnU1RBUlRfREFURScsICdFTkRfREFURSddKSxcbiAgXSksXG5cbiAgLyoqIHNob3dDbGVhckRhdGVzIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBzaG93Q2xlYXJEYXRlczogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBpc1JUTCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgaXNSVEw6IFByb3BUeXBlcy5ib29sLFxuICAvKiogb3JpZW50YXRpb24gb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIG9yaWVudGF0aW9uOiBQcm9wVHlwZXMub25lT2YoWydob3Jpem9udGFsJywgJ3ZlcnRpY2FsJ10pLFxuICAvKiogYW5jaG9yRGlyZWN0aW9uIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBhbmNob3JEaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG4gIC8qKiB3aXRoUG9ydGFsIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICB3aXRoUG9ydGFsOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIHdpdGhGdWxsU2NyZWVuUG9ydGFsIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICB3aXRoRnVsbFNjcmVlblBvcnRhbDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiBzbWFsbCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgc21hbGw6IFByb3BUeXBlcy5ib29sLFxuICAvKiogbnVtYmVyT2ZNb250aHMgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIG51bWJlck9mTW9udGhzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAvKiogYmxvY2sgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIGJsb2NrOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIHJlZ3VsYXIgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIHJlZ3VsYXI6IFByb3BUeXBlcy5ib29sLFxuICAvKiogbm9Cb3JkZXIgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIG5vQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIHVwZGF0ZVNlYXJjaERhdGEgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkIHRvIHNlbmQgY29tcG9uZW50IGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudCAqL1xuICB1cGRhdGVTZWFyY2hEYXRhOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVSYW5nZVBpY2tlckJveDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFdpdGhEaXJlY3Rpb24gZnJvbSAnbGlicmFyeS9oZWxwZXJzL3J0bCc7XG5cbmNvbnN0IFJlYWN0RGF0ZXNTdHlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgLmFudC1mb3JtLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgLmFudC1mb3JtLWl0ZW0tbGFiZWwge1xuICAgICAgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBSZWFjdERhdGVXcmFwcGVyID0gQ29tcG9uZW50TmFtZSA9PiBzdHlsZWQoQ29tcG9uZW50TmFtZSlgXG4gIC5pc29SZWFjdERhdGUge1xuICAgIGhlaWdodDogMTAwdmg7XG5cbiAgICAuRGF0ZUlucHV0X19kaXNwbGF5LXRleHQtLWZvY3VzZWQge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cblxuICAgIC5DYWxlbmRhckRheS0tc2VsZWN0ZWQtc3RhcnQsXG4gICAgLkNhbGVuZGFyRGF5LS1zZWxlY3RlZC1lbmQsXG4gICAgLkNhbGVuZGFyRGF5LS1zZWxlY3RlZCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuQ2FsZW5kYXJEYXktLXNlbGVjdGVkLXNwYW4ge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLkNhbGVuZGFyRGF5LS1ob3ZlcmVkLXNwYW4sXG4gICAgLkNhbGVuZGFyRGF5LS1hZnRlci1ob3ZlcmVkLXN0YXJ0IHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5EYXlQaWNrZXJLZXlib2FyZFNob3J0Y3V0c19fc2hvdy0tYm90dG9tLXJpZ2h0IHtcbiAgICAgIGJvcmRlci10b3A6IDI2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICB9XG5cbiAgICAuRGF5UGlja2VyLS1ob3Jpem9udGFsIHtcbiAgICAgIC5EYXlQaWNrZXJOYXZpZ2F0aW9uLS1ob3Jpem9udGFsIHtcbiAgICAgICAgLkRheVBpY2tlck5hdmlnYXRpb25fX3ByZXYsXG4gICAgICAgIC5EYXlQaWNrZXJOYXZpZ2F0aW9uX19uZXh0IHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdpbmhlcml0J307XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdpbmhlcml0J307XG4gICAgICAgICAgdHJhbnNmb3JtOiAke3Byb3BzID0+XG4gICAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ2luaGVyaXQnfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XG4gICAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXRfX2Fycm93IHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ2luaGVyaXQnfTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogJHtwcm9wcyA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnaW5oZXJpdCd9O1xuICAgICAgICB0cmFuc2Zvcm06ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ2luaGVyaXQnfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFJlYWN0RGF0ZXNXcmFwcGVyID0gV2l0aERpcmVjdGlvbihSZWFjdERhdGVXcmFwcGVyKTtcblxuZXhwb3J0IHsgUmVhY3REYXRlc1N0eWxlV3JhcHBlciwgUmVhY3REYXRlc1dyYXBwZXIgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVzZVRvZ2dsZSBmcm9tICcuL3VzZVRvZ2dsZSc7XG5pbXBvcnQgRmF2b3JpdGVXcmFwcGVyIGZyb20gJy4vRmF2b3JpdGUuc3R5bGUnO1xuXG5jb25zdCBGYXZvcml0ZSA9ICh7IGNsYXNzTmFtZSwgY29udGVudCwgb25DbGljayB9KSA9PiB7XG4gIC8vIHVzZSB0b2dnbGUgaG9va3NcbiAgY29uc3QgW3RvZ2dsZVZhbHVlLCB0b2dnbGVIYW5kbGVyXSA9IHVzZVRvZ2dsZShmYWxzZSk7XG5cbiAgLy8gQWRkIGFsbCBjbGFzc3MgdG8gYW4gYXJyYXlcbiAgY29uc3QgYWRkQWxsQ2xhc3MgPSBbJ2Zhdm9yaXRlJ107XG5cbiAgLy8gY2xhc3NOYW1lIHByb3AgY2hlY2tpbmdcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGFkZEFsbENsYXNzLnB1c2goY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRlbENsaWNrID0gZXZlbnQgPT4ge1xuICAgIHRvZ2dsZUhhbmRsZXIoKTtcbiAgICBvbkNsaWNrKCF0b2dnbGVWYWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmF2b3JpdGVXcmFwcGVyXG4gICAgICBvbkNsaWNrPXtoYW5kZWxDbGlja31cbiAgICAgIGNsYXNzTmFtZT17YCR7YWRkQWxsQ2xhc3Muam9pbignICcpfSAke3RvZ2dsZVZhbHVlID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgID5cbiAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTguNjQgMTguMjMyXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk02MC4xNiw1NmgtLjA0YTQuNTUxLDQuNTUxLDAsMCwwLTMuOCwyLjA4QTQuNTUxLDQuNTUxLDAsMCwwLDUyLjUyLDU2aC0uMDRBNC41MjIsNC41MjIsMCwwLDAsNDgsNjAuNTJhOS43MzcsOS43MzcsMCwwLDAsMS45MTIsNS4zMDhBMzMuNTA2LDMzLjUwNiwwLDAsMCw1Ni4zMiw3MmEzMy41MDYsMzMuNTA2LDAsMCwwLDYuNDA4LTYuMTcyQTkuNzM3LDkuNzM3LDAsMCwwLDY0LjY0LDYwLjUyLDQuNTIyLDQuNTIyLDAsMCwwLDYwLjE2LDU2WlwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NyAtNTUpXCJcbiAgICAgICAgLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPHNwYW4+e2NvbnRlbnR9PC9zcGFuPlxuICAgIDwvRmF2b3JpdGVXcmFwcGVyPlxuICApO1xufTtcblxuRmF2b3JpdGUucHJvcFR5cGVzID0ge1xuICAvKiogQ2xhc3NOYW1lIG9mIHRoZSBGYXZvcml0ZSAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBjb250ZW50IG9mIHRoZSBGYXZvcml0ZSAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgLlxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5GYXZvcml0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2xpY2s6ICgpID0+IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGU7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuY29uc3QgYWRkQW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMzQpIHJvdGF0ZVkoOTBkZWcpO1xuICB9XG5gO1xuXG5jb25zdCByZW1vdmVBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMzQpIHJvdGF0ZVkoOTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVZKDApO1xuICB9XG5gO1xuXG5jb25zdCBBZGRBbmltYXRpb24gPSBjc3NgXG4gIGFuaW1hdGlvbjogJHthZGRBbmltYXRpb259IDAuNHMgY3ViaWMtYmV6aWVyKDAuMzgsIDAuNywgMC42LCAwLjI5KTtcbmA7XG5cbmNvbnN0IFJlbW92ZUFuaW1hdGlvbiA9IGNzc2BcbiAgYW5pbWF0aW9uOiAke3JlbW92ZUFuaW1hdGlvbn0gMC41NXMgY3ViaWMtYmV6aWVyKDAuMzgsIDAuNywgMC42LCAwLjI5KTtcbmA7XG5cbmNvbnN0IEZhdm9yaXRlV3JhcHBlciA9IHN0eWxlZC5idXR0b25gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgc3ZnIHtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgJHtSZW1vdmVBbmltYXRpb259XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiAke3RoZW1lR2V0KCdjb2xvci41JywgJ3JnYmEoMCwgMCwgMCwgMC4yNSknKX07XG4gICAgICBzdHJva2U6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgICAgdHJhbnNpdGlvbjogZmlsbCAxcyBlYXNlO1xuICAgIH1cbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBzdmcge1xuICAgICAgJHtBZGRBbmltYXRpb259O1xuICAgICAgcGF0aCB7XG4gICAgICAgIGZpbGw6ICR7dGhlbWVHZXQoJ2NvbG9yLjQnLCAnI0ZDNUM2MycpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlV3JhcHBlcjtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlVG9nZ2xlID0gaW5pdGlhbFZhbHVlID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuICBjb25zdCB0b2dnbGVyID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0VmFsdWUodmFsdWUgPT4gIXZhbHVlKSwgW10pO1xuICByZXR1cm4gW3ZhbHVlLCB0b2dnbGVyXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRvZ2dsZTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBHbGlkZSBmcm9tICdAZ2xpZGVqcy9nbGlkZSc7XG5pbXBvcnQgR2xpZGVXcmFwcGVyLCB7XG4gIEdsaWRlU2xpZGVXcmFwcGVyLFxuICBCdXR0b25Db250cm9sV3JhcHBlcixcbiAgQnV0dG9uV3JhcHBlcixcbiAgQnVsbGV0Q29udHJvbFdyYXBwZXIsXG4gIEJ1bGxldEJ1dHRvbixcbiAgRGVmYXVsdEJ0bixcbn0gZnJvbSAnLi9HbGlkZUNhcm91c2VsLnN0eWxlJztcblxuY29uc3QgR2xpZGVDYXJvdXNlbCA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG4gIG9wdGlvbnMsXG4gIGNvbnRyb2xzLFxuICBwcmV2QnV0dG9uLFxuICBuZXh0QnV0dG9uLFxuICBidWxsZXRzLFxuICBudW1iZXJPZkJ1bGxldHMsXG4gIGNhcm91c2VsU2VsZWN0b3IsXG59KSA9PiB7XG4gIC8vIEFkZCBhbGwgY2xhc3NzIHRvIGFuIGFycmF5LlxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydnbGlkZSddO1xuXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nLlxuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gIH1cblxuICAvLyBudW1iZXIgb2YgYnVsbGV0cyBsb29wLlxuICBjb25zdCB0b3RhbEJ1bGxldHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkJ1bGxldHM7IGkrKykge1xuICAgIHRvdGFsQnVsbGV0cy5wdXNoKGkpO1xuICB9XG5cbiAgLy8gTG9hZCBnbGlkZS5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnbGlkZSA9IG5ldyBHbGlkZShcbiAgICAgIGNhcm91c2VsU2VsZWN0b3IgPyBgIyR7Y2Fyb3VzZWxTZWxlY3Rvcn1gIDogJyNnbGlkZScsXG4gICAgICB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9XG4gICAgKTtcbiAgICBnbGlkZS5tb3VudCgpO1xuICB9LCBbY2Fyb3VzZWxTZWxlY3Rvciwgb3B0aW9uc10pO1xuXG4gIHJldHVybiAoXG4gICAgPEdsaWRlV3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX1cbiAgICAgIGlkPXtjYXJvdXNlbFNlbGVjdG9yIHx8ICdnbGlkZSd9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGlkZV9fdHJhY2tcIiBkYXRhLWdsaWRlLWVsPVwidHJhY2tcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdsaWRlX19zbGlkZXNcIj57Y2hpbGRyZW59PC91bD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyoqIGlmIGNvbnRyb2xzIHByb3AgdHJ1ZSB0aGVuIHNob3cgY29udHJvbHMgbmF2LiAqL31cbiAgICAgIHtjb250cm9scyAmJiAoXG4gICAgICAgIDxCdXR0b25Db250cm9sV3JhcHBlclxuICAgICAgICAgIGNsYXNzTmFtZT1cImdsaWRlX19jb250cm9sc1wiXG4gICAgICAgICAgZGF0YS1nbGlkZS1lbD1cImNvbnRyb2xzXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25XcmFwcGVyIGNsYXNzTmFtZT1cImdsaWRlX19wcmV2LS1hcmVhXCIgZGF0YS1nbGlkZS1kaXI9XCI8XCI+XG4gICAgICAgICAgICB7cHJldkJ1dHRvbiA/IHByZXZCdXR0b24gOiA8RGVmYXVsdEJ0bj5QcmV2PC9EZWZhdWx0QnRuPn1cbiAgICAgICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgICAgICAgPEJ1dHRvbldyYXBwZXIgY2xhc3NOYW1lPVwiZ2xpZGVfX25leHQtLWFyZWFcIiBkYXRhLWdsaWRlLWRpcj1cIj5cIj5cbiAgICAgICAgICAgIHtuZXh0QnV0dG9uID8gbmV4dEJ1dHRvbiA6IDxEZWZhdWx0QnRuPk5leHQ8L0RlZmF1bHRCdG4+fVxuICAgICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgICAgICAgPC9CdXR0b25Db250cm9sV3JhcHBlcj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiogaWYgYnVsbGV0cyBwcm9wIHRydWUgdGhlbiBzaG93IGJ1bGxldHMgbmF2LiAqL31cbiAgICAgIHtidWxsZXRzICYmIChcbiAgICAgICAgPEJ1bGxldENvbnRyb2xXcmFwcGVyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ2xpZGVfX2J1bGxldHNcIlxuICAgICAgICAgIGRhdGEtZ2xpZGUtZWw9XCJjb250cm9sc1tuYXZdXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIHt0b3RhbEJ1bGxldHMubWFwKChpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8QnVsbGV0QnV0dG9uXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnbGlkZV9fYnVsbGV0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWdsaWRlLWRpcj17YD0ke2luZGV4fWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICA8L0J1bGxldENvbnRyb2xXcmFwcGVyPlxuICAgICAgKX1cbiAgICA8L0dsaWRlV3JhcHBlcj5cbiAgKTtcbn07XG5cbi8vIEdsaWRlIFNsaWRlIHdyYXBwZXIgY29tcG9uZW50LlxuY29uc3QgR2xpZGVTbGlkZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R2xpZGVTbGlkZVdyYXBwZXIgY2xhc3NOYW1lPVwiZ2xpZGVfX3NsaWRlXCI+e2NoaWxkcmVufTwvR2xpZGVTbGlkZVdyYXBwZXI+XG4gICk7XG59O1xuXG5HbGlkZUNhcm91c2VsLnByb3BUeXBlcyA9IHtcbiAgLyoqIGNsYXNzTmFtZSBvZiB0aGUgR2xpZGVDYXJvdXNlbC4gKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBDaGlsZHJlbi4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC8qKiBZb3UgY2FuIGFkZCB5b3VyIGN1c3RvbSBnbGlkIG9wdGlvbnMgdXNpbmcgdGhpcyBwcm9wLiAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKiBIaWRlIHx8IHNob3cgY29udHJvbHMgbmF2LiAqL1xuICBjb250cm9sczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEhpZGUgfHwgc2hvdyBidWxsZXRzIG5hdi4gKi9cbiAgYnVsbGV0czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFRoaXMgcHJvcCBvbmx5IHRha2UgeW91ciBzbGlkZXIgLyBjYXJvdXNlbCAvIHRlc3RpbW9uaWFscyBkYXRhIGxlbmd0aC4gW05vdGU6IGlmIFwiYnVsbGV0c1wiIHByb3BzIGlzIHNldCBUUlVFLCB0aGVuIFwibnVtYmVyT2ZCdWxsZXRzXCIgbXVzdCBiZSBhZGRlZF0gKi9cbiAgbnVtYmVyT2ZCdWxsZXRzOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKiBTZXQgcHJldmlvdXMgYnV0dG9uIGZvciBnbGlkZSBjYXJvdXNlbC4gKi9cbiAgcHJldkJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuXG4gIC8qKiBTZXQgbmV4dCBidXR0b24gZm9yIGdsaWRlIGNhcm91c2VsLiAqL1xuICBuZXh0QnV0dG9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG59O1xuXG5HbGlkZVNsaWRlLnByb3BUeXBlcyA9IHtcbiAgLyoqIENoaWxkcmVuLiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG59O1xuXG4vLyBHbGlkZUNhcm91c2VsIGRlZmF1bHQgcHJvcHMuXG5HbGlkZUNhcm91c2VsLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29udHJvbHM6IHRydWUsXG59O1xuXG5leHBvcnQgeyBHbGlkZVNsaWRlIH07XG5cbmV4cG9ydCBkZWZhdWx0IEdsaWRlQ2Fyb3VzZWw7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gR2xpZGUgd3JhcHBlciBzdHlsZVxuY29uc3QgR2xpZGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgLmdsaWRlX19zbGlkZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmdsaWRlX19jb250cm9scyB7XG4gICAgLmdsaWRlX19wcmV2LS1hcmVhLFxuICAgIC5nbGlkZV9fbmV4dC0tYXJlYSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG5gO1xuXG4vLyBHbGlkZSBzbGlkZSB3cmFwcGVyIHN0eWxlXG5jb25zdCBHbGlkZVNsaWRlV3JhcHBlciA9IHN0eWxlZC5saWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuLy8gQnV0dG9uIHdyYXBwZXIgc3R5bGVcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5gO1xuXG4vLyBCdXR0b25Db250cm9sV3JhcHBlciBzdHlsZVxuY29uc3QgQnV0dG9uQ29udHJvbFdyYXBwZXIgPSBzdHlsZWQuZGl2YGA7XG5cbi8vIEJ1bGxldENvbnRyb2xXcmFwcGVyIHN0eWxlXG5jb25zdCBCdWxsZXRDb250cm9sV3JhcHBlciA9IHN0eWxlZC5kaXZgYDtcblxuLy8gQnVsbGV0QnV0dG9uIHN0eWxlXG5jb25zdCBCdWxsZXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbjogNHB4O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcblxuICAmOmhvdmVyLFxuICAmLmdsaWRlX19idWxsZXQtLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2OTc5MTtcbiAgfVxuYDtcblxuLy8gZGVmYXVsdCBidXR0b24gc3R5bGVcbmNvbnN0IERlZmF1bHRCdG4gPSBzdHlsZWQuYnV0dG9uYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMTBweCAzcHg7XG5gO1xuXG5leHBvcnQge1xuICBHbGlkZVNsaWRlV3JhcHBlcixcbiAgQnV0dG9uQ29udHJvbFdyYXBwZXIsXG4gIEJ1dHRvbldyYXBwZXIsXG4gIEJ1bGxldENvbnRyb2xXcmFwcGVyLFxuICBCdWxsZXRCdXR0b24sXG4gIERlZmF1bHRCdG4sXG59O1xuZXhwb3J0IGRlZmF1bHQgR2xpZGVXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIGZvbnRGYW1pbHksXG4gIGZvbnRXZWlnaHQsXG4gIHRleHRBbGlnbixcbiAgbGluZUhlaWdodCxcbiAgbGV0dGVyU3BhY2luZyxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgeyBiYXNlLCB0aGVtZWQgfSBmcm9tICcuLi9CYXNlJztcblxuY29uc3QgSGVhZGluZ1dyYXBwZXIgPSBzdHlsZWQoJ3AnKShcbiAgYmFzZSxcbiAgZm9udEZhbWlseSxcbiAgZm9udFdlaWdodCxcbiAgdGV4dEFsaWduLFxuICBsaW5lSGVpZ2h0LFxuICBsZXR0ZXJTcGFjaW5nLFxuICB0aGVtZWQoJ0hlYWRpbmcnKVxuKTtcblxuY29uc3QgSGVhZGluZyA9ICh7IGNvbnRlbnQsIC4uLnByb3BzIH0pID0+IChcbiAgPEhlYWRpbmdXcmFwcGVyIHsuLi5wcm9wc30+e2NvbnRlbnR9PC9IZWFkaW5nV3JhcHBlcj5cbik7XG5cbkhlYWRpbmcucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBhczogUHJvcFR5cGVzLm9uZU9mKFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXSksXG4gIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBmb250V2VpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgdGV4dEFsaWduOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgbGluZUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGxldHRlclNwYWNpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICAuLi5iYXNlLnByb3BUeXBlcyxcbn07XG5cbkhlYWRpbmcuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2gyJyxcbiAgbXQ6IDAsXG4gIG1iOiAwLFxuICBmb250V2VpZ2h0OiA3MDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBQbHVzT3V0bGluZWQsIE1pbnVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgSW5wdXRJbmNEZWNXcmFwcGVyIGZyb20gJy4vSW5wdXRJbmNEZWMuc3R5bGUnO1xuXG5jb25zdCBJbnB1dEluY0RlYyA9ICh7IGNsYXNzTmFtZSwgaW5jcmVtZW50LCBkZWNyZW1lbnQsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsncXVhbnRpdHknXTtcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXRJbmNEZWNXcmFwcGVyIGNsYXNzTmFtZT17YWRkQWxsQ2xhc3Nlcy5qb2luKCcgJyl9PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gZGVjQnRuXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2RlY3JlbWVudH0+XG4gICAgICAgIDxNaW51c091dGxpbmVkIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJxbnQtaW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgey4uLnByb3BzfSAvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaW5jQnRuXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2luY3JlbWVudH0+XG4gICAgICAgIDxQbHVzT3V0bGluZWQgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvSW5wdXRJbmNEZWNXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRJbmNEZWM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSW5wdXRJbmNEZWNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBpbnB1dFt0eXBlPSdudW1iZXInXSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU0cHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyN3B4O1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbiAgICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIHdpZHRoOiAyN3B4O1xuICAgIGhlaWdodDogMjdweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJi5kZWNCdG4ge1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgJi5pbmNCdG4ge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEluY0RlY1dyYXBwZXI7XG4iLCIvLyBUaGUgcG9ydGFsIGVsZW1lbnQgaXMgaW5zZXJ0ZWQgaW4gdGhlIERPTSB0cmVlIGFmdGVyXG4vLyB0aGUgTW9kYWwncyBjaGlsZHJlbiBhcmUgbW91bnRlZCwgbWVhbmluZyB0aGF0IGNoaWxkcmVuXG4vLyB3aWxsIGJlIG1vdW50ZWQgb24gYSBkZXRhY2hlZCBET00gbm9kZS4gSWYgYSBjaGlsZFxuLy8gY29tcG9uZW50IHJlcXVpcmVzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBET00gdHJlZVxuLy8gaW1tZWRpYXRlbHkgd2hlbiBtb3VudGVkLCBmb3IgZXhhbXBsZSB0byBtZWFzdXJlIGFcbi8vIERPTSBub2RlLCBvciB1c2VzICdhdXRvRm9jdXMnIGluIGEgZGVzY2VuZGFudCwgYWRkXG4vLyBzdGF0ZSB0byBNb2RhbCBhbmQgb25seSByZW5kZXIgdGhlIGNoaWxkcmVuIHdoZW4gTW9kYWxcbi8vIGlzIGluc2VydGVkIGluIHRoZSBET00gdHJlZS5cblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0YWwoeyBjaGlsZHJlbiwgcmVuZGVyZXJJZCB9KSB7XG4gIGNvbnN0IFtjb250YWluZXJFbF0gPSB1c2VTdGF0ZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHBvcnRhbFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyZW5kZXJlcklkKSB8fCBkb2N1bWVudC5ib2R5O1xuICAgIHBvcnRhbFJvb3QuYXBwZW5kQ2hpbGQoY29udGFpbmVyRWwpO1xuICAgIHJldHVybiAoKSA9PiBwb3J0YWxSb290LnJlbW92ZUNoaWxkKGNvbnRhaW5lckVsKTtcbiAgfSk7XG4gIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoY2hpbGRyZW4sIGNvbnRhaW5lckVsKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgSW9Jb3NTdGFyLCBJb0lvc1N0YXJPdXRsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5jb25zdCBSYXRpbmcgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgcmF0aW5nLCByYXRpbmdDb3VudCwgdHlwZSwgcmF0aW5nRmllbGROYW1lIH0gPSBwcm9wcztcbiAgbGV0IGksIGZsb29yVmFsdWU7XG4gIGxldCByYXRpbmdWaWV3ID0gW107XG4gIGlmIChyYXRpbmcgJiYgcmF0aW5nICE9PSAwKSB7XG4gICAgZmxvb3JWYWx1ZSA9IE1hdGguZmxvb3IocmF0aW5nKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICBpZiAoaSA8IGZsb29yVmFsdWUpIHtcbiAgICAgICAgcmF0aW5nVmlldy5wdXNoKDxJb0lvc1N0YXIga2V5PXtpfSAvPik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYXRpbmdWaWV3LnB1c2goPElvSW9zU3Rhck91dGxpbmUga2V5PXtpfSAvPik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCBsaXN0aW5nQ29uZGl0aW9uO1xuICBpZiAocmF0aW5nICYmIHJhdGluZyA9PT0gNSkge1xuICAgIGxpc3RpbmdDb25kaXRpb24gPSAnQXdlc29tZSc7XG4gIH0gZWxzZSBpZiAoNCA8PSByYXRpbmcgJiYgcmF0aW5nIDwgNSkge1xuICAgIGxpc3RpbmdDb25kaXRpb24gPSAnR29vZCc7XG4gIH0gZWxzZSBpZiAoMyA8PSByYXRpbmcgJiYgcmF0aW5nIDwgNCkge1xuICAgIGxpc3RpbmdDb25kaXRpb24gPSAnQXZlcmFnZSc7XG4gIH0gZWxzZSBpZiAoMiA8PSByYXRpbmcgJiYgcmF0aW5nIDwgMykge1xuICAgIGxpc3RpbmdDb25kaXRpb24gPSAnQmFkJztcbiAgfSBlbHNlIGlmIChyYXRpbmcgPj0gMSkge1xuICAgIGxpc3RpbmdDb25kaXRpb24gPSAnVGVycmlibGUnO1xuICB9IGVsc2Uge1xuICAgIGxpc3RpbmdDb25kaXRpb24gPSAnJztcbiAgfVxuXG4gIGxldCBzaG93UmF0aW5nQ291bnQ7XG4gIGlmIChyYXRpbmdDb3VudCkge1xuICAgIHNob3dSYXRpbmdDb3VudCA9IGAoYCArIHJhdGluZ0NvdW50ICsgYClgO1xuICB9IGVsc2Uge1xuICAgIHNob3dSYXRpbmdDb3VudCA9ICcnO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3R5cGUgJiYgdHlwZSA9PT0gJ2J1bGsnID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxzcGFuPntyYXRpbmdWaWV3fTwvc3Bhbj5cbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAge2AgJHtsaXN0aW5nQ29uZGl0aW9ufWB9IHtgJHtzaG93UmF0aW5nQ291bnR9YH1cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PlxuICAgICAgICAgIDxzcGFuPntyYXRpbmdGaWVsZE5hbWV9PC9zcGFuPiB7cmF0aW5nVmlld31cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufTtcblxuUmF0aW5nLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByYXRpbmdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgcmF0aW5nOiBQcm9wVHlwZXMubnVtYmVyLFxuICByYXRpbmdGaWVsZE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgZm9udEZhbWlseSxcbiAgZm9udFdlaWdodCxcbiAgdGV4dEFsaWduLFxuICBsaW5lSGVpZ2h0LFxuICBsZXR0ZXJTcGFjaW5nLFxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcbmltcG9ydCB7IGJhc2UsIHRoZW1lZCB9IGZyb20gJy4uL0Jhc2UnO1xuXG5jb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZCgncCcpKFxuICBiYXNlLFxuICBmb250RmFtaWx5LFxuICBmb250V2VpZ2h0LFxuICB0ZXh0QWxpZ24sXG4gIGxpbmVIZWlnaHQsXG4gIGxldHRlclNwYWNpbmcsXG4gIHRoZW1lZCgnVGV4dCcpXG4pO1xuXG5jb25zdCBUZXh0ID0gKHsgY29udGVudCwgLi4ucHJvcHMgfSkgPT4gKFxuICA8VGV4dFdyYXBwZXIgey4uLnByb3BzfT57Y29udGVudH08L1RleHRXcmFwcGVyPlxuKTtcblxuVGV4dC5wcm9wVHlwZXMgPSB7XG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmb250RmFtaWx5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgZm9udFdlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIHRleHRBbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGxpbmVIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBsZXR0ZXJTcGFjaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgLi4uYmFzZS5wcm9wVHlwZXMsXG59O1xuXG5UZXh0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdwJyxcbiAgbTogMCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTZWN0aW9uVGl0bGVXcmFwcGVyLCB7IFRpdGxlV3JhcHBlciwgTGlua1dyYXBwZXIgfSBmcm9tICcuL1RpdGxlLnN0eWxlJztcblxuY29uc3QgU2VjdGlvblRpdGxlID0gKHsgY2xhc3NOYW1lLCB0aXRsZSwgbGluaywgLi4ucHJvcHMgfSkgPT4ge1xuICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheVxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydzZWN0aW9uX3RpdGxlJ107XG5cbiAgLy8gY2xhc3NOYW1lIHByb3AgY2hlY2tpbmdcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvblRpdGxlV3JhcHBlciBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfSB7Li4ucHJvcHN9PlxuICAgICAge3RpdGxlICYmIDxUaXRsZVdyYXBwZXIgY2xhc3NOYW1lPVwidGl0bGVfd3JhcHBlclwiPnt0aXRsZX08L1RpdGxlV3JhcHBlcj59XG4gICAgICB7bGluayAmJiA8TGlua1dyYXBwZXIgY2xhc3NOYW1lPVwibGlua193cmFwcGVyXCI+e2xpbmt9PC9MaW5rV3JhcHBlcj59XG4gICAgPC9TZWN0aW9uVGl0bGVXcmFwcGVyPlxuICApO1xufTtcblxuU2VjdGlvblRpdGxlLnByb3BUeXBlcyA9IHtcbiAgLyoqIENsYXNzTmFtZSBvZiB0aGUgU2VjdGlvblRpdGxlLiAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBBZGQgaGVyZSBIZWFkaW5nIGNvbXBvbmVudCBmcm9tIGNvbW1vbiBjb21wb25lbnRzLiAqL1xuICB0aXRsZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIC8qKiBBZGQgaGVyZSBUZXh0TGluayBjb21wb25lbnQgZnJvbSBjb21tb24gY29tcG9uZW50cy4gKi9cbiAgbGluazogUHJvcFR5cGVzLmVsZW1lbnQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uVGl0bGU7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuLi9CYXNlJztcblxuY29uc3QgU2VjdGlvblRpdGxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBtYXJnaW46IDMwcHggMDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgbWFyZ2luOiAxNXB4IDAgMjBweDtcbiAgfVxuXG4gICR7YmFzZX1cbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YGA7XG5cbmV4cG9ydCBjb25zdCBMaW5rV3JhcHBlciA9IHN0eWxlZC5kaXZgYDtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblRpdGxlV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuLi9Qb3J0YWwvUG9ydGFsJztcbmltcG9ydCB7IFdyYXBwZXIsIENvbnRhaW5lciB9IGZyb20gJy4vVmlld1dpdGhQb3B1cC5zdHlsZSc7XG5pbXBvcnQgeyB1c2VPbkNsaWNrT3V0c2lkZSB9IGZyb20gJy4vdXNlT25DbGlja091dHNpZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3V2l0aFBvcHVwKHtcbiAgdmlldyxcbiAgcG9wdXAsXG4gIG5vVmlldyA9IGZhbHNlLFxuICBzdHlsZSxcbiAgY2xhc3NOYW1lLFxufSkge1xuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgdXNlT25DbGlja091dHNpZGUocmVmLCAoKSA9PiBzZXRTaG93UG9wdXAoZmFsc2UpKTtcbiAgLy8gQWRkIGFsbCBjbGFzc3MgdG8gYW4gYXJyYXlcbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsndmlld193aXRoX19wb3B1cCddO1xuXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyXG4gICAgICBjbGFzc05hbWU9e2Ake2FkZEFsbENsYXNzZXMuam9pbignICcpfSAke3Nob3dQb3B1cCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgIHJlZj17cmVmfVxuICAgID5cbiAgICAgIHt2aWV3ICYmIG5vVmlldyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBfaGFuZGxlclwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cCghc2hvd1BvcHVwKX0+XG4gICAgICAgICAge3ZpZXd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxDb250YWluZXJcbiAgICAgICAgY2xhc3NOYW1lPVwicG9wdXBfY29udGFpbmVyXCJcbiAgICAgICAgc2hvd1BvcHVwPXtzaG93UG9wdXB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dQb3B1cCh0cnVlKX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgPlxuICAgICAgICB7dmlldyAmJiAhbm9WaWV3ICYmIHZpZXd9XG4gICAgICAgIHtzaG93UG9wdXAgJiYgKFxuICAgICAgICAgIDxkaXYgaWQ9XCJwb3B1cFwiPlxuICAgICAgICAgICAgPFBvcnRhbCByZW5kZXJlcklkPVwicG9wdXBcIj57cG9wdXAgJiYgcG9wdXB9PC9Qb3J0YWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gKHByb3BzLnJhZGl1cyA/IHByb3BzLnJhZGl1cyA6IDMpfXB4O1xuICAke3Byb3BzID0+XG4gICAgcHJvcHMuc2hvd1BvcHVwICYmXG4gICAgY3NzYFxuICAgICAgYm94LXNoYWRvdzogMCAycHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYH1cblxuICAuYW50LWNoZWNrYm94LWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmFudC1jaGVja2JveC1ncm91cC1pdGVtIHtcbiAgICAgIG1hcmdpbjogOXB4IDA7XG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRhdGVfcGlja2VyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgLkRhdGVSYW5nZVBpY2tlciB7XG4gICAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuIiwiLy8gSG9va1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU9uQ2xpY2tPdXRzaWRlKHJlZiwgaGFuZGxlcikge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGxpc3RlbmVyID0gZXZlbnQgPT4ge1xuICAgICAgLy8gRG8gbm90aGluZyBpZiBjbGlja2luZyByZWYncyBlbGVtZW50IG9yIGRlc2NlbmRlbnQgZWxlbWVudHNcbiAgICAgIGlmICghcmVmLmN1cnJlbnQgfHwgcmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBsaXN0ZW5lcik7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgbGlzdGVuZXIpO1xuICAgIH07XG4gIH0sIFtyZWYsIGhhbmRsZXJdKTsgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudCBhbmQgdW5tb3VudFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xuLy8gaW1wb3J0ICdyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvVUkvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21wb25lbnRzL1VJL0hlYWRpbmcvSGVhZGluZyc7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJ2NvbXBvbmVudHMvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZSc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgSW1hZ2VDYXJkIGZyb20gJ2NvbXBvbmVudHMvSW1hZ2VDYXJkL0ltYWdlQ2FyZCc7XG5pbXBvcnQgeyBMSVNUSU5HX1BPU1RTX1BBR0UgfSBmcm9tICcuLi8uLi8uLi9zZXR0aW5ncy9jb25zdGFudCc7XG5pbXBvcnQgTG9jYXRpb25XcmFwcGVyLCB7IENhcm91c2VsU2VjdGlvbiB9IGZyb20gJy4vTG9jYXRpb24uc3R5bGUnO1xuXG5jb25zdCBMb2NhdGlvbkdyaWQgPSAoeyBkYXRhLCBkZXZpY2VUeXBlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TG9jYXRpb25XcmFwcGVyPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD17dHJ1ZX0+XG4gICAgICAgIDxTZWN0aW9uVGl0bGVcbiAgICAgICAgICB0aXRsZT17PEhlYWRpbmcgY29udGVudD1cIkV4cGxvcmUgRGVzdGluYXRpb25zXCIgLz59XG4gICAgICAgICAgbGluaz17XG4gICAgICAgICAgICA8TGluayBocmVmPXtgJHtMSVNUSU5HX1BPU1RTX1BBR0V9YH0+XG4gICAgICAgICAgICAgIDxhPlNob3cgYWxsPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgICA8Q2Fyb3VzZWxTZWN0aW9uPlxuICAgICAgICAgIHtkYXRhLmxlbmd0aCAhPT0gMCA/IChcbiAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICBzc3JcbiAgICAgICAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cbiAgICAgICAgICAgICAgYXJyb3dzXG4gICAgICAgICAgICAgIGF1dG9QbGF5U3BlZWQ9ezMwMDB9XG4gICAgICAgICAgICAgIGNlbnRlck1vZGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBjb250YWluZXJDbGFzcz1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgIGRvdExpc3RDbGFzcz1cIlwiXG4gICAgICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0PXtmYWxzZX1cbiAgICAgICAgICAgICAgaW5maW5pdGVcbiAgICAgICAgICAgICAgaXRlbUNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgcmVuZGVyRG90c091dHNpZGU9e2ZhbHNlfVxuICAgICAgICAgICAgICByZXNwb25zaXZlPXt7XG4gICAgICAgICAgICAgICAgZGVza3RvcDoge1xuICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICBtYXg6IDMwMDAsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMTAyNCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBpdGVtczogNSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vYmlsZToge1xuICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICBtYXg6IDQ2NCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGFibGV0OiB7XG4gICAgICAgICAgICAgICAgICBicmVha3BvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgIG1heDogMTAyNCxcbiAgICAgICAgICAgICAgICAgICAgbWluOiA0NjQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IDMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX1cbiAgICAgICAgICAgICAgc2hvd0RvdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICBzbGlkZXJDbGFzcz1cIlwiXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2xpZGU9ezF9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8SW1hZ2VDYXJkXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e3Bvc3QubG9jYXRpb25JbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17cG9zdC5jaXR5fVxuICAgICAgICAgICAgICAgICAgbWV0YT17YCR7cG9zdC5udW1iZXJPZlBvc3R9IEhvdGVsc2B9XG4gICAgICAgICAgICAgICAgICBsaW5rPXtMSVNUSU5HX1BPU1RTX1BBR0V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DYXJvdXNlbFNlY3Rpb24+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0xvY2F0aW9uV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uR3JpZDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBMb2NhdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA1MnB4IDA7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJvdXNlbFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtbGlzdCB7XG4gICAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWl0ZW0ge1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcblxuICAgICAgLmltYWdlX2NhcmQge1xuICAgICAgICA+IGEge1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAke3RoZW1lR2V0KCdib3hTaGFkb3cuMScsICdyZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLWxlZnQge1xuICAgICAgbGVmdDogMzBweDtcbiAgICB9XG5cbiAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1yaWdodCB7XG4gICAgICByaWdodDogMzBweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL1VJL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9VSS9IZWFkaW5nL0hlYWRpbmcnO1xuaW1wb3J0IFRleHQgZnJvbSAnY29tcG9uZW50cy9VSS9UZXh0L1RleHQnO1xuaW1wb3J0IEdsaWRlQ2Fyb3VzZWwsIHtcbiAgR2xpZGVTbGlkZSxcbn0gZnJvbSAnY29tcG9uZW50cy9VSS9HbGlkZUNhcm91c2VsL0dsaWRlQ2Fyb3VzZWwnO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9TZWFyY2hGb3JtJztcbmltcG9ydCBCYW5uZXJXcmFwcGVyLCB7IFNlYXJjaFdyYXBwZXIgfSBmcm9tICcuL1NlYXJjaC5zdHlsZSc7XG4vLyBzbGlkZXIgaW1hZ2VzXG5pbXBvcnQgYmFubmVyQmcxIGZyb20gJ2Fzc2V0cy9pbWFnZXMvYmFubmVyLzEuanBnJztcbmltcG9ydCBiYW5uZXJCZzIgZnJvbSAnYXNzZXRzL2ltYWdlcy9iYW5uZXIvMi5qcGcnO1xuaW1wb3J0IGJhbm5lckJnMyBmcm9tICdhc3NldHMvaW1hZ2VzL2Jhbm5lci8zLmpwZyc7XG5cbmNvbnN0IEhvbWVTZWFyY2ggPSAoeyBzZWFyY2hUaXRsZVN0eWxlLCBzZWFyY2hEZXNjcmlwdGlvblN0eWxlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QmFubmVyV3JhcHBlcj5cbiAgICAgIDxHbGlkZUNhcm91c2VsXG4gICAgICAgIGNvbnRyb2xzPXtmYWxzZX1cbiAgICAgICAgb3B0aW9ucz17eyBnYXA6IDAsIGF1dG9wbGF5OiA1MDAwLCBhbmltYXRpb25EdXJhdGlvbjogMTAwMCB9fVxuICAgICAgICBidWxsZXRzPXt0cnVlfVxuICAgICAgICBudW1iZXJPZkJ1bGxldHM9ezN9XG4gICAgICA+XG4gICAgICAgIDw+XG4gICAgICAgICAgPEdsaWRlU2xpZGU+XG4gICAgICAgICAgICA8aW1nIHNyYz17YmFubmVyQmcxfSBhbHQ9XCJCYW5uZXJcIiAvPlxuICAgICAgICAgIDwvR2xpZGVTbGlkZT5cbiAgICAgICAgICA8R2xpZGVTbGlkZT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtiYW5uZXJCZzJ9IGFsdD1cIkJhbm5lclwiIC8+XG4gICAgICAgICAgPC9HbGlkZVNsaWRlPlxuICAgICAgICAgIDxHbGlkZVNsaWRlPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Jhbm5lckJnM30gYWx0PVwiQmFubmVyXCIgLz5cbiAgICAgICAgICA8L0dsaWRlU2xpZGU+XG4gICAgICAgIDwvPlxuICAgICAgPC9HbGlkZUNhcm91c2VsPlxuXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VhcmNoV3JhcHBlcj5cbiAgICAgICAgICA8SGVhZGluZ1xuICAgICAgICAgICAgey4uLnNlYXJjaFRpdGxlU3R5bGV9XG4gICAgICAgICAgICBjb250ZW50PVwiTGF0ZXN0IHJldmlld3MuIExvd2VzdCBwcmljZXMuXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICB7Li4uc2VhcmNoRGVzY3JpcHRpb25TdHlsZX1cbiAgICAgICAgICAgIGNvbnRlbnQ9XCJjb21wYXJlcyBwcmljZXMgZnJvbSAyMDArIGJvb2tpbmcgc2l0ZXMgdG8gaGVscCB5b3UgZmluZCB0aGUgbG93ZXN0XG4gICAgICBwcmljZSBvbiB0aGUgcmlnaHQgaG90ZWwgZm9yIHlvdS5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNlYXJjaEZvcm0gLz5cbiAgICAgICAgPC9TZWFyY2hXcmFwcGVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9CYW5uZXJXcmFwcGVyPlxuICApO1xufTtcblxuSG9tZVNlYXJjaC5wcm9wVHlwZXMgPSB7XG4gIHNlYXJjaFRpdGxlU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHNlYXJjaERlc2NyaXB0aW9uU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5Ib21lU2VhcmNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2VhcmNoVGl0bGVTdHlsZToge1xuICAgIGNvbG9yOiAnIzJDMkMyQycsXG4gICAgZm9udFNpemU6IFsnMjBweCcsICcyNHB4JywgJzI4cHgnXSxcbiAgICBsaW5lSGVpZ2h0OiBbJzI4cHgnLCAnMzBweCcsICczMHB4J10sXG4gICAgbWI6ICc5cHgnLFxuICB9LFxuICBzZWFyY2hEZXNjcmlwdGlvblN0eWxlOiB7XG4gICAgY29sb3I6ICcjMkMyQzJDJyxcbiAgICBmb250U2l6ZTogJzE1cHgnLFxuICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICBtYjogJzMwcHgnLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVNlYXJjaDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBCYW5uZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgPiBkaXYge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5nbGlkZSxcbiAgLmdsaWRlX190cmFjayxcbiAgLmdsaWRlX19zbGlkZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgfVxuXG4gIC5nbGlkZV9fc2xpZGUge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgfVxuXG4gIC5nbGlkZV9fYnVsbGV0cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5nbGlkZV9fYnVsbGV0IHtcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gIH1cblxuICAuZ2xpZGVfX2J1bGxldC0tYWN0aXZlIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICB9XG5cbiAgPiBkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBwYWRkaW5nOiAyOHB4IDMwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDgxcHg7XG4gIHotaW5kZXg6IDE7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjlweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgd2lkdGg6IDQxNHB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbGVmdDogMTVweDtcblxuICAgID4gcCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gID4gZGl2IHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgfVxuXG4gIGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4yJywgJyNGN0Y3RjcnKX07XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAvKiBzdWJtaXQgYnV0dG9uIHN0eWxlICovXG4gIGJ1dHRvblt0eXBlPSdzdWJtaXQnXS5hbnQtYnRuIHtcbiAgICBtaW4td2lkdGg6IDE1N3B4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgaGVpZ2h0OiA0N3B4O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAwLjg1O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC50YXJnZXQge1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGxlZnQ6IGF1dG87XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICByaWdodDogMjVweDtcbiAgICB9XG4gIH1cblxuICAvKiBtYXAgYXV0byBjb21wbGV0ZSBzdHlsZSAqL1xuICAubWFwX2F1dG9jb21wbGV0ZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgcGFkZGluZzogMCAzMHB4IDAgNDBweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIGhlaWdodDogNDdweDtcbiAgICAgICAgcGFkZGluZzogMCAzMHB4IDAgMzZweDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlcixcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiBkYXRlIHBpY2tlciBzdHlsZSAqL1xuICAuZGF0ZV9waWNrZXIge1xuICAgIG1pbi13aWR0aDogY2FsYygyNTBweCAtIDE0cHgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNHB4KTtcbiAgICBtYXJnaW46IDAgMCAwIDE0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIGhlaWdodDogNDdweDtcbiAgICB9XG5cbiAgICAuRGF5UGlja2VyX193aXRoQm9yZGVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMTVweCA0NnB4IC0xMHB4IHJnYmEoMjYsIDI2LCAyOSwgMC4zKTtcbiAgICB9XG5cbiAgICAuRGF0ZVJhbmdlUGlja2VyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXRfY2xlYXJEYXRlcyxcbiAgICAgICAgLkRhdGVSYW5nZVBpY2tlcklucHV0X2NsZWFyRGF0ZXMge1xuICAgICAgICAgICYuRGF0ZVJhbmdlUGlja2VySW5wdXRfY2xlYXJEYXRlc19fc21hbGwge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuRGF0ZUlucHV0IHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAzMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NjlweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDI1cHggMCAzMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDI1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkRhdGVJbnB1dF9mYW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkRhdGVJbnB1dF9pbnB1dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICAmLkRhdGVJbnB1dF9pbnB1dF9fZm9jdXNlZCB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dF9hcnJvdyB7XG4gICAgICAgICAgJiArIC5EYXRlSW5wdXQge1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLkRhdGVSYW5nZVBpY2tlcl9waWNrZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICAgICAgei1pbmRleDogMjtcblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgdG9wOiA0N3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gICAgICAgICAgbGVmdDogLTI5cHggIWltcG9ydGFudDtcbiAgICAgICAgICAuRGF5UGlja2VyLFxuICAgICAgICAgIC5EYXlQaWNrZXIgPiBkaXYgPiBkaXYsXG4gICAgICAgICAgLkRheVBpY2tlciA+IGRpdiA+IGRpdiAuRGF5UGlja2VyX3RyYW5zaXRpb25Db250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDI5NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLkRheVBpY2tlciB7XG4gICAgICAgICAgICAuRGF5UGlja2VyX3dlZWtIZWFkZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5DYWxlbmRhck1vbnRoIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIHZpZXcgd2l0aCBwb3B1cCBjb21wb25lbnQgc3R5bGUgKi9cbiAgLnZpZXdfd2l0aF9fcG9wdXAge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAwO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIHBvcHUgaGFuZGxlciBzdHlsZSAqL1xuICAgIC5wb3B1cF9oYW5kbGVyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNHB4KTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuXG4gICAgICBidXR0b24uYW50LWJ0biB7XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4yJywgJyNGN0Y3RjcnKX07XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogMCAyNXB4IDAgMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgICAgICAgcGFkZGluZzogMCAyMHB4IDAgMjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5yb29tX2d1ZXN0IHtcbiAgICAgIC5wb3B1cF9oYW5kbGVyIHtcbiAgICAgICAgYnV0dG9uLmFudC1idG4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAucG9wdXBfY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgcGFkZGluZzogMjJweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNXB4IDQ2cHggLTEwcHggcmdiYSgyNiwgMjYsIDI5LCAwLjMpO1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIGljb24gc3R5bGUgKi9cbiAgPiBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogYXV0bztcbiAgICAmLm1hcC1tYXJrZXIsXG4gICAgJi5jYWxlbmRhcixcbiAgICAmLnVzZXItZnJpZW5kcyB7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBmaWxsOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICB9XG5cbiAgICAmLmNhbGVuZGFyIHtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLnVzZXItZnJpZW5kcyB7XG4gICAgICB3aWR0aDogMTdweDtcbiAgICAgIGhlaWdodDogMTdweDtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNhcmV0LWRvd24ge1xuICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgZmlsbDogJHt0aGVtZUdldCgndGV4dC4xJywgJyM5MDkwOTAnKX07XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUm9vbUd1ZXN0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuXG4gIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAucXVhbnRpdHkge1xuICAgIGhlaWdodDogMzBweDtcblxuICAgIGlucHV0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbiAgICBidXR0b24uYnRuIHN2ZyB7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcldyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgeyBGYU1hcE1hcmtlckFsdCwgRmFSZWdDYWxlbmRhciwgRmFVc2VyRnJpZW5kcyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IE1hcEF1dG9Db21wbGV0ZSBmcm9tICdjb21wb25lbnRzL01hcC9NYXBBdXRvQ29tcGxldGUnO1xuaW1wb3J0IElucHV0SW5jRGVjIGZyb20gJ2NvbXBvbmVudHMvVUkvSW5wdXRJbmNEZWMvSW5wdXRJbmNEZWMnO1xuaW1wb3J0IERhdGVSYW5nZVBpY2tlckJveCBmcm9tICdjb21wb25lbnRzL1VJL0RhdGVQaWNrZXIvUmVhY3REYXRlcyc7XG5pbXBvcnQgeyBtYXBEYXRhSGVscGVyIH0gZnJvbSAnY29tcG9uZW50cy9NYXAvbWFwRGF0YUhlbHBlcic7XG5pbXBvcnQgVmlld1dpdGhQb3B1cCBmcm9tICdjb21wb25lbnRzL1VJL1ZpZXdXaXRoUG9wdXAvVmlld1dpdGhQb3B1cCc7XG5pbXBvcnQge1xuICBGb3JtV3JhcHBlcixcbiAgQ29tcG9uZW50V3JhcHBlcixcbiAgUm9vbUd1ZXN0V3JhcHBlcixcbiAgSXRlbVdyYXBwZXIsXG59IGZyb20gJy4vU2VhcmNoLnN0eWxlJztcbmltcG9ydCB7IExJU1RJTkdfUE9TVFNfUEFHRSB9IGZyb20gJy4uLy4uLy4uL3NldHRpbmdzL2NvbnN0YW50JztcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L1NlYXJjaFByb3ZpZGVyJztcblxuY29uc3QgY2FsZW5kYXJJdGVtID0ge1xuICBzZXBhcmF0b3I6ICctJyxcbiAgZm9ybWF0OiAnTU0tREQtWVlZWScsXG4gIGxvY2FsZTogJ2VuJyxcbn07XG5cbmNvbnN0IFNlYXJjaEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCBbc2VhcmNoRGF0ZSwgc2V0U2VhcmNoRGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgc2V0U3RhcnREYXRlOiBudWxsLFxuICAgIHNldEVuZERhdGU6IG51bGwsXG4gIH0pO1xuICBjb25zdCBbbWFwVmFsdWUsIHNldE1hcFZhbHVlXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Jvb21HdWVzdCwgc2V0Um9vbUd1ZXN0XSA9IHVzZVN0YXRlKHtcbiAgICByb29tOiAwLFxuICAgIGd1ZXN0OiAwLFxuICB9KTtcblxuICBjb25zdCB1cGRhdGV2YWx1ZUZ1bmMgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHNlYXJjaGVkUGxhY2VBUElEYXRhIH0gPSBldmVudDtcbiAgICBpZiAoIWlzRW1wdHkoc2VhcmNoZWRQbGFjZUFQSURhdGEpKSB7XG4gICAgICBzZXRNYXBWYWx1ZShzZWFyY2hlZFBsYWNlQVBJRGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUluY3JlbWVudCA9ICh0eXBlKSA9PiB7XG4gICAgc2V0Um9vbUd1ZXN0KHtcbiAgICAgIC4uLnJvb21HdWVzdCxcbiAgICAgIFt0eXBlXTogcm9vbUd1ZXN0W3R5cGVdICsgMSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWNyZW1lbnQgPSAodHlwZSkgPT4ge1xuICAgIGlmIChyb29tR3Vlc3RbdHlwZV0gPD0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzZXRSb29tR3Vlc3Qoe1xuICAgICAgLi4ucm9vbUd1ZXN0LFxuICAgICAgW3R5cGVdOiByb29tR3Vlc3RbdHlwZV0gLSAxLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUluY0RlY09uQ2huYWdlID0gKGUsIHR5cGUpID0+IHtcbiAgICBsZXQgY3VycmVudFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0Um9vbUd1ZXN0KHtcbiAgICAgIC4uLnJvb21HdWVzdCxcbiAgICAgIFt0eXBlXTogY3VycmVudFZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdvVG9TZWFyY2hQYWdlID0gKCkgPT4ge1xuICAgIGxldCB0ZW1wTG9jYXRpb24gPSBbXSxcbiAgICAgIGRhdGVSYW5nZSA9IHt9LFxuICAgICAgbG9jYXRpb25fbGF0ID0gJycsXG4gICAgICBsb2NhdGlvbl9sbmcgPSAnJztcbiAgICBjb25zdCBtYXBEYXRhID0gbWFwVmFsdWUgPyBtYXBEYXRhSGVscGVyKG1hcFZhbHVlKSA6IFtdO1xuICAgIG1hcERhdGEgJiZcbiAgICAgIG1hcERhdGEubWFwKChzaW5nbGVNYXBEYXRhLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiB0ZW1wTG9jYXRpb24ucHVzaCh7XG4gICAgICAgICAgZm9ybWF0dGVkQWRkcmVzczogc2luZ2xlTWFwRGF0YSA/IHNpbmdsZU1hcERhdGEuZm9ybWF0dGVkQWRkcmVzcyA6ICcnLFxuICAgICAgICAgIGxhdDogc2luZ2xlTWFwRGF0YSA/IHNpbmdsZU1hcERhdGEubGF0LnRvRml4ZWQoMykgOiBudWxsLFxuICAgICAgICAgIGxuZzogc2luZ2xlTWFwRGF0YSA/IHNpbmdsZU1hcERhdGEubG5nLnRvRml4ZWQoMykgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdGVtcExvY2F0aW9uID8gdGVtcExvY2F0aW9uWzBdIDoge307XG4gICAgZGF0ZVJhbmdlLnN0YXJ0RGF0ZSA9IHNlYXJjaERhdGUgPyBzZWFyY2hEYXRlLnNldFN0YXJ0RGF0ZSA6IG51bGw7XG4gICAgZGF0ZVJhbmdlLmVuZERhdGUgPSBzZWFyY2hEYXRlID8gc2VhcmNoRGF0ZS5zZXRFbmREYXRlIDogbnVsbDtcblxuICAgIGlmIChsb2NhdGlvbiAmJiBsb2NhdGlvbi5sYXQpIHtcbiAgICAgIGxvY2F0aW9uX2xhdCA9IGxvY2F0aW9uLmxhdDtcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24gJiYgbG9jYXRpb24ubG5nKSB7XG4gICAgICBsb2NhdGlvbl9sbmcgPSBsb2NhdGlvbi5sbmc7XG4gICAgfVxuXG4gICAgbGV0IHF1ZXJ5ID0ge1xuICAgICAgc2V0U3RhcnREYXRlOiBzZWFyY2hEYXRlLnNldFN0YXJ0RGF0ZSxcbiAgICAgIHNldEVuZERhdGU6IHNlYXJjaERhdGUuc2V0RW5kRGF0ZSxcbiAgICAgIHJvb206IHJvb21HdWVzdC5yb29tLFxuICAgICAgZ3Vlc3Q6IHJvb21HdWVzdC5ndWVzdCxcbiAgICAgIGxvY2F0aW9uX2xhdCxcbiAgICAgIGxvY2F0aW9uX2xuZyxcbiAgICB9O1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcXVlcnkpIHtcbiAgICAgIGlmIChxdWVyeVtrZXldID09PSAnJyB8fCBxdWVyeVtrZXldID09PSBudWxsIHx8IHF1ZXJ5W2tleV0gPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHF1ZXJ5W2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1VQREFURScsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZXRTdGFydERhdGU6IHNlYXJjaERhdGUuc2V0U3RhcnREYXRlLFxuICAgICAgICBzZXRFbmREYXRlOiBzZWFyY2hEYXRlLnNldEVuZERhdGUsXG4gICAgICAgIHJvb206IHJvb21HdWVzdC5yb29tLFxuICAgICAgICBndWVzdDogcm9vbUd1ZXN0Lmd1ZXN0LFxuICAgICAgICBsb2NhdGlvbl9sYXQsXG4gICAgICAgIGxvY2F0aW9uX2xuZyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBSb3V0ZXIucHVzaChcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6IGAke0xJU1RJTkdfUE9TVFNfUEFHRX1gLFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRobmFtZTogYCR7TElTVElOR19QT1NUU19QQUdFfWAsXG4gICAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIH0sXG4gICAgICB7IHNoYWxsb3c6IHRydWUgfVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybVdyYXBwZXI+XG4gICAgICA8Q29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgPEZhTWFwTWFya2VyQWx0IGNsYXNzTmFtZT1cIm1hcC1tYXJrZXJcIiAvPlxuICAgICAgICA8TWFwQXV0b0NvbXBsZXRlIHVwZGF0ZXZhbHVlPXsodmFsdWUpID0+IHVwZGF0ZXZhbHVlRnVuYyh2YWx1ZSl9IC8+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxNDQuMDgzIDE0NFwiXG4gICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTQ0LjA4MyAxNDRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhcmdldFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBkPVwiTTExNy4yOTIsNjloLTEzLjU4N0MxMDIuMjgsNTMuODUxLDkwLjE5LDQxLjc2MSw3NS4wNDIsNDAuMzM3VjI2LjVoLTZ2MTMuODM3QzUzLjg5Myw0MS43NjEsNDEuODAyLDUzLjg1MSw0MC4zNzgsNjkgIEgyNi43OTJ2NmgxMy41ODdjMS40MjUsMTUuMTQ4LDEzLjUxNSwyNy4yMzgsMjguNjYzLDI4LjY2M1YxMTcuNWg2di0xMy44MzdDOTAuMTksMTAyLjIzOCwxMDIuMjgsOTAuMTQ4LDEwMy43MDUsNzVoMTMuNTg3VjY5eiAgIE03Mi4wNDIsOTcuODA5Yy0xNC4yMywwLTI1LjgwOS0xMS41NzgtMjUuODA5LTI1LjgwOWMwLTE0LjIzMSwxMS41NzgtMjUuODA5LDI1LjgwOS0yNS44MDlTOTcuODUsNTcuNzY5LDk3Ljg1LDcyICBDOTcuODUsODYuMjMsODYuMjcyLDk3LjgwOSw3Mi4wNDIsOTcuODA5elwiIC8+XG4gICAgICAgICAgPHBhdGggZD1cIk03Mi4wNDIsNTIuNTQxYy0xMC43MjksMC0xOS40NTksOC43MjktMTkuNDU5LDE5LjQ1OXM4LjcyOSwxOS40NTksMTkuNDU5LDE5LjQ1OVM5MS41LDgyLjcyOSw5MS41LDcyICBTODIuNzcxLDUyLjU0MSw3Mi4wNDIsNTIuNTQxeiBNNzIuMDQyLDg1LjQ1OWMtNy40MjEsMC0xMy40NTktNi4wMzctMTMuNDU5LTEzLjQ1OWMwLTcuNDIxLDYuMDM4LTEzLjQ1OSwxMy40NTktMTMuNDU5ICBTODUuNSw2NC41NzksODUuNSw3MkM4NS41LDc5LjQyMiw3OS40NjIsODUuNDU5LDcyLjA0Miw4NS40NTl6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L0NvbXBvbmVudFdyYXBwZXI+XG5cbiAgICAgIDxDb21wb25lbnRXcmFwcGVyPlxuICAgICAgICA8RmFSZWdDYWxlbmRhciBjbGFzc05hbWU9XCJjYWxlbmRhclwiIC8+XG4gICAgICAgIDxEYXRlUmFuZ2VQaWNrZXJCb3hcbiAgICAgICAgICBpdGVtPXtjYWxlbmRhckl0ZW19XG4gICAgICAgICAgc3RhcnREYXRlSWQ9XCJzdGFydERhdGVJZC1pZC1ob21lXCJcbiAgICAgICAgICBlbmREYXRlSWQ9XCJlbmREYXRlSWQtaWQtaG9tZVwiXG4gICAgICAgICAgdXBkYXRlU2VhcmNoRGF0YT17KHNldERhdGVWYWx1ZSkgPT4gc2V0U2VhcmNoRGF0ZShzZXREYXRlVmFsdWUpfVxuICAgICAgICAgIHNob3dDbGVhckRhdGVzPXt0cnVlfVxuICAgICAgICAgIHNtYWxsPXt0cnVlfVxuICAgICAgICAgIG51bWJlck9mTW9udGhzPXsxfVxuICAgICAgICAvPlxuICAgICAgPC9Db21wb25lbnRXcmFwcGVyPlxuXG4gICAgICA8Q29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgPEZhVXNlckZyaWVuZHMgY2xhc3NOYW1lPVwidXNlci1mcmllbmRzXCIgLz5cbiAgICAgICAgPFZpZXdXaXRoUG9wdXBcbiAgICAgICAgICBrZXk9ezIwMH1cbiAgICAgICAgICBub1ZpZXc9e3RydWV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicm9vbV9ndWVzdFwiXG4gICAgICAgICAgdmlldz17XG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCI+XG4gICAgICAgICAgICAgIDxzcGFuPlJvb20ge3Jvb21HdWVzdC5yb29tID4gMCAmJiBgOiAke3Jvb21HdWVzdC5yb29tfWB9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj4tPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj5HdWVzdHtyb29tR3Vlc3QuZ3Vlc3QgPiAwICYmIGA6ICR7cm9vbUd1ZXN0Lmd1ZXN0fWB9PC9zcGFuPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgfVxuICAgICAgICAgIHBvcHVwPXtcbiAgICAgICAgICAgIDxSb29tR3Vlc3RXcmFwcGVyPlxuICAgICAgICAgICAgICA8SXRlbVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Sb29tPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPElucHV0SW5jRGVjXG4gICAgICAgICAgICAgICAgICBpZD1cInJvb21cIlxuICAgICAgICAgICAgICAgICAgaW5jcmVtZW50PXsoKSA9PiBoYW5kbGVJbmNyZW1lbnQoJ3Jvb20nKX1cbiAgICAgICAgICAgICAgICAgIGRlY3JlbWVudD17KCkgPT4gaGFuZGxlRGVjcmVtZW50KCdyb29tJyl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUluY0RlY09uQ2huYWdlKGUsICdyb29tJyl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cm9vbUd1ZXN0LnJvb219XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9JdGVtV3JhcHBlcj5cbiAgICAgICAgICAgICAgPEl0ZW1XcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+R3Vlc3Q8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8SW5wdXRJbmNEZWNcbiAgICAgICAgICAgICAgICAgIGlkPVwiZ3Vlc3RcIlxuICAgICAgICAgICAgICAgICAgaW5jcmVtZW50PXsoKSA9PiBoYW5kbGVJbmNyZW1lbnQoJ2d1ZXN0Jyl9XG4gICAgICAgICAgICAgICAgICBkZWNyZW1lbnQ9eygpID0+IGhhbmRsZURlY3JlbWVudCgnZ3Vlc3QnKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW5jRGVjT25DaG5hZ2UoZSwgJ2d1ZXN0Jyl9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cm9vbUd1ZXN0Lmd1ZXN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvSXRlbVdyYXBwZXI+XG4gICAgICAgICAgICA8L1Jvb21HdWVzdFdyYXBwZXI+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9Db21wb25lbnRXcmFwcGVyPlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICBvbkNsaWNrPXtnb1RvU2VhcmNoUGFnZX1cbiAgICAgID5cbiAgICAgICAgRmluZCBIb3RlbHNcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvRm9ybVdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNlYXJjaEZvcm0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1VQREFURSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hQcm92aWRlciA9ICh7IGNoaWxkcmVuLCBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBxdWVyeSk7XG4gIHJldHVybiAoXG4gICAgPFNlYXJjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2VhcmNoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcbmltcG9ydCBzaHVmZmxlIGZyb20gJ2xvZGFzaC9zaHVmZmxlJztcblxuY29uc3QgRmV0Y2hBUElEYXRhID0gKHVybCkgPT4ge1xuICByZXR1cm4gZmV0Y2godXJsKVxuICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgUHJvY2Vzc0FQSURhdGEgPSAoYXBpRGF0YSkgPT4ge1xuICBsZXQgZmV0Y2hEYXRhID0ge307XG4gIGlmIChhcGlEYXRhKSB7XG4gICAgYXBpRGF0YS5mb3JFYWNoKChpdGVtLCBrZXkpID0+IHtcbiAgICAgIGZldGNoRGF0YS5kYXRhID0gaXRlbS5kYXRhID8gWy4uLml0ZW0uZGF0YV0gOiBbXTtcbiAgICAgIGZldGNoRGF0YS5uYW1lID0gaXRlbS5uYW1lID8gaXRlbS5uYW1lIDogJyc7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGZldGNoRGF0YSA/IGZldGNoRGF0YS5kYXRhIDogW107XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaGVkRGF0YSA9IChwcm9jZXNzZWREYXRhKSA9PiB7XG4gIGNvbnN0IHJhbmROdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCArIDEpO1xuICBjb25zdCBkYXRhID0gc2h1ZmZsZShwcm9jZXNzZWREYXRhLnNsaWNlKDAsIHJhbmROdW1iZXIpKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgU2VhcmNoU3RhdGVLZXlDaGVjayA9IChzdGF0ZSkgPT4ge1xuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoXG4gICAgICBzdGF0ZVtrZXldICE9PSBudWxsICYmXG4gICAgICBzdGF0ZVtrZXldICE9ICcnICYmXG4gICAgICBzdGF0ZVtrZXldICE9IFtdICYmXG4gICAgICBzdGF0ZVtrZXldICE9IDAgJiZcbiAgICAgIHN0YXRlW2tleV0gIT0gMTAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IFBhZ2luYXRvciA9IChwb3N0cywgcHJvY2Vzc2VkRGF0YSwgbGltaXQpID0+IHtcbiAgcmV0dXJuIFsuLi5wb3N0cywgLi4ucHJvY2Vzc2VkRGF0YS5zbGljZShwb3N0cy5sZW5ndGgsIHBvc3RzLmxlbmd0aCArIGxpbWl0KV07XG59O1xuXG5jb25zdCBHZXRBUElEYXRhID0gYXN5bmMgKGFwaVVybCkgPT4ge1xuICBjb25zdCBwcm9taXNlcyA9IGFwaVVybC5tYXAoYXN5bmMgKHJlcG8pID0+IHtcbiAgICBjb25zdCBhcGlQYXRoID0gYCR7cHJvY2Vzcy5lbnYuU0VSVkVSX0FQSX0vc3RhdGljL2RhdGFgOyAvLyByZWFkIGl0IGZyb20gZW52IHZhcmlhYmxlXG4gICAgY29uc3QgYXBpID0gYCR7YXBpUGF0aH0vJHtyZXBvLmVuZHBvaW50fS5qc29uYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEZldGNoQVBJRGF0YShhcGkpO1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiByZXBvLm5hbWUsXG4gICAgICBkYXRhOiByZXNwb25zZSxcbiAgICB9O1xuICB9KTtcbiAgY29uc3QgcmVjZXZpZWREYXRhID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICByZXR1cm4gcmVjZXZpZWREYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2V0QVBJRGF0YTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmxldCBkaXJlY3Rpb24gPSAnbHRyJztcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBkaXJlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLmdldEF0dHJpYnV0ZSgnZGlyJyk7XG59XG5jb25zdCB3aXRoRGlyZWN0aW9uID0gQ29tcG9uZW50ID0+IHByb3BzID0+IHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSBkYXRhLXJ0bD17ZGlyZWN0aW9ufSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEaXJlY3Rpb247XG5leHBvcnQgeyBkaXJlY3Rpb24gfTtcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9VSS9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCBIZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvVUkvSGVhZGluZy9IZWFkaW5nJztcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uVGl0bGUvU2VjdGlvblRpdGxlJztcbmltcG9ydCBTZWFyY2hBcmVhIGZyb20gJ2NvbnRhaW5lci9Ib21lL1NlYXJjaC9TZWFyY2gnO1xuaW1wb3J0IExvY2F0aW9uR3JpZCBmcm9tICdjb250YWluZXIvSG9tZS9Mb2NhdGlvbi9Mb2NhdGlvbic7XG5pbXBvcnQgU2VjdGlvbkdyaWQgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uR3JpZC9TZWN0aW9uR3JpZCc7XG5pbXBvcnQgR2V0QVBJRGF0YSBmcm9tICdsaWJyYXJ5L2hlbHBlcnMvZ2V0X2FwaV9kYXRhJztcbmltcG9ydCB7IGRldmljZVR5cGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0JztcbmltcG9ydCB7IExJU1RJTkdfUE9TVFNfUEFHRSwgU0lOR0xFX1BPU1RfUEFHRSB9IGZyb20gJ3NldHRpbmdzL2NvbnN0YW50JztcbmltcG9ydCB7XG4gIEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9NT0JJTEVfREVWSUNFLFxuICBIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfVEFCTEVUX0RFVklDRSxcbiAgSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX0RFU0tUT1BfREVWSUNFLFxuICBIT01FX1BBR0VfU0VDVElPTlNfQ09MVU1OU19SRVNQT05TSVZFX1dJRFRILFxufSBmcm9tICdzZXR0aW5ncy9jb25maWcnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIGxldCBsaW1pdDtcblxuICBpZiAoZGV2aWNlVHlwZSA9PT0gJ21vYmlsZScpIHtcbiAgICBsaW1pdCA9IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9NT0JJTEVfREVWSUNFO1xuICB9XG4gIGlmIChkZXZpY2VUeXBlID09PSAndGFibGV0Jykge1xuICAgIGxpbWl0ID0gSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX1RBQkxFVF9ERVZJQ0U7XG4gIH1cblxuICBpZiAoZGV2aWNlVHlwZSA9PT0gJ2Rlc2t0b3AnKSB7XG4gICAgbGltaXQgPSBIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfREVTS1RPUF9ERVZJQ0U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UcmlwRmluZGVyLiB8IEEgcmVhY3QgbmV4dCBsaXN0aW5nIHRlbXBsYXRlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTZWFyY2hBcmVhIC8+XG4gICAgICA8TG9jYXRpb25HcmlkIGRhdGE9e3Byb3BzLmxvY2F0aW9uRGF0YX0gZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX0gLz5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ9e3RydWV9PlxuICAgICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgICAgdGl0bGU9ezxIZWFkaW5nIGNvbnRlbnQ9XCJUcmF2ZWxlcnPigJkgQ2hvaWNlOiBUb3AgaG90ZWxzXCIgLz59XG4gICAgICAgICAgbGluaz17XG4gICAgICAgICAgICA8TGluayBocmVmPXtMSVNUSU5HX1BPU1RTX1BBR0V9PlxuICAgICAgICAgICAgICA8YT5TaG93IGFsbDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxTZWN0aW9uR3JpZFxuICAgICAgICAgIGxpbms9e1NJTkdMRV9QT1NUX1BBR0V9XG4gICAgICAgICAgY29sdW1uV2lkdGg9e0hPTUVfUEFHRV9TRUNUSU9OU19DT0xVTU5TX1JFU1BPTlNJVkVfV0lEVEh9XG4gICAgICAgICAgZGF0YT17cHJvcHMudG9wSG90ZWxEYXRhLnNsaWNlKDAsIGxpbWl0KX1cbiAgICAgICAgICBsaW1pdD17bGltaXR9XG4gICAgICAgICAgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNlY3Rpb25UaXRsZVxuICAgICAgICAgIHRpdGxlPXs8SGVhZGluZyBjb250ZW50PVwiQmVzdCBSYXRlZDogTHV4YXJ5IGhvdGVsc1wiIC8+fVxuICAgICAgICAgIGxpbms9e1xuICAgICAgICAgICAgPExpbmsgaHJlZj17TElTVElOR19QT1NUU19QQUdFfT5cbiAgICAgICAgICAgICAgPGE+U2hvdyBhbGw8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8U2VjdGlvbkdyaWRcbiAgICAgICAgICBsaW5rPXtTSU5HTEVfUE9TVF9QQUdFfVxuICAgICAgICAgIGNvbHVtbldpZHRoPXtIT01FX1BBR0VfU0VDVElPTlNfQ09MVU1OU19SRVNQT05TSVZFX1dJRFRIfVxuICAgICAgICAgIGRhdGE9e3Byb3BzLmx1eGFyeUhvdGVsRGF0YS5zbGljZSgwLCBsaW1pdCl9XG4gICAgICAgICAgbGltaXQ9e2xpbWl0fVxuICAgICAgICAgIGRldmljZVR5cGU9e2RldmljZVR5cGV9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuLy9Vc2Ugd2hlbiBMb2FkaW5nIGRhdGEgZm9ybSBEQlxuICAvLyBjb25zdCBhcGlVcmwgPSBbXG4gIC8vICAge1xuICAvLyAgICAgZW5kcG9pbnQ6ICdob3RlbCcsXG4gIC8vICAgICBuYW1lOiAnbHV4YXJ5SG90ZWxEYXRhJyxcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIGVuZHBvaW50OiAndG9wLWhvdGVsJyxcbiAgLy8gICAgIG5hbWU6ICd0b3BIb3RlbERhdGEnLFxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgZW5kcG9pbnQ6ICdsb2NhdGlvbicsXG4gIC8vICAgICBuYW1lOiAnbG9jYXRpb25EYXRhJyxcbiAgLy8gICB9LFxuICAvLyBdO1xuICAvLyBjb25zdCBwYWdlRGF0YSA9IGF3YWl0IEdldEFQSURhdGEoYXBpVXJsKTtcbiAgLy8gbGV0IGxvY2F0aW9uRGF0YSA9IFtdLFxuICAvLyAgIHRvcEhvdGVsRGF0YSA9IFtdLFxuICAvLyAgIGx1eGFyeUhvdGVsRGF0YSA9IFtdO1xuXG4gIC8vIGlmIChwYWdlRGF0YSkge1xuICAvLyAgIHBhZ2VEYXRhLmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xuICAvLyAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ2xvY2F0aW9uRGF0YScpIHtcbiAgLy8gICAgICAgbG9jYXRpb25EYXRhID0gaXRlbS5kYXRhID8gWy4uLml0ZW0uZGF0YV0gOiBbXTtcbiAgLy8gICAgIH0gZWxzZSBpZiAoaXRlbS5uYW1lID09PSAndG9wSG90ZWxEYXRhJykge1xuICAvLyAgICAgICB0b3BIb3RlbERhdGEgPSBpdGVtLmRhdGEgPyBbLi4uaXRlbS5kYXRhXSA6IFtdO1xuICAvLyAgICAgfSBlbHNlIGlmIChpdGVtLm5hbWUgPT09ICdsdXhhcnlIb3RlbERhdGEnKSB7XG4gIC8vICAgICAgIGx1eGFyeUhvdGVsRGF0YSA9IGl0ZW0uZGF0YSA/IFsuLi5pdGVtLmRhdGFdIDogW107XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cbiAgLy9Mb2FkaW5nIGRhdGEgZnJvbSBsb2NhbCBmaWxlc1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnc3RhdGljJywgJ2RhdGEnLCAnbG9jYXRpb24uanNvbicpXG4gIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgpXG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb25EYXRhKVxuICBjb25zdCBmaWxlUGF0aDIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3N0YXRpYycsICdkYXRhJywgJ3RvcC1ob3RlbC5qc29uJylcbiAgY29uc3QganNvbkRhdGEyID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgyKVxuICBjb25zdCBkYXRhMiA9IEpTT04ucGFyc2UoanNvbkRhdGEyKVxuICBjb25zdCBmaWxlUGF0aDMgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ3N0YXRpYycsICdkYXRhJywgJ2hvdGVsLmpzb24nKVxuICBjb25zdCBqc29uRGF0YTMgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aDMpXG4gIGNvbnN0IGRhdGEzID0gSlNPTi5wYXJzZShqc29uRGF0YTMpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgbG9jYXRpb25EYXRhOiBkYXRhLCB0b3BIb3RlbERhdGE6IGRhdGEyLCBsdXhhcnlIb3RlbERhdGE6IGRhdGEzIH0sXG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX01PQklMRV9ERVZJQ0UgPSA0O1xuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9UQUJMRVRfREVWSUNFID0gNDtcbmV4cG9ydCBjb25zdCBIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfREVTS1RPUF9ERVZJQ0UgPSA1O1xuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19DT0xVTU5TX1JFU1BPTlNJVkVfV0lEVEggPSBbXG4gIDEgLyAxLFxuICAxIC8gMixcbiAgMSAvIDMsXG4gIDEgLyA0LFxuICAxIC8gNSxcbl07XG5leHBvcnQgY29uc3QgTElTVElOR19QQUdFX1BPU1RfTElNSVQgPSAxMDtcblxuZXhwb3J0IGNvbnN0IExJU1RJTkdfUEFHRV9DT0xVTU5fV0lEVEhfV0lUSE9VVF9NQVAgPSBbXG4gIDEgLyAxLFxuICAxIC8gMixcbiAgMSAvIDMsXG4gIDEgLyA0LFxuICAxIC8gNSxcbl07XG5leHBvcnQgY29uc3QgTElTVElOR19QQUdFX0NPTFVNTl9XSURUSF9XSVRIX01BUCA9IFtcbiAgMSAvIDEsXG4gIDEgLyAyLFxuICAxIC8gMixcbiAgMSAvIDIsXG4gIDEgLyAzLFxuXTtcbiIsIi8vIEdlbmVyYWwgUGFnZSBTZWN0aW9uXG5leHBvcnQgY29uc3QgSE9NRV9QQUdFID0gJy8nO1xuZXhwb3J0IGNvbnN0IEFHRU5UU19QQUdFID0gJy9hZ2VudHMnO1xuXG4vLyBMaXN0aW5nIFNpbmdsZSBQYWdlIFNlY3Rpb25cbmV4cG9ydCBjb25zdCBMSVNUSU5HX1BPU1RTX1BBR0UgPSAnL2xpc3RpbmcnO1xuZXhwb3J0IGNvbnN0IFNJTkdMRV9QT1NUX1BBR0UgPSAnL3Bvc3QnO1xuXG4vLyBBZ2VudCBQcm9maWxlIFBhZ2UgU2VjdGlvblxuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfUEFHRSA9ICcvcHJvZmlsZSc7XG5leHBvcnQgY29uc3QgQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFID0gJy9hY2NvdW50LXNldHRpbmdzJztcbmV4cG9ydCBjb25zdCBBR0VOVF9QUk9GSUxFX0VESVRfUEFHRSA9ICcvZWRpdCc7XG5leHBvcnQgY29uc3QgQUdFTlRfSU1BR0VfRURJVF9QQUdFID0gJy9jaGFuZ2UtaW1hZ2UnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BBU1NXT1JEX0NIQU5HRV9QQUdFID0gJy9jaGFuZ2UtcGFzc3dvcmQnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfREVMRVRFID0gJy9kZWxldGUnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfRkFWT1VSSVRFID0gJy9mYXZvdXJpdGUtcG9zdCc7XG5leHBvcnQgY29uc3QgQUdFTlRfUFJPRklMRV9DT05UQUNUID0gJy9jb250YWN0JztcbmV4cG9ydCBjb25zdCBBRERfSE9URUxfUEFHRSA9ICcvYWRkLWhvdGVsJztcblxuLy8gT3RoZXIgUGFnZXNcbmV4cG9ydCBjb25zdCBQUklDSU5HX1BMQU5fUEFHRSA9ICcvcHJpY2luZy1wbGFuJztcbmV4cG9ydCBjb25zdCBQUklWQUNZX1BBR0UgPSAnL3ByaXZhY3knO1xuXG4vLyBMb2dpbiAvIFJlZ2lzdGF0aW9uIFBhZ2VcbmV4cG9ydCBjb25zdCBMT0dJTl9QQUdFID0gJy9zaWduLWluJztcbmV4cG9ydCBjb25zdCBSRUdJU1RSQVRJT05fUEFHRSA9ICcvc2lnbi11cCc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX1BBR0UgPSAnL2NoYW5nZS1wYXNzd29yZCc7XG5leHBvcnQgY29uc3QgRk9SR0VUX1BBU1NXT1JEX1BBR0UgPSAnL2ZvcmdldC1wYXNzd29yZCc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvTWludXNPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvUGx1c091dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBnbGlkZWpzL2dsaWRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9idXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvaW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMvcHJvbWlzZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9pc0VtcHR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9zaHVmZmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0ZXMvaW5pdGlhbGl6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kZXZpY2UtZGV0ZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbWFwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbWFwcy9saWIvY29tcG9uZW50cy9wbGFjZXMvU3RhbmRhbG9uZVNlYXJjaEJveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9maVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWNvbXBvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
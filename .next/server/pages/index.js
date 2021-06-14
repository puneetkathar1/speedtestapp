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

module.exports = "/_next/static/images/1-ecc8b472d83858ba82670890ec1c2639.jpg";

/***/ }),

/***/ "./assets/images/banner/2.jpg":
/*!************************************!*\
  !*** ./assets/images/banner/2.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/2-3e57682495acf40991c078ca8a1a58c3.jpg";

/***/ }),

/***/ "./assets/images/banner/3.jpg":
/*!************************************!*\
  !*** ./assets/images/banner/3.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-31b9ed161efd79c3490e167effe7a3e4.jpg";

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
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");
/* harmony import */ var settings_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! settings/config */ "./settings/config.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function HomePage(props) {
  let limit;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "TripFinder. | A react next listing template")), __jsx(container_Home_Search_Search__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(container_Home_Location_Location__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: props.locationData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx(components_UI_Container_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: "Travelers\u2019 Choice: Top hotels",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 18
      }
    }),
    link: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: settings_constant__WEBPACK_IMPORTED_MODULE_10__["LISTING_POSTS_PAGE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, "Show all")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    link: settings_constant__WEBPACK_IMPORTED_MODULE_10__["SINGLE_POST_PAGE"],
    columnWidth: settings_config__WEBPACK_IMPORTED_MODULE_11__["HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH"],
    data: props.topHotelData.slice(0, limit),
    limit: limit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(components_SectionTitle_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__["default"], {
      content: "Best Rated: Luxary hotels",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 18
      }
    }),
    link: __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: settings_constant__WEBPACK_IMPORTED_MODULE_10__["LISTING_POSTS_PAGE"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, "Show all")),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx(components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    link: settings_constant__WEBPACK_IMPORTED_MODULE_10__["SINGLE_POST_PAGE"],
    columnWidth: settings_config__WEBPACK_IMPORTED_MODULE_11__["HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH"],
    data: props.luxaryHotelData.slice(0, limit),
    limit: limit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })));
}
async function getStaticProps() {
  const apiUrl = [{
    endpoint: 'hotel',
    name: 'luxaryHotelData'
  }, {
    endpoint: 'top-hotel',
    name: 'topHotelData'
  }, {
    endpoint: 'location',
    name: 'locationData'
  }];
  const pageData = await Object(library_helpers_get_api_data__WEBPACK_IMPORTED_MODULE_9__["default"])(apiUrl);
  let locationData = [],
      topHotelData = [],
      luxaryHotelData = [];

  if (pageData) {
    pageData.forEach((item, key) => {
      if (item.name === 'locationData') {
        locationData = item.data ? [...item.data] : [];
      } else if (item.name === 'topHotelData') {
        topHotelData = item.data ? [...item.data] : [];
      } else if (item.name === 'luxaryHotelData') {
        luxaryHotelData = item.data ? [...item.data] : [];
      }
    });
  }

  return {
    props: {
      locationData,
      topHotelData,
      luxaryHotelData
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLzEuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLzIuanBnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvYmFubmVyLzMuanBnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZENhcmQvR3JpZENhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HcmlkQ2FyZC9HcmlkQ2FyZC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ltYWdlQ2FyZC9JbWFnZUNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JbWFnZUNhcmQvSW1hZ2VDYXJkLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRlci9Mb2FkZXIuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXAvTWFwQXV0b0NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwL21hcERhdGFIZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25HcmlkL1NlY3Rpb25HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CYXNlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQm94L0JveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0NvbnRhaW5lci9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Db250YWluZXIvQ29udGFpbmVyLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRGF0ZVBpY2tlci9SZWFjdERhdGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRGF0ZVBpY2tlci9SZWFjdERhdGVzLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRmF2b3JpdGUvRmF2b3JpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9GYXZvcml0ZS9GYXZvcml0ZS5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0Zhdm9yaXRlL3VzZVRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0dsaWRlQ2Fyb3VzZWwvR2xpZGVDYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0dsaWRlQ2Fyb3VzZWwvR2xpZGVDYXJvdXNlbC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0hlYWRpbmcvSGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0lucHV0SW5jRGVjL0lucHV0SW5jRGVjLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvSW5wdXRJbmNEZWMvSW5wdXRJbmNEZWMuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Qb3J0YWwvUG9ydGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvUmF0aW5nL1JhdGluZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL1RleHQvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL1RpdGxlL1RpdGxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvVGl0bGUvVGl0bGUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9WaWV3V2l0aFBvcHVwL1ZpZXdXaXRoUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9WaWV3V2l0aFBvcHVwL1ZpZXdXaXRoUG9wdXAuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9WaWV3V2l0aFBvcHVwL3VzZU9uQ2xpY2tPdXRzaWRlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9Ib21lL0xvY2F0aW9uL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9Ib21lL0xvY2F0aW9uL0xvY2F0aW9uLnN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9Ib21lL1NlYXJjaC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL0hvbWUvU2VhcmNoL1NlYXJjaC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvSG9tZS9TZWFyY2gvU2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1NlYXJjaFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2xpYnJhcnkvaGVscGVycy9nZXRfYXBpX2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbGlicmFyeS9oZWxwZXJzL3J0bC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXR0aW5ncy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2V0dGluZ3MvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL01pbnVzT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvUGx1c091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdsaWRlanMvZ2xpZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9pbnB1dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9pc0VtcHR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL3NodWZmbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRhdGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF0ZXMvaW5pdGlhbGl6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdvb2dsZS1tYXBzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLW1hcHMvbGliL2NvbXBvbmVudHMvcGxhY2VzL1N0YW5kYWxvbmVTZWFyY2hCb3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW11bHRpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVjb21wb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCIiXSwibmFtZXMiOlsiR3JpZENhcmQiLCJjbGFzc05hbWUiLCJmYXZvcml0ZSIsImxvY2F0aW9uIiwidGl0bGUiLCJwcmljZSIsInJhdGluZyIsImVkaXRCdG4iLCJ2aWV3RGV0YWlsc0J0biIsImNoaWxkcmVuIiwiY2xhc3NlcyIsInRyaW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiR3JpZENhcmRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwidGhlbWVHZXQiLCJJbWFnZVdyYXBwZXIiLCJGYXZvcml0ZUljb24iLCJDb250ZW50V3JhcHBlciIsIkxvY2F0aW9uQXJlYSIsIlRpdGxlQXJlYSIsIlByaWNlQXJlYSIsIlJhdGluZ0FyZWEiLCJNZXRhV3JhcHBlciIsIkJ1dHRvbkdyb3VwIiwiSW1hZ2VDYXJkTmV4dCIsImltYWdlU3JjIiwibGluayIsIm1ldGEiLCJhZGRBbGxDbGFzc2VzIiwicGF0aExpbmsiLCJyZXBsYWNlIiwicHVzaCIsImpvaW4iLCJwYXRobmFtZSIsInF1ZXJ5IiwiY291bnRyeSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJkZWZhdWx0UHJvcHMiLCJJbWFnZUNhcmRXcmFwcGVyIiwiVGl0bGUiLCJoNCIsIk1ldGEiLCJMb2FkZXIiLCJmaWxsIiwiTG9hZGVyV3JhcHBlciIsIlNlYXJjaElucHV0IiwiY29tcG9zZSIsIndpdGhQcm9wcyIsImdvb2dsZU1hcFVSTCIsInByb2Nlc3MiLCJsb2FkaW5nRWxlbWVudCIsImNvbnRhaW5lckVsZW1lbnQiLCJ3aXRoU2NyaXB0anMiLCJwcm9wcyIsImdldGlucHV0dmFsdWUiLCJsb2NhdGlvbklucHV0Iiwic2V0TG9jYXRpb25JbnB1dCIsInVzZVN0YXRlIiwic2VhcmNoZWRMb2NhdGlvbiIsInNlYXJjaGVkUGxhY2VBUElEYXRhIiwiaGFuZGxlT25DaGFuZ2UiLCJldmVudCIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlZnMiLCJ1c2VSZWYiLCJvblBsYWNlc0NoYW5nZWQiLCJwbGFjZXMiLCJjdXJyZW50IiwiZ2V0UGxhY2VzIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJoYW5kbGVPblByZXNzRW50ZXIiLCJNYXBBdXRvQ29tcGxldGUiLCJ1cGRhdGV2YWx1ZSIsIm1hcERhdGFIZWxwZXIiLCJpbmZvVmFsdWUiLCJ0ZW1wTWFwT2JqIiwidGVtcE1hcEFycmF5IiwibGVuZ3RoIiwibWFwIiwicGxhY2VfaWQiLCJhZGRyZXNzX2NvbXBvbmVudHMiLCJnZW9tZXRyeSIsImlkIiwibGF0IiwibG5nIiwiZm9ybWF0dGVkQWRkcmVzcyIsImNpdHkiLCJzdGF0ZV9sb25nIiwic3RhdGVfc2hvcnQiLCJ6aXBjb2RlIiwiY291bnRyeV9sb25nIiwiY291bnRyeV9zaG9ydCIsImkiLCJ0eXBlcyIsImxvbmdfbmFtZSIsInNob3J0X25hbWUiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsInBhcml0aWFsVmlzaWJpbGl0eUd1dHRlciIsIm1vYmlsZSIsInRhYmxldCIsIlByb2R1Y3RDYXJkIiwicmF0aW5nQ291bnQiLCJnYWxsZXJ5Iiwic2x1ZyIsImRldmljZVR5cGUiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiaW5kZXgiLCJvYmplY3RGaXQiLCJMb2FkTW9yZSIsImhhbmRsZUxvYWRNb3JlIiwic2hvd0J1dHRvbiIsImJ1dHRvblRleHQiLCJsb2FkaW5nIiwibG9hZE1vcmVDb21wb25lbnQiLCJsb2FkTW9yZVN0eWxlIiwiU2VjdGlvbkdyaWQiLCJkYXRhIiwidG90YWxJdGVtIiwibGltaXQiLCJjb2x1bW5XaWR0aCIsInBhZ2luYXRpb25Db21wb25lbnQiLCJwbGFjZWhvbGRlciIsInJvd1N0eWxlIiwiY29sdW1uU3R5bGUiLCJuIiwiTnVtYmVyIiwibGltaXRzIiwiQXJyYXkiLCJpdGVtIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyIsImJvb2wiLCJvYmplY3QiLCJmbGV4Qm94IiwiZmxleFdyYXAiLCJtciIsIm1sIiwicHIiLCJwbCIsImp1c3RpZnlDb250ZW50IiwibXQiLCJTZWN0aW9uVGl0bGUiLCJTZWN0aW9uVGl0bGVXcmFwcGVyIiwidGhlbWVkIiwia2V5IiwidGhlbWUiLCJiYXNlIiwiYm94U2l6aW5nIiwic3BhY2UiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImZsZXgiLCJvcmRlciIsImFsaWduU2VsZiIsImJvcmRlcnMiLCJib3JkZXJDb2xvciIsImRpc3BsYXkiLCJCb3hXcmFwcGVyIiwiY3NzIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJCb3giLCJhbnkiLCJhcyIsIm9uZU9mIiwiYXJyYXlPZiIsImJvcmRlciIsImJvcmRlclRvcCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyTGVmdCIsIkNvbnRhaW5lciIsImZ1bGxXaWR0aCIsIm5vR3V0dGVyIiwiZmx1aWQiLCJDb250YWluZXJXcmFwcGVyIiwiRGF0ZVJhbmdlUGlja2VyQm94IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiZGF0ZUZvcm1hdCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1cGRhdGVTZWFyY2hEYXRhIiwic2V0U3RhcnREYXRlIiwiZm9ybWF0Iiwic2V0RW5kRGF0ZSIsImZvY3VzZWRJbnB1dCIsInNlcGFyYXRvciIsIm9uRGF0ZUNoYW5nZUZ1bmMiLCJiaW5kIiwib25Gb2N1c0NoYW5nZUZ1bmMiLCJyZW5kZXIiLCJzdGFydERhdGVJZCIsImVuZERhdGVJZCIsInN0YXJ0RGF0ZVBsYWNlaG9sZGVyVGV4dCIsImVuZERhdGVQbGFjZWhvbGRlclRleHQiLCJkaXNhYmxlZCIsInNob3dDbGVhckRhdGVzIiwiaXNSVEwiLCJvcmllbnRhdGlvbiIsImFuY2hvckRpcmVjdGlvbiIsIndpdGhQb3J0YWwiLCJ3aXRoRnVsbFNjcmVlblBvcnRhbCIsInNtYWxsIiwiYmxvY2siLCJudW1iZXJPZk1vbnRocyIsInJlZ3VsYXIiLCJub0JvcmRlciIsImRlZmF1bHRDYWxlbmRlclByb3BzIiwib25Gb2N1c0NoYW5nZSIsIm9uRGF0ZXNDaGFuZ2UiLCJSZWFjdERhdGVzU3R5bGVXcmFwcGVyIiwiUmVhY3REYXRlV3JhcHBlciIsIkNvbXBvbmVudE5hbWUiLCJSZWFjdERhdGVzV3JhcHBlciIsIldpdGhEaXJlY3Rpb24iLCJGYXZvcml0ZSIsImNvbnRlbnQiLCJvbkNsaWNrIiwidG9nZ2xlVmFsdWUiLCJ0b2dnbGVIYW5kbGVyIiwidXNlVG9nZ2xlIiwiYWRkQWxsQ2xhc3MiLCJoYW5kZWxDbGljayIsImFkZEFuaW1hdGlvbiIsImtleWZyYW1lcyIsInJlbW92ZUFuaW1hdGlvbiIsIkFkZEFuaW1hdGlvbiIsIlJlbW92ZUFuaW1hdGlvbiIsIkZhdm9yaXRlV3JhcHBlciIsImJ1dHRvbiIsImluaXRpYWxWYWx1ZSIsInNldFZhbHVlIiwidG9nZ2xlciIsInVzZUNhbGxiYWNrIiwiR2xpZGVDYXJvdXNlbCIsIm9wdGlvbnMiLCJjb250cm9scyIsInByZXZCdXR0b24iLCJuZXh0QnV0dG9uIiwiYnVsbGV0cyIsIm51bWJlck9mQnVsbGV0cyIsImNhcm91c2VsU2VsZWN0b3IiLCJ0b3RhbEJ1bGxldHMiLCJ1c2VFZmZlY3QiLCJnbGlkZSIsIkdsaWRlIiwibW91bnQiLCJHbGlkZVNsaWRlIiwiR2xpZGVXcmFwcGVyIiwiR2xpZGVTbGlkZVdyYXBwZXIiLCJsaSIsIkJ1dHRvbldyYXBwZXIiLCJCdXR0b25Db250cm9sV3JhcHBlciIsIkJ1bGxldENvbnRyb2xXcmFwcGVyIiwiQnVsbGV0QnV0dG9uIiwiRGVmYXVsdEJ0biIsIkhlYWRpbmdXcmFwcGVyIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsIkhlYWRpbmciLCJtYiIsIklucHV0SW5jRGVjIiwiaW5jcmVtZW50IiwiZGVjcmVtZW50IiwiSW5wdXRJbmNEZWNXcmFwcGVyIiwiUG9ydGFsIiwicmVuZGVyZXJJZCIsImNvbnRhaW5lckVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicG9ydGFsUm9vdCIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsIlJhdGluZyIsInR5cGUiLCJyYXRpbmdGaWVsZE5hbWUiLCJmbG9vclZhbHVlIiwicmF0aW5nVmlldyIsIk1hdGgiLCJmbG9vciIsImxpc3RpbmdDb25kaXRpb24iLCJzaG93UmF0aW5nQ291bnQiLCJUZXh0V3JhcHBlciIsIlRleHQiLCJtIiwiVGl0bGVXcmFwcGVyIiwiTGlua1dyYXBwZXIiLCJWaWV3V2l0aFBvcHVwIiwidmlldyIsInBvcHVwIiwibm9WaWV3Iiwic3R5bGUiLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJyZWYiLCJ1c2VPbkNsaWNrT3V0c2lkZSIsInJhZGl1cyIsIldyYXBwZXIiLCJoYW5kbGVyIiwibGlzdGVuZXIiLCJjb250YWlucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiTG9jYXRpb25HcmlkIiwiTElTVElOR19QT1NUU19QQUdFIiwicG9zdCIsImxvY2F0aW9uSW1hZ2UiLCJudW1iZXJPZlBvc3QiLCJMb2NhdGlvbldyYXBwZXIiLCJDYXJvdXNlbFNlY3Rpb24iLCJIb21lU2VhcmNoIiwic2VhcmNoVGl0bGVTdHlsZSIsInNlYXJjaERlc2NyaXB0aW9uU3R5bGUiLCJnYXAiLCJhdXRvcGxheSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiYmFubmVyQmcxIiwiYmFubmVyQmcyIiwiYmFubmVyQmczIiwiQmFubmVyV3JhcHBlciIsIlNlYXJjaFdyYXBwZXIiLCJGb3JtV3JhcHBlciIsIkNvbXBvbmVudFdyYXBwZXIiLCJSb29tR3Vlc3RXcmFwcGVyIiwiSXRlbVdyYXBwZXIiLCJjYWxlbmRhckl0ZW0iLCJsb2NhbGUiLCJTZWFyY2hGb3JtIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiU2VhcmNoQ29udGV4dCIsInNlYXJjaERhdGUiLCJzZXRTZWFyY2hEYXRlIiwibWFwVmFsdWUiLCJzZXRNYXBWYWx1ZSIsInJvb21HdWVzdCIsInNldFJvb21HdWVzdCIsInJvb20iLCJndWVzdCIsInVwZGF0ZXZhbHVlRnVuYyIsImlzRW1wdHkiLCJoYW5kbGVJbmNyZW1lbnQiLCJoYW5kbGVEZWNyZW1lbnQiLCJoYW5kbGVJbmNEZWNPbkNobmFnZSIsImUiLCJjdXJyZW50VmFsdWUiLCJnb1RvU2VhcmNoUGFnZSIsInRlbXBMb2NhdGlvbiIsImRhdGVSYW5nZSIsImxvY2F0aW9uX2xhdCIsImxvY2F0aW9uX2xuZyIsIm1hcERhdGEiLCJzaW5nbGVNYXBEYXRhIiwidG9GaXhlZCIsInBheWxvYWQiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic2V0RGF0ZVZhbHVlIiwid2l0aFJvdXRlciIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInJlZHVjZXIiLCJhY3Rpb24iLCJTZWFyY2hQcm92aWRlciIsInVzZVJlZHVjZXIiLCJGZXRjaEFQSURhdGEiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIlByb2Nlc3NBUElEYXRhIiwiYXBpRGF0YSIsImZldGNoRGF0YSIsImZvckVhY2giLCJuYW1lIiwiU2VhcmNoZWREYXRhIiwicHJvY2Vzc2VkRGF0YSIsInJhbmROdW1iZXIiLCJyYW5kb20iLCJzaHVmZmxlIiwic2xpY2UiLCJTZWFyY2hTdGF0ZUtleUNoZWNrIiwiUGFnaW5hdG9yIiwicG9zdHMiLCJHZXRBUElEYXRhIiwiYXBpVXJsIiwicHJvbWlzZXMiLCJyZXBvIiwiYXBpUGF0aCIsImFwaSIsImVuZHBvaW50IiwicmVzcG9uc2UiLCJyZWNldmllZERhdGEiLCJQcm9taXNlIiwiYWxsIiwiZGlyZWN0aW9uIiwid2l0aERpcmVjdGlvbiIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsInJvdXRlciIsImVyciIsImhyZWYiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsInN1Y2Nlc3MiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwicCIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwiZWwiLCJzZXRDaGlsZEVsbSIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm9uIiwib2ZmIiwiZW1pdCIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJIb21lUGFnZSIsImxvY2F0aW9uRGF0YSIsIlNJTkdMRV9QT1NUX1BBR0UiLCJIT01FX1BBR0VfU0VDVElPTlNfQ09MVU1OU19SRVNQT05TSVZFX1dJRFRIIiwidG9wSG90ZWxEYXRhIiwibHV4YXJ5SG90ZWxEYXRhIiwiZ2V0U3RhdGljUHJvcHMiLCJwYWdlRGF0YSIsIkhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9NT0JJTEVfREVWSUNFIiwiSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX1RBQkxFVF9ERVZJQ0UiLCJIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfREVTS1RPUF9ERVZJQ0UiLCJMSVNUSU5HX1BBR0VfUE9TVF9MSU1JVCIsIkxJU1RJTkdfUEFHRV9DT0xVTU5fV0lEVEhfV0lUSE9VVF9NQVAiLCJMSVNUSU5HX1BBR0VfQ09MVU1OX1dJRFRIX1dJVEhfTUFQIiwiSE9NRV9QQUdFIiwiQUdFTlRTX1BBR0UiLCJBR0VOVF9QUk9GSUxFX1BBR0UiLCJBR0VOVF9BQ0NPVU5UX1NFVFRJTkdTX1BBR0UiLCJBR0VOVF9QUk9GSUxFX0VESVRfUEFHRSIsIkFHRU5UX0lNQUdFX0VESVRfUEFHRSIsIkFHRU5UX1BBU1NXT1JEX0NIQU5HRV9QQUdFIiwiQUdFTlRfUFJPRklMRV9ERUxFVEUiLCJBR0VOVF9QUk9GSUxFX0ZBVk9VUklURSIsIkFHRU5UX1BST0ZJTEVfQ09OVEFDVCIsIkFERF9IT1RFTF9QQUdFIiwiUFJJQ0lOR19QTEFOX1BBR0UiLCJQUklWQUNZX1BBR0UiLCJMT0dJTl9QQUdFIiwiUkVHSVNUUkFUSU9OX1BBR0UiLCJDSEFOR0VfUEFTU1dPUkRfUEFHRSIsIkZPUkdFVF9QQVNTV09SRF9QQUdFIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7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QUE3QixDOzs7Ozs7Ozs7OztBQzNCUCxzRTs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx3Rjs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8xLWVjYzhiNDcyZDgzODU4YmE4MjY3MDg5MGVjMWMyNjM5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8yLTNlNTc2ODI0OTVhY2Y0MDk5MWMwNzhjYThhMWE1OGMzLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8zLTMxYjllZDE2MWVmZDc5YzM0OTBlMTY3ZWZmZTdhM2U0LmpwZ1wiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEdyaWRDYXJkV3JhcHBlciwge1xuICBJbWFnZVdyYXBwZXIsXG4gIEZhdm9yaXRlSWNvbixcbiAgQ29udGVudFdyYXBwZXIsXG4gIExvY2F0aW9uQXJlYSxcbiAgVGl0bGVBcmVhLFxuICBQcmljZUFyZWEsXG4gIFJhdGluZ0FyZWEsXG4gIE1ldGFXcmFwcGVyLFxuICBCdXR0b25Hcm91cCxcbn0gZnJvbSAnLi9HcmlkQ2FyZC5zdHlsZSc7XG5cbmNvbnN0IEdyaWRDYXJkID0gKHtcbiAgY2xhc3NOYW1lLFxuICBmYXZvcml0ZSxcbiAgbG9jYXRpb24sXG4gIHRpdGxlLFxuICBwcmljZSxcbiAgcmF0aW5nLFxuICBlZGl0QnRuLFxuICB2aWV3RGV0YWlsc0J0bixcbiAgY2hpbGRyZW4sXG59KSA9PiB7XG4gIGxldCBjbGFzc2VzID0gdmlld0RldGFpbHNCdG4gfHwgZWRpdEJ0biA/IGBoYXNfYnRuICR7Y2xhc3NOYW1lfWAgOiBjbGFzc05hbWU7XG4gIHJldHVybiAoXG4gICAgPEdyaWRDYXJkV3JhcHBlciBjbGFzc05hbWU9e2BncmlkX2NhcmQgJHtjbGFzc2VzfWAudHJpbSgpfT5cbiAgICAgIDxJbWFnZVdyYXBwZXIgY2xhc3NOYW1lPVwibWVkaWFfd3JhcHBlclwiPntjaGlsZHJlbn08L0ltYWdlV3JhcHBlcj5cbiAgICAgIDxDb250ZW50V3JhcHBlciBjbGFzc05hbWU9XCJjb250ZW50X3dyYXBwZXJcIj5cbiAgICAgICAge2xvY2F0aW9uICYmIDxMb2NhdGlvbkFyZWE+e2xvY2F0aW9ufTwvTG9jYXRpb25BcmVhPn1cbiAgICAgICAge3RpdGxlICYmIDxUaXRsZUFyZWE+e3RpdGxlfTwvVGl0bGVBcmVhPn1cbiAgICAgICAgPE1ldGFXcmFwcGVyIGNsYXNzTmFtZT1cIm1ldGFfd3JhcHBlclwiPlxuICAgICAgICAgIHtwcmljZSAmJiA8UHJpY2VBcmVhIGNsYXNzTmFtZT1cInByaWNlXCI+e3ByaWNlfTwvUHJpY2VBcmVhPn1cbiAgICAgICAgICB7cmF0aW5nICYmIDxSYXRpbmdBcmVhIGNsYXNzTmFtZT1cInJhdGluZ1wiPntyYXRpbmd9PC9SYXRpbmdBcmVhPn1cbiAgICAgICAgICB7dmlld0RldGFpbHNCdG4gfHwgZWRpdEJ0biA/IChcbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBjbGFzc05hbWU9XCJidXR0b25fZ3JvdXBcIj5cbiAgICAgICAgICAgICAge3ZpZXdEZXRhaWxzQnRufVxuICAgICAgICAgICAgICB7ZWRpdEJ0bn1cbiAgICAgICAgICAgIDwvQnV0dG9uR3JvdXA+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvTWV0YVdyYXBwZXI+XG4gICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuXG4gICAgICB7ZmF2b3JpdGUgJiYgPEZhdm9yaXRlSWNvbj57ZmF2b3JpdGV9PC9GYXZvcml0ZUljb24+fVxuICAgIDwvR3JpZENhcmRXcmFwcGVyPlxuICApO1xufTtcblxuR3JpZENhcmQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBwcmljZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmF0aW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgZWRpdEJ0bjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gIHZpZXdEZXRhaWxzQnRuOiBQcm9wVHlwZXMuZWxlbWVudCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRDYXJkO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5cbmNvbnN0IEdyaWRDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJi5oYXNfYnRuIHtcbiAgICAuYnV0dG9uX2dyb3VwIHtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4ICR7dGhlbWVHZXQoJ2JveFNoYWRvdy4yJywgJ3JnYmEoMCwgMCwgMCwgMC4xNiknKX07XG5cbiAgICAuY29udGVudF93cmFwcGVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJi5oYXNfYnRuIHtcbiAgICAgIC5tZXRhX3dyYXBwZXIge1xuICAgICAgICAucmF0aW5nIHtcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XG4gICAgICAgIC5idXR0b25fZ3JvdXAge1xuICAgICAgICAgIHRvcDogMTlweDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cblxuICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3QtbGlzdCB7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgPiBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtbGlzdCB7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZThlYztcbiAgfVxuXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtIHtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICB9XG5cbiAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdyB7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAyMiU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuICB9XG5cbiAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tbGVmdCB7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byBsZWZ0LFxuICAgICAgdHJhbnNwYXJlbnQgMCUsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMjUpIDEwMCVcbiAgICApO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICB0byBsZWZ0LFxuICAgICAgICB0cmFuc3BhcmVudCAwJSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLXJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXG4gICAgKTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMjUpIDEwMCVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC1saXN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMzAlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIHRvIGJvdHRvbSxcbiAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXG4gICAgKTtcbiAgICB0cmFuc2l0aW9uOiBib3R0b20gMC4zcyBlYXNlO1xuICB9XG5cbiAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4zJywgJyNFOUU4RTgnKX07XG4gICAgICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgfVxuICB9XG5cbiAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWRvdC0tYWN0aXZlIHtcbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZhdm9yaXRlSWNvbiA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogOHB4O1xuICB6LWluZGV4OiA5O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3Atd2lkdGg6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcbiAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xuYDtcblxuZXhwb3J0IGNvbnN0IExvY2F0aW9uQXJlYSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjEnLCAnIzkwOTA5MCcpfTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGVBcmVhID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogNHB4IDAgNXB4O1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBtYXJnaW46IDRweCAwIDVweDtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUHJpY2VBcmVhID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuYDtcblxuZXhwb3J0IGNvbnN0IFJhdGluZ0FyZWEgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICAvKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cdFx0bWFyZ2luLXRvcDogN3B4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdH0gKi9cblxuICBzcGFuIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gIGkge1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgZmlsbDogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gIH1cblxuICBzdHJvbmcge1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIC8qIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblx0XHRcdG1hcmdpbi1sZWZ0OiAwO1xuXHRcdH0gKi9cbiAgfVxuXG4gIC5hbnQtcmF0ZSB7XG4gICAgLyogbWFyZ2luLXRvcDogLTJweDsgKi9cbiAgICAuYW50LXJhdGUtc3RhciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNZXRhV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLXRvcDogN3B4O1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4gID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgb3V0bGluZTogMDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjEnLCAnIzM5OUM5RicpfTtcbiAgICB9XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRDYXJkV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZUNhcmRXcmFwcGVyLCB7XG4gIENvbnRlbnRXcmFwcGVyLFxuICBUaXRsZSxcbiAgTWV0YSxcbn0gZnJvbSAnLi9JbWFnZUNhcmQuc3R5bGUnO1xuXG5jb25zdCBJbWFnZUNhcmROZXh0ID0gKHsgY2xhc3NOYW1lLCBpbWFnZVNyYywgdGl0bGUsIGxpbmssIG1ldGEgfSkgPT4ge1xuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydpbWFnZV9jYXJkJ107XG4gIGNvbnN0IHBhdGhMaW5rID0gdGl0bGUucmVwbGFjZSgvXFxzL2csICctJyk7XG5cbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SW1hZ2VDYXJkV3JhcHBlciBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfT5cbiAgICAgIDxMaW5rXG4gICAgICAgIGhyZWY9e3tcbiAgICAgICAgICBwYXRobmFtZTogYCR7bGlua31gLFxuICAgICAgICAgIHF1ZXJ5OiB7IGNvdW50cnk6IGAke3BhdGhMaW5rfWAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtpbWFnZVNyY31cbiAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICB7dGl0bGUgJiYgPFRpdGxlPnt0aXRsZX08L1RpdGxlPn1cblxuICAgICAgICAgICAge21ldGEgJiYgPE1ldGE+e21ldGF9PC9NZXRhPn1cbiAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9JbWFnZUNhcmRXcmFwcGVyPlxuICApO1xufTtcblxuSW1hZ2VDYXJkTmV4dC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW1hZ2VTcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZXRhOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuSW1hZ2VDYXJkTmV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGxpbms6ICcjJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2FyZE5leHQ7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgSW1hZ2VDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gID4gYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICA+IGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB6LWluZGV4OiAyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmg0YFxuICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNZXRhID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHRleHQtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJkV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExvYWRlcldyYXBwZXIgZnJvbSAnLi9Mb2FkZXIuc3R5bGUnO1xuXG5jb25zdCBMb2FkZXIgPSAoeyBmaWxsLCBjbGFzc05hbWUgfSkgPT4ge1xuICAvLyBkZWZhdWx0IGNsYXNzTmFtZVxuICBjb25zdCBhZGRBbGxDbGFzc2VzID0gWydsb2FkZXInXTtcblxuICAvLyBhZGQgbmV3IGNsYXNzIHVzaW5nIGNsYXNzTmFtZSBwcm9wXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExvYWRlcldyYXBwZXIgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX0+XG4gICAgICA8c3ZnIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDAgMFwiPlxuICAgICAgICA8Y2lyY2xlIGZpbGw9e2ZpbGx9IHN0cm9rZT1cIm5vbmVcIiBjeD1cIjZcIiBjeT1cIjUwXCIgcj1cIjZcIj5cbiAgICAgICAgICA8YW5pbWF0ZVxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxuICAgICAgICAgICAgZHVyPVwiMXNcIlxuICAgICAgICAgICAgdmFsdWVzPVwiMDsxOzBcIlxuICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcbiAgICAgICAgICAgIGJlZ2luPVwiMC4xXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2NpcmNsZT5cbiAgICAgICAgPGNpcmNsZSBmaWxsPXtmaWxsfSBzdHJva2U9XCJub25lXCIgY3g9XCIyNlwiIGN5PVwiNTBcIiByPVwiNlwiPlxuICAgICAgICAgIDxhbmltYXRlXG4gICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXG4gICAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgICB2YWx1ZXM9XCIwOzE7MFwiXG4gICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxuICAgICAgICAgICAgYmVnaW49XCIwLjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvY2lyY2xlPlxuICAgICAgICA8Y2lyY2xlIGZpbGw9e2ZpbGx9IHN0cm9rZT1cIm5vbmVcIiBjeD1cIjQ2XCIgY3k9XCI1MFwiIHI9XCI2XCI+XG4gICAgICAgICAgPGFuaW1hdGVcbiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcbiAgICAgICAgICAgIGR1cj1cIjFzXCJcbiAgICAgICAgICAgIHZhbHVlcz1cIjA7MTswXCJcbiAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICBiZWdpbj1cIjAuM1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9jaXJjbGU+XG4gICAgICA8L3N2Zz5cbiAgICA8L0xvYWRlcldyYXBwZXI+XG4gICk7XG59O1xuXG5Mb2FkZXIucHJvcFR5cGVzID0ge1xuICAvKiogQ2xhc3NOYW1lIG9mIHRoZSBMb2FkZXIgY29tcG9uZW50LiAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIEFkZCBMb2FkZXIgY29sb3IgdXNpbmcgZmlsbCBwcm9wLiAqL1xuICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgZmlsbDogJyMwMDg0ODknLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IExvYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDUycHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcldyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wcyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoU2NyaXB0anMgfSBmcm9tICdyZWFjdC1nb29nbGUtbWFwcyc7XG5pbXBvcnQgU3RhbmRhbG9uZVNlYXJjaEJveCBmcm9tICdyZWFjdC1nb29nbGUtbWFwcy9saWIvY29tcG9uZW50cy9wbGFjZXMvU3RhbmRhbG9uZVNlYXJjaEJveCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuXG5jb25zdCBTZWFyY2hJbnB1dCA9IGNvbXBvc2UoXG4gIHdpdGhQcm9wcyh7XG4gICAgZ29vZ2xlTWFwVVJMOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfR09PR0xFX01BUF9BUElfS0VZLFxuICAgIGxvYWRpbmdFbGVtZW50OiA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19IC8+LFxuICAgIGNvbnRhaW5lckVsZW1lbnQ6IDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgNDAwcHhgIH19IC8+LFxuICB9KSxcbiAgd2l0aFNjcmlwdGpzXG4pKChwcm9wcykgPT4ge1xuICBjb25zdCB7IGdldGlucHV0dmFsdWUgfSA9IHByb3BzO1xuICBjb25zdCBbbG9jYXRpb25JbnB1dCwgc2V0TG9jYXRpb25JbnB1dF0gPSB1c2VTdGF0ZSh7XG4gICAgc2VhcmNoZWRMb2NhdGlvbjogJycsXG4gICAgc2VhcmNoZWRQbGFjZUFQSURhdGE6IFtdLFxuICB9KTtcbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09ICcxMycpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgc2V0TG9jYXRpb25JbnB1dCh7XG4gICAgICBzZWFyY2hlZExvY2F0aW9uOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IHJlZnMgPSB1c2VSZWYoe30pO1xuICBjb25zdCBvblBsYWNlc0NoYW5nZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxhY2VzID0gcmVmcy5jdXJyZW50LmdldFBsYWNlcygpO1xuICAgIHNldExvY2F0aW9uSW5wdXQoe1xuICAgICAgc2VhcmNoZWRMb2NhdGlvbjogcGxhY2VzICYmIHBsYWNlc1swXSAmJiBwbGFjZXNbMF0uZm9ybWF0dGVkX2FkZHJlc3MsXG4gICAgICBzZWFyY2hlZFBsYWNlQVBJRGF0YTogcGxhY2VzID8gcGxhY2VzIDogW10sXG4gICAgfSk7XG4gICAgZ2V0aW5wdXR2YWx1ZSh7XG4gICAgICBzZWFyY2hlZExvY2F0aW9uOiBwbGFjZXMgJiYgcGxhY2VzWzBdICYmIHBsYWNlc1swXS5mb3JtYXR0ZWRfYWRkcmVzcyxcbiAgICAgIHNlYXJjaGVkUGxhY2VBUElEYXRhOiBwbGFjZXMgPyBwbGFjZXMgOiBbXSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVPblByZXNzRW50ZXIgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09ICcxMycpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgc2V0TG9jYXRpb25JbnB1dCh7IHNlYXJjaGVkTG9jYXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICBnZXRpbnB1dHZhbHVlKGxvY2F0aW9uSW5wdXQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXBfYXV0b2NvbXBsZXRlXCI+XG4gICAgICA8U3RhbmRhbG9uZVNlYXJjaEJveCByZWY9e3JlZnN9IG9uUGxhY2VzQ2hhbmdlZD17b25QbGFjZXNDaGFuZ2VkfT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgdmFsdWU9e2xvY2F0aW9uSW5wdXQuc2VhcmNoZWRMb2NhdGlvbiB8fCAnJ31cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCDigJxUaGFpbGFuZCwgQXNpYeKAnVwiXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgb25QcmVzc0VudGVyPXtoYW5kbGVPblByZXNzRW50ZXJ9XG4gICAgICAgIC8+XG4gICAgICA8L1N0YW5kYWxvbmVTZWFyY2hCb3g+XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuY29uc3QgTWFwQXV0b0NvbXBsZXRlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdXBkYXRldmFsdWUgfSA9IHByb3BzO1xuICByZXR1cm4gPFNlYXJjaElucHV0IGdldGlucHV0dmFsdWU9e3VwZGF0ZXZhbHVlfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcEF1dG9Db21wbGV0ZTtcbiIsImV4cG9ydCBmdW5jdGlvbiBtYXBEYXRhSGVscGVyKGluZm9WYWx1ZSkge1xuICBjb25zdCB0ZW1wTWFwT2JqID0ge307XG4gIGNvbnN0IHRlbXBNYXBBcnJheSA9IFtdO1xuXG4gIGlmIChpbmZvVmFsdWUgJiYgaW5mb1ZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgIGluZm9WYWx1ZS5tYXAoXG4gICAgICAoe1xuICAgICAgICBwbGFjZV9pZCxcbiAgICAgICAgYWRkcmVzc19jb21wb25lbnRzLFxuICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzcyxcbiAgICAgICAgZ2VvbWV0cnk6IHsgbG9jYXRpb24gfSxcbiAgICAgIH0pID0+IHtcbiAgICAgICAgbGV0IGlkID0gJyc7XG4gICAgICAgIGxldCBsYXQgPSAnJztcbiAgICAgICAgbGV0IGxuZyA9ICcnO1xuICAgICAgICBsZXQgZm9ybWF0dGVkQWRkcmVzcyA9ICcnO1xuICAgICAgICBsZXQgY2l0eSA9ICcnO1xuICAgICAgICBsZXQgc3RhdGVfbG9uZyA9ICcnO1xuICAgICAgICBsZXQgc3RhdGVfc2hvcnQgPSAnJztcbiAgICAgICAgbGV0IHppcGNvZGUgPSAnJztcbiAgICAgICAgbGV0IGNvdW50cnlfbG9uZyA9ICcnO1xuICAgICAgICBsZXQgY291bnRyeV9zaG9ydCA9ICcnO1xuXG4gICAgICAgIGlkID0gcGxhY2VfaWQ7XG4gICAgICAgIGxhdCA9IGxvY2F0aW9uLmxhdCgpO1xuICAgICAgICBsbmcgPSBsb2NhdGlvbi5sbmcoKTtcbiAgICAgICAgZm9ybWF0dGVkQWRkcmVzcyA9IGZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICBpZiAoYWRkcmVzc19jb21wb25lbnRzKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRyZXNzX2NvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhZGRyZXNzX2NvbXBvbmVudHNbaV0udHlwZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoYWRkcmVzc19jb21wb25lbnRzW2ldLnR5cGVzWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbG9jYWxpdHknOlxuICAgICAgICAgICAgICAgICAgY2l0eSA9IGFkZHJlc3NfY29tcG9uZW50c1tpXS5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhZG1pbmlzdHJhdGl2ZV9hcmVhX2xldmVsXzEnOlxuICAgICAgICAgICAgICAgICAgc3RhdGVfbG9uZyA9IGFkZHJlc3NfY29tcG9uZW50c1tpXS5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgICBzdGF0ZV9zaG9ydCA9IGFkZHJlc3NfY29tcG9uZW50c1tpXS5zaG9ydF9uYW1lO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY291bnRyeSc6XG4gICAgICAgICAgICAgICAgICBjb3VudHJ5X2xvbmcgPSBhZGRyZXNzX2NvbXBvbmVudHNbaV0ubG9uZ19uYW1lO1xuICAgICAgICAgICAgICAgICAgY291bnRyeV9zaG9ydCA9IGFkZHJlc3NfY29tcG9uZW50c1tpXS5zaG9ydF9uYW1lO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncG9zdGFsX2NvZGUnOlxuICAgICAgICAgICAgICAgICAgemlwY29kZSA9IGFkZHJlc3NfY29tcG9uZW50c1tpXS5sb25nX25hbWU7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wTWFwT2JqLmlkID0gaWQ7XG4gICAgICAgIHRlbXBNYXBPYmoubGF0ID0gbGF0O1xuICAgICAgICB0ZW1wTWFwT2JqLmxuZyA9IGxuZztcbiAgICAgICAgdGVtcE1hcE9iai5mb3JtYXR0ZWRBZGRyZXNzID0gZm9ybWF0dGVkQWRkcmVzcztcbiAgICAgICAgdGVtcE1hcE9iai5jaXR5ID0gY2l0eTtcbiAgICAgICAgdGVtcE1hcE9iai5zdGF0ZV9zaG9ydCA9IHN0YXRlX3Nob3J0O1xuICAgICAgICB0ZW1wTWFwT2JqLnN0YXRlX2xvbmcgPSBzdGF0ZV9sb25nO1xuICAgICAgICB0ZW1wTWFwT2JqLnppcGNvZGUgPSB6aXBjb2RlO1xuICAgICAgICB0ZW1wTWFwT2JqLmNvdW50cnlfc2hvcnQgPSBjb3VudHJ5X3Nob3J0O1xuICAgICAgICB0ZW1wTWFwT2JqLmNvdW50cnlfbG9uZyA9IGNvdW50cnlfbG9uZztcbiAgICAgICAgdGVtcE1hcEFycmF5LnB1c2godGVtcE1hcE9iaik7XG4gICAgICAgIHJldHVybiB0ZW1wTWFwQXJyYXk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB0ZW1wTWFwQXJyYXk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEZpRXh0ZXJuYWxMaW5rIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9VSS9SYXRpbmcvUmF0aW5nJztcbmltcG9ydCBGYXZvdXJpdGUgZnJvbSAnY29tcG9uZW50cy9VSS9GYXZvcml0ZS9GYXZvcml0ZSc7XG5cbmltcG9ydCBHcmlkQ2FyZCBmcm9tICcuLi9HcmlkQ2FyZC9HcmlkQ2FyZCc7XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7XG4gICAgICBtYXg6IDMwMDAsXG4gICAgICBtaW46IDEwMjQsXG4gICAgfSxcbiAgICBpdGVtczogMSxcbiAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXI6IDQwLFxuICB9LFxuICBtb2JpbGU6IHtcbiAgICBicmVha3BvaW50OiB7XG4gICAgICBtYXg6IDQ2NCxcbiAgICAgIG1pbjogMCxcbiAgICB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlcjogMzAsXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIG1heDogMTAyNCxcbiAgICAgIG1pbjogNDY0LFxuICAgIH0sXG4gICAgaXRlbXM6IDEsXG4gICAgcGFyaXRpYWxWaXNpYmlsaXR5R3V0dGVyOiAzMCxcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Q2FyZCh7XG4gIHRpdGxlLFxuICByYXRpbmcsXG4gIGxvY2F0aW9uLFxuICBwcmljZSxcbiAgcmF0aW5nQ291bnQsXG4gIGdhbGxlcnksXG4gIHNsdWcsXG4gIGxpbmssXG4gIGRldmljZVR5cGUsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPEdyaWRDYXJkXG4gICAgICBmYXZvcml0ZT17XG4gICAgICAgIDxGYXZvdXJpdGVcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgfVxuICAgICAgbG9jYXRpb249e2xvY2F0aW9uLmZvcm1hdHRlZEFkZHJlc3N9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBwcmljZT17YCQke3ByaWNlfS9OaWdodCAtIEZyZWUgQ2FuY2VsbGF0aW9uYH1cbiAgICAgIHJhdGluZz17PFJhdGluZyByYXRpbmc9e3JhdGluZ30gcmF0aW5nQ291bnQ9e3JhdGluZ0NvdW50fSB0eXBlPVwiYnVsa1wiIC8+fVxuICAgICAgdmlld0RldGFpbHNCdG49e1xuICAgICAgICA8TGluayBocmVmPXtgJHtsaW5rfS9bc2x1Z11gfSBhcz17YCR7bGlua30vJHtzbHVnfWB9IHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8RmlFeHRlcm5hbExpbmsgLz4gVmlldyBEZXRhaWxzXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICB9XG4gICAgPlxuICAgICAgPENhcm91c2VsXG4gICAgICAgIHNzclxuICAgICAgICBhZGRpdGlvbmFsVHJhbnNmcm9tPXswfVxuICAgICAgICBhcnJvd3NcbiAgICAgICAgYXV0b1BsYXlTcGVlZD17MzAwMH1cbiAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJjb250YWluZXJcIlxuICAgICAgICBkb3RMaXN0Q2xhc3M9XCJcIlxuICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgZm9jdXNPblNlbGVjdD17ZmFsc2V9XG4gICAgICAgIGluZmluaXRlXG4gICAgICAgIGl0ZW1DbGFzcz1cIlwiXG4gICAgICAgIHJlbmRlckRvdHNPdXRzaWRlPXtmYWxzZX1cbiAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX1cbiAgICAgICAgc2hvd0RvdHM9e3RydWV9XG4gICAgICAgIHNsaWRlckNsYXNzPVwiXCJcbiAgICAgICAgc2xpZGVzVG9TbGlkZT17MX1cbiAgICAgID5cbiAgICAgICAge2dhbGxlcnkubWFwKCh7IHVybCwgdGl0bGUgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VybH1cbiAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9HcmlkQ2FyZD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRleHQgZnJvbSAnY29tcG9uZW50cy9VSS9UZXh0L1RleHQnO1xuaW1wb3J0IEJveCBmcm9tICdjb21wb25lbnRzL1VJL0JveC9Cb3gnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi4vUHJvZHVjdENhcmQvUHJvZHVjdENhcmQnO1xuY29uc3QgTG9hZE1vcmUgPSAoe1xuICBoYW5kbGVMb2FkTW9yZSxcbiAgc2hvd0J1dHRvbixcbiAgYnV0dG9uVGV4dCxcbiAgbG9hZGluZyxcbiAgbG9hZE1vcmVDb21wb25lbnQsXG4gIGxvYWRNb3JlU3R5bGUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgISFzaG93QnV0dG9uICYmIChcbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwibG9hZG1vcmVfd3JhcHBlclwiIHsuLi5sb2FkTW9yZVN0eWxlfT5cbiAgICAgICAge2xvYWRNb3JlQ29tcG9uZW50ID8gKFxuICAgICAgICAgIGxvYWRNb3JlQ29tcG9uZW50XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtsb2FkaW5nfSBvbkNsaWNrPXtoYW5kbGVMb2FkTW9yZX0+XG4gICAgICAgICAgICB7YnV0dG9uVGV4dCB8fCAnTG9hZCBNb3JlJ31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb25HcmlkKHtcbiAgZGF0YSA9IFtdLFxuICB0b3RhbEl0ZW0sXG4gIGxpbWl0LFxuICBjb2x1bW5XaWR0aCxcbiAgcGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgaGFuZGxlTG9hZE1vcmUsXG4gIGxvYWRNb3JlQ29tcG9uZW50LFxuICBwbGFjZWhvbGRlcixcbiAgbG9hZGluZyxcbiAgYnV0dG9uVGV4dCxcbiAgcm93U3R5bGUsXG4gIGNvbHVtblN0eWxlLFxuICBsb2FkTW9yZVN0eWxlLFxuICBsaW5rLFxufSkge1xuICBjb25zdCBuID0gbGltaXQgPyBOdW1iZXIobGltaXQpIDogMTtcbiAgY29uc3QgbGltaXRzID0gQXJyYXkobikuZmlsbCgwKTtcblxuICBsZXQgc2hvd0J1dHRvbiA9IGRhdGEubGVuZ3RoIDwgdG90YWxJdGVtO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwiZ3JpZF93cmFwcGVyXCIgey4uLnJvd1N0eWxlfT5cbiAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGhcbiAgICAgICAgICA/IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZF9jb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbldpZHRofVxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgey4uLmNvbHVtblN0eWxlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBsaW5rPXtsaW5rfSB7Li4uaXRlbX0gLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7bG9hZGluZyAmJlxuICAgICAgICAgIGxpbWl0cy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZF9jb2x1bW5cIlxuICAgICAgICAgICAgICB3aWR0aD17Y29sdW1uV2lkdGh9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgey4uLmNvbHVtblN0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGxhY2Vob2xkZXIgPyBwbGFjZWhvbGRlciA6IDxUZXh0IGNvbnRlbnQ9XCJMb2FkaW5nIC4uLlwiIC8+fVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICA8L0JveD5cblxuICAgICAge3Nob3dCdXR0b24gJiYgKFxuICAgICAgICA8TG9hZE1vcmVcbiAgICAgICAgICBzaG93QnV0dG9uPXtzaG93QnV0dG9ufVxuICAgICAgICAgIGhhbmRsZUxvYWRNb3JlPXtoYW5kbGVMb2FkTW9yZX1cbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgIGJ1dHRvblRleHQ9e2J1dHRvblRleHR9XG4gICAgICAgICAgbG9hZE1vcmVDb21wb25lbnQ9e2xvYWRNb3JlQ29tcG9uZW50fVxuICAgICAgICAgIGxvYWRNb3JlU3R5bGU9e2xvYWRNb3JlU3R5bGV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3BhZ2luYXRpb25Db21wb25lbnQgJiYgKFxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInBhZ2luYXRpb25fd3JhcHBlclwiPntwYWdpbmF0aW9uQ29tcG9uZW50fTwvQm94PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuU2VjdGlvbkdyaWQucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgdG90YWxJdGVtOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2x1bW5XaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgXSksXG4gIHBhZ2luYXRpb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50LFxuICBoYW5kbGVMb2FkTW9yZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvYWRNb3JlQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5lbGVtZW50LFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJ1dHRvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJvd1N0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjb2x1bW5TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgbG9hZE1vcmVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cblNlY3Rpb25HcmlkLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm93U3R5bGU6IHtcbiAgICBmbGV4Qm94OiB0cnVlLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgbXI6IFsnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTE1cHgnXSxcbiAgICBtbDogWyctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTVweCddLFxuICB9LFxuICBjb2x1bW5TdHlsZToge1xuICAgIHByOiBbJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxNXB4J10sXG4gICAgcGw6IFsnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzE1cHgnXSxcbiAgfSxcbiAgbG9hZE1vcmVTdHlsZToge1xuICAgIGZsZXhCb3g6IHRydWUsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG10OiAnMXJlbScsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWN0aW9uVGl0bGVFeHRlbmRlZCBmcm9tICdjb21wb25lbnRzL1VJL1RpdGxlL1RpdGxlJztcbmltcG9ydCBTZWN0aW9uVGl0bGVXcmFwcGVyIGZyb20gJy4vU2VjdGlvblRpdGxlLnN0eWxlJztcblxuY29uc3QgU2VjdGlvblRpdGxlID0gKHsgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uVGl0bGVXcmFwcGVyPlxuICAgICAgPFNlY3Rpb25UaXRsZUV4dGVuZGVkIHsuLi5wcm9wc30gLz5cbiAgICA8L1NlY3Rpb25UaXRsZVdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uVGl0bGU7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgU2VjdGlvblRpdGxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGgyLFxuICBhIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICBoMiB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgfVxuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uVGl0bGVXcmFwcGVyO1xuIiwiLyoqIFRoaXMgaXMgb3VyIGJhc2UgY29tcG9uZW50IGV2ZXJ5IGNvbXBvbmVudHMgbXVzdCBiZSBleHRlbmQgaXQuICovXG5pbXBvcnQge1xuICBzcGFjZSxcbiAgYm9yZGVycyxcbiAgYm9yZGVyQ29sb3IsXG4gIHdpZHRoLFxuICBtaW5XaWR0aCxcbiAgbWF4V2lkdGgsXG4gIGhlaWdodCxcbiAgbWluSGVpZ2h0LFxuICBtYXhIZWlnaHQsXG4gIGRpc3BsYXksXG4gIGZvbnRTaXplLFxuICBmbGV4LFxuICBvcmRlcixcbiAgYWxpZ25TZWxmLFxuICBjb2xvcixcbiAgY29tcG9zZSxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZWQgPSBrZXkgPT4gcHJvcHMgPT4gcHJvcHMudGhlbWVba2V5XTtcblxuZXhwb3J0IGNvbnN0IGJhc2UgPSBjb21wb3NlKFxuICAoKSA9PiAoeyBib3hTaXppbmc6ICdib3JkZXItYm94JyB9KSxcbiAgc3BhY2UsXG4gIHdpZHRoLFxuICBtaW5XaWR0aCxcbiAgbWF4V2lkdGgsXG4gIGhlaWdodCxcbiAgbWluSGVpZ2h0LFxuICBtYXhIZWlnaHQsXG4gIGZvbnRTaXplLFxuICBjb2xvcixcbiAgZmxleCxcbiAgb3JkZXIsXG4gIGFsaWduU2VsZixcbiAgYm9yZGVycyxcbiAgYm9yZGVyQ29sb3IsXG4gIGRpc3BsYXlcbik7XG5cbmJhc2UucHJvcFR5cGVzID0ge1xuICAuLi5kaXNwbGF5LnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi5ib3JkZXJzLnByb3BUeXBlcyxcbiAgLi4uYm9yZGVyQ29sb3IucHJvcFR5cGVzLFxuICAuLi53aWR0aC5wcm9wVHlwZXMsXG4gIC4uLmhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLmZvbnRTaXplLnByb3BUeXBlcyxcbiAgLi4uY29sb3IucHJvcFR5cGVzLFxuICAuLi5mbGV4LnByb3BUeXBlcyxcbiAgLi4ub3JkZXIucHJvcFR5cGVzLFxuICAuLi5hbGlnblNlbGYucHJvcFR5cGVzLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBmbGV4V3JhcCxcbiAgZmxleERpcmVjdGlvbixcbiAgYWxpZ25JdGVtcyxcbiAganVzdGlmeUNvbnRlbnQsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vQmFzZSc7XG5cbmNvbnN0IEJveFdyYXBwZXIgPSBzdHlsZWQoJ2RpdicpKFxuICBiYXNlLFxuICB0aGVtZWQoJ0JveCcpLFxuICBwcm9wcyA9PlxuICAgIHByb3BzLmZsZXhCb3ggJiZcbiAgICBjc3MoXG4gICAgICB7IGRpc3BsYXk6ICdmbGV4JyB9LFxuICAgICAgZmxleFdyYXAsXG4gICAgICBmbGV4RGlyZWN0aW9uLFxuICAgICAgYWxpZ25JdGVtcyxcbiAgICAgIGp1c3RpZnlDb250ZW50LFxuICAgICAgdGhlbWVkKCdGbGV4Qm94JylcbiAgICApXG4pO1xuXG5jb25zdCBCb3ggPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4gKFxuICA8Qm94V3JhcHBlciB7Li4ucHJvcHN9PntjaGlsZHJlbn08L0JveFdyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCb3g7XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gIC8qKiBVc2luZyB0aGlzIHByb3BzIHdlIGNhbiBjb252ZXJ0IG91ciBCb3ggQ29tcG9uZW50IHRvIGEgRmxleCBDb250YWluZXIgb3IgQ29tcG9uZW50ICovXG4gIGZsZXhCb3g6IFByb3BUeXBlcy5ib29sLFxuICBhczogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnZGl2JyxcbiAgICAnYXJ0aWNsZScsXG4gICAgJ3NlY3Rpb24nLFxuICAgICdhZGRyZXNzJyxcbiAgICAnaGVhZGVyJyxcbiAgICAnZm9vdGVyJyxcbiAgICAnbmF2JyxcbiAgICAnbWFpbicsXG4gIF0pLFxuICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGZvbnRTaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBmbGV4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgb3JkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBhbGlnblNlbGY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgYm9yZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgYm9yZGVyVG9wOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgYm9yZGVyUmlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXJCb3R0b206IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXJMZWZ0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgYm9yZGVyQ29sb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxufTtcblxuQm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdkaXYnLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnRhaW5lcldyYXBwZXIgZnJvbSAnLi9Db250YWluZXIuc3R5bGUnO1xuXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBmdWxsV2lkdGgsIG5vR3V0dGVyLCBmbHVpZCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcldyYXBwZXJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgZnVsbFdpZHRoPXtmdWxsV2lkdGh9XG4gICAgICBub0d1dHRlcj17bm9HdXR0ZXJ9XG4gICAgICBmbHVpZD17Zmx1aWR9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyV3JhcHBlcj5cbiAgKTtcbn07XG5cbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm9HdXR0ZXI6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENvbnRhaW5lcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5mdWxsV2lkdGggJiZcbiAgICBjc3NgXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGB9O1xuICAkeyhwcm9wcykgPT5cbiAgICAocHJvcHMubm9HdXR0ZXIgJiZcbiAgICAgIGNzc2BcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgYCkgfHxcbiAgICBjc3NgXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgIH1cbiAgICBgfTtcblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5mbHVpZCAmJlxuICAgIGNzc2BcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICBtYXgtd2lkdGg6IDE5MjBweCAhaW1wb3J0YW50O1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQxcHgpIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xuICAgICAgfVxuICAgIGB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIG1heC13aWR0aDogOTcwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcldyYXBwZXI7XG4iLCJpbXBvcnQgJ3JlYWN0LWRhdGVzL2luaXRpYWxpemUnO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSAncmVhY3QtZGF0ZXMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSZWFjdERhdGVzU3R5bGVXcmFwcGVyIH0gZnJvbSAnLi9SZWFjdERhdGVzLnN0eWxlJztcbi8qXG4gKiBGb3IgTG9jYWxpemF0aW9uIGVuYWJsZSB0aGlzIGNvZGUgW2V4YW1wbGUgOiBGcmVuY2ggbGFuZ3VhZ2UgYXMgXCJmclwiXVxuICovXG4vLyBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG4vLyBpbXBvcnQgJ21vbWVudC9sb2NhbGUvZnInO1xuXG5jbGFzcyBEYXRlUmFuZ2VQaWNrZXJCb3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBzZXBhcmF0b3IgPVxuICAgICAgdGhpcy5wcm9wcy5pdGVtICYmIHRoaXMucHJvcHMuaXRlbS5zZXBhcmF0b3JcbiAgICAgICAgPyB0aGlzLnByb3BzLml0ZW0uc2VwYXJhdG9yXG4gICAgICAgIDogJy8nO1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPVxuICAgICAgdGhpcy5wcm9wcy5pdGVtICYmIHRoaXMucHJvcHMuaXRlbS5mb3JtYXRcbiAgICAgICAgPyB0aGlzLnByb3BzLml0ZW0uZm9ybWF0XG4gICAgICAgIDogJ2xsbGwnO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkSW5wdXQ6IG51bGwsXG4gICAgICBzdGFydERhdGU6IHRoaXMucHJvcHMuc3RhcnREYXRlID8gdGhpcy5wcm9wcy5zdGFydERhdGUgOiBudWxsLFxuICAgICAgZW5kRGF0ZTogdGhpcy5wcm9wcy5lbmREYXRlID8gdGhpcy5wcm9wcy5lbmREYXRlIDogbnVsbCxcbiAgICAgIGRhdGVGb3JtYXQsXG4gICAgICBzZXBhcmF0b3IsXG4gICAgfTtcbiAgICB0aGlzLm9uRGF0ZUNoYW5nZUZ1bmMgPSB0aGlzLm9uRGF0ZUNoYW5nZUZ1bmMuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXNDaGFuZ2VGdW5jID0gdGhpcy5vbkZvY3VzQ2hhbmdlRnVuYy5iaW5kKHRoaXMpO1xuICAgIC8qXG4gICAgICogRm9yIExvY2FsaXphdGlvbiBlbmFibGUgdGhpcyBjb2RlIFtleGFtcGxlIDogRnJlbmNoIGxhbmd1YWdlIGFzIFwiZnJcIl1cbiAgICAgKi9cbiAgICAvLyBtb21lbnQubG9jYWxlKCdmcicpO1xuICB9XG5cbiAgb25EYXRlQ2hhbmdlRnVuYyA9ICh7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXRlRm9ybWF0IH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGUsIGVuZERhdGUgfSk7XG4gICAgaWYgKHN0YXJ0RGF0ZSAhPT0gbnVsbCAmJiBlbmREYXRlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlYXJjaERhdGEoe1xuICAgICAgICBzZXRTdGFydERhdGU6IHN0YXJ0RGF0ZS5mb3JtYXQoZGF0ZUZvcm1hdCksXG4gICAgICAgIHNldEVuZERhdGU6IGVuZERhdGUuZm9ybWF0KGRhdGVGb3JtYXQpLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uRm9jdXNDaGFuZ2VGdW5jID0gKGZvY3VzZWRJbnB1dCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZElucHV0IH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvY3VzZWRJbnB1dCwgc3RhcnREYXRlLCBlbmREYXRlIH0gPSB0aGlzLnN0YXRlO1xuICAgIC8vIERhdGVSYW5nZVBpY2tlckJveCBwcm9wcyBsaXN0XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3RhcnREYXRlSWQsXG4gICAgICBlbmREYXRlSWQsXG4gICAgICBzdGFydERhdGVQbGFjZWhvbGRlclRleHQsXG4gICAgICBlbmREYXRlUGxhY2Vob2xkZXJUZXh0LFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzaG93Q2xlYXJEYXRlcyxcbiAgICAgIGlzUlRMLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgICBhbmNob3JEaXJlY3Rpb24sXG4gICAgICB3aXRoUG9ydGFsLFxuICAgICAgd2l0aEZ1bGxTY3JlZW5Qb3J0YWwsXG4gICAgICBzbWFsbCxcbiAgICAgIGJsb2NrLFxuICAgICAgbnVtYmVyT2ZNb250aHMsXG4gICAgICByZWd1bGFyLFxuICAgICAgbm9Cb3JkZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheSAqKioqKioqKioqKioqKlxuICAgIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ2RhdGVfcGlja2VyJ107XG4gICAgLy8gY2xhc3NOYW1lIHByb3AgY2hlY2tpbmcgKioqKioqKioqKioqKipcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICAvLyBSZWFjdC1EYXRlcyBEYXRlUmFuZ2VQaWNrZXIgUHJvcHMgTGlzdFxuICAgIGNvbnN0IGRlZmF1bHRDYWxlbmRlclByb3BzID0ge1xuICAgICAgc3RhcnREYXRlSWQ6IHN0YXJ0RGF0ZUlkID8gc3RhcnREYXRlSWQgOiAnc3RhcnRfdW5pcXVlX2lkJyxcbiAgICAgIGVuZERhdGVJZDogZW5kRGF0ZUlkID8gZW5kRGF0ZUlkIDogJ2VuZF9kYXRlX3VuaXF1ZV9pZCcsXG4gICAgICBzdGFydERhdGUsXG4gICAgICBlbmREYXRlLFxuICAgICAgZm9jdXNlZElucHV0LFxuICAgICAgb25Gb2N1c0NoYW5nZTogdGhpcy5vbkZvY3VzQ2hhbmdlRnVuYyxcbiAgICAgIG9uRGF0ZXNDaGFuZ2U6IHRoaXMub25EYXRlQ2hhbmdlRnVuYyxcbiAgICAgIHN0YXJ0RGF0ZVBsYWNlaG9sZGVyVGV4dCxcbiAgICAgIGVuZERhdGVQbGFjZWhvbGRlclRleHQsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlzUlRMLFxuICAgICAgc2hvd0NsZWFyRGF0ZXM6IHNob3dDbGVhckRhdGVzID8gc2hvd0NsZWFyRGF0ZXMgOiBmYWxzZSxcbiAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgYW5jaG9yRGlyZWN0aW9uLFxuICAgICAgd2l0aFBvcnRhbCxcbiAgICAgIHdpdGhGdWxsU2NyZWVuUG9ydGFsLFxuICAgICAgc21hbGwsXG4gICAgICBudW1iZXJPZk1vbnRoczogbnVtYmVyT2ZNb250aHMgPyBudW1iZXJPZk1vbnRocyA6IDIsXG4gICAgICBibG9jayxcbiAgICAgIHJlZ3VsYXIsXG4gICAgICBub0JvcmRlcixcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdERhdGVzU3R5bGVXcmFwcGVyIGNsYXNzTmFtZT17YWRkQWxsQ2xhc3Nlcy5qb2luKCcgJyl9PlxuICAgICAgICA8RGF0ZVJhbmdlUGlja2VyIHsuLi5kZWZhdWx0Q2FsZW5kZXJQcm9wc30gLz5cbiAgICAgIDwvUmVhY3REYXRlc1N0eWxlV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG5cbkRhdGVSYW5nZVBpY2tlckJveC5wcm9wVHlwZXMgPSB7XG4gIC8qKiBzdGFydERhdGVJZCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgc3RhcnREYXRlSWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqIGVuZERhdGVJZCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgZW5kRGF0ZUlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsIC8vXG4gIC8qKiBzdGFydERhdGVQbGFjZWhvbGRlclRleHQgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIHN0YXJ0RGF0ZVBsYWNlaG9sZGVyVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIGVuZERhdGVQbGFjZWhvbGRlclRleHQgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIGVuZERhdGVQbGFjZWhvbGRlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKiBkaXNhYmxlZCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5vbmVPZihbJ1NUQVJUX0RBVEUnLCAnRU5EX0RBVEUnXSksXG4gIF0pLFxuXG4gIC8qKiBzaG93Q2xlYXJEYXRlcyBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgc2hvd0NsZWFyRGF0ZXM6IFByb3BUeXBlcy5ib29sLFxuICAvKiogaXNSVEwgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIGlzUlRMOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIG9yaWVudGF0aW9uIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKSxcbiAgLyoqIGFuY2hvckRpcmVjdGlvbiBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgYW5jaG9yRGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuICAvKiogd2l0aFBvcnRhbCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgd2l0aFBvcnRhbDogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiB3aXRoRnVsbFNjcmVlblBvcnRhbCBvZiB0aGUgZGF0ZS1waWNrZXIgZmllbGQgKi9cbiAgd2l0aEZ1bGxTY3JlZW5Qb3J0YWw6IFByb3BUeXBlcy5ib29sLFxuICAvKiogc21hbGwgb2YgdGhlIGRhdGUtcGlja2VyIGZpZWxkICovXG4gIHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIG51bWJlck9mTW9udGhzIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBudW1iZXJPZk1vbnRoczogUHJvcFR5cGVzLm51bWJlcixcbiAgLyoqIGJsb2NrIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBibG9jazogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiByZWd1bGFyIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICByZWd1bGFyOiBQcm9wVHlwZXMuYm9vbCxcbiAgLyoqIG5vQm9yZGVyIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCAqL1xuICBub0JvcmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIC8qKiB1cGRhdGVTZWFyY2hEYXRhIG9mIHRoZSBkYXRlLXBpY2tlciBmaWVsZCB0byBzZW5kIGNvbXBvbmVudCBkYXRhIHRvIHBhcmVudCBjb21wb25lbnQgKi9cbiAgdXBkYXRlU2VhcmNoRGF0YTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlUmFuZ2VQaWNrZXJCb3g7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBXaXRoRGlyZWN0aW9uIGZyb20gJ2xpYnJhcnkvaGVscGVycy9ydGwnO1xuXG5jb25zdCBSZWFjdERhdGVzU3R5bGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIC5hbnQtZm9ybS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgIC5hbnQtZm9ybS1pdGVtLWxhYmVsIHtcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgUmVhY3REYXRlV3JhcHBlciA9IENvbXBvbmVudE5hbWUgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAuaXNvUmVhY3REYXRlIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgLkRhdGVJbnB1dF9fZGlzcGxheS10ZXh0LS1mb2N1c2VkIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAuQ2FsZW5kYXJEYXktLXNlbGVjdGVkLXN0YXJ0LFxuICAgIC5DYWxlbmRhckRheS0tc2VsZWN0ZWQtZW5kLFxuICAgIC5DYWxlbmRhckRheS0tc2VsZWN0ZWQge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLkNhbGVuZGFyRGF5LS1zZWxlY3RlZC1zcGFuIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5DYWxlbmRhckRheS0taG92ZXJlZC1zcGFuLFxuICAgIC5DYWxlbmRhckRheS0tYWZ0ZXItaG92ZXJlZC1zdGFydCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuRGF5UGlja2VyS2V5Ym9hcmRTaG9ydGN1dHNfX3Nob3ctLWJvdHRvbS1yaWdodCB7XG4gICAgICBib3JkZXItdG9wOiAyNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgLkRheVBpY2tlci0taG9yaXpvbnRhbCB7XG4gICAgICAuRGF5UGlja2VyTmF2aWdhdGlvbi0taG9yaXpvbnRhbCB7XG4gICAgICAgIC5EYXlQaWNrZXJOYXZpZ2F0aW9uX19wcmV2LFxuICAgICAgICAuRGF5UGlja2VyTmF2aWdhdGlvbl9fbmV4dCB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnaW5oZXJpdCd9O1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06ICR7cHJvcHMgPT5cbiAgICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyb3RhdGUoMTgwZGVnKScgOiAnaW5oZXJpdCd9O1xuICAgICAgICAgIHRyYW5zZm9ybTogJHtwcm9wcyA9PlxuICAgICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdpbmhlcml0J307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXQge1xuICAgICAgLkRhdGVSYW5nZVBpY2tlcklucHV0X19hcnJvdyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdpbmhlcml0J307XG4gICAgICAgIC1tcy10cmFuc2Zvcm06ICR7cHJvcHMgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncm90YXRlKDE4MGRlZyknIDogJ2luaGVyaXQnfTtcbiAgICAgICAgdHJhbnNmb3JtOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JvdGF0ZSgxODBkZWcpJyA6ICdpbmhlcml0J307XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBSZWFjdERhdGVzV3JhcHBlciA9IFdpdGhEaXJlY3Rpb24oUmVhY3REYXRlV3JhcHBlcik7XG5cbmV4cG9ydCB7IFJlYWN0RGF0ZXNTdHlsZVdyYXBwZXIsIFJlYWN0RGF0ZXNXcmFwcGVyIH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSAnLi91c2VUb2dnbGUnO1xuaW1wb3J0IEZhdm9yaXRlV3JhcHBlciBmcm9tICcuL0Zhdm9yaXRlLnN0eWxlJztcblxuY29uc3QgRmF2b3JpdGUgPSAoeyBjbGFzc05hbWUsIGNvbnRlbnQsIG9uQ2xpY2sgfSkgPT4ge1xuICAvLyB1c2UgdG9nZ2xlIGhvb2tzXG4gIGNvbnN0IFt0b2dnbGVWYWx1ZSwgdG9nZ2xlSGFuZGxlcl0gPSB1c2VUb2dnbGUoZmFsc2UpO1xuXG4gIC8vIEFkZCBhbGwgY2xhc3NzIHRvIGFuIGFycmF5XG4gIGNvbnN0IGFkZEFsbENsYXNzID0gWydmYXZvcml0ZSddO1xuXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzcy5wdXNoKGNsYXNzTmFtZSk7XG4gIH1cblxuICBjb25zdCBoYW5kZWxDbGljayA9IGV2ZW50ID0+IHtcbiAgICB0b2dnbGVIYW5kbGVyKCk7XG4gICAgb25DbGljayghdG9nZ2xlVmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZhdm9yaXRlV3JhcHBlclxuICAgICAgb25DbGljaz17aGFuZGVsQ2xpY2t9XG4gICAgICBjbGFzc05hbWU9e2Ake2FkZEFsbENsYXNzLmpvaW4oJyAnKX0gJHt0b2dnbGVWYWx1ZSA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICA+XG4gICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDE4LjY0IDE4LjIzMlwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGQ9XCJNNjAuMTYsNTZoLS4wNGE0LjU1MSw0LjU1MSwwLDAsMC0zLjgsMi4wOEE0LjU1MSw0LjU1MSwwLDAsMCw1Mi41Miw1NmgtLjA0QTQuNTIyLDQuNTIyLDAsMCwwLDQ4LDYwLjUyYTkuNzM3LDkuNzM3LDAsMCwwLDEuOTEyLDUuMzA4QTMzLjUwNiwzMy41MDYsMCwwLDAsNTYuMzIsNzJhMzMuNTA2LDMzLjUwNiwwLDAsMCw2LjQwOC02LjE3MkE5LjczNyw5LjczNywwLDAsMCw2NC42NCw2MC41Miw0LjUyMiw0LjUyMiwwLDAsMCw2MC4xNiw1NlpcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDcgLTU1KVwiXG4gICAgICAgIC8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxzcGFuPntjb250ZW50fTwvc3Bhbj5cbiAgICA8L0Zhdm9yaXRlV3JhcHBlcj5cbiAgKTtcbn07XG5cbkZhdm9yaXRlLnByb3BUeXBlcyA9IHtcbiAgLyoqIENsYXNzTmFtZSBvZiB0aGUgRmF2b3JpdGUgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogY29udGVudCBvZiB0aGUgRmF2b3JpdGUgKi9cbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYC5cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuRmF2b3JpdGUuZGVmYXVsdFByb3BzID0ge1xuICBvbkNsaWNrOiAoKSA9PiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcbmNvbnN0IGFkZEFuaW1hdGlvbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjM0KSByb3RhdGVZKDkwZGVnKTtcbiAgfVxuYDtcblxuY29uc3QgcmVtb3ZlQW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjM0KSByb3RhdGVZKDkwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWSgwKTtcbiAgfVxuYDtcblxuY29uc3QgQWRkQW5pbWF0aW9uID0gY3NzYFxuICBhbmltYXRpb246ICR7YWRkQW5pbWF0aW9ufSAwLjRzIGN1YmljLWJlemllcigwLjM4LCAwLjcsIDAuNiwgMC4yOSk7XG5gO1xuXG5jb25zdCBSZW1vdmVBbmltYXRpb24gPSBjc3NgXG4gIGFuaW1hdGlvbjogJHtyZW1vdmVBbmltYXRpb259IDAuNTVzIGN1YmljLWJlemllcigwLjM4LCAwLjcsIDAuNiwgMC4yOSk7XG5gO1xuXG5jb25zdCBGYXZvcml0ZVdyYXBwZXIgPSBzdHlsZWQuYnV0dG9uYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgICR7UmVtb3ZlQW5pbWF0aW9ufVxuICAgIHBhdGgge1xuICAgICAgZmlsbDogJHt0aGVtZUdldCgnY29sb3IuNScsICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyl9O1xuICAgICAgc3Ryb2tlOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICAgIHRyYW5zaXRpb246IGZpbGwgMXMgZWFzZTtcbiAgICB9XG4gIH1cblxuICAmLmFjdGl2ZSB7XG4gICAgc3ZnIHtcbiAgICAgICR7QWRkQW5pbWF0aW9ufTtcbiAgICAgIHBhdGgge1xuICAgICAgICBmaWxsOiAke3RoZW1lR2V0KCdjb2xvci40JywgJyNGQzVDNjMnKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZVdyYXBwZXI7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZVRvZ2dsZSA9IGluaXRpYWxWYWx1ZSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlKTtcbiAgY29uc3QgdG9nZ2xlciA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFZhbHVlKHZhbHVlID0+ICF2YWx1ZSksIFtdKTtcbiAgcmV0dXJuIFt2YWx1ZSwgdG9nZ2xlcl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUb2dnbGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR2xpZGUgZnJvbSAnQGdsaWRlanMvZ2xpZGUnO1xuaW1wb3J0IEdsaWRlV3JhcHBlciwge1xuICBHbGlkZVNsaWRlV3JhcHBlcixcbiAgQnV0dG9uQ29udHJvbFdyYXBwZXIsXG4gIEJ1dHRvbldyYXBwZXIsXG4gIEJ1bGxldENvbnRyb2xXcmFwcGVyLFxuICBCdWxsZXRCdXR0b24sXG4gIERlZmF1bHRCdG4sXG59IGZyb20gJy4vR2xpZGVDYXJvdXNlbC5zdHlsZSc7XG5cbmNvbnN0IEdsaWRlQ2Fyb3VzZWwgPSAoe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICBvcHRpb25zLFxuICBjb250cm9scyxcbiAgcHJldkJ1dHRvbixcbiAgbmV4dEJ1dHRvbixcbiAgYnVsbGV0cyxcbiAgbnVtYmVyT2ZCdWxsZXRzLFxuICBjYXJvdXNlbFNlbGVjdG9yLFxufSkgPT4ge1xuICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheS5cbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsnZ2xpZGUnXTtcblxuICAvLyBjbGFzc05hbWUgcHJvcCBjaGVja2luZy5cbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICB9XG5cbiAgLy8gbnVtYmVyIG9mIGJ1bGxldHMgbG9vcC5cbiAgY29uc3QgdG90YWxCdWxsZXRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZCdWxsZXRzOyBpKyspIHtcbiAgICB0b3RhbEJ1bGxldHMucHVzaChpKTtcbiAgfVxuXG4gIC8vIExvYWQgZ2xpZGUuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2xpZGUgPSBuZXcgR2xpZGUoXG4gICAgICBjYXJvdXNlbFNlbGVjdG9yID8gYCMke2Nhcm91c2VsU2VsZWN0b3J9YCA6ICcjZ2xpZGUnLFxuICAgICAge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgfVxuICAgICk7XG4gICAgZ2xpZGUubW91bnQoKTtcbiAgfSwgW2Nhcm91c2VsU2VsZWN0b3IsIG9wdGlvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxHbGlkZVdyYXBwZXJcbiAgICAgIGNsYXNzTmFtZT17YWRkQWxsQ2xhc3Nlcy5qb2luKCcgJyl9XG4gICAgICBpZD17Y2Fyb3VzZWxTZWxlY3RvciB8fCAnZ2xpZGUnfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xpZGVfX3RyYWNrXCIgZGF0YS1nbGlkZS1lbD1cInRyYWNrXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJnbGlkZV9fc2xpZGVzXCI+e2NoaWxkcmVufTwvdWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qKiBpZiBjb250cm9scyBwcm9wIHRydWUgdGhlbiBzaG93IGNvbnRyb2xzIG5hdi4gKi99XG4gICAgICB7Y29udHJvbHMgJiYgKFxuICAgICAgICA8QnV0dG9uQ29udHJvbFdyYXBwZXJcbiAgICAgICAgICBjbGFzc05hbWU9XCJnbGlkZV9fY29udHJvbHNcIlxuICAgICAgICAgIGRhdGEtZ2xpZGUtZWw9XCJjb250cm9sc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uV3JhcHBlciBjbGFzc05hbWU9XCJnbGlkZV9fcHJldi0tYXJlYVwiIGRhdGEtZ2xpZGUtZGlyPVwiPFwiPlxuICAgICAgICAgICAge3ByZXZCdXR0b24gPyBwcmV2QnV0dG9uIDogPERlZmF1bHRCdG4+UHJldjwvRGVmYXVsdEJ0bj59XG4gICAgICAgICAgPC9CdXR0b25XcmFwcGVyPlxuICAgICAgICAgIDxCdXR0b25XcmFwcGVyIGNsYXNzTmFtZT1cImdsaWRlX19uZXh0LS1hcmVhXCIgZGF0YS1nbGlkZS1kaXI9XCI+XCI+XG4gICAgICAgICAgICB7bmV4dEJ1dHRvbiA/IG5leHRCdXR0b24gOiA8RGVmYXVsdEJ0bj5OZXh0PC9EZWZhdWx0QnRuPn1cbiAgICAgICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgICAgIDwvQnV0dG9uQ29udHJvbFdyYXBwZXI+XG4gICAgICApfVxuXG4gICAgICB7LyoqIGlmIGJ1bGxldHMgcHJvcCB0cnVlIHRoZW4gc2hvdyBidWxsZXRzIG5hdi4gKi99XG4gICAgICB7YnVsbGV0cyAmJiAoXG4gICAgICAgIDxCdWxsZXRDb250cm9sV3JhcHBlclxuICAgICAgICAgIGNsYXNzTmFtZT1cImdsaWRlX19idWxsZXRzXCJcbiAgICAgICAgICBkYXRhLWdsaWRlLWVsPVwiY29udHJvbHNbbmF2XVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICB7dG90YWxCdWxsZXRzLm1hcCgoaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPEJ1bGxldEJ1dHRvblxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2xpZGVfX2J1bGxldFwiXG4gICAgICAgICAgICAgICAgZGF0YS1nbGlkZS1kaXI9e2A9JHtpbmRleH1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgPC9CdWxsZXRDb250cm9sV3JhcHBlcj5cbiAgICAgICl9XG4gICAgPC9HbGlkZVdyYXBwZXI+XG4gICk7XG59O1xuXG4vLyBHbGlkZSBTbGlkZSB3cmFwcGVyIGNvbXBvbmVudC5cbmNvbnN0IEdsaWRlU2xpZGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEdsaWRlU2xpZGVXcmFwcGVyIGNsYXNzTmFtZT1cImdsaWRlX19zbGlkZVwiPntjaGlsZHJlbn08L0dsaWRlU2xpZGVXcmFwcGVyPlxuICApO1xufTtcblxuR2xpZGVDYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG4gIC8qKiBjbGFzc05hbWUgb2YgdGhlIEdsaWRlQ2Fyb3VzZWwuICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQ2hpbGRyZW4uICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKiogWW91IGNhbiBhZGQgeW91ciBjdXN0b20gZ2xpZCBvcHRpb25zIHVzaW5nIHRoaXMgcHJvcC4gKi9cbiAgb3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKiogSGlkZSB8fCBzaG93IGNvbnRyb2xzIG5hdi4gKi9cbiAgY29udHJvbHM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBIaWRlIHx8IHNob3cgYnVsbGV0cyBuYXYuICovXG4gIGJ1bGxldHM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBUaGlzIHByb3Agb25seSB0YWtlIHlvdXIgc2xpZGVyIC8gY2Fyb3VzZWwgLyB0ZXN0aW1vbmlhbHMgZGF0YSBsZW5ndGguIFtOb3RlOiBpZiBcImJ1bGxldHNcIiBwcm9wcyBpcyBzZXQgVFJVRSwgdGhlbiBcIm51bWJlck9mQnVsbGV0c1wiIG11c3QgYmUgYWRkZWRdICovXG4gIG51bWJlck9mQnVsbGV0czogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogU2V0IHByZXZpb3VzIGJ1dHRvbiBmb3IgZ2xpZGUgY2Fyb3VzZWwuICovXG4gIHByZXZCdXR0b246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcblxuICAvKiogU2V0IG5leHQgYnV0dG9uIGZvciBnbGlkZSBjYXJvdXNlbC4gKi9cbiAgbmV4dEJ1dHRvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxufTtcblxuR2xpZGVTbGlkZS5wcm9wVHlwZXMgPSB7XG4gIC8qKiBDaGlsZHJlbi4gKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxufTtcblxuLy8gR2xpZGVDYXJvdXNlbCBkZWZhdWx0IHByb3BzLlxuR2xpZGVDYXJvdXNlbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbnRyb2xzOiB0cnVlLFxufTtcblxuZXhwb3J0IHsgR2xpZGVTbGlkZSB9O1xuXG5leHBvcnQgZGVmYXVsdCBHbGlkZUNhcm91c2VsO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEdsaWRlIHdyYXBwZXIgc3R5bGVcbmNvbnN0IEdsaWRlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIC5nbGlkZV9fc2xpZGVzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5nbGlkZV9fY29udHJvbHMge1xuICAgIC5nbGlkZV9fcHJldi0tYXJlYSxcbiAgICAuZ2xpZGVfX25leHQtLWFyZWEge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuYDtcblxuLy8gR2xpZGUgc2xpZGUgd3JhcHBlciBzdHlsZVxuY29uc3QgR2xpZGVTbGlkZVdyYXBwZXIgPSBzdHlsZWQubGlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbi8vIEJ1dHRvbiB3cmFwcGVyIHN0eWxlXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYDtcblxuLy8gQnV0dG9uQ29udHJvbFdyYXBwZXIgc3R5bGVcbmNvbnN0IEJ1dHRvbkNvbnRyb2xXcmFwcGVyID0gc3R5bGVkLmRpdmBgO1xuXG4vLyBCdWxsZXRDb250cm9sV3JhcHBlciBzdHlsZVxuY29uc3QgQnVsbGV0Q29udHJvbFdyYXBwZXIgPSBzdHlsZWQuZGl2YGA7XG5cbi8vIEJ1bGxldEJ1dHRvbiBzdHlsZVxuY29uc3QgQnVsbGV0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDRweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY7XG5cbiAgJjpob3ZlcixcbiAgJi5nbGlkZV9fYnVsbGV0LS1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4Njk3OTE7XG4gIH1cbmA7XG5cbi8vIGRlZmF1bHQgYnV0dG9uIHN0eWxlXG5jb25zdCBEZWZhdWx0QnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDEwcHggM3B4O1xuYDtcblxuZXhwb3J0IHtcbiAgR2xpZGVTbGlkZVdyYXBwZXIsXG4gIEJ1dHRvbkNvbnRyb2xXcmFwcGVyLFxuICBCdXR0b25XcmFwcGVyLFxuICBCdWxsZXRDb250cm9sV3JhcHBlcixcbiAgQnVsbGV0QnV0dG9uLFxuICBEZWZhdWx0QnRuLFxufTtcbmV4cG9ydCBkZWZhdWx0IEdsaWRlV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBmb250RmFtaWx5LFxuICBmb250V2VpZ2h0LFxuICB0ZXh0QWxpZ24sXG4gIGxpbmVIZWlnaHQsXG4gIGxldHRlclNwYWNpbmcsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vQmFzZSc7XG5cbmNvbnN0IEhlYWRpbmdXcmFwcGVyID0gc3R5bGVkKCdwJykoXG4gIGJhc2UsXG4gIGZvbnRGYW1pbHksXG4gIGZvbnRXZWlnaHQsXG4gIHRleHRBbGlnbixcbiAgbGluZUhlaWdodCxcbiAgbGV0dGVyU3BhY2luZyxcbiAgdGhlbWVkKCdIZWFkaW5nJylcbik7XG5cbmNvbnN0IEhlYWRpbmcgPSAoeyBjb250ZW50LCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxIZWFkaW5nV3JhcHBlciB7Li4ucHJvcHN9Pntjb250ZW50fTwvSGVhZGluZ1dyYXBwZXI+XG4pO1xuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgYXM6IFByb3BUeXBlcy5vbmVPZihbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10pLFxuICBmb250RmFtaWx5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgZm9udFdlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIHRleHRBbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGxpbmVIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBsZXR0ZXJTcGFjaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgLi4uYmFzZS5wcm9wVHlwZXMsXG59O1xuXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdoMicsXG4gIG10OiAwLFxuICBtYjogMCxcbiAgZm9udFdlaWdodDogNzAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgUGx1c091dGxpbmVkLCBNaW51c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IElucHV0SW5jRGVjV3JhcHBlciBmcm9tICcuL0lucHV0SW5jRGVjLnN0eWxlJztcblxuY29uc3QgSW5wdXRJbmNEZWMgPSAoeyBjbGFzc05hbWUsIGluY3JlbWVudCwgZGVjcmVtZW50LCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ3F1YW50aXR5J107XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPElucHV0SW5jRGVjV3JhcHBlciBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGRlY0J0blwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtkZWNyZW1lbnR9PlxuICAgICAgICA8TWludXNPdXRsaW5lZCAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8SW5wdXQgY2xhc3NOYW1lPVwicW50LWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHsuLi5wcm9wc30gLz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGluY0J0blwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtpbmNyZW1lbnR9PlxuICAgICAgICA8UGx1c091dGxpbmVkIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0lucHV0SW5jRGVjV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0SW5jRGVjO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IElucHV0SW5jRGVjV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1NHB4KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjdweDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4gICAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIH1cblxuICBidXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICB3aWR0aDogMjdweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICYuZGVjQnRuIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgICYuaW5jQnRuIHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRJbmNEZWNXcmFwcGVyO1xuIiwiLy8gVGhlIHBvcnRhbCBlbGVtZW50IGlzIGluc2VydGVkIGluIHRoZSBET00gdHJlZSBhZnRlclxuLy8gdGhlIE1vZGFsJ3MgY2hpbGRyZW4gYXJlIG1vdW50ZWQsIG1lYW5pbmcgdGhhdCBjaGlsZHJlblxuLy8gd2lsbCBiZSBtb3VudGVkIG9uIGEgZGV0YWNoZWQgRE9NIG5vZGUuIElmIGEgY2hpbGRcbi8vIGNvbXBvbmVudCByZXF1aXJlcyB0byBiZSBhdHRhY2hlZCB0byB0aGUgRE9NIHRyZWVcbi8vIGltbWVkaWF0ZWx5IHdoZW4gbW91bnRlZCwgZm9yIGV4YW1wbGUgdG8gbWVhc3VyZSBhXG4vLyBET00gbm9kZSwgb3IgdXNlcyAnYXV0b0ZvY3VzJyBpbiBhIGRlc2NlbmRhbnQsIGFkZFxuLy8gc3RhdGUgdG8gTW9kYWwgYW5kIG9ubHkgcmVuZGVyIHRoZSBjaGlsZHJlbiB3aGVuIE1vZGFsXG4vLyBpcyBpbnNlcnRlZCBpbiB0aGUgRE9NIHRyZWUuXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGFsKHsgY2hpbGRyZW4sIHJlbmRlcmVySWQgfSkge1xuICBjb25zdCBbY29udGFpbmVyRWxdID0gdXNlU3RhdGUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBwb3J0YWxSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVuZGVyZXJJZCkgfHwgZG9jdW1lbnQuYm9keTtcbiAgICBwb3J0YWxSb290LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsKTtcbiAgICByZXR1cm4gKCkgPT4gcG9ydGFsUm9vdC5yZW1vdmVDaGlsZChjb250YWluZXJFbCk7XG4gIH0pO1xuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBjb250YWluZXJFbCk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IElvSW9zU3RhciwgSW9Jb3NTdGFyT3V0bGluZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcblxuY29uc3QgUmF0aW5nID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHJhdGluZywgcmF0aW5nQ291bnQsIHR5cGUsIHJhdGluZ0ZpZWxkTmFtZSB9ID0gcHJvcHM7XG4gIGxldCBpLCBmbG9vclZhbHVlO1xuICBsZXQgcmF0aW5nVmlldyA9IFtdO1xuICBpZiAocmF0aW5nICYmIHJhdGluZyAhPT0gMCkge1xuICAgIGZsb29yVmFsdWUgPSBNYXRoLmZsb29yKHJhdGluZyk7XG4gICAgZm9yIChpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgaWYgKGkgPCBmbG9vclZhbHVlKSB7XG4gICAgICAgIHJhdGluZ1ZpZXcucHVzaCg8SW9Jb3NTdGFyIGtleT17aX0gLz4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmF0aW5nVmlldy5wdXNoKDxJb0lvc1N0YXJPdXRsaW5lIGtleT17aX0gLz4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgbGlzdGluZ0NvbmRpdGlvbjtcbiAgaWYgKHJhdGluZyAmJiByYXRpbmcgPT09IDUpIHtcbiAgICBsaXN0aW5nQ29uZGl0aW9uID0gJ0F3ZXNvbWUnO1xuICB9IGVsc2UgaWYgKDQgPD0gcmF0aW5nICYmIHJhdGluZyA8IDUpIHtcbiAgICBsaXN0aW5nQ29uZGl0aW9uID0gJ0dvb2QnO1xuICB9IGVsc2UgaWYgKDMgPD0gcmF0aW5nICYmIHJhdGluZyA8IDQpIHtcbiAgICBsaXN0aW5nQ29uZGl0aW9uID0gJ0F2ZXJhZ2UnO1xuICB9IGVsc2UgaWYgKDIgPD0gcmF0aW5nICYmIHJhdGluZyA8IDMpIHtcbiAgICBsaXN0aW5nQ29uZGl0aW9uID0gJ0JhZCc7XG4gIH0gZWxzZSBpZiAocmF0aW5nID49IDEpIHtcbiAgICBsaXN0aW5nQ29uZGl0aW9uID0gJ1RlcnJpYmxlJztcbiAgfSBlbHNlIHtcbiAgICBsaXN0aW5nQ29uZGl0aW9uID0gJyc7XG4gIH1cblxuICBsZXQgc2hvd1JhdGluZ0NvdW50O1xuICBpZiAocmF0aW5nQ291bnQpIHtcbiAgICBzaG93UmF0aW5nQ291bnQgPSBgKGAgKyByYXRpbmdDb3VudCArIGApYDtcbiAgfSBlbHNlIHtcbiAgICBzaG93UmF0aW5nQ291bnQgPSAnJztcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt0eXBlICYmIHR5cGUgPT09ICdidWxrJyA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3Bhbj57cmF0aW5nVmlld308L3NwYW4+XG4gICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgIHtgICR7bGlzdGluZ0NvbmRpdGlvbn1gfSB7YCR7c2hvd1JhdGluZ0NvdW50fWB9XG4gICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3Bhbj57cmF0aW5nRmllbGROYW1lfTwvc3Bhbj4ge3JhdGluZ1ZpZXd9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cblJhdGluZy5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcmF0aW5nQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJhdGluZzogUHJvcFR5cGVzLm51bWJlcixcbiAgcmF0aW5nRmllbGROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIGZvbnRGYW1pbHksXG4gIGZvbnRXZWlnaHQsXG4gIHRleHRBbGlnbixcbiAgbGluZUhlaWdodCxcbiAgbGV0dGVyU3BhY2luZyxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgeyBiYXNlLCB0aGVtZWQgfSBmcm9tICcuLi9CYXNlJztcblxuY29uc3QgVGV4dFdyYXBwZXIgPSBzdHlsZWQoJ3AnKShcbiAgYmFzZSxcbiAgZm9udEZhbWlseSxcbiAgZm9udFdlaWdodCxcbiAgdGV4dEFsaWduLFxuICBsaW5lSGVpZ2h0LFxuICBsZXR0ZXJTcGFjaW5nLFxuICB0aGVtZWQoJ1RleHQnKVxuKTtcblxuY29uc3QgVGV4dCA9ICh7IGNvbnRlbnQsIC4uLnByb3BzIH0pID0+IChcbiAgPFRleHRXcmFwcGVyIHsuLi5wcm9wc30+e2NvbnRlbnR9PC9UZXh0V3JhcHBlcj5cbik7XG5cblRleHQucHJvcFR5cGVzID0ge1xuICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZm9udEZhbWlseTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGZvbnRXZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICB0ZXh0QWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBsaW5lSGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgbGV0dGVyU3BhY2luZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIC4uLmJhc2UucHJvcFR5cGVzLFxufTtcblxuVGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzOiAncCcsXG4gIG06IDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2VjdGlvblRpdGxlV3JhcHBlciwgeyBUaXRsZVdyYXBwZXIsIExpbmtXcmFwcGVyIH0gZnJvbSAnLi9UaXRsZS5zdHlsZSc7XG5cbmNvbnN0IFNlY3Rpb25UaXRsZSA9ICh7IGNsYXNzTmFtZSwgdGl0bGUsIGxpbmssIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gQWRkIGFsbCBjbGFzc3MgdG8gYW4gYXJyYXlcbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsnc2VjdGlvbl90aXRsZSddO1xuXG4gIC8vIGNsYXNzTmFtZSBwcm9wIGNoZWNraW5nXG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBhZGRBbGxDbGFzc2VzLnB1c2goY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb25UaXRsZVdyYXBwZXIgY2xhc3NOYW1lPXthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX0gey4uLnByb3BzfT5cbiAgICAgIHt0aXRsZSAmJiA8VGl0bGVXcmFwcGVyIGNsYXNzTmFtZT1cInRpdGxlX3dyYXBwZXJcIj57dGl0bGV9PC9UaXRsZVdyYXBwZXI+fVxuICAgICAge2xpbmsgJiYgPExpbmtXcmFwcGVyIGNsYXNzTmFtZT1cImxpbmtfd3JhcHBlclwiPntsaW5rfTwvTGlua1dyYXBwZXI+fVxuICAgIDwvU2VjdGlvblRpdGxlV3JhcHBlcj5cbiAgKTtcbn07XG5cblNlY3Rpb25UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIC8qKiBDbGFzc05hbWUgb2YgdGhlIFNlY3Rpb25UaXRsZS4gKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAvKiogQWRkIGhlcmUgSGVhZGluZyBjb21wb25lbnQgZnJvbSBjb21tb24gY29tcG9uZW50cy4gKi9cbiAgdGl0bGU6IFByb3BUeXBlcy5lbGVtZW50LFxuICAvKiogQWRkIGhlcmUgVGV4dExpbmsgY29tcG9uZW50IGZyb20gY29tbW9uIGNvbXBvbmVudHMuICovXG4gIGxpbms6IFByb3BUeXBlcy5lbGVtZW50LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblRpdGxlO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi4vQmFzZSc7XG5cbmNvbnN0IFNlY3Rpb25UaXRsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgbWFyZ2luOiAzMHB4IDA7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIG1hcmdpbjogMTVweCAwIDIwcHg7XG4gIH1cblxuICAke2Jhc2V9XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGVXcmFwcGVyID0gc3R5bGVkLmRpdmBgO1xuXG5leHBvcnQgY29uc3QgTGlua1dyYXBwZXIgPSBzdHlsZWQuZGl2YGA7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25UaXRsZVdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vUG9ydGFsL1BvcnRhbCc7XG5pbXBvcnQgeyBXcmFwcGVyLCBDb250YWluZXIgfSBmcm9tICcuL1ZpZXdXaXRoUG9wdXAuc3R5bGUnO1xuaW1wb3J0IHsgdXNlT25DbGlja091dHNpZGUgfSBmcm9tICcuL3VzZU9uQ2xpY2tPdXRzaWRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld1dpdGhQb3B1cCh7XG4gIHZpZXcsXG4gIHBvcHVwLFxuICBub1ZpZXcgPSBmYWxzZSxcbiAgc3R5bGUsXG4gIGNsYXNzTmFtZSxcbn0pIHtcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG4gIHVzZU9uQ2xpY2tPdXRzaWRlKHJlZiwgKCkgPT4gc2V0U2hvd1BvcHVwKGZhbHNlKSk7XG4gIC8vIEFkZCBhbGwgY2xhc3NzIHRvIGFuIGFycmF5XG4gIGNvbnN0IGFkZEFsbENsYXNzZXMgPSBbJ3ZpZXdfd2l0aF9fcG9wdXAnXTtcblxuICAvLyBjbGFzc05hbWUgcHJvcCBjaGVja2luZ1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgYWRkQWxsQ2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlclxuICAgICAgY2xhc3NOYW1lPXtgJHthZGRBbGxDbGFzc2VzLmpvaW4oJyAnKX0gJHtzaG93UG9wdXAgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICByZWY9e3JlZn1cbiAgICA+XG4gICAgICB7dmlldyAmJiBub1ZpZXcgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwX2hhbmRsZXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UG9wdXAoIXNob3dQb3B1cCl9PlxuICAgICAgICAgIHt2aWV3fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIGNsYXNzTmFtZT1cInBvcHVwX2NvbnRhaW5lclwiXG4gICAgICAgIHNob3dQb3B1cD17c2hvd1BvcHVwfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UG9wdXAodHJ1ZSl9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgID5cbiAgICAgICAge3ZpZXcgJiYgIW5vVmlldyAmJiB2aWV3fVxuICAgICAgICB7c2hvd1BvcHVwICYmIChcbiAgICAgICAgICA8ZGl2IGlkPVwicG9wdXBcIj5cbiAgICAgICAgICAgIDxQb3J0YWwgcmVuZGVyZXJJZD1cInBvcHVwXCI+e3BvcHVwICYmIHBvcHVwfTwvUG9ydGFsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IChwcm9wcy5yYWRpdXMgPyBwcm9wcy5yYWRpdXMgOiAzKX1weDtcbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLnNob3dQb3B1cCAmJlxuICAgIGNzc2BcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgei1pbmRleDogOTk5O1xuICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGB9XG5cbiAgLmFudC1jaGVja2JveC1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5hbnQtY2hlY2tib3gtZ3JvdXAtaXRlbSB7XG4gICAgICBtYXJnaW46IDlweCAwO1xuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kYXRlX3BpY2tlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgIC5EYXRlUmFuZ2VQaWNrZXIge1xuICAgICAgLkRhdGVSYW5nZVBpY2tlcklucHV0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuYDtcbiIsIi8vIEhvb2tcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VPbkNsaWNrT3V0c2lkZShyZWYsIGhhbmRsZXIpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IGV2ZW50ID0+IHtcbiAgICAgIC8vIERvIG5vdGhpbmcgaWYgY2xpY2tpbmcgcmVmJ3MgZWxlbWVudCBvciBkZXNjZW5kZW50IGVsZW1lbnRzXG4gICAgICBpZiAoIXJlZi5jdXJyZW50IHx8IHJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVyKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbGlzdGVuZXIpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGxpc3RlbmVyKTtcbiAgICB9O1xuICB9LCBbcmVmLCBoYW5kbGVyXSk7IC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcbi8vIGltcG9ydCAncmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3MnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL1VJL0NvbnRhaW5lci9Db250YWluZXInO1xuaW1wb3J0IEhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9VSS9IZWFkaW5nL0hlYWRpbmcnO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tICdjb21wb25lbnRzL1NlY3Rpb25UaXRsZS9TZWN0aW9uVGl0bGUnO1xuaW1wb3J0IExvYWRlciBmcm9tICdjb21wb25lbnRzL0xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IEltYWdlQ2FyZCBmcm9tICdjb21wb25lbnRzL0ltYWdlQ2FyZC9JbWFnZUNhcmQnO1xuaW1wb3J0IHsgTElTVElOR19QT1NUU19QQUdFIH0gZnJvbSAnLi4vLi4vLi4vc2V0dGluZ3MvY29uc3RhbnQnO1xuaW1wb3J0IExvY2F0aW9uV3JhcHBlciwgeyBDYXJvdXNlbFNlY3Rpb24gfSBmcm9tICcuL0xvY2F0aW9uLnN0eWxlJztcblxuY29uc3QgTG9jYXRpb25HcmlkID0gKHsgZGF0YSwgZGV2aWNlVHlwZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExvY2F0aW9uV3JhcHBlcj5cbiAgICAgIDxDb250YWluZXIgZmx1aWQ9e3RydWV9PlxuICAgICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgICAgdGl0bGU9ezxIZWFkaW5nIGNvbnRlbnQ9XCJFeHBsb3JlIERlc3RpbmF0aW9uc1wiIC8+fVxuICAgICAgICAgIGxpbms9e1xuICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7TElTVElOR19QT1NUU19QQUdFfWB9PlxuICAgICAgICAgICAgICA8YT5TaG93IGFsbDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPENhcm91c2VsU2VjdGlvbj5cbiAgICAgICAgICB7ZGF0YS5sZW5ndGggIT09IDAgPyAoXG4gICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgc3NyXG4gICAgICAgICAgICAgIGFkZGl0aW9uYWxUcmFuc2Zyb209ezB9XG4gICAgICAgICAgICAgIGFycm93c1xuICAgICAgICAgICAgICBhdXRvUGxheVNwZWVkPXszMDAwfVxuICAgICAgICAgICAgICBjZW50ZXJNb2RlPXtmYWxzZX1cbiAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJjb250YWluZXJcIlxuICAgICAgICAgICAgICBkb3RMaXN0Q2xhc3M9XCJcIlxuICAgICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdD17ZmFsc2V9XG4gICAgICAgICAgICAgIGluZmluaXRlXG4gICAgICAgICAgICAgIGl0ZW1DbGFzcz1cIlwiXG4gICAgICAgICAgICAgIHJlbmRlckRvdHNPdXRzaWRlPXtmYWxzZX1cbiAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17e1xuICAgICAgICAgICAgICAgIGRlc2t0b3A6IHtcbiAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAzMDAwLFxuICAgICAgICAgICAgICAgICAgICBtaW46IDEwMjQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaXRlbXM6IDUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2JpbGU6IHtcbiAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbWF4OiA0NjQsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBpdGVtczogMSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRhYmxldDoge1xuICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDoge1xuICAgICAgICAgICAgICAgICAgICBtYXg6IDEwMjQsXG4gICAgICAgICAgICAgICAgICAgIG1pbjogNDY0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGl0ZW1zOiAzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGRldmljZVR5cGU9e2RldmljZVR5cGV9XG4gICAgICAgICAgICAgIHNob3dEb3RzPXtmYWxzZX1cbiAgICAgICAgICAgICAgc2xpZGVyQ2xhc3M9XCJcIlxuICAgICAgICAgICAgICBzbGlkZXNUb1NsaWRlPXsxfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPEltYWdlQ2FyZFxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXtwb3N0LmxvY2F0aW9uSW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuY2l0eX1cbiAgICAgICAgICAgICAgICAgIG1ldGE9e2Ake3Bvc3QubnVtYmVyT2ZQb3N0fSBIb3RlbHNgfVxuICAgICAgICAgICAgICAgICAgbGluaz17TElTVElOR19QT1NUU19QQUdFfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ2Fyb3VzZWxTZWN0aW9uPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Mb2NhdGlvbldyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbkdyaWQ7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgTG9jYXRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNTJweCAwO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgcGFkZGluZzogMzBweCAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWxpc3Qge1xuICAgIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG5cbiAgICAgIC5pbWFnZV9jYXJkIHtcbiAgICAgICAgPiBhIHtcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgaGVpZ2h0OiAyODBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB3aWR0aDogMzZweDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggJHt0aGVtZUdldCgnYm94U2hhZG93LjEnLCAncmdiYSgwLCAwLCAwLCAwLjE2KScpfTtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1sZWZ0IHtcbiAgICAgIGxlZnQ6IDMwcHg7XG4gICAgfVxuXG4gICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdy0tcmlnaHQge1xuICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbldyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9VSS9Db250YWluZXIvQ29udGFpbmVyJztcbmltcG9ydCBIZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvVUkvSGVhZGluZy9IZWFkaW5nJztcbmltcG9ydCBUZXh0IGZyb20gJ2NvbXBvbmVudHMvVUkvVGV4dC9UZXh0JztcbmltcG9ydCBHbGlkZUNhcm91c2VsLCB7XG4gIEdsaWRlU2xpZGUsXG59IGZyb20gJ2NvbXBvbmVudHMvVUkvR2xpZGVDYXJvdXNlbC9HbGlkZUNhcm91c2VsJztcbmltcG9ydCBTZWFyY2hGb3JtIGZyb20gJy4vU2VhcmNoRm9ybSc7XG5pbXBvcnQgQmFubmVyV3JhcHBlciwgeyBTZWFyY2hXcmFwcGVyIH0gZnJvbSAnLi9TZWFyY2guc3R5bGUnO1xuLy8gc2xpZGVyIGltYWdlc1xuaW1wb3J0IGJhbm5lckJnMSBmcm9tICdhc3NldHMvaW1hZ2VzL2Jhbm5lci8xLmpwZyc7XG5pbXBvcnQgYmFubmVyQmcyIGZyb20gJ2Fzc2V0cy9pbWFnZXMvYmFubmVyLzIuanBnJztcbmltcG9ydCBiYW5uZXJCZzMgZnJvbSAnYXNzZXRzL2ltYWdlcy9iYW5uZXIvMy5qcGcnO1xuXG5jb25zdCBIb21lU2VhcmNoID0gKHsgc2VhcmNoVGl0bGVTdHlsZSwgc2VhcmNoRGVzY3JpcHRpb25TdHlsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJhbm5lcldyYXBwZXI+XG4gICAgICA8R2xpZGVDYXJvdXNlbFxuICAgICAgICBjb250cm9scz17ZmFsc2V9XG4gICAgICAgIG9wdGlvbnM9e3sgZ2FwOiAwLCBhdXRvcGxheTogNTAwMCwgYW5pbWF0aW9uRHVyYXRpb246IDEwMDAgfX1cbiAgICAgICAgYnVsbGV0cz17dHJ1ZX1cbiAgICAgICAgbnVtYmVyT2ZCdWxsZXRzPXszfVxuICAgICAgPlxuICAgICAgICA8PlxuICAgICAgICAgIDxHbGlkZVNsaWRlPlxuICAgICAgICAgICAgPGltZyBzcmM9e2Jhbm5lckJnMX0gYWx0PVwiQmFubmVyXCIgLz5cbiAgICAgICAgICA8L0dsaWRlU2xpZGU+XG4gICAgICAgICAgPEdsaWRlU2xpZGU+XG4gICAgICAgICAgICA8aW1nIHNyYz17YmFubmVyQmcyfSBhbHQ9XCJCYW5uZXJcIiAvPlxuICAgICAgICAgIDwvR2xpZGVTbGlkZT5cbiAgICAgICAgICA8R2xpZGVTbGlkZT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtiYW5uZXJCZzN9IGFsdD1cIkJhbm5lclwiIC8+XG4gICAgICAgICAgPC9HbGlkZVNsaWRlPlxuICAgICAgICA8Lz5cbiAgICAgIDwvR2xpZGVDYXJvdXNlbD5cblxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlYXJjaFdyYXBwZXI+XG4gICAgICAgICAgPEhlYWRpbmdcbiAgICAgICAgICAgIHsuLi5zZWFyY2hUaXRsZVN0eWxlfVxuICAgICAgICAgICAgY29udGVudD1cIkxhdGVzdCByZXZpZXdzLiBMb3dlc3QgcHJpY2VzLlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgey4uLnNlYXJjaERlc2NyaXB0aW9uU3R5bGV9XG4gICAgICAgICAgICBjb250ZW50PVwiY29tcGFyZXMgcHJpY2VzIGZyb20gMjAwKyBib29raW5nIHNpdGVzIHRvIGhlbHAgeW91IGZpbmQgdGhlIGxvd2VzdFxuICAgICAgcHJpY2Ugb24gdGhlIHJpZ2h0IGhvdGVsIGZvciB5b3UuXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTZWFyY2hGb3JtIC8+XG4gICAgICAgIDwvU2VhcmNoV3JhcHBlcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQmFubmVyV3JhcHBlcj5cbiAgKTtcbn07XG5cbkhvbWVTZWFyY2gucHJvcFR5cGVzID0ge1xuICBzZWFyY2hUaXRsZVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzZWFyY2hEZXNjcmlwdGlvblN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuSG9tZVNlYXJjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlYXJjaFRpdGxlU3R5bGU6IHtcbiAgICBjb2xvcjogJyMyQzJDMkMnLFxuICAgIGZvbnRTaXplOiBbJzIwcHgnLCAnMjRweCcsICcyOHB4J10sXG4gICAgbGluZUhlaWdodDogWycyOHB4JywgJzMwcHgnLCAnMzBweCddLFxuICAgIG1iOiAnOXB4JyxcbiAgfSxcbiAgc2VhcmNoRGVzY3JpcHRpb25TdHlsZToge1xuICAgIGNvbG9yOiAnIzJDMkMyQycsXG4gICAgZm9udFNpemU6ICcxNXB4JyxcbiAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgbWI6ICczMHB4JyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVTZWFyY2g7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgQmFubmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgID4gZGl2IHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAuZ2xpZGUsXG4gIC5nbGlkZV9fdHJhY2ssXG4gIC5nbGlkZV9fc2xpZGVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIH1cblxuICAuZ2xpZGVfX3NsaWRlIHtcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gIH1cblxuICAuZ2xpZGVfX2J1bGxldHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAuZ2xpZGVfX2J1bGxldCB7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICB9XG5cbiAgLmdsaWRlX19idWxsZXQtLWFjdGl2ZSB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgfVxuXG4gID4gZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgcGFkZGluZzogMjhweCAzMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICBib3gtc2hhZG93OiAwIDFweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA4MXB4O1xuICB6LWluZGV4OiAxO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTY5cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIHdpZHRoOiA0MTRweDtcbiAgICBsZWZ0OiAzMHB4O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGxlZnQ6IDE1cHg7XG5cbiAgICA+IHAge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICA+IGRpdiB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xuICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMicsICcjRjdGN0Y3Jyl9O1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbiAgbWluLWhlaWdodDogNjBweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG5cbiAgLyogc3VibWl0IGJ1dHRvbiBzdHlsZSAqL1xuICBidXR0b25bdHlwZT0nc3VibWl0J10uYW50LWJ0biB7XG4gICAgbWluLXdpZHRoOiAxNTdweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIGhlaWdodDogNDdweDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMC44NTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAudGFyZ2V0IHtcbiAgICByaWdodDogMTBweDtcbiAgICBsZWZ0OiBhdXRvO1xuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgfVxuICB9XG5cbiAgLyogbWFwIGF1dG8gY29tcGxldGUgc3R5bGUgKi9cbiAgLm1hcF9hdXRvY29tcGxldGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgbGVmdDogMjBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICAgICAgbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHBhZGRpbmc6IDAgMzBweCAwIDQwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMzBweCAwIDM2cHg7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogZGF0ZSBwaWNrZXIgc3R5bGUgKi9cbiAgLmRhdGVfcGlja2VyIHtcbiAgICBtaW4td2lkdGg6IGNhbGMoMjUwcHggLSAxNHB4KTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTRweCk7XG4gICAgbWFyZ2luOiAwIDAgMCAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgfVxuXG4gICAgLkRheVBpY2tlcl9fd2l0aEJvcmRlciB7XG4gICAgICBib3gtc2hhZG93OiAwIDE1cHggNDZweCAtMTBweCByZ2JhKDI2LCAyNiwgMjksIDAuMyk7XG4gICAgfVxuXG4gICAgLkRhdGVSYW5nZVBpY2tlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXQge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgLkRhdGVSYW5nZVBpY2tlcklucHV0X2NsZWFyRGF0ZXMsXG4gICAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dF9jbGVhckRhdGVzIHtcbiAgICAgICAgICAmLkRhdGVSYW5nZVBpY2tlcklucHV0X2NsZWFyRGF0ZXNfX3NtYWxsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLkRhdGVJbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMCAxNXB4IDAgMzBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTY5cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgICAgcGFkZGluZzogMCAyNXB4IDAgMzBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2OHB4KSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHggMCAyNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5EYXRlSW5wdXRfZmFuZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5EYXRlSW5wdXRfaW5wdXQge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgJi5EYXRlSW5wdXRfaW5wdXRfX2ZvY3VzZWQge1xuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXRfYXJyb3cge1xuICAgICAgICAgICYgKyAuRGF0ZUlucHV0IHtcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5EYXRlUmFuZ2VQaWNrZXJfcGlja2VyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgICAgICAgIHRvcDogNDdweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgICAgICAgIGxlZnQ6IC0yOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgLkRheVBpY2tlcixcbiAgICAgICAgICAuRGF5UGlja2VyID4gZGl2ID4gZGl2LFxuICAgICAgICAgIC5EYXlQaWNrZXIgPiBkaXYgPiBkaXYgLkRheVBpY2tlcl90cmFuc2l0aW9uQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAyOTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5EYXlQaWNrZXIge1xuICAgICAgICAgICAgLkRheVBpY2tlcl93ZWVrSGVhZGVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuQ2FsZW5kYXJNb250aCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiB2aWV3IHdpdGggcG9wdXAgY29tcG9uZW50IHN0eWxlICovXG4gIC52aWV3X3dpdGhfX3BvcHVwIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgd2lkdGg6IDFweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICAgICAgbGVmdDogMTVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBwb3B1IGhhbmRsZXIgc3R5bGUgKi9cbiAgICAucG9wdXBfaGFuZGxlciB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTRweCk7XG4gICAgICBtYXJnaW4tbGVmdDogMTRweDtcblxuICAgICAgYnV0dG9uLmFudC1idG4ge1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMicsICcjRjdGN0Y3Jyl9O1xuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjVweCAwIDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgaGVpZ2h0OiA0N3B4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAwIDI1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYucm9vbV9ndWVzdCB7XG4gICAgICAucG9wdXBfaGFuZGxlciB7XG4gICAgICAgIGJ1dHRvbi5hbnQtYnRuIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgLnBvcHVwX2NvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHBhZGRpbmc6IDIycHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTVweCA0NnB4IC0xMHB4IHJnYmEoMjYsIDI2LCAyOSwgMC4zKTtcblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiBpY29uIHN0eWxlICovXG4gID4gc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IGF1dG87XG4gICAgJi5tYXAtbWFya2VyLFxuICAgICYuY2FsZW5kYXIsXG4gICAgJi51c2VyLWZyaWVuZHMge1xuICAgICAgbGVmdDogMTVweDtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgZmlsbDogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgfVxuXG4gICAgJi5jYWxlbmRhciB7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi51c2VyLWZyaWVuZHMge1xuICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5jYXJldC1kb3duIHtcbiAgICAgIHJpZ2h0OiAxMnB4O1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIGZpbGw6ICR7dGhlbWVHZXQoJ3RleHQuMScsICcjOTA5MDkwJyl9O1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFJvb21HdWVzdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcblxuICBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLnF1YW50aXR5IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG5cbiAgICBpbnB1dCB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuXG4gICAgYnV0dG9uLmJ0biBzdmcge1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBCYW5uZXJXcmFwcGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuaW1wb3J0IHsgRmFNYXBNYXJrZXJBbHQsIEZhUmVnQ2FsZW5kYXIsIEZhVXNlckZyaWVuZHMgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcbmltcG9ydCBNYXBBdXRvQ29tcGxldGUgZnJvbSAnY29tcG9uZW50cy9NYXAvTWFwQXV0b0NvbXBsZXRlJztcbmltcG9ydCBJbnB1dEluY0RlYyBmcm9tICdjb21wb25lbnRzL1VJL0lucHV0SW5jRGVjL0lucHV0SW5jRGVjJztcbmltcG9ydCBEYXRlUmFuZ2VQaWNrZXJCb3ggZnJvbSAnY29tcG9uZW50cy9VSS9EYXRlUGlja2VyL1JlYWN0RGF0ZXMnO1xuaW1wb3J0IHsgbWFwRGF0YUhlbHBlciB9IGZyb20gJ2NvbXBvbmVudHMvTWFwL21hcERhdGFIZWxwZXInO1xuaW1wb3J0IFZpZXdXaXRoUG9wdXAgZnJvbSAnY29tcG9uZW50cy9VSS9WaWV3V2l0aFBvcHVwL1ZpZXdXaXRoUG9wdXAnO1xuaW1wb3J0IHtcbiAgRm9ybVdyYXBwZXIsXG4gIENvbXBvbmVudFdyYXBwZXIsXG4gIFJvb21HdWVzdFdyYXBwZXIsXG4gIEl0ZW1XcmFwcGVyLFxufSBmcm9tICcuL1NlYXJjaC5zdHlsZSc7XG5pbXBvcnQgeyBMSVNUSU5HX1BPU1RTX1BBR0UgfSBmcm9tICcuLi8uLi8uLi9zZXR0aW5ncy9jb25zdGFudCc7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9TZWFyY2hQcm92aWRlcic7XG5cbmNvbnN0IGNhbGVuZGFySXRlbSA9IHtcbiAgc2VwYXJhdG9yOiAnLScsXG4gIGZvcm1hdDogJ01NLURELVlZWVknLFxuICBsb2NhbGU6ICdlbicsXG59O1xuXG5jb25zdCBTZWFyY2hGb3JtID0gKCkgPT4ge1xuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcbiAgY29uc3QgW3NlYXJjaERhdGUsIHNldFNlYXJjaERhdGVdID0gdXNlU3RhdGUoe1xuICAgIHNldFN0YXJ0RGF0ZTogbnVsbCxcbiAgICBzZXRFbmREYXRlOiBudWxsLFxuICB9KTtcbiAgY29uc3QgW21hcFZhbHVlLCBzZXRNYXBWYWx1ZV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyb29tR3Vlc3QsIHNldFJvb21HdWVzdF0gPSB1c2VTdGF0ZSh7XG4gICAgcm9vbTogMCxcbiAgICBndWVzdDogMCxcbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRldmFsdWVGdW5jID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBzZWFyY2hlZFBsYWNlQVBJRGF0YSB9ID0gZXZlbnQ7XG4gICAgaWYgKCFpc0VtcHR5KHNlYXJjaGVkUGxhY2VBUElEYXRhKSkge1xuICAgICAgc2V0TWFwVmFsdWUoc2VhcmNoZWRQbGFjZUFQSURhdGEpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbmNyZW1lbnQgPSAodHlwZSkgPT4ge1xuICAgIHNldFJvb21HdWVzdCh7XG4gICAgICAuLi5yb29tR3Vlc3QsXG4gICAgICBbdHlwZV06IHJvb21HdWVzdFt0eXBlXSArIDEsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVjcmVtZW50ID0gKHR5cGUpID0+IHtcbiAgICBpZiAocm9vbUd1ZXN0W3R5cGVdIDw9IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2V0Um9vbUd1ZXN0KHtcbiAgICAgIC4uLnJvb21HdWVzdCxcbiAgICAgIFt0eXBlXTogcm9vbUd1ZXN0W3R5cGVdIC0gMSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbmNEZWNPbkNobmFnZSA9IChlLCB0eXBlKSA9PiB7XG4gICAgbGV0IGN1cnJlbnRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldFJvb21HdWVzdCh7XG4gICAgICAuLi5yb29tR3Vlc3QsXG4gICAgICBbdHlwZV06IGN1cnJlbnRWYWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnb1RvU2VhcmNoUGFnZSA9ICgpID0+IHtcbiAgICBsZXQgdGVtcExvY2F0aW9uID0gW10sXG4gICAgICBkYXRlUmFuZ2UgPSB7fSxcbiAgICAgIGxvY2F0aW9uX2xhdCA9ICcnLFxuICAgICAgbG9jYXRpb25fbG5nID0gJyc7XG4gICAgY29uc3QgbWFwRGF0YSA9IG1hcFZhbHVlID8gbWFwRGF0YUhlbHBlcihtYXBWYWx1ZSkgOiBbXTtcbiAgICBtYXBEYXRhICYmXG4gICAgICBtYXBEYXRhLm1hcCgoc2luZ2xlTWFwRGF0YSwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gdGVtcExvY2F0aW9uLnB1c2goe1xuICAgICAgICAgIGZvcm1hdHRlZEFkZHJlc3M6IHNpbmdsZU1hcERhdGEgPyBzaW5nbGVNYXBEYXRhLmZvcm1hdHRlZEFkZHJlc3MgOiAnJyxcbiAgICAgICAgICBsYXQ6IHNpbmdsZU1hcERhdGEgPyBzaW5nbGVNYXBEYXRhLmxhdC50b0ZpeGVkKDMpIDogbnVsbCxcbiAgICAgICAgICBsbmc6IHNpbmdsZU1hcERhdGEgPyBzaW5nbGVNYXBEYXRhLmxuZy50b0ZpeGVkKDMpIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHRlbXBMb2NhdGlvbiA/IHRlbXBMb2NhdGlvblswXSA6IHt9O1xuICAgIGRhdGVSYW5nZS5zdGFydERhdGUgPSBzZWFyY2hEYXRlID8gc2VhcmNoRGF0ZS5zZXRTdGFydERhdGUgOiBudWxsO1xuICAgIGRhdGVSYW5nZS5lbmREYXRlID0gc2VhcmNoRGF0ZSA/IHNlYXJjaERhdGUuc2V0RW5kRGF0ZSA6IG51bGw7XG5cbiAgICBpZiAobG9jYXRpb24gJiYgbG9jYXRpb24ubGF0KSB7XG4gICAgICBsb2NhdGlvbl9sYXQgPSBsb2NhdGlvbi5sYXQ7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uICYmIGxvY2F0aW9uLmxuZykge1xuICAgICAgbG9jYXRpb25fbG5nID0gbG9jYXRpb24ubG5nO1xuICAgIH1cblxuICAgIGxldCBxdWVyeSA9IHtcbiAgICAgIHNldFN0YXJ0RGF0ZTogc2VhcmNoRGF0ZS5zZXRTdGFydERhdGUsXG4gICAgICBzZXRFbmREYXRlOiBzZWFyY2hEYXRlLnNldEVuZERhdGUsXG4gICAgICByb29tOiByb29tR3Vlc3Qucm9vbSxcbiAgICAgIGd1ZXN0OiByb29tR3Vlc3QuZ3Vlc3QsXG4gICAgICBsb2NhdGlvbl9sYXQsXG4gICAgICBsb2NhdGlvbl9sbmcsXG4gICAgfTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHF1ZXJ5KSB7XG4gICAgICBpZiAocXVlcnlba2V5XSA9PT0gJycgfHwgcXVlcnlba2V5XSA9PT0gbnVsbCB8fCBxdWVyeVtrZXldID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBxdWVyeVtrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdVUERBVEUnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2V0U3RhcnREYXRlOiBzZWFyY2hEYXRlLnNldFN0YXJ0RGF0ZSxcbiAgICAgICAgc2V0RW5kRGF0ZTogc2VhcmNoRGF0ZS5zZXRFbmREYXRlLFxuICAgICAgICByb29tOiByb29tR3Vlc3Qucm9vbSxcbiAgICAgICAgZ3Vlc3Q6IHJvb21HdWVzdC5ndWVzdCxcbiAgICAgICAgbG9jYXRpb25fbGF0LFxuICAgICAgICBsb2NhdGlvbl9sbmcsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgUm91dGVyLnB1c2goXG4gICAgICB7XG4gICAgICAgIHBhdGhuYW1lOiBgJHtMSVNUSU5HX1BPU1RTX1BBR0V9YCxcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aG5hbWU6IGAke0xJU1RJTkdfUE9TVFNfUEFHRX1gLFxuICAgICAgICBxdWVyeTogcXVlcnksXG4gICAgICB9LFxuICAgICAgeyBzaGFsbG93OiB0cnVlIH1cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1XcmFwcGVyPlxuICAgICAgPENvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgIDxGYU1hcE1hcmtlckFsdCBjbGFzc05hbWU9XCJtYXAtbWFya2VyXCIgLz5cbiAgICAgICAgPE1hcEF1dG9Db21wbGV0ZSB1cGRhdGV2YWx1ZT17KHZhbHVlKSA9PiB1cGRhdGV2YWx1ZUZ1bmModmFsdWUpfSAvPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXG4gICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTQ0LjA4MyAxNDRcIlxuICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDE0NC4wODMgMTQ0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0YXJnZXRcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGggZD1cIk0xMTcuMjkyLDY5aC0xMy41ODdDMTAyLjI4LDUzLjg1MSw5MC4xOSw0MS43NjEsNzUuMDQyLDQwLjMzN1YyNi41aC02djEzLjgzN0M1My44OTMsNDEuNzYxLDQxLjgwMiw1My44NTEsNDAuMzc4LDY5ICBIMjYuNzkydjZoMTMuNTg3YzEuNDI1LDE1LjE0OCwxMy41MTUsMjcuMjM4LDI4LjY2MywyOC42NjNWMTE3LjVoNnYtMTMuODM3QzkwLjE5LDEwMi4yMzgsMTAyLjI4LDkwLjE0OCwxMDMuNzA1LDc1aDEzLjU4N1Y2OXogICBNNzIuMDQyLDk3LjgwOWMtMTQuMjMsMC0yNS44MDktMTEuNTc4LTI1LjgwOS0yNS44MDljMC0xNC4yMzEsMTEuNTc4LTI1LjgwOSwyNS44MDktMjUuODA5Uzk3Ljg1LDU3Ljc2OSw5Ny44NSw3MiAgQzk3Ljg1LDg2LjIzLDg2LjI3Miw5Ny44MDksNzIuMDQyLDk3LjgwOXpcIiAvPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNNzIuMDQyLDUyLjU0MWMtMTAuNzI5LDAtMTkuNDU5LDguNzI5LTE5LjQ1OSwxOS40NTlzOC43MjksMTkuNDU5LDE5LjQ1OSwxOS40NTlTOTEuNSw4Mi43MjksOTEuNSw3MiAgUzgyLjc3MSw1Mi41NDEsNzIuMDQyLDUyLjU0MXogTTcyLjA0Miw4NS40NTljLTcuNDIxLDAtMTMuNDU5LTYuMDM3LTEzLjQ1OS0xMy40NTljMC03LjQyMSw2LjAzOC0xMy40NTksMTMuNDU5LTEzLjQ1OSAgUzg1LjUsNjQuNTc5LDg1LjUsNzJDODUuNSw3OS40MjIsNzkuNDYyLDg1LjQ1OSw3Mi4wNDIsODUuNDU5elwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9Db21wb25lbnRXcmFwcGVyPlxuXG4gICAgICA8Q29tcG9uZW50V3JhcHBlcj5cbiAgICAgICAgPEZhUmVnQ2FsZW5kYXIgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIiAvPlxuICAgICAgICA8RGF0ZVJhbmdlUGlja2VyQm94XG4gICAgICAgICAgaXRlbT17Y2FsZW5kYXJJdGVtfVxuICAgICAgICAgIHN0YXJ0RGF0ZUlkPVwic3RhcnREYXRlSWQtaWQtaG9tZVwiXG4gICAgICAgICAgZW5kRGF0ZUlkPVwiZW5kRGF0ZUlkLWlkLWhvbWVcIlxuICAgICAgICAgIHVwZGF0ZVNlYXJjaERhdGE9eyhzZXREYXRlVmFsdWUpID0+IHNldFNlYXJjaERhdGUoc2V0RGF0ZVZhbHVlKX1cbiAgICAgICAgICBzaG93Q2xlYXJEYXRlcz17dHJ1ZX1cbiAgICAgICAgICBzbWFsbD17dHJ1ZX1cbiAgICAgICAgICBudW1iZXJPZk1vbnRocz17MX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29tcG9uZW50V3JhcHBlcj5cblxuICAgICAgPENvbXBvbmVudFdyYXBwZXI+XG4gICAgICAgIDxGYVVzZXJGcmllbmRzIGNsYXNzTmFtZT1cInVzZXItZnJpZW5kc1wiIC8+XG4gICAgICAgIDxWaWV3V2l0aFBvcHVwXG4gICAgICAgICAga2V5PXsyMDB9XG4gICAgICAgICAgbm9WaWV3PXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvb21fZ3Vlc3RcIlxuICAgICAgICAgIHZpZXc9e1xuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiPlxuICAgICAgICAgICAgICA8c3Bhbj5Sb29tIHtyb29tR3Vlc3Qucm9vbSA+IDAgJiYgYDogJHtyb29tR3Vlc3Qucm9vbX1gfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+LTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+R3Vlc3R7cm9vbUd1ZXN0Lmd1ZXN0ID4gMCAmJiBgOiAke3Jvb21HdWVzdC5ndWVzdH1gfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIH1cbiAgICAgICAgICBwb3B1cD17XG4gICAgICAgICAgICA8Um9vbUd1ZXN0V3JhcHBlcj5cbiAgICAgICAgICAgICAgPEl0ZW1XcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+Um9vbTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxJbnB1dEluY0RlY1xuICAgICAgICAgICAgICAgICAgaWQ9XCJyb29tXCJcbiAgICAgICAgICAgICAgICAgIGluY3JlbWVudD17KCkgPT4gaGFuZGxlSW5jcmVtZW50KCdyb29tJyl9XG4gICAgICAgICAgICAgICAgICBkZWNyZW1lbnQ9eygpID0+IGhhbmRsZURlY3JlbWVudCgncm9vbScpfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbmNEZWNPbkNobmFnZShlLCAncm9vbScpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvb21HdWVzdC5yb29tfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvSXRlbVdyYXBwZXI+XG4gICAgICAgICAgICAgIDxJdGVtV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPkd1ZXN0PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPElucHV0SW5jRGVjXG4gICAgICAgICAgICAgICAgICBpZD1cImd1ZXN0XCJcbiAgICAgICAgICAgICAgICAgIGluY3JlbWVudD17KCkgPT4gaGFuZGxlSW5jcmVtZW50KCdndWVzdCcpfVxuICAgICAgICAgICAgICAgICAgZGVjcmVtZW50PXsoKSA9PiBoYW5kbGVEZWNyZW1lbnQoJ2d1ZXN0Jyl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUluY0RlY09uQ2huYWdlKGUsICdndWVzdCcpfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvb21HdWVzdC5ndWVzdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0l0ZW1XcmFwcGVyPlxuICAgICAgICAgICAgPC9Sb29tR3Vlc3RXcmFwcGVyPlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29tcG9uZW50V3JhcHBlcj5cblxuICAgICAgPEJ1dHRvblxuICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgb25DbGljaz17Z29Ub1NlYXJjaFBhZ2V9XG4gICAgICA+XG4gICAgICAgIEZpbmQgSG90ZWxzXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0Zvcm1XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTZWFyY2hGb3JtKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgU2VhcmNoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdVUERBVEUnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgU2VhcmNoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgcXVlcnkgfSkgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgcXVlcnkpO1xuICByZXR1cm4gKFxuICAgIDxTZWFyY2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NlYXJjaENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgc2h1ZmZsZSBmcm9tICdsb2Rhc2gvc2h1ZmZsZSc7XG5cbmNvbnN0IEZldGNoQVBJRGF0YSA9ICh1cmwpID0+IHtcbiAgcmV0dXJuIGZldGNoKHVybClcbiAgICAudGhlbigocikgPT4gci5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IFByb2Nlc3NBUElEYXRhID0gKGFwaURhdGEpID0+IHtcbiAgbGV0IGZldGNoRGF0YSA9IHt9O1xuICBpZiAoYXBpRGF0YSkge1xuICAgIGFwaURhdGEuZm9yRWFjaCgoaXRlbSwga2V5KSA9PiB7XG4gICAgICBmZXRjaERhdGEuZGF0YSA9IGl0ZW0uZGF0YSA/IFsuLi5pdGVtLmRhdGFdIDogW107XG4gICAgICBmZXRjaERhdGEubmFtZSA9IGl0ZW0ubmFtZSA/IGl0ZW0ubmFtZSA6ICcnO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGRhdGEgPSBmZXRjaERhdGEgPyBmZXRjaERhdGEuZGF0YSA6IFtdO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hlZERhdGEgPSAocHJvY2Vzc2VkRGF0YSkgPT4ge1xuICBjb25zdCByYW5kTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAgKyAxKTtcbiAgY29uc3QgZGF0YSA9IHNodWZmbGUocHJvY2Vzc2VkRGF0YS5zbGljZSgwLCByYW5kTnVtYmVyKSk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaFN0YXRlS2V5Q2hlY2sgPSAoc3RhdGUpID0+IHtcbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKFxuICAgICAgc3RhdGVba2V5XSAhPT0gbnVsbCAmJlxuICAgICAgc3RhdGVba2V5XSAhPSAnJyAmJlxuICAgICAgc3RhdGVba2V5XSAhPSBbXSAmJlxuICAgICAgc3RhdGVba2V5XSAhPSAwICYmXG4gICAgICBzdGF0ZVtrZXldICE9IDEwMFxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBQYWdpbmF0b3IgPSAocG9zdHMsIHByb2Nlc3NlZERhdGEsIGxpbWl0KSA9PiB7XG4gIHJldHVybiBbLi4ucG9zdHMsIC4uLnByb2Nlc3NlZERhdGEuc2xpY2UocG9zdHMubGVuZ3RoLCBwb3N0cy5sZW5ndGggKyBsaW1pdCldO1xufTtcblxuY29uc3QgR2V0QVBJRGF0YSA9IGFzeW5jIChhcGlVcmwpID0+IHtcbiAgY29uc3QgcHJvbWlzZXMgPSBhcGlVcmwubWFwKGFzeW5jIChyZXBvKSA9PiB7XG4gICAgY29uc3QgYXBpUGF0aCA9IGAke3Byb2Nlc3MuZW52LlNFUlZFUl9BUEl9L3N0YXRpYy9kYXRhYDsgLy8gcmVhZCBpdCBmcm9tIGVudiB2YXJpYWJsZVxuICAgIGNvbnN0IGFwaSA9IGAke2FwaVBhdGh9LyR7cmVwby5lbmRwb2ludH0uanNvbmA7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBGZXRjaEFQSURhdGEoYXBpKTtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogcmVwby5uYW1lLFxuICAgICAgZGF0YTogcmVzcG9uc2UsXG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IHJlY2V2aWVkRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgcmV0dXJuIHJlY2V2aWVkRGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdldEFQSURhdGE7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5sZXQgZGlyZWN0aW9uID0gJ2x0cic7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZGlyZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXS5nZXRBdHRyaWJ1dGUoJ2RpcicpO1xufVxuY29uc3Qgd2l0aERpcmVjdGlvbiA9IENvbXBvbmVudCA9PiBwcm9wcyA9PiB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gZGF0YS1ydGw9e2RpcmVjdGlvbn0gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGlyZWN0aW9uO1xuZXhwb3J0IHsgZGlyZWN0aW9uIH07XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvVUkvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21wb25lbnRzL1VJL0hlYWRpbmcvSGVhZGluZyc7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJ2NvbXBvbmVudHMvU2VjdGlvblRpdGxlL1NlY3Rpb25UaXRsZSc7XG5pbXBvcnQgU2VhcmNoQXJlYSBmcm9tICdjb250YWluZXIvSG9tZS9TZWFyY2gvU2VhcmNoJztcbmltcG9ydCBMb2NhdGlvbkdyaWQgZnJvbSAnY29udGFpbmVyL0hvbWUvTG9jYXRpb24vTG9jYXRpb24nO1xuaW1wb3J0IFNlY3Rpb25HcmlkIGZyb20gJ2NvbXBvbmVudHMvU2VjdGlvbkdyaWQvU2VjdGlvbkdyaWQnO1xuaW1wb3J0IEdldEFQSURhdGEgZnJvbSAnbGlicmFyeS9oZWxwZXJzL2dldF9hcGlfZGF0YSc7XG5pbXBvcnQgeyBMSVNUSU5HX1BPU1RTX1BBR0UsIFNJTkdMRV9QT1NUX1BBR0UgfSBmcm9tICdzZXR0aW5ncy9jb25zdGFudCc7XG5pbXBvcnQge1xuICBIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfTU9CSUxFX0RFVklDRSxcbiAgSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX1RBQkxFVF9ERVZJQ0UsXG4gIEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9ERVNLVE9QX0RFVklDRSxcbiAgSE9NRV9QQUdFX1NFQ1RJT05TX0NPTFVNTlNfUkVTUE9OU0lWRV9XSURUSCxcbn0gZnJvbSAnc2V0dGluZ3MvY29uZmlnJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XG4gIGxldCBsaW1pdDtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5UcmlwRmluZGVyLiB8IEEgcmVhY3QgbmV4dCBsaXN0aW5nIHRlbXBsYXRlPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTZWFyY2hBcmVhIC8+XG4gICAgICA8TG9jYXRpb25HcmlkIGRhdGE9e3Byb3BzLmxvY2F0aW9uRGF0YX0gIC8+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPXt0cnVlfT5cbiAgICAgICAgPFNlY3Rpb25UaXRsZVxuICAgICAgICAgIHRpdGxlPXs8SGVhZGluZyBjb250ZW50PVwiVHJhdmVsZXJz4oCZIENob2ljZTogVG9wIGhvdGVsc1wiIC8+fVxuICAgICAgICAgIGxpbms9e1xuICAgICAgICAgICAgPExpbmsgaHJlZj17TElTVElOR19QT1NUU19QQUdFfT5cbiAgICAgICAgICAgICAgPGE+U2hvdyBhbGw8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8U2VjdGlvbkdyaWRcbiAgICAgICAgICBsaW5rPXtTSU5HTEVfUE9TVF9QQUdFfVxuICAgICAgICAgIGNvbHVtbldpZHRoPXtIT01FX1BBR0VfU0VDVElPTlNfQ09MVU1OU19SRVNQT05TSVZFX1dJRFRIfVxuICAgICAgICAgIGRhdGE9e3Byb3BzLnRvcEhvdGVsRGF0YS5zbGljZSgwLCBsaW1pdCl9XG4gICAgICAgICAgbGltaXQ9e2xpbWl0fVxuICAgICAgICAvPlxuICAgICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgICAgdGl0bGU9ezxIZWFkaW5nIGNvbnRlbnQ9XCJCZXN0IFJhdGVkOiBMdXhhcnkgaG90ZWxzXCIgLz59XG4gICAgICAgICAgbGluaz17XG4gICAgICAgICAgICA8TGluayBocmVmPXtMSVNUSU5HX1BPU1RTX1BBR0V9PlxuICAgICAgICAgICAgICA8YT5TaG93IGFsbDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxTZWN0aW9uR3JpZFxuICAgICAgICAgIGxpbms9e1NJTkdMRV9QT1NUX1BBR0V9XG4gICAgICAgICAgY29sdW1uV2lkdGg9e0hPTUVfUEFHRV9TRUNUSU9OU19DT0xVTU5TX1JFU1BPTlNJVkVfV0lEVEh9XG4gICAgICAgICAgZGF0YT17cHJvcHMubHV4YXJ5SG90ZWxEYXRhLnNsaWNlKDAsIGxpbWl0KX1cbiAgICAgICAgICBsaW1pdD17bGltaXR9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhcGlVcmwgPSBbXG4gICAge1xuICAgICAgZW5kcG9pbnQ6ICdob3RlbCcsXG4gICAgICBuYW1lOiAnbHV4YXJ5SG90ZWxEYXRhJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGVuZHBvaW50OiAndG9wLWhvdGVsJyxcbiAgICAgIG5hbWU6ICd0b3BIb3RlbERhdGEnLFxuICAgIH0sXG4gICAge1xuICAgICAgZW5kcG9pbnQ6ICdsb2NhdGlvbicsXG4gICAgICBuYW1lOiAnbG9jYXRpb25EYXRhJyxcbiAgICB9LFxuICBdO1xuICBjb25zdCBwYWdlRGF0YSA9IGF3YWl0IEdldEFQSURhdGEoYXBpVXJsKTtcbiAgbGV0IGxvY2F0aW9uRGF0YSA9IFtdLFxuICAgIHRvcEhvdGVsRGF0YSA9IFtdLFxuICAgIGx1eGFyeUhvdGVsRGF0YSA9IFtdO1xuXG4gIGlmIChwYWdlRGF0YSkge1xuICAgIHBhZ2VEYXRhLmZvckVhY2goKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ2xvY2F0aW9uRGF0YScpIHtcbiAgICAgICAgbG9jYXRpb25EYXRhID0gaXRlbS5kYXRhID8gWy4uLml0ZW0uZGF0YV0gOiBbXTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5uYW1lID09PSAndG9wSG90ZWxEYXRhJykge1xuICAgICAgICB0b3BIb3RlbERhdGEgPSBpdGVtLmRhdGEgPyBbLi4uaXRlbS5kYXRhXSA6IFtdO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLm5hbWUgPT09ICdsdXhhcnlIb3RlbERhdGEnKSB7XG4gICAgICAgIGx1eGFyeUhvdGVsRGF0YSA9IGl0ZW0uZGF0YSA/IFsuLi5pdGVtLmRhdGFdIDogW107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBsb2NhdGlvbkRhdGEsIHRvcEhvdGVsRGF0YSwgbHV4YXJ5SG90ZWxEYXRhIH0sXG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgSE9NRV9QQUdFX1NFQ1RJT05TX0lURU1fTElNSVRfRk9SX01PQklMRV9ERVZJQ0UgPSA0O1xuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19JVEVNX0xJTUlUX0ZPUl9UQUJMRVRfREVWSUNFID0gNDtcbmV4cG9ydCBjb25zdCBIT01FX1BBR0VfU0VDVElPTlNfSVRFTV9MSU1JVF9GT1JfREVTS1RPUF9ERVZJQ0UgPSA1O1xuZXhwb3J0IGNvbnN0IEhPTUVfUEFHRV9TRUNUSU9OU19DT0xVTU5TX1JFU1BPTlNJVkVfV0lEVEggPSBbXG4gIDEgLyAxLFxuICAxIC8gMixcbiAgMSAvIDMsXG4gIDEgLyA0LFxuICAxIC8gNSxcbl07XG5leHBvcnQgY29uc3QgTElTVElOR19QQUdFX1BPU1RfTElNSVQgPSAxMDtcblxuZXhwb3J0IGNvbnN0IExJU1RJTkdfUEFHRV9DT0xVTU5fV0lEVEhfV0lUSE9VVF9NQVAgPSBbXG4gIDEgLyAxLFxuICAxIC8gMixcbiAgMSAvIDMsXG4gIDEgLyA0LFxuICAxIC8gNSxcbl07XG5leHBvcnQgY29uc3QgTElTVElOR19QQUdFX0NPTFVNTl9XSURUSF9XSVRIX01BUCA9IFtcbiAgMSAvIDEsXG4gIDEgLyAyLFxuICAxIC8gMixcbiAgMSAvIDIsXG4gIDEgLyAzLFxuXTtcbiIsIi8vIEdlbmVyYWwgUGFnZSBTZWN0aW9uXG5leHBvcnQgY29uc3QgSE9NRV9QQUdFID0gJy8nO1xuZXhwb3J0IGNvbnN0IEFHRU5UU19QQUdFID0gJy9hZ2VudHMnO1xuXG4vLyBMaXN0aW5nIFNpbmdsZSBQYWdlIFNlY3Rpb25cbmV4cG9ydCBjb25zdCBMSVNUSU5HX1BPU1RTX1BBR0UgPSAnL2xpc3RpbmcnO1xuZXhwb3J0IGNvbnN0IFNJTkdMRV9QT1NUX1BBR0UgPSAnL3Bvc3QnO1xuXG4vLyBBZ2VudCBQcm9maWxlIFBhZ2UgU2VjdGlvblxuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfUEFHRSA9ICcvcHJvZmlsZSc7XG5leHBvcnQgY29uc3QgQUdFTlRfQUNDT1VOVF9TRVRUSU5HU19QQUdFID0gJy9hY2NvdW50LXNldHRpbmdzJztcbmV4cG9ydCBjb25zdCBBR0VOVF9QUk9GSUxFX0VESVRfUEFHRSA9ICcvZWRpdCc7XG5leHBvcnQgY29uc3QgQUdFTlRfSU1BR0VfRURJVF9QQUdFID0gJy9jaGFuZ2UtaW1hZ2UnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BBU1NXT1JEX0NIQU5HRV9QQUdFID0gJy9jaGFuZ2UtcGFzc3dvcmQnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfREVMRVRFID0gJy9kZWxldGUnO1xuZXhwb3J0IGNvbnN0IEFHRU5UX1BST0ZJTEVfRkFWT1VSSVRFID0gJy9mYXZvdXJpdGUtcG9zdCc7XG5leHBvcnQgY29uc3QgQUdFTlRfUFJPRklMRV9DT05UQUNUID0gJy9jb250YWN0JztcbmV4cG9ydCBjb25zdCBBRERfSE9URUxfUEFHRSA9ICcvYWRkLWhvdGVsJztcblxuLy8gT3RoZXIgUGFnZXNcbmV4cG9ydCBjb25zdCBQUklDSU5HX1BMQU5fUEFHRSA9ICcvcHJpY2luZy1wbGFuJztcbmV4cG9ydCBjb25zdCBQUklWQUNZX1BBR0UgPSAnL3ByaXZhY3knO1xuXG4vLyBMb2dpbiAvIFJlZ2lzdGF0aW9uIFBhZ2VcbmV4cG9ydCBjb25zdCBMT0dJTl9QQUdFID0gJy9zaWduLWluJztcbmV4cG9ydCBjb25zdCBSRUdJU1RSQVRJT05fUEFHRSA9ICcvc2lnbi11cCc7XG5leHBvcnQgY29uc3QgQ0hBTkdFX1BBU1NXT1JEX1BBR0UgPSAnL2NoYW5nZS1wYXNzd29yZCc7XG5leHBvcnQgY29uc3QgRk9SR0VUX1BBU1NXT1JEX1BBR0UgPSAnL2ZvcmdldC1wYXNzd29yZCc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvTWludXNPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvUGx1c091dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBnbGlkZWpzL2dsaWRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9idXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvaW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9pc0VtcHR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9zaHVmZmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGVzL2luaXRpYWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1tYXBzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1tYXBzL2xpYi9jb21wb25lbnRzL3BsYWNlcy9TdGFuZGFsb25lU2VhcmNoQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW11bHRpLWNhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY29tcG9zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtc3lzdGVtXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
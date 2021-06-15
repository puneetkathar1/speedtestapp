exports.ids = [7];
exports.modules = {

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

/***/ "./container/Agent/AccountDetails/AgentItemLists.js":
/*!**********************************************************!*\
  !*** ./container/Agent/AccountDetails/AgentItemLists.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgentItemLists; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/SectionGrid/SectionGrid */ "./components/SectionGrid/SectionGrid.js");
/* harmony import */ var components_UI_ContentLoader_ContentLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/ContentLoader/ContentLoader */ "./components/UI/ContentLoader/ContentLoader.js");
/* harmony import */ var settings_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! settings/constant */ "./settings/constant.js");
var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Agent\\AccountDetails\\AgentItemLists.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LISTED_POST_LIMIT = 6;
function AgentItemLists({
  processedData,
  loadMoreData,
  loading,
  deviceType
}) {
  const listed_post = processedData[0] && processedData[0].listed_post ? processedData[0].listed_post : [];
  return __jsx(components_SectionGrid_SectionGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    link: settings_constant__WEBPACK_IMPORTED_MODULE_3__["SINGLE_POST_PAGE"],
    columnWidth: [1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6],
    deviceType: deviceType,
    data: listed_post,
    totalItem: listed_post.length,
    limit: LISTED_POST_LIMIT,
    loading: loading,
    handleLoadMore: loadMoreData,
    placeholder: __jsx(components_UI_ContentLoader_ContentLoader__WEBPACK_IMPORTED_MODULE_2__["PostPlaceholder"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 20
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  });
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyaWRDYXJkL0dyaWRDYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JpZENhcmQvR3JpZENhcmQuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9Qcm9kdWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlY3Rpb25HcmlkL1NlY3Rpb25HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvQm94L0JveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0Zhdm9yaXRlL0Zhdm9yaXRlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVUkvRmF2b3JpdGUvRmF2b3JpdGUuc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9GYXZvcml0ZS91c2VUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9SYXRpbmcvUmF0aW5nLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lci9BZ2VudC9BY2NvdW50RGV0YWlscy9BZ2VudEl0ZW1MaXN0cy5qcyJdLCJuYW1lcyI6WyJHcmlkQ2FyZCIsImNsYXNzTmFtZSIsImZhdm9yaXRlIiwibG9jYXRpb24iLCJ0aXRsZSIsInByaWNlIiwicmF0aW5nIiwiZWRpdEJ0biIsInZpZXdEZXRhaWxzQnRuIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwidHJpbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJHcmlkQ2FyZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZUdldCIsIkltYWdlV3JhcHBlciIsIkZhdm9yaXRlSWNvbiIsIkNvbnRlbnRXcmFwcGVyIiwiTG9jYXRpb25BcmVhIiwiVGl0bGVBcmVhIiwiUHJpY2VBcmVhIiwiUmF0aW5nQXJlYSIsIk1ldGFXcmFwcGVyIiwiQnV0dG9uR3JvdXAiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsInBhcml0aWFsVmlzaWJpbGl0eUd1dHRlciIsIm1vYmlsZSIsInRhYmxldCIsIlByb2R1Y3RDYXJkIiwicmF0aW5nQ291bnQiLCJnYWxsZXJ5Iiwic2x1ZyIsImxpbmsiLCJkZXZpY2VUeXBlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0dGVkQWRkcmVzcyIsIm1hcCIsInVybCIsImluZGV4Iiwid2lkdGgiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJwb3NpdGlvbiIsIkxvYWRNb3JlIiwiaGFuZGxlTG9hZE1vcmUiLCJzaG93QnV0dG9uIiwiYnV0dG9uVGV4dCIsImxvYWRpbmciLCJsb2FkTW9yZUNvbXBvbmVudCIsImxvYWRNb3JlU3R5bGUiLCJTZWN0aW9uR3JpZCIsImRhdGEiLCJ0b3RhbEl0ZW0iLCJsaW1pdCIsImNvbHVtbldpZHRoIiwicGFnaW5hdGlvbkNvbXBvbmVudCIsInBsYWNlaG9sZGVyIiwicm93U3R5bGUiLCJjb2x1bW5TdHlsZSIsIm4iLCJOdW1iZXIiLCJsaW1pdHMiLCJBcnJheSIsImZpbGwiLCJsZW5ndGgiLCJpdGVtIiwiaWQiLCJpIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyIsImJvb2wiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiLCJmbGV4Qm94IiwiZmxleFdyYXAiLCJtciIsIm1sIiwicHIiLCJwbCIsImp1c3RpZnlDb250ZW50IiwibXQiLCJCb3hXcmFwcGVyIiwiYmFzZSIsInRoZW1lZCIsInByb3BzIiwiY3NzIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiQm94IiwiYW55IiwiYXMiLCJvbmVPZiIsImFycmF5T2YiLCJmb250U2l6ZSIsImNvbG9yIiwiZmxleCIsIm9yZGVyIiwiYWxpZ25TZWxmIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b20iLCJib3JkZXJMZWZ0IiwiYm9yZGVyQ29sb3IiLCJGYXZvcml0ZSIsImNvbnRlbnQiLCJvbkNsaWNrIiwidG9nZ2xlVmFsdWUiLCJ0b2dnbGVIYW5kbGVyIiwidXNlVG9nZ2xlIiwiYWRkQWxsQ2xhc3MiLCJwdXNoIiwiaGFuZGVsQ2xpY2siLCJqb2luIiwiYWRkQW5pbWF0aW9uIiwia2V5ZnJhbWVzIiwicmVtb3ZlQW5pbWF0aW9uIiwiQWRkQW5pbWF0aW9uIiwiUmVtb3ZlQW5pbWF0aW9uIiwiRmF2b3JpdGVXcmFwcGVyIiwiYnV0dG9uIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwidG9nZ2xlciIsInVzZUNhbGxiYWNrIiwiUmF0aW5nIiwidHlwZSIsInJhdGluZ0ZpZWxkTmFtZSIsImZsb29yVmFsdWUiLCJyYXRpbmdWaWV3IiwiTWF0aCIsImZsb29yIiwibGlzdGluZ0NvbmRpdGlvbiIsInNob3dSYXRpbmdDb3VudCIsIkxJU1RFRF9QT1NUX0xJTUlUIiwiQWdlbnRJdGVtTGlzdHMiLCJwcm9jZXNzZWREYXRhIiwibG9hZE1vcmVEYXRhIiwibGlzdGVkX3Bvc3QiLCJTSU5HTEVfUE9TVF9QQUdFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVlBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQ2hCQyxXQURnQjtBQUVoQkMsVUFGZ0I7QUFHaEJDLFVBSGdCO0FBSWhCQyxPQUpnQjtBQUtoQkMsT0FMZ0I7QUFNaEJDLFFBTmdCO0FBT2hCQyxTQVBnQjtBQVFoQkMsZ0JBUmdCO0FBU2hCQztBQVRnQixDQUFELEtBVVg7QUFDSixNQUFJQyxPQUFPLEdBQUdGLGNBQWMsSUFBSUQsT0FBbEIsR0FBNkIsV0FBVU4sU0FBVSxFQUFqRCxHQUFxREEsU0FBbkU7QUFDQSxTQUNFLE1BQUMsdURBQUQ7QUFBaUIsYUFBUyxFQUFHLGFBQVlTLE9BQVEsRUFBckIsQ0FBdUJDLElBQXZCLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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LENBQUNDO0FBSlYsQ0FBbkI7QUFPZWlJLHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1TLGlCQUFpQixHQUFHLENBQTFCO0FBRWUsU0FBU0MsY0FBVCxDQUF3QjtBQUNyQ0MsZUFEcUM7QUFFckNDLGNBRnFDO0FBR3JDL0YsU0FIcUM7QUFJckNoQjtBQUpxQyxDQUF4QixFQUtaO0FBQ0QsUUFBTWdILFdBQVcsR0FDZkYsYUFBYSxDQUFDLENBQUQsQ0FBYixJQUFvQkEsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQkUsV0FBckMsR0FDSUYsYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQkUsV0FEckIsR0FFSSxFQUhOO0FBS0EsU0FDRSxNQUFDLDBFQUFEO0FBQ0UsUUFBSSxFQUFFQyxrRUFEUjtBQUVFLGVBQVcsRUFBRSxDQUFDLElBQUksQ0FBTCxFQUFRLElBQUksQ0FBWixFQUFlLElBQUksQ0FBbkIsRUFBc0IsSUFBSSxDQUExQixFQUE2QixJQUFJLENBQWpDLEVBQW9DLElBQUksQ0FBeEMsQ0FGZjtBQUdFLGNBQVUsRUFBRWpILFVBSGQ7QUFJRSxRQUFJLEVBQUVnSCxXQUpSO0FBS0UsYUFBUyxFQUFFQSxXQUFXLENBQUMvRSxNQUx6QjtBQU1FLFNBQUssRUFBRTJFLGlCQU5UO0FBT0UsV0FBTyxFQUFFNUYsT0FQWDtBQVFFLGtCQUFjLEVBQUUrRixZQVJsQjtBQVNFLGVBQVcsRUFBRSxNQUFDLHlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFUZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFhRCxDIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBHcmlkQ2FyZFdyYXBwZXIsIHtcbiAgSW1hZ2VXcmFwcGVyLFxuICBGYXZvcml0ZUljb24sXG4gIENvbnRlbnRXcmFwcGVyLFxuICBMb2NhdGlvbkFyZWEsXG4gIFRpdGxlQXJlYSxcbiAgUHJpY2VBcmVhLFxuICBSYXRpbmdBcmVhLFxuICBNZXRhV3JhcHBlcixcbiAgQnV0dG9uR3JvdXAsXG59IGZyb20gJy4vR3JpZENhcmQuc3R5bGUnO1xuXG5jb25zdCBHcmlkQ2FyZCA9ICh7XG4gIGNsYXNzTmFtZSxcbiAgZmF2b3JpdGUsXG4gIGxvY2F0aW9uLFxuICB0aXRsZSxcbiAgcHJpY2UsXG4gIHJhdGluZyxcbiAgZWRpdEJ0bixcbiAgdmlld0RldGFpbHNCdG4sXG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBsZXQgY2xhc3NlcyA9IHZpZXdEZXRhaWxzQnRuIHx8IGVkaXRCdG4gPyBgaGFzX2J0biAke2NsYXNzTmFtZX1gIDogY2xhc3NOYW1lO1xuICByZXR1cm4gKFxuICAgIDxHcmlkQ2FyZFdyYXBwZXIgY2xhc3NOYW1lPXtgZ3JpZF9jYXJkICR7Y2xhc3Nlc31gLnRyaW0oKX0+XG4gICAgICA8SW1hZ2VXcmFwcGVyIGNsYXNzTmFtZT1cIm1lZGlhX3dyYXBwZXJcIj57Y2hpbGRyZW59PC9JbWFnZVdyYXBwZXI+XG4gICAgICA8Q29udGVudFdyYXBwZXIgY2xhc3NOYW1lPVwiY29udGVudF93cmFwcGVyXCI+XG4gICAgICAgIHtsb2NhdGlvbiAmJiA8TG9jYXRpb25BcmVhPntsb2NhdGlvbn08L0xvY2F0aW9uQXJlYT59XG4gICAgICAgIHt0aXRsZSAmJiA8VGl0bGVBcmVhPnt0aXRsZX08L1RpdGxlQXJlYT59XG4gICAgICAgIDxNZXRhV3JhcHBlciBjbGFzc05hbWU9XCJtZXRhX3dyYXBwZXJcIj5cbiAgICAgICAgICB7cHJpY2UgJiYgPFByaWNlQXJlYSBjbGFzc05hbWU9XCJwcmljZVwiPntwcmljZX08L1ByaWNlQXJlYT59XG4gICAgICAgICAge3JhdGluZyAmJiA8UmF0aW5nQXJlYSBjbGFzc05hbWU9XCJyYXRpbmdcIj57cmF0aW5nfTwvUmF0aW5nQXJlYT59XG4gICAgICAgICAge3ZpZXdEZXRhaWxzQnRuIHx8IGVkaXRCdG4gPyAoXG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAgY2xhc3NOYW1lPVwiYnV0dG9uX2dyb3VwXCI+XG4gICAgICAgICAgICAgIHt2aWV3RGV0YWlsc0J0bn1cbiAgICAgICAgICAgICAge2VkaXRCdG59XG4gICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L01ldGFXcmFwcGVyPlxuICAgICAgPC9Db250ZW50V3JhcHBlcj5cblxuICAgICAge2Zhdm9yaXRlICYmIDxGYXZvcml0ZUljb24+e2Zhdm9yaXRlfTwvRmF2b3JpdGVJY29uPn1cbiAgICA8L0dyaWRDYXJkV3JhcHBlcj5cbiAgKTtcbn07XG5cbkdyaWRDYXJkLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgcHJpY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJhdGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgbG9jYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIGVkaXRCdG46IFByb3BUeXBlcy5lbGVtZW50LFxuICB2aWV3RGV0YWlsc0J0bjogUHJvcFR5cGVzLmVsZW1lbnQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkQ2FyZDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBHcmlkQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gICYuaGFzX2J0biB7XG4gICAgLmJ1dHRvbl9ncm91cCB7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCAke3RoZW1lR2V0KCdib3hTaGFkb3cuMicsICdyZ2JhKDAsIDAsIDAsIDAuMTYpJyl9O1xuXG4gICAgLmNvbnRlbnRfd3JhcHBlciB7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICYuaGFzX2J0biB7XG4gICAgICAubWV0YV93cmFwcGVyIHtcbiAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkge1xuICAgICAgICAuYnV0dG9uX2dyb3VwIHtcbiAgICAgICAgICB0b3A6IDE5cHg7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlYWN0LW11bHRpcGxlLWNhcm91c2VsX19hcnJvdyB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG5cbiAgICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtZG90LWxpc3Qge1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gID4gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnJlYWN0LW11bHRpLWNhcm91c2VsLWxpc3Qge1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU4ZWM7XG4gIH1cblxuICAucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbSB7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgfVxuXG4gIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3cge1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMjIlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgei1pbmRleDogMTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgfVxuXG4gIC5yZWFjdC1tdWx0aXBsZS1jYXJvdXNlbF9fYXJyb3ctLWxlZnQge1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gbGVmdCxcbiAgICAgIHRyYW5zcGFyZW50IDAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXG4gICAgKTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gbGVmdCxcbiAgICAgICAgdHJhbnNwYXJlbnQgMCUsXG4gICAgICAgIHJnYmEoMCwgMCwgMCwgMC4yNSkgMTAwJVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAucmVhY3QtbXVsdGlwbGUtY2Fyb3VzZWxfX2Fycm93LS1yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gcmlnaHQsXG4gICAgICB0cmFuc3BhcmVudCAwJSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4yNSkgMTAwJVxuICAgICk7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIHJpZ2h0LFxuICAgICAgICB0cmFuc3BhcmVudCAwJSxcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3QtbGlzdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTMwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byBib3R0b20sXG4gICAgICB0cmFuc3BhcmVudCAwJSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4yNSkgMTAwJVxuICAgICk7XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDAuM3MgZWFzZTtcbiAgfVxuXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3Qge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGhlaWdodDogNnB4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMycsICcjRTlFOEU4Jyl9O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIH1cbiAgfVxuXG4gIC5yZWFjdC1tdWx0aS1jYXJvdXNlbC1kb3QtLWFjdGl2ZSB7XG4gICAgYnV0dG9uIHtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9yLjEnLCAnI2ZmZmZmZicpfTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGYXZvcml0ZUljb24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDhweDtcbiAgei1pbmRleDogOTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgZWFzZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMb2NhdGlvbkFyZWEgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4xJywgJyM5MDkwOTAnKX07XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlQXJlYSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW46IDRweCAwIDVweDtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgbWFyZ2luOiA0cHggMCA1cHg7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByaWNlQXJlYSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmA7XG5cbmV4cG9ydCBjb25zdCBSYXRpbmdBcmVhID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgLyogQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXHRcdG1hcmdpbi10b3A6IDdweDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHR9ICovXG5cbiAgc3BhbiB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICBpIHtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gIH1cblxuICBzdmcge1xuICAgIGZpbGw6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICB9XG5cbiAgc3Ryb25nIHtcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAvKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cdFx0XHRtYXJnaW4tbGVmdDogMDtcblx0XHR9ICovXG4gIH1cblxuICAuYW50LXJhdGUge1xuICAgIC8qIG1hcmdpbi10b3A6IC0ycHg7ICovXG4gICAgLmFudC1yYXRlLXN0YXIge1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWV0YVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkdyb3VwID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy10b3A6IDdweDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4xJywgJyMzOTlDOUYnKX07XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkQ2FyZFdyYXBwZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEZpRXh0ZXJuYWxMaW5rIH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcbmltcG9ydCBSYXRpbmcgZnJvbSAnY29tcG9uZW50cy9VSS9SYXRpbmcvUmF0aW5nJztcbmltcG9ydCBGYXZvdXJpdGUgZnJvbSAnY29tcG9uZW50cy9VSS9GYXZvcml0ZS9GYXZvcml0ZSc7XG5cbmltcG9ydCBHcmlkQ2FyZCBmcm9tICcuLi9HcmlkQ2FyZC9HcmlkQ2FyZCc7XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7XG4gICAgICBtYXg6IDMwMDAsXG4gICAgICBtaW46IDEwMjQsXG4gICAgfSxcbiAgICBpdGVtczogMSxcbiAgICBwYXJpdGlhbFZpc2liaWxpdHlHdXR0ZXI6IDQwLFxuICB9LFxuICBtb2JpbGU6IHtcbiAgICBicmVha3BvaW50OiB7XG4gICAgICBtYXg6IDQ2NCxcbiAgICAgIG1pbjogMCxcbiAgICB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHBhcml0aWFsVmlzaWJpbGl0eUd1dHRlcjogMzAsXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIG1heDogMTAyNCxcbiAgICAgIG1pbjogNDY0LFxuICAgIH0sXG4gICAgaXRlbXM6IDEsXG4gICAgcGFyaXRpYWxWaXNpYmlsaXR5R3V0dGVyOiAzMCxcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0Q2FyZCh7XG4gIHRpdGxlLFxuICByYXRpbmcsXG4gIGxvY2F0aW9uLFxuICBwcmljZSxcbiAgcmF0aW5nQ291bnQsXG4gIGdhbGxlcnksXG4gIHNsdWcsXG4gIGxpbmssXG4gIGRldmljZVR5cGUsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPEdyaWRDYXJkXG4gICAgICBmYXZvcml0ZT17XG4gICAgICAgIDxGYXZvdXJpdGVcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgfVxuICAgICAgbG9jYXRpb249e2xvY2F0aW9uLmZvcm1hdHRlZEFkZHJlc3N9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBwcmljZT17YCQke3ByaWNlfS9OaWdodCAtIEZyZWUgQ2FuY2VsbGF0aW9uYH1cbiAgICAgIHJhdGluZz17PFJhdGluZyByYXRpbmc9e3JhdGluZ30gcmF0aW5nQ291bnQ9e3JhdGluZ0NvdW50fSB0eXBlPVwiYnVsa1wiIC8+fVxuICAgICAgdmlld0RldGFpbHNCdG49e1xuICAgICAgICA8TGluayBocmVmPXtgJHtsaW5rfS9bc2x1Z11gfSBhcz17YCR7bGlua30vJHtzbHVnfWB9IHByZWZldGNoPXtmYWxzZX0+XG4gICAgICAgICAgPGE+XG4gICAgICAgICAgICA8RmlFeHRlcm5hbExpbmsgLz4gVmlldyBEZXRhaWxzXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICB9XG4gICAgPlxuICAgICAgPENhcm91c2VsXG4gICAgICAgIHNzclxuICAgICAgICBhZGRpdGlvbmFsVHJhbnNmcm9tPXswfVxuICAgICAgICBhcnJvd3NcbiAgICAgICAgYXV0b1BsYXlTcGVlZD17MzAwMH1cbiAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJjb250YWluZXJcIlxuICAgICAgICBkb3RMaXN0Q2xhc3M9XCJcIlxuICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgZm9jdXNPblNlbGVjdD17ZmFsc2V9XG4gICAgICAgIGluZmluaXRlXG4gICAgICAgIGl0ZW1DbGFzcz1cIlwiXG4gICAgICAgIHJlbmRlckRvdHNPdXRzaWRlPXtmYWxzZX1cbiAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgZGV2aWNlVHlwZT17ZGV2aWNlVHlwZX1cbiAgICAgICAgc2hvd0RvdHM9e3RydWV9XG4gICAgICAgIHNsaWRlckNsYXNzPVwiXCJcbiAgICAgICAgc2xpZGVzVG9TbGlkZT17MX1cbiAgICAgID5cbiAgICAgICAge2dhbGxlcnkubWFwKCh7IHVybCwgdGl0bGUgfSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VybH1cbiAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgPC9HcmlkQ2FyZD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFRleHQgZnJvbSAnY29tcG9uZW50cy9VSS9UZXh0L1RleHQnO1xuaW1wb3J0IEJveCBmcm9tICdjb21wb25lbnRzL1VJL0JveC9Cb3gnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi4vUHJvZHVjdENhcmQvUHJvZHVjdENhcmQnO1xuY29uc3QgTG9hZE1vcmUgPSAoe1xuICBoYW5kbGVMb2FkTW9yZSxcbiAgc2hvd0J1dHRvbixcbiAgYnV0dG9uVGV4dCxcbiAgbG9hZGluZyxcbiAgbG9hZE1vcmVDb21wb25lbnQsXG4gIGxvYWRNb3JlU3R5bGUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgISFzaG93QnV0dG9uICYmIChcbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwibG9hZG1vcmVfd3JhcHBlclwiIHsuLi5sb2FkTW9yZVN0eWxlfT5cbiAgICAgICAge2xvYWRNb3JlQ29tcG9uZW50ID8gKFxuICAgICAgICAgIGxvYWRNb3JlQ29tcG9uZW50XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtsb2FkaW5nfSBvbkNsaWNrPXtoYW5kbGVMb2FkTW9yZX0+XG4gICAgICAgICAgICB7YnV0dG9uVGV4dCB8fCAnTG9hZCBNb3JlJ31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3Rpb25HcmlkKHtcbiAgZGF0YSA9IFtdLFxuICB0b3RhbEl0ZW0sXG4gIGxpbWl0LFxuICBjb2x1bW5XaWR0aCxcbiAgcGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgaGFuZGxlTG9hZE1vcmUsXG4gIGxvYWRNb3JlQ29tcG9uZW50LFxuICBwbGFjZWhvbGRlcixcbiAgbG9hZGluZyxcbiAgYnV0dG9uVGV4dCxcbiAgcm93U3R5bGUsXG4gIGNvbHVtblN0eWxlLFxuICBsb2FkTW9yZVN0eWxlLFxuICBsaW5rLFxufSkge1xuICBjb25zdCBuID0gbGltaXQgPyBOdW1iZXIobGltaXQpIDogMTtcbiAgY29uc3QgbGltaXRzID0gQXJyYXkobikuZmlsbCgwKTtcblxuICBsZXQgc2hvd0J1dHRvbiA9IGRhdGEubGVuZ3RoIDwgdG90YWxJdGVtO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwiZ3JpZF93cmFwcGVyXCIgey4uLnJvd1N0eWxlfT5cbiAgICAgICAge2RhdGEgJiYgZGF0YS5sZW5ndGhcbiAgICAgICAgICA/IGRhdGEubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZF9jb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9e2NvbHVtbldpZHRofVxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgey4uLmNvbHVtblN0eWxlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBsaW5rPXtsaW5rfSB7Li4uaXRlbX0gLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7bG9hZGluZyAmJlxuICAgICAgICAgIGxpbWl0cy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZF9jb2x1bW5cIlxuICAgICAgICAgICAgICB3aWR0aD17Y29sdW1uV2lkdGh9XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgey4uLmNvbHVtblN0eWxlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGxhY2Vob2xkZXIgPyBwbGFjZWhvbGRlciA6IDxUZXh0IGNvbnRlbnQ9XCJMb2FkaW5nIC4uLlwiIC8+fVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgKSl9XG4gICAgICA8L0JveD5cblxuICAgICAge3Nob3dCdXR0b24gJiYgKFxuICAgICAgICA8TG9hZE1vcmVcbiAgICAgICAgICBzaG93QnV0dG9uPXtzaG93QnV0dG9ufVxuICAgICAgICAgIGhhbmRsZUxvYWRNb3JlPXtoYW5kbGVMb2FkTW9yZX1cbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgIGJ1dHRvblRleHQ9e2J1dHRvblRleHR9XG4gICAgICAgICAgbG9hZE1vcmVDb21wb25lbnQ9e2xvYWRNb3JlQ29tcG9uZW50fVxuICAgICAgICAgIGxvYWRNb3JlU3R5bGU9e2xvYWRNb3JlU3R5bGV9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge3BhZ2luYXRpb25Db21wb25lbnQgJiYgKFxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInBhZ2luYXRpb25fd3JhcHBlclwiPntwYWdpbmF0aW9uQ29tcG9uZW50fTwvQm94PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuU2VjdGlvbkdyaWQucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgdG90YWxJdGVtOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2x1bW5XaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgXSksXG4gIHBhZ2luYXRpb25Db21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50LFxuICBoYW5kbGVMb2FkTW9yZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvYWRNb3JlQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5lbGVtZW50LFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGJ1dHRvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJvd1N0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjb2x1bW5TdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgbG9hZE1vcmVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cblNlY3Rpb25HcmlkLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm93U3R5bGU6IHtcbiAgICBmbGV4Qm94OiB0cnVlLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgbXI6IFsnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTEwcHgnLCAnLTE1cHgnXSxcbiAgICBtbDogWyctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTBweCcsICctMTVweCddLFxuICB9LFxuICBjb2x1bW5TdHlsZToge1xuICAgIHByOiBbJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxNXB4J10sXG4gICAgcGw6IFsnMTBweCcsICcxMHB4JywgJzEwcHgnLCAnMTBweCcsICcxMHB4JywgJzE1cHgnXSxcbiAgfSxcbiAgbG9hZE1vcmVTdHlsZToge1xuICAgIGZsZXhCb3g6IHRydWUsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG10OiAnMXJlbScsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIGZsZXhXcmFwLFxuICBmbGV4RGlyZWN0aW9uLFxuICBhbGlnbkl0ZW1zLFxuICBqdXN0aWZ5Q29udGVudCxcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5pbXBvcnQgeyBiYXNlLCB0aGVtZWQgfSBmcm9tICcuLi9CYXNlJztcblxuY29uc3QgQm94V3JhcHBlciA9IHN0eWxlZCgnZGl2JykoXG4gIGJhc2UsXG4gIHRoZW1lZCgnQm94JyksXG4gIHByb3BzID0+XG4gICAgcHJvcHMuZmxleEJveCAmJlxuICAgIGNzcyhcbiAgICAgIHsgZGlzcGxheTogJ2ZsZXgnIH0sXG4gICAgICBmbGV4V3JhcCxcbiAgICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgICBhbGlnbkl0ZW1zLFxuICAgICAganVzdGlmeUNvbnRlbnQsXG4gICAgICB0aGVtZWQoJ0ZsZXhCb3gnKVxuICAgIClcbik7XG5cbmNvbnN0IEJveCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxCb3hXcmFwcGVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQm94V3JhcHBlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcblxuQm94LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbiAgLyoqIFVzaW5nIHRoaXMgcHJvcHMgd2UgY2FuIGNvbnZlcnQgb3VyIEJveCBDb21wb25lbnQgdG8gYSBGbGV4IENvbnRhaW5lciBvciBDb21wb25lbnQgKi9cbiAgZmxleEJveDogUHJvcFR5cGVzLmJvb2wsXG4gIGFzOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdkaXYnLFxuICAgICdhcnRpY2xlJyxcbiAgICAnc2VjdGlvbicsXG4gICAgJ2FkZHJlc3MnLFxuICAgICdoZWFkZXInLFxuICAgICdmb290ZXInLFxuICAgICduYXYnLFxuICAgICdtYWluJyxcbiAgXSksXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgZm9udFNpemU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGZsZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBvcmRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGFsaWduU2VsZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGRpc3BsYXk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXJUb3A6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXJSaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGJvcmRlckJvdHRvbTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGJvcmRlckxlZnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBib3JkZXJDb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG59O1xuXG5Cb3guZGVmYXVsdFByb3BzID0ge1xuICBhczogJ2RpdicsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdXNlVG9nZ2xlIGZyb20gJy4vdXNlVG9nZ2xlJztcbmltcG9ydCBGYXZvcml0ZVdyYXBwZXIgZnJvbSAnLi9GYXZvcml0ZS5zdHlsZSc7XG5cbmNvbnN0IEZhdm9yaXRlID0gKHsgY2xhc3NOYW1lLCBjb250ZW50LCBvbkNsaWNrIH0pID0+IHtcbiAgLy8gdXNlIHRvZ2dsZSBob29rc1xuICBjb25zdCBbdG9nZ2xlVmFsdWUsIHRvZ2dsZUhhbmRsZXJdID0gdXNlVG9nZ2xlKGZhbHNlKTtcblxuICAvLyBBZGQgYWxsIGNsYXNzcyB0byBhbiBhcnJheVxuICBjb25zdCBhZGRBbGxDbGFzcyA9IFsnZmF2b3JpdGUnXTtcblxuICAvLyBjbGFzc05hbWUgcHJvcCBjaGVja2luZ1xuICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgYWRkQWxsQ2xhc3MucHVzaChjbGFzc05hbWUpO1xuICB9XG5cbiAgY29uc3QgaGFuZGVsQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgdG9nZ2xlSGFuZGxlcigpO1xuICAgIG9uQ2xpY2soIXRvZ2dsZVZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGYXZvcml0ZVdyYXBwZXJcbiAgICAgIG9uQ2xpY2s9e2hhbmRlbENsaWNrfVxuICAgICAgY2xhc3NOYW1lPXtgJHthZGRBbGxDbGFzcy5qb2luKCcgJyl9ICR7dG9nZ2xlVmFsdWUgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxOC42NCAxOC4yMzJcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTYwLjE2LDU2aC0uMDRhNC41NTEsNC41NTEsMCwwLDAtMy44LDIuMDhBNC41NTEsNC41NTEsMCwwLDAsNTIuNTIsNTZoLS4wNEE0LjUyMiw0LjUyMiwwLDAsMCw0OCw2MC41MmE5LjczNyw5LjczNywwLDAsMCwxLjkxMiw1LjMwOEEzMy41MDYsMzMuNTA2LDAsMCwwLDU2LjMyLDcyYTMzLjUwNiwzMy41MDYsMCwwLDAsNi40MDgtNi4xNzJBOS43MzcsOS43MzcsMCwwLDAsNjQuNjQsNjAuNTIsNC41MjIsNC41MjIsMCwwLDAsNjAuMTYsNTZaXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3IC01NSlcIlxuICAgICAgICAvPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3Bhbj57Y29udGVudH08L3NwYW4+XG4gICAgPC9GYXZvcml0ZVdyYXBwZXI+XG4gICk7XG59O1xuXG5GYXZvcml0ZS5wcm9wVHlwZXMgPSB7XG4gIC8qKiBDbGFzc05hbWUgb2YgdGhlIEZhdm9yaXRlICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgLyoqIGNvbnRlbnQgb2YgdGhlIEZhdm9yaXRlICovXG4gIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAuXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkZhdm9yaXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbGljazogKCkgPT4ge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZTtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5jb25zdCBhZGRBbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zNCkgcm90YXRlWSg5MGRlZyk7XG4gIH1cbmA7XG5cbmNvbnN0IHJlbW92ZUFuaW1hdGlvbiA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zNCkgcm90YXRlWSg5MGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVkoMCk7XG4gIH1cbmA7XG5cbmNvbnN0IEFkZEFuaW1hdGlvbiA9IGNzc2BcbiAgYW5pbWF0aW9uOiAke2FkZEFuaW1hdGlvbn0gMC40cyBjdWJpYy1iZXppZXIoMC4zOCwgMC43LCAwLjYsIDAuMjkpO1xuYDtcblxuY29uc3QgUmVtb3ZlQW5pbWF0aW9uID0gY3NzYFxuICBhbmltYXRpb246ICR7cmVtb3ZlQW5pbWF0aW9ufSAwLjU1cyBjdWJpYy1iZXppZXIoMC4zOCwgMC43LCAwLjYsIDAuMjkpO1xuYDtcblxuY29uc3QgRmF2b3JpdGVXcmFwcGVyID0gc3R5bGVkLmJ1dHRvbmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICBzdmcge1xuICAgIHdpZHRoOiAyMnB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICAke1JlbW92ZUFuaW1hdGlvbn1cbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6ICR7dGhlbWVHZXQoJ2NvbG9yLjUnLCAncmdiYSgwLCAwLCAwLCAwLjI1KScpfTtcbiAgICAgIHN0cm9rZTogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgICB0cmFuc2l0aW9uOiBmaWxsIDFzIGVhc2U7XG4gICAgfVxuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIHN2ZyB7XG4gICAgICAke0FkZEFuaW1hdGlvbn07XG4gICAgICBwYXRoIHtcbiAgICAgICAgZmlsbDogJHt0aGVtZUdldCgnY29sb3IuNCcsICcjRkM1QzYzJyl9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRmF2b3JpdGVXcmFwcGVyO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VUb2dnbGUgPSBpbml0aWFsVmFsdWUgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSk7XG4gIGNvbnN0IHRvZ2dsZXIgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRWYWx1ZSh2YWx1ZSA9PiAhdmFsdWUpLCBbXSk7XG4gIHJldHVybiBbdmFsdWUsIHRvZ2dsZXJdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlVG9nZ2xlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBJb0lvc1N0YXIsIElvSW9zU3Rhck91dGxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5cbmNvbnN0IFJhdGluZyA9IHByb3BzID0+IHtcbiAgY29uc3QgeyByYXRpbmcsIHJhdGluZ0NvdW50LCB0eXBlLCByYXRpbmdGaWVsZE5hbWUgfSA9IHByb3BzO1xuICBsZXQgaSwgZmxvb3JWYWx1ZTtcbiAgbGV0IHJhdGluZ1ZpZXcgPSBbXTtcbiAgaWYgKHJhdGluZyAmJiByYXRpbmcgIT09IDApIHtcbiAgICBmbG9vclZhbHVlID0gTWF0aC5mbG9vcihyYXRpbmcpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGlmIChpIDwgZmxvb3JWYWx1ZSkge1xuICAgICAgICByYXRpbmdWaWV3LnB1c2goPElvSW9zU3RhciBrZXk9e2l9IC8+KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhdGluZ1ZpZXcucHVzaCg8SW9Jb3NTdGFyT3V0bGluZSBrZXk9e2l9IC8+KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGV0IGxpc3RpbmdDb25kaXRpb247XG4gIGlmIChyYXRpbmcgJiYgcmF0aW5nID09PSA1KSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdBd2Vzb21lJztcbiAgfSBlbHNlIGlmICg0IDw9IHJhdGluZyAmJiByYXRpbmcgPCA1KSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdHb29kJztcbiAgfSBlbHNlIGlmICgzIDw9IHJhdGluZyAmJiByYXRpbmcgPCA0KSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdBdmVyYWdlJztcbiAgfSBlbHNlIGlmICgyIDw9IHJhdGluZyAmJiByYXRpbmcgPCAzKSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdCYWQnO1xuICB9IGVsc2UgaWYgKHJhdGluZyA+PSAxKSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICdUZXJyaWJsZSc7XG4gIH0gZWxzZSB7XG4gICAgbGlzdGluZ0NvbmRpdGlvbiA9ICcnO1xuICB9XG5cbiAgbGV0IHNob3dSYXRpbmdDb3VudDtcbiAgaWYgKHJhdGluZ0NvdW50KSB7XG4gICAgc2hvd1JhdGluZ0NvdW50ID0gYChgICsgcmF0aW5nQ291bnQgKyBgKWA7XG4gIH0gZWxzZSB7XG4gICAgc2hvd1JhdGluZ0NvdW50ID0gJyc7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dHlwZSAmJiB0eXBlID09PSAnYnVsaycgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNwYW4+e3JhdGluZ1ZpZXd9PC9zcGFuPlxuICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICB7YCAke2xpc3RpbmdDb25kaXRpb259YH0ge2Ake3Nob3dSYXRpbmdDb3VudH1gfVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNwYW4+e3JhdGluZ0ZpZWxkTmFtZX08L3NwYW4+IHtyYXRpbmdWaWV3fVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5SYXRpbmcucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJhdGluZ0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICByYXRpbmc6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJhdGluZ0ZpZWxkTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhdGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VjdGlvbkdyaWQgZnJvbSAnY29tcG9uZW50cy9TZWN0aW9uR3JpZC9TZWN0aW9uR3JpZCc7XG5pbXBvcnQgeyBQb3N0UGxhY2Vob2xkZXIgfSBmcm9tICdjb21wb25lbnRzL1VJL0NvbnRlbnRMb2FkZXIvQ29udGVudExvYWRlcic7XG5pbXBvcnQgeyBTSU5HTEVfUE9TVF9QQUdFIH0gZnJvbSAnc2V0dGluZ3MvY29uc3RhbnQnO1xuY29uc3QgTElTVEVEX1BPU1RfTElNSVQgPSA2O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZ2VudEl0ZW1MaXN0cyh7XG4gIHByb2Nlc3NlZERhdGEsXG4gIGxvYWRNb3JlRGF0YSxcbiAgbG9hZGluZyxcbiAgZGV2aWNlVHlwZSxcbn0pIHtcbiAgY29uc3QgbGlzdGVkX3Bvc3QgPVxuICAgIHByb2Nlc3NlZERhdGFbMF0gJiYgcHJvY2Vzc2VkRGF0YVswXS5saXN0ZWRfcG9zdFxuICAgICAgPyBwcm9jZXNzZWREYXRhWzBdLmxpc3RlZF9wb3N0XG4gICAgICA6IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb25HcmlkXG4gICAgICBsaW5rPXtTSU5HTEVfUE9TVF9QQUdFfVxuICAgICAgY29sdW1uV2lkdGg9e1sxIC8gMiwgMSAvIDIsIDEgLyAzLCAxIC8gNCwgMSAvIDUsIDEgLyA2XX1cbiAgICAgIGRldmljZVR5cGU9e2RldmljZVR5cGV9XG4gICAgICBkYXRhPXtsaXN0ZWRfcG9zdH1cbiAgICAgIHRvdGFsSXRlbT17bGlzdGVkX3Bvc3QubGVuZ3RofVxuICAgICAgbGltaXQ9e0xJU1RFRF9QT1NUX0xJTUlUfVxuICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgIGhhbmRsZUxvYWRNb3JlPXtsb2FkTW9yZURhdGF9XG4gICAgICBwbGFjZWhvbGRlcj17PFBvc3RQbGFjZWhvbGRlciAvPn1cbiAgICAvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
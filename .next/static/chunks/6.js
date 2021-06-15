(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

/***/ "./components/UI/Heading/Heading.js":
/*!******************************************!*\
  !*** ./components/UI/Heading/Heading.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Base */ "./components/UI/Base.js");



var _excluded = ["content"];

var _this = undefined,
    _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\Heading\\Heading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var HeadingWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "sc-121p3m5-0"
})(_Base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_Base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Heading'));

var Heading = function Heading(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  return __jsx(HeadingWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 3
    }
  }), content);
};

_c = Heading;
Heading.propTypes = _objectSpread({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element]),
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _Base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: 0,
  fontWeight: 700
};
/* harmony default export */ __webpack_exports__["default"] = (Heading);

var _c;

$RefreshReg$(_c, "Heading");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./container/Listing/Search/MobileSearchView.js":
/*!******************************************************!*\
  !*** ./container/Listing/Search/MobileSearchView.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/drawer */ "./node_modules/antd/lib/drawer/index.js");
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/slider */ "./node_modules/antd/lib/slider/index.js");
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/Heading/Heading */ "./components/UI/Heading/Heading.js");
/* harmony import */ var components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/UI/InputIncDec/InputIncDec */ "./components/UI/InputIncDec/InputIncDec.js");
/* harmony import */ var components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/UI/DatePicker/ReactDates */ "./components/UI/DatePicker/ReactDates.js");
/* harmony import */ var library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! library/helpers/url_handler */ "./library/helpers/url_handler.js");
/* harmony import */ var context_SearchProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! context/SearchProvider */ "./context/SearchProvider.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-accessible-accordion */ "./node_modules/react-accessible-accordion/dist/es/index.js");
/* harmony import */ var _SearchParams__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SearchParams */ "./container/Listing/Search/SearchParams.js");
/* harmony import */ var _MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MobileSearchView.style */ "./container/Listing/Search/MobileSearchView.style.js");






var _this = undefined,
    _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Listing\\Search\\MobileSearchView.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var history = true ? Object(history__WEBPACK_IMPORTED_MODULE_7__["createBrowserHistory"])() : undefined;
var location =  true && window.location;

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

    case 'room':
      return _objectSpread(_objectSpread({}, state), {}, {
        room: action.payload.room
      });

    case 'guest':
      return _objectSpread(_objectSpread({}, state), {}, {
        guest: action.payload.guest
      });

    case 'reset':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
}

var FilterDrawer = function FilterDrawer(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(context_SearchProvider__WEBPACK_IMPORTED_MODULE_12__["SearchContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var initialState = {
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
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(serchReducer, initialState),
      current = _useReducer[0],
      dispatchCurrent = _useReducer[1]; // state for drawer


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      toggle = _useState[0],
      setToggle = _useState[1]; // Room guest state


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(current.room),
      countRoom = _useState2[0],
      setRoom = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(current.guest),
      countGuest = _useState3[0],
      setGuest = _useState3[1]; // Toggle Drawer


  var handleToggleDrawer = function handleToggleDrawer() {
    setToggle(!toggle);
  }; // data handling


  var _onChange = function onChange(value, type) {
    var query = {};
    var modifiedCurrent = current;

    for (var key in modifiedCurrent) {
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
    } else if (type === 'room') {
      query = _objectSpread(_objectSpread({}, current), {}, {
        room: value ? value : 0
      });
      dispatchCurrent({
        type: type,
        payload: query
      });
    } else if (type === 'guest') {
      query = _objectSpread(_objectSpread({}, current), {}, {
        guest: value ? value : 0
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
      query = _objectSpread(_objectSpread({}, current), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, type, value));
      dispatchCurrent({
        type: type,
        payload: value
      });
    }
  };

  var handleApplyFilter = function handleApplyFilter() {
    var params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_11__["setStateToUrl"])(current);
    dispatch({
      type: 'UPDATE',
      payload: _objectSpread({}, current)
    });
    history.push(_objectSpread(_objectSpread({}, location), {}, {
      search: params
    }));
    setToggle(false);
  };

  var handleCloseDrawer = function handleCloseDrawer() {
    setRoom(0);
    var query = {
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
    };
    dispatchCurrent({
      type: 'reset',
      payload: query
    });
    dispatch({
      type: 'UPDATE',
      payload: _objectSpread(_objectSpread({}, current), query)
    });
    var params = Object(library_helpers_url_handler__WEBPACK_IMPORTED_MODULE_11__["setStateToUrl"])(query);
    history.push(_objectSpread(_objectSpread({}, location), {}, {
      search: params
    }));
    setToggle(false);
  };

  return __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["FilterArea"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: toggle ? 'active' : '',
    onClick: handleToggleDrawer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, "More filters"), __jsx(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "filter_drawer",
    height: "100vh",
    placement: "bottom",
    closable: false,
    maskClosable: false,
    onClose: handleCloseDrawer,
    visible: toggle,
    maskStyle: {
      backgroundColor: 'transparent'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }, __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["FilterElementsWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 9
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["Accordion"], {
    allowZeroExpanded: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 11
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "h4",
    content: "Amenities",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 19
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosArrowDown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 19
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
    options: _SearchParams__WEBPACK_IMPORTED_MODULE_15__["getAmenities"].options,
    value: current.amenities,
    onChange: function onChange(value) {
      return _onChange(value, 'amenities');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 17
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "h4",
    content: "Property Type",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 19
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosArrowDown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 19
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }, __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default.a.Group, {
    options: _SearchParams__WEBPACK_IMPORTED_MODULE_15__["getPropertyType"].options,
    value: current.property,
    onChange: function onChange(value) {
      return _onChange(value, 'property');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 17
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 17
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "h4",
    content: "Select Price Range",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 19
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosArrowDown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 19
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 15
    }
  }, __jsx(antd_lib_slider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    range: true,
    marks: _SearchParams__WEBPACK_IMPORTED_MODULE_15__["priceInit"],
    min: 0,
    max: 100,
    defaultValue: [current.minPrice, current.maxPrice],
    onAfterChange: function onAfterChange(value) {
      return _onChange(value, 'price');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 17
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 17
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "h4",
    content: "Choose Date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 19
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosArrowDown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 19
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 15
    }
  }, __jsx(components_UI_DatePicker_ReactDates__WEBPACK_IMPORTED_MODULE_10__["default"], {
    startDateId: "startDate-id-mobile",
    endDateId: "endDate-id-mobile",
    startDate: current.setStartDate ? moment__WEBPACK_IMPORTED_MODULE_6___default()(current.setStartDate) : null,
    endDate: current.setEndDate ? moment__WEBPACK_IMPORTED_MODULE_6___default()(current.setEndDate) : null,
    numberOfMonths: 1,
    small: true,
    item: _SearchParams__WEBPACK_IMPORTED_MODULE_15__["calenderItem"],
    updateSearchData: function updateSearchData(value) {
      return _onChange(value, 'date_range');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 17
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 13
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemHeading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 15
    }
  }, __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 17
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__["default"], {
    as: "h4",
    content: "Choose Room and Guest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 19
    }
  }), __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_13__["IoIosArrowDown"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 19
    }
  }))), __jsx(react_accessible_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionItemPanel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 15
    }
  }, __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["RoomGuestWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 17
    }
  }, __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["ItemWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 19
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 21
    }
  }, "Room"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "room",
    increment: function increment() {
      setRoom(function (countRoom) {
        return countRoom + 1;
      });

      _onChange(countRoom + 1, 'room');
    },
    decrement: function decrement() {
      setRoom(function (countRoom) {
        return countRoom > 0 && countRoom - 1;
      });

      _onChange(function (countRoom) {
        return countRoom > 0 && countRoom - 1;
      }, 'room');
    },
    value: countRoom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 21
    }
  })), __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["ItemWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 19
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 21
    }
  }, "Guest"), __jsx(components_UI_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "guest",
    increment: function increment() {
      setGuest(function (countGuest) {
        return countGuest + 1;
      });

      _onChange(countGuest + 1, 'guest');
    },
    decrement: function decrement() {
      setGuest(function (countGuest) {
        return countGuest > 0 && countGuest - 1;
      });

      _onChange(function (countGuest) {
        return countGuest > 0 && countGuest - 1;
      }, 'guest');
    },
    value: countGuest,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 21
    }
  })))))), __jsx(_MobileSearchView_style__WEBPACK_IMPORTED_MODULE_16__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 11
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClick: handleCloseDrawer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 13
    }
  }, "Cancel Filter"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    onClick: handleApplyFilter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 13
    }
  }, "Apply Filter")))));
};

_s(FilterDrawer, "J2UmR5C+mbxzsBQhCs63hPYxovg=");

_c = FilterDrawer;
/* harmony default export */ __webpack_exports__["default"] = (FilterDrawer);

var _c;

$RefreshReg$(_c, "FilterDrawer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./container/Listing/Search/MobileSearchView.style.js":
/*!************************************************************!*\
  !*** ./container/Listing/Search/MobileSearchView.style.js ***!
  \************************************************************/
/*! exports provided: RoomGuestWrapper, ItemWrapper, FilterArea, FilterElementsWrapper, ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomGuestWrapper", function() { return RoomGuestWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterArea", function() { return FilterArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterElementsWrapper", function() { return FilterElementsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "./node_modules/@styled-system/theme-get/dist/index.esm.js");


var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
var RoomGuestWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MobileSearchViewstyle__RoomGuestWrapper",
  componentId: "snu48q-0"
})(["width:100%;max-width:320px;@media only screen and (max-width:480px){max-width:300px;}strong{font-size:15px;font-weight:400;color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MobileSearchViewstyle__ItemWrapper",
  componentId: "snu48q-1"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
var FilterArea = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MobileSearchViewstyle__FilterArea",
  componentId: "snu48q-2"
})(["overflow:hidden;button,button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:1px solid ", ";&::after{content:none;}&:hover{background-color:", ";}&.active{color:", ";border-color:", ";background-color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
var FilterElementsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MobileSearchViewstyle__FilterElementsWrapper",
  componentId: "snu48q-3"
})(["position:relative;height:100%;overflow:hidden;.accordion{overflow-y:auto;overflow-x:hidden;padding-right:35px;margin-right:-35px;height:calc(100% - 68px);.accordion__item{border-bottom:1px solid ", ";&:last-child{border-bottom:0;}.accordion__heading{.accordion__button{display:flex;align-items:center;justify-content:space-between;cursor:pointer;padding:29px 0;&:hover,&:focus{outline:0;}h4{font-size:15px;color:", ";text-transform:capitalize;}}}.accordion__panel{padding-bottom:29px;animation:0.25s ", " ease;&[hidden]{animation:0.25s ", " ease;}.date_picker{margin-bottom:0;.DateRangePicker{.DateRangePickerInput{width:100%;max-width:320px;border-color:", ";@media only screen and (max-width:480px){max-width:300px;}.DateInput__small{width:calc(50% - 6px);.DateInput_input__small{padding:12px 10px 10px;font-weight:400;color:", ";}&:last-child{.DateInput_input__small{text-align:right;}}}}.DateRangePicker_picker{left:1px !important;}}}.ant-checkbox-group{display:flex;flex-direction:column;.ant-checkbox-group-item{margin-bottom:15px;.ant-checkbox{.ant-checkbox-inner{border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}&::after{display:none;}}}span{color:", ";font-size:15px;}&:hover{.ant-checkbox{.ant-checkbox-inner{border-color:", ";}}}}}.ant-slider{margin-left:7px;max-width:320px;@media only screen and (max-width:480px){max-width:280px;margin-left:10px;}@media only screen and (max-width:375px){max-width:240px;}.ant-slider-rail{height:5px;border-radius:3px;background-color:", ";}.ant-slider-track{background-color:", ";}.ant-slider-step{.ant-slider-dot{background-color:", ";}}&:hover{.ant-slider-track{background-color:", ";}}.ant-slider-handle{margin-top:-8px;width:20px;height:20px;border:6px solid ", ";box-shadow:0 2px 2px ", ";&:focus{box-shadow:none;}}.ant-slider-mark{margin-top:10px;.ant-slider-mark-text{font-size:15px;color:", ";}}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2c2c2c'), fadeIn, fadeIn, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.13', '#E2E2E2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.5', 'rgba(0, 0, 0, 0.25)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'));
var ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "MobileSearchViewstyle__ButtonGroup",
  componentId: "snu48q-4"
})(["position:absolute;bottom:0;right:0;width:100%;display:flex;justify-content:flex-end;align-items:center;button.ant-btn{color:", ";font-size:15px;height:38px;border-radius:3px;border:0;&.ant-btn-primary{color:", ";border-color:", ";background-color:", ";margin-left:10px;}&::after{display:none;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/antd/lib/_util/hooks/useForceUpdate.js":
/*!*************************************************************!*\
  !*** ./node_modules/antd/lib/_util/hooks/useForceUpdate.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useForceUpdate;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useForceUpdate() {
  var _React$useReducer = React.useReducer(function (x) {
    return x + 1;
  }, 0),
      _React$useReducer2 = (0, _slicedToArray2["default"])(_React$useReducer, 2),
      forceUpdate = _React$useReducer2[1];

  return forceUpdate;
}

/***/ }),

/***/ "./node_modules/antd/lib/drawer/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/drawer/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcDrawer = _interopRequireDefault(__webpack_require__(/*! rc-drawer */ "./node_modules/rc-drawer/es/index.js"));

var _getScrollBarSize = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/getScrollBarSize */ "./node_modules/rc-util/lib/getScrollBarSize.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/@ant-design/icons/CloseOutlined.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _useForceUpdate = _interopRequireDefault(__webpack_require__(/*! ../_util/hooks/useForceUpdate */ "./node_modules/antd/lib/_util/hooks/useForceUpdate.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var DrawerContext = /*#__PURE__*/React.createContext(null);
var PlacementTypes = (0, _type.tuple)('top', 'right', 'bottom', 'left');
var defaultPushState = {
  distance: 180
};
var Drawer = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var _a$width = _a.width,
      width = _a$width === void 0 ? 256 : _a$width,
      _a$height = _a.height,
      height = _a$height === void 0 ? 256 : _a$height,
      _a$closable = _a.closable,
      closable = _a$closable === void 0 ? true : _a$closable,
      _a$placement = _a.placement,
      placement = _a$placement === void 0 ? 'right' : _a$placement,
      _a$maskClosable = _a.maskClosable,
      maskClosable = _a$maskClosable === void 0 ? true : _a$maskClosable,
      _a$mask = _a.mask,
      mask = _a$mask === void 0 ? true : _a$mask,
      _a$level = _a.level,
      level = _a$level === void 0 ? null : _a$level,
      _a$keyboard = _a.keyboard,
      keyboard = _a$keyboard === void 0 ? true : _a$keyboard,
      _a$push = _a.push,
      _push = _a$push === void 0 ? defaultPushState : _a$push,
      _a$closeIcon = _a.closeIcon,
      closeIcon = _a$closeIcon === void 0 ? /*#__PURE__*/React.createElement(_CloseOutlined["default"], null) : _a$closeIcon,
      bodyStyle = _a.bodyStyle,
      drawerStyle = _a.drawerStyle,
      prefixCls = _a.prefixCls,
      className = _a.className,
      direction = _a.direction,
      visible = _a.visible,
      children = _a.children,
      zIndex = _a.zIndex,
      destroyOnClose = _a.destroyOnClose,
      style = _a.style,
      title = _a.title,
      headerStyle = _a.headerStyle,
      onClose = _a.onClose,
      footer = _a.footer,
      footerStyle = _a.footerStyle,
      rest = __rest(_a, ["width", "height", "closable", "placement", "maskClosable", "mask", "level", "keyboard", "push", "closeIcon", "bodyStyle", "drawerStyle", "prefixCls", "className", "direction", "visible", "children", "zIndex", "destroyOnClose", "style", "title", "headerStyle", "onClose", "footer", "footerStyle"]);

  var forceUpdate = (0, _useForceUpdate["default"])();

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      internalPush = _React$useState2[0],
      setPush = _React$useState2[1];

  var parentDrawer = React.useContext(DrawerContext);
  var destroyClose = React.useRef(false);
  React.useEffect(function () {
    // fix: delete drawer in child and re-render, no push started.
    // <Drawer>{show && <Drawer />}</Drawer>
    if (visible && parentDrawer) {
      parentDrawer.push();
    }

    return function () {
      if (parentDrawer) {
        parentDrawer.pull(); // parentDrawer = null;
      }
    };
  }, []);
  React.useEffect(function () {
    if (parentDrawer) {
      if (visible) {
        parentDrawer.push();
      } else {
        parentDrawer.pull();
      }
    }
  }, [visible]);
  var operations = React.useMemo(function () {
    return {
      push: function push() {
        if (_push) {
          setPush(true);
        }
      },
      pull: function pull() {
        if (_push) {
          setPush(false);
        }
      }
    };
  }, [_push]);
  React.useImperativeHandle(ref, function () {
    return operations;
  }, [operations]);
  var isDestroyOnClose = destroyOnClose && !visible;

  var onDestroyTransitionEnd = function onDestroyTransitionEnd() {
    if (!isDestroyOnClose) {
      return;
    }

    if (!visible) {
      destroyClose.current = true;
      forceUpdate();
    }
  };

  var getOffsetStyle = function getOffsetStyle() {
    // https://github.com/ant-design/ant-design/issues/24287
    if (!visible && !mask) {
      return {};
    }

    var offsetStyle = {};

    if (placement === 'left' || placement === 'right') {
      offsetStyle.width = width;
    } else {
      offsetStyle.height = height;
    }

    return offsetStyle;
  };

  var getRcDrawerStyle = function getRcDrawerStyle() {
    // get drawer push width or height
    var getPushTransform = function getPushTransform(_placement) {
      var distance;

      if (typeof _push === 'boolean') {
        distance = _push ? defaultPushState.distance : 0;
      } else {
        distance = _push.distance;
      }

      distance = parseFloat(String(distance || 0));

      if (_placement === 'left' || _placement === 'right') {
        return "translateX(".concat(_placement === 'left' ? distance : -distance, "px)");
      }

      if (_placement === 'top' || _placement === 'bottom') {
        return "translateY(".concat(_placement === 'top' ? distance : -distance, "px)");
      }
    }; // 当无 mask 时，将 width 应用到外层容器上
    // 解决 https://github.com/ant-design/ant-design/issues/12401 的问题


    var offsetStyle = mask ? {} : getOffsetStyle();
    return (0, _extends2["default"])((0, _extends2["default"])({
      zIndex: zIndex,
      transform: internalPush ? getPushTransform(placement) : undefined
    }, offsetStyle), style);
  };

  function renderCloseIcon() {
    return closable && /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onClose,
      "aria-label": "Close",
      className: "".concat(prefixCls, "-close"),
      style: {
        '--scroll-bar': "".concat((0, _getScrollBarSize["default"])(), "px")
      }
    }, closeIcon);
  }

  function renderHeader() {
    if (!title && !closable) {
      return null;
    }

    var headerClassName = title ? "".concat(prefixCls, "-header") : "".concat(prefixCls, "-header-no-title");
    return /*#__PURE__*/React.createElement("div", {
      className: headerClassName,
      style: headerStyle
    }, title && /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-title")
    }, title), closable && renderCloseIcon());
  }

  function renderFooter() {
    if (!footer) {
      return null;
    }

    var footerClassName = "".concat(prefixCls, "-footer");
    return /*#__PURE__*/React.createElement("div", {
      className: footerClassName,
      style: footerStyle
    }, footer);
  } // render drawer body dom


  var renderBody = function renderBody() {
    if (destroyClose.current && !visible) {
      return null;
    }

    destroyClose.current = false;
    var containerStyle = {};

    if (isDestroyOnClose) {
      // Increase the opacity transition, delete children after closing.
      containerStyle.opacity = 0;
      containerStyle.transition = 'opacity .3s';
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-wrapper-body"),
      style: (0, _extends2["default"])((0, _extends2["default"])({}, containerStyle), drawerStyle),
      onTransitionEnd: onDestroyTransitionEnd
    }, renderHeader(), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-body"),
      style: bodyStyle
    }, children), renderFooter());
  };

  var drawerClassName = (0, _classnames["default"])((0, _defineProperty2["default"])({
    'no-mask': !mask
  }, "".concat(prefixCls, "-rtl"), direction === 'rtl'), className);
  var offsetStyle = mask ? getOffsetStyle() : {};
  return /*#__PURE__*/React.createElement(DrawerContext.Provider, {
    value: operations
  }, /*#__PURE__*/React.createElement(_rcDrawer["default"], (0, _extends2["default"])({
    handler: false
  }, (0, _extends2["default"])({
    placement: placement,
    prefixCls: prefixCls,
    maskClosable: maskClosable,
    level: level,
    keyboard: keyboard,
    children: children,
    onClose: onClose
  }, rest), offsetStyle, {
    open: visible,
    showMask: mask,
    style: getRcDrawerStyle(),
    className: drawerClassName
  }), renderBody()));
});
Drawer.displayName = 'Drawer';
var DrawerWrapper = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var customizePrefixCls = props.prefixCls,
      customizeGetContainer = props.getContainer;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('drawer', customizePrefixCls);
  var getContainer = // 有可能为 false，所以不能直接判断
  customizeGetContainer === undefined && getPopupContainer ? function () {
    return getPopupContainer(document.body);
  } : customizeGetContainer;
  return /*#__PURE__*/React.createElement(Drawer, (0, _extends2["default"])({}, props, {
    ref: ref,
    prefixCls: prefixCls,
    getContainer: getContainer,
    direction: direction
  }));
});
DrawerWrapper.displayName = 'DrawerWrapper';
var _default = DrawerWrapper;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/rc-drawer/es/DrawerChild.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-drawer/es/DrawerChild.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/getScrollBarSize */ "./node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rc-util/es/omit */ "./node_modules/rc-util/es/omit.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-drawer/es/utils.js");















var currentDrawer = {};

var DrawerChild = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(DrawerChild, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_8__["default"])(DrawerChild);

  function DrawerChild(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DrawerChild);

    _this = _super.call(this, props);

    _this.domFocus = function () {
      if (_this.dom) {
        _this.dom.focus();
      }
    };

    _this.removeStartHandler = function (e) {
      if (e.touches.length > 1) {
        return;
      }

      _this.startPos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    _this.removeMoveHandler = function (e) {
      if (e.changedTouches.length > 1) {
        return;
      }

      var currentTarget = e.currentTarget;
      var differX = e.changedTouches[0].clientX - _this.startPos.x;
      var differY = e.changedTouches[0].clientY - _this.startPos.y;

      if ((currentTarget === _this.maskDom || currentTarget === _this.handlerDom || currentTarget === _this.contentDom && Object(_utils__WEBPACK_IMPORTED_MODULE_14__["getTouchParentScroll"])(currentTarget, e.target, differX, differY)) && e.cancelable) {
        e.preventDefault();
      }
    };

    _this.transitionEnd = function (e) {
      var dom = e.target;
      Object(_utils__WEBPACK_IMPORTED_MODULE_14__["removeEventListener"])(dom, _utils__WEBPACK_IMPORTED_MODULE_14__["transitionEnd"], _this.transitionEnd);
      dom.style.transition = '';
    };

    _this.onKeyDown = function (e) {
      if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_12__["default"].ESC) {
        var onClose = _this.props.onClose;
        e.stopPropagation();

        if (onClose) {
          onClose(e);
        }
      }
    };

    _this.onWrapperTransitionEnd = function (e) {
      var _this$props = _this.props,
          open = _this$props.open,
          afterVisibleChange = _this$props.afterVisibleChange;

      if (e.target === _this.contentWrapper && e.propertyName.match(/transform$/)) {
        _this.dom.style.transition = '';

        if (!open && _this.getCurrentDrawerSome()) {
          document.body.style.overflowX = '';

          if (_this.maskDom) {
            _this.maskDom.style.left = '';
            _this.maskDom.style.width = '';
          }
        }

        if (afterVisibleChange) {
          afterVisibleChange(!!open);
        }
      }
    };

    _this.openLevelTransition = function () {
      var _this$props2 = _this.props,
          open = _this$props2.open,
          width = _this$props2.width,
          height = _this$props2.height;

      var _this$getHorizontalBo = _this.getHorizontalBoolAndPlacementName(),
          isHorizontal = _this$getHorizontalBo.isHorizontal,
          placementName = _this$getHorizontalBo.placementName;

      var contentValue = _this.contentDom ? _this.contentDom.getBoundingClientRect()[isHorizontal ? 'width' : 'height'] : 0;
      var value = (isHorizontal ? width : height) || contentValue;

      _this.setLevelAndScrolling(open, placementName, value);
    };

    _this.setLevelTransform = function (open, placementName, value, right) {
      var _this$props3 = _this.props,
          placement = _this$props3.placement,
          levelMove = _this$props3.levelMove,
          duration = _this$props3.duration,
          ease = _this$props3.ease,
          showMask = _this$props3.showMask; // router 切换时可能会导至页面失去滚动条，所以需要时时获取。

      _this.levelDom.forEach(function (dom) {
        dom.style.transition = "transform ".concat(duration, " ").concat(ease);
        Object(_utils__WEBPACK_IMPORTED_MODULE_14__["addEventListener"])(dom, _utils__WEBPACK_IMPORTED_MODULE_14__["transitionEnd"], _this.transitionEnd);
        var levelValue = open ? value : 0;

        if (levelMove) {
          var $levelMove = Object(_utils__WEBPACK_IMPORTED_MODULE_14__["transformArguments"])(levelMove, {
            target: dom,
            open: open
          });
          levelValue = open ? $levelMove[0] : $levelMove[1] || 0;
        }

        var $value = typeof levelValue === 'number' ? "".concat(levelValue, "px") : levelValue;
        var placementPos = placement === 'left' || placement === 'top' ? $value : "-".concat($value);
        placementPos = showMask && placement === 'right' && right ? "calc(".concat(placementPos, " + ").concat(right, "px)") : placementPos;
        dom.style.transform = levelValue ? "".concat(placementName, "(").concat(placementPos, ")") : '';
      });
    };

    _this.setLevelAndScrolling = function (open, placementName, value) {
      var onChange = _this.props.onChange;

      if (!_utils__WEBPACK_IMPORTED_MODULE_14__["windowIsUndefined"]) {
        var right = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth ? Object(rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_11__["default"])(true) : 0;

        _this.setLevelTransform(open, placementName, value, right);

        _this.toggleScrollingToDrawerAndBody(right);
      }

      if (onChange) {
        onChange(open);
      }
    };

    _this.toggleScrollingToDrawerAndBody = function (right) {
      var _this$props4 = _this.props,
          getContainer = _this$props4.getContainer,
          showMask = _this$props4.showMask,
          open = _this$props4.open;
      var container = getContainer && getContainer(); // 处理 body 滚动

      if (container && container.parentNode === document.body && showMask) {
        var eventArray = ['touchstart'];
        var domArray = [document.body, _this.maskDom, _this.handlerDom, _this.contentDom];

        if (open && document.body.style.overflow !== 'hidden') {
          if (right) {
            _this.addScrollingEffect(right);
          }

          document.body.style.touchAction = 'none'; // 手机禁滚

          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            Object(_utils__WEBPACK_IMPORTED_MODULE_14__["addEventListener"])(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        } else if (_this.getCurrentDrawerSome()) {
          document.body.style.touchAction = '';

          if (right) {
            _this.remScrollingEffect(right);
          } // 恢复事件


          domArray.forEach(function (item, i) {
            if (!item) {
              return;
            }

            Object(_utils__WEBPACK_IMPORTED_MODULE_14__["removeEventListener"])(item, eventArray[i] || 'touchmove', i ? _this.removeMoveHandler : _this.removeStartHandler, _this.passive);
          });
        }
      }
    };

    _this.addScrollingEffect = function (right) {
      var _this$props5 = _this.props,
          placement = _this$props5.placement,
          duration = _this$props5.duration,
          ease = _this$props5.ease;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);
      _this.dom.style.transition = 'none';

      switch (placement) {
        case 'right':
          _this.dom.style.transform = "translateX(-".concat(right, "px)");
          break;

        case 'top':
        case 'bottom':
          _this.dom.style.width = "calc(100% - ".concat(right, "px)");
          _this.dom.style.transform = 'translateZ(0)';
          break;

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(widthTransition);
          _this.dom.style.width = '';
          _this.dom.style.transform = '';
        }
      });
    };

    _this.remScrollingEffect = function (right) {
      var _this$props6 = _this.props,
          placement = _this$props6.placement,
          duration = _this$props6.duration,
          ease = _this$props6.ease;

      if (_utils__WEBPACK_IMPORTED_MODULE_14__["transitionStr"]) {
        document.body.style.overflowX = 'hidden';
      }

      _this.dom.style.transition = 'none';
      var heightTransition;
      var widthTransition = "width ".concat(duration, " ").concat(ease);
      var transformTransition = "transform ".concat(duration, " ").concat(ease);

      switch (placement) {
        case 'left':
          {
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);
            break;
          }

        case 'right':
          {
            _this.dom.style.transform = "translateX(".concat(right, "px)");
            _this.dom.style.width = '100%';
            widthTransition = "width 0s ".concat(ease, " ").concat(duration);

            if (_this.maskDom) {
              _this.maskDom.style.left = "-".concat(right, "px");
              _this.maskDom.style.width = "calc(100% + ".concat(right, "px)");
            }

            break;
          }

        case 'top':
        case 'bottom':
          {
            _this.dom.style.width = "calc(100% + ".concat(right, "px)");
            _this.dom.style.height = '100%';
            _this.dom.style.transform = 'translateZ(0)';
            heightTransition = "height 0s ".concat(ease, " ").concat(duration);
            break;
          }

        default:
          break;
      }

      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (_this.dom) {
          _this.dom.style.transition = "".concat(transformTransition, ",").concat(heightTransition ? "".concat(heightTransition, ",") : '').concat(widthTransition);
          _this.dom.style.transform = '';
          _this.dom.style.width = '';
          _this.dom.style.height = '';
        }
      });
    };

    _this.getCurrentDrawerSome = function () {
      return !Object.keys(currentDrawer).some(function (key) {
        return currentDrawer[key];
      });
    };

    _this.getLevelDom = function (_ref) {
      var level = _ref.level,
          getContainer = _ref.getContainer;

      if (_utils__WEBPACK_IMPORTED_MODULE_14__["windowIsUndefined"]) {
        return;
      }

      var container = getContainer && getContainer();
      var parent = container ? container.parentNode : null;
      _this.levelDom = [];

      if (level === 'all') {
        var children = parent ? Array.prototype.slice.call(parent.children) : [];
        children.forEach(function (child) {
          if (child.nodeName !== 'SCRIPT' && child.nodeName !== 'STYLE' && child.nodeName !== 'LINK' && child !== container) {
            _this.levelDom.push(child);
          }
        });
      } else if (level) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_14__["dataToArray"])(level).forEach(function (key) {
          document.querySelectorAll(key).forEach(function (item) {
            _this.levelDom.push(item);
          });
        });
      }
    };

    _this.getHorizontalBoolAndPlacementName = function () {
      var placement = _this.props.placement;
      var isHorizontal = placement === 'left' || placement === 'right';
      var placementName = "translate".concat(isHorizontal ? 'X' : 'Y');
      return {
        isHorizontal: isHorizontal,
        placementName: placementName
      };
    };

    _this.state = {
      _self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DrawerChild, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!_utils__WEBPACK_IMPORTED_MODULE_14__["windowIsUndefined"]) {
        var passiveSupported = false;

        try {
          window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
            get: function get() {
              passiveSupported = true;
              return null;
            }
          }));
        } catch (err) {}

        this.passive = passiveSupported ? {
          passive: false
        } : false;
      }

      var _this$props7 = this.props,
          open = _this$props7.open,
          getContainer = _this$props7.getContainer,
          showMask = _this$props7.showMask;
      var container = getContainer && getContainer();
      this.drawerId = "drawer_id_".concat(Number((Date.now() + Math.random()).toString().replace('.', Math.round(Math.random() * 9).toString())).toString(16));
      this.getLevelDom(this.props);

      if (open) {
        if (container && container.parentNode === document.body) {
          currentDrawer[this.drawerId] = open;
        } // 默认打开状态时推出 level;


        this.openLevelTransition();
        this.forceUpdate(function () {
          _this2.domFocus();
        });

        if (showMask) {
          var _this$props$scrollLoc;

          (_this$props$scrollLoc = this.props.scrollLocker) === null || _this$props$scrollLoc === void 0 ? void 0 : _this$props$scrollLoc.lock();
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props8 = this.props,
          open = _this$props8.open,
          getContainer = _this$props8.getContainer,
          scrollLocker = _this$props8.scrollLocker,
          showMask = _this$props8.showMask;
      var container = getContainer && getContainer();

      if (open !== prevProps.open) {
        if (container && container.parentNode === document.body) {
          currentDrawer[this.drawerId] = !!open;
        }

        this.openLevelTransition();

        if (open) {
          this.domFocus();

          if (showMask) {
            scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.lock();
          }
        } else {
          scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props9 = this.props,
          open = _this$props9.open,
          scrollLocker = _this$props9.scrollLocker;
      delete currentDrawer[this.drawerId];

      if (open) {
        this.setLevelTransform(false);
        document.body.style.touchAction = '';
      }

      scrollLocker === null || scrollLocker === void 0 ? void 0 : scrollLocker.unLock();
    } // tslint:disable-next-line:member-ordering

  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this3 = this;

      var _this$props10 = this.props,
          className = _this$props10.className,
          children = _this$props10.children,
          style = _this$props10.style,
          width = _this$props10.width,
          height = _this$props10.height,
          defaultOpen = _this$props10.defaultOpen,
          $open = _this$props10.open,
          prefixCls = _this$props10.prefixCls,
          placement = _this$props10.placement,
          level = _this$props10.level,
          levelMove = _this$props10.levelMove,
          ease = _this$props10.ease,
          duration = _this$props10.duration,
          getContainer = _this$props10.getContainer,
          handler = _this$props10.handler,
          onChange = _this$props10.onChange,
          afterVisibleChange = _this$props10.afterVisibleChange,
          showMask = _this$props10.showMask,
          maskClosable = _this$props10.maskClosable,
          maskStyle = _this$props10.maskStyle,
          onClose = _this$props10.onClose,
          onHandleClick = _this$props10.onHandleClick,
          keyboard = _this$props10.keyboard,
          getOpenCount = _this$props10.getOpenCount,
          scrollLocker = _this$props10.scrollLocker,
          contentWrapperStyle = _this$props10.contentWrapperStyle,
          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_this$props10, ["className", "children", "style", "width", "height", "defaultOpen", "open", "prefixCls", "placement", "level", "levelMove", "ease", "duration", "getContainer", "handler", "onChange", "afterVisibleChange", "showMask", "maskClosable", "maskStyle", "onClose", "onHandleClick", "keyboard", "getOpenCount", "scrollLocker", "contentWrapperStyle"]); // 首次渲染都将是关闭状态。


      var open = this.dom ? $open : false;
      var wrapperClassName = classnames__WEBPACK_IMPORTED_MODULE_10___default()(prefixCls, (_classnames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classnames, "".concat(prefixCls, "-").concat(placement), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classnames, "".concat(prefixCls, "-open"), open), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classnames, className || '', !!className), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_classnames, 'no-mask', !showMask), _classnames));

      var _this$getHorizontalBo2 = this.getHorizontalBoolAndPlacementName(),
          placementName = _this$getHorizontalBo2.placementName; // 百分比与像素动画不同步，第一次打用后全用像素动画。
      // const defaultValue = !this.contentDom || !level ? '100%' : `${value}px`;


      var placementPos = placement === 'left' || placement === 'top' ? '-100%' : '100%';
      var transform = open ? '' : "".concat(placementName, "(").concat(placementPos, ")");
      var handlerChildren = handler && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["cloneElement"](handler, {
        onClick: function onClick(e) {
          if (handler.props.onClick) {
            handler.props.onClick();
          }

          if (onHandleClick) {
            onHandleClick(e);
          }
        },
        ref: function ref(c) {
          _this3.handlerDom = c;
        }
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(rc_util_es_omit__WEBPACK_IMPORTED_MODULE_13__["default"])(props, ['switchScrollingEffect']), {
        tabIndex: -1,
        className: wrapperClassName,
        style: style,
        ref: function ref(c) {
          _this3.dom = c;
        },
        onKeyDown: open && keyboard ? this.onKeyDown : undefined,
        onTransitionEnd: this.onWrapperTransitionEnd
      }), showMask && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
        className: "".concat(prefixCls, "-mask"),
        onClick: maskClosable ? onClose : undefined,
        style: maskStyle,
        ref: function ref(c) {
          _this3.maskDom = c;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
        className: "".concat(prefixCls, "-content-wrapper"),
        style: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
          transform: transform,
          msTransform: transform,
          width: Object(_utils__WEBPACK_IMPORTED_MODULE_14__["isNumeric"])(width) ? "".concat(width, "px") : width,
          height: Object(_utils__WEBPACK_IMPORTED_MODULE_14__["isNumeric"])(height) ? "".concat(height, "px") : height
        }, contentWrapperStyle),
        ref: function ref(c) {
          _this3.contentWrapper = c;
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
        className: "".concat(prefixCls, "-content"),
        ref: function ref(c) {
          _this3.contentDom = c;
        },
        onTouchStart: open && showMask ? this.removeStartHandler : undefined // 跑用例用
        ,
        onTouchMove: open && showMask ? this.removeMoveHandler : undefined // 跑用例用

      }, children), handlerChildren));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps,
          _self = _ref2._self;
      var nextState = {
        prevProps: props
      };

      if (prevProps !== undefined) {
        var placement = props.placement,
            level = props.level;

        if (placement !== prevProps.placement) {
          // test 的 bug, 有动画过场，删除 dom
          _self.contentDom = null;
        }

        if (level !== prevProps.level) {
          _self.getLevelDom(props);
        }
      }

      return nextState;
    }
  }]);

  return DrawerChild;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DrawerChild);

/***/ }),

/***/ "./node_modules/rc-drawer/es/DrawerWrapper.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-drawer/es/DrawerWrapper.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/PortalWrapper */ "./node_modules/rc-util/es/PortalWrapper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _DrawerChild__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DrawerChild */ "./node_modules/rc-drawer/es/DrawerChild.js");










var DrawerWrapper = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DrawerWrapper, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(DrawerWrapper);

  function DrawerWrapper(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, DrawerWrapper);

    _this = _super.call(this, props);

    _this.onHandleClick = function (e) {
      var _this$props = _this.props,
          onHandleClick = _this$props.onHandleClick,
          $open = _this$props.open;

      if (onHandleClick) {
        onHandleClick(e);
      }

      if (typeof $open === 'undefined') {
        var _open = _this.state.open;

        _this.setState({
          open: !_open
        });
      }
    };

    _this.onClose = function (e) {
      var _this$props2 = _this.props,
          onClose = _this$props2.onClose,
          open = _this$props2.open;

      if (onClose) {
        onClose(e);
      }

      if (typeof open === 'undefined') {
        _this.setState({
          open: false
        });
      }
    };

    var open = typeof props.open !== 'undefined' ? props.open : !!props.defaultOpen;
    _this.state = {
      open: open
    };

    if ('onMaskClick' in props) {
      console.warn('`onMaskClick` are removed, please use `onClose` instead.');
    }

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(DrawerWrapper, [{
    key: "render",
    value: // tslint:disable-next-line:member-ordering
    function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          defaultOpen = _this$props3.defaultOpen,
          getContainer = _this$props3.getContainer,
          wrapperClassName = _this$props3.wrapperClassName,
          forceRender = _this$props3.forceRender,
          handler = _this$props3.handler,
          props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props3, ["defaultOpen", "getContainer", "wrapperClassName", "forceRender", "handler"]);

      var open = this.state.open; // 渲染在当前 dom 里；

      if (!getContainer) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
          className: wrapperClassName,
          ref: function ref(c) {
            _this2.dom = c;
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_DrawerChild__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
          open: open,
          handler: handler,
          getContainer: function getContainer() {
            return _this2.dom;
          },
          onClose: this.onClose,
          onHandleClick: this.onHandleClick
        })));
      } // 如果有 handler 为内置强制渲染；


      var $forceRender = !!handler || forceRender;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](rc_util_es_PortalWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
        visible: open,
        forceRender: $forceRender,
        getContainer: getContainer,
        wrapperClassName: wrapperClassName
      }, function (_ref) {
        var visible = _ref.visible,
            afterClose = _ref.afterClose,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["visible", "afterClose"]);

        return (
          /*#__PURE__*/
          // react 15，componentWillUnmount 时 Portal 返回 afterClose, visible.
          react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_DrawerChild__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, rest, {
            open: visible !== undefined ? visible : open,
            afterVisibleChange: afterClose !== undefined ? afterClose : props.afterVisibleChange,
            handler: handler,
            onClose: _this2.onClose,
            onHandleClick: _this2.onHandleClick
          }))
        );
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, _ref2) {
      var prevProps = _ref2.prevProps;
      var newState = {
        prevProps: props
      };

      if (typeof prevProps !== 'undefined' && props.open !== prevProps.open) {
        newState.open = props.open;
      }

      return newState;
    }
  }]);

  return DrawerWrapper;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

DrawerWrapper.defaultProps = {
  prefixCls: 'drawer',
  placement: 'left',
  getContainer: 'body',
  defaultOpen: false,
  level: 'all',
  duration: '.3s',
  ease: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  onChange: function onChange() {},
  afterVisibleChange: function afterVisibleChange() {},
  handler: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
    className: "drawer-handle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("i", {
    className: "drawer-handle-icon"
  })),
  showMask: true,
  maskClosable: true,
  maskStyle: {},
  wrapperClassName: '',
  className: '',
  keyboard: true,
  forceRender: false
};
/* harmony default export */ __webpack_exports__["default"] = (DrawerWrapper);

/***/ }),

/***/ "./node_modules/rc-drawer/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-drawer/es/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrawerWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawerWrapper */ "./node_modules/rc-drawer/es/DrawerWrapper.js");
// export this package's api

/* harmony default export */ __webpack_exports__["default"] = (_DrawerWrapper__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-drawer/es/utils.js":
/*!********************************************!*\
  !*** ./node_modules/rc-drawer/es/utils.js ***!
  \********************************************/
/*! exports provided: dataToArray, transitionStr, transitionEnd, addEventListener, removeEventListener, transformArguments, isNumeric, windowIsUndefined, getTouchParentScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataToArray", function() { return dataToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionStr", function() { return transitionStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformArguments", function() { return transformArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowIsUndefined", function() { return windowIsUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchParentScroll", function() { return getTouchParentScroll; });
function dataToArray(vars) {
  if (Array.isArray(vars)) {
    return vars;
  }

  return [vars];
}
var transitionEndObject = {
  transition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd',
  MozTransition: 'transitionend',
  OTransition: 'oTransitionEnd otransitionend'
};
var transitionStr = Object.keys(transitionEndObject).filter(function (key) {
  if (typeof document === 'undefined') {
    return false;
  }

  var html = document.getElementsByTagName('html')[0];
  return key in (html ? html.style : {});
})[0];
var transitionEnd = transitionEndObject[transitionStr];
function addEventListener(target, eventType, callback, options) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.attachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function removeEventListener(target, eventType, callback, options) {
  if (target.removeEventListener) {
    target.removeEventListener(eventType, callback, options);
  } else if (target.attachEvent) {
    // tslint:disable-line
    target.detachEvent("on".concat(eventType), callback); // tslint:disable-line
  }
}
function transformArguments(arg, cb) {
  var result = typeof arg === 'function' ? arg(cb) : arg;

  if (Array.isArray(result)) {
    if (result.length === 2) {
      return result;
    }

    return [result[0], result[1]];
  }

  return [result];
}
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};
var windowIsUndefined = !(typeof window !== 'undefined' && window.document && window.document.createElement);
var getTouchParentScroll = function getTouchParentScroll(root, currentTarget, differX, differY) {
  if (!currentTarget || currentTarget === document || currentTarget instanceof Document) {
    return false;
  } // root 为 drawer-content 设定了 overflow, 判断为 root 的 parent 时结束滚动；


  if (currentTarget === root.parentNode) {
    return true;
  }

  var isY = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differY);
  var isX = Math.max(Math.abs(differX), Math.abs(differY)) === Math.abs(differX);
  var scrollY = currentTarget.scrollHeight - currentTarget.clientHeight;
  var scrollX = currentTarget.scrollWidth - currentTarget.clientWidth;
  var style = document.defaultView.getComputedStyle(currentTarget);
  var overflowY = style.overflowY === 'auto' || style.overflowY === 'scroll';
  var overflowX = style.overflowX === 'auto' || style.overflowX === 'scroll';
  var y = scrollY && overflowY;
  var x = scrollX && overflowX;

  if (isY && (!y || y && (currentTarget.scrollTop >= scrollY && differY < 0 || currentTarget.scrollTop <= 0 && differY > 0)) || isX && (!x || x && (currentTarget.scrollLeft >= scrollX && differX < 0 || currentTarget.scrollLeft <= 0 && differX > 0))) {
    return getTouchParentScroll(root, currentTarget.parentNode, differX, differY);
  }

  return false;
};

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/scrollLocker.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/scrollLocker.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollLocker; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _getScrollBarSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getScrollBarSize */ "./node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setStyle */ "./node_modules/rc-util/es/setStyle.js");




var locks = [];
var scrollingEffectClassName = 'ant-scrolling-effect';
var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
var uuid = 0; // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var cacheStyle = new Map();

var ScrollLocker = function ScrollLocker(options) {
  var _this = this;

  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ScrollLocker);

  this.getContainer = function () {
    var _this$options;

    return (_this$options = _this.options) === null || _this$options === void 0 ? void 0 : _this$options.container;
  }; // if options change...


  this.reLock = function (options) {
    var findLock = locks.find(function (_ref) {
      var target = _ref.target;
      return target === _this.lockTarget;
    });

    if (findLock) {
      _this.unLock();
    }

    _this.options = options;

    if (findLock) {
      findLock.options = options;

      _this.lock();
    }
  };

  this.lock = function () {
    var _this$options3;

    // If lockTarget exist return
    if (locks.some(function (_ref2) {
      var target = _ref2.target;
      return target === _this.lockTarget;
    })) {
      return;
    } // If same container effect, return


    if (locks.some(function (_ref3) {
      var _this$options2;

      var options = _ref3.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options2 = _this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.container);
    })) {
      locks = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(locks), [{
        target: _this.lockTarget,
        options: _this.options
      }]);
      return;
    }

    var scrollBarSize = 0;
    var container = ((_this$options3 = _this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.container) || document.body;

    if (container === document.body && window.innerWidth - document.documentElement.clientWidth > 0 || container.scrollHeight > container.clientHeight) {
      scrollBarSize = Object(_getScrollBarSize__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }

    var containerClassName = container.className;

    if (locks.filter(function (_ref4) {
      var _this$options4;

      var options = _ref4.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_this$options4 = _this.options) === null || _this$options4 === void 0 ? void 0 : _this$options4.container);
    }).length === 0) {
      cacheStyle.set(container, Object(_setStyle__WEBPACK_IMPORTED_MODULE_3__["default"])({
        width: "calc(100% - ".concat(scrollBarSize, "px)"),
        overflow: 'hidden',
        overflowX: 'hidden',
        overflowY: 'hidden'
      }, {
        element: container
      }));
    } // https://github.com/ant-design/ant-design/issues/19729


    if (!scrollingEffectClassNameReg.test(containerClassName)) {
      var addClassName = "".concat(containerClassName, " ").concat(scrollingEffectClassName);
      container.className = addClassName.trim();
    }

    locks = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(locks), [{
      target: _this.lockTarget,
      options: _this.options
    }]);
  };

  this.unLock = function () {
    var _this$options5;

    var findLock = locks.find(function (_ref5) {
      var target = _ref5.target;
      return target === _this.lockTarget;
    });
    locks = locks.filter(function (_ref6) {
      var target = _ref6.target;
      return target !== _this.lockTarget;
    });

    if (!findLock || locks.some(function (_ref7) {
      var _findLock$options;

      var options = _ref7.options;
      return (options === null || options === void 0 ? void 0 : options.container) === ((_findLock$options = findLock.options) === null || _findLock$options === void 0 ? void 0 : _findLock$options.container);
    })) {
      return;
    } // Remove Effect


    var container = ((_this$options5 = _this.options) === null || _this$options5 === void 0 ? void 0 : _this$options5.container) || document.body;
    var containerClassName = container.className;
    if (!scrollingEffectClassNameReg.test(containerClassName)) return;
    Object(_setStyle__WEBPACK_IMPORTED_MODULE_3__["default"])(cacheStyle.get(container), {
      element: container
    });
    cacheStyle.delete(container);
    container.className = container.className.replace(scrollingEffectClassNameReg, '').trim();
  }; // eslint-disable-next-line no-plusplus


  this.lockTarget = uuid++;
  this.options = options;
};



/***/ }),

/***/ "./node_modules/rc-util/es/PortalWrapper.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/es/PortalWrapper.js ***!
  \**************************************************/
/*! exports provided: getOpenCount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpenCount", function() { return getOpenCount; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _raf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./raf */ "./node_modules/rc-util/es/raf.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Portal */ "./node_modules/rc-util/es/Portal.js");
/* harmony import */ var _Dom_canUseDom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Dom/canUseDom */ "./node_modules/rc-util/es/Dom/canUseDom.js");
/* harmony import */ var _switchScrollingEffect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./switchScrollingEffect */ "./node_modules/rc-util/es/switchScrollingEffect.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./setStyle */ "./node_modules/rc-util/es/setStyle.js");
/* harmony import */ var _Dom_scrollLocker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Dom/scrollLocker */ "./node_modules/rc-util/es/Dom/scrollLocker.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable no-underscore-dangle,react/require-default-props */







var openCount = 0;
var supportDom = Object(_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_9__["default"])();
/** @private Test usage only */

function getOpenCount() {
  return  false ? undefined : 0;
} // https://github.com/ant-design/ant-design/issues/19340
// https://github.com/ant-design/ant-design/issues/19332

var cacheOverflow = {};

var getParent = function getParent(getContainer) {
  if (!supportDom) {
    return null;
  }

  if (getContainer) {
    if (typeof getContainer === 'string') {
      return document.querySelectorAll(getContainer)[0];
    }

    if (typeof getContainer === 'function') {
      return getContainer();
    }

    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__["default"])(getContainer) === 'object' && getContainer instanceof window.HTMLElement) {
      return getContainer;
    }
  }

  return document.body;
};

var PortalWrapper = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PortalWrapper, _React$Component);

  var _super = _createSuper(PortalWrapper);

  function PortalWrapper(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PortalWrapper);

    _this = _super.call(this, props);
    _this.componentRef = react__WEBPACK_IMPORTED_MODULE_6__["createRef"]();

    _this.updateScrollLocker = function (prevProps) {
      var _ref = prevProps || {},
          prevVisible = _ref.visible;

      var _this$props = _this.props,
          getContainer = _this$props.getContainer,
          visible = _this$props.visible;

      if (visible && visible !== prevVisible && supportDom && getParent(getContainer) !== _this.scrollLocker.getContainer()) {
        _this.scrollLocker.reLock({
          container: getParent(getContainer)
        });
      }
    };

    _this.updateOpenCount = function (prevProps) {
      var _ref2 = prevProps || {},
          prevVisible = _ref2.visible,
          prevGetContainer = _ref2.getContainer;

      var _this$props2 = _this.props,
          visible = _this$props2.visible,
          getContainer = _this$props2.getContainer; // Update count

      if (visible !== prevVisible && supportDom && getParent(getContainer) === document.body) {
        if (visible && !prevVisible) {
          openCount += 1;
        } else if (prevProps) {
          openCount -= 1;
        }
      } // Clean up container if needed


      var getContainerIsFunc = typeof getContainer === 'function' && typeof prevGetContainer === 'function';

      if (getContainerIsFunc ? getContainer.toString() !== prevGetContainer.toString() : getContainer !== prevGetContainer) {
        _this.removeCurrentContainer();
      }
    };

    _this.attachToParent = function () {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (force || _this.container && !_this.container.parentNode) {
        var parent = getParent(_this.props.getContainer);

        if (parent) {
          parent.appendChild(_this.container);
          return true;
        }

        return false;
      }

      return true;
    };

    _this.getContainer = function () {
      if (!supportDom) {
        return null;
      }

      if (!_this.container) {
        _this.container = document.createElement('div');

        _this.attachToParent(true);
      }

      _this.setWrapperClassName();

      return _this.container;
    };

    _this.setWrapperClassName = function () {
      var wrapperClassName = _this.props.wrapperClassName;

      if (_this.container && wrapperClassName && wrapperClassName !== _this.container.className) {
        _this.container.className = wrapperClassName;
      }
    };

    _this.removeCurrentContainer = function () {
      var _this$container, _this$container$paren;

      // Portal will remove from `parentNode`.
      // Let's handle this again to avoid refactor issue.
      (_this$container = _this.container) === null || _this$container === void 0 ? void 0 : (_this$container$paren = _this$container.parentNode) === null || _this$container$paren === void 0 ? void 0 : _this$container$paren.removeChild(_this.container);
    };
    /**
     * Enhance ./switchScrollingEffect
     * 1. Simulate document body scroll bar with
     * 2. Record body has overflow style and recover when all of PortalWrapper invisible
     * 3. Disable body scroll when PortalWrapper has open
     *
     * @memberof PortalWrapper
     */


    _this.switchScrollingEffect = function () {
      if (openCount === 1 && !Object.keys(cacheOverflow).length) {
        Object(_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_10__["default"])(); // Must be set after switchScrollingEffect

        cacheOverflow = Object(_setStyle__WEBPACK_IMPORTED_MODULE_11__["default"])({
          overflow: 'hidden',
          overflowX: 'hidden',
          overflowY: 'hidden'
        });
      } else if (!openCount) {
        Object(_setStyle__WEBPACK_IMPORTED_MODULE_11__["default"])(cacheOverflow);
        cacheOverflow = {};
        Object(_switchScrollingEffect__WEBPACK_IMPORTED_MODULE_10__["default"])(true);
      }
    };

    _this.scrollLocker = new _Dom_scrollLocker__WEBPACK_IMPORTED_MODULE_12__["default"]({
      container: getParent(props.getContainer)
    });
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PortalWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.updateOpenCount();

      if (!this.attachToParent()) {
        this.rafId = Object(_raf__WEBPACK_IMPORTED_MODULE_7__["default"])(function () {
          _this2.forceUpdate();
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.updateOpenCount(prevProps);
      this.updateScrollLocker(prevProps);
      this.setWrapperClassName();
      this.attachToParent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props3 = this.props,
          visible = _this$props3.visible,
          getContainer = _this$props3.getContainer;

      if (supportDom && getParent(getContainer) === document.body) {
        // 离开时不会 render， 导到离开时数值不变，改用 func 。。
        openCount = visible && openCount ? openCount - 1 : openCount;
      }

      this.removeCurrentContainer();
      _raf__WEBPACK_IMPORTED_MODULE_7__["default"].cancel(this.rafId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          forceRender = _this$props4.forceRender,
          visible = _this$props4.visible;
      var portal = null;
      var childProps = {
        getOpenCount: function getOpenCount() {
          return openCount;
        },
        getContainer: this.getContainer,
        switchScrollingEffect: this.switchScrollingEffect,
        scrollLocker: this.scrollLocker
      };

      if (forceRender || visible || this.componentRef.current) {
        portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_Portal__WEBPACK_IMPORTED_MODULE_8__["default"], {
          getContainer: this.getContainer,
          ref: this.componentRef
        }, children(childProps));
      }

      return portal;
    }
  }]);

  return PortalWrapper;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PortalWrapper);

/***/ }),

/***/ "./node_modules/rc-util/es/getScrollBarSize.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/getScrollBarSize.js ***!
  \*****************************************************/
/*! exports provided: default, getTargetScrollBarSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollBarSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetScrollBarSize", function() { return getTargetScrollBarSize; });
/* eslint-disable no-param-reassign */
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}

function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }

  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
      width = _getComputedStyle.width,
      height = _getComputedStyle.height;

  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}

/***/ }),

/***/ "./node_modules/rc-util/es/setStyle.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/es/setStyle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Easy to set element style, return previous style
 * IE browser compatible(IE browser doesn't merge overflow style, need to set it separately)
 * https://github.com/ant-design/ant-design/issues/19393
 *
 */
function setStyle(style) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!style) {
    return {};
  }

  var _options$element = options.element,
      element = _options$element === void 0 ? document.body : _options$element;
  var oldStyle = {};
  var styleKeys = Object.keys(style); // IE browser compatible

  styleKeys.forEach(function (key) {
    oldStyle[key] = element.style[key];
  });
  styleKeys.forEach(function (key) {
    element.style[key] = style[key];
  });
  return oldStyle;
}

/* harmony default export */ __webpack_exports__["default"] = (setStyle);

/***/ }),

/***/ "./node_modules/rc-util/es/switchScrollingEffect.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/es/switchScrollingEffect.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getScrollBarSize */ "./node_modules/rc-util/es/getScrollBarSize.js");
/* harmony import */ var _setStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setStyle */ "./node_modules/rc-util/es/setStyle.js");



function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

var cacheStyle = {};
/* harmony default export */ __webpack_exports__["default"] = (function (close) {
  if (!isBodyOverflowing() && !close) {
    return;
  } // https://github.com/ant-design/ant-design/issues/19729


  var scrollingEffectClassName = 'ant-scrolling-effect';
  var scrollingEffectClassNameReg = new RegExp("".concat(scrollingEffectClassName), 'g');
  var bodyClassName = document.body.className;

  if (close) {
    if (!scrollingEffectClassNameReg.test(bodyClassName)) return;
    Object(_setStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(cacheStyle);
    cacheStyle = {};
    document.body.className = bodyClassName.replace(scrollingEffectClassNameReg, '').trim();
    return;
  }

  var scrollBarSize = Object(_getScrollBarSize__WEBPACK_IMPORTED_MODULE_0__["default"])();

  if (scrollBarSize) {
    cacheStyle = Object(_setStyle__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: 'relative',
      width: "calc(100% - ".concat(scrollBarSize, "px)")
    });

    if (!scrollingEffectClassNameReg.test(bodyClassName)) {
      var addClassName = "".concat(bodyClassName, " ").concat(scrollingEffectClassName);
      document.body.className = addClassName.trim();
    }
  }
});

/***/ }),

/***/ "./node_modules/rc-util/lib/getScrollBarSize.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-util/lib/getScrollBarSize.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getScrollBarSize;
exports.getTargetScrollBarSize = getTargetScrollBarSize;

/* eslint-disable no-param-reassign */
var cached;

function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }

  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }

  return cached;
}

function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}

function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }

  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
      width = _getComputedStyle.width,
      height = _getComputedStyle.height;

  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}

/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/es/index.js ***!
  \******************************************************************/
/*! exports provided: Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState, resetNextUuid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemButton", function() { return AccordionItemButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemHeading", function() { return AccordionItemHeadingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemPanel", function() { return AccordionItemPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItemState", function() { return AccordionItemState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetNextUuid", function() { return resetNextUuid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var AccordionStore = function AccordionStore(_ref) {
  var _this = this;

  var _ref$expanded = _ref.expanded,
      _expanded = _ref$expanded === void 0 ? [] : _ref$expanded,
      _ref$allowMultipleExp = _ref.allowMultipleExpanded,
      allowMultipleExpanded = _ref$allowMultipleExp === void 0 ? false : _ref$allowMultipleExp,
      _ref$allowZeroExpande = _ref.allowZeroExpanded,
      allowZeroExpanded = _ref$allowZeroExpande === void 0 ? false : _ref$allowZeroExpande;

  _classCallCheck(this, AccordionStore);

  _defineProperty(this, "expanded", void 0);

  _defineProperty(this, "allowMultipleExpanded", void 0);

  _defineProperty(this, "allowZeroExpanded", void 0);

  _defineProperty(this, "toggleExpanded", function (uuid) {
    if (_this.isItemDisabled(uuid)) {
      return _this;
    }

    var isExpanded = _this.isItemExpanded(uuid);

    if (!isExpanded) {
      return _this.augment({
        expanded: _this.allowMultipleExpanded ? [].concat(_toConsumableArray(_this.expanded), [uuid]) : [uuid]
      });
    } else {
      return _this.augment({
        expanded: _this.expanded.filter(function (expandedUuid) {
          return expandedUuid !== uuid;
        })
      });
    }
  });

  _defineProperty(this, "isItemDisabled", function (uuid) {
    var isExpanded = _this.isItemExpanded(uuid);

    var isOnlyOneExpanded = _this.expanded.length === 1;
    return Boolean(isExpanded && !_this.allowZeroExpanded && isOnlyOneExpanded);
  });

  _defineProperty(this, "isItemExpanded", function (uuid) {
    return _this.expanded.indexOf(uuid) !== -1;
  });

  _defineProperty(this, "getPanelAttributes", function (uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);
    return {
      role: _this.allowMultipleExpanded ? undefined : 'region',
      'aria-hidden': _this.allowMultipleExpanded ? !expanded : undefined,
      'aria-labelledby': _this.getButtonId(uuid),
      id: _this.getPanelId(uuid),
      hidden: expanded ? undefined : true
    };
  });

  _defineProperty(this, "getHeadingAttributes", function () {
    return {
      role: 'heading'
    };
  });

  _defineProperty(this, "getButtonAttributes", function (uuid, dangerouslySetExpanded) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : _this.isItemExpanded(uuid);

    var disabled = _this.isItemDisabled(uuid);

    return {
      id: _this.getButtonId(uuid),
      'aria-disabled': disabled,
      'aria-expanded': expanded,
      'aria-controls': _this.getPanelId(uuid),
      role: 'button',
      tabIndex: 0
    };
  });

  _defineProperty(this, "getPanelId", function (uuid) {
    return "accordion__panel-".concat(uuid);
  });

  _defineProperty(this, "getButtonId", function (uuid) {
    return "accordion__heading-".concat(uuid);
  });

  _defineProperty(this, "augment", function (args) {
    return new AccordionStore(_objectSpread2({
      expanded: _this.expanded,
      allowMultipleExpanded: _this.allowMultipleExpanded,
      allowZeroExpanded: _this.allowZeroExpanded
    }, args));
  });

  this.expanded = _expanded;
  this.allowMultipleExpanded = allowMultipleExpanded;
  this.allowZeroExpanded = allowZeroExpanded;
};

var Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
var Provider = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Provider, _React$PureComponent);

  var _super = _createSuper(Provider);

  function Provider() {
    var _this;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", new AccordionStore({
      expanded: _this.props.preExpanded,
      allowMultipleExpanded: _this.props.allowMultipleExpanded,
      allowZeroExpanded: _this.props.allowZeroExpanded
    }));

    _defineProperty(_assertThisInitialized(_this), "toggleExpanded", function (key) {
      _this.setState(function (state) {
        return state.toggleExpanded(key);
      }, function () {
        if (_this.props.onChange) {
          _this.props.onChange(_this.state.expanded);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isItemDisabled", function (key) {
      return _this.state.isItemDisabled(key);
    });

    _defineProperty(_assertThisInitialized(_this), "isItemExpanded", function (key) {
      return _this.state.isItemExpanded(key);
    });

    _defineProperty(_assertThisInitialized(_this), "getPanelAttributes", function (key, dangerouslySetExpanded) {
      return _this.state.getPanelAttributes(key, dangerouslySetExpanded);
    });

    _defineProperty(_assertThisInitialized(_this), "getHeadingAttributes", function () {
      // uuid: UUID
      return _this.state.getHeadingAttributes();
    });

    _defineProperty(_assertThisInitialized(_this), "getButtonAttributes", function (key, dangerouslySetExpanded) {
      return _this.state.getButtonAttributes(key, dangerouslySetExpanded);
    });

    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          allowZeroExpanded = _this$state.allowZeroExpanded,
          allowMultipleExpanded = _this$state.allowMultipleExpanded;
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Provider, {
        value: {
          allowMultipleExpanded: allowMultipleExpanded,
          allowZeroExpanded: allowZeroExpanded,
          toggleExpanded: this.toggleExpanded,
          isItemDisabled: this.isItemDisabled,
          isItemExpanded: this.isItemExpanded,
          getPanelAttributes: this.getPanelAttributes,
          getHeadingAttributes: this.getHeadingAttributes,
          getButtonAttributes: this.getButtonAttributes
        }
      }, this.props.children || null);
    }
  }]);

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(Provider, "defaultProps", {
  allowMultipleExpanded: false,
  allowZeroExpanded: false
});

var Consumer = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(Consumer, _React$PureComponent2);

  var _super2 = _createSuper(Consumer);

  function Consumer() {
    var _this2;

    _classCallCheck(this, Consumer);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "renderChildren", function (container) {
      return container ? _this2.props.children(container) : null;
    });

    return _this2;
  }

  _createClass(Consumer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context.Consumer, null, this.renderChildren);
    }
  }]);

  return Consumer;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

var Accordion = function Accordion(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion' : _ref$className,
      allowMultipleExpanded = _ref.allowMultipleExpanded,
      allowZeroExpanded = _ref.allowZeroExpanded,
      onChange = _ref.onChange,
      preExpanded = _ref.preExpanded,
      rest = _objectWithoutProperties(_ref, ["className", "allowMultipleExpanded", "allowZeroExpanded", "onChange", "preExpanded"]);

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Provider, {
    preExpanded: preExpanded,
    allowMultipleExpanded: allowMultipleExpanded,
    allowZeroExpanded: allowZeroExpanded,
    onChange: onChange
  }, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
    "data-accordion-component": "Accordion",
    className: className
  }, rest)));
};

var DisplayName;

(function (DisplayName) {
  DisplayName["Accordion"] = "Accordion";
  DisplayName["AccordionItem"] = "AccordionItem";
  DisplayName["AccordionItemButton"] = "AccordionItemButton";
  DisplayName["AccordionItemHeading"] = "AccordionItemHeading";
  DisplayName["AccordionItemPanel"] = "AccordionItemPanel";
})(DisplayName || (DisplayName = {}));

var DisplayName$1 = DisplayName;

var DEFAULT = 0;
var counter = DEFAULT;
function nextUuid() {
  var current = counter;
  counter = counter + 1;
  return "raa-".concat(current);
}
function resetNextUuid() {
  counter = DEFAULT;
} // HTML5 ids allow all unicode characters, except for ASCII whitespaces
// https://infra.spec.whatwg.org/#ascii-whitespace
// eslint-disable-next-line no-control-regex

var idRegex = /[\u0009\u000a\u000c\u000d\u0020]/g;
function assertValidHtmlId(htmlId) {
  if (htmlId === '' || idRegex.test(htmlId)) {
    console.error("uuid must be a valid HTML5 id but was given \"".concat(htmlId, "\", ASCII whitespaces are forbidden"));
    return false;
  }

  return true;
}

var Context$1 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

var Provider$1 = function Provider(_ref) {
  var children = _ref.children,
      uuid = _ref.uuid,
      accordionContext = _ref.accordionContext,
      dangerouslySetExpanded = _ref.dangerouslySetExpanded;

  var toggleExpanded = function toggleExpanded() {
    accordionContext.toggleExpanded(uuid);
  };

  var renderChildren = function renderChildren(accordionContext) {
    var expanded = dangerouslySetExpanded !== null && dangerouslySetExpanded !== void 0 ? dangerouslySetExpanded : accordionContext.isItemExpanded(uuid);
    var disabled = accordionContext.isItemDisabled(uuid);
    var panelAttributes = accordionContext.getPanelAttributes(uuid, dangerouslySetExpanded);
    var headingAttributes = accordionContext.getHeadingAttributes(uuid);
    var buttonAttributes = accordionContext.getButtonAttributes(uuid, dangerouslySetExpanded);
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context$1.Provider, {
      value: {
        uuid: uuid,
        expanded: expanded,
        disabled: disabled,
        toggleExpanded: toggleExpanded,
        panelAttributes: panelAttributes,
        headingAttributes: headingAttributes,
        buttonAttributes: buttonAttributes
      }
    }, children);
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, renderChildren);
};

var ProviderWrapper = function ProviderWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer, null, function (accordionContext) {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Provider$1, _extends({}, props, {
      accordionContext: accordionContext
    }));
  });
};
var Consumer$1 = function Consumer(_ref2) {
  var children = _ref2.children;

  var renderChildren = function renderChildren(container) {
    return container ? children(container) : null;
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Context$1.Consumer, null, renderChildren);
};

var AccordionItem = function AccordionItem(_ref) {
  var customUuid = _ref.uuid,
      dangerouslySetExpanded = _ref.dangerouslySetExpanded,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__item' : _ref$className,
      activeClassName = _ref.activeClassName,
      rest = _objectWithoutProperties(_ref, ["uuid", "dangerouslySetExpanded", "className", "activeClassName"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(nextUuid()),
      _useState2 = _slicedToArray(_useState, 1),
      instanceUuid = _useState2[0];

  var uuid = customUuid || instanceUuid;

  var renderChildren = function renderChildren(itemContext) {
    var expanded = itemContext.expanded;
    var cx = expanded && activeClassName ? activeClassName : className;
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
      "data-accordion-component": "AccordionItem",
      className: cx
    }, rest));
  };

  assertValidHtmlId(uuid);

  if (rest.id) {
    assertValidHtmlId(rest.id);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ProviderWrapper, {
    uuid: uuid,
    dangerouslySetExpanded: dangerouslySetExpanded
  }, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, renderChildren));
};

AccordionItem.displayName = DisplayName$1.AccordionItem;

function getClosestAccordion(el) {
  return el && (el.matches('[data-accordion-component="Accordion"]') ? el : getClosestAccordion(el.parentElement));
}
function getSiblingButtons(item) {
  var parentAccordion = getClosestAccordion(item);
  return parentAccordion && Array.from(parentAccordion.querySelectorAll('[data-accordion-component="AccordionItemButton"]'));
}
function focusFirstSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var first = siblings[0];

  if (first) {
    first.focus();
  }
}
function focusLastSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var last = siblings[siblings.length - 1];

  if (last) {
    last.focus();
  }
}
function focusNextSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var next = siblings[currentIndex + 1];

    if (next) {
      next.focus();
    }
  }
}
function focusPreviousSiblingOf(item) {
  var siblings = getSiblingButtons(item) || [];
  var currentIndex = siblings.indexOf(item);

  if (currentIndex !== -1) {
    var previous = siblings[currentIndex - 1];

    if (previous) {
      previous.focus();
    }
  }
}

var keycodes = {
  END: 'End',
  ENTER: 'Enter',
  HOME: 'Home',
  SPACE: ' ',
  SPACE_DEPRECATED: 'Spacebar',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight'
};

var AccordionItemButton = function AccordionItemButton(_ref) {
  var toggleExpanded = _ref.toggleExpanded,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__button' : _ref$className,
      rest = _objectWithoutProperties(_ref, ["toggleExpanded", "className"]);

  var handleKeyPress = function handleKeyPress(evt) {
    var keyCode = evt.key;

    if (keyCode === keycodes.ENTER || keyCode === keycodes.SPACE || keyCode === keycodes.SPACE_DEPRECATED) {
      evt.preventDefault();
      toggleExpanded();
    }
    /* The following block is ignored from test coverage because at time
     * time of writing Jest/react-testing-library can not assert 'focus'
     * functionality.
     */
    // istanbul ignore next


    if (evt.target instanceof HTMLElement) {
      switch (keyCode) {
        case keycodes.HOME:
          {
            evt.preventDefault();
            focusFirstSiblingOf(evt.target);
            break;
          }

        case keycodes.END:
          {
            evt.preventDefault();
            focusLastSiblingOf(evt.target);
            break;
          }

        case keycodes.LEFT:
        case keycodes.UP:
          {
            evt.preventDefault();
            focusPreviousSiblingOf(evt.target);
            break;
          }

        case keycodes.RIGHT:
        case keycodes.DOWN:
          {
            evt.preventDefault();
            focusNextSiblingOf(evt.target);
            break;
          }
      }
    }
  };

  if (rest.id) {
    assertValidHtmlId(rest.id);
  }

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
    className: className
  }, rest, {
    role: "button",
    tabIndex: 0,
    onClick: toggleExpanded,
    onKeyDown: handleKeyPress,
    "data-accordion-component": "AccordionItemButton"
  }));
};

var AccordionItemButtonWrapper = function AccordionItemButtonWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, function (itemContext) {
    var toggleExpanded = itemContext.toggleExpanded,
        buttonAttributes = itemContext.buttonAttributes;
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AccordionItemButton, _extends({
      toggleExpanded: toggleExpanded
    }, props, buttonAttributes));
  });
};

var defaultProps = {
  className: 'accordion__heading',
  'aria-level': 3
};
var SPEC_ERROR = "AccordionItemButton may contain only one child element, which must be an instance of AccordionItemButton.\n\nFrom the WAI-ARIA spec (https://www.w3.org/TR/wai-aria-practices-1.1/#accordion):\n\n\u201CThe button element is the only element inside the heading element. That is, if there are other visually persistent elements, they are not included inside the heading element.\u201D\n\n";
var AccordionItemHeading = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AccordionItemHeading, _React$PureComponent);

  var _super = _createSuper(AccordionItemHeading);

  function AccordionItemHeading() {
    var _this;

    _classCallCheck(this, AccordionItemHeading);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "ref", void 0);

    _defineProperty(_assertThisInitialized(_this), "setRef", function (ref) {
      _this.ref = ref;
    });

    return _this;
  }

  _createClass(AccordionItemHeading, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      AccordionItemHeading.VALIDATE(this.ref);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
        "data-accordion-component": "AccordionItemHeading"
      }, this.props, {
        ref: this.setRef
      }));
    }
  }], [{
    key: "VALIDATE",
    value: function VALIDATE(ref) {
      if (ref === undefined) {
        throw new Error('ref is undefined');
      }

      if (!(ref.childElementCount === 1 && ref.firstElementChild && ref.firstElementChild.getAttribute('data-accordion-component') === 'AccordionItemButton')) {
        throw new Error(SPEC_ERROR);
      }
    }
  }]);

  return AccordionItemHeading;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(AccordionItemHeading, "defaultProps", defaultProps);

var AccordionItemHeadingWrapper = function AccordionItemHeadingWrapper(props) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, function (itemContext) {
    var headingAttributes = itemContext.headingAttributes;

    if (props.id) {
      assertValidHtmlId(props.id);
    }

    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AccordionItemHeading, _extends({}, props, headingAttributes));
  });
};

AccordionItemHeadingWrapper.displayName = DisplayName$1.AccordionItemHeading;

var AccordionItemPanel = function AccordionItemPanel(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'accordion__panel' : _ref$className,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["className", "id"]);

  var renderChildren = function renderChildren(_ref2) {
    var panelAttributes = _ref2.panelAttributes;

    if (id) {
      assertValidHtmlId(id);
    }

    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
      "data-accordion-component": "AccordionItemPanel",
      className: className
    }, rest, panelAttributes));
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, renderChildren);
};

var AccordionItemState = function AccordionItemState(_ref) {
  var children = _ref.children;

  var renderChildren = function renderChildren(itemContext) {
    var expanded = itemContext.expanded,
        disabled = itemContext.disabled;
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, children({
      expanded: expanded,
      disabled: disabled
    }));
  };

  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Consumer$1, null, renderChildren);
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9IZWFkaW5nL0hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lci9MaXN0aW5nL1NlYXJjaC9Nb2JpbGVTZWFyY2hWaWV3LmpzIiwid2VicGFjazovL19OX0UvLi9jb250YWluZXIvTGlzdGluZy9TZWFyY2gvTW9iaWxlU2VhcmNoVmlldy5zdHlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL2hvb2tzL3VzZUZvcmNlVXBkYXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZHJhd2VyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtZHJhd2VyL2VzL0RyYXdlckNoaWxkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtZHJhd2VyL2VzL0RyYXdlcldyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1kcmF3ZXIvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy1kcmF3ZXIvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9zY3JvbGxMb2NrZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL1BvcnRhbFdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL2dldFNjcm9sbEJhclNpemUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL3NldFN0eWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9zd2l0Y2hTY3JvbGxpbmdFZmZlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9nZXRTY3JvbGxCYXJTaXplLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYWNjZXNzaWJsZS1hY2NvcmRpb24vZGlzdC9lcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIZWFkaW5nV3JhcHBlciIsInN0eWxlZCIsImJhc2UiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwidGhlbWVkIiwiSGVhZGluZyIsImNvbnRlbnQiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsImVsZW1lbnQiLCJhcyIsIm9uZU9mIiwibnVtYmVyIiwiYXJyYXlPZiIsImRlZmF1bHRQcm9wcyIsIm10IiwibWIiLCJoaXN0b3J5IiwiY3JlYXRlQnJvd3Nlckhpc3RvcnkiLCJsb2NhdGlvbiIsIndpbmRvdyIsInNlcmNoUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFtZW5pdGllcyIsInBheWxvYWQiLCJwcm9wZXJ0eSIsInNldFN0YXJ0RGF0ZSIsInNldEVuZERhdGUiLCJtaW5QcmljZSIsIm1heFByaWNlIiwicm9vbSIsImd1ZXN0IiwiRmlsdGVyRHJhd2VyIiwidXNlQ29udGV4dCIsIlNlYXJjaENvbnRleHQiLCJkaXNwYXRjaCIsImluaXRpYWxTdGF0ZSIsInBhcnNlSW50IiwibG9jYXRpb25fbGF0IiwibG9jYXRpb25fbG5nIiwidXNlUmVkdWNlciIsImN1cnJlbnQiLCJkaXNwYXRjaEN1cnJlbnQiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsImNvdW50Um9vbSIsInNldFJvb20iLCJjb3VudEd1ZXN0Iiwic2V0R3Vlc3QiLCJoYW5kbGVUb2dnbGVEcmF3ZXIiLCJvbkNoYW5nZSIsInZhbHVlIiwicXVlcnkiLCJtb2RpZmllZEN1cnJlbnQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImRhdGVfcmFuZ2UiLCJwcmljZSIsImhhbmRsZUFwcGx5RmlsdGVyIiwicGFyYW1zIiwic2V0U3RhdGVUb1VybCIsInB1c2giLCJzZWFyY2giLCJoYW5kbGVDbG9zZURyYXdlciIsImJhY2tncm91bmRDb2xvciIsImdldEFtZW5pdGllcyIsIm9wdGlvbnMiLCJnZXRQcm9wZXJ0eVR5cGUiLCJwcmljZUluaXQiLCJtb21lbnQiLCJjYWxlbmRlckl0ZW0iLCJmYWRlSW4iLCJrZXlmcmFtZXMiLCJSb29tR3Vlc3RXcmFwcGVyIiwiZGl2IiwidGhlbWVHZXQiLCJJdGVtV3JhcHBlciIsIkZpbHRlckFyZWEiLCJGaWx0ZXJFbGVtZW50c1dyYXBwZXIiLCJCdXR0b25Hcm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxpRUFBTSxDQUFDLEdBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxHQUNsQkMsMENBRGtCLEVBRWxCQyx3REFGa0IsRUFHbEJDLHdEQUhrQixFQUlsQkMsdURBSmtCLEVBS2xCQyx3REFMa0IsRUFNbEJDLDJEQU5rQixFQU9sQkMsb0RBQU0sQ0FBQyxTQUFELENBUFksQ0FBcEI7O0FBVUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFlQyxLQUFmOztBQUFBLFNBQ2QsTUFBQyxjQUFELHlGQUFvQkEsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUE0QkQsT0FBNUIsQ0FEYztBQUFBLENBQWhCOztLQUFNRCxPO0FBSU5BLE9BQU8sQ0FBQ0csU0FBUjtBQUNFRixTQUFPLEVBQUVHLGlEQUFTLENBQUNDLFNBQVYsQ0FBb0IsQ0FBQ0QsaURBQVMsQ0FBQ0UsTUFBWCxFQUFtQkYsaURBQVMsQ0FBQ0csT0FBN0IsQ0FBcEIsQ0FEWDtBQUVFQyxJQUFFLEVBQUVKLGlEQUFTLENBQUNLLEtBQVYsQ0FBZ0Is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O0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLDJEQUFhO0FBQ3hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FB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O0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHNCQUFzQiwyREFBYTtBQUNuQztBQUNBO0FBQ0Esd0JBQXdCLDJEQUFhO0FBQ3JDO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwwQkFBMEIsMkRBQWE7QUFDdkM7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDLENBQUMsbURBQWE7O0FBRWY7O0FBRUE7QUFDQSxzQkFBc0IsMkRBQWE7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QiwyREFBYSxrQ0FBa0M7QUFDdkUsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDJEQUFhO0FBQ3JDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsc0JBQXNCLDJEQUFhO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFhLENBQUMsOENBQVE7QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxzQkFBc0IsMkRBQWE7QUFDbkM7O0FBRW1NIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBmb250RmFtaWx5LFxuICBmb250V2VpZ2h0LFxuICB0ZXh0QWxpZ24sXG4gIGxpbmVIZWlnaHQsXG4gIGxldHRlclNwYWNpbmcsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vQmFzZSc7XG5cbmNvbnN0IEhlYWRpbmdXcmFwcGVyID0gc3R5bGVkKCdwJykoXG4gIGJhc2UsXG4gIGZvbnRGYW1pbHksXG4gIGZvbnRXZWlnaHQsXG4gIHRleHRBbGlnbixcbiAgbGluZUhlaWdodCxcbiAgbGV0dGVyU3BhY2luZyxcbiAgdGhlbWVkKCdIZWFkaW5nJylcbik7XG5cbmNvbnN0IEhlYWRpbmcgPSAoeyBjb250ZW50LCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxIZWFkaW5nV3JhcHBlciB7Li4ucHJvcHN9Pntjb250ZW50fTwvSGVhZGluZ1dyYXBwZXI+XG4pO1xuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgYXM6IFByb3BUeXBlcy5vbmVPZihbJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10pLFxuICBmb250RmFtaWx5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgZm9udFdlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIHRleHRBbGlnbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGxpbmVIZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBsZXR0ZXJTcGFjaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgLi4uYmFzZS5wcm9wVHlwZXMsXG59O1xuXG5IZWFkaW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdoMicsXG4gIG10OiAwLFxuICBtYjogMCxcbiAgZm9udFdlaWdodDogNzAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21wb25lbnRzL1VJL0hlYWRpbmcvSGVhZGluZyc7XG5pbXBvcnQgeyBTbGlkZXIsIERyYXdlciwgQnV0dG9uLCBDaGVja2JveCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IElucHV0SW5jRGVjIGZyb20gJ2NvbXBvbmVudHMvVUkvSW5wdXRJbmNEZWMvSW5wdXRJbmNEZWMnO1xuaW1wb3J0IERhdGVSYW5nZVBpY2tlciBmcm9tICdjb21wb25lbnRzL1VJL0RhdGVQaWNrZXIvUmVhY3REYXRlcyc7XG5pbXBvcnQgeyBzZXRTdGF0ZVRvVXJsIH0gZnJvbSAnbGlicmFyeS9oZWxwZXJzL3VybF9oYW5kbGVyJztcbmltcG9ydCB7IFNlYXJjaENvbnRleHQgfSBmcm9tICdjb250ZXh0L1NlYXJjaFByb3ZpZGVyJztcbmltcG9ydCB7IElvSW9zQXJyb3dEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHtcbiAgQWNjb3JkaW9uLFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25JdGVtSGVhZGluZyxcbiAgQWNjb3JkaW9uSXRlbUJ1dHRvbixcbiAgQWNjb3JkaW9uSXRlbVBhbmVsLFxufSBmcm9tICdyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbic7XG5cbmltcG9ydCB7XG4gIHByaWNlSW5pdCxcbiAgY2FsZW5kZXJJdGVtLFxuICBnZXRBbWVuaXRpZXMsXG4gIGdldFByb3BlcnR5VHlwZSxcbn0gZnJvbSAnLi9TZWFyY2hQYXJhbXMnO1xuaW1wb3J0IHtcbiAgRmlsdGVyQXJlYSxcbiAgRmlsdGVyRWxlbWVudHNXcmFwcGVyLFxuICBCdXR0b25Hcm91cCxcbiAgUm9vbUd1ZXN0V3JhcHBlcixcbiAgSXRlbVdyYXBwZXIsXG59IGZyb20gJy4vTW9iaWxlU2VhcmNoVmlldy5zdHlsZSc7XG5cbmNvbnN0IGhpc3RvcnkgPSBwcm9jZXNzLmJyb3dzZXIgPyBjcmVhdGVCcm93c2VySGlzdG9yeSgpIDogZmFsc2U7XG5jb25zdCBsb2NhdGlvbiA9IHByb2Nlc3MuYnJvd3NlciAmJiB3aW5kb3cubG9jYXRpb247XG5cbmZ1bmN0aW9uIHNlcmNoUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdhbWVuaXRpZXMnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFtZW5pdGllczogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlICdwcm9wZXJ0eSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHJvcGVydHk6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnZGF0ZV9yYW5nZSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2V0U3RhcnREYXRlOiBhY3Rpb24ucGF5bG9hZC5zZXRTdGFydERhdGUsXG4gICAgICAgIHNldEVuZERhdGU6IGFjdGlvbi5wYXlsb2FkLnNldEVuZERhdGUsXG4gICAgICB9O1xuICAgIGNhc2UgJ3ByaWNlJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBtaW5QcmljZTogYWN0aW9uLnBheWxvYWQubWluUHJpY2UsXG4gICAgICAgIG1heFByaWNlOiBhY3Rpb24ucGF5bG9hZC5tYXhQcmljZSxcbiAgICAgIH07XG4gICAgY2FzZSAncm9vbSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcm9vbTogYWN0aW9uLnBheWxvYWQucm9vbSxcbiAgICAgIH07XG4gICAgY2FzZSAnZ3Vlc3QnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGd1ZXN0OiBhY3Rpb24ucGF5bG9hZC5ndWVzdCxcbiAgICAgIH07XG4gICAgY2FzZSAncmVzZXQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5jb25zdCBGaWx0ZXJEcmF3ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBhbWVuaXRpZXM6IHN0YXRlLmFtZW5pdGllcyB8fCBbXSxcbiAgICBwcm9wZXJ0eTogc3RhdGUucHJvcGVydHkgfHwgW10sXG4gICAgc2V0U3RhcnREYXRlOiBzdGF0ZS5zZXRTdGFydERhdGUgfHwgbnVsbCxcbiAgICBzZXRFbmREYXRlOiBzdGF0ZS5zZXRFbmREYXRlIHx8IG51bGwsXG4gICAgbWluUHJpY2U6IHBhcnNlSW50KHN0YXRlLm1pblByaWNlKSB8fCAwLFxuICAgIG1heFByaWNlOiBwYXJzZUludChzdGF0ZS5tYXhQcmljZSkgfHwgMTAwLFxuICAgIGxvY2F0aW9uX2xhdDogc3RhdGUubG9jYXRpb25fbGF0IHx8IG51bGwsXG4gICAgbG9jYXRpb25fbG5nOiBzdGF0ZS5sb2NhdGlvbl9sbmcgfHwgbnVsbCxcbiAgICByb29tOiBwYXJzZUludChzdGF0ZS5yb29tKSB8fCAwLFxuICAgIGd1ZXN0OiBwYXJzZUludChzdGF0ZS5ndWVzdCkgfHwgMCxcbiAgfTtcbiAgY29uc3QgW2N1cnJlbnQsIGRpc3BhdGNoQ3VycmVudF0gPSB1c2VSZWR1Y2VyKHNlcmNoUmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgLy8gc3RhdGUgZm9yIGRyYXdlclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyBSb29tIGd1ZXN0IHN0YXRlXG4gIGNvbnN0IFtjb3VudFJvb20sIHNldFJvb21dID0gdXNlU3RhdGUoY3VycmVudC5yb29tKTtcbiAgY29uc3QgW2NvdW50R3Vlc3QsIHNldEd1ZXN0XSA9IHVzZVN0YXRlKGN1cnJlbnQuZ3Vlc3QpO1xuXG4gIC8vIFRvZ2dsZSBEcmF3ZXJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xuICAgIHNldFRvZ2dsZSghdG9nZ2xlKTtcbiAgfTtcblxuICAvLyBkYXRhIGhhbmRsaW5nXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgbGV0IHF1ZXJ5ID0ge307XG4gICAgbGV0IG1vZGlmaWVkQ3VycmVudCA9IGN1cnJlbnQ7XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBtb2RpZmllZEN1cnJlbnQpIHtcbiAgICAgIGlmIChtb2RpZmllZEN1cnJlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgIGNhc2UgJ2RhdGVfcmFuZ2UnOlxuICAgICAgICAgICAgZGVsZXRlIG1vZGlmaWVkQ3VycmVudC5kYXRlX3JhbmdlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncHJpY2UnOlxuICAgICAgICAgICAgZGVsZXRlIG1vZGlmaWVkQ3VycmVudC5wcmljZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09ICdkYXRlX3JhbmdlJykge1xuICAgICAgcXVlcnkgPSB7XG4gICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgIHNldFN0YXJ0RGF0ZTogdmFsdWUuc2V0U3RhcnREYXRlLFxuICAgICAgICBzZXRFbmREYXRlOiB2YWx1ZS5zZXRFbmREYXRlLFxuICAgICAgfTtcbiAgICAgIGRpc3BhdGNoQ3VycmVudCh7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHZhbHVlIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ByaWNlJykge1xuICAgICAgcXVlcnkgPSB7XG4gICAgICAgIC4uLmN1cnJlbnQsXG4gICAgICAgIG1pblByaWNlOiB2YWx1ZSA/IHZhbHVlWzBdIDogMCxcbiAgICAgICAgbWF4UHJpY2U6IHZhbHVlID8gdmFsdWVbMV0gOiAxMDAsXG4gICAgICB9O1xuICAgICAgZGlzcGF0Y2hDdXJyZW50KHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcXVlcnkgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAncm9vbScpIHtcbiAgICAgIHF1ZXJ5ID0ge1xuICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICByb29tOiB2YWx1ZSA/IHZhbHVlIDogMCxcbiAgICAgIH07XG4gICAgICBkaXNwYXRjaEN1cnJlbnQoeyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBxdWVyeSB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdndWVzdCcpIHtcbiAgICAgIHF1ZXJ5ID0ge1xuICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICBndWVzdDogdmFsdWUgPyB2YWx1ZSA6IDAsXG4gICAgICB9O1xuICAgICAgZGlzcGF0Y2hDdXJyZW50KHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcXVlcnkgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAncmVzZXQnKSB7XG4gICAgICBzZXRSb29tKDApO1xuICAgICAgc2V0R3Vlc3QoMCk7XG4gICAgICBxdWVyeSA9IHtcbiAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgc2V0U3RhcnREYXRlOiBudWxsLFxuICAgICAgICBzZXRFbmREYXRlOiBudWxsLFxuICAgICAgICByb29tOiAwLFxuICAgICAgICBndWVzdDogMCxcbiAgICAgICAgYW1lbml0aWVzOiBbXSxcbiAgICAgICAgcHJvcGVydHk6IFtdLFxuICAgICAgICBtaW5QcmljZTogMCxcbiAgICAgICAgbWF4UHJpY2U6IDEwMCxcbiAgICAgICAgbG9jYXRpb25fbGF0OiBudWxsLFxuICAgICAgICBsb2NhdGlvbl9sbmc6IG51bGwsXG4gICAgICB9O1xuICAgICAgZGlzcGF0Y2hDdXJyZW50KHsgdHlwZTogdHlwZSwgcGF5bG9hZDogcXVlcnkgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5ID0ge1xuICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICBbdHlwZV06IHZhbHVlLFxuICAgICAgfTtcbiAgICAgIGRpc3BhdGNoQ3VycmVudCh7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHZhbHVlIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcHBseUZpbHRlciA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBzZXRTdGF0ZVRvVXJsKGN1cnJlbnQpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdVUERBVEUnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBoaXN0b3J5LnB1c2goe1xuICAgICAgLi4ubG9jYXRpb24sXG4gICAgICBzZWFyY2g6IHBhcmFtcyxcbiAgICB9KTtcbiAgICBzZXRUb2dnbGUoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlRHJhd2VyID0gKCkgPT4ge1xuICAgIHNldFJvb20oMCk7XG4gICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICBzZXRTdGFydERhdGU6IG51bGwsXG4gICAgICBzZXRFbmREYXRlOiBudWxsLFxuICAgICAgcm9vbTogMCxcbiAgICAgIGd1ZXN0OiAwLFxuICAgICAgYW1lbml0aWVzOiBbXSxcbiAgICAgIHByb3BlcnR5OiBbXSxcbiAgICAgIG1pblByaWNlOiAwLFxuICAgICAgbWF4UHJpY2U6IDEwMCxcbiAgICAgIGxvY2F0aW9uX2xhdDogbnVsbCxcbiAgICAgIGxvY2F0aW9uX2xuZzogbnVsbCxcbiAgICB9O1xuICAgIGRpc3BhdGNoQ3VycmVudCh7IHR5cGU6ICdyZXNldCcsIHBheWxvYWQ6IHF1ZXJ5IH0pO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdVUERBVEUnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICAuLi5jdXJyZW50LFxuICAgICAgICAuLi5xdWVyeSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgcGFyYW1zID0gc2V0U3RhdGVUb1VybChxdWVyeSk7XG4gICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgIC4uLmxvY2F0aW9uLFxuICAgICAgc2VhcmNoOiBwYXJhbXMsXG4gICAgfSk7XG4gICAgc2V0VG9nZ2xlKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGaWx0ZXJBcmVhPlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3RvZ2dsZSA/ICdhY3RpdmUnIDogJyd9IG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZURyYXdlcn0+XG4gICAgICAgIE1vcmUgZmlsdGVyc1xuICAgICAgPC9CdXR0b24+XG4gICAgICA8RHJhd2VyXG4gICAgICAgIGNsYXNzTmFtZT1cImZpbHRlcl9kcmF3ZXJcIlxuICAgICAgICBoZWlnaHQ9XCIxMDB2aFwiXG4gICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgIGNsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgbWFza0Nsb3NhYmxlPXtmYWxzZX1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VEcmF3ZXJ9XG4gICAgICAgIHZpc2libGU9e3RvZ2dsZX1cbiAgICAgICAgbWFza1N0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyB9fVxuICAgICAgPlxuICAgICAgICA8RmlsdGVyRWxlbWVudHNXcmFwcGVyPlxuICAgICAgICAgIDxBY2NvcmRpb24gYWxsb3daZXJvRXhwYW5kZWQ9e3RydWV9PlxuICAgICAgICAgICAgey8qIFN0YXJ0IGFtZW5pdGllcyBmaWx0ZXIgZWxlbWVudCAqL31cbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgY29udGVudD1cIkFtZW5pdGllc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0Rvd24gLz5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94Lkdyb3VwXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtnZXRBbWVuaXRpZXMub3B0aW9uc31cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50LmFtZW5pdGllc31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IG9uQ2hhbmdlKHZhbHVlLCAnYW1lbml0aWVzJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICB7LyogRW5kIG9mIGFtZW5pdGllcyBmaWx0ZXIgZWxlbWVudCAqL31cblxuICAgICAgICAgICAgey8qIFN0YXJ0IHByb3BlcnR5IHR5cGUgZmlsdGVyIGVsZW1lbnQgKi99XG4gICAgICAgICAgICA8QWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1IZWFkaW5nPlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIGNvbnRlbnQ9XCJQcm9wZXJ0eSBUeXBlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93RG93biAvPlxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3guR3JvdXBcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2dldFByb3BlcnR5VHlwZS5vcHRpb25zfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnQucHJvcGVydHl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZSwgJ3Byb3BlcnR5Jyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICB7LyogRW5kIG9mIHByb3BlcnR5IHR5cGUgZmlsdGVyIGVsZW1lbnQgKi99XG5cbiAgICAgICAgICAgIHsvKiBTdGFydCBwcmljZSByYW5nZSBmaWx0ZXIgZWxlbWVudCAqL31cbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgY29udGVudD1cIlNlbGVjdCBQcmljZSBSYW5nZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0Rvd24gLz5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgcmFuZ2VcbiAgICAgICAgICAgICAgICAgIG1hcmtzPXtwcmljZUluaXR9XG4gICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17W2N1cnJlbnQubWluUHJpY2UsIGN1cnJlbnQubWF4UHJpY2VdfVxuICAgICAgICAgICAgICAgICAgb25BZnRlckNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSh2YWx1ZSwgJ3ByaWNlJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICB7LyogRW5kIG9mIHByaWNlIHJhbmdlIGZpbHRlciBlbGVtZW50ICovfVxuXG4gICAgICAgICAgICB7LyogU3RhcnQgZGF0ZSBmaWx0ZXIgZWxlbWVudCAqL31cbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgY29udGVudD1cIkNob29zZSBEYXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxJb0lvc0Fycm93RG93biAvPlxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtSGVhZGluZz5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1QYW5lbD5cbiAgICAgICAgICAgICAgICA8RGF0ZVJhbmdlUGlja2VyXG4gICAgICAgICAgICAgICAgICBzdGFydERhdGVJZD1cInN0YXJ0RGF0ZS1pZC1tb2JpbGVcIlxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZUlkPVwiZW5kRGF0ZS1pZC1tb2JpbGVcIlxuICAgICAgICAgICAgICAgICAgc3RhcnREYXRlPXtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5zZXRTdGFydERhdGUgPyBtb21lbnQoY3VycmVudC5zZXRTdGFydERhdGUpIDogbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZW5kRGF0ZT17XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQuc2V0RW5kRGF0ZSA/IG1vbWVudChjdXJyZW50LnNldEVuZERhdGUpIDogbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZNb250aHM9ezF9XG4gICAgICAgICAgICAgICAgICBzbWFsbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIGl0ZW09e2NhbGVuZGVySXRlbX1cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlYXJjaERhdGE9eyh2YWx1ZSkgPT4gb25DaGFuZ2UodmFsdWUsICdkYXRlX3JhbmdlJyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICB7LyogRW5kIG9mIGRhdGUgZmlsdGVyIGVsZW1lbnQgKi99XG5cbiAgICAgICAgICAgIHsvKiBSb29tICYgR3Vlc3QgdHlwZSBmaWx0ZXIgZWxlbWVudCAqL31cbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgY29udGVudD1cIkNob29zZSBSb29tIGFuZCBHdWVzdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8SW9Jb3NBcnJvd0Rvd24gLz5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW1CdXR0b24+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbUhlYWRpbmc+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtUGFuZWw+XG4gICAgICAgICAgICAgICAgPFJvb21HdWVzdFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICA8SXRlbVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Um9vbTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRJbmNEZWNcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInJvb21cIlxuICAgICAgICAgICAgICAgICAgICAgIGluY3JlbWVudD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Um9vbSgoY291bnRSb29tKSA9PiBjb3VudFJvb20gKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGNvdW50Um9vbSArIDEsICdyb29tJyk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBkZWNyZW1lbnQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFJvb20oKGNvdW50Um9vbSkgPT4gY291bnRSb29tID4gMCAmJiBjb3VudFJvb20gLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY291bnRSb29tKSA9PiBjb3VudFJvb20gPiAwICYmIGNvdW50Um9vbSAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdyb29tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudFJvb219XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0l0ZW1XcmFwcGVyPlxuXG4gICAgICAgICAgICAgICAgICA8SXRlbVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+R3Vlc3Q8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0SW5jRGVjXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJndWVzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHdWVzdCgoY291bnRHdWVzdCkgPT4gY291bnRHdWVzdCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoY291bnRHdWVzdCArIDEsICdndWVzdCcpO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgZGVjcmVtZW50PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRHdWVzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvdW50R3Vlc3QpID0+IGNvdW50R3Vlc3QgPiAwICYmIGNvdW50R3Vlc3QgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjb3VudEd1ZXN0KSA9PiBjb3VudEd1ZXN0ID4gMCAmJiBjb3VudEd1ZXN0IC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2d1ZXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb3VudEd1ZXN0fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9JdGVtV3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8L1Jvb21HdWVzdFdyYXBwZXI+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbVBhbmVsPlxuICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgICAgey8qIEVuZCBvZiBSb29tICYgR3Vlc3QgdHlwZSBmaWx0ZXIgZWxlbWVudCAqL31cbiAgICAgICAgICA8L0FjY29yZGlvbj5cblxuICAgICAgICAgIDxCdXR0b25Hcm91cD5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VEcmF3ZXJ9PkNhbmNlbCBGaWx0ZXI8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVBcHBseUZpbHRlcn0+XG4gICAgICAgICAgICAgIEFwcGx5IEZpbHRlclxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgPC9GaWx0ZXJFbGVtZW50c1dyYXBwZXI+XG4gICAgICA8L0RyYXdlcj5cbiAgICA8L0ZpbHRlckFyZWE+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJEcmF3ZXI7XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUm9vbUd1ZXN0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuXG4gIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgLnF1YW50aXR5IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgaW5wdXQge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICBidXR0b24uYnRuIHN2ZyB7XG4gICAgICB3aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJBcmVhID0gc3R5bGVkLmRpdmBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICBidXR0b24sXG4gIGJ1dHRvbi5hbnQtYnRuIHtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGhlaWdodDogMzhweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBub25lO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG4gICAgfVxuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvci4xJywgJyNmZmZmZmYnKX07XG4gICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRmlsdGVyRWxlbWVudHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLmFjY29yZGlvbiB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zNXB4O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjhweCk7XG5cbiAgICAvKiBhY2NvcmRpb24gaXRlbSBzdHlsZSAqL1xuICAgIC5hY2NvcmRpb25fX2l0ZW0ge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICAvKiBhY2NvcmRpb24gaGVhZGluZyBzdHlsZSAqL1xuICAgICAgLmFjY29yZGlvbl9faGVhZGluZyB7XG4gICAgICAgIC5hY2NvcmRpb25fX2J1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMjlweCAwO1xuICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyYzJjMmMnKX07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogYWNjb3JkaW9uIHBhbmVsIHN0eWxlICovXG4gICAgICAuYWNjb3JkaW9uX19wYW5lbCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyOXB4O1xuICAgICAgICBhbmltYXRpb246IDAuMjVzICR7ZmFkZUlufSBlYXNlO1xuICAgICAgICAmW2hpZGRlbl0ge1xuICAgICAgICAgIGFuaW1hdGlvbjogMC4yNXMgJHtmYWRlSW59IGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBkYXRlIHBpY2tlciBzdHlsZSAqL1xuICAgICAgICAuZGF0ZV9waWNrZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgLkRhdGVSYW5nZVBpY2tlciB7XG4gICAgICAgICAgICAuRGF0ZVJhbmdlUGlja2VySW5wdXQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdib3JkZXIuMycsICcjRTZFNkU2Jyl9O1xuICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuRGF0ZUlucHV0X19zbWFsbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gNnB4KTtcbiAgICAgICAgICAgICAgICAuRGF0ZUlucHV0X2lucHV0X19zbWFsbCB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDEwcHggMTBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAuRGF0ZUlucHV0X2lucHV0X19zbWFsbCB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLkRhdGVSYW5nZVBpY2tlcl9waWNrZXIge1xuICAgICAgICAgICAgICBsZWZ0OiAxcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBjaGVja2JveCBncm91cCBzdHlsZSAqL1xuICAgICAgICAuYW50LWNoZWNrYm94LWdyb3VwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgLmFudC1jaGVja2JveC1ncm91cC1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAuYW50LWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgLmFudC1jaGVja2JveC1pbm5lciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjEnLCAnIzkwOTA5MCcpfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmLmFudC1jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgICAgICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgndGV4dC4wJywgJyMyQzJDMkMnKX07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAuYW50LWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAuYW50LWNoZWNrYm94LWlubmVyIHtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogcHJpY2UgcmFuZ2UgY29tcG9uZW50IHN0eWxlICovXG4gICAgICAgIC5hbnQtc2xpZGVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYW50LXNsaWRlci1yYWlsIHtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMTMnLCAnI0UyRTJFMicpfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFudC1zbGlkZXItdHJhY2sge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbnQtc2xpZGVyLXN0ZXAge1xuICAgICAgICAgICAgLmFudC1zbGlkZXItZG90IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMTMnLCAnI0UyRTJFMicpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuYW50LXNsaWRlci10cmFjayB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYW50LXNsaWRlci1oYW5kbGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiA2cHggc29saWQgJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAycHggJHt0aGVtZUdldCgnY29sb3IuNScsICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyl9O1xuICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hbnQtc2xpZGVyLW1hcmsge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIC5hbnQtc2xpZGVyLW1hcmstdGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMScsICcjOTA5MDkwJyl9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkdyb3VwID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBidXR0b24uYW50LWJ0biB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJvcmRlcjogMDtcbiAgICAmLmFudC1idG4tcHJpbWFyeSB7XG4gICAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3IuMScsICcjZmZmZmZmJyl9O1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgICY6OmFmdGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdXNlRm9yY2VVcGRhdGU7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIHVzZUZvcmNlVXBkYXRlKCkge1xuICB2YXIgX1JlYWN0JHVzZVJlZHVjZXIgPSBSZWFjdC51c2VSZWR1Y2VyKGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHggKyAxO1xuICB9LCAwKSxcbiAgICAgIF9SZWFjdCR1c2VSZWR1Y2VyMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfUmVhY3QkdXNlUmVkdWNlciwgMiksXG4gICAgICBmb3JjZVVwZGF0ZSA9IF9SZWFjdCR1c2VSZWR1Y2VyMlsxXTtcblxuICByZXR1cm4gZm9yY2VVcGRhdGU7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNEcmF3ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1kcmF3ZXJcIikpO1xuXG52YXIgX2dldFNjcm9sbEJhclNpemUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9nZXRTY3JvbGxCYXJTaXplXCIpKTtcblxudmFyIF9DbG9zZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VPdXRsaW5lZFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbnZhciBfdXNlRm9yY2VVcGRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9ob29rcy91c2VGb3JjZVVwZGF0ZVwiKSk7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBEcmF3ZXJDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG52YXIgUGxhY2VtZW50VHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnKTtcbnZhciBkZWZhdWx0UHVzaFN0YXRlID0ge1xuICBkaXN0YW5jZTogMTgwXG59O1xudmFyIERyYXdlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfYSwgcmVmKSB7XG4gIHZhciBfYSR3aWR0aCA9IF9hLndpZHRoLFxuICAgICAgd2lkdGggPSBfYSR3aWR0aCA9PT0gdm9pZCAwID8gMjU2IDogX2Ekd2lkdGgsXG4gICAgICBfYSRoZWlnaHQgPSBfYS5oZWlnaHQsXG4gICAgICBoZWlnaHQgPSBfYSRoZWlnaHQgPT09IHZvaWQgMCA/IDI1NiA6IF9hJGhlaWdodCxcbiAgICAgIF9hJGNsb3NhYmxlID0gX2EuY2xvc2FibGUsXG4gICAgICBjbG9zYWJsZSA9IF9hJGNsb3NhYmxlID09PSB2b2lkIDAgPyB0cnVlIDogX2EkY2xvc2FibGUsXG4gICAgICBfYSRwbGFjZW1lbnQgPSBfYS5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfYSRwbGFjZW1lbnQgPT09IHZvaWQgMCA/ICdyaWdodCcgOiBfYSRwbGFjZW1lbnQsXG4gICAgICBfYSRtYXNrQ2xvc2FibGUgPSBfYS5tYXNrQ2xvc2FibGUsXG4gICAgICBtYXNrQ2xvc2FibGUgPSBfYSRtYXNrQ2xvc2FibGUgPT09IHZvaWQgMCA/IHRydWUgOiBfYSRtYXNrQ2xvc2FibGUsXG4gICAgICBfYSRtYXNrID0gX2EubWFzayxcbiAgICAgIG1hc2sgPSBfYSRtYXNrID09PSB2b2lkIDAgPyB0cnVlIDogX2EkbWFzayxcbiAgICAgIF9hJGxldmVsID0gX2EubGV2ZWwsXG4gICAgICBsZXZlbCA9IF9hJGxldmVsID09PSB2b2lkIDAgPyBudWxsIDogX2EkbGV2ZWwsXG4gICAgICBfYSRrZXlib2FyZCA9IF9hLmtleWJvYXJkLFxuICAgICAga2V5Ym9hcmQgPSBfYSRrZXlib2FyZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hJGtleWJvYXJkLFxuICAgICAgX2EkcHVzaCA9IF9hLnB1c2gsXG4gICAgICBfcHVzaCA9IF9hJHB1c2ggPT09IHZvaWQgMCA/IGRlZmF1bHRQdXNoU3RhdGUgOiBfYSRwdXNoLFxuICAgICAgX2EkY2xvc2VJY29uID0gX2EuY2xvc2VJY29uLFxuICAgICAgY2xvc2VJY29uID0gX2EkY2xvc2VJY29uID09PSB2b2lkIDAgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2xvc2VPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpIDogX2EkY2xvc2VJY29uLFxuICAgICAgYm9keVN0eWxlID0gX2EuYm9keVN0eWxlLFxuICAgICAgZHJhd2VyU3R5bGUgPSBfYS5kcmF3ZXJTdHlsZSxcbiAgICAgIHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIGRpcmVjdGlvbiA9IF9hLmRpcmVjdGlvbixcbiAgICAgIHZpc2libGUgPSBfYS52aXNpYmxlLFxuICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgIHpJbmRleCA9IF9hLnpJbmRleCxcbiAgICAgIGRlc3Ryb3lPbkNsb3NlID0gX2EuZGVzdHJveU9uQ2xvc2UsXG4gICAgICBzdHlsZSA9IF9hLnN0eWxlLFxuICAgICAgdGl0bGUgPSBfYS50aXRsZSxcbiAgICAgIGhlYWRlclN0eWxlID0gX2EuaGVhZGVyU3R5bGUsXG4gICAgICBvbkNsb3NlID0gX2Eub25DbG9zZSxcbiAgICAgIGZvb3RlciA9IF9hLmZvb3RlcixcbiAgICAgIGZvb3RlclN0eWxlID0gX2EuZm9vdGVyU3R5bGUsXG4gICAgICByZXN0ID0gX19yZXN0KF9hLCBbXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcImNsb3NhYmxlXCIsIFwicGxhY2VtZW50XCIsIFwibWFza0Nsb3NhYmxlXCIsIFwibWFza1wiLCBcImxldmVsXCIsIFwia2V5Ym9hcmRcIiwgXCJwdXNoXCIsIFwiY2xvc2VJY29uXCIsIFwiYm9keVN0eWxlXCIsIFwiZHJhd2VyU3R5bGVcIiwgXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXJlY3Rpb25cIiwgXCJ2aXNpYmxlXCIsIFwiY2hpbGRyZW5cIiwgXCJ6SW5kZXhcIiwgXCJkZXN0cm95T25DbG9zZVwiLCBcInN0eWxlXCIsIFwidGl0bGVcIiwgXCJoZWFkZXJTdHlsZVwiLCBcIm9uQ2xvc2VcIiwgXCJmb290ZXJcIiwgXCJmb290ZXJTdHlsZVwiXSk7XG5cbiAgdmFyIGZvcmNlVXBkYXRlID0gKDAsIF91c2VGb3JjZVVwZGF0ZVtcImRlZmF1bHRcIl0pKCk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGludGVybmFsUHVzaCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRQdXNoID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICB2YXIgcGFyZW50RHJhd2VyID0gUmVhY3QudXNlQ29udGV4dChEcmF3ZXJDb250ZXh0KTtcbiAgdmFyIGRlc3Ryb3lDbG9zZSA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gZml4OiBkZWxldGUgZHJhd2VyIGluIGNoaWxkIGFuZCByZS1yZW5kZXIsIG5vIHB1c2ggc3RhcnRlZC5cbiAgICAvLyA8RHJhd2VyPntzaG93ICYmIDxEcmF3ZXIgLz59PC9EcmF3ZXI+XG4gICAgaWYgKHZpc2libGUgJiYgcGFyZW50RHJhd2VyKSB7XG4gICAgICBwYXJlbnREcmF3ZXIucHVzaCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocGFyZW50RHJhd2VyKSB7XG4gICAgICAgIHBhcmVudERyYXdlci5wdWxsKCk7IC8vIHBhcmVudERyYXdlciA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwYXJlbnREcmF3ZXIpIHtcbiAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgIHBhcmVudERyYXdlci5wdXNoKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnREcmF3ZXIucHVsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKTtcbiAgdmFyIG9wZXJhdGlvbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHVzaDogZnVuY3Rpb24gcHVzaCgpIHtcbiAgICAgICAgaWYgKF9wdXNoKSB7XG4gICAgICAgICAgc2V0UHVzaCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHB1bGw6IGZ1bmN0aW9uIHB1bGwoKSB7XG4gICAgICAgIGlmIChfcHVzaCkge1xuICAgICAgICAgIHNldFB1c2goZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW19wdXNoXSk7XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG9wZXJhdGlvbnM7XG4gIH0sIFtvcGVyYXRpb25zXSk7XG4gIHZhciBpc0Rlc3Ryb3lPbkNsb3NlID0gZGVzdHJveU9uQ2xvc2UgJiYgIXZpc2libGU7XG5cbiAgdmFyIG9uRGVzdHJveVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiBvbkRlc3Ryb3lUcmFuc2l0aW9uRW5kKCkge1xuICAgIGlmICghaXNEZXN0cm95T25DbG9zZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgZGVzdHJveUNsb3NlLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgZm9yY2VVcGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldE9mZnNldFN0eWxlID0gZnVuY3Rpb24gZ2V0T2Zmc2V0U3R5bGUoKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMjQyODdcbiAgICBpZiAoIXZpc2libGUgJiYgIW1hc2spIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICB2YXIgb2Zmc2V0U3R5bGUgPSB7fTtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09ICdsZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICdyaWdodCcpIHtcbiAgICAgIG9mZnNldFN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9mZnNldFN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0U3R5bGU7XG4gIH07XG5cbiAgdmFyIGdldFJjRHJhd2VyU3R5bGUgPSBmdW5jdGlvbiBnZXRSY0RyYXdlclN0eWxlKCkge1xuICAgIC8vIGdldCBkcmF3ZXIgcHVzaCB3aWR0aCBvciBoZWlnaHRcbiAgICB2YXIgZ2V0UHVzaFRyYW5zZm9ybSA9IGZ1bmN0aW9uIGdldFB1c2hUcmFuc2Zvcm0oX3BsYWNlbWVudCkge1xuICAgICAgdmFyIGRpc3RhbmNlO1xuXG4gICAgICBpZiAodHlwZW9mIF9wdXNoID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgZGlzdGFuY2UgPSBfcHVzaCA/IGRlZmF1bHRQdXNoU3RhdGUuZGlzdGFuY2UgOiAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzdGFuY2UgPSBfcHVzaC5kaXN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgZGlzdGFuY2UgPSBwYXJzZUZsb2F0KFN0cmluZyhkaXN0YW5jZSB8fCAwKSk7XG5cbiAgICAgIGlmIChfcGxhY2VtZW50ID09PSAnbGVmdCcgfHwgX3BsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGVYKFwiLmNvbmNhdChfcGxhY2VtZW50ID09PSAnbGVmdCcgPyBkaXN0YW5jZSA6IC1kaXN0YW5jZSwgXCJweClcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChfcGxhY2VtZW50ID09PSAndG9wJyB8fCBfcGxhY2VtZW50ID09PSAnYm90dG9tJykge1xuICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGVZKFwiLmNvbmNhdChfcGxhY2VtZW50ID09PSAndG9wJyA/IGRpc3RhbmNlIDogLWRpc3RhbmNlLCBcInB4KVwiKTtcbiAgICAgIH1cbiAgICB9OyAvLyDlvZPml6AgbWFzayDml7bvvIzlsIYgd2lkdGgg5bqU55So5Yiw5aSW5bGC5a655Zmo5LiKXG4gICAgLy8g6Kej5YazIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzEyNDAxIOeahOmXrumimFxuXG5cbiAgICB2YXIgb2Zmc2V0U3R5bGUgPSBtYXNrID8ge30gOiBnZXRPZmZzZXRTdHlsZSgpO1xuICAgIHJldHVybiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgIHpJbmRleDogekluZGV4LFxuICAgICAgdHJhbnNmb3JtOiBpbnRlcm5hbFB1c2ggPyBnZXRQdXNoVHJhbnNmb3JtKHBsYWNlbWVudCkgOiB1bmRlZmluZWRcbiAgICB9LCBvZmZzZXRTdHlsZSksIHN0eWxlKTtcbiAgfTtcblxuICBmdW5jdGlvbiByZW5kZXJDbG9zZUljb24oKSB7XG4gICAgcmV0dXJuIGNsb3NhYmxlICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBvbkNsaWNrOiBvbkNsb3NlLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIixcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jbG9zZVwiKSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgICctLXNjcm9sbC1iYXInOiBcIlwiLmNvbmNhdCgoMCwgX2dldFNjcm9sbEJhclNpemVbXCJkZWZhdWx0XCJdKSgpLCBcInB4XCIpXG4gICAgICB9XG4gICAgfSwgY2xvc2VJY29uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckhlYWRlcigpIHtcbiAgICBpZiAoIXRpdGxlICYmICFjbG9zYWJsZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGhlYWRlckNsYXNzTmFtZSA9IHRpdGxlID8gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oZWFkZXJcIikgOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWhlYWRlci1uby10aXRsZVwiKTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBoZWFkZXJDbGFzc05hbWUsXG4gICAgICBzdHlsZTogaGVhZGVyU3R5bGVcbiAgICB9LCB0aXRsZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdGl0bGVcIilcbiAgICB9LCB0aXRsZSksIGNsb3NhYmxlICYmIHJlbmRlckNsb3NlSWNvbigpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckZvb3RlcigpIHtcbiAgICBpZiAoIWZvb3Rlcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGZvb3RlckNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZm9vdGVyXCIpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGZvb3RlckNsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBmb290ZXJTdHlsZVxuICAgIH0sIGZvb3Rlcik7XG4gIH0gLy8gcmVuZGVyIGRyYXdlciBib2R5IGRvbVxuXG5cbiAgdmFyIHJlbmRlckJvZHkgPSBmdW5jdGlvbiByZW5kZXJCb2R5KCkge1xuICAgIGlmIChkZXN0cm95Q2xvc2UuY3VycmVudCAmJiAhdmlzaWJsZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZGVzdHJveUNsb3NlLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB2YXIgY29udGFpbmVyU3R5bGUgPSB7fTtcblxuICAgIGlmIChpc0Rlc3Ryb3lPbkNsb3NlKSB7XG4gICAgICAvLyBJbmNyZWFzZSB0aGUgb3BhY2l0eSB0cmFuc2l0aW9uLCBkZWxldGUgY2hpbGRyZW4gYWZ0ZXIgY2xvc2luZy5cbiAgICAgIGNvbnRhaW5lclN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgY29udGFpbmVyU3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IC4zcyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13cmFwcGVyLWJvZHlcIiksXG4gICAgICBzdHlsZTogKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgY29udGFpbmVyU3R5bGUpLCBkcmF3ZXJTdHlsZSksXG4gICAgICBvblRyYW5zaXRpb25FbmQ6IG9uRGVzdHJveVRyYW5zaXRpb25FbmRcbiAgICB9LCByZW5kZXJIZWFkZXIoKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJvZHlcIiksXG4gICAgICBzdHlsZTogYm9keVN0eWxlXG4gICAgfSwgY2hpbGRyZW4pLCByZW5kZXJGb290ZXIoKSk7XG4gIH07XG5cbiAgdmFyIGRyYXdlckNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKCgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe1xuICAgICduby1tYXNrJzogIW1hc2tcbiAgfSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBjbGFzc05hbWUpO1xuICB2YXIgb2Zmc2V0U3R5bGUgPSBtYXNrID8gZ2V0T2Zmc2V0U3R5bGUoKSA6IHt9O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRHJhd2VyQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBvcGVyYXRpb25zXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0RyYXdlcltcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgaGFuZGxlcjogZmFsc2VcbiAgfSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBtYXNrQ2xvc2FibGU6IG1hc2tDbG9zYWJsZSxcbiAgICBsZXZlbDogbGV2ZWwsXG4gICAga2V5Ym9hcmQ6IGtleWJvYXJkLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBvbkNsb3NlOiBvbkNsb3NlXG4gIH0sIHJlc3QpLCBvZmZzZXRTdHlsZSwge1xuICAgIG9wZW46IHZpc2libGUsXG4gICAgc2hvd01hc2s6IG1hc2ssXG4gICAgc3R5bGU6IGdldFJjRHJhd2VyU3R5bGUoKSxcbiAgICBjbGFzc05hbWU6IGRyYXdlckNsYXNzTmFtZVxuICB9KSwgcmVuZGVyQm9keSgpKSk7XG59KTtcbkRyYXdlci5kaXNwbGF5TmFtZSA9ICdEcmF3ZXInO1xudmFyIERyYXdlcldyYXBwZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgY3VzdG9taXplR2V0Q29udGFpbmVyID0gcHJvcHMuZ2V0Q29udGFpbmVyO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdkcmF3ZXInLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgZ2V0Q29udGFpbmVyID0gLy8g5pyJ5Y+v6IO95Li6IGZhbHNl77yM5omA5Lul5LiN6IO955u05o6l5Yik5patXG4gIGN1c3RvbWl6ZUdldENvbnRhaW5lciA9PT0gdW5kZWZpbmVkICYmIGdldFBvcHVwQ29udGFpbmVyID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZXRQb3B1cENvbnRhaW5lcihkb2N1bWVudC5ib2R5KTtcbiAgfSA6IGN1c3RvbWl6ZUdldENvbnRhaW5lcjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERyYXdlciwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gIH0pKTtcbn0pO1xuRHJhd2VyV3JhcHBlci5kaXNwbGF5TmFtZSA9ICdEcmF3ZXJXcmFwcGVyJztcbnZhciBfZGVmYXVsdCA9IERyYXdlcldyYXBwZXI7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDJcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGdldFNjcm9sbEJhclNpemUgZnJvbSBcInJjLXV0aWwvZXMvZ2V0U2Nyb2xsQmFyU2l6ZVwiO1xuaW1wb3J0IEtleUNvZGUgZnJvbSBcInJjLXV0aWwvZXMvS2V5Q29kZVwiO1xuaW1wb3J0IG9taXQgZnJvbSBcInJjLXV0aWwvZXMvb21pdFwiO1xuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lciwgZGF0YVRvQXJyYXksIGdldFRvdWNoUGFyZW50U2Nyb2xsLCBpc051bWVyaWMsIHJlbW92ZUV2ZW50TGlzdGVuZXIsIHRyYW5zZm9ybUFyZ3VtZW50cywgdHJhbnNpdGlvbkVuZCwgdHJhbnNpdGlvblN0ciwgd2luZG93SXNVbmRlZmluZWQgfSBmcm9tICcuL3V0aWxzJztcbnZhciBjdXJyZW50RHJhd2VyID0ge307XG5cbnZhciBEcmF3ZXJDaGlsZCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJhd2VyQ2hpbGQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRHJhd2VyQ2hpbGQpO1xuXG4gIGZ1bmN0aW9uIERyYXdlckNoaWxkKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYXdlckNoaWxkKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX3RoaXMuZG9tRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMuZG9tKSB7XG4gICAgICAgIF90aGlzLmRvbS5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZW1vdmVTdGFydEhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc3RhcnRQb3MgPSB7XG4gICAgICAgIHg6IGUudG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICB5OiBlLnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVtb3ZlTW92ZUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjdXJyZW50VGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgdmFyIGRpZmZlclggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggLSBfdGhpcy5zdGFydFBvcy54O1xuICAgICAgdmFyIGRpZmZlclkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgLSBfdGhpcy5zdGFydFBvcy55O1xuXG4gICAgICBpZiAoKGN1cnJlbnRUYXJnZXQgPT09IF90aGlzLm1hc2tEb20gfHwgY3VycmVudFRhcmdldCA9PT0gX3RoaXMuaGFuZGxlckRvbSB8fCBjdXJyZW50VGFyZ2V0ID09PSBfdGhpcy5jb250ZW50RG9tICYmIGdldFRvdWNoUGFyZW50U2Nyb2xsKGN1cnJlbnRUYXJnZXQsIGUudGFyZ2V0LCBkaWZmZXJYLCBkaWZmZXJZKSkgJiYgZS5jYW5jZWxhYmxlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMudHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZG9tID0gZS50YXJnZXQ7XG4gICAgICByZW1vdmVFdmVudExpc3RlbmVyKGRvbSwgdHJhbnNpdGlvbkVuZCwgX3RoaXMudHJhbnNpdGlvbkVuZCk7XG4gICAgICBkb20uc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FU0MpIHtcbiAgICAgICAgdmFyIG9uQ2xvc2UgPSBfdGhpcy5wcm9wcy5vbkNsb3NlO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICAgICAgb25DbG9zZShlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbldyYXBwZXJUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wcy5vcGVuLFxuICAgICAgICAgIGFmdGVyVmlzaWJsZUNoYW5nZSA9IF90aGlzJHByb3BzLmFmdGVyVmlzaWJsZUNoYW5nZTtcblxuICAgICAgaWYgKGUudGFyZ2V0ID09PSBfdGhpcy5jb250ZW50V3JhcHBlciAmJiBlLnByb3BlcnR5TmFtZS5tYXRjaCgvdHJhbnNmb3JtJC8pKSB7XG4gICAgICAgIF90aGlzLmRvbS5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG5cbiAgICAgICAgaWYgKCFvcGVuICYmIF90aGlzLmdldEN1cnJlbnREcmF3ZXJTb21lKCkpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WCA9ICcnO1xuXG4gICAgICAgICAgaWYgKF90aGlzLm1hc2tEb20pIHtcbiAgICAgICAgICAgIF90aGlzLm1hc2tEb20uc3R5bGUubGVmdCA9ICcnO1xuICAgICAgICAgICAgX3RoaXMubWFza0RvbS5zdHlsZS53aWR0aCA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhZnRlclZpc2libGVDaGFuZ2UpIHtcbiAgICAgICAgICBhZnRlclZpc2libGVDaGFuZ2UoISFvcGVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vcGVuTGV2ZWxUcmFuc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczIub3BlbixcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzMi53aWR0aCxcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wczIuaGVpZ2h0O1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0SG9yaXpvbnRhbEJvID0gX3RoaXMuZ2V0SG9yaXpvbnRhbEJvb2xBbmRQbGFjZW1lbnROYW1lKCksXG4gICAgICAgICAgaXNIb3Jpem9udGFsID0gX3RoaXMkZ2V0SG9yaXpvbnRhbEJvLmlzSG9yaXpvbnRhbCxcbiAgICAgICAgICBwbGFjZW1lbnROYW1lID0gX3RoaXMkZ2V0SG9yaXpvbnRhbEJvLnBsYWNlbWVudE5hbWU7XG5cbiAgICAgIHZhciBjb250ZW50VmFsdWUgPSBfdGhpcy5jb250ZW50RG9tID8gX3RoaXMuY29udGVudERvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtpc0hvcml6b250YWwgPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMDtcbiAgICAgIHZhciB2YWx1ZSA9IChpc0hvcml6b250YWwgPyB3aWR0aCA6IGhlaWdodCkgfHwgY29udGVudFZhbHVlO1xuXG4gICAgICBfdGhpcy5zZXRMZXZlbEFuZFNjcm9sbGluZyhvcGVuLCBwbGFjZW1lbnROYW1lLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIF90aGlzLnNldExldmVsVHJhbnNmb3JtID0gZnVuY3Rpb24gKG9wZW4sIHBsYWNlbWVudE5hbWUsIHZhbHVlLCByaWdodCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzMy5wbGFjZW1lbnQsXG4gICAgICAgICAgbGV2ZWxNb3ZlID0gX3RoaXMkcHJvcHMzLmxldmVsTW92ZSxcbiAgICAgICAgICBkdXJhdGlvbiA9IF90aGlzJHByb3BzMy5kdXJhdGlvbixcbiAgICAgICAgICBlYXNlID0gX3RoaXMkcHJvcHMzLmVhc2UsXG4gICAgICAgICAgc2hvd01hc2sgPSBfdGhpcyRwcm9wczMuc2hvd01hc2s7IC8vIHJvdXRlciDliIfmjaLml7blj6/og73kvJrlr7zoh7PpobXpnaLlpLHljrvmu5rliqjmnaHvvIzmiYDku6XpnIDopoHml7bml7bojrflj5bjgIJcblxuICAgICAgX3RoaXMubGV2ZWxEb20uZm9yRWFjaChmdW5jdGlvbiAoZG9tKSB7XG4gICAgICAgIGRvbS5zdHlsZS50cmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gXCIuY29uY2F0KGR1cmF0aW9uLCBcIiBcIikuY29uY2F0KGVhc2UpO1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKGRvbSwgdHJhbnNpdGlvbkVuZCwgX3RoaXMudHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIHZhciBsZXZlbFZhbHVlID0gb3BlbiA/IHZhbHVlIDogMDtcblxuICAgICAgICBpZiAobGV2ZWxNb3ZlKSB7XG4gICAgICAgICAgdmFyICRsZXZlbE1vdmUgPSB0cmFuc2Zvcm1Bcmd1bWVudHMobGV2ZWxNb3ZlLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IGRvbSxcbiAgICAgICAgICAgIG9wZW46IG9wZW5cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXZlbFZhbHVlID0gb3BlbiA/ICRsZXZlbE1vdmVbMF0gOiAkbGV2ZWxNb3ZlWzFdIHx8IDA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJHZhbHVlID0gdHlwZW9mIGxldmVsVmFsdWUgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQobGV2ZWxWYWx1ZSwgXCJweFwiKSA6IGxldmVsVmFsdWU7XG4gICAgICAgIHZhciBwbGFjZW1lbnRQb3MgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICd0b3AnID8gJHZhbHVlIDogXCItXCIuY29uY2F0KCR2YWx1ZSk7XG4gICAgICAgIHBsYWNlbWVudFBvcyA9IHNob3dNYXNrICYmIHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiByaWdodCA/IFwiY2FsYyhcIi5jb25jYXQocGxhY2VtZW50UG9zLCBcIiArIFwiKS5jb25jYXQocmlnaHQsIFwicHgpXCIpIDogcGxhY2VtZW50UG9zO1xuICAgICAgICBkb20uc3R5bGUudHJhbnNmb3JtID0gbGV2ZWxWYWx1ZSA/IFwiXCIuY29uY2F0KHBsYWNlbWVudE5hbWUsIFwiKFwiKS5jb25jYXQocGxhY2VtZW50UG9zLCBcIilcIikgOiAnJztcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRMZXZlbEFuZFNjcm9sbGluZyA9IGZ1bmN0aW9uIChvcGVuLCBwbGFjZW1lbnROYW1lLCB2YWx1ZSkge1xuICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG5cbiAgICAgIGlmICghd2luZG93SXNVbmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHJpZ2h0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA/IGdldFNjcm9sbEJhclNpemUodHJ1ZSkgOiAwO1xuXG4gICAgICAgIF90aGlzLnNldExldmVsVHJhbnNmb3JtKG9wZW4sIHBsYWNlbWVudE5hbWUsIHZhbHVlLCByaWdodCk7XG5cbiAgICAgICAgX3RoaXMudG9nZ2xlU2Nyb2xsaW5nVG9EcmF3ZXJBbmRCb2R5KHJpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKG9wZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy50b2dnbGVTY3JvbGxpbmdUb0RyYXdlckFuZEJvZHkgPSBmdW5jdGlvbiAocmlnaHQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBfdGhpcyRwcm9wczQuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIHNob3dNYXNrID0gX3RoaXMkcHJvcHM0LnNob3dNYXNrLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczQub3BlbjtcbiAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIgJiYgZ2V0Q29udGFpbmVyKCk7IC8vIOWkhOeQhiBib2R5IOa7muWKqFxuXG4gICAgICBpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5wYXJlbnROb2RlID09PSBkb2N1bWVudC5ib2R5ICYmIHNob3dNYXNrKSB7XG4gICAgICAgIHZhciBldmVudEFycmF5ID0gWyd0b3VjaHN0YXJ0J107XG4gICAgICAgIHZhciBkb21BcnJheSA9IFtkb2N1bWVudC5ib2R5LCBfdGhpcy5tYXNrRG9tLCBfdGhpcy5oYW5kbGVyRG9tLCBfdGhpcy5jb250ZW50RG9tXTtcblxuICAgICAgICBpZiAob3BlbiAmJiBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ICE9PSAnaGlkZGVuJykge1xuICAgICAgICAgIGlmIChyaWdodCkge1xuICAgICAgICAgICAgX3RoaXMuYWRkU2Nyb2xsaW5nRWZmZWN0KHJpZ2h0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnOyAvLyDmiYvmnLrnpoHmu5pcblxuICAgICAgICAgIGRvbUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoaXRlbSwgZXZlbnRBcnJheVtpXSB8fCAndG91Y2htb3ZlJywgaSA/IF90aGlzLnJlbW92ZU1vdmVIYW5kbGVyIDogX3RoaXMucmVtb3ZlU3RhcnRIYW5kbGVyLCBfdGhpcy5wYXNzaXZlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5nZXRDdXJyZW50RHJhd2VyU29tZSgpKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3VjaEFjdGlvbiA9ICcnO1xuXG4gICAgICAgICAgaWYgKHJpZ2h0KSB7XG4gICAgICAgICAgICBfdGhpcy5yZW1TY3JvbGxpbmdFZmZlY3QocmlnaHQpO1xuICAgICAgICAgIH0gLy8g5oGi5aSN5LqL5Lu2XG5cblxuICAgICAgICAgIGRvbUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoaXRlbSwgZXZlbnRBcnJheVtpXSB8fCAndG91Y2htb3ZlJywgaSA/IF90aGlzLnJlbW92ZU1vdmVIYW5kbGVyIDogX3RoaXMucmVtb3ZlU3RhcnRIYW5kbGVyLCBfdGhpcy5wYXNzaXZlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5hZGRTY3JvbGxpbmdFZmZlY3QgPSBmdW5jdGlvbiAocmlnaHQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBwbGFjZW1lbnQgPSBfdGhpcyRwcm9wczUucGxhY2VtZW50LFxuICAgICAgICAgIGR1cmF0aW9uID0gX3RoaXMkcHJvcHM1LmR1cmF0aW9uLFxuICAgICAgICAgIGVhc2UgPSBfdGhpcyRwcm9wczUuZWFzZTtcbiAgICAgIHZhciB3aWR0aFRyYW5zaXRpb24gPSBcIndpZHRoIFwiLmNvbmNhdChkdXJhdGlvbiwgXCIgXCIpLmNvbmNhdChlYXNlKTtcbiAgICAgIHZhciB0cmFuc2Zvcm1UcmFuc2l0aW9uID0gXCJ0cmFuc2Zvcm0gXCIuY29uY2F0KGR1cmF0aW9uLCBcIiBcIikuY29uY2F0KGVhc2UpO1xuICAgICAgX3RoaXMuZG9tLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG5cbiAgICAgIHN3aXRjaCAocGxhY2VtZW50KSB7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKC1cIi5jb25jYXQocmlnaHQsIFwicHgpXCIpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLndpZHRoID0gXCJjYWxjKDEwMCUgLSBcIi5jb25jYXQocmlnaHQsIFwicHgpXCIpO1xuICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWigwKSc7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnRpbWVvdXQpO1xuICAgICAgX3RoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMuZG9tKSB7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLnRyYW5zaXRpb24gPSBcIlwiLmNvbmNhdCh0cmFuc2Zvcm1UcmFuc2l0aW9uLCBcIixcIikuY29uY2F0KHdpZHRoVHJhbnNpdGlvbik7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVtU2Nyb2xsaW5nRWZmZWN0ID0gZnVuY3Rpb24gKHJpZ2h0KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM2ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcGxhY2VtZW50ID0gX3RoaXMkcHJvcHM2LnBsYWNlbWVudCxcbiAgICAgICAgICBkdXJhdGlvbiA9IF90aGlzJHByb3BzNi5kdXJhdGlvbixcbiAgICAgICAgICBlYXNlID0gX3RoaXMkcHJvcHM2LmVhc2U7XG5cbiAgICAgIGlmICh0cmFuc2l0aW9uU3RyKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbic7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmRvbS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuICAgICAgdmFyIGhlaWdodFRyYW5zaXRpb247XG4gICAgICB2YXIgd2lkdGhUcmFuc2l0aW9uID0gXCJ3aWR0aCBcIi5jb25jYXQoZHVyYXRpb24sIFwiIFwiKS5jb25jYXQoZWFzZSk7XG4gICAgICB2YXIgdHJhbnNmb3JtVHJhbnNpdGlvbiA9IFwidHJhbnNmb3JtIFwiLmNvbmNhdChkdXJhdGlvbiwgXCIgXCIpLmNvbmNhdChlYXNlKTtcblxuICAgICAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAge1xuICAgICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgd2lkdGhUcmFuc2l0aW9uID0gXCJ3aWR0aCAwcyBcIi5jb25jYXQoZWFzZSwgXCIgXCIpLmNvbmNhdChkdXJhdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIuY29uY2F0KHJpZ2h0LCBcInB4KVwiKTtcbiAgICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgIHdpZHRoVHJhbnNpdGlvbiA9IFwid2lkdGggMHMgXCIuY29uY2F0KGVhc2UsIFwiIFwiKS5jb25jYXQoZHVyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMubWFza0RvbSkge1xuICAgICAgICAgICAgICBfdGhpcy5tYXNrRG9tLnN0eWxlLmxlZnQgPSBcIi1cIi5jb25jYXQocmlnaHQsIFwicHhcIik7XG4gICAgICAgICAgICAgIF90aGlzLm1hc2tEb20uc3R5bGUud2lkdGggPSBcImNhbGMoMTAwJSArIFwiLmNvbmNhdChyaWdodCwgXCJweClcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS53aWR0aCA9IFwiY2FsYygxMDAlICsgXCIuY29uY2F0KHJpZ2h0LCBcInB4KVwiKTtcbiAgICAgICAgICAgIF90aGlzLmRvbS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVooMCknO1xuICAgICAgICAgICAgaGVpZ2h0VHJhbnNpdGlvbiA9IFwiaGVpZ2h0IDBzIFwiLmNvbmNhdChlYXNlLCBcIiBcIikuY29uY2F0KGR1cmF0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjbGVhclRpbWVvdXQoX3RoaXMudGltZW91dCk7XG4gICAgICBfdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5kb20pIHtcbiAgICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNpdGlvbiA9IFwiXCIuY29uY2F0KHRyYW5zZm9ybVRyYW5zaXRpb24sIFwiLFwiKS5jb25jYXQoaGVpZ2h0VHJhbnNpdGlvbiA/IFwiXCIuY29uY2F0KGhlaWdodFRyYW5zaXRpb24sIFwiLFwiKSA6ICcnKS5jb25jYXQod2lkdGhUcmFuc2l0aW9uKTtcbiAgICAgICAgICBfdGhpcy5kb20uc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLndpZHRoID0gJyc7XG4gICAgICAgICAgX3RoaXMuZG9tLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q3VycmVudERyYXdlclNvbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gIU9iamVjdC5rZXlzKGN1cnJlbnREcmF3ZXIpLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gY3VycmVudERyYXdlcltrZXldO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmdldExldmVsRG9tID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBsZXZlbCA9IF9yZWYubGV2ZWwsXG4gICAgICAgICAgZ2V0Q29udGFpbmVyID0gX3JlZi5nZXRDb250YWluZXI7XG5cbiAgICAgIGlmICh3aW5kb3dJc1VuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIgJiYgZ2V0Q29udGFpbmVyKCk7XG4gICAgICB2YXIgcGFyZW50ID0gY29udGFpbmVyID8gY29udGFpbmVyLnBhcmVudE5vZGUgOiBudWxsO1xuICAgICAgX3RoaXMubGV2ZWxEb20gPSBbXTtcblxuICAgICAgaWYgKGxldmVsID09PSAnYWxsJykge1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQgPyBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXJlbnQuY2hpbGRyZW4pIDogW107XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkLm5vZGVOYW1lICE9PSAnU0NSSVBUJyAmJiBjaGlsZC5ub2RlTmFtZSAhPT0gJ1NUWUxFJyAmJiBjaGlsZC5ub2RlTmFtZSAhPT0gJ0xJTksnICYmIGNoaWxkICE9PSBjb250YWluZXIpIHtcbiAgICAgICAgICAgIF90aGlzLmxldmVsRG9tLnB1c2goY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGxldmVsKSB7XG4gICAgICAgIGRhdGFUb0FycmF5KGxldmVsKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGtleSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgX3RoaXMubGV2ZWxEb20ucHVzaChpdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmdldEhvcml6b250YWxCb29sQW5kUGxhY2VtZW50TmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwbGFjZW1lbnQgPSBfdGhpcy5wcm9wcy5wbGFjZW1lbnQ7XG4gICAgICB2YXIgaXNIb3Jpem9udGFsID0gcGxhY2VtZW50ID09PSAnbGVmdCcgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnO1xuICAgICAgdmFyIHBsYWNlbWVudE5hbWUgPSBcInRyYW5zbGF0ZVwiLmNvbmNhdChpc0hvcml6b250YWwgPyAnWCcgOiAnWScpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNIb3Jpem9udGFsOiBpc0hvcml6b250YWwsXG4gICAgICAgIHBsYWNlbWVudE5hbWU6IHBsYWNlbWVudE5hbWVcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgX3NlbGY6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJhd2VyQ2hpbGQsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICghd2luZG93SXNVbmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICAgICAgdGhpcy5wYXNzaXZlID0gcGFzc2l2ZVN1cHBvcnRlZCA/IHtcbiAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9IDogZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczcub3BlbixcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBfdGhpcyRwcm9wczcuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIHNob3dNYXNrID0gX3RoaXMkcHJvcHM3LnNob3dNYXNrO1xuICAgICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lciAmJiBnZXRDb250YWluZXIoKTtcbiAgICAgIHRoaXMuZHJhd2VySWQgPSBcImRyYXdlcl9pZF9cIi5jb25jYXQoTnVtYmVyKChEYXRlLm5vdygpICsgTWF0aC5yYW5kb20oKSkudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOSkudG9TdHJpbmcoKSkpLnRvU3RyaW5nKDE2KSk7XG4gICAgICB0aGlzLmdldExldmVsRG9tKHRoaXMucHJvcHMpO1xuXG4gICAgICBpZiAob3Blbikge1xuICAgICAgICBpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5wYXJlbnROb2RlID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgY3VycmVudERyYXdlclt0aGlzLmRyYXdlcklkXSA9IG9wZW47XG4gICAgICAgIH0gLy8g6buY6K6k5omT5byA54q25oCB5pe25o6o5Ye6IGxldmVsO1xuXG5cbiAgICAgICAgdGhpcy5vcGVuTGV2ZWxUcmFuc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5kb21Gb2N1cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoc2hvd01hc2spIHtcbiAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMkc2Nyb2xsTG9jO1xuXG4gICAgICAgICAgKF90aGlzJHByb3BzJHNjcm9sbExvYyA9IHRoaXMucHJvcHMuc2Nyb2xsTG9ja2VyKSA9PT0gbnVsbCB8fCBfdGhpcyRwcm9wcyRzY3JvbGxMb2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJHByb3BzJHNjcm9sbExvYy5sb2NrKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczggPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczgub3BlbixcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBfdGhpcyRwcm9wczguZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIHNjcm9sbExvY2tlciA9IF90aGlzJHByb3BzOC5zY3JvbGxMb2NrZXIsXG4gICAgICAgICAgc2hvd01hc2sgPSBfdGhpcyRwcm9wczguc2hvd01hc2s7XG4gICAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyICYmIGdldENvbnRhaW5lcigpO1xuXG4gICAgICBpZiAob3BlbiAhPT0gcHJldlByb3BzLm9wZW4pIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIucGFyZW50Tm9kZSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgIGN1cnJlbnREcmF3ZXJbdGhpcy5kcmF3ZXJJZF0gPSAhIW9wZW47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wZW5MZXZlbFRyYW5zaXRpb24oKTtcblxuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgIHRoaXMuZG9tRm9jdXMoKTtcblxuICAgICAgICAgIGlmIChzaG93TWFzaykge1xuICAgICAgICAgICAgc2Nyb2xsTG9ja2VyID09PSBudWxsIHx8IHNjcm9sbExvY2tlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2Nyb2xsTG9ja2VyLmxvY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2Nyb2xsTG9ja2VyID09PSBudWxsIHx8IHNjcm9sbExvY2tlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2Nyb2xsTG9ja2VyLnVuTG9jaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzOSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb3BlbiA9IF90aGlzJHByb3BzOS5vcGVuLFxuICAgICAgICAgIHNjcm9sbExvY2tlciA9IF90aGlzJHByb3BzOS5zY3JvbGxMb2NrZXI7XG4gICAgICBkZWxldGUgY3VycmVudERyYXdlclt0aGlzLmRyYXdlcklkXTtcblxuICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgdGhpcy5zZXRMZXZlbFRyYW5zZm9ybShmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG91Y2hBY3Rpb24gPSAnJztcbiAgICAgIH1cblxuICAgICAgc2Nyb2xsTG9ja2VyID09PSBudWxsIHx8IHNjcm9sbExvY2tlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2Nyb2xsTG9ja2VyLnVuTG9jaygpO1xuICAgIH0gLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1lbWJlci1vcmRlcmluZ1xuXG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfY2xhc3NuYW1lcyxcbiAgICAgICAgICBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMxMC5jbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczEwLmNoaWxkcmVuLFxuICAgICAgICAgIHN0eWxlID0gX3RoaXMkcHJvcHMxMC5zdHlsZSxcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzMTAud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHMxMC5oZWlnaHQsXG4gICAgICAgICAgZGVmYXVsdE9wZW4gPSBfdGhpcyRwcm9wczEwLmRlZmF1bHRPcGVuLFxuICAgICAgICAgICRvcGVuID0gX3RoaXMkcHJvcHMxMC5vcGVuLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMTAucHJlZml4Q2xzLFxuICAgICAgICAgIHBsYWNlbWVudCA9IF90aGlzJHByb3BzMTAucGxhY2VtZW50LFxuICAgICAgICAgIGxldmVsID0gX3RoaXMkcHJvcHMxMC5sZXZlbCxcbiAgICAgICAgICBsZXZlbE1vdmUgPSBfdGhpcyRwcm9wczEwLmxldmVsTW92ZSxcbiAgICAgICAgICBlYXNlID0gX3RoaXMkcHJvcHMxMC5lYXNlLFxuICAgICAgICAgIGR1cmF0aW9uID0gX3RoaXMkcHJvcHMxMC5kdXJhdGlvbixcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBfdGhpcyRwcm9wczEwLmdldENvbnRhaW5lcixcbiAgICAgICAgICBoYW5kbGVyID0gX3RoaXMkcHJvcHMxMC5oYW5kbGVyLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMxMC5vbkNoYW5nZSxcbiAgICAgICAgICBhZnRlclZpc2libGVDaGFuZ2UgPSBfdGhpcyRwcm9wczEwLmFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgICBzaG93TWFzayA9IF90aGlzJHByb3BzMTAuc2hvd01hc2ssXG4gICAgICAgICAgbWFza0Nsb3NhYmxlID0gX3RoaXMkcHJvcHMxMC5tYXNrQ2xvc2FibGUsXG4gICAgICAgICAgbWFza1N0eWxlID0gX3RoaXMkcHJvcHMxMC5tYXNrU3R5bGUsXG4gICAgICAgICAgb25DbG9zZSA9IF90aGlzJHByb3BzMTAub25DbG9zZSxcbiAgICAgICAgICBvbkhhbmRsZUNsaWNrID0gX3RoaXMkcHJvcHMxMC5vbkhhbmRsZUNsaWNrLFxuICAgICAgICAgIGtleWJvYXJkID0gX3RoaXMkcHJvcHMxMC5rZXlib2FyZCxcbiAgICAgICAgICBnZXRPcGVuQ291bnQgPSBfdGhpcyRwcm9wczEwLmdldE9wZW5Db3VudCxcbiAgICAgICAgICBzY3JvbGxMb2NrZXIgPSBfdGhpcyRwcm9wczEwLnNjcm9sbExvY2tlcixcbiAgICAgICAgICBjb250ZW50V3JhcHBlclN0eWxlID0gX3RoaXMkcHJvcHMxMC5jb250ZW50V3JhcHBlclN0eWxlLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF90aGlzJHByb3BzMTAsIFtcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwic3R5bGVcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcImRlZmF1bHRPcGVuXCIsIFwib3BlblwiLCBcInByZWZpeENsc1wiLCBcInBsYWNlbWVudFwiLCBcImxldmVsXCIsIFwibGV2ZWxNb3ZlXCIsIFwiZWFzZVwiLCBcImR1cmF0aW9uXCIsIFwiZ2V0Q29udGFpbmVyXCIsIFwiaGFuZGxlclwiLCBcIm9uQ2hhbmdlXCIsIFwiYWZ0ZXJWaXNpYmxlQ2hhbmdlXCIsIFwic2hvd01hc2tcIiwgXCJtYXNrQ2xvc2FibGVcIiwgXCJtYXNrU3R5bGVcIiwgXCJvbkNsb3NlXCIsIFwib25IYW5kbGVDbGlja1wiLCBcImtleWJvYXJkXCIsIFwiZ2V0T3BlbkNvdW50XCIsIFwic2Nyb2xsTG9ja2VyXCIsIFwiY29udGVudFdyYXBwZXJTdHlsZVwiXSk7IC8vIOmmluasoea4suafk+mDveWwhuaYr+WFs+mXreeKtuaAgeOAglxuXG5cbiAgICAgIHZhciBvcGVuID0gdGhpcy5kb20gPyAkb3BlbiA6IGZhbHNlO1xuICAgICAgdmFyIHdyYXBwZXJDbGFzc05hbWUgPSBjbGFzc25hbWVzKHByZWZpeENscywgKF9jbGFzc25hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHBsYWNlbWVudCksIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3BlblwiKSwgb3BlbiksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgY2xhc3NOYW1lIHx8ICcnLCAhIWNsYXNzTmFtZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgJ25vLW1hc2snLCAhc2hvd01hc2spLCBfY2xhc3NuYW1lcykpO1xuXG4gICAgICB2YXIgX3RoaXMkZ2V0SG9yaXpvbnRhbEJvMiA9IHRoaXMuZ2V0SG9yaXpvbnRhbEJvb2xBbmRQbGFjZW1lbnROYW1lKCksXG4gICAgICAgICAgcGxhY2VtZW50TmFtZSA9IF90aGlzJGdldEhvcml6b250YWxCbzIucGxhY2VtZW50TmFtZTsgLy8g55m+5YiG5q+U5LiO5YOP57Sg5Yqo55S75LiN5ZCM5q2l77yM56ys5LiA5qyh5omT55So5ZCO5YWo55So5YOP57Sg5Yqo55S744CCXG4gICAgICAvLyBjb25zdCBkZWZhdWx0VmFsdWUgPSAhdGhpcy5jb250ZW50RG9tIHx8ICFsZXZlbCA/ICcxMDAlJyA6IGAke3ZhbHVlfXB4YDtcblxuXG4gICAgICB2YXIgcGxhY2VtZW50UG9zID0gcGxhY2VtZW50ID09PSAnbGVmdCcgfHwgcGxhY2VtZW50ID09PSAndG9wJyA/ICctMTAwJScgOiAnMTAwJSc7XG4gICAgICB2YXIgdHJhbnNmb3JtID0gb3BlbiA/ICcnIDogXCJcIi5jb25jYXQocGxhY2VtZW50TmFtZSwgXCIoXCIpLmNvbmNhdChwbGFjZW1lbnRQb3MsIFwiKVwiKTtcbiAgICAgIHZhciBoYW5kbGVyQ2hpbGRyZW4gPSBoYW5kbGVyICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoaGFuZGxlciwge1xuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICBpZiAoaGFuZGxlci5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgICBoYW5kbGVyLnByb3BzLm9uQ2xpY2soKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob25IYW5kbGVDbGljaykge1xuICAgICAgICAgICAgb25IYW5kbGVDbGljayhlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgICBfdGhpczMuaGFuZGxlckRvbSA9IGM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBvbWl0KHByb3BzLCBbJ3N3aXRjaFNjcm9sbGluZ0VmZmVjdCddKSwge1xuICAgICAgICB0YWJJbmRleDogLTEsXG4gICAgICAgIGNsYXNzTmFtZTogd3JhcHBlckNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgX3RoaXMzLmRvbSA9IGM7XG4gICAgICAgIH0sXG4gICAgICAgIG9uS2V5RG93bjogb3BlbiAmJiBrZXlib2FyZCA/IHRoaXMub25LZXlEb3duIDogdW5kZWZpbmVkLFxuICAgICAgICBvblRyYW5zaXRpb25FbmQ6IHRoaXMub25XcmFwcGVyVHJhbnNpdGlvbkVuZFxuICAgICAgfSksIHNob3dNYXNrICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1hc2tcIiksXG4gICAgICAgIG9uQ2xpY2s6IG1hc2tDbG9zYWJsZSA/IG9uQ2xvc2UgOiB1bmRlZmluZWQsXG4gICAgICAgIHN0eWxlOiBtYXNrU3R5bGUsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGMpIHtcbiAgICAgICAgICBfdGhpczMubWFza0RvbSA9IGM7XG4gICAgICAgIH1cbiAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb250ZW50LXdyYXBwZXJcIiksXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgICBtc1RyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgICAgIHdpZHRoOiBpc051bWVyaWMod2lkdGgpID8gXCJcIi5jb25jYXQod2lkdGgsIFwicHhcIikgOiB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGlzTnVtZXJpYyhoZWlnaHQpID8gXCJcIi5jb25jYXQoaGVpZ2h0LCBcInB4XCIpIDogaGVpZ2h0XG4gICAgICAgIH0sIGNvbnRlbnRXcmFwcGVyU3R5bGUpLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgX3RoaXMzLmNvbnRlbnRXcmFwcGVyID0gYztcbiAgICAgICAgfVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29udGVudFwiKSxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoYykge1xuICAgICAgICAgIF90aGlzMy5jb250ZW50RG9tID0gYztcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiBvcGVuICYmIHNob3dNYXNrID8gdGhpcy5yZW1vdmVTdGFydEhhbmRsZXIgOiB1bmRlZmluZWQgLy8g6LeR55So5L6L55SoXG4gICAgICAgICxcbiAgICAgICAgb25Ub3VjaE1vdmU6IG9wZW4gJiYgc2hvd01hc2sgPyB0aGlzLnJlbW92ZU1vdmVIYW5kbGVyIDogdW5kZWZpbmVkIC8vIOi3keeUqOS+i+eUqFxuXG4gICAgICB9LCBjaGlsZHJlbiksIGhhbmRsZXJDaGlsZHJlbikpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgcHJldlByb3BzID0gX3JlZjIucHJldlByb3BzLFxuICAgICAgICAgIF9zZWxmID0gX3JlZjIuX3NlbGY7XG4gICAgICB2YXIgbmV4dFN0YXRlID0ge1xuICAgICAgICBwcmV2UHJvcHM6IHByb3BzXG4gICAgICB9O1xuXG4gICAgICBpZiAocHJldlByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHBsYWNlbWVudCA9IHByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgICAgIGxldmVsID0gcHJvcHMubGV2ZWw7XG5cbiAgICAgICAgaWYgKHBsYWNlbWVudCAhPT0gcHJldlByb3BzLnBsYWNlbWVudCkge1xuICAgICAgICAgIC8vIHRlc3Qg55qEIGJ1Zywg5pyJ5Yqo55S76L+H5Zy677yM5Yig6ZmkIGRvbVxuICAgICAgICAgIF9zZWxmLmNvbnRlbnREb20gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxldmVsICE9PSBwcmV2UHJvcHMubGV2ZWwpIHtcbiAgICAgICAgICBfc2VsZi5nZXRMZXZlbERvbShwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJhd2VyQ2hpbGQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlckNoaWxkOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgUG9ydGFsIGZyb20gXCJyYy11dGlsL2VzL1BvcnRhbFdyYXBwZXJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaGlsZCBmcm9tICcuL0RyYXdlckNoaWxkJztcblxudmFyIERyYXdlcldyYXBwZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKERyYXdlcldyYXBwZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoRHJhd2VyV3JhcHBlcik7XG5cbiAgZnVuY3Rpb24gRHJhd2VyV3JhcHBlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmF3ZXJXcmFwcGVyKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX3RoaXMub25IYW5kbGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkhhbmRsZUNsaWNrID0gX3RoaXMkcHJvcHMub25IYW5kbGVDbGljayxcbiAgICAgICAgICAkb3BlbiA9IF90aGlzJHByb3BzLm9wZW47XG5cbiAgICAgIGlmIChvbkhhbmRsZUNsaWNrKSB7XG4gICAgICAgIG9uSGFuZGxlQ2xpY2soZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgJG9wZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBfb3BlbiA9IF90aGlzLnN0YXRlLm9wZW47XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46ICFfb3BlblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25DbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25DbG9zZSA9IF90aGlzJHByb3BzMi5vbkNsb3NlLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRwcm9wczIub3BlbjtcblxuICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgb25DbG9zZShlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvcGVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvcGVuID0gdHlwZW9mIHByb3BzLm9wZW4gIT09ICd1bmRlZmluZWQnID8gcHJvcHMub3BlbiA6ICEhcHJvcHMuZGVmYXVsdE9wZW47XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBvcGVuXG4gICAgfTtcblxuICAgIGlmICgnb25NYXNrQ2xpY2snIGluIHByb3BzKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2Bvbk1hc2tDbGlja2AgYXJlIHJlbW92ZWQsIHBsZWFzZSB1c2UgYG9uQ2xvc2VgIGluc3RlYWQuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKERyYXdlcldyYXBwZXIsIFt7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWVtYmVyLW9yZGVyaW5nXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRlZmF1bHRPcGVuID0gX3RoaXMkcHJvcHMzLmRlZmF1bHRPcGVuLFxuICAgICAgICAgIGdldENvbnRhaW5lciA9IF90aGlzJHByb3BzMy5nZXRDb250YWluZXIsXG4gICAgICAgICAgd3JhcHBlckNsYXNzTmFtZSA9IF90aGlzJHByb3BzMy53cmFwcGVyQ2xhc3NOYW1lLFxuICAgICAgICAgIGZvcmNlUmVuZGVyID0gX3RoaXMkcHJvcHMzLmZvcmNlUmVuZGVyLFxuICAgICAgICAgIGhhbmRsZXIgPSBfdGhpcyRwcm9wczMuaGFuZGxlcixcbiAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wczMsIFtcImRlZmF1bHRPcGVuXCIsIFwiZ2V0Q29udGFpbmVyXCIsIFwid3JhcHBlckNsYXNzTmFtZVwiLCBcImZvcmNlUmVuZGVyXCIsIFwiaGFuZGxlclwiXSk7XG5cbiAgICAgIHZhciBvcGVuID0gdGhpcy5zdGF0ZS5vcGVuOyAvLyDmuLLmn5PlnKjlvZPliY0gZG9tIOmHjO+8m1xuXG4gICAgICBpZiAoIWdldENvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogd3JhcHBlckNsYXNzTmFtZSxcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihjKSB7XG4gICAgICAgICAgICBfdGhpczIuZG9tID0gYztcbiAgICAgICAgICB9XG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENoaWxkLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICBvcGVuOiBvcGVuLFxuICAgICAgICAgIGhhbmRsZXI6IGhhbmRsZXIsXG4gICAgICAgICAgZ2V0Q29udGFpbmVyOiBmdW5jdGlvbiBnZXRDb250YWluZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLmRvbTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uQ2xvc2U6IHRoaXMub25DbG9zZSxcbiAgICAgICAgICBvbkhhbmRsZUNsaWNrOiB0aGlzLm9uSGFuZGxlQ2xpY2tcbiAgICAgICAgfSkpKTtcbiAgICAgIH0gLy8g5aaC5p6c5pyJIGhhbmRsZXIg5Li65YaF572u5by65Yi25riy5p+T77ybXG5cblxuICAgICAgdmFyICRmb3JjZVJlbmRlciA9ICEhaGFuZGxlciB8fCBmb3JjZVJlbmRlcjtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIHtcbiAgICAgICAgdmlzaWJsZTogb3BlbixcbiAgICAgICAgZm9yY2VSZW5kZXI6ICRmb3JjZVJlbmRlcixcbiAgICAgICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG4gICAgICAgIHdyYXBwZXJDbGFzc05hbWU6IHdyYXBwZXJDbGFzc05hbWVcbiAgICAgIH0sIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciB2aXNpYmxlID0gX3JlZi52aXNpYmxlLFxuICAgICAgICAgICAgYWZ0ZXJDbG9zZSA9IF9yZWYuYWZ0ZXJDbG9zZSxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widmlzaWJsZVwiLCBcImFmdGVyQ2xvc2VcIl0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgLyojX19QVVJFX18qL1xuICAgICAgICAgIC8vIHJlYWN0IDE177yMY29tcG9uZW50V2lsbFVubW91bnQg5pe2IFBvcnRhbCDov5Tlm54gYWZ0ZXJDbG9zZSwgdmlzaWJsZS5cbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENoaWxkLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHJlc3QsIHtcbiAgICAgICAgICAgIG9wZW46IHZpc2libGUgIT09IHVuZGVmaW5lZCA/IHZpc2libGUgOiBvcGVuLFxuICAgICAgICAgICAgYWZ0ZXJWaXNpYmxlQ2hhbmdlOiBhZnRlckNsb3NlICE9PSB1bmRlZmluZWQgPyBhZnRlckNsb3NlIDogcHJvcHMuYWZ0ZXJWaXNpYmxlQ2hhbmdlLFxuICAgICAgICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgICAgICAgIG9uQ2xvc2U6IF90aGlzMi5vbkNsb3NlLFxuICAgICAgICAgICAgb25IYW5kbGVDbGljazogX3RoaXMyLm9uSGFuZGxlQ2xpY2tcbiAgICAgICAgICB9KSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIF9yZWYyKSB7XG4gICAgICB2YXIgcHJldlByb3BzID0gX3JlZjIucHJldlByb3BzO1xuICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICBwcmV2UHJvcHM6IHByb3BzXG4gICAgICB9O1xuXG4gICAgICBpZiAodHlwZW9mIHByZXZQcm9wcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvcHMub3BlbiAhPT0gcHJldlByb3BzLm9wZW4pIHtcbiAgICAgICAgbmV3U3RhdGUub3BlbiA9IHByb3BzLm9wZW47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJhd2VyV3JhcHBlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuRHJhd2VyV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZWZpeENsczogJ2RyYXdlcicsXG4gIHBsYWNlbWVudDogJ2xlZnQnLFxuICBnZXRDb250YWluZXI6ICdib2R5JyxcbiAgZGVmYXVsdE9wZW46IGZhbHNlLFxuICBsZXZlbDogJ2FsbCcsXG4gIGR1cmF0aW9uOiAnLjNzJyxcbiAgZWFzZTogJ2N1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KScsXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHt9LFxuICBhZnRlclZpc2libGVDaGFuZ2U6IGZ1bmN0aW9uIGFmdGVyVmlzaWJsZUNoYW5nZSgpIHt9LFxuICBoYW5kbGVyOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImRyYXdlci1oYW5kbGVcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwge1xuICAgIGNsYXNzTmFtZTogXCJkcmF3ZXItaGFuZGxlLWljb25cIlxuICB9KSksXG4gIHNob3dNYXNrOiB0cnVlLFxuICBtYXNrQ2xvc2FibGU6IHRydWUsXG4gIG1hc2tTdHlsZToge30sXG4gIHdyYXBwZXJDbGFzc05hbWU6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgZm9yY2VSZW5kZXI6IGZhbHNlXG59O1xuZXhwb3J0IGRlZmF1bHQgRHJhd2VyV3JhcHBlcjsiLCIvLyBleHBvcnQgdGhpcyBwYWNrYWdlJ3MgYXBpXG5pbXBvcnQgRHJhd2VyIGZyb20gJy4vRHJhd2VyV3JhcHBlcic7XG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7IiwiZXhwb3J0IGZ1bmN0aW9uIGRhdGFUb0FycmF5KHZhcnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFycykpIHtcbiAgICByZXR1cm4gdmFycztcbiAgfVxuXG4gIHJldHVybiBbdmFyc107XG59XG52YXIgdHJhbnNpdGlvbkVuZE9iamVjdCA9IHtcbiAgdHJhbnNpdGlvbjogJ3RyYW5zaXRpb25lbmQnLFxuICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gIE1velRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgT1RyYW5zaXRpb246ICdvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCdcbn07XG5leHBvcnQgdmFyIHRyYW5zaXRpb25TdHIgPSBPYmplY3Qua2V5cyh0cmFuc2l0aW9uRW5kT2JqZWN0KS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcbiAgcmV0dXJuIGtleSBpbiAoaHRtbCA/IGh0bWwuc3R5bGUgOiB7fSk7XG59KVswXTtcbmV4cG9ydCB2YXIgdHJhbnNpdGlvbkVuZCA9IHRyYW5zaXRpb25FbmRPYmplY3RbdHJhbnNpdGlvblN0cl07XG5leHBvcnQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgaWYgKHRhcmdldC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgIHRhcmdldC5hdHRhY2hFdmVudChcIm9uXCIuY29uY2F0KGV2ZW50VHlwZSksIGNhbGxiYWNrKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcih0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgaWYgKHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFjaywgb3B0aW9ucyk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0LmF0dGFjaEV2ZW50KSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgIHRhcmdldC5kZXRhY2hFdmVudChcIm9uXCIuY29uY2F0KGV2ZW50VHlwZSksIGNhbGxiYWNrKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtQXJndW1lbnRzKGFyZywgY2IpIHtcbiAgdmFyIHJlc3VsdCA9IHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicgPyBhcmcoY2IpIDogYXJnO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gW3Jlc3VsdFswXSwgcmVzdWx0WzFdXTtcbiAgfVxuXG4gIHJldHVybiBbcmVzdWx0XTtcbn1cbmV4cG9ydCB2YXIgaXNOdW1lcmljID0gZnVuY3Rpb24gaXNOdW1lcmljKHZhbHVlKSB7XG4gIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdCh2YWx1ZSkpICYmIGlzRmluaXRlKHZhbHVlKTtcbn07XG5leHBvcnQgdmFyIHdpbmRvd0lzVW5kZWZpbmVkID0gISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuZXhwb3J0IHZhciBnZXRUb3VjaFBhcmVudFNjcm9sbCA9IGZ1bmN0aW9uIGdldFRvdWNoUGFyZW50U2Nyb2xsKHJvb3QsIGN1cnJlbnRUYXJnZXQsIGRpZmZlclgsIGRpZmZlclkpIHtcbiAgaWYgKCFjdXJyZW50VGFyZ2V0IHx8IGN1cnJlbnRUYXJnZXQgPT09IGRvY3VtZW50IHx8IGN1cnJlbnRUYXJnZXQgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyByb290IOS4uiBkcmF3ZXItY29udGVudCDorr7lrprkuoYgb3ZlcmZsb3csIOWIpOaWreS4uiByb290IOeahCBwYXJlbnQg5pe257uT5p2f5rua5Yqo77ybXG5cblxuICBpZiAoY3VycmVudFRhcmdldCA9PT0gcm9vdC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgaXNZID0gTWF0aC5tYXgoTWF0aC5hYnMoZGlmZmVyWCksIE1hdGguYWJzKGRpZmZlclkpKSA9PT0gTWF0aC5hYnMoZGlmZmVyWSk7XG4gIHZhciBpc1ggPSBNYXRoLm1heChNYXRoLmFicyhkaWZmZXJYKSwgTWF0aC5hYnMoZGlmZmVyWSkpID09PSBNYXRoLmFicyhkaWZmZXJYKTtcbiAgdmFyIHNjcm9sbFkgPSBjdXJyZW50VGFyZ2V0LnNjcm9sbEhlaWdodCAtIGN1cnJlbnRUYXJnZXQuY2xpZW50SGVpZ2h0O1xuICB2YXIgc2Nyb2xsWCA9IGN1cnJlbnRUYXJnZXQuc2Nyb2xsV2lkdGggLSBjdXJyZW50VGFyZ2V0LmNsaWVudFdpZHRoO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGN1cnJlbnRUYXJnZXQpO1xuICB2YXIgb3ZlcmZsb3dZID0gc3R5bGUub3ZlcmZsb3dZID09PSAnYXV0bycgfHwgc3R5bGUub3ZlcmZsb3dZID09PSAnc2Nyb2xsJztcbiAgdmFyIG92ZXJmbG93WCA9IHN0eWxlLm92ZXJmbG93WCA9PT0gJ2F1dG8nIHx8IHN0eWxlLm92ZXJmbG93WCA9PT0gJ3Njcm9sbCc7XG4gIHZhciB5ID0gc2Nyb2xsWSAmJiBvdmVyZmxvd1k7XG4gIHZhciB4ID0gc2Nyb2xsWCAmJiBvdmVyZmxvd1g7XG5cbiAgaWYgKGlzWSAmJiAoIXkgfHwgeSAmJiAoY3VycmVudFRhcmdldC5zY3JvbGxUb3AgPj0gc2Nyb2xsWSAmJiBkaWZmZXJZIDwgMCB8fCBjdXJyZW50VGFyZ2V0LnNjcm9sbFRvcCA8PSAwICYmIGRpZmZlclkgPiAwKSkgfHwgaXNYICYmICgheCB8fCB4ICYmIChjdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQgPj0gc2Nyb2xsWCAmJiBkaWZmZXJYIDwgMCB8fCBjdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQgPD0gMCAmJiBkaWZmZXJYID4gMCkpKSB7XG4gICAgcmV0dXJuIGdldFRvdWNoUGFyZW50U2Nyb2xsKHJvb3QsIGN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZSwgZGlmZmVyWCwgZGlmZmVyWSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59OyIsImltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5XCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IGdldFNjcm9sbEJhclNpemUgZnJvbSAnLi4vZ2V0U2Nyb2xsQmFyU2l6ZSc7XG5pbXBvcnQgc2V0U3R5bGUgZnJvbSAnLi4vc2V0U3R5bGUnO1xudmFyIGxvY2tzID0gW107XG52YXIgc2Nyb2xsaW5nRWZmZWN0Q2xhc3NOYW1lID0gJ2FudC1zY3JvbGxpbmctZWZmZWN0JztcbnZhciBzY3JvbGxpbmdFZmZlY3RDbGFzc05hbWVSZWcgPSBuZXcgUmVnRXhwKFwiXCIuY29uY2F0KHNjcm9sbGluZ0VmZmVjdENsYXNzTmFtZSksICdnJyk7XG52YXIgdXVpZCA9IDA7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE5MzQwXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xOTMzMlxuXG52YXIgY2FjaGVTdHlsZSA9IG5ldyBNYXAoKTtcblxudmFyIFNjcm9sbExvY2tlciA9IGZ1bmN0aW9uIFNjcm9sbExvY2tlcihvcHRpb25zKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNjcm9sbExvY2tlcik7XG5cbiAgdGhpcy5nZXRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnM7XG5cbiAgICByZXR1cm4gKF90aGlzJG9wdGlvbnMgPSBfdGhpcy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zLmNvbnRhaW5lcjtcbiAgfTsgLy8gaWYgb3B0aW9ucyBjaGFuZ2UuLi5cblxuXG4gIHRoaXMucmVMb2NrID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgZmluZExvY2sgPSBsb2Nrcy5maW5kKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gX3JlZi50YXJnZXQ7XG4gICAgICByZXR1cm4gdGFyZ2V0ID09PSBfdGhpcy5sb2NrVGFyZ2V0O1xuICAgIH0pO1xuXG4gICAgaWYgKGZpbmRMb2NrKSB7XG4gICAgICBfdGhpcy51bkxvY2soKTtcbiAgICB9XG5cbiAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmIChmaW5kTG9jaykge1xuICAgICAgZmluZExvY2sub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIF90aGlzLmxvY2soKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5sb2NrID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyRvcHRpb25zMztcblxuICAgIC8vIElmIGxvY2tUYXJnZXQgZXhpc3QgcmV0dXJuXG4gICAgaWYgKGxvY2tzLnNvbWUoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0O1xuICAgICAgcmV0dXJuIHRhcmdldCA9PT0gX3RoaXMubG9ja1RhcmdldDtcbiAgICB9KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSWYgc2FtZSBjb250YWluZXIgZWZmZWN0LCByZXR1cm5cblxuXG4gICAgaWYgKGxvY2tzLnNvbWUoZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICB2YXIgX3RoaXMkb3B0aW9uczI7XG5cbiAgICAgIHZhciBvcHRpb25zID0gX3JlZjMub3B0aW9ucztcbiAgICAgIHJldHVybiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNvbnRhaW5lcikgPT09ICgoX3RoaXMkb3B0aW9uczIgPSBfdGhpcy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfdGhpcyRvcHRpb25zMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkb3B0aW9uczIuY29udGFpbmVyKTtcbiAgICB9KSkge1xuICAgICAgbG9ja3MgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGxvY2tzKSwgW3tcbiAgICAgICAgdGFyZ2V0OiBfdGhpcy5sb2NrVGFyZ2V0LFxuICAgICAgICBvcHRpb25zOiBfdGhpcy5vcHRpb25zXG4gICAgICB9XSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbEJhclNpemUgPSAwO1xuICAgIHZhciBjb250YWluZXIgPSAoKF90aGlzJG9wdGlvbnMzID0gX3RoaXMub3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkb3B0aW9uczMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnMzLmNvbnRhaW5lcikgfHwgZG9jdW1lbnQuYm9keTtcblxuICAgIGlmIChjb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkgJiYgd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPiAwIHx8IGNvbnRhaW5lci5zY3JvbGxIZWlnaHQgPiBjb250YWluZXIuY2xpZW50SGVpZ2h0KSB7XG4gICAgICBzY3JvbGxCYXJTaXplID0gZ2V0U2Nyb2xsQmFyU2l6ZSgpO1xuICAgIH1cblxuICAgIHZhciBjb250YWluZXJDbGFzc05hbWUgPSBjb250YWluZXIuY2xhc3NOYW1lO1xuXG4gICAgaWYgKGxvY2tzLmZpbHRlcihmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICAgIHZhciBfdGhpcyRvcHRpb25zNDtcblxuICAgICAgdmFyIG9wdGlvbnMgPSBfcmVmNC5vcHRpb25zO1xuICAgICAgcmV0dXJuIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY29udGFpbmVyKSA9PT0gKChfdGhpcyRvcHRpb25zNCA9IF90aGlzLm9wdGlvbnMpID09PSBudWxsIHx8IF90aGlzJG9wdGlvbnM0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRvcHRpb25zNC5jb250YWluZXIpO1xuICAgIH0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY2FjaGVTdHlsZS5zZXQoY29udGFpbmVyLCBzZXRTdHlsZSh7XG4gICAgICAgIHdpZHRoOiBcImNhbGMoMTAwJSAtIFwiLmNvbmNhdChzY3JvbGxCYXJTaXplLCBcInB4KVwiKSxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nXG4gICAgICB9LCB7XG4gICAgICAgIGVsZW1lbnQ6IGNvbnRhaW5lclxuICAgICAgfSkpO1xuICAgIH0gLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTk3MjlcblxuXG4gICAgaWYgKCFzY3JvbGxpbmdFZmZlY3RDbGFzc05hbWVSZWcudGVzdChjb250YWluZXJDbGFzc05hbWUpKSB7XG4gICAgICB2YXIgYWRkQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQoY29udGFpbmVyQ2xhc3NOYW1lLCBcIiBcIikuY29uY2F0KHNjcm9sbGluZ0VmZmVjdENsYXNzTmFtZSk7XG4gICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gYWRkQ2xhc3NOYW1lLnRyaW0oKTtcbiAgICB9XG5cbiAgICBsb2NrcyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkobG9ja3MpLCBbe1xuICAgICAgdGFyZ2V0OiBfdGhpcy5sb2NrVGFyZ2V0LFxuICAgICAgb3B0aW9uczogX3RoaXMub3B0aW9uc1xuICAgIH1dKTtcbiAgfTtcblxuICB0aGlzLnVuTG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9uczU7XG5cbiAgICB2YXIgZmluZExvY2sgPSBsb2Nrcy5maW5kKGZ1bmN0aW9uIChfcmVmNSkge1xuICAgICAgdmFyIHRhcmdldCA9IF9yZWY1LnRhcmdldDtcbiAgICAgIHJldHVybiB0YXJnZXQgPT09IF90aGlzLmxvY2tUYXJnZXQ7XG4gICAgfSk7XG4gICAgbG9ja3MgPSBsb2Nrcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWY2KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gX3JlZjYudGFyZ2V0O1xuICAgICAgcmV0dXJuIHRhcmdldCAhPT0gX3RoaXMubG9ja1RhcmdldDtcbiAgICB9KTtcblxuICAgIGlmICghZmluZExvY2sgfHwgbG9ja3Muc29tZShmdW5jdGlvbiAoX3JlZjcpIHtcbiAgICAgIHZhciBfZmluZExvY2skb3B0aW9ucztcblxuICAgICAgdmFyIG9wdGlvbnMgPSBfcmVmNy5vcHRpb25zO1xuICAgICAgcmV0dXJuIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuY29udGFpbmVyKSA9PT0gKChfZmluZExvY2skb3B0aW9ucyA9IGZpbmRMb2NrLm9wdGlvbnMpID09PSBudWxsIHx8IF9maW5kTG9jayRvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmluZExvY2skb3B0aW9ucy5jb250YWluZXIpO1xuICAgIH0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBSZW1vdmUgRWZmZWN0XG5cblxuICAgIHZhciBjb250YWluZXIgPSAoKF90aGlzJG9wdGlvbnM1ID0gX3RoaXMub3B0aW9ucykgPT09IG51bGwgfHwgX3RoaXMkb3B0aW9uczUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJG9wdGlvbnM1LmNvbnRhaW5lcikgfHwgZG9jdW1lbnQuYm9keTtcbiAgICB2YXIgY29udGFpbmVyQ2xhc3NOYW1lID0gY29udGFpbmVyLmNsYXNzTmFtZTtcbiAgICBpZiAoIXNjcm9sbGluZ0VmZmVjdENsYXNzTmFtZVJlZy50ZXN0KGNvbnRhaW5lckNsYXNzTmFtZSkpIHJldHVybjtcbiAgICBzZXRTdHlsZShjYWNoZVN0eWxlLmdldChjb250YWluZXIpLCB7XG4gICAgICBlbGVtZW50OiBjb250YWluZXJcbiAgICB9KTtcbiAgICBjYWNoZVN0eWxlLmRlbGV0ZShjb250YWluZXIpO1xuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBjb250YWluZXIuY2xhc3NOYW1lLnJlcGxhY2Uoc2Nyb2xsaW5nRWZmZWN0Q2xhc3NOYW1lUmVnLCAnJykudHJpbSgpO1xuICB9OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcblxuXG4gIHRoaXMubG9ja1RhcmdldCA9IHV1aWQrKztcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbn07XG5cbmV4cG9ydCB7IFNjcm9sbExvY2tlciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2dldFByb3RvdHlwZU9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZlwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wcyAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJhZiBmcm9tICcuL3JhZic7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4vUG9ydGFsJztcbmltcG9ydCBjYW5Vc2VEb20gZnJvbSAnLi9Eb20vY2FuVXNlRG9tJztcbmltcG9ydCBzd2l0Y2hTY3JvbGxpbmdFZmZlY3QgZnJvbSAnLi9zd2l0Y2hTY3JvbGxpbmdFZmZlY3QnO1xuaW1wb3J0IHNldFN0eWxlIGZyb20gJy4vc2V0U3R5bGUnO1xuaW1wb3J0IFNjcm9sbExvY2tlciBmcm9tICcuL0RvbS9zY3JvbGxMb2NrZXInO1xudmFyIG9wZW5Db3VudCA9IDA7XG52YXIgc3VwcG9ydERvbSA9IGNhblVzZURvbSgpO1xuLyoqIEBwcml2YXRlIFRlc3QgdXNhZ2Ugb25seSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3BlbkNvdW50KCkge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JyA/IG9wZW5Db3VudCA6IDA7XG59IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE5MzQwXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xOTMzMlxuXG52YXIgY2FjaGVPdmVyZmxvdyA9IHt9O1xuXG52YXIgZ2V0UGFyZW50ID0gZnVuY3Rpb24gZ2V0UGFyZW50KGdldENvbnRhaW5lcikge1xuICBpZiAoIXN1cHBvcnREb20pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChnZXRDb250YWluZXIpIHtcbiAgICBpZiAodHlwZW9mIGdldENvbnRhaW5lciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGdldENvbnRhaW5lcilbMF07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBnZXRDb250YWluZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBnZXRDb250YWluZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoX3R5cGVvZihnZXRDb250YWluZXIpID09PSAnb2JqZWN0JyAmJiBnZXRDb250YWluZXIgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBnZXRDb250YWluZXI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRvY3VtZW50LmJvZHk7XG59O1xuXG52YXIgUG9ydGFsV3JhcHBlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9ydGFsV3JhcHBlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihQb3J0YWxXcmFwcGVyKTtcblxuICBmdW5jdGlvbiBQb3J0YWxXcmFwcGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcnRhbFdyYXBwZXIpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgX3RoaXMuY29tcG9uZW50UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICBfdGhpcy51cGRhdGVTY3JvbGxMb2NrZXIgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgICB2YXIgX3JlZiA9IHByZXZQcm9wcyB8fCB7fSxcbiAgICAgICAgICBwcmV2VmlzaWJsZSA9IF9yZWYudmlzaWJsZTtcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZ2V0Q29udGFpbmVyID0gX3RoaXMkcHJvcHMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIHZpc2libGUgPSBfdGhpcyRwcm9wcy52aXNpYmxlO1xuXG4gICAgICBpZiAodmlzaWJsZSAmJiB2aXNpYmxlICE9PSBwcmV2VmlzaWJsZSAmJiBzdXBwb3J0RG9tICYmIGdldFBhcmVudChnZXRDb250YWluZXIpICE9PSBfdGhpcy5zY3JvbGxMb2NrZXIuZ2V0Q29udGFpbmVyKCkpIHtcbiAgICAgICAgX3RoaXMuc2Nyb2xsTG9ja2VyLnJlTG9jayh7XG4gICAgICAgICAgY29udGFpbmVyOiBnZXRQYXJlbnQoZ2V0Q29udGFpbmVyKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMudXBkYXRlT3BlbkNvdW50ID0gZnVuY3Rpb24gKHByZXZQcm9wcykge1xuICAgICAgdmFyIF9yZWYyID0gcHJldlByb3BzIHx8IHt9LFxuICAgICAgICAgIHByZXZWaXNpYmxlID0gX3JlZjIudmlzaWJsZSxcbiAgICAgICAgICBwcmV2R2V0Q29udGFpbmVyID0gX3JlZjIuZ2V0Q29udGFpbmVyO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzMi52aXNpYmxlLFxuICAgICAgICAgIGdldENvbnRhaW5lciA9IF90aGlzJHByb3BzMi5nZXRDb250YWluZXI7IC8vIFVwZGF0ZSBjb3VudFxuXG4gICAgICBpZiAodmlzaWJsZSAhPT0gcHJldlZpc2libGUgJiYgc3VwcG9ydERvbSAmJiBnZXRQYXJlbnQoZ2V0Q29udGFpbmVyKSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICBpZiAodmlzaWJsZSAmJiAhcHJldlZpc2libGUpIHtcbiAgICAgICAgICBvcGVuQ291bnQgKz0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2UHJvcHMpIHtcbiAgICAgICAgICBvcGVuQ291bnQgLT0gMTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBDbGVhbiB1cCBjb250YWluZXIgaWYgbmVlZGVkXG5cblxuICAgICAgdmFyIGdldENvbnRhaW5lcklzRnVuYyA9IHR5cGVvZiBnZXRDb250YWluZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHByZXZHZXRDb250YWluZXIgPT09ICdmdW5jdGlvbic7XG5cbiAgICAgIGlmIChnZXRDb250YWluZXJJc0Z1bmMgPyBnZXRDb250YWluZXIudG9TdHJpbmcoKSAhPT0gcHJldkdldENvbnRhaW5lci50b1N0cmluZygpIDogZ2V0Q29udGFpbmVyICE9PSBwcmV2R2V0Q29udGFpbmVyKSB7XG4gICAgICAgIF90aGlzLnJlbW92ZUN1cnJlbnRDb250YWluZXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuYXR0YWNoVG9QYXJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZm9yY2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuXG4gICAgICBpZiAoZm9yY2UgfHwgX3RoaXMuY29udGFpbmVyICYmICFfdGhpcy5jb250YWluZXIucGFyZW50Tm9kZSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gZ2V0UGFyZW50KF90aGlzLnByb3BzLmdldENvbnRhaW5lcik7XG5cbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChfdGhpcy5jb250YWluZXIpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzdXBwb3J0RG9tKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIV90aGlzLmNvbnRhaW5lcikge1xuICAgICAgICBfdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBfdGhpcy5hdHRhY2hUb1BhcmVudCh0cnVlKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0V3JhcHBlckNsYXNzTmFtZSgpO1xuXG4gICAgICByZXR1cm4gX3RoaXMuY29udGFpbmVyO1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXRXcmFwcGVyQ2xhc3NOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHdyYXBwZXJDbGFzc05hbWUgPSBfdGhpcy5wcm9wcy53cmFwcGVyQ2xhc3NOYW1lO1xuXG4gICAgICBpZiAoX3RoaXMuY29udGFpbmVyICYmIHdyYXBwZXJDbGFzc05hbWUgJiYgd3JhcHBlckNsYXNzTmFtZSAhPT0gX3RoaXMuY29udGFpbmVyLmNsYXNzTmFtZSkge1xuICAgICAgICBfdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gd3JhcHBlckNsYXNzTmFtZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVtb3ZlQ3VycmVudENvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRjb250YWluZXIsIF90aGlzJGNvbnRhaW5lciRwYXJlbjtcblxuICAgICAgLy8gUG9ydGFsIHdpbGwgcmVtb3ZlIGZyb20gYHBhcmVudE5vZGVgLlxuICAgICAgLy8gTGV0J3MgaGFuZGxlIHRoaXMgYWdhaW4gdG8gYXZvaWQgcmVmYWN0b3IgaXNzdWUuXG4gICAgICAoX3RoaXMkY29udGFpbmVyID0gX3RoaXMuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfdGhpcyRjb250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfdGhpcyRjb250YWluZXIkcGFyZW4gPSBfdGhpcyRjb250YWluZXIucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX3RoaXMkY29udGFpbmVyJHBhcmVuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRjb250YWluZXIkcGFyZW4ucmVtb3ZlQ2hpbGQoX3RoaXMuY29udGFpbmVyKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuaGFuY2UgLi9zd2l0Y2hTY3JvbGxpbmdFZmZlY3RcbiAgICAgKiAxLiBTaW11bGF0ZSBkb2N1bWVudCBib2R5IHNjcm9sbCBiYXIgd2l0aFxuICAgICAqIDIuIFJlY29yZCBib2R5IGhhcyBvdmVyZmxvdyBzdHlsZSBhbmQgcmVjb3ZlciB3aGVuIGFsbCBvZiBQb3J0YWxXcmFwcGVyIGludmlzaWJsZVxuICAgICAqIDMuIERpc2FibGUgYm9keSBzY3JvbGwgd2hlbiBQb3J0YWxXcmFwcGVyIGhhcyBvcGVuXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgUG9ydGFsV3JhcHBlclxuICAgICAqL1xuXG5cbiAgICBfdGhpcy5zd2l0Y2hTY3JvbGxpbmdFZmZlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAob3BlbkNvdW50ID09PSAxICYmICFPYmplY3Qua2V5cyhjYWNoZU92ZXJmbG93KS5sZW5ndGgpIHtcbiAgICAgICAgc3dpdGNoU2Nyb2xsaW5nRWZmZWN0KCk7IC8vIE11c3QgYmUgc2V0IGFmdGVyIHN3aXRjaFNjcm9sbGluZ0VmZmVjdFxuXG4gICAgICAgIGNhY2hlT3ZlcmZsb3cgPSBzZXRTdHlsZSh7XG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXG4gICAgICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJ1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIW9wZW5Db3VudCkge1xuICAgICAgICBzZXRTdHlsZShjYWNoZU92ZXJmbG93KTtcbiAgICAgICAgY2FjaGVPdmVyZmxvdyA9IHt9O1xuICAgICAgICBzd2l0Y2hTY3JvbGxpbmdFZmZlY3QodHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnNjcm9sbExvY2tlciA9IG5ldyBTY3JvbGxMb2NrZXIoe1xuICAgICAgY29udGFpbmVyOiBnZXRQYXJlbnQocHJvcHMuZ2V0Q29udGFpbmVyKVxuICAgIH0pO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb3J0YWxXcmFwcGVyLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLnVwZGF0ZU9wZW5Db3VudCgpO1xuXG4gICAgICBpZiAoIXRoaXMuYXR0YWNoVG9QYXJlbnQoKSkge1xuICAgICAgICB0aGlzLnJhZklkID0gcmFmKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9wZW5Db3VudChwcmV2UHJvcHMpO1xuICAgICAgdGhpcy51cGRhdGVTY3JvbGxMb2NrZXIocHJldlByb3BzKTtcbiAgICAgIHRoaXMuc2V0V3JhcHBlckNsYXNzTmFtZSgpO1xuICAgICAgdGhpcy5hdHRhY2hUb1BhcmVudCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHZpc2libGUgPSBfdGhpcyRwcm9wczMudmlzaWJsZSxcbiAgICAgICAgICBnZXRDb250YWluZXIgPSBfdGhpcyRwcm9wczMuZ2V0Q29udGFpbmVyO1xuXG4gICAgICBpZiAoc3VwcG9ydERvbSAmJiBnZXRQYXJlbnQoZ2V0Q29udGFpbmVyKSA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAvLyDnprvlvIDml7bkuI3kvJogcmVuZGVy77yMIOWvvOWIsOemu+W8gOaXtuaVsOWAvOS4jeWPmO+8jOaUueeUqCBmdW5jIOOAguOAglxuICAgICAgICBvcGVuQ291bnQgPSB2aXNpYmxlICYmIG9wZW5Db3VudCA/IG9wZW5Db3VudCAtIDEgOiBvcGVuQ291bnQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucmVtb3ZlQ3VycmVudENvbnRhaW5lcigpO1xuICAgICAgcmFmLmNhbmNlbCh0aGlzLnJhZklkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHM0LmNoaWxkcmVuLFxuICAgICAgICAgIGZvcmNlUmVuZGVyID0gX3RoaXMkcHJvcHM0LmZvcmNlUmVuZGVyLFxuICAgICAgICAgIHZpc2libGUgPSBfdGhpcyRwcm9wczQudmlzaWJsZTtcbiAgICAgIHZhciBwb3J0YWwgPSBudWxsO1xuICAgICAgdmFyIGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIGdldE9wZW5Db3VudDogZnVuY3Rpb24gZ2V0T3BlbkNvdW50KCkge1xuICAgICAgICAgIHJldHVybiBvcGVuQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldENvbnRhaW5lcjogdGhpcy5nZXRDb250YWluZXIsXG4gICAgICAgIHN3aXRjaFNjcm9sbGluZ0VmZmVjdDogdGhpcy5zd2l0Y2hTY3JvbGxpbmdFZmZlY3QsXG4gICAgICAgIHNjcm9sbExvY2tlcjogdGhpcy5zY3JvbGxMb2NrZXJcbiAgICAgIH07XG5cbiAgICAgIGlmIChmb3JjZVJlbmRlciB8fCB2aXNpYmxlIHx8IHRoaXMuY29tcG9uZW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgcG9ydGFsID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9ydGFsLCB7XG4gICAgICAgICAgZ2V0Q29udGFpbmVyOiB0aGlzLmdldENvbnRhaW5lcixcbiAgICAgICAgICByZWY6IHRoaXMuY29tcG9uZW50UmVmXG4gICAgICAgIH0sIGNoaWxkcmVuKGNoaWxkUHJvcHMpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBvcnRhbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9ydGFsV3JhcHBlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsV3JhcHBlcjsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xudmFyIGNhY2hlZDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbEJhclNpemUoZnJlc2gpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmIChmcmVzaCB8fCBjYWNoZWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlubmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGlubmVyLnN0eWxlLmhlaWdodCA9ICcyMDBweCc7XG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIG91dGVyU3R5bGUgPSBvdXRlci5zdHlsZTtcbiAgICBvdXRlclN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBvdXRlclN0eWxlLnRvcCA9ICcwJztcbiAgICBvdXRlclN0eWxlLmxlZnQgPSAnMCc7XG4gICAgb3V0ZXJTdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG91dGVyU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG91dGVyU3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gJzE1MHB4JztcbiAgICBvdXRlclN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAgIHZhciB3aWR0aENvbnRhaW5lZCA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdmFyIHdpZHRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAod2lkdGhDb250YWluZWQgPT09IHdpZHRoU2Nyb2xsKSB7XG4gICAgICB3aWR0aFNjcm9sbCA9IG91dGVyLmNsaWVudFdpZHRoO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuICAgIGNhY2hlZCA9IHdpZHRoQ29udGFpbmVkIC0gd2lkdGhTY3JvbGw7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkO1xufVxuXG5mdW5jdGlvbiBlbnN1cmVTaXplKHN0cikge1xuICB2YXIgbWF0Y2ggPSBzdHIubWF0Y2goL14oLiopcHgkLyk7XG4gIHZhciB2YWx1ZSA9IE51bWJlcihtYXRjaCA9PT0gbnVsbCB8fCBtYXRjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF0Y2hbMV0pO1xuICByZXR1cm4gTnVtYmVyLmlzTmFOKHZhbHVlKSA/IGdldFNjcm9sbEJhclNpemUoKSA6IHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0U2Nyb2xsQmFyU2l6ZSh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXRhcmdldCB8fCAhKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwXG4gICAgfTtcbiAgfVxuXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0LCAnOjotd2Via2l0LXNjcm9sbGJhcicpLFxuICAgICAgd2lkdGggPSBfZ2V0Q29tcHV0ZWRTdHlsZS53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9nZXRDb21wdXRlZFN0eWxlLmhlaWdodDtcblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiBlbnN1cmVTaXplKHdpZHRoKSxcbiAgICBoZWlnaHQ6IGVuc3VyZVNpemUoaGVpZ2h0KVxuICB9O1xufSIsIi8qKlxuICogRWFzeSB0byBzZXQgZWxlbWVudCBzdHlsZSwgcmV0dXJuIHByZXZpb3VzIHN0eWxlXG4gKiBJRSBicm93c2VyIGNvbXBhdGlibGUoSUUgYnJvd3NlciBkb2Vzbid0IG1lcmdlIG92ZXJmbG93IHN0eWxlLCBuZWVkIHRvIHNldCBpdCBzZXBhcmF0ZWx5KVxuICogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTkzOTNcbiAqXG4gKi9cbmZ1bmN0aW9uIHNldFN0eWxlKHN0eWxlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICBpZiAoIXN0eWxlKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBlbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gZG9jdW1lbnQuYm9keSA6IF9vcHRpb25zJGVsZW1lbnQ7XG4gIHZhciBvbGRTdHlsZSA9IHt9O1xuICB2YXIgc3R5bGVLZXlzID0gT2JqZWN0LmtleXMoc3R5bGUpOyAvLyBJRSBicm93c2VyIGNvbXBhdGlibGVcblxuICBzdHlsZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgb2xkU3R5bGVba2V5XSA9IGVsZW1lbnQuc3R5bGVba2V5XTtcbiAgfSk7XG4gIHN0eWxlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZVtrZXldO1xuICB9KTtcbiAgcmV0dXJuIG9sZFN0eWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXRTdHlsZTsiLCJpbXBvcnQgZ2V0U2Nyb2xsQmFyU2l6ZSBmcm9tICcuL2dldFNjcm9sbEJhclNpemUnO1xuaW1wb3J0IHNldFN0eWxlIGZyb20gJy4vc2V0U3R5bGUnO1xuXG5mdW5jdGlvbiBpc0JvZHlPdmVyZmxvd2luZygpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0ID4gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XG59XG5cbnZhciBjYWNoZVN0eWxlID0ge307XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKGNsb3NlKSB7XG4gIGlmICghaXNCb2R5T3ZlcmZsb3dpbmcoKSAmJiAhY2xvc2UpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTk3MjlcblxuXG4gIHZhciBzY3JvbGxpbmdFZmZlY3RDbGFzc05hbWUgPSAnYW50LXNjcm9sbGluZy1lZmZlY3QnO1xuICB2YXIgc2Nyb2xsaW5nRWZmZWN0Q2xhc3NOYW1lUmVnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChzY3JvbGxpbmdFZmZlY3RDbGFzc05hbWUpLCAnZycpO1xuICB2YXIgYm9keUNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lO1xuXG4gIGlmIChjbG9zZSkge1xuICAgIGlmICghc2Nyb2xsaW5nRWZmZWN0Q2xhc3NOYW1lUmVnLnRlc3QoYm9keUNsYXNzTmFtZSkpIHJldHVybjtcbiAgICBzZXRTdHlsZShjYWNoZVN0eWxlKTtcbiAgICBjYWNoZVN0eWxlID0ge307XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBib2R5Q2xhc3NOYW1lLnJlcGxhY2Uoc2Nyb2xsaW5nRWZmZWN0Q2xhc3NOYW1lUmVnLCAnJykudHJpbSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzY3JvbGxCYXJTaXplID0gZ2V0U2Nyb2xsQmFyU2l6ZSgpO1xuXG4gIGlmIChzY3JvbGxCYXJTaXplKSB7XG4gICAgY2FjaGVTdHlsZSA9IHNldFN0eWxlKHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6IFwiY2FsYygxMDAlIC0gXCIuY29uY2F0KHNjcm9sbEJhclNpemUsIFwicHgpXCIpXG4gICAgfSk7XG5cbiAgICBpZiAoIXNjcm9sbGluZ0VmZmVjdENsYXNzTmFtZVJlZy50ZXN0KGJvZHlDbGFzc05hbWUpKSB7XG4gICAgICB2YXIgYWRkQ2xhc3NOYW1lID0gXCJcIi5jb25jYXQoYm9keUNsYXNzTmFtZSwgXCIgXCIpLmNvbmNhdChzY3JvbGxpbmdFZmZlY3RDbGFzc05hbWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBhZGRDbGFzc05hbWUudHJpbSgpO1xuICAgIH1cbiAgfVxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRTY3JvbGxCYXJTaXplO1xuZXhwb3J0cy5nZXRUYXJnZXRTY3JvbGxCYXJTaXplID0gZ2V0VGFyZ2V0U2Nyb2xsQmFyU2l6ZTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbnZhciBjYWNoZWQ7XG5cbmZ1bmN0aW9uIGdldFNjcm9sbEJhclNpemUoZnJlc2gpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGlmIChmcmVzaCB8fCBjYWNoZWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlubmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGlubmVyLnN0eWxlLmhlaWdodCA9ICcyMDBweCc7XG4gICAgdmFyIG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIG91dGVyU3R5bGUgPSBvdXRlci5zdHlsZTtcbiAgICBvdXRlclN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBvdXRlclN0eWxlLnRvcCA9ICcwJztcbiAgICBvdXRlclN0eWxlLmxlZnQgPSAnMCc7XG4gICAgb3V0ZXJTdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG91dGVyU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG91dGVyU3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gJzE1MHB4JztcbiAgICBvdXRlclN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xuICAgIHZhciB3aWR0aENvbnRhaW5lZCA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdmFyIHdpZHRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAod2lkdGhDb250YWluZWQgPT09IHdpZHRoU2Nyb2xsKSB7XG4gICAgICB3aWR0aFNjcm9sbCA9IG91dGVyLmNsaWVudFdpZHRoO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuICAgIGNhY2hlZCA9IHdpZHRoQ29udGFpbmVkIC0gd2lkdGhTY3JvbGw7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkO1xufVxuXG5mdW5jdGlvbiBlbnN1cmVTaXplKHN0cikge1xuICB2YXIgbWF0Y2ggPSBzdHIubWF0Y2goL14oLiopcHgkLyk7XG4gIHZhciB2YWx1ZSA9IE51bWJlcihtYXRjaCA9PT0gbnVsbCB8fCBtYXRjaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWF0Y2hbMV0pO1xuICByZXR1cm4gTnVtYmVyLmlzTmFOKHZhbHVlKSA/IGdldFNjcm9sbEJhclNpemUoKSA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRUYXJnZXRTY3JvbGxCYXJTaXplKHRhcmdldCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhdGFyZ2V0IHx8ICEodGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQsICc6Oi13ZWJraXQtc2Nyb2xsYmFyJyksXG4gICAgICB3aWR0aCA9IF9nZXRDb21wdXRlZFN0eWxlLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX2dldENvbXB1dGVkU3R5bGUuaGVpZ2h0O1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IGVuc3VyZVNpemUod2lkdGgpLFxuICAgIGhlaWdodDogZW5zdXJlU2l6ZShoZWlnaHQpXG4gIH07XG59IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgUHVyZUNvbXBvbmVudCwgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcblxuICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG5cbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkge1xuICB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7XG4gICAgdmFyIFN1cGVyID0gX2dldFByb3RvdHlwZU9mKERlcml2ZWQpLFxuICAgICAgICByZXN1bHQ7XG5cbiAgICBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkge1xuICAgICAgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjtcblxuICAgICAgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbnZhciBBY2NvcmRpb25TdG9yZSA9IGZ1bmN0aW9uIEFjY29yZGlvblN0b3JlKF9yZWYpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgX3JlZiRleHBhbmRlZCA9IF9yZWYuZXhwYW5kZWQsXG4gICAgICBfZXhwYW5kZWQgPSBfcmVmJGV4cGFuZGVkID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkZXhwYW5kZWQsXG4gICAgICBfcmVmJGFsbG93TXVsdGlwbGVFeHAgPSBfcmVmLmFsbG93TXVsdGlwbGVFeHBhbmRlZCxcbiAgICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZCA9IF9yZWYkYWxsb3dNdWx0aXBsZUV4cCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGFsbG93TXVsdGlwbGVFeHAsXG4gICAgICBfcmVmJGFsbG93WmVyb0V4cGFuZGUgPSBfcmVmLmFsbG93WmVyb0V4cGFuZGVkLFxuICAgICAgYWxsb3daZXJvRXhwYW5kZWQgPSBfcmVmJGFsbG93WmVyb0V4cGFuZGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRhbGxvd1plcm9FeHBhbmRlO1xuXG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY2NvcmRpb25TdG9yZSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZXhwYW5kZWRcIiwgdm9pZCAwKTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbGxvd011bHRpcGxlRXhwYW5kZWRcIiwgdm9pZCAwKTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhbGxvd1plcm9FeHBhbmRlZFwiLCB2b2lkIDApO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRvZ2dsZUV4cGFuZGVkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgaWYgKF90aGlzLmlzSXRlbURpc2FibGVkKHV1aWQpKSB7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgdmFyIGlzRXhwYW5kZWQgPSBfdGhpcy5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcblxuICAgIGlmICghaXNFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIF90aGlzLmF1Z21lbnQoe1xuICAgICAgICBleHBhbmRlZDogX3RoaXMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkID8gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShfdGhpcy5leHBhbmRlZCksIFt1dWlkXSkgOiBbdXVpZF1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gX3RoaXMuYXVnbWVudCh7XG4gICAgICAgIGV4cGFuZGVkOiBfdGhpcy5leHBhbmRlZC5maWx0ZXIoZnVuY3Rpb24gKGV4cGFuZGVkVXVpZCkge1xuICAgICAgICAgIHJldHVybiBleHBhbmRlZFV1aWQgIT09IHV1aWQ7XG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzSXRlbURpc2FibGVkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgdmFyIGlzRXhwYW5kZWQgPSBfdGhpcy5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcblxuICAgIHZhciBpc09ubHlPbmVFeHBhbmRlZCA9IF90aGlzLmV4cGFuZGVkLmxlbmd0aCA9PT0gMTtcbiAgICByZXR1cm4gQm9vbGVhbihpc0V4cGFuZGVkICYmICFfdGhpcy5hbGxvd1plcm9FeHBhbmRlZCAmJiBpc09ubHlPbmVFeHBhbmRlZCk7XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImlzSXRlbUV4cGFuZGVkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgcmV0dXJuIF90aGlzLmV4cGFuZGVkLmluZGV4T2YodXVpZCkgIT09IC0xO1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRQYW5lbEF0dHJpYnV0ZXNcIiwgZnVuY3Rpb24gKHV1aWQsIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQpIHtcbiAgICB2YXIgZXhwYW5kZWQgPSBkYW5nZXJvdXNseVNldEV4cGFuZGVkICE9PSBudWxsICYmIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgIT09IHZvaWQgMCA/IGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgOiBfdGhpcy5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcbiAgICByZXR1cm4ge1xuICAgICAgcm9sZTogX3RoaXMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkID8gdW5kZWZpbmVkIDogJ3JlZ2lvbicsXG4gICAgICAnYXJpYS1oaWRkZW4nOiBfdGhpcy5hbGxvd011bHRpcGxlRXhwYW5kZWQgPyAhZXhwYW5kZWQgOiB1bmRlZmluZWQsXG4gICAgICAnYXJpYS1sYWJlbGxlZGJ5JzogX3RoaXMuZ2V0QnV0dG9uSWQodXVpZCksXG4gICAgICBpZDogX3RoaXMuZ2V0UGFuZWxJZCh1dWlkKSxcbiAgICAgIGhpZGRlbjogZXhwYW5kZWQgPyB1bmRlZmluZWQgOiB0cnVlXG4gICAgfTtcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZ2V0SGVhZGluZ0F0dHJpYnV0ZXNcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICByb2xlOiAnaGVhZGluZydcbiAgICB9O1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRCdXR0b25BdHRyaWJ1dGVzXCIsIGZ1bmN0aW9uICh1dWlkLCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKSB7XG4gICAgdmFyIGV4cGFuZGVkID0gZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCAhPT0gbnVsbCAmJiBkYW5nZXJvdXNseVNldEV4cGFuZGVkICE9PSB2b2lkIDAgPyBkYW5nZXJvdXNseVNldEV4cGFuZGVkIDogX3RoaXMuaXNJdGVtRXhwYW5kZWQodXVpZCk7XG5cbiAgICB2YXIgZGlzYWJsZWQgPSBfdGhpcy5pc0l0ZW1EaXNhYmxlZCh1dWlkKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpZDogX3RoaXMuZ2V0QnV0dG9uSWQodXVpZCksXG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBleHBhbmRlZCxcbiAgICAgICdhcmlhLWNvbnRyb2xzJzogX3RoaXMuZ2V0UGFuZWxJZCh1dWlkKSxcbiAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgdGFiSW5kZXg6IDBcbiAgICB9O1xuICB9KTtcblxuICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRQYW5lbElkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgcmV0dXJuIFwiYWNjb3JkaW9uX19wYW5lbC1cIi5jb25jYXQodXVpZCk7XG4gIH0pO1xuXG4gIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldEJ1dHRvbklkXCIsIGZ1bmN0aW9uICh1dWlkKSB7XG4gICAgcmV0dXJuIFwiYWNjb3JkaW9uX19oZWFkaW5nLVwiLmNvbmNhdCh1dWlkKTtcbiAgfSk7XG5cbiAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiYXVnbWVudFwiLCBmdW5jdGlvbiAoYXJncykge1xuICAgIHJldHVybiBuZXcgQWNjb3JkaW9uU3RvcmUoX29iamVjdFNwcmVhZDIoe1xuICAgICAgZXhwYW5kZWQ6IF90aGlzLmV4cGFuZGVkLFxuICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkOiBfdGhpcy5hbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICBhbGxvd1plcm9FeHBhbmRlZDogX3RoaXMuYWxsb3daZXJvRXhwYW5kZWRcbiAgICB9LCBhcmdzKSk7XG4gIH0pO1xuXG4gIHRoaXMuZXhwYW5kZWQgPSBfZXhwYW5kZWQ7XG4gIHRoaXMuYWxsb3dNdWx0aXBsZUV4cGFuZGVkID0gYWxsb3dNdWx0aXBsZUV4cGFuZGVkO1xuICB0aGlzLmFsbG93WmVyb0V4cGFuZGVkID0gYWxsb3daZXJvRXhwYW5kZWQ7XG59O1xuXG52YXIgQ29udGV4dCA9IC8qI19fUFVSRV9fKi9jcmVhdGVDb250ZXh0KG51bGwpO1xudmFyIFByb3ZpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkUHVyZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUHJvdmlkZXIsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFByb3ZpZGVyKTtcblxuICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvdmlkZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwuYXBwbHkoX3N1cGVyLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzdGF0ZVwiLCBuZXcgQWNjb3JkaW9uU3RvcmUoe1xuICAgICAgZXhwYW5kZWQ6IF90aGlzLnByb3BzLnByZUV4cGFuZGVkLFxuICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkOiBfdGhpcy5wcm9wcy5hbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICBhbGxvd1plcm9FeHBhbmRlZDogX3RoaXMucHJvcHMuYWxsb3daZXJvRXhwYW5kZWRcbiAgICB9KSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidG9nZ2xlRXhwYW5kZWRcIiwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZS50b2dnbGVFeHBhbmRlZChrZXkpO1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShfdGhpcy5zdGF0ZS5leHBhbmRlZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlzSXRlbURpc2FibGVkXCIsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5pc0l0ZW1EaXNhYmxlZChrZXkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImlzSXRlbUV4cGFuZGVkXCIsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zdGF0ZS5pc0l0ZW1FeHBhbmRlZChrZXkpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldFBhbmVsQXR0cmlidXRlc1wiLCBmdW5jdGlvbiAoa2V5LCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuZ2V0UGFuZWxBdHRyaWJ1dGVzKGtleSwgZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0SGVhZGluZ0F0dHJpYnV0ZXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gdXVpZDogVVVJRFxuICAgICAgcmV0dXJuIF90aGlzLnN0YXRlLmdldEhlYWRpbmdBdHRyaWJ1dGVzKCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiZ2V0QnV0dG9uQXR0cmlidXRlc1wiLCBmdW5jdGlvbiAoa2V5LCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKSB7XG4gICAgICByZXR1cm4gX3RoaXMuc3RhdGUuZ2V0QnV0dG9uQXR0cmlidXRlcyhrZXksIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByb3ZpZGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBhbGxvd1plcm9FeHBhbmRlZCA9IF90aGlzJHN0YXRlLmFsbG93WmVyb0V4cGFuZGVkLFxuICAgICAgICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZCA9IF90aGlzJHN0YXRlLmFsbG93TXVsdGlwbGVFeHBhbmRlZDtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkOiBhbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICAgICAgYWxsb3daZXJvRXhwYW5kZWQ6IGFsbG93WmVyb0V4cGFuZGVkLFxuICAgICAgICAgIHRvZ2dsZUV4cGFuZGVkOiB0aGlzLnRvZ2dsZUV4cGFuZGVkLFxuICAgICAgICAgIGlzSXRlbURpc2FibGVkOiB0aGlzLmlzSXRlbURpc2FibGVkLFxuICAgICAgICAgIGlzSXRlbUV4cGFuZGVkOiB0aGlzLmlzSXRlbUV4cGFuZGVkLFxuICAgICAgICAgIGdldFBhbmVsQXR0cmlidXRlczogdGhpcy5nZXRQYW5lbEF0dHJpYnV0ZXMsXG4gICAgICAgICAgZ2V0SGVhZGluZ0F0dHJpYnV0ZXM6IHRoaXMuZ2V0SGVhZGluZ0F0dHJpYnV0ZXMsXG4gICAgICAgICAgZ2V0QnV0dG9uQXR0cmlidXRlczogdGhpcy5nZXRCdXR0b25BdHRyaWJ1dGVzXG4gICAgICAgIH1cbiAgICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgbnVsbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFByb3ZpZGVyO1xufShQdXJlQ29tcG9uZW50KTtcblxuX2RlZmluZVByb3BlcnR5KFByb3ZpZGVyLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGFsbG93TXVsdGlwbGVFeHBhbmRlZDogZmFsc2UsXG4gIGFsbG93WmVyb0V4cGFuZGVkOiBmYWxzZVxufSk7XG5cbnZhciBDb25zdW1lciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhDb25zdW1lciwgX1JlYWN0JFB1cmVDb21wb25lbnQyKTtcblxuICB2YXIgX3N1cGVyMiA9IF9jcmVhdGVTdXBlcihDb25zdW1lcik7XG5cbiAgZnVuY3Rpb24gQ29uc3VtZXIoKSB7XG4gICAgdmFyIF90aGlzMjtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25zdW1lcik7XG5cbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBfdGhpczIgPSBfc3VwZXIyLmNhbGwuYXBwbHkoX3N1cGVyMiwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpczIpLCBcInJlbmRlckNoaWxkcmVuXCIsIGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgIHJldHVybiBjb250YWluZXIgPyBfdGhpczIucHJvcHMuY2hpbGRyZW4oY29udGFpbmVyKSA6IG51bGw7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENvbnN1bWVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnRleHQuQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyQ2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb25zdW1lcjtcbn0oUHVyZUNvbXBvbmVudCk7XG5cbnZhciBBY2NvcmRpb24gPSBmdW5jdGlvbiBBY2NvcmRpb24oX3JlZikge1xuICB2YXIgX3JlZiRjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYkY2xhc3NOYW1lID09PSB2b2lkIDAgPyAnYWNjb3JkaW9uJyA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgYWxsb3dNdWx0aXBsZUV4cGFuZGVkID0gX3JlZi5hbGxvd011bHRpcGxlRXhwYW5kZWQsXG4gICAgICBhbGxvd1plcm9FeHBhbmRlZCA9IF9yZWYuYWxsb3daZXJvRXhwYW5kZWQsXG4gICAgICBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsXG4gICAgICBwcmVFeHBhbmRlZCA9IF9yZWYucHJlRXhwYW5kZWQsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNsYXNzTmFtZVwiLCBcImFsbG93TXVsdGlwbGVFeHBhbmRlZFwiLCBcImFsbG93WmVyb0V4cGFuZGVkXCIsIFwib25DaGFuZ2VcIiwgXCJwcmVFeHBhbmRlZFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFByb3ZpZGVyLCB7XG4gICAgcHJlRXhwYW5kZWQ6IHByZUV4cGFuZGVkLFxuICAgIGFsbG93TXVsdGlwbGVFeHBhbmRlZDogYWxsb3dNdWx0aXBsZUV4cGFuZGVkLFxuICAgIGFsbG93WmVyb0V4cGFuZGVkOiBhbGxvd1plcm9FeHBhbmRlZCxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2VcbiAgfSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIFwiZGF0YS1hY2NvcmRpb24tY29tcG9uZW50XCI6IFwiQWNjb3JkaW9uXCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSwgcmVzdCkpKTtcbn07XG5cbnZhciBEaXNwbGF5TmFtZTtcblxuKGZ1bmN0aW9uIChEaXNwbGF5TmFtZSkge1xuICBEaXNwbGF5TmFtZVtcIkFjY29yZGlvblwiXSA9IFwiQWNjb3JkaW9uXCI7XG4gIERpc3BsYXlOYW1lW1wiQWNjb3JkaW9uSXRlbVwiXSA9IFwiQWNjb3JkaW9uSXRlbVwiO1xuICBEaXNwbGF5TmFtZVtcIkFjY29yZGlvbkl0ZW1CdXR0b25cIl0gPSBcIkFjY29yZGlvbkl0ZW1CdXR0b25cIjtcbiAgRGlzcGxheU5hbWVbXCJBY2NvcmRpb25JdGVtSGVhZGluZ1wiXSA9IFwiQWNjb3JkaW9uSXRlbUhlYWRpbmdcIjtcbiAgRGlzcGxheU5hbWVbXCJBY2NvcmRpb25JdGVtUGFuZWxcIl0gPSBcIkFjY29yZGlvbkl0ZW1QYW5lbFwiO1xufSkoRGlzcGxheU5hbWUgfHwgKERpc3BsYXlOYW1lID0ge30pKTtcblxudmFyIERpc3BsYXlOYW1lJDEgPSBEaXNwbGF5TmFtZTtcblxudmFyIERFRkFVTFQgPSAwO1xudmFyIGNvdW50ZXIgPSBERUZBVUxUO1xuZnVuY3Rpb24gbmV4dFV1aWQoKSB7XG4gIHZhciBjdXJyZW50ID0gY291bnRlcjtcbiAgY291bnRlciA9IGNvdW50ZXIgKyAxO1xuICByZXR1cm4gXCJyYWEtXCIuY29uY2F0KGN1cnJlbnQpO1xufVxuZnVuY3Rpb24gcmVzZXROZXh0VXVpZCgpIHtcbiAgY291bnRlciA9IERFRkFVTFQ7XG59IC8vIEhUTUw1IGlkcyBhbGxvdyBhbGwgdW5pY29kZSBjaGFyYWN0ZXJzLCBleGNlcHQgZm9yIEFTQ0lJIHdoaXRlc3BhY2VzXG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktd2hpdGVzcGFjZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcblxudmFyIGlkUmVnZXggPSAvW1xcdTAwMDlcXHUwMDBhXFx1MDAwY1xcdTAwMGRcXHUwMDIwXS9nO1xuZnVuY3Rpb24gYXNzZXJ0VmFsaWRIdG1sSWQoaHRtbElkKSB7XG4gIGlmIChodG1sSWQgPT09ICcnIHx8IGlkUmVnZXgudGVzdChodG1sSWQpKSB7XG4gICAgY29uc29sZS5lcnJvcihcInV1aWQgbXVzdCBiZSBhIHZhbGlkIEhUTUw1IGlkIGJ1dCB3YXMgZ2l2ZW4gXFxcIlwiLmNvbmNhdChodG1sSWQsIFwiXFxcIiwgQVNDSUkgd2hpdGVzcGFjZXMgYXJlIGZvcmJpZGRlblwiKSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBDb250ZXh0JDEgPSAvKiNfX1BVUkVfXyovY3JlYXRlQ29udGV4dChudWxsKTtcblxudmFyIFByb3ZpZGVyJDEgPSBmdW5jdGlvbiBQcm92aWRlcihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICB1dWlkID0gX3JlZi51dWlkLFxuICAgICAgYWNjb3JkaW9uQ29udGV4dCA9IF9yZWYuYWNjb3JkaW9uQ29udGV4dCxcbiAgICAgIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgPSBfcmVmLmRhbmdlcm91c2x5U2V0RXhwYW5kZWQ7XG5cbiAgdmFyIHRvZ2dsZUV4cGFuZGVkID0gZnVuY3Rpb24gdG9nZ2xlRXhwYW5kZWQoKSB7XG4gICAgYWNjb3JkaW9uQ29udGV4dC50b2dnbGVFeHBhbmRlZCh1dWlkKTtcbiAgfTtcblxuICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihhY2NvcmRpb25Db250ZXh0KSB7XG4gICAgdmFyIGV4cGFuZGVkID0gZGFuZ2Vyb3VzbHlTZXRFeHBhbmRlZCAhPT0gbnVsbCAmJiBkYW5nZXJvdXNseVNldEV4cGFuZGVkICE9PSB2b2lkIDAgPyBkYW5nZXJvdXNseVNldEV4cGFuZGVkIDogYWNjb3JkaW9uQ29udGV4dC5pc0l0ZW1FeHBhbmRlZCh1dWlkKTtcbiAgICB2YXIgZGlzYWJsZWQgPSBhY2NvcmRpb25Db250ZXh0LmlzSXRlbURpc2FibGVkKHV1aWQpO1xuICAgIHZhciBwYW5lbEF0dHJpYnV0ZXMgPSBhY2NvcmRpb25Db250ZXh0LmdldFBhbmVsQXR0cmlidXRlcyh1dWlkLCBkYW5nZXJvdXNseVNldEV4cGFuZGVkKTtcbiAgICB2YXIgaGVhZGluZ0F0dHJpYnV0ZXMgPSBhY2NvcmRpb25Db250ZXh0LmdldEhlYWRpbmdBdHRyaWJ1dGVzKHV1aWQpO1xuICAgIHZhciBidXR0b25BdHRyaWJ1dGVzID0gYWNjb3JkaW9uQ29udGV4dC5nZXRCdXR0b25BdHRyaWJ1dGVzKHV1aWQsIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb250ZXh0JDEuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHV1aWQ6IHV1aWQsXG4gICAgICAgIGV4cGFuZGVkOiBleHBhbmRlZCxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICB0b2dnbGVFeHBhbmRlZDogdG9nZ2xlRXhwYW5kZWQsXG4gICAgICAgIHBhbmVsQXR0cmlidXRlczogcGFuZWxBdHRyaWJ1dGVzLFxuICAgICAgICBoZWFkaW5nQXR0cmlidXRlczogaGVhZGluZ0F0dHJpYnV0ZXMsXG4gICAgICAgIGJ1dHRvbkF0dHJpYnV0ZXM6IGJ1dHRvbkF0dHJpYnV0ZXNcbiAgICAgIH1cbiAgICB9LCBjaGlsZHJlbik7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnN1bWVyLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG52YXIgUHJvdmlkZXJXcmFwcGVyID0gZnVuY3Rpb24gUHJvdmlkZXJXcmFwcGVyKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGFjY29yZGlvbkNvbnRleHQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoUHJvdmlkZXIkMSwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBhY2NvcmRpb25Db250ZXh0OiBhY2NvcmRpb25Db250ZXh0XG4gICAgfSkpO1xuICB9KTtcbn07XG52YXIgQ29uc3VtZXIkMSA9IGZ1bmN0aW9uIENvbnN1bWVyKF9yZWYyKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuO1xuXG4gIHZhciByZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGNvbnRhaW5lcikge1xuICAgIHJldHVybiBjb250YWluZXIgPyBjaGlsZHJlbihjb250YWluZXIpIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29udGV4dCQxLkNvbnN1bWVyLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG52YXIgQWNjb3JkaW9uSXRlbSA9IGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW0oX3JlZikge1xuICB2YXIgY3VzdG9tVXVpZCA9IF9yZWYudXVpZCxcbiAgICAgIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQgPSBfcmVmLmRhbmdlcm91c2x5U2V0RXhwYW5kZWQsXG4gICAgICBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICdhY2NvcmRpb25fX2l0ZW0nIDogX3JlZiRjbGFzc05hbWUsXG4gICAgICBhY3RpdmVDbGFzc05hbWUgPSBfcmVmLmFjdGl2ZUNsYXNzTmFtZSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgW1widXVpZFwiLCBcImRhbmdlcm91c2x5U2V0RXhwYW5kZWRcIiwgXCJjbGFzc05hbWVcIiwgXCJhY3RpdmVDbGFzc05hbWVcIl0pO1xuXG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShuZXh0VXVpZCgpKSxcbiAgICAgIF91c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfdXNlU3RhdGUsIDEpLFxuICAgICAgaW5zdGFuY2VVdWlkID0gX3VzZVN0YXRlMlswXTtcblxuICB2YXIgdXVpZCA9IGN1c3RvbVV1aWQgfHwgaW5zdGFuY2VVdWlkO1xuXG4gIHZhciByZW5kZXJDaGlsZHJlbiA9IGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKGl0ZW1Db250ZXh0KSB7XG4gICAgdmFyIGV4cGFuZGVkID0gaXRlbUNvbnRleHQuZXhwYW5kZWQ7XG4gICAgdmFyIGN4ID0gZXhwYW5kZWQgJiYgYWN0aXZlQ2xhc3NOYW1lID8gYWN0aXZlQ2xhc3NOYW1lIDogY2xhc3NOYW1lO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICBcImRhdGEtYWNjb3JkaW9uLWNvbXBvbmVudFwiOiBcIkFjY29yZGlvbkl0ZW1cIixcbiAgICAgIGNsYXNzTmFtZTogY3hcbiAgICB9LCByZXN0KSk7XG4gIH07XG5cbiAgYXNzZXJ0VmFsaWRIdG1sSWQodXVpZCk7XG5cbiAgaWYgKHJlc3QuaWQpIHtcbiAgICBhc3NlcnRWYWxpZEh0bWxJZChyZXN0LmlkKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChQcm92aWRlcldyYXBwZXIsIHtcbiAgICB1dWlkOiB1dWlkLFxuICAgIGRhbmdlcm91c2x5U2V0RXhwYW5kZWQ6IGRhbmdlcm91c2x5U2V0RXhwYW5kZWRcbiAgfSwgLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQ29uc3VtZXIkMSwgbnVsbCwgcmVuZGVyQ2hpbGRyZW4pKTtcbn07XG5cbkFjY29yZGlvbkl0ZW0uZGlzcGxheU5hbWUgPSBEaXNwbGF5TmFtZSQxLkFjY29yZGlvbkl0ZW07XG5cbmZ1bmN0aW9uIGdldENsb3Nlc3RBY2NvcmRpb24oZWwpIHtcbiAgcmV0dXJuIGVsICYmIChlbC5tYXRjaGVzKCdbZGF0YS1hY2NvcmRpb24tY29tcG9uZW50PVwiQWNjb3JkaW9uXCJdJykgPyBlbCA6IGdldENsb3Nlc3RBY2NvcmRpb24oZWwucGFyZW50RWxlbWVudCkpO1xufVxuZnVuY3Rpb24gZ2V0U2libGluZ0J1dHRvbnMoaXRlbSkge1xuICB2YXIgcGFyZW50QWNjb3JkaW9uID0gZ2V0Q2xvc2VzdEFjY29yZGlvbihpdGVtKTtcbiAgcmV0dXJuIHBhcmVudEFjY29yZGlvbiAmJiBBcnJheS5mcm9tKHBhcmVudEFjY29yZGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY2NvcmRpb24tY29tcG9uZW50PVwiQWNjb3JkaW9uSXRlbUJ1dHRvblwiXScpKTtcbn1cbmZ1bmN0aW9uIGZvY3VzRmlyc3RTaWJsaW5nT2YoaXRlbSkge1xuICB2YXIgc2libGluZ3MgPSBnZXRTaWJsaW5nQnV0dG9ucyhpdGVtKSB8fCBbXTtcbiAgdmFyIGZpcnN0ID0gc2libGluZ3NbMF07XG5cbiAgaWYgKGZpcnN0KSB7XG4gICAgZmlyc3QuZm9jdXMoKTtcbiAgfVxufVxuZnVuY3Rpb24gZm9jdXNMYXN0U2libGluZ09mKGl0ZW0pIHtcbiAgdmFyIHNpYmxpbmdzID0gZ2V0U2libGluZ0J1dHRvbnMoaXRlbSkgfHwgW107XG4gIHZhciBsYXN0ID0gc2libGluZ3Nbc2libGluZ3MubGVuZ3RoIC0gMV07XG5cbiAgaWYgKGxhc3QpIHtcbiAgICBsYXN0LmZvY3VzKCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGZvY3VzTmV4dFNpYmxpbmdPZihpdGVtKSB7XG4gIHZhciBzaWJsaW5ncyA9IGdldFNpYmxpbmdCdXR0b25zKGl0ZW0pIHx8IFtdO1xuICB2YXIgY3VycmVudEluZGV4ID0gc2libGluZ3MuaW5kZXhPZihpdGVtKTtcblxuICBpZiAoY3VycmVudEluZGV4ICE9PSAtMSkge1xuICAgIHZhciBuZXh0ID0gc2libGluZ3NbY3VycmVudEluZGV4ICsgMV07XG5cbiAgICBpZiAobmV4dCkge1xuICAgICAgbmV4dC5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZm9jdXNQcmV2aW91c1NpYmxpbmdPZihpdGVtKSB7XG4gIHZhciBzaWJsaW5ncyA9IGdldFNpYmxpbmdCdXR0b25zKGl0ZW0pIHx8IFtdO1xuICB2YXIgY3VycmVudEluZGV4ID0gc2libGluZ3MuaW5kZXhPZihpdGVtKTtcblxuICBpZiAoY3VycmVudEluZGV4ICE9PSAtMSkge1xuICAgIHZhciBwcmV2aW91cyA9IHNpYmxpbmdzW2N1cnJlbnRJbmRleCAtIDFdO1xuXG4gICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICBwcmV2aW91cy5mb2N1cygpO1xuICAgIH1cbiAgfVxufVxuXG52YXIga2V5Y29kZXMgPSB7XG4gIEVORDogJ0VuZCcsXG4gIEVOVEVSOiAnRW50ZXInLFxuICBIT01FOiAnSG9tZScsXG4gIFNQQUNFOiAnICcsXG4gIFNQQUNFX0RFUFJFQ0FURUQ6ICdTcGFjZWJhcicsXG4gIFVQOiAnQXJyb3dVcCcsXG4gIERPV046ICdBcnJvd0Rvd24nLFxuICBMRUZUOiAnQXJyb3dMZWZ0JyxcbiAgUklHSFQ6ICdBcnJvd1JpZ2h0J1xufTtcblxudmFyIEFjY29yZGlvbkl0ZW1CdXR0b24gPSBmdW5jdGlvbiBBY2NvcmRpb25JdGVtQnV0dG9uKF9yZWYpIHtcbiAgdmFyIHRvZ2dsZUV4cGFuZGVkID0gX3JlZi50b2dnbGVFeHBhbmRlZCxcbiAgICAgIF9yZWYkY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmJGNsYXNzTmFtZSA9PT0gdm9pZCAwID8gJ2FjY29yZGlvbl9fYnV0dG9uJyA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJ0b2dnbGVFeHBhbmRlZFwiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgdmFyIGhhbmRsZUtleVByZXNzID0gZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZ0KSB7XG4gICAgdmFyIGtleUNvZGUgPSBldnQua2V5O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IGtleWNvZGVzLkVOVEVSIHx8IGtleUNvZGUgPT09IGtleWNvZGVzLlNQQUNFIHx8IGtleUNvZGUgPT09IGtleWNvZGVzLlNQQUNFX0RFUFJFQ0FURUQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG4gICAgLyogVGhlIGZvbGxvd2luZyBibG9jayBpcyBpZ25vcmVkIGZyb20gdGVzdCBjb3ZlcmFnZSBiZWNhdXNlIGF0IHRpbWVcbiAgICAgKiB0aW1lIG9mIHdyaXRpbmcgSmVzdC9yZWFjdC10ZXN0aW5nLWxpYnJhcnkgY2FuIG5vdCBhc3NlcnQgJ2ZvY3VzJ1xuICAgICAqIGZ1bmN0aW9uYWxpdHkuXG4gICAgICovXG4gICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcblxuXG4gICAgaWYgKGV2dC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgIGNhc2Uga2V5Y29kZXMuSE9NRTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZvY3VzRmlyc3RTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBrZXljb2Rlcy5FTkQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb2N1c0xhc3RTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBrZXljb2Rlcy5MRUZUOlxuICAgICAgICBjYXNlIGtleWNvZGVzLlVQOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9jdXNQcmV2aW91c1NpYmxpbmdPZihldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIGtleWNvZGVzLlJJR0hUOlxuICAgICAgICBjYXNlIGtleWNvZGVzLkRPV046XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb2N1c05leHRTaWJsaW5nT2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlmIChyZXN0LmlkKSB7XG4gICAgYXNzZXJ0VmFsaWRIdG1sSWQocmVzdC5pZCk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gIH0sIHJlc3QsIHtcbiAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgIHRhYkluZGV4OiAwLFxuICAgIG9uQ2xpY2s6IHRvZ2dsZUV4cGFuZGVkLFxuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5UHJlc3MsXG4gICAgXCJkYXRhLWFjY29yZGlvbi1jb21wb25lbnRcIjogXCJBY2NvcmRpb25JdGVtQnV0dG9uXCJcbiAgfSkpO1xufTtcblxudmFyIEFjY29yZGlvbkl0ZW1CdXR0b25XcmFwcGVyID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbUJ1dHRvbldyYXBwZXIocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnN1bWVyJDEsIG51bGwsIGZ1bmN0aW9uIChpdGVtQ29udGV4dCkge1xuICAgIHZhciB0b2dnbGVFeHBhbmRlZCA9IGl0ZW1Db250ZXh0LnRvZ2dsZUV4cGFuZGVkLFxuICAgICAgICBidXR0b25BdHRyaWJ1dGVzID0gaXRlbUNvbnRleHQuYnV0dG9uQXR0cmlidXRlcztcbiAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoQWNjb3JkaW9uSXRlbUJ1dHRvbiwgX2V4dGVuZHMoe1xuICAgICAgdG9nZ2xlRXhwYW5kZWQ6IHRvZ2dsZUV4cGFuZGVkXG4gICAgfSwgcHJvcHMsIGJ1dHRvbkF0dHJpYnV0ZXMpKTtcbiAgfSk7XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICdhY2NvcmRpb25fX2hlYWRpbmcnLFxuICAnYXJpYS1sZXZlbCc6IDNcbn07XG52YXIgU1BFQ19FUlJPUiA9IFwiQWNjb3JkaW9uSXRlbUJ1dHRvbiBtYXkgY29udGFpbiBvbmx5IG9uZSBjaGlsZCBlbGVtZW50LCB3aGljaCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIEFjY29yZGlvbkl0ZW1CdXR0b24uXFxuXFxuRnJvbSB0aGUgV0FJLUFSSUEgc3BlYyAoaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLXByYWN0aWNlcy0xLjEvI2FjY29yZGlvbik6XFxuXFxuXFx1MjAxQ1RoZSBidXR0b24gZWxlbWVudCBpcyB0aGUgb25seSBlbGVtZW50IGluc2lkZSB0aGUgaGVhZGluZyBlbGVtZW50LiBUaGF0IGlzLCBpZiB0aGVyZSBhcmUgb3RoZXIgdmlzdWFsbHkgcGVyc2lzdGVudCBlbGVtZW50cywgdGhleSBhcmUgbm90IGluY2x1ZGVkIGluc2lkZSB0aGUgaGVhZGluZyBlbGVtZW50LlxcdTIwMURcXG5cXG5cIjtcbnZhciBBY2NvcmRpb25JdGVtSGVhZGluZyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFjY29yZGlvbkl0ZW1IZWFkaW5nLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBY2NvcmRpb25JdGVtSGVhZGluZyk7XG5cbiAgZnVuY3Rpb24gQWNjb3JkaW9uSXRlbUhlYWRpbmcoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjY29yZGlvbkl0ZW1IZWFkaW5nKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsLmFwcGx5KF9zdXBlciwgW3RoaXNdLmNvbmNhdChhcmdzKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVmXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0UmVmXCIsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIF90aGlzLnJlZiA9IHJlZjtcbiAgICB9KTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhBY2NvcmRpb25JdGVtSGVhZGluZywgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIEFjY29yZGlvbkl0ZW1IZWFkaW5nLlZBTElEQVRFKHRoaXMucmVmKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBBY2NvcmRpb25JdGVtSGVhZGluZy5WQUxJREFURSh0aGlzLnJlZik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgICAgICBcImRhdGEtYWNjb3JkaW9uLWNvbXBvbmVudFwiOiBcIkFjY29yZGlvbkl0ZW1IZWFkaW5nXCJcbiAgICAgIH0sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgcmVmOiB0aGlzLnNldFJlZlxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcIlZBTElEQVRFXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIFZBTElEQVRFKHJlZikge1xuICAgICAgaWYgKHJlZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigncmVmIGlzIHVuZGVmaW5lZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShyZWYuY2hpbGRFbGVtZW50Q291bnQgPT09IDEgJiYgcmVmLmZpcnN0RWxlbWVudENoaWxkICYmIHJlZi5maXJzdEVsZW1lbnRDaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWNjb3JkaW9uLWNvbXBvbmVudCcpID09PSAnQWNjb3JkaW9uSXRlbUJ1dHRvbicpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTUEVDX0VSUk9SKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQWNjb3JkaW9uSXRlbUhlYWRpbmc7XG59KFB1cmVDb21wb25lbnQpO1xuXG5fZGVmaW5lUHJvcGVydHkoQWNjb3JkaW9uSXRlbUhlYWRpbmcsIFwiZGVmYXVsdFByb3BzXCIsIGRlZmF1bHRQcm9wcyk7XG5cbnZhciBBY2NvcmRpb25JdGVtSGVhZGluZ1dyYXBwZXIgPSBmdW5jdGlvbiBBY2NvcmRpb25JdGVtSGVhZGluZ1dyYXBwZXIocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KENvbnN1bWVyJDEsIG51bGwsIGZ1bmN0aW9uIChpdGVtQ29udGV4dCkge1xuICAgIHZhciBoZWFkaW5nQXR0cmlidXRlcyA9IGl0ZW1Db250ZXh0LmhlYWRpbmdBdHRyaWJ1dGVzO1xuXG4gICAgaWYgKHByb3BzLmlkKSB7XG4gICAgICBhc3NlcnRWYWxpZEh0bWxJZChwcm9wcy5pZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEFjY29yZGlvbkl0ZW1IZWFkaW5nLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIGhlYWRpbmdBdHRyaWJ1dGVzKSk7XG4gIH0pO1xufTtcblxuQWNjb3JkaW9uSXRlbUhlYWRpbmdXcmFwcGVyLmRpc3BsYXlOYW1lID0gRGlzcGxheU5hbWUkMS5BY2NvcmRpb25JdGVtSGVhZGluZztcblxudmFyIEFjY29yZGlvbkl0ZW1QYW5lbCA9IGZ1bmN0aW9uIEFjY29yZGlvbkl0ZW1QYW5lbChfcmVmKSB7XG4gIHZhciBfcmVmJGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZiRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICdhY2NvcmRpb25fX3BhbmVsJyA6IF9yZWYkY2xhc3NOYW1lLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbXCJjbGFzc05hbWVcIiwgXCJpZFwiXSk7XG5cbiAgdmFyIHJlbmRlckNoaWxkcmVuID0gZnVuY3Rpb24gcmVuZGVyQ2hpbGRyZW4oX3JlZjIpIHtcbiAgICB2YXIgcGFuZWxBdHRyaWJ1dGVzID0gX3JlZjIucGFuZWxBdHRyaWJ1dGVzO1xuXG4gICAgaWYgKGlkKSB7XG4gICAgICBhc3NlcnRWYWxpZEh0bWxJZChpZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgIFwiZGF0YS1hY2NvcmRpb24tY29tcG9uZW50XCI6IFwiQWNjb3JkaW9uSXRlbVBhbmVsXCIsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0sIHJlc3QsIHBhbmVsQXR0cmlidXRlcykpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciQxLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG52YXIgQWNjb3JkaW9uSXRlbVN0YXRlID0gZnVuY3Rpb24gQWNjb3JkaW9uSXRlbVN0YXRlKF9yZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcblxuICB2YXIgcmVuZGVyQ2hpbGRyZW4gPSBmdW5jdGlvbiByZW5kZXJDaGlsZHJlbihpdGVtQ29udGV4dCkge1xuICAgIHZhciBleHBhbmRlZCA9IGl0ZW1Db250ZXh0LmV4cGFuZGVkLFxuICAgICAgICBkaXNhYmxlZCA9IGl0ZW1Db250ZXh0LmRpc2FibGVkO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgY2hpbGRyZW4oe1xuICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChDb25zdW1lciQxLCBudWxsLCByZW5kZXJDaGlsZHJlbik7XG59O1xuXG5leHBvcnQgeyBBY2NvcmRpb24sIEFjY29yZGlvbkl0ZW0sIEFjY29yZGlvbkl0ZW1CdXR0b25XcmFwcGVyIGFzIEFjY29yZGlvbkl0ZW1CdXR0b24sIEFjY29yZGlvbkl0ZW1IZWFkaW5nV3JhcHBlciBhcyBBY2NvcmRpb25JdGVtSGVhZGluZywgQWNjb3JkaW9uSXRlbVBhbmVsLCBBY2NvcmRpb25JdGVtU3RhdGUsIHJlc2V0TmV4dFV1aWQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
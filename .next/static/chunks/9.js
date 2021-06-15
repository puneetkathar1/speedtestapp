(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[9],{

/***/ "./components/ContactForm/ContactFrom.js":
/*!***********************************************!*\
  !*** ./components/ContactForm/ContactFrom.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var _UI_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../UI/FormControl/FormControl */ "./components/UI/FormControl/FormControl.js");







var _this = undefined,
    _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\ContactForm\\ContactFrom.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var ContactForm = function ContactForm() {
  _s();

  var _errors$email, _errors$email2, _errors$phone, _errors$phone2;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])({
    mode: 'onChange'
  }),
      control = _useForm.control,
      errors = _useForm.errors,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = function onSubmit(data) {
    return console.log(data);
  };

  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_UI_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Your message",
    htmlFor: "message",
    error: errors.message && __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 34
      }
    }, "This field is required!"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a.TextArea, {
      rows: 5,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }),
    id: "message",
    name: "message",
    defaultValue: "",
    control: control,
    rules: {
      required: true
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gutter: 30,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_UI_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Your email",
    htmlFor: "email",
    error: errors.email && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, ((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.type) === 'required' && __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, "This field is required!"), ((_errors$email2 = errors.email) === null || _errors$email2 === void 0 ? void 0 : _errors$email2.type) === 'pattern' && __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, "Please enter a valid email address!")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 19
      }
    }),
    type: "email",
    id: "email",
    name: "email",
    defaultValue: "",
    control: control,
    rules: {
      required: true,
      pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
    md: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_UI_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Your contact number",
    htmlFor: "phone",
    error: errors.phone && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, ((_errors$phone = errors.phone) === null || _errors$phone === void 0 ? void 0 : _errors$phone.type) === 'required' && __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, "This field is required!"), ((_errors$phone2 = errors.phone) === null || _errors$phone2 === void 0 ? void 0 : _errors$phone2.type) === 'pattern' && __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, "Please enter your valid number!")),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    as: __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 19
      }
    }),
    defaultValue: "",
    control: control,
    id: "phone",
    name: "phone",
    rules: {
      required: true,
      pattern: /^[0-9]*$/
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  })))), __jsx(_UI_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["Controller"], {
    name: "cookie",
    onChange: function onChange(_ref) {
      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 1),
          e = _ref2[0];

      return e.target.checked;
    },
    as: __jsx(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, "Save my email in the browser fro the next time I contact"),
    control: control,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), __jsx(_UI_FormControl_FormControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "primary",
    htmlType: "submit",
    size: "large",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, "Submit")));
};

_s(ContactForm, "WvwSMpdjIzRpw3iCXvvZsWA4REc=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"]];
});

_c = ContactForm;
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

var _c;

$RefreshReg$(_c, "ContactForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/UI/FormControl/FormControl.js":
/*!**************************************************!*\
  !*** ./components/UI/FormControl/FormControl.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HtmlLabel_HtmlLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HtmlLabel/HtmlLabel */ "./components/UI/HtmlLabel/HtmlLabel.js");
/* harmony import */ var _FormControl_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormControl.style */ "./components/UI/FormControl/FormControl.style.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\FormControl\\FormControl.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FormControl = function FormControl(_ref) {
  var className = _ref.className,
      label = _ref.label,
      labelTag = _ref.labelTag,
      htmlFor = _ref.htmlFor,
      children = _ref.children,
      error = _ref.error;
  var addAllClasses = ['form-control'];

  if (error) {
    addAllClasses.push('has-error');
  }

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(_FormControl_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: addAllClasses.join(' '),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, label && __jsx(_HtmlLabel_HtmlLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "field-label",
    as: labelTag,
    htmlFor: htmlFor,
    content: label,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), children, error && __jsx("div", {
    className: "feedback",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, error));
};

_c = FormControl;
FormControl.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelTag: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  htmlFor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (FormControl);

var _c;

$RefreshReg$(_c, "FormControl");

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

/***/ "./components/UI/FormControl/FormControl.style.js":
/*!********************************************************!*\
  !*** ./components/UI/FormControl/FormControl.style.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "./node_modules/@styled-system/theme-get/dist/index.esm.js");


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "FormControlstyle__Wrapper",
  componentId: "n7afmm-0"
})(["margin-bottom:24px;.field-label{display:block;color:", ";font-size:15px;line-height:18px;font-weight:600;margin-bottom:15px;}.ant-input,.ant-picker,.ant-input-number,.ant-input-password{width:100%;min-height:48px;border-radius:3px;border-color:", ";&:focus,&.ant-input-focused,&.ant-picker-focused,&.ant-input-number-focused,&.ant-input-password-focused{box-shadow:0 0 0 1px rgba(0,132,137,0.2);}}.ant-checkbox-wrapper{.ant-checkbox{+ span{font-size:15px;font-weight:700;color:", ";line-height:1;}.ant-checkbox-inner{border-radius:0;border-color:", ";}&.ant-checkbox-checked{.ant-checkbox-inner{border-color:", ";background-color:", ";}}}}.ant-input-number{max-width:100px;.ant-input-number-input{min-height:48px;}&:hover{border-color:", ";}}.ant-input-number-handler:hover{.ant-input-number-handler-up-inner,.ant-input-number-handler-down-inner{color:", ";}}.ant-picker{&:hover{border-color:", ";}}.ant-select{&.ant-select-single:not(.ant-select-customize-input){width:100%;.ant-select-selector{border-radius:3px;border-color:", ";min-height:48px;.ant-select-selection-search-input{min-height:48px;}.ant-select-selection-item{display:flex;align-items:center;}}}&.ant-select-focused{&.ant-select-single:not(.ant-select-customize-input){.ant-select-selector{box-shadow:0 0 0 1px rgba(0,132,137,0.2);}}}}&.has-error{.ant-input,.ant-input-password{border-color:", ";}.feedback{color:", ";}.ant-input-password{.ant-input{border-color:transparent;}}}.ant-input-password{.ant-input{min-height:auto;border-radius:initial;border-color:transparent;&:focus{box-shadow:none;}}}.ant-radio-group-solid{.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){border-color:", ";background-color:", ";&::before{content:none;}&:hover{color:#fff;&::before{content:none;}}}.ant-radio-button-wrapper{&:hover{color:", ";}}}button[type='submit']{border-radius:3px;height:47px;border-color:", ";background-color:", ";font-size:15px;font-weight:700;text-transform:capitalize;padding-left:28px;padding-right:28px;line-height:1;&::after{content:none;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.1', '#909090'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('error.0', '#F9503D'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('error.0', '#F9503D'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('primary.0', '#008489'));
/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

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

/***/ "./components/UI/HtmlLabel/HtmlLabel.js":
/*!**********************************************!*\
  !*** ./components/UI/HtmlLabel/HtmlLabel.js ***!
  \**********************************************/
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



var _excluded = ["htmlFor", "content"];

var _this = undefined,
    _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\HtmlLabel\\HtmlLabel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var LabelWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])('label').withConfig({
  displayName: "HtmlLabel__LabelWrapper",
  componentId: "sc-1fmiocp-0"
})(_Base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_Base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Heading'));

var HtmlLabel = function HtmlLabel(_ref) {
  var htmlFor = _ref.htmlFor,
      content = _ref.content,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);

  return __jsx(LabelWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    htmlFor: htmlFor
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), content);
};

_c = HtmlLabel;
HtmlLabel.propTypes = _objectSpread({
  htmlFor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _Base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
/* harmony default export */ __webpack_exports__["default"] = (HtmlLabel);

var _c;

$RefreshReg$(_c, "HtmlLabel");

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

/***/ "./container/Agent/AccountDetails/AgentContact.js":
/*!********************************************************!*\
  !*** ./container/Agent/AccountDetails/AgentContact.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/Heading/Heading */ "./components/UI/Heading/Heading.js");
/* harmony import */ var components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Text/Text */ "./components/UI/Text/Text.js");
/* harmony import */ var components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Loader/Loader */ "./components/Loader/Loader.js");
/* harmony import */ var components_ContactForm_ContactFrom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ContactForm/ContactFrom */ "./components/ContactForm/ContactFrom.js");
/* harmony import */ var _AgentDetails_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AgentDetails.style */ "./container/Agent/AccountDetails/AgentDetails.style.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Agent\\AccountDetails\\AgentContact.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var AgentContact = function AgentContact(props) {
  var processedData = props.processedData,
      loading = props.loading;
  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_8___default()(processedData) || loading) return __jsx(components_Loader_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 49
    }
  });
  var _processedData$ = processedData[0],
      agent_location = _processedData$.agent_location,
      cell_number = _processedData$.cell_number,
      email = _processedData$.email;
  return __jsx(_AgentDetails_style__WEBPACK_IMPORTED_MODULE_7__["AgentContactWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    content: "Send Message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    gutter: 30,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    lg: 16,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(components_ContactForm_ContactFrom__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  })), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    lg: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_AgentDetails_style__WEBPACK_IMPORTED_MODULE_7__["ContactDetails"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h3",
    content: "Phone No",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx(components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: cell_number,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h3",
    content: "Email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx(components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    as: "h3",
    content: "Address",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), __jsx(components_UI_Text_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    content: agent_location.formattedAddress,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })))));
};

_c = AgentContact;
/* harmony default export */ __webpack_exports__["default"] = (AgentContact);

var _c;

$RefreshReg$(_c, "AgentContact");

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

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var EyeInvisibleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { "tag": "path", "attrs": { "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, "name": "eye-invisible", "theme": "outlined" };
exports.default = EyeInvisibleOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/EyeOutlined.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/EyeOutlined.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var EyeOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };
exports.default = EyeOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/SearchOutlined.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/SearchOutlined.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", { value: true });
var SearchOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
exports.default = SearchOutlined;


/***/ }),

/***/ "./node_modules/@ant-design/icons/EyeInvisibleOutlined.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ant-design/icons/EyeInvisibleOutlined.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _EyeInvisibleOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/EyeInvisibleOutlined */ "./node_modules/@ant-design/icons/lib/icons/EyeInvisibleOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _EyeInvisibleOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/EyeOutlined.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ant-design/icons/EyeOutlined.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _EyeOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/EyeOutlined */ "./node_modules/@ant-design/icons/lib/icons/EyeOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _EyeOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/SearchOutlined.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ant-design/icons/SearchOutlined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _SearchOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/SearchOutlined */ "./node_modules/@ant-design/icons/lib/icons/SearchOutlined.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _SearchOutlined;
  exports.default = _default;
  module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/EyeInvisibleOutlined.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/EyeInvisibleOutlined.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _EyeInvisibleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/EyeInvisibleOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var EyeInvisibleOutlined = function EyeInvisibleOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _EyeInvisibleOutlined.default
  }));
};

EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';

var _default = /*#__PURE__*/React.forwardRef(EyeInvisibleOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/EyeOutlined.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/EyeOutlined.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _EyeOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/EyeOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/EyeOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var EyeOutlined = function EyeOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _EyeOutlined.default
  }));
};

EyeOutlined.displayName = 'EyeOutlined';

var _default = /*#__PURE__*/React.forwardRef(EyeOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/SearchOutlined.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/SearchOutlined.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _SearchOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/SearchOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/SearchOutlined.js"));

var _AntdIcon = _interopRequireDefault(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
var SearchOutlined = function SearchOutlined(props, ref) {
  return /*#__PURE__*/React.createElement(_AntdIcon.default, Object.assign({}, props, {
    ref: ref,
    icon: _SearchOutlined.default
  }));
};

SearchOutlined.displayName = 'SearchOutlined';

var _default = /*#__PURE__*/React.forwardRef(SearchOutlined);

exports.default = _default;

/***/ }),

/***/ "./node_modules/antd/lib/_util/raf.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/_util/raf.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wrapperRaf;

var _raf = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/raf */ "./node_modules/rc-util/lib/raf.js"));

var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0, _raf["default"])(internalCallback);
    }
  }

  ids[myId] = (0, _raf["default"])(internalCallback);
  return myId;
}

wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;

  _raf["default"].cancel(ids[pid]);

  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage

/***/ }),

/***/ "./node_modules/antd/lib/_util/unreachableException.js":
/*!*************************************************************!*\
  !*** ./node_modules/antd/lib/_util/unreachableException.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var UnreachableException = function UnreachableException(value) {
  (0, _classCallCheck2["default"])(this, UnreachableException);
  return new Error("unreachable case: ".concat(JSON.stringify(value)));
};

exports["default"] = UnreachableException;

/***/ }),

/***/ "./node_modules/antd/lib/_util/wave.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/_util/wave.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _dynamicCSS = __webpack_require__(/*! rc-util/lib/Dom/dynamicCSS */ "./node_modules/rc-util/lib/Dom/dynamicCSS.js");

var _ref2 = __webpack_require__(/*! rc-util/lib/ref */ "./node_modules/rc-util/lib/ref.js");

var _raf = _interopRequireDefault(__webpack_require__(/*! ./raf */ "./node_modules/antd/lib/_util/raf.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _reactNode = __webpack_require__(/*! ./reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var styleForPseudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {
  if (false) {}

  return !element || element.offsetParent === null || element.hidden;
}

function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);

  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }

  return true;
}

var Wave = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Wave, _React$Component);

  var _super = (0, _createSuper2["default"])(Wave);

  function Wave() {
    var _this;

    (0, _classCallCheck2["default"])(this, Wave);
    _this = _super.apply(this, arguments);
    _this.containerRef = /*#__PURE__*/React.createRef();
    _this.animationStart = false;
    _this.destroyed = false;

    _this.onClick = function (node, waveColor) {
      var _a, _b;

      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          extraNode = _assertThisInitialize.extraNode;

      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = "".concat(getPrefixCls(''), "-click-animating-node");

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparent or grey

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        extraNode.style.borderColor = waveColor;
        var nodeRoot = ((_a = node.getRootNode) === null || _a === void 0 ? void 0 : _a.call(node)) || node.ownerDocument;
        var nodeBody = nodeRoot instanceof Document ? nodeRoot.body : (_b = nodeRoot.firstChild) !== null && _b !== void 0 ? _b : nodeRoot;
        styleForPseudo = (0, _dynamicCSS.updateCSS)("\n      [".concat(getPrefixCls(''), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(''), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }"), 'antd-wave', {
          csp: _this.csp,
          attachTo: nodeBody
        });
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      ['transition', 'animation'].forEach(function (name) {
        node.addEventListener("".concat(name, "start"), _this.onTransitionStart);
        node.addEventListener("".concat(name, "end"), _this.onTransitionEnd);
      });
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroyed) {
        return;
      }

      var node = _this.containerRef.current;

      if (!e || e.target !== node || _this.animationStart) {
        return;
      }

      _this.resetEffect(node);
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);

        _raf["default"].cancel(_this.animationStartId);

        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = (0, _raf["default"])(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      if (! /*#__PURE__*/React.isValidElement(children)) return children;
      var ref = _this.containerRef;

      if ((0, _ref2.supportRef)(children)) {
        ref = (0, _ref2.composeRef)(children.ref, _this.containerRef);
      }

      return (0, _reactNode.cloneElement)(children, {
        ref: ref
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Wave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = this.containerRef.current;

      if (!node || node.nodeType !== 1) {
        return;
      }

      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }

      this.destroyed = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var getPrefixCls = this.context.getPrefixCls;
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? "".concat(getPrefixCls(''), "-click-animating") : "".concat(getPrefixCls(''), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      var _this2 = this;

      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

      if (styleForPseudo) {
        styleForPseudo.innerHTML = '';
      }

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      ['transition', 'animation'].forEach(function (name) {
        node.removeEventListener("".concat(name, "start"), _this2.onTransitionStart);
        node.removeEventListener("".concat(name, "end"), _this2.onTransitionEnd);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderWave);
    }
  }]);
  return Wave;
}(React.Component);

exports["default"] = Wave;
Wave.contextType = _configProvider.ConfigContext;

/***/ }),

/***/ "./node_modules/antd/lib/button/LoadingIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/LoadingIcon.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcMotion = _interopRequireDefault(__webpack_require__(/*! rc-motion */ "./node_modules/rc-motion/es/index.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/@ant-design/icons/LoadingOutlined.js"));

var getCollapsedWidth = function getCollapsedWidth() {
  return {
    width: 0,
    opacity: 0,
    transform: 'scale(0)'
  };
};

var getRealWidth = function getRealWidth(node) {
  return {
    width: node.scrollWidth,
    opacity: 1,
    transform: 'scale(1)'
  };
};

var LoadingIcon = function LoadingIcon(_ref) {
  var prefixCls = _ref.prefixCls,
      loading = _ref.loading,
      existIcon = _ref.existIcon;
  var visible = !!loading;

  if (existIcon) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(prefixCls, "-loading-icon")
    }, /*#__PURE__*/_react["default"].createElement(_LoadingOutlined["default"], null));
  }

  return /*#__PURE__*/_react["default"].createElement(_rcMotion["default"], {
    visible: visible // We do not really use this motionName
    ,
    motionName: "".concat(prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, function (_ref2, ref) {
    var className = _ref2.className,
        style = _ref2.style;
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: "".concat(prefixCls, "-loading-icon"),
      style: style,
      ref: ref
    }, /*#__PURE__*/_react["default"].createElement(_LoadingOutlined["default"], {
      className: className
    }));
  });
};

var _default = LoadingIcon;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/button/button-group.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/button-group.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _unreachableException = _interopRequireDefault(__webpack_require__(/*! ../_util/unreachableException */ "./node_modules/antd/lib/_util/unreachableException.js"));

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

var ButtonGroup = function ButtonGroup(props) {
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';
        break;

      case 'middle':
      case undefined:
        break;

      default:
        // eslint-disable-next-line no-console
        console.warn(new _unreachableException["default"](size));
    }

    var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
      className: classes
    }));
  });
};

var _default = ButtonGroup;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/button/button.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/button/button.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertLegacyProps = convertLegacyProps;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/omit */ "./node_modules/rc-util/lib/omit.js"));

var _buttonGroup = _interopRequireDefault(__webpack_require__(/*! ./button-group */ "./node_modules/antd/lib/button/button-group.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _wave = _interopRequireDefault(__webpack_require__(/*! ../_util/wave */ "./node_modules/antd/lib/_util/wave.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _LoadingIcon = _interopRequireDefault(__webpack_require__(/*! ./LoadingIcon */ "./node_modules/antd/lib/button/LoadingIcon.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
/* eslint-disable react/button-has-type */


var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
}

function isUnborderedButtonType(type) {
  return type === 'text' || type === 'link';
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return (0, _reactNode.cloneElement)(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return /*#__PURE__*/React.createElement("span", null, child);
  }

  return child;
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  React.Children.forEach(children, function (child) {
    var type = (0, _typeof2["default"])(child);
    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return React.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}

var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'link', 'text');
var ButtonShapes = (0, _type.tuple)('circle', 'round');
var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');

function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }

  return {
    type: type
  };
}

var InternalButton = function InternalButton(props, ref) {
  var _classNames;

  var _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      customizePrefixCls = props.prefixCls,
      type = props.type,
      danger = props.danger,
      shape = props.shape,
      customizeSize = props.size,
      className = props.className,
      children = props.children,
      icon = props.icon,
      _props$ghost = props.ghost,
      ghost = _props$ghost === void 0 ? false : _props$ghost,
      _props$block = props.block,
      block = _props$block === void 0 ? false : _props$block,
      _props$htmlType = props.htmlType,
      htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
      rest = __rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block", "htmlType"]);

  var size = React.useContext(_SizeContext["default"]);

  var _React$useState = React.useState(!!loading),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      innerLoading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      hasTwoCNChar = _React$useState4[0],
      setHasTwoCNChar = _React$useState4[1];

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton,
      direction = _React$useContext.direction;

  var buttonRef = ref || /*#__PURE__*/React.createRef();
  var delayTimeoutRef = React.useRef();

  var isNeedInserted = function isNeedInserted() {
    return React.Children.count(children) === 1 && !icon && !isUnborderedButtonType(type);
  };

  var fixTwoCNChar = function fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }

    var buttonText = buttonRef.current.textContent;

    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }; // =============== Update Loading ===============


  var loadingOrDelay;

  if ((0, _typeof2["default"])(loading) === 'object' && loading.delay) {
    loadingOrDelay = loading.delay || true;
  } else {
    loadingOrDelay = !!loading;
  }

  React.useEffect(function () {
    clearTimeout(delayTimeoutRef.current);

    if (typeof loadingOrDelay === 'number') {
      delayTimeoutRef.current = window.setTimeout(function () {
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
  }, [loadingOrDelay]);
  React.useEffect(fixTwoCNChar, [buttonRef]);

  var handleClick = function handleClick(e) {
    var _a;

    var onClick = props.onClick,
        disabled = props.disabled; // https://github.com/ant-design/ant-design/issues/30207

    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }

    (_a = onClick) === null || _a === void 0 ? void 0 : _a(e);
  };

  (0, _devWarning["default"])(!(typeof icon === 'string' && icon.length > 2), 'Button', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));
  (0, _devWarning["default"])(!(ghost && isUnborderedButtonType(type)), 'Button', "`link` or `text` button can't be a `ghost` button.");
  var prefixCls = getPrefixCls('btn', customizePrefixCls);
  var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
  // small => sm

  var sizeCls = '';

  switch (customizeSize || size) {
    case 'large':
      sizeCls = 'lg';
      break;

    case 'small':
      sizeCls = 'sm';
      break;

    default:
      break;
  }

  var iconType = innerLoading ? 'loading' : icon;
  var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type), type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(shape), shape), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && !!iconType), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-background-ghost"), ghost && !isUnborderedButtonType(type)), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-loading"), innerLoading), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-block"), block), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  var iconNode = icon && !innerLoading ? icon : /*#__PURE__*/React.createElement(_LoadingIcon["default"], {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  });
  var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;
  var linkButtonRestProps = (0, _omit["default"])(rest, ['navigate']);

  if (linkButtonRestProps.href !== undefined) {
    return /*#__PURE__*/React.createElement("a", (0, _extends2["default"])({}, linkButtonRestProps, {
      className: classes,
      onClick: handleClick,
      ref: buttonRef
    }), iconNode, kids);
  }

  var buttonNode = /*#__PURE__*/React.createElement("button", (0, _extends2["default"])({}, rest, {
    type: htmlType,
    className: classes,
    onClick: handleClick,
    ref: buttonRef
  }), iconNode, kids);

  if (isUnborderedButtonType(type)) {
    return buttonNode;
  }

  return /*#__PURE__*/React.createElement(_wave["default"], null, buttonNode);
};

var Button = /*#__PURE__*/React.forwardRef(InternalButton);
Button.displayName = 'Button';
Button.Group = _buttonGroup["default"];
Button.__ANT_BUTTON = true;
var _default = Button;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/button/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/button/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _button = _interopRequireDefault(__webpack_require__(/*! ./button */ "./node_modules/antd/lib/button/button.js"));

var _default = _button["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/Checkbox.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/Checkbox.js ***!
  \****************************************************/
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcCheckbox = _interopRequireDefault(__webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js"));

var _Group = __webpack_require__(/*! ./Group */ "./node_modules/antd/lib/checkbox/Group.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

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

var InternalCheckbox = function InternalCheckbox(_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      children = _a.children,
      _a$indeterminate = _a.indeterminate,
      indeterminate = _a$indeterminate === void 0 ? false : _a$indeterminate,
      style = _a.style,
      onMouseEnter = _a.onMouseEnter,
      onMouseLeave = _a.onMouseLeave,
      _a$skipGroup = _a.skipGroup,
      skipGroup = _a$skipGroup === void 0 ? false : _a$skipGroup,
      restProps = __rest(_a, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var checkboxGroup = React.useContext(_Group.GroupContext);
  var prevValue = React.useRef(restProps.value);
  React.useEffect(function () {
    checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
    (0, _devWarning["default"])('checked' in restProps || !!checkboxGroup || !('value' in restProps), 'Checkbox', '`value` is not a valid prop, do you mean `checked`?');
  }, []);
  React.useEffect(function () {
    if (skipGroup) {
      return;
    }

    if (restProps.value !== prevValue.current) {
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(prevValue.current);
      checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.registerValue(restProps.value);
    }

    return function () {
      return checkboxGroup === null || checkboxGroup === void 0 ? void 0 : checkboxGroup.cancelValue(restProps.value);
    };
  }, [restProps.value]);
  var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
  var checkboxProps = (0, _extends2["default"])({}, restProps);

  if (checkboxGroup && !skipGroup) {
    checkboxProps.onChange = function () {
      if (restProps.onChange) {
        restProps.onChange.apply(restProps, arguments);
      }

      if (checkboxGroup.toggleOption) {
        checkboxGroup.toggleOption({
          label: children,
          value: restProps.value
        });
      }
    };

    checkboxProps.name = checkboxGroup.name;
    checkboxProps.checked = checkboxGroup.value.indexOf(restProps.value) !== -1;
    checkboxProps.disabled = restProps.disabled || checkboxGroup.disabled;
  }

  var classString = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), _classNames), className);
  var checkboxClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    React.createElement("label", {
      className: classString,
      style: style,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], (0, _extends2["default"])({}, checkboxProps, {
      prefixCls: prefixCls,
      className: checkboxClass,
      ref: ref
    })), children !== undefined && /*#__PURE__*/React.createElement("span", null, children))
  );
};

var Checkbox = /*#__PURE__*/React.forwardRef(InternalCheckbox);
Checkbox.displayName = 'Checkbox';
var _default = Checkbox;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/Group.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/Group.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GroupContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/omit */ "./node_modules/rc-util/lib/omit.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! ./Checkbox */ "./node_modules/antd/lib/checkbox/Checkbox.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

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

var GroupContext = /*#__PURE__*/React.createContext(null);
exports.GroupContext = GroupContext;

var InternalCheckboxGroup = function InternalCheckboxGroup(_a, ref) {
  var defaultValue = _a.defaultValue,
      children = _a.children,
      _a$options = _a.options,
      options = _a$options === void 0 ? [] : _a$options,
      customizePrefixCls = _a.prefixCls,
      className = _a.className,
      style = _a.style,
      onChange = _a.onChange,
      restProps = __rest(_a, ["defaultValue", "children", "options", "prefixCls", "className", "style", "onChange"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = React.useState(restProps.value || defaultValue || []),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      registeredValues = _React$useState4[0],
      setRegisteredValues = _React$useState4[1];

  React.useEffect(function () {
    if ('value' in restProps) {
      setValue(restProps.value || []);
    }
  }, [restProps.value]);

  var getOptions = function getOptions() {
    return options.map(function (option) {
      if (typeof option === 'string') {
        return {
          label: option,
          value: option
        };
      }

      return option;
    });
  };

  var cancelValue = function cancelValue(val) {
    setRegisteredValues(function (prevValues) {
      return prevValues.filter(function (v) {
        return v !== val;
      });
    });
  };

  var registerValue = function registerValue(val) {
    setRegisteredValues(function (prevValues) {
      return [].concat((0, _toConsumableArray2["default"])(prevValues), [val]);
    });
  };

  var toggleOption = function toggleOption(option) {
    var optionIndex = value.indexOf(option.value);
    var newValue = (0, _toConsumableArray2["default"])(value);

    if (optionIndex === -1) {
      newValue.push(option.value);
    } else {
      newValue.splice(optionIndex, 1);
    }

    if (!('value' in restProps)) {
      setValue(newValue);
    }

    var opts = getOptions();
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue.filter(function (val) {
      return registeredValues.indexOf(val) !== -1;
    }).sort(function (a, b) {
      var indexA = opts.findIndex(function (opt) {
        return opt.value === a;
      });
      var indexB = opts.findIndex(function (opt) {
        return opt.value === b;
      });
      return indexA - indexB;
    }));
  };

  var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
  var groupPrefixCls = "".concat(prefixCls, "-group");
  var domProps = (0, _omit["default"])(restProps, ['value', 'disabled']);

  if (options && options.length > 0) {
    children = getOptions().map(function (option) {
      return /*#__PURE__*/React.createElement(_Checkbox["default"], {
        prefixCls: prefixCls,
        key: option.value.toString(),
        disabled: 'disabled' in option ? option.disabled : restProps.disabled,
        value: option.value,
        checked: value.indexOf(option.value) !== -1,
        onChange: option.onChange,
        className: "".concat(groupPrefixCls, "-item"),
        style: option.style
      }, option.label);
    });
  }

  var context = {
    toggleOption: toggleOption,
    value: value,
    disabled: restProps.disabled,
    name: restProps.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue: registerValue,
    cancelValue: cancelValue
  };
  var classString = (0, _classnames["default"])(groupPrefixCls, (0, _defineProperty2["default"])({}, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), className);
  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: classString,
    style: style
  }, domProps, {
    ref: ref
  }), /*#__PURE__*/React.createElement(GroupContext.Provider, {
    value: context
  }, children));
};

var CheckboxGroup = /*#__PURE__*/React.forwardRef(InternalCheckboxGroup);

var _default = /*#__PURE__*/React.memo(CheckboxGroup);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/index.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! ./Checkbox */ "./node_modules/antd/lib/checkbox/Checkbox.js"));

var _Group = _interopRequireDefault(__webpack_require__(/*! ./Group */ "./node_modules/antd/lib/checkbox/Group.js"));

var Checkbox = _Checkbox["default"];
Checkbox.Group = _Group["default"];
Checkbox.__ANT_CHECKBOX = true;
var _default = Checkbox;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/input/ClearableLabeledInput.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/input/ClearableLabeledInput.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasPrefixSuffix = hasPrefixSuffix;
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _Input = __webpack_require__(/*! ./Input */ "./node_modules/antd/lib/input/Input.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ClearableInputType = (0, _type.tuple)('text', 'input');

function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}

function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}

var ClearableLabeledInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ClearableLabeledInput, _React$Component);

  var _super = (0, _createSuper2["default"])(ClearableLabeledInput);

  function ClearableLabeledInput() {
    var _this;

    (0, _classCallCheck2["default"])(this, ClearableLabeledInput);
    _this = _super.apply(this, arguments);
    /** @private Do Not use out of this class. We do not promise this is always keep. */

    _this.containerRef = /*#__PURE__*/React.createRef();

    _this.onInputMouseUp = function (e) {
      var _a;

      if ((_a = _this.containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(e.target)) {
        var triggerFocus = _this.props.triggerFocus;
        triggerFocus === null || triggerFocus === void 0 ? void 0 : triggerFocus();
      }
    };

    return _this;
  }

  (0, _createClass2["default"])(ClearableLabeledInput, [{
    key: "renderClearIcon",
    value: function renderClearIcon(prefixCls) {
      var _this$props = this.props,
          allowClear = _this$props.allowClear,
          value = _this$props.value,
          disabled = _this$props.disabled,
          readOnly = _this$props.readOnly,
          handleReset = _this$props.handleReset;

      if (!allowClear) {
        return null;
      }

      var needClear = !disabled && !readOnly && value;
      var className = "".concat(prefixCls, "-clear-icon");
      return /*#__PURE__*/React.createElement(_CloseCircleFilled["default"], {
        onClick: handleReset,
        className: (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(className, "-hidden"), !needClear), className),
        role: "button"
      });
    }
  }, {
    key: "renderSuffix",
    value: function renderSuffix(prefixCls) {
      var _this$props2 = this.props,
          suffix = _this$props2.suffix,
          allowClear = _this$props2.allowClear;

      if (suffix || allowClear) {
        return /*#__PURE__*/React.createElement("span", {
          className: "".concat(prefixCls, "-suffix")
        }, this.renderClearIcon(prefixCls), suffix);
      }

      return null;
    }
  }, {
    key: "renderLabeledIcon",
    value: function renderLabeledIcon(prefixCls, element) {
      var _classNames2;

      var _this$props3 = this.props,
          focused = _this$props3.focused,
          value = _this$props3.value,
          prefix = _this$props3.prefix,
          className = _this$props3.className,
          size = _this$props3.size,
          suffix = _this$props3.suffix,
          disabled = _this$props3.disabled,
          allowClear = _this$props3.allowClear,
          direction = _this$props3.direction,
          style = _this$props3.style,
          readOnly = _this$props3.readOnly,
          bordered = _this$props3.bordered;
      var suffixNode = this.renderSuffix(prefixCls);

      if (!hasPrefixSuffix(this.props)) {
        return (0, _reactNode.cloneElement)(element, {
          value: value
        });
      }

      var prefixNode = prefix ? /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-prefix")
      }, prefix) : null;
      var affixWrapperCls = (0, _classnames["default"])("".concat(prefixCls, "-affix-wrapper"), (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-focused"), focused), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-disabled"), disabled), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-input-with-clear-btn"), suffix && allowClear && value), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-readonly"), readOnly), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames2, "".concat(className), !hasAddon(this.props) && className), _classNames2));
      return /*#__PURE__*/React.createElement("span", {
        ref: this.containerRef,
        className: affixWrapperCls,
        style: style,
        onMouseUp: this.onInputMouseUp
      }, prefixNode, (0, _reactNode.cloneElement)(element, {
        style: null,
        value: value,
        className: (0, _Input.getInputClassName)(prefixCls, bordered, size, disabled)
      }), suffixNode);
    }
  }, {
    key: "renderInputWithLabel",
    value: function renderInputWithLabel(prefixCls, labeledElement) {
      var _classNames4;

      var _this$props4 = this.props,
          addonBefore = _this$props4.addonBefore,
          addonAfter = _this$props4.addonAfter,
          style = _this$props4.style,
          size = _this$props4.size,
          className = _this$props4.className,
          direction = _this$props4.direction; // Not wrap when there is not addons

      if (!hasAddon(this.props)) {
        return labeledElement;
      }

      var wrapperClassName = "".concat(prefixCls, "-group");
      var addonClassName = "".concat(wrapperClassName, "-addon");
      var addonBeforeNode = addonBefore ? /*#__PURE__*/React.createElement("span", {
        className: addonClassName
      }, addonBefore) : null;
      var addonAfterNode = addonAfter ? /*#__PURE__*/React.createElement("span", {
        className: addonClassName
      }, addonAfter) : null;
      var mergedWrapperClassName = (0, _classnames["default"])("".concat(prefixCls, "-wrapper"), wrapperClassName, (0, _defineProperty2["default"])({}, "".concat(wrapperClassName, "-rtl"), direction === 'rtl'));
      var mergedGroupClassName = (0, _classnames["default"])("".concat(prefixCls, "-group-wrapper"), (_classNames4 = {}, (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), _classNames4), className); // Need another wrapper for changing display:table to display:inline-block
      // and put style prop in wrapper

      return /*#__PURE__*/React.createElement("span", {
        className: mergedGroupClassName,
        style: style
      }, /*#__PURE__*/React.createElement("span", {
        className: mergedWrapperClassName
      }, addonBeforeNode, (0, _reactNode.cloneElement)(labeledElement, {
        style: null
      }), addonAfterNode));
    }
  }, {
    key: "renderTextAreaWithClearIcon",
    value: function renderTextAreaWithClearIcon(prefixCls, element) {
      var _classNames5;

      var _this$props5 = this.props,
          value = _this$props5.value,
          allowClear = _this$props5.allowClear,
          className = _this$props5.className,
          style = _this$props5.style,
          direction = _this$props5.direction,
          bordered = _this$props5.bordered;

      if (!allowClear) {
        return (0, _reactNode.cloneElement)(element, {
          value: value
        });
      }

      var affixWrapperCls = (0, _classnames["default"])("".concat(prefixCls, "-affix-wrapper"), "".concat(prefixCls, "-affix-wrapper-textarea-with-clear-btn"), (_classNames5 = {}, (0, _defineProperty2["default"])(_classNames5, "".concat(prefixCls, "-affix-wrapper-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames5, "".concat(prefixCls, "-affix-wrapper-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames5, "".concat(className), !hasAddon(this.props) && className), _classNames5));
      return /*#__PURE__*/React.createElement("span", {
        className: affixWrapperCls,
        style: style
      }, (0, _reactNode.cloneElement)(element, {
        style: null,
        value: value
      }), this.renderClearIcon(prefixCls));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          prefixCls = _this$props6.prefixCls,
          inputType = _this$props6.inputType,
          element = _this$props6.element;

      if (inputType === ClearableInputType[0]) {
        return this.renderTextAreaWithClearIcon(prefixCls, element);
      }

      return this.renderInputWithLabel(prefixCls, this.renderLabeledIcon(prefixCls, element));
    }
  }]);
  return ClearableLabeledInput;
}(React.Component);

var _default = ClearableLabeledInput;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/input/Group.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/input/Group.js ***!
  \**********************************************/
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Group = function Group(props) {
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;
    var customizePrefixCls = props.prefixCls,
        _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className;
    var prefixCls = getPrefixCls('input-group', customizePrefixCls);
    var cls = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), props.size === 'large'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), props.size === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-compact"), props.compact), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/React.createElement("span", {
      className: cls,
      style: props.style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave,
      onFocus: props.onFocus,
      onBlur: props.onBlur
    }, props.children);
  });
};

var _default = Group;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/input/Input.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/input/Input.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixControlledValue = fixControlledValue;
exports.resolveOnChange = resolveOnChange;
exports.getInputClassName = getInputClassName;
exports.triggerFocus = triggerFocus;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/omit */ "./node_modules/rc-util/lib/omit.js"));

var _ClearableLabeledInput = _interopRequireWildcard(__webpack_require__(/*! ./ClearableLabeledInput */ "./node_modules/antd/lib/input/ClearableLabeledInput.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}

function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }

  var event = e;
  var originalInputValue = target.value;

  if (e.type === 'click') {
    // click clear icon
    event = Object.create(e);
    event.target = target;
    event.currentTarget = target; // change target ref value cause e.target.value should be '' when clear input

    target.value = '';
    onChange(event); // reset target ref value

    target.value = originalInputValue;
    return;
  } // Trigger by composition event, this means we need force change the input value


  if (targetValue !== undefined) {
    event = Object.create(e);
    event.target = target;
    event.currentTarget = target;
    target.value = targetValue;
    onChange(event);
    return;
  }

  onChange(event);
}

function getInputClassName(prefixCls, bordered, size, disabled, direction) {
  var _classNames;

  return (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames));
}

function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option); // Selection content

  var _ref = option || {},
      cursor = _ref.cursor;

  if (cursor) {
    var len = element.value.length;

    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;

      case 'end':
        element.setSelectionRange(len, len);
        break;

      default:
        element.setSelectionRange(0, len);
    }
  }
}

var Input = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Input, _React$Component);

  var _super = (0, _createSuper2["default"])(Input);

  function Input(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Input);
    _this = _super.call(this, props);
    _this.direction = 'ltr';

    _this.focus = function (option) {
      triggerFocus(_this.input, option);
    };

    _this.saveClearableInput = function (input) {
      _this.clearableInput = input;
    };

    _this.saveInput = function (input) {
      _this.input = input;
    };

    _this.onFocus = function (e) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        focused: true
      }, _this.clearPasswordValueAttribute);

      onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
    };

    _this.onBlur = function (e) {
      var onBlur = _this.props.onBlur;

      _this.setState({
        focused: false
      }, _this.clearPasswordValueAttribute);

      onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    };

    _this.handleReset = function (e) {
      _this.setValue('', function () {
        _this.focus();
      });

      resolveOnChange(_this.input, e, _this.props.onChange);
    };

    _this.renderInput = function (prefixCls, size, bordered) {
      var input = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var _this$props = _this.props,
          className = _this$props.className,
          addonBefore = _this$props.addonBefore,
          addonAfter = _this$props.addonAfter,
          customizeSize = _this$props.size,
          disabled = _this$props.disabled; // Fix https://fb.me/react-unknown-prop

      var otherProps = (0, _omit["default"])(_this.props, ['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix', 'allowClear', // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      'defaultValue', 'size', 'inputType', 'bordered']);
      return /*#__PURE__*/React.createElement("input", (0, _extends2["default"])({
        autoComplete: input.autoComplete
      }, otherProps, {
        onChange: _this.handleChange,
        onFocus: _this.onFocus,
        onBlur: _this.onBlur,
        onKeyDown: _this.handleKeyDown,
        className: (0, _classnames["default"])(getInputClassName(prefixCls, bordered, customizeSize || size, disabled, _this.direction), (0, _defineProperty2["default"])({}, className, className && !addonBefore && !addonAfter)),
        ref: _this.saveInput
      }));
    };

    _this.clearPasswordValueAttribute = function () {
      // https://github.com/ant-design/ant-design/issues/20541
      _this.removePasswordTimeout = setTimeout(function () {
        if (_this.input && _this.input.getAttribute('type') === 'password' && _this.input.hasAttribute('value')) {
          _this.input.removeAttribute('value');
        }
      });
    };

    _this.handleChange = function (e) {
      _this.setValue(e.target.value, _this.clearPasswordValueAttribute);

      resolveOnChange(_this.input, e, _this.props.onChange);
    };

    _this.handleKeyDown = function (e) {
      var _this$props2 = _this.props,
          onPressEnter = _this$props2.onPressEnter,
          onKeyDown = _this$props2.onKeyDown;

      if (onPressEnter && e.keyCode === 13) {
        onPressEnter(e);
      }

      onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
    };

    _this.renderComponent = function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls,
          direction = _ref2.direction,
          input = _ref2.input;
      var _this$state = _this.state,
          value = _this$state.value,
          focused = _this$state.focused;
      var _this$props3 = _this.props,
          customizePrefixCls = _this$props3.prefixCls,
          _this$props3$bordered = _this$props3.bordered,
          bordered = _this$props3$bordered === void 0 ? true : _this$props3$bordered;
      var prefixCls = getPrefixCls('input', customizePrefixCls);
      _this.direction = direction;
      return /*#__PURE__*/React.createElement(_SizeContext["default"].Consumer, null, function (size) {
        return /*#__PURE__*/React.createElement(_ClearableLabeledInput["default"], (0, _extends2["default"])({
          size: size
        }, _this.props, {
          prefixCls: prefixCls,
          inputType: "input",
          value: fixControlledValue(value),
          element: _this.renderInput(prefixCls, size, bordered, input),
          handleReset: _this.handleReset,
          ref: _this.saveClearableInput,
          direction: direction,
          focused: focused,
          triggerFocus: _this.focus,
          bordered: bordered
        }));
      });
    };

    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    _this.state = {
      value: value,
      focused: false,
      // eslint-disable-next-line react/no-unused-state
      prevValue: props.value
    };
    return _this;
  }

  (0, _createClass2["default"])(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.clearPasswordValueAttribute();
    } // Since polyfill `getSnapshotBeforeUpdate` need work with `componentDidUpdate`.
    // We keep an empty function here.

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps) {
      if ((0, _ClearableLabeledInput.hasPrefixSuffix)(prevProps) !== (0, _ClearableLabeledInput.hasPrefixSuffix)(this.props)) {
        (0, _devWarning["default"])(this.input !== document.activeElement, 'Input', "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ");
      }

      return null;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.removePasswordTimeout) {
        clearTimeout(this.removePasswordTimeout);
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "setSelectionRange",
    value: function setSelectionRange(start, end, direction) {
      this.input.setSelectionRange(start, end, direction);
    }
  }, {
    key: "select",
    value: function select() {
      this.input.select();
    }
  }, {
    key: "setValue",
    value: function setValue(value, callback) {
      if (this.props.value === undefined) {
        this.setState({
          value: value
        }, callback);
      } else {
        callback === null || callback === void 0 ? void 0 : callback();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, _ref3) {
      var prevValue = _ref3.prevValue;
      var newState = {
        prevValue: nextProps.value
      };

      if (nextProps.value !== undefined || prevValue !== nextProps.value) {
        newState.value = nextProps.value;
      }

      return newState;
    }
  }]);
  return Input;
}(React.Component);

Input.defaultProps = {
  type: 'text'
};
var _default = Input;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/input/Password.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/input/Password.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/omit */ "./node_modules/rc-util/lib/omit.js"));

var _EyeOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/EyeOutlined */ "./node_modules/@ant-design/icons/EyeOutlined.js"));

var _EyeInvisibleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/EyeInvisibleOutlined */ "./node_modules/@ant-design/icons/EyeInvisibleOutlined.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/antd/lib/input/Input.js"));

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

var ActionMap = {
  click: 'onClick',
  hover: 'onMouseOver'
};
var Password = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _useState = (0, React.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var onVisibleChange = function onVisibleChange() {
    var disabled = props.disabled;

    if (disabled) {
      return;
    }

    setVisible(!visible);
  };

  var getIcon = function getIcon(prefixCls) {
    var _iconProps;

    var action = props.action,
        _props$iconRender = props.iconRender,
        iconRender = _props$iconRender === void 0 ? function () {
      return null;
    } : _props$iconRender;
    var iconTrigger = ActionMap[action] || '';
    var icon = iconRender(visible);
    var iconProps = (_iconProps = {}, (0, _defineProperty2["default"])(_iconProps, iconTrigger, onVisibleChange), (0, _defineProperty2["default"])(_iconProps, "className", "".concat(prefixCls, "-icon")), (0, _defineProperty2["default"])(_iconProps, "key", 'passwordIcon'), (0, _defineProperty2["default"])(_iconProps, "onMouseDown", function onMouseDown(e) {
      // Prevent focused state lost
      // https://github.com/ant-design/ant-design/issues/15173
      e.preventDefault();
    }), (0, _defineProperty2["default"])(_iconProps, "onMouseUp", function onMouseUp(e) {
      // Prevent caret position change
      // https://github.com/ant-design/ant-design/issues/23524
      e.preventDefault();
    }), _iconProps);
    return /*#__PURE__*/React.cloneElement( /*#__PURE__*/React.isValidElement(icon) ? icon : /*#__PURE__*/React.createElement("span", null, icon), iconProps);
  };

  var renderPassword = function renderPassword(_ref) {
    var getPrefixCls = _ref.getPrefixCls;

    var className = props.className,
        customizePrefixCls = props.prefixCls,
        customizeInputPrefixCls = props.inputPrefixCls,
        size = props.size,
        visibilityToggle = props.visibilityToggle,
        restProps = __rest(props, ["className", "prefixCls", "inputPrefixCls", "size", "visibilityToggle"]);

    var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
    var prefixCls = getPrefixCls('input-password', customizePrefixCls);
    var suffixIcon = visibilityToggle && getIcon(prefixCls);
    var inputClassName = (0, _classnames["default"])(prefixCls, className, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-").concat(size), !!size));
    var omittedProps = (0, _extends2["default"])((0, _extends2["default"])({}, (0, _omit["default"])(restProps, ['suffix', 'iconRender'])), {
      type: visible ? 'text' : 'password',
      className: inputClassName,
      prefixCls: inputPrefixCls,
      suffix: suffixIcon
    });

    if (size) {
      omittedProps.size = size;
    }

    return /*#__PURE__*/React.createElement(_Input["default"], (0, _extends2["default"])({
      ref: ref
    }, omittedProps));
  };

  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, renderPassword);
});
Password.defaultProps = {
  action: 'click',
  visibilityToggle: true,
  iconRender: function iconRender(visible) {
    return visible ? /*#__PURE__*/React.createElement(_EyeOutlined["default"], null) : /*#__PURE__*/React.createElement(_EyeInvisibleOutlined["default"], null);
  }
};
Password.displayName = 'Password';
var _default = Password;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/input/Search.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/input/Search.js ***!
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

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _ref = __webpack_require__(/*! rc-util/lib/ref */ "./node_modules/rc-util/lib/ref.js");

var _SearchOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/SearchOutlined */ "./node_modules/@ant-design/icons/SearchOutlined.js"));

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/antd/lib/input/Input.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

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

var Search = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var customizePrefixCls = props.prefixCls,
      customizeInputPrefixCls = props.inputPrefixCls,
      className = props.className,
      customizeSize = props.size,
      suffix = props.suffix,
      _props$enterButton = props.enterButton,
      enterButton = _props$enterButton === void 0 ? false : _props$enterButton,
      addonAfter = props.addonAfter,
      loading = props.loading,
      disabled = props.disabled,
      customOnSearch = props.onSearch,
      customOnChange = props.onChange,
      restProps = __rest(props, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var contextSize = React.useContext(_SizeContext["default"]);
  var size = customizeSize || contextSize;
  var inputRef = React.useRef(null);

  var onChange = function onChange(e) {
    if (e && e.target && e.type === 'click' && customOnSearch) {
      customOnSearch(e.target.value, e);
    }

    if (customOnChange) {
      customOnChange(e);
    }
  };

  var onMouseDown = function onMouseDown(e) {
    var _a;

    if (document.activeElement === ((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input)) {
      e.preventDefault();
    }
  };

  var onSearch = function onSearch(e) {
    var _a;

    if (customOnSearch) {
      customOnSearch((_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.input.value, e);
    }
  };

  var prefixCls = getPrefixCls('input-search', customizePrefixCls);
  var inputPrefixCls = getPrefixCls('input', customizeInputPrefixCls);
  var searchIcon = typeof enterButton === 'boolean' || typeof enterButton === 'undefined' ? /*#__PURE__*/React.createElement(_SearchOutlined["default"], null) : null;
  var btnClassName = "".concat(prefixCls, "-button");
  var button;
  var enterButtonAsElement = enterButton || {};
  var isAntdButton = enterButtonAsElement.type && enterButtonAsElement.type.__ANT_BUTTON === true;

  if (isAntdButton || enterButtonAsElement.type === 'button') {
    button = (0, _reactNode.cloneElement)(enterButtonAsElement, (0, _extends2["default"])({
      onMouseDown: onMouseDown,
      onClick: onSearch,
      key: 'enterButton'
    }, isAntdButton ? {
      className: btnClassName,
      size: size
    } : {}));
  } else {
    button = /*#__PURE__*/React.createElement(_button["default"], {
      className: btnClassName,
      type: enterButton ? 'primary' : undefined,
      size: size,
      disabled: disabled,
      key: "enterButton",
      onMouseDown: onMouseDown,
      onClick: onSearch,
      loading: loading,
      icon: searchIcon
    }, enterButton);
  }

  if (addonAfter) {
    button = [button, (0, _reactNode.cloneElement)(addonAfter, {
      key: 'addonAfter'
    })];
  }

  var cls = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(size), !!size), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-with-button"), !!enterButton), _classNames), className);
  return /*#__PURE__*/React.createElement(_Input["default"], (0, _extends2["default"])({
    ref: (0, _ref.composeRef)(inputRef, ref),
    onPressEnter: onSearch
  }, restProps, {
    size: size,
    prefixCls: inputPrefixCls,
    addonAfter: button,
    suffix: suffix,
    onChange: onChange,
    className: cls,
    disabled: disabled
  }));
});
Search.displayName = 'Search';
var _default = Search;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/input/TextArea.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/input/TextArea.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcTextarea = _interopRequireDefault(__webpack_require__(/*! rc-textarea */ "./node_modules/rc-textarea/es/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/omit */ "./node_modules/rc-util/lib/omit.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _useMergedState3 = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/hooks/useMergedState */ "./node_modules/rc-util/lib/hooks/useMergedState.js"));

var _ClearableLabeledInput = _interopRequireDefault(__webpack_require__(/*! ./ClearableLabeledInput */ "./node_modules/antd/lib/input/ClearableLabeledInput.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _Input = __webpack_require__(/*! ./Input */ "./node_modules/antd/lib/input/Input.js");

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function fixEmojiLength(value, maxLength) {
  return (0, _toConsumableArray2["default"])(value || '').slice(0, maxLength).join('');
}

var TextArea = /*#__PURE__*/React.forwardRef(function (_a, ref) {
  var _classNames;

  var customizePrefixCls = _a.prefixCls,
      _a$bordered = _a.bordered,
      bordered = _a$bordered === void 0 ? true : _a$bordered,
      _a$showCount = _a.showCount,
      showCount = _a$showCount === void 0 ? false : _a$showCount,
      maxLength = _a.maxLength,
      className = _a.className,
      style = _a.style,
      customizeSize = _a.size,
      onCompositionStart = _a.onCompositionStart,
      onCompositionEnd = _a.onCompositionEnd,
      onChange = _a.onChange,
      props = __rest(_a, ["prefixCls", "bordered", "showCount", "maxLength", "className", "style", "size", "onCompositionStart", "onCompositionEnd", "onChange"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = React.useContext(_SizeContext["default"]);
  var innerRef = React.useRef(null);
  var clearableInputRef = React.useRef(null);

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      compositing = _React$useState2[0],
      setCompositing = _React$useState2[1];

  var _useMergedState = (0, _useMergedState3["default"])(props.defaultValue, {
    value: props.value
  }),
      _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
      value = _useMergedState2[0],
      setValue = _useMergedState2[1];

  var handleSetValue = function handleSetValue(val, callback) {
    if (props.value === undefined) {
      setValue(val);
      callback === null || callback === void 0 ? void 0 : callback();
    }
  }; // =========================== Value Update ===========================
  // Max length value


  var hasMaxLength = Number(maxLength) > 0;

  var onInternalCompositionStart = function onInternalCompositionStart(e) {
    setCompositing(true);
    onCompositionStart === null || onCompositionStart === void 0 ? void 0 : onCompositionStart(e);
  };

  var onInternalCompositionEnd = function onInternalCompositionEnd(e) {
    setCompositing(false);
    var triggerValue = e.currentTarget.value;

    if (hasMaxLength) {
      triggerValue = fixEmojiLength(triggerValue, maxLength);
    } // Patch composition onChange when value changed


    if (triggerValue !== value) {
      handleSetValue(triggerValue);
      (0, _Input.resolveOnChange)(e.currentTarget, e, onChange, triggerValue);
    }

    onCompositionEnd === null || onCompositionEnd === void 0 ? void 0 : onCompositionEnd(e);
  };

  var handleChange = function handleChange(e) {
    var triggerValue = e.target.value;

    if (!compositing && hasMaxLength) {
      triggerValue = fixEmojiLength(triggerValue, maxLength);
    }

    handleSetValue(triggerValue);
    (0, _Input.resolveOnChange)(e.currentTarget, e, onChange, triggerValue);
  }; // ============================== Reset ===============================


  var handleReset = function handleReset(e) {
    var _a, _b;

    handleSetValue('', function () {
      var _a;

      (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    });
    (0, _Input.resolveOnChange)((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, e, onChange);
  };

  var prefixCls = getPrefixCls('input', customizePrefixCls);
  React.useImperativeHandle(ref, function () {
    var _a;

    return {
      resizableTextArea: (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea,
      focus: function focus(option) {
        var _a, _b;

        (0, _Input.triggerFocus)((_b = (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.resizableTextArea) === null || _b === void 0 ? void 0 : _b.textArea, option);
      },
      blur: function blur() {
        var _a;

        return (_a = innerRef.current) === null || _a === void 0 ? void 0 : _a.blur();
      }
    };
  });
  var textArea = /*#__PURE__*/React.createElement(_rcTextarea["default"], (0, _extends2["default"])({}, (0, _omit["default"])(props, ['allowClear']), {
    className: (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-borderless"), !bordered), (0, _defineProperty2["default"])(_classNames, className, className && !showCount), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-sm"), size === 'small' || customizeSize === 'small'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-lg"), size === 'large' || customizeSize === 'large'), _classNames)),
    style: showCount ? undefined : style,
    prefixCls: prefixCls,
    onCompositionStart: onInternalCompositionStart,
    onChange: handleChange,
    onCompositionEnd: onInternalCompositionEnd,
    ref: innerRef
  }));
  var val = (0, _Input.fixControlledValue)(value);

  if (!compositing && hasMaxLength && (props.value === null || props.value === undefined)) {
    // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
    val = fixEmojiLength(val, maxLength);
  } // TextArea


  var textareaNode = /*#__PURE__*/React.createElement(_ClearableLabeledInput["default"], (0, _extends2["default"])({}, props, {
    prefixCls: prefixCls,
    direction: direction,
    inputType: "text",
    value: val,
    element: textArea,
    handleReset: handleReset,
    ref: clearableInputRef,
    bordered: bordered
  })); // Only show text area wrapper when needed

  if (showCount) {
    var valueLength = (0, _toConsumableArray2["default"])(val).length;
    var dataCount = '';

    if ((0, _typeof2["default"])(showCount) === 'object') {
      dataCount = showCount.formatter({
        count: valueLength,
        maxLength: maxLength
      });
    } else {
      dataCount = "".concat(valueLength).concat(hasMaxLength ? " / ".concat(maxLength) : '');
    }

    return /*#__PURE__*/React.createElement("div", {
      className: (0, _classnames["default"])("".concat(prefixCls, "-textarea"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-textarea-rtl"), direction === 'rtl'), "".concat(prefixCls, "-textarea-show-count"), className),
      style: style,
      "data-count": dataCount
    }, textareaNode);
  }

  return textareaNode;
});
var _default = TextArea;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/input/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/input/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Input = _interopRequireDefault(__webpack_require__(/*! ./Input */ "./node_modules/antd/lib/input/Input.js"));

var _Group = _interopRequireDefault(__webpack_require__(/*! ./Group */ "./node_modules/antd/lib/input/Group.js"));

var _Search = _interopRequireDefault(__webpack_require__(/*! ./Search */ "./node_modules/antd/lib/input/Search.js"));

var _TextArea = _interopRequireDefault(__webpack_require__(/*! ./TextArea */ "./node_modules/antd/lib/input/TextArea.js"));

var _Password = _interopRequireDefault(__webpack_require__(/*! ./Password */ "./node_modules/antd/lib/input/Password.js"));

_Input["default"].Group = _Group["default"];
_Input["default"].Search = _Search["default"];
_Input["default"].TextArea = _TextArea["default"];
_Input["default"].Password = _Password["default"];
var _default = _Input["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/rc-checkbox/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-checkbox/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);








// eslint-disable-next-line import/no-extraneous-dependencies



var Checkbox = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Checkbox, _Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__["default"])(Checkbox);

  function Checkbox(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Checkbox);

    _this = _super.call(this, props);

    _this.handleChange = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;

      if (disabled) {
        return;
      }

      if (!('checked' in _this.props)) {
        _this.setState({
          checked: e.target.checked
        });
      }

      if (onChange) {
        onChange({
          target: Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _this.props), {}, {
            checked: e.target.checked
          }),
          stopPropagation: function stopPropagation() {
            e.stopPropagation();
          },
          preventDefault: function preventDefault() {
            e.preventDefault();
          },
          nativeEvent: e.nativeEvent
        });
      }
    };

    _this.saveInput = function (node) {
      _this.input = node;
    };

    var checked = 'checked' in props ? props.checked : props.defaultChecked;
    _this.state = {
      checked: checked
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Checkbox, [{
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          style = _this$props2.style,
          name = _this$props2.name,
          id = _this$props2.id,
          type = _this$props2.type,
          disabled = _this$props2.disabled,
          readOnly = _this$props2.readOnly,
          tabIndex = _this$props2.tabIndex,
          onClick = _this$props2.onClick,
          onFocus = _this$props2.onFocus,
          onBlur = _this$props2.onBlur,
          onKeyDown = _this$props2.onKeyDown,
          onKeyPress = _this$props2.onKeyPress,
          onKeyUp = _this$props2.onKeyUp,
          autoFocus = _this$props2.autoFocus,
          value = _this$props2.value,
          required = _this$props2.required,
          others = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props2, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"]);

      var globalProps = Object.keys(others).reduce(function (prev, key) {
        if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
          // eslint-disable-next-line no-param-reassign
          prev[key] = others[key];
        }

        return prev;
      }, {});
      var checked = this.state.checked;
      var classString = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls, className, (_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-checked"), checked), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: classString,
        style: style
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        name: name,
        id: id,
        type: type,
        required: required,
        readOnly: readOnly,
        disabled: disabled,
        tabIndex: tabIndex,
        className: "".concat(prefixCls, "-input"),
        checked: !!checked,
        onClick: onClick,
        onFocus: onFocus,
        onBlur: onBlur,
        onKeyUp: onKeyUp,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        onChange: this.handleChange,
        autoFocus: autoFocus,
        ref: this.saveInput,
        value: value
      }, globalProps)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "".concat(prefixCls, "-inner")
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if ('checked' in props) {
        return Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state), {}, {
          checked: props.checked
        });
      }

      return null;
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./node_modules/rc-textarea/es/ResizableTextArea.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-textarea/es/ResizableTextArea.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_resize_observer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-resize-observer */ "./node_modules/rc-resize-observer/es/index.js");
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/omit */ "./node_modules/rc-util/es/omit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _calculateNodeHeight__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calculateNodeHeight */ "./node_modules/rc-textarea/es/calculateNodeHeight.js");











 // eslint-disable-next-line @typescript-eslint/naming-convention

var RESIZE_STATUS;

(function (RESIZE_STATUS) {
  RESIZE_STATUS[RESIZE_STATUS["NONE"] = 0] = "NONE";
  RESIZE_STATUS[RESIZE_STATUS["RESIZING"] = 1] = "RESIZING";
  RESIZE_STATUS[RESIZE_STATUS["RESIZED"] = 2] = "RESIZED";
})(RESIZE_STATUS || (RESIZE_STATUS = {}));

var ResizableTextArea = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ResizableTextArea, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__["default"])(ResizableTextArea);

  function ResizableTextArea(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ResizableTextArea);

    _this = _super.call(this, props);

    _this.saveTextArea = function (textArea) {
      _this.textArea = textArea;
    };

    _this.handleResize = function (size) {
      var resizeStatus = _this.state.resizeStatus;
      var _this$props = _this.props,
          autoSize = _this$props.autoSize,
          onResize = _this$props.onResize;

      if (resizeStatus !== RESIZE_STATUS.NONE) {
        return;
      }

      if (typeof onResize === 'function') {
        onResize(size);
      }

      if (autoSize) {
        _this.resizeOnNextFrame();
      }
    };

    _this.resizeOnNextFrame = function () {
      cancelAnimationFrame(_this.nextFrameActionId);
      _this.nextFrameActionId = requestAnimationFrame(_this.resizeTextarea);
    };

    _this.resizeTextarea = function () {
      var autoSize = _this.props.autoSize;

      if (!autoSize || !_this.textArea) {
        return;
      }

      var minRows = autoSize.minRows,
          maxRows = autoSize.maxRows;
      var textareaStyles = Object(_calculateNodeHeight__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.textArea, false, minRows, maxRows);

      _this.setState({
        textareaStyles: textareaStyles,
        resizeStatus: RESIZE_STATUS.RESIZING
      }, function () {
        cancelAnimationFrame(_this.resizeFrameId);
        _this.resizeFrameId = requestAnimationFrame(function () {
          _this.setState({
            resizeStatus: RESIZE_STATUS.RESIZED
          }, function () {
            _this.resizeFrameId = requestAnimationFrame(function () {
              _this.setState({
                resizeStatus: RESIZE_STATUS.NONE
              });

              _this.fixFirefoxAutoScroll();
            });
          });
        });
      });
    };

    _this.renderTextArea = function () {
      var _this$props2 = _this.props,
          _this$props2$prefixCl = _this$props2.prefixCls,
          prefixCls = _this$props2$prefixCl === void 0 ? 'rc-textarea' : _this$props2$prefixCl,
          autoSize = _this$props2.autoSize,
          onResize = _this$props2.onResize,
          className = _this$props2.className,
          disabled = _this$props2.disabled;
      var _this$state = _this.state,
          textareaStyles = _this$state.textareaStyles,
          resizeStatus = _this$state.resizeStatus;
      var otherProps = Object(rc_util_es_omit__WEBPACK_IMPORTED_MODULE_9__["default"])(_this.props, ['prefixCls', 'onPressEnter', 'autoSize', 'defaultValue', 'onResize']);
      var cls = classnames__WEBPACK_IMPORTED_MODULE_10___default()(prefixCls, className, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, "".concat(prefixCls, "-disabled"), disabled)); // Fix https://github.com/ant-design/ant-design/issues/6776
      // Make sure it could be reset when using form.getFieldDecorator

      if ('value' in otherProps) {
        otherProps.value = otherProps.value || '';
      }

      var style = Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.props.style), textareaStyles), resizeStatus === RESIZE_STATUS.RESIZING ? // React will warning when mix `overflow` & `overflowY`.
      // We need to define this separately.
      {
        overflowX: 'hidden',
        overflowY: 'hidden'
      } : null);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"](rc_resize_observer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onResize: _this.handleResize,
        disabled: !(autoSize || onResize)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps, {
        className: cls,
        style: style,
        ref: _this.saveTextArea
      })));
    };

    _this.state = {
      textareaStyles: {},
      resizeStatus: RESIZE_STATUS.NONE
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ResizableTextArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeTextarea();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Re-render with the new content then recalculate the height as required.
      if (prevProps.value !== this.props.value) {
        this.resizeTextarea();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.nextFrameActionId);
      cancelAnimationFrame(this.resizeFrameId);
    } // https://github.com/ant-design/ant-design/issues/21870

  }, {
    key: "fixFirefoxAutoScroll",
    value: function fixFirefoxAutoScroll() {
      try {
        if (document.activeElement === this.textArea) {
          var currentStart = this.textArea.selectionStart;
          var currentEnd = this.textArea.selectionEnd;
          this.textArea.setSelectionRange(currentStart, currentEnd);
        }
      } catch (e) {// Fix error in Chrome:
        // Failed to read the 'selectionStart' property from 'HTMLInputElement'
        // http://stackoverflow.com/q/21177489/3040605
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderTextArea();
    }
  }]);

  return ResizableTextArea;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ResizableTextArea);

/***/ }),

/***/ "./node_modules/rc-textarea/es/calculateNodeHeight.js":
/*!************************************************************!*\
  !*** ./node_modules/rc-textarea/es/calculateNodeHeight.js ***!
  \************************************************************/
/*! exports provided: calculateNodeStyling, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateNodeStyling", function() { return calculateNodeStyling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculateNodeHeight; });
// Thanks to https://github.com/andreypopp/react-textarea-autosize/

/**
 * calculateNodeHeight(uiTextNode, useCache = false)
 */
var HIDDEN_TEXTAREA_STYLE = "\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'font-variant', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');

  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }

  var style = window.getComputedStyle(node);
  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  var sizingStyle = SIZING_STYLE.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(';');
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };

  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }

  return nodeInfo;
}
function calculateNodeHeight(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tab-index', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    document.body.appendChild(hiddenTextarea);
  } // Fix wrap="off" issue
  // https://github.com/ant-design/ant-design/issues/6577


  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
  } else {
    hiddenTextarea.removeAttribute('wrap');
  } // Copy all CSS properties that have an impact on the height of the content in
  // the textbox


  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      sizingStyle = _calculateNodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content


  hiddenTextarea.setAttribute('style', "".concat(sizingStyle, ";").concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
  var minHeight = Number.MIN_SAFE_INTEGER;
  var maxHeight = Number.MAX_SAFE_INTEGER;
  var height = hiddenTextarea.scrollHeight;
  var overflowY;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height -= paddingSize;
  }

  if (minRows !== null || maxRows !== null) {
    // measure height of a textarea with a single row
    hiddenTextarea.value = ' ';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;

      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }

      height = Math.max(minHeight, height);
    }

    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;

      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }

      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  }

  return {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    overflowY: overflowY,
    resize: 'none'
  };
}

/***/ }),

/***/ "./node_modules/rc-textarea/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-textarea/es/index.js ***!
  \**********************************************/
/*! exports provided: ResizableTextArea, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ResizableTextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ResizableTextArea */ "./node_modules/rc-textarea/es/ResizableTextArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResizableTextArea", function() { return _ResizableTextArea__WEBPACK_IMPORTED_MODULE_6__["default"]; });









var TextArea = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TextArea, _React$Component);

  var _super = Object(_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(TextArea);

  function TextArea(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TextArea);

    _this = _super.call(this, props);

    _this.focus = function () {
      _this.resizableTextArea.textArea.focus();
    };

    _this.saveTextArea = function (resizableTextArea) {
      _this.resizableTextArea = resizableTextArea;
    };

    _this.handleChange = function (e) {
      var onChange = _this.props.onChange;

      _this.setValue(e.target.value, function () {
        _this.resizableTextArea.resizeTextarea();
      });

      if (onChange) {
        onChange(e);
      }
    };

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    var value = typeof props.value === 'undefined' || props.value === null ? props.defaultValue : props.value;
    _this.state = {
      value: value
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TextArea, [{
    key: "setValue",
    value: function setValue(value, callback) {
      if (!('value' in this.props)) {
        this.setState({
          value: value
        }, callback);
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.resizableTextArea.textArea.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_ResizableTextArea__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        value: this.state.value,
        onKeyDown: this.handleKeyDown,
        onChange: this.handleChange,
        ref: this.saveTextArea
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return TextArea;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ }),

/***/ "./node_modules/rc-util/lib/raf.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-util/lib/raf.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapperRaf;

var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };

  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

var rafUUID = 0;
var rafIds = new Map();

function cleanup(id) {
  rafIds.delete(id);
}

function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;

  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id); // Trigger

      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      }); // Bind real raf id

      rafIds.set(id, realId);
    }
  }

  callRef(times);
  return id;
}

wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};

/***/ }),

/***/ "./node_modules/react-hook-form/dist/react-hook-form.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-hook-form/dist/react-hook-form.es.js ***!
  \*****************************************************************/
/*! exports provided: Controller, ErrorMessage, FormContext, useFieldArray, useForm, useFormContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContext", function() { return FormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFieldArray", function() { return useFieldArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormContext", function() { return useFormContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isNullOrUndefined = (value) => value == null;

var isArray = (value) => Array.isArray(value);

const isObjectType = (value) => typeof value === 'object';
var isObject = (value) => !isNullOrUndefined(value) && !isArray(value) && isObjectType(value);

var isHTMLElement = (value) => isObject(value) && value.nodeType === Node.ELEMENT_NODE;

const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
};
const VALUE = 'value';
const UNDEFINED = 'undefined';
const EVENTS = {
    BLUR: 'blur',
    CHANGE: 'change',
    INPUT: 'input',
};
const SELECT = 'select';
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
};
const REGEX_IS_DEEP_PROP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
const REGEX_IS_PLAIN_PROP = /^\w*$/;
const REGEX_PROP_NAME = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
const REGEX_ESCAPE_CHAR = /\\(\\)?/g;
const REGEX_ARRAY_FIELD_INDEX = /[\d+]/g;

function attachEventListeners({ field: { ref }, handleChange, isRadioOrCheckbox, }) {
    if (isHTMLElement(ref) && handleChange) {
        ref.addEventListener(isRadioOrCheckbox ? EVENTS.CHANGE : EVENTS.INPUT, handleChange);
        ref.addEventListener(EVENTS.BLUR, handleChange);
    }
}

var isKey = (value) => !isArray(value) &&
    (REGEX_IS_PLAIN_PROP.test(value) || !REGEX_IS_DEEP_PROP.test(value));

var stringToPath = (string) => {
    const result = [];
    string.replace(REGEX_PROP_NAME, (match, number, quote, string) => {
        result.push(quote ? string.replace(REGEX_ESCAPE_CHAR, '$1') : number || match);
    });
    return result;
};

function set(object, path, value) {
    let index = -1;
    const tempPath = isKey(path) ? [path] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while (++index < length) {
        const key = tempPath[index];
        let newValue = value;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue =
                isObject(objValue) || isArray(objValue)
                    ? objValue
                    : !isNaN(+tempPath[index + 1])
                        ? []
                        : {};
        }
        object[key] = newValue;
        object = object[key];
    }
    return object;
}

var transformToNestObject = (data) => Object.entries(data).reduce((previous, [key, value]) => {
    if (!isKey(key)) {
        set(previous, key, value);
        return previous;
    }
    return Object.assign(Object.assign({}, previous), { [key]: value });
}, {});

var isUndefined = (val) => val === undefined;

var get = (obj, path, defaultValue) => {
    const result = path
        .split(/[,[\].]+?/)
        .filter(Boolean)
        .reduce((result, key) => (isNullOrUndefined(result) ? result : result[key]), obj);
    return isUndefined(result) || result === obj
        ? isUndefined(obj[path])
            ? defaultValue
            : obj[path]
        : result;
};

var focusOnErrorField = (fields, fieldErrors) => {
    for (const key in fields) {
        if (get(fieldErrors, key)) {
            const field = fields[key];
            if (field) {
                if (field.ref.focus) {
                    field.ref.focus();
                    break;
                }
                else if (field.options) {
                    field.options[0].ref.focus();
                    break;
                }
            }
        }
    }
};

var removeAllEventListeners = (ref, validateWithStateUpdate) => {
    if (isHTMLElement(ref) && ref.removeEventListener) {
        ref.removeEventListener(EVENTS.INPUT, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.CHANGE, validateWithStateUpdate);
        ref.removeEventListener(EVENTS.BLUR, validateWithStateUpdate);
    }
};

var isRadioInput = (element) => element.type === 'radio';

var isCheckBoxInput = (element) => element.type === 'checkbox';

function isDetached(element) {
    if (!element) {
        return true;
    }
    if (!(element instanceof HTMLElement) ||
        element.nodeType === Node.DOCUMENT_NODE) {
        return false;
    }
    return isDetached(element.parentNode);
}

var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;

function castPath(value) {
    return isArray(value) ? value : stringToPath(value);
}
function baseGet(object, path) {
    const updatePath = isKey(path) ? [path] : castPath(path);
    const length = path.length;
    let index = 0;
    while (index < length) {
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return index == length ? object : undefined;
}
function baseSlice(array, start, end) {
    let index = -1;
    let length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : end - start;
    const result = Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}
function parent(object, path) {
    return path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
}
function baseUnset(object, path) {
    const updatePath = isKey(path) ? [path] : castPath(path);
    const childObject = parent(object, updatePath);
    const key = updatePath[updatePath.length - 1];
    const result = !(childObject != null) || delete childObject[key];
    let previousObjRef = undefined;
    for (let k = 0; k < updatePath.slice(0, -1).length; k++) {
        let index = -1;
        let objectRef = undefined;
        const currentPaths = updatePath.slice(0, -(k + 1));
        const currentPathsLength = currentPaths.length - 1;
        if (k > 0) {
            previousObjRef = object;
        }
        while (++index < currentPaths.length) {
            const item = currentPaths[index];
            objectRef = objectRef ? objectRef[item] : object[item];
            if (currentPathsLength === index) {
                if ((isObject(objectRef) && isEmptyObject(objectRef)) ||
                    (isArray(objectRef) &&
                        !objectRef.filter((data) => isObject(data) && !isEmptyObject(data))
                            .length)) {
                    previousObjRef ? delete previousObjRef[item] : delete object[item];
                }
            }
            previousObjRef = objectRef;
        }
    }
    return result;
}
function unset(object, paths) {
    paths.forEach((path) => {
        baseUnset(object, path);
    });
    return object;
}

const isSameRef = (fieldValue, ref) => fieldValue && fieldValue.ref === ref;
function findRemovedFieldAndRemoveListener(fields, handleChange, field, forceDelete) {
    const { ref, ref: { name, type }, mutationWatcher, } = field;
    const fieldValue = fields[name];
    if (!type) {
        delete fields[name];
        return;
    }
    if ((isRadioInput(ref) || isCheckBoxInput(ref)) && fieldValue) {
        const { options } = fieldValue;
        if (isArray(options) && options.length) {
            options.filter(Boolean).forEach((option, index) => {
                const { ref, mutationWatcher } = option;
                if ((ref && isDetached(ref) && isSameRef(option, ref)) || forceDelete) {
                    removeAllEventListeners(ref, handleChange);
                    if (mutationWatcher) {
                        mutationWatcher.disconnect();
                    }
                    unset(options, [`[${index}]`]);
                }
            });
            if (options && !options.filter(Boolean).length) {
                delete fields[name];
            }
        }
        else {
            delete fields[name];
        }
    }
    else if ((isDetached(ref) && isSameRef(fieldValue, ref)) || forceDelete) {
        removeAllEventListeners(ref, handleChange);
        if (mutationWatcher) {
            mutationWatcher.disconnect();
        }
        delete fields[name];
    }
}

const defaultReturn = {
    isValid: false,
    value: '',
};
var getRadioValue = (options) => isArray(options)
    ? options.reduce((previous, option) => option && option.ref.checked
        ? {
            isValid: true,
            value: option.ref.value,
        }
        : previous, defaultReturn)
    : defaultReturn;

var getMultipleSelectValue = (options) => [...options]
    .filter(({ selected }) => selected)
    .map(({ value }) => value);

var isFileInput = (element) => element.type === 'file';

var isMultipleSelect = (element) => element.type === `${SELECT}-multiple`;

var isEmptyString = (value) => value === '';

const defaultResult = {
    value: false,
    isValid: false,
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
    if (isArray(options)) {
        if (options.length > 1) {
            const values = options
                .filter((option) => option && option.ref.checked)
                .map(({ ref: { value } }) => value);
            return { value: values, isValid: !!values.length };
        }
        const { checked, value, attributes } = options[0].ref;
        return checked
            ? attributes && !isUndefined(attributes.value)
                ? isUndefined(value) || isEmptyString(value)
                    ? validResult
                    : { value: value, isValid: true }
                : validResult
            : defaultResult;
    }
    return defaultResult;
};

function getFieldValue(fields, ref) {
    const { name, value } = ref;
    const field = fields[name];
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return field ? getRadioValue(field.options).value : '';
    }
    if (isMultipleSelect(ref)) {
        return getMultipleSelectValue(ref.options);
    }
    if (isCheckBoxInput(ref)) {
        return field ? getCheckboxValue(field.options).value : false;
    }
    return value;
}

var isString = (value) => typeof value === 'string';

var getFieldsValues = (fields, search) => {
    const output = {};
    for (const name in fields) {
        if (isUndefined(search) ||
            (isString(search)
                ? name.startsWith(search)
                : isArray(search)
                    ? search.find((data) => name.startsWith(data))
                    : search && search.nest)) {
            output[name] = getFieldValue(fields, fields[name].ref);
        }
    }
    return output;
};

var compareObject = (objectA = {}, objectB = {}) => {
    const objectAKeys = Object.keys(objectA);
    const objectBKeys = Object.keys(objectB);
    return (objectAKeys.length === objectBKeys.length &&
        objectAKeys.every((key) => objectB[key] && objectB[key] === objectA[key]));
};

var isSameError = (error, { type, types, message }) => isObject(error) &&
    error.type === type &&
    error.message === message &&
    compareObject(error.types, types);

function shouldRenderBasedOnError({ errors, name, error, validFields, fieldsWithValidation, }) {
    const isFieldValid = isEmptyObject(error);
    const isFormValid = isEmptyObject(errors);
    const currentFieldError = get(error, name);
    const existFieldError = get(errors, name);
    if ((isFieldValid && validFields.has(name)) ||
        (existFieldError && existFieldError.isManual)) {
        return false;
    }
    if (isFormValid !== isFieldValid ||
        (!isFormValid && !existFieldError) ||
        (isFieldValid && fieldsWithValidation.has(name) && !validFields.has(name))) {
        return true;
    }
    return currentFieldError && !isSameError(existFieldError, currentFieldError);
}

var isRegex = (value) => value instanceof RegExp;

var getValueAndMessage = (validationData) => {
    const isValueMessage = (value) => isObject(value) && !isRegex(value);
    return isValueMessage(validationData)
        ? validationData
        : {
            value: validationData,
            message: '',
        };
};

var isFunction = (value) => typeof value === 'function';

var isBoolean = (value) => typeof value === 'boolean';

var isMessage = (value) => isString(value) || (isObject(value) && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(value));

function getValidateError(result, ref, type = 'validate') {
    if (isMessage(result) || (isBoolean(result) && !result)) {
        return {
            type,
            message: isMessage(result) ? result : '',
            ref,
        };
    }
}

var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => {
    if (validateAllFieldCriteria) {
        const error = errors[name];
        return Object.assign(Object.assign({}, error), { types: Object.assign(Object.assign({}, (error && error.types ? error.types : {})), { [type]: message || true }) });
    }
    return {};
};

var validateField = async (fieldsRef, validateAllFieldCriteria, { ref, ref: { type, value, name }, options, required, maxLength, minLength, min, max, pattern, validate, }) => {
    var _a;
    const fields = fieldsRef.current;
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = isEmptyString(value);
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = Object.assign({ type: exceedMax ? maxType : minType, message,
            ref }, (exceedMax
            ? appendErrorsCurry(maxType, message)
            : appendErrorsCurry(minType, message)));
        if (!validateAllFieldCriteria) {
            return error;
        }
    };
    if (required &&
        ((!isRadio && !isCheckBox && (isEmpty || isNullOrUndefined(value))) ||
            (isBoolean(value) && !value) ||
            (isCheckBox && !getCheckboxValue(options).isValid) ||
            (isRadio && !getRadioValue(options).isValid))) {
        const { value: requiredValue, message: requiredMessage } = isMessage(required)
            ? { value: !!required, message: required }
            : getValueAndMessage(required);
        if (requiredValue) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.required, message: requiredMessage, ref: isRadioOrCheckbox ? (_a = fields[name].options) === null || _a === void 0 ? void 0 : _a[0].ref : ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.required, requiredMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (!isNullOrUndefined(min) || !isNullOrUndefined(max)) {
        let exceedMax;
        let exceedMin;
        const { value: maxValue, message: maxMessage } = getValueAndMessage(max);
        const { value: minValue, message: minMessage } = getValueAndMessage(min);
        if (type === 'number' || (!type && !isNaN(value))) {
            const valueNumber = ref.valueAsNumber || parseFloat(value);
            if (!isNullOrUndefined(maxValue)) {
                exceedMax = valueNumber > maxValue;
            }
            if (!isNullOrUndefined(minValue)) {
                exceedMin = valueNumber < minValue;
            }
        }
        else {
            const valueDate = ref.valueAsDate || new Date(value);
            if (isString(maxValue)) {
                exceedMax = valueDate > new Date(maxValue);
            }
            if (isString(minValue)) {
                exceedMin = valueDate < new Date(minValue);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxMessage, minMessage, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (isString(value) && !isEmpty && (maxLength || minLength)) {
        const { value: maxLengthValue, message: maxLengthMessage, } = getValueAndMessage(maxLength);
        const { value: minLengthValue, message: minLengthMessage, } = getValueAndMessage(minLength);
        const inputLength = value.toString().length;
        const exceedMax = !isNullOrUndefined(maxLengthValue) && inputLength > maxLengthValue;
        const exceedMin = !isNullOrUndefined(minLengthValue) && inputLength < minLengthValue;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxLengthMessage, minLengthMessage);
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (pattern && !isEmpty) {
        const { value: patternValue, message: patternMessage } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !patternValue.test(value)) {
            error[name] = Object.assign({ type: INPUT_VALIDATION_RULES.pattern, message: patternMessage, ref }, appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, patternMessage));
            if (!validateAllFieldCriteria) {
                return error;
            }
        }
    }
    if (validate) {
        const fieldValue = getFieldValue(fields, ref);
        const validateRef = isRadioOrCheckbox && options ? options[0].ref : ref;
        if (isFunction(validate)) {
            const result = await validate(fieldValue);
            const validateError = getValidateError(result, validateRef);
            if (validateError) {
                error[name] = Object.assign(Object.assign({}, validateError), appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message));
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
        else if (isObject(validate)) {
            let validationResult = {};
            for (const [key, validateFunction] of Object.entries(validate)) {
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateResult = await validateFunction(fieldValue);
                const validateError = getValidateError(validateResult, validateRef, key);
                if (validateError) {
                    validationResult = Object.assign(Object.assign({}, validateError), appendErrorsCurry(key, validateError.message));
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = Object.assign({ ref: validateRef }, validationResult);
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    return error;
};

const parseErrorSchema = (error, validateAllFieldCriteria) => isArray(error.inner)
    ? error.inner.reduce((previous, { path, message, type }) => (Object.assign(Object.assign({}, previous), (path
        ? previous[path] && validateAllFieldCriteria
            ? {
                [path]: appendErrors(path, validateAllFieldCriteria, previous, type, message),
            }
            : {
                [path]: previous[path] || Object.assign({ message,
                    type }, (validateAllFieldCriteria
                    ? {
                        types: { [type]: message || true },
                    }
                    : {})),
            }
        : {}))), {})
    : {
        [error.path]: { message: error.message, type: error.type },
    };
async function validateWithSchema(validationSchema, validateAllFieldCriteria, data, validationResolver, context) {
    if (validationResolver) {
        return validationResolver(data, context);
    }
    try {
        return {
            values: await validationSchema.validate(data, {
                abortEarly: false,
                context,
            }),
            errors: {},
        };
    }
    catch (e) {
        return {
            values: {},
            errors: transformToNestObject(parseErrorSchema(e, validateAllFieldCriteria)),
        };
    }
}

var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);

const getPath = (path, values) => {
    const getInnerPath = (value, key, isObject) => {
        const pathWithIndex = isObject ? `${path}.${key}` : `${path}[${key}]`;
        return isPrimitive(value) ? pathWithIndex : getPath(pathWithIndex, value);
    };
    return isArray(values)
        ? values.map((value, key) => getInnerPath(value, key))
        : Object.entries(values).map(([key, value]) => getInnerPath(value, key, true));
};
var getPath$1 = (parentPath, value) => getPath(parentPath, value).flat(Infinity);

var assignWatchFields = (fieldValues, fieldName, watchFields, inputValue, isSingleField) => {
    let value;
    watchFields.add(fieldName);
    if (isEmptyObject(fieldValues)) {
        value = undefined;
    }
    else if (!isUndefined(fieldValues[fieldName])) {
        value = fieldValues[fieldName];
        watchFields.add(fieldName);
    }
    else {
        value = get(transformToNestObject(fieldValues), fieldName);
        if (!isUndefined(value)) {
            getPath$1(fieldName, value).forEach((name) => watchFields.add(name));
        }
    }
    return isUndefined(value)
        ? isSingleField
            ? inputValue
            : get(inputValue, fieldName)
        : value;
};

var skipValidation = ({ isOnChange, hasError, isBlurEvent, isOnSubmit, isReValidateOnSubmit, isOnBlur, isReValidateOnBlur, isSubmitted, }) => (isOnChange && isBlurEvent) ||
    (isOnSubmit && isReValidateOnSubmit) ||
    (isOnSubmit && !isSubmitted) ||
    (isOnBlur && !isBlurEvent && !hasError) ||
    (isReValidateOnBlur && !isBlurEvent && hasError) ||
    (isReValidateOnSubmit && isSubmitted);

var getFieldArrayParentName = (name) => name.substring(0, name.indexOf('['));

var getFieldValueByName = (fields, name) => {
    const results = transformToNestObject(getFieldsValues(fields));
    return name ? get(results, name, results) : results;
};

function getIsFieldsDifferent(referenceArray, differenceArray) {
    let isMatch = false;
    if (!isArray(referenceArray) ||
        !isArray(differenceArray) ||
        referenceArray.length !== differenceArray.length) {
        return true;
    }
    for (let i = 0; i < referenceArray.length; i++) {
        if (isMatch) {
            break;
        }
        const dataA = referenceArray[i];
        const dataB = differenceArray[i];
        if (isUndefined(dataB) ||
            Object.keys(dataA).length !== Object.keys(dataB).length) {
            isMatch = true;
            break;
        }
        for (const key in dataA) {
            if (dataA[key] !== dataB[key]) {
                isMatch = true;
                break;
            }
        }
    }
    return isMatch;
}

const isMatchFieldArrayName = (name, searchName) => RegExp(`^${searchName}[\\d+]`.replace(/\[/g, '\\[').replace(/\]/g, '\\]')).test(name);
var isNameInFieldArray = (names, name) => [...names].some((current) => isMatchFieldArrayName(name, current));

var isSelectInput = (element) => element.type === `${SELECT}-one`;

function onDomRemove(element, onDetachCallback) {
    const observer = new MutationObserver(() => {
        if (isDetached(element)) {
            observer.disconnect();
            onDetachCallback();
        }
    });
    observer.observe(window.document, {
        childList: true,
        subtree: true,
    });
    return observer;
}

var modeChecker = (mode) => ({
    isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
    isOnBlur: mode === VALIDATION_MODE.onBlur,
    isOnChange: mode === VALIDATION_MODE.onChange,
});

var isRadioOrCheckboxFunction = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);

function useForm({ mode = VALIDATION_MODE.onSubmit, reValidateMode = VALIDATION_MODE.onChange, validationSchema, validationResolver, validationContext, defaultValues = {}, submitFocusError = true, validateCriteriaMode, } = {}) {
    const fieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const errorsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const touchedFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const fieldArrayDefaultValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const watchFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const dirtyFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const fieldsWithValidationRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const validFieldsRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const isValidRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    const defaultValuesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(defaultValues);
    const defaultValuesAtRenderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const isUnMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isWatchAllRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isSubmittedRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const isDirtyRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const submitCountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
    const isSubmittingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);
    const handleChangeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    const resetFieldArrayFunctionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({});
    const validationContextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(validationContext);
    const fieldArrayNamesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new Set());
    const [, render] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
    const { isOnBlur, isOnSubmit, isOnChange } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(mode)).current;
    const validateAllFieldCriteria = validateCriteriaMode === 'all';
    const isWindowUndefined = typeof window === UNDEFINED;
    const shouldValidateSchemaOrResolver = !!(validationSchema || validationResolver);
    const isWeb = typeof document !== UNDEFINED &&
        !isWindowUndefined &&
        !isUndefined(window.HTMLElement);
    const isProxyEnabled = isWeb ? 'Proxy' in window : typeof Proxy !== UNDEFINED;
    const readFormStateRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])({
        dirty: !isProxyEnabled,
        dirtyFields: !isProxyEnabled,
        isSubmitted: isOnSubmit,
        submitCount: !isProxyEnabled,
        touched: !isProxyEnabled,
        isSubmitting: !isProxyEnabled,
        isValid: !isProxyEnabled,
    });
    const { isOnBlur: isReValidateOnBlur, isOnSubmit: isReValidateOnSubmit, } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(modeChecker(reValidateMode)).current;
    validationContextRef.current = validationContext;
    const reRender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (!isUnMount.current) {
            render({});
        }
    }, []);
    const shouldRenderBaseOnError = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, error, shouldRender = false) => {
        let shouldReRender = shouldRender ||
            shouldRenderBasedOnError({
                errors: errorsRef.current,
                error,
                name,
                validFields: validFieldsRef.current,
                fieldsWithValidation: fieldsWithValidationRef.current,
            });
        if (isEmptyObject(error)) {
            if (fieldsWithValidationRef.current.has(name) ||
                shouldValidateSchemaOrResolver) {
                validFieldsRef.current.add(name);
                shouldReRender = shouldReRender || get(errorsRef.current, name);
            }
            errorsRef.current = unset(errorsRef.current, [name]);
        }
        else {
            const previousError = get(errorsRef.current, name);
            validFieldsRef.current.delete(name);
            shouldReRender =
                shouldReRender ||
                    (previousError
                        ? !isSameError(previousError, error[name])
                        : true);
            set(errorsRef.current, name, error[name]);
        }
        if (shouldReRender && !isNullOrUndefined(shouldRender)) {
            reRender();
            return true;
        }
    }, [reRender, shouldValidateSchemaOrResolver]);
    const setFieldValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, rawValue) => {
        const { ref, options } = field;
        const value = isWeb && isHTMLElement(ref) && isNullOrUndefined(rawValue)
            ? ''
            : rawValue;
        if (isRadioInput(ref) && options) {
            options.forEach(({ ref: radioRef }) => (radioRef.checked = radioRef.value === value));
        }
        else if (isFileInput(ref)) {
            if (isString(value)) {
                ref.value = value;
            }
            else {
                ref.files = value;
            }
        }
        else if (isMultipleSelect(ref)) {
            [...ref.options].forEach((selectRef) => (selectRef.selected = value.includes(selectRef.value)));
        }
        else if (isCheckBoxInput(ref) && options) {
            options.length > 1
                ? options.forEach(({ ref: checkboxRef }) => (checkboxRef.checked = value.includes(checkboxRef.value)))
                : (options[0].ref.checked = !!value);
        }
        else {
            ref.value = value;
        }
    }, [isWeb]);
    const setDirty = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name) => {
        if (!fieldsRef.current[name] ||
            (!readFormStateRef.current.dirty && !readFormStateRef.current.dirtyFields)) {
            return false;
        }
        let isFieldDirty = defaultValuesAtRenderRef.current[name] !==
            getFieldValue(fieldsRef.current, fieldsRef.current[name].ref);
        const isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
        const previousDirtyFieldsLength = dirtyFieldsRef.current.size;
        if (isFieldArray) {
            const fieldArrayName = getFieldArrayParentName(name);
            isFieldDirty = getIsFieldsDifferent(getFieldValueByName(fieldsRef.current, fieldArrayName), get(defaultValuesRef.current, fieldArrayName));
        }
        const isDirtyChanged = (isFieldArray ? isDirtyRef.current : dirtyFieldsRef.current.has(name)) !==
            isFieldDirty;
        if (isFieldDirty) {
            dirtyFieldsRef.current.add(name);
        }
        else {
            dirtyFieldsRef.current.delete(name);
        }
        isDirtyRef.current = isFieldArray
            ? isFieldDirty
            : !!dirtyFieldsRef.current.size;
        return readFormStateRef.current.dirty
            ? isDirtyChanged
            : previousDirtyFieldsLength !== dirtyFieldsRef.current.size;
    }, []);
    const setInternalValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value, parentFieldName) => {
        const isValueArray = isArray(value);
        for (const key in value) {
            const fieldName = `${parentFieldName || name}${isValueArray ? `[${key}]` : `.${key}`}`;
            const field = fieldsRef.current[fieldName];
            if (isObject(value[key])) {
                setInternalValues(name, value[key], fieldName);
            }
            if (field) {
                setFieldValue(field, value[key]);
                setDirty(fieldName);
            }
        }
    }, [setFieldValue, setDirty]);
    const setInternalValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((name, value) => {
        const field = fieldsRef.current[name];
        if (field) {
            setFieldValue(field, value);
            const output = setDirty(name);
            if (isBoolean(output)) {
                return output;
            }
        }
        else if (!isPrimitive(value)) {
            setInternalValues(name, value);
        }
    }, [setDirty, setFieldValue, setInternalValues]);
    const executeValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (name, skipReRender) => {
        const field = fieldsRef.current[name];
        if (field) {
            const error = await validateField(fieldsRef, validateAllFieldCriteria, field);
            shouldRenderBaseOnError(name, error, skipReRender ? null : false);
            return isEmptyObject(error);
        }
        return false;
    }, [shouldRenderBaseOnError, validateAllFieldCriteria]);
    const executeSchemaOrResolverValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (payload) => {
        const { errors } = await validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fieldsRef.current), validationResolver, validationContextRef.current);
        const previousFormIsValid = isValidRef.current;
        isValidRef.current = isEmptyObject(errors);
        if (isArray(payload)) {
            payload.forEach((name) => {
                const error = get(errors, name);
                if (error) {
                    set(errorsRef.current, name, error);
                }
                else {
                    unset(errorsRef.current, [name]);
                }
            });
            reRender();
        }
        else {
            const error = get(errors, payload);
            shouldRenderBaseOnError(payload, (error ? { [payload]: error } : {}), previousFormIsValid !== isValidRef.current);
        }
        return isEmptyObject(errorsRef.current);
    }, [
        reRender,
        shouldRenderBaseOnError,
        validateAllFieldCriteria,
        validationResolver,
        validationSchema,
    ]);
    const triggerValidation = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (payload) => {
        const fields = payload || Object.keys(fieldsRef.current);
        if (shouldValidateSchemaOrResolver) {
            return executeSchemaOrResolverValidation(fields);
        }
        if (isArray(fields)) {
            const result = await Promise.all(fields.map(async (data) => await executeValidation(data, true)));
            reRender();
            return result.every(Boolean);
        }
        return await executeValidation(fields);
    }, [
        executeSchemaOrResolverValidation,
        executeValidation,
        reRender,
        shouldValidateSchemaOrResolver,
    ]);
    const isFieldWatched = (name) => isWatchAllRef.current ||
        watchFieldsRef.current.has(name) ||
        watchFieldsRef.current.has((name.match(/\w+/) || [])[0]);
    function setValue(names, valueOrShouldValidate, shouldValidate) {
        let shouldRender = false;
        const isArrayValue = isArray(names);
        (isArrayValue
            ? names
            : [names]).forEach((name) => {
            const isStringFieldName = isString(name);
            shouldRender =
                setInternalValue(isStringFieldName ? name : Object.keys(name)[0], isStringFieldName
                    ? valueOrShouldValidate
                    : Object.values(name)[0]) || isArrayValue
                    ? true
                    : isFieldWatched(name);
        });
        if (shouldRender || isArrayValue) {
            reRender();
        }
        if (shouldValidate || (isArrayValue && valueOrShouldValidate)) {
            triggerValidation(isArrayValue ? undefined : names);
        }
    }
    handleChangeRef.current = handleChangeRef.current
        ? handleChangeRef.current
        : async ({ type, target }) => {
            const name = target ? target.name : '';
            const fields = fieldsRef.current;
            const errors = errorsRef.current;
            const field = fields[name];
            const currentError = get(errors, name);
            let error;
            if (!field) {
                return;
            }
            const isBlurEvent = type === EVENTS.BLUR;
            const shouldSkipValidation = skipValidation({
                hasError: !!currentError,
                isOnChange,
                isBlurEvent,
                isOnSubmit,
                isReValidateOnSubmit,
                isOnBlur,
                isReValidateOnBlur,
                isSubmitted: isSubmittedRef.current,
            });
            const shouldUpdateDirty = setDirty(name);
            let shouldRender = isFieldWatched(name) || shouldUpdateDirty;
            if (isBlurEvent &&
                !get(touchedFieldsRef.current, name) &&
                readFormStateRef.current.touched) {
                set(touchedFieldsRef.current, name, true);
                shouldRender = true;
            }
            if (shouldSkipValidation) {
                return shouldRender && reRender();
            }
            if (shouldValidateSchemaOrResolver) {
                const { errors } = await validateWithSchema(validationSchema, validateAllFieldCriteria, getFieldValueByName(fields), validationResolver, validationContextRef.current);
                const previousFormIsValid = isValidRef.current;
                isValidRef.current = isEmptyObject(errors);
                error = (get(errors, name)
                    ? { [name]: get(errors, name) }
                    : {});
                if (previousFormIsValid !== isValidRef.current) {
                    shouldRender = true;
                }
            }
            else {
                error = await validateField(fieldsRef, validateAllFieldCriteria, field);
            }
            if (!shouldRenderBaseOnError(name, error) && shouldRender) {
                reRender();
            }
        };
    const validateSchemaOrResolver = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((values = {}) => {
        const fieldValues = isEmptyObject(defaultValuesRef.current)
            ? getFieldsValues(fieldsRef.current)
            : defaultValuesRef.current;
        validateWithSchema(validationSchema, validateAllFieldCriteria, transformToNestObject(Object.assign(Object.assign({}, fieldValues), values)), validationResolver, validationContextRef.current).then(({ errors }) => {
            const previousFormIsValid = isValidRef.current;
            isValidRef.current = isEmptyObject(errors);
            if (previousFormIsValid !== isValidRef.current) {
                reRender();
            }
        });
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reRender, validateAllFieldCriteria, validationResolver]);
    const removeFieldEventListener = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => {
        if (handleChangeRef.current && field) {
            findRemovedFieldAndRemoveListener(fieldsRef.current, handleChangeRef.current, field, forceDelete);
        }
    }, []);
    const removeFieldEventListenerAndRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((field, forceDelete) => {
        if (!field ||
            (field &&
                isNameInFieldArray(fieldArrayNamesRef.current, field.ref.name) &&
                !forceDelete)) {
            return;
        }
        removeFieldEventListener(field, forceDelete);
        const { name } = field.ref;
        errorsRef.current = unset(errorsRef.current, [name]);
        touchedFieldsRef.current = unset(touchedFieldsRef.current, [name]);
        defaultValuesAtRenderRef.current = unset(defaultValuesAtRenderRef.current, [name]);
        [
            dirtyFieldsRef,
            fieldsWithValidationRef,
            validFieldsRef,
            watchFieldsRef,
        ].forEach((data) => data.current.delete(name));
        if (readFormStateRef.current.isValid ||
            readFormStateRef.current.touched) {
            reRender();
            if (shouldValidateSchemaOrResolver) {
                validateSchemaOrResolver();
            }
        }
    }, [
        reRender,
        shouldValidateSchemaOrResolver,
        validateSchemaOrResolver,
        removeFieldEventListener,
    ]);
    function clearError(name) {
        if (name) {
            unset(errorsRef.current, isArray(name) ? name : [name]);
        }
        else {
            errorsRef.current = {};
        }
        reRender();
    }
    const setInternalError = ({ name, type, types, message, shouldRender, }) => {
        const field = fieldsRef.current[name];
        if (!isSameError(get(errorsRef.current, name), {
            type,
            message,
            types,
        })) {
            set(errorsRef.current, name, {
                type,
                types,
                message,
                ref: field ? field.ref : {},
                isManual: true,
            });
            if (shouldRender) {
                reRender();
            }
        }
    };
    function setError(name, type = '', message) {
        if (isString(name)) {
            setInternalError(Object.assign(Object.assign({ name }, (isObject(type)
                ? {
                    types: type,
                    type: '',
                }
                : {
                    type,
                    message,
                })), { shouldRender: true }));
        }
        else if (isArray(name)) {
            name.forEach((error) => setInternalError(Object.assign({}, error)));
            reRender();
        }
    }
    function watch(fieldNames, defaultValue) {
        const watchFields = watchFieldsRef.current;
        const isDefaultValueUndefined = isUndefined(defaultValue);
        const combinedDefaultValues = isDefaultValueUndefined
            ? defaultValuesRef.current
            : defaultValue;
        const fieldValues = getFieldsValues(fieldsRef.current, fieldNames);
        if (isString(fieldNames)) {
            return assignWatchFields(fieldValues, fieldNames, watchFields, isDefaultValueUndefined
                ? get(combinedDefaultValues, fieldNames)
                : defaultValue, true);
        }
        if (isArray(fieldNames)) {
            return fieldNames.reduce((previous, name) => (Object.assign(Object.assign({}, previous), { [name]: assignWatchFields(fieldValues, name, watchFields, combinedDefaultValues) })), {});
        }
        isWatchAllRef.current = true;
        const result = (!isEmptyObject(fieldValues) && fieldValues) || combinedDefaultValues;
        return fieldNames && fieldNames.nest
            ? transformToNestObject(result)
            : result;
    }
    function unregister(name) {
        if (fieldsRef.current) {
            (isArray(name) ? name : [name]).forEach((fieldName) => removeFieldEventListenerAndRef(fieldsRef.current[fieldName], true));
        }
    }
    function registerFieldsRef(ref, validateOptions = {}) {
        if (!ref.name) {
            // eslint-disable-next-line no-console
            return console.warn('Missing name @', ref);
        }
        const { name, type, value } = ref;
        const fieldRefAndValidationOptions = Object.assign({ ref }, validateOptions);
        const fields = fieldsRef.current;
        const isRadioOrCheckbox = isRadioOrCheckboxFunction(ref);
        let field = fields[name];
        let isEmptyDefaultValue = true;
        let isFieldArray;
        let defaultValue;
        if (isRadioOrCheckbox
            ? field &&
                isArray(field.options) &&
                field.options.filter(Boolean).find((option) => {
                    return value === option.ref.value && option.ref === ref;
                })
            : field && ref === field.ref) {
            fields[name] = Object.assign(Object.assign({}, field), validateOptions);
            return;
        }
        if (type) {
            const mutationWatcher = onDomRemove(ref, () => removeFieldEventListenerAndRef(field));
            field = isRadioOrCheckbox
                ? Object.assign({ options: [
                        ...((field && field.options) || []),
                        {
                            ref,
                            mutationWatcher,
                        },
                    ], ref: { type, name } }, validateOptions) : Object.assign(Object.assign({}, fieldRefAndValidationOptions), { mutationWatcher });
        }
        else {
            field = fieldRefAndValidationOptions;
        }
        fields[name] = field;
        if (!isEmptyObject(defaultValuesRef.current)) {
            defaultValue = get(defaultValuesRef.current, name);
            isEmptyDefaultValue = isUndefined(defaultValue);
            isFieldArray = isNameInFieldArray(fieldArrayNamesRef.current, name);
            if (!isEmptyDefaultValue && !isFieldArray) {
                setFieldValue(field, defaultValue);
            }
        }
        if (shouldValidateSchemaOrResolver &&
            !isFieldArray &&
            readFormStateRef.current.isValid) {
            validateSchemaOrResolver();
        }
        else if (!isEmptyObject(validateOptions)) {
            fieldsWithValidationRef.current.add(name);
            if (!isOnSubmit && readFormStateRef.current.isValid) {
                validateField(fieldsRef, validateAllFieldCriteria, field).then((error) => {
                    const previousFormIsValid = isValidRef.current;
                    isEmptyObject(error)
                        ? validFieldsRef.current.add(name)
                        : (isValidRef.current = false);
                    if (previousFormIsValid !== isValidRef.current) {
                        reRender();
                    }
                });
            }
        }
        if (!defaultValuesAtRenderRef.current[name] &&
            !(isFieldArray && isEmptyDefaultValue)) {
            defaultValuesAtRenderRef.current[name] = isEmptyDefaultValue ? getFieldValue(fields, field.ref) : defaultValue;
        }
        if (type) {
            attachEventListeners({
                field: isRadioOrCheckbox && field.options
                    ? field.options[field.options.length - 1]
                    : field,
                isRadioOrCheckbox: isRadioOrCheckbox || isSelectInput(ref),
                handleChange: handleChangeRef.current,
            });
        }
    }
    function register(refOrValidationOptions, validationOptions) {
        if (isWindowUndefined) {
            return;
        }
        if (isString(refOrValidationOptions)) {
            registerFieldsRef({ name: refOrValidationOptions }, validationOptions);
            return;
        }
        if (isObject(refOrValidationOptions) && 'name' in refOrValidationOptions) {
            registerFieldsRef(refOrValidationOptions, validationOptions);
            return;
        }
        return (ref) => ref && registerFieldsRef(ref, refOrValidationOptions);
    }
    const handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((callback) => async (e) => {
        if (e) {
            e.preventDefault();
            e.persist();
        }
        let fieldErrors = {};
        const fields = fieldsRef.current;
        let fieldValues = getFieldsValues(fields);
        if (readFormStateRef.current.isSubmitting) {
            isSubmittingRef.current = true;
            reRender();
        }
        try {
            if (shouldValidateSchemaOrResolver) {
                const { errors, values } = await validateWithSchema(validationSchema, validateAllFieldCriteria, transformToNestObject(fieldValues), validationResolver, validationContextRef.current);
                errorsRef.current = errors;
                fieldErrors = errors;
                fieldValues = values;
            }
            else {
                for (const field of Object.values(fields)) {
                    if (field) {
                        const { ref: { name }, } = field;
                        const fieldError = await validateField(fieldsRef, validateAllFieldCriteria, field);
                        if (fieldError[name]) {
                            set(fieldErrors, name, fieldError[name]);
                            validFieldsRef.current.delete(name);
                        }
                        else {
                            if (fieldsWithValidationRef.current.has(name)) {
                                validFieldsRef.current.add(name);
                            }
                        }
                    }
                }
            }
            if (isEmptyObject(fieldErrors)) {
                errorsRef.current = {};
                reRender();
                await callback(transformToNestObject(fieldValues), e);
            }
            else {
                errorsRef.current = fieldErrors;
                if (submitFocusError && isWeb) {
                    focusOnErrorField(fields, fieldErrors);
                }
            }
        }
        finally {
            isSubmittedRef.current = true;
            isSubmittingRef.current = false;
            submitCountRef.current = submitCountRef.current + 1;
            reRender();
        }
    }, [
        isWeb,
        reRender,
        shouldValidateSchemaOrResolver,
        submitFocusError,
        validateAllFieldCriteria,
        validationResolver,
        validationSchema,
    ]);
    const resetRefs = ({ errors, dirty, isSubmitted, touched, isValid, submitCount, dirtyFields, }) => {
        fieldsRef.current = {};
        if (!errors) {
            errorsRef.current = {};
        }
        if (!touched) {
            touchedFieldsRef.current = {};
        }
        if (!isValid) {
            validFieldsRef.current = new Set();
            fieldsWithValidationRef.current = new Set();
            isValidRef.current = true;
        }
        if (!dirty) {
            isDirtyRef.current = false;
        }
        if (!dirtyFields) {
            dirtyFieldsRef.current = new Set();
        }
        if (!isSubmitted) {
            isSubmittedRef.current = false;
        }
        if (!submitCount) {
            submitCountRef.current = 0;
        }
        defaultValuesAtRenderRef.current = {};
        fieldArrayDefaultValues.current = {};
        watchFieldsRef.current = new Set();
        isWatchAllRef.current = false;
    };
    const reset = (values, omitResetState = {}) => {
        if (isWeb) {
            for (const field of Object.values(fieldsRef.current)) {
                if (field) {
                    const { ref, options } = field;
                    const inputRef = isRadioOrCheckboxFunction(ref) && isArray(options)
                        ? options[0].ref
                        : ref;
                    if (isHTMLElement(inputRef)) {
                        try {
                            inputRef.closest('form').reset();
                            break;
                        }
                        catch (_a) { }
                    }
                }
            }
        }
        if (values) {
            defaultValuesRef.current = values;
        }
        Object.values(resetFieldArrayFunctionRef.current).forEach((resetFieldArray) => isFunction(resetFieldArray) && resetFieldArray());
        resetRefs(omitResetState);
        reRender();
    };
    function getValues(payload) {
        if (isString(payload)) {
            return fieldsRef.current[payload]
                ? getFieldValue(fieldsRef.current, fieldsRef.current[payload].ref)
                : get(defaultValuesRef.current, payload);
        }
        const fieldValues = getFieldsValues(fieldsRef.current);
        const outputValues = isEmptyObject(fieldValues)
            ? defaultValuesRef.current
            : fieldValues;
        return payload && payload.nest
            ? transformToNestObject(outputValues)
            : outputValues;
    }
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
        isUnMount.current = true;
        fieldsRef.current &&
            "development" === 'production' &&
            Object.values(fieldsRef.current).forEach((field) => removeFieldEventListenerAndRef(field, true));
    }, [removeFieldEventListenerAndRef]);
    if (!shouldValidateSchemaOrResolver) {
        isValidRef.current =
            validFieldsRef.current.size >= fieldsWithValidationRef.current.size &&
                isEmptyObject(errorsRef.current);
    }
    const formState = {
        dirty: isDirtyRef.current,
        dirtyFields: dirtyFieldsRef.current,
        isSubmitted: isSubmittedRef.current,
        submitCount: submitCountRef.current,
        touched: touchedFieldsRef.current,
        isSubmitting: isSubmittingRef.current,
        isValid: isOnSubmit
            ? isSubmittedRef.current && isEmptyObject(errorsRef.current)
            : isValidRef.current,
    };
    const commonProps = {
        triggerValidation,
        setValue: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setValue, [
            reRender,
            setInternalValue,
            triggerValidation,
        ]),
        register: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(register, [
            defaultValuesRef.current,
            defaultValuesAtRenderRef.current,
        ]),
        unregister: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(unregister, []),
        getValues: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getValues, []),
        formState: isProxyEnabled
            ? new Proxy(formState, {
                get: (obj, prop) => {
                    if (prop in obj) {
                        readFormStateRef.current[prop] = true;
                        return obj[prop];
                    }
                    return undefined;
                },
            })
            : formState,
    };
    const control = Object.assign(Object.assign(Object.assign({ removeFieldEventListener,
        reRender }, (shouldValidateSchemaOrResolver
        ? { validateSchemaIsValid: validateSchemaOrResolver }
        : {})), { mode: {
            isOnBlur,
            isOnSubmit,
            isOnChange,
        }, reValidateMode: {
            isReValidateOnBlur,
            isReValidateOnSubmit,
        }, errorsRef,
        touchedFieldsRef,
        fieldsRef,
        isWatchAllRef,
        watchFieldsRef,
        resetFieldArrayFunctionRef,
        fieldArrayDefaultValues,
        validFieldsRef,
        dirtyFieldsRef,
        fieldsWithValidationRef,
        fieldArrayNamesRef,
        isDirtyRef,
        readFormStateRef,
        defaultValuesRef }), commonProps);
    return Object.assign({ watch,
        control,
        handleSubmit, reset: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(reset, []), clearError: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(clearError, []), setError: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(setError, []), errors: errorsRef.current }, commonProps);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const FormGlobalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
function useFormContext() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(FormGlobalContext);
}
function FormContext(_a) {
    var { children, formState, errors } = _a, restMethods = __rest(_a, ["children", "formState", "errors"]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(FormGlobalContext.Provider, { value: Object.assign(Object.assign({}, restMethods), { formState, errors }) }, children));
}

var generateId = () => {
    const d = typeof performance === UNDEFINED ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

const appendId = (value, keyName) => (Object.assign({ [keyName]: generateId() }, (isObject(value) ? value : { value })));
const mapIds = (data, keyName) => (isArray(data) ? data : []).map((value) => appendId(value, keyName));

var getSortRemovedItems = (indexes, removeIndexes, updatedIndexes = [], count = 0, notFoundIndexes = []) => {
    for (const removeIndex of removeIndexes) {
        if (indexes.indexOf(removeIndex) < 0) {
            notFoundIndexes.push(removeIndex);
        }
    }
    for (const index of indexes.sort()) {
        if (removeIndexes.indexOf(index) > -1) {
            updatedIndexes.push(-1);
            count++;
        }
        else {
            updatedIndexes.push(index -
                count -
                (notFoundIndexes.length
                    ? notFoundIndexes
                        .map((notFoundIndex) => notFoundIndex < index)
                        .filter(Boolean).length
                    : 0));
        }
    }
    return updatedIndexes;
};

const removeAt = (data, index) => [
    ...data.slice(0, index),
    ...data.slice(index + 1),
];
function removeAtIndexes(data, index) {
    let k = -1;
    while (++k < data.length) {
        if (index.indexOf(k) >= 0) {
            delete data[k];
        }
    }
    return data.filter(Boolean);
}
var removeArrayAt = (data, index) => isUndefined(index)
    ? []
    : isArray(index)
        ? removeAtIndexes(data, index)
        : removeAt(data, index);

var moveArrayAt = (data, from, to) => isArray(data) ? data.splice(to, 0, data.splice(from, 1)[0]) : [];

var swapArrayAt = (data, indexA, indexB) => {
    const temp = [data[indexB], data[indexA]];
    data[indexA] = temp[0];
    data[indexB] = temp[1];
};

function prepend(data, value) {
    return [...(isArray(value) ? value : [value || null]), ...data];
}

function insert(data, index, value) {
    return [
        ...data.slice(0, index),
        ...(isArray(value) ? value : [value || null]),
        ...data.slice(index),
    ];
}

var fillEmptyArray = (value) => isArray(value) ? Array(value.length).fill(null) : null;

const useFieldArray = ({ control, name, keyName = 'id', }) => {
    const methods = useFormContext();
    const { isWatchAllRef, resetFieldArrayFunctionRef, fieldArrayNamesRef, reRender, fieldsRef, getValues, defaultValuesRef, removeFieldEventListener, errorsRef, dirtyFieldsRef, isDirtyRef, touchedFieldsRef, readFormStateRef, watchFieldsRef, validFieldsRef, fieldsWithValidationRef, fieldArrayDefaultValues, validateSchemaIsValid, } = control || methods.control;
    const getDefaultValues = () => [
        ...get(fieldArrayDefaultValues.current[getFieldArrayParentName(name)]
            ? fieldArrayDefaultValues.current
            : defaultValuesRef.current, name, []),
    ];
    const memoizedDefaultValues = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(getDefaultValues());
    const [fields, setField] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(mapIds(memoizedDefaultValues.current, keyName));
    const [isDeleted, setIsDeleted] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    const allFields = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fields);
    const isNameKey = isKey(name);
    allFields.current = fields;
    if (isNameKey) {
        fieldArrayDefaultValues.current[name] = memoizedDefaultValues.current;
    }
    const appendValueWithKey = (values) => values.map((value) => appendId(value, keyName));
    const setFieldAndValidState = (fieldsValues) => {
        setField(fieldsValues);
        if (readFormStateRef.current.isValid && validateSchemaIsValid) {
            validateSchemaIsValid({
                [name]: fieldsValues,
            });
        }
    };
    const modifyDirtyFields = ({ shouldRender, isRemove, isPrePend, index, value = {}, } = {}) => {
        let render = shouldRender;
        const values = isArray(value) ? value : [value];
        if (readFormStateRef.current.dirty) {
            const dirtyFieldIndexesAndValues = {};
            if (isPrePend || isRemove) {
                for (const dirtyField of [...dirtyFieldsRef.current].sort()) {
                    if (isMatchFieldArrayName(dirtyField, name)) {
                        const matchedIndexes = dirtyField.match(REGEX_ARRAY_FIELD_INDEX);
                        if (matchedIndexes) {
                            const matchIndex = +matchedIndexes[matchedIndexes.length - 1];
                            if (dirtyFieldIndexesAndValues[matchIndex]) {
                                dirtyFieldIndexesAndValues[matchIndex].push(dirtyField);
                            }
                            else {
                                dirtyFieldIndexesAndValues[matchIndex] = [dirtyField];
                            }
                        }
                        dirtyFieldsRef.current.delete(dirtyField);
                    }
                }
            }
            if (!isUndefined(index) || isPrePend) {
                const updatedDirtyFieldIndexes = isUndefined(index)
                    ? []
                    : getSortRemovedItems(Object.keys(dirtyFieldIndexesAndValues).map((i) => +i), isArray(index) ? index : [index]);
                Object.values(dirtyFieldIndexesAndValues).forEach((values, index) => {
                    const updateIndex = isPrePend ? 0 : updatedDirtyFieldIndexes[index];
                    if (updateIndex > -1) {
                        for (const value of values) {
                            const matchedIndexes = value.match(REGEX_ARRAY_FIELD_INDEX);
                            if (matchedIndexes) {
                                dirtyFieldsRef.current.add(value.replace(/[\d+]([^[\d+]+)$/, `${isPrePend
                                    ? +matchedIndexes[matchedIndexes.length - 1] +
                                        values.length
                                    : updateIndex}$1`));
                            }
                        }
                    }
                });
            }
            if (!isRemove) {
                values.forEach((fieldValue, index) => Object.keys(fieldValue).forEach((key) => dirtyFieldsRef.current.add(`${name}[${isPrePend ? index : allFields.current.length + index}].${key}`)));
                isDirtyRef.current = true;
            }
            render = true;
        }
        if (render && !isWatchAllRef.current) {
            reRender();
        }
    };
    const resetFields = (flagOrFields) => {
        if (readFormStateRef.current.dirty) {
            isDirtyRef.current = isUndefined(flagOrFields)
                ? true
                : getIsFieldsDifferent(flagOrFields, defaultValuesRef.current[name] || []);
        }
        for (const key in fieldsRef.current) {
            if (isMatchFieldArrayName(key, name) && fieldsRef.current[key]) {
                removeFieldEventListener(fieldsRef.current[key], true);
            }
        }
    };
    const mapCurrentFieldsValueWithState = () => {
        const currentFieldsValue = get(getValues({ nest: true }), name);
        if (isArray(currentFieldsValue)) {
            for (let i = 0; i < currentFieldsValue.length; i++) {
                allFields.current[i] = Object.assign(Object.assign({}, allFields.current[i]), currentFieldsValue[i]);
            }
        }
    };
    const append = (value) => {
        setFieldAndValidState([
            ...allFields.current,
            ...(isArray(value)
                ? appendValueWithKey(value)
                : [appendId(value, keyName)]),
        ]);
        modifyDirtyFields({ value });
    };
    const prepend$1 = (value) => {
        let shouldRender = false;
        resetFields();
        setFieldAndValidState(prepend(allFields.current, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        if (errorsRef.current[name]) {
            errorsRef.current[name] = prepend(errorsRef.current[name], fillEmptyArray(value));
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = prepend(touchedFieldsRef.current[name], fillEmptyArray(value));
            shouldRender = true;
        }
        modifyDirtyFields({
            shouldRender,
            isPrePend: true,
            value,
        });
    };
    const remove = (index) => {
        let shouldRender = false;
        const isIndexUndefined = isUndefined(index);
        if (!isIndexUndefined) {
            mapCurrentFieldsValueWithState();
        }
        resetFields(removeArrayAt(getFieldValueByName(fieldsRef.current, name), index));
        setFieldAndValidState(removeArrayAt(allFields.current, index));
        setIsDeleted(true);
        if (errorsRef.current[name]) {
            errorsRef.current[name] = removeArrayAt(errorsRef.current[name], index);
            if (!errorsRef.current[name].filter(Boolean).length) {
                delete errorsRef.current[name];
            }
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = removeArrayAt(touchedFieldsRef.current[name], index);
            shouldRender = true;
        }
        if (readFormStateRef.current.isValid && !validateSchemaIsValid) {
            let fieldIndex = -1;
            let isFound = false;
            const isIndexUndefined = isUndefined(index);
            while (fieldIndex++ < fields.length) {
                const isLast = fieldIndex === fields.length - 1;
                const isCurrentIndex = (isArray(index) ? index : [index]).indexOf(fieldIndex) >= 0;
                if (isCurrentIndex || isIndexUndefined) {
                    isFound = true;
                }
                if (!isFound) {
                    continue;
                }
                for (const key in fields[fieldIndex]) {
                    const currentFieldName = `${name}[${fieldIndex}].${key}`;
                    if (isCurrentIndex || isLast || isIndexUndefined) {
                        validFieldsRef.current.delete(currentFieldName);
                        fieldsWithValidationRef.current.delete(currentFieldName);
                    }
                    else {
                        const previousFieldName = `${name}[${fieldIndex - 1}].${key}`;
                        if (validFieldsRef.current.has(currentFieldName)) {
                            validFieldsRef.current.add(previousFieldName);
                        }
                        if (fieldsWithValidationRef.current.has(currentFieldName)) {
                            fieldsWithValidationRef.current.add(previousFieldName);
                        }
                    }
                }
            }
        }
        modifyDirtyFields({
            shouldRender,
            isRemove: true,
            index,
        });
    };
    const insert$1 = (index, value) => {
        mapCurrentFieldsValueWithState();
        resetFields(insert(getFieldValueByName(fieldsRef.current, name), index));
        setFieldAndValidState(insert(allFields.current, index, isArray(value) ? appendValueWithKey(value) : [appendId(value, keyName)]));
        if (errorsRef.current[name]) {
            errorsRef.current[name] = insert(errorsRef.current[name], index, fillEmptyArray(value));
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            touchedFieldsRef.current[name] = insert(touchedFieldsRef.current[name], index, fillEmptyArray(value));
            reRender();
        }
    };
    const swap = (indexA, indexB) => {
        mapCurrentFieldsValueWithState();
        const fieldValues = getFieldValueByName(fieldsRef.current, name);
        swapArrayAt(fieldValues, indexA, indexB);
        resetFields(fieldValues);
        swapArrayAt(allFields.current, indexA, indexB);
        setFieldAndValidState([...allFields.current]);
        if (errorsRef.current[name]) {
            swapArrayAt(errorsRef.current[name], indexA, indexB);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            swapArrayAt(touchedFieldsRef.current[name], indexA, indexB);
            reRender();
        }
    };
    const move = (from, to) => {
        mapCurrentFieldsValueWithState();
        const fieldValues = getFieldValueByName(fieldsRef.current, name);
        moveArrayAt(fieldValues, from, to);
        resetFields(fieldValues);
        moveArrayAt(allFields.current, from, to);
        setFieldAndValidState([...allFields.current]);
        if (errorsRef.current[name]) {
            moveArrayAt(errorsRef.current[name], from, to);
        }
        if (readFormStateRef.current.touched && touchedFieldsRef.current[name]) {
            moveArrayAt(touchedFieldsRef.current[name], from, to);
            reRender();
        }
    };
    const reset = () => {
        resetFields();
        memoizedDefaultValues.current = getDefaultValues();
        setField(mapIds(memoizedDefaultValues.current, keyName));
    };
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (isNameKey &&
            isDeleted &&
            fieldArrayDefaultValues.current[name] &&
            fields.length < fieldArrayDefaultValues.current[name].length) {
            fieldArrayDefaultValues.current[name].pop();
        }
    }, [fields, name, fieldArrayDefaultValues, isDeleted, isNameKey]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (isWatchAllRef && isWatchAllRef.current) {
            reRender();
        }
        else if (watchFieldsRef) {
            for (const watchField of watchFieldsRef.current) {
                if (watchField.startsWith(name)) {
                    reRender();
                    break;
                }
            }
        }
    }, [fields, name, reRender, watchFieldsRef, isWatchAllRef]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        const resetFunctions = resetFieldArrayFunctionRef.current;
        const fieldArrayNames = fieldArrayNamesRef.current;
        fieldArrayNames.add(name);
        resetFunctions[name] = reset;
        return () => {
            resetFields();
            delete resetFunctions[name];
            fieldArrayNames.delete(name);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return {
        swap: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(swap, [name]),
        move: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(move, [name]),
        prepend: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(prepend$1, [name]),
        append: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(append, [name]),
        remove: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(remove, [fields, name]),
        insert: Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(insert$1, [name]),
        fields,
    };
};

var getInputValue = (event, isCheckboxInput) => isPrimitive(event) ||
    !isObject(event.target) ||
    (isObject(event.target) && !event.type)
    ? event
    : isCheckboxInput || isUndefined(event.target.value)
        ? event.target.checked
        : event.target.value;

const Controller = (_a) => {
    var { name, rules, as: InnerComponent, onBlur, onChange, onChangeName = VALIDATION_MODE.onChange, onBlurName = VALIDATION_MODE.onBlur, valueName, defaultValue, control, onFocus } = _a, rest = __rest(_a, ["name", "rules", "as", "onBlur", "onChange", "onChangeName", "onBlurName", "valueName", "defaultValue", "control", "onFocus"]);
    const methods = useFormContext();
    const { defaultValuesRef, setValue, register, unregister, errorsRef, removeFieldEventListener, triggerValidation, mode: { isOnSubmit, isOnBlur, isOnChange }, reValidateMode: { isReValidateOnBlur, isReValidateOnSubmit }, formState: { isSubmitted }, touchedFieldsRef, readFormStateRef, reRender, fieldsRef, fieldArrayNamesRef, } = control || methods.control;
    const [value, setInputStateValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isUndefined(defaultValue)
        ? get(defaultValuesRef.current, name)
        : defaultValue);
    const valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
    const isCheckboxInput = isBoolean(value);
    const shouldReValidateOnBlur = isOnBlur || isReValidateOnBlur;
    const rulesRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(rules);
    const onFocusRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(onFocus);
    const isNotFieldArray = !isNameInFieldArray(fieldArrayNamesRef.current, name);
    rulesRef.current = rules;
    const shouldValidate = () => !skipValidation({
        hasError: !!get(errorsRef.current, name),
        isOnBlur,
        isOnSubmit,
        isOnChange,
        isReValidateOnBlur,
        isReValidateOnSubmit,
        isSubmitted,
    });
    const commonTask = (event) => {
        const data = getInputValue(event, isCheckboxInput);
        setInputStateValue(data);
        valueRef.current = data;
        return data;
    };
    const eventWrapper = (event) => (...arg) => setValue(name, commonTask(event(arg)), shouldValidate());
    const handleChange = (event) => {
        const data = commonTask(event);
        setValue(name, data, shouldValidate());
    };
    const registerField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
        if (!isNotFieldArray) {
            removeFieldEventListener(fieldsRef.current[name], true);
        }
        register(Object.defineProperty({ name, focus: onFocusRef.current }, VALUE, {
            set(data) {
                setInputStateValue(data);
                valueRef.current = data;
            },
            get() {
                return valueRef.current;
            },
        }), rulesRef.current);
    }, [
        isNotFieldArray,
        fieldsRef,
        rulesRef,
        name,
        onFocusRef,
        register,
        removeFieldEventListener,
    ]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => () => {
        !isNameInFieldArray(fieldArrayNamesRef.current, name) && unregister(name);
    }, [unregister, name, fieldArrayNamesRef]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        registerField();
    }, [registerField]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
        if (!fieldsRef.current[name]) {
            registerField();
            if (isNotFieldArray) {
                setInputStateValue(isUndefined(defaultValue)
                    ? get(defaultValuesRef.current, name)
                    : defaultValue);
            }
        }
    });
    const props = Object.assign(Object.assign(Object.assign(Object.assign({ name }, rest), (onChange
        ? { [onChangeName]: eventWrapper(onChange) }
        : { [onChangeName]: handleChange })), { [onBlurName]: (...args) => {
            if (onBlur) {
                onBlur(args);
            }
            if (readFormStateRef.current.touched &&
                !get(touchedFieldsRef.current, name)) {
                set(touchedFieldsRef.current, name, true);
                reRender();
            }
            if (shouldReValidateOnBlur) {
                triggerValidation(name);
            }
        } }), { [valueName || (isCheckboxInput ? 'checked' : VALUE)]: value });
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(InnerComponent)
        ? Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(InnerComponent, props)
        : Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerComponent, props);
};

const ErrorMessage = (_a) => {
    var { as: InnerComponent, errors, name, message, children } = _a, rest = __rest(_a, ["as", "errors", "name", "message", "children"]);
    const methods = useFormContext();
    const error = get(errors || methods.errors, name);
    if (!error) {
        return null;
    }
    const { message: messageFromRegister, types } = error;
    const props = Object.assign(Object.assign({}, (InnerComponent ? rest : {})), { children: children
            ? children({ message: messageFromRegister || message, messages: types })
            : messageFromRegister || message });
    return InnerComponent ? (Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(InnerComponent) ? (Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(InnerComponent, props)) : (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerComponent, props))) : (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], Object.assign({}, props)));
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0Rm9ybS9Db250YWN0RnJvbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbC5zdHlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9IdG1sTGFiZWwvSHRtbExhYmVsLmpzIiwid2VicGFjazovL19OX0UvLi9jb250YWluZXIvQWdlbnQvQWNjb3VudERldGFpbHMvQWdlbnRDb250YWN0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMtc3ZnL2xpYi9hc24vRXllSW52aXNpYmxlT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy1zdmcvbGliL2Fzbi9FeWVPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL1NlYXJjaE91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvRXllSW52aXNpYmxlT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYW50LWRlc2lnbi9pY29ucy9FeWVPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BhbnQtZGVzaWduL2ljb25zL1NlYXJjaE91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0V5ZUludmlzaWJsZU91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0V5ZU91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL1NlYXJjaE91dGxpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvcmFmLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvdW5yZWFjaGFibGVFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC93YXZlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL0xvYWRpbmdJY29uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvYnV0dG9uL2J1dHRvbi1ncm91cC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jaGVja2JveC9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NoZWNrYm94L0dyb3VwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY2hlY2tib3gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9DbGVhcmFibGVMYWJlbGVkSW5wdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9Hcm91cC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2lucHV0L0lucHV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvUGFzc3dvcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9UZXh0QXJlYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmMtY2hlY2tib3gvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10ZXh0YXJlYS9lcy9SZXNpemFibGVUZXh0QXJlYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXRleHRhcmVhL2VzL2NhbGN1bGF0ZU5vZGVIZWlnaHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yYy10ZXh0YXJlYS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvbGliL3JhZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWhvb2stZm9ybS9kaXN0L3JlYWN0LWhvb2stZm9ybS5lcy5qcyJdLCJuYW1lcyI6WyJDb250YWN0Rm9ybSIsInVzZUZvcm0iLCJtb2RlIiwiY29udHJvbCIsImVycm9ycyIsImhhbmRsZVN1Ym1pdCIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicmVxdWlyZWQiLCJlbWFpbCIsInR5cGUiLCJwYXR0ZXJuIiwicGhvbmUiLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsIkZvcm1Db250cm9sIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJsYWJlbFRhZyIsImh0bWxGb3IiLCJjaGlsZHJlbiIsImVycm9yIiwiYWRkQWxsQ2xhc3NlcyIsInB1c2giLCJqb2luIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsImFueSIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZUdldCIsIkxhYmVsV3JhcHBlciIsImJhc2UiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJsZXR0ZXJTcGFjaW5nIiwidGhlbWVkIiwiSHRtbExhYmVsIiwiY29udGVudCIsInByb3BzIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsIm51bWJlciIsImFycmF5T2YiLCJBZ2VudENvbnRhY3QiLCJwcm9jZXNzZWREYXRhIiwibG9hZGluZyIsImlzRW1wdHkiLCJhZ2VudF9sb2NhdGlvbiIsImNlbGxfbnVtYmVyIiwiZm9ybWF0dGVkQWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBOztBQUN4QixpQkFBMENDLCtEQUFPLENBQUM7QUFDaERDLFFBQUksRUFBRTtBQUQwQyxHQUFELENBQWpEO0FBQUEsTUFBUUMsT0FBUixZQUFRQSxPQUFSO0FBQUEsTUFBaUJDLE1BQWpCLFlBQWlCQSxNQUFqQjtBQUFBLE1BQXlCQyxZQUF6QixZQUF5QkEsWUFBekI7O0FBR0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRDtBQUFBLFdBQVVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLENBQVY7QUFBQSxHQUFqQjs7QUFFQSxTQUNFO0FBQU0sWUFBUSxFQUFFRixZQUFZLENBQUNDLFFBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFDRSxTQUFLLEVBQUMsY0FEUjtBQUVFLFdBQU8sRUFBQyxTQUZWO0FBR0UsU0FBSyxFQUFFRixNQUFNLENBQUNNLE9BQVAsSUFBa0I7QUFBQTtBQUFB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Ozs7OztBQzdEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUo7O0FBRW5KOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixTQUFTLE1BQU0sb0NBQW9DO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsY0FBYyxlQUFlO0FBQ3RFLENBQUMsSUFBSTs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QztBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0NBQWtDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBLEtBQUs7QUFDTCxJQUFJLHVEQUFTO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwyRUFBMkUsT0FBTztBQUNsRixXQUFXO0FBQ1gsV0FBVywrQkFBK0IsS0FBSztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFLElBQUksOERBQThEO0FBQzdFLFdBQVcsNERBQWM7QUFDekIsVUFBVSwwREFBWTtBQUN0QixVQUFVLDJEQUFhO0FBQ3ZCOztBQUVBO0FBQ0EsU0FBUyxzREFBc0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0NBQXNDO0FBQ2pELGdEQUFnRCw2QkFBNkIsS0FBSztBQUNsRix3QkFBd0IsMkRBQTJEO0FBQ25GLDhDQUE4QztBQUM5Qyw2QkFBNkIsNERBQWMsb0JBQW9CLDBEQUFZLDRCQUE0QiwyREFBYSw2QkFBNkIsMkRBQWEsQ0FBQyw4Q0FBUSxrQkFBa0I7QUFDekw7O0FBRXlGIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IElucHV0LCBDaGVja2JveCwgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJy4uL1VJL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sJztcblxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29udHJvbCwgZXJyb3JzLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oe1xuICAgIG1vZGU6ICdvbkNoYW5nZScsXG4gIH0pO1xuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICBsYWJlbD1cIllvdXIgbWVzc2FnZVwiXG4gICAgICAgIGh0bWxGb3I9XCJtZXNzYWdlXCJcbiAgICAgICAgZXJyb3I9e2Vycm9ycy5tZXNzYWdlICYmIDxzcGFuPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQhPC9zcGFuPn1cbiAgICAgID5cbiAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICBhcz17PElucHV0LlRleHRBcmVhIHJvd3M9ezV9IC8+fVxuICAgICAgICAgIGlkPVwibWVzc2FnZVwiXG4gICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogdHJ1ZSB9fVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgIDxSb3cgZ3V0dGVyPXszMH0+XG4gICAgICAgIDxDb2wgbWQ9ezEyfT5cbiAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIGxhYmVsPVwiWW91ciBlbWFpbFwiXG4gICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgZXJyb3I9e1xuICAgICAgICAgICAgICBlcnJvcnMuZW1haWwgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsPy50eXBlID09PSAncmVxdWlyZWQnICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGhpcyBmaWVsZCBpcyByZXF1aXJlZCE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbD8udHlwZSA9PT0gJ3BhdHRlcm4nICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcyE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgICAgYXM9ezxJbnB1dCAvPn1cbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIHJ1bGVzPXt7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogL15cXHcrKFsuLV0/XFx3KykqQFxcdysoWy4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgbGFiZWw9XCJZb3VyIGNvbnRhY3QgbnVtYmVyXCJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJwaG9uZVwiXG4gICAgICAgICAgICBlcnJvcj17XG4gICAgICAgICAgICAgIGVycm9ycy5waG9uZSAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGhvbmU/LnR5cGUgPT09ICdyZXF1aXJlZCcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkITwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBob25lPy50eXBlID09PSAncGF0dGVybicgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QbGVhc2UgZW50ZXIgeW91ciB2YWxpZCBudW1iZXIhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICAgIGFzPXs8SW5wdXQgLz59XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgICBydWxlcz17eyByZXF1aXJlZDogdHJ1ZSwgcGF0dGVybjogL15bMC05XSokLyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgIG5hbWU9XCJjb29raWVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoW2VdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGFzPXtcbiAgICAgICAgICAgIDxDaGVja2JveD5cbiAgICAgICAgICAgICAgU2F2ZSBteSBlbWFpbCBpbiB0aGUgYnJvd3NlciBmcm8gdGhlIG5leHQgdGltZSBJIGNvbnRhY3RcbiAgICAgICAgICAgIDwvQ2hlY2tib3g+XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm1Db250cm9sPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSHRtbExhYmVsIGZyb20gJy4uL0h0bWxMYWJlbC9IdG1sTGFiZWwnO1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi9Gb3JtQ29udHJvbC5zdHlsZSc7XG5cbmNvbnN0IEZvcm1Db250cm9sID0gKHtcbiAgY2xhc3NOYW1lLFxuICBsYWJlbCxcbiAgbGFiZWxUYWcsXG4gIGh0bWxGb3IsXG4gIGNoaWxkcmVuLFxuICBlcnJvcixcbn0pID0+IHtcbiAgY29uc3QgYWRkQWxsQ2xhc3NlcyA9IFsnZm9ybS1jb250cm9sJ107XG4gIGlmIChlcnJvcikge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaCgnaGFzLWVycm9yJyk7XG4gIH1cbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGFkZEFsbENsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlciBjbGFzc05hbWU9e2FkZEFsbENsYXNzZXMuam9pbignICcpfT5cbiAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgIDxIdG1sTGFiZWxcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbFwiXG4gICAgICAgICAgYXM9e2xhYmVsVGFnfVxuICAgICAgICAgIGh0bWxGb3I9e2h0bWxGb3J9XG4gICAgICAgICAgY29udGVudD17bGFiZWx9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2NoaWxkcmVufVxuICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZmVlZGJhY2tcIj57ZXJyb3J9PC9kaXY+fVxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbkZvcm1Db250cm9sLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWxUYWc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGh0bWxGb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZXJyb3I6IFByb3BUeXBlcy5hbnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udHJvbDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdGhlbWVHZXQgfSBmcm9tICdAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXQnO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAuZmllbGQtbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAke3RoZW1lR2V0KCd0ZXh0LjAnLCAnIzJDMkMyQycpfTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgLmFudC1pbnB1dCxcbiAgLmFudC1waWNrZXIsXG4gIC5hbnQtaW5wdXQtbnVtYmVyLFxuICAuYW50LWlucHV0LXBhc3N3b3JkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG4gICAgJjpmb2N1cyxcbiAgICAmLmFudC1pbnB1dC1mb2N1c2VkLFxuICAgICYuYW50LXBpY2tlci1mb2N1c2VkLFxuICAgICYuYW50LWlucHV0LW51bWJlci1mb2N1c2VkLFxuICAgICYuYW50LWlucHV0LXBhc3N3b3JkLWZvY3VzZWQge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMTMyLCAxMzcsIDAuMik7XG4gICAgfVxuICB9XG5cbiAgLmFudC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAuYW50LWNoZWNrYm94IHtcbiAgICAgICsgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMCcsICcjMkMyQzJDJyl9O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIH1cbiAgICAgIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ3RleHQuMScsICcjOTA5MDkwJyl9O1xuICAgICAgfVxuICAgICAgJi5hbnQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAgIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYW50LWlucHV0LW51bWJlciB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAuYW50LWlucHV0LW51bWJlci1pbnB1dCB7XG4gICAgICBtaW4taGVpZ2h0OiA0OHB4O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICB9XG4gIH1cbiAgLmFudC1pbnB1dC1udW1iZXItaGFuZGxlcjpob3ZlciB7XG4gICAgLmFudC1pbnB1dC1udW1iZXItaGFuZGxlci11cC1pbm5lcixcbiAgICAuYW50LWlucHV0LW51bWJlci1oYW5kbGVyLWRvd24taW5uZXIge1xuICAgICAgY29sb3I6ICR7dGhlbWVHZXQoJ3ByaW1hcnkuMCcsICcjMDA4NDg5Jyl9O1xuICAgIH1cbiAgfVxuXG4gIC5hbnQtcGlja2VyIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgnYm9yZGVyLjMnLCAnI0U2RTZFNicpfTtcbiAgICB9XG4gIH1cblxuICAuYW50LXNlbGVjdCB7XG4gICAgJi5hbnQtc2VsZWN0LXNpbmdsZTpub3QoLmFudC1zZWxlY3QtY3VzdG9taXplLWlucHV0KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5hbnQtc2VsZWN0LXNlbGVjdG9yIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2JvcmRlci4zJywgJyNFNkU2RTYnKX07XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gtaW5wdXQge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLWl0ZW0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmFudC1zZWxlY3QtZm9jdXNlZCB7XG4gICAgICAmLmFudC1zZWxlY3Qtc2luZ2xlOm5vdCguYW50LXNlbGVjdC1jdXN0b21pemUtaW5wdXQpIHtcbiAgICAgICAgLmFudC1zZWxlY3Qtc2VsZWN0b3Ige1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDEzMiwgMTM3LCAwLjIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5oYXMtZXJyb3Ige1xuICAgIC5hbnQtaW5wdXQsXG4gICAgLmFudC1pbnB1dC1wYXNzd29yZCB7XG4gICAgICBib3JkZXItY29sb3I6ICR7dGhlbWVHZXQoJ2Vycm9yLjAnLCAnI0Y5NTAzRCcpfTtcbiAgICB9XG4gICAgLmZlZWRiYWNrIHtcbiAgICAgIGNvbG9yOiAke3RoZW1lR2V0KCdlcnJvci4wJywgJyNGOTUwM0QnKX07XG4gICAgfVxuICAgIC5hbnQtaW5wdXQtcGFzc3dvcmQge1xuICAgICAgLmFudC1pbnB1dCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFudC1pbnB1dC1wYXNzd29yZCB7XG4gICAgLmFudC1pbnB1dCB7XG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYW50LXJhZGlvLWdyb3VwLXNvbGlkIHtcbiAgICAuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWQ6bm90KC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZGlzYWJsZWQpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdwcmltYXJ5LjAnLCAnIzAwODQ4OScpfTtcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgaGVpZ2h0OiA0N3B4O1xuICAgIGJvcmRlci1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZUdldCgncHJpbWFyeS4wJywgJyMwMDg0ODknKX07XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBub25lO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBmb250RmFtaWx5LFxuICBmb250V2VpZ2h0LFxuICB0ZXh0QWxpZ24sXG4gIGxpbmVIZWlnaHQsXG4gIGxldHRlclNwYWNpbmcsXG59IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuaW1wb3J0IHsgYmFzZSwgdGhlbWVkIH0gZnJvbSAnLi4vQmFzZSc7XG5cbmNvbnN0IExhYmVsV3JhcHBlciA9IHN0eWxlZCgnbGFiZWwnKShcbiAgYmFzZSxcbiAgZm9udEZhbWlseSxcbiAgZm9udFdlaWdodCxcbiAgdGV4dEFsaWduLFxuICBsaW5lSGVpZ2h0LFxuICBsZXR0ZXJTcGFjaW5nLFxuICB0aGVtZWQoJ0hlYWRpbmcnKVxuKTtcblxuY29uc3QgSHRtbExhYmVsID0gKHsgaHRtbEZvciwgY29udGVudCwgLi4ucHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYWJlbFdyYXBwZXIgaHRtbEZvcj17aHRtbEZvcn0gey4uLnByb3BzfT5cbiAgICAgIHtjb250ZW50fVxuICAgIDwvTGFiZWxXcmFwcGVyPlxuICApO1xufTtcblxuSHRtbExhYmVsLnByb3BUeXBlcyA9IHtcbiAgaHRtbEZvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgZm9udEZhbWlseTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIGZvbnRXZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICB0ZXh0QWxpZ246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gIF0pLFxuICBsaW5lSGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbiAgICApLFxuICBdKSxcbiAgbGV0dGVyU3BhY2luZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgXSksXG4gIC4uLmJhc2UucHJvcFR5cGVzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSHRtbExhYmVsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21wb25lbnRzL1VJL0hlYWRpbmcvSGVhZGluZyc7XG5pbXBvcnQgVGV4dCBmcm9tICdjb21wb25lbnRzL1VJL1RleHQvVGV4dCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvTG9hZGVyL0xvYWRlcic7XG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSAnY29tcG9uZW50cy9Db250YWN0Rm9ybS9Db250YWN0RnJvbSc7XG5pbXBvcnQgeyBBZ2VudENvbnRhY3RXcmFwcGVyLCBDb250YWN0RGV0YWlscyB9IGZyb20gJy4vQWdlbnREZXRhaWxzLnN0eWxlJztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcblxuY29uc3QgQWdlbnRDb250YWN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvY2Vzc2VkRGF0YSwgbG9hZGluZyB9ID0gcHJvcHM7XG4gIGlmIChpc0VtcHR5KHByb2Nlc3NlZERhdGEpIHx8IGxvYWRpbmcpIHJldHVybiA8TG9hZGVyIC8+O1xuICBjb25zdCB7IGFnZW50X2xvY2F0aW9uLCBjZWxsX251bWJlciwgZW1haWwgfSA9IHByb2Nlc3NlZERhdGFbMF07XG5cbiAgcmV0dXJuIChcbiAgICA8QWdlbnRDb250YWN0V3JhcHBlcj5cbiAgICAgIDxIZWFkaW5nIGNvbnRlbnQ9XCJTZW5kIE1lc3NhZ2VcIiAvPlxuICAgICAgPFJvdyBndXR0ZXI9ezMwfT5cbiAgICAgICAgPENvbCBsZz17MTZ9PlxuICAgICAgICAgIDxDb250YWN0Rm9ybSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBsZz17OH0+XG4gICAgICAgICAgPENvbnRhY3REZXRhaWxzPlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIGNvbnRlbnQ9XCJQaG9uZSBOb1wiIC8+XG4gICAgICAgICAgICA8VGV4dCBjb250ZW50PXtjZWxsX251bWJlcn0gLz5cbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBjb250ZW50PVwiRW1haWxcIiAvPlxuICAgICAgICAgICAgPFRleHQgY29udGVudD17ZW1haWx9IC8+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgY29udGVudD1cIkFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgPFRleHQgY29udGVudD17YWdlbnRfbG9jYXRpb24uZm9ybWF0dGVkQWRkcmVzc30gLz5cbiAgICAgICAgICA8L0NvbnRhY3REZXRhaWxzPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQWdlbnRDb250YWN0V3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW50Q29udGFjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyBpY29uIGZpbGUgaXMgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRXllSW52aXNpYmxlT3V0bGluZWQgPSB7IFwiaWNvblwiOiB7IFwidGFnXCI6IFwic3ZnXCIsIFwiYXR0cnNcIjogeyBcInZpZXdCb3hcIjogXCI2NCA2NCA4OTYgODk2XCIsIFwiZm9jdXNhYmxlXCI6IFwiZmFsc2VcIiB9LCBcImNoaWxkcmVuXCI6IFt7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTk0Mi4yIDQ4Ni4yUTg4OS40NyAzNzUuMTEgODE2LjcgMzA1bC01MC44OCA1MC44OEM4MDcuMzEgMzk1LjUzIDg0My40NSA0NDcuNCA4NzQuNyA1MTIgNzkxLjUgNjg0LjIgNjczLjQgNzY2IDUxMiA3NjZxLTcyLjY3IDAtMTMzLjg3LTIyLjM4TDMyMyA3OTguNzVRNDA4IDgzOCA1MTIgODM4cTI4OC4zIDAgNDMwLjItMzAwLjNhNjAuMjkgNjAuMjkgMCAwMDAtNTEuNXptLTYzLjU3LTMyMC42NEw4MzYgMTIyLjg4YTggOCAwIDAwLTExLjMyIDBMNzE1LjMxIDIzMi4yUTYyNC44NiAxODYgNTEyIDE4NnEtMjg4LjMgMC00MzAuMiAzMDAuM2E2MC4zIDYwLjMgMCAwMDAgNTEuNXE1Ni42OSAxMTkuNCAxMzYuNSAxOTEuNDFMMTEyLjQ4IDgzNWE4IDggMCAwMDAgMTEuMzFMMTU1LjE3IDg4OWE4IDggMCAwMDExLjMxIDBsNzEyLjE1LTcxMi4xMmE4IDggMCAwMDAtMTEuMzJ6TTE0OS4zIDUxMkMyMzIuNiAzMzkuOCAzNTAuNyAyNTggNTEyIDI1OGM1NC41NCAwIDEwNC4xMyA5LjM2IDE0OS4xMiAyOC4zOWwtNzAuMyA3MC4zYTE3NiAxNzYgMCAwMC0yMzguMTMgMjM4LjEzbC04My40MiA4My40MkMyMjMuMSA2MzcuNDkgMTgzLjMgNTgyLjI4IDE0OS4zIDUxMnptMjQ2LjcgMGExMTIuMTEgMTEyLjExIDAgMDExNDYuMi0xMDYuNjlMNDAxLjMxIDU0Ni4yQTExMiAxMTIgMCAwMTM5NiA1MTJ6XCIgfSB9LCB7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTUwOCA2MjRjLTMuNDYgMC02Ljg3LS4xNi0xMC4yNS0uNDdsLTUyLjgyIDUyLjgyYTE3Ni4wOSAxNzYuMDkgMCAwMDIyNy40Mi0yMjcuNDJsLTUyLjgyIDUyLjgyYy4zMSAzLjM4LjQ3IDYuNzkuNDcgMTAuMjVhMTExLjk0IDExMS45NCAwIDAxLTExMiAxMTJ6XCIgfSB9XSB9LCBcIm5hbWVcIjogXCJleWUtaW52aXNpYmxlXCIsIFwidGhlbWVcIjogXCJvdXRsaW5lZFwiIH07XG5leHBvcnRzLmRlZmF1bHQgPSBFeWVJbnZpc2libGVPdXRsaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gVGhpcyBpY29uIGZpbGUgaXMgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRXllT3V0bGluZWQgPSB7IFwiaWNvblwiOiB7IFwidGFnXCI6IFwic3ZnXCIsIFwiYXR0cnNcIjogeyBcInZpZXdCb3hcIjogXCI2NCA2NCA4OTYgODk2XCIsIFwiZm9jdXNhYmxlXCI6IFwiZmFsc2VcIiB9LCBcImNoaWxkcmVuXCI6IFt7IFwidGFnXCI6IFwicGF0aFwiLCBcImF0dHJzXCI6IHsgXCJkXCI6IFwiTTk0Mi4yIDQ4Ni4yQzg0Ny40IDI4Ni41IDcwNC4xIDE4NiA1MTIgMTg2Yy0xOTIuMiAwLTMzNS40IDEwMC41LTQzMC4yIDMwMC4zYTYwLjMgNjAuMyAwIDAwMCA1MS41QzE3Ni42IDczNy41IDMxOS45IDgzOCA1MTIgODM4YzE5Mi4yIDAgMzM1LjQtMTAwLjUgNDMwLjItMzAwLjMgNy43LTE2LjIgNy43LTM1IDAtNTEuNXpNNTEyIDc2NmMtMTYxLjMgMC0yNzkuNC04MS44LTM2Mi43LTI1NEMyMzIuNiAzMzkuOCAzNTAuNyAyNTggNTEyIDI1OGMxNjEuMyAwIDI3OS40IDgxLjggMzYyLjcgMjU0Qzc5MS41IDY4NC4yIDY3My40IDc2NiA1MTIgNzY2em0tNC00MzBjLTk3LjIgMC0xNzYgNzguOC0xNzYgMTc2czc4LjggMTc2IDE3NiAxNzYgMTc2LTc4LjggMTc2LTE3Ni03OC44LTE3Ni0xNzYtMTc2em0wIDI4OGMtNjEuOSAwLTExMi01MC4xLTExMi0xMTJzNTAuMS0xMTIgMTEyLTExMiAxMTIgNTAuMSAxMTIgMTEyLTUwLjEgMTEyLTExMiAxMTJ6XCIgfSB9XSB9LCBcIm5hbWVcIjogXCJleWVcIiwgXCJ0aGVtZVwiOiBcIm91dGxpbmVkXCIgfTtcbmV4cG9ydHMuZGVmYXVsdCA9IEV5ZU91dGxpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBUaGlzIGljb24gZmlsZSBpcyBnZW5lcmF0ZWQgYXV0b21hdGljYWxseS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBTZWFyY2hPdXRsaW5lZCA9IHsgXCJpY29uXCI6IHsgXCJ0YWdcIjogXCJzdmdcIiwgXCJhdHRyc1wiOiB7IFwidmlld0JveFwiOiBcIjY0IDY0IDg5NiA4OTZcIiwgXCJmb2N1c2FibGVcIjogXCJmYWxzZVwiIH0sIFwiY2hpbGRyZW5cIjogW3sgXCJ0YWdcIjogXCJwYXRoXCIsIFwiYXR0cnNcIjogeyBcImRcIjogXCJNOTA5LjYgODU0LjVMNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMDAxMS42IDBsNDMuNi00My41YTguMiA4LjIgMCAwMDAtMTEuNnpNNTcwLjQgNTcwLjRDNTI4IDYxMi43IDQ3MS44IDYzNiA0MTIgNjM2cy0xMTYtMjMuMy0xNTguNC02NS42QzIxMS4zIDUyOCAxODggNDcxLjggMTg4IDQxMnMyMy4zLTExNi4xIDY1LjYtMTU4LjRDMjk2IDIxMS4zIDM1Mi4yIDE4OCA0MTIgMTg4czExNi4xIDIzLjIgMTU4LjQgNjUuNlM2MzYgMzUyLjIgNjM2IDQxMnMtMjMuMyAxMTYuMS02NS42IDE1OC40elwiIH0gfV0gfSwgXCJuYW1lXCI6IFwic2VhcmNoXCIsIFwidGhlbWVcIjogXCJvdXRsaW5lZFwiIH07XG5leHBvcnRzLmRlZmF1bHQgPSBTZWFyY2hPdXRsaW5lZDtcbiIsIid1c2Ugc3RyaWN0JztcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbiAgXG4gIHZhciBfRXllSW52aXNpYmxlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoJy4vbGliL2ljb25zL0V5ZUludmlzaWJsZU91dGxpbmVkJykpO1xuICBcbiAgZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuICBcbiAgdmFyIF9kZWZhdWx0ID0gX0V5ZUludmlzaWJsZU91dGxpbmVkO1xuICBleHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZGVmYXVsdDsiLCIndXNlIHN0cmljdCc7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG4gIH0pO1xuICBleHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG4gIFxuICB2YXIgX0V5ZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKCcuL2xpYi9pY29ucy9FeWVPdXRsaW5lZCcpKTtcbiAgXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cbiAgXG4gIHZhciBfZGVmYXVsdCA9IF9FeWVPdXRsaW5lZDtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG4gIG1vZHVsZS5leHBvcnRzID0gX2RlZmF1bHQ7IiwiJ3VzZSBzdHJpY3QnO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuICBcbiAgdmFyIF9TZWFyY2hPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZSgnLi9saWIvaWNvbnMvU2VhcmNoT3V0bGluZWQnKSk7XG4gIFxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG4gIFxuICB2YXIgX2RlZmF1bHQgPSBfU2VhcmNoT3V0bGluZWQ7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuICBtb2R1bGUuZXhwb3J0cyA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9FeWVJbnZpc2libGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0V5ZUludmlzaWJsZU91dGxpbmVkXCIpKTtcblxudmFyIF9BbnRkSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvQW50ZEljb25cIikpO1xuXG4vLyBHRU5FUkFURSBCWSAuL3NjcmlwdHMvZ2VuZXJhdGUudHNcbi8vIERPTiBOT1QgRURJVCBJVCBNQU5VQUxMWVxudmFyIEV5ZUludmlzaWJsZU91dGxpbmVkID0gZnVuY3Rpb24gRXllSW52aXNpYmxlT3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0FudGRJY29uLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaWNvbjogX0V5ZUludmlzaWJsZU91dGxpbmVkLmRlZmF1bHRcbiAgfSkpO1xufTtcblxuRXllSW52aXNpYmxlT3V0bGluZWQuZGlzcGxheU5hbWUgPSAnRXllSW52aXNpYmxlT3V0bGluZWQnO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihFeWVJbnZpc2libGVPdXRsaW5lZCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9FeWVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL0V5ZU91dGxpbmVkXCIpKTtcblxudmFyIF9BbnRkSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvQW50ZEljb25cIikpO1xuXG4vLyBHRU5FUkFURSBCWSAuL3NjcmlwdHMvZ2VuZXJhdGUudHNcbi8vIERPTiBOT1QgRURJVCBJVCBNQU5VQUxMWVxudmFyIEV5ZU91dGxpbmVkID0gZnVuY3Rpb24gRXllT3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0FudGRJY29uLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaWNvbjogX0V5ZU91dGxpbmVkLmRlZmF1bHRcbiAgfSkpO1xufTtcblxuRXllT3V0bGluZWQuZGlzcGxheU5hbWUgPSAnRXllT3V0bGluZWQnO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihFeWVPdXRsaW5lZCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9TZWFyY2hPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zLXN2Zy9saWIvYXNuL1NlYXJjaE91dGxpbmVkXCIpKTtcblxudmFyIF9BbnRkSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbXBvbmVudHMvQW50ZEljb25cIikpO1xuXG4vLyBHRU5FUkFURSBCWSAuL3NjcmlwdHMvZ2VuZXJhdGUudHNcbi8vIERPTiBOT1QgRURJVCBJVCBNQU5VQUxMWVxudmFyIFNlYXJjaE91dGxpbmVkID0gZnVuY3Rpb24gU2VhcmNoT3V0bGluZWQocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0FudGRJY29uLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaWNvbjogX1NlYXJjaE91dGxpbmVkLmRlZmF1bHRcbiAgfSkpO1xufTtcblxuU2VhcmNoT3V0bGluZWQuZGlzcGxheU5hbWUgPSAnU2VhcmNoT3V0bGluZWQnO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihTZWFyY2hPdXRsaW5lZCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gd3JhcHBlclJhZjtcblxudmFyIF9yYWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9yYWZcIikpO1xuXG52YXIgaWQgPSAwO1xudmFyIGlkcyA9IHt9OyAvLyBTdXBwb3J0IGNhbGwgcmFmIHdpdGggZGVsYXkgc3BlY2lmaWVkIGZyYW1lXG5cbmZ1bmN0aW9uIHdyYXBwZXJSYWYoY2FsbGJhY2spIHtcbiAgdmFyIGRlbGF5RnJhbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICB2YXIgbXlJZCA9IGlkKys7XG4gIHZhciByZXN0RnJhbWVzID0gZGVsYXlGcmFtZXM7XG5cbiAgZnVuY3Rpb24gaW50ZXJuYWxDYWxsYmFjaygpIHtcbiAgICByZXN0RnJhbWVzIC09IDE7XG5cbiAgICBpZiAocmVzdEZyYW1lcyA8PSAwKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgZGVsZXRlIGlkc1tteUlkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWRzW215SWRdID0gKDAsIF9yYWZbXCJkZWZhdWx0XCJdKShpbnRlcm5hbENhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBpZHNbbXlJZF0gPSAoMCwgX3JhZltcImRlZmF1bHRcIl0pKGludGVybmFsQ2FsbGJhY2spO1xuICByZXR1cm4gbXlJZDtcbn1cblxud3JhcHBlclJhZi5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwocGlkKSB7XG4gIGlmIChwaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gIF9yYWZbXCJkZWZhdWx0XCJdLmNhbmNlbChpZHNbcGlkXSk7XG5cbiAgZGVsZXRlIGlkc1twaWRdO1xufTtcblxud3JhcHBlclJhZi5pZHMgPSBpZHM7IC8vIGV4cG9ydCB0aGlzIGZvciB0ZXN0IHVzYWdlIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBVbnJlYWNoYWJsZUV4Y2VwdGlvbiA9IGZ1bmN0aW9uIFVucmVhY2hhYmxlRXhjZXB0aW9uKHZhbHVlKSB7XG4gICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgVW5yZWFjaGFibGVFeGNlcHRpb24pO1xuICByZXR1cm4gbmV3IEVycm9yKFwidW5yZWFjaGFibGUgY2FzZTogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHZhbHVlKSkpO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBVbnJlYWNoYWJsZUV4Y2VwdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9keW5hbWljQ1NTID0gcmVxdWlyZShcInJjLXV0aWwvbGliL0RvbS9keW5hbWljQ1NTXCIpO1xuXG52YXIgX3JlZjIgPSByZXF1aXJlKFwicmMtdXRpbC9saWIvcmVmXCIpO1xuXG52YXIgX3JhZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmFmXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4vcmVhY3ROb2RlXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbnZhciBzdHlsZUZvclBzZXVkbzsgLy8gV2hlcmUgZWwgaXMgdGhlIERPTSBlbGVtZW50IHlvdSdkIGxpa2UgdG8gdGVzdCBmb3IgdmlzaWJpbGl0eVxuXG5mdW5jdGlvbiBpc0hpZGRlbihlbGVtZW50KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICFlbGVtZW50IHx8IGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsIHx8IGVsZW1lbnQuaGlkZGVuO1xufVxuXG5mdW5jdGlvbiBpc05vdEdyZXkoY29sb3IpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gIHZhciBtYXRjaCA9IChjb2xvciB8fCAnJykubWF0Y2goL3JnYmE/XFwoKFxcZCopLCAoXFxkKiksIChcXGQqKSgsIFtcXGQuXSopP1xcKS8pO1xuXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAmJiBtYXRjaFsyXSAmJiBtYXRjaFszXSkge1xuICAgIHJldHVybiAhKG1hdGNoWzFdID09PSBtYXRjaFsyXSAmJiBtYXRjaFsyXSA9PT0gbWF0Y2hbM10pO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBXYXZlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoV2F2ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoV2F2ZSk7XG5cbiAgZnVuY3Rpb24gV2F2ZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIFdhdmUpO1xuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMuY29udGFpbmVyUmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuICAgIF90aGlzLmFuaW1hdGlvblN0YXJ0ID0gZmFsc2U7XG4gICAgX3RoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKG5vZGUsIHdhdmVDb2xvcikge1xuICAgICAgdmFyIF9hLCBfYjtcblxuICAgICAgaWYgKCFub2RlIHx8IGlzSGlkZGVuKG5vZGUpIHx8IG5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJy1sZWF2ZScpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zZXJ0RXh0cmFOb2RlID0gX3RoaXMucHJvcHMuaW5zZXJ0RXh0cmFOb2RlO1xuICAgICAgX3RoaXMuZXh0cmFOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSAoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDJbXCJkZWZhdWx0XCJdKShfdGhpcyksXG4gICAgICAgICAgZXh0cmFOb2RlID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLmV4dHJhTm9kZTtcblxuICAgICAgdmFyIGdldFByZWZpeENscyA9IF90aGlzLmNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuICAgICAgZXh0cmFOb2RlLmNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KGdldFByZWZpeENscygnJyksIFwiLWNsaWNrLWFuaW1hdGluZy1ub2RlXCIpO1xuXG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IF90aGlzLmdldEF0dHJpYnV0ZU5hbWUoKTtcblxuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgJ3RydWUnKTsgLy8gTm90IHdoaXRlIG9yIHRyYW5zcGFyZW50IG9yIGdyZXlcblxuICAgICAgaWYgKHdhdmVDb2xvciAmJiB3YXZlQ29sb3IgIT09ICcjZmZmZmZmJyAmJiB3YXZlQ29sb3IgIT09ICdyZ2IoMjU1LCAyNTUsIDI1NSknICYmIGlzTm90R3JleSh3YXZlQ29sb3IpICYmICEvcmdiYVxcKCg/OlxcZCosICl7M30wXFwpLy50ZXN0KHdhdmVDb2xvcikgJiYgLy8gYW55IHRyYW5zcGFyZW50IHJnYmEgY29sb3JcbiAgICAgIHdhdmVDb2xvciAhPT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICBleHRyYU5vZGUuc3R5bGUuYm9yZGVyQ29sb3IgPSB3YXZlQ29sb3I7XG4gICAgICAgIHZhciBub2RlUm9vdCA9ICgoX2EgPSBub2RlLmdldFJvb3ROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChub2RlKSkgfHwgbm9kZS5vd25lckRvY3VtZW50O1xuICAgICAgICB2YXIgbm9kZUJvZHkgPSBub2RlUm9vdCBpbnN0YW5jZW9mIERvY3VtZW50ID8gbm9kZVJvb3QuYm9keSA6IChfYiA9IG5vZGVSb290LmZpcnN0Q2hpbGQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IG5vZGVSb290O1xuICAgICAgICBzdHlsZUZvclBzZXVkbyA9ICgwLCBfZHluYW1pY0NTUy51cGRhdGVDU1MpKFwiXFxuICAgICAgW1wiLmNvbmNhdChnZXRQcmVmaXhDbHMoJycpLCBcIi1jbGljay1hbmltYXRpbmctd2l0aG91dC1leHRyYS1ub2RlPSd0cnVlJ106OmFmdGVyLCAuXCIpLmNvbmNhdChnZXRQcmVmaXhDbHMoJycpLCBcIi1jbGljay1hbmltYXRpbmctbm9kZSB7XFxuICAgICAgICAtLWFudGQtd2F2ZS1zaGFkb3ctY29sb3I6IFwiKS5jb25jYXQod2F2ZUNvbG9yLCBcIjtcXG4gICAgICB9XCIpLCAnYW50ZC13YXZlJywge1xuICAgICAgICAgIGNzcDogX3RoaXMuY3NwLFxuICAgICAgICAgIGF0dGFjaFRvOiBub2RlQm9keVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluc2VydEV4dHJhTm9kZSkge1xuICAgICAgICBub2RlLmFwcGVuZENoaWxkKGV4dHJhTm9kZSk7XG4gICAgICB9XG5cbiAgICAgIFsndHJhbnNpdGlvbicsICdhbmltYXRpb24nXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcIlwiLmNvbmNhdChuYW1lLCBcInN0YXJ0XCIpLCBfdGhpcy5vblRyYW5zaXRpb25TdGFydCk7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcIlwiLmNvbmNhdChuYW1lLCBcImVuZFwiKSwgX3RoaXMub25UcmFuc2l0aW9uRW5kKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRyYW5zaXRpb25TdGFydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoX3RoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIG5vZGUgPSBfdGhpcy5jb250YWluZXJSZWYuY3VycmVudDtcblxuICAgICAgaWYgKCFlIHx8IGUudGFyZ2V0ICE9PSBub2RlIHx8IF90aGlzLmFuaW1hdGlvblN0YXJ0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucmVzZXRFZmZlY3Qobm9kZSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIWUgfHwgZS5hbmltYXRpb25OYW1lICE9PSAnZmFkZUVmZmVjdCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5yZXNldEVmZmVjdChlLnRhcmdldCk7XG4gICAgfTtcblxuICAgIF90aGlzLmJpbmRBbmltYXRpb25FdmVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZ2V0QXR0cmlidXRlIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IG5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJ2Rpc2FibGVkJykgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIC8vIEZpeCByYWRpbyBidXR0b24gY2xpY2sgdHdpY2VcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgfHwgaXNIaWRkZW4oZS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMucmVzZXRFZmZlY3Qobm9kZSk7IC8vIEdldCB3YXZlIGNvbG9yIGZyb20gdGFyZ2V0XG5cblxuICAgICAgICB2YXIgd2F2ZUNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItdG9wLWNvbG9yJykgfHwgLy8gRmlyZWZveCBDb21wYXRpYmxlXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLWNvbG9yJykgfHwgZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgICAgIF90aGlzLmNsaWNrV2F2ZVRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMub25DbGljayhub2RlLCB3YXZlQ29sb3IpO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICBfcmFmW1wiZGVmYXVsdFwiXS5jYW5jZWwoX3RoaXMuYW5pbWF0aW9uU3RhcnRJZCk7XG5cbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uU3RhcnQgPSB0cnVlOyAvLyBSZW5kZXIgdG8gdHJpZ2dlciB0cmFuc2l0aW9uIGV2ZW50IGNvc3QgMyBmcmFtZXMuIExldCdzIGRlbGF5IDEwIGZyYW1lcyB0byByZXNldCB0aGlzLlxuXG4gICAgICAgIF90aGlzLmFuaW1hdGlvblN0YXJ0SWQgPSAoMCwgX3JhZltcImRlZmF1bHRcIl0pKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5hbmltYXRpb25TdGFydCA9IGZhbHNlO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9O1xuXG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgdHJ1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlcldhdmUgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGNzcCA9IF9yZWYuY3NwO1xuICAgICAgdmFyIGNoaWxkcmVuID0gX3RoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICBfdGhpcy5jc3AgPSBjc3A7XG4gICAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSByZXR1cm4gY2hpbGRyZW47XG4gICAgICB2YXIgcmVmID0gX3RoaXMuY29udGFpbmVyUmVmO1xuXG4gICAgICBpZiAoKDAsIF9yZWYyLnN1cHBvcnRSZWYpKGNoaWxkcmVuKSkge1xuICAgICAgICByZWYgPSAoMCwgX3JlZjIuY29tcG9zZVJlZikoY2hpbGRyZW4ucmVmLCBfdGhpcy5jb250YWluZXJSZWYpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShjaGlsZHJlbiwge1xuICAgICAgICByZWY6IHJlZlxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoV2F2ZSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgbm9kZSA9IHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQ7XG5cbiAgICAgIGlmICghbm9kZSB8fCBub2RlLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbnN0YW5jZSA9IHRoaXMuYmluZEFuaW1hdGlvbkV2ZW50KG5vZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuY2FuY2VsKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNsaWNrV2F2ZVRpbWVvdXRJZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbGlja1dhdmVUaW1lb3V0SWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldEF0dHJpYnV0ZU5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QXR0cmlidXRlTmFtZSgpIHtcbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSB0aGlzLmNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuICAgICAgdmFyIGluc2VydEV4dHJhTm9kZSA9IHRoaXMucHJvcHMuaW5zZXJ0RXh0cmFOb2RlO1xuICAgICAgcmV0dXJuIGluc2VydEV4dHJhTm9kZSA/IFwiXCIuY29uY2F0KGdldFByZWZpeENscygnJyksIFwiLWNsaWNrLWFuaW1hdGluZ1wiKSA6IFwiXCIuY29uY2F0KGdldFByZWZpeENscygnJyksIFwiLWNsaWNrLWFuaW1hdGluZy13aXRob3V0LWV4dHJhLW5vZGVcIik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0RWZmZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0RWZmZWN0KG5vZGUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoIW5vZGUgfHwgbm9kZSA9PT0gdGhpcy5leHRyYU5vZGUgfHwgIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zZXJ0RXh0cmFOb2RlID0gdGhpcy5wcm9wcy5pbnNlcnRFeHRyYU5vZGU7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlTmFtZSgpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgJ2ZhbHNlJyk7IC8vIGVkZ2UgaGFzIGJ1ZyBvbiBgcmVtb3ZlQXR0cmlidXRlYCAjMTQ0NjZcblxuICAgICAgaWYgKHN0eWxlRm9yUHNldWRvKSB7XG4gICAgICAgIHN0eWxlRm9yUHNldWRvLmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zZXJ0RXh0cmFOb2RlICYmIHRoaXMuZXh0cmFOb2RlICYmIG5vZGUuY29udGFpbnModGhpcy5leHRyYU5vZGUpKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQodGhpcy5leHRyYU5vZGUpO1xuICAgICAgfVxuXG4gICAgICBbJ3RyYW5zaXRpb24nLCAnYW5pbWF0aW9uJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJcIi5jb25jYXQobmFtZSwgXCJzdGFydFwiKSwgX3RoaXMyLm9uVHJhbnNpdGlvblN0YXJ0KTtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiXCIuY29uY2F0KG5hbWUsIFwiZW5kXCIpLCBfdGhpczIub25UcmFuc2l0aW9uRW5kKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJXYXZlKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFdhdmU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gV2F2ZTtcbldhdmUuY29udGV4dFR5cGUgPSBfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY01vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLW1vdGlvblwiKSk7XG5cbnZhciBfTG9hZGluZ091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvTG9hZGluZ091dGxpbmVkXCIpKTtcblxudmFyIGdldENvbGxhcHNlZFdpZHRoID0gZnVuY3Rpb24gZ2V0Q29sbGFwc2VkV2lkdGgoKSB7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IDAsXG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbiAgfTtcbn07XG5cbnZhciBnZXRSZWFsV2lkdGggPSBmdW5jdGlvbiBnZXRSZWFsV2lkdGgobm9kZSkge1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiBub2RlLnNjcm9sbFdpZHRoLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH07XG59O1xuXG52YXIgTG9hZGluZ0ljb24gPSBmdW5jdGlvbiBMb2FkaW5nSWNvbihfcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIGxvYWRpbmcgPSBfcmVmLmxvYWRpbmcsXG4gICAgICBleGlzdEljb24gPSBfcmVmLmV4aXN0SWNvbjtcbiAgdmFyIHZpc2libGUgPSAhIWxvYWRpbmc7XG5cbiAgaWYgKGV4aXN0SWNvbikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZy1pY29uXCIpXG4gICAgfSwgLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChfTG9hZGluZ091dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbCkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3RbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoX3JjTW90aW9uW1wiZGVmYXVsdFwiXSwge1xuICAgIHZpc2libGU6IHZpc2libGUgLy8gV2UgZG8gbm90IHJlYWxseSB1c2UgdGhpcyBtb3Rpb25OYW1lXG4gICAgLFxuICAgIG1vdGlvbk5hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZy1pY29uLW1vdGlvblwiKSxcbiAgICByZW1vdmVPbkxlYXZlOiB0cnVlLFxuICAgIG9uQXBwZWFyU3RhcnQ6IGdldENvbGxhcHNlZFdpZHRoLFxuICAgIG9uQXBwZWFyQWN0aXZlOiBnZXRSZWFsV2lkdGgsXG4gICAgb25FbnRlclN0YXJ0OiBnZXRDb2xsYXBzZWRXaWR0aCxcbiAgICBvbkVudGVyQWN0aXZlOiBnZXRSZWFsV2lkdGgsXG4gICAgb25MZWF2ZVN0YXJ0OiBnZXRSZWFsV2lkdGgsXG4gICAgb25MZWF2ZUFjdGl2ZTogZ2V0Q29sbGFwc2VkV2lkdGhcbiAgfSwgZnVuY3Rpb24gKF9yZWYyLCByZWYpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZSA9IF9yZWYyLnN0eWxlO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZy1pY29uXCIpLFxuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgcmVmOiByZWZcbiAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KF9Mb2FkaW5nT3V0bGluZWRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgIH0pKTtcbiAgfSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBMb2FkaW5nSWNvbjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX3VucmVhY2hhYmxlRXhjZXB0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvdW5yZWFjaGFibGVFeGNlcHRpb25cIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgQnV0dG9uR3JvdXAgPSBmdW5jdGlvbiBCdXR0b25Hcm91cChwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscyxcbiAgICAgICAgZGlyZWN0aW9uID0gX3JlZi5kaXJlY3Rpb247XG5cbiAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcInNpemVcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnYnRuLWdyb3VwJywgY3VzdG9taXplUHJlZml4Q2xzKTsgLy8gbGFyZ2UgPT4gbGdcbiAgICAvLyBzbWFsbCA9PiBzbVxuXG4gICAgdmFyIHNpemVDbHMgPSAnJztcblxuICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICBzaXplQ2xzID0gJ2xnJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgc2l6ZUNscyA9ICdzbSc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4obmV3IF91bnJlYWNoYWJsZUV4Y2VwdGlvbltcImRlZmF1bHRcIl0oc2l6ZSkpO1xuICAgIH1cblxuICAgIHZhciBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemVDbHMpLCBzaXplQ2xzKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgb3RoZXJzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSk7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gQnV0dG9uR3JvdXA7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF90eXBlb2YzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb252ZXJ0TGVnYWN5UHJvcHMgPSBjb252ZXJ0TGVnYWN5UHJvcHM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgX3R5cGVvZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9vbWl0XCIpKTtcblxudmFyIF9idXR0b25Hcm91cCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYnV0dG9uLWdyb3VwXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfd2F2ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL3dhdmVcIikpO1xuXG52YXIgX3R5cGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvdHlwZVwiKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfU2l6ZUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHRcIikpO1xuXG52YXIgX0xvYWRpbmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Mb2FkaW5nSWNvblwiKSk7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mMyhvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9idXR0b24taGFzLXR5cGUgKi9cblxuXG52YXIgcnhUd29DTkNoYXIgPSAvXltcXHU0ZTAwLVxcdTlmYTVdezJ9JC87XG52YXIgaXNUd29DTkNoYXIgPSByeFR3b0NOQ2hhci50ZXN0LmJpbmQocnhUd29DTkNoYXIpO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc1VuYm9yZGVyZWRCdXR0b25UeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUgPT09ICd0ZXh0JyB8fCB0eXBlID09PSAnbGluayc7XG59IC8vIEluc2VydCBvbmUgc3BhY2UgYmV0d2VlbiB0d28gY2hpbmVzZSBjaGFyYWN0ZXJzIGF1dG9tYXRpY2FsbHkuXG5cblxuZnVuY3Rpb24gaW5zZXJ0U3BhY2UoY2hpbGQsIG5lZWRJbnNlcnRlZCkge1xuICAvLyBDaGVjayB0aGUgY2hpbGQgaWYgaXMgdW5kZWZpbmVkIG9yIG51bGwuXG4gIGlmIChjaGlsZCA9PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIFNQQUNFID0gbmVlZEluc2VydGVkID8gJyAnIDogJyc7IC8vIHN0cmljdE51bGxDaGVja3Mgb29wcy5cblxuICBpZiAodHlwZW9mIGNoaWxkICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgY2hpbGQgIT09ICdudW1iZXInICYmIGlzU3RyaW5nKGNoaWxkLnR5cGUpICYmIGlzVHdvQ05DaGFyKGNoaWxkLnByb3BzLmNoaWxkcmVuKSkge1xuICAgIHJldHVybiAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGNoaWxkLCB7XG4gICAgICBjaGlsZHJlbjogY2hpbGQucHJvcHMuY2hpbGRyZW4uc3BsaXQoJycpLmpvaW4oU1BBQ0UpXG4gICAgfSk7XG4gIH1cblxuICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgIGlmIChpc1R3b0NOQ2hhcihjaGlsZCkpIHtcbiAgICAgIGNoaWxkID0gY2hpbGQuc3BsaXQoJycpLmpvaW4oU1BBQ0UpO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY2hpbGQpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG5mdW5jdGlvbiBzcGFjZUNoaWxkcmVuKGNoaWxkcmVuLCBuZWVkSW5zZXJ0ZWQpIHtcbiAgdmFyIGlzUHJldkNoaWxkUHVyZSA9IGZhbHNlO1xuICB2YXIgY2hpbGRMaXN0ID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHZhciB0eXBlID0gKDAsIF90eXBlb2YyW1wiZGVmYXVsdFwiXSkoY2hpbGQpO1xuICAgIHZhciBpc0N1cnJlbnRDaGlsZFB1cmUgPSB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJztcblxuICAgIGlmIChpc1ByZXZDaGlsZFB1cmUgJiYgaXNDdXJyZW50Q2hpbGRQdXJlKSB7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gY2hpbGRMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICB2YXIgbGFzdENoaWxkID0gY2hpbGRMaXN0W2xhc3RJbmRleF07XG4gICAgICBjaGlsZExpc3RbbGFzdEluZGV4XSA9IFwiXCIuY29uY2F0KGxhc3RDaGlsZCkuY29uY2F0KGNoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGRMaXN0LnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGlzUHJldkNoaWxkUHVyZSA9IGlzQ3VycmVudENoaWxkUHVyZTtcbiAgfSk7IC8vIFBhc3MgdG8gUmVhY3QuQ2hpbGRyZW4ubWFwIHRvIGF1dG8gZmlsbCBrZXlcblxuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkTGlzdCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGluc2VydFNwYWNlKGNoaWxkLCBuZWVkSW5zZXJ0ZWQpO1xuICB9KTtcbn1cblxudmFyIEJ1dHRvblR5cGVzID0gKDAsIF90eXBlLnR1cGxlKSgnZGVmYXVsdCcsICdwcmltYXJ5JywgJ2dob3N0JywgJ2Rhc2hlZCcsICdsaW5rJywgJ3RleHQnKTtcbnZhciBCdXR0b25TaGFwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdjaXJjbGUnLCAncm91bmQnKTtcbnZhciBCdXR0b25IVE1MVHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdzdWJtaXQnLCAnYnV0dG9uJywgJ3Jlc2V0Jyk7XG5cbmZ1bmN0aW9uIGNvbnZlcnRMZWdhY3lQcm9wcyh0eXBlKSB7XG4gIGlmICh0eXBlID09PSAnZGFuZ2VyJykge1xuICAgIHJldHVybiB7XG4gICAgICBkYW5nZXI6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiB0eXBlXG4gIH07XG59XG5cbnZhciBJbnRlcm5hbEJ1dHRvbiA9IGZ1bmN0aW9uIEludGVybmFsQnV0dG9uKHByb3BzLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBfcHJvcHMkbG9hZGluZyA9IHByb3BzLmxvYWRpbmcsXG4gICAgICBsb2FkaW5nID0gX3Byb3BzJGxvYWRpbmcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGxvYWRpbmcsXG4gICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIGRhbmdlciA9IHByb3BzLmRhbmdlcixcbiAgICAgIHNoYXBlID0gcHJvcHMuc2hhcGUsXG4gICAgICBjdXN0b21pemVTaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIF9wcm9wcyRnaG9zdCA9IHByb3BzLmdob3N0LFxuICAgICAgZ2hvc3QgPSBfcHJvcHMkZ2hvc3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGdob3N0LFxuICAgICAgX3Byb3BzJGJsb2NrID0gcHJvcHMuYmxvY2ssXG4gICAgICBibG9jayA9IF9wcm9wcyRibG9jayA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYmxvY2ssXG4gICAgICBfcHJvcHMkaHRtbFR5cGUgPSBwcm9wcy5odG1sVHlwZSxcbiAgICAgIGh0bWxUeXBlID0gX3Byb3BzJGh0bWxUeXBlID09PSB2b2lkIDAgPyAnYnV0dG9uJyA6IF9wcm9wcyRodG1sVHlwZSxcbiAgICAgIHJlc3QgPSBfX3Jlc3QocHJvcHMsIFtcImxvYWRpbmdcIiwgXCJwcmVmaXhDbHNcIiwgXCJ0eXBlXCIsIFwiZGFuZ2VyXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJpY29uXCIsIFwiZ2hvc3RcIiwgXCJibG9ja1wiLCBcImh0bWxUeXBlXCJdKTtcblxuICB2YXIgc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoX1NpemVDb250ZXh0W1wiZGVmYXVsdFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKCEhbG9hZGluZyksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBpbm5lckxvYWRpbmcgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0TG9hZGluZyA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGU0ID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF9SZWFjdCR1c2VTdGF0ZTMsIDIpLFxuICAgICAgaGFzVHdvQ05DaGFyID0gX1JlYWN0JHVzZVN0YXRlNFswXSxcbiAgICAgIHNldEhhc1R3b0NOQ2hhciA9IF9SZWFjdCR1c2VTdGF0ZTRbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmF1dG9JbnNlcnRTcGFjZUluQnV0dG9uLFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHZhciBidXR0b25SZWYgPSByZWYgfHwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuICB2YXIgZGVsYXlUaW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgdmFyIGlzTmVlZEluc2VydGVkID0gZnVuY3Rpb24gaXNOZWVkSW5zZXJ0ZWQoKSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMSAmJiAhaWNvbiAmJiAhaXNVbmJvcmRlcmVkQnV0dG9uVHlwZSh0eXBlKTtcbiAgfTtcblxuICB2YXIgZml4VHdvQ05DaGFyID0gZnVuY3Rpb24gZml4VHdvQ05DaGFyKCkge1xuICAgIC8vIEZpeCBmb3IgSE9DIHVzYWdlIGxpa2UgPEZvcm1hdE1lc3NhZ2UgLz5cbiAgICBpZiAoIWJ1dHRvblJlZiB8fCAhYnV0dG9uUmVmLmN1cnJlbnQgfHwgYXV0b0luc2VydFNwYWNlSW5CdXR0b24gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGJ1dHRvblRleHQgPSBidXR0b25SZWYuY3VycmVudC50ZXh0Q29udGVudDtcblxuICAgIGlmIChpc05lZWRJbnNlcnRlZCgpICYmIGlzVHdvQ05DaGFyKGJ1dHRvblRleHQpKSB7XG4gICAgICBpZiAoIWhhc1R3b0NOQ2hhcikge1xuICAgICAgICBzZXRIYXNUd29DTkNoYXIodHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYXNUd29DTkNoYXIpIHtcbiAgICAgIHNldEhhc1R3b0NOQ2hhcihmYWxzZSk7XG4gICAgfVxuICB9OyAvLyA9PT09PT09PT09PT09PT0gVXBkYXRlIExvYWRpbmcgPT09PT09PT09PT09PT09XG5cblxuICB2YXIgbG9hZGluZ09yRGVsYXk7XG5cbiAgaWYgKCgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKGxvYWRpbmcpID09PSAnb2JqZWN0JyAmJiBsb2FkaW5nLmRlbGF5KSB7XG4gICAgbG9hZGluZ09yRGVsYXkgPSBsb2FkaW5nLmRlbGF5IHx8IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbG9hZGluZ09yRGVsYXkgPSAhIWxvYWRpbmc7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dChkZWxheVRpbWVvdXRSZWYuY3VycmVudCk7XG5cbiAgICBpZiAodHlwZW9mIGxvYWRpbmdPckRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgZGVsYXlUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldExvYWRpbmcobG9hZGluZ09yRGVsYXkpO1xuICAgICAgfSwgbG9hZGluZ09yRGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMb2FkaW5nKGxvYWRpbmdPckRlbGF5KTtcbiAgICB9XG4gIH0sIFtsb2FkaW5nT3JEZWxheV0pO1xuICBSZWFjdC51c2VFZmZlY3QoZml4VHdvQ05DaGFyLCBbYnV0dG9uUmVmXSk7XG5cbiAgdmFyIGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIHZhciBfYTtcblxuICAgIHZhciBvbkNsaWNrID0gcHJvcHMub25DbGljayxcbiAgICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMzAyMDdcblxuICAgIGlmIChpbm5lckxvYWRpbmcgfHwgZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAoX2EgPSBvbkNsaWNrKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EoZSk7XG4gIH07XG5cbiAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoISh0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycgJiYgaWNvbi5sZW5ndGggPiAyKSwgJ0J1dHRvbicsIFwiYGljb25gIGlzIHVzaW5nIFJlYWN0Tm9kZSBpbnN0ZWFkIG9mIHN0cmluZyBuYW1pbmcgaW4gdjQuIFBsZWFzZSBjaGVjayBgXCIuY29uY2F0KGljb24sIFwiYCBhdCBodHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9pY29uXCIpKTtcbiAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoIShnaG9zdCAmJiBpc1VuYm9yZGVyZWRCdXR0b25UeXBlKHR5cGUpKSwgJ0J1dHRvbicsIFwiYGxpbmtgIG9yIGB0ZXh0YCBidXR0b24gY2FuJ3QgYmUgYSBgZ2hvc3RgIGJ1dHRvbi5cIik7XG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2J0bicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBhdXRvSW5zZXJ0U3BhY2UgPSBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbiAhPT0gZmFsc2U7IC8vIGxhcmdlID0+IGxnXG4gIC8vIHNtYWxsID0+IHNtXG5cbiAgdmFyIHNpemVDbHMgPSAnJztcblxuICBzd2l0Y2ggKGN1c3RvbWl6ZVNpemUgfHwgc2l6ZSkge1xuICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIHNpemVDbHMgPSAnbGcnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdzbWFsbCc6XG4gICAgICBzaXplQ2xzID0gJ3NtJztcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIGljb25UeXBlID0gaW5uZXJMb2FkaW5nID8gJ2xvYWRpbmcnIDogaWNvbjtcbiAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQodHlwZSksIHR5cGUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2hhcGUpLCBzaGFwZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplQ2xzKSwgc2l6ZUNscyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvbi1vbmx5XCIpLCAhY2hpbGRyZW4gJiYgY2hpbGRyZW4gIT09IDAgJiYgISFpY29uVHlwZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYmFja2dyb3VuZC1naG9zdFwiKSwgZ2hvc3QgJiYgIWlzVW5ib3JkZXJlZEJ1dHRvblR5cGUodHlwZSkpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxvYWRpbmdcIiksIGlubmVyTG9hZGluZyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdHdvLWNoaW5lc2UtY2hhcnNcIiksIGhhc1R3b0NOQ2hhciAmJiBhdXRvSW5zZXJ0U3BhY2UpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJsb2NrXCIpLCBibG9jayksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGFuZ2Vyb3VzXCIpLCAhIWRhbmdlciksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICB2YXIgaWNvbk5vZGUgPSBpY29uICYmICFpbm5lckxvYWRpbmcgPyBpY29uIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvYWRpbmdJY29uW1wiZGVmYXVsdFwiXSwge1xuICAgIGV4aXN0SWNvbjogISFpY29uLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGxvYWRpbmc6ICEhaW5uZXJMb2FkaW5nXG4gIH0pO1xuICB2YXIga2lkcyA9IGNoaWxkcmVuIHx8IGNoaWxkcmVuID09PSAwID8gc3BhY2VDaGlsZHJlbihjaGlsZHJlbiwgaXNOZWVkSW5zZXJ0ZWQoKSAmJiBhdXRvSW5zZXJ0U3BhY2UpIDogbnVsbDtcbiAgdmFyIGxpbmtCdXR0b25SZXN0UHJvcHMgPSAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShyZXN0LCBbJ25hdmlnYXRlJ10pO1xuXG4gIGlmIChsaW5rQnV0dG9uUmVzdFByb3BzLmhyZWYgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBsaW5rQnV0dG9uUmVzdFByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICAgIHJlZjogYnV0dG9uUmVmXG4gICAgfSksIGljb25Ob2RlLCBraWRzKTtcbiAgfVxuXG4gIHZhciBidXR0b25Ob2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCByZXN0LCB7XG4gICAgdHlwZTogaHRtbFR5cGUsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgIHJlZjogYnV0dG9uUmVmXG4gIH0pLCBpY29uTm9kZSwga2lkcyk7XG5cbiAgaWYgKGlzVW5ib3JkZXJlZEJ1dHRvblR5cGUodHlwZSkpIHtcbiAgICByZXR1cm4gYnV0dG9uTm9kZTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfd2F2ZVtcImRlZmF1bHRcIl0sIG51bGwsIGJ1dHRvbk5vZGUpO1xufTtcblxudmFyIEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEludGVybmFsQnV0dG9uKTtcbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuQnV0dG9uLkdyb3VwID0gX2J1dHRvbkdyb3VwW1wiZGVmYXVsdFwiXTtcbkJ1dHRvbi5fX0FOVF9CVVRUT04gPSB0cnVlO1xudmFyIF9kZWZhdWx0ID0gQnV0dG9uO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2J1dHRvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9IF9idXR0b25bXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yY0NoZWNrYm94ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtY2hlY2tib3hcIikpO1xuXG52YXIgX0dyb3VwID0gcmVxdWlyZShcIi4vR3JvdXBcIik7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2Rldldhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9kZXZXYXJuaW5nXCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIEludGVybmFsQ2hlY2tib3ggPSBmdW5jdGlvbiBJbnRlcm5hbENoZWNrYm94KF9hLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgX2EkaW5kZXRlcm1pbmF0ZSA9IF9hLmluZGV0ZXJtaW5hdGUsXG4gICAgICBpbmRldGVybWluYXRlID0gX2EkaW5kZXRlcm1pbmF0ZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSRpbmRldGVybWluYXRlLFxuICAgICAgc3R5bGUgPSBfYS5zdHlsZSxcbiAgICAgIG9uTW91c2VFbnRlciA9IF9hLm9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZSA9IF9hLm9uTW91c2VMZWF2ZSxcbiAgICAgIF9hJHNraXBHcm91cCA9IF9hLnNraXBHcm91cCxcbiAgICAgIHNraXBHcm91cCA9IF9hJHNraXBHcm91cCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSRza2lwR3JvdXAsXG4gICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiaW5kZXRlcm1pbmF0ZVwiLCBcInN0eWxlXCIsIFwib25Nb3VzZUVudGVyXCIsIFwib25Nb3VzZUxlYXZlXCIsIFwic2tpcEdyb3VwXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgY2hlY2tib3hHcm91cCA9IFJlYWN0LnVzZUNvbnRleHQoX0dyb3VwLkdyb3VwQ29udGV4dCk7XG4gIHZhciBwcmV2VmFsdWUgPSBSZWFjdC51c2VSZWYocmVzdFByb3BzLnZhbHVlKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBjaGVja2JveEdyb3VwID09PSBudWxsIHx8IGNoZWNrYm94R3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNoZWNrYm94R3JvdXAucmVnaXN0ZXJWYWx1ZShyZXN0UHJvcHMudmFsdWUpO1xuICAgICgwLCBfZGV2V2FybmluZ1tcImRlZmF1bHRcIl0pKCdjaGVja2VkJyBpbiByZXN0UHJvcHMgfHwgISFjaGVja2JveEdyb3VwIHx8ICEoJ3ZhbHVlJyBpbiByZXN0UHJvcHMpLCAnQ2hlY2tib3gnLCAnYHZhbHVlYCBpcyBub3QgYSB2YWxpZCBwcm9wLCBkbyB5b3UgbWVhbiBgY2hlY2tlZGA/Jyk7XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2tpcEdyb3VwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlc3RQcm9wcy52YWx1ZSAhPT0gcHJldlZhbHVlLmN1cnJlbnQpIHtcbiAgICAgIGNoZWNrYm94R3JvdXAgPT09IG51bGwgfHwgY2hlY2tib3hHcm91cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hlY2tib3hHcm91cC5jYW5jZWxWYWx1ZShwcmV2VmFsdWUuY3VycmVudCk7XG4gICAgICBjaGVja2JveEdyb3VwID09PSBudWxsIHx8IGNoZWNrYm94R3JvdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNoZWNrYm94R3JvdXAucmVnaXN0ZXJWYWx1ZShyZXN0UHJvcHMudmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2hlY2tib3hHcm91cCA9PT0gbnVsbCB8fCBjaGVja2JveEdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGVja2JveEdyb3VwLmNhbmNlbFZhbHVlKHJlc3RQcm9wcy52YWx1ZSk7XG4gICAgfTtcbiAgfSwgW3Jlc3RQcm9wcy52YWx1ZV0pO1xuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdjaGVja2JveCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBjaGVja2JveFByb3BzID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCByZXN0UHJvcHMpO1xuXG4gIGlmIChjaGVja2JveEdyb3VwICYmICFza2lwR3JvdXApIHtcbiAgICBjaGVja2JveFByb3BzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJlc3RQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICByZXN0UHJvcHMub25DaGFuZ2UuYXBwbHkocmVzdFByb3BzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hlY2tib3hHcm91cC50b2dnbGVPcHRpb24pIHtcbiAgICAgICAgY2hlY2tib3hHcm91cC50b2dnbGVPcHRpb24oe1xuICAgICAgICAgIGxhYmVsOiBjaGlsZHJlbixcbiAgICAgICAgICB2YWx1ZTogcmVzdFByb3BzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjaGVja2JveFByb3BzLm5hbWUgPSBjaGVja2JveEdyb3VwLm5hbWU7XG4gICAgY2hlY2tib3hQcm9wcy5jaGVja2VkID0gY2hlY2tib3hHcm91cC52YWx1ZS5pbmRleE9mKHJlc3RQcm9wcy52YWx1ZSkgIT09IC0xO1xuICAgIGNoZWNrYm94UHJvcHMuZGlzYWJsZWQgPSByZXN0UHJvcHMuZGlzYWJsZWQgfHwgY2hlY2tib3hHcm91cC5kaXNhYmxlZDtcbiAgfVxuXG4gIHZhciBjbGFzc1N0cmluZyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdyYXBwZXJcIiksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItd3JhcHBlci1jaGVja2VkXCIpLCBjaGVja2JveFByb3BzLmNoZWNrZWQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdyYXBwZXItZGlzYWJsZWRcIiksIGNoZWNrYm94UHJvcHMuZGlzYWJsZWQpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gIHZhciBjaGVja2JveENsYXNzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbmRldGVybWluYXRlXCIpLCBpbmRldGVybWluYXRlKSk7XG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjQ2hlY2tib3hbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNoZWNrYm94UHJvcHMsIHtcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lOiBjaGVja2JveENsYXNzLFxuICAgICAgcmVmOiByZWZcbiAgICB9KSksIGNoaWxkcmVuICE9PSB1bmRlZmluZWQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGNoaWxkcmVuKSlcbiAgKTtcbn07XG5cbnZhciBDaGVja2JveCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKEludGVybmFsQ2hlY2tib3gpO1xuQ2hlY2tib3guZGlzcGxheU5hbWUgPSAnQ2hlY2tib3gnO1xudmFyIF9kZWZhdWx0ID0gQ2hlY2tib3g7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuR3JvdXBDb250ZXh0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9vbWl0XCIpKTtcblxudmFyIF9DaGVja2JveCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ2hlY2tib3hcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIEdyb3VwQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuZXhwb3J0cy5Hcm91cENvbnRleHQgPSBHcm91cENvbnRleHQ7XG5cbnZhciBJbnRlcm5hbENoZWNrYm94R3JvdXAgPSBmdW5jdGlvbiBJbnRlcm5hbENoZWNrYm94R3JvdXAoX2EsIHJlZikge1xuICB2YXIgZGVmYXVsdFZhbHVlID0gX2EuZGVmYXVsdFZhbHVlLFxuICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgIF9hJG9wdGlvbnMgPSBfYS5vcHRpb25zLFxuICAgICAgb3B0aW9ucyA9IF9hJG9wdGlvbnMgPT09IHZvaWQgMCA/IFtdIDogX2Ekb3B0aW9ucyxcbiAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX2Euc3R5bGUsXG4gICAgICBvbkNoYW5nZSA9IF9hLm9uQ2hhbmdlLFxuICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJkZWZhdWx0VmFsdWVcIiwgXCJjaGlsZHJlblwiLCBcIm9wdGlvbnNcIiwgXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcIm9uQ2hhbmdlXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUocmVzdFByb3BzLnZhbHVlIHx8IGRlZmF1bHRWYWx1ZSB8fCBbXSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICB2YWx1ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRWYWx1ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZShbXSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGU0ID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF9SZWFjdCR1c2VTdGF0ZTMsIDIpLFxuICAgICAgcmVnaXN0ZXJlZFZhbHVlcyA9IF9SZWFjdCR1c2VTdGF0ZTRbMF0sXG4gICAgICBzZXRSZWdpc3RlcmVkVmFsdWVzID0gX1JlYWN0JHVzZVN0YXRlNFsxXTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICgndmFsdWUnIGluIHJlc3RQcm9wcykge1xuICAgICAgc2V0VmFsdWUocmVzdFByb3BzLnZhbHVlIHx8IFtdKTtcbiAgICB9XG4gIH0sIFtyZXN0UHJvcHMudmFsdWVdKTtcblxuICB2YXIgZ2V0T3B0aW9ucyA9IGZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxhYmVsOiBvcHRpb24sXG4gICAgICAgICAgdmFsdWU6IG9wdGlvblxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBjYW5jZWxWYWx1ZSA9IGZ1bmN0aW9uIGNhbmNlbFZhbHVlKHZhbCkge1xuICAgIHNldFJlZ2lzdGVyZWRWYWx1ZXMoZnVuY3Rpb24gKHByZXZWYWx1ZXMpIHtcbiAgICAgIHJldHVybiBwcmV2VmFsdWVzLmZpbHRlcihmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdiAhPT0gdmFsO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlZ2lzdGVyVmFsdWUgPSBmdW5jdGlvbiByZWdpc3RlclZhbHVlKHZhbCkge1xuICAgIHNldFJlZ2lzdGVyZWRWYWx1ZXMoZnVuY3Rpb24gKHByZXZWYWx1ZXMpIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoKDAsIF90b0NvbnN1bWFibGVBcnJheTJbXCJkZWZhdWx0XCJdKShwcmV2VmFsdWVzKSwgW3ZhbF0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciB0b2dnbGVPcHRpb24gPSBmdW5jdGlvbiB0b2dnbGVPcHRpb24ob3B0aW9uKSB7XG4gICAgdmFyIG9wdGlvbkluZGV4ID0gdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpO1xuICAgIHZhciBuZXdWYWx1ZSA9ICgwLCBfdG9Db25zdW1hYmxlQXJyYXkyW1wiZGVmYXVsdFwiXSkodmFsdWUpO1xuXG4gICAgaWYgKG9wdGlvbkluZGV4ID09PSAtMSkge1xuICAgICAgbmV3VmFsdWUucHVzaChvcHRpb24udmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZS5zcGxpY2Uob3B0aW9uSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGlmICghKCd2YWx1ZScgaW4gcmVzdFByb3BzKSkge1xuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cblxuICAgIHZhciBvcHRzID0gZ2V0T3B0aW9ucygpO1xuICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShuZXdWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRWYWx1ZXMuaW5kZXhPZih2YWwpICE9PSAtMTtcbiAgICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgaW5kZXhBID0gb3B0cy5maW5kSW5kZXgoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICByZXR1cm4gb3B0LnZhbHVlID09PSBhO1xuICAgICAgfSk7XG4gICAgICB2YXIgaW5kZXhCID0gb3B0cy5maW5kSW5kZXgoZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICByZXR1cm4gb3B0LnZhbHVlID09PSBiO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaW5kZXhBIC0gaW5kZXhCO1xuICAgIH0pKTtcbiAgfTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdjaGVja2JveCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBncm91cFByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ3JvdXBcIik7XG4gIHZhciBkb21Qcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKHJlc3RQcm9wcywgWyd2YWx1ZScsICdkaXNhYmxlZCddKTtcblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICBjaGlsZHJlbiA9IGdldE9wdGlvbnMoKS5tYXAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DaGVja2JveFtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGtleTogb3B0aW9uLnZhbHVlLnRvU3RyaW5nKCksXG4gICAgICAgIGRpc2FibGVkOiAnZGlzYWJsZWQnIGluIG9wdGlvbiA/IG9wdGlvbi5kaXNhYmxlZCA6IHJlc3RQcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgY2hlY2tlZDogdmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMSxcbiAgICAgICAgb25DaGFuZ2U6IG9wdGlvbi5vbkNoYW5nZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChncm91cFByZWZpeENscywgXCItaXRlbVwiKSxcbiAgICAgICAgc3R5bGU6IG9wdGlvbi5zdHlsZVxuICAgICAgfSwgb3B0aW9uLmxhYmVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgIHRvZ2dsZU9wdGlvbjogdG9nZ2xlT3B0aW9uLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkaXNhYmxlZDogcmVzdFByb3BzLmRpc2FibGVkLFxuICAgIG5hbWU6IHJlc3RQcm9wcy5uYW1lLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE2Mzc2XG4gICAgcmVnaXN0ZXJWYWx1ZTogcmVnaXN0ZXJWYWx1ZSxcbiAgICBjYW5jZWxWYWx1ZTogY2FuY2VsVmFsdWVcbiAgfTtcbiAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoZ3JvdXBQcmVmaXhDbHMsICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIFwiXCIuY29uY2F0KGdyb3VwUHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBjbGFzc05hbWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzU3RyaW5nLFxuICAgIHN0eWxlOiBzdHlsZVxuICB9LCBkb21Qcm9wcywge1xuICAgIHJlZjogcmVmXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChHcm91cENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFxuICB9LCBjaGlsZHJlbikpO1xufTtcblxudmFyIENoZWNrYm94R3JvdXAgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihJbnRlcm5hbENoZWNrYm94R3JvdXApO1xuXG52YXIgX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovUmVhY3QubWVtbyhDaGVja2JveEdyb3VwKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9DaGVja2JveCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ2hlY2tib3hcIikpO1xuXG52YXIgX0dyb3VwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Hcm91cFwiKSk7XG5cbnZhciBDaGVja2JveCA9IF9DaGVja2JveFtcImRlZmF1bHRcIl07XG5DaGVja2JveC5Hcm91cCA9IF9Hcm91cFtcImRlZmF1bHRcIl07XG5DaGVja2JveC5fX0FOVF9DSEVDS0JPWCA9IHRydWU7XG52YXIgX2RlZmF1bHQgPSBDaGVja2JveDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuaGFzUHJlZml4U3VmZml4ID0gaGFzUHJlZml4U3VmZml4O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX0Nsb3NlQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX3R5cGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvdHlwZVwiKTtcblxudmFyIF9JbnB1dCA9IHJlcXVpcmUoXCIuL0lucHV0XCIpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxudmFyIENsZWFyYWJsZUlucHV0VHlwZSA9ICgwLCBfdHlwZS50dXBsZSkoJ3RleHQnLCAnaW5wdXQnKTtcblxuZnVuY3Rpb24gaGFzUHJlZml4U3VmZml4KHByb3BzKSB7XG4gIHJldHVybiAhIShwcm9wcy5wcmVmaXggfHwgcHJvcHMuc3VmZml4IHx8IHByb3BzLmFsbG93Q2xlYXIpO1xufVxuXG5mdW5jdGlvbiBoYXNBZGRvbihwcm9wcykge1xuICByZXR1cm4gISEocHJvcHMuYWRkb25CZWZvcmUgfHwgcHJvcHMuYWRkb25BZnRlcik7XG59XG5cbnZhciBDbGVhcmFibGVMYWJlbGVkSW5wdXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShDbGVhcmFibGVMYWJlbGVkSW5wdXQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKENsZWFyYWJsZUxhYmVsZWRJbnB1dCk7XG5cbiAgZnVuY3Rpb24gQ2xlYXJhYmxlTGFiZWxlZElucHV0KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgQ2xlYXJhYmxlTGFiZWxlZElucHV0KTtcbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIC8qKiBAcHJpdmF0ZSBEbyBOb3QgdXNlIG91dCBvZiB0aGlzIGNsYXNzLiBXZSBkbyBub3QgcHJvbWlzZSB0aGlzIGlzIGFsd2F5cyBrZWVwLiAqL1xuXG4gICAgX3RoaXMuY29udGFpbmVyUmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgX3RoaXMub25JbnB1dE1vdXNlVXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF9hO1xuXG4gICAgICBpZiAoKF9hID0gX3RoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgdmFyIHRyaWdnZXJGb2N1cyA9IF90aGlzLnByb3BzLnRyaWdnZXJGb2N1cztcbiAgICAgICAgdHJpZ2dlckZvY3VzID09PSBudWxsIHx8IHRyaWdnZXJGb2N1cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdHJpZ2dlckZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoQ2xlYXJhYmxlTGFiZWxlZElucHV0LCBbe1xuICAgIGtleTogXCJyZW5kZXJDbGVhckljb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ2xlYXJJY29uKHByZWZpeENscykge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhbGxvd0NsZWFyID0gX3RoaXMkcHJvcHMuYWxsb3dDbGVhcixcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzLnZhbHVlLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgcmVhZE9ubHkgPSBfdGhpcyRwcm9wcy5yZWFkT25seSxcbiAgICAgICAgICBoYW5kbGVSZXNldCA9IF90aGlzJHByb3BzLmhhbmRsZVJlc2V0O1xuXG4gICAgICBpZiAoIWFsbG93Q2xlYXIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZWVkQ2xlYXIgPSAhZGlzYWJsZWQgJiYgIXJlYWRPbmx5ICYmIHZhbHVlO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2xlYXItaWNvblwiKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2xvc2VDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgIG9uQ2xpY2s6IGhhbmRsZVJlc2V0LFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKCgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIFwiXCIuY29uY2F0KGNsYXNzTmFtZSwgXCItaGlkZGVuXCIpLCAhbmVlZENsZWFyKSwgY2xhc3NOYW1lKSxcbiAgICAgICAgcm9sZTogXCJidXR0b25cIlxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclN1ZmZpeFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJTdWZmaXgocHJlZml4Q2xzKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdWZmaXggPSBfdGhpcyRwcm9wczIuc3VmZml4LFxuICAgICAgICAgIGFsbG93Q2xlYXIgPSBfdGhpcyRwcm9wczIuYWxsb3dDbGVhcjtcblxuICAgICAgaWYgKHN1ZmZpeCB8fCBhbGxvd0NsZWFyKSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdWZmaXhcIilcbiAgICAgICAgfSwgdGhpcy5yZW5kZXJDbGVhckljb24ocHJlZml4Q2xzKSwgc3VmZml4KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckxhYmVsZWRJY29uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckxhYmVsZWRJY29uKHByZWZpeENscywgZWxlbWVudCkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzMjtcblxuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZm9jdXNlZCA9IF90aGlzJHByb3BzMy5mb2N1c2VkLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHMzLnZhbHVlLFxuICAgICAgICAgIHByZWZpeCA9IF90aGlzJHByb3BzMy5wcmVmaXgsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgICBzaXplID0gX3RoaXMkcHJvcHMzLnNpemUsXG4gICAgICAgICAgc3VmZml4ID0gX3RoaXMkcHJvcHMzLnN1ZmZpeCxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMy5kaXNhYmxlZCxcbiAgICAgICAgICBhbGxvd0NsZWFyID0gX3RoaXMkcHJvcHMzLmFsbG93Q2xlYXIsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMzLmRpcmVjdGlvbixcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzMy5zdHlsZSxcbiAgICAgICAgICByZWFkT25seSA9IF90aGlzJHByb3BzMy5yZWFkT25seSxcbiAgICAgICAgICBib3JkZXJlZCA9IF90aGlzJHByb3BzMy5ib3JkZXJlZDtcbiAgICAgIHZhciBzdWZmaXhOb2RlID0gdGhpcy5yZW5kZXJTdWZmaXgocHJlZml4Q2xzKTtcblxuICAgICAgaWYgKCFoYXNQcmVmaXhTdWZmaXgodGhpcy5wcm9wcykpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkoZWxlbWVudCwge1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHByZWZpeE5vZGUgPSBwcmVmaXggPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcHJlZml4XCIpXG4gICAgICB9LCBwcmVmaXgpIDogbnVsbDtcbiAgICAgIHZhciBhZmZpeFdyYXBwZXJDbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXJcIiksIChfY2xhc3NOYW1lczIgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWZmaXgtd3JhcHBlci1mb2N1c2VkXCIpLCBmb2N1c2VkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWZmaXgtd3JhcHBlci1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hZmZpeC13cmFwcGVyLXNtXCIpLCBzaXplID09PSAnc21hbGwnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWZmaXgtd3JhcHBlci1sZ1wiKSwgc2l6ZSA9PT0gJ2xhcmdlJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXItaW5wdXQtd2l0aC1jbGVhci1idG5cIiksIHN1ZmZpeCAmJiBhbGxvd0NsZWFyICYmIHZhbHVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWZmaXgtd3JhcHBlci1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hZmZpeC13cmFwcGVyLXJlYWRvbmx5XCIpLCByZWFkT25seSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXItYm9yZGVybGVzc1wiKSwgIWJvcmRlcmVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczIsIFwiXCIuY29uY2F0KGNsYXNzTmFtZSksICFoYXNBZGRvbih0aGlzLnByb3BzKSAmJiBjbGFzc05hbWUpLCBfY2xhc3NOYW1lczIpKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICByZWY6IHRoaXMuY29udGFpbmVyUmVmLFxuICAgICAgICBjbGFzc05hbWU6IGFmZml4V3JhcHBlckNscyxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBvbk1vdXNlVXA6IHRoaXMub25JbnB1dE1vdXNlVXBcbiAgICAgIH0sIHByZWZpeE5vZGUsICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkoZWxlbWVudCwge1xuICAgICAgICBzdHlsZTogbnVsbCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfSW5wdXQuZ2V0SW5wdXRDbGFzc05hbWUpKHByZWZpeENscywgYm9yZGVyZWQsIHNpemUsIGRpc2FibGVkKVxuICAgICAgfSksIHN1ZmZpeE5vZGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJJbnB1dFdpdGhMYWJlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJbnB1dFdpdGhMYWJlbChwcmVmaXhDbHMsIGxhYmVsZWRFbGVtZW50KSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM0O1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhZGRvbkJlZm9yZSA9IF90aGlzJHByb3BzNC5hZGRvbkJlZm9yZSxcbiAgICAgICAgICBhZGRvbkFmdGVyID0gX3RoaXMkcHJvcHM0LmFkZG9uQWZ0ZXIsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczQuc3R5bGUsXG4gICAgICAgICAgc2l6ZSA9IF90aGlzJHByb3BzNC5zaXplLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNC5jbGFzc05hbWUsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHM0LmRpcmVjdGlvbjsgLy8gTm90IHdyYXAgd2hlbiB0aGVyZSBpcyBub3QgYWRkb25zXG5cbiAgICAgIGlmICghaGFzQWRkb24odGhpcy5wcm9wcykpIHtcbiAgICAgICAgcmV0dXJuIGxhYmVsZWRFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgd3JhcHBlckNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ3JvdXBcIik7XG4gICAgICB2YXIgYWRkb25DbGFzc05hbWUgPSBcIlwiLmNvbmNhdCh3cmFwcGVyQ2xhc3NOYW1lLCBcIi1hZGRvblwiKTtcbiAgICAgIHZhciBhZGRvbkJlZm9yZU5vZGUgPSBhZGRvbkJlZm9yZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYWRkb25DbGFzc05hbWVcbiAgICAgIH0sIGFkZG9uQmVmb3JlKSA6IG51bGw7XG4gICAgICB2YXIgYWRkb25BZnRlck5vZGUgPSBhZGRvbkFmdGVyID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBhZGRvbkNsYXNzTmFtZVxuICAgICAgfSwgYWRkb25BZnRlcikgOiBudWxsO1xuICAgICAgdmFyIG1lcmdlZFdyYXBwZXJDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdyYXBwZXJcIiksIHdyYXBwZXJDbGFzc05hbWUsICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIFwiXCIuY29uY2F0KHdyYXBwZXJDbGFzc05hbWUsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJykpO1xuICAgICAgdmFyIG1lcmdlZEdyb3VwQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncm91cC13cmFwcGVyXCIpLCAoX2NsYXNzTmFtZXM0ID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXM0LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWdyb3VwLXdyYXBwZXItc21cIiksIHNpemUgPT09ICdzbWFsbCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzNCwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncm91cC13cmFwcGVyLWxnXCIpLCBzaXplID09PSAnbGFyZ2UnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczQsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ3JvdXAtd3JhcHBlci1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lczQpLCBjbGFzc05hbWUpOyAvLyBOZWVkIGFub3RoZXIgd3JhcHBlciBmb3IgY2hhbmdpbmcgZGlzcGxheTp0YWJsZSB0byBkaXNwbGF5OmlubGluZS1ibG9ja1xuICAgICAgLy8gYW5kIHB1dCBzdHlsZSBwcm9wIGluIHdyYXBwZXJcblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWVyZ2VkR3JvdXBDbGFzc05hbWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBtZXJnZWRXcmFwcGVyQ2xhc3NOYW1lXG4gICAgICB9LCBhZGRvbkJlZm9yZU5vZGUsICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkobGFiZWxlZEVsZW1lbnQsIHtcbiAgICAgICAgc3R5bGU6IG51bGxcbiAgICAgIH0pLCBhZGRvbkFmdGVyTm9kZSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJUZXh0QXJlYVdpdGhDbGVhckljb25cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGV4dEFyZWFXaXRoQ2xlYXJJY29uKHByZWZpeENscywgZWxlbWVudCkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzNTtcblxuICAgICAgdmFyIF90aGlzJHByb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wczUudmFsdWUsXG4gICAgICAgICAgYWxsb3dDbGVhciA9IF90aGlzJHByb3BzNS5hbGxvd0NsZWFyLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzNS5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczUuc3R5bGUsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHM1LmRpcmVjdGlvbixcbiAgICAgICAgICBib3JkZXJlZCA9IF90aGlzJHByb3BzNS5ib3JkZXJlZDtcblxuICAgICAgaWYgKCFhbGxvd0NsZWFyKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGVsZW1lbnQsIHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhZmZpeFdyYXBwZXJDbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXJcIiksIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYWZmaXgtd3JhcHBlci10ZXh0YXJlYS13aXRoLWNsZWFyLWJ0blwiKSwgKF9jbGFzc05hbWVzNSA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzNSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hZmZpeC13cmFwcGVyLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXM1LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWFmZml4LXdyYXBwZXItYm9yZGVybGVzc1wiKSwgIWJvcmRlcmVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lczUsIFwiXCIuY29uY2F0KGNsYXNzTmFtZSksICFoYXNBZGRvbih0aGlzLnByb3BzKSAmJiBjbGFzc05hbWUpLCBfY2xhc3NOYW1lczUpKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGFmZml4V3JhcHBlckNscyxcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9LCAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGVsZW1lbnQsIHtcbiAgICAgICAgc3R5bGU6IG51bGwsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSksIHRoaXMucmVuZGVyQ2xlYXJJY29uKHByZWZpeENscykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHM2LnByZWZpeENscyxcbiAgICAgICAgICBpbnB1dFR5cGUgPSBfdGhpcyRwcm9wczYuaW5wdXRUeXBlLFxuICAgICAgICAgIGVsZW1lbnQgPSBfdGhpcyRwcm9wczYuZWxlbWVudDtcblxuICAgICAgaWYgKGlucHV0VHlwZSA9PT0gQ2xlYXJhYmxlSW5wdXRUeXBlWzBdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRleHRBcmVhV2l0aENsZWFySWNvbihwcmVmaXhDbHMsIGVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJJbnB1dFdpdGhMYWJlbChwcmVmaXhDbHMsIHRoaXMucmVuZGVyTGFiZWxlZEljb24ocHJlZml4Q2xzLCBlbGVtZW50KSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDbGVhcmFibGVMYWJlbGVkSW5wdXQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBfZGVmYXVsdCA9IENsZWFyYWJsZUxhYmVsZWRJbnB1dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBcImRlZmF1bHRcIjogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxudmFyIEdyb3VwID0gZnVuY3Rpb24gR3JvdXAocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHMsXG4gICAgICAgIGRpcmVjdGlvbiA9IF9yZWYuZGlyZWN0aW9uO1xuICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIF9wcm9wcyRjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcyRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGNsYXNzTmFtZTtcbiAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdpbnB1dC1ncm91cCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgdmFyIGNscyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGdcIiksIHByb3BzLnNpemUgPT09ICdsYXJnZScpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNtXCIpLCBwcm9wcy5zaXplID09PSAnc21hbGwnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jb21wYWN0XCIpLCBwcm9wcy5jb21wYWN0KSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgIHN0eWxlOiBwcm9wcy5zdHlsZSxcbiAgICAgIG9uTW91c2VFbnRlcjogcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgb25Nb3VzZUxlYXZlOiBwcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICBvbkZvY3VzOiBwcm9wcy5vbkZvY3VzLFxuICAgICAgb25CbHVyOiBwcm9wcy5vbkJsdXJcbiAgICB9LCBwcm9wcy5jaGlsZHJlbik7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gR3JvdXA7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZpeENvbnRyb2xsZWRWYWx1ZSA9IGZpeENvbnRyb2xsZWRWYWx1ZTtcbmV4cG9ydHMucmVzb2x2ZU9uQ2hhbmdlID0gcmVzb2x2ZU9uQ2hhbmdlO1xuZXhwb3J0cy5nZXRJbnB1dENsYXNzTmFtZSA9IGdldElucHV0Q2xhc3NOYW1lO1xuZXhwb3J0cy50cmlnZ2VyRm9jdXMgPSB0cmlnZ2VyRm9jdXM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9vbWl0XCIpKTtcblxudmFyIF9DbGVhcmFibGVMYWJlbGVkSW5wdXQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9DbGVhcmFibGVMYWJlbGVkSW5wdXRcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9TaXplQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dFwiKSk7XG5cbnZhciBfZGV2V2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2Rldldhcm5pbmdcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIGZpeENvbnRyb2xsZWRWYWx1ZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU9uQ2hhbmdlKHRhcmdldCwgZSwgb25DaGFuZ2UsIHRhcmdldFZhbHVlKSB7XG4gIGlmICghb25DaGFuZ2UpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZXZlbnQgPSBlO1xuICB2YXIgb3JpZ2luYWxJbnB1dFZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuXG4gIGlmIChlLnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAvLyBjbGljayBjbGVhciBpY29uXG4gICAgZXZlbnQgPSBPYmplY3QuY3JlYXRlKGUpO1xuICAgIGV2ZW50LnRhcmdldCA9IHRhcmdldDtcbiAgICBldmVudC5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0OyAvLyBjaGFuZ2UgdGFyZ2V0IHJlZiB2YWx1ZSBjYXVzZSBlLnRhcmdldC52YWx1ZSBzaG91bGQgYmUgJycgd2hlbiBjbGVhciBpbnB1dFxuXG4gICAgdGFyZ2V0LnZhbHVlID0gJyc7XG4gICAgb25DaGFuZ2UoZXZlbnQpOyAvLyByZXNldCB0YXJnZXQgcmVmIHZhbHVlXG5cbiAgICB0YXJnZXQudmFsdWUgPSBvcmlnaW5hbElucHV0VmFsdWU7XG4gICAgcmV0dXJuO1xuICB9IC8vIFRyaWdnZXIgYnkgY29tcG9zaXRpb24gZXZlbnQsIHRoaXMgbWVhbnMgd2UgbmVlZCBmb3JjZSBjaGFuZ2UgdGhlIGlucHV0IHZhbHVlXG5cblxuICBpZiAodGFyZ2V0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50ID0gT2JqZWN0LmNyZWF0ZShlKTtcbiAgICBldmVudC50YXJnZXQgPSB0YXJnZXQ7XG4gICAgZXZlbnQuY3VycmVudFRhcmdldCA9IHRhcmdldDtcbiAgICB0YXJnZXQudmFsdWUgPSB0YXJnZXRWYWx1ZTtcbiAgICBvbkNoYW5nZShldmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dENsYXNzTmFtZShwcmVmaXhDbHMsIGJvcmRlcmVkLCBzaXplLCBkaXNhYmxlZCwgZGlyZWN0aW9uKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICByZXR1cm4gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zbVwiKSwgc2l6ZSA9PT0gJ3NtYWxsJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGdcIiksIHNpemUgPT09ICdsYXJnZScpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkXCIpLCBkaXNhYmxlZCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ib3JkZXJsZXNzXCIpLCAhYm9yZGVyZWQpLCBfY2xhc3NOYW1lcykpO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyRm9jdXMoZWxlbWVudCwgb3B0aW9uKSB7XG4gIGlmICghZWxlbWVudCkgcmV0dXJuO1xuICBlbGVtZW50LmZvY3VzKG9wdGlvbik7IC8vIFNlbGVjdGlvbiBjb250ZW50XG5cbiAgdmFyIF9yZWYgPSBvcHRpb24gfHwge30sXG4gICAgICBjdXJzb3IgPSBfcmVmLmN1cnNvcjtcblxuICBpZiAoY3Vyc29yKSB7XG4gICAgdmFyIGxlbiA9IGVsZW1lbnQudmFsdWUubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChjdXJzb3IpIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCAwKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UobGVuLCBsZW4pO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCBsZW4pO1xuICAgIH1cbiAgfVxufVxuXG52YXIgSW5wdXQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShJbnB1dCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoSW5wdXQpO1xuXG4gIGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBJbnB1dCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgX3RoaXMuZGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgICBfdGhpcy5mb2N1cyA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgIHRyaWdnZXJGb2N1cyhfdGhpcy5pbnB1dCwgb3B0aW9uKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2F2ZUNsZWFyYWJsZUlucHV0ID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICBfdGhpcy5jbGVhcmFibGVJbnB1dCA9IGlucHV0O1xuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlSW5wdXQgPSBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgIF90aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgfTtcblxuICAgIF90aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uRm9jdXMgPSBfdGhpcy5wcm9wcy5vbkZvY3VzO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWQ6IHRydWVcbiAgICAgIH0sIF90aGlzLmNsZWFyUGFzc3dvcmRWYWx1ZUF0dHJpYnV0ZSk7XG5cbiAgICAgIG9uRm9jdXMgPT09IG51bGwgfHwgb25Gb2N1cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Gb2N1cyhlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25CbHVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvbkJsdXIgPSBfdGhpcy5wcm9wcy5vbkJsdXI7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZDogZmFsc2VcbiAgICAgIH0sIF90aGlzLmNsZWFyUGFzc3dvcmRWYWx1ZUF0dHJpYnV0ZSk7XG5cbiAgICAgIG9uQmx1ciA9PT0gbnVsbCB8fCBvbkJsdXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQmx1cihlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUmVzZXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMuc2V0VmFsdWUoJycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuZm9jdXMoKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXNvbHZlT25DaGFuZ2UoX3RoaXMuaW5wdXQsIGUsIF90aGlzLnByb3BzLm9uQ2hhbmdlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVySW5wdXQgPSBmdW5jdGlvbiAocHJlZml4Q2xzLCBzaXplLCBib3JkZXJlZCkge1xuICAgICAgdmFyIGlucHV0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiB7fTtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBhZGRvbkJlZm9yZSA9IF90aGlzJHByb3BzLmFkZG9uQmVmb3JlLFxuICAgICAgICAgIGFkZG9uQWZ0ZXIgPSBfdGhpcyRwcm9wcy5hZGRvbkFmdGVyLFxuICAgICAgICAgIGN1c3RvbWl6ZVNpemUgPSBfdGhpcyRwcm9wcy5zaXplLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMuZGlzYWJsZWQ7IC8vIEZpeCBodHRwczovL2ZiLm1lL3JlYWN0LXVua25vd24tcHJvcFxuXG4gICAgICB2YXIgb3RoZXJQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKF90aGlzLnByb3BzLCBbJ3ByZWZpeENscycsICdvblByZXNzRW50ZXInLCAnYWRkb25CZWZvcmUnLCAnYWRkb25BZnRlcicsICdwcmVmaXgnLCAnc3VmZml4JywgJ2FsbG93Q2xlYXInLCAvLyBJbnB1dCBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCxcbiAgICAgIC8vIHNwZWNpZnkgZWl0aGVyIHRoZSB2YWx1ZSBwcm9wLCBvciB0aGUgZGVmYXVsdFZhbHVlIHByb3AsIGJ1dCBub3QgYm90aC5cbiAgICAgICdkZWZhdWx0VmFsdWUnLCAnc2l6ZScsICdpbnB1dFR5cGUnLCAnYm9yZGVyZWQnXSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgICBhdXRvQ29tcGxldGU6IGlucHV0LmF1dG9Db21wbGV0ZVxuICAgICAgfSwgb3RoZXJQcm9wcywge1xuICAgICAgICBvbkNoYW5nZTogX3RoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICBvbkZvY3VzOiBfdGhpcy5vbkZvY3VzLFxuICAgICAgICBvbkJsdXI6IF90aGlzLm9uQmx1cixcbiAgICAgICAgb25LZXlEb3duOiBfdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGdldElucHV0Q2xhc3NOYW1lKHByZWZpeENscywgYm9yZGVyZWQsIGN1c3RvbWl6ZVNpemUgfHwgc2l6ZSwgZGlzYWJsZWQsIF90aGlzLmRpcmVjdGlvbiksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIGNsYXNzTmFtZSwgY2xhc3NOYW1lICYmICFhZGRvbkJlZm9yZSAmJiAhYWRkb25BZnRlcikpLFxuICAgICAgICByZWY6IF90aGlzLnNhdmVJbnB1dFxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5jbGVhclBhc3N3b3JkVmFsdWVBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8yMDU0MVxuICAgICAgX3RoaXMucmVtb3ZlUGFzc3dvcmRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5pbnB1dCAmJiBfdGhpcy5pbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSA9PT0gJ3Bhc3N3b3JkJyAmJiBfdGhpcy5pbnB1dC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgICBfdGhpcy5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMuc2V0VmFsdWUoZS50YXJnZXQudmFsdWUsIF90aGlzLmNsZWFyUGFzc3dvcmRWYWx1ZUF0dHJpYnV0ZSk7XG5cbiAgICAgIHJlc29sdmVPbkNoYW5nZShfdGhpcy5pbnB1dCwgZSwgX3RoaXMucHJvcHMub25DaGFuZ2UpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvblByZXNzRW50ZXIgPSBfdGhpcyRwcm9wczIub25QcmVzc0VudGVyLFxuICAgICAgICAgIG9uS2V5RG93biA9IF90aGlzJHByb3BzMi5vbktleURvd247XG5cbiAgICAgIGlmIChvblByZXNzRW50ZXIgJiYgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBvblByZXNzRW50ZXIoZSk7XG4gICAgICB9XG5cbiAgICAgIG9uS2V5RG93biA9PT0gbnVsbCB8fCBvbktleURvd24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uS2V5RG93bihlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZjIuZ2V0UHJlZml4Q2xzLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF9yZWYyLmRpcmVjdGlvbixcbiAgICAgICAgICBpbnB1dCA9IF9yZWYyLmlucHV0O1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRzdGF0ZS52YWx1ZSxcbiAgICAgICAgICBmb2N1c2VkID0gX3RoaXMkc3RhdGUuZm9jdXNlZDtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfdGhpcyRwcm9wczMucHJlZml4Q2xzLFxuICAgICAgICAgIF90aGlzJHByb3BzMyRib3JkZXJlZCA9IF90aGlzJHByb3BzMy5ib3JkZXJlZCxcbiAgICAgICAgICBib3JkZXJlZCA9IF90aGlzJHByb3BzMyRib3JkZXJlZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF90aGlzJHByb3BzMyRib3JkZXJlZDtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2lucHV0JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIF90aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2l6ZUNvbnRleHRbXCJkZWZhdWx0XCJdLkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0NsZWFyYWJsZUxhYmVsZWRJbnB1dFtcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICB9LCBfdGhpcy5wcm9wcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIGlucHV0VHlwZTogXCJpbnB1dFwiLFxuICAgICAgICAgIHZhbHVlOiBmaXhDb250cm9sbGVkVmFsdWUodmFsdWUpLFxuICAgICAgICAgIGVsZW1lbnQ6IF90aGlzLnJlbmRlcklucHV0KHByZWZpeENscywgc2l6ZSwgYm9yZGVyZWQsIGlucHV0KSxcbiAgICAgICAgICBoYW5kbGVSZXNldDogX3RoaXMuaGFuZGxlUmVzZXQsXG4gICAgICAgICAgcmVmOiBfdGhpcy5zYXZlQ2xlYXJhYmxlSW5wdXQsXG4gICAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgICAgICAgZm9jdXNlZDogZm9jdXNlZCxcbiAgICAgICAgICB0cmlnZ2VyRm9jdXM6IF90aGlzLmZvY3VzLFxuICAgICAgICAgIGJvcmRlcmVkOiBib3JkZXJlZFxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgdmFyIHZhbHVlID0gdHlwZW9mIHByb3BzLnZhbHVlID09PSAndW5kZWZpbmVkJyA/IHByb3BzLmRlZmF1bHRWYWx1ZSA6IHByb3BzLnZhbHVlO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZm9jdXNlZDogZmFsc2UsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tdW51c2VkLXN0YXRlXG4gICAgICBwcmV2VmFsdWU6IHByb3BzLnZhbHVlXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKElucHV0LCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuY2xlYXJQYXNzd29yZFZhbHVlQXR0cmlidXRlKCk7XG4gICAgfSAvLyBTaW5jZSBwb2x5ZmlsbCBgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGVgIG5lZWQgd29yayB3aXRoIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgIC8vIFdlIGtlZXAgYW4gZW1wdHkgZnVuY3Rpb24gaGVyZS5cblxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7fVxuICB9LCB7XG4gICAga2V5OiBcImdldFNuYXBzaG90QmVmb3JlVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKCgwLCBfQ2xlYXJhYmxlTGFiZWxlZElucHV0Lmhhc1ByZWZpeFN1ZmZpeCkocHJldlByb3BzKSAhPT0gKDAsIF9DbGVhcmFibGVMYWJlbGVkSW5wdXQuaGFzUHJlZml4U3VmZml4KSh0aGlzLnByb3BzKSkge1xuICAgICAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSh0aGlzLmlucHV0ICE9PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50LCAnSW5wdXQnLCBcIldoZW4gSW5wdXQgaXMgZm9jdXNlZCwgZHluYW1pYyBhZGQgb3IgcmVtb3ZlIHByZWZpeCAvIHN1ZmZpeCB3aWxsIG1ha2UgaXQgbG9zZSBmb2N1cyBjYXVzZWQgYnkgZG9tIHN0cnVjdHVyZSBjaGFuZ2UuIFJlYWQgbW9yZTogaHR0cHM6Ly9hbnQuZGVzaWduL2NvbXBvbmVudHMvaW5wdXQvI0ZBUVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucmVtb3ZlUGFzc3dvcmRUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlbW92ZVBhc3N3b3JkVGltZW91dCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIHRoaXMuaW5wdXQuYmx1cigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRTZWxlY3Rpb25SYW5nZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTZWxlY3Rpb25SYW5nZShzdGFydCwgZW5kLCBkaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCwgZGlyZWN0aW9uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2VsZWN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdCgpIHtcbiAgICAgIHRoaXMuaW5wdXQuc2VsZWN0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSwgY2FsbGJhY2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sgPT09IG51bGwgfHwgY2FsbGJhY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlckNvbXBvbmVudCk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMsIF9yZWYzKSB7XG4gICAgICB2YXIgcHJldlZhbHVlID0gX3JlZjMucHJldlZhbHVlO1xuICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICBwcmV2VmFsdWU6IG5leHRQcm9wcy52YWx1ZVxuICAgICAgfTtcblxuICAgICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IHByZXZWYWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICAgIG5ld1N0YXRlLnZhbHVlID0gbmV4dFByb3BzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBJbnB1dDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAndGV4dCdcbn07XG52YXIgX2RlZmF1bHQgPSBJbnB1dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9vbWl0XCIpKTtcblxudmFyIF9FeWVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0V5ZU91dGxpbmVkXCIpKTtcblxudmFyIF9FeWVJbnZpc2libGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0V5ZUludmlzaWJsZU91dGxpbmVkXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfSW5wdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0lucHV0XCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIEFjdGlvbk1hcCA9IHtcbiAgY2xpY2s6ICdvbkNsaWNrJyxcbiAgaG92ZXI6ICdvbk1vdXNlT3Zlcidcbn07XG52YXIgUGFzc3dvcmQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX3VzZVN0YXRlID0gKDAsIFJlYWN0LnVzZVN0YXRlKShmYWxzZSksXG4gICAgICBfdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VTdGF0ZSwgMiksXG4gICAgICB2aXNpYmxlID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldFZpc2libGUgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBvblZpc2libGVDaGFuZ2UgPSBmdW5jdGlvbiBvblZpc2libGVDaGFuZ2UoKSB7XG4gICAgdmFyIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQ7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKTtcbiAgfTtcblxuICB2YXIgZ2V0SWNvbiA9IGZ1bmN0aW9uIGdldEljb24ocHJlZml4Q2xzKSB7XG4gICAgdmFyIF9pY29uUHJvcHM7XG5cbiAgICB2YXIgYWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgICBfcHJvcHMkaWNvblJlbmRlciA9IHByb3BzLmljb25SZW5kZXIsXG4gICAgICAgIGljb25SZW5kZXIgPSBfcHJvcHMkaWNvblJlbmRlciA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSA6IF9wcm9wcyRpY29uUmVuZGVyO1xuICAgIHZhciBpY29uVHJpZ2dlciA9IEFjdGlvbk1hcFthY3Rpb25dIHx8ICcnO1xuICAgIHZhciBpY29uID0gaWNvblJlbmRlcih2aXNpYmxlKTtcbiAgICB2YXIgaWNvblByb3BzID0gKF9pY29uUHJvcHMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfaWNvblByb3BzLCBpY29uVHJpZ2dlciwgb25WaXNpYmxlQ2hhbmdlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfaWNvblByb3BzLCBcImNsYXNzTmFtZVwiLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25cIikpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9pY29uUHJvcHMsIFwia2V5XCIsICdwYXNzd29yZEljb24nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfaWNvblByb3BzLCBcIm9uTW91c2VEb3duXCIsIGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgIC8vIFByZXZlbnQgZm9jdXNlZCBzdGF0ZSBsb3N0XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy8xNTE3M1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9pY29uUHJvcHMsIFwib25Nb3VzZVVwXCIsIGZ1bmN0aW9uIG9uTW91c2VVcChlKSB7XG4gICAgICAvLyBQcmV2ZW50IGNhcmV0IHBvc2l0aW9uIGNoYW5nZVxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMjM1MjRcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KSwgX2ljb25Qcm9wcyk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChpY29uKSA/IGljb24gOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgaWNvbiksIGljb25Qcm9wcyk7XG4gIH07XG5cbiAgdmFyIHJlbmRlclBhc3N3b3JkID0gZnVuY3Rpb24gcmVuZGVyUGFzc3dvcmQoX3JlZikge1xuICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcblxuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgY3VzdG9taXplSW5wdXRQcmVmaXhDbHMgPSBwcm9wcy5pbnB1dFByZWZpeENscyxcbiAgICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICAgIHZpc2liaWxpdHlUb2dnbGUgPSBwcm9wcy52aXNpYmlsaXR5VG9nZ2xlLFxuICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcInByZWZpeENsc1wiLCBcImlucHV0UHJlZml4Q2xzXCIsIFwic2l6ZVwiLCBcInZpc2liaWxpdHlUb2dnbGVcIl0pO1xuXG4gICAgdmFyIGlucHV0UHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdpbnB1dCcsIGN1c3RvbWl6ZUlucHV0UHJlZml4Q2xzKTtcbiAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdpbnB1dC1wYXNzd29yZCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgdmFyIHN1ZmZpeEljb24gPSB2aXNpYmlsaXR5VG9nZ2xlICYmIGdldEljb24ocHJlZml4Q2xzKTtcbiAgICB2YXIgaW5wdXRDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIGNsYXNzTmFtZSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUpLCAhIXNpemUpKTtcbiAgICB2YXIgb21pdHRlZFByb3BzID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocmVzdFByb3BzLCBbJ3N1ZmZpeCcsICdpY29uUmVuZGVyJ10pKSwge1xuICAgICAgdHlwZTogdmlzaWJsZSA/ICd0ZXh0JyA6ICdwYXNzd29yZCcsXG4gICAgICBjbGFzc05hbWU6IGlucHV0Q2xhc3NOYW1lLFxuICAgICAgcHJlZml4Q2xzOiBpbnB1dFByZWZpeENscyxcbiAgICAgIHN1ZmZpeDogc3VmZml4SWNvblxuICAgIH0pO1xuXG4gICAgaWYgKHNpemUpIHtcbiAgICAgIG9taXR0ZWRQcm9wcy5zaXplID0gc2l6ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0lucHV0W1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgb21pdHRlZFByb3BzKSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgcmVuZGVyUGFzc3dvcmQpO1xufSk7XG5QYXNzd29yZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGlvbjogJ2NsaWNrJyxcbiAgdmlzaWJpbGl0eVRvZ2dsZTogdHJ1ZSxcbiAgaWNvblJlbmRlcjogZnVuY3Rpb24gaWNvblJlbmRlcih2aXNpYmxlKSB7XG4gICAgcmV0dXJuIHZpc2libGUgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfRXllT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9FeWVJbnZpc2libGVPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpO1xuICB9XG59O1xuUGFzc3dvcmQuZGlzcGxheU5hbWUgPSAnUGFzc3dvcmQnO1xudmFyIF9kZWZhdWx0ID0gUGFzc3dvcmQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlZiA9IHJlcXVpcmUoXCJyYy11dGlsL2xpYi9yZWZcIik7XG5cbnZhciBfU2VhcmNoT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9TZWFyY2hPdXRsaW5lZFwiKSk7XG5cbnZhciBfSW5wdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0lucHV0XCIpKTtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9idXR0b25cIikpO1xuXG52YXIgX1NpemVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0XCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIFNlYXJjaCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgY3VzdG9taXplSW5wdXRQcmVmaXhDbHMgPSBwcm9wcy5pbnB1dFByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGN1c3RvbWl6ZVNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc3VmZml4ID0gcHJvcHMuc3VmZml4LFxuICAgICAgX3Byb3BzJGVudGVyQnV0dG9uID0gcHJvcHMuZW50ZXJCdXR0b24sXG4gICAgICBlbnRlckJ1dHRvbiA9IF9wcm9wcyRlbnRlckJ1dHRvbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZW50ZXJCdXR0b24sXG4gICAgICBhZGRvbkFmdGVyID0gcHJvcHMuYWRkb25BZnRlcixcbiAgICAgIGxvYWRpbmcgPSBwcm9wcy5sb2FkaW5nLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGN1c3RvbU9uU2VhcmNoID0gcHJvcHMub25TZWFyY2gsXG4gICAgICBjdXN0b21PbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgcmVzdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJpbnB1dFByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcInNpemVcIiwgXCJzdWZmaXhcIiwgXCJlbnRlckJ1dHRvblwiLCBcImFkZG9uQWZ0ZXJcIiwgXCJsb2FkaW5nXCIsIFwiZGlzYWJsZWRcIiwgXCJvblNlYXJjaFwiLCBcIm9uQ2hhbmdlXCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgY29udGV4dFNpemUgPSBSZWFjdC51c2VDb250ZXh0KF9TaXplQ29udGV4dFtcImRlZmF1bHRcIl0pO1xuICB2YXIgc2l6ZSA9IGN1c3RvbWl6ZVNpemUgfHwgY29udGV4dFNpemU7XG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgb25DaGFuZ2UgPSBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgJiYgZS50eXBlID09PSAnY2xpY2snICYmIGN1c3RvbU9uU2VhcmNoKSB7XG4gICAgICBjdXN0b21PblNlYXJjaChlLnRhcmdldC52YWx1ZSwgZSk7XG4gICAgfVxuXG4gICAgaWYgKGN1c3RvbU9uQ2hhbmdlKSB7XG4gICAgICBjdXN0b21PbkNoYW5nZShlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9uTW91c2VEb3duID0gZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgIHZhciBfYTtcblxuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSAoKF9hID0gaW5wdXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlucHV0KSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb25TZWFyY2ggPSBmdW5jdGlvbiBvblNlYXJjaChlKSB7XG4gICAgdmFyIF9hO1xuXG4gICAgaWYgKGN1c3RvbU9uU2VhcmNoKSB7XG4gICAgICBjdXN0b21PblNlYXJjaCgoX2EgPSBpbnB1dFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5wdXQudmFsdWUsIGUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdpbnB1dC1zZWFyY2gnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgaW5wdXRQcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2lucHV0JywgY3VzdG9taXplSW5wdXRQcmVmaXhDbHMpO1xuICB2YXIgc2VhcmNoSWNvbiA9IHR5cGVvZiBlbnRlckJ1dHRvbiA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBlbnRlckJ1dHRvbiA9PT0gJ3VuZGVmaW5lZCcgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2VhcmNoT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSA6IG51bGw7XG4gIHZhciBidG5DbGFzc05hbWUgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJ1dHRvblwiKTtcbiAgdmFyIGJ1dHRvbjtcbiAgdmFyIGVudGVyQnV0dG9uQXNFbGVtZW50ID0gZW50ZXJCdXR0b24gfHwge307XG4gIHZhciBpc0FudGRCdXR0b24gPSBlbnRlckJ1dHRvbkFzRWxlbWVudC50eXBlICYmIGVudGVyQnV0dG9uQXNFbGVtZW50LnR5cGUuX19BTlRfQlVUVE9OID09PSB0cnVlO1xuXG4gIGlmIChpc0FudGRCdXR0b24gfHwgZW50ZXJCdXR0b25Bc0VsZW1lbnQudHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICBidXR0b24gPSAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGVudGVyQnV0dG9uQXNFbGVtZW50LCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgb25Nb3VzZURvd246IG9uTW91c2VEb3duLFxuICAgICAgb25DbGljazogb25TZWFyY2gsXG4gICAgICBrZXk6ICdlbnRlckJ1dHRvbidcbiAgICB9LCBpc0FudGRCdXR0b24gPyB7XG4gICAgICBjbGFzc05hbWU6IGJ0bkNsYXNzTmFtZSxcbiAgICAgIHNpemU6IHNpemVcbiAgICB9IDoge30pKTtcbiAgfSBlbHNlIHtcbiAgICBidXR0b24gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfYnV0dG9uW1wiZGVmYXVsdFwiXSwge1xuICAgICAgY2xhc3NOYW1lOiBidG5DbGFzc05hbWUsXG4gICAgICB0eXBlOiBlbnRlckJ1dHRvbiA/ICdwcmltYXJ5JyA6IHVuZGVmaW5lZCxcbiAgICAgIHNpemU6IHNpemUsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBrZXk6IFwiZW50ZXJCdXR0b25cIixcbiAgICAgIG9uTW91c2VEb3duOiBvbk1vdXNlRG93bixcbiAgICAgIG9uQ2xpY2s6IG9uU2VhcmNoLFxuICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgIGljb246IHNlYXJjaEljb25cbiAgICB9LCBlbnRlckJ1dHRvbik7XG4gIH1cblxuICBpZiAoYWRkb25BZnRlcikge1xuICAgIGJ1dHRvbiA9IFtidXR0b24sICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkoYWRkb25BZnRlciwge1xuICAgICAga2V5OiAnYWRkb25BZnRlcidcbiAgICB9KV07XG4gIH1cblxuICB2YXIgY2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc2l6ZSksICEhc2l6ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItd2l0aC1idXR0b25cIiksICEhZW50ZXJCdXR0b24pLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfSW5wdXRbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgIHJlZjogKDAsIF9yZWYuY29tcG9zZVJlZikoaW5wdXRSZWYsIHJlZiksXG4gICAgb25QcmVzc0VudGVyOiBvblNlYXJjaFxuICB9LCByZXN0UHJvcHMsIHtcbiAgICBzaXplOiBzaXplLFxuICAgIHByZWZpeENsczogaW5wdXRQcmVmaXhDbHMsXG4gICAgYWRkb25BZnRlcjogYnV0dG9uLFxuICAgIHN1ZmZpeDogc3VmZml4LFxuICAgIG9uQ2hhbmdlOiBvbkNoYW5nZSxcbiAgICBjbGFzc05hbWU6IGNscyxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgfSkpO1xufSk7XG5TZWFyY2guZGlzcGxheU5hbWUgPSAnU2VhcmNoJztcbnZhciBfZGVmYXVsdCA9IFNlYXJjaDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX3R5cGVvZjMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNUZXh0YXJlYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXRleHRhcmVhXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdXRpbC9saWIvb21pdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3VzZU1lcmdlZFN0YXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXV0aWwvbGliL2hvb2tzL3VzZU1lcmdlZFN0YXRlXCIpKTtcblxudmFyIF9DbGVhcmFibGVMYWJlbGVkSW5wdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0NsZWFyYWJsZUxhYmVsZWRJbnB1dFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZShcIi4vSW5wdXRcIik7XG5cbnZhciBfU2l6ZUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHRcIikpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2YzKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxuZnVuY3Rpb24gZml4RW1vamlMZW5ndGgodmFsdWUsIG1heExlbmd0aCkge1xuICByZXR1cm4gKDAsIF90b0NvbnN1bWFibGVBcnJheTJbXCJkZWZhdWx0XCJdKSh2YWx1ZSB8fCAnJykuc2xpY2UoMCwgbWF4TGVuZ3RoKS5qb2luKCcnKTtcbn1cblxudmFyIFRleHRBcmVhID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9hLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICBfYSRib3JkZXJlZCA9IF9hLmJvcmRlcmVkLFxuICAgICAgYm9yZGVyZWQgPSBfYSRib3JkZXJlZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hJGJvcmRlcmVkLFxuICAgICAgX2Ekc2hvd0NvdW50ID0gX2Euc2hvd0NvdW50LFxuICAgICAgc2hvd0NvdW50ID0gX2Ekc2hvd0NvdW50ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hJHNob3dDb3VudCxcbiAgICAgIG1heExlbmd0aCA9IF9hLm1heExlbmd0aCxcbiAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX2Euc3R5bGUsXG4gICAgICBjdXN0b21pemVTaXplID0gX2Euc2l6ZSxcbiAgICAgIG9uQ29tcG9zaXRpb25TdGFydCA9IF9hLm9uQ29tcG9zaXRpb25TdGFydCxcbiAgICAgIG9uQ29tcG9zaXRpb25FbmQgPSBfYS5vbkNvbXBvc2l0aW9uRW5kLFxuICAgICAgb25DaGFuZ2UgPSBfYS5vbkNoYW5nZSxcbiAgICAgIHByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJib3JkZXJlZFwiLCBcInNob3dDb3VudFwiLCBcIm1heExlbmd0aFwiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwic2l6ZVwiLCBcIm9uQ29tcG9zaXRpb25TdGFydFwiLCBcIm9uQ29tcG9zaXRpb25FbmRcIiwgXCJvbkNoYW5nZVwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIHNpemUgPSBSZWFjdC51c2VDb250ZXh0KF9TaXplQ29udGV4dFtcImRlZmF1bHRcIl0pO1xuICB2YXIgaW5uZXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBjbGVhcmFibGVJbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgY29tcG9zaXRpbmcgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0Q29tcG9zaXRpbmcgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlTWVyZ2VkU3RhdGUgPSAoMCwgX3VzZU1lcmdlZFN0YXRlM1tcImRlZmF1bHRcIl0pKHByb3BzLmRlZmF1bHRWYWx1ZSwge1xuICAgIHZhbHVlOiBwcm9wcy52YWx1ZVxuICB9KSxcbiAgICAgIF91c2VNZXJnZWRTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZU1lcmdlZFN0YXRlLCAyKSxcbiAgICAgIHZhbHVlID0gX3VzZU1lcmdlZFN0YXRlMlswXSxcbiAgICAgIHNldFZhbHVlID0gX3VzZU1lcmdlZFN0YXRlMlsxXTtcblxuICB2YXIgaGFuZGxlU2V0VmFsdWUgPSBmdW5jdGlvbiBoYW5kbGVTZXRWYWx1ZSh2YWwsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHByb3BzLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFZhbHVlKHZhbCk7XG4gICAgICBjYWxsYmFjayA9PT0gbnVsbCB8fCBjYWxsYmFjayA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FsbGJhY2soKTtcbiAgICB9XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PSBWYWx1ZSBVcGRhdGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIE1heCBsZW5ndGggdmFsdWVcblxuXG4gIHZhciBoYXNNYXhMZW5ndGggPSBOdW1iZXIobWF4TGVuZ3RoKSA+IDA7XG5cbiAgdmFyIG9uSW50ZXJuYWxDb21wb3NpdGlvblN0YXJ0ID0gZnVuY3Rpb24gb25JbnRlcm5hbENvbXBvc2l0aW9uU3RhcnQoZSkge1xuICAgIHNldENvbXBvc2l0aW5nKHRydWUpO1xuICAgIG9uQ29tcG9zaXRpb25TdGFydCA9PT0gbnVsbCB8fCBvbkNvbXBvc2l0aW9uU3RhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ29tcG9zaXRpb25TdGFydChlKTtcbiAgfTtcblxuICB2YXIgb25JbnRlcm5hbENvbXBvc2l0aW9uRW5kID0gZnVuY3Rpb24gb25JbnRlcm5hbENvbXBvc2l0aW9uRW5kKGUpIHtcbiAgICBzZXRDb21wb3NpdGluZyhmYWxzZSk7XG4gICAgdmFyIHRyaWdnZXJWYWx1ZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcblxuICAgIGlmIChoYXNNYXhMZW5ndGgpIHtcbiAgICAgIHRyaWdnZXJWYWx1ZSA9IGZpeEVtb2ppTGVuZ3RoKHRyaWdnZXJWYWx1ZSwgbWF4TGVuZ3RoKTtcbiAgICB9IC8vIFBhdGNoIGNvbXBvc2l0aW9uIG9uQ2hhbmdlIHdoZW4gdmFsdWUgY2hhbmdlZFxuXG5cbiAgICBpZiAodHJpZ2dlclZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgaGFuZGxlU2V0VmFsdWUodHJpZ2dlclZhbHVlKTtcbiAgICAgICgwLCBfSW5wdXQucmVzb2x2ZU9uQ2hhbmdlKShlLmN1cnJlbnRUYXJnZXQsIGUsIG9uQ2hhbmdlLCB0cmlnZ2VyVmFsdWUpO1xuICAgIH1cblxuICAgIG9uQ29tcG9zaXRpb25FbmQgPT09IG51bGwgfHwgb25Db21wb3NpdGlvbkVuZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Db21wb3NpdGlvbkVuZChlKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB2YXIgdHJpZ2dlclZhbHVlID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAoIWNvbXBvc2l0aW5nICYmIGhhc01heExlbmd0aCkge1xuICAgICAgdHJpZ2dlclZhbHVlID0gZml4RW1vamlMZW5ndGgodHJpZ2dlclZhbHVlLCBtYXhMZW5ndGgpO1xuICAgIH1cblxuICAgIGhhbmRsZVNldFZhbHVlKHRyaWdnZXJWYWx1ZSk7XG4gICAgKDAsIF9JbnB1dC5yZXNvbHZlT25DaGFuZ2UpKGUuY3VycmVudFRhcmdldCwgZSwgb25DaGFuZ2UsIHRyaWdnZXJWYWx1ZSk7XG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZXNldCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblxuICB2YXIgaGFuZGxlUmVzZXQgPSBmdW5jdGlvbiBoYW5kbGVSZXNldChlKSB7XG4gICAgdmFyIF9hLCBfYjtcblxuICAgIGhhbmRsZVNldFZhbHVlKCcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2E7XG5cbiAgICAgIChfYSA9IGlubmVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgIH0pO1xuICAgICgwLCBfSW5wdXQucmVzb2x2ZU9uQ2hhbmdlKSgoX2IgPSAoX2EgPSBpbm5lclJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVzaXphYmxlVGV4dEFyZWEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50ZXh0QXJlYSwgZSwgb25DaGFuZ2UpO1xuICB9O1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2lucHV0JywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzaXphYmxlVGV4dEFyZWE6IChfYSA9IGlubmVyUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZXNpemFibGVUZXh0QXJlYSxcbiAgICAgIGZvY3VzOiBmdW5jdGlvbiBmb2N1cyhvcHRpb24pIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcblxuICAgICAgICAoMCwgX0lucHV0LnRyaWdnZXJGb2N1cykoKF9iID0gKF9hID0gaW5uZXJSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlc2l6YWJsZVRleHRBcmVhKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudGV4dEFyZWEsIG9wdGlvbik7XG4gICAgICB9LFxuICAgICAgYmx1cjogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgICAgdmFyIF9hO1xuXG4gICAgICAgIHJldHVybiAoX2EgPSBpbm5lclJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYmx1cigpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuICB2YXIgdGV4dEFyZWEgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNUZXh0YXJlYVtcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocHJvcHMsIFsnYWxsb3dDbGVhciddKSwge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYm9yZGVybGVzc1wiKSwgIWJvcmRlcmVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgY2xhc3NOYW1lLCBjbGFzc05hbWUgJiYgIXNob3dDb3VudCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc21cIiksIHNpemUgPT09ICdzbWFsbCcgfHwgY3VzdG9taXplU2l6ZSA9PT0gJ3NtYWxsJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbGdcIiksIHNpemUgPT09ICdsYXJnZScgfHwgY3VzdG9taXplU2l6ZSA9PT0gJ2xhcmdlJyksIF9jbGFzc05hbWVzKSksXG4gICAgc3R5bGU6IHNob3dDb3VudCA/IHVuZGVmaW5lZCA6IHN0eWxlLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIG9uQ29tcG9zaXRpb25TdGFydDogb25JbnRlcm5hbENvbXBvc2l0aW9uU3RhcnQsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICBvbkNvbXBvc2l0aW9uRW5kOiBvbkludGVybmFsQ29tcG9zaXRpb25FbmQsXG4gICAgcmVmOiBpbm5lclJlZlxuICB9KSk7XG4gIHZhciB2YWwgPSAoMCwgX0lucHV0LmZpeENvbnRyb2xsZWRWYWx1ZSkodmFsdWUpO1xuXG4gIGlmICghY29tcG9zaXRpbmcgJiYgaGFzTWF4TGVuZ3RoICYmIChwcm9wcy52YWx1ZSA9PT0gbnVsbCB8fCBwcm9wcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgIC8vIGZpeCAjMjc2MTIg5bCGdmFsdWXovazkuLrmlbDnu4Tov5vooYzmiKrlj5bvvIzop6PlhrMgJ/CfmIInLmxlbmd0aCA9PT0gMiDnrYllbW9qaeihqOaDheWvvOiHtOeahOaIquWPluS5seeggeeahOmXrumimFxuICAgIHZhbCA9IGZpeEVtb2ppTGVuZ3RoKHZhbCwgbWF4TGVuZ3RoKTtcbiAgfSAvLyBUZXh0QXJlYVxuXG5cbiAgdmFyIHRleHRhcmVhTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DbGVhcmFibGVMYWJlbGVkSW5wdXRbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgZGlyZWN0aW9uOiBkaXJlY3Rpb24sXG4gICAgaW5wdXRUeXBlOiBcInRleHRcIixcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVsZW1lbnQ6IHRleHRBcmVhLFxuICAgIGhhbmRsZVJlc2V0OiBoYW5kbGVSZXNldCxcbiAgICByZWY6IGNsZWFyYWJsZUlucHV0UmVmLFxuICAgIGJvcmRlcmVkOiBib3JkZXJlZFxuICB9KSk7IC8vIE9ubHkgc2hvdyB0ZXh0IGFyZWEgd3JhcHBlciB3aGVuIG5lZWRlZFxuXG4gIGlmIChzaG93Q291bnQpIHtcbiAgICB2YXIgdmFsdWVMZW5ndGggPSAoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKHZhbCkubGVuZ3RoO1xuICAgIHZhciBkYXRhQ291bnQgPSAnJztcblxuICAgIGlmICgoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShzaG93Q291bnQpID09PSAnb2JqZWN0Jykge1xuICAgICAgZGF0YUNvdW50ID0gc2hvd0NvdW50LmZvcm1hdHRlcih7XG4gICAgICAgIGNvdW50OiB2YWx1ZUxlbmd0aCxcbiAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGhcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhQ291bnQgPSBcIlwiLmNvbmNhdCh2YWx1ZUxlbmd0aCkuY29uY2F0KGhhc01heExlbmd0aCA/IFwiIC8gXCIuY29uY2F0KG1heExlbmd0aCkgOiAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10ZXh0YXJlYVwiKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10ZXh0YXJlYS1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRleHRhcmVhLXNob3ctY291bnRcIiksIGNsYXNzTmFtZSksXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICBcImRhdGEtY291bnRcIjogZGF0YUNvdW50XG4gICAgfSwgdGV4dGFyZWFOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0YXJlYU5vZGU7XG59KTtcbnZhciBfZGVmYXVsdCA9IFRleHRBcmVhO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9JbnB1dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSW5wdXRcIikpO1xuXG52YXIgX0dyb3VwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Hcm91cFwiKSk7XG5cbnZhciBfU2VhcmNoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TZWFyY2hcIikpO1xuXG52YXIgX1RleHRBcmVhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UZXh0QXJlYVwiKSk7XG5cbnZhciBfUGFzc3dvcmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1Bhc3N3b3JkXCIpKTtcblxuX0lucHV0W1wiZGVmYXVsdFwiXS5Hcm91cCA9IF9Hcm91cFtcImRlZmF1bHRcIl07XG5fSW5wdXRbXCJkZWZhdWx0XCJdLlNlYXJjaCA9IF9TZWFyY2hbXCJkZWZhdWx0XCJdO1xuX0lucHV0W1wiZGVmYXVsdFwiXS5UZXh0QXJlYSA9IF9UZXh0QXJlYVtcImRlZmF1bHRcIl07XG5fSW5wdXRbXCJkZWZhdWx0XCJdLlBhc3N3b3JkID0gX1Bhc3N3b3JkW1wiZGVmYXVsdFwiXTtcbnZhciBfZGVmYXVsdCA9IF9JbnB1dFtcImRlZmF1bHRcIl07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxudmFyIENoZWNrYm94ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDaGVja2JveCwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihDaGVja2JveCk7XG5cbiAgZnVuY3Rpb24gQ2hlY2tib3gocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hlY2tib3gpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlO1xuXG4gICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoISgnY2hlY2tlZCcgaW4gX3RoaXMucHJvcHMpKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjaGVja2VkOiBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgIHRhcmdldDogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5wcm9wcyksIHt9LCB7XG4gICAgICAgICAgICBjaGVja2VkOiBlLnRhcmdldC5jaGVja2VkXG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbmF0aXZlRXZlbnQ6IGUubmF0aXZlRXZlbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnNhdmVJbnB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5pbnB1dCA9IG5vZGU7XG4gICAgfTtcblxuICAgIHZhciBjaGVja2VkID0gJ2NoZWNrZWQnIGluIHByb3BzID8gcHJvcHMuY2hlY2tlZCA6IHByb3BzLmRlZmF1bHRDaGVja2VkO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tlZDogY2hlY2tlZFxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKENoZWNrYm94LCBbe1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmx1clwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgdGhpcy5pbnB1dC5ibHVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzMi5zdHlsZSxcbiAgICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMyLm5hbWUsXG4gICAgICAgICAgaWQgPSBfdGhpcyRwcm9wczIuaWQsXG4gICAgICAgICAgdHlwZSA9IF90aGlzJHByb3BzMi50eXBlLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICAgIHJlYWRPbmx5ID0gX3RoaXMkcHJvcHMyLnJlYWRPbmx5LFxuICAgICAgICAgIHRhYkluZGV4ID0gX3RoaXMkcHJvcHMyLnRhYkluZGV4LFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wczIub25DbGljayxcbiAgICAgICAgICBvbkZvY3VzID0gX3RoaXMkcHJvcHMyLm9uRm9jdXMsXG4gICAgICAgICAgb25CbHVyID0gX3RoaXMkcHJvcHMyLm9uQmx1cixcbiAgICAgICAgICBvbktleURvd24gPSBfdGhpcyRwcm9wczIub25LZXlEb3duLFxuICAgICAgICAgIG9uS2V5UHJlc3MgPSBfdGhpcyRwcm9wczIub25LZXlQcmVzcyxcbiAgICAgICAgICBvbktleVVwID0gX3RoaXMkcHJvcHMyLm9uS2V5VXAsXG4gICAgICAgICAgYXV0b0ZvY3VzID0gX3RoaXMkcHJvcHMyLmF1dG9Gb2N1cyxcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJHByb3BzMi52YWx1ZSxcbiAgICAgICAgICByZXF1aXJlZCA9IF90aGlzJHByb3BzMi5yZXF1aXJlZCxcbiAgICAgICAgICBvdGhlcnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3RoaXMkcHJvcHMyLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcIm5hbWVcIiwgXCJpZFwiLCBcInR5cGVcIiwgXCJkaXNhYmxlZFwiLCBcInJlYWRPbmx5XCIsIFwidGFiSW5kZXhcIiwgXCJvbkNsaWNrXCIsIFwib25Gb2N1c1wiLCBcIm9uQmx1clwiLCBcIm9uS2V5RG93blwiLCBcIm9uS2V5UHJlc3NcIiwgXCJvbktleVVwXCIsIFwiYXV0b0ZvY3VzXCIsIFwidmFsdWVcIiwgXCJyZXF1aXJlZFwiXSk7XG5cbiAgICAgIHZhciBnbG9iYWxQcm9wcyA9IE9iamVjdC5rZXlzKG90aGVycykucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBrZXkpIHtcbiAgICAgICAgaWYgKGtleS5zdWJzdHIoMCwgNSkgPT09ICdhcmlhLScgfHwga2V5LnN1YnN0cigwLCA1KSA9PT0gJ2RhdGEtJyB8fCBrZXkgPT09ICdyb2xlJykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgIHByZXZba2V5XSA9IG90aGVyc1trZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICB9LCB7fSk7XG4gICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuc3RhdGUuY2hlY2tlZDtcbiAgICAgIHZhciBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2hlY2tlZFwiKSwgY2hlY2tlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBfZXh0ZW5kcyh7XG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgcmVxdWlyZWQ6IHJlcXVpcmVkLFxuICAgICAgICByZWFkT25seTogcmVhZE9ubHksXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgdGFiSW5kZXg6IHRhYkluZGV4LFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5wdXRcIiksXG4gICAgICAgIGNoZWNrZWQ6ICEhY2hlY2tlZCxcbiAgICAgICAgb25DbGljazogb25DbGljayxcbiAgICAgICAgb25Gb2N1czogb25Gb2N1cyxcbiAgICAgICAgb25CbHVyOiBvbkJsdXIsXG4gICAgICAgIG9uS2V5VXA6IG9uS2V5VXAsXG4gICAgICAgIG9uS2V5RG93bjogb25LZXlEb3duLFxuICAgICAgICBvbktleVByZXNzOiBvbktleVByZXNzLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2UsXG4gICAgICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgICAgICByZWY6IHRoaXMuc2F2ZUlucHV0LFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0sIGdsb2JhbFByb3BzKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbm5lclwiKVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICBpZiAoJ2NoZWNrZWQnIGluIHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHN0YXRlKSwge30sIHtcbiAgICAgICAgICBjaGVja2VkOiBwcm9wcy5jaGVja2VkXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2hlY2tib3g7XG59KENvbXBvbmVudCk7XG5cbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJlZml4Q2xzOiAncmMtY2hlY2tib3gnLFxuICBjbGFzc05hbWU6ICcnLFxuICBzdHlsZToge30sXG4gIHR5cGU6ICdjaGVja2JveCcsXG4gIGRlZmF1bHRDaGVja2VkOiBmYWxzZSxcbiAgb25Gb2N1czogZnVuY3Rpb24gb25Gb2N1cygpIHt9LFxuICBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cigpIHt9LFxuICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoKSB7fSxcbiAgb25LZXlEb3duOiBmdW5jdGlvbiBvbktleURvd24oKSB7fSxcbiAgb25LZXlQcmVzczogZnVuY3Rpb24gb25LZXlQcmVzcygpIHt9LFxuICBvbktleVVwOiBmdW5jdGlvbiBvbktleVVwKCkge31cbn07XG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0U3ByZWFkIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2tcIjtcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c1wiO1xuaW1wb3J0IF9jcmVhdGVTdXBlciBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlU3VwZXJcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyYy1yZXNpemUtb2JzZXJ2ZXInO1xuaW1wb3J0IG9taXQgZnJvbSBcInJjLXV0aWwvZXMvb21pdFwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgY2FsY3VsYXRlTm9kZUhlaWdodCBmcm9tICcuL2NhbGN1bGF0ZU5vZGVIZWlnaHQnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25hbWluZy1jb252ZW50aW9uXG5cbnZhciBSRVNJWkVfU1RBVFVTO1xuXG4oZnVuY3Rpb24gKFJFU0laRV9TVEFUVVMpIHtcbiAgUkVTSVpFX1NUQVRVU1tSRVNJWkVfU1RBVFVTW1wiTk9ORVwiXSA9IDBdID0gXCJOT05FXCI7XG4gIFJFU0laRV9TVEFUVVNbUkVTSVpFX1NUQVRVU1tcIlJFU0laSU5HXCJdID0gMV0gPSBcIlJFU0laSU5HXCI7XG4gIFJFU0laRV9TVEFUVVNbUkVTSVpFX1NUQVRVU1tcIlJFU0laRURcIl0gPSAyXSA9IFwiUkVTSVpFRFwiO1xufSkoUkVTSVpFX1NUQVRVUyB8fCAoUkVTSVpFX1NUQVRVUyA9IHt9KSk7XG5cbnZhciBSZXNpemFibGVUZXh0QXJlYSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVzaXphYmxlVGV4dEFyZWEsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoUmVzaXphYmxlVGV4dEFyZWEpO1xuXG4gIGZ1bmN0aW9uIFJlc2l6YWJsZVRleHRBcmVhKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlc2l6YWJsZVRleHRBcmVhKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX3RoaXMuc2F2ZVRleHRBcmVhID0gZnVuY3Rpb24gKHRleHRBcmVhKSB7XG4gICAgICBfdGhpcy50ZXh0QXJlYSA9IHRleHRBcmVhO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgICAgdmFyIHJlc2l6ZVN0YXR1cyA9IF90aGlzLnN0YXRlLnJlc2l6ZVN0YXR1cztcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGF1dG9TaXplID0gX3RoaXMkcHJvcHMuYXV0b1NpemUsXG4gICAgICAgICAgb25SZXNpemUgPSBfdGhpcyRwcm9wcy5vblJlc2l6ZTtcblxuICAgICAgaWYgKHJlc2l6ZVN0YXR1cyAhPT0gUkVTSVpFX1NUQVRVUy5OT05FKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvblJlc2l6ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvblJlc2l6ZShzaXplKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGF1dG9TaXplKSB7XG4gICAgICAgIF90aGlzLnJlc2l6ZU9uTmV4dEZyYW1lKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnJlc2l6ZU9uTmV4dEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoX3RoaXMubmV4dEZyYW1lQWN0aW9uSWQpO1xuICAgICAgX3RoaXMubmV4dEZyYW1lQWN0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMucmVzaXplVGV4dGFyZWEpO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZXNpemVUZXh0YXJlYSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhdXRvU2l6ZSA9IF90aGlzLnByb3BzLmF1dG9TaXplO1xuXG4gICAgICBpZiAoIWF1dG9TaXplIHx8ICFfdGhpcy50ZXh0QXJlYSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBtaW5Sb3dzID0gYXV0b1NpemUubWluUm93cyxcbiAgICAgICAgICBtYXhSb3dzID0gYXV0b1NpemUubWF4Um93cztcbiAgICAgIHZhciB0ZXh0YXJlYVN0eWxlcyA9IGNhbGN1bGF0ZU5vZGVIZWlnaHQoX3RoaXMudGV4dEFyZWEsIGZhbHNlLCBtaW5Sb3dzLCBtYXhSb3dzKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0ZXh0YXJlYVN0eWxlczogdGV4dGFyZWFTdHlsZXMsXG4gICAgICAgIHJlc2l6ZVN0YXR1czogUkVTSVpFX1NUQVRVUy5SRVNJWklOR1xuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShfdGhpcy5yZXNpemVGcmFtZUlkKTtcbiAgICAgICAgX3RoaXMucmVzaXplRnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVzaXplU3RhdHVzOiBSRVNJWkVfU1RBVFVTLlJFU0laRURcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5yZXNpemVGcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHJlc2l6ZVN0YXR1czogUkVTSVpFX1NUQVRVUy5OT05FXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIF90aGlzLmZpeEZpcmVmb3hBdXRvU2Nyb2xsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyVGV4dEFyZWEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgX3RoaXMkcHJvcHMyJHByZWZpeENsID0gX3RoaXMkcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIkcHJlZml4Q2wgPT09IHZvaWQgMCA/ICdyYy10ZXh0YXJlYScgOiBfdGhpcyRwcm9wczIkcHJlZml4Q2wsXG4gICAgICAgICAgYXV0b1NpemUgPSBfdGhpcyRwcm9wczIuYXV0b1NpemUsXG4gICAgICAgICAgb25SZXNpemUgPSBfdGhpcyRwcm9wczIub25SZXNpemUsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMi5kaXNhYmxlZDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIHRleHRhcmVhU3R5bGVzID0gX3RoaXMkc3RhdGUudGV4dGFyZWFTdHlsZXMsXG4gICAgICAgICAgcmVzaXplU3RhdHVzID0gX3RoaXMkc3RhdGUucmVzaXplU3RhdHVzO1xuICAgICAgdmFyIG90aGVyUHJvcHMgPSBvbWl0KF90aGlzLnByb3BzLCBbJ3ByZWZpeENscycsICdvblByZXNzRW50ZXInLCAnYXV0b1NpemUnLCAnZGVmYXVsdFZhbHVlJywgJ29uUmVzaXplJ10pO1xuICAgICAgdmFyIGNscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpKTsgLy8gRml4IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzY3NzZcbiAgICAgIC8vIE1ha2Ugc3VyZSBpdCBjb3VsZCBiZSByZXNldCB3aGVuIHVzaW5nIGZvcm0uZ2V0RmllbGREZWNvcmF0b3JcblxuICAgICAgaWYgKCd2YWx1ZScgaW4gb3RoZXJQcm9wcykge1xuICAgICAgICBvdGhlclByb3BzLnZhbHVlID0gb3RoZXJQcm9wcy52YWx1ZSB8fCAnJztcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzLnByb3BzLnN0eWxlKSwgdGV4dGFyZWFTdHlsZXMpLCByZXNpemVTdGF0dXMgPT09IFJFU0laRV9TVEFUVVMuUkVTSVpJTkcgPyAvLyBSZWFjdCB3aWxsIHdhcm5pbmcgd2hlbiBtaXggYG92ZXJmbG93YCAmIGBvdmVyZmxvd1lgLlxuICAgICAgLy8gV2UgbmVlZCB0byBkZWZpbmUgdGhpcyBzZXBhcmF0ZWx5LlxuICAgICAge1xuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxuICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nXG4gICAgICB9IDogbnVsbCk7XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNpemVPYnNlcnZlciwge1xuICAgICAgICBvblJlc2l6ZTogX3RoaXMuaGFuZGxlUmVzaXplLFxuICAgICAgICBkaXNhYmxlZDogIShhdXRvU2l6ZSB8fCBvblJlc2l6ZSlcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHMsXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgcmVmOiBfdGhpcy5zYXZlVGV4dEFyZWFcbiAgICAgIH0pKSk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdGV4dGFyZWFTdHlsZXM6IHt9LFxuICAgICAgcmVzaXplU3RhdHVzOiBSRVNJWkVfU1RBVFVTLk5PTkVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSZXNpemFibGVUZXh0QXJlYSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnJlc2l6ZVRleHRhcmVhKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAvLyBSZS1yZW5kZXIgd2l0aCB0aGUgbmV3IGNvbnRlbnQgdGhlbiByZWNhbGN1bGF0ZSB0aGUgaGVpZ2h0IGFzIHJlcXVpcmVkLlxuICAgICAgaWYgKHByZXZQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICB0aGlzLnJlc2l6ZVRleHRhcmVhKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5uZXh0RnJhbWVBY3Rpb25JZCk7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJlc2l6ZUZyYW1lSWQpO1xuICAgIH0gLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMjE4NzBcblxuICB9LCB7XG4gICAga2V5OiBcImZpeEZpcmVmb3hBdXRvU2Nyb2xsXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZpeEZpcmVmb3hBdXRvU2Nyb2xsKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMudGV4dEFyZWEpIHtcbiAgICAgICAgICB2YXIgY3VycmVudFN0YXJ0ID0gdGhpcy50ZXh0QXJlYS5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICB2YXIgY3VycmVudEVuZCA9IHRoaXMudGV4dEFyZWEuc2VsZWN0aW9uRW5kO1xuICAgICAgICAgIHRoaXMudGV4dEFyZWEuc2V0U2VsZWN0aW9uUmFuZ2UoY3VycmVudFN0YXJ0LCBjdXJyZW50RW5kKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkgey8vIEZpeCBlcnJvciBpbiBDaHJvbWU6XG4gICAgICAgIC8vIEZhaWxlZCB0byByZWFkIHRoZSAnc2VsZWN0aW9uU3RhcnQnIHByb3BlcnR5IGZyb20gJ0hUTUxJbnB1dEVsZW1lbnQnXG4gICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzIxMTc3NDg5LzMwNDA2MDVcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRleHRBcmVhKCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlc2l6YWJsZVRleHRBcmVhO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBSZXNpemFibGVUZXh0QXJlYTsiLCIvLyBUaGFua3MgdG8gaHR0cHM6Ly9naXRodWIuY29tL2FuZHJleXBvcHAvcmVhY3QtdGV4dGFyZWEtYXV0b3NpemUvXG5cbi8qKlxuICogY2FsY3VsYXRlTm9kZUhlaWdodCh1aVRleHROb2RlLCB1c2VDYWNoZSA9IGZhbHNlKVxuICovXG52YXIgSElEREVOX1RFWFRBUkVBX1NUWUxFID0gXCJcXG4gIG1pbi1oZWlnaHQ6MCAhaW1wb3J0YW50O1xcbiAgbWF4LWhlaWdodDpub25lICFpbXBvcnRhbnQ7XFxuICBoZWlnaHQ6MCAhaW1wb3J0YW50O1xcbiAgdmlzaWJpbGl0eTpoaWRkZW4gIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OmhpZGRlbiAhaW1wb3J0YW50O1xcbiAgcG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtcXG4gIHotaW5kZXg6LTEwMDAgIWltcG9ydGFudDtcXG4gIHRvcDowICFpbXBvcnRhbnQ7XFxuICByaWdodDowICFpbXBvcnRhbnRcXG5cIjtcbnZhciBTSVpJTkdfU1RZTEUgPSBbJ2xldHRlci1zcGFjaW5nJywgJ2xpbmUtaGVpZ2h0JywgJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtd2VpZ2h0JywgJ2ZvbnQtc2l6ZScsICdmb250LXZhcmlhbnQnLCAndGV4dC1yZW5kZXJpbmcnLCAndGV4dC10cmFuc2Zvcm0nLCAnd2lkdGgnLCAndGV4dC1pbmRlbnQnLCAncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLCAnYm9yZGVyLXdpZHRoJywgJ2JveC1zaXppbmcnXTtcbnZhciBjb21wdXRlZFN0eWxlQ2FjaGUgPSB7fTtcbnZhciBoaWRkZW5UZXh0YXJlYTtcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOb2RlU3R5bGluZyhub2RlKSB7XG4gIHZhciB1c2VDYWNoZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gIHZhciBub2RlUmVmID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVhY3RpZCcpIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgaWYgKHVzZUNhY2hlICYmIGNvbXB1dGVkU3R5bGVDYWNoZVtub2RlUmVmXSkge1xuICAgIHJldHVybiBjb21wdXRlZFN0eWxlQ2FjaGVbbm9kZVJlZl07XG4gIH1cblxuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgdmFyIGJveFNpemluZyA9IHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2JveC1zaXppbmcnKSB8fCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctbW96LWJveC1zaXppbmcnKSB8fCBzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCctd2Via2l0LWJveC1zaXppbmcnKTtcbiAgdmFyIHBhZGRpbmdTaXplID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWJvdHRvbScpKSArIHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy10b3AnKSk7XG4gIHZhciBib3JkZXJTaXplID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItYm90dG9tLXdpZHRoJykpICsgcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItdG9wLXdpZHRoJykpO1xuICB2YXIgc2l6aW5nU3R5bGUgPSBTSVpJTkdfU1RZTEUubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIFwiXCIuY29uY2F0KG5hbWUsIFwiOlwiKS5jb25jYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKSk7XG4gIH0pLmpvaW4oJzsnKTtcbiAgdmFyIG5vZGVJbmZvID0ge1xuICAgIHNpemluZ1N0eWxlOiBzaXppbmdTdHlsZSxcbiAgICBwYWRkaW5nU2l6ZTogcGFkZGluZ1NpemUsXG4gICAgYm9yZGVyU2l6ZTogYm9yZGVyU2l6ZSxcbiAgICBib3hTaXppbmc6IGJveFNpemluZ1xuICB9O1xuXG4gIGlmICh1c2VDYWNoZSAmJiBub2RlUmVmKSB7XG4gICAgY29tcHV0ZWRTdHlsZUNhY2hlW25vZGVSZWZdID0gbm9kZUluZm87XG4gIH1cblxuICByZXR1cm4gbm9kZUluZm87XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjdWxhdGVOb2RlSGVpZ2h0KHVpVGV4dE5vZGUpIHtcbiAgdmFyIHVzZUNhY2hlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgdmFyIG1pblJvd3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IG51bGw7XG4gIHZhciBtYXhSb3dzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuXG4gIGlmICghaGlkZGVuVGV4dGFyZWEpIHtcbiAgICBoaWRkZW5UZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgaGlkZGVuVGV4dGFyZWEuc2V0QXR0cmlidXRlKCd0YWItaW5kZXgnLCAnLTEnKTtcbiAgICBoaWRkZW5UZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhpZGRlblRleHRhcmVhKTtcbiAgfSAvLyBGaXggd3JhcD1cIm9mZlwiIGlzc3VlXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzY1NzdcblxuXG4gIGlmICh1aVRleHROb2RlLmdldEF0dHJpYnV0ZSgnd3JhcCcpKSB7XG4gICAgaGlkZGVuVGV4dGFyZWEuc2V0QXR0cmlidXRlKCd3cmFwJywgdWlUZXh0Tm9kZS5nZXRBdHRyaWJ1dGUoJ3dyYXAnKSk7XG4gIH0gZWxzZSB7XG4gICAgaGlkZGVuVGV4dGFyZWEucmVtb3ZlQXR0cmlidXRlKCd3cmFwJyk7XG4gIH0gLy8gQ29weSBhbGwgQ1NTIHByb3BlcnRpZXMgdGhhdCBoYXZlIGFuIGltcGFjdCBvbiB0aGUgaGVpZ2h0IG9mIHRoZSBjb250ZW50IGluXG4gIC8vIHRoZSB0ZXh0Ym94XG5cblxuICB2YXIgX2NhbGN1bGF0ZU5vZGVTdHlsaW5nID0gY2FsY3VsYXRlTm9kZVN0eWxpbmcodWlUZXh0Tm9kZSwgdXNlQ2FjaGUpLFxuICAgICAgcGFkZGluZ1NpemUgPSBfY2FsY3VsYXRlTm9kZVN0eWxpbmcucGFkZGluZ1NpemUsXG4gICAgICBib3JkZXJTaXplID0gX2NhbGN1bGF0ZU5vZGVTdHlsaW5nLmJvcmRlclNpemUsXG4gICAgICBib3hTaXppbmcgPSBfY2FsY3VsYXRlTm9kZVN0eWxpbmcuYm94U2l6aW5nLFxuICAgICAgc2l6aW5nU3R5bGUgPSBfY2FsY3VsYXRlTm9kZVN0eWxpbmcuc2l6aW5nU3R5bGU7IC8vIE5lZWQgdG8gaGF2ZSB0aGUgb3ZlcmZsb3cgYXR0cmlidXRlIHRvIGhpZGUgdGhlIHNjcm9sbGJhciBvdGhlcndpc2VcbiAgLy8gdGV4dC1saW5lcyB3aWxsIG5vdCBjYWxjdWxhdGVkIHByb3Blcmx5IGFzIHRoZSBzaGFkb3cgd2lsbCB0ZWNobmljYWxseSBiZVxuICAvLyBuYXJyb3dlciBmb3IgY29udGVudFxuXG5cbiAgaGlkZGVuVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdzdHlsZScsIFwiXCIuY29uY2F0KHNpemluZ1N0eWxlLCBcIjtcIikuY29uY2F0KEhJRERFTl9URVhUQVJFQV9TVFlMRSkpO1xuICBoaWRkZW5UZXh0YXJlYS52YWx1ZSA9IHVpVGV4dE5vZGUudmFsdWUgfHwgdWlUZXh0Tm9kZS5wbGFjZWhvbGRlciB8fCAnJztcbiAgdmFyIG1pbkhlaWdodCA9IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSO1xuICB2YXIgbWF4SGVpZ2h0ID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gIHZhciBoZWlnaHQgPSBoaWRkZW5UZXh0YXJlYS5zY3JvbGxIZWlnaHQ7XG4gIHZhciBvdmVyZmxvd1k7XG5cbiAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgLy8gYm9yZGVyLWJveDogYWRkIGJvcmRlciwgc2luY2UgaGVpZ2h0ID0gY29udGVudCArIHBhZGRpbmcgKyBib3JkZXJcbiAgICBoZWlnaHQgKz0gYm9yZGVyU2l6ZTtcbiAgfSBlbHNlIGlmIChib3hTaXppbmcgPT09ICdjb250ZW50LWJveCcpIHtcbiAgICAvLyByZW1vdmUgcGFkZGluZywgc2luY2UgaGVpZ2h0ID0gY29udGVudFxuICAgIGhlaWdodCAtPSBwYWRkaW5nU2l6ZTtcbiAgfVxuXG4gIGlmIChtaW5Sb3dzICE9PSBudWxsIHx8IG1heFJvd3MgIT09IG51bGwpIHtcbiAgICAvLyBtZWFzdXJlIGhlaWdodCBvZiBhIHRleHRhcmVhIHdpdGggYSBzaW5nbGUgcm93XG4gICAgaGlkZGVuVGV4dGFyZWEudmFsdWUgPSAnICc7XG4gICAgdmFyIHNpbmdsZVJvd0hlaWdodCA9IGhpZGRlblRleHRhcmVhLnNjcm9sbEhlaWdodCAtIHBhZGRpbmdTaXplO1xuXG4gICAgaWYgKG1pblJvd3MgIT09IG51bGwpIHtcbiAgICAgIG1pbkhlaWdodCA9IHNpbmdsZVJvd0hlaWdodCAqIG1pblJvd3M7XG5cbiAgICAgIGlmIChib3hTaXppbmcgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICBtaW5IZWlnaHQgPSBtaW5IZWlnaHQgKyBwYWRkaW5nU2l6ZSArIGJvcmRlclNpemU7XG4gICAgICB9XG5cbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KG1pbkhlaWdodCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAobWF4Um93cyAhPT0gbnVsbCkge1xuICAgICAgbWF4SGVpZ2h0ID0gc2luZ2xlUm93SGVpZ2h0ICogbWF4Um93cztcblxuICAgICAgaWYgKGJveFNpemluZyA9PT0gJ2JvcmRlci1ib3gnKSB7XG4gICAgICAgIG1heEhlaWdodCA9IG1heEhlaWdodCArIHBhZGRpbmdTaXplICsgYm9yZGVyU2l6ZTtcbiAgICAgIH1cblxuICAgICAgb3ZlcmZsb3dZID0gaGVpZ2h0ID4gbWF4SGVpZ2h0ID8gJycgOiAnaGlkZGVuJztcbiAgICAgIGhlaWdodCA9IE1hdGgubWluKG1heEhlaWdodCwgaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIG1pbkhlaWdodDogbWluSGVpZ2h0LFxuICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgIG92ZXJmbG93WTogb3ZlcmZsb3dZLFxuICAgIHJlc2l6ZTogJ25vbmUnXG4gIH07XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVja1wiO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzXCI7XG5pbXBvcnQgX2NyZWF0ZVN1cGVyIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVTdXBlclwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc2l6YWJsZVRleHRBcmVhIGZyb20gJy4vUmVzaXphYmxlVGV4dEFyZWEnO1xuXG52YXIgVGV4dEFyZWEgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRleHRBcmVhLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKFRleHRBcmVhKTtcblxuICBmdW5jdGlvbiBUZXh0QXJlYShwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUZXh0QXJlYSk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF90aGlzLmZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVzaXphYmxlVGV4dEFyZWEudGV4dEFyZWEuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2F2ZVRleHRBcmVhID0gZnVuY3Rpb24gKHJlc2l6YWJsZVRleHRBcmVhKSB7XG4gICAgICBfdGhpcy5yZXNpemFibGVUZXh0QXJlYSA9IHJlc2l6YWJsZVRleHRBcmVhO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG5cbiAgICAgIF90aGlzLnNldFZhbHVlKGUudGFyZ2V0LnZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnJlc2l6YWJsZVRleHRBcmVhLnJlc2l6ZVRleHRhcmVhKCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIG9uQ2hhbmdlKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uUHJlc3NFbnRlciA9IF90aGlzJHByb3BzLm9uUHJlc3NFbnRlcixcbiAgICAgICAgICBvbktleURvd24gPSBfdGhpcyRwcm9wcy5vbktleURvd247XG5cbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIG9uUHJlc3NFbnRlcikge1xuICAgICAgICBvblByZXNzRW50ZXIoZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbktleURvd24pIHtcbiAgICAgICAgb25LZXlEb3duKGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgdmFsdWUgPSB0eXBlb2YgcHJvcHMudmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BzLnZhbHVlID09PSBudWxsID8gcHJvcHMuZGVmYXVsdFZhbHVlIDogcHJvcHMudmFsdWU7XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUZXh0QXJlYSwgW3tcbiAgICBrZXk6IFwic2V0VmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoISgndmFsdWUnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIHRoaXMucmVzaXphYmxlVGV4dEFyZWEudGV4dEFyZWEuYmx1cigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlc2l6YWJsZVRleHRBcmVhLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS52YWx1ZSxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVUZXh0QXJlYVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogbmV4dFByb3BzLnZhbHVlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUZXh0QXJlYTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IHsgUmVzaXphYmxlVGV4dEFyZWEgfTtcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gd3JhcHBlclJhZjtcblxudmFyIHJhZiA9IGZ1bmN0aW9uIHJhZihjYWxsYmFjaykge1xuICByZXR1cm4gK3NldFRpbWVvdXQoY2FsbGJhY2ssIDE2KTtcbn07XG5cbnZhciBjYWYgPSBmdW5jdGlvbiBjYWYobnVtKSB7XG4gIHJldHVybiBjbGVhclRpbWVvdXQobnVtKTtcbn07XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAncmVxdWVzdEFuaW1hdGlvbkZyYW1lJyBpbiB3aW5kb3cpIHtcbiAgcmFmID0gZnVuY3Rpb24gcmFmKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICB9O1xuXG4gIGNhZiA9IGZ1bmN0aW9uIGNhZihoYW5kbGUpIHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZSk7XG4gIH07XG59XG5cbnZhciByYWZVVUlEID0gMDtcbnZhciByYWZJZHMgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIGNsZWFudXAoaWQpIHtcbiAgcmFmSWRzLmRlbGV0ZShpZCk7XG59XG5cbmZ1bmN0aW9uIHdyYXBwZXJSYWYoY2FsbGJhY2spIHtcbiAgdmFyIHRpbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICByYWZVVUlEICs9IDE7XG4gIHZhciBpZCA9IHJhZlVVSUQ7XG5cbiAgZnVuY3Rpb24gY2FsbFJlZihsZWZ0VGltZXMpIHtcbiAgICBpZiAobGVmdFRpbWVzID09PSAwKSB7XG4gICAgICAvLyBDbGVhbiB1cFxuICAgICAgY2xlYW51cChpZCk7IC8vIFRyaWdnZXJcblxuICAgICAgY2FsbGJhY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTmV4dCByYWZcbiAgICAgIHZhciByZWFsSWQgPSByYWYoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsUmVmKGxlZnRUaW1lcyAtIDEpO1xuICAgICAgfSk7IC8vIEJpbmQgcmVhbCByYWYgaWRcblxuICAgICAgcmFmSWRzLnNldChpZCwgcmVhbElkKTtcbiAgICB9XG4gIH1cblxuICBjYWxsUmVmKHRpbWVzKTtcbiAgcmV0dXJuIGlkO1xufVxuXG53cmFwcGVyUmFmLmNhbmNlbCA9IGZ1bmN0aW9uIChpZCkge1xuICB2YXIgcmVhbElkID0gcmFmSWRzLmdldChpZCk7XG4gIGNsZWFudXAocmVhbElkKTtcbiAgcmV0dXJuIGNhZihyZWFsSWQpO1xufTsiLCJpbXBvcnQgeyBpc1ZhbGlkRWxlbWVudCwgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgY3JlYXRlRWxlbWVudCwgY2xvbmVFbGVtZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcblxudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gKHZhbHVlKSA9PiB2YWx1ZSA9PSBudWxsO1xuXG52YXIgaXNBcnJheSA9ICh2YWx1ZSkgPT4gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG5cbmNvbnN0IGlzT2JqZWN0VHlwZSA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxudmFyIGlzT2JqZWN0ID0gKHZhbHVlKSA9PiAhaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpICYmICFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdFR5cGUodmFsdWUpO1xuXG52YXIgaXNIVE1MRWxlbWVudCA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERTtcblxuY29uc3QgVkFMSURBVElPTl9NT0RFID0ge1xyXG4gICAgb25CbHVyOiAnb25CbHVyJyxcclxuICAgIG9uQ2hhbmdlOiAnb25DaGFuZ2UnLFxyXG4gICAgb25TdWJtaXQ6ICdvblN1Ym1pdCcsXHJcbn07XHJcbmNvbnN0IFZBTFVFID0gJ3ZhbHVlJztcclxuY29uc3QgVU5ERUZJTkVEID0gJ3VuZGVmaW5lZCc7XHJcbmNvbnN0IEVWRU5UUyA9IHtcclxuICAgIEJMVVI6ICdibHVyJyxcclxuICAgIENIQU5HRTogJ2NoYW5nZScsXHJcbiAgICBJTlBVVDogJ2lucHV0JyxcclxufTtcclxuY29uc3QgU0VMRUNUID0gJ3NlbGVjdCc7XHJcbmNvbnN0IElOUFVUX1ZBTElEQVRJT05fUlVMRVMgPSB7XHJcbiAgICBtYXg6ICdtYXgnLFxyXG4gICAgbWluOiAnbWluJyxcclxuICAgIG1heExlbmd0aDogJ21heExlbmd0aCcsXHJcbiAgICBtaW5MZW5ndGg6ICdtaW5MZW5ndGgnLFxyXG4gICAgcGF0dGVybjogJ3BhdHRlcm4nLFxyXG4gICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXHJcbiAgICB2YWxpZGF0ZTogJ3ZhbGlkYXRlJyxcclxufTtcclxuY29uc3QgUkVHRVhfSVNfREVFUF9QUk9QID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLztcclxuY29uc3QgUkVHRVhfSVNfUExBSU5fUFJPUCA9IC9eXFx3KiQvO1xyXG5jb25zdCBSRUdFWF9QUk9QX05BTUUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XHJcbmNvbnN0IFJFR0VYX0VTQ0FQRV9DSEFSID0gL1xcXFwoXFxcXCk/L2c7XHJcbmNvbnN0IFJFR0VYX0FSUkFZX0ZJRUxEX0lOREVYID0gL1tcXGQrXS9nO1xuXG5mdW5jdGlvbiBhdHRhY2hFdmVudExpc3RlbmVycyh7IGZpZWxkOiB7IHJlZiB9LCBoYW5kbGVDaGFuZ2UsIGlzUmFkaW9PckNoZWNrYm94LCB9KSB7XHJcbiAgICBpZiAoaXNIVE1MRWxlbWVudChyZWYpICYmIGhhbmRsZUNoYW5nZSkge1xyXG4gICAgICAgIHJlZi5hZGRFdmVudExpc3RlbmVyKGlzUmFkaW9PckNoZWNrYm94ID8gRVZFTlRTLkNIQU5HRSA6IEVWRU5UUy5JTlBVVCwgaGFuZGxlQ2hhbmdlKTtcclxuICAgICAgICByZWYuYWRkRXZlbnRMaXN0ZW5lcihFVkVOVFMuQkxVUiwgaGFuZGxlQ2hhbmdlKTtcclxuICAgIH1cclxufVxuXG52YXIgaXNLZXkgPSAodmFsdWUpID0+ICFpc0FycmF5KHZhbHVlKSAmJlxyXG4gICAgKFJFR0VYX0lTX1BMQUlOX1BST1AudGVzdCh2YWx1ZSkgfHwgIVJFR0VYX0lTX0RFRVBfUFJPUC50ZXN0KHZhbHVlKSk7XG5cbnZhciBzdHJpbmdUb1BhdGggPSAoc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgIHN0cmluZy5yZXBsYWNlKFJFR0VYX1BST1BfTkFNRSwgKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKFJFR0VYX0VTQ0FQRV9DSEFSLCAnJDEnKSA6IG51bWJlciB8fCBtYXRjaCk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XG5cbmZ1bmN0aW9uIHNldChvYmplY3QsIHBhdGgsIHZhbHVlKSB7XHJcbiAgICBsZXQgaW5kZXggPSAtMTtcclxuICAgIGNvbnN0IHRlbXBQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBzdHJpbmdUb1BhdGgocGF0aCk7XHJcbiAgICBjb25zdCBsZW5ndGggPSB0ZW1wUGF0aC5sZW5ndGg7XHJcbiAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xyXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0ZW1wUGF0aFtpbmRleF07XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgaXNPYmplY3Qob2JqVmFsdWUpIHx8IGlzQXJyYXkob2JqVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBvYmpWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogIWlzTmFOKCt0ZW1wUGF0aFtpbmRleCArIDFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDoge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdFtrZXldID0gbmV3VmFsdWU7XHJcbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqZWN0O1xyXG59XG5cbnZhciB0cmFuc2Zvcm1Ub05lc3RPYmplY3QgPSAoZGF0YSkgPT4gT2JqZWN0LmVudHJpZXMoZGF0YSkucmVkdWNlKChwcmV2aW91cywgW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICBpZiAoIWlzS2V5KGtleSkpIHtcclxuICAgICAgICBzZXQocHJldmlvdXMsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBwcmV2aW91cztcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByZXZpb3VzKSwgeyBba2V5XTogdmFsdWUgfSk7XHJcbn0sIHt9KTtcblxudmFyIGlzVW5kZWZpbmVkID0gKHZhbCkgPT4gdmFsID09PSB1bmRlZmluZWQ7XG5cbnZhciBnZXQgPSAob2JqLCBwYXRoLCBkZWZhdWx0VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHBhdGhcclxuICAgICAgICAuc3BsaXQoL1ssW1xcXS5dKz8vKVxyXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAucmVkdWNlKChyZXN1bHQsIGtleSkgPT4gKGlzTnVsbE9yVW5kZWZpbmVkKHJlc3VsdCkgPyByZXN1bHQgOiByZXN1bHRba2V5XSksIG9iaik7XHJcbiAgICByZXR1cm4gaXNVbmRlZmluZWQocmVzdWx0KSB8fCByZXN1bHQgPT09IG9ialxyXG4gICAgICAgID8gaXNVbmRlZmluZWQob2JqW3BhdGhdKVxyXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICA6IG9ialtwYXRoXVxyXG4gICAgICAgIDogcmVzdWx0O1xyXG59O1xuXG52YXIgZm9jdXNPbkVycm9yRmllbGQgPSAoZmllbGRzLCBmaWVsZEVycm9ycykgPT4ge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGRzKSB7XHJcbiAgICAgICAgaWYgKGdldChmaWVsZEVycm9ycywga2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1trZXldO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5yZWYuZm9jdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5yZWYuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5vcHRpb25zWzBdLnJlZi5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xuXG52YXIgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMgPSAocmVmLCB2YWxpZGF0ZVdpdGhTdGF0ZVVwZGF0ZSkgPT4ge1xyXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQocmVmKSAmJiByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5JTlBVVCwgdmFsaWRhdGVXaXRoU3RhdGVVcGRhdGUpO1xyXG4gICAgICAgIHJlZi5yZW1vdmVFdmVudExpc3RlbmVyKEVWRU5UUy5DSEFOR0UsIHZhbGlkYXRlV2l0aFN0YXRlVXBkYXRlKTtcclxuICAgICAgICByZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcihFVkVOVFMuQkxVUiwgdmFsaWRhdGVXaXRoU3RhdGVVcGRhdGUpO1xyXG4gICAgfVxyXG59O1xuXG52YXIgaXNSYWRpb0lucHV0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJztcblxudmFyIGlzQ2hlY2tCb3hJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdjaGVja2JveCc7XG5cbmZ1bmN0aW9uIGlzRGV0YWNoZWQoZWxlbWVudCkge1xyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8XHJcbiAgICAgICAgZWxlbWVudC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRGV0YWNoZWQoZWxlbWVudC5wYXJlbnROb2RlKTtcclxufVxuXG52YXIgaXNFbXB0eU9iamVjdCA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpICYmICFPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xuXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBzdHJpbmdUb1BhdGgodmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBjYXN0UGF0aChwYXRoKTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgIG9iamVjdCA9IGlzVW5kZWZpbmVkKG9iamVjdCkgPyBpbmRleCsrIDogb2JqZWN0W3VwZGF0ZVBhdGhbaW5kZXgrK11dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4ID09IGxlbmd0aCA/IG9iamVjdCA6IHVuZGVmaW5lZDtcclxufVxyXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcclxuICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgbGV0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuICAgIGlmIChzdGFydCA8IDApIHtcclxuICAgICAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiBsZW5ndGggKyBzdGFydDtcclxuICAgIH1cclxuICAgIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcclxuICAgIGlmIChlbmQgPCAwKSB7XHJcbiAgICAgICAgZW5kICs9IGxlbmd0aDtcclxuICAgIH1cclxuICAgIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6IGVuZCAtIHN0YXJ0O1xyXG4gICAgY29uc3QgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcclxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBwYXJlbnQob2JqZWN0LCBwYXRoKSB7XHJcbiAgICByZXR1cm4gcGF0aC5sZW5ndGggPT0gMSA/IG9iamVjdCA6IGJhc2VHZXQob2JqZWN0LCBiYXNlU2xpY2UocGF0aCwgMCwgLTEpKTtcclxufVxyXG5mdW5jdGlvbiBiYXNlVW5zZXQob2JqZWN0LCBwYXRoKSB7XHJcbiAgICBjb25zdCB1cGRhdGVQYXRoID0gaXNLZXkocGF0aCkgPyBbcGF0aF0gOiBjYXN0UGF0aChwYXRoKTtcclxuICAgIGNvbnN0IGNoaWxkT2JqZWN0ID0gcGFyZW50KG9iamVjdCwgdXBkYXRlUGF0aCk7XHJcbiAgICBjb25zdCBrZXkgPSB1cGRhdGVQYXRoW3VwZGF0ZVBhdGgubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zdCByZXN1bHQgPSAhKGNoaWxkT2JqZWN0ICE9IG51bGwpIHx8IGRlbGV0ZSBjaGlsZE9iamVjdFtrZXldO1xyXG4gICAgbGV0IHByZXZpb3VzT2JqUmVmID0gdW5kZWZpbmVkO1xyXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCB1cGRhdGVQYXRoLnNsaWNlKDAsIC0xKS5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgIGxldCBvYmplY3RSZWYgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGhzID0gdXBkYXRlUGF0aC5zbGljZSgwLCAtKGsgKyAxKSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGhzTGVuZ3RoID0gY3VycmVudFBhdGhzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgaWYgKGsgPiAwKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID0gb2JqZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGN1cnJlbnRQYXRocy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGN1cnJlbnRQYXRoc1tpbmRleF07XHJcbiAgICAgICAgICAgIG9iamVjdFJlZiA9IG9iamVjdFJlZiA/IG9iamVjdFJlZltpdGVtXSA6IG9iamVjdFtpdGVtXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYXRoc0xlbmd0aCA9PT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoaXNPYmplY3Qob2JqZWN0UmVmKSAmJiBpc0VtcHR5T2JqZWN0KG9iamVjdFJlZikpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGlzQXJyYXkob2JqZWN0UmVmKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhb2JqZWN0UmVmLmZpbHRlcigoZGF0YSkgPT4gaXNPYmplY3QoZGF0YSkgJiYgIWlzRW1wdHlPYmplY3QoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGVuZ3RoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzT2JqUmVmID8gZGVsZXRlIHByZXZpb3VzT2JqUmVmW2l0ZW1dIDogZGVsZXRlIG9iamVjdFtpdGVtXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcmV2aW91c09ialJlZiA9IG9iamVjdFJlZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIHVuc2V0KG9iamVjdCwgcGF0aHMpIHtcclxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcclxuICAgICAgICBiYXNlVW5zZXQob2JqZWN0LCBwYXRoKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG9iamVjdDtcclxufVxuXG5jb25zdCBpc1NhbWVSZWYgPSAoZmllbGRWYWx1ZSwgcmVmKSA9PiBmaWVsZFZhbHVlICYmIGZpZWxkVmFsdWUucmVmID09PSByZWY7XHJcbmZ1bmN0aW9uIGZpbmRSZW1vdmVkRmllbGRBbmRSZW1vdmVMaXN0ZW5lcihmaWVsZHMsIGhhbmRsZUNoYW5nZSwgZmllbGQsIGZvcmNlRGVsZXRlKSB7XHJcbiAgICBjb25zdCB7IHJlZiwgcmVmOiB7IG5hbWUsIHR5cGUgfSwgbXV0YXRpb25XYXRjaGVyLCB9ID0gZmllbGQ7XHJcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gZmllbGRzW25hbWVdO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgICAgZGVsZXRlIGZpZWxkc1tuYW1lXTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoKGlzUmFkaW9JbnB1dChyZWYpIHx8IGlzQ2hlY2tCb3hJbnB1dChyZWYpKSAmJiBmaWVsZFZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgeyBvcHRpb25zIH0gPSBmaWVsZFZhbHVlO1xyXG4gICAgICAgIGlmIChpc0FycmF5KG9wdGlvbnMpICYmIG9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyKEJvb2xlYW4pLmZvckVhY2goKG9wdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVmLCBtdXRhdGlvbldhdGNoZXIgfSA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmICgocmVmICYmIGlzRGV0YWNoZWQocmVmKSAmJiBpc1NhbWVSZWYob3B0aW9uLCByZWYpKSB8fCBmb3JjZURlbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFsbEV2ZW50TGlzdGVuZXJzKHJlZiwgaGFuZGxlQ2hhbmdlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb25XYXRjaGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uV2F0Y2hlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHVuc2V0KG9wdGlvbnMsIFtgWyR7aW5kZXh9XWBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zICYmICFvcHRpb25zLmZpbHRlcihCb29sZWFuKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNbbmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNbbmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoKGlzRGV0YWNoZWQocmVmKSAmJiBpc1NhbWVSZWYoZmllbGRWYWx1ZSwgcmVmKSkgfHwgZm9yY2VEZWxldGUpIHtcclxuICAgICAgICByZW1vdmVBbGxFdmVudExpc3RlbmVycyhyZWYsIGhhbmRsZUNoYW5nZSk7XHJcbiAgICAgICAgaWYgKG11dGF0aW9uV2F0Y2hlcikge1xyXG4gICAgICAgICAgICBtdXRhdGlvbldhdGNoZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgZmllbGRzW25hbWVdO1xyXG4gICAgfVxyXG59XG5cbmNvbnN0IGRlZmF1bHRSZXR1cm4gPSB7XHJcbiAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgIHZhbHVlOiAnJyxcclxufTtcclxudmFyIGdldFJhZGlvVmFsdWUgPSAob3B0aW9ucykgPT4gaXNBcnJheShvcHRpb25zKVxyXG4gICAgPyBvcHRpb25zLnJlZHVjZSgocHJldmlvdXMsIG9wdGlvbikgPT4gb3B0aW9uICYmIG9wdGlvbi5yZWYuY2hlY2tlZFxyXG4gICAgICAgID8ge1xyXG4gICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnJlZi52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgOiBwcmV2aW91cywgZGVmYXVsdFJldHVybilcclxuICAgIDogZGVmYXVsdFJldHVybjtcblxudmFyIGdldE11bHRpcGxlU2VsZWN0VmFsdWUgPSAob3B0aW9ucykgPT4gWy4uLm9wdGlvbnNdXHJcbiAgICAuZmlsdGVyKCh7IHNlbGVjdGVkIH0pID0+IHNlbGVjdGVkKVxyXG4gICAgLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XG5cbnZhciBpc0ZpbGVJbnB1dCA9IChlbGVtZW50KSA9PiBlbGVtZW50LnR5cGUgPT09ICdmaWxlJztcblxudmFyIGlzTXVsdGlwbGVTZWxlY3QgPSAoZWxlbWVudCkgPT4gZWxlbWVudC50eXBlID09PSBgJHtTRUxFQ1R9LW11bHRpcGxlYDtcblxudmFyIGlzRW1wdHlTdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlID09PSAnJztcblxuY29uc3QgZGVmYXVsdFJlc3VsdCA9IHtcclxuICAgIHZhbHVlOiBmYWxzZSxcclxuICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG59O1xyXG5jb25zdCB2YWxpZFJlc3VsdCA9IHsgdmFsdWU6IHRydWUsIGlzVmFsaWQ6IHRydWUgfTtcclxudmFyIGdldENoZWNrYm94VmFsdWUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgaWYgKGlzQXJyYXkob3B0aW9ucykpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG9wdGlvbnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uICYmIG9wdGlvbi5yZWYuY2hlY2tlZClcclxuICAgICAgICAgICAgICAgIC5tYXAoKHsgcmVmOiB7IHZhbHVlIH0gfSkgPT4gdmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWVzLCBpc1ZhbGlkOiAhIXZhbHVlcy5sZW5ndGggfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBjaGVja2VkLCB2YWx1ZSwgYXR0cmlidXRlcyB9ID0gb3B0aW9uc1swXS5yZWY7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrZWRcclxuICAgICAgICAgICAgPyBhdHRyaWJ1dGVzICYmICFpc1VuZGVmaW5lZChhdHRyaWJ1dGVzLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBpc1VuZGVmaW5lZCh2YWx1ZSkgfHwgaXNFbXB0eVN0cmluZyh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7IHZhbHVlOiB2YWx1ZSwgaXNWYWxpZDogdHJ1ZSB9XHJcbiAgICAgICAgICAgICAgICA6IHZhbGlkUmVzdWx0XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFJlc3VsdDtcclxuICAgIH1cclxuICAgIHJldHVybiBkZWZhdWx0UmVzdWx0O1xyXG59O1xuXG5mdW5jdGlvbiBnZXRGaWVsZFZhbHVlKGZpZWxkcywgcmVmKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSByZWY7XHJcbiAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tuYW1lXTtcclxuICAgIGlmIChpc0ZpbGVJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlZi5maWxlcztcclxuICAgIH1cclxuICAgIGlmIChpc1JhZGlvSW5wdXQocmVmKSkge1xyXG4gICAgICAgIHJldHVybiBmaWVsZCA/IGdldFJhZGlvVmFsdWUoZmllbGQub3B0aW9ucykudmFsdWUgOiAnJztcclxuICAgIH1cclxuICAgIGlmIChpc011bHRpcGxlU2VsZWN0KHJlZikpIHtcclxuICAgICAgICByZXR1cm4gZ2V0TXVsdGlwbGVTZWxlY3RWYWx1ZShyZWYub3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNDaGVja0JveElucHV0KHJlZikpIHtcclxuICAgICAgICByZXR1cm4gZmllbGQgPyBnZXRDaGVja2JveFZhbHVlKGZpZWxkLm9wdGlvbnMpLnZhbHVlIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cblxudmFyIGlzU3RyaW5nID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuXG52YXIgZ2V0RmllbGRzVmFsdWVzID0gKGZpZWxkcywgc2VhcmNoKSA9PiB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSB7fTtcclxuICAgIGZvciAoY29uc3QgbmFtZSBpbiBmaWVsZHMpIHtcclxuICAgICAgICBpZiAoaXNVbmRlZmluZWQoc2VhcmNoKSB8fFxyXG4gICAgICAgICAgICAoaXNTdHJpbmcoc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgPyBuYW1lLnN0YXJ0c1dpdGgoc2VhcmNoKVxyXG4gICAgICAgICAgICAgICAgOiBpc0FycmF5KHNlYXJjaClcclxuICAgICAgICAgICAgICAgICAgICA/IHNlYXJjaC5maW5kKChkYXRhKSA9PiBuYW1lLnN0YXJ0c1dpdGgoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzZWFyY2ggJiYgc2VhcmNoLm5lc3QpKSB7XHJcbiAgICAgICAgICAgIG91dHB1dFtuYW1lXSA9IGdldEZpZWxkVmFsdWUoZmllbGRzLCBmaWVsZHNbbmFtZV0ucmVmKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59O1xuXG52YXIgY29tcGFyZU9iamVjdCA9IChvYmplY3RBID0ge30sIG9iamVjdEIgPSB7fSkgPT4ge1xyXG4gICAgY29uc3Qgb2JqZWN0QUtleXMgPSBPYmplY3Qua2V5cyhvYmplY3RBKTtcclxuICAgIGNvbnN0IG9iamVjdEJLZXlzID0gT2JqZWN0LmtleXMob2JqZWN0Qik7XHJcbiAgICByZXR1cm4gKG9iamVjdEFLZXlzLmxlbmd0aCA9PT0gb2JqZWN0QktleXMubGVuZ3RoICYmXHJcbiAgICAgICAgb2JqZWN0QUtleXMuZXZlcnkoKGtleSkgPT4gb2JqZWN0QltrZXldICYmIG9iamVjdEJba2V5XSA9PT0gb2JqZWN0QVtrZXldKSk7XHJcbn07XG5cbnZhciBpc1NhbWVFcnJvciA9IChlcnJvciwgeyB0eXBlLCB0eXBlcywgbWVzc2FnZSB9KSA9PiBpc09iamVjdChlcnJvcikgJiZcclxuICAgIGVycm9yLnR5cGUgPT09IHR5cGUgJiZcclxuICAgIGVycm9yLm1lc3NhZ2UgPT09IG1lc3NhZ2UgJiZcclxuICAgIGNvbXBhcmVPYmplY3QoZXJyb3IudHlwZXMsIHR5cGVzKTtcblxuZnVuY3Rpb24gc2hvdWxkUmVuZGVyQmFzZWRPbkVycm9yKHsgZXJyb3JzLCBuYW1lLCBlcnJvciwgdmFsaWRGaWVsZHMsIGZpZWxkc1dpdGhWYWxpZGF0aW9uLCB9KSB7XHJcbiAgICBjb25zdCBpc0ZpZWxkVmFsaWQgPSBpc0VtcHR5T2JqZWN0KGVycm9yKTtcclxuICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgY29uc3QgY3VycmVudEZpZWxkRXJyb3IgPSBnZXQoZXJyb3IsIG5hbWUpO1xyXG4gICAgY29uc3QgZXhpc3RGaWVsZEVycm9yID0gZ2V0KGVycm9ycywgbmFtZSk7XHJcbiAgICBpZiAoKGlzRmllbGRWYWxpZCAmJiB2YWxpZEZpZWxkcy5oYXMobmFtZSkpIHx8XHJcbiAgICAgICAgKGV4aXN0RmllbGRFcnJvciAmJiBleGlzdEZpZWxkRXJyb3IuaXNNYW51YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRm9ybVZhbGlkICE9PSBpc0ZpZWxkVmFsaWQgfHxcclxuICAgICAgICAoIWlzRm9ybVZhbGlkICYmICFleGlzdEZpZWxkRXJyb3IpIHx8XHJcbiAgICAgICAgKGlzRmllbGRWYWxpZCAmJiBmaWVsZHNXaXRoVmFsaWRhdGlvbi5oYXMobmFtZSkgJiYgIXZhbGlkRmllbGRzLmhhcyhuYW1lKSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBjdXJyZW50RmllbGRFcnJvciAmJiAhaXNTYW1lRXJyb3IoZXhpc3RGaWVsZEVycm9yLCBjdXJyZW50RmllbGRFcnJvcik7XHJcbn1cblxudmFyIGlzUmVnZXggPSAodmFsdWUpID0+IHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwO1xuXG52YXIgZ2V0VmFsdWVBbmRNZXNzYWdlID0gKHZhbGlkYXRpb25EYXRhKSA9PiB7XHJcbiAgICBjb25zdCBpc1ZhbHVlTWVzc2FnZSA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpICYmICFpc1JlZ2V4KHZhbHVlKTtcclxuICAgIHJldHVybiBpc1ZhbHVlTWVzc2FnZSh2YWxpZGF0aW9uRGF0YSlcclxuICAgICAgICA/IHZhbGlkYXRpb25EYXRhXHJcbiAgICAgICAgOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWxpZGF0aW9uRGF0YSxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgfTtcclxufTtcblxudmFyIGlzRnVuY3Rpb24gPSAodmFsdWUpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcblxudmFyIGlzQm9vbGVhbiA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG5cbnZhciBpc01lc3NhZ2UgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSB8fCAoaXNPYmplY3QodmFsdWUpICYmIGlzVmFsaWRFbGVtZW50KHZhbHVlKSk7XG5cbmZ1bmN0aW9uIGdldFZhbGlkYXRlRXJyb3IocmVzdWx0LCByZWYsIHR5cGUgPSAndmFsaWRhdGUnKSB7XHJcbiAgICBpZiAoaXNNZXNzYWdlKHJlc3VsdCkgfHwgKGlzQm9vbGVhbihyZXN1bHQpICYmICFyZXN1bHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogaXNNZXNzYWdlKHJlc3VsdCkgPyByZXN1bHQgOiAnJyxcclxuICAgICAgICAgICAgcmVmLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cblxudmFyIGFwcGVuZEVycm9ycyA9IChuYW1lLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGVycm9ycywgdHlwZSwgbWVzc2FnZSkgPT4ge1xyXG4gICAgaWYgKHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyb3JzW25hbWVdO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGVycm9yKSwgeyB0eXBlczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAoZXJyb3IgJiYgZXJyb3IudHlwZXMgPyBlcnJvci50eXBlcyA6IHt9KSksIHsgW3R5cGVdOiBtZXNzYWdlIHx8IHRydWUgfSkgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge307XHJcbn07XG5cbnZhciB2YWxpZGF0ZUZpZWxkID0gYXN5bmMgKGZpZWxkc1JlZiwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCB7IHJlZiwgcmVmOiB7IHR5cGUsIHZhbHVlLCBuYW1lIH0sIG9wdGlvbnMsIHJlcXVpcmVkLCBtYXhMZW5ndGgsIG1pbkxlbmd0aCwgbWluLCBtYXgsIHBhdHRlcm4sIHZhbGlkYXRlLCB9KSA9PiB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBjb25zdCBmaWVsZHMgPSBmaWVsZHNSZWYuY3VycmVudDtcclxuICAgIGNvbnN0IGVycm9yID0ge307XHJcbiAgICBjb25zdCBpc1JhZGlvID0gaXNSYWRpb0lucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc0NoZWNrQm94ID0gaXNDaGVja0JveElucHV0KHJlZik7XHJcbiAgICBjb25zdCBpc1JhZGlvT3JDaGVja2JveCA9IGlzUmFkaW8gfHwgaXNDaGVja0JveDtcclxuICAgIGNvbnN0IGlzRW1wdHkgPSBpc0VtcHR5U3RyaW5nKHZhbHVlKTtcclxuICAgIGNvbnN0IGFwcGVuZEVycm9yc0N1cnJ5ID0gYXBwZW5kRXJyb3JzLmJpbmQobnVsbCwgbmFtZSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBlcnJvcik7XHJcbiAgICBjb25zdCBnZXRNaW5NYXhNZXNzYWdlID0gKGV4Y2VlZE1heCwgbWF4TGVuZ3RoTWVzc2FnZSwgbWluTGVuZ3RoTWVzc2FnZSwgbWF4VHlwZSA9IElOUFVUX1ZBTElEQVRJT05fUlVMRVMubWF4TGVuZ3RoLCBtaW5UeXBlID0gSU5QVVRfVkFMSURBVElPTl9SVUxFUy5taW5MZW5ndGgpID0+IHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gZXhjZWVkTWF4ID8gbWF4TGVuZ3RoTWVzc2FnZSA6IG1pbkxlbmd0aE1lc3NhZ2U7XHJcbiAgICAgICAgZXJyb3JbbmFtZV0gPSBPYmplY3QuYXNzaWduKHsgdHlwZTogZXhjZWVkTWF4ID8gbWF4VHlwZSA6IG1pblR5cGUsIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHJlZiB9LCAoZXhjZWVkTWF4XHJcbiAgICAgICAgICAgID8gYXBwZW5kRXJyb3JzQ3VycnkobWF4VHlwZSwgbWVzc2FnZSlcclxuICAgICAgICAgICAgOiBhcHBlbmRFcnJvcnNDdXJyeShtaW5UeXBlLCBtZXNzYWdlKSkpO1xyXG4gICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKHJlcXVpcmVkICYmXHJcbiAgICAgICAgKCghaXNSYWRpbyAmJiAhaXNDaGVja0JveCAmJiAoaXNFbXB0eSB8fCBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkpKSB8fFxyXG4gICAgICAgICAgICAoaXNCb29sZWFuKHZhbHVlKSAmJiAhdmFsdWUpIHx8XHJcbiAgICAgICAgICAgIChpc0NoZWNrQm94ICYmICFnZXRDaGVja2JveFZhbHVlKG9wdGlvbnMpLmlzVmFsaWQpIHx8XHJcbiAgICAgICAgICAgIChpc1JhZGlvICYmICFnZXRSYWRpb1ZhbHVlKG9wdGlvbnMpLmlzVmFsaWQpKSkge1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IHJlcXVpcmVkVmFsdWUsIG1lc3NhZ2U6IHJlcXVpcmVkTWVzc2FnZSB9ID0gaXNNZXNzYWdlKHJlcXVpcmVkKVxyXG4gICAgICAgICAgICA/IHsgdmFsdWU6ICEhcmVxdWlyZWQsIG1lc3NhZ2U6IHJlcXVpcmVkIH1cclxuICAgICAgICAgICAgOiBnZXRWYWx1ZUFuZE1lc3NhZ2UocmVxdWlyZWQpO1xyXG4gICAgICAgIGlmIChyZXF1aXJlZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IElOUFVUX1ZBTElEQVRJT05fUlVMRVMucmVxdWlyZWQsIG1lc3NhZ2U6IHJlcXVpcmVkTWVzc2FnZSwgcmVmOiBpc1JhZGlvT3JDaGVja2JveCA/IChfYSA9IGZpZWxkc1tuYW1lXS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0ucmVmIDogcmVmIH0sIGFwcGVuZEVycm9yc0N1cnJ5KElOUFVUX1ZBTElEQVRJT05fUlVMRVMucmVxdWlyZWQsIHJlcXVpcmVkTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChtaW4pIHx8ICFpc051bGxPclVuZGVmaW5lZChtYXgpKSB7XHJcbiAgICAgICAgbGV0IGV4Y2VlZE1heDtcclxuICAgICAgICBsZXQgZXhjZWVkTWluO1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IG1heFZhbHVlLCBtZXNzYWdlOiBtYXhNZXNzYWdlIH0gPSBnZXRWYWx1ZUFuZE1lc3NhZ2UobWF4KTtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBtaW5WYWx1ZSwgbWVzc2FnZTogbWluTWVzc2FnZSB9ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1pbik7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdudW1iZXInIHx8ICghdHlwZSAmJiAhaXNOYU4odmFsdWUpKSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZU51bWJlciA9IHJlZi52YWx1ZUFzTnVtYmVyIHx8IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1heFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWF4ID0gdmFsdWVOdW1iZXIgPiBtYXhWYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG1pblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWluID0gdmFsdWVOdW1iZXIgPCBtaW5WYWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVEYXRlID0gcmVmLnZhbHVlQXNEYXRlIHx8IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nKG1heFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZXhjZWVkTWF4ID0gdmFsdWVEYXRlID4gbmV3IERhdGUobWF4VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhtaW5WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGV4Y2VlZE1pbiA9IHZhbHVlRGF0ZSA8IG5ldyBEYXRlKG1pblZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXhjZWVkTWF4IHx8IGV4Y2VlZE1pbikge1xyXG4gICAgICAgICAgICBnZXRNaW5NYXhNZXNzYWdlKCEhZXhjZWVkTWF4LCBtYXhNZXNzYWdlLCBtaW5NZXNzYWdlLCBJTlBVVF9WQUxJREFUSU9OX1JVTEVTLm1heCwgSU5QVVRfVkFMSURBVElPTl9SVUxFUy5taW4pO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlKSAmJiAhaXNFbXB0eSAmJiAobWF4TGVuZ3RoIHx8IG1pbkxlbmd0aCkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBtYXhMZW5ndGhWYWx1ZSwgbWVzc2FnZTogbWF4TGVuZ3RoTWVzc2FnZSwgfSA9IGdldFZhbHVlQW5kTWVzc2FnZShtYXhMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHsgdmFsdWU6IG1pbkxlbmd0aFZhbHVlLCBtZXNzYWdlOiBtaW5MZW5ndGhNZXNzYWdlLCB9ID0gZ2V0VmFsdWVBbmRNZXNzYWdlKG1pbkxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRMZW5ndGggPSB2YWx1ZS50b1N0cmluZygpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBleGNlZWRNYXggPSAhaXNOdWxsT3JVbmRlZmluZWQobWF4TGVuZ3RoVmFsdWUpICYmIGlucHV0TGVuZ3RoID4gbWF4TGVuZ3RoVmFsdWU7XHJcbiAgICAgICAgY29uc3QgZXhjZWVkTWluID0gIWlzTnVsbE9yVW5kZWZpbmVkKG1pbkxlbmd0aFZhbHVlKSAmJiBpbnB1dExlbmd0aCA8IG1pbkxlbmd0aFZhbHVlO1xyXG4gICAgICAgIGlmIChleGNlZWRNYXggfHwgZXhjZWVkTWluKSB7XHJcbiAgICAgICAgICAgIGdldE1pbk1heE1lc3NhZ2UoISFleGNlZWRNYXgsIG1heExlbmd0aE1lc3NhZ2UsIG1pbkxlbmd0aE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHBhdHRlcm4gJiYgIWlzRW1wdHkpIHtcclxuICAgICAgICBjb25zdCB7IHZhbHVlOiBwYXR0ZXJuVmFsdWUsIG1lc3NhZ2U6IHBhdHRlcm5NZXNzYWdlIH0gPSBnZXRWYWx1ZUFuZE1lc3NhZ2UocGF0dGVybik7XHJcbiAgICAgICAgaWYgKGlzUmVnZXgocGF0dGVyblZhbHVlKSAmJiAhcGF0dGVyblZhbHVlLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHR5cGU6IElOUFVUX1ZBTElEQVRJT05fUlVMRVMucGF0dGVybiwgbWVzc2FnZTogcGF0dGVybk1lc3NhZ2UsIHJlZiB9LCBhcHBlbmRFcnJvcnNDdXJyeShJTlBVVF9WQUxJREFUSU9OX1JVTEVTLnBhdHRlcm4sIHBhdHRlcm5NZXNzYWdlKSk7XHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodmFsaWRhdGUpIHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gZ2V0RmllbGRWYWx1ZShmaWVsZHMsIHJlZik7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGVSZWYgPSBpc1JhZGlvT3JDaGVja2JveCAmJiBvcHRpb25zID8gb3B0aW9uc1swXS5yZWYgOiByZWY7XHJcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlKGZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gZ2V0VmFsaWRhdGVFcnJvcihyZXN1bHQsIHZhbGlkYXRlUmVmKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB2YWxpZGF0ZUVycm9yKSwgYXBwZW5kRXJyb3JzQ3VycnkoSU5QVVRfVkFMSURBVElPTl9SVUxFUy52YWxpZGF0ZSwgdmFsaWRhdGVFcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc09iamVjdCh2YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25SZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxpZGF0ZUZ1bmN0aW9uXSBvZiBPYmplY3QuZW50cmllcyh2YWxpZGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eU9iamVjdCh2YWxpZGF0aW9uUmVzdWx0KSAmJiAhdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZVJlc3VsdCA9IGF3YWl0IHZhbGlkYXRlRnVuY3Rpb24oZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZUVycm9yID0gZ2V0VmFsaWRhdGVFcnJvcih2YWxpZGF0ZVJlc3VsdCwgdmFsaWRhdGVSZWYsIGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHZhbGlkYXRlRXJyb3IpLCBhcHBlbmRFcnJvcnNDdXJyeShrZXksIHZhbGlkYXRlRXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JbbmFtZV0gPSB2YWxpZGF0aW9uUmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzRW1wdHlPYmplY3QodmFsaWRhdGlvblJlc3VsdCkpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yW25hbWVdID0gT2JqZWN0LmFzc2lnbih7IHJlZjogdmFsaWRhdGVSZWYgfSwgdmFsaWRhdGlvblJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcjtcclxufTtcblxuY29uc3QgcGFyc2VFcnJvclNjaGVtYSA9IChlcnJvciwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhKSA9PiBpc0FycmF5KGVycm9yLmlubmVyKVxyXG4gICAgPyBlcnJvci5pbm5lci5yZWR1Y2UoKHByZXZpb3VzLCB7IHBhdGgsIG1lc3NhZ2UsIHR5cGUgfSkgPT4gKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcHJldmlvdXMpLCAocGF0aFxyXG4gICAgICAgID8gcHJldmlvdXNbcGF0aF0gJiYgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgW3BhdGhdOiBhcHBlbmRFcnJvcnMocGF0aCwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBwcmV2aW91cywgdHlwZSwgbWVzc2FnZSksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7XHJcbiAgICAgICAgICAgICAgICBbcGF0aF06IHByZXZpb3VzW3BhdGhdIHx8IE9iamVjdC5hc3NpZ24oeyBtZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgfSwgKHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYVxyXG4gICAgICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlczogeyBbdHlwZV06IG1lc3NhZ2UgfHwgdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6IHt9KSksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA6IHt9KSkpLCB7fSlcclxuICAgIDoge1xyXG4gICAgICAgIFtlcnJvci5wYXRoXTogeyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLCB0eXBlOiBlcnJvci50eXBlIH0sXHJcbiAgICB9O1xyXG5hc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVdpdGhTY2hlbWEodmFsaWRhdGlvblNjaGVtYSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBkYXRhLCB2YWxpZGF0aW9uUmVzb2x2ZXIsIGNvbnRleHQpIHtcclxuICAgIGlmICh2YWxpZGF0aW9uUmVzb2x2ZXIpIHtcclxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvblJlc29sdmVyKGRhdGEsIGNvbnRleHQpO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZXM6IGF3YWl0IHZhbGlkYXRpb25TY2hlbWEudmFsaWRhdGUoZGF0YSwge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRFYXJseTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZXM6IHt9LFxyXG4gICAgICAgICAgICBlcnJvcnM6IHRyYW5zZm9ybVRvTmVzdE9iamVjdChwYXJzZUVycm9yU2NoZW1hKGUsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSkpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cblxudmFyIGlzUHJpbWl0aXZlID0gKHZhbHVlKSA9PiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkgfHwgIWlzT2JqZWN0VHlwZSh2YWx1ZSk7XG5cbmNvbnN0IGdldFBhdGggPSAocGF0aCwgdmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBnZXRJbm5lclBhdGggPSAodmFsdWUsIGtleSwgaXNPYmplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBwYXRoV2l0aEluZGV4ID0gaXNPYmplY3QgPyBgJHtwYXRofS4ke2tleX1gIDogYCR7cGF0aH1bJHtrZXl9XWA7XHJcbiAgICAgICAgcmV0dXJuIGlzUHJpbWl0aXZlKHZhbHVlKSA/IHBhdGhXaXRoSW5kZXggOiBnZXRQYXRoKHBhdGhXaXRoSW5kZXgsIHZhbHVlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZXMpXHJcbiAgICAgICAgPyB2YWx1ZXMubWFwKCh2YWx1ZSwga2V5KSA9PiBnZXRJbm5lclBhdGgodmFsdWUsIGtleSkpXHJcbiAgICAgICAgOiBPYmplY3QuZW50cmllcyh2YWx1ZXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBnZXRJbm5lclBhdGgodmFsdWUsIGtleSwgdHJ1ZSkpO1xyXG59O1xyXG52YXIgZ2V0UGF0aCQxID0gKHBhcmVudFBhdGgsIHZhbHVlKSA9PiBnZXRQYXRoKHBhcmVudFBhdGgsIHZhbHVlKS5mbGF0KEluZmluaXR5KTtcblxudmFyIGFzc2lnbldhdGNoRmllbGRzID0gKGZpZWxkVmFsdWVzLCBmaWVsZE5hbWUsIHdhdGNoRmllbGRzLCBpbnB1dFZhbHVlLCBpc1NpbmdsZUZpZWxkKSA9PiB7XHJcbiAgICBsZXQgdmFsdWU7XHJcbiAgICB3YXRjaEZpZWxkcy5hZGQoZmllbGROYW1lKTtcclxuICAgIGlmIChpc0VtcHR5T2JqZWN0KGZpZWxkVmFsdWVzKSkge1xyXG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWlzVW5kZWZpbmVkKGZpZWxkVmFsdWVzW2ZpZWxkTmFtZV0pKSB7XHJcbiAgICAgICAgdmFsdWUgPSBmaWVsZFZhbHVlc1tmaWVsZE5hbWVdO1xyXG4gICAgICAgIHdhdGNoRmllbGRzLmFkZChmaWVsZE5hbWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFsdWUgPSBnZXQodHJhbnNmb3JtVG9OZXN0T2JqZWN0KGZpZWxkVmFsdWVzKSwgZmllbGROYW1lKTtcclxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBnZXRQYXRoJDEoZmllbGROYW1lLCB2YWx1ZSkuZm9yRWFjaCgobmFtZSkgPT4gd2F0Y2hGaWVsZHMuYWRkKG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNVbmRlZmluZWQodmFsdWUpXHJcbiAgICAgICAgPyBpc1NpbmdsZUZpZWxkXHJcbiAgICAgICAgICAgID8gaW5wdXRWYWx1ZVxyXG4gICAgICAgICAgICA6IGdldChpbnB1dFZhbHVlLCBmaWVsZE5hbWUpXHJcbiAgICAgICAgOiB2YWx1ZTtcclxufTtcblxudmFyIHNraXBWYWxpZGF0aW9uID0gKHsgaXNPbkNoYW5nZSwgaGFzRXJyb3IsIGlzQmx1ckV2ZW50LCBpc09uU3VibWl0LCBpc1JlVmFsaWRhdGVPblN1Ym1pdCwgaXNPbkJsdXIsIGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNTdWJtaXR0ZWQsIH0pID0+IChpc09uQ2hhbmdlICYmIGlzQmx1ckV2ZW50KSB8fFxyXG4gICAgKGlzT25TdWJtaXQgJiYgaXNSZVZhbGlkYXRlT25TdWJtaXQpIHx8XHJcbiAgICAoaXNPblN1Ym1pdCAmJiAhaXNTdWJtaXR0ZWQpIHx8XHJcbiAgICAoaXNPbkJsdXIgJiYgIWlzQmx1ckV2ZW50ICYmICFoYXNFcnJvcikgfHxcclxuICAgIChpc1JlVmFsaWRhdGVPbkJsdXIgJiYgIWlzQmx1ckV2ZW50ICYmIGhhc0Vycm9yKSB8fFxyXG4gICAgKGlzUmVWYWxpZGF0ZU9uU3VibWl0ICYmIGlzU3VibWl0dGVkKTtcblxudmFyIGdldEZpZWxkQXJyYXlQYXJlbnROYW1lID0gKG5hbWUpID0+IG5hbWUuc3Vic3RyaW5nKDAsIG5hbWUuaW5kZXhPZignWycpKTtcblxudmFyIGdldEZpZWxkVmFsdWVCeU5hbWUgPSAoZmllbGRzLCBuYW1lKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHRzID0gdHJhbnNmb3JtVG9OZXN0T2JqZWN0KGdldEZpZWxkc1ZhbHVlcyhmaWVsZHMpKTtcclxuICAgIHJldHVybiBuYW1lID8gZ2V0KHJlc3VsdHMsIG5hbWUsIHJlc3VsdHMpIDogcmVzdWx0cztcclxufTtcblxuZnVuY3Rpb24gZ2V0SXNGaWVsZHNEaWZmZXJlbnQocmVmZXJlbmNlQXJyYXksIGRpZmZlcmVuY2VBcnJheSkge1xyXG4gICAgbGV0IGlzTWF0Y2ggPSBmYWxzZTtcclxuICAgIGlmICghaXNBcnJheShyZWZlcmVuY2VBcnJheSkgfHxcclxuICAgICAgICAhaXNBcnJheShkaWZmZXJlbmNlQXJyYXkpIHx8XHJcbiAgICAgICAgcmVmZXJlbmNlQXJyYXkubGVuZ3RoICE9PSBkaWZmZXJlbmNlQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZmVyZW5jZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlzTWF0Y2gpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGFBID0gcmVmZXJlbmNlQXJyYXlbaV07XHJcbiAgICAgICAgY29uc3QgZGF0YUIgPSBkaWZmZXJlbmNlQXJyYXlbaV07XHJcbiAgICAgICAgaWYgKGlzVW5kZWZpbmVkKGRhdGFCKSB8fFxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhQSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhkYXRhQikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlzTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YUEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFBW2tleV0gIT09IGRhdGFCW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIGlzTWF0Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNNYXRjaDtcclxufVxuXG5jb25zdCBpc01hdGNoRmllbGRBcnJheU5hbWUgPSAobmFtZSwgc2VhcmNoTmFtZSkgPT4gUmVnRXhwKGBeJHtzZWFyY2hOYW1lfVtcXFxcZCtdYC5yZXBsYWNlKC9cXFsvZywgJ1xcXFxbJykucmVwbGFjZSgvXFxdL2csICdcXFxcXScpKS50ZXN0KG5hbWUpO1xyXG52YXIgaXNOYW1lSW5GaWVsZEFycmF5ID0gKG5hbWVzLCBuYW1lKSA9PiBbLi4ubmFtZXNdLnNvbWUoKGN1cnJlbnQpID0+IGlzTWF0Y2hGaWVsZEFycmF5TmFtZShuYW1lLCBjdXJyZW50KSk7XG5cbnZhciBpc1NlbGVjdElucHV0ID0gKGVsZW1lbnQpID0+IGVsZW1lbnQudHlwZSA9PT0gYCR7U0VMRUNUfS1vbmVgO1xuXG5mdW5jdGlvbiBvbkRvbVJlbW92ZShlbGVtZW50LCBvbkRldGFjaENhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICBpZiAoaXNEZXRhY2hlZChlbGVtZW50KSkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIG9uRGV0YWNoQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUod2luZG93LmRvY3VtZW50LCB7XHJcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYnNlcnZlcjtcclxufVxuXG52YXIgbW9kZUNoZWNrZXIgPSAobW9kZSkgPT4gKHtcclxuICAgIGlzT25TdWJtaXQ6ICFtb2RlIHx8IG1vZGUgPT09IFZBTElEQVRJT05fTU9ERS5vblN1Ym1pdCxcclxuICAgIGlzT25CbHVyOiBtb2RlID09PSBWQUxJREFUSU9OX01PREUub25CbHVyLFxyXG4gICAgaXNPbkNoYW5nZTogbW9kZSA9PT0gVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLFxyXG59KTtcblxudmFyIGlzUmFkaW9PckNoZWNrYm94RnVuY3Rpb24gPSAocmVmKSA9PiBpc1JhZGlvSW5wdXQocmVmKSB8fCBpc0NoZWNrQm94SW5wdXQocmVmKTtcblxuZnVuY3Rpb24gdXNlRm9ybSh7IG1vZGUgPSBWQUxJREFUSU9OX01PREUub25TdWJtaXQsIHJlVmFsaWRhdGVNb2RlID0gVkFMSURBVElPTl9NT0RFLm9uQ2hhbmdlLCB2YWxpZGF0aW9uU2NoZW1hLCB2YWxpZGF0aW9uUmVzb2x2ZXIsIHZhbGlkYXRpb25Db250ZXh0LCBkZWZhdWx0VmFsdWVzID0ge30sIHN1Ym1pdEZvY3VzRXJyb3IgPSB0cnVlLCB2YWxpZGF0ZUNyaXRlcmlhTW9kZSwgfSA9IHt9KSB7XHJcbiAgICBjb25zdCBmaWVsZHNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZXJyb3JzUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IHRvdWNoZWRGaWVsZHNSZWYgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3QgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMgPSB1c2VSZWYoe30pO1xyXG4gICAgY29uc3Qgd2F0Y2hGaWVsZHNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IGRpcnR5RmllbGRzUmVmID0gdXNlUmVmKG5ldyBTZXQoKSk7XHJcbiAgICBjb25zdCBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZiA9IHVzZVJlZihuZXcgU2V0KCkpO1xyXG4gICAgY29uc3QgdmFsaWRGaWVsZHNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IGlzVmFsaWRSZWYgPSB1c2VSZWYodHJ1ZSk7XHJcbiAgICBjb25zdCBkZWZhdWx0VmFsdWVzUmVmID0gdXNlUmVmKGRlZmF1bHRWYWx1ZXMpO1xyXG4gICAgY29uc3QgZGVmYXVsdFZhbHVlc0F0UmVuZGVyUmVmID0gdXNlUmVmKHt9KTtcclxuICAgIGNvbnN0IGlzVW5Nb3VudCA9IHVzZVJlZihmYWxzZSk7XHJcbiAgICBjb25zdCBpc1dhdGNoQWxsUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzU3VibWl0dGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcclxuICAgIGNvbnN0IGlzRGlydHlSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3Qgc3VibWl0Q291bnRSZWYgPSB1c2VSZWYoMCk7XHJcbiAgICBjb25zdCBpc1N1Ym1pdHRpbmdSZWYgPSB1c2VSZWYoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlUmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZiA9IHVzZVJlZih7fSk7XHJcbiAgICBjb25zdCB2YWxpZGF0aW9uQ29udGV4dFJlZiA9IHVzZVJlZih2YWxpZGF0aW9uQ29udGV4dCk7XHJcbiAgICBjb25zdCBmaWVsZEFycmF5TmFtZXNSZWYgPSB1c2VSZWYobmV3IFNldCgpKTtcclxuICAgIGNvbnN0IFssIHJlbmRlcl0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgeyBpc09uQmx1ciwgaXNPblN1Ym1pdCwgaXNPbkNoYW5nZSB9ID0gdXNlUmVmKG1vZGVDaGVja2VyKG1vZGUpKS5jdXJyZW50O1xyXG4gICAgY29uc3QgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhID0gdmFsaWRhdGVDcml0ZXJpYU1vZGUgPT09ICdhbGwnO1xyXG4gICAgY29uc3QgaXNXaW5kb3dVbmRlZmluZWQgPSB0eXBlb2Ygd2luZG93ID09PSBVTkRFRklORUQ7XHJcbiAgICBjb25zdCBzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIgPSAhISh2YWxpZGF0aW9uU2NoZW1hIHx8IHZhbGlkYXRpb25SZXNvbHZlcik7XHJcbiAgICBjb25zdCBpc1dlYiA9IHR5cGVvZiBkb2N1bWVudCAhPT0gVU5ERUZJTkVEICYmXHJcbiAgICAgICAgIWlzV2luZG93VW5kZWZpbmVkICYmXHJcbiAgICAgICAgIWlzVW5kZWZpbmVkKHdpbmRvdy5IVE1MRWxlbWVudCk7XHJcbiAgICBjb25zdCBpc1Byb3h5RW5hYmxlZCA9IGlzV2ViID8gJ1Byb3h5JyBpbiB3aW5kb3cgOiB0eXBlb2YgUHJveHkgIT09IFVOREVGSU5FRDtcclxuICAgIGNvbnN0IHJlYWRGb3JtU3RhdGVSZWYgPSB1c2VSZWYoe1xyXG4gICAgICAgIGRpcnR5OiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICBpc1N1Ym1pdHRlZDogaXNPblN1Ym1pdCxcclxuICAgICAgICBzdWJtaXRDb3VudDogIWlzUHJveHlFbmFibGVkLFxyXG4gICAgICAgIHRvdWNoZWQ6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICBpc1N1Ym1pdHRpbmc6ICFpc1Byb3h5RW5hYmxlZCxcclxuICAgICAgICBpc1ZhbGlkOiAhaXNQcm94eUVuYWJsZWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHsgaXNPbkJsdXI6IGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNPblN1Ym1pdDogaXNSZVZhbGlkYXRlT25TdWJtaXQsIH0gPSB1c2VSZWYobW9kZUNoZWNrZXIocmVWYWxpZGF0ZU1vZGUpKS5jdXJyZW50O1xyXG4gICAgdmFsaWRhdGlvbkNvbnRleHRSZWYuY3VycmVudCA9IHZhbGlkYXRpb25Db250ZXh0O1xyXG4gICAgY29uc3QgcmVSZW5kZXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc1VuTW91bnQuY3VycmVudCkge1xyXG4gICAgICAgICAgICByZW5kZXIoe30pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IHNob3VsZFJlbmRlckJhc2VPbkVycm9yID0gdXNlQ2FsbGJhY2soKG5hbWUsIGVycm9yLCBzaG91bGRSZW5kZXIgPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgIGxldCBzaG91bGRSZVJlbmRlciA9IHNob3VsZFJlbmRlciB8fFxyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXJCYXNlZE9uRXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnNSZWYuY3VycmVudCxcclxuICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbGlkRmllbGRzOiB2YWxpZEZpZWxkc1JlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb246IGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChpc0VtcHR5T2JqZWN0KGVycm9yKSkge1xyXG4gICAgICAgICAgICBpZiAoZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudC5oYXMobmFtZSkgfHxcclxuICAgICAgICAgICAgICAgIHNob3VsZFZhbGlkYXRlU2NoZW1hT3JSZXNvbHZlcikge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRGaWVsZHNSZWYuY3VycmVudC5hZGQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZVJlbmRlciA9IHNob3VsZFJlUmVuZGVyIHx8IGdldChlcnJvcnNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXJyb3JzUmVmLmN1cnJlbnQgPSB1bnNldChlcnJvcnNSZWYuY3VycmVudCwgW25hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzRXJyb3IgPSBnZXQoZXJyb3JzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgICAgICB2YWxpZEZpZWxkc1JlZi5jdXJyZW50LmRlbGV0ZShuYW1lKTtcclxuICAgICAgICAgICAgc2hvdWxkUmVSZW5kZXIgPVxyXG4gICAgICAgICAgICAgICAgc2hvdWxkUmVSZW5kZXIgfHxcclxuICAgICAgICAgICAgICAgICAgICAocHJldmlvdXNFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICFpc1NhbWVFcnJvcihwcmV2aW91c0Vycm9yLCBlcnJvcltuYW1lXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlKTtcclxuICAgICAgICAgICAgc2V0KGVycm9yc1JlZi5jdXJyZW50LCBuYW1lLCBlcnJvcltuYW1lXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzaG91bGRSZVJlbmRlciAmJiAhaXNOdWxsT3JVbmRlZmluZWQoc2hvdWxkUmVuZGVyKSkge1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVSZW5kZXIsIHNob3VsZFZhbGlkYXRlU2NoZW1hT3JSZXNvbHZlcl0pO1xyXG4gICAgY29uc3Qgc2V0RmllbGRWYWx1ZSA9IHVzZUNhbGxiYWNrKChmaWVsZCwgcmF3VmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB7IHJlZiwgb3B0aW9ucyB9ID0gZmllbGQ7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc1dlYiAmJiBpc0hUTUxFbGVtZW50KHJlZikgJiYgaXNOdWxsT3JVbmRlZmluZWQocmF3VmFsdWUpXHJcbiAgICAgICAgICAgID8gJydcclxuICAgICAgICAgICAgOiByYXdWYWx1ZTtcclxuICAgICAgICBpZiAoaXNSYWRpb0lucHV0KHJlZikgJiYgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKHsgcmVmOiByYWRpb1JlZiB9KSA9PiAocmFkaW9SZWYuY2hlY2tlZCA9IHJhZGlvUmVmLnZhbHVlID09PSB2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0ZpbGVJbnB1dChyZWYpKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJlZi52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVmLmZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNNdWx0aXBsZVNlbGVjdChyZWYpKSB7XHJcbiAgICAgICAgICAgIFsuLi5yZWYub3B0aW9uc10uZm9yRWFjaCgoc2VsZWN0UmVmKSA9PiAoc2VsZWN0UmVmLnNlbGVjdGVkID0gdmFsdWUuaW5jbHVkZXMoc2VsZWN0UmVmLnZhbHVlKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc0NoZWNrQm94SW5wdXQocmVmKSAmJiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMubGVuZ3RoID4gMVxyXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLmZvckVhY2goKHsgcmVmOiBjaGVja2JveFJlZiB9KSA9PiAoY2hlY2tib3hSZWYuY2hlY2tlZCA9IHZhbHVlLmluY2x1ZGVzKGNoZWNrYm94UmVmLnZhbHVlKSkpXHJcbiAgICAgICAgICAgICAgICA6IChvcHRpb25zWzBdLnJlZi5jaGVja2VkID0gISF2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZWYudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNXZWJdKTtcclxuICAgIGNvbnN0IHNldERpcnR5ID0gdXNlQ2FsbGJhY2soKG5hbWUpID0+IHtcclxuICAgICAgICBpZiAoIWZpZWxkc1JlZi5jdXJyZW50W25hbWVdIHx8XHJcbiAgICAgICAgICAgICghcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5ICYmICFyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHlGaWVsZHMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGlzRmllbGREaXJ0eSA9IGRlZmF1bHRWYWx1ZXNBdFJlbmRlclJlZi5jdXJyZW50W25hbWVdICE9PVxyXG4gICAgICAgICAgICBnZXRGaWVsZFZhbHVlKGZpZWxkc1JlZi5jdXJyZW50LCBmaWVsZHNSZWYuY3VycmVudFtuYW1lXS5yZWYpO1xyXG4gICAgICAgIGNvbnN0IGlzRmllbGRBcnJheSA9IGlzTmFtZUluRmllbGRBcnJheShmaWVsZEFycmF5TmFtZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNEaXJ0eUZpZWxkc0xlbmd0aCA9IGRpcnR5RmllbGRzUmVmLmN1cnJlbnQuc2l6ZTtcclxuICAgICAgICBpZiAoaXNGaWVsZEFycmF5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkQXJyYXlOYW1lID0gZ2V0RmllbGRBcnJheVBhcmVudE5hbWUobmFtZSk7XHJcbiAgICAgICAgICAgIGlzRmllbGREaXJ0eSA9IGdldElzRmllbGRzRGlmZmVyZW50KGdldEZpZWxkVmFsdWVCeU5hbWUoZmllbGRzUmVmLmN1cnJlbnQsIGZpZWxkQXJyYXlOYW1lKSwgZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgZmllbGRBcnJheU5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNEaXJ0eUNoYW5nZWQgPSAoaXNGaWVsZEFycmF5ID8gaXNEaXJ0eVJlZi5jdXJyZW50IDogZGlydHlGaWVsZHNSZWYuY3VycmVudC5oYXMobmFtZSkpICE9PVxyXG4gICAgICAgICAgICBpc0ZpZWxkRGlydHk7XHJcbiAgICAgICAgaWYgKGlzRmllbGREaXJ0eSkge1xyXG4gICAgICAgICAgICBkaXJ0eUZpZWxkc1JlZi5jdXJyZW50LmFkZChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRpcnR5RmllbGRzUmVmLmN1cnJlbnQuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0RpcnR5UmVmLmN1cnJlbnQgPSBpc0ZpZWxkQXJyYXlcclxuICAgICAgICAgICAgPyBpc0ZpZWxkRGlydHlcclxuICAgICAgICAgICAgOiAhIWRpcnR5RmllbGRzUmVmLmN1cnJlbnQuc2l6ZTtcclxuICAgICAgICByZXR1cm4gcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5XHJcbiAgICAgICAgICAgID8gaXNEaXJ0eUNoYW5nZWRcclxuICAgICAgICAgICAgOiBwcmV2aW91c0RpcnR5RmllbGRzTGVuZ3RoICE9PSBkaXJ0eUZpZWxkc1JlZi5jdXJyZW50LnNpemU7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBzZXRJbnRlcm5hbFZhbHVlcyA9IHVzZUNhbGxiYWNrKChuYW1lLCB2YWx1ZSwgcGFyZW50RmllbGROYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNWYWx1ZUFycmF5ID0gaXNBcnJheSh2YWx1ZSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGROYW1lID0gYCR7cGFyZW50RmllbGROYW1lIHx8IG5hbWV9JHtpc1ZhbHVlQXJyYXkgPyBgWyR7a2V5fV1gIDogYC4ke2tleX1gfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUmVmLmN1cnJlbnRbZmllbGROYW1lXTtcclxuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHZhbHVlW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbnRlcm5hbFZhbHVlcyhuYW1lLCB2YWx1ZVtrZXldLCBmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShmaWVsZCwgdmFsdWVba2V5XSk7XHJcbiAgICAgICAgICAgICAgICBzZXREaXJ0eShmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NldEZpZWxkVmFsdWUsIHNldERpcnR5XSk7XHJcbiAgICBjb25zdCBzZXRJbnRlcm5hbFZhbHVlID0gdXNlQ2FsbGJhY2soKG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICBpZiAoZmllbGQpIHtcclxuICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShmaWVsZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBzZXREaXJ0eShuYW1lKTtcclxuICAgICAgICAgICAgaWYgKGlzQm9vbGVhbihvdXRwdXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZXMobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZXREaXJ0eSwgc2V0RmllbGRWYWx1ZSwgc2V0SW50ZXJuYWxWYWx1ZXNdKTtcclxuICAgIGNvbnN0IGV4ZWN1dGVWYWxpZGF0aW9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKG5hbWUsIHNraXBSZVJlbmRlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICAgICAgaWYgKGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQpO1xyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXJCYXNlT25FcnJvcihuYW1lLCBlcnJvciwgc2tpcFJlUmVuZGVyID8gbnVsbCA6IGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRW1wdHlPYmplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LCBbc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYV0pO1xyXG4gICAgY29uc3QgZXhlY3V0ZVNjaGVtYU9yUmVzb2x2ZXJWYWxpZGF0aW9uID0gdXNlQ2FsbGJhY2soYXN5bmMgKHBheWxvYWQpID0+IHtcclxuICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gYXdhaXQgdmFsaWRhdGVXaXRoU2NoZW1hKHZhbGlkYXRpb25TY2hlbWEsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZ2V0RmllbGRWYWx1ZUJ5TmFtZShmaWVsZHNSZWYuY3VycmVudCksIHZhbGlkYXRpb25SZXNvbHZlciwgdmFsaWRhdGlvbkNvbnRleHRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGlzVmFsaWRSZWYuY3VycmVudDtcclxuICAgICAgICBpc1ZhbGlkUmVmLmN1cnJlbnQgPSBpc0VtcHR5T2JqZWN0KGVycm9ycyk7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgcGF5bG9hZC5mb3JFYWNoKChuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0KGVycm9yc1JlZi5jdXJyZW50LCBuYW1lLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1bnNldChlcnJvcnNSZWYuY3VycmVudCwgW25hbWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IGdldChlcnJvcnMsIHBheWxvYWQpO1xyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXJCYXNlT25FcnJvcihwYXlsb2FkLCAoZXJyb3IgPyB7IFtwYXlsb2FkXTogZXJyb3IgfSA6IHt9KSwgcHJldmlvdXNGb3JtSXNWYWxpZCAhPT0gaXNWYWxpZFJlZi5jdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzRW1wdHlPYmplY3QoZXJyb3JzUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW1xyXG4gICAgICAgIHJlUmVuZGVyLFxyXG4gICAgICAgIHNob3VsZFJlbmRlckJhc2VPbkVycm9yLFxyXG4gICAgICAgIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSxcclxuICAgICAgICB2YWxpZGF0aW9uUmVzb2x2ZXIsXHJcbiAgICAgICAgdmFsaWRhdGlvblNjaGVtYSxcclxuICAgIF0pO1xyXG4gICAgY29uc3QgdHJpZ2dlclZhbGlkYXRpb24gPSB1c2VDYWxsYmFjayhhc3luYyAocGF5bG9hZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IHBheWxvYWQgfHwgT2JqZWN0LmtleXMoZmllbGRzUmVmLmN1cnJlbnQpO1xyXG4gICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVTY2hlbWFPclJlc29sdmVyVmFsaWRhdGlvbihmaWVsZHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNBcnJheShmaWVsZHMpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFByb21pc2UuYWxsKGZpZWxkcy5tYXAoYXN5bmMgKGRhdGEpID0+IGF3YWl0IGV4ZWN1dGVWYWxpZGF0aW9uKGRhdGEsIHRydWUpKSk7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZXZlcnkoQm9vbGVhbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCBleGVjdXRlVmFsaWRhdGlvbihmaWVsZHMpO1xyXG4gICAgfSwgW1xyXG4gICAgICAgIGV4ZWN1dGVTY2hlbWFPclJlc29sdmVyVmFsaWRhdGlvbixcclxuICAgICAgICBleGVjdXRlVmFsaWRhdGlvbixcclxuICAgICAgICByZVJlbmRlcixcclxuICAgICAgICBzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIsXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IGlzRmllbGRXYXRjaGVkID0gKG5hbWUpID0+IGlzV2F0Y2hBbGxSZWYuY3VycmVudCB8fFxyXG4gICAgICAgIHdhdGNoRmllbGRzUmVmLmN1cnJlbnQuaGFzKG5hbWUpIHx8XHJcbiAgICAgICAgd2F0Y2hGaWVsZHNSZWYuY3VycmVudC5oYXMoKG5hbWUubWF0Y2goL1xcdysvKSB8fCBbXSlbMF0pO1xyXG4gICAgZnVuY3Rpb24gc2V0VmFsdWUobmFtZXMsIHZhbHVlT3JTaG91bGRWYWxpZGF0ZSwgc2hvdWxkVmFsaWRhdGUpIHtcclxuICAgICAgICBsZXQgc2hvdWxkUmVuZGVyID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgaXNBcnJheVZhbHVlID0gaXNBcnJheShuYW1lcyk7XHJcbiAgICAgICAgKGlzQXJyYXlWYWx1ZVxyXG4gICAgICAgICAgICA/IG5hbWVzXHJcbiAgICAgICAgICAgIDogW25hbWVzXSkuZm9yRWFjaCgobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc1N0cmluZ0ZpZWxkTmFtZSA9IGlzU3RyaW5nKG5hbWUpO1xyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXIgPVxyXG4gICAgICAgICAgICAgICAgc2V0SW50ZXJuYWxWYWx1ZShpc1N0cmluZ0ZpZWxkTmFtZSA/IG5hbWUgOiBPYmplY3Qua2V5cyhuYW1lKVswXSwgaXNTdHJpbmdGaWVsZE5hbWVcclxuICAgICAgICAgICAgICAgICAgICA/IHZhbHVlT3JTaG91bGRWYWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LnZhbHVlcyhuYW1lKVswXSkgfHwgaXNBcnJheVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBpc0ZpZWxkV2F0Y2hlZChuYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc2hvdWxkUmVuZGVyIHx8IGlzQXJyYXlWYWx1ZSkge1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvdWxkVmFsaWRhdGUgfHwgKGlzQXJyYXlWYWx1ZSAmJiB2YWx1ZU9yU2hvdWxkVmFsaWRhdGUpKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJWYWxpZGF0aW9uKGlzQXJyYXlWYWx1ZSA/IHVuZGVmaW5lZCA6IG5hbWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCA9IGhhbmRsZUNoYW5nZVJlZi5jdXJyZW50XHJcbiAgICAgICAgPyBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudFxyXG4gICAgICAgIDogYXN5bmMgKHsgdHlwZSwgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldCA/IHRhcmdldC5uYW1lIDogJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IGZpZWxkc1JlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvcnNSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbbmFtZV07XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRFcnJvciA9IGdldChlcnJvcnMsIG5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgZXJyb3I7XHJcbiAgICAgICAgICAgIGlmICghZmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpc0JsdXJFdmVudCA9IHR5cGUgPT09IEVWRU5UUy5CTFVSO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRTa2lwVmFsaWRhdGlvbiA9IHNraXBWYWxpZGF0aW9uKHtcclxuICAgICAgICAgICAgICAgIGhhc0Vycm9yOiAhIWN1cnJlbnRFcnJvcixcclxuICAgICAgICAgICAgICAgIGlzT25DaGFuZ2UsXHJcbiAgICAgICAgICAgICAgICBpc0JsdXJFdmVudCxcclxuICAgICAgICAgICAgICAgIGlzT25TdWJtaXQsXHJcbiAgICAgICAgICAgICAgICBpc1JlVmFsaWRhdGVPblN1Ym1pdCxcclxuICAgICAgICAgICAgICAgIGlzT25CbHVyLFxyXG4gICAgICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25CbHVyLFxyXG4gICAgICAgICAgICAgICAgaXNTdWJtaXR0ZWQ6IGlzU3VibWl0dGVkUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRVcGRhdGVEaXJ0eSA9IHNldERpcnR5KG5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgc2hvdWxkUmVuZGVyID0gaXNGaWVsZFdhdGNoZWQobmFtZSkgfHwgc2hvdWxkVXBkYXRlRGlydHk7XHJcbiAgICAgICAgICAgIGlmIChpc0JsdXJFdmVudCAmJlxyXG4gICAgICAgICAgICAgICAgIWdldCh0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpICYmXHJcbiAgICAgICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0KHRvdWNoZWRGaWVsZHNSZWYuY3VycmVudCwgbmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzaG91bGRSZW5kZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRTa2lwVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3VsZFJlbmRlciAmJiByZVJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSBhd2FpdCB2YWxpZGF0ZVdpdGhTY2hlbWEodmFsaWRhdGlvblNjaGVtYSwgdmFsaWRhdGVBbGxGaWVsZENyaXRlcmlhLCBnZXRGaWVsZFZhbHVlQnlOYW1lKGZpZWxkcyksIHZhbGlkYXRpb25SZXNvbHZlciwgdmFsaWRhdGlvbkNvbnRleHRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0Zvcm1Jc1ZhbGlkID0gaXNWYWxpZFJlZi5jdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZFJlZi5jdXJyZW50ID0gaXNFbXB0eU9iamVjdChlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3IgPSAoZ2V0KGVycm9ycywgbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICA/IHsgW25hbWVdOiBnZXQoZXJyb3JzLCBuYW1lKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgOiB7fSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNGb3JtSXNWYWxpZCAhPT0gaXNWYWxpZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkUmVuZGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yID0gYXdhaXQgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2hvdWxkUmVuZGVyQmFzZU9uRXJyb3IobmFtZSwgZXJyb3IpICYmIHNob3VsZFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgcmVSZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBjb25zdCB2YWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIgPSB1c2VDYWxsYmFjaygodmFsdWVzID0ge30pID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGlzRW1wdHlPYmplY3QoZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50KVxyXG4gICAgICAgICAgICA/IGdldEZpZWxkc1ZhbHVlcyhmaWVsZHNSZWYuY3VycmVudClcclxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgdmFsaWRhdGVXaXRoU2NoZW1hKHZhbGlkYXRpb25TY2hlbWEsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgdHJhbnNmb3JtVG9OZXN0T2JqZWN0KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGRWYWx1ZXMpLCB2YWx1ZXMpKSwgdmFsaWRhdGlvblJlc29sdmVyLCB2YWxpZGF0aW9uQ29udGV4dFJlZi5jdXJyZW50KS50aGVuKCh7IGVycm9ycyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzRm9ybUlzVmFsaWQgPSBpc1ZhbGlkUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGlzVmFsaWRSZWYuY3VycmVudCA9IGlzRW1wdHlPYmplY3QoZXJyb3JzKTtcclxuICAgICAgICAgICAgaWYgKHByZXZpb3VzRm9ybUlzVmFsaWQgIT09IGlzVmFsaWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmVSZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICBbcmVSZW5kZXIsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgdmFsaWRhdGlvblJlc29sdmVyXSk7XHJcbiAgICBjb25zdCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIgPSB1c2VDYWxsYmFjaygoZmllbGQsIGZvcmNlRGVsZXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKGhhbmRsZUNoYW5nZVJlZi5jdXJyZW50ICYmIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZpbmRSZW1vdmVkRmllbGRBbmRSZW1vdmVMaXN0ZW5lcihmaWVsZHNSZWYuY3VycmVudCwgaGFuZGxlQ2hhbmdlUmVmLmN1cnJlbnQsIGZpZWxkLCBmb3JjZURlbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmID0gdXNlQ2FsbGJhY2soKGZpZWxkLCBmb3JjZURlbGV0ZSkgPT4ge1xyXG4gICAgICAgIGlmICghZmllbGQgfHxcclxuICAgICAgICAgICAgKGZpZWxkICYmXHJcbiAgICAgICAgICAgICAgICBpc05hbWVJbkZpZWxkQXJyYXkoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQsIGZpZWxkLnJlZi5uYW1lKSAmJlxyXG4gICAgICAgICAgICAgICAgIWZvcmNlRGVsZXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcihmaWVsZCwgZm9yY2VEZWxldGUpO1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gZmllbGQucmVmO1xyXG4gICAgICAgIGVycm9yc1JlZi5jdXJyZW50ID0gdW5zZXQoZXJyb3JzUmVmLmN1cnJlbnQsIFtuYW1lXSk7XHJcbiAgICAgICAgdG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50ID0gdW5zZXQodG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50LCBbbmFtZV0pO1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXNBdFJlbmRlclJlZi5jdXJyZW50ID0gdW5zZXQoZGVmYXVsdFZhbHVlc0F0UmVuZGVyUmVmLmN1cnJlbnQsIFtuYW1lXSk7XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICBkaXJ0eUZpZWxkc1JlZixcclxuICAgICAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYsXHJcbiAgICAgICAgICAgIHZhbGlkRmllbGRzUmVmLFxyXG4gICAgICAgICAgICB3YXRjaEZpZWxkc1JlZixcclxuICAgICAgICBdLmZvckVhY2goKGRhdGEpID0+IGRhdGEuY3VycmVudC5kZWxldGUobmFtZSkpO1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCB8fFxyXG4gICAgICAgICAgICByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCkge1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgICAgICBpZiAoc2hvdWxkVmFsaWRhdGVTY2hlbWFPclJlc29sdmVyKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtcclxuICAgICAgICByZVJlbmRlcixcclxuICAgICAgICBzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIsXHJcbiAgICAgICAgdmFsaWRhdGVTY2hlbWFPclJlc29sdmVyLFxyXG4gICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcixcclxuICAgIF0pO1xyXG4gICAgZnVuY3Rpb24gY2xlYXJFcnJvcihuYW1lKSB7XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgdW5zZXQoZXJyb3JzUmVmLmN1cnJlbnQsIGlzQXJyYXkobmFtZSkgPyBuYW1lIDogW25hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yc1JlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRJbnRlcm5hbEVycm9yID0gKHsgbmFtZSwgdHlwZSwgdHlwZXMsIG1lc3NhZ2UsIHNob3VsZFJlbmRlciwgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzUmVmLmN1cnJlbnRbbmFtZV07XHJcbiAgICAgICAgaWYgKCFpc1NhbWVFcnJvcihnZXQoZXJyb3JzUmVmLmN1cnJlbnQsIG5hbWUpLCB7XHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHR5cGVzLFxyXG4gICAgICAgIH0pKSB7XHJcbiAgICAgICAgICAgIHNldChlcnJvcnNSZWYuY3VycmVudCwgbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgICAgIHR5cGVzLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgIHJlZjogZmllbGQgPyBmaWVsZC5yZWYgOiB7fSxcclxuICAgICAgICAgICAgICAgIGlzTWFudWFsOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHNob3VsZFJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgcmVSZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBzZXRFcnJvcihuYW1lLCB0eXBlID0gJycsIG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoaXNTdHJpbmcobmFtZSkpIHtcclxuICAgICAgICAgICAgc2V0SW50ZXJuYWxFcnJvcihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBuYW1lIH0sIChpc09iamVjdCh0eXBlKVxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZXM6IHR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJycsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICB9KSksIHsgc2hvdWxkUmVuZGVyOiB0cnVlIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuYW1lKSkge1xyXG4gICAgICAgICAgICBuYW1lLmZvckVhY2goKGVycm9yKSA9PiBzZXRJbnRlcm5hbEVycm9yKE9iamVjdC5hc3NpZ24oe30sIGVycm9yKSkpO1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHdhdGNoKGZpZWxkTmFtZXMsIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHdhdGNoRmllbGRzID0gd2F0Y2hGaWVsZHNSZWYuY3VycmVudDtcclxuICAgICAgICBjb25zdCBpc0RlZmF1bHRWYWx1ZVVuZGVmaW5lZCA9IGlzVW5kZWZpbmVkKGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgY29tYmluZWREZWZhdWx0VmFsdWVzID0gaXNEZWZhdWx0VmFsdWVVbmRlZmluZWRcclxuICAgICAgICAgICAgPyBkZWZhdWx0VmFsdWVzUmVmLmN1cnJlbnRcclxuICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZXMgPSBnZXRGaWVsZHNWYWx1ZXMoZmllbGRzUmVmLmN1cnJlbnQsIGZpZWxkTmFtZXMpO1xyXG4gICAgICAgIGlmIChpc1N0cmluZyhmaWVsZE5hbWVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXNzaWduV2F0Y2hGaWVsZHMoZmllbGRWYWx1ZXMsIGZpZWxkTmFtZXMsIHdhdGNoRmllbGRzLCBpc0RlZmF1bHRWYWx1ZVVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyBnZXQoY29tYmluZWREZWZhdWx0VmFsdWVzLCBmaWVsZE5hbWVzKVxyXG4gICAgICAgICAgICAgICAgOiBkZWZhdWx0VmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNBcnJheShmaWVsZE5hbWVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmllbGROYW1lcy5yZWR1Y2UoKHByZXZpb3VzLCBuYW1lKSA9PiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcmV2aW91cyksIHsgW25hbWVdOiBhc3NpZ25XYXRjaEZpZWxkcyhmaWVsZFZhbHVlcywgbmFtZSwgd2F0Y2hGaWVsZHMsIGNvbWJpbmVkRGVmYXVsdFZhbHVlcykgfSkpLCB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlzV2F0Y2hBbGxSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKCFpc0VtcHR5T2JqZWN0KGZpZWxkVmFsdWVzKSAmJiBmaWVsZFZhbHVlcykgfHwgY29tYmluZWREZWZhdWx0VmFsdWVzO1xyXG4gICAgICAgIHJldHVybiBmaWVsZE5hbWVzICYmIGZpZWxkTmFtZXMubmVzdFxyXG4gICAgICAgICAgICA/IHRyYW5zZm9ybVRvTmVzdE9iamVjdChyZXN1bHQpXHJcbiAgICAgICAgICAgIDogcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdW5yZWdpc3RlcihuYW1lKSB7XHJcbiAgICAgICAgaWYgKGZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIChpc0FycmF5KG5hbWUpID8gbmFtZSA6IFtuYW1lXSkuZm9yRWFjaCgoZmllbGROYW1lKSA9PiByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXJBbmRSZWYoZmllbGRzUmVmLmN1cnJlbnRbZmllbGROYW1lXSwgdHJ1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRmllbGRzUmVmKHJlZiwgdmFsaWRhdGVPcHRpb25zID0ge30pIHtcclxuICAgICAgICBpZiAoIXJlZi5uYW1lKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ01pc3NpbmcgbmFtZSBAJywgcmVmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCB0eXBlLCB2YWx1ZSB9ID0gcmVmO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkUmVmQW5kVmFsaWRhdGlvbk9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgcmVmIH0sIHZhbGlkYXRlT3B0aW9ucyk7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gZmllbGRzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgaXNSYWRpb09yQ2hlY2tib3ggPSBpc1JhZGlvT3JDaGVja2JveEZ1bmN0aW9uKHJlZik7XHJcbiAgICAgICAgbGV0IGZpZWxkID0gZmllbGRzW25hbWVdO1xyXG4gICAgICAgIGxldCBpc0VtcHR5RGVmYXVsdFZhbHVlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgaXNGaWVsZEFycmF5O1xyXG4gICAgICAgIGxldCBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgaWYgKGlzUmFkaW9PckNoZWNrYm94XHJcbiAgICAgICAgICAgID8gZmllbGQgJiZcclxuICAgICAgICAgICAgICAgIGlzQXJyYXkoZmllbGQub3B0aW9ucykgJiZcclxuICAgICAgICAgICAgICAgIGZpZWxkLm9wdGlvbnMuZmlsdGVyKEJvb2xlYW4pLmZpbmQoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gb3B0aW9uLnJlZi52YWx1ZSAmJiBvcHRpb24ucmVmID09PSByZWY7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IGZpZWxkICYmIHJlZiA9PT0gZmllbGQucmVmKSB7XHJcbiAgICAgICAgICAgIGZpZWxkc1tuYW1lXSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZmllbGQpLCB2YWxpZGF0ZU9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uV2F0Y2hlciA9IG9uRG9tUmVtb3ZlKHJlZiwgKCkgPT4gcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKGZpZWxkKSk7XHJcbiAgICAgICAgICAgIGZpZWxkID0gaXNSYWRpb09yQ2hlY2tib3hcclxuICAgICAgICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih7IG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKChmaWVsZCAmJiBmaWVsZC5vcHRpb25zKSB8fCBbXSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uV2F0Y2hlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLCByZWY6IHsgdHlwZSwgbmFtZSB9IH0sIHZhbGlkYXRlT3B0aW9ucykgOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZpZWxkUmVmQW5kVmFsaWRhdGlvbk9wdGlvbnMpLCB7IG11dGF0aW9uV2F0Y2hlciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZpZWxkID0gZmllbGRSZWZBbmRWYWxpZGF0aW9uT3B0aW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgZmllbGRzW25hbWVdID0gZmllbGQ7XHJcbiAgICAgICAgaWYgKCFpc0VtcHR5T2JqZWN0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlID0gZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlzRW1wdHlEZWZhdWx0VmFsdWUgPSBpc1VuZGVmaW5lZChkZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgICAgICBpc0ZpZWxkQXJyYXkgPSBpc05hbWVJbkZpZWxkQXJyYXkoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIWlzRW1wdHlEZWZhdWx0VmFsdWUgJiYgIWlzRmllbGRBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZShmaWVsZCwgZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2hvdWxkVmFsaWRhdGVTY2hlbWFPclJlc29sdmVyICYmXHJcbiAgICAgICAgICAgICFpc0ZpZWxkQXJyYXkgJiZcclxuICAgICAgICAgICAgcmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGVTY2hlbWFPclJlc29sdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFpc0VtcHR5T2JqZWN0KHZhbGlkYXRlT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgZmllbGRzV2l0aFZhbGlkYXRpb25SZWYuY3VycmVudC5hZGQobmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghaXNPblN1Ym1pdCAmJiByZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGaWVsZChmaWVsZHNSZWYsIHZhbGlkYXRlQWxsRmllbGRDcml0ZXJpYSwgZmllbGQpLnRoZW4oKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNGb3JtSXNWYWxpZCA9IGlzVmFsaWRSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5T2JqZWN0KGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHZhbGlkRmllbGRzUmVmLmN1cnJlbnQuYWRkKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGlzVmFsaWRSZWYuY3VycmVudCA9IGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNGb3JtSXNWYWxpZCAhPT0gaXNWYWxpZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFkZWZhdWx0VmFsdWVzQXRSZW5kZXJSZWYuY3VycmVudFtuYW1lXSAmJlxyXG4gICAgICAgICAgICAhKGlzRmllbGRBcnJheSAmJiBpc0VtcHR5RGVmYXVsdFZhbHVlKSkge1xyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWVzQXRSZW5kZXJSZWYuY3VycmVudFtuYW1lXSA9IGlzRW1wdHlEZWZhdWx0VmFsdWUgPyBnZXRGaWVsZFZhbHVlKGZpZWxkcywgZmllbGQucmVmKSA6IGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICAgICAgYXR0YWNoRXZlbnRMaXN0ZW5lcnMoe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6IGlzUmFkaW9PckNoZWNrYm94ICYmIGZpZWxkLm9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm9wdGlvbnNbZmllbGQub3B0aW9ucy5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgICAgIDogZmllbGQsXHJcbiAgICAgICAgICAgICAgICBpc1JhZGlvT3JDaGVja2JveDogaXNSYWRpb09yQ2hlY2tib3ggfHwgaXNTZWxlY3RJbnB1dChyZWYpLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2VSZWYuY3VycmVudCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXIocmVmT3JWYWxpZGF0aW9uT3B0aW9ucywgdmFsaWRhdGlvbk9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoaXNXaW5kb3dVbmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNTdHJpbmcocmVmT3JWYWxpZGF0aW9uT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZHNSZWYoeyBuYW1lOiByZWZPclZhbGlkYXRpb25PcHRpb25zIH0sIHZhbGlkYXRpb25PcHRpb25zKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNPYmplY3QocmVmT3JWYWxpZGF0aW9uT3B0aW9ucykgJiYgJ25hbWUnIGluIHJlZk9yVmFsaWRhdGlvbk9wdGlvbnMpIHtcclxuICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZHNSZWYocmVmT3JWYWxpZGF0aW9uT3B0aW9ucywgdmFsaWRhdGlvbk9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAocmVmKSA9PiByZWYgJiYgcmVnaXN0ZXJGaWVsZHNSZWYocmVmLCByZWZPclZhbGlkYXRpb25PcHRpb25zKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUNhbGxiYWNrKChjYWxsYmFjaykgPT4gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZmllbGRFcnJvcnMgPSB7fTtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBmaWVsZHNSZWYuY3VycmVudDtcclxuICAgICAgICBsZXQgZmllbGRWYWx1ZXMgPSBnZXRGaWVsZHNWYWx1ZXMoZmllbGRzKTtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzU3VibWl0dGluZykge1xyXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmdSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3JzLCB2YWx1ZXMgfSA9IGF3YWl0IHZhbGlkYXRlV2l0aFNjaGVtYSh2YWxpZGF0aW9uU2NoZW1hLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIHRyYW5zZm9ybVRvTmVzdE9iamVjdChmaWVsZFZhbHVlcyksIHZhbGlkYXRpb25SZXNvbHZlciwgdmFsaWRhdGlvbkNvbnRleHRSZWYuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnNSZWYuY3VycmVudCA9IGVycm9ycztcclxuICAgICAgICAgICAgICAgIGZpZWxkRXJyb3JzID0gZXJyb3JzO1xyXG4gICAgICAgICAgICAgICAgZmllbGRWYWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIE9iamVjdC52YWx1ZXMoZmllbGRzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJlZjogeyBuYW1lIH0sIH0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRFcnJvciA9IGF3YWl0IHZhbGlkYXRlRmllbGQoZmllbGRzUmVmLCB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsIGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkRXJyb3JbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldChmaWVsZEVycm9ycywgbmFtZSwgZmllbGRFcnJvcltuYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZEZpZWxkc1JlZi5jdXJyZW50LmRlbGV0ZShuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkRmllbGRzUmVmLmN1cnJlbnQuYWRkKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc0VtcHR5T2JqZWN0KGZpZWxkRXJyb3JzKSkge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JzUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjYWxsYmFjayh0cmFuc2Zvcm1Ub05lc3RPYmplY3QoZmllbGRWYWx1ZXMpLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVycm9yc1JlZi5jdXJyZW50ID0gZmllbGRFcnJvcnM7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3VibWl0Rm9jdXNFcnJvciAmJiBpc1dlYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzT25FcnJvckZpZWxkKGZpZWxkcywgZmllbGRFcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICBpc1N1Ym1pdHRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nUmVmLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3VibWl0Q291bnRSZWYuY3VycmVudCA9IHN1Ym1pdENvdW50UmVmLmN1cnJlbnQgKyAxO1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtcclxuICAgICAgICBpc1dlYixcclxuICAgICAgICByZVJlbmRlcixcclxuICAgICAgICBzaG91bGRWYWxpZGF0ZVNjaGVtYU9yUmVzb2x2ZXIsXHJcbiAgICAgICAgc3VibWl0Rm9jdXNFcnJvcixcclxuICAgICAgICB2YWxpZGF0ZUFsbEZpZWxkQ3JpdGVyaWEsXHJcbiAgICAgICAgdmFsaWRhdGlvblJlc29sdmVyLFxyXG4gICAgICAgIHZhbGlkYXRpb25TY2hlbWEsXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IHJlc2V0UmVmcyA9ICh7IGVycm9ycywgZGlydHksIGlzU3VibWl0dGVkLCB0b3VjaGVkLCBpc1ZhbGlkLCBzdWJtaXRDb3VudCwgZGlydHlGaWVsZHMsIH0pID0+IHtcclxuICAgICAgICBmaWVsZHNSZWYuY3VycmVudCA9IHt9O1xyXG4gICAgICAgIGlmICghZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGVycm9yc1JlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdG91Y2hlZCkge1xyXG4gICAgICAgICAgICB0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnQgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkRmllbGRzUmVmLmN1cnJlbnQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgICAgIGlzVmFsaWRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGlydHkpIHtcclxuICAgICAgICAgICAgaXNEaXJ0eVJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZGlydHlGaWVsZHMpIHtcclxuICAgICAgICAgICAgZGlydHlGaWVsZHNSZWYuY3VycmVudCA9IG5ldyBTZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1N1Ym1pdHRlZCkge1xyXG4gICAgICAgICAgICBpc1N1Ym1pdHRlZFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc3VibWl0Q291bnQpIHtcclxuICAgICAgICAgICAgc3VibWl0Q291bnRSZWYuY3VycmVudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXNBdFJlbmRlclJlZi5jdXJyZW50ID0ge307XHJcbiAgICAgICAgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudCA9IHt9O1xyXG4gICAgICAgIHdhdGNoRmllbGRzUmVmLmN1cnJlbnQgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgaXNXYXRjaEFsbFJlZi5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVzZXQgPSAodmFsdWVzLCBvbWl0UmVzZXRTdGF0ZSA9IHt9KSA9PiB7XHJcbiAgICAgICAgaWYgKGlzV2ViKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LnZhbHVlcyhmaWVsZHNSZWYuY3VycmVudCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVmLCBvcHRpb25zIH0gPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dFJlZiA9IGlzUmFkaW9PckNoZWNrYm94RnVuY3Rpb24ocmVmKSAmJiBpc0FycmF5KG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gb3B0aW9uc1swXS5yZWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiByZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzSFRNTEVsZW1lbnQoaW5wdXRSZWYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFJlZi5jbG9zZXN0KCdmb3JtJykucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYSkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50ID0gdmFsdWVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QudmFsdWVzKHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnQpLmZvckVhY2goKHJlc2V0RmllbGRBcnJheSkgPT4gaXNGdW5jdGlvbihyZXNldEZpZWxkQXJyYXkpICYmIHJlc2V0RmllbGRBcnJheSgpKTtcclxuICAgICAgICByZXNldFJlZnMob21pdFJlc2V0U3RhdGUpO1xyXG4gICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gZ2V0VmFsdWVzKHBheWxvYWQpIHtcclxuICAgICAgICBpZiAoaXNTdHJpbmcocGF5bG9hZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkc1JlZi5jdXJyZW50W3BheWxvYWRdXHJcbiAgICAgICAgICAgICAgICA/IGdldEZpZWxkVmFsdWUoZmllbGRzUmVmLmN1cnJlbnQsIGZpZWxkc1JlZi5jdXJyZW50W3BheWxvYWRdLnJlZilcclxuICAgICAgICAgICAgICAgIDogZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgcGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0RmllbGRzVmFsdWVzKGZpZWxkc1JlZi5jdXJyZW50KTtcclxuICAgICAgICBjb25zdCBvdXRwdXRWYWx1ZXMgPSBpc0VtcHR5T2JqZWN0KGZpZWxkVmFsdWVzKVxyXG4gICAgICAgICAgICA/IGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudFxyXG4gICAgICAgICAgICA6IGZpZWxkVmFsdWVzO1xyXG4gICAgICAgIHJldHVybiBwYXlsb2FkICYmIHBheWxvYWQubmVzdFxyXG4gICAgICAgICAgICA/IHRyYW5zZm9ybVRvTmVzdE9iamVjdChvdXRwdXRWYWx1ZXMpXHJcbiAgICAgICAgICAgIDogb3V0cHV0VmFsdWVzO1xyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+ICgpID0+IHtcclxuICAgICAgICBpc1VuTW91bnQuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgZmllbGRzUmVmLmN1cnJlbnQgJiZcclxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxyXG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKGZpZWxkc1JlZi5jdXJyZW50KS5mb3JFYWNoKChmaWVsZCkgPT4gcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmKGZpZWxkLCB0cnVlKSk7XHJcbiAgICB9LCBbcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyQW5kUmVmXSk7XHJcbiAgICBpZiAoIXNob3VsZFZhbGlkYXRlU2NoZW1hT3JSZXNvbHZlcikge1xyXG4gICAgICAgIGlzVmFsaWRSZWYuY3VycmVudCA9XHJcbiAgICAgICAgICAgIHZhbGlkRmllbGRzUmVmLmN1cnJlbnQuc2l6ZSA+PSBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LnNpemUgJiZcclxuICAgICAgICAgICAgICAgIGlzRW1wdHlPYmplY3QoZXJyb3JzUmVmLmN1cnJlbnQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybVN0YXRlID0ge1xyXG4gICAgICAgIGRpcnR5OiBpc0RpcnR5UmVmLmN1cnJlbnQsXHJcbiAgICAgICAgZGlydHlGaWVsZHM6IGRpcnR5RmllbGRzUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQ6IGlzU3VibWl0dGVkUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgc3VibWl0Q291bnQ6IHN1Ym1pdENvdW50UmVmLmN1cnJlbnQsXHJcbiAgICAgICAgdG91Y2hlZDogdG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50LFxyXG4gICAgICAgIGlzU3VibWl0dGluZzogaXNTdWJtaXR0aW5nUmVmLmN1cnJlbnQsXHJcbiAgICAgICAgaXNWYWxpZDogaXNPblN1Ym1pdFxyXG4gICAgICAgICAgICA/IGlzU3VibWl0dGVkUmVmLmN1cnJlbnQgJiYgaXNFbXB0eU9iamVjdChlcnJvcnNSZWYuY3VycmVudClcclxuICAgICAgICAgICAgOiBpc1ZhbGlkUmVmLmN1cnJlbnQsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29tbW9uUHJvcHMgPSB7XHJcbiAgICAgICAgdHJpZ2dlclZhbGlkYXRpb24sXHJcbiAgICAgICAgc2V0VmFsdWU6IHVzZUNhbGxiYWNrKHNldFZhbHVlLCBbXHJcbiAgICAgICAgICAgIHJlUmVuZGVyLFxyXG4gICAgICAgICAgICBzZXRJbnRlcm5hbFZhbHVlLFxyXG4gICAgICAgICAgICB0cmlnZ2VyVmFsaWRhdGlvbixcclxuICAgICAgICBdKSxcclxuICAgICAgICByZWdpc3RlcjogdXNlQ2FsbGJhY2socmVnaXN0ZXIsIFtcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LFxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWVzQXRSZW5kZXJSZWYuY3VycmVudCxcclxuICAgICAgICBdKSxcclxuICAgICAgICB1bnJlZ2lzdGVyOiB1c2VDYWxsYmFjayh1bnJlZ2lzdGVyLCBbXSksXHJcbiAgICAgICAgZ2V0VmFsdWVzOiB1c2VDYWxsYmFjayhnZXRWYWx1ZXMsIFtdKSxcclxuICAgICAgICBmb3JtU3RhdGU6IGlzUHJveHlFbmFibGVkXHJcbiAgICAgICAgICAgID8gbmV3IFByb3h5KGZvcm1TdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiAob2JqLCBwcm9wKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudFtwcm9wXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICA6IGZvcm1TdGF0ZSxcclxuICAgIH07XHJcbiAgICBjb25zdCBjb250cm9sID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIsXHJcbiAgICAgICAgcmVSZW5kZXIgfSwgKHNob3VsZFZhbGlkYXRlU2NoZW1hT3JSZXNvbHZlclxyXG4gICAgICAgID8geyB2YWxpZGF0ZVNjaGVtYUlzVmFsaWQ6IHZhbGlkYXRlU2NoZW1hT3JSZXNvbHZlciB9XHJcbiAgICAgICAgOiB7fSkpLCB7IG1vZGU6IHtcclxuICAgICAgICAgICAgaXNPbkJsdXIsXHJcbiAgICAgICAgICAgIGlzT25TdWJtaXQsXHJcbiAgICAgICAgICAgIGlzT25DaGFuZ2UsXHJcbiAgICAgICAgfSwgcmVWYWxpZGF0ZU1vZGU6IHtcclxuICAgICAgICAgICAgaXNSZVZhbGlkYXRlT25CbHVyLFxyXG4gICAgICAgICAgICBpc1JlVmFsaWRhdGVPblN1Ym1pdCxcclxuICAgICAgICB9LCBlcnJvcnNSZWYsXHJcbiAgICAgICAgdG91Y2hlZEZpZWxkc1JlZixcclxuICAgICAgICBmaWVsZHNSZWYsXHJcbiAgICAgICAgaXNXYXRjaEFsbFJlZixcclxuICAgICAgICB3YXRjaEZpZWxkc1JlZixcclxuICAgICAgICByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZixcclxuICAgICAgICBmaWVsZEFycmF5RGVmYXVsdFZhbHVlcyxcclxuICAgICAgICB2YWxpZEZpZWxkc1JlZixcclxuICAgICAgICBkaXJ0eUZpZWxkc1JlZixcclxuICAgICAgICBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZixcclxuICAgICAgICBmaWVsZEFycmF5TmFtZXNSZWYsXHJcbiAgICAgICAgaXNEaXJ0eVJlZixcclxuICAgICAgICByZWFkRm9ybVN0YXRlUmVmLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZXNSZWYgfSksIGNvbW1vblByb3BzKTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgd2F0Y2gsXHJcbiAgICAgICAgY29udHJvbCxcclxuICAgICAgICBoYW5kbGVTdWJtaXQsIHJlc2V0OiB1c2VDYWxsYmFjayhyZXNldCwgW10pLCBjbGVhckVycm9yOiB1c2VDYWxsYmFjayhjbGVhckVycm9yLCBbXSksIHNldEVycm9yOiB1c2VDYWxsYmFjayhzZXRFcnJvciwgW10pLCBlcnJvcnM6IGVycm9yc1JlZi5jdXJyZW50IH0sIGNvbW1vblByb3BzKTtcclxufVxuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XG5cbmNvbnN0IEZvcm1HbG9iYWxDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuZnVuY3Rpb24gdXNlRm9ybUNvbnRleHQoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChGb3JtR2xvYmFsQ29udGV4dCk7XHJcbn1cclxuZnVuY3Rpb24gRm9ybUNvbnRleHQoX2EpIHtcclxuICAgIHZhciB7IGNoaWxkcmVuLCBmb3JtU3RhdGUsIGVycm9ycyB9ID0gX2EsIHJlc3RNZXRob2RzID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcImZvcm1TdGF0ZVwiLCBcImVycm9yc1wiXSk7XHJcbiAgICByZXR1cm4gKGNyZWF0ZUVsZW1lbnQoRm9ybUdsb2JhbENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcmVzdE1ldGhvZHMpLCB7IGZvcm1TdGF0ZSwgZXJyb3JzIH0pIH0sIGNoaWxkcmVuKSk7XHJcbn1cblxudmFyIGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkID0gdHlwZW9mIHBlcmZvcm1hbmNlID09PSBVTkRFRklORUQgPyBEYXRlLm5vdygpIDogcGVyZm9ybWFuY2Uubm93KCkgKiAxMDAwO1xyXG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICBjb25zdCByID0gKE1hdGgucmFuZG9tKCkgKiAxNiArIGQpICUgMTYgfCAwO1xyXG4gICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4KS50b1N0cmluZygxNik7XHJcbiAgICB9KTtcclxufTtcblxuY29uc3QgYXBwZW5kSWQgPSAodmFsdWUsIGtleU5hbWUpID0+IChPYmplY3QuYXNzaWduKHsgW2tleU5hbWVdOiBnZW5lcmF0ZUlkKCkgfSwgKGlzT2JqZWN0KHZhbHVlKSA/IHZhbHVlIDogeyB2YWx1ZSB9KSkpO1xyXG5jb25zdCBtYXBJZHMgPSAoZGF0YSwga2V5TmFtZSkgPT4gKGlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW10pLm1hcCgodmFsdWUpID0+IGFwcGVuZElkKHZhbHVlLCBrZXlOYW1lKSk7XG5cbnZhciBnZXRTb3J0UmVtb3ZlZEl0ZW1zID0gKGluZGV4ZXMsIHJlbW92ZUluZGV4ZXMsIHVwZGF0ZWRJbmRleGVzID0gW10sIGNvdW50ID0gMCwgbm90Rm91bmRJbmRleGVzID0gW10pID0+IHtcclxuICAgIGZvciAoY29uc3QgcmVtb3ZlSW5kZXggb2YgcmVtb3ZlSW5kZXhlcykge1xyXG4gICAgICAgIGlmIChpbmRleGVzLmluZGV4T2YocmVtb3ZlSW5kZXgpIDwgMCkge1xyXG4gICAgICAgICAgICBub3RGb3VuZEluZGV4ZXMucHVzaChyZW1vdmVJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBpbmRleCBvZiBpbmRleGVzLnNvcnQoKSkge1xyXG4gICAgICAgIGlmIChyZW1vdmVJbmRleGVzLmluZGV4T2YoaW5kZXgpID4gLTEpIHtcclxuICAgICAgICAgICAgdXBkYXRlZEluZGV4ZXMucHVzaCgtMSk7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB1cGRhdGVkSW5kZXhlcy5wdXNoKGluZGV4IC1cclxuICAgICAgICAgICAgICAgIGNvdW50IC1cclxuICAgICAgICAgICAgICAgIChub3RGb3VuZEluZGV4ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgPyBub3RGb3VuZEluZGV4ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgobm90Rm91bmRJbmRleCkgPT4gbm90Rm91bmRJbmRleCA8IGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIDogMCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1cGRhdGVkSW5kZXhlcztcclxufTtcblxuY29uc3QgcmVtb3ZlQXQgPSAoZGF0YSwgaW5kZXgpID0+IFtcclxuICAgIC4uLmRhdGEuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgLi4uZGF0YS5zbGljZShpbmRleCArIDEpLFxyXG5dO1xyXG5mdW5jdGlvbiByZW1vdmVBdEluZGV4ZXMoZGF0YSwgaW5kZXgpIHtcclxuICAgIGxldCBrID0gLTE7XHJcbiAgICB3aGlsZSAoKytrIDwgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBpZiAoaW5kZXguaW5kZXhPZihrKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhW2tdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhLmZpbHRlcihCb29sZWFuKTtcclxufVxyXG52YXIgcmVtb3ZlQXJyYXlBdCA9IChkYXRhLCBpbmRleCkgPT4gaXNVbmRlZmluZWQoaW5kZXgpXHJcbiAgICA/IFtdXHJcbiAgICA6IGlzQXJyYXkoaW5kZXgpXHJcbiAgICAgICAgPyByZW1vdmVBdEluZGV4ZXMoZGF0YSwgaW5kZXgpXHJcbiAgICAgICAgOiByZW1vdmVBdChkYXRhLCBpbmRleCk7XG5cbnZhciBtb3ZlQXJyYXlBdCA9IChkYXRhLCBmcm9tLCB0bykgPT4gaXNBcnJheShkYXRhKSA/IGRhdGEuc3BsaWNlKHRvLCAwLCBkYXRhLnNwbGljZShmcm9tLCAxKVswXSkgOiBbXTtcblxudmFyIHN3YXBBcnJheUF0ID0gKGRhdGEsIGluZGV4QSwgaW5kZXhCKSA9PiB7XHJcbiAgICBjb25zdCB0ZW1wID0gW2RhdGFbaW5kZXhCXSwgZGF0YVtpbmRleEFdXTtcclxuICAgIGRhdGFbaW5kZXhBXSA9IHRlbXBbMF07XHJcbiAgICBkYXRhW2luZGV4Ql0gPSB0ZW1wWzFdO1xyXG59O1xuXG5mdW5jdGlvbiBwcmVwZW5kKGRhdGEsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gWy4uLihpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlIHx8IG51bGxdKSwgLi4uZGF0YV07XHJcbn1cblxuZnVuY3Rpb24gaW5zZXJ0KGRhdGEsIGluZGV4LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICAuLi5kYXRhLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAuLi4oaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZSB8fCBudWxsXSksXHJcbiAgICAgICAgLi4uZGF0YS5zbGljZShpbmRleCksXHJcbiAgICBdO1xyXG59XG5cbnZhciBmaWxsRW1wdHlBcnJheSA9ICh2YWx1ZSkgPT4gaXNBcnJheSh2YWx1ZSkgPyBBcnJheSh2YWx1ZS5sZW5ndGgpLmZpbGwobnVsbCkgOiBudWxsO1xuXG5jb25zdCB1c2VGaWVsZEFycmF5ID0gKHsgY29udHJvbCwgbmFtZSwga2V5TmFtZSA9ICdpZCcsIH0pID0+IHtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgeyBpc1dhdGNoQWxsUmVmLCByZXNldEZpZWxkQXJyYXlGdW5jdGlvblJlZiwgZmllbGRBcnJheU5hbWVzUmVmLCByZVJlbmRlciwgZmllbGRzUmVmLCBnZXRWYWx1ZXMsIGRlZmF1bHRWYWx1ZXNSZWYsIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lciwgZXJyb3JzUmVmLCBkaXJ0eUZpZWxkc1JlZiwgaXNEaXJ0eVJlZiwgdG91Y2hlZEZpZWxkc1JlZiwgcmVhZEZvcm1TdGF0ZVJlZiwgd2F0Y2hGaWVsZHNSZWYsIHZhbGlkRmllbGRzUmVmLCBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZiwgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMsIHZhbGlkYXRlU2NoZW1hSXNWYWxpZCwgfSA9IGNvbnRyb2wgfHwgbWV0aG9kcy5jb250cm9sO1xyXG4gICAgY29uc3QgZ2V0RGVmYXVsdFZhbHVlcyA9ICgpID0+IFtcclxuICAgICAgICAuLi5nZXQoZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudFtnZXRGaWVsZEFycmF5UGFyZW50TmFtZShuYW1lKV1cclxuICAgICAgICAgICAgPyBmaWVsZEFycmF5RGVmYXVsdFZhbHVlcy5jdXJyZW50XHJcbiAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50LCBuYW1lLCBbXSksXHJcbiAgICBdO1xyXG4gICAgY29uc3QgbWVtb2l6ZWREZWZhdWx0VmFsdWVzID0gdXNlUmVmKGdldERlZmF1bHRWYWx1ZXMoKSk7XHJcbiAgICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZF0gPSB1c2VTdGF0ZShtYXBJZHMobWVtb2l6ZWREZWZhdWx0VmFsdWVzLmN1cnJlbnQsIGtleU5hbWUpKTtcclxuICAgIGNvbnN0IFtpc0RlbGV0ZWQsIHNldElzRGVsZXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBhbGxGaWVsZHMgPSB1c2VSZWYoZmllbGRzKTtcclxuICAgIGNvbnN0IGlzTmFtZUtleSA9IGlzS2V5KG5hbWUpO1xyXG4gICAgYWxsRmllbGRzLmN1cnJlbnQgPSBmaWVsZHM7XHJcbiAgICBpZiAoaXNOYW1lS2V5KSB7XHJcbiAgICAgICAgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudFtuYW1lXSA9IG1lbW9pemVkRGVmYXVsdFZhbHVlcy5jdXJyZW50O1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXBwZW5kVmFsdWVXaXRoS2V5ID0gKHZhbHVlcykgPT4gdmFsdWVzLm1hcCgodmFsdWUpID0+IGFwcGVuZElkKHZhbHVlLCBrZXlOYW1lKSk7XHJcbiAgICBjb25zdCBzZXRGaWVsZEFuZFZhbGlkU3RhdGUgPSAoZmllbGRzVmFsdWVzKSA9PiB7XHJcbiAgICAgICAgc2V0RmllbGQoZmllbGRzVmFsdWVzKTtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWQgJiYgdmFsaWRhdGVTY2hlbWFJc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlU2NoZW1hSXNWYWxpZCh7XHJcbiAgICAgICAgICAgICAgICBbbmFtZV06IGZpZWxkc1ZhbHVlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1vZGlmeURpcnR5RmllbGRzID0gKHsgc2hvdWxkUmVuZGVyLCBpc1JlbW92ZSwgaXNQcmVQZW5kLCBpbmRleCwgdmFsdWUgPSB7fSwgfSA9IHt9KSA9PiB7XHJcbiAgICAgICAgbGV0IHJlbmRlciA9IHNob3VsZFJlbmRlcjtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LmRpcnR5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpcnR5RmllbGRJbmRleGVzQW5kVmFsdWVzID0ge307XHJcbiAgICAgICAgICAgIGlmIChpc1ByZVBlbmQgfHwgaXNSZW1vdmUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGlydHlGaWVsZCBvZiBbLi4uZGlydHlGaWVsZHNSZWYuY3VycmVudF0uc29ydCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2hGaWVsZEFycmF5TmFtZShkaXJ0eUZpZWxkLCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkSW5kZXhlcyA9IGRpcnR5RmllbGQubWF0Y2goUkVHRVhfQVJSQVlfRklFTERfSU5ERVgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZEluZGV4ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoSW5kZXggPSArbWF0Y2hlZEluZGV4ZXNbbWF0Y2hlZEluZGV4ZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlydHlGaWVsZEluZGV4ZXNBbmRWYWx1ZXNbbWF0Y2hJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJ0eUZpZWxkSW5kZXhlc0FuZFZhbHVlc1ttYXRjaEluZGV4XS5wdXNoKGRpcnR5RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlydHlGaWVsZEluZGV4ZXNBbmRWYWx1ZXNbbWF0Y2hJbmRleF0gPSBbZGlydHlGaWVsZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlydHlGaWVsZHNSZWYuY3VycmVudC5kZWxldGUoZGlydHlGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoaW5kZXgpIHx8IGlzUHJlUGVuZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZERpcnR5RmllbGRJbmRleGVzID0gaXNVbmRlZmluZWQoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBbXVxyXG4gICAgICAgICAgICAgICAgICAgIDogZ2V0U29ydFJlbW92ZWRJdGVtcyhPYmplY3Qua2V5cyhkaXJ0eUZpZWxkSW5kZXhlc0FuZFZhbHVlcykubWFwKChpKSA9PiAraSksIGlzQXJyYXkoaW5kZXgpID8gaW5kZXggOiBbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZGlydHlGaWVsZEluZGV4ZXNBbmRWYWx1ZXMpLmZvckVhY2goKHZhbHVlcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVJbmRleCA9IGlzUHJlUGVuZCA/IDAgOiB1cGRhdGVkRGlydHlGaWVsZEluZGV4ZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkSW5kZXhlcyA9IHZhbHVlLm1hdGNoKFJFR0VYX0FSUkFZX0ZJRUxEX0lOREVYKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkSW5kZXhlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcnR5RmllbGRzUmVmLmN1cnJlbnQuYWRkKHZhbHVlLnJlcGxhY2UoL1tcXGQrXShbXltcXGQrXSspJC8sIGAke2lzUHJlUGVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICttYXRjaGVkSW5kZXhlc1ttYXRjaGVkSW5kZXhlcy5sZW5ndGggLSAxXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdXBkYXRlSW5kZXh9JDFgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzUmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoZmllbGRWYWx1ZSwgaW5kZXgpID0+IE9iamVjdC5rZXlzKGZpZWxkVmFsdWUpLmZvckVhY2goKGtleSkgPT4gZGlydHlGaWVsZHNSZWYuY3VycmVudC5hZGQoYCR7bmFtZX1bJHtpc1ByZVBlbmQgPyBpbmRleCA6IGFsbEZpZWxkcy5jdXJyZW50Lmxlbmd0aCArIGluZGV4fV0uJHtrZXl9YCkpKTtcclxuICAgICAgICAgICAgICAgIGlzRGlydHlSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVuZGVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbmRlciAmJiAhaXNXYXRjaEFsbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlc2V0RmllbGRzID0gKGZsYWdPckZpZWxkcykgPT4ge1xyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuZGlydHkpIHtcclxuICAgICAgICAgICAgaXNEaXJ0eVJlZi5jdXJyZW50ID0gaXNVbmRlZmluZWQoZmxhZ09yRmllbGRzKVxyXG4gICAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgICA6IGdldElzRmllbGRzRGlmZmVyZW50KGZsYWdPckZpZWxkcywgZGVmYXVsdFZhbHVlc1JlZi5jdXJyZW50W25hbWVdIHx8IFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmllbGRzUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKGlzTWF0Y2hGaWVsZEFycmF5TmFtZShrZXksIG5hbWUpICYmIGZpZWxkc1JlZi5jdXJyZW50W2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcihmaWVsZHNSZWYuY3VycmVudFtrZXldLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBtYXBDdXJyZW50RmllbGRzVmFsdWVXaXRoU3RhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEZpZWxkc1ZhbHVlID0gZ2V0KGdldFZhbHVlcyh7IG5lc3Q6IHRydWUgfSksIG5hbWUpO1xyXG4gICAgICAgIGlmIChpc0FycmF5KGN1cnJlbnRGaWVsZHNWYWx1ZSkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50RmllbGRzVmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFsbEZpZWxkcy5jdXJyZW50W2ldID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhbGxGaWVsZHMuY3VycmVudFtpXSksIGN1cnJlbnRGaWVsZHNWYWx1ZVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3QgYXBwZW5kID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKFtcclxuICAgICAgICAgICAgLi4uYWxsRmllbGRzLmN1cnJlbnQsXHJcbiAgICAgICAgICAgIC4uLihpc0FycmF5KHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgPyBhcHBlbmRWYWx1ZVdpdGhLZXkodmFsdWUpXHJcbiAgICAgICAgICAgICAgICA6IFthcHBlbmRJZCh2YWx1ZSwga2V5TmFtZSldKSxcclxuICAgICAgICBdKTtcclxuICAgICAgICBtb2RpZnlEaXJ0eUZpZWxkcyh7IHZhbHVlIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByZXBlbmQkMSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGxldCBzaG91bGRSZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIHNldEZpZWxkQW5kVmFsaWRTdGF0ZShwcmVwZW5kKGFsbEZpZWxkcy5jdXJyZW50LCBpc0FycmF5KHZhbHVlKSA/IGFwcGVuZFZhbHVlV2l0aEtleSh2YWx1ZSkgOiBbYXBwZW5kSWQodmFsdWUsIGtleU5hbWUpXSkpO1xyXG4gICAgICAgIGlmIChlcnJvcnNSZWYuY3VycmVudFtuYW1lXSkge1xyXG4gICAgICAgICAgICBlcnJvcnNSZWYuY3VycmVudFtuYW1lXSA9IHByZXBlbmQoZXJyb3JzUmVmLmN1cnJlbnRbbmFtZV0sIGZpbGxFbXB0eUFycmF5KHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCAmJiB0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnRbbmFtZV0pIHtcclxuICAgICAgICAgICAgdG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdID0gcHJlcGVuZCh0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnRbbmFtZV0sIGZpbGxFbXB0eUFycmF5KHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHNob3VsZFJlbmRlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vZGlmeURpcnR5RmllbGRzKHtcclxuICAgICAgICAgICAgc2hvdWxkUmVuZGVyLFxyXG4gICAgICAgICAgICBpc1ByZVBlbmQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbW92ZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBzaG91bGRSZW5kZXIgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBpc0luZGV4VW5kZWZpbmVkID0gaXNVbmRlZmluZWQoaW5kZXgpO1xyXG4gICAgICAgIGlmICghaXNJbmRleFVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBtYXBDdXJyZW50RmllbGRzVmFsdWVXaXRoU3RhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzZXRGaWVsZHMocmVtb3ZlQXJyYXlBdChnZXRGaWVsZFZhbHVlQnlOYW1lKGZpZWxkc1JlZi5jdXJyZW50LCBuYW1lKSwgaW5kZXgpKTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUocmVtb3ZlQXJyYXlBdChhbGxGaWVsZHMuY3VycmVudCwgaW5kZXgpKTtcclxuICAgICAgICBzZXRJc0RlbGV0ZWQodHJ1ZSk7XHJcbiAgICAgICAgaWYgKGVycm9yc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIGVycm9yc1JlZi5jdXJyZW50W25hbWVdID0gcmVtb3ZlQXJyYXlBdChlcnJvcnNSZWYuY3VycmVudFtuYW1lXSwgaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoIWVycm9yc1JlZi5jdXJyZW50W25hbWVdLmZpbHRlcihCb29sZWFuKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBlcnJvcnNSZWYuY3VycmVudFtuYW1lXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgJiYgdG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRvdWNoZWRGaWVsZHNSZWYuY3VycmVudFtuYW1lXSA9IHJlbW92ZUFycmF5QXQodG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdLCBpbmRleCk7XHJcbiAgICAgICAgICAgIHNob3VsZFJlbmRlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQuaXNWYWxpZCAmJiAhdmFsaWRhdGVTY2hlbWFJc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZEluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIGxldCBpc0ZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzSW5kZXhVbmRlZmluZWQgPSBpc1VuZGVmaW5lZChpbmRleCk7XHJcbiAgICAgICAgICAgIHdoaWxlIChmaWVsZEluZGV4KysgPCBmaWVsZHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0xhc3QgPSBmaWVsZEluZGV4ID09PSBmaWVsZHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudEluZGV4ID0gKGlzQXJyYXkoaW5kZXgpID8gaW5kZXggOiBbaW5kZXhdKS5pbmRleE9mKGZpZWxkSW5kZXgpID49IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50SW5kZXggfHwgaXNJbmRleFVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0ZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWVsZHNbZmllbGRJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RmllbGROYW1lID0gYCR7bmFtZX1bJHtmaWVsZEluZGV4fV0uJHtrZXl9YDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDdXJyZW50SW5kZXggfHwgaXNMYXN0IHx8IGlzSW5kZXhVbmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRGaWVsZHNSZWYuY3VycmVudC5kZWxldGUoY3VycmVudEZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQuZGVsZXRlKGN1cnJlbnRGaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNGaWVsZE5hbWUgPSBgJHtuYW1lfVske2ZpZWxkSW5kZXggLSAxfV0uJHtrZXl9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkRmllbGRzUmVmLmN1cnJlbnQuaGFzKGN1cnJlbnRGaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZEZpZWxkc1JlZi5jdXJyZW50LmFkZChwcmV2aW91c0ZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkc1dpdGhWYWxpZGF0aW9uUmVmLmN1cnJlbnQuaGFzKGN1cnJlbnRGaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNXaXRoVmFsaWRhdGlvblJlZi5jdXJyZW50LmFkZChwcmV2aW91c0ZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbW9kaWZ5RGlydHlGaWVsZHMoe1xyXG4gICAgICAgICAgICBzaG91bGRSZW5kZXIsXHJcbiAgICAgICAgICAgIGlzUmVtb3ZlOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmRleCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBpbnNlcnQkMSA9IChpbmRleCwgdmFsdWUpID0+IHtcclxuICAgICAgICBtYXBDdXJyZW50RmllbGRzVmFsdWVXaXRoU3RhdGUoKTtcclxuICAgICAgICByZXNldEZpZWxkcyhpbnNlcnQoZ2V0RmllbGRWYWx1ZUJ5TmFtZShmaWVsZHNSZWYuY3VycmVudCwgbmFtZSksIGluZGV4KSk7XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKGluc2VydChhbGxGaWVsZHMuY3VycmVudCwgaW5kZXgsIGlzQXJyYXkodmFsdWUpID8gYXBwZW5kVmFsdWVXaXRoS2V5KHZhbHVlKSA6IFthcHBlbmRJZCh2YWx1ZSwga2V5TmFtZSldKSk7XHJcbiAgICAgICAgaWYgKGVycm9yc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIGVycm9yc1JlZi5jdXJyZW50W25hbWVdID0gaW5zZXJ0KGVycm9yc1JlZi5jdXJyZW50W25hbWVdLCBpbmRleCwgZmlsbEVtcHR5QXJyYXkodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlYWRGb3JtU3RhdGVSZWYuY3VycmVudC50b3VjaGVkICYmIHRvdWNoZWRGaWVsZHNSZWYuY3VycmVudFtuYW1lXSkge1xyXG4gICAgICAgICAgICB0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnRbbmFtZV0gPSBpbnNlcnQodG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdLCBpbmRleCwgZmlsbEVtcHR5QXJyYXkodmFsdWUpKTtcclxuICAgICAgICAgICAgcmVSZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3dhcCA9IChpbmRleEEsIGluZGV4QikgPT4ge1xyXG4gICAgICAgIG1hcEN1cnJlbnRGaWVsZHNWYWx1ZVdpdGhTdGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWVzID0gZ2V0RmllbGRWYWx1ZUJ5TmFtZShmaWVsZHNSZWYuY3VycmVudCwgbmFtZSk7XHJcbiAgICAgICAgc3dhcEFycmF5QXQoZmllbGRWYWx1ZXMsIGluZGV4QSwgaW5kZXhCKTtcclxuICAgICAgICByZXNldEZpZWxkcyhmaWVsZFZhbHVlcyk7XHJcbiAgICAgICAgc3dhcEFycmF5QXQoYWxsRmllbGRzLmN1cnJlbnQsIGluZGV4QSwgaW5kZXhCKTtcclxuICAgICAgICBzZXRGaWVsZEFuZFZhbGlkU3RhdGUoWy4uLmFsbEZpZWxkcy5jdXJyZW50XSk7XHJcbiAgICAgICAgaWYgKGVycm9yc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIHN3YXBBcnJheUF0KGVycm9yc1JlZi5jdXJyZW50W25hbWVdLCBpbmRleEEsIGluZGV4Qik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCAmJiB0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnRbbmFtZV0pIHtcclxuICAgICAgICAgICAgc3dhcEFycmF5QXQodG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdLCBpbmRleEEsIGluZGV4Qik7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IG1vdmUgPSAoZnJvbSwgdG8pID0+IHtcclxuICAgICAgICBtYXBDdXJyZW50RmllbGRzVmFsdWVXaXRoU3RhdGUoKTtcclxuICAgICAgICBjb25zdCBmaWVsZFZhbHVlcyA9IGdldEZpZWxkVmFsdWVCeU5hbWUoZmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpO1xyXG4gICAgICAgIG1vdmVBcnJheUF0KGZpZWxkVmFsdWVzLCBmcm9tLCB0byk7XHJcbiAgICAgICAgcmVzZXRGaWVsZHMoZmllbGRWYWx1ZXMpO1xyXG4gICAgICAgIG1vdmVBcnJheUF0KGFsbEZpZWxkcy5jdXJyZW50LCBmcm9tLCB0byk7XHJcbiAgICAgICAgc2V0RmllbGRBbmRWYWxpZFN0YXRlKFsuLi5hbGxGaWVsZHMuY3VycmVudF0pO1xyXG4gICAgICAgIGlmIChlcnJvcnNSZWYuY3VycmVudFtuYW1lXSkge1xyXG4gICAgICAgICAgICBtb3ZlQXJyYXlBdChlcnJvcnNSZWYuY3VycmVudFtuYW1lXSwgZnJvbSwgdG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVhZEZvcm1TdGF0ZVJlZi5jdXJyZW50LnRvdWNoZWQgJiYgdG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50W25hbWVdKSB7XHJcbiAgICAgICAgICAgIG1vdmVBcnJheUF0KHRvdWNoZWRGaWVsZHNSZWYuY3VycmVudFtuYW1lXSwgZnJvbSwgdG8pO1xyXG4gICAgICAgICAgICByZVJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcclxuICAgICAgICByZXNldEZpZWxkcygpO1xyXG4gICAgICAgIG1lbW9pemVkRGVmYXVsdFZhbHVlcy5jdXJyZW50ID0gZ2V0RGVmYXVsdFZhbHVlcygpO1xyXG4gICAgICAgIHNldEZpZWxkKG1hcElkcyhtZW1vaXplZERlZmF1bHRWYWx1ZXMuY3VycmVudCwga2V5TmFtZSkpO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzTmFtZUtleSAmJlxyXG4gICAgICAgICAgICBpc0RlbGV0ZWQgJiZcclxuICAgICAgICAgICAgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudFtuYW1lXSAmJlxyXG4gICAgICAgICAgICBmaWVsZHMubGVuZ3RoIDwgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudFtuYW1lXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZmllbGRBcnJheURlZmF1bHRWYWx1ZXMuY3VycmVudFtuYW1lXS5wb3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZmllbGRzLCBuYW1lLCBmaWVsZEFycmF5RGVmYXVsdFZhbHVlcywgaXNEZWxldGVkLCBpc05hbWVLZXldKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzV2F0Y2hBbGxSZWYgJiYgaXNXYXRjaEFsbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdhdGNoRmllbGRzUmVmKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgd2F0Y2hGaWVsZCBvZiB3YXRjaEZpZWxkc1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2F0Y2hGaWVsZC5zdGFydHNXaXRoKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVSZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtmaWVsZHMsIG5hbWUsIHJlUmVuZGVyLCB3YXRjaEZpZWxkc1JlZiwgaXNXYXRjaEFsbFJlZl0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNldEZ1bmN0aW9ucyA9IHJlc2V0RmllbGRBcnJheUZ1bmN0aW9uUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgY29uc3QgZmllbGRBcnJheU5hbWVzID0gZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQ7XHJcbiAgICAgICAgZmllbGRBcnJheU5hbWVzLmFkZChuYW1lKTtcclxuICAgICAgICByZXNldEZ1bmN0aW9uc1tuYW1lXSA9IHJlc2V0O1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc2V0RmllbGRzKCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSByZXNldEZ1bmN0aW9uc1tuYW1lXTtcclxuICAgICAgICAgICAgZmllbGRBcnJheU5hbWVzLmRlbGV0ZShuYW1lKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3dhcDogdXNlQ2FsbGJhY2soc3dhcCwgW25hbWVdKSxcclxuICAgICAgICBtb3ZlOiB1c2VDYWxsYmFjayhtb3ZlLCBbbmFtZV0pLFxyXG4gICAgICAgIHByZXBlbmQ6IHVzZUNhbGxiYWNrKHByZXBlbmQkMSwgW25hbWVdKSxcclxuICAgICAgICBhcHBlbmQ6IHVzZUNhbGxiYWNrKGFwcGVuZCwgW25hbWVdKSxcclxuICAgICAgICByZW1vdmU6IHVzZUNhbGxiYWNrKHJlbW92ZSwgW2ZpZWxkcywgbmFtZV0pLFxyXG4gICAgICAgIGluc2VydDogdXNlQ2FsbGJhY2soaW5zZXJ0JDEsIFtuYW1lXSksXHJcbiAgICAgICAgZmllbGRzLFxyXG4gICAgfTtcclxufTtcblxudmFyIGdldElucHV0VmFsdWUgPSAoZXZlbnQsIGlzQ2hlY2tib3hJbnB1dCkgPT4gaXNQcmltaXRpdmUoZXZlbnQpIHx8XHJcbiAgICAhaXNPYmplY3QoZXZlbnQudGFyZ2V0KSB8fFxyXG4gICAgKGlzT2JqZWN0KGV2ZW50LnRhcmdldCkgJiYgIWV2ZW50LnR5cGUpXHJcbiAgICA/IGV2ZW50XHJcbiAgICA6IGlzQ2hlY2tib3hJbnB1dCB8fCBpc1VuZGVmaW5lZChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgPyBldmVudC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgIDogZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG5jb25zdCBDb250cm9sbGVyID0gKF9hKSA9PiB7XHJcbiAgICB2YXIgeyBuYW1lLCBydWxlcywgYXM6IElubmVyQ29tcG9uZW50LCBvbkJsdXIsIG9uQ2hhbmdlLCBvbkNoYW5nZU5hbWUgPSBWQUxJREFUSU9OX01PREUub25DaGFuZ2UsIG9uQmx1ck5hbWUgPSBWQUxJREFUSU9OX01PREUub25CbHVyLCB2YWx1ZU5hbWUsIGRlZmF1bHRWYWx1ZSwgY29udHJvbCwgb25Gb2N1cyB9ID0gX2EsIHJlc3QgPSBfX3Jlc3QoX2EsIFtcIm5hbWVcIiwgXCJydWxlc1wiLCBcImFzXCIsIFwib25CbHVyXCIsIFwib25DaGFuZ2VcIiwgXCJvbkNoYW5nZU5hbWVcIiwgXCJvbkJsdXJOYW1lXCIsIFwidmFsdWVOYW1lXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiY29udHJvbFwiLCBcIm9uRm9jdXNcIl0pO1xyXG4gICAgY29uc3QgbWV0aG9kcyA9IHVzZUZvcm1Db250ZXh0KCk7XHJcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZXNSZWYsIHNldFZhbHVlLCByZWdpc3RlciwgdW5yZWdpc3RlciwgZXJyb3JzUmVmLCByZW1vdmVGaWVsZEV2ZW50TGlzdGVuZXIsIHRyaWdnZXJWYWxpZGF0aW9uLCBtb2RlOiB7IGlzT25TdWJtaXQsIGlzT25CbHVyLCBpc09uQ2hhbmdlIH0sIHJlVmFsaWRhdGVNb2RlOiB7IGlzUmVWYWxpZGF0ZU9uQmx1ciwgaXNSZVZhbGlkYXRlT25TdWJtaXQgfSwgZm9ybVN0YXRlOiB7IGlzU3VibWl0dGVkIH0sIHRvdWNoZWRGaWVsZHNSZWYsIHJlYWRGb3JtU3RhdGVSZWYsIHJlUmVuZGVyLCBmaWVsZHNSZWYsIGZpZWxkQXJyYXlOYW1lc1JlZiwgfSA9IGNvbnRyb2wgfHwgbWV0aG9kcy5jb250cm9sO1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRJbnB1dFN0YXRlVmFsdWVdID0gdXNlU3RhdGUoaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgID8gZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSlcclxuICAgICAgICA6IGRlZmF1bHRWYWx1ZSk7XHJcbiAgICBjb25zdCB2YWx1ZVJlZiA9IHVzZVJlZih2YWx1ZSk7XHJcbiAgICBjb25zdCBpc0NoZWNrYm94SW5wdXQgPSBpc0Jvb2xlYW4odmFsdWUpO1xyXG4gICAgY29uc3Qgc2hvdWxkUmVWYWxpZGF0ZU9uQmx1ciA9IGlzT25CbHVyIHx8IGlzUmVWYWxpZGF0ZU9uQmx1cjtcclxuICAgIGNvbnN0IHJ1bGVzUmVmID0gdXNlUmVmKHJ1bGVzKTtcclxuICAgIGNvbnN0IG9uRm9jdXNSZWYgPSB1c2VSZWYob25Gb2N1cyk7XHJcbiAgICBjb25zdCBpc05vdEZpZWxkQXJyYXkgPSAhaXNOYW1lSW5GaWVsZEFycmF5KGZpZWxkQXJyYXlOYW1lc1JlZi5jdXJyZW50LCBuYW1lKTtcclxuICAgIHJ1bGVzUmVmLmN1cnJlbnQgPSBydWxlcztcclxuICAgIGNvbnN0IHNob3VsZFZhbGlkYXRlID0gKCkgPT4gIXNraXBWYWxpZGF0aW9uKHtcclxuICAgICAgICBoYXNFcnJvcjogISFnZXQoZXJyb3JzUmVmLmN1cnJlbnQsIG5hbWUpLFxyXG4gICAgICAgIGlzT25CbHVyLFxyXG4gICAgICAgIGlzT25TdWJtaXQsXHJcbiAgICAgICAgaXNPbkNoYW5nZSxcclxuICAgICAgICBpc1JlVmFsaWRhdGVPbkJsdXIsXHJcbiAgICAgICAgaXNSZVZhbGlkYXRlT25TdWJtaXQsXHJcbiAgICAgICAgaXNTdWJtaXR0ZWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbW1vblRhc2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZ2V0SW5wdXRWYWx1ZShldmVudCwgaXNDaGVja2JveElucHV0KTtcclxuICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgdmFsdWVSZWYuY3VycmVudCA9IGRhdGE7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZXZlbnRXcmFwcGVyID0gKGV2ZW50KSA9PiAoLi4uYXJnKSA9PiBzZXRWYWx1ZShuYW1lLCBjb21tb25UYXNrKGV2ZW50KGFyZykpLCBzaG91bGRWYWxpZGF0ZSgpKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBjb21tb25UYXNrKGV2ZW50KTtcclxuICAgICAgICBzZXRWYWx1ZShuYW1lLCBkYXRhLCBzaG91bGRWYWxpZGF0ZSgpKTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZWdpc3RlckZpZWxkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICghaXNOb3RGaWVsZEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUZpZWxkRXZlbnRMaXN0ZW5lcihmaWVsZHNSZWYuY3VycmVudFtuYW1lXSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZ2lzdGVyKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7IG5hbWUsIGZvY3VzOiBvbkZvY3VzUmVmLmN1cnJlbnQgfSwgVkFMVUUsIHtcclxuICAgICAgICAgICAgc2V0KGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNldElucHV0U3RhdGVWYWx1ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlUmVmLmN1cnJlbnQgPSBkYXRhO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVSZWYuY3VycmVudDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSwgcnVsZXNSZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXHJcbiAgICAgICAgaXNOb3RGaWVsZEFycmF5LFxyXG4gICAgICAgIGZpZWxkc1JlZixcclxuICAgICAgICBydWxlc1JlZixcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIG9uRm9jdXNSZWYsXHJcbiAgICAgICAgcmVnaXN0ZXIsXHJcbiAgICAgICAgcmVtb3ZlRmllbGRFdmVudExpc3RlbmVyLFxyXG4gICAgXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4gKCkgPT4ge1xyXG4gICAgICAgICFpc05hbWVJbkZpZWxkQXJyYXkoZmllbGRBcnJheU5hbWVzUmVmLmN1cnJlbnQsIG5hbWUpICYmIHVucmVnaXN0ZXIobmFtZSk7XHJcbiAgICB9LCBbdW5yZWdpc3RlciwgbmFtZSwgZmllbGRBcnJheU5hbWVzUmVmXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHJlZ2lzdGVyRmllbGQoKTtcclxuICAgIH0sIFtyZWdpc3RlckZpZWxkXSk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZmllbGRzUmVmLmN1cnJlbnRbbmFtZV0pIHtcclxuICAgICAgICAgICAgcmVnaXN0ZXJGaWVsZCgpO1xyXG4gICAgICAgICAgICBpZiAoaXNOb3RGaWVsZEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJbnB1dFN0YXRlVmFsdWUoaXNVbmRlZmluZWQoZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgID8gZ2V0KGRlZmF1bHRWYWx1ZXNSZWYuY3VycmVudCwgbmFtZSlcclxuICAgICAgICAgICAgICAgICAgICA6IGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7IG5hbWUgfSwgcmVzdCksIChvbkNoYW5nZVxyXG4gICAgICAgID8geyBbb25DaGFuZ2VOYW1lXTogZXZlbnRXcmFwcGVyKG9uQ2hhbmdlKSB9XHJcbiAgICAgICAgOiB7IFtvbkNoYW5nZU5hbWVdOiBoYW5kbGVDaGFuZ2UgfSkpLCB7IFtvbkJsdXJOYW1lXTogKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9uQmx1cikge1xyXG4gICAgICAgICAgICAgICAgb25CbHVyKGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZWFkRm9ybVN0YXRlUmVmLmN1cnJlbnQudG91Y2hlZCAmJlxyXG4gICAgICAgICAgICAgICAgIWdldCh0b3VjaGVkRmllbGRzUmVmLmN1cnJlbnQsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXQodG91Y2hlZEZpZWxkc1JlZi5jdXJyZW50LCBuYW1lLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJlUmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3VsZFJlVmFsaWRhdGVPbkJsdXIpIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJWYWxpZGF0aW9uKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB9KSwgeyBbdmFsdWVOYW1lIHx8IChpc0NoZWNrYm94SW5wdXQgPyAnY2hlY2tlZCcgOiBWQUxVRSldOiB2YWx1ZSB9KTtcclxuICAgIHJldHVybiBpc1ZhbGlkRWxlbWVudChJbm5lckNvbXBvbmVudClcclxuICAgICAgICA/IGNsb25lRWxlbWVudChJbm5lckNvbXBvbmVudCwgcHJvcHMpXHJcbiAgICAgICAgOiBjcmVhdGVFbGVtZW50KElubmVyQ29tcG9uZW50LCBwcm9wcyk7XHJcbn07XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9IChfYSkgPT4ge1xyXG4gICAgdmFyIHsgYXM6IElubmVyQ29tcG9uZW50LCBlcnJvcnMsIG5hbWUsIG1lc3NhZ2UsIGNoaWxkcmVuIH0gPSBfYSwgcmVzdCA9IF9fcmVzdChfYSwgW1wiYXNcIiwgXCJlcnJvcnNcIiwgXCJuYW1lXCIsIFwibWVzc2FnZVwiLCBcImNoaWxkcmVuXCJdKTtcclxuICAgIGNvbnN0IG1ldGhvZHMgPSB1c2VGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgZXJyb3IgPSBnZXQoZXJyb3JzIHx8IG1ldGhvZHMuZXJyb3JzLCBuYW1lKTtcclxuICAgIGlmICghZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgbWVzc2FnZTogbWVzc2FnZUZyb21SZWdpc3RlciwgdHlwZXMgfSA9IGVycm9yO1xyXG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIChJbm5lckNvbXBvbmVudCA/IHJlc3QgOiB7fSkpLCB7IGNoaWxkcmVuOiBjaGlsZHJlblxyXG4gICAgICAgICAgICA/IGNoaWxkcmVuKHsgbWVzc2FnZTogbWVzc2FnZUZyb21SZWdpc3RlciB8fCBtZXNzYWdlLCBtZXNzYWdlczogdHlwZXMgfSlcclxuICAgICAgICAgICAgOiBtZXNzYWdlRnJvbVJlZ2lzdGVyIHx8IG1lc3NhZ2UgfSk7XHJcbiAgICByZXR1cm4gSW5uZXJDb21wb25lbnQgPyAoaXNWYWxpZEVsZW1lbnQoSW5uZXJDb21wb25lbnQpID8gKGNsb25lRWxlbWVudChJbm5lckNvbXBvbmVudCwgcHJvcHMpKSA6IChjcmVhdGVFbGVtZW50KElubmVyQ29tcG9uZW50LCBwcm9wcykpKSA6IChjcmVhdGVFbGVtZW50KEZyYWdtZW50LCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcykpKTtcclxufTtcblxuZXhwb3J0IHsgQ29udHJvbGxlciwgRXJyb3JNZXNzYWdlLCBGb3JtQ29udGV4dCwgdXNlRmllbGRBcnJheSwgdXNlRm9ybSwgdXNlRm9ybUNvbnRleHQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
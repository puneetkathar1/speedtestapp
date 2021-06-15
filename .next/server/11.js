exports.ids = [11];
exports.modules = {

/***/ "./components/UI/ImageUploader/ImageUploader.js":
/*!******************************************************!*\
  !*** ./components/UI/ImageUploader/ImageUploader.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageUploader; });
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal */ "antd/lib/modal");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/upload */ "antd/lib/upload");
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imageUploader_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imageUploader.style */ "./components/UI/ImageUploader/imageUploader.style.js");


var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\components\\UI\\ImageUploader\\ImageUploader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ImageUploader extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }]
    });

    _defineProperty(this, "handleCancel", () => this.setState({
      previewVisible: false
    }));

    _defineProperty(this, "handlePreview", file => {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      });
    });

    _defineProperty(this, "handleChange", ({
      fileList
    }) => this.setState({
      fileList
    }));
  }

  render() {
    const {
      previewVisible,
      previewImage,
      fileList
    } = this.state;
    const Dragger = antd_lib_upload__WEBPACK_IMPORTED_MODULE_1___default.a.Dragger;

    const uploadButton = __jsx(_imageUploader_style__WEBPACK_IMPORTED_MODULE_4__["ImageUpload"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "image-drag-area",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCamera"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "ant-upload-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, "Upload Photos"));

    return __jsx("div", {
      className: "clearfix",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, __jsx(Dragger, {
      action: "//jsonplaceholder.typicode.com/posts/",
      listType: "picture-card",
      fileList: fileList,
      onPreview: this.handlePreview,
      onChange: this.handleChange,
      className: "image_uploader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, fileList.length >= 4 ? null : uploadButton), __jsx(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a, {
      visible: previewVisible,
      footer: null,
      onCancel: this.handleCancel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx("img", {
      alt: "example",
      style: {
        width: '100%'
      },
      src: previewImage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    })));
  }

}

/***/ }),

/***/ "./components/UI/ImageUploader/imageUploader.style.js":
/*!************************************************************!*\
  !*** ./components/UI/ImageUploader/imageUploader.style.js ***!
  \************************************************************/
/*! exports provided: ImageUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUpload", function() { return ImageUpload; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ImageUpload = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "imageUploaderstyle__ImageUpload",
  componentId: "o3v02w-0"
})(["display:flex;align-items:center;.image-drag-area{width:125px;height:125px;border:1px dashed #e6e6e6;border-radius:3px;font-size:38px;color:#e6e6e6;display:flex;align-items:center;justify-content:center;}.ant-upload-text{font-size:15px;font-weight:700;color:#fff;background-color:#008489;border-radius:3px;padding:8px 15px;margin-left:30px;}"]);

/***/ }),

/***/ "./container/Agent/AccountSettings/AgentPictureChangeForm.js":
/*!*******************************************************************!*\
  !*** ./container/Agent/AccountSettings/AgentPictureChangeForm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AgentPictureChangeForm; });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/Heading/Heading */ "./components/UI/Heading/Heading.js");
/* harmony import */ var components_UI_ImageUploader_ImageUploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/ImageUploader/ImageUploader */ "./components/UI/ImageUploader/ImageUploader.js");
/* harmony import */ var _AccountSettings_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccountSettings.style */ "./container/Agent/AccountSettings/AccountSettings.style.js");

var _jsxFileName = "C:\\Users\\Puneet\\Documents\\trip-main\\container\\Agent\\AccountSettings\\AgentPictureChangeForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function AgentPictureChangeForm() {
  return __jsx(_AccountSettings_style__WEBPACK_IMPORTED_MODULE_4__["AgentPictureUploader"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_AccountSettings_style__WEBPACK_IMPORTED_MODULE_4__["FormTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Profile Images"), __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: "Cover Image",
    as: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(components_UI_ImageUploader_ImageUploader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(components_UI_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: "Profile Image",
    as: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(components_UI_ImageUploader_ImageUploader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "submit-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    htmlType: "submit",
    type: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Save Changes")));
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0ltYWdlVXBsb2FkZXIvSW1hZ2VVcGxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL0ltYWdlVXBsb2FkZXIvaW1hZ2VVcGxvYWRlci5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvQWdlbnQvQWNjb3VudFNldHRpbmdzL0FnZW50UGljdHVyZUNoYW5nZUZvcm0uanMiXSwibmFtZXMiOlsiSW1hZ2VVcGxvYWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJldmlld1Zpc2libGUiLCJwcmV2aWV3SW1hZ2UiLCJmaWxlTGlzdCIsInVpZCIsIm5hbWUiLCJzdGF0dXMiLCJ1cmwiLCJzZXRTdGF0ZSIsImZpbGUiLCJ0aHVtYlVybCIsInJlbmRlciIsInN0YXRlIiwiRHJhZ2dlciIsInVwbG9hZEJ1dHRvbiIsImhhbmRsZVByZXZpZXciLCJoYW5kbGVDaGFuZ2UiLCJsZW5ndGgiLCJoYW5kbGVDYW5jZWwiLCJ3aWR0aCIsIkltYWdlVXBsb2FkIiwic3R5bGVkIiwiZGl2IiwiQWdlbnRQaWN0dXJlQ2hhbmdlRm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxNQUFNQSxhQUFOLFNBQTRCQyw0Q0FBSyxDQUFDQyxTQUFsQyxDQUE0QztBQUFBO0FBQUE7O0FBQUEsbUNBQ2pEO0FBQ05DLG9CQUFjLEVBQUUsS0FEVjtBQUVOQyxrQkFBWSxFQUFFLEVBRlI7QUFHTkMsY0FBUSxFQUFFLENBQ1I7QUFDRUMsV0FBRyxFQUFFLElBRFA7QUFFRUMsWUFBSSxFQUFFLFNBRlI7QUFHRUMsY0FBTSxFQUFFLE1BSFY7QUFJRUMsV0FBRyxFQUNEO0FBTEosT0FEUTtBQUhKLEtBRGlEOztBQUFBLDBDQWUxQyxNQUFNLEtBQUtDLFFBQUwsQ0FBYztBQUFFUCxvQkFBYyxFQUFFO0FBQWxCLEtBQWQsQ0Fmb0M7O0FBQUEsMkNBaUJ4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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsWUFBUSxFQUFDLFFBQWpCO0FBQTBCLFFBQUksRUFBQyxTQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBUEYsQ0FERjtBQWVELEMiLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFDYW1lcmEgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBVcGxvYWQsIE1vZGFsIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBJbWFnZVVwbG9hZCB9IGZyb20gJy4vaW1hZ2VVcGxvYWRlci5zdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlVXBsb2FkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwcmV2aWV3VmlzaWJsZTogZmFsc2UsXG4gICAgcHJldmlld0ltYWdlOiAnJyxcbiAgICBmaWxlTGlzdDogW1xuICAgICAge1xuICAgICAgICB1aWQ6ICctMScsXG4gICAgICAgIG5hbWU6ICd4eHgucG5nJyxcbiAgICAgICAgc3RhdHVzOiAnZG9uZScsXG4gICAgICAgIHVybDpcbiAgICAgICAgICAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgaGFuZGxlQ2FuY2VsID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHByZXZpZXdWaXNpYmxlOiBmYWxzZSB9KTtcblxuICBoYW5kbGVQcmV2aWV3ID0gKGZpbGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpZXdJbWFnZTogZmlsZS51cmwgfHwgZmlsZS50aHVtYlVybCxcbiAgICAgIHByZXZpZXdWaXNpYmxlOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9ICh7IGZpbGVMaXN0IH0pID0+IHRoaXMuc2V0U3RhdGUoeyBmaWxlTGlzdCB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcmV2aWV3VmlzaWJsZSwgcHJldmlld0ltYWdlLCBmaWxlTGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBEcmFnZ2VyID0gVXBsb2FkLkRyYWdnZXI7XG5cbiAgICBjb25zdCB1cGxvYWRCdXR0b24gPSAoXG4gICAgICA8SW1hZ2VVcGxvYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtZHJhZy1hcmVhXCI+XG4gICAgICAgICAgPEZhQ2FtZXJhIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFudC11cGxvYWQtdGV4dFwiPlVwbG9hZCBQaG90b3M8L2Rpdj5cbiAgICAgIDwvSW1hZ2VVcGxvYWQ+XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICA8RHJhZ2dlclxuICAgICAgICAgIGFjdGlvbj1cIi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9cIlxuICAgICAgICAgIGxpc3RUeXBlPVwicGljdHVyZS1jYXJkXCJcbiAgICAgICAgICBmaWxlTGlzdD17ZmlsZUxpc3R9XG4gICAgICAgICAgb25QcmV2aWV3PXt0aGlzLmhhbmRsZVByZXZpZXd9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlX3VwbG9hZGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtmaWxlTGlzdC5sZW5ndGggPj0gNCA/IG51bGwgOiB1cGxvYWRCdXR0b259XG4gICAgICAgIDwvRHJhZ2dlcj5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgdmlzaWJsZT17cHJldmlld1Zpc2libGV9XG4gICAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNhbmNlbH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbWcgYWx0PVwiZXhhbXBsZVwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gc3JjPXtwcmV2aWV3SW1hZ2V9IC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEltYWdlVXBsb2FkID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmltYWdlLWRyYWctYXJlYSB7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIGhlaWdodDogMTI1cHg7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNlNmU2ZTY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICBjb2xvcjogI2U2ZTZlNjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmFudC11cGxvYWQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODQ4OTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgSGVhZGluZyBmcm9tICdjb21wb25lbnRzL1VJL0hlYWRpbmcvSGVhZGluZyc7XG5pbXBvcnQgSW1hZ2VVcGxvYWRlciBmcm9tICdjb21wb25lbnRzL1VJL0ltYWdlVXBsb2FkZXIvSW1hZ2VVcGxvYWRlcic7XG5pbXBvcnQgeyBBZ2VudFBpY3R1cmVVcGxvYWRlciwgRm9ybVRpdGxlIH0gZnJvbSAnLi9BY2NvdW50U2V0dGluZ3Muc3R5bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZ2VudFBpY3R1cmVDaGFuZ2VGb3JtKCkge1xuICByZXR1cm4gKFxuICAgIDxBZ2VudFBpY3R1cmVVcGxvYWRlcj5cbiAgICAgIDxGb3JtVGl0bGU+UHJvZmlsZSBJbWFnZXM8L0Zvcm1UaXRsZT5cbiAgICAgIDxIZWFkaW5nIGNvbnRlbnQ9XCJDb3ZlciBJbWFnZVwiIGFzPVwiaDRcIiAvPlxuICAgICAgPEltYWdlVXBsb2FkZXIgLz5cbiAgICAgIDxIZWFkaW5nIGNvbnRlbnQ9XCJQcm9maWxlIEltYWdlXCIgYXM9XCJoNFwiIC8+XG4gICAgICA8SW1hZ2VVcGxvYWRlciAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1jb250YWluZXJcIj5cbiAgICAgICAgPEJ1dHRvbiBodG1sVHlwZT1cInN1Ym1pdFwiIHR5cGU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9BZ2VudFBpY3R1cmVVcGxvYWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
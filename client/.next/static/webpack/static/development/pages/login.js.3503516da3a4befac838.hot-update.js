webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Input */ "./components/Input.tsx");


var _jsxFileName = "/app/pages/login.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    mutation($email: String!, $password: String!) {\n        login(email: $email, password: $password)\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/** @jsx jsx */






_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"];
var userDetailsCard =  false ? undefined : {
  name: "ftfgex-userDetailsCard",
  styles: "margin:auto;width:480px;box-shadow:10px 10px 36px -2px rgba(0,0,0,0.25);border-radius:5px 5px 5px 5px;padding:50px 50px 50px 75px;;label:userDetailsCard;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9hcHAvcGFnZXMvbG9naW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVcyQiIsImZpbGUiOiIvYXBwL3BhZ2VzL2xvZ2luLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3gsIGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL0lucHV0XCI7XG5qc3g7XG5cblxuY29uc3QgdXNlckRldGFpbHNDYXJkID0gY3NzYFxuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNDgwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDM2cHggLTJweCByZ2JhKDAsMCwwLDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHggNTBweCA3NXB4O1xuYDtcblxuY29uc3QgTE9HSU5fVVNFUiA9IGdxbGBcbiAgICBtdXRhdGlvbigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xuICAgICAgICBsb2dpbihlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKVxuICAgIH1cbmA7XG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICAgIGNvbnN0IFsgbG9naW5Vc2VyLCB7IGRhdGEgfSBdID0gdXNlTXV0YXRpb24oTE9HSU5fVVNFUik7XG4gICAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xuICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25TdWJtaXQ6ICh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICAgICAgICAgIGxvZ2luVXNlcih7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY3NzPXt1c2VyRGV0YWlsc0NhcmR9PlxuICAgICAgICAgICAgPGgxPkxvZ2luIFVzZXI8L2gxPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var LOGIN_USER = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

var Login = function Login() {
  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(LOGIN_USER),
      _useMutation2 = _babel_runtime_corejs2_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useMutation, 2),
      loginUser = _useMutation2[0],
      data = _useMutation2[1].data;

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_4__["useFormik"])({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: function onSubmit(_ref) {
      var email = _ref.email,
          password = _ref.password;
      console.log({
        email: email,
        password: password
      });
      loginUser({
        variables: {
          email: email,
          password: password
        }
      }).then(function (res) {
        console.log(res);
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/");
      })["catch"](function (error) {
        return console.error(error);
      });
    }
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    css: userDetailsCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Login User"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("form", {
    className: "form",
    onSubmit: formik.handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Email",
    required: true,
    name: "email",
    id: "email",
    type: "email",
    onChange: formik.handleChange,
    value: formik.values.email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    required: true,
    label: "Password",
    name: "password",
    id: "password",
    type: "password",
    onChange: formik.handleChange,
    value: formik.values.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Login")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.3503516da3a4befac838.hot-update.js.map
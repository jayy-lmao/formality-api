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
/* harmony import */ var _styles_userDetailsCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/userDetailsCard */ "./styles/userDetailsCard.tsx");
/* harmony import */ var _styles_buttonStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/buttonStyle */ "./styles/buttonStyle.tsx");


var _jsxFileName = "/app/pages/login.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = _babel_runtime_corejs2_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1___default()(["\n    mutation($email: String!, $password: String!) {\n        login(email: $email, password: $password)\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */








_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"];
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
    css: _styles_userDetailsCard__WEBPACK_IMPORTED_MODULE_9__["userDetailsCard"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Login User"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("form", {
    className: "form",
    onSubmit: formik.handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
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
      lineNumber: 46
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
    required: true,
    label: "Password",
    name: "password",
    id: "password",
    type: "password",
    onChange: formik.handleChange,
    value: formik.values.password // error="Must be more than 5 characters long"
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
    css: _styles_buttonStyle__WEBPACK_IMPORTED_MODULE_10__["buttonStyle"],
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Login")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.71451924f197e0b3e0d3.hot-update.js.map
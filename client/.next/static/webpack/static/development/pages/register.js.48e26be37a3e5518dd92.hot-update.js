webpackHotUpdate("static/development/pages/register.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/promise.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-instance.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_for-of.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_invoke.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_microtask.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_new-promise-capability.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_perform.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_promise-resolve.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_redefine-all.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_set-species.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_species-constructor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_task.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_user-agent.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.object.to-string.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.promise.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.finally.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es7.promise.try.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
false,

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");


var _jsxFileName = "/app/pages/register.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    mutation($email: String!, $password: String!) {\n        createUser(data: { email: $email, password: $password }) {\n            id\n            email\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var REGISTER_USER = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject());

var Register = function Register() {
  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(REGISTER_USER),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      registerUser = _useMutation2[0],
      data = _useMutation2[1].data;

  var formik = Object(formik__WEBPACK_IMPORTED_MODULE_3__["useFormik"])({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: function onSubmit(_ref) {
      var email = _ref.email,
          password = _ref.password;
      registerUser({
        variables: {
          email: email,
          password: password
        }
      }).then(function (_ref2) {
        var createUser = _ref2.data.createUser;
        console.log(createUser);
      })["catch"](function (errorResponse) {
        // console.log({name: errorResponse.name, message: errorResponse.message})
        if (errorResponse.message.includes("duplicate key error")) {
          console.error("User Already Exists");
        }
      });
    }
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("form", {
    onSubmit: formik.handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Email address", __jsx("input", {
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
  })), __jsx("label", {
    htmlFor: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Email address", __jsx("input", {
    name: "password",
    id: "password",
    type: "password",
    onChange: formik.handleChange,
    value: formik.values.password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "SignUp")));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

})
//# sourceMappingURL=register.js.48e26be37a3e5518dd92.hot-update.js.map
webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/withData.ts":
/*!*************************!*\
  !*** ./lib/withData.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_1__);

 // import { endpoint } from '../config';

var endpoint = '/graphql';
var cache = new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"](); // const createClient = ({ headers }: { headers?: any }) => {
//   return new ApolloClient({
//     request: operation => {
//       operation.setContext({
//         fetchOptions: {
//           credentials: 'include',
//         },
//         headers,
//       });
//     },
//     uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
//     cache
//   });
// }

var createClient = function createClient(_ref) {
  var headers = _ref.headers;
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["default"]({
    request: function request(operation) {
      var token = localStorage.getItem('ACCESS_TOKEN');
      operation.setContext({
        headers: {
          authorization: token ? "Bearer ".concat(token) : ''
        }
      });
    },
    uri:  true ? endpoint : undefined,
    cache: cache
  });
};

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default()(createClient, {
  getDataFromTree: 'ssr'
}));

/***/ })

})
//# sourceMappingURL=_app.js.2a2f6151bb23ebb1f39d.hot-update.js.map
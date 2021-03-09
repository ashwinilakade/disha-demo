webpackHotUpdate("main",{

/***/ "./src/library/stores/index.ts":
/*!*************************************!*\
  !*** ./src/library/stores/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rootStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootStore */ "./src/library/stores/rootStore.ts");
/* harmony import */ var mobx_sync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-sync */ "./node_modules/mobx-sync/dist/mobx-sync.esm.js");



const trunk = new mobx_sync__WEBPACK_IMPORTED_MODULE_2__["AsyncTrunk"](_rootStore__WEBPACK_IMPORTED_MODULE_1__["default"], {
  storage: localStorage,
  storageKey: "__persist_mobx_stores__",
  delay: 1e3
});
trunk.init().then(() => {
  _rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].labStore.fetchListLab();
  _rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].bannerStore.fetchListBanner();
  _rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].deginisationStore.fetchListDeginisation();
  _rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].departmentStore.fetchListDepartment();
  _rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].roleStore.fetchListRole();
});
const Contexts = {
  rootStore: react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(_rootStore__WEBPACK_IMPORTED_MODULE_1__["default"]),
  userStore: react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(_rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].userStore),
  labStore: react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(_rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].labStore),
  deginisationStore: react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(_rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].deginisationStore),
  departmentStore: react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(_rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].departmentStore),
  roleStore: react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(_rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].roleStore),
  bannerStore: react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(_rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].bannerStore),
  categoryStore: react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(_rootStore__WEBPACK_IMPORTED_MODULE_1__["default"].categoryStore)
};
/* harmony default export */ __webpack_exports__["default"] = (Contexts);

/***/ })

})
//# sourceMappingURL=main.d21cbce3f2840decd420.hot-update.js.map
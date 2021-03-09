(this["webpackJsonpdailyfruit"] = this["webpackJsonpdailyfruit"] || []).push([[4],{

/***/ "./src/features/product/scenes/product.tsx":
/*!*************************************************!*\
  !*** ./src/features/product/scenes/product.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _df_library_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @df/library/components */ "./src/library/components/index.ts");
/* harmony import */ var _df_library_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @df/library/models */ "./src/library/models/index.ts");
/* harmony import */ var _df_library_stores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @df/library/stores */ "./src/library/stores/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services */ "./src/features/product/services/index.ts");
var _jsxFileName = "/Users/appasaheb4/Documents/dailyfruits_admin/src/features/product/scenes/product.tsx";






const product = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(() => {
  var _rootStore$productSto, _rootStore$productSto2, _rootStore$productSto3;

  const rootStore = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_df_library_stores__WEBPACK_IMPORTED_MODULE_4__["default"].rootStore);
  const [deleteItem, setDeleteItem] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["PageHeading"], {
    title: "product",
    subTitle: "Add, Edit & Delete Banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " mx-auto  p-4  flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-1 p-2 rounded-lg shadow-xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    cols: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["List"], {
    direction: "col",
    space: 4,
    justify: "stretch",
    fill: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    label: "Title",
    id: "title",
    placeholder: "Title",
    value: (_rootStore$productSto = rootStore.productStore.product) === null || _rootStore$productSto === void 0 ? void 0 : _rootStore$productSto.title,
    onChange: title => {
      rootStore.productStore.updateproduct({ ...rootStore.productStore.product,
        title
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    label: "Sales Price",
    id: "salesPrice",
    placeholder: "sales Price",
    value: (_rootStore$productSto2 = rootStore.productStore.product) === null || _rootStore$productSto2 === void 0 ? void 0 : _rootStore$productSto2.salesprice,
    onChange: salesprice => {
      rootStore.productStore.updateproduct({ ...rootStore.productStore.product,
        salesprice
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    label: "MRP Price",
    id: "MRPPrice",
    placeholder: "MRP Price",
    value: (_rootStore$productSto3 = rootStore.productStore.product) === null || _rootStore$productSto3 === void 0 ? void 0 : _rootStore$productSto3.MRPPrice,
    onChange: MRPPrice => {
      rootStore.productStore.updateproduct({ ...rootStore.productStore.product,
        MRPPrice
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["Form"].Input, {
    label: "Description",
    id: "description",
    placeholder: "Description" // value={rootStore.productStore.product?.description}
    ,
    onChange: description => {
      rootStore.productStore.updateproduct({ ...rootStore.productStore.product // description,

      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["Form"].InputFile, {
    label: "File",
    id: "file",
    placeholder: "File" // value={rootStore.productStore.product?.image}
    ,
    onChange: e => {
      const image = e.target.files[0];
      console.log({
        image
      }); // rootStore.productStore.updateproduct({
      //   ...rootStore.productStore.product,
      //   image,
      // })
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["List"], {
    direction: "row",
    space: 3,
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "medium",
    type: "solid",
    icon: _df_library_components__WEBPACK_IMPORTED_MODULE_2__["Icons"].Save,
    onClick: () => {
      rootStore.setProcessLoading(true);
      _services__WEBPACK_IMPORTED_MODULE_5__["addproduct"](rootStore.productStore.product).then(res => {
        if (res.status === _df_library_models__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].CREATED) {
          _df_library_components__WEBPACK_IMPORTED_MODULE_2__["ToastsStore"].success(`product created.`);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "medium",
    type: "outline",
    icon: _df_library_components__WEBPACK_IMPORTED_MODULE_2__["Icons"].Remove,
    onClick: () => {
      rootStore.userStore.clear();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "Clear"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "m-1 p-2 rounded-lg shadow-xl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_df_library_components__WEBPACK_IMPORTED_MODULE_2__["Modal"].ModalConfirm, Object.assign({}, deleteItem, {
    click: () => {
      _services__WEBPACK_IMPORTED_MODULE_5__["deleteproduct"](deleteItem.id).then(res => {
        console.log({
          res
        });

        if (res.status) {
          _df_library_components__WEBPACK_IMPORTED_MODULE_2__["ToastsStore"].success(`product deleted.`);
          setDeleteItem({
            show: false
          });
          rootStore.productStore.fetchListproduct();
        }
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (product);

/***/ })

}]);
//# sourceMappingURL=4.chunk.js.map
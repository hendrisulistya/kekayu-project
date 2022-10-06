"use strict";
exports.id = 233;
exports.ids = [233];
exports.modules = {

/***/ 233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(830);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__]);
components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const IconListItem = ({ icon , value , label =""  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex flex-row place-content-between place-items-center w-fit ${label == "" ? "space-x-6" : "space-x-7"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `rounded bg-light ${label == "" ? "p-2.5" : "p-5"} ${label == "" ? "text-xl" : "text-3xl"} text-white`,
                children: icon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-1",
                children: [
                    label == "" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        textStyle: "IconListLabel",
                        value: label
                    }),
                    label == "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        textStyle: "IconListValueWithoutKey",
                        value: value
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        textStyle: "IconListValue",
                        value: value
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconListItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 463;
exports.ids = [463];
exports.modules = {

/***/ 6463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_atoms_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(830);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_atoms_Text__WEBPACK_IMPORTED_MODULE_2__]);
components_atoms_Text__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const FeatureCard = ({ title , description , icon , isNaked =false  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full h-full bg-light rounded-md px-10 py-8 border-2 border-transparent hover:border-borderLight transition-all duration-300 grid gap-5`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `rounded-sm ${isNaked ? "" : "bg-light w-[50px] h-[50px] flex justify-center items-center"}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `text-white ${isNaked ? "text-5xl" : "text-2xl"}`,
                    children: icon
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        value: title,
                        textStyle: "FeatureCardTitle"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        value: description,
                        textStyle: "FeatureCardDescription"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatureCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
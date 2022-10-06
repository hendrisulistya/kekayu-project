"use strict";
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 9675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9729);
/* harmony import */ var components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(830);
/* harmony import */ var utils_randomString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8864);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__]);
components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const PricingCard = ({ title , price , features , buttonOnclick =()=>{}  })=>{
    const { 0: isHovered , 1: setIsHovered  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full h-fit bg-light rounded-[10px] px-10 py-7 flex flex-col place-content-between border-2 border-transparent hover:border-borderLight transition-all duration-300",
        onMouseOver: ()=>setIsHovered(true)
        ,
        onMouseLeave: ()=>setIsHovered(false)
        ,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row place-content-between items-start py-8 border-b border-borderLight",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        value: title,
                        textStyle: "PricingTitle"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                value: "Starting From",
                                textStyle: "PricingSubtitle"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                value: price,
                                textStyle: "PricingPrice"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center py-9",
                children: features.map((feature)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        value: feature,
                        textStyle: "PricingDetail"
                    }, (0,utils_randomString__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(64))
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                value: "Detail",
                onClick: buttonOnclick,
                color: isHovered ? "primary" : "white"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PricingCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
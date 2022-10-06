"use strict";
exports.id = 771;
exports.ids = [771];
exports.modules = {

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LazyCard = ({ bottomSquareSize ="small" , height =450  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `w-full ${height == 300 ? "h-[300px]" : height == 350 ? "h-[350px]" : height == 400 ? "h-[400px]" : height == 450 ? "h-[450px]" : ""} flex flex-col place-items-center place-content-between bg-cardDark border border-borderLight pt-[54px] rounded-md px-12 lg:px-16`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex flex-col place-items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full max-w-[160px] h-[26px] mb-3.5 rounded-full bg-[#212136]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full max-w-[96px] h-[26px] rounded-full bg-[#212136]"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `w-full ${bottomSquareSize == "small" ? "max-w-[192px]" : ""} h-7/12 rounded-tr-[20px] rounded-tl-[20px] bg-[#212136]`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LazyCard);


/***/ }),

/***/ 2771:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_atoms_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5164);
/* harmony import */ var components_atoms_LazyCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(851);
/* harmony import */ var components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(830);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__]);
components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ProjectCard = ({ title , description , bottomSquareSize ="small" , height =450  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_LazyCard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                bottomSquareSize: bottomSquareSize,
                height: height
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col place-items-center text-center mt-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-2.5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            value: title,
                            textStyle: "ProjectTitle"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-9",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            value: description,
                            textStyle: "ProjectDescription"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            value: "Detail",
                            color: "white",
                            radius: "pill",
                            style: "outline",
                            href: "/project/detail"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 763;
exports.ids = [763];
exports.modules = {

/***/ 1763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(830);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__]);
components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const BlogCard = ({ authorAvatarSrc , authorName , launchDate , lead , readTime , thumbnailSrc , title  })=>{
    const container = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { 0: imageSize , 1: setImageSize  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        width: 325,
        height: 220
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        var ref5;
        if (((ref5 = container.current) === null || ref5 === void 0 ? void 0 : ref5.clientWidth) !== undefined) {
            var ref1, ref2;
            setImageSize({
                width: (ref1 = container.current) === null || ref1 === void 0 ? void 0 : ref1.clientWidth,
                height: ((ref2 = container.current) === null || ref2 === void 0 ? void 0 : ref2.clientWidth) / 1.5
            });
        }
        window.addEventListener("resize", ()=>{
            var ref;
            if (((ref = container.current) === null || ref === void 0 ? void 0 : ref.clientWidth) !== undefined) {
                var ref3, ref4;
                setImageSize({
                    width: (ref3 = container.current) === null || ref3 === void 0 ? void 0 : ref3.clientWidth,
                    height: ((ref4 = container.current) === null || ref4 === void 0 ? void 0 : ref4.clientWidth) / 1.5
                });
            }
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full space-y-6",
        ref: container,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    width: imageSize.width,
                    height: imageSize.height,
                    src: thumbnailSrc,
                    quality: 80,
                    className: "rounded-xl",
                    alt: "Blog Thumbnail"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-2.5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        textStyle: "BlogTitle",
                        value: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        textStyle: "BlogLead",
                        value: lead
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-5",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: authorAvatarSrc,
                        width: 50,
                        height: 50,
                        alt: "Blog Author Avatar"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                textStyle: "AuthorNamePreview",
                                value: authorName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                textStyle: "BlogMeta",
                                value: `${launchDate} • ${readTime} read`
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
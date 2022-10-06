"use strict";
exports.id = 840;
exports.ids = [840];
exports.modules = {

/***/ 8840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6782);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_randomString__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8864);





const Select = ({ onChange =()=>{} , required =false , options , defaultValue ="" , id  })=>{
    const defaultIndex = options.findIndex((element)=>element.value == defaultValue
    );
    const { 0: selectedIndex , 1: setSelectedIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultIndex == -1 ? 0 : defaultIndex);
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const isMobile = (0,hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const nativeSelect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const triggerSelectChangeEvent = (index)=>{
        var ref;
        if (nativeSelect.current) {
            nativeSelect.current.options.selectedIndex = index;
        }
        (ref = nativeSelect.current) === null || ref === void 0 ? void 0 : ref.dispatchEvent(new Event("change", {
            bubbles: true
        }));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `w-full relative select-none ${isMobile ? "cursor-default" : "cursor-pointer"}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `w-full flex place-content-between place-items-center bg-transparent border-borderLight px-4 py-2 rounded hover:bg-light border hover:border-white z-10 hover:border-opacity-30 `,
                    onClick: ()=>setIsOpen(!isOpen)
                    ,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-white text-opacity-40 w-full",
                            children: options[selectedIndex].label
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-xl text-white text-opacity-40",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiChevronDown, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                            className: "invisible w-0 h-0",
                            onChange: onChange,
                            required: required,
                            ref: nativeSelect,
                            id: id,
                            children: options.map((option)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: option.value,
                                    children: option.label
                                }, (0,utils_randomString__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(64));
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `absolute left-0 top-12 w-full bg-[#21172f] bg-cover rounded overflow-hidden ${isOpen ? "" : "hidden"}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-light backdrop-blur-3xl",
                        children: options.map((option, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>{
                                    setIsOpen(!isOpen);
                                    setSelectedIndex(index);
                                    triggerSelectChangeEvent(index);
                                },
                                className: `text-white text-opacity-60 hover:bg-primary px-3 py-2 hover:text-opacity-100 ${index == selectedIndex ? "bg-primary text-opacity-100" : ""}`,
                                children: option.label
                            }, (0,utils_randomString__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(64));
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ })

};
;
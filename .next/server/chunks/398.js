"use strict";
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 5164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_atoms_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9729);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const ButtonLink = ({ href , value , onClick =()=>{} , size ="normal" , style ="solid" , color ="primary" , radius ="rounded"  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            value: value,
            color: color,
            onClick: onClick,
            radius: radius,
            size: size,
            style: style
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonLink);


/***/ }),

/***/ 9729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6782);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Button = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ value , onClick =()=>{} , size ="normal" , style ="solid" , color ="primary" , radius ="rounded"  }, ref)=>{
    const isMobile = (0,hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const getSizeStyles = ()=>{
        switch(size){
            case "normal":
                return "px-14 py-4 text-base font-semibold";
            case "small":
                return "px-8 py-2.5 text-sm font-medium";
        }
    };
    const getStyleStyles = ()=>{
        switch(style){
            case "light":
                switch(color){
                    case "primary":
                        return "bg-primaryLight text-white hover:brightness-90";
                    case "white":
                        return "bg-buttonLight text-white hover:brightness-90";
                }
            case "outline":
                switch(color){
                    case "primary":
                        return "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white";
                    case "white":
                        return "bg-transparent text-white border border-white hover:bg-white hover:text-dark";
                }
            case "solid":
                switch(color){
                    case "primary":
                        return "bg-primary text-white hover:brightness-90";
                    case "white":
                        return "bg-white text-dark hover:brightness-90";
                }
        }
    };
    const getRadiusStyles = ()=>{
        switch(radius){
            case "rounded":
                return "rounded";
            case "pill":
                return "rounded-full";
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${getSizeStyles()} ${getStyleStyles()} ${getRadiusStyles()} transition-all select-none ${isMobile ? "cursor-default" : "cursor-pointer"}`,
        onClick: onClick,
        ref: ref,
        children: value
    });
});
Button.displayName = "Button";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LineDivider = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full border-t border-borderLight"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineDivider);


/***/ }),

/***/ 3102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6782);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const NavBrand = ()=>{
    const isMobile = (0,hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `select-none ${isMobile ? "cursor-default" : "cursor-pointer"}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/",
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-fit h-fit",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/images/brand.svg",
                        width: "135px",
                        height: 30,
                        alt: "company brand",
                        loading: "lazy"
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBrand);


/***/ }),

/***/ 4612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6782);





const NavLink = ({ href , value , canActive =false  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const isMobile = (0,hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: `text-base text-white select-none hover:text-white ${router.pathname == href && canActive ? "font-semibold" : "text-opacity-80"} ${isMobile ? "cursor-default" : "cursor-pointer"}`,
            children: value
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavLink);


/***/ }),

/***/ 830:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_1__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Text = ({ value , textStyle  })=>{
    const getTextStyle = ()=>{
        switch(textStyle){
            case "SectionBadge":
                return "text-badge font-semibold text-base leading-8";
            case "SectionBadgeError":
                return "text-error font-semibold text-base leading-8";
            case "SectionTitle":
                return "text-white font-bold text-3xl leading-12";
            case "SectionParagraph":
                return "text-muted font-medium text-base leading-8";
            case "PageTitle":
                return "text-white font-bold text-4xl leading-13.5";
            case "PageDescription":
                return "text-muted font-medium text-base leading-8";
            case "PageSubtitle":
                return "text-white font-bold text-3xl leading-12";
            case "PageContent":
                return "text-white font-medium text-base leading-8.5";
            case "PricingPrice":
                return "text-white font-bold text-4xl leading-12";
            case "PricingTitle":
                return "text-white font-bold text-base leading-5.5";
            case "PricingSubtitle":
                return "text-muted font-normal text-xs leading-4";
            case "PricingDetail":
                return "text-white font-medium text-base leading-9";
            case "ProjectTitle":
                return "text-white font-bold text-xl leading-8.5";
            case "ProjectDescription":
                return "text-muted font-normal text-base leading-8.5";
            case "ProjectDetailLabel":
                return "text-muted font-semibold text-sm leading-5";
            case "ProjectDetailValue":
                return "text-white font-semibold text-base leading-5.5";
            case "SmallCardTitle":
                return "text-white font-semibold text-sm leading-5.5";
            case "SmallCardDescription":
                return "text-muted font-normal text-sm leading-6";
            case "FeatureCardTitle":
                return "text-white font-bold text-lg leading-6";
            case "FeatureCardDescription":
                return "text-muted font-medium text-base leading-8";
            case "FAQTitle":
                return "text-white font-bold text-xl leading-12";
            case "FAQDescription":
                return "text-muted font-medium text-base leading-8";
            case "StatisticLabel":
                return "text-muted font-bold text-base leading-5.5";
            case "StatisticValue":
                return "text-white font-bold text-4xl leading-12";
            case "TestimonialCompany":
                return "text-muted font-medium text-sm leading-5";
            case "TestimonialName":
                return "text-white font-bold text-lg leading-6";
            case "TestimonialDescription":
                return "text-muted font-medium text-base leading-8";
            case "TeamName":
                return "text-white font-bold text-lg leading-6";
            case "TeamJob":
                return "text-muted font-medium text-sm leading-5";
            case "BlogTitle":
                return "text-white font-bold text-xl leading-8.5";
            case "BlogLead":
                return "text-muted font-medium text-lg leading-8.5";
            case "BlogMeta":
                return "text-muted font-normal text-sm leading-5";
            case "BlogHeadline":
                return "text-white font-medium text-xl leading-10";
            case "BlogContent":
                return "text-white font-medium text-base leading-8.5";
            case "BlogSubtitle":
                return "text-white font-bold text-3xl leading-12";
            case "BlogQuote":
                return "text-white font-medium text-xl leading-10";
            case "BlogQuoteName":
                return "text-white font-medium text-sm leading-5";
            case "AuthorName":
                return "text-white font-semibold text-xl leading-7";
            case "AuthorNamePreview":
                return "text-white font-semibold text-base leading-7";
            case "AuthorJob":
                return "text-muted font-semibold text-xs leading-4";
            case "AuthorBio":
                return "text-white font-medium text-base leading-8.5";
            case "CommentTime":
                return "text-muted font-normal text-sm leading-5";
            case "CommentName":
                return "text-white font-semibold text-xl leading-7";
            case "CommentContent":
                return "text-white font-medium text-base leading-8";
            case "CommentContent":
                return "text-white font-medium text-base leading-8";
            case "FooterLinkGroupTitle":
                return "text-white font-medium text-sm leading-5";
            case "IconListLabel":
                return "text-muted font-medium text-base leading-5.5";
            case "IconListValue":
                return "text-white font-bold text-xl leading-7";
            case "IconListValueWithoutKey":
                return "text-white font-medium text-base leading-8";
            default:
                throw Error("Invalid textStyle");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: getTextStyle(),
        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(value)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 833:
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



const PageSentence = ({ title ="" , description ="" , badge ="" , badgeStyle ="success"  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: `space-y-6`,
        children: [
            title == "" && badge == "" ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-1",
                children: [
                    badge == "" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        value: badge,
                        textStyle: badgeStyle == "success" ? "SectionBadge" : "SectionBadgeError"
                    }),
                    title == "" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        value: title,
                        textStyle: "PageTitle"
                    })
                ]
            }),
            description == "" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                value: description,
                textStyle: "PageDescription"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageSentence);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 940:
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



const SectionSentence = ({ title ="" , paragraph ="" , badge ="" , badgeStyle ="success"  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "space-y-6",
        children: [
            title == "" && badge == "" ? "" : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-1",
                children: [
                    badge == "" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        value: badge,
                        textStyle: badgeStyle == "success" ? "SectionBadge" : "SectionBadgeError"
                    }),
                    title == "" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        value: title,
                        textStyle: "SectionTitle"
                    })
                ]
            }),
            paragraph == "" ? "" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                value: paragraph,
                textStyle: "SectionParagraph"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionSentence);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_atoms_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5164);
/* harmony import */ var components_atoms_LineDivider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9399);
/* harmony import */ var components_molecules_SectionSentence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(940);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_molecules_SectionSentence__WEBPACK_IMPORTED_MODULE_3__]);
components_molecules_SectionSentence__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const CallOut = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_LineDivider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "grid grid-cols-1 gap-8 place-items-center m-0 py-12 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center sm:w-8/12 md:w-10/12 lg:w-full lg:text-left",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_molecules_SectionSentence__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            title: "We've prepared everything, it's time for you to tell the problem"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-5 w-full sm:w-fit sm:flex-row lg:w-full lg:justify-end",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                value: "Send Quote",
                                href: "/quote"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                value: "Ask Us",
                                color: "white",
                                style: "light",
                                href: "/faq"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_LineDivider__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CallOut);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4667:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_atoms_NavBrand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3102);
/* harmony import */ var components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4612);
/* harmony import */ var components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(830);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__]);
components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
            className: "mt-32 pb-16",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavBrand__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        value: `Copyright © ${new Date().getFullYear()}`,
                                        textStyle: "SectionParagraph"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        value: `Design By Collosal LLC`,
                                        textStyle: "SectionParagraph"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        value: "SERVICES",
                                        textStyle: "FooterLinkGroupTitle"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-[10px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Web Development",
                                                href: "/service/detail"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "App Development",
                                                href: "/service/detail"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "UI Design",
                                                href: "/service/detail"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Consultation",
                                                href: "/service/detail"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Maintenance",
                                                href: "/service/detail"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Pricing",
                                                href: "/pricing"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        value: "COMPANY",
                                        textStyle: "FooterLinkGroupTitle"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-[10px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "About",
                                                href: "/about"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Contact",
                                                href: "/contact"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Send Quote",
                                                href: "/quote"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Privacy Policy",
                                                href: "/privacy-policy"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Term of Service",
                                                href: "/term-of-service"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Jobs",
                                                href: "/jobs"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Blogs",
                                                href: "/blog"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Text__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        value: "RESOURCES",
                                        textStyle: "FooterLinkGroupTitle"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-[10px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Support",
                                                href: "/support"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Documentation",
                                                href: "/documentation"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "License",
                                                href: "/license"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                value: "Sitemap",
                                                href: "/sitemap"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_atoms_NavBrand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3102);
/* harmony import */ var components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4612);
/* harmony import */ var components_atoms_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5164);
/* harmony import */ var components_templates_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7764);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6782);
/* harmony import */ var hooks_useGetBrowserName__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6193);









const NavBar = ()=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isScrolled , 1: setIsScrolled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const browserName = (0,hooks_useGetBrowserName__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    const isMobile = (0,hooks_useMobileDetection__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isOpen) {
            document.body.classList.add("h-screen");
            document.body.classList.add("overflow-y-hidden");
        } else {
            document.body.classList.remove("h-screen");
            document.body.classList.remove("overflow-y-hidden");
        }
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
            className: `pt-8 w-full top-0 left-0 z-30 ${isScrolled ? "fixed" : "absolute"}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_templates_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${browserName == "Firefox" ? "bg-gray-900" : "bg-light"} px-6 py-4 w-full rounded-md backdrop-blur-3xl ${isScrolled || isOpen ? "" : "lg:bg-transparent lg:px-0"}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col lg:flex-row w-full place-content-between lg:place-items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full flex flex-row place-content-between place-items-center lg:w-fit",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavBrand__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "lg:hidden",
                                        onClick: ()=>setIsOpen(!isOpen)
                                        ,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `text-white text-2xl ${isMobile ? "cursor-default" : "cursor-pointer"}`,
                                            children: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiX, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiMenu, {})
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${isOpen ? "" : "hidden "}space-y-5 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-16 lg:flex lg:place-items-center`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        href: "/service",
                                        value: "Services",
                                        canActive: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        href: "/how-we-work",
                                        value: "How We Work",
                                        canActive: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        href: "/project",
                                        value: "Project",
                                        canActive: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_NavLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        href: "/about",
                                        value: "About",
                                        canActive: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${isOpen ? "" : "hidden "}lg:block mt-5 lg:mt-0`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_atoms_Button_ButtonLink__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    value: "Contact",
                                    style: "light",
                                    color: "white",
                                    size: "small",
                                    href: "/contact"
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);


/***/ }),

/***/ 7764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Container = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `px-7 xl:px-[150px] 3xl:px-[300px] 4xl:px-[400px]`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 3882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_organisms_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9405);
/* harmony import */ var components_organisms_CallOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3225);
/* harmony import */ var components_organisms_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_templates_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7764);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useGetBrowserName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6193);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_organisms_CallOut__WEBPACK_IMPORTED_MODULE_2__, components_organisms_Footer__WEBPACK_IMPORTED_MODULE_3__]);
([components_organisms_CallOut__WEBPACK_IMPORTED_MODULE_2__, components_organisms_Footer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PageTemplate = ({ children , title ="Collosal"  })=>{
    const browserName = (0,hooks_useGetBrowserName__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_organisms_NavBar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            browserName == "Firefox" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-fit min-h-screen bg-dark overflow-x-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-full min-h-screen relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full min-h-screen relative before:absolute before:w-full before:h-full before:min-h-screen before:bg-[url('/images/page-background.svg')] before:bg-cover before:blur-[175px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `w-full h-full min-h-screen relative ${browserName === "Firefox" ? "bg-dark/[.85]" : "bg-dark/[.75]"} `,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-[105px]"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_templates_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    children: [
                                        children,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            "data-aos": "fade-right",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_organisms_CallOut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_organisms_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                    ]
                                })
                            ]
                        })
                    })
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-fit min-h-screen bg-dark overflow-x-hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full min-h-screen relative bg-[url('/images/page-background.svg')] bg-cover",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full h-full min-h-screen relative backdrop-blur-[175px] bg-dark/[.80] overflow-visible",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "h-[105px]"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_templates_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    children: [
                                        children,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            "data-aos": "fade-right",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_organisms_CallOut__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_organisms_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageTemplate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9621);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_1__);


const useGetBrowserName = ()=>{
    const { 0: browserName , 1: setBrowserName  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Chrome");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setBrowserName(`${ua_parser_js__WEBPACK_IMPORTED_MODULE_1__.UAParser.UAParser().browser.name}`);
        window.addEventListener("resize", ()=>setBrowserName(`${ua_parser_js__WEBPACK_IMPORTED_MODULE_1__.UAParser.UAParser().browser.name}`)
        );
    });
    return browserName;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetBrowserName);


/***/ }),

/***/ 6782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9621);
/* harmony import */ var ua_parser_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_1__);


const useMobileDeviceDetection = ()=>{
    const { 0: isMobile , 1: setIsMobile  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        deviceTypeHandler();
        window.addEventListener("resize", ()=>deviceTypeHandler()
        );
        window.addEventListener("scroll", ()=>deviceTypeHandler()
        );
    }, []);
    const deviceTypeHandler = ()=>{
        switch(ua_parser_js__WEBPACK_IMPORTED_MODULE_1___default().UAParser().device.type){
            case (ua_parser_js__WEBPACK_IMPORTED_MODULE_1___default().DEVICE.MOBILE):
                setIsMobile(true);
                break;
            case (ua_parser_js__WEBPACK_IMPORTED_MODULE_1___default().DEVICE.TABLET):
                setIsMobile(true);
                break;
            default:
                setIsMobile(false);
        }
    };
    return isMobile;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMobileDeviceDetection);


/***/ })

};
;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio-portfolio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/portfolio.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/portfolio.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>portfolio</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  \n  <div class=\"content-portfolio  d-flex m-0 p-3 justify-content-center align-items-center flex-column\">\n\n      <div class=\" cursor option p-3 col-12 bg-color1 col-lg-5\">\n          <p [routerLink]=\"['/tabs-provider/portfolio/products-provider']\"  class=\"m-0 p-0 font-700 col-12 col-lg-5\">Productos y Servicios</p>\n      </div>\n\n      <div class=\" cursor option p-3 col-12 bg-color1 mt-2 col-lg-5\">\n          <p [routerLink]=\"['/tabs-provider/portfolio/offers-provider']\" class=\"m-0 p-0 font-700 col-12 col-lg-5\">Ofertas y Promociones</p>\n      </div>\n\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/portfolio-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/portfolio-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PortfolioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPageRoutingModule", function() { return PortfolioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _portfolio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio.page */ "./src/app/pages/tabs-provider/portfolio/portfolio.page.ts");




const routes = [
    {
        path: '',
        component: _portfolio_page__WEBPACK_IMPORTED_MODULE_3__["PortfolioPage"]
    },
    {
        path: 'offers-provider',
        loadChildren: () => Promise.all(/*! import() | offers-provider-offers-provider-module */[__webpack_require__.e("default~chat-chat-module~chat-provider-chat-provider-module~dashboard-dashboard-module~featured-feat~e870f68b"), __webpack_require__.e("default~config-user-config-user-module~config-user-provider-config-user-provider-module~edit-product~9f3b40de"), __webpack_require__.e("default~home-home-module~offers-provider-offers-provider-module~pages-auth-login-login-module"), __webpack_require__.e("default~edit-products-edit-products-module~edit-profile-edit-profile-module~offers-provider-offers-p~31cc0df5"), __webpack_require__.e("common"), __webpack_require__.e("offers-provider-offers-provider-module")]).then(__webpack_require__.bind(null, /*! ./offers-provider/offers-provider.module */ "./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.module.ts")).then(m => m.OffersProviderPageModule)
    },
    {
        path: 'products-provider',
        loadChildren: () => Promise.all(/*! import() | products-provider-products-provider-module */[__webpack_require__.e("default~chat-chat-module~chat-provider-chat-provider-module~dashboard-dashboard-module~featured-feat~e870f68b"), __webpack_require__.e("common"), __webpack_require__.e("products-provider-products-provider-module")]).then(__webpack_require__.bind(null, /*! ./products-provider/products-provider.module */ "./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.module.ts")).then(m => m.ProductsProviderPageModule)
    }
];
let PortfolioPageRoutingModule = class PortfolioPageRoutingModule {
};
PortfolioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PortfolioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/portfolio.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/portfolio.module.ts ***!
  \*******************************************************************/
/*! exports provided: PortfolioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPageModule", function() { return PortfolioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio-routing.module */ "./src/app/pages/tabs-provider/portfolio/portfolio-routing.module.ts");
/* harmony import */ var _portfolio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio.page */ "./src/app/pages/tabs-provider/portfolio/portfolio.page.ts");







let PortfolioPageModule = class PortfolioPageModule {
};
PortfolioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_5__["PortfolioPageRoutingModule"]
        ],
        declarations: [_portfolio_page__WEBPACK_IMPORTED_MODULE_6__["PortfolioPage"]]
    })
], PortfolioPageModule);



/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/portfolio.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/portfolio.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".option {\n  border-radius: 10px;\n}\n\n.content-portfolio {\n  min-height: 20vh;\n}\n\n@media (min-width: 992px) {\n  .content-portfolio {\n    min-height: 100vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wb3J0Zm9saW8vQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcYXBwXFxwYWdlc1xcdGFicy1wcm92aWRlclxccG9ydGZvbGlvXFxwb3J0Zm9saW8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzLXByb3ZpZGVyL3BvcnRmb2xpby9wb3J0Zm9saW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNNLGdCQUFBO0FDQ047O0FER0E7RUFDRTtJQUNJLGlCQUFBO0VDQUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMtcHJvdmlkZXIvcG9ydGZvbGlvL3BvcnRmb2xpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNvbnRlbnQtcG9ydGZvbGlve1xyXG4gICAgICBtaW4taGVpZ2h0OiAyMHZoO1xyXG4gIH1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuY29udGVudC1wb3J0Zm9saW97XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxufSIsIi5vcHRpb24ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGVudC1wb3J0Zm9saW8ge1xuICBtaW4taGVpZ2h0OiAyMHZoO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRlbnQtcG9ydGZvbGlvIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/portfolio.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/portfolio.page.ts ***!
  \*****************************************************************/
/*! exports provided: PortfolioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPage", function() { return PortfolioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PortfolioPage = class PortfolioPage {
    constructor() { }
    ngOnInit() {
    }
};
PortfolioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./portfolio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/portfolio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./portfolio.page.scss */ "./src/app/pages/tabs-provider/portfolio/portfolio.page.scss")).default]
    })
], PortfolioPage);



/***/ })

}]);
//# sourceMappingURL=portfolio-portfolio-module-es2015.js.map
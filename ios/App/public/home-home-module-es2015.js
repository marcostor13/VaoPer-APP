(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/home.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/home.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<div *ngIf=\"isVisibleModal\" id=\"modal\" class=\"row justify-content-center align-items-center m-0\">\r\n  <div class=\"contentModal bg-white col-11 row justify-content-center align-items-center m-0 p-4\">\r\n    <h4>¡Advertencia!</h4>\r\n    <p class=\"mt-3\">{{contentModal}}</p>\r\n    <button class=\"btn1 mt-4 pt-2 pb-2 \" (click)=\"closeModal()\">Aceptar</button>\r\n  </div>\r\n</div>\r\n\r\n<ion-content>\r\n\r\n\r\n    <div class=\"p-4\">\r\n      <div class=\"search\">\r\n        <input (keyup.enter)=\"redireccionar()\" class=\"f-12\" type=\"search\" [(ngModel)]=\"search\" placeholder=\"Buscar...\">\r\n        <button (click)=\"redireccionar()\" class=\"btn2 pt-3 pb-3 font-700\">Buscar</button>\r\n        <img src=\"/assets/img/partials/search.svg\">\r\n      </div>\r\n\r\n      <!-- <div class=\"col-12 p-0\">\r\n        <select class=\"mt-2 col-12 p-0 select-district pl-3\" (change)=\"redireccionar2()\" [(ngModel)]=\"district\">\r\n          <option value=\"\">Distritos</option>\r\n          <option value=\"ANCON\">ANCON</option>\r\n          <option value=\"ATE\">ATE</option>\r\n          <option value=\"BARRANCO\">BARRANCO</option>\r\n          <option value=\"BREÑA\">BREÑA</option>\r\n          <option value=\"CARABAYLLO\">CARABAYLLO</option>\r\n          <option value=\"CHACLACAYO\">CHACLACAYO</option>\r\n          <option value=\"CHORRILLOS\">CHORRILLOS</option>\r\n          <option value=\"CIENEGUILLA\">CIENEGUILLA</option>\r\n          <option value=\"COMAS\">COMAS</option>\r\n          <option value=\"EL AGUSTINO\">EL AGUSTINO</option>\r\n          <option value=\"INDEPENDENCIA\">INDEPENDENCIA</option>\r\n          <option value=\"JESUS MARIA\">JESUS MARIA</option>\r\n          <option value=\"LA MOLINA\">LA MOLINA</option>\r\n          <option value=\"LA VICTORIA\">LA VICTORIA</option>\r\n          <option value=\"LIMA\">LIMA</option>\r\n          <option value=\"LINCE\">LINCE</option>\r\n          <option value=\"LOS OLIVOS\">LOS OLIVOS</option>\r\n          <option value=\"LURIGANCHO\">LURIGANCHO</option>\r\n          <option value=\"LURIN\">LURIN</option>\r\n          <option value=\"MAGDALENA DEL MAR\">MAGDALENA DEL MAR</option>\r\n          <option value=\"MIRAFLORES\">MIRAFLORES</option>\r\n          <option value=\"PACHACAMAC\">PACHACAMAC</option>\r\n          <option value=\"PUCUSANA\">PUCUSANA</option>\r\n          <option value=\"PUEBLO LIBRE\">PUEBLO LIBRE</option>\r\n          <option value=\"PUENTE PIEDRA\">PUENTE PIEDRA</option>\r\n          <option value=\"PUNTA HERMOSA\">PUNTA HERMOSA</option>\r\n          <option value=\"PUNTA NEGRA\">PUNTA NEGRA</option>\r\n          <option value=\"RIMAC\">RIMAC</option>\r\n          <option value=\"SAN BARTOLO\">SAN BARTOLO</option>\r\n          <option value=\"SAN BORJA\">SAN BORJA</option>\r\n          <option value=\"SAN ISIDRO\">SAN ISIDRO</option>\r\n          <option value=\"SAN JUAN DE LURIGANCHO\">SAN JUAN DE LURIGANCHO</option>\r\n          <option value=\"SAN JUAN DE MIRAFLORES\">SAN JUAN DE MIRAFLORES</option>\r\n          <option value=\"SAN LUIS\">SAN LUIS</option>\r\n          <option value=\"SAN MARTIN DE PORRES\">SAN MARTIN DE PORRES</option>\r\n          <option value=\"SAN MIGUEL\">SAN MIGUEL</option>\r\n          <option value=\"SANTA ANITA\">SANTA ANITA</option>\r\n          <option value=\"SANTA MARIA DEL MAR\">SANTA MARIA DEL MAR</option>\r\n          <option value=\"SANTA ROSA\">SANTA ROSA</option>\r\n          <option value=\"SANTIAGO DE SURCO\">SANTIAGO DE SURCO</option>\r\n          <option value=\"SURQUILLO\">SURQUILLO</option>\r\n          <option value=\"VILLA EL SALVADOR\">VILLA EL SALVADOR</option>\r\n          <option value=\"VILLA MARIA DEL TRIUNFO\">VILLA MARIA DEL TRIUNFO</option>\r\n        </select>\r\n      </div> -->\r\n\r\n    </div>\r\n\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"\">\r\n      <ion-slide *ngFor=\"let item of slides\">\r\n        <div class=\"img\" style=\"background-image: url({{item.src}});\"></div>\r\n      </ion-slide>      \r\n    </ion-slides>\r\n\r\n    <nav class=\"row p-4 m-0 col-12\">\r\n      <div *ngFor=\"let cat of categories;let index = index\" (click)=\"onclickOpenSubcategories(index, cat.subcategories.length, cat.name, cat.id)\" class=\"item col-12 bg-color2 row m-0  p-3 justify-content-between align-items-center mt-2\">\r\n          <div class=\"col-7 row m-0\">\r\n              <h6 class=\"item-title f-13 font-900 text-white m-0\">{{cat.name}}</h6>\r\n          </div>\r\n          <div class=\"col-5 row m-0justify-content-start align-items-center\">\r\n\r\n              <img *ngIf=\"cat.icon && cat.icon.indexOf('https') > -1\" width=\"40\" class=\"mr-2\" src=\"{{cat.icon}}\">\r\n              <img *ngIf=\"cat.icon && cat.icon.indexOf('https') === -1\" width=\"40\" class=\"mr-2\" src=\"/assets/img/icons/services/{{cat.icon}}\">\r\n       \r\n              <img *ngIf=\"cat.subcategories.length > 0\" class=\"down ml-3\" src=\"/assets/img/partials/down.svg\">\r\n          </div>\r\n          <ng-container *ngIf=\"visibleIndices.has(index)\">\r\n              <div *ngFor=\"let subcat of cat.subcategories\" class=\"subitem col-12 bg-white row m-0 justify-content-between align-items-center mt-2\" [routerLink]=\"['/tabs/home/results/'+subcat.name+'#'+subcat.id]\" >\r\n                  <div class=\"col-8 row\">\r\n                      <h6 class=\"f-12 font-700 text-color2\">{{subcat.name}}</h6>\r\n                  </div>\r\n                  <div class=\"col-4 row justify-content-end\">\r\n                    <img *ngIf=\"subcat.icon && subcat.icon.indexOf('https') > -1\" class=\"mr-3\" src=\"{{subcat.icon}}\">\r\n                    <img *ngIf=\"subcat.icon && subcat.icon.indexOf('https') === -1\" class=\"mr-3\" src=\"/assets/img/icons/services/{{subcat.icon}}\">                    \r\n                  </div>\r\n              </div>\r\n          </ng-container>\r\n          \r\n      </div>\r\n  </nav>\r\n\r\n  \r\n\r\n</ion-content>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/tabs/home/home-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/home/home-routing.module.ts ***!
  \********************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/tabs/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    },
    {
        path: 'results/:id',
        loadChildren: () => Promise.all(/*! import() | results-results-module */[__webpack_require__.e("default~featured-featured-module~pages-auth-login-login-module~profile-profile-module~results-results-module"), __webpack_require__.e("default~featured-featured-module~profile-profile-module~results-results-module"), __webpack_require__.e("results-results-module")]).then(__webpack_require__.bind(null, /*! ./results/results.module */ "./src/app/pages/tabs/home/results/results.module.ts")).then(m => m.ResultsPageModule)
    },
    {
        path: 'profile/:id',
        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~featured-featured-module~pages-auth-login-login-module~profile-profile-module~results-results-module"), __webpack_require__.e("default~featured-featured-module~profile-profile-module~results-results-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/pages/tabs/home/profile/profile.module.ts")).then(m => m.ProfilePageModule)
    },
    {
        path: 'products/:type/:id',
        loadChildren: () => Promise.all(/*! import() | products-products-module */[__webpack_require__.e("common"), __webpack_require__.e("products-products-module")]).then(__webpack_require__.bind(null, /*! ./products/products.module */ "./src/app/pages/tabs/home/products/products.module.ts")).then(m => m.ProductsPageModule)
    },
    {
        path: 'information/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | information-information-module */ "information-information-module").then(__webpack_require__.bind(null, /*! ./information/information.module */ "./src/app/pages/tabs/home/information/information.module.ts")).then(m => m.InformationPageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/tabs/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/tabs/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/tabs/home/home.page.ts");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/tabs/home/home.page.scss":
/*!************************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* FONTS */\n.img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  min-width: 88%;\n  min-height: 300px;\n  border-radius: 16px;\n  padding: 10px;\n}\n.select-district {\n  border-radius: 30px;\n  padding-left: 10px;\n  padding-right: 10px;\n  min-height: 40px;\n  font-size: 11pt;\n  border: 2px solid #ffe266;\n}\n.item {\n  margin-top: 8px !important;\n  border-radius: 16px;\n  min-height: 80px;\n}\n.item img {\n  max-width: 80%;\n  max-height: 46px;\n}\n.item .down {\n  max-width: 20px;\n}\n.item .subitem {\n  margin-top: 8px !important;\n  border-radius: 16px;\n  min-height: 50px;\n}\n.item .subitem img {\n  max-width: 80%;\n  max-height: 36px;\n}\n.iconimage {\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  min-width: 30px;\n  max-height: 30px;\n  min-height: 30px;\n}\n.search {\n  flex: 1;\n  position: relative;\n}\n.search ::-moz-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search ::-ms-input-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search ::placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search img {\n  position: absolute;\n  top: 27%;\n  left: 20px;\n  max-width: 26px;\n}\n.search input {\n  font-size: 12pt;\n  width: 100%;\n  border: 2.5px solid #ffe266;\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0);\n  color: #333333;\n  border-radius: 50px;\n  padding-left: 58px;\n  min-height: 60px;\n}\n.search :focus {\n  outline: 0;\n}\n.search button {\n  border-radius: 50px !important;\n  position: absolute;\n  right: 0px;\n  min-height: 54px;\n  top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9ob21lL0M6XFx3YW1wNjRcXHd3d1xcdmFvcGVydS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMvaG9tZS9DOlxcd2FtcDY0XFx3d3dcXHZhb3BlcnUvc3JjXFxhcHBcXHBhZ2VzXFx0YWJzXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUNFQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0FKO0FESUE7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREVJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDQVI7QURFSTtFQUNJLGVBQUE7QUNBUjtBREVJO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURDUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0NaO0FET0E7RUFDSSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pKO0FET0E7RUFDSSxPQUFBO0VBQ0Esa0JBQUE7QUNKSjtBREtJO0VBQ0ksY0QvQ0M7RUNnREQsZUFBQTtBQ0hSO0FEQ0k7RUFDSSxjRC9DQztFQ2dERCxlQUFBO0FDSFI7QURDSTtFQUNJLGNEL0NDO0VDZ0RELGVBQUE7QUNIUjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNIUjtBREtJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGNEaEVDO0VDaUVELG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hSO0FETUk7RUFDSSxVQUFBO0FDSlI7QURPSTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGT05UUyAqL1xyXG5cclxuJGZvbnRNOiBNeXJpYWRQcm87XHJcbiRmb250VDogVHJlYnVjaGV0TVM7XHJcblxyXG5cclxuLy8gQ09MT1JTIFxyXG5cclxuXHJcbiRjb2xvcjE6ICNmZmUyNjY7XHJcbiRjb2xvcjI6ICMxM2JmOWU7XHJcbiRjb2xvcjM6ICMzMzMzMzM7XHJcbiRjb2xvcjQ6ICM0ZDRkNGQ7XHJcbiRjb2xvcjU6ICM4MDgwODA7XHJcbiRjb2xvcjY6ICNBOUFCQUU7XHJcbiRjb2xvcjc6ICNlNmU2ZTY7XHJcbiRjb2xvcjg6ICNlYzdjOGI7XHJcbiRjb2xvcjk6ICMwMGExOTg7XHJcbiRjb2xvcjEwOiAjMzE0ODhhO1xyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmltZ3tcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiA4OCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59ICAgXHJcblxyXG4uc2VsZWN0LWRpc3RyaWN0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxMXB0O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yMTtcclxufVxyXG5cclxuXHJcbi5pdGVte1xyXG4gICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgbWluLWhlaWdodDogODBweDtcclxuICAgIGltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0NnB4O1xyXG4gICAgfVxyXG4gICAgLmRvd257XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnN1Yml0ZW17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM2cHg7ICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbi5pY29uaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAgIFxyXG4gICAgbWluLXdpZHRoOiAzMHB4OyBcclxuICAgIG1heC1oZWlnaHQ6IDMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoe1xyXG4gICAgZmxleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIDo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDI3JTtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMjZweDtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDIuNXB4IHNvbGlkICAkY29sb3IxO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwKTtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNThweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIDpmb2N1c3tcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTRweDtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgIH1cclxuXHJcbn0iLCIvKiBGT05UUyAqL1xuLmltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiA4OCU7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc2VsZWN0LWRpc3RyaWN0IHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDExcHQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmUyNjY7XG59XG5cbi5pdGVtIHtcbiAgbWFyZ2luLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG4uaXRlbSBpbWcge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWF4LWhlaWdodDogNDZweDtcbn1cbi5pdGVtIC5kb3duIHtcbiAgbWF4LXdpZHRoOiAyMHB4O1xufVxuLml0ZW0gLnN1Yml0ZW0ge1xuICBtYXJnaW4tdG9wOiA4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cbi5pdGVtIC5zdWJpdGVtIGltZyB7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXgtaGVpZ2h0OiAzNnB4O1xufVxuXG4uaWNvbmltYWdlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LWhlaWdodDogMzBweDtcbiAgbWluLWhlaWdodDogMzBweDtcbn1cblxuLnNlYXJjaCB7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zZWFyY2ggOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDEycHQ7XG59XG4uc2VhcmNoIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNyU7XG4gIGxlZnQ6IDIwcHg7XG4gIG1heC13aWR0aDogMjZweDtcbn1cbi5zZWFyY2ggaW5wdXQge1xuICBmb250LXNpemU6IDEycHQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZmUyNjY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogNThweDtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cbi5zZWFyY2ggOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5zZWFyY2ggYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDU0cHg7XG4gIHRvcDogM3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tabs/home/home.page.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/home/home.page.ts ***!
  \**********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");









let HomePage = class HomePage {
    constructor(router, api, cookie, general, modal, store) {
        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.general = general;
        this.modal = modal;
        this.store = store;
        this.state = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.slides = [];
        this.isLoad = true;
        this.companies = [];
        this.subcategories = [];
        this.visibleIndices = new Set();
        this.search = '';
        this.contentModal = '';
        this.isVisibleModal = false;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        this.district = '';
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.getSlides();
        this.getCategoriesAndSubcategories();
        // this.getCompaniesData()
        this.validateSession();
    }
    validateSession() {
        if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
        }
    }
    getSlides() {
        let data = {
            service: 'get-slides'
        };
        this.api.api(data).subscribe((result) => {
            this.api.c('getSlides result', result);
            result.data.forEach(e => {
                if (e.type == 'mobile') {
                    this.slides.push({
                        src: e.image
                    });
                }
            });
            this.isLoad = false;
        }, error => {
            this.api.c('Error getSlides', error);
        });
    }
    getCurrentPosition() {
        this.general.getPosition()
            .then(_ => {
            console.log('POsition OK');
        })
            .catch((error) => {
            // this.error(error)
            this.api.c('CurrentPosition Error', error);
        });
    }
    error(content) {
        this.contentModal = content;
        this.isVisibleModal = true;
    }
    closeModal() {
        this.isVisibleModal = false;
    }
    getCategoriesAndSubcategories() {
        let data = {
            service: 'get-categories-and-subcategories'
        };
        this.api.api(data).subscribe(result => {
            this.api.c('getCategoriesAndSubcategories result', result);
            this.categories = result;
            this.isLoad = false;
            setTimeout(() => {
                this.getCurrentPosition();
            }, 5000);
        }, error => {
            this.api.c('Error getCategoriesAndSubcategories', error);
        });
    }
    toogleMenuHome() {
        this.api.c('toogleMenuFather2', this.eventsSubject);
        this.eventsSubject.next();
    }
    deleteDuplicados(array) {
        let res = [];
        for (let index = 0; index < array.length; index++) {
            const e = array[index];
            if (this.general.searchIndexByNameKey(res, 'id', e.id) === false) {
                res.push(e);
            }
        }
        return res;
    }
    getCompaniesData() {
        this.isLoad = true;
        let data = {
            search: '',
            service: 'get-companies-data'
        };
        this.api.api(data).subscribe((result) => {
            this.api.c('getCompaniesData', result);
            if (result.status) {
                if (result.data.length > 0) {
                    this.companies = this.deleteDuplicados(result.data);
                    this.api.setData(this.companies);
                }
                else {
                    this.api.c('getCompaniesData false', result);
                    this.isLoad = false;
                }
            }
            else {
                this.api.c('getCompaniesData false', result);
            }
        }, error => {
            this.api.c('Error getCompaniesData', error);
        });
    }
    onclickOpenSubcategories(index, subcategories, category, categoryid = null) {
        if (subcategories === 0) {
            this.router.navigate(['/tabs/home/results/' + category + '&' + categoryid]);
        }
        if (!this.visibleIndices.delete(index)) {
            this.visibleIndices.add(index);
        }
    }
    getUriImage(image) {
        return encodeURI(image);
    }
    redirect(categoryid, categoryname) {
        //[routerLink] = "['/results/' + category.name]"
        let data = {
            categoryid: categoryid,
            service: 'get-subcategories'
        };
        this.api.api(data).subscribe((result) => {
            this.api.c('redirect result', result);
            if (result.length > 0) {
                this.subcategories = result;
            }
            else {
                this.router.navigate(['/tabs/home/results/' + categoryname]).then(() => {
                    window.location.reload();
                });
            }
        }, error => {
            this.api.c('Error redirect', error);
        });
    }
    redireccionarSubcategory(subcategorySelect) {
        this.router.navigate(['/tabs/home/results/' + subcategorySelect]).then(() => {
            window.location.reload();
        });
    }
    redireccionar() {
        this.router.navigate(['/tabs/home/results/' + this.search]).then(() => {
            window.location.reload();
        });
    }
    redireccionar2() {
        this.router.navigate(['/tabs/home/results/--' + this.general.formatURL(this.district)]).then(() => {
            window.location.reload();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_6__["GeneralService"] },
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HomePage.prototype, "state", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HomePage.prototype, "stateMenu", void 0);
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/tabs/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map
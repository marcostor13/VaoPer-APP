(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-provider-profile-provider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/profile-provider/profile-provider.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/profile-provider/profile-provider.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  \n</ion-header> -->\n\n<ion-content>\n\n  <div class=\"pt-3 pl-3 pr-3\">\n    <button *ngIf=\"companyData\" [routerLink]=\"['/tabs-provider/profile-provider/edit-profile/'+companyData.id]\" class=\"btn3 pt-2 pb-2 font-700 pl-3 pr-3\">Editar Perfil</button>\n  </div>\n\n  <div class=\"p-3\">\n\n      <ng-container *ngIf=\"companyData\">\n          <div class=\"row justify-content-center justify-content-lg-start m-0\">\n\n              <div class=\"\">\n\n                  <div *ngIf=\"companyData.image\" class=\"imgProfileEdit col-12\" [ngStyle]=\"{'background-image': 'url('+companyData.image+')'}\"></div>      \n\n                  <div *ngIf=\"!companyData.image\" class=\"main-photo row m-0 justify-content-center align-items-center\">\n                      <p class=\"font-700\">Foto de perfil</p>\n                  </div>\n                  <div class=\"col-12 row m-0 p-0 justify-content-end mt-2\">\n                      <button class=\"btn3 pr-3 pl-3 pt-2 pb-2 font-700 f-10\">INFORMACIÓN</button>\n                  </div>\n              </div>\n\n              <div class=\"col-12 p-0 col-lg-4 ml-0 ml-lg-4 \">\n                  \n                  <p class=\"font-700 mt-2 f-12\">{{companyData.comercialname}}</p>\n                  <p *ngIf=\"companyData.description && companyData.description != '' && companyData.description != 'null'\" class=\"font-500 mt-2 f-11\">{{companyData.description}}</p>\n                  <div class=\"row m-0\">\n                      <a href=\"tel:{{companyData.phone1}}\" class=\"btn1 flex-1 pt-2 pb-2 mr-2 font-700 text-center link-unstyled\">LLAMADA</a>\n                      <button class=\"btn2 flex-1 pt-2 pb-2 font-700\">MENSAJE</button>\n                  </div>\n              </div>\n          </div>\n\n      </ng-container>\n    \n  </div>\n\n  <hr class=\"linea\">\n\n  <div class=\"pl-3 pr-3\">\n    <p class=\"font-700 text-center text-lg-left f-18\">Secciones</p>\n  </div>\n\n  <div class=\"p-3 mb-5 pb-5\">\n      <div class=\"sections row m-0 align-items-center\">\n          <label class=\"switch\">\n              <input (change)=\"onChangeSections()\" type=\"checkbox\" [(ngModel)]=\"productsSection\">\n              <span class=\"slider round\"></span>\n          </label>\n          <p class=\"ml-4 font-700 p-0 mb-2 f-16\">Productos</p>\n      </div>\n      <div class=\"sections row m-0 align-items-center mt-2\">\n          <label class=\"switch\">\n              <input (change)=\"onChangeSections()\" type=\"checkbox\" [(ngModel)]=\"featuredSection\">\n              <span class=\"slider round\"></span>\n          </label>\n          <p class=\"ml-4 font-700 p-0 mb-2 f-16\">Productos destacados</p>\n      </div>\n      <div class=\"sections row m-0 align-items-center mt-2\">\n          <label class=\"switch\">\n              <input (change)=\"onChangeSections()\" type=\"checkbox\" [(ngModel)]=\"offersSection\">\n              <span class=\"slider round\"></span>\n          </label>\n          <p class=\"ml-4 font-700 p-0 mb-2 f-16\">Ofertas Activas</p>\n      </div>\n  </div>\n\n  <div *ngIf=\"isLoad\" class=\"load\">\n      <img src=\"/assets/img/partials/load.svg\">\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tabs-provider/profile-provider/profile-provider-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/profile-provider/profile-provider-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProfileProviderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileProviderPageRoutingModule", function() { return ProfileProviderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_provider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-provider.page */ "./src/app/pages/tabs-provider/profile-provider/profile-provider.page.ts");




const routes = [
    {
        path: '',
        component: _profile_provider_page__WEBPACK_IMPORTED_MODULE_3__["ProfileProviderPage"]
    },
    {
        path: 'edit-profile/:id',
        loadChildren: () => Promise.all(/*! import() | edit-profile-edit-profile-module */[__webpack_require__.e("default~config-user-config-user-module~config-user-provider-config-user-provider-module~edit-product~9f3b40de"), __webpack_require__.e("default~edit-products-edit-products-module~edit-profile-edit-profile-module~offers-provider-offers-p~31cc0df5"), __webpack_require__.e("edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null, /*! ./edit-profile/edit-profile.module */ "./src/app/pages/tabs-provider/profile-provider/edit-profile/edit-profile.module.ts")).then(m => m.EditProfilePageModule)
    }
];
let ProfileProviderPageRoutingModule = class ProfileProviderPageRoutingModule {
};
ProfileProviderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileProviderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs-provider/profile-provider/profile-provider.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/profile-provider/profile-provider.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ProfileProviderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileProviderPageModule", function() { return ProfileProviderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-provider-routing.module */ "./src/app/pages/tabs-provider/profile-provider/profile-provider-routing.module.ts");
/* harmony import */ var _profile_provider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-provider.page */ "./src/app/pages/tabs-provider/profile-provider/profile-provider.page.ts");







let ProfileProviderPageModule = class ProfileProviderPageModule {
};
ProfileProviderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileProviderPageRoutingModule"]
        ],
        declarations: [_profile_provider_page__WEBPACK_IMPORTED_MODULE_6__["ProfileProviderPage"]]
    })
], ProfileProviderPageModule);



/***/ }),

/***/ "./src/app/pages/tabs-provider/profile-provider/profile-provider.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/profile-provider/profile-provider.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* FONTS */\n.carrusel .item .img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  min-width: 100%;\n  min-height: 200px;\n  border-radius: 16px;\n  padding: 10px;\n}\n.linea {\n  border-bottom: solid 3px #e6e6e6;\n}\n.menu p {\n  min-width: 20px;\n  min-height: 2px;\n  background-color: white;\n}\n.search {\n  flex: 1;\n  position: relative;\n}\n.search ::-moz-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search ::-ms-input-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search ::placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search img {\n  position: absolute;\n  top: 27%;\n  left: 20px;\n  max-width: 26px;\n}\n.search input {\n  font-size: 12pt;\n  width: 100%;\n  border: 2.5px solid #ffe266;\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0);\n  color: #333333;\n  border-radius: 50px;\n  padding-left: 58px;\n  min-height: 60px;\n}\n.search :focus {\n  outline: 0;\n}\n.main-photo {\n  border-radius: 10px;\n  background-color: #e6e6e6;\n  min-height: 25vw;\n  min-width: 25vw;\n  max-width: 25vw;\n}\n.imgProfileEdit {\n  border-radius: 10px;\n  background-color: white;\n  min-height: 25vw;\n  min-width: 25vw;\n  max-width: 25vw;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.add {\n  max-width: 40px;\n}\n.link-unstyled {\n  color: inherit;\n  text-decoration: inherit;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 28px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\ninput:checked + .slider {\n  background-color: #13bf9e;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #13bf9e;\n}\ninput:checked + .slider:before {\n  transform: translateX(22px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.load {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.load img {\n  opacity: 0.9;\n}\n:focus {\n  outline: 0;\n}\n@media (max-width: 992px) {\n  .main-photo {\n    min-height: 90vw;\n    min-width: 90vw;\n    max-width: 90vw;\n  }\n\n  .imgProfileEdit {\n    min-height: 90vw;\n    min-width: 90vw;\n    max-width: 90vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wcm9maWxlLXByb3ZpZGVyL0M6XFx3YW1wNjRcXHd3d1xcdmFvcGVydS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMtcHJvdmlkZXIvcHJvZmlsZS1wcm92aWRlci9DOlxcd2FtcDY0XFx3d3dcXHZhb3BlcnUvc3JjXFxhcHBcXHBhZ2VzXFx0YWJzLXByb3ZpZGVyXFxwcm9maWxlLXByb3ZpZGVyXFxwcm9maWxlLXByb3ZpZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wcm9maWxlLXByb3ZpZGVyL3Byb2ZpbGUtcHJvdmlkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUNPUTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0xaO0FEWUE7RUFDSSxnQ0FBQTtBQ1RKO0FEYUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDVlI7QURhQTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtBQ1ZKO0FEV0k7RUFDSSxjRHZCQztFQ3dCRCxlQUFBO0FDVFI7QURPSTtFQUNJLGNEdkJDO0VDd0JELGVBQUE7QUNUUjtBRE9JO0VBQ0ksY0R2QkM7RUN3QkQsZUFBQTtBQ1RSO0FEV0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ1RSO0FEV0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0R4Q0M7RUN5Q0QsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVFI7QURZSTtFQUNJLFVBQUE7QUNWUjtBRGVBO0VBQ0ksbUJBQUE7RUFDQSx5QkRsREs7RUNtREwsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1pKO0FEZUE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ1pKO0FEZUE7RUFDSSxlQUFBO0FDWko7QURlQTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtBQ1pKO0FEbUJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaEJGO0FEbUJBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDaEJGO0FEbUJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7QUNoQkY7QURtQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLHlCRDNITztBRTJHVDtBRG1CQTtFQUNFLDJCQUFBO0FDaEJGO0FEbUJBO0VBR0UsMkJBQUE7QUNoQkY7QURtQkEsb0JBQUE7QUFDQTtFQUNFLG1CQUFBO0FDaEJGO0FEbUJBO0VBQ0Usa0JBQUE7QUNoQkY7QURzQkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ25CSjtBRG9CSTtFQUNJLFlBQUE7QUNsQlI7QURzQkE7RUFDSSxVQUFBO0FDbkJKO0FEc0JBO0VBQ0U7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VDbkJKOztFRHNCQTtJQUVJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGVBQUE7RUNwQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMtcHJvdmlkZXIvcHJvZmlsZS1wcm92aWRlci9wcm9maWxlLXByb3ZpZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZPTlRTICovXHJcblxyXG4kZm9udE06IE15cmlhZFBybztcclxuJGZvbnRUOiBUcmVidWNoZXRNUztcclxuXHJcblxyXG4vLyBDT0xPUlMgXHJcblxyXG5cclxuJGNvbG9yMTogI2ZmZTI2NjtcclxuJGNvbG9yMjogIzEzYmY5ZTtcclxuJGNvbG9yMzogIzMzMzMzMztcclxuJGNvbG9yNDogIzRkNGQ0ZDtcclxuJGNvbG9yNTogIzgwODA4MDtcclxuJGNvbG9yNjogI0E5QUJBRTtcclxuJGNvbG9yNzogI2U2ZTZlNjtcclxuJGNvbG9yODogI2VjN2M4YjtcclxuJGNvbG9yOTogIzAwYTE5ODtcclxuJGNvbG9yMTA6ICMzMTQ4OGE7XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG5cclxuLmNhcnJ1c2Vse1xyXG5cclxuICAgIC5pdGVte1xyXG5cclxuICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4ubGluZWF7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggJGNvbG9yNztcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgICBwe1xyXG4gICAgICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuLnNlYXJjaHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICA6OnBsYWNlaG9sZGVye1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3I1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyNyU7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDI2cHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAyLjVweCBzb2xpZCAgJGNvbG9yMTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMCk7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDU4cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICA6Zm9jdXN7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5tYWluLXBob3Rve1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjc7XHJcbiAgICBtaW4taGVpZ2h0OiAyNXZ3O1xyXG4gICAgbWluLXdpZHRoOiAyNXZ3O1xyXG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xyXG59XHJcblxyXG4uaW1nUHJvZmlsZUVkaXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtaW4taGVpZ2h0OiAyNXZ3O1xyXG4gICAgbWluLXdpZHRoOiAyNXZ3O1xyXG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGR7XHJcbiAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi5saW5rLXVuc3R5bGVke1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxufVxyXG5cclxuLnN3aXRjaCBpbnB1dCB7IFxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yMjtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4ICRjb2xvcjI7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCk7XHJcbn1cclxuXHJcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4uc2xpZGVyLnJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG59XHJcblxyXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuLy9MT0FEXHJcblxyXG4ubG9hZHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZiwgJGFscGhhOiAuOSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG9wYWNpdHk6IC45O1xyXG4gICAgfVxyXG59XHJcblxyXG46Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubWFpbi1waG90b3sgICAgXHJcbiAgICAgIG1pbi1oZWlnaHQ6IDkwdnc7XHJcbiAgICAgIG1pbi13aWR0aDogOTB2dztcclxuICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gIH1cclxuXHJcbiAgLmltZ1Byb2ZpbGVFZGl0e1xyXG4gICAgICBcclxuICAgICAgbWluLWhlaWdodDogOTB2dztcclxuICAgICAgbWluLXdpZHRoOiA5MHZ3O1xyXG4gICAgICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgICBcclxuICB9XHJcbn0iLCIvKiBGT05UUyAqL1xuLmNhcnJ1c2VsIC5pdGVtIC5pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5saW5lYSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjZTZlNmU2O1xufVxuXG4ubWVudSBwIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2VhcmNoIHtcbiAgZmxleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlYXJjaCA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cbi5zZWFyY2ggaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI3JTtcbiAgbGVmdDogMjBweDtcbiAgbWF4LXdpZHRoOiAyNnB4O1xufVxuLnNlYXJjaCBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMi41cHggc29saWQgI2ZmZTI2NjtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1OHB4O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuLnNlYXJjaCA6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4ubWFpbi1waG90byB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIG1pbi1oZWlnaHQ6IDI1dnc7XG4gIG1pbi13aWR0aDogMjV2dztcbiAgbWF4LXdpZHRoOiAyNXZ3O1xufVxuXG4uaW1nUHJvZmlsZUVkaXQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogMjV2dztcbiAgbWluLXdpZHRoOiAyNXZ3O1xuICBtYXgtd2lkdGg6IDI1dnc7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmFkZCB7XG4gIG1heC13aWR0aDogNDBweDtcbn1cblxuLmxpbmstdW5zdHlsZWQge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbGVmdDogNHB4O1xuICBib3R0b206IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNiZjllO1xufVxuXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMxM2JmOWU7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCk7XG59XG5cbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubG9hZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2FkIGltZyB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5tYWluLXBob3RvIHtcbiAgICBtaW4taGVpZ2h0OiA5MHZ3O1xuICAgIG1pbi13aWR0aDogOTB2dztcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gIH1cblxuICAuaW1nUHJvZmlsZUVkaXQge1xuICAgIG1pbi1oZWlnaHQ6IDkwdnc7XG4gICAgbWluLXdpZHRoOiA5MHZ3O1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tabs-provider/profile-provider/profile-provider.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/profile-provider/profile-provider.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ProfileProviderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileProviderPage", function() { return ProfileProviderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");






let ProfileProviderPage = class ProfileProviderPage {
    constructor(router, api, cookie, general) {
        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.general = general;
        this.urlBackEnd = this.general.getUrlImages('profile');
        this.productsSection = false;
        this.featuredSection = false;
        this.offersSection = false;
        this.isLoad = false;
    }
    ngOnInit() {
        this.validateSession();
        this.getCompanyData();
        this.getSections();
    }
    validateSession() {
        if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
        }
        else {
            window.location.href = '/login';
        }
    }
    getCompanyData() {
        this.isLoad = true;
        let data = {
            userid: this.user.user.id,
            token: this.user.token,
            service: 'get-company-data'
        };
        this.api.api(data).subscribe(result => {
            this.api.c('getCompanyData', result);
            this.isLoad = false;
            this.companyData = result;
        }, error => {
            this.api.c('Error getCompanyData', error);
        });
    }
    getSections() {
        this.isLoad = true;
        let data = {
            userid: this.user.user.id,
            token: this.user.token,
            service: 'get-sections'
        };
        this.api.api(data).subscribe((result) => {
            this.api.c('getSections', result);
            this.isLoad = false;
            if (result.status) {
                if (result.data.products == 1) {
                    this.productsSection = true;
                }
                if (result.data.featured == 1) {
                    this.featuredSection = true;
                }
                if (result.data.offers == 1) {
                    this.offersSection = true;
                }
            }
        }, error => {
            this.api.c('Error getSections', error);
        });
    }
    onChangeSections() {
        this.isLoad = true;
        let data = {
            userid: this.user.user.id,
            token: this.user.token,
            products: this.productsSection,
            featured: this.featuredSection,
            offers: this.offersSection,
            service: 'save-sections'
        };
        this.api.api(data).subscribe((result) => {
            this.isLoad = false;
            this.api.c('saveSections', result);
        }, error => {
            this.api.c('Error saveSections', error);
        });
    }
    getUriImage(image) {
        return encodeURI(image);
    }
};
ProfileProviderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"] }
];
ProfileProviderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-provider',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-provider.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/profile-provider/profile-provider.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-provider.page.scss */ "./src/app/pages/tabs-provider/profile-provider/profile-provider.page.scss")).default]
    })
], ProfileProviderPage);



/***/ })

}]);
//# sourceMappingURL=profile-provider-profile-provider-module-es2015.js.map
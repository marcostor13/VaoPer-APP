function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-offers-edit-offers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.page.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.page.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsProviderPortfolioOffersProviderEditOffersEditOffersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>edit-offers</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <header class=\"pt-3 pr-3 pl-3\">\n      <button [routerLink]=\"['/tabs-provider/portfolio/offers-provider']\" class=\"btn1 pt-2 pb-2\">Regresar</button>\n    </header>\n    \n    \n    <hr class=\"linea\">\n    \n    <div class=\"p-3 col-12 col-xl-5 pb-5 mb-5\">\n    \n      <div class=\"form-group mt-2\">\n        <label class=\"text-danger f-9\">* Requerido</label>\n        <div class=\"inputImage cursor\">\n          <input (change)=\"fileChangeEvent($event)\" accept=\"image/*\" type=\"file\" class=\"form-control\" [(ngModel)]=\"image\">\n          <div class=\"cursor\">Seleccione una imagen</div>\n        </div>\n      </div>\n      <div class=\"row justify-content-center mtprev\">\n        <div class=\"row flex-column m-0 align-items-center justify-content-center\">\n          <div class=\"img-item m-2\" [ngStyle]=\"{'background-image': 'url('+croppedImage+')'}\"></div>\n        </div>\n      </div>\n    \n      <div class=\"form-group mt-2\">\n        <label class=\"text-danger f-9\">* Requerido</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese el nombre\" [(ngModel)]=\"name\">\n      </div>\n      <div class=\"form-group mt-2\">\n        <label class=\"text-danger f-9\">* Requerido</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese la descripción\" [(ngModel)]=\"description\">\n      </div>\n      <div class=\"form-group mt-2\">\n        <label class=\"text-danger f-9\">* Requerido</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese el precio\" [(ngModel)]=\"price\">\n      </div>\n    \n    \n    \n      <div class=\"sections row m-0 align-items-center\">\n        <label class=\"switch\">\n          <input type=\"checkbox\" [(ngModel)]=\"enable\">\n          <span class=\"slider round\"></span>\n        </label>\n        <p class=\"ml-4 font-700 p-0 mb-2\">Inactiva / Activa</p>\n      </div>\n    \n      <div class=\"row justify-content-end m-0 col-12\">\n        <button (click)=\"saveOffer()\" class=\"btn1 font-700 pt-2 pb-2\">Guardar</button>\n      </div>\n      <div class=\"form-group mt-2\">\n        <p [ngClass]=\"{'text-danger': invalid}\" class=\"text-color4 font-700 text-center\">{{response}}</p>\n      </div>\n    \n    </div>\n    \n    <div *ngIf=\"isLoad\" class=\"load\">\n      <img src=\"/assets/img/partials/load.svg\">\n    </div>\n    \n    <!-- <app-menu-provider active=\"portfolio\"></app-menu-provider> -->\n    \n    <div class=\"modal \" *ngIf=\"isVisibleCortar\">\n    \n      <div class=\"content-modal modal2 p-5\">\n        <div class=\"header-modal row m-0 justify-content-between align-items-center\">\n          <h6 class=\"title-modal font-700 text-color2\">Cortar Imagen</h6>\n          <img (click)=\"handleCancelCortar()\" width=\"20\" src=\"assets/img/partials/close.svg\">\n        </div>\n    \n        <div class=\"form-group mt-2\">\n          <div class=\"row\" style=\"margin-top: 5%;\">\n            <div class=\"text-center col-md-8\">\n              <h5>Cortar Imagen</h5>\n              <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [imageQuality]=\"100\" [aspectRatio]=\"1 / 1\"\n                [resizeToWidth]=\"0\" format=\"png\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\"\n                (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\n            </div>\n            <div class=\"text-center col-md-4\">\n              <h5>Previsualizar</h5>\n              <img class=\"source-image\" [src]=\"croppedImage\" />\n            </div>\n          </div>\n        </div>\n    \n        <div class=\"mt-3 row justify-content-end\">\n          <button (click)=\"handleOkCortar()\" class=\"btn1 pl-3 pr-3 pt-1 pb-1 mr-3\">Terminar</button>\n        </div>\n    \n      </div>\n    \n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers-routing.module.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers-routing.module.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: EditOffersPageRoutingModule */

  /***/
  function srcAppPagesTabsProviderPortfolioOffersProviderEditOffersEditOffersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditOffersPageRoutingModule", function () {
      return EditOffersPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _edit_offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-offers.page */
    "./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.page.ts");

    var routes = [{
      path: '',
      component: _edit_offers_page__WEBPACK_IMPORTED_MODULE_3__["EditOffersPage"]
    }];

    var EditOffersPageRoutingModule = function EditOffersPageRoutingModule() {
      _classCallCheck(this, EditOffersPageRoutingModule);
    };

    EditOffersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditOffersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.module.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.module.ts ***!
    \*************************************************************************************************/

  /*! exports provided: EditOffersPageModule */

  /***/
  function srcAppPagesTabsProviderPortfolioOffersProviderEditOffersEditOffersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditOffersPageModule", function () {
      return EditOffersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _edit_offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-offers-routing.module */
    "./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers-routing.module.ts");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _edit_offers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./edit-offers.page */
    "./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.page.ts");

    var EditOffersPageModule = function EditOffersPageModule() {
      _classCallCheck(this, EditOffersPageModule);
    };

    EditOffersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditOffersPageRoutingModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"]],
      declarations: [_edit_offers_page__WEBPACK_IMPORTED_MODULE_7__["EditOffersPage"]]
    })], EditOffersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.page.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.page.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTabsProviderPortfolioOffersProviderEditOffersEditOffersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* FONTS */\n.carrusel .item .img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  min-width: 100%;\n  min-height: 200px;\n  border-radius: 16px;\n  padding: 10px;\n}\n.menu p {\n  min-width: 20px;\n  min-height: 2px;\n  background-color: white;\n}\n.search {\n  flex: 1;\n  position: relative;\n}\n.search ::-moz-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search ::-ms-input-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search ::placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search img {\n  position: absolute;\n  top: 27%;\n  left: 20px;\n  max-width: 26px;\n}\n.search input {\n  font-size: 12pt;\n  width: 100%;\n  border: 2.5px solid #ffe266;\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0);\n  color: #333333;\n  border-radius: 50px;\n  padding-left: 58px;\n  min-height: 60px;\n}\n.search :focus {\n  outline: 0;\n}\n.main-photo {\n  border-radius: 10px;\n  background-color: #e6e6e6;\n  min-height: 260px;\n}\n.add {\n  max-width: 40px;\n}\n.modal {\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: fixed;\n  min-width: 100vw;\n  min-height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 100;\n}\n.modal .modal-content {\n  border: 0;\n  background-color: white;\n  margin-top: 80px;\n  border-radius: 10px;\n  padding: 20px;\n  min-height: 100px;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 28px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\ninput:checked + .slider {\n  background-color: #13bf9e;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #13bf9e;\n}\ninput:checked + .slider:before {\n  transform: translateX(22px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.load {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.load img {\n  opacity: 0.9;\n}\n.image-cropper {\n  max-height: 500px !important;\n}\n.modal {\n  overflow: auto;\n}\n.modal2 {\n  max-width: 80% !important;\n  position: absolute;\n  top: 150px;\n  margin-bottom: 150px;\n  background-color: white;\n}\n.source-image {\n  max-width: 300px !important;\n}\n.load {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.load img {\n  opacity: 0.9;\n}\n@media (max-width: 1300px) {\n  .modal2 {\n    max-width: 90% !important;\n  }\n}\n@media (max-width: 960px) {\n  .modal2 {\n    max-width: 98% !important;\n  }\n}\n.img-item {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #e6e6e6;\n  background-position: center;\n  min-width: 80px;\n  max-width: 80px;\n  max-height: 80px;\n  min-height: 80px;\n}\n.inputImage {\n  position: relative;\n  cursor: pointer;\n}\n.inputImage input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 2;\n  border-radius: 8px;\n}\n.inputImage div {\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  min-width: 100%;\n  min-height: 46px;\n  background-color: #ffe266;\n  z-index: 1;\n}\n.mtprev {\n  margin-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wb3J0Zm9saW8vb2ZmZXJzLXByb3ZpZGVyL2VkaXQtb2ZmZXJzL0M6XFx3YW1wNjRcXHd3d1xcdmFvcGVydS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMtcHJvdmlkZXIvcG9ydGZvbGlvL29mZmVycy1wcm92aWRlci9lZGl0LW9mZmVycy9DOlxcd2FtcDY0XFx3d3dcXHZhb3BlcnUvc3JjXFxhcHBcXHBhZ2VzXFx0YWJzLXByb3ZpZGVyXFxwb3J0Zm9saW9cXG9mZmVycy1wcm92aWRlclxcZWRpdC1vZmZlcnNcXGVkaXQtb2ZmZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wb3J0Zm9saW8vb2ZmZXJzLXByb3ZpZGVyL2VkaXQtb2ZmZXJzL2VkaXQtb2ZmZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxVQUFBO0FDT1E7RUFDSSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNMWjtBRGFJO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ1ZSO0FEYUE7RUFDSSxPQUFBO0VBQ0Esa0JBQUE7QUNWSjtBRFdJO0VBQ0ksY0RuQkM7RUNvQkQsZUFBQTtBQ1RSO0FET0k7RUFDSSxjRG5CQztFQ29CRCxlQUFBO0FDVFI7QURPSTtFQUNJLGNEbkJDO0VDb0JELGVBQUE7QUNUUjtBRFdJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNUUjtBRFdJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGNEcENDO0VDcUNELG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1RSO0FEWUk7RUFDSSxVQUFBO0FDVlI7QURlQTtFQUNJLG1CQUFBO0VBQ0EseUJEOUNLO0VDK0NMLGlCQUFBO0FDWko7QURlQTtFQUNJLGVBQUE7QUNaSjtBRGdCQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBQ2JKO0FEY0k7RUFDSSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDWlI7QURvQkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNqQkY7QURvQkE7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNqQkY7QURvQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBQ2pCRjtBRG9CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0FDakJGO0FEb0JBO0VBQ0UseUJEM0hPO0FFMEdUO0FEb0JBO0VBQ0UsMkJBQUE7QUNqQkY7QURvQkE7RUFHRSwyQkFBQTtBQ2pCRjtBRG9CQSxvQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUNqQkY7QURvQkE7RUFDRSxrQkFBQTtBQ2pCRjtBRHVCQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDcEJKO0FEcUJJO0VBQ0ksWUFBQTtBQ25CUjtBRHdCQTtFQUNJLDRCQUFBO0FDckJKO0FEMEJBO0VBQ0ksY0FBQTtBQ3ZCSjtBRDBCQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ3ZCSjtBRDZCQTtFQUNJLDJCQUFBO0FDMUJKO0FEZ0NBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUM3Qko7QUQ4Qkk7RUFDSSxZQUFBO0FDNUJSO0FEZ0NBO0VBQ0k7SUFDSSx5QkFBQTtFQzdCTjtBQUNGO0FEaUNBO0VBQ0k7SUFDSSx5QkFBQTtFQy9CTjtBQUNGO0FEb0NBO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCRDVOSztFQzZOTCwyQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2xDSjtBRHFDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ2xDSjtBRG1DSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDakNSO0FEbUNJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJEaFFDO0VDaVFELFVBQUE7QUNqQ1I7QURxQ0E7RUFDRSxnQkFBQTtBQ2xDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMtcHJvdmlkZXIvcG9ydGZvbGlvL29mZmVycy1wcm92aWRlci9lZGl0LW9mZmVycy9lZGl0LW9mZmVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGT05UUyAqL1xyXG5cclxuJGZvbnRNOiBNeXJpYWRQcm87XHJcbiRmb250VDogVHJlYnVjaGV0TVM7XHJcblxyXG5cclxuLy8gQ09MT1JTIFxyXG5cclxuXHJcbiRjb2xvcjE6ICNmZmUyNjY7XHJcbiRjb2xvcjI6ICMxM2JmOWU7XHJcbiRjb2xvcjM6ICMzMzMzMzM7XHJcbiRjb2xvcjQ6ICM0ZDRkNGQ7XHJcbiRjb2xvcjU6ICM4MDgwODA7XHJcbiRjb2xvcjY6ICNBOUFCQUU7XHJcbiRjb2xvcjc6ICNlNmU2ZTY7XHJcbiRjb2xvcjg6ICNlYzdjOGI7XHJcbiRjb2xvcjk6ICMwMGExOTg7XHJcbiRjb2xvcjEwOiAjMzE0ODhhO1xyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuXHJcbi5jYXJydXNlbHtcclxuXHJcbiAgICAuaXRlbXtcclxuXHJcbiAgICAgICAgLmltZ3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuLm1lbnV7XHJcbiAgICBwe1xyXG4gICAgICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuLnNlYXJjaHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICA6OnBsYWNlaG9sZGVye1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3I1O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIH1cclxuICAgIGltZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAyNyU7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDI2cHg7XHJcbiAgICB9XHJcbiAgICBpbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAyLjVweCBzb2xpZCAgJGNvbG9yMTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMCk7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDU4cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICA6Zm9jdXN7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5tYWluLXBob3Rve1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjc7XHJcbiAgICBtaW4taGVpZ2h0OiAyNjBweDtcclxufVxyXG5cclxuLmFkZHtcclxuICAgIG1heC13aWR0aDogNDBweDtcclxufVxyXG5cclxuXHJcbi5tb2RhbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgICAgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLm1vZGFsLWNvbnRlbnR7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gU1dJVENIXHJcblxyXG5cclxuLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQgeyBcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgbGVmdDogNHB4O1xyXG4gIGJvdHRvbTogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjI7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDFweCAkY29sb3IyO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjJweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xyXG59XHJcblxyXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuLnNsaWRlci5yb3VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcclxufVxyXG5cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuXHJcbi8vTE9BRFxyXG5cclxuLmxvYWR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogLjkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICBvcGFjaXR5OiAuOTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5pbWFnZS1jcm9wcGVye1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4ubW9kYWx7XHJcbiAgICBvdmVyZmxvdzogYXV0bzsgICAgXHJcbn1cclxuXHJcbi5tb2RhbDJ7XHJcbiAgICBtYXgtd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgLy8gbWF4LWhlaWdodDogO1xyXG59XHJcblxyXG4uc291cmNlLWltYWdle1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLy9MT0FEXHJcblxyXG4ubG9hZHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZiwgJGFscGhhOiAuOSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG9wYWNpdHk6IC45O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAubW9kYWwye1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gbWF4LWhlaWdodDogO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIC5tb2RhbDJ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5OCUgIWltcG9ydGFudDtcclxuICAgICAgICAvLyBtYXgtaGVpZ2h0OiA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uaW1nLWl0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjc7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICAgICAgICAgICAgXHJcbiAgICBtaW4td2lkdGg6IDgwcHg7ICAgICAgICBcclxuICAgIG1heC13aWR0aDogODBweDsgICAgICAgIFxyXG4gICAgbWF4LWhlaWdodDogODBweDsgICAgICAgIFxyXG4gICAgbWluLWhlaWdodDogODBweDtcclxufVxyXG5cclxuLmlucHV0SW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpbnB1dHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuICAgIGRpdntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxufVxyXG5cclxuLm10cHJldntcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59IiwiLyogRk9OVFMgKi9cbi5jYXJydXNlbCAuaXRlbSAuaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWVudSBwIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2VhcmNoIHtcbiAgZmxleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlYXJjaCA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cbi5zZWFyY2ggaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI3JTtcbiAgbGVmdDogMjBweDtcbiAgbWF4LXdpZHRoOiAyNnB4O1xufVxuLnNlYXJjaCBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMi41cHggc29saWQgI2ZmZTI2NjtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1OHB4O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuLnNlYXJjaCA6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4ubWFpbi1waG90byB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIG1pbi1oZWlnaHQ6IDI2MHB4O1xufVxuXG4uYWRkIHtcbiAgbWF4LXdpZHRoOiA0MHB4O1xufVxuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzYmY5ZTtcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMTNiZjllO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIycHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxvYWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9hZCBpbWcge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5pbWFnZS1jcm9wcGVyIHtcbiAgbWF4LWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbn1cblxuLm1vZGFsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tb2RhbDIge1xuICBtYXgtd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNvdXJjZS1pbWFnZSB7XG4gIG1heC13aWR0aDogMzAwcHggIWltcG9ydGFudDtcbn1cblxuLmxvYWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9hZCBpbWcge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLm1vZGFsMiB7XG4gICAgbWF4LXdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5tb2RhbDIge1xuICAgIG1heC13aWR0aDogOTglICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5pbWctaXRlbSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbi5pbnB1dEltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5wdXRJbWFnZSBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uaW5wdXRJbWFnZSBkaXYge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0NnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMjY2O1xuICB6LWluZGV4OiAxO1xufVxuXG4ubXRwcmV2IHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.page.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.page.ts ***!
    \***********************************************************************************************/

  /*! exports provided: EditOffersPage */

  /***/
  function srcAppPagesTabsProviderPortfolioOffersProviderEditOffersEditOffersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditOffersPage", function () {
      return EditOffersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/general.service */
    "./src/app/services/general.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var EditOffersPage = /*#__PURE__*/function () {
      function EditOffersPage(route, router, api, cookie, general, storage) {
        var _this = this;

        _classCallCheck(this, EditOffersPage);

        this.route = route;
        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.general = general;
        this.storage = storage;
        this.isVisible = false;
        this.contentModal = null;
        this.fileToUpload = null;
        this.nameInputFile = '';
        this.name = '';
        this.description = '';
        this.price = '';
        this.response = '';
        this.offer = {};
        this.image = '';
        this.startDate = '';
        this.endDate = '';
        this.enable = true;
        this.isLoad = false; //MODAL

        this.isVisibleModal = false;
        this.isVisibleCortar = false; //Upload

        this.title = "cloudsSorage";
        this.selectedFile = null;
        this.previewImage = '';
        this.previewVisible = false;
        this.invalid = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';

        this.handleUpload = function (item) {
          _this.isLoad = true;
          var n = Date.now();
          var filePath = "offers/".concat(n);

          var fileRef = _this.storage.ref(filePath);

          var task = _this.storage.upload("offers/".concat(n), item);

          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();

            _this.downloadURL.subscribe(function (url) {
              if (url) {
                _this.croppedImage = url;
                _this.isLoad = false;
              }

              console.log('fb', url);
            });
          })).subscribe(function (url) {
            if (url) {// console.log('url subscribe', url);
            }
          });
        };

        this.id = this.route.snapshot.paramMap.get('id');
      }

      _createClass(EditOffersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validateSession();

          if (this.id != 0) {
            this.getOfferByID();
          }
        }
      }, {
        key: "validateSession",
        value: function validateSession() {
          if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
          } else {
            window.location.href = '/login';
          }
        }
      }, {
        key: "back",
        value: function back() {
          window.history.back();
        }
      }, {
        key: "getOfferByID",
        value: function getOfferByID() {
          var _this2 = this;

          var data = {
            service: 'get-offer-by-id',
            userid: this.user.user.id,
            offerid: this.id,
            token: this.user.token
          };
          this.api.c('getOfferByID pre', data);
          this.api.api(data).subscribe(function (res) {
            _this2.api.c('getOfferByID', res);

            if (res.status) {
              _this2.name = res.data.name;
              _this2.description = res.data.description.replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n');
              _this2.price = res.data.price;
              _this2.croppedImage = res.data.image;
              _this2.enable = res.data.enable == 1 ? true : false; // this.startDate = res.data.startDate,
              // this.endDate = res.data.endDate
            } else {
              _this2.api.c('getOfferByID false', res);
            }
          }, function (error) {
            _this2.api.c('getOfferByID error', error);
          });
        }
      }, {
        key: "saveOffer",
        value: function saveOffer() {
          var _this3 = this;

          if (this.name == '' || this.croppedImage == '' || this.name == '' || this.description == '' || this.price == '') {
            this.invalid = true;
            this.response = 'Debe completar todos los campos';
          } else {
            this.isLoad = true;
            var formData = new FormData();
            formData.append('image', this.croppedImage);
            formData.append('name', this.name);
            formData.append('description', this.description);
            formData.append('price', this.price); // formData.append('startDate', this.startDate)
            // formData.append('endDate', this.endDate)

            if (this.enable) {
              formData.append('enable', '1');
            } else {
              formData.append('enable', '0');
            }

            formData.append('token', this.user.token);
            formData.append('userid', this.user.user.id);
            formData.append('offerid', this.id);
            formData.append('type', 'offer');
            var headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            var data = {
              service: 'save-offer',
              data: formData,
              extra: {
                headers: headers
              }
            };
            this.api.c('saveOffer pre', data);
            this.api.apiUpload(data).subscribe(function (res) {
              _this3.api.c('saveOffer res', res);

              _this3.isLoad = false;

              if (res.status) {
                _this3.response = res.message;

                if (_this3.id == 0) {
                  _this3.name = '';
                  _this3.description = '';
                  _this3.image = '';
                  _this3.startDate = '';
                  _this3.endDate = '';
                }
              } else {
                _this3.api.c('saveOffer', res);
              }
            }, function (error) {
              _this3.api.c('saveOffer error', error);
            });
          }
        }
      }, {
        key: "editDescriptionProduct",
        value: function editDescriptionProduct() {}
      }, {
        key: "editPriceProduct",
        value: function editPriceProduct() {}
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files) {
          this.fileToUpload = null;
          this.fileToUpload = files.item(0);
          this.nameInputFile = files.item(0).name;
          this.api.c('handleFileInput', this.nameInputFile);
        }
      }, {
        key: "showModal",
        value: function showModal(type) {
          this.contentModal = type;
          this.isVisible = true;
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          this.showModalCortar();
          this.imageChangedEvent = event; // this.api.c('fileChangeEvent', event)
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {// this.api.c('imageLoaded', 'ok')
        }
      }, {
        key: "cropperReady",
        value: function cropperReady() {// this.api.c('cropperReady', 'ok')
        }
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {// this.api.c('loadImageFailed', 'ok')
        } //MODAL

      }, {
        key: "showModalCortar",
        value: function showModalCortar() {
          this.isVisibleCortar = true;
        }
      }, {
        key: "dataURItoBlob",
        value: function dataURItoBlob(dataURI) {
          var byteString = window.atob(dataURI.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
          var arrayBuffer = new ArrayBuffer(byteString.length);
          var int8Array = new Uint8Array(arrayBuffer);

          for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
          }

          var blob = new Blob([int8Array], {
            type: 'image/png'
          });
          return blob;
        }
      }, {
        key: "handleOkCortar",
        value: function handleOkCortar() {
          // this.api.c('croppedImage', this.croppedImage)
          this.isVisibleCortar = false;
          var imageName = "name.png";
          var imageBlob = this.dataURItoBlob(this.croppedImage);
          var imageFile = new File([imageBlob], imageName, {
            type: 'image/png'
          });
          this.handleUpload(imageFile);
        }
      }, {
        key: "handleCancelCortar",
        value: function handleCancelCortar() {
          this.isVisibleCortar = false;
        }
      }]);

      return EditOffersPage;
    }();

    EditOffersPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]
      }];
    };

    EditOffersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-offers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-offers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-offers.page.scss */
      "./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.page.scss"))["default"]]
    })], EditOffersPage);
    /***/
  }
}]);
//# sourceMappingURL=edit-offers-edit-offers-module-es5.js.map
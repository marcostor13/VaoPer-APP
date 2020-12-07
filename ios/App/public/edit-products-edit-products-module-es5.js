function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-products-edit-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.page.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.page.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsProviderPortfolioProductsProviderEditProductsEditProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>edit-products</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <header class=\"pt-3 pr-3 pl-3\">\n      <button [routerLink]=\"['/tabs-provider/portfolio/products-provider']\"   class=\"btn1 pt-2 pb-2\">Regresar</button>\n  </header>\n\n  <hr class=\"linea\">\n\n  <div class=\"p-3 col-xl-5 col-12\">\n      <h4>Imágenes</h4>\n      <div class=\"form-group mt-2\">\n          <div class=\"inputImage\">\n              <input (change)=\"fileChangeEvent($event)\" accept=\"image/*\" type=\"file\" class=\"form-control\" [(ngModel)]=\"image\">\n              <!-- <ion-input type=\"file\" accept=\"image/*\"  class=\"form-control\" [(ngModel)]=\"image\" (ionChange)=\"fileChangeEvent($event)\"></ion-input> -->\n              <div>Seleccione una imagen</div>\n          </div>\n      </div>\n      <div class=\"row justify-content-center mt-5\">     \n          <div *ngFor=\"let ima of imagesArray; index as i;\" class=\"row flex-column m-0 align-items-center justify-content-center\">\n              <div class=\"img-item m-2\"  [ngStyle]=\"{'background-image': 'url('+ima.image+')'}\"></div>\n              <label title=\"Eliminar\" (click)=\"deleteProductImage(i, ima.image)\" class=\"pi pi-times text-danger font-900 cursor f-16\">X</label>\n              <div></div>\n          </div>  \n      </div>\n      <hr>\n  </div>\n\n  <div class=\"p-3 col-xl-5 col-12 pb-5 mb-5\">    \n      <div class=\"form-group mt-2\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese el nombre\" [(ngModel)]=\"name\">\n      </div>\n      <div class=\"form-group mt-2\">\n          <textarea name=\"\" id=\"\" cols=\"30\" rows=\"4\" class=\"form-control\" placeholder=\"Ingrese la descripción\" [(ngModel)]=\"description\"></textarea> \n      </div>\n      <div class=\"form-group mt-2\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese el precio\" [(ngModel)]=\"price\">\n      </div>\n      <div class=\"row justify-content-end m-0 col-12\">\n          <button (click)=\"saveProduct()\" class=\"btn1 font-700 pt-2 pb-2\">Guardar</button>\n      </div>\n      <div class=\"form-group mt-2\">\n          <p class=\"text-color4 font-700 text-center\">{{response}}</p>\n      </div>\n  </div>\n\n  <div *ngIf=\"isLoad\" class=\"load\">\n      <img src=\"/assets/img/partials/load.svg\">\n  </div>\n\n  <div class=\"modal\" *ngIf=\"isVisibleCortar\">\n\n      <div class=\"content-modal modal2 p-5\">\n          <div class=\"header-modal row m-0 justify-content-between align-items-center\">\n              <h6 class=\"title-modal font-700 text-color2\">Cortar Imagen</h6>\n              <img (click)=\"handleCancelCortar()\" width=\"20\" src=\"assets/img/partials/close.svg\">\n          </div>\n\n          <div class=\"form-group mt-2\">\n              <div class=\"row\" style=\"margin-top: 5%;\">\n                  <div class=\"text-center col-md-8\">\n                      <h5>Cortar Imagen</h5>\n                      <image-cropper \n                      [imageChangedEvent]=\"imageChangedEvent\" \n                      [maintainAspectRatio]=\"true\" \n                      [aspectRatio]=\"1 / 1\"\n                      [resizeToWidth]=\"0\" \n                      [imageQuality]=\"100\" \n                      format=\"png\" \n                      (imageCropped)=\"imageCropped($event)\" \n                      (imageLoaded)=\"imageLoaded()\"\n                      (cropperReady)=\"cropperReady()\" \n                      (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\n                  </div>\n                  <div class=\"text-center col-md-4\">\n                      <h5>Previsualizar</h5>\n                      <img class=\"source-image\" [src]=\"croppedImage\" />\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"mt-3 row justify-content-end\">\n              <button (click)=\"handleOkCortar()\" class=\"btn1 pl-3 pr-3 pt-1 pb-1 mr-3\">Terminar</button>\n          </div>\n\n      </div>\n\n  </div>\n\n\n  <!-- <app-menu-provider active=\"portfolio\"></app-menu-provider> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products-routing.module.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products-routing.module.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: EditProductsPageRoutingModule */

  /***/
  function srcAppPagesTabsProviderPortfolioProductsProviderEditProductsEditProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductsPageRoutingModule", function () {
      return EditProductsPageRoutingModule;
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


    var _edit_products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-products.page */
    "./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.page.ts");

    var routes = [{
      path: '',
      component: _edit_products_page__WEBPACK_IMPORTED_MODULE_3__["EditProductsPage"]
    }];

    var EditProductsPageRoutingModule = function EditProductsPageRoutingModule() {
      _classCallCheck(this, EditProductsPageRoutingModule);
    };

    EditProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditProductsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.module.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.module.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: EditProductsPageModule */

  /***/
  function srcAppPagesTabsProviderPortfolioProductsProviderEditProductsEditProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductsPageModule", function () {
      return EditProductsPageModule;
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


    var _edit_products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-products-routing.module */
    "./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products-routing.module.ts");
    /* harmony import */


    var _edit_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-products.page */
    "./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.page.ts");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

    var EditProductsPageModule = function EditProductsPageModule() {
      _classCallCheck(this, EditProductsPageModule);
    };

    EditProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_products_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProductsPageRoutingModule"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]],
      declarations: [_edit_products_page__WEBPACK_IMPORTED_MODULE_6__["EditProductsPage"]]
    })], EditProductsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.page.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.page.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTabsProviderPortfolioProductsProviderEditProductsEditProductsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* FONTS */\n.carrusel .item .img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  min-width: 100%;\n  min-height: 200px;\n  border-radius: 16px;\n  padding: 10px;\n}\n.menu p {\n  min-width: 20px;\n  min-height: 2px;\n  background-color: white;\n}\n.search {\n  flex: 1;\n  position: relative;\n}\n.search ::-moz-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search ::-ms-input-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search ::placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.search img {\n  position: absolute;\n  top: 27%;\n  left: 20px;\n  max-width: 26px;\n}\n.search input {\n  font-size: 12pt;\n  width: 100%;\n  border: 2.5px solid #ffe266;\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0);\n  color: #333333;\n  border-radius: 50px;\n  padding-left: 58px;\n  min-height: 60px;\n}\n.search :focus {\n  outline: 0;\n}\n.main-photo {\n  border-radius: 10px;\n  background-color: #e6e6e6;\n  min-height: 260px;\n}\n.add {\n  max-width: 40px;\n}\n.modal {\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: fixed;\n  min-width: 100vw;\n  min-height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 100;\n}\n.modal .modal-content {\n  border: 0;\n  background-color: white;\n  margin-top: 80px;\n  border-radius: 10px;\n  padding: 20px;\n  min-height: 100px;\n}\n.load {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.load img {\n  opacity: 0.9;\n}\n.image-cropper {\n  max-height: 500px !important;\n}\n.source-image {\n  max-width: 300px !important;\n}\n.modal {\n  overflow: auto;\n}\n.modal2 {\n  max-width: 90% !important;\n  min-width: 90% !important;\n  position: absolute;\n  top: 150px;\n  margin-bottom: 150px;\n  background-color: white;\n}\n@media (max-width: 1300px) {\n  .modal2 {\n    max-width: 90% !important;\n  }\n}\n@media (max-width: 960px) {\n  .modal2 {\n    max-width: 98% !important;\n  }\n}\n.img-item {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #e6e6e6;\n  background-position: center;\n  min-width: 80px;\n  max-width: 80px;\n  max-height: 80px;\n  min-height: 80px;\n}\n.inputImage {\n  position: relative;\n  cursor: pointer;\n}\n.inputImage input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 2;\n  border-radius: 8px;\n}\n.inputImage div {\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  min-width: 100%;\n  min-height: 40px;\n  background-color: #ffe266;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wb3J0Zm9saW8vcHJvZHVjdHMtcHJvdmlkZXIvZWRpdC1wcm9kdWN0cy9DOlxcd2FtcDY0XFx3d3dcXHZhb3BlcnUvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzLXByb3ZpZGVyL3BvcnRmb2xpby9wcm9kdWN0cy1wcm92aWRlci9lZGl0LXByb2R1Y3RzL0M6XFx3YW1wNjRcXHd3d1xcdmFvcGVydS9zcmNcXGFwcFxccGFnZXNcXHRhYnMtcHJvdmlkZXJcXHBvcnRmb2xpb1xccHJvZHVjdHMtcHJvdmlkZXJcXGVkaXQtcHJvZHVjdHNcXGVkaXQtcHJvZHVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzLXByb3ZpZGVyL3BvcnRmb2xpby9wcm9kdWN0cy1wcm92aWRlci9lZGl0LXByb2R1Y3RzL2VkaXQtcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUNPUTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0xaO0FEYUk7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDVlI7QURhQTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtBQ1ZKO0FEV0k7RUFDSSxjRG5CQztFQ29CRCxlQUFBO0FDVFI7QURPSTtFQUNJLGNEbkJDO0VDb0JELGVBQUE7QUNUUjtBRE9JO0VBQ0ksY0RuQkM7RUNvQkQsZUFBQTtBQ1RSO0FEV0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ1RSO0FEV0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0RwQ0M7RUNxQ0QsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDVFI7QURZSTtFQUNJLFVBQUE7QUNWUjtBRGVBO0VBQ0ksbUJBQUE7RUFDQSx5QkQ5Q0s7RUMrQ0wsaUJBQUE7QUNaSjtBRGVBO0VBQ0ksZUFBQTtBQ1pKO0FEZ0JBO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDYko7QURjSTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNaUjtBRG1CQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDaEJKO0FEaUJJO0VBQ0ksWUFBQTtBQ2ZSO0FEbUJBO0VBQ0ksNEJBQUE7QUNoQko7QURtQkE7RUFDSSwyQkFBQTtBQ2hCSjtBRHFCQTtFQUNJLGNBQUE7QUNsQko7QURxQkE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ2xCSjtBRHdCQTtFQUNJO0lBQ0kseUJBQUE7RUNyQk47QUFDRjtBRHlCQTtFQUNJO0lBQ0kseUJBQUE7RUN2Qk47QUFDRjtBRDRCQTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkQxSUs7RUMySUwsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUMxQko7QUQ2QkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUMxQko7QUQyQkk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ3pCUjtBRDJCSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCRDlLQztFQytLRCxVQUFBO0FDekJSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wb3J0Zm9saW8vcHJvZHVjdHMtcHJvdmlkZXIvZWRpdC1wcm9kdWN0cy9lZGl0LXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZPTlRTICovXHJcblxyXG4kZm9udE06IE15cmlhZFBybztcclxuJGZvbnRUOiBUcmVidWNoZXRNUztcclxuXHJcblxyXG4vLyBDT0xPUlMgXHJcblxyXG5cclxuJGNvbG9yMTogI2ZmZTI2NjtcclxuJGNvbG9yMjogIzEzYmY5ZTtcclxuJGNvbG9yMzogIzMzMzMzMztcclxuJGNvbG9yNDogIzRkNGQ0ZDtcclxuJGNvbG9yNTogIzgwODA4MDtcclxuJGNvbG9yNjogI0E5QUJBRTtcclxuJGNvbG9yNzogI2U2ZTZlNjtcclxuJGNvbG9yODogI2VjN2M4YjtcclxuJGNvbG9yOTogIzAwYTE5ODtcclxuJGNvbG9yMTA6ICMzMTQ4OGE7XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG5cclxuLmNhcnJ1c2Vse1xyXG5cclxuICAgIC5pdGVte1xyXG5cclxuICAgICAgICAuaW1ne1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4ubWVudXtcclxuICAgIHB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxufVxyXG4uc2VhcmNoe1xyXG4gICAgZmxleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIDo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvcjU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDI3JTtcclxuICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMjZweDtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXI6IDIuNXB4IHNvbGlkICAkY29sb3IxO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwKTtcclxuICAgICAgICBjb2xvcjogJGNvbG9yMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNThweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIDpmb2N1c3tcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLm1haW4tcGhvdG97XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yNztcclxuICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xyXG59XHJcblxyXG4uYWRke1xyXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xyXG59XHJcblxyXG5cclxuLm1vZGFse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC40KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAgICBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAubW9kYWwtY29udGVudHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL0xPQURcclxuXHJcbi5sb2Fke1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IC45KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgb3BhY2l0eTogLjk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbWFnZS1jcm9wcGVye1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNvdXJjZS1pbWFnZXtcclxuICAgIG1heC13aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG4ubW9kYWx7XHJcbiAgICBvdmVyZmxvdzogYXV0bzsgICAgXHJcbn1cclxuXHJcbi5tb2RhbDJ7XHJcbiAgICBtYXgtd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICAgIC8vIG1heC1oZWlnaHQ6IDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgLm1vZGFsMntcclxuICAgICAgICBtYXgtd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIG1heC1oZWlnaHQ6IDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAubW9kYWwye1xyXG4gICAgICAgIG1heC13aWR0aDogOTglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gbWF4LWhlaWdodDogO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmltZy1pdGVte1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I3O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAgICAgICAgICAgIFxyXG4gICAgbWluLXdpZHRoOiA4MHB4OyAgICAgICAgXHJcbiAgICBtYXgtd2lkdGg6IDgwcHg7ICAgICAgICBcclxuICAgIG1heC1oZWlnaHQ6IDgwcHg7ICAgICAgICBcclxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5pbnB1dEltYWdle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaW5wdXR7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3IxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbn0iLCIvKiBGT05UUyAqL1xuLmNhcnJ1c2VsIC5pdGVtIC5pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tZW51IHAge1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5zZWFyY2gge1xuICBmbGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VhcmNoIDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzgwODA4MDtcbiAgZm9udC1zaXplOiAxMnB0O1xufVxuLnNlYXJjaCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjclO1xuICBsZWZ0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDI2cHg7XG59XG4uc2VhcmNoIGlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAyLjVweCBzb2xpZCAjZmZlMjY2O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDU4cHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG59XG4uc2VhcmNoIDpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5tYWluLXBob3RvIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgbWluLWhlaWdodDogMjYwcHg7XG59XG5cbi5hZGQge1xuICBtYXgtd2lkdGg6IDQwcHg7XG59XG5cbi5tb2RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5tb2RhbCAubW9kYWwtY29udGVudCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xufVxuXG4ubG9hZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2FkIGltZyB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLmltYWdlLWNyb3BwZXIge1xuICBtYXgtaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xufVxuXG4uc291cmNlLWltYWdlIHtcbiAgbWF4LXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1vZGFsMiB7XG4gIG1heC13aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5tb2RhbDIge1xuICAgIG1heC13aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5NjBweCkge1xuICAubW9kYWwyIHtcbiAgICBtYXgtd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xuICB9XG59XG4uaW1nLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBtYXgtaGVpZ2h0OiA4MHB4O1xuICBtaW4taGVpZ2h0OiA4MHB4O1xufVxuXG4uaW5wdXRJbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmlucHV0SW1hZ2UgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmlucHV0SW1hZ2UgZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTI2NjtcbiAgei1pbmRleDogMTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.page.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.page.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: EditProductsPage */

  /***/
  function srcAppPagesTabsProviderPortfolioProductsProviderEditProductsEditProductsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductsPage", function () {
      return EditProductsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var EditProductsPage = /*#__PURE__*/function () {
      function EditProductsPage(route, router, api, cookie, general, storage, modalController) {
        var _this = this;

        _classCallCheck(this, EditProductsPage);

        this.route = route;
        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.general = general;
        this.storage = storage;
        this.modalController = modalController;
        this.isVisible = false;
        this.contentModal = null;
        this.fileToUpload = null;
        this.nameInputFile = '';
        this.name = '';
        this.description = '';
        this.price = '';
        this.response = '';
        this.product = {};
        this.image = '';
        this.isLoad = false; //MODAL

        this.isVisibleModal = false;
        this.isVisibleCortar = false; //Upload

        this.title = "cloudsSorage";
        this.selectedFile = null;
        this.previewImage = '';
        this.previewVisible = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.imagesArray = [];

        this.handleUpload = function (item) {
          _this.isLoad = true;
          var n = Date.now();
          var filePath = "products/".concat(n);

          var fileRef = _this.storage.ref(filePath);

          var task = _this.storage.upload("products/".concat(n), item);

          task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();

            _this.downloadURL.subscribe(function (url) {
              if (url) {
                _this.imagesArray.push({
                  image: url
                });

                _this.imagesArray = _this.imagesArray;
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

      _createClass(EditProductsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validateSession();

          if (this.id != 0) {
            this.getProductsByID();
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
        key: "isJson",
        value: function isJson(str) {
          try {
            JSON.parse(str);
          } catch (e) {
            return false;
          }

          return true;
        }
      }, {
        key: "getProductsByID",
        value: function getProductsByID() {
          var _this2 = this;

          this.isLoad = true;
          var data = {
            service: 'get-products-by-id',
            userid: this.user.user.id,
            productid: this.id,
            token: this.user.token
          };
          this.api.c('getProductsByID pre', data);
          this.api.api(data).subscribe(function (res) {
            _this2.api.c('getProductsByID', res);

            _this2.isLoad = false;

            if (res.status) {
              _this2.name = res.data.name;
              _this2.description = res.data.description.replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n').replace('<br />', '\n');
              _this2.price = res.data.price;
              _this2.imagesArray = res.data.images;
            } else {
              _this2.api.c('getProductsByID false', res);
            }
          }, function (error) {
            _this2.api.c('getProductsByID error', error);
          });
        }
      }, {
        key: "saveProduct",
        value: function saveProduct() {
          var _this3 = this;

          this.isLoad = true;
          var data = {
            service: 'save-product',
            name: this.name,
            price: this.price,
            description: this.description.replace(/\n\r?/g, '<br />'),
            userid: this.user.user.id,
            type: 'product',
            image: this.imagesArray.length > 0 ? this.imagesArray : '',
            token: this.user.token,
            productid: this.id
          };
          this.api.api(data).subscribe(function (res) {
            _this3.api.c('saveProduct res', res);

            _this3.isLoad = false;

            if (res.status) {
              _this3.response = res.message;

              if (_this3.id == 0) {
                _this3.name = '';
                _this3.description = '';
                _this3.price = '';
                _this3.image = '';
                _this3.imagesArray = [];
              }
            }
          }, function (error) {
            _this3.api.c('saveProduct error', error);
          });
        }
      }, {
        key: "handleFileInput",
        value: function handleFileInput(files) {
          this.fileToUpload = null;
          this.fileToUpload = files.item(0);
          this.nameInputFile = files.item(0).name;
          this.api.c('handleFileInput', this.nameInputFile);
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
        } //MODAL

      }, {
        key: "showModalCortar",
        value: function showModalCortar() {
          this.isVisibleCortar = true;
        }
      }, {
        key: "handleOkCortar",
        value: function handleOkCortar() {
          // this.api.c('croppedImage', this.croppedImage)     
          this.isLoad = true;
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
      }, {
        key: "showModal",
        value: function showModal(type) {
          this.contentModal = type;
          this.isVisible = true;
        }
      }, {
        key: "deleteProductImage",
        value: function deleteProductImage(i, downloadUrl) {
          var _this4 = this;

          this.isLoad = true;
          this.storage.storage.refFromURL(downloadUrl)["delete"]().then(function () {
            _this4.imagesArray.splice(i, 1);

            _this4.saveProduct();
          });
        }
      }]);

      return EditProductsPage;
    }();

    EditProductsPage.ctorParameters = function () {
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
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }];
    };

    EditProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-products',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-products.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-products.page.scss */
      "./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.page.scss"))["default"]]
    })], EditProductsPage);
    /***/
  }
}]);
//# sourceMappingURL=edit-products-edit-products-module-es5.js.map
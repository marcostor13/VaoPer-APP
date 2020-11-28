(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-user-config-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/config/config-user/config-user.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/config/config-user/config-user.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>config-user-provider</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <!-- <div *ngIf=\"user.user.role == 'user'\" class=\"content bg-white\">\n    <app-header *ngIf=\"isDesktop\" [categories]=\"categories\" (actionMenu)=\"toogleMenuHome()\"></app-header>\n  </div> -->\n  \n  <header *ngIf=\"user.user.role == 'admin' || user.user.role == 'user' && !isDesktop\"\n    class=\"pt-3 pr-3 pl-3 pb-3 shadow-lg col-12 z-index1000 bg-white\">\n    <button (click)=\"back()\" class=\"btn1 pt-2 pb-2\">Regresar</button>\n  </header>\n  \n  <header *ngIf=\"user.user.role == 'proveedor'\" class=\"pt-3 pr-3 pl-3 pb-3 shadow-lg col-12 z-index1000 bg-white\">\n    <button (click)=\"back()\" class=\"btn1 pt-2 pb-2\">Regresar</button>\n  </header>\n  \n  \n  \n  <div class=\"container-fluid p-5 mt-5\">\n  \n  \n    <div class=\"row\">\n      <div class=\"col-12 col-xl-4 row m-0 p-0 justify-content-center align-items-center\">\n  \n        <div class=\"col-12 p-0 row m-0 justify-content-center\">\n          <div class=\"userimage rounded-circle overflow-hidden\" [style]=\"'background-image: url('+croppedImage+')'\">\n            <input (change)=\"fileChangeEvent($event)\" type=\"file\" class=\"w-100 h-100 rounded-circle inputimage\">\n          </div>\n        </div>\n\n        <div class=\"col-12 p-0 row m-0 mt-2 justify-content-center\">\n          <label for=\"email\" class=\"col-12 text-center\">Correo</label>\n          <input type=\"text\" class=\"text-center col-12 col-xl-6\" value=\"{{user.user.email}}\" disabled />\n        </div>\n        \n        <div class=\"col-12 p-0 row m-0 mt-2 justify-content-center\">\n          <label for=\"username\" class=\"col-12 text-center\">Nombre</label>\n          <input type=\"text\" class=\"text-center col-12 col-xl-6\" [(ngModel)]=\"username\" placeholder=\"Nombre de usuario\" />\n        </div>\n  \n        <div class=\"col-12 p-0 row m-0 mt-2 justify-content-center\">\n          <button (click)=\"saveUserName()\" class=\"col-12 col-xl-5 btn1 pt-2 pb-2 pl-5 pr-5\">Guardar</button>\n        </div>\n  \n        <div class=\"col-12 p-0 row m-0 mt-2 justify-content-center\">\n          <p class=\"text-center text-color2\">{{responseName}}</p>\n        </div>\n  \n      </div>\n  \n      <div class=\"col-12 col-xl-8 pl-0 pl-xl-5 pr-0 pr-xl-5 pb-5 mb-5 mb-xl-5 pb-xl-0  mt-4 mt-xl-0\">\n        <h5 class=\"text-color2 font-700 text-center text-xl-left\">Cambiar contraseña</h5>\n  \n        <div class=\"form-group mt-5\">\n          <label>Contraseña actual</label>\n          <input type=\"password\" class=\"pl-3 form-control\" [(ngModel)]=\"currentpassword\"\n            placeholder=\"Ingrese su contraseña actual\" />\n        </div>\n        <div class=\"form-group\">\n          <label>Contraseña nueva</label>\n          <input type=\"password\" class=\"pl-3 form-control\" [(ngModel)]=\"password\" placeholder=\"Ingrese una contraseña\" />\n        </div>\n        <div class=\"form-group\">\n          <label>Repita la contraseña nueva</label>\n          <input type=\"password\" class=\"pl-3 form-control\" [(ngModel)]=\"repassword\"\n            placeholder=\"Ingrese una contraseña\" />\n        </div>\n  \n        <div class=\"form-group\">\n          <button (click)=\"changePassword()\" class=\"col-12 col-xl-3 btn1 pt-2 pb-2 pl-5 pr-5\">Actualizar</button>\n        </div>\n  \n        <div class=\"form-group\">\n          <p class=\"text-color2\">{{responsePassword}}</p>\n        </div>\n  \n      </div>\n    </div>\n  \n  \n  </div>\n \n  \n  <div class=\"modal\" *ngIf=\"isVisibleCortar\">\n  \n    <div class=\"content-modal modal2 p-5\">\n      <div class=\"header-modal row m-0 justify-content-between align-items-center\">\n        <h6 class=\"title-modal font-700 text-color2\">Cortar Imagen</h6>\n        <img (click)=\"handleCancelCortar()\" width=\"20\" src=\"assets/img/partials/close.svg\">\n      </div>\n  \n      <div class=\"form-group mt-2\">\n        <div class=\"row\" style=\"margin-top: 5%;\">\n          <div class=\"text-center col-md-8\">\n            <h5>Cortar Imagen</h5>\n            <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"1 / 1\"\n              [resizeToWidth]=\"0\" format=\"png\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\"\n              (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\n          </div>\n          <div class=\"text-center col-md-4\">\n            <h5>Previsualizar</h5>\n            <img [src]=\"croppedImage\" />\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"mt-3 row justify-content-end\">\n        <button (click)=\"saveImageProfile()\" class=\"btn1 pl-3 pr-3 pt-1 pb-1 mr-3\">Terminar</button>\n      </div>\n  \n    </div>\n  \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tabs/config/config-user/config-user-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tabs/config/config-user/config-user-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfigUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigUserPageRoutingModule", function() { return ConfigUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _config_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-user.page */ "./src/app/pages/tabs/config/config-user/config-user.page.ts");




const routes = [
    {
        path: '',
        component: _config_user_page__WEBPACK_IMPORTED_MODULE_3__["ConfigUserPage"]
    }
];
let ConfigUserPageRoutingModule = class ConfigUserPageRoutingModule {
};
ConfigUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfigUserPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/config/config-user/config-user.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tabs/config/config-user/config-user.module.ts ***!
  \*********************************************************************/
/*! exports provided: ConfigUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigUserPageModule", function() { return ConfigUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _config_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-user-routing.module */ "./src/app/pages/tabs/config/config-user/config-user-routing.module.ts");
/* harmony import */ var _config_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-user.page */ "./src/app/pages/tabs/config/config-user/config-user.page.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");








let ConfigUserPageModule = class ConfigUserPageModule {
};
ConfigUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _config_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfigUserPageRoutingModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"]
        ],
        declarations: [_config_user_page__WEBPACK_IMPORTED_MODULE_6__["ConfigUserPage"]]
    })
], ConfigUserPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/config/config-user/config-user.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tabs/config/config-user/config-user.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* FONTS */\n.load {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n.load img {\n  opacity: 0.9;\n}\n:disabled {\n  background-color: #e6e6e6;\n}\n.userimage {\n  min-width: 180px;\n  max-width: 180px;\n  min-height: 180px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\nlabel {\n  color: #4d4d4d;\n}\ninput {\n  min-height: 40px;\n  border: 2px solid #ffe266 !important;\n  border-radius: 10px;\n}\n:focus {\n  outline: none !important;\n}\n.image-cropper {\n  max-height: 500px !important;\n}\n.modal {\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  position: fixed;\n  min-width: 100vw;\n  min-height: 100vh;\n  top: 0;\n  left: 0;\n  z-index: 100;\n}\n.modal .modal-content {\n  border: 0;\n  background-color: white;\n  margin-top: 80px;\n  border-radius: 10px;\n  padding: 20px;\n  min-height: 100px;\n}\n.modal {\n  overflow: auto;\n}\n.modal2 {\n  max-width: 90% !important;\n  min-width: 90% !important;\n  position: absolute;\n  top: 150px;\n  margin-bottom: 150px;\n  background-color: white;\n}\n@media (max-width: 1300px) {\n  .modal2 {\n    max-width: 90% !important;\n  }\n}\n@media (max-width: 960px) {\n  .modal2 {\n    max-width: 98% !important;\n  }\n}\n.img-item {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #e6e6e6;\n  background-position: center;\n  min-width: 80px;\n  max-width: 80px;\n  max-height: 80px;\n  min-height: 80px;\n}\n.inputImage {\n  position: relative;\n  cursor: pointer;\n}\n.inputImage input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  z-index: 2;\n  border-radius: 8px;\n}\n.inputImage div {\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  min-width: 100%;\n  min-height: 40px;\n  background-color: #ffe266;\n  z-index: 1;\n}\n.inputimage {\n  opacity: 0;\n  cursor: pointer;\n}\n.z-index1000 {\n  position: fixed;\n  top: 0;\n  z-index: 100000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9jb25maWcvY29uZmlnLXVzZXIvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy9jb25maWcvY29uZmlnLXVzZXIvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcYXBwXFxwYWdlc1xcdGFic1xcY29uZmlnXFxjb25maWctdXNlclxcY29uZmlnLXVzZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzL2NvbmZpZy9jb25maWctdXNlci9jb25maWctdXNlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBQTtBQ0tBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDSEo7QURJSTtFQUNJLFlBQUE7QUNGUjtBRE1BO0VBQ0kseUJEUEs7QUVJVDtBRFVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FDUEo7QURVQTtFQUNJLGNEM0JLO0FFb0JUO0FEVUE7RUFDSSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUNQSjtBRFdBO0VBQ0ksd0JBQUE7QUNSSjtBRGVBO0VBQ0ksNEJBQUE7QUNaSjtBRGVBO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDWko7QURhSTtFQUNJLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNYUjtBRGVBO0VBQ0ksY0FBQTtBQ1pKO0FEZUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ1pKO0FEa0JBO0VBQ0k7SUFDSSx5QkFBQTtFQ2ZOO0FBQ0Y7QURtQkE7RUFDSTtJQUNJLHlCQUFBO0VDakJOO0FBQ0Y7QURzQkE7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJEckdLO0VDc0dMLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDcEJKO0FEdUJBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDcEJKO0FEcUJJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNuQlI7QURxQkk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkR6SUM7RUMwSUQsVUFBQTtBQ25CUjtBRHVCQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDcEJKO0FEdUJBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFFQSwwQkFBQTtBQ3JCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvY29uZmlnL2NvbmZpZy11c2VyL2NvbmZpZy11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZPTlRTICovXHJcblxyXG4kZm9udE06IE15cmlhZFBybztcclxuJGZvbnRUOiBUcmVidWNoZXRNUztcclxuXHJcblxyXG4vLyBDT0xPUlMgXHJcblxyXG5cclxuJGNvbG9yMTogI2ZmZTI2NjtcclxuJGNvbG9yMjogIzEzYmY5ZTtcclxuJGNvbG9yMzogIzMzMzMzMztcclxuJGNvbG9yNDogIzRkNGQ0ZDtcclxuJGNvbG9yNTogIzgwODA4MDtcclxuJGNvbG9yNjogI0E5QUJBRTtcclxuJGNvbG9yNzogI2U2ZTZlNjtcclxuJGNvbG9yODogI2VjN2M4YjtcclxuJGNvbG9yOTogIzAwYTE5ODtcclxuJGNvbG9yMTA6ICMzMTQ4OGE7XHJcbiIsIkBpbXBvcnQgJy4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcyc7XHJcblxyXG5cclxuLy9MT0FEXHJcblxyXG4ubG9hZHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZiwgJGFscGhhOiAuOSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGltZ3tcclxuICAgICAgICBvcGFjaXR5OiAuOTtcclxuICAgIH1cclxufVxyXG5cclxuOmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yNztcclxufVxyXG5cclxuXHJcbi8vQ09OVEVOVFxyXG5cclxuXHJcbi51c2VyaW1hZ2V7XHJcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBjb2xvcjogJGNvbG9yNFxyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7ICAgIFxyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yMSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8vSU1BR0UgQ09SVEFSIFxyXG5cclxuXHJcbi5pbWFnZS1jcm9wcGVye1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vZGFse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC40KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAgICBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAubW9kYWwtY29udGVudHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb2RhbHtcclxuICAgIG92ZXJmbG93OiBhdXRvOyAgICBcclxufVxyXG5cclxuLm1vZGFsMntcclxuICAgIG1heC13aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgLy8gbWF4LWhlaWdodDogO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XHJcbiAgICAubW9kYWwye1xyXG4gICAgICAgIG1heC13aWR0aDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gbWF4LWhlaWdodDogO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIC5tb2RhbDJ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5OCUgIWltcG9ydGFudDtcclxuICAgICAgICAvLyBtYXgtaGVpZ2h0OiA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uaW1nLWl0ZW17XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjc7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICAgICAgICAgICAgXHJcbiAgICBtaW4td2lkdGg6IDgwcHg7ICAgICAgICBcclxuICAgIG1heC13aWR0aDogODBweDsgICAgICAgIFxyXG4gICAgbWF4LWhlaWdodDogODBweDsgICAgICAgIFxyXG4gICAgbWluLWhlaWdodDogODBweDtcclxufVxyXG5cclxuLmlucHV0SW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpbnB1dHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuICAgIGRpdntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxufVxyXG5cclxuLmlucHV0aW1hZ2V7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uei1pbmRleDEwMDB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7IFxyXG4gICAgXHJcbiAgICB6LWluZGV4OiAxMDAwMDAgIWltcG9ydGFudDtcclxufSIsIi8qIEZPTlRTICovXG4ubG9hZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5sb2FkIGltZyB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLnVzZXJpbWFnZSB7XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIG1heC13aWR0aDogMTgwcHg7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxubGFiZWwge1xuICBjb2xvcjogIzRkNGQ0ZDtcbn1cblxuaW5wdXQge1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZlMjY2ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmltYWdlLWNyb3BwZXIge1xuICBtYXgtaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG4ubW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLm1vZGFsIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tb2RhbDIge1xuICBtYXgtd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAubW9kYWwyIHtcbiAgICBtYXgtd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLm1vZGFsMiB7XG4gICAgbWF4LXdpZHRoOiA5OCUgIWltcG9ydGFudDtcbiAgfVxufVxuLmltZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWF4LWhlaWdodDogODBweDtcbiAgbWluLWhlaWdodDogODBweDtcbn1cblxuLmlucHV0SW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbnB1dEltYWdlIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5pbnB1dEltYWdlIGRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAxO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmUyNjY7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5pbnB1dGltYWdlIHtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uei1pbmRleDEwMDAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDAwICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tabs/config/config-user/config-user.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/config/config-user/config-user.page.ts ***!
  \*******************************************************************/
/*! exports provided: ConfigUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigUserPage", function() { return ConfigUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ConfigUserPage = class ConfigUserPage {
    constructor(router, api, cookie) {
        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.isLoad = false;
        this.responseName = '';
        this.responsePassword = '';
        // username: String = ''
        this.currentpassword = '';
        this.password = '';
        this.repassword = '';
        this.username = '';
        this.email = '';
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        //MODAL
        this.isVisibleModal = false;
        this.isVisibleCortar = false;
        //IMAGE
        this.imageChangedEvent = '';
        this.croppedImage = '/assets/img/partials/user.svg';
        this.imagesArray = [];
    }
    ngOnInit() {
        this.validateSession();
    }
    back() {
        window.history.back();
    }
    validateSession() {
        if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
            this.getCategoriesAndSubcategories();
            this.getUsername();
            this.getImageProfile();
        }
    }
    getCategoriesAndSubcategories() {
        let data = {
            service: 'get-categories-and-subcategories'
        };
        this.api.api(data).subscribe(result => {
            this.api.c('getCategoriesAndSubcategories result', result);
            this.categories = result;
            this.isLoad = false;
        }, error => {
            this.api.c('Error getCategoriesAndSubcategories', error);
        });
    }
    toogleMenuHome() {
        this.api.c('toogleMenuFather2', this.eventsSubject);
        this.eventsSubject.next();
    }
    saveImageProfile() {
        let data = {
            service: 'save-image-profile',
            token: this.user.token,
            userid: this.user.user.id,
            imageprofile: this.croppedImage,
        };
        this.api.api(data).subscribe((res) => {
            this.api.c('saveImageProfile result', res);
            this.croppedImage = '';
            this.isVisibleCortar = false;
        }, error => {
            this.api.c('Error saveImageProfile', error);
        });
    }
    getImageProfile() {
        let data = {
            service: 'get-image-profile',
            token: this.user.token,
            userid: this.user.user.id
        };
        this.api.api(data).subscribe((res) => {
            this.api.c('getImageProfile result', res);
            if (res.status) {
                if (res.data && res.data != 'null') {
                    this.croppedImage = res.data;
                }
                else {
                    this.croppedImage = null;
                }
            }
        }, error => {
            this.api.c('Error getImageProfile', error);
        });
    }
    changePassword() {
        if (this.currentpassword == '' || this.password == '' || this.repassword == '') {
            this.responsePassword = 'Debe completar todos los campos';
        }
        else if (this.password !== this.repassword) {
            this.responsePassword = 'Las contraseñas no coinciden';
        }
        else {
            let data = {
                service: 'change-password',
                token: this.user.token,
                userid: this.user.user.id,
                password: this.password,
                currentpassword: this.currentpassword,
            };
            this.api.api(data).subscribe((res) => {
                this.api.c('saveImageProfile result', res);
                if (res.status) {
                    this.responsePassword = res.message;
                }
            }, error => {
                this.api.c('Error saveImageProfile', error);
            });
        }
    }
    saveUserName() {
        let data = {
            service: 'save-user-name',
            token: this.user.token,
            userid: this.user.user.id,
            username: this.username,
        };
        this.api.api(data).subscribe((res) => {
            this.api.c('saveUserName result', res);
            if (res.status) {
                this.responseName = res.message;
            }
        }, error => {
            this.api.c('Error saveUserName', error);
        });
    }
    getUsername() {
        let data = {
            service: 'get-user-name',
            token: this.user.token,
            userid: this.user.user.id,
        };
        this.api.api(data).subscribe((res) => {
            this.api.c('getUsername result', res);
            if (res.status) {
                if (res.data && res.data != 'null') {
                    this.username = res.data;
                }
            }
        }, error => {
            this.api.c('Error getUsername', error);
        });
    }
    fileChangeEvent(event) {
        this.showModalCortar();
        this.imageChangedEvent = event;
        // this.api.c('fileChangeEvent', event)
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // this.api.c('imageLoaded', 'ok')
    }
    cropperReady() {
        // this.api.c('cropperReady', 'ok')
    }
    loadImageFailed() {
        // this.api.c('loadImageFailed', 'ok')
    }
    //MODAL
    showModalCortar() {
        this.isVisibleCortar = true;
    }
    handleCancelCortar() {
        this.isVisibleCortar = false;
    }
};
ConfigUserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
ConfigUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-config-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./config-user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/config/config-user/config-user.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./config-user.page.scss */ "./src/app/pages/tabs/config/config-user/config-user.page.scss")).default]
    })
], ConfigUserPage);



/***/ })

}]);
//# sourceMappingURL=config-user-config-user-module-es2015.js.map
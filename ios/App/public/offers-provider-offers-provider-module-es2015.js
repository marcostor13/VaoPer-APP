(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-provider-offers-provider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.page.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>offers-provider</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <header class=\"pt-3 pr-3 pl-3\">\n      <button  (click)=\"back()\" class=\"btn1 pt-2 pb-2\">Regresar</button>\n  </header>\n\n  <hr class=\"linea\">\n\n  <div class=\"row m-0 p-3 justify-content-center align-items-center\">\n      <img [routerLink]=\"['edit-offers/0']\" class=\"add\" src=\"/assets/img/partials/add.svg\">\n  </div>\n\n  <div class=\"p-3 row m-0  pb-5 mb-5\">\n      <div *ngFor=\"let offer of offers\" class=\"row m-0 col-12 col-lg-3 p-2 mt-2\">\n          <div class=\"item row m-0 col-12 p-0\">\n\n              <div class=\"col-12 m-0 p-0  row justify-content-center\">\n                  <div class=\"img-item\" [ngStyle]=\"{'background-image': 'url('+offer.image+')'}\"></div>\n              </div>\n              <div class=\"ml-3 mt-2\">\n                  <span class=\"f-11 font-700\">{{offer.name}}</span>\n                  <div class=\"f-10\" *ngIf=\"offer.description && offer.description != '' && offer.description != 'null'\" [innerHTML]=\"offer.description.substring(0,60)\"></div>\n                  <div *ngIf=\"offer.description && offer.description.length > 59\"><span (click)='vermas(offer.description)' class=\"cursor font-700 f-10 text-color2\">...ver más</span></div> \n                  <p *ngIf=\"offer.price && offer.price != 'null'\" class=\"f-12 text-color2 font-700 p-0 m-0\">S/ {{offer.price | number:'1.2-2'}}</p>\n                  <p *ngIf=\"offer.enable == 1\" class=\"f-10 text-color2 font-700\">Activa</p>\n                  <p *ngIf=\"offer.enable == 0\" class=\"f-10 text-color5 font-700\">No activa</p>\n              </div>\n              <div class=\"row m-0 col-12 justify-content-between\">\n                  <button [routerLink]=\"['edit-offers/'+offer.id]\" class=\"btn3 mb-3 f-11 font-700 pt-2 pb-2\">Editar</button>\n                  <button (click)=\"getOfferByIdAndDelete(offer.id)\" class=\"btn4 mb-3 f-11 font-700 pt-2 pb-2\">Eliminar</button>\n              </div>\n          </div>\n\n      </div>\n  </div>\n\n  <!-- <app-menu-provider active=\"portfolio\"></app-menu-provider> -->\n\n  <nz-modal [(nzVisible)]=\"isVisibleModal\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\n      (nzOnCancel)=\"handleCancel()\">\n      <ng-template #modalTitle>\n          Descripción\n      </ng-template>\n\n      <ng-template #modalContent>\n          <p>{{currentDescription}}</p>\n      </ng-template>\n\n      <ng-template #modalFooter>\n          <button class=\"btn1 p-2 pl-3 pr-3\" (click)=\"handleCancel()\">Cerrar</button>\n      </ng-template>\n  </nz-modal>\n\n  <div *ngIf=\"isLoad\" class=\"load\">\n      <img src=\"/assets/img/partials/load.svg\">\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: OffersProviderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersProviderPageRoutingModule", function() { return OffersProviderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _offers_provider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers-provider.page */ "./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.page.ts");




const routes = [
    {
        path: '',
        component: _offers_provider_page__WEBPACK_IMPORTED_MODULE_3__["OffersProviderPage"]
    },
    {
        path: 'edit-offers/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-offers-edit-offers-module */ "edit-offers-edit-offers-module").then(__webpack_require__.bind(null, /*! ./edit-offers/edit-offers.module */ "./src/app/pages/tabs-provider/portfolio/offers-provider/edit-offers/edit-offers.module.ts")).then(m => m.EditOffersPageModule)
    }
];
let OffersProviderPageRoutingModule = class OffersProviderPageRoutingModule {
};
OffersProviderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OffersProviderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: OffersProviderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersProviderPageModule", function() { return OffersProviderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _offers_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers-provider-routing.module */ "./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider-routing.module.ts");
/* harmony import */ var _offers_provider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers-provider.page */ "./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.page.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");









let OffersProviderPageModule = class OffersProviderPageModule {
};
OffersProviderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offers_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersProviderPageRoutingModule"],
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalModule"],
        ],
        declarations: [_offers_provider_page__WEBPACK_IMPORTED_MODULE_6__["OffersProviderPage"]]
    })
], OffersProviderPageModule);



/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* FONTS */\n.linea {\n  border-bottom: solid 3px #e6e6e6;\n}\n.item {\n  box-shadow: 1px 3px 8px 5px #c2c2c2;\n  border-radius: 10px;\n}\n.item .img-item {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px 10px 0 0;\n  min-width: 23.1vw;\n  max-width: 23.1vw;\n  max-height: 23.1vw;\n  min-height: 23.1vw;\n}\n.add {\n  max-width: 40px;\n}\n@media (max-width: 992px) {\n  .item .img-item {\n    min-width: 85vw;\n    max-width: 85vw;\n    max-height: 85vw;\n    min-height: 85vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wb3J0Zm9saW8vb2ZmZXJzLXByb3ZpZGVyL0M6XFx3YW1wNjRcXHd3d1xcdmFvcGVydS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMtcHJvdmlkZXIvcG9ydGZvbGlvL29mZmVycy1wcm92aWRlci9DOlxcd2FtcDY0XFx3d3dcXHZhb3BlcnUvc3JjXFxhcHBcXHBhZ2VzXFx0YWJzLXByb3ZpZGVyXFxwb3J0Zm9saW9cXG9mZmVycy1wcm92aWRlclxcb2ZmZXJzLXByb3ZpZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wb3J0Zm9saW8vb2ZmZXJzLXByb3ZpZGVyL29mZmVycy1wcm92aWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBQTtBQ0dBO0VBQ0ksZ0NBQUE7QUNESjtBREtBO0VBR0ksbUNBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FER0k7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRFI7QURLQTtFQUNJLGVBQUE7QUNGSjtBREtBO0VBRVE7SUFDSSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNIVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wb3J0Zm9saW8vb2ZmZXJzLXByb3ZpZGVyL29mZmVycy1wcm92aWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGT05UUyAqL1xyXG5cclxuJGZvbnRNOiBNeXJpYWRQcm87XHJcbiRmb250VDogVHJlYnVjaGV0TVM7XHJcblxyXG5cclxuLy8gQ09MT1JTIFxyXG5cclxuXHJcbiRjb2xvcjE6ICNmZmUyNjY7XHJcbiRjb2xvcjI6ICMxM2JmOWU7XHJcbiRjb2xvcjM6ICMzMzMzMzM7XHJcbiRjb2xvcjQ6ICM0ZDRkNGQ7XHJcbiRjb2xvcjU6ICM4MDgwODA7XHJcbiRjb2xvcjY6ICNBOUFCQUU7XHJcbiRjb2xvcjc6ICNlNmU2ZTY7XHJcbiRjb2xvcjg6ICNlYzdjOGI7XHJcbiRjb2xvcjk6ICMwMGExOTg7XHJcbiRjb2xvcjEwOiAjMzE0ODhhO1xyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuXHJcbi5saW5lYXtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAkY29sb3I3O1xyXG59XHJcblxyXG5cclxuLml0ZW17XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCByZ2JhKDE5NCwxOTQsMTk0LDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggcmdiYSgxOTQsMTk0LDE5NCwxKTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCByZ2JhKDE5NCwxOTQsMTk0LDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC5pbWctaXRlbXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7ICAgICAgICAgICAgIFxyXG4gICAgICAgIG1pbi13aWR0aDogMjMuMXZ3OyAgICAgICAgXHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMy4xdnc7ICAgICAgICBcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMy4xdnc7ICAgICAgICBcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMy4xdnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZGR7XHJcbiAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLml0ZW17XHJcbiAgICAgICAgLmltZy1pdGVteyAgICBcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA4NXZ3OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1heC13aWR0aDogODV2dzsgICAgICAgIFxyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA4NXZ3OyAgICAgICAgXHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDg1dnc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyogRk9OVFMgKi9cbi5saW5lYSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjZTZlNmU2O1xufVxuXG4uaXRlbSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4ICNjMmMyYzI7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4ICNjMmMyYzI7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCAjYzJjMmMyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLml0ZW0gLmltZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICBtaW4td2lkdGg6IDIzLjF2dztcbiAgbWF4LXdpZHRoOiAyMy4xdnc7XG4gIG1heC1oZWlnaHQ6IDIzLjF2dztcbiAgbWluLWhlaWdodDogMjMuMXZ3O1xufVxuXG4uYWRkIHtcbiAgbWF4LXdpZHRoOiA0MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLml0ZW0gLmltZy1pdGVtIHtcbiAgICBtaW4td2lkdGg6IDg1dnc7XG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xuICAgIG1heC1oZWlnaHQ6IDg1dnc7XG4gICAgbWluLWhlaWdodDogODV2dztcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.page.ts ***!
  \***************************************************************************************/
/*! exports provided: OffersProviderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersProviderPage", function() { return OffersProviderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");







let OffersProviderPage = class OffersProviderPage {
    constructor(route, router, api, cookie, general, storage) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.general = general;
        this.storage = storage;
        this.isVisible = false;
        this.contentModal = null;
        this.response = '';
        this.offers = [];
        this.urlBackEnd = this.general.getUrlImages('offers');
        this.isVisibleModal = false;
        this.currentDescription = '';
        this.isLoad = false;
    }
    ngOnInit() {
        this.validateSession();
    }
    ionViewWillEnter() {
        this.getOffers();
    }
    validateSession() {
        if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
        }
        else {
            window.location.href = '/login';
        }
    }
    back() {
        window.history.back();
    }
    getOffers() {
        let data = {
            service: 'get-offers',
            userid: this.user.user.id,
            token: this.user.token,
        };
        this.api.c('getOffers pre', data);
        this.api.api(data).subscribe((res) => {
            this.api.c('getOffers', res);
            if (res.status) {
                this.offers = res.data;
            }
            else {
                this.api.c('getOffers false', res);
            }
        }, error => {
            this.api.c('getOffers error', error);
        });
    }
    deleteOffer(offerid) {
        let data = {
            service: 'delete-offer',
            offerid: offerid,
            token: this.user.token,
        };
        this.api.c('deleteOffer pre', data);
        this.api.api(data).subscribe((res) => {
            this.api.c('deleteOffer', res);
            this.getOffers();
        }, error => {
            this.api.c('deleteOffer error', error);
        });
    }
    getOfferByIdAndDelete(offerid) {
        this.isLoad = true;
        let data = {
            service: 'get-offer-by-id',
            userid: this.user.user.id,
            offerid: offerid,
            token: this.user.token,
        };
        this.api.c('getOfferByIdAndDelete pre', data);
        this.api.api(data).subscribe((res) => {
            this.api.c('getOfferByIdAndDelete', res);
            if (res.status) {
                this.deleteOffer(offerid);
                this.storage.storage.refFromURL(res.data.image).delete();
                this.isLoad = false;
            }
            else {
                this.api.c('getOfferByIdAndDelete false', res);
                this.isLoad = false;
            }
        }, error => {
            this.api.c('getOfferByIdAndDelete error', error);
        });
    }
    getUriImage(image) {
        return encodeURI(image);
    }
    //Modal
    showModal() {
        this.isVisibleModal = true;
    }
    handleOk() {
        this.isVisibleModal = false;
    }
    handleCancel() {
        this.isVisibleModal = false;
    }
    vermas(text) {
        this.currentDescription = text;
        this.showModal();
    }
};
OffersProviderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }
];
OffersProviderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers-provider',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./offers-provider.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./offers-provider.page.scss */ "./src/app/pages/tabs-provider/portfolio/offers-provider/offers-provider.page.scss")).default]
    })
], OffersProviderPage);



/***/ })

}]);
//# sourceMappingURL=offers-provider-offers-provider-module-es2015.js.map
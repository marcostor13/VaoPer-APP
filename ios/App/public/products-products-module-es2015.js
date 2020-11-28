(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/products/products.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/products/products.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div class=\"p-3 bg-color2 row justify-content-between m-0\">\n      <button (click)=\"back()\" class=\"btn5 pt-2 pb-2\">Regresar</button>\n      <div class=\"row align-items-center m-0\">\n          <img [routerLink]=\"['/tabs']\" width=\"60\" src=\"/assets/img/logo.jpeg\">\n      </div>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"p-3 row m-0 pb-5 mb-5\">\n\n      <div class=\"row m-0 col-12 justify-content-center\">\n          <a href=\"tel:{{companyData.phone1}}\" class=\"btn1 flex-1 pb-2 mr-2 font-700 text-center link-unstyled pt-2\">LLAMADA</a>\n          <button (click)=\"message(companyData.userid, companyData.id, companyData.phone1)\" class=\"btn2 flex-1 pb-2 font-700 pt-2\">WHATSAPP</button>\n      </div>\n\n      <div *ngFor=\"let prod of products\" class=\"item row m-0 col-12 p-0 mt-4 overflow-hidden\">\n          <div class=\"col-12 m-0 p-0 carouselproducts\">\n              <ion-slides *ngIf=\"prod.images && prod.images.length > 0\" pager=\"true\" [options]=\"slideOpts\" class=\"\">\n                <ion-slide *ngFor=\"let it of prod.images; let i = index\" class=\"\">\n                    <div class=\"img-item\" [ngStyle]=\"{'background-image': 'url('+ it.image +')'}\"></div>\n                </ion-slide>\n              </ion-slides>\n              <ng-container *ngIf=\"prod.image && (!prod.images || prod.images.length === 0)\">\n                  <div class=\"img-item\" [ngStyle]=\"{'background-image': 'url('+ prod.image +')'}\"></div>\n                  <!-- <div *ngIf=\"prod.image.indexOf('data:image') === -1\" class=\"img-item\" [ngStyle]=\"{'background-image': 'url('+ urlBackEnd + getUriImage(prod.image) +')'}\"></div> -->\n              </ng-container>\n            \n          </div>\n          <div class=\"ml-3 mt-2 col-12 m-0 p-0 pr-4 pb-4\">\n              <span class=\"f-11 font-700\">{{prod.name}}</span>\n              <div class=\"f-10\" *ngIf=\"prod.description && prod.description != '' && prod.description != 'null'\" [innerHTML]=\"prod.description.substring(0,60)\"></div> \n              <div *ngIf=\"prod.description && prod.description.length > 59\"><span (click)='presentModal(prod.description)' class=\"cursor font-700 f-10 text-color2\">...ver más</span></div>\n              <div class=\"row m-0 col-11 justify-content-between p-0\">\n                  <p *ngIf=\"prod.price && prod.price != 'null'\" class=\"f-12 text-color2 font-700\">S/ {{prod.price.replace(' SOLES', '') | number:'1.2-2'}}</p>\n              </div>\n          </div>\n      </div>\n\n  </div>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/tabs/home/products/products-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tabs/home/products/products-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageRoutingModule", function() { return ProductsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.page */ "./src/app/pages/tabs/home/products/products.page.ts");




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_3__["ProductsPage"]
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/home/products/products.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs/home/products/products.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/pages/tabs/home/products/products-routing.module.ts");
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products.page */ "./src/app/pages/tabs/home/products/products.page.ts");







let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsPageRoutingModule"]
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })
], ProductsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/home/products/products.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/tabs/home/products/products.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* FONTS */\n.linea {\n  border-bottom: solid 3px #e6e6e6;\n}\n.main-photo {\n  border-radius: 10px;\n  background-color: #e6e6e6;\n  min-height: 260px;\n}\n.imgProfileEdit {\n  border-radius: 10px;\n  background-color: white;\n  min-height: 260px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.item {\n  margin-top: 20px !important;\n  box-shadow: 1px 3px 8px 5px #c2c2c2;\n  border-radius: 10px;\n}\n.item .img-item {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-color: #e6e6e6;\n  border-radius: 10px 10px 0 0;\n  max-width: 100%;\n  min-width: 100%;\n  max-height: 90.8vw;\n  min-height: 90.8vw;\n}\n:focus {\n  outline: 0;\n}\n.img-item2 {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  min-height: 300px !important;\n  min-width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9ob21lL3Byb2R1Y3RzL0M6XFx3YW1wNjRcXHd3d1xcdmFvcGVydS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMvaG9tZS9wcm9kdWN0cy9DOlxcd2FtcDY0XFx3d3dcXHZhb3BlcnUvc3JjXFxhcHBcXHBhZ2VzXFx0YWJzXFxob21lXFxwcm9kdWN0c1xccHJvZHVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzL2hvbWUvcHJvZHVjdHMvcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUNHQTtFQUNJLGdDQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0VBQ0EseUJETUs7RUNMTCxpQkFBQTtBQ0RKO0FESUE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNESjtBRElBO0VBQ0ksMkJBQUE7RUFHQSxtQ0FBQTtFQUNBLG1CQUFBO0FDREo7QURFSTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCRGpCQztFQ2tCRCw0QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FESUE7RUFDUSxVQUFBO0FDRFI7QURJQTtFQUNRLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvaG9tZS9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGT05UUyAqL1xyXG5cclxuJGZvbnRNOiBNeXJpYWRQcm87XHJcbiRmb250VDogVHJlYnVjaGV0TVM7XHJcblxyXG5cclxuLy8gQ09MT1JTIFxyXG5cclxuXHJcbiRjb2xvcjE6ICNmZmUyNjY7XHJcbiRjb2xvcjI6ICMxM2JmOWU7XHJcbiRjb2xvcjM6ICMzMzMzMzM7XHJcbiRjb2xvcjQ6ICM0ZDRkNGQ7XHJcbiRjb2xvcjU6ICM4MDgwODA7XHJcbiRjb2xvcjY6ICNBOUFCQUU7XHJcbiRjb2xvcjc6ICNlNmU2ZTY7XHJcbiRjb2xvcjg6ICNlYzdjOGI7XHJcbiRjb2xvcjk6ICMwMGExOTg7XHJcbiRjb2xvcjEwOiAjMzE0ODhhO1xyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuXHJcbi5saW5lYXtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAkY29sb3I3O1xyXG59XHJcblxyXG4ubWFpbi1waG90b3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I3O1xyXG4gICAgbWluLWhlaWdodDogMjYwcHg7XHJcbn1cclxuXHJcbi5pbWdQcm9maWxlRWRpdHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1pbi1oZWlnaHQ6IDI2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVte1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCByZ2JhKDE5NCwxOTQsMTk0LDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggcmdiYSgxOTQsMTk0LDE5NCwxKTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCByZ2JhKDE5NCwxOTQsMTk0LDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC5pbWctaXRlbXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjc7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDsgICAgICAgICAgICAgXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlOyAgICAgICAgXHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDkwLjh2dztcclxuICAgICAgICBtaW4taGVpZ2h0OiA5MC44dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpmb2N1c3tcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuLmltZy1pdGVtMntcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiIsIi8qIEZPTlRTICovXG4ubGluZWEge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2U2ZTZlNjtcbn1cblxuLm1haW4tcGhvdG8ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBtaW4taGVpZ2h0OiAyNjBweDtcbn1cblxuLmltZ1Byb2ZpbGVFZGl0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDI2MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5pdGVtIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCAjYzJjMmMyO1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCAjYzJjMmMyO1xuICBib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggI2MyYzJjMjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5pdGVtIC5pbWctaXRlbSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDkwLjh2dztcbiAgbWluLWhlaWdodDogOTAuOHZ3O1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uaW1nLWl0ZW0yIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/tabs/home/products/products.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/home/products/products.page.ts ***!
  \***********************************************************/
/*! exports provided: ProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPage", function() { return ProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../modal/modal.page */ "./src/app/pages/modal/modal.page.ts");








let ProductsPage = class ProductsPage {
    constructor(route, router, api, cookie, general, modalController) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.general = general;
        this.modalController = modalController;
        this.isVisible = false;
        this.contentModal = null;
        this.response = '';
        this.products = [];
        this.urlBackEnd = this.general.getUrlImages('products');
        this.companyData = {};
        this.slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        //Modal
        this.isVisibleModal = false;
        this.currentDescription = '';
        this.id = this.route.snapshot.paramMap.get('id');
        this.type = this.route.snapshot.paramMap.get('type');
    }
    ngOnInit() {
        this.validateSession();
    }
    ionViewWillEnter() {
        this.getProducts();
        this.getCompanyData();
    }
    validateSession() {
        if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
        }
    }
    getProducts() {
        let data = {
            service: '',
            companyid: this.id,
        };
        switch (this.type) {
            case 'products':
                data.service = 'get-products';
                break;
            case 'featured':
                data.service = 'get-products-featured';
                break;
            case 'offers':
                // data.companyid = '';
                // data['userid'] = this.id;
                data.service = 'get-offers';
                this.urlBackEnd = this.general.getUrlImages('offers');
                break;
            default:
                break;
        }
        this.api.c('getProducts pre', data);
        this.api.api(data).subscribe((res) => {
            this.api.c('getProducts', res);
            if (res.status) {
                this.products = res.data;
            }
            else {
                this.api.c('getProducts false', res);
            }
        }, error => {
            this.api.c('getProducts error', error);
        });
    }
    getCompanyData() {
        let data = {
            companyid: this.id,
            service: 'get-company-data2'
        };
        this.api.api(data).subscribe((result) => {
            this.api.c('getCompanyData', result);
            if (result.status) {
                this.companyData = result.data;
            }
            else {
                this.api.c('getCompanyData False', result);
            }
        }, error => {
            this.api.c('Error getCompanyData', error);
        });
    }
    getUriImage(image) {
        return encodeURI(image);
    }
    redirect(route) {
        this.router.navigate([route]);
    }
    back() {
        window.history.back();
    }
    getFirstImage(array) {
        return array[0].image;
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
    // getDataCompanyById(){
    //   let data = {
    //     companyid: this.id,
    //     service: 'get-data-company-by-id'
    //   }
    //   this.api.api(data).subscribe((result: any) => {
    //     this.api.c('getDataCompanyById', result)
    //     this.companyData
    //   },
    //     error => {
    //       this.api.c('Error getCompanyData', error)
    //     });
    // }
    message(receptorid, companyDataID, phone1) {
        if (phone1) {
            window.location.href = `https://api.whatsapp.com/send?phone=51${phone1}&text=Hola, soy usuario VAO`;
        }
        // if (!this.user) {
        //   this.router.navigate(['/login'])
        // } else {
        //   if (this.user.user.id != receptorid) {
        //     if (this.createChat(this.user.user.id, receptorid)) {
        //       this.router.navigate(['/tabs/chat/' + receptorid])
        //     }
        //   }
        // }
        this.general.saveEvent('message', companyDataID);
    }
    createChat(useridOri, useridDes) {
        this.api.createChat({
            collection: 'chats',
            token: this.user.token,
            useridOri: useridOri,
            useridDes: useridDes
        });
        return true;
    }
    //MODAL
    presentModal(content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_7__["ModalPage"],
                cssClass: 'modal-class',
                componentProps: {
                    'title': 'Descripción',
                    'content': content,
                    'modal': this
                }
            });
            return yield modal.present();
        });
    }
};
ProductsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/products/products.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products.page.scss */ "./src/app/pages/tabs/home/products/products.page.scss")).default]
    })
], ProductsPage);



/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map
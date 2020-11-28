(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-provider-products-provider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <header class=\"p-3\">\n    <button [routerLink]=\"['/tabs-provider/portfolio']\" class=\"btn1 pt-2 pb-2\">Regresar</button>\n  </header>\n</ion-header>\n\n<ion-content>\n  <div class=\"row m-0 p-3 justify-content-center align-items-center\">\n    <img [routerLink]=\"['/tabs-provider/portfolio/products-provider/edit-products/0']\" class=\"add\" src=\"/assets/img/partials/add.svg\">\n</div>\n\n\n<div class=\"p-3 row m-0 col-12\">\n\n    <div *ngFor=\"let prod of products\"  class=\"row m-0 col-12 col-lg-3 p-2 mt-2\">\n        <div class=\"item row m-0 col-12 p-0\">\n            <div class=\"col-12 m-0 p-0 row justify-content-center\">\n                <div class=\"img-item\" *ngIf=\"prod.images && prod.images.length > 0\" [ngStyle]=\"{'background-image': 'url('+ getFirstImage(prod.images) +')'}\">\n                    <div class=\"row m-0 col-12 justify-content-end\">                    \n                        <img (click)=\"saveFeaturedProduct(prod.id, 0)\" *ngIf=\"prod.featured == 1\" width=\"30\" class=\"mt-3\" src=\"/assets/img/partials/star.svg\" alt=\"\">\n                        <img (click)=\"saveFeaturedProduct(prod.id, 1)\" *ngIf=\"prod.featured == 0\" width=\"30\" class=\"mt-3\" src=\"/assets/img/partials/star-g.svg\" alt=\"\">\n                    </div>\n                </div>  \n                <ng-container *ngIf=\"!prod.images || prod.images.length === 0\">\n                    <div class=\"img-item\" *ngIf=\"prod.image.indexOf('data:image') > -1\" [ngStyle]=\"{'background-image': 'url('+ prod.image +')'}\">\n                        <div class=\"row m-0 col-12 justify-content-end\">                    \n                            <img (click)=\"saveFeaturedProduct(prod.id, 0)\" *ngIf=\"prod.featured == 1\" width=\"30\" class=\"mt-3\" src=\"/assets/img/partials/star.svg\" alt=\"\">\n                            <img (click)=\"saveFeaturedProduct(prod.id, 1)\" *ngIf=\"prod.featured == 0\" width=\"30\" class=\"mt-3\" src=\"/assets/img/partials/star-g.svg\" alt=\"\">\n                        </div>\n                    </div>  \n                    <div class=\"img-item\" *ngIf=\"prod.image.indexOf('data:image') === -1\" [ngStyle]=\"{'background-image': 'url('+ urlBackEnd + getUriImage(prod.image) +')'}\">\n                        <div class=\"row m-0 col-12 justify-content-end\">                    \n                            <img (click)=\"saveFeaturedProduct(prod.id, 0)\" *ngIf=\"prod.featured == 1\" width=\"30\" class=\"mt-3\" src=\"/assets/img/partials/star.svg\" alt=\"\">\n                            <img (click)=\"saveFeaturedProduct(prod.id, 1)\" *ngIf=\"prod.featured == 0\" width=\"30\" class=\"mt-3\" src=\"/assets/img/partials/star-g.svg\" alt=\"\">\n                        </div>\n                    </div> \n                </ng-container>\n                 \n            </div>\n            <div class=\"ml-3 mt-2 col-12 m-0 p-0\">\n                <span class=\"f-11 font-700\">{{prod.name}}</span>\n                <div class=\"f-10 pr-3\" *ngIf=\"prod.description && prod.description != '' && prod.description != 'null'\" [innerHTML]=\"prod.description.substring(0,60)\"></div> \n                <div *ngIf=\"prod.description && prod.description.length > 59\"><span (click)='presentModal(prod.description)' class=\"cursor font-700 f-10 text-color2\">...ver más</span></div>\n                <div class=\"row m-0 col-11 justify-content-between p-0\">\n                    <p *ngIf=\"prod.price && prod.price != 'null' && isNumber(prod.price)\" class=\"f-12 text-color2 font-700\">S/ {{prod.price | number:'1.2-2'}}</p>\n                    <div class=\"row m-0 mt-2 justify-content-between col-12 p-0\">\n                        <button [routerLink]=\"['/tabs-provider/portfolio/products-provider/edit-products/'+prod.id]\" class=\"btn3 mb-3 f-11 font-700 pt-2 pb-2\">Editar</button>\n                        <button (click)=\"deleteProduct(prod.id)\" class=\"btn4 mb-3 f-11 font-700 pt-2 pb-2\">Eliminar</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/products-provider/products-provider-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/products-provider/products-provider-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProductsProviderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsProviderPageRoutingModule", function() { return ProductsProviderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _products_provider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-provider.page */ "./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.page.ts");




const routes = [
    {
        path: '',
        component: _products_provider_page__WEBPACK_IMPORTED_MODULE_3__["ProductsProviderPage"]
    },
    {
        path: 'edit-products/:id',
        loadChildren: () => Promise.all(/*! import() | edit-products-edit-products-module */[__webpack_require__.e("default~config-user-config-user-module~config-user-provider-config-user-provider-module~edit-product~9f3b40de"), __webpack_require__.e("default~edit-products-edit-products-module~edit-profile-edit-profile-module~offers-provider-offers-p~31cc0df5"), __webpack_require__.e("edit-products-edit-products-module")]).then(__webpack_require__.bind(null, /*! ./edit-products/edit-products.module */ "./src/app/pages/tabs-provider/portfolio/products-provider/edit-products/edit-products.module.ts")).then(m => m.EditProductsPageModule)
    }
];
let ProductsProviderPageRoutingModule = class ProductsProviderPageRoutingModule {
};
ProductsProviderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductsProviderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ProductsProviderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsProviderPageModule", function() { return ProductsProviderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _products_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-provider-routing.module */ "./src/app/pages/tabs-provider/portfolio/products-provider/products-provider-routing.module.ts");
/* harmony import */ var _products_provider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-provider.page */ "./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.page.ts");







let ProductsProviderPageModule = class ProductsProviderPageModule {
};
ProductsProviderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _products_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsProviderPageRoutingModule"]
        ],
        declarations: [_products_provider_page__WEBPACK_IMPORTED_MODULE_6__["ProductsProviderPage"]]
    })
], ProductsProviderPageModule);



/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* FONTS */\n.linea {\n  border-bottom: solid 3px #e6e6e6;\n}\n.item {\n  box-shadow: 1px 3px 8px 5px #c2c2c2;\n  border-radius: 10px;\n}\n.item .img-item {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #e6e6e6;\n  background-position: center;\n  border-radius: 10px 10px 0 0;\n  min-width: 23.1vw;\n  max-width: 23.1vw;\n  max-height: 23.1vw;\n  min-height: 23.1vw;\n}\n.add {\n  max-width: 40px;\n}\n@media (max-width: 992px) {\n  .item .img-item {\n    min-width: 85vw;\n    max-width: 85vw;\n    max-height: 85vw;\n    min-height: 85vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wb3J0Zm9saW8vcHJvZHVjdHMtcHJvdmlkZXIvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9wb3J0Zm9saW8vcHJvZHVjdHMtcHJvdmlkZXIvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcYXBwXFxwYWdlc1xcdGFicy1wcm92aWRlclxccG9ydGZvbGlvXFxwcm9kdWN0cy1wcm92aWRlclxccHJvZHVjdHMtcHJvdmlkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzLXByb3ZpZGVyL3BvcnRmb2xpby9wcm9kdWN0cy1wcm92aWRlci9wcm9kdWN0cy1wcm92aWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBQTtBQ0dBO0VBQ0ksZ0NBQUE7QUNESjtBREtBO0VBR0ksbUNBQUE7RUFDQSxtQkFBQTtBQ0ZKO0FER0k7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJEREM7RUNFRCwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREtBO0VBQ0ksZUFBQTtBQ0ZKO0FES0E7RUFFUTtJQUNJLGVBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ0hWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzLXByb3ZpZGVyL3BvcnRmb2xpby9wcm9kdWN0cy1wcm92aWRlci9wcm9kdWN0cy1wcm92aWRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGT05UUyAqL1xyXG5cclxuJGZvbnRNOiBNeXJpYWRQcm87XHJcbiRmb250VDogVHJlYnVjaGV0TVM7XHJcblxyXG5cclxuLy8gQ09MT1JTIFxyXG5cclxuXHJcbiRjb2xvcjE6ICNmZmUyNjY7XHJcbiRjb2xvcjI6ICMxM2JmOWU7XHJcbiRjb2xvcjM6ICMzMzMzMzM7XHJcbiRjb2xvcjQ6ICM0ZDRkNGQ7XHJcbiRjb2xvcjU6ICM4MDgwODA7XHJcbiRjb2xvcjY6ICNBOUFCQUU7XHJcbiRjb2xvcjc6ICNlNmU2ZTY7XHJcbiRjb2xvcjg6ICNlYzdjOGI7XHJcbiRjb2xvcjk6ICMwMGExOTg7XHJcbiRjb2xvcjEwOiAjMzE0ODhhO1xyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuXHJcbi5saW5lYXtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAkY29sb3I3O1xyXG59XHJcblxyXG5cclxuLml0ZW17XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCByZ2JhKDE5NCwxOTQsMTk0LDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggcmdiYSgxOTQsMTk0LDE5NCwxKTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCByZ2JhKDE5NCwxOTQsMTk0LDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC5pbWctaXRlbXtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yNztcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDsgICAgICAgICAgICAgXHJcbiAgICAgICAgbWluLXdpZHRoOiAyMy4xdnc7ICAgICAgICBcclxuICAgICAgICBtYXgtd2lkdGg6IDIzLjF2dzsgICAgICAgIFxyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIzLjF2dzsgICAgICAgIFxyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIzLjF2dztcclxuICAgIH1cclxufVxyXG5cclxuLmFkZHtcclxuICAgIG1heC13aWR0aDogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAuaXRlbXtcclxuICAgICAgICAuaW1nLWl0ZW17ICAgIFxyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDg1dnc7ICAgICAgICAgICBcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA4NXZ3OyAgICAgICAgXHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDg1dnc7ICAgICAgICBcclxuICAgICAgICAgICAgbWluLWhlaWdodDogODV2dztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKiBGT05UUyAqL1xuLmxpbmVhIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICNlNmU2ZTY7XG59XG5cbi5pdGVtIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggI2MyYzJjMjtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggI2MyYzJjMjtcbiAgYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4ICNjMmMyYzI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uaXRlbSAuaW1nLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIG1pbi13aWR0aDogMjMuMXZ3O1xuICBtYXgtd2lkdGg6IDIzLjF2dztcbiAgbWF4LWhlaWdodDogMjMuMXZ3O1xuICBtaW4taGVpZ2h0OiAyMy4xdnc7XG59XG5cbi5hZGQge1xuICBtYXgtd2lkdGg6IDQwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaXRlbSAuaW1nLWl0ZW0ge1xuICAgIG1pbi13aWR0aDogODV2dztcbiAgICBtYXgtd2lkdGg6IDg1dnc7XG4gICAgbWF4LWhlaWdodDogODV2dztcbiAgICBtaW4taGVpZ2h0OiA4NXZ3O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductsProviderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsProviderPage", function() { return ProductsProviderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/modal/modal.page */ "./src/app/pages/modal/modal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");








let ProductsProviderPage = class ProductsProviderPage {
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
        this.isVisibleModal = false;
        this.currentDescription = '';
    }
    ngOnInit() {
        this.validateSession();
    }
    ionViewWillEnter() {
        this.getProducts();
    }
    validateSession() {
        if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
        }
    }
    getProducts() {
        let data = {
            service: 'get-products',
            userid: this.user.user.id,
            token: this.user.token,
        };
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
    saveFeaturedProduct(productid, featured) {
        let data = {
            service: 'save-featured-product',
            featured: featured,
            productid: productid,
            token: this.user.token,
        };
        this.api.c('saveFeaturedProduct pre', data);
        this.api.api(data).subscribe((res) => {
            this.api.c('saveFeaturedProduct', res);
            this.getProducts();
        }, error => {
            this.api.c('saveFeaturedProduct error', error);
        });
    }
    deleteProduct(productid) {
        let data = {
            service: 'delete-product',
            productid: productid,
            token: this.user.token,
        };
        this.api.c('deleteProduct pre', data);
        this.api.api(data).subscribe((res) => {
            this.api.c('deleteProduct', res);
            this.getProducts();
        }, error => {
            this.api.c('deleteProduct error', error);
        });
    }
    isJson(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    getUriImage(image) {
        return encodeURI(image);
    }
    getFirstImage(array) {
        return array[0].image;
    }
    redirect(route) {
        this.router.navigate([route]);
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
    presentModal(content) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_modal_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"],
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
    isNumber(price) {
        return !isNaN(Number(price));
    }
};
ProductsProviderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
ProductsProviderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-provider',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products-provider.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products-provider.page.scss */ "./src/app/pages/tabs-provider/portfolio/products-provider/products-provider.page.scss")).default]
    })
], ProductsProviderPage);



/***/ })

}]);
//# sourceMappingURL=products-provider-products-provider-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-config-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/config/config.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/config/config.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <header class=\"container-fluid pt-3 pl-3 pr-3 pb-3\">\r\n      <div class=\"row m-0 justify-content-between align-items-center\">\r\n          <div class=\"row align-items-center m-0\">\r\n              <div class=\"user-image\" [style]=\"'background-image: url('+userimage+')'\"></div>\r\n              <h6 *ngIf=\"user\" class=\"ml-3 font-700 f-13\">{{user.user.name}}</h6>\r\n          </div>\r\n      </div>\r\n  </header>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"row m-0 p-3\">\r\n\r\n    <div *ngIf=\"user\" class=\"option p-3 col-12 bg-color7\">\r\n        <p [routerLink]=\"['config-user']\" class=\"m-0 p-0 font-700\">Opciones de usuario</p>\r\n    </div>\r\n\r\n    <div class=\"option p-3 col-12 bg-color7 mt-2\">\r\n        <p (click)=\"toogle()\" class=\"m-0 p-0 font-700\">Anuncia tu negocio</p>\r\n        <div *ngIf=\"toogleAnuncio\">\r\n            <input [(ngModel)]=\"name\" class=\"col-12 border rounded mt-2 pt-2 pb-2\" type=\"text\" placeholder=\"Nombre\">\r\n            <input [(ngModel)]=\"number\" class=\"col-12 border rounded mt-2 pt-2 pb-2\" type=\"number\" placeholder=\"Teléfono\">\r\n            <button (click)=\"sendAnuncio()\" class=\"col-12 btn1 rounded mt-2 pt-2 pb-2\">Enviar</button>\r\n            <p class=\"text-center col-12 m-0 text-color2 mt-2\">{{response}}</p>\r\n        </div>\r\n    </div>\r\n    \r\n    <div class=\"option p-3 col-12 bg-color7 mt-2\">\r\n        <p *ngIf=\"user\" (click)=\"logout()\"  class=\"m-0 p-0 font-700\">Acceso a proveedores</p>\r\n        <p *ngIf=\"!user\" [routerLink]=\"['/login']\"  class=\"m-0 p-0 font-700\">Acceso a proveedores</p>\r\n    </div>\r\n\r\n    <div class=\"option p-3 col-12 bg-color7 mt-2\">\r\n        <p *ngIf=\"user\" (click)=\"logout()\" class=\"m-0 p-0 font-700\">Cerrar Sesión</p>\r\n        <p *ngIf=\"!user\" [routerLink]=\"['/login']\"  class=\"m-0 p-0 font-700\">Iniciar Sesión</p>\r\n    </div>\r\n\r\n          \r\n  </div>\r\n\r\n  <div *ngIf=\"isLoad\" class=\"load\">\r\n      <img src=\"/assets/img/partials/load.svg\">\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/tabs/config/config-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/tabs/config/config-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ConfigPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageRoutingModule", function() { return ConfigPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.page */ "./src/app/pages/tabs/config/config.page.ts");




const routes = [
    {
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_3__["ConfigPage"]
    },
    {
        path: 'config-user',
        loadChildren: () => Promise.all(/*! import() | config-user-config-user-module */[__webpack_require__.e("default~config-user-config-user-module~config-user-provider-config-user-provider-module~edit-product~9f3b40de"), __webpack_require__.e("config-user-config-user-module")]).then(__webpack_require__.bind(null, /*! ./config-user/config-user.module */ "./src/app/pages/tabs/config/config-user/config-user.module.ts")).then(m => m.ConfigUserPageModule)
    }
];
let ConfigPageRoutingModule = class ConfigPageRoutingModule {
};
ConfigPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConfigPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/config/config.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/config/config.module.ts ***!
  \****************************************************/
/*! exports provided: ConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-routing.module */ "./src/app/pages/tabs/config/config-routing.module.ts");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.page */ "./src/app/pages/tabs/config/config.page.ts");







let ConfigPageModule = class ConfigPageModule {
};
ConfigPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _config_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfigPageRoutingModule"]
        ],
        declarations: [_config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]]
    })
], ConfigPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/config/config.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/tabs/config/config.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* FONTS */\nheader .user-image {\n  min-width: 50px;\n  min-height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.linea {\n  border-bottom: solid 3px #e6e6e6;\n}\n.date {\n  border: solid 2px #ffe266;\n  border-radius: 10px;\n  min-height: 40px;\n}\n.display p {\n  font-weight: 500;\n}\n.display label {\n  font-size: 30pt;\n  font-weight: 900;\n}\n.display .left {\n  border-radius: 10px 0 0 10px;\n  border-right: solid 2px #81efc2;\n}\n.display .right {\n  border-radius: 0 10px 10px 0;\n  border-left: solid 2px #81efc2;\n}\n.option {\n  border-radius: 10px;\n}\n.load {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.load img {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9jb25maWcvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy9jb25maWcvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcYXBwXFxwYWdlc1xcdGFic1xcY29uZmlnXFxjb25maWcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzL2NvbmZpZy9jb25maWcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUNHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0RSO0FESUE7RUFDSSxnQ0FBQTtBQ0RKO0FESUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREtJO0VBQ0ksZ0JBQUE7QUNGUjtBRElJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRlI7QURJSTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUNGUjtBRElJO0VBQ0ksNEJBQUE7RUFDQSw4QkFBQTtBQ0ZSO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FEV0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEU0k7RUFDSSxZQUFBO0FDUFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzL2NvbmZpZy9jb25maWcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRk9OVFMgKi9cclxuXHJcbiRmb250TTogTXlyaWFkUHJvO1xyXG4kZm9udFQ6IFRyZWJ1Y2hldE1TO1xyXG5cclxuXHJcbi8vIENPTE9SUyBcclxuXHJcblxyXG4kY29sb3IxOiAjZmZlMjY2O1xyXG4kY29sb3IyOiAjMTNiZjllO1xyXG4kY29sb3IzOiAjMzMzMzMzO1xyXG4kY29sb3I0OiAjNGQ0ZDRkO1xyXG4kY29sb3I1OiAjODA4MDgwO1xyXG4kY29sb3I2OiAjQTlBQkFFO1xyXG4kY29sb3I3OiAjZTZlNmU2O1xyXG4kY29sb3I4OiAjZWM3YzhiO1xyXG4kY29sb3I5OiAjMDBhMTk4O1xyXG4kY29sb3IxMDogIzMxNDg4YTtcclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbmhlYWRlcntcclxuICAgIC51c2VyLWltYWdle1xyXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuLmxpbmVhe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICRjb2xvcjc7XHJcbn1cclxuXHJcbi5kYXRle1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggJGNvbG9yMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uZGlzcGxheXtcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBwdDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG4gICAgLmxlZnR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAjODFlZmMyO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjODFlZmMyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLm9wdGlvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi8vTE9BRFxyXG5cclxuLmxvYWR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogLjkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICBvcGFjaXR5OiAuOTtcclxuICAgIH1cclxufSIsIi8qIEZPTlRTICovXG5oZWFkZXIgLnVzZXItaW1hZ2Uge1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmxpbmVhIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICNlNmU2ZTY7XG59XG5cbi5kYXRlIHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZTI2NjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLmRpc3BsYXkgcCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uZGlzcGxheSBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMzBwdDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5kaXNwbGF5IC5sZWZ0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggIzgxZWZjMjtcbn1cbi5kaXNwbGF5IC5yaWdodCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggIzgxZWZjMjtcbn1cblxuLm9wdGlvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5sb2FkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvYWQgaW1nIHtcbiAgb3BhY2l0eTogMC45O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tabs/config/config.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/config/config.page.ts ***!
  \**************************************************/
/*! exports provided: ConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return ConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ConfigPage = class ConfigPage {
    constructor(router, api, cookie) {
        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.userimage = "/assets/img/partials/user.svg";
        this.isLoad = false;
        this.toogleAnuncio = false;
        this.name = '';
        this.number = '';
        this.response = '';
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.validateSession();
        this.getCategoriesAndSubcategories();
    }
    sendAnuncio() {
        this.isLoad = true;
        let data = {
            name: this.name,
            number: this.number,
            service: 'save-anuncio'
        };
        this.api.api(data).subscribe(result => {
            this.isLoad = false;
            this.response = 'Gracias, nos contactaremos en breve';
            this.name = '';
            this.number = '';
            this.api.c('sendAnuncio result', result);
        }, error => {
            this.api.c('Error sendAnuncio', error);
        });
    }
    toogle() {
        this.toogleAnuncio = this.toogleAnuncio ? false : true;
    }
    validateSession() {
        if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
            this.getDataUSerById();
        }
    }
    getCategoriesAndSubcategories() {
        this.isLoad = true;
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
    getDataUSerById() {
        this.isLoad = true;
        let data = {
            service: 'get-data-user-by-id',
            userid: this.user.user.id,
            token: this.user.token
        };
        this.api.api(data).subscribe((result) => {
            this.api.c('getDataUSerById', result);
            this.userimage = result.imageprofile;
            this.isLoad = false;
        }, error => {
            this.api.c('Error getDataUSerById', error);
        });
    }
    logout() {
        this.isLoad = true;
        let data = {
            userid: this.user.user.id,
            token: this.user.token,
            service: 'logout'
        };
        this.api.api(data).subscribe(result => {
            localStorage.removeItem('ud');
            setTimeout(_ => {
                this.isLoad = false;
                this.router.navigate(['/login']);
            }, 1000);
        }, error => {
            this.api.c('Error logout', error);
            if (error.status == 401) {
                localStorage.removeItem('ud');
                this.router.navigate(['/login']);
            }
        });
    }
    toogleMenu() {
        this.api.c('toogleMenuFather', 'ok');
        this.eventsSubject.next();
    }
};
ConfigPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
ConfigPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-config',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./config.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/config/config.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./config.page.scss */ "./src/app/pages/tabs/config/config.page.scss")).default]
    })
], ConfigPage);



/***/ })

}]);
//# sourceMappingURL=config-config-module-es2015.js.map
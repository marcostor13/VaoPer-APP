function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-provider-config-provider-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/config-provider/config-provider.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/config-provider/config-provider.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsProviderConfigProviderConfigProviderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>config-provider</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <header class=\"container-fluid pt-3 pl-3 pr-3\">\n    <div class=\"row m-0 justify-content-between align-items-center\">\n      <div class=\"row align-items-center m-0\">\n        <div class=\"user-image\" [style]=\"'background-image: url('+userimage+')'\"></div>\n        <h6 class=\"ml-3 font-700 f-13\">{{user.user.name}}</h6>\n      </div>\n    </div>\n  </header>\n  <hr class=\"linea\">\n  \n  <div class=\"d-flex flex-column m-0 p-3\">\n  \n    <div class=\"cursor option p-3 col-12 bg-color7 col-xl-5\">\n      <p [routerLink]=\"['config-user-provider']\" class=\"m-0 p-0 font-700\">Configuración</p>\n    </div>\n  \n    <div class=\"cursor option p-3 col-12 bg-color7 col-xl-5 mt-3\">\n      <p (click)=\"logout()\" class=\"m-0 p-0 font-700\">Cerrar Sesión</p>\n    </div>\n  \n  </div>\n  \n  <div *ngIf=\"isLoad\" class=\"load\">\n    <img src=\"/assets/img/partials/load.svg\">\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/config-provider/config-provider-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/config-provider/config-provider-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: ConfigProviderPageRoutingModule */

  /***/
  function srcAppPagesTabsProviderConfigProviderConfigProviderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigProviderPageRoutingModule", function () {
      return ConfigProviderPageRoutingModule;
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


    var _config_provider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./config-provider.page */
    "./src/app/pages/tabs-provider/config-provider/config-provider.page.ts");

    var routes = [{
      path: '',
      component: _config_provider_page__WEBPACK_IMPORTED_MODULE_3__["ConfigProviderPage"]
    }, {
      path: 'config-user-provider',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | config-user-provider-config-user-provider-module */
        [__webpack_require__.e("default~config-user-config-user-module~config-user-provider-config-user-provider-module~edit-product~9f3b40de"), __webpack_require__.e("config-user-provider-config-user-provider-module")]).then(__webpack_require__.bind(null,
        /*! ./config-user-provider/config-user-provider.module */
        "./src/app/pages/tabs-provider/config-provider/config-user-provider/config-user-provider.module.ts")).then(function (m) {
          return m.ConfigUserProviderPageModule;
        });
      }
    }];

    var ConfigProviderPageRoutingModule = function ConfigProviderPageRoutingModule() {
      _classCallCheck(this, ConfigProviderPageRoutingModule);
    };

    ConfigProviderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfigProviderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/config-provider/config-provider.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/config-provider/config-provider.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: ConfigProviderPageModule */

  /***/
  function srcAppPagesTabsProviderConfigProviderConfigProviderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigProviderPageModule", function () {
      return ConfigProviderPageModule;
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


    var _config_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./config-provider-routing.module */
    "./src/app/pages/tabs-provider/config-provider/config-provider-routing.module.ts");
    /* harmony import */


    var _config_provider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./config-provider.page */
    "./src/app/pages/tabs-provider/config-provider/config-provider.page.ts");

    var ConfigProviderPageModule = function ConfigProviderPageModule() {
      _classCallCheck(this, ConfigProviderPageModule);
    };

    ConfigProviderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _config_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfigProviderPageRoutingModule"]],
      declarations: [_config_provider_page__WEBPACK_IMPORTED_MODULE_6__["ConfigProviderPage"]]
    })], ConfigProviderPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/config-provider/config-provider.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/config-provider/config-provider.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTabsProviderConfigProviderConfigProviderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* FONTS */\nheader .user-image {\n  min-width: 50px;\n  min-height: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.linea {\n  border-bottom: solid 3px #e6e6e6;\n}\n.date {\n  border: solid 2px #ffe266;\n  border-radius: 10px;\n  min-height: 40px;\n}\n.display p {\n  font-weight: 500;\n}\n.display label {\n  font-size: 30pt;\n  font-weight: 900;\n}\n.display .left {\n  border-radius: 10px 0 0 10px;\n  border-right: solid 2px #81efc2;\n}\n.display .right {\n  border-radius: 0 10px 10px 0;\n  border-left: solid 2px #81efc2;\n}\n.option {\n  border-radius: 10px;\n}\n.load {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.load img {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9jb25maWctcHJvdmlkZXIvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9jb25maWctcHJvdmlkZXIvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcYXBwXFxwYWdlc1xcdGFicy1wcm92aWRlclxcY29uZmlnLXByb3ZpZGVyXFxjb25maWctcHJvdmlkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzLXByb3ZpZGVyL2NvbmZpZy1wcm92aWRlci9jb25maWctcHJvdmlkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUNHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0RSO0FESUE7RUFDSSxnQ0FBQTtBQ0RKO0FESUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREtJO0VBQ0ksZ0JBQUE7QUNGUjtBRElJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRlI7QURJSTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7QUNGUjtBRElJO0VBQ0ksNEJBQUE7RUFDQSw4QkFBQTtBQ0ZSO0FET0E7RUFDSSxtQkFBQTtBQ0pKO0FEVUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1BKO0FEUUk7RUFDSSxZQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJzLXByb3ZpZGVyL2NvbmZpZy1wcm92aWRlci9jb25maWctcHJvdmlkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRk9OVFMgKi9cclxuXHJcbiRmb250TTogTXlyaWFkUHJvO1xyXG4kZm9udFQ6IFRyZWJ1Y2hldE1TO1xyXG5cclxuXHJcbi8vIENPTE9SUyBcclxuXHJcblxyXG4kY29sb3IxOiAjZmZlMjY2O1xyXG4kY29sb3IyOiAjMTNiZjllO1xyXG4kY29sb3IzOiAjMzMzMzMzO1xyXG4kY29sb3I0OiAjNGQ0ZDRkO1xyXG4kY29sb3I1OiAjODA4MDgwO1xyXG4kY29sb3I2OiAjQTlBQkFFO1xyXG4kY29sb3I3OiAjZTZlNmU2O1xyXG4kY29sb3I4OiAjZWM3YzhiO1xyXG4kY29sb3I5OiAjMDBhMTk4O1xyXG4kY29sb3IxMDogIzMxNDg4YTtcclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcbmhlYWRlcntcclxuICAgIC51c2VyLWltYWdle1xyXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuLmxpbmVhe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICRjb2xvcjc7XHJcbn1cclxuXHJcbi5kYXRle1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggJGNvbG9yMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uZGlzcGxheXtcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBwdDtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgfVxyXG4gICAgLmxlZnR7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAjODFlZmMyO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjODFlZmMyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLm9wdGlvbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLy9MT0FEXHJcblxyXG4ubG9hZHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmZmZiwgJGFscGhhOiAuOSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW1ne1xyXG4gICAgICAgIG9wYWNpdHk6IC45O1xyXG4gICAgfVxyXG59IiwiLyogRk9OVFMgKi9cbmhlYWRlciAudXNlci1pbWFnZSB7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubGluZWEge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2U2ZTZlNjtcbn1cblxuLmRhdGUge1xuICBib3JkZXI6IHNvbGlkIDJweCAjZmZlMjY2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4uZGlzcGxheSBwIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5kaXNwbGF5IGxhYmVsIHtcbiAgZm9udC1zaXplOiAzMHB0O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLmRpc3BsYXkgLmxlZnQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAjODFlZmMyO1xufVxuLmRpc3BsYXkgLnJpZ2h0IHtcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCAjODFlZmMyO1xufVxuXG4ub3B0aW9uIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxvYWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9hZCBpbWcge1xuICBvcGFjaXR5OiAwLjk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/tabs-provider/config-provider/config-provider.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/tabs-provider/config-provider/config-provider.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: ConfigProviderPage */

  /***/
  function srcAppPagesTabsProviderConfigProviderConfigProviderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigProviderPage", function () {
      return ConfigProviderPage;
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


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var ConfigProviderPage = /*#__PURE__*/function () {
      function ConfigProviderPage(router, api, cookie) {
        _classCallCheck(this, ConfigProviderPage);

        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.userimage = "/assets/img/partials/user.svg";
        this.isLoad = false;
      }

      _createClass(ConfigProviderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validateSession();
          this.getDataUSerById();
        }
      }, {
        key: "validateSession",
        value: function validateSession() {
          if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
          }

          this.getImageProfile();
        }
      }, {
        key: "getDataUSerById",
        value: function getDataUSerById() {
          var _this = this;

          this.isLoad = true;
          var data = {
            service: 'get-data-user-by-id',
            userid: this.user.user.id,
            token: this.user.token
          };
          this.api.api(data).subscribe(function (result) {
            _this.api.c('getDataUSerById', result);

            _this.userimage = result.imageprofile;
            _this.isLoad = false;
          }, function (error) {
            _this.api.c('Error getDataUSerById', error);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this2 = this;

          this.isLoad = true;
          var data = {
            userid: this.user.user.id,
            token: this.user.token,
            service: 'logout'
          };
          this.api.api(data).subscribe(function (result) {
            localStorage.removeItem('ud');
            setTimeout(function (_) {
              _this2.isLoad = false;

              _this2.router.navigate(['/login']);
            }, 1000);
          }, function (error) {
            _this2.api.c('Error logout', error);

            if (error.status == 401) {
              localStorage.removeItem('ud');

              _this2.router.navigate(['/login']);
            }
          });
        }
      }, {
        key: "getImageProfile",
        value: function getImageProfile() {
          var _this3 = this;

          var data = {
            service: 'get-image-profile',
            token: this.user.token,
            userid: this.user.user.id
          };
          this.api.api(data).subscribe(function (res) {
            _this3.api.c('getImageProfile result', res);

            if (res.status) {
              if (res.data && res.data != 'null') {
                _this3.userimage = res.data;
              }
            }
          }, function (error) {
            _this3.api.c('Error getImageProfile', error);

            if (error.error.message === 'Token has expired') {
              localStorage.removeItem('ud');

              _this3.router.navigate(['/auth/login']);
            }
          });
        }
      }]);

      return ConfigProviderPage;
    }();

    ConfigProviderPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    ConfigProviderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-config-provider',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./config-provider.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/config-provider/config-provider.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./config-provider.page.scss */
      "./src/app/pages/tabs-provider/config-provider/config-provider.page.scss"))["default"]]
    })], ConfigProviderPage);
    /***/
  }
}]);
//# sourceMappingURL=config-provider-config-provider-module-es5.js.map
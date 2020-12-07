function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"], {
  /***/
  "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js ***!
    \**************************************************************************/

  /*! exports provided: GooglePlus */

  /***/
  function node_modulesIonicNativeGooglePlus__ivy_ngcc__NgxIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GooglePlus", function () {
      return GooglePlus;
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


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

    var GooglePlus =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GooglePlus, _super);

      function GooglePlus() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      GooglePlus.prototype.login = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "login", {
          "successIndex": 1,
          "errorIndex": 2
        }, arguments);
      };

      GooglePlus.prototype.trySilentLogin = function (options) {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "trySilentLogin", {}, arguments);
      };

      GooglePlus.prototype.logout = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logout", {}, arguments);
      };

      GooglePlus.prototype.disconnect = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disconnect", {}, arguments);
      };

      GooglePlus.prototype.getSigningCertificateFingerprint = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getSigningCertificateFingerprint", {}, arguments);
      };

      GooglePlus.pluginName = "GooglePlus";
      GooglePlus.plugin = "cordova-plugin-googleplus";
      GooglePlus.pluginRef = "window.plugins.googleplus";
      GooglePlus.repo = "https://github.com/EddyVerbruggen/cordova-plugin-googleplus";
      GooglePlus.install = "ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid";
      GooglePlus.installVariables = ["REVERSED_CLIENT_ID"];
      GooglePlus.platforms = ["Android", "iOS"];

      GooglePlus.ɵfac = function GooglePlus_Factory(t) {
        return ɵGooglePlus_BaseFactory(t || GooglePlus);
      };

      GooglePlus.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: GooglePlus,
        factory: function factory(t) {
          return GooglePlus.ɵfac(t);
        }
      });

      var ɵGooglePlus_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GooglePlus);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GooglePlus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return GooglePlus;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZ29vZ2xlLXBsdXMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBS0EsSUF1QmdDLDhCQUFpQjtBQUFDO0FBRTlCO0FBRW5CO0FBQU0sSUFNTCwwQkFBSyxhQUFDLE9BQVk7QUFLNEIsSUFLOUMsbUNBQWMsYUFBQyxPQUFhO0FBS1QsSUFJbkIsMkJBQU07QUFLaUIsSUFJdkIsK0JBQVU7QUFLaUIsSUFJM0IscURBQWdDO0FBSXNCO0FBQTBDO0FBQXFEO0FBQXdEO0FBQXFGO0FBQWdJO0FBQTBEO0lBbkRqZCxVQUFVLHdCQUR0QixVQUFVLEVBQUUsUUFDQSxVQUFVOzs7OzswQkFBRTtBQUFDLHFCQTlCMUI7QUFBRSxFQThCOEIsaUJBQWlCO0FBQ2hELFNBRFksVUFBVTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgR29vZ2xlIFBsdXNcbiAqIEBkZXNjcmlwdGlvblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHb29nbGVQbHVzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nb29nbGUtcGx1cy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlUGx1czogR29vZ2xlUGx1cykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5nb29nbGVQbHVzLmxvZ2luKHt9KVxuICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZVBsdXMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVwbHVzJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMuZ29vZ2xlcGx1cycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlcGx1cycsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ29vZ2xlcGx1cyAtLXZhcmlhYmxlIFJFVkVSU0VEX0NMSUVOVF9JRD1teXJldmVyc2VkY2xpZW50aWQnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1JFVkVSU0VEX0NMSUVOVF9JRCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlUGx1cyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoZSBsb2dpbiBmdW5jdGlvbiB3YWxrcyB0aGUgdXNlciB0aHJvdWdoIHRoZSBHb29nbGUgQXV0aCBwcm9jZXNzLlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBsb2dpbihvcHRpb25zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNhbGwgdHJ5U2lsZW50TG9naW4gdG8gY2hlY2sgaWYgdGhleSdyZSBhbHJlYWR5IHNpZ25lZCBpbiB0byB0aGUgYXBwIGFuZCBzaWduIHRoZW0gaW4gc2lsZW50bHkgaWYgdGhleSBhcmUuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyeVNpbGVudExvZ2luKG9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgY2xlYXIgdGhlIE9BdXRoMiB0b2tlbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBjbGVhciB0aGUgT0F1dGgyIHRva2VuLCBmb3JnZXQgd2hpY2ggYWNjb3VudCB3YXMgdXNlZCB0byBsb2dpbiwgYW5kIGRpc2Nvbm5lY3QgdGhhdCBhY2NvdW50IGZyb20gdGhlIGFwcC4gVGhpcyB3aWxsIHJlcXVpcmUgdGhlIHVzZXIgdG8gYWxsb3cgdGhlIGFwcCBhY2Nlc3MgYWdhaW4gbmV4dCB0aW1lIHRoZXkgc2lnbiBpbi4gQmUgYXdhcmUgdGhhdCB0aGlzIGVmZmVjdCBpcyBub3QgYWx3YXlzIGluc3RhbnRhbmVvdXMuIEl0IGNhbiB0YWtlIHRpbWUgdG8gY29tcGxldGVseSBkaXNjb25uZWN0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaXNjb25uZWN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCByZXRyaWV2ZSB0aGUgQW5kcm9pZCBzaWduaW5nIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IHdoaWNoIGlzIHJlcXVpcmVkIGluIHRoZSBHb29nbGUgRGV2ZWxvcGVyIENvbnNvbGUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNpZ25pbmdDZXJ0aWZpY2F0ZUZpbmdlcnByaW50KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

    /***/

  },

  /***/
  "./src/app/pages/auth/login/login-routing.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/auth/login/login-routing.module.ts ***!
    \**********************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesAuthLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/auth/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/auth/login/login.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/auth/login/login.module.ts ***!
    \**************************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesAuthLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/auth/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/auth/login/login.page.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
    /* harmony import */


    var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/google-plus/ngx */
    "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng-zorro-antd/modal */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialLoginModule"], ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonModule"]],
      providers: [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"], {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [{
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"]('216189303909-di5rc6rrp30hni4h5uqegfh0oi5h5tsf.apps.googleusercontent.com')
          }, {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"]('663809824221994')
          }]
        }
      }],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-auth-login-login-module-es5.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/profile/profile.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/profile/profile.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsHomeProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <div class=\"p-3 bg-color2 row justify-content-between m-0\">\n      <button [routerLink]=\"['/tabs']\" class=\"btn5 pt-2 pb-2\">Regresar</button>\n      <div class=\"row align-items-center m-0\">\n          <img [routerLink]=\"['/tabs']\"  width=\"60\" src=\"/assets/img/logo.jpeg\">\n      </div>\n  </div>\n</ion-header>\n\n<ion-content>\n  <div class=\"p-3\">\n\n      <ng-container *ngIf=\"companyData\">\n          <div *ngIf=\"companyData.image\" class=\"imgProfileEdit col-12\" [ngStyle]=\"{'background-image': 'url('+companyData.image+')'}\"></div>     \n          <div *ngIf=\"!companyData.image\" class=\"main-photo row m-0 justify-content-center align-items-center\">\n              <p class=\"font-700\">Foto de perfil</p>\n          </div>\n          <div class=\"col-12 row m-0 p-0 justify-content-between align-items-center mt-4\">\n\n                <button [routerLink]=\"['/tabs/home/information/'+id]\"  class=\"btn3 pr-3 pl-3 pt-2 pb-2 font-700 f-10\">VER INFORMACIÓN</button>\n                <div class=\"row m-0 align-items-center\">\n                    <img *ngIf=\"companyData.tienda\" width=\"22\" class=\"ml-2\" src=\"/assets/img/icons/tienda.png\" alt=\"Recojo en tienda\">\n                    <img *ngIf=\"companyData.delivery\" width=\"22\" class=\"ml-2\" src=\"/assets/img/icons/delivery.png\" alt=\"Delivery\">\n                </div>\n                <div>\n                    <img (click)=\"addFeaturedCompanies(companyData.id, $event)\" width=\"32\" [src]=\"companyData.idfeatured ? '/assets/img/partials/star.svg' : '/assets/img/partials/star-g.svg'\" alt=\"\">\n                    <img (click)=\"share(companyData.url, companyData.comercialname)\" width=\"22\" class=\"ml-2\" src=\"/assets/img/partials/share.svg\" alt=\"\">\n                </div>\n          </div>\n\n          \n          <p class=\"font-700 mt-3 f-12\">{{companyData.comercialname}}</p>\n          <div *ngIf=\"companyData.starthour && companyData.endhour\" class=\"col-12 p-0 m-0 row align-items-end mt-1\">\n                <img *ngIf=\"general.apertura(companyData.starthour, companyData.endhour)\" width=\"34\" class=\"\" src=\"/assets/img/icons/open.svg\" alt=\"Abierto\">\n                <img *ngIf=\"!general.apertura(companyData.starthour, companyData.endhour)\" width=\"34\" class=\"\" src=\"/assets/img/icons/close.svg\" alt=\"Cerrado\">\n                <span class=\"f-11 font-700 text-color6 ml-2\">{{companyData.starthour }}</span>\n                <span class=\"f-11 font-700 text-color6 ml-2\">- {{companyData.endhour }}</span>\n            </div>\n          <p *ngIf=\"companyData.description  && companyData.description!= 'null'\" class=\"font-500 mt-2 f-11\">{{companyData.description}}</p>\n          <div class=\"row m-0\">\n              <a href=\"tel:{{companyData.phone1}}\" (click)=\"general.saveEvent('call', companyData.id)\" class=\"btn1 flex-1 pt-2 pb-2 mr-2 font-700 text-center link-unstyled\">LLAMADA</a>\n              <button (click)=\"message(companyData.userid, companyData.id, companyData.phone1)\" class=\"btn2 flex-1 pt-2 pb-2 font-700\">WHATSAPP</button>\n          </div>\n\n      </ng-container>\n\n  </div>\n\n\n\n\n      <div>\n          <div *ngIf=\"companyData.products && companyData.products.length > 0\" class=\"pl-3 pt-3\">\n              <h6 class=\"font-700 text-color2\">Productos</h6>\n          </div>\n\n          <ion-slides *ngIf=\"companyData.products && companyData.products.length > 0\" pager=\"false\" [options]=\"slideOpts\" class=\"p-3\">\n            <ion-slide *ngFor=\"let item of companyData.products; let i = index\" class=\"p-2\">\n                    \n                <div [routerLink]=\"['/tabs/home/products/products/'+item.companyid]\" *ngIf=\"item.images && item.images.length > 0\"  class=\"img row m-0 justify-content-center align-items-start\" [ngStyle]=\"{'background-image': 'url('+ getFirstImage(item.images) +')'}\">\n                    <div class=\"description col-12 row m-0 p-3\">\n                        <span>{{item.name}}</span>\n                        <p class=\"col-12 m-0 text-white  p-0 f-10\" *ngIf=\"item.description && item.description != '' && item.description != 'null'\" [innerHTML]=\"item.description.substring(0,30)\"><ng-container *ngIf=\"item.description.length > 29\">...</ng-container></p> \n                    </div>\n                </div>\n\n                <ng-container *ngIf=\"!item.images || item.images.length == 0\">\n                    <div [routerLink]=\"['/tabs/home/products/products/'+item.companyid]\" *ngIf=\"item.image && item.image.indexOf('data:image') > -1\"  class=\"img row m-0 justify-content-center align-items-start\" [ngStyle]=\"{'background-image': 'url('+ item.image +')'}\">\n                        <div class=\"description col-12 row m-0 p-3\">\n                            <span>{{item.name}}</span>\n                            <p class=\"col-12 m-0 text-center text-white  p-0 f-10\" *ngIf=\"item.description && item.description != '' && item.description != 'null'\" [innerHTML]=\"item.description.substring(0,30)\"><ng-container *ngIf=\"item.description.length > 29\">...</ng-container></p>                             \n                        </div>\n                    </div>\n                    <div [routerLink]=\"['/tabs/home/products/products/'+item.companyid]\" *ngIf=\"item.image && item.image.indexOf('data:image') === -1\"  class=\"img row m-0 justify-content-center align-items-start\" [ngStyle]=\"{'background-image': 'url('+ urlBackEndProducts + getUriImage(item.image) +')'}\">\n                        <div class=\"description col-12 row m-0 p-3\">\n                            <span>{{item.name}}</span>\n                            <p class=\"col-12 m-0 text-center text-white  p-0 f-10\" *ngIf=\"item.description && item.description != '' && item.description != 'null'\">{{item.description.substring(0,40)}}<ng-container *ngIf=\"item.description.length > 39\">...</ng-container></p> \n                        </div>\n                    </div>\n                </ng-container>\n \n            </ion-slide>\n          </ion-slides>\n          \n      \n      </div>\n\n\n      <div>\n          \n          <div *ngIf=\"companyData.featured && companyData.featured.length > 0\" class=\"pl-3\">\n              <h6 class=\"font-700 text-color2\">Productos Destacados</h6>\n          </div>\n          <ion-slides *ngIf=\"companyData.featured && companyData.featured.length > 0\" pager=\"false\" [options]=\"slideOpts\" class=\"p-3\">\n              <ion-slide *ngFor=\"let item of companyData.featured; let i = index\" class=\"p-2\">\n                  <div [routerLink]=\"['/tabs/home/products/featured/'+item.companyid]\" *ngIf=\"item.images && item.images.length > 0\"  class=\"img row m-0 justify-content-center align-items-start\" [ngStyle]=\"{'background-image': 'url('+ getFirstImage(item.images) +')'}\">\n                      <div class=\"description col-12 row m-0 p-3\">\n                          <span>{{item.name}}</span>\n\n                          <p class=\"col-12 m-0 text-center text-white  p-0 f-10\" *ngIf=\"item.description && item.description != '' && item.description != 'null'\" [innerHTML]=\"item.description.substring(0,30)\"><ng-container *ngIf=\"item.description.length > 29\">...</ng-container></p>\n                      </div>\n                  </div>\n\n                  <ng-container *ngIf=\"!item.images || item.images.length == 0\">\n                      <div [routerLink]=\"['/tabs/home/products/featured/'+item.companyid]\" *ngIf=\"item.image && item.image.indexOf('data:image') > -1\"  class=\"img row m-0 justify-content-center align-items-start\" [ngStyle]=\"{'background-image': 'url('+ item.image +')'}\">\n                          <div class=\"description col-12 row m-0 p-3\">\n                              <span>{{item.name}}</span>\n                              <p class=\"col-12 m-0 text-center text-white  p-0 f-10\" *ngIf=\"item.description && item.description != '' && item.description != 'null'\" [innerHTML]=\"item.description.substring(0,30)\"><ng-container *ngIf=\"item.description.length > 29\">...</ng-container></p>\n                          </div>\n                      </div>\n                      <div [routerLink]=\"['/tabs/home/products/featured/'+item.companyid]\" *ngIf=\"item.image && item.image.indexOf('data:image') === -1\"  class=\"img row m-0 justify-content-center align-items-start\" [ngStyle]=\"{'background-image': 'url('+ urlBackEndProducts + getUriImage(item.image) +')'}\">\n                          <div class=\"description col-12 row m-0 p-3\">\n                              <span>{{item.name}}</span>\n                              <p class=\"col-12 m-0 text-center text-white  p-0 f-10\" *ngIf=\"item.description && item.description != '' && item.description != 'null'\">{{item.description.substring(0,40)}}<ng-container *ngIf=\"item.description.length > 39\">...</ng-container></p> \n                          </div>\n                      </div>\n                  </ng-container>\n                \n              </ion-slide>\n            </ion-slides>\n          \n      </div>\n      \n      \n      \n      <div>\n          <div *ngIf=\"companyData.offers && companyData.offers.length > 0\" class=\"pl-3\">\n              <h6 class=\"font-700 text-color2\">Ofertas</h6>\n          </div>\n          \n\n          <ion-slides *ngIf=\"companyData.offers && companyData.offers.length > 0\" pager=\"false\" [options]=\"slideOpts\" class=\"p-3\">\n            <ion-slide *ngFor=\"let item of companyData.offers; let i = index\" class=\"p-2\">            \n                  <!-- <div  class=\"img-item\" [ngStyle]=\"{'background-image': 'url('+ item.image +')'}\"></div> -->\n                  <div *ngIf=\"item.image\" [routerLink]=\"['/tabs/home/products/offers/'+item.companyid]\" class=\"img\" [ngStyle]=\"{'background-image': 'url('+ item.image +')'}\">\n                      <div class=\"description col-12 row m-0 p-3\">\n                          <span>{{item.name}}</span>\n                          <p class=\"col-12 m-0 text-center text-white  p-0 f-10\" *ngIf=\"item.description && item.description != '' && item.description != 'null'\" [innerHTML]=\"item.description.substring(0,30)\"><ng-container *ngIf=\"item.description.length > 29\">...</ng-container></p>\n                      </div>\n                  </div>\n                  <!-- <div *ngIf=\"item.image.indexOf('data:image') === -1\" [routerLink]=\"['/tabs/home/products/offers/'+item.companyid]\" class=\"img\" [ngStyle]=\"{'background-image': 'url('+ urlBackEndOffers + getUriImage(item.image) +')'}\">\n                      <div class=\"description col-12 row m-0 p-3\">\n                          <span>{{item.name}}</span>\n                          <p class=\"col-12 m-0 text-center text-white  p-0 f-10\" *ngIf=\"item.description && item.description != '' && item.description != 'null'\">{{item.description.substring(0,40)}}<ng-container *ngIf=\"item.description.length > 39\">...</ng-container></p> \n                      </div>\n                  </div>         -->\n            </ion-slide>\n          </ion-slides>\n\n      </div>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/tabs/home/profile/profile-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/tabs/home/profile/profile-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesTabsHomeProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/tabs/home/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/home/profile/profile.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/tabs/home/profile/profile.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesTabsHomeProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/tabs/home/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/tabs/home/profile/profile.page.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
      providers: [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/home/profile/profile.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/tabs/home/profile/profile.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTabsHomeProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* FONTS */\n.linea {\n  border-bottom: solid 3px #e6e6e6;\n}\n.main-photo {\n  border-radius: 10px;\n  background-color: #e6e6e6;\n  min-height: 925vw;\n  min-width: 92vw;\n  max-width: 92vw;\n  min-width: 92vw !important;\n}\n.imgProfileEdit {\n  border-radius: 10px;\n  background-color: white;\n  min-height: 92vw;\n  min-width: 92vw;\n  max-width: 92vw;\n  min-width: 92vw !important;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n:focus {\n  outline: 0;\n}\n.img {\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  min-height: 250px;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 1px 3px 8px 5px #c2c2c2;\n}\n.description {\n  background-color: rgba(19, 191, 158, 0.7);\n}\n.description span {\n  color: white;\n  font-size: 11pt;\n}\n.main-photo2 {\n  min-width: 300px;\n  max-width: 300px;\n}\n:focus {\n  outline: 0;\n}\nbutton:disabled {\n  background-color: #e6e6e6 !important;\n}\n.border-1 {\n  border-radius: 10px;\n}\n.vertical-line {\n  min-width: 6px;\n  min-height: 54px;\n}\n#map {\n  min-height: 280px;\n}\n.card-item {\n  box-shadow: 1px 3px 8px 5px #c2c2c2;\n  border-radius: 10px;\n  max-width: 300px;\n  min-width: 300px;\n  max-height: 450px !important;\n  min-height: 450px !important;\n  position: relative;\n  overflow: hidden;\n}\n.card-item .img-item {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-color: #e6e6e6;\n  border-radius: 10px 10px 0 0;\n  max-width: 300px;\n  min-width: 300px;\n  max-height: 300px;\n  min-height: 300px;\n}\n.parraf {\n  min-height: 30px;\n}\n.load {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.load img {\n  opacity: 0.9;\n}\n.ng-star-inserted {\n  margin-top: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9ob21lL3Byb2ZpbGUvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy9ob21lL3Byb2ZpbGUvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcYXBwXFxwYWdlc1xcdGFic1xcaG9tZVxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMvaG9tZS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUNHQTtFQUNJLGdDQUFBO0FDREo7QURJQTtFQUNJLG1CQUFBO0VBQ0EseUJETUs7RUNMTCxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNESjtBRElBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0RKO0FESUE7RUFDUSxVQUFBO0FDRFI7QURJQTtFQUNJLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBR0EsbUNBQUE7QUNESjtBREtBO0VBQ0kseUNBQUE7QUNGSjtBREdJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNEUjtBREtBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FETUE7RUFDSSxVQUFBO0FDSEo7QURNQTtFQUNJLG9DQUFBO0FDSEo7QURPQTtFQUNJLG1CQUFBO0FDSko7QURRQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEUUE7RUFDSSxpQkFBQTtBQ0xKO0FEUUE7RUFHSSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDTEo7QURNSTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCRGxGQztFQ21GRCw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDSlI7QURRQTtFQUNJLGdCQUFBO0FDTEo7QURXQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDUko7QURTSTtFQUNJLFlBQUE7QUNQUjtBRFlBO0VBQ0ksMkJBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMvaG9tZS9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRk9OVFMgKi9cclxuXHJcbiRmb250TTogTXlyaWFkUHJvO1xyXG4kZm9udFQ6IFRyZWJ1Y2hldE1TO1xyXG5cclxuXHJcbi8vIENPTE9SUyBcclxuXHJcblxyXG4kY29sb3IxOiAjZmZlMjY2O1xyXG4kY29sb3IyOiAjMTNiZjllO1xyXG4kY29sb3IzOiAjMzMzMzMzO1xyXG4kY29sb3I0OiAjNGQ0ZDRkO1xyXG4kY29sb3I1OiAjODA4MDgwO1xyXG4kY29sb3I2OiAjQTlBQkFFO1xyXG4kY29sb3I3OiAjZTZlNmU2O1xyXG4kY29sb3I4OiAjZWM3YzhiO1xyXG4kY29sb3I5OiAjMDBhMTk4O1xyXG4kY29sb3IxMDogIzMxNDg4YTtcclxuIiwiQGltcG9ydCAnLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzJztcclxuXHJcblxyXG4ubGluZWF7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggJGNvbG9yNztcclxufVxyXG5cclxuLm1haW4tcGhvdG97XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yNztcclxuICAgIG1pbi1oZWlnaHQ6OTI1dnc7XHJcbiAgICBtaW4td2lkdGg6IDkydnc7XHJcbiAgICBtYXgtd2lkdGg6IDkydnc7XHJcbiAgICBtaW4td2lkdGg6IDkydncgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZ1Byb2ZpbGVFZGl0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWluLWhlaWdodDogOTJ2dztcclxuICAgIG1pbi13aWR0aDogOTJ2dztcclxuICAgIG1heC13aWR0aDogOTJ2dztcclxuICAgIG1pbi13aWR0aDogOTJ2dyAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbjpmb2N1c3tcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG5cclxuLmltZ3tcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4IHJnYmEoMTk0LDE5NCwxOTQsMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCByZ2JhKDE5NCwxOTQsMTk0LDEpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4IHJnYmEoMTk0LDE5NCwxOTQsMSk7XHJcbn0gICBcclxuXHJcblxyXG4uZGVzY3JpcHRpb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJGNvbG9yMiwgJGFscGhhOiAuNyk7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDExcHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYWluLXBob3RvMntcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5cclxuOmZvY3Vze1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmJvcmRlci0xe1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcbi52ZXJ0aWNhbC1saW5le1xyXG4gICAgbWluLXdpZHRoOiA2cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1NHB4O1xyXG59XHJcblxyXG4jbWFwe1xyXG4gICAgbWluLWhlaWdodDogMjgwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWl0ZW17XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCByZ2JhKDE5NCwxOTQsMTk0LDEpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggcmdiYSgxOTQsMTk0LDE5NCwxKTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCByZ2JhKDE5NCwxOTQsMTk0LDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7ICAgICAgICBcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0NTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNDUwcHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAuaW1nLWl0ZW17XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I3O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7ICAgICAgICAgICAgIFxyXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7ICAgICAgICBcclxuICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucGFycmFme1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxufVxyXG5cclxuXHJcbi8vTE9BRFxyXG5cclxuLmxvYWR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogLjkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICBvcGFjaXR5OiAuOTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufSIsIi8qIEZPTlRTICovXG4ubGluZWEge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2U2ZTZlNjtcbn1cblxuLm1haW4tcGhvdG8ge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBtaW4taGVpZ2h0OiA5MjV2dztcbiAgbWluLXdpZHRoOiA5MnZ3O1xuICBtYXgtd2lkdGg6IDkydnc7XG4gIG1pbi13aWR0aDogOTJ2dyAhaW1wb3J0YW50O1xufVxuXG4uaW1nUHJvZmlsZUVkaXQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogOTJ2dztcbiAgbWluLXdpZHRoOiA5MnZ3O1xuICBtYXgtd2lkdGg6IDkydnc7XG4gIG1pbi13aWR0aDogOTJ2dyAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5pbWcge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4ICNjMmMyYzI7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4ICNjMmMyYzI7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCAjYzJjMmMyO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5LCAxOTEsIDE1OCwgMC43KTtcbn1cbi5kZXNjcmlwdGlvbiBzcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDExcHQ7XG59XG5cbi5tYWluLXBob3RvMiB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci0xIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnZlcnRpY2FsLWxpbmUge1xuICBtaW4td2lkdGg6IDZweDtcbiAgbWluLWhlaWdodDogNTRweDtcbn1cblxuI21hcCB7XG4gIG1pbi1oZWlnaHQ6IDI4MHB4O1xufVxuXG4uY2FyZC1pdGVtIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggI2MyYzJjMjtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggI2MyYzJjMjtcbiAgYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4ICNjMmMyYzI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQ1MHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJkLWl0ZW0gLmltZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG59XG5cbi5wYXJyYWYge1xuICBtaW4taGVpZ2h0OiAzMHB4O1xufVxuXG4ubG9hZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtaW4td2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2FkIGltZyB7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/tabs/home/profile/profile.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/tabs/home/profile/profile.page.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesTabsHomeProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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
    /* harmony import */


    var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/general.service */
    "./src/app/services/general.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(route, router, api, cookie, general, socialSharing) {
        _classCallCheck(this, ProfilePage);

        this.route = route;
        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.general = general;
        this.socialSharing = socialSharing;
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.urlBackEnd = this.general.getUrlImages('profile');
        this.urlBackEndOffers = this.general.getUrlImages('offers');
        this.urlBackEndProducts = this.general.getUrlImages('products');
        this.companiesData = [];
        this.isLoad = true;
        this.companyData = {};
        this.effect = 'scrollx';
        this.itemsProducts = [];
        this.itemsFeatured = [];
        this.itemsOffers = [];
        this.slideOpts = {
          initialSlide: 1,
          speed: 400
        }; //Modal

        this.isVisible = false;
        this.currentDescription = '';
        this.id = this.route.snapshot.paramMap.get('id');
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.api.c('ID', this.id);
          this.validateSession();
          this.getCategoriesAndSubcategories();
          this.getProducts('featured');
          this.getProducts('products');
          this.getProducts('offers');
        }
      }, {
        key: "validateSession",
        value: function validateSession() {
          if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
          }
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getCompanyData();
        }
      }, {
        key: "getCategoriesAndSubcategories",
        value: function getCategoriesAndSubcategories() {
          var _this = this;

          this.isLoad = true;
          var data = {
            service: 'get-categories-and-subcategories'
          };
          this.api.api(data).subscribe(function (result) {
            _this.api.c('getCategoriesAndSubcategories result', result);

            _this.categories = result;
            _this.isLoad = false;
          }, function (error) {
            _this.api.c('Error getCategoriesAndSubcategories', error);
          });
        }
      }, {
        key: "getCompanyData",
        value: function getCompanyData() {
          var _this2 = this;

          this.companyData = {};
          this.isLoad = true;
          var data = {
            companyid: this.id,
            service: 'get-company-data2',
            userid: this.user ? this.user.user.id : null
          };
          this.api.api(data).subscribe(function (result) {
            _this2.api.c('getCompanyData', result);

            _this2.isLoad = false;

            if (result.status) {
              _this2.companyData = result.data;

              _this2.general.saveEvent('visit', _this2.companyData.id);
            } else {
              _this2.api.c('getCompanyData False', result);
            }
          }, function (error) {
            _this2.api.c('Error getCompanyData', error);
          });
        }
      }, {
        key: "getUriImage",
        value: function getUriImage(image) {
          return encodeURI(image);
        }
      }, {
        key: "back",
        value: function back() {
          window.history.back();
        }
      }, {
        key: "share",
        value: function share(companyid, name) {
          var _this3 = this;

          var url = 'https://vaoperu.com/web/' + companyid;
          var text = name;
          this.socialSharing.share(text, document.title, null, url).then(function (_) {
            _this3.general.saveEvent('share', _this3.companyData.id);
          });
        }
      }, {
        key: "addFeaturedCompanies",
        value: function addFeaturedCompanies(companyid, e) {
          var _this4 = this;

          this.isLoad = true;

          if (e.target.src.indexOf('/assets/img/partials/star.svg') > -1) {
            this.deleteFeaturedCompanies(companyid, this.user.user.id, e);
          } else {
            if (!this.user) {
              this.router.navigate(['/login']);
            } else {
              var data = {
                userid: this.user.user.id,
                token: this.user.token,
                companyid: companyid,
                service: 'add-featured-companies'
              };
              this.api.api(data).subscribe(function (result) {
                _this4.api.c('addFeaturedCompanies', result);

                _this4.isLoad = false;

                _this4.general.saveEvent('featured', companyid);

                if (result.status) {
                  _this4.api.c('addFeaturedCompanies true', e.target.disabled);

                  e.target.src = '/assets/img/partials/star.svg';
                } else {
                  _this4.api.c('addFeaturedCompanies false', result);
                }
              }, function (error) {
                _this4.api.c('Error addFeaturedCompanies', error);
              });
            }
          }
        }
      }, {
        key: "deleteFeaturedCompanies",
        value: function deleteFeaturedCompanies(companyid, userid, e) {
          var _this5 = this;

          this.isLoad = true;
          var data = {
            token: this.user.token,
            companyid: companyid,
            userid: userid,
            service: 'delete-featured-companies'
          };
          this.api.api(data).subscribe(function (result) {
            _this5.api.c('deleteFeaturedCompanies', result);

            _this5.isLoad = false;

            if (result.status) {
              e.target.src = '/assets/img/partials/star-g.svg';
            } else {
              _this5.api.c('deleteFeaturedCompanies false', result);
            }
          }, function (error) {
            _this5.api.c('Error deleteFeaturedCompanies', error);
          });
        }
      }, {
        key: "toogleMenu",
        value: function toogleMenu() {
          this.api.c('toogleMenuFather', 'ok');
          this.eventsSubject.next();
        }
      }, {
        key: "getProducts",
        value: function getProducts(type) {
          var _this6 = this;

          this.isLoad = true;
          var data = {
            service: '',
            companyid: this.id
          };

          switch (type) {
            case 'products':
              data.service = 'get-products';
              break;

            case 'featured':
              data.service = 'get-products-featured';
              break;

            case 'offers':
              data.service = 'get-offers';
              break;

            default:
              break;
          }

          this.api.c('getProducts pre', data);
          this.api.api(data).subscribe(function (res) {
            _this6.api.c('getProducts' + type, res);

            _this6.isLoad = false;

            if (res.status) {
              switch (type) {
                case 'products':
                  _this6.itemsProducts['data'] = res.data;
                  _this6.itemsProducts['type'] = type;
                  break;

                case 'featured':
                  _this6.itemsFeatured['data'] = res.data;
                  _this6.itemsFeatured['type'] = type;
                  break;

                case 'offers':
                  _this6.itemsOffers['data'] = res.data;
                  _this6.itemsOffers['type'] = type;

                default:
                  break;
              }
            } else {
              _this6.api.c('getProducts false', res);
            }
          }, function (error) {
            _this6.api.c('getProducts error', error);
          });
        }
      }, {
        key: "getFirstImage",
        value: function getFirstImage(array) {
          return array[0].image;
        } //Modal

      }, {
        key: "showModal",
        value: function showModal() {
          this.isVisible = true;
        }
      }, {
        key: "handleOk",
        value: function handleOk() {
          this.isVisible = false;
        }
      }, {
        key: "handleCancel",
        value: function handleCancel() {
          this.isVisible = false;
        }
      }, {
        key: "vermas",
        value: function vermas(text) {
          this.currentDescription = text;
          this.showModal();
        }
      }, {
        key: "message",
        value: function message(receptorid, companyDataID, phone1) {
          if (phone1) {
            window.location.href = "https://api.whatsapp.com/send?phone=51".concat(phone1, "&text=Hola, soy usuario VAO");
          } // if (!this.user) {
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
      }, {
        key: "createChat",
        value: function createChat(useridOri, useridDes) {
          this.api.createChat({
            collection: 'chats',
            token: this.user.token,
            useridOri: useridOri,
            useridDes: useridDes
          });
          return true;
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProfilePage.prototype, "stateMenu", void 0);
    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/tabs/home/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map
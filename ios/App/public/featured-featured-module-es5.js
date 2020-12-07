function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["featured-featured-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/featured/featured.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/featured/featured.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsFeaturedFeaturedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>featured</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"content bg-white\">\r\n\r\n      <div *ngIf=\"response\" class=\"col-12 m-0 mt-5\">\r\n          <h5 class=\"text-center text-color2\">{{response}}</h5>\r\n      </div>\r\n      \r\n      <div *ngIf=\"!isLoad\" class=\"p-3 row m-0\">\r\n          <div *ngFor=\"let companyData of companiesData\"  class=\"item row m-0 col-12 p-0 mt-3\">\r\n              <div [routerLink]=\"['/tabs/home/profile/'+companyData.id]\" class=\"col-12 m-0 p-0\">\r\n                  <div *ngIf=\"companyData.image\" class=\"img-item\" [ngStyle]=\"{'background-image': 'url('+ companyData.image +')'}\"></div>            \r\n                  <!-- <div *ngIf=\"companyData.image.indexOf('data:image') === -1\" class=\"img-item\" [ngStyle]=\"{'background-image': 'url('+ urlBackEnd + getUriImage(companyData.image) +')'}\"></div>             -->\r\n                  <div *ngIf=\"!companyData.image\" class=\"img-item\"></div>            \r\n              </div>\r\n              <div class=\"p-3 col-12\">\r\n                  <div [routerLink]=\"['/profile/'+companyData.id]\" class=\"row m-0 justify-content-between\">\r\n                      <span class=\"f-11 font-700 col-12 p-0\">{{companyData.comercialname}}</span>\r\n                      <span class=\"f-11 font-700 text-color6\">{{companyData.distance == 1000000 ? '-': companyData.distance }} Km</span>\r\n                  </div>\r\n                  <div [routerLink]=\"['/tabs/home/profile/'+companyData.id]\" class=\"row m-0 justify-content-between mt-2\">\r\n                      <p class=\"f-10\" *ngIf=\"companyData.address1 && companyData.address1 != '' && companyData.address1 != ''\">{{companyData.address1.substring(0,80) || ''}}<ng-container *ngIf=\"companyData.address1.length > 79\">...</ng-container></p>         \r\n                  </div>   \r\n                  <div class=\"row m-0 justify-content-between align-items-start\">\r\n                      <div class=\"row m-0\">\r\n                          <a href=\"tel:{{companyData.phone1}}\"\r\n                              class=\"btn1 flex-1 pt-2 pb-2 mr-2 font-700 text-center link-unstyled\">LLAMADA</a>\r\n                          <button (click)=\"message(companyData.userid, companyData.id, companyData.phone1)\" class=\"btn2 flex-1 pt-2 pb-2 font-700\">WHATSAPP</button>\r\n                      </div>\r\n                      <div>\r\n                          <!-- <img (click)=\"addFeaturedCompanies(companyData.id, $event)\" width=\"30\" src=\"/assets/img/partials/star.svg\" alt=\"\"> -->\r\n                          <img (click)=\"share(companyData.url, companyData.comercialname)\" width=\"22\" class=\"ml-2\" src=\"/assets/img/partials/share.svg\" alt=\"\">\r\n                          <img (click)=\"deleteFeaturedCompanies(companyData.featuredid)\" width=\"20\" class=\"ml-2\" src=\"/assets/img/partials/delete.svg\" alt=\"\">\r\n                      </div>\r\n                    \r\n                      <!-- <button (click)=\"addFeaturedCompanies(companyData.id, $event)\" class=\"rounded-pill font-700 f-10 p-1 pl-2 pr-2 border-0 bg-color1\">Agregar a favoritos</button>        -->\r\n                  </div>            \r\n              </div>\r\n          </div>\r\n\r\n      </div>\r\n\r\n      <div #map id=\"map\"></div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"isLoad\" class=\"load\">\r\n      <img src=\"/assets/img/partials/load.svg\">\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/tabs/featured/featured-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/tabs/featured/featured-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: FeaturedPageRoutingModule */

  /***/
  function srcAppPagesTabsFeaturedFeaturedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturedPageRoutingModule", function () {
      return FeaturedPageRoutingModule;
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


    var _featured_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./featured.page */
    "./src/app/pages/tabs/featured/featured.page.ts");

    var routes = [{
      path: '',
      component: _featured_page__WEBPACK_IMPORTED_MODULE_3__["FeaturedPage"]
    }];

    var FeaturedPageRoutingModule = function FeaturedPageRoutingModule() {
      _classCallCheck(this, FeaturedPageRoutingModule);
    };

    FeaturedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeaturedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/featured/featured.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/tabs/featured/featured.module.ts ***!
    \********************************************************/

  /*! exports provided: FeaturedPageModule */

  /***/
  function srcAppPagesTabsFeaturedFeaturedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturedPageModule", function () {
      return FeaturedPageModule;
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


    var _featured_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./featured-routing.module */
    "./src/app/pages/tabs/featured/featured-routing.module.ts");
    /* harmony import */


    var _featured_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./featured.page */
    "./src/app/pages/tabs/featured/featured.page.ts");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");

    var FeaturedPageModule = function FeaturedPageModule() {
      _classCallCheck(this, FeaturedPageModule);
    };

    FeaturedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _featured_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeaturedPageRoutingModule"]],
      declarations: [_featured_page__WEBPACK_IMPORTED_MODULE_6__["FeaturedPage"]],
      providers: [_ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]]
    })], FeaturedPageModule);
    /***/
  },

  /***/
  "./src/app/pages/tabs/featured/featured.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/tabs/featured/featured.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTabsFeaturedFeaturedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* FONTS */\n.linea {\n  border-bottom: solid 3px #e6e6e6;\n}\n.content {\n  min-height: 100vh;\n}\n.content .menu p {\n  min-width: 20px;\n  min-height: 2px;\n  background-color: white;\n}\n.content .search {\n  flex: 1;\n  position: relative;\n}\n.content .search ::-moz-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.content .search ::-ms-input-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.content .search ::placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.content .search img {\n  position: absolute;\n  top: 27%;\n  left: 20px;\n  max-width: 26px;\n}\n.content .search input {\n  font-size: 12pt;\n  width: 100%;\n  border: 2.5px solid #ffe266;\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0);\n  color: #333333;\n  border-radius: 50px;\n  padding-left: 58px;\n  min-height: 60px;\n}\n.content .search :focus {\n  outline: 0;\n}\n.content .search button {\n  border-radius: 50px !important;\n  position: absolute;\n  right: 0px;\n  top: 3px;\n}\n.item {\n  box-shadow: 1px 3px 8px 5px #c2c2c2;\n  border-radius: 10px;\n}\n.item .img-item {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-color: #c2c2c2;\n  border-radius: 10px 10px 0 0;\n  max-width: 100%;\n  min-width: 100%;\n  max-height: 90.8vw;\n  min-height: 90.8vw;\n}\n.load {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.load img {\n  opacity: 0.9;\n}\n:focus {\n  outline: 0;\n}\nbutton:disabled {\n  background-color: #e6e6e6 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9mZWF0dXJlZC9DOlxcd2FtcDY0XFx3d3dcXHZhb3BlcnUvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzL2ZlYXR1cmVkL0M6XFx3YW1wNjRcXHd3d1xcdmFvcGVydS9zcmNcXGFwcFxccGFnZXNcXHRhYnNcXGZlYXR1cmVkXFxmZWF0dXJlZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMvZmVhdHVyZWQvZmVhdHVyZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUNFQTtFQUNJLGdDQUFBO0FDQUo7QURHQTtFQUNJLGlCQUFBO0FDQUo7QURFUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNBWjtBREdJO0VBQ0ksT0FBQTtFQUNBLGtCQUFBO0FDRFI7QURFUTtFQUNJLGNETkg7RUNPRyxlQUFBO0FDQVo7QURGUTtFQUNJLGNETkg7RUNPRyxlQUFBO0FDQVo7QURGUTtFQUNJLGNETkg7RUNPRyxlQUFBO0FDQVo7QURFUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQVo7QURFUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxjRHZCSDtFQ3dCRyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBREdRO0VBQ0ksVUFBQTtBQ0RaO0FESVE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNGWjtBRFdBO0VBR0ksbUNBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEU0k7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUFI7QURjQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDWEo7QURZSTtFQUNJLFlBQUE7QUNWUjtBRGNBO0VBQ0ksVUFBQTtBQ1hKO0FEY0E7RUFDSSxvQ0FBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9mZWF0dXJlZC9mZWF0dXJlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGT05UUyAqL1xyXG5cclxuJGZvbnRNOiBNeXJpYWRQcm87XHJcbiRmb250VDogVHJlYnVjaGV0TVM7XHJcblxyXG5cclxuLy8gQ09MT1JTIFxyXG5cclxuXHJcbiRjb2xvcjE6ICNmZmUyNjY7XHJcbiRjb2xvcjI6ICMxM2JmOWU7XHJcbiRjb2xvcjM6ICMzMzMzMzM7XHJcbiRjb2xvcjQ6ICM0ZDRkNGQ7XHJcbiRjb2xvcjU6ICM4MDgwODA7XHJcbiRjb2xvcjY6ICNBOUFCQUU7XHJcbiRjb2xvcjc6ICNlNmU2ZTY7XHJcbiRjb2xvcjg6ICNlYzdjOGI7XHJcbiRjb2xvcjk6ICMwMGExOTg7XHJcbiRjb2xvcjEwOiAjMzE0ODhhO1xyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmxpbmVhe1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICRjb2xvcjc7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAubWVudXtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICA6OnBsYWNlaG9sZGVye1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yNTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAyNyU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMi41cHggc29saWQgICRjb2xvcjE7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3IzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDU4cHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Zm9jdXN7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uaXRlbXtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4IHJnYmEoMTk0LDE5NCwxOTQsMSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCByZ2JhKDE5NCwxOTQsMTk0LDEpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4IHJnYmEoMTk0LDE5NCwxOTQsMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLmltZy1pdGVte1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlOyAgICAgICAgXHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDkwLjh2dztcclxuICAgICAgICBtaW4taGVpZ2h0OiA5MC44dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vL0xPQURcclxuXHJcbi5sb2Fke1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IC45KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgb3BhY2l0eTogLjk7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbmJ1dHRvbjpkaXNhYmxlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjcgIWltcG9ydGFudDtcclxufSIsIi8qIEZPTlRTICovXG4ubGluZWEge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2U2ZTZlNjtcbn1cblxuLmNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi5jb250ZW50IC5tZW51IHAge1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY29udGVudCAuc2VhcmNoIHtcbiAgZmxleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnQgLnNlYXJjaCA6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4MDgwODA7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cbi5jb250ZW50IC5zZWFyY2ggaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI3JTtcbiAgbGVmdDogMjBweDtcbiAgbWF4LXdpZHRoOiAyNnB4O1xufVxuLmNvbnRlbnQgLnNlYXJjaCBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMi41cHggc29saWQgI2ZmZTI2NjtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBjb2xvcjogIzMzMzMzMztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1OHB4O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuLmNvbnRlbnQgLnNlYXJjaCA6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuLmNvbnRlbnQgLnNlYXJjaCBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAzcHg7XG59XG5cbi5pdGVtIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggI2MyYzJjMjtcbiAgLW1vei1ib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggI2MyYzJjMjtcbiAgYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4ICNjMmMyYzI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uaXRlbSAuaW1nLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmMyYzI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA5MC44dnc7XG4gIG1pbi1oZWlnaHQ6IDkwLjh2dztcbn1cblxuLmxvYWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWluLXdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9hZCBpbWcge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbjpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTYgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/tabs/featured/featured.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/tabs/featured/featured.page.ts ***!
    \******************************************************/

  /*! exports provided: FeaturedPage */

  /***/
  function srcAppPagesTabsFeaturedFeaturedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturedPage", function () {
      return FeaturedPage;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js"); // import { } from '@types/googlemaps';


    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"],
        Geolocation = _capacitor_core__WEBP.Geolocation,
        Network = _capacitor_core__WEBP.Network;

    var FeaturedPage = /*#__PURE__*/function () {
      function FeaturedPage(route, router, api, cookie, general, socialSharing) {
        _classCallCheck(this, FeaturedPage);

        this.route = route;
        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.general = general;
        this.socialSharing = socialSharing;
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.urlBackEnd = this.general.getUrlImages('profile');
        this.companiesData = [];
        this.isLoad = true;
        this.service = new google.maps.DistanceMatrixService();
        this.search = '';
        this.response = false; //POSITION

        this.currentPosition = {};
      }

      _createClass(FeaturedPage, [{
        key: "back",
        value: function back() {
          window.history.back();
        }
      }, {
        key: "searchEvent",
        value: function searchEvent() {
          this.router.navigate(['/results/' + this.search]).then(function () {
            window.location.reload();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validateSession();
          this.getCategoriesAndSubcategories();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getCompaniesDataFeatured();
        }
      }, {
        key: "getCategoriesAndSubcategories",
        value: function getCategoriesAndSubcategories() {
          var _this = this;

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
        key: "validateSession",
        value: function validateSession() {
          if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
          } else {
            window.location.href = '/login';
          }
        }
      }, {
        key: "getCompaniesDataFeatured",
        value: function getCompaniesDataFeatured() {
          var _this2 = this;

          if (this.user) {
            this.isLoad = true;
            this.companiesData = [];
            var data = {
              userid: this.user.user.id,
              token: this.user.token,
              service: 'get-companies-data-featured'
            };
            this.api.api(data).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.api.c('getCompaniesDataFeatured', result);

                        if (!result.status) {
                          _context.next = 14;
                          break;
                        }

                        if (!(result.data.length > 0)) {
                          _context.next = 10;
                          break;
                        }

                        this.response = '';
                        this.isLoad = false;
                        _context.next = 7;
                        return this.getCurrentPosition(result.data);

                      case 7:
                        this.companiesData = _context.sent;
                        _context.next = 12;
                        break;

                      case 10:
                        this.response = 'No tiene negocios favoritos';
                        this.isLoad = false;

                      case 12:
                        _context.next = 15;
                        break;

                      case 14:
                        this.api.c('getCompaniesDataFeatured false', result);

                      case 15:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            }, function (error) {
              if (error.status == 401) {
                alert('Su sesión ha vencido');

                _this2.router.navigate(['/login']);
              }

              _this2.api.c('Error getCompaniesDataFeatured', error);
            });
          }
        }
      }, {
        key: "getUriImage",
        value: function getUriImage(image) {
          return encodeURI(image);
        }
      }, {
        key: "rad",
        value: function rad(x) {
          return x * Math.PI / 180;
        }
      }, {
        key: "getKilometros",
        value: function getKilometros(lat1, lon1, lat2, lon2) {
          var R = 6378.137; //Radio de la tierra en km

          var dLat = this.rad(lat2 - lat1);
          var dLong = this.rad(lon2 - lon1);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.rad(lat1)) * Math.cos(this.rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c;
          return d.toFixed(1); //Retorna un decimales
        }
      }, {
        key: "getCurrentPosition",
        value: function getCurrentPosition(companiesData) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var newCompaniesData, currentPosition, _iterator, _step, element;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    newCompaniesData = [];
                    _context2.next = 3;
                    return this.general.getPosition();

                  case 3:
                    currentPosition = _context2.sent;

                    if (currentPosition) {
                      _iterator = _createForOfIteratorHelper(companiesData);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          element = _step.value;
                          this.api.c('Element', element);

                          if (element.lat) {
                            element['distance'] = parseFloat(this.getKilometros(element.lat, element.lng, currentPosition.lat, currentPosition.lng));
                          } else {
                            element['distance'] = 1000000;
                          }

                          newCompaniesData.push(element);
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }
                    }

                    newCompaniesData = newCompaniesData.sort(function (a, b) {
                      if (a['distance'] > b['distance']) {
                        return 1;
                      }

                      if (a['distance'] < b['distance']) {
                        return -1;
                      }

                      return 0;
                    });
                    return _context2.abrupt("return", newCompaniesData);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "updateCoordinates",
        value: function updateCoordinates(lat, lng, companyid) {
          var _this3 = this;

          var data = {
            token: this.user.token,
            companyid: companyid,
            service: 'update-coordinates',
            lat: lat,
            lng: lng
          };
          this.api.api(data).subscribe(function (result) {
            _this3.isLoad = false;

            _this3.api.c('addFeaturedCompanies', result);
          }, function (error) {
            _this3.api.c('Error addFeaturedCompanies', error);
          });
        }
      }, {
        key: "addFeaturedCompanies",
        value: function addFeaturedCompanies(companyid, e) {
          var _this4 = this;

          var data = {
            userid: this.user.user.id,
            token: this.user.token,
            companyid: companyid,
            service: 'add-featured-companies'
          };
          this.api.api(data).subscribe(function (result) {
            _this4.api.c('addFeaturedCompanies', result);

            if (result.status) {
              _this4.api.c('addFeaturedCompanies true', e.target.disabled);

              e.target.src = '/assets/img/partials/star-g.svg';
            } else {
              _this4.api.c('addFeaturedCompanies false', result);
            }
          }, function (error) {
            _this4.api.c('Error addFeaturedCompanies', error);
          });
        }
      }, {
        key: "deleteFeaturedCompanies",
        value: function deleteFeaturedCompanies(featuredid) {
          var _this5 = this;

          this.isLoad = true;
          var data = {
            token: this.user.token,
            featuredid: featuredid,
            service: 'delete-featured-companies'
          };
          this.api.api(data).subscribe(function (result) {
            _this5.api.c('deleteFeaturedCompanies', result);

            _this5.isLoad = false;

            if (result.status) {
              _this5.getCompaniesDataFeatured();
            } else {
              _this5.api.c('deleteFeaturedCompanies false', result);
            }
          }, function (error) {
            _this5.api.c('Error deleteFeaturedCompanies', error);
          });
        }
      }, {
        key: "share",
        value: function share(companyid, name) {
          var _this6 = this;

          var url = 'https://vaoperu.com/web/' + companyid;
          var text = name;
          this.socialSharing.share(text, document.title, null, url).then(function (_) {
            _this6.general.saveEvent('share', companyid);
          });
        }
      }, {
        key: "toogleMenu",
        value: function toogleMenu() {
          this.api.c('toogleMenuFather', 'ok');
          this.eventsSubject.next();
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

      return FeaturedPage;
    }();

    FeaturedPage.ctorParameters = function () {
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
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"]
      }];
    };

    FeaturedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-featured',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./featured.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/featured/featured.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./featured.page.scss */
      "./src/app/pages/tabs/featured/featured.page.scss"))["default"]]
    })], FeaturedPage);
    /***/
  }
}]);
//# sourceMappingURL=featured-featured-module-es5.js.map
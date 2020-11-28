(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-provider-chat-provider-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/chat-provider/chat-provider.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/chat-provider/chat-provider.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>chat-provider</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n  <div class=\"row m-0 justify-content-center align-items-start vw-100\">    \n    \n      <div class=\"d-none d-xl-flex chats bg-color2 pl-3 pr-3 overflow-auto pb-3 align-items-start flex-column mt-2\">\n          \n          <!-- CHAT LIST ITEM -->\n          <div [ngClass]=\"{'bg-color7': chat.receptor == currentReceptor}\" *ngFor=\"let chat of chats | async\" (click)=\"getMessages(chat.receptor)\" class=\"w-100 itemChatList cursor  rounded p-2 pl-3 pr-3 mt-3 row m-0 justify-content-center align-items-center\">\n              <div class=\"col-2 row m-0 justify-content-center align-items-center\">\n                  <img width=\"40\" [src]=\"dataUsers[chat.receptor] && dataUsers[chat.receptor].imageprofile ? dataUsers[chat.receptor].imageprofile:'/assets/img/partials/user.svg'\" alt=\"\">\n              </div>\n              <div class=\"chatlistitem flex-1 pl-3\">\n                  <h6 *ngIf=\"dataUsers[chat.receptor]\" class=\"f-11 font-700\">{{dataUsers[chat.receptor].name || ''}}</h6>\n                  <span *ngIf=\"getNotification(chat.id) != 0\">{{getNotification(chat.id) }}</span>\n                  <!-- <p class=\"f-10 p-0 m-0\">{{chat.receptorName}}</p> -->\n                  <p class=\"f-10 p-0 m-0\">{{formatDate(chat.date)}}</p>\n              </div>\n          </div>\n\n      </div>\n\n      <div *ngIf=\"listChatActive\" class=\"d-flex d-xl-none chats bg-color2 pl-3 pr-3 overflow-auto pb-3 col-12 align-items-center flex-column justify-content-start\">\n      \n          <!-- CHAT LIST ITEM -->\n          <div [ngClass]=\"{'bg-color7': chat.receptor == currentReceptor}\" *ngFor=\"let chat of chats | async\" (click)=\"getMessages(chat.receptor)\" class=\"w-100 itemChatList cursor  rounded p-2 pl-3 pr-3 mt-3 row m-0 justify-content-center align-items-center\">\n              <div class=\"col-2 row m-0 justify-content-center align-items-center\">\n                  <img width=\"40\" [src]=\"dataUsers[chat.receptor] && dataUsers[chat.receptor].imageprofile ? dataUsers[chat.receptor].imageprofile:'/assets/img/partials/user.svg'\" alt=\"\">\n              </div>\n              <div class=\"chatlistitem flex-1 pl-3\">\n                  <h6 *ngIf=\"dataUsers[chat.receptor]\" class=\"f-11 font-700\">{{dataUsers[chat.receptor].name || ''}}</h6>\n                  <span *ngIf=\"getNotification(chat.id) != 0\">{{getNotification(chat.id) }}</span>\n                  <!-- <p class=\"f-10 p-0 m-0\">{{chat.receptorName}}</p> -->\n                  <p class=\"f-10 p-0 m-0\">{{formatDate(chat.date)}}</p>\n              </div>\n          </div>\n      \n      </div>\n\n      \n      <div class=\"d-none d-xl-flex messages flex-1 overflow-hidden flex-column align-items-center justify-content-between\">        \n\n          <div #scrollMe class=\"display-chat overflow-auto w-100 align-items-center\">\n\n              <!-- MESSAGE ITEM RIGHT -->\n              <div [ngClass]=\"{'justify-content-end': user.user.id == m.id, 'justify-content-start': user.user.id != m.id}\" class=\"row m-0 col-12 mt-3 mb-3\"  *ngFor=\"let m of messages | async\">\n                  <div [ngClass]=\"{'bg-color1': user.user.id == m.id, 'bg-color7': user.user.id != m.id}\" class=\"parraf p-2 pr-3 pl-3 rounded shadow\">\n                      <div class=\"row justify-content-end m-0\">\n                          <p class=\"f-11\">{{m.message}}</p>\n                      </div>\n                      <div class=\"row justify-content-end m-0\">\n                          <span class=\"f-10\">{{formatDate(m.date)}}</span>\n                      </div>\n                  </div>\n              </div>\n\n              <!-- MESSAGE ITEM LEFT -->\n              <!-- <div  class=\"row m-0 justify-content-start col-12 mt-3\">\n                  <div class=\"parraf bg-color7 p-2 pr-3 pl-3 rounded shadow\">\n                      <div class=\"row justify-content-end m-0\">\n                          <p class=\"f-11\">2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repudiandae a, dolor dolorem, voluptatum rem ad laudantium blanditiis, sit earum ea officia!</p>\n                      </div>\n                      <div class=\"row justify-content-end m-0\">\n                          <span class=\"f-10\">20/10/2020 11:45pm</span>\n                      </div>\n                  </div>\n              </div> -->\n\n          </div>       \n\n          <!-- MESSAGE INPUT -->\n          <div class=\"input-chat col-12 row m-0 justify-content-center\">\n              <div class=\"col-10 mt-3\">\n                  <input class=\"pl-4 col-12 rounded-pill shadow-lg\" type=\"text\" [(ngModel)]=\"textMessage\">\n              </div>\n              <div class=\"flex-1 mt-3\">\n                  <button (keyup.enter)=\"sendMessage()\" (click)=\"sendMessage()\" class=\"btn1 rounded-pill\">Enviar</button>\n              </div>\n          </div>\n      </div>\n\n\n      <!-- RESPONSIVE -->\n\n      <div *ngIf=\"!listChatActive\" class=\"d-flex d-xl-none messages flex-1 overflow-hidden d-flex flex-column align-items-center justify-content-between\">\n\n          <div  class=\"col-12 bg-color2 row m-0 justify-content-center p-4\">\n              <button (click)=\"listChatActive = true\" class=\"btn2 pt-2 pb-2 pl-5 pr-5 f-17 font-900\">VOLVER A CHATS</button>           \n          </div>\n\n          <div #scrollMe2 class=\"display-chat2 overflow-auto w-100 align-items-center\">\n      \n              <!-- MESSAGE ITEM RIGHT -->\n              <div [ngClass]=\"{'justify-content-end': user.user.id == m.id, 'justify-content-start': user.user.id != m.id}\"\n                  class=\"row m-0 col-12 mt-4 mb-3\" *ngFor=\"let m of messages | async\">\n                  <div [ngClass]=\"{'bg-color1': user.user.id == m.id, 'bg-color7': user.user.id != m.id}\"\n                      class=\"parraf p-2 pr-3 pl-3 rounded shadow\">\n                      <div class=\"row justify-content-end m-0\">\n                          <p class=\"f-11\">{{m.message}}</p>\n                      </div>\n                      <div class=\"row justify-content-end m-0\">\n                          <span class=\"f-10\">{{formatDate(m.date)}}</span>\n                      </div>\n                  </div>\n              </div>\n      \n              <!-- MESSAGE ITEM LEFT -->\n              <!-- <div  class=\"row m-0 justify-content-start col-12 mt-3\">\n                      <div class=\"parraf bg-color7 p-2 pr-3 pl-3 rounded shadow\">\n                          <div class=\"row justify-content-end m-0\">\n                              <p class=\"f-11\">2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus repudiandae a, dolor dolorem, voluptatum rem ad laudantium blanditiis, sit earum ea officia!</p>\n                          </div>\n                          <div class=\"row justify-content-end m-0\">\n                              <span class=\"f-10\">20/10/2020 11:45pm</span>\n                          </div>\n                      </div>\n                  </div> -->\n      \n          </div>\n      \n          <!-- MESSAGE INPUT -->\n          <div class=\"input-chat2 col-12 row m-0 justify-content-center\">\n              <div class=\"flex-1 mt-3 p-0\">\n                  <input class=\"pl-4 col-12 rounded-pill shadow-lg\" type=\"text\" [(ngModel)]=\"textMessage\">\n              </div>\n              <div class=\" mt-3 p-0\">\n                  <button (keyup.enter)=\"sendMessage()\" (click)=\"sendMessage()\" class=\"btnSend bg-color2 pl-2 pr-2 rounded-pill row m-0 justify-content-center align-items-center border-0 ml-2\"><svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"30\" height=\"30\" viewBox=\"0 0 172 172\"\n                      style=\" fill:#000000;\">\n                      <g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" stroke-linejoin=\"miter\"\n                          stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\"\n                          font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\">\n                          <path d=\"M0,172v-172h172v172z\" fill=\"none\"></path>\n                          <g fill=\"#ffffff\">\n                              <path\n                                  d=\"M149.06667,17.2c-0.55025,0.00377 -1.09709,0.08674 -1.6237,0.24635c-0.15501,0.04207 -0.30818,0.09064 -0.45911,0.14557l-126.05495,40.08854v0.02239c-2.23962,0.83573 -3.72568,2.97333 -3.72891,5.3638c0.00425,2.00222 1.05271,3.85719 2.76589,4.89349l38.30807,30.39114l75.73151,-60.35677l-60.35677,75.73151l30.36875,38.28567c1.0349,1.7286 2.90117,2.78714 4.91589,2.78828c2.39047,-0.00322 4.52807,-1.48928 5.3638,-3.72891h0.02239l40.12214,-126.16692c0.041,-0.11449 0.07834,-0.23027 0.11198,-0.34714c0.15961,-0.52661 0.24258,-1.07345 0.24636,-1.6237c0,-3.16643 -2.5669,-5.73333 -5.73333,-5.73333z\">\n                              </path>\n                          </g>\n                      </g>\n                  </svg></button>\n              </div>\n          </div>\n      </div>\n\n  </div>\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/tabs-provider/chat-provider/chat-provider-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/chat-provider/chat-provider-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ChatProviderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatProviderPageRoutingModule", function() { return ChatProviderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_provider_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-provider.page */ "./src/app/pages/tabs-provider/chat-provider/chat-provider.page.ts");




const routes = [
    {
        path: '',
        component: _chat_provider_page__WEBPACK_IMPORTED_MODULE_3__["ChatProviderPage"]
    }
];
let ChatProviderPageRoutingModule = class ChatProviderPageRoutingModule {
};
ChatProviderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatProviderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs-provider/chat-provider/chat-provider.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/chat-provider/chat-provider.module.ts ***!
  \***************************************************************************/
/*! exports provided: ChatProviderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatProviderPageModule", function() { return ChatProviderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-provider-routing.module */ "./src/app/pages/tabs-provider/chat-provider/chat-provider-routing.module.ts");
/* harmony import */ var _chat_provider_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-provider.page */ "./src/app/pages/tabs-provider/chat-provider/chat-provider.page.ts");







let ChatProviderPageModule = class ChatProviderPageModule {
};
ChatProviderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_provider_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatProviderPageRoutingModule"]
        ],
        declarations: [_chat_provider_page__WEBPACK_IMPORTED_MODULE_6__["ChatProviderPage"]]
    })
], ChatProviderPageModule);



/***/ }),

/***/ "./src/app/pages/tabs-provider/chat-provider/chat-provider.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/chat-provider/chat-provider.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* FONTS */\n.chats {\n  height: 93.5vh;\n}\n.itemChatList {\n  background-color: white;\n}\n.bg-color7 {\n  background-color: #d1d1d1 !important;\n}\n.messages {\n  position: relative;\n}\n.messages .display-chat {\n  min-height: 80vh;\n  max-height: 80vh;\n}\n.messages .display-chat .parraf {\n  max-width: 90%;\n}\n.messages .display-chat2 {\n  min-height: 84vh;\n  max-height: 84vh;\n  padding-bottom: 120px;\n}\n.messages .display-chat2 .parraf {\n  max-width: 90%;\n}\n.messages .input-chat {\n  min-height: 15vh;\n}\n.messages .input-chat input {\n  border: solid 2px #ffe266;\n  min-height: 50px;\n}\n.messages .input-chat .btn1 {\n  min-height: 50px;\n}\n.messages .input-chat2 {\n  position: absolute;\n  bottom: 4em;\n}\n.messages .input-chat2 input {\n  border: solid 2px #ffe266;\n  min-height: 50px;\n}\n.messages .input-chat2 .btnSend {\n  min-height: 50px;\n  min-width: 50px;\n  max-width: 50px;\n}\n.listItem {\n  background-color: \"gray\" !important;\n}\n.chatlistitem {\n  position: relative;\n}\n.chatlistitem span {\n  position: absolute;\n  min-width: 18px;\n  max-width: 18px;\n  min-height: 18px;\n  max-height: 18px;\n  background-color: red;\n  color: white;\n  z-index: 2;\n  top: 0;\n  right: 0;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9jaGF0LXByb3ZpZGVyL0M6XFx3YW1wNjRcXHd3d1xcdmFvcGVydS9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMtcHJvdmlkZXIvY2hhdC1wcm92aWRlci9DOlxcd2FtcDY0XFx3d3dcXHZhb3BlcnUvc3JjXFxhcHBcXHBhZ2VzXFx0YWJzLXByb3ZpZGVyXFxjaGF0LXByb3ZpZGVyXFxjaGF0LXByb3ZpZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy1wcm92aWRlci9jaGF0LXByb3ZpZGVyL2NoYXQtcHJvdmlkZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUNFQTtFQUNJLGNBQUE7QUNBSjtBREdBO0VBQ0ksdUJBQUE7QUNBSjtBREdBO0VBQ0ksb0NBQUE7QUNBSjtBREdBO0VBRUksa0JBQUE7QUNESjtBREdJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0RSO0FERVE7RUFDSSxjQUFBO0FDQVo7QURJSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0ZSO0FER1E7RUFDSSxjQUFBO0FDRFo7QURLSTtFQUNJLGdCQUFBO0FDSFI7QURJUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNGWjtBRElRO0VBQ0ksZ0JBQUE7QUNGWjtBRE1JO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDSlI7QURLUTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNIWjtBREtRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0haO0FEUUE7RUFDSSxtQ0FBQTtBQ0xKO0FEUUE7RUFDSSxrQkFBQTtBQ0xKO0FETUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYnMtcHJvdmlkZXIvY2hhdC1wcm92aWRlci9jaGF0LXByb3ZpZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZPTlRTICovXHJcblxyXG4kZm9udE06IE15cmlhZFBybztcclxuJGZvbnRUOiBUcmVidWNoZXRNUztcclxuXHJcblxyXG4vLyBDT0xPUlMgXHJcblxyXG5cclxuJGNvbG9yMTogI2ZmZTI2NjtcclxuJGNvbG9yMjogIzEzYmY5ZTtcclxuJGNvbG9yMzogIzMzMzMzMztcclxuJGNvbG9yNDogIzRkNGQ0ZDtcclxuJGNvbG9yNTogIzgwODA4MDtcclxuJGNvbG9yNjogI0E5QUJBRTtcclxuJGNvbG9yNzogI2U2ZTZlNjtcclxuJGNvbG9yODogI2VjN2M4YjtcclxuJGNvbG9yOTogIzAwYTE5ODtcclxuJGNvbG9yMTA6ICMzMTQ4OGE7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLmNoYXRze1xyXG4gICAgaGVpZ2h0OiA5My41dmg7XHJcbn1cclxuXHJcbi5pdGVtQ2hhdExpc3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJnLWNvbG9yN3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIwOSwgMjA5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVzc2FnZXN7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5kaXNwbGF5LWNoYXR7ICAgICAgICBcclxuICAgICAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgLnBhcnJhZntcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kaXNwbGF5LWNoYXQyeyAgICAgICAgXHJcbiAgICAgICAgbWluLWhlaWdodDogODR2aDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA4NHZoO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMjBweDtcclxuICAgICAgICAucGFycmFme1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0LWNoYXR7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTV2aDtcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggJGNvbG9yMTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bjF7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC1jaGF0MntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA0ZW07ICAgICAgICBcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggJGNvbG9yMTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0blNlbmR7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxpc3RJdGVte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJ2dyYXknICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaGF0bGlzdGl0ZW17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtaW4td2lkdGg6IDE4cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxOHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMThweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG59IiwiLyogRk9OVFMgKi9cbi5jaGF0cyB7XG4gIGhlaWdodDogOTMuNXZoO1xufVxuXG4uaXRlbUNoYXRMaXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5iZy1jb2xvcjcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMWQxICFpbXBvcnRhbnQ7XG59XG5cbi5tZXNzYWdlcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZXNzYWdlcyAuZGlzcGxheS1jaGF0IHtcbiAgbWluLWhlaWdodDogODB2aDtcbiAgbWF4LWhlaWdodDogODB2aDtcbn1cbi5tZXNzYWdlcyAuZGlzcGxheS1jaGF0IC5wYXJyYWYge1xuICBtYXgtd2lkdGg6IDkwJTtcbn1cbi5tZXNzYWdlcyAuZGlzcGxheS1jaGF0MiB7XG4gIG1pbi1oZWlnaHQ6IDg0dmg7XG4gIG1heC1oZWlnaHQ6IDg0dmg7XG4gIHBhZGRpbmctYm90dG9tOiAxMjBweDtcbn1cbi5tZXNzYWdlcyAuZGlzcGxheS1jaGF0MiAucGFycmFmIHtcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG4ubWVzc2FnZXMgLmlucHV0LWNoYXQge1xuICBtaW4taGVpZ2h0OiAxNXZoO1xufVxuLm1lc3NhZ2VzIC5pbnB1dC1jaGF0IGlucHV0IHtcbiAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZTI2NjtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cbi5tZXNzYWdlcyAuaW5wdXQtY2hhdCAuYnRuMSB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG59XG4ubWVzc2FnZXMgLmlucHV0LWNoYXQyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDRlbTtcbn1cbi5tZXNzYWdlcyAuaW5wdXQtY2hhdDIgaW5wdXQge1xuICBib3JkZXI6IHNvbGlkIDJweCAjZmZlMjY2O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuLm1lc3NhZ2VzIC5pbnB1dC1jaGF0MiAuYnRuU2VuZCB7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWF4LXdpZHRoOiA1MHB4O1xufVxuXG4ubGlzdEl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBcImdyYXlcIiAhaW1wb3J0YW50O1xufVxuXG4uY2hhdGxpc3RpdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNoYXRsaXN0aXRlbSBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4td2lkdGg6IDE4cHg7XG4gIG1heC13aWR0aDogMThweDtcbiAgbWluLWhlaWdodDogMThweDtcbiAgbWF4LWhlaWdodDogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tabs-provider/chat-provider/chat-provider.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tabs-provider/chat-provider/chat-provider.page.ts ***!
  \*************************************************************************/
/*! exports provided: ChatProviderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatProviderPage", function() { return ChatProviderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let ChatProviderPage = class ChatProviderPage {
    constructor(firestore, api, cookie, router, route) {
        this.firestore = firestore;
        this.api = api;
        this.cookie = cookie;
        this.router = router;
        this.route = route;
        this.dataUsers = [];
        this.textMessage = '';
        this.listChatActive = true;
        this.noti = [];
        this.id = this.route.snapshot.paramMap.get('id');
        this.validateSession(this.id);
        //get notifications
        firestore.collection('chatnotification_' + this.user.user.id).valueChanges().subscribe((res) => {
            this.api.c('Notifications', res);
            this.noti = res;
        });
        //get Chats
        this.chats = firestore.collection('chatlist_' + this.user.user.id, ref => ref.orderBy('date', 'desc')).valueChanges();
        this.chats.forEach((res) => {
            this.api.c('Chats', this.notifications);
            res.forEach((item) => {
                this.api.c('Chats item ', item);
                this.getNameReceptop(item.receptor);
            });
        });
        moment__WEBPACK_IMPORTED_MODULE_6__["locale"]("es");
    }
    getNotification(id) {
        var notifi = 0;
        for (let index = 0; index < this.noti.length; index++) {
            const element = this.noti[index];
            if (element.id == id) {
                notifi++;
            }
        }
        return notifi;
    }
    ngAfterViewInit() {
        this.scrollContainer = this.scrollMe ? this.scrollMe.nativeElement : null;
        this.scrollContainer2 = this.scrollMe2 ? this.scrollMe2.nativeElement : null;
    }
    ngOnInit() {
        if (this.id != 0) {
            this.getMessages(this.id);
        }
    }
    validateSession(iduserchat) {
        if (!localStorage.getItem('ud') || localStorage.getItem('ud') == '') {
            this.router.navigate(['/login']);
        }
        else {
            this.user = JSON.parse(localStorage.getItem('ud'));
            // if (this.user.user.role !== "proveedor" && this.user.user.role !== "admin") {
            //   this.router.navigate(['/chat-user/' + iduserchat])
            // }
        }
    }
    formatDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date.toDate()).calendar();
    }
    getNameReceptop(id) {
        let data = {
            service: 'get-data-user-by-id',
            token: this.user.token,
            userid: id
        };
        this.api.api(data).subscribe((res) => {
            this.api.c('getNameReceptop', res);
            this.dataUsers[id] = res;
            this.dataUsers = this.dataUsers;
            this.api.c('dataUsers', this.dataUsers);
        }, error => {
            this.api.c('getProducts error', error);
        });
    }
    getMessages(idReceptor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var self = this;
            this.listChatActive = false;
            let collection = 'chat_' + this.user.user.id + '_' + idReceptor;
            let collectionReverse = 'chat_' + idReceptor + '_' + this.user.user.id;
            let collectionChatNotification = 'chatnotification_' + this.user.user.id;
            yield this.firestore.collection(collection).get().subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.firestore.collection(collectionChatNotification).get().subscribe((res) => {
                    res.docs.forEach((doc) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        this.firestore.collection(collectionChatNotification).doc(doc.id).get().subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            if (result.data().id == 'chat_' + idReceptor + '_' + this.user.user.id) {
                                yield this.firestore.collection(collectionChatNotification).doc(result.id).delete();
                            }
                        }));
                    }));
                });
                if (res.size != 0) {
                    this.messages = this.firestore.collection(collection, ref => ref.orderBy('date')).valueChanges();
                }
                else {
                    this.messages = this.firestore.collection(collectionReverse, ref => ref.orderBy('date')).valueChanges();
                }
                this.messages.subscribe((res) => {
                    setTimeout(() => {
                        self.scrollToBottom();
                    }, 2000);
                });
            }));
            this.currentReceptor = idReceptor;
        });
    }
    sendMessage() {
        let data = {
            message: this.textMessage,
            useridOri: this.user.user.id,
            useridDes: this.currentReceptor,
        };
        this.api.sendMessage(data);
        this.textMessage = '';
        this.scrollToBottom();
    }
    scrollToBottom() {
        this.scrollContainer = this.scrollMe.nativeElement;
        this.scrollContainer2 = this.scrollMe2.nativeElement;
        this.scrollContainer.scroll({
            top: this.scrollContainer.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
        this.scrollContainer2.scroll({
            top: this.scrollContainer2.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }
};
ChatProviderPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', { static: false })
], ChatProviderPage.prototype, "scrollMe", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe2', { static: false })
], ChatProviderPage.prototype, "scrollMe2", void 0);
ChatProviderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-provider',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat-provider.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs-provider/chat-provider/chat-provider.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat-provider.page.scss */ "./src/app/pages/tabs-provider/chat-provider/chat-provider.page.scss")).default]
    })
], ChatProviderPage);



/***/ })

}]);
//# sourceMappingURL=chat-provider-chat-provider-module-es2015.js.map
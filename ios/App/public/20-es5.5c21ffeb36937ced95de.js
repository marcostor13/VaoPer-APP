function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{C6fG:function(n,e,r){"use strict";var t=r("OE48"),o=r("EKAo");r.d(e,"IonicNativePlugin",(function(){return o.a})),r("yR3O");var i=r("QMYr");r.d(e,"cordova",(function(){return i.a})),r("aJZl"),r("gGGD"),r("O2kO"),r("HD7q"),r("uC2i"),Object(t.a)()},EKAo:function(n,e,r){"use strict";r.d(e,"a",(function(){return o}));var t=r("yR3O"),o=function(){function n(){}return n.installed=function(){return!0===Object(t.a)(this.pluginRef)},n.getPlugin=function(){return"undefined"!=typeof window?function(n,e){for(var r=e.split("."),t=n,o=0;o<r.length;o++){if(!t)return null;t=t[r[o]]}return t}(window,this.pluginRef):null},n.getPluginName=function(){return this.pluginName},n.getPluginRef=function(){return this.pluginRef},n.getPluginInstallName=function(){return this.plugin},n.getSupportedPlatforms=function(){return this.platforms},n.pluginName="",n.pluginRef="",n.plugin="",n.repo="",n.platforms=[],n.install="",n}()},HD7q:function(n,e,r){},O2kO:function(n,e,r){"use strict";r("yR3O")},OE48:function(n,e,r){"use strict";function t(){if("undefined"==typeof process){var n="undefined"!=typeof window?window:{},e=Date.now(),r=!1;n.document.addEventListener("deviceready",(function(){console.log("Ionic Native: deviceready event fired after "+(Date.now()-e)+" ms"),r=!0})),setTimeout((function(){!r&&n.cordova&&console.warn("Ionic Native: deviceready did not fire within 5000ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.")}),5e3)}}r.d(e,"a",(function(){return t}))},QMYr:function(n,e,r){"use strict";r.d(e,"a",(function(){return o}));var t=r("yR3O");function o(n,e,r,o){return Object(t.c)(n,e,r).apply(this,o)}},aJZl:function(n,e,r){"use strict";r("HDdC"),r("yR3O")},gGGD:function(n,e,r){"use strict";r("yR3O")},qdgq:function(n,e,r){"use strict";r.r(e),r.d(e,"LoginPageModule",(function(){return y}));var t,o,i=r("ofXK"),u=r("3Pt+"),c=r("TEn/"),a=r("tyNb"),l=r("NKrf"),s=r("fXoL"),f=[{path:"",component:l.a}],d=((t=function n(){_classCallCheck(this,n)}).\u0275mod=s.Pb({type:t}),t.\u0275inj=s.Ob({factory:function(n){return new(n||t)},imports:[[a.l.forChild(f)],a.l]}),t),p=r("ahC7"),g=r("mrSG"),v=r("C6fG"),h=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}Object(g.__extends)(e,n),e.prototype.login=function(n){return Object(v.cordova)(this,"login",{successIndex:1,errorIndex:2},arguments)},e.prototype.trySilentLogin=function(n){return Object(v.cordova)(this,"trySilentLogin",{},arguments)},e.prototype.logout=function(){return Object(v.cordova)(this,"logout",{},arguments)},e.prototype.disconnect=function(){return Object(v.cordova)(this,"disconnect",{},arguments)},e.prototype.getSigningCertificateFingerprint=function(){return Object(v.cordova)(this,"getSigningCertificateFingerprint",{},arguments)},e.pluginName="GooglePlus",e.plugin="cordova-plugin-googleplus",e.pluginRef="window.plugins.googleplus",e.repo="https://github.com/EddyVerbruggen/cordova-plugin-googleplus",e.install="ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid",e.installVariables=["REVERSED_CLIENT_ID"],e.platforms=["Android","iOS"],e.\u0275fac=function(n){return r(n||e)},e.\u0275prov=s.Nb({token:e,factory:function(n){return e.\u0275fac(n)}});var r=s.Yb(e);return e}(v.IonicNativePlugin),b=r("dEAy"),w=r("OzZK"),y=((o=function n(){_classCallCheck(this,n)}).\u0275mod=s.Pb({type:o}),o.\u0275inj=s.Ob({factory:function(n){return new(n||o)},providers:[h,{provide:"SocialAuthServiceConfig",useValue:{autoLogin:!1,providers:[{id:p.b.PROVIDER_ID,provider:new p.b("216189303909-di5rc6rrp30hni4h5uqegfh0oi5h5tsf.apps.googleusercontent.com")},{id:p.a.PROVIDER_ID,provider:new p.a("663809824221994")}]}}],imports:[[i.c,u.c,c.o,d,p.d,b.b,w.b]]}),o)},uC2i:function(n,e){},yR3O:function(n,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return w})),r.d(e,"d",(function(){return y}));var t=r("HDdC"),o=r("xgIS"),i={error:"cordova_not_available"},u={error:"plugin_not_installed"};function c(n){if("undefined"!=typeof window&&window.angular){var e=window.document,r=window.angular.element(e.querySelector("[ng-app]")||e.body).injector();if(r)return r.get("$q")((function(e,r){n(e,r)}));console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.")}return function(){if(Promise)return new Promise((function(e,r){n(e,r)}));console.error("No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.")}()}function a(n,e,r,t){var o,i;void 0===t&&(t={});var u=c((function(u,c){o=t.destruct?g(n,e,r,t,(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return u(n)}),(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return c(n)})):g(n,e,r,t,u,c),i=c}));return o&&o.error&&(u.catch((function(){})),"function"==typeof i&&i(o.error)),u}function l(n,e,r,t){return void 0===t&&(t={}),c((function(o,i){var u=g(n,e,r,t);u?u.error?i(u.error):u.then&&u.then(o).catch(i):i({error:"unexpected_error"})}))}function s(n,e,r,o){return void 0===o&&(o={}),new t.a((function(t){var i;return(i=o.destruct?g(n,e,r,o,(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.next(n)}),(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.error(n)})):g(n,e,r,o,t.next.bind(t),t.error.bind(t)))&&i.error&&(t.error(i.error),t.complete()),function(){try{if(o.clearFunction)return o.clearWithArgs?g(n,o.clearFunction,r,o,t.next.bind(t),t.error.bind(t)):g(n,o.clearFunction,[])}catch(i){console.warn("Unable to clear the previous observable watch for",n.constructor.getPluginName(),e),console.warn(i)}}}))}function f(n,e){return e="undefined"!=typeof window&&e?b(window,e):e||("undefined"!=typeof window?window:{}),Object(o.a)(e,n)}function d(n,e,r){var t,o,c;return"string"==typeof n?t=n:(t=n.constructor.getPluginRef(),r=n.constructor.getPluginName(),c=n.constructor.getPluginInstallName()),!(!(o=h(t))||e&&void 0===o[e])||("undefined"!=typeof window&&window.cordova?(function(n,e,r){r?console.warn("Native: tried calling "+n+"."+r+", but the "+n+" plugin is not installed."):console.warn("Native: tried accessing the "+n+" plugin but it's not installed."),e&&console.warn("Install the "+n+" plugin: 'ionic cordova plugin add "+e+"'")}(r,c,e),u):(function(n,e){"undefined"==typeof process&&(e?console.warn("Native: tried calling "+n+"."+e+", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator"):console.warn("Native: tried accessing the "+n+" plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator"))}(r,e),i))}function p(n,e,r,t){if(void 0===e&&(e={}),e.sync)return n;if("reverse"===e.callbackOrder)n.unshift(t),n.unshift(r);else if("node"===e.callbackStyle)n.push((function(n,e){n?t(n):r(e)}));else if("object"===e.callbackStyle&&e.successName&&e.errorName){var o={};o[e.successName]=r,o[e.errorName]=t,n.push(o)}else if(void 0!==e.successIndex||void 0!==e.errorIndex){var i=function(){e.successIndex>n.length?n[e.successIndex]=r:n.splice(e.successIndex,0,r)},u=function(){e.errorIndex>n.length?n[e.errorIndex]=t:n.splice(e.errorIndex,0,t)};e.successIndex>e.errorIndex?(u(),i()):(i(),u())}else n.push(r),n.push(t);return n}function g(n,e,r,t,o,i){void 0===t&&(t={}),r=p(r,t,o,i);var u=d(n,e);if(!0===u){var c=h(n.constructor.getPluginRef());return c[e].apply(c,r)}return u}function v(n,e,r,t,o,i){if(void 0===t&&(t={}),r=p(r,t,o,i),function(n,e){return n._objectInstance&&(!e||void 0!==n._objectInstance[e])}(n,e))return n._objectInstance[e].apply(n._objectInstance,r)}function h(n){return"undefined"!=typeof window?b(window,n):null}function b(n,e){for(var r=e.split("."),t=n,o=0;o<r.length;o++){if(!t)return null;t=t[r[o]]}return t}var w=function(n,e,r){return void 0===r&&(r={}),function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return r.sync?g(n,e,t,r):r.observable?s(n,e,t,r):r.eventObservable&&r.event?f(r.event,r.element):r.otherPromise?l(n,e,t,r):a(n,e,t,r)}};function y(n,e,r){return void 0===r&&(r={}),function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];if(r.sync)return v(n,e,o,r);if(r.observable)return new t.a((function(t){var i;return(i=r.destruct?v(n,e,o,r,(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.next(n)}),(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t.error(n)})):v(n,e,o,r,t.next.bind(t),t.error.bind(t)))&&i.error&&t.error(i.error),function(){try{return r.clearWithArgs?v(n,r.clearFunction,o,r,t.next.bind(t),t.error.bind(t)):v(n,r.clearFunction,[])}catch(i){console.warn("Unable to clear the previous observable watch for",n.constructor.getPluginName(),e),console.warn(i)}}}));if(r.otherPromise)return c((function(t,i){var u;(u=r.destruct?v(n,e,o,r,(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t(n)}),(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return i(n)})):v(n,e,o,r,t,i))&&u.then?u.then(t,i):i()}));var u,a,l=c((function(t,i){u=r.destruct?v(n,e,o,r,(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return t(n)}),(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return i(n)})):v(n,e,o,r,t,i),a=i}));return u&&u.error&&(l.catch((function(){})),"function"==typeof a&&a(u.error)),l}}}}]);
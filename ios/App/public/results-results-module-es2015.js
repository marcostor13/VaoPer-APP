(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["results-results-module"],{

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js ***!
  \******************************************************************************************/
/*! exports provided: AnimationCurves, AnimationDuration, collapseMotion, fadeMotion, helpMotion, moveUpMotion, notificationMotion, slideAlertMotion, slideMotion, treeCollapseMotion, zoomBadgeMotion, zoomBigMotion, zoomMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationCurves", function() { return AnimationCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDuration", function() { return AnimationDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseMotion", function() { return collapseMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeMotion", function() { return fadeMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helpMotion", function() { return helpMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveUpMotion", function() { return moveUpMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationMotion", function() { return notificationMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideAlertMotion", function() { return slideAlertMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideMotion", function() { return slideMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeCollapseMotion", function() { return treeCollapseMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomBadgeMotion", function() { return zoomBadgeMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomBigMotion", function() { return zoomBigMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomMotion", function() { return zoomMotion; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");


/**
 * @fileoverview added by tsickle
 * Generated from: animation-consts.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class AnimationDuration {
}
AnimationDuration.SLOW = '0.3s'; // Modal
// Modal
AnimationDuration.BASE = '0.2s';
AnimationDuration.FAST = '0.1s'; // Tooltip
if (false) {}
class AnimationCurves {
}
AnimationCurves.EASE_BASE_OUT = 'cubic-bezier(0.7, 0.3, 0.1, 1)';
AnimationCurves.EASE_BASE_IN = 'cubic-bezier(0.9, 0, 0.3, 0.7)';
AnimationCurves.EASE_OUT = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
AnimationCurves.EASE_IN = 'cubic-bezier(0.55, 0.055, 0.675, 0.19)';
AnimationCurves.EASE_IN_OUT = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
AnimationCurves.EASE_OUT_BACK = 'cubic-bezier(0.12, 0.4, 0.29, 1.46)';
AnimationCurves.EASE_IN_BACK = 'cubic-bezier(0.71, -0.46, 0.88, 0.6)';
AnimationCurves.EASE_IN_OUT_BACK = 'cubic-bezier(0.71, -0.46, 0.29, 1.46)';
AnimationCurves.EASE_OUT_CIRC = 'cubic-bezier(0.08, 0.82, 0.17, 1)';
AnimationCurves.EASE_IN_CIRC = 'cubic-bezier(0.6, 0.04, 0.98, 0.34)';
AnimationCurves.EASE_IN_OUT_CIRC = 'cubic-bezier(0.78, 0.14, 0.15, 0.86)';
AnimationCurves.EASE_OUT_QUINT = 'cubic-bezier(0.23, 1, 0.32, 1)';
AnimationCurves.EASE_IN_QUINT = 'cubic-bezier(0.755, 0.05, 0.855, 0.06)';
AnimationCurves.EASE_IN_OUT_QUINT = 'cubic-bezier(0.86, 0, 0.07, 1)';
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: collapse.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const collapseMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('collapseMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, overflow: 'hidden' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, overflow: 'hidden', borderTopWidth: '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded => collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('expanded => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hidden => expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`))
]);
/** @type {?} */
const treeCollapseMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('treeCollapseMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('nz-tree-node:leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ overflow: 'hidden' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(0, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0 }))])], {
            optional: true
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('nz-tree-node:enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ overflow: 'hidden', height: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(0, [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`150ms ${AnimationCurves.EASE_IN_OUT}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ overflow: 'hidden', height: '*' }))])
        ], {
            optional: true
        })
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: fade.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fadeMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: help.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const helpMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('helpMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(-5px)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateY(0)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'translateY(0)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'translateY(-5px)'
        }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: move.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const moveUpMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('moveUpMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transformOrigin: '0 0',
            transform: 'translateY(0%)',
            opacity: 1
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transformOrigin: '0 0',
            transform: 'translateY(-100%)',
            opacity: 0
        }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: notification.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const notificationMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('notificationMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enterRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => enterRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(5%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear')]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enterLeft', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => enterLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-5%)' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear')]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scaleY(0.8)',
        transformOrigin: '0% 0%'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scaleY(1)',
            transformOrigin: '0% 0%'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms linear')
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: slide.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ANIMATION_TRANSITION_IN = `${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_QUINT}`;
/** @type {?} */
const ANIMATION_TRANSITION_OUT = `${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_QUINT}`;
/** @type {?} */
const slideMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        transform: 'scaleY(0.8)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        transform: 'scaleY(1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(ANIMATION_TRANSITION_IN)]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(ANIMATION_TRANSITION_OUT)])
]);
/** @type {?} */
const slideAlertMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideAlertMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scaleY(1)', transformOrigin: '0% 0%' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT_CIRC}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scaleY(0)',
            transformOrigin: '0% 0%'
        }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: zoom.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const zoomMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('zoomMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.2)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_CIRC}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_OUT_CIRC}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.2)'
        }))
    ])
]);
/** @type {?} */
const zoomBigMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('zoomBigMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => active', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0.8)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_CIRC}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_OUT_CIRC}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.8)'
        }))
    ])
]);
/** @type {?} */
const zoomBadgeMotion = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('zoomBadgeMotion', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'scale(0) translate(50%, -50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_OUT_BACK}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(1) translate(50%, -50%)'
        }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'scale(1) translate(50%, -50%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_BACK}`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0) translate(50%, -50%)'
        }))
    ])
]);

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-core-animation.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-overlay.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-overlay.js ***!
  \****************************************************************************************/
/*! exports provided: DEFAULT_CASCADER_POSITIONS, DEFAULT_MENTION_BOTTOM_POSITIONS, DEFAULT_MENTION_TOP_POSITIONS, DEFAULT_TOOLTIP_POSITIONS, NzConnectedOverlayDirective, NzOverlayModule, POSITION_MAP, getPlacementName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CASCADER_POSITIONS", function() { return DEFAULT_CASCADER_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MENTION_BOTTOM_POSITIONS", function() { return DEFAULT_MENTION_BOTTOM_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MENTION_TOP_POSITIONS", function() { return DEFAULT_MENTION_TOP_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TOOLTIP_POSITIONS", function() { return DEFAULT_TOOLTIP_POSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzConnectedOverlayDirective", function() { return NzConnectedOverlayDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOverlayModule", function() { return NzOverlayModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITION_MAP", function() { return POSITION_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlacementName", function() { return getPlacementName; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/ng-zorro-antd/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/**
 * @fileoverview added by tsickle
 * Generated from: nz-connected-overlay.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


class NzConnectedOverlayDirective {
    /**
     * @param {?} cdkConnectedOverlay
     */
    constructor(cdkConnectedOverlay) {
        this.cdkConnectedOverlay = cdkConnectedOverlay;
        this.cdkConnectedOverlay.backdropClass = 'nz-overlay-transparent-backdrop';
    }
}
NzConnectedOverlayDirective.ɵfac = function NzConnectedOverlayDirective_Factory(t) { return new (t || NzConnectedOverlayDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"])); };
NzConnectedOverlayDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NzConnectedOverlayDirective, selectors: [["", "cdkConnectedOverlay", "", "nzConnectedOverlay", ""]], exportAs: ["nzConnectedOverlay"] });
/** @nocollapse */
NzConnectedOverlayDirective.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzConnectedOverlayDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[cdkConnectedOverlay][nzConnectedOverlay]',
                exportAs: 'nzConnectedOverlay'
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: nz-overlay.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzOverlayModule {
}
NzOverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzOverlayModule });
NzOverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzOverlayModule_Factory(t) { return new (t || NzOverlayModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzOverlayModule, { declarations: [NzConnectedOverlayDirective], exports: [NzConnectedOverlayDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzOverlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NzConnectedOverlayDirective],
                exports: [NzConnectedOverlayDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: overlay-position.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const POSITION_MAP = {
    top: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    topCenter: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    topLeft: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
    topRight: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    right: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'end', originY: 'center' }, { overlayX: 'start', overlayY: 'center' }),
    rightTop: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    rightBottom: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
    bottom: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    bottomCenter: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    bottomLeft: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    bottomRight: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
    left: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'start', originY: 'center' }, { overlayX: 'end', overlayY: 'center' }),
    leftTop: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' }),
    leftBottom: new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
};
/** @type {?} */
const DEFAULT_TOOLTIP_POSITIONS = [POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left];
/** @type {?} */
const DEFAULT_CASCADER_POSITIONS = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topLeft, POSITION_MAP.topRight];
/** @type {?} */
const DEFAULT_MENTION_TOP_POSITIONS = [
    new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
    new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
];
/** @type {?} */
const DEFAULT_MENTION_BOTTOM_POSITIONS = [
    POSITION_MAP.bottomLeft,
    new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ConnectionPositionPair"]({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' })
];
/**
 * @param {?} position
 * @return {?}
 */
function getPlacementName(position) {
    for (const placement in POSITION_MAP) {
        if (position.connectionPair.originX === POSITION_MAP[placement].originX &&
            position.connectionPair.originY === POSITION_MAP[placement].originY &&
            position.connectionPair.overlayX === POSITION_MAP[placement].overlayX &&
            position.connectionPair.overlayY === POSITION_MAP[placement].overlayY) {
            return placement;
        }
    }
    return undefined;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-core-overlay.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-core-overlay.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-empty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-empty.js ***!
  \*********************************************************************************/
/*! exports provided: NZ_EMPTY_COMPONENT_NAME, NzEmbedEmptyComponent, NzEmptyComponent, NzEmptyDefaultComponent, NzEmptyModule, NzEmptySimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NZ_EMPTY_COMPONENT_NAME", function() { return NZ_EMPTY_COMPONENT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzEmbedEmptyComponent", function() { return NzEmbedEmptyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzEmptyComponent", function() { return NzEmptyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzEmptyDefaultComponent", function() { return NzEmptyDefaultComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzEmptyModule", function() { return NzEmptyModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzEmptySimpleComponent", function() { return NzEmptySimpleComponent; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/ng-zorro-antd/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");









/**
 * @fileoverview added by tsickle
 * Generated from: config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */







function NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundImage", "simple");
} }
function NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty", 7);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzNotFoundImage", "simple");
} }
function NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty");
} }
function NzEmbedEmptyComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmbedEmptyComponent_ng_container_0_nz_empty_1_Template, 1, 1, "nz-empty", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzEmbedEmptyComponent_ng_container_0_nz_empty_2_Template, 1, 1, "nz-empty", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzEmbedEmptyComponent_ng_container_0_nz_empty_3_Template, 1, 0, "nz-empty", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx_r0.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "small");
} }
function NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function NzEmbedEmptyComponent_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzEmbedEmptyComponent_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template", 8);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkPortalOutlet", ctx_r5.contentPortal);
} }
function NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.content, " ");
} }
function NzEmbedEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmbedEmptyComponent_ng_container_1_1_Template, 1, 1, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzEmbedEmptyComponent_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.contentType !== "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.contentType === "string");
} }
function NzEmptyComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r5.nzNotFoundImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r5.isContentString ? ctx_r5.nzNotFoundContent : "empty");
} }
function NzEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmptyComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzNotFoundImage);
} }
function NzEmptyComponent_nz_empty_default_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty-default");
} }
function NzEmptyComponent_nz_empty_simple_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-empty-simple");
} }
function NzEmptyComponent_p_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.isContentString ? ctx_r6.nzNotFoundContent : ctx_r6.locale["description"], " ");
} }
function NzEmptyComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmptyComponent_p_4_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r3.nzNotFoundContent);
} }
function NzEmptyComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.nzNotFoundFooter, " ");
} }
function NzEmptyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmptyComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r4.nzNotFoundFooter);
} }
const NZ_EMPTY_COMPONENT_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('nz-empty-component-name');

/**
 * @fileoverview added by tsickle
 * Generated from: embed-empty.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} componentName
 * @return {?}
 */
function getEmptySize(componentName) {
    switch (componentName) {
        case 'table':
        case 'list':
            return 'normal';
        case 'select':
        case 'tree-select':
        case 'cascader':
        case 'transfer':
            return 'small';
        default:
            return '';
    }
}
class NzEmbedEmptyComponent {
    /**
     * @param {?} configService
     * @param {?} viewContainerRef
     * @param {?} cdr
     * @param {?} injector
     */
    constructor(configService, viewContainerRef, cdr, injector) {
        this.configService = configService;
        this.viewContainerRef = viewContainerRef;
        this.cdr = cdr;
        this.injector = injector;
        this.contentType = 'string';
        this.size = '';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzComponentName) {
            this.size = getEmptySize(changes.nzComponentName.currentValue);
        }
        if (changes.specificContent && !changes.specificContent.isFirstChange()) {
            this.content = changes.specificContent.currentValue;
            this.renderEmpty();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeDefaultEmptyContentChange();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    renderEmpty() {
        /** @type {?} */
        const content = this.content;
        if (typeof content === 'string') {
            this.contentType = 'string';
        }
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            /** @type {?} */
            const context = (/** @type {?} */ ({ $implicit: this.nzComponentName }));
            this.contentType = 'template';
            this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["TemplatePortal"](content, this.viewContainerRef, context);
        }
        else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["Type"]) {
            /** @type {?} */
            const context = new WeakMap([[NZ_EMPTY_COMPONENT_NAME, this.nzComponentName]]);
            /** @type {?} */
            const injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalInjector"](this.injector, context);
            this.contentType = 'component';
            this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["ComponentPortal"](content, this.viewContainerRef, injector);
        }
        else {
            this.contentType = 'string';
            this.contentPortal = undefined;
        }
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    subscribeDefaultEmptyContentChange() {
        this.configService
            .getConfigChangeEventForComponent('empty')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.content = this.specificContent || this.getUserDefaultEmptyContent();
            this.renderEmpty();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getUserDefaultEmptyContent() {
        return (this.configService.getConfigForComponent('empty') || {}).nzDefaultEmptyContent;
    }
}
NzEmbedEmptyComponent.ɵfac = function NzEmbedEmptyComponent_Factory(t) { return new (t || NzEmbedEmptyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); };
NzEmbedEmptyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzEmbedEmptyComponent, selectors: [["nz-embed-empty"]], inputs: { nzComponentName: "nzComponentName", specificContent: "specificContent" }, exportAs: ["nzEmbedEmpty"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[3, "ngSwitch", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], ["class", "ant-empty-normal", 3, "nzNotFoundImage", 4, "ngSwitchCase"], ["class", "ant-empty-small", 3, "nzNotFoundImage", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "ant-empty-normal", 3, "nzNotFoundImage"], [1, "ant-empty-small", 3, "nzNotFoundImage"], [3, "cdkPortalOutlet"]], template: function NzEmbedEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzEmbedEmptyComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmbedEmptyComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.content && ctx.specificContent !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.content);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], NzEmptyComponent, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["CdkPortalOutlet"]]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzEmbedEmptyComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
NzEmbedEmptyComponent.propDecorators = {
    nzComponentName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    specificContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzEmbedEmptyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                selector: 'nz-embed-empty',
                exportAs: 'nzEmbedEmpty',
                template: `
    <ng-container *ngIf="!content && specificContent !== null" [ngSwitch]="size">
      <nz-empty *ngSwitchCase="'normal'" class="ant-empty-normal" [nzNotFoundImage]="'simple'"></nz-empty>
      <nz-empty *ngSwitchCase="'small'" class="ant-empty-small" [nzNotFoundImage]="'simple'"></nz-empty>
      <nz-empty *ngSwitchDefault></nz-empty>
    </ng-container>
    <ng-container *ngIf="content">
      <ng-template *ngIf="contentType !== 'string'" [cdkPortalOutlet]="contentPortal"></ng-template>
      <ng-container *ngIf="contentType === 'string'">
        {{ content }}
      </ng-container>
    </ng-container>
  `
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, { nzComponentName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], specificContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: empty.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NzEmptyDefaultImages = (/** @type {?} */ (['default', 'simple']));
class NzEmptyComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     */
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.nzNotFoundImage = 'default';
        this.isContentString = false;
        this.isImageBuildIn = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzNotFoundContent, nzNotFoundImage } = changes;
        if (nzNotFoundContent) {
            /** @type {?} */
            const content = nzNotFoundContent.currentValue;
            this.isContentString = typeof content === 'string';
        }
        if (nzNotFoundImage) {
            /** @type {?} */
            const image = nzNotFoundImage.currentValue || 'default';
            this.isImageBuildIn = NzEmptyDefaultImages.findIndex((/**
             * @param {?} i
             * @return {?}
             */
            i => i === image)) > -1;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Empty');
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzEmptyComponent.ɵfac = function NzEmptyComponent_Factory(t) { return new (t || NzEmptyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
NzEmptyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzEmptyComponent, selectors: [["nz-empty"]], hostAttrs: [1, "ant-empty"], inputs: { nzNotFoundImage: "nzNotFoundImage", nzNotFoundContent: "nzNotFoundContent", nzNotFoundFooter: "nzNotFoundFooter" }, exportAs: ["nzEmpty"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 5, consts: [[1, "ant-empty-image"], [4, "ngIf"], ["class", "ant-empty-description", 4, "ngIf"], ["class", "ant-empty-footer", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "src", "alt"], [1, "ant-empty-description"], [1, "ant-empty-footer"]], template: function NzEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzEmptyComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzEmptyComponent_nz_empty_default_2_Template, 1, 0, "nz-empty-default", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NzEmptyComponent_nz_empty_simple_3_Template, 1, 0, "nz-empty-simple", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NzEmptyComponent_p_4_Template, 2, 1, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NzEmptyComponent_div_5_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isImageBuildIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isImageBuildIn && ctx.nzNotFoundImage !== "simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isImageBuildIn && ctx.nzNotFoundImage === "simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzNotFoundContent !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nzNotFoundFooter);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzStringTemplateOutletDirective"], NzEmptyDefaultComponent,
        NzEmptySimpleComponent]; }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzEmptyComponent.ctorParameters = () => [
    { type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
NzEmptyComponent.propDecorators = {
    nzNotFoundImage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzNotFoundContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    nzNotFoundFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzEmptyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                selector: 'nz-empty',
                exportAs: 'nzEmpty',
                template: `
    <div class="ant-empty-image">
      <ng-container *ngIf="!isImageBuildIn">
        <ng-container *nzStringTemplateOutlet="nzNotFoundImage">
          <img [src]="nzNotFoundImage" [alt]="isContentString ? nzNotFoundContent : 'empty'" />
        </ng-container>
      </ng-container>
      <nz-empty-default *ngIf="isImageBuildIn && nzNotFoundImage !== 'simple'"></nz-empty-default>
      <nz-empty-simple *ngIf="isImageBuildIn && nzNotFoundImage === 'simple'"></nz-empty-simple>
    </div>
    <p class="ant-empty-description" *ngIf="nzNotFoundContent !== null">
      <ng-container *nzStringTemplateOutlet="nzNotFoundContent">
        {{ isContentString ? nzNotFoundContent : locale['description'] }}
      </ng-container>
    </p>
    <div class="ant-empty-footer" *ngIf="nzNotFoundFooter">
      <ng-container *nzStringTemplateOutlet="nzNotFoundFooter">
        {{ nzNotFoundFooter }}
      </ng-container>
    </div>
  `,
                host: {
                    class: 'ant-empty'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { nzNotFoundImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzNotFoundContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nzNotFoundFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: partial/default.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzEmptyDefaultComponent {
}
NzEmptyDefaultComponent.ɵfac = function NzEmptyDefaultComponent_Factory(t) { return new (t || NzEmptyDefaultComponent)(); };
NzEmptyDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzEmptyDefaultComponent, selectors: [["nz-empty-default"]], exportAs: ["nzEmptyDefault"], decls: 12, vars: 0, consts: [["width", "184", "height", "152", "viewBox", "0 0 184 152", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-default"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(24 31.67)"], ["cx", "67.797", "cy", "106.89", "rx", "67.797", "ry", "12.668", 1, "ant-empty-img-default-ellipse"], ["d", "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z", 1, "ant-empty-img-default-path-1"], ["d", "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z", "transform", "translate(13.56)", 1, "ant-empty-img-default-path-2"], ["d", "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z", 1, "ant-empty-img-default-path-3"], ["d", "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z", 1, "ant-empty-img-default-path-4"], ["d", "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z", 1, "ant-empty-img-default-path-5"], ["transform", "translate(149.65 15.383)", 1, "ant-empty-img-default-g"], ["cx", "20.654", "cy", "3.167", "rx", "2.849", "ry", "2.815"], ["d", "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]], template: function NzEmptyDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ellipse", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "g", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ellipse", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzEmptyDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                selector: 'nz-empty-default',
                exportAs: 'nzEmptyDefault',
                template: `
    <svg class="ant-empty-img-default" width="184" height="152" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(24 31.67)">
          <ellipse class="ant-empty-img-default-ellipse" cx="67.797" cy="106.89" rx="67.797" ry="12.668" />
          <path
            class="ant-empty-img-default-path-1"
            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
          />
          <path
            class="ant-empty-img-default-path-2"
            d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
            transform="translate(13.56)"
          />
          <path
            class="ant-empty-img-default-path-3"
            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
          />
          <path
            class="ant-empty-img-default-path-4"
            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
          />
        </g>
        <path
          class="ant-empty-img-default-path-5"
          d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
        />
        <g class="ant-empty-img-default-g" transform="translate(149.65 15.383)">
          <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
          <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
        </g>
      </g>
    </svg>
  `
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: partial/simple.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzEmptySimpleComponent {
}
NzEmptySimpleComponent.ɵfac = function NzEmptySimpleComponent_Factory(t) { return new (t || NzEmptySimpleComponent)(); };
NzEmptySimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NzEmptySimpleComponent, selectors: [["nz-empty-simple"]], exportAs: ["nzEmptySimple"], decls: 6, vars: 0, consts: [["width", "64", "height", "41", "viewBox", "0 0 64 41", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-simple"], ["transform", "translate(0 1)", "fill", "none", "fill-rule", "evenodd"], ["cx", "32", "cy", "33", "rx", "32", "ry", "7", 1, "ant-empty-img-simple-ellipse"], ["fill-rule", "nonzero", 1, "ant-empty-img-simple-g"], ["d", "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"], ["d", "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", 1, "ant-empty-img-simple-path"]], template: function NzEmptySimpleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ellipse", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzEmptySimpleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                selector: 'nz-empty-simple',
                exportAs: 'nzEmptySimple',
                template: `
    <svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
        <ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7" />
        <g class="ant-empty-img-simple-g" fill-rule="nonzero">
          <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
          <path
            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
            class="ant-empty-img-simple-path"
          />
        </g>
      </g>
    </svg>
  `
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: empty.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzEmptyModule {
}
NzEmptyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NzEmptyModule });
NzEmptyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NzEmptyModule_Factory(t) { return new (t || NzEmptyModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NzEmptyModule, { declarations: function () { return [NzEmptyComponent,
        NzEmbedEmptyComponent,
        NzEmptyDefaultComponent,
        NzEmptySimpleComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nModule"]]; }, exports: function () { return [NzEmptyComponent,
        NzEmbedEmptyComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NzEmptyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["PortalModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__["NzOutletModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nModule"]],
                declarations: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
                exports: [NzEmptyComponent, NzEmbedEmptyComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-empty.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-empty.js.map

/***/ }),

/***/ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js ***!
  \**********************************************************************************/
/*! exports provided: NzOptionComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzOptionItemGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectComponent, NzSelectItemComponent, NzSelectModule, NzSelectPlaceholderComponent, NzSelectSearchComponent, NzSelectTopControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionComponent", function() { return NzOptionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionContainerComponent", function() { return NzOptionContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionGroupComponent", function() { return NzOptionGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionItemComponent", function() { return NzOptionItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzOptionItemGroupComponent", function() { return NzOptionItemGroupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectArrowComponent", function() { return NzSelectArrowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectClearComponent", function() { return NzSelectClearComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectComponent", function() { return NzSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectItemComponent", function() { return NzSelectItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectModule", function() { return NzSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectPlaceholderComponent", function() { return NzSelectPlaceholderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectSearchComponent", function() { return NzSelectSearchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NzSelectTopControlComponent", function() { return NzSelectTopControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/ng-zorro-antd/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-util.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/ng-zorro-antd/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/ng-zorro-antd/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/ng-zorro-antd/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/ng-zorro-antd/node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/animation */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-animation.js");
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/config */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-config.js");
/* harmony import */ var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/no-animation */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-no-animation.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-outlet.js");
/* harmony import */ var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/overlay */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-overlay.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/empty */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-empty.js");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-i18n.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");






















/**
 * @fileoverview added by tsickle
 * Generated from: option-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */















const _c0 = ["*"];
function NzOptionContainerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nz-embed-empty", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("specificContent", ctx_r0.notFoundContent);
} }
function NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option-item-group", 9);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", item_r3.groupLabel);
} }
function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemHover", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemHover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onItemHover($event); })("itemClick", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onItemClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.menuItemSelectedIcon)("customContent", item_r3.nzCustomContent)("template", item_r3.template)("grouped", !!item_r3.groupLabel)("disabled", item_r3.nzDisabled)("showState", ctx_r5.mode === "tags" || ctx_r5.mode === "multiple")("label", item_r3.nzLabel)("compareWith", ctx_r5.compareWith)("activatedValue", ctx_r5.activatedValue)("listOfSelectedValue", ctx_r5.listOfSelectedValue)("value", item_r3.nzValue);
} }
function NzOptionContainerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template, 1, 1, "nz-option-item-group", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template, 1, 11, "nz-option-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "item");
} }
function NzOptionContainerComponent_ng_template_4_Template(rf, ctx) { }
function NzOptionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
} }
const _c1 = ["inputElement"];
const _c2 = ["mirrorElement"];
function NzSelectSearchComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3, 4);
} }
function NzSelectTopControlComponent_ng_container_1_nz_select_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-item", 6);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("deletable", false)("disabled", false)("removeIcon", ctx_r3.removeIcon)("label", ctx_r3.listOfTopItem[0].nzLabel)("contentTemplateOutlet", ctx_r3.customTemplate)("contentTemplateOutletContext", ctx_r3.listOfTopItem[0]);
} }
function NzSelectTopControlComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_1_nz_select_item_1_Template, 1, 6, "nz-select-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-select-search", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_isComposingChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.isComposingChange($event); })("valueChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onInputValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowSingleLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.disabled)("value", ctx_r0.inputValue)("showInput", ctx_r0.open && ctx_r0.showSearch)("mirrorSync", false)("autofocus", ctx_r0.autofocus)("focusTrigger", ctx_r0.open);
} }
function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@zoomMotion.done", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_animation_zoomMotion_done_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onAnimationEnd(); })("delete", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onDeleteItem(item_r8.contentTemplateOutletContext); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@zoomMotion", undefined)("@.disabled", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r7.noAnimation == null ? null : ctx_r7.noAnimation.nzNoAnimation)("removeIcon", ctx_r7.removeIcon)("label", item_r8.nzLabel)("disabled", item_r8.nzDisabled || ctx_r7.disabled)("contentTemplateOutlet", item_r8.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r8.contentTemplateOutletContext);
} }
function NzSelectTopControlComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template, 1, 9, "nz-select-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-select-search", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isComposingChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_isComposingChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.isComposingChange($event); })("valueChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_valueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onInputValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.listOfSlicedItem)("ngForTrackBy", ctx_r1.trackValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
} }
function NzSelectTopControlComponent_nz_select_placeholder_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-placeholder", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r2.placeHolder);
} }
function NzSelectComponent_nz_select_clear_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-clear", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clear", function NzSelectComponent_nz_select_clear_2_Template_nz_select_clear_clear_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClearSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clearIcon", ctx_r1.nzClearIcon);
} }
function NzSelectComponent_nz_select_arrow_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-select-arrow", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r2.nzLoading)("search", ctx_r2.nzOpen && ctx_r2.nzShowSearch)("suffixIcon", ctx_r2.nzSuffixIcon);
} }
function NzSelectComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NzSelectComponent_ng_template_4_Template_nz_option_container_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onKeyDown($event); })("itemClick", function NzSelectComponent_ng_template_4_Template_nz_option_container_itemClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onItemClick($event); })("scrollToBottom", function NzSelectComponent_ng_template_4_Template_nz_option_container_scrollToBottom_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.nzScrollToBottom.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-dropdown-placement-bottomLeft", ctx_r3.dropDownPosition === "bottom")("ant-select-dropdown-placement-topLeft", ctx_r3.dropDownPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.nzDropdownStyle)("itemSize", ctx_r3.nzOptionHeightPx)("maxItemLength", ctx_r3.nzOptionOverflowSize)("matchWidth", ctx_r3.nzDropdownMatchSelectWidth)("@slideMotion", "enter")("@.disabled", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("nzNoAnimation", ctx_r3.noAnimation == null ? null : ctx_r3.noAnimation.nzNoAnimation)("listOfContainerItem", ctx_r3.listOfContainerItem)("menuItemSelectedIcon", ctx_r3.nzMenuItemSelectedIcon)("notFoundContent", ctx_r3.nzNotFoundContent)("activatedValue", ctx_r3.activatedValue)("listOfSelectedValue", ctx_r3.listOfValue)("dropdownRender", ctx_r3.nzDropdownRender)("compareWith", ctx_r3.compareWith)("mode", ctx_r3.nzMode);
} }
function NzOptionItemGroupComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.nzLabel);
} }
function NzOptionItemComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
} }
function NzOptionItemComponent_ng_container_2_ng_template_1_Template(rf, ctx) { }
function NzOptionItemComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.template);
} }
function NzOptionItemComponent_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} }
function NzOptionItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_div_3_i_1_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.icon)("ngIfElse", ctx_r2.icon);
} }
function NzSelectArrowComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
} }
function NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
} }
function NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
function NzSelectArrowComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_container_0_i_1_Template, 1, 0, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectArrowComponent_ng_template_1_ng_container_0_i_2_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.search);
} }
function NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const suffixIcon_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", suffixIcon_r9);
} }
function NzSelectArrowComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r5.suffixIcon);
} }
function NzSelectArrowComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.suffixIcon)("ngIfElse", _r4);
} }
function NzSelectClearComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1);
} }
function NzSelectItemComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.label);
} }
function NzSelectItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.label);
} }
function NzSelectItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_ng_container_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectItemComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.deletable)("ngIfElse", _r3);
} }
function NzSelectItemComponent_span_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
} }
function NzSelectItemComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectItemComponent_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onDelete($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_i_1_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.removeIcon)("ngIfElse", ctx_r1.removeIcon);
} }
const _c3 = function (a0) { return { $implicit: a0 }; };
function NzSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.placeholder, " ");
} }
class NzOptionGroupComponent {
    constructor() {
        this.nzLabel = null;
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.changes.next();
    }
}
NzOptionGroupComponent.ɵfac = function NzOptionGroupComponent_Factory(t) { return new (t || NzOptionGroupComponent)(); };
NzOptionGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionGroupComponent, selectors: [["nz-option-group"]], inputs: { nzLabel: "nzLabel" }, exportAs: ["nzOptionGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzOptionGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
NzOptionGroupComponent.propDecorators = {
    nzLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: option-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzOptionContainerComponent {
    constructor() {
        this.notFoundContent = undefined;
        this.menuItemSelectedIcon = null;
        this.dropdownRender = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.mode = 'default';
        this.matchWidth = true;
        this.itemSize = 32;
        this.maxItemLength = 8;
        this.listOfContainerItem = [];
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrolledIndex = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onItemClick(value) {
        this.itemClick.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onItemHover(value) {
        // TODO: keydown.enter won't activate this value
        this.activatedValue = value;
    }
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackValue(_index, option) {
        return option.key;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onScrolledIndexChange(index) {
        this.scrolledIndex = index;
        if (index === this.listOfContainerItem.length - this.maxItemLength) {
            this.scrollToBottom.emit();
        }
    }
    /**
     * @return {?}
     */
    scrollToActivatedValue() {
        /** @type {?} */
        const index = this.listOfContainerItem.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => this.compareWith(item.key, this.activatedValue)));
        if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
            this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { listOfContainerItem, activatedValue } = changes;
        if (listOfContainerItem || activatedValue) {
            this.scrollToActivatedValue();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => this.scrollToActivatedValue()));
    }
}
NzOptionContainerComponent.ɵfac = function NzOptionContainerComponent_Factory(t) { return new (t || NzOptionContainerComponent)(); };
NzOptionContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionContainerComponent, selectors: [["nz-option-container"]], viewQuery: function NzOptionContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
    } }, hostVars: 2, hostBindings: function NzOptionContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-dropdown", true);
    } }, inputs: { notFoundContent: "notFoundContent", menuItemSelectedIcon: "menuItemSelectedIcon", dropdownRender: "dropdownRender", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", mode: "mode", matchWidth: "matchWidth", itemSize: "itemSize", maxItemLength: "maxItemLength", listOfContainerItem: "listOfContainerItem", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", scrollToBottom: "scrollToBottom" }, exportAs: ["nzOptionContainer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 14, consts: [["class", "ant-select-item-empty", 4, "ngIf"], [3, "itemSize", "maxBufferPx", "minBufferPx", "scrolledIndexChange"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], [1, "ant-select-item-empty"], ["nzComponentName", "select", 3, "specificContent"], [3, "ngSwitch"], [3, "nzLabel", 4, "ngSwitchCase"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick", 4, "ngSwitchCase"], [3, "nzLabel"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick"]], template: function NzOptionContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionContainerComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "cdk-virtual-scroll-viewport", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scrolledIndexChange", function NzOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) { return ctx.onScrolledIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionContainerComponent_ng_template_3_Template, 3, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfContainerItem.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("full-width", !ctx.matchWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.dropdownRender);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmbedEmptyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchCase"], NzOptionItemGroupComponent,
        NzOptionItemComponent]; }, encapsulation: 2, changeDetection: 0 });
NzOptionContainerComponent.propDecorators = {
    notFoundContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    menuItemSelectedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dropdownRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activatedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listOfSelectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    matchWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxItemLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listOfContainerItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scrollToBottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cdkVirtualScrollViewport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], { static: true },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: option.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzOptionComponent {
    /**
     * @param {?} nzOptionGroupComponent
     */
    constructor(nzOptionGroupComponent) {
        this.nzOptionGroupComponent = nzOptionGroupComponent;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.groupLabel = null;
        this.nzLabel = null;
        this.nzValue = null;
        this.nzDisabled = false;
        this.nzHide = false;
        this.nzCustomContent = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzOptionGroupComponent) {
            this.nzOptionGroupComponent.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$)).subscribe((/**
             * @return {?}
             */
            () => {
                this.groupLabel = this.nzOptionGroupComponent.nzLabel;
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.changes.next();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzOptionComponent.ɵfac = function NzOptionComponent_Factory(t) { return new (t || NzOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NzOptionGroupComponent, 8)); };
NzOptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionComponent, selectors: [["nz-option"]], viewQuery: function NzOptionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, inputs: { nzLabel: "nzLabel", nzValue: "nzValue", nzDisabled: "nzDisabled", nzHide: "nzHide", nzCustomContent: "nzCustomContent" }, exportAs: ["nzOption"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzOptionComponent.ctorParameters = () => [
    { type: NzOptionGroupComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzOptionComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true },] }],
    nzLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCustomContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzOptionComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzOptionComponent.prototype, "nzHide", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzOptionComponent.prototype, "nzCustomContent", void 0);
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-search.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectSearchComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} focusMonitor
     */
    constructor(elementRef, renderer, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.disabled = false;
        this.mirrorSync = false;
        this.showInput = true;
        this.focusTrigger = false;
        this.value = '';
        this.autofocus = false;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isComposingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} isComposing
     * @return {?}
     */
    setCompositionState(isComposing) {
        this.isComposingChange.next(isComposing);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChange(value) {
        /** @type {?} */
        const inputDOM = this.inputElement.nativeElement;
        inputDOM.value = value;
        this.value = value;
        this.valueChange.next(value);
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
    }
    /**
     * @return {?}
     */
    clearInputValue() {
        this.onValueChange('');
    }
    /**
     * @return {?}
     */
    syncMirrorWidth() {
        /** @type {?} */
        const mirrorDOM = (/** @type {?} */ (this.mirrorElement)).nativeElement;
        /** @type {?} */
        const hostDOM = this.elementRef.nativeElement;
        /** @type {?} */
        const inputDOM = this.inputElement.nativeElement;
        this.renderer.removeStyle(hostDOM, 'width');
        mirrorDOM.innerHTML = `${inputDOM.value}&nbsp;`;
        this.renderer.setStyle(hostDOM, 'width', `${mirrorDOM.scrollWidth}px`);
    }
    /**
     * @return {?}
     */
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    /**
     * @return {?}
     */
    blur() {
        this.inputElement.nativeElement.blur();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const inputDOM = this.inputElement.nativeElement;
        const { focusTrigger, showInput } = changes;
        if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
            inputDOM.focus();
        }
        if (showInput) {
            if (this.showInput) {
                this.renderer.removeAttribute(inputDOM, 'readonly');
            }
            else {
                this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
        if (this.autofocus) {
            this.focus();
        }
    }
}
NzSelectSearchComponent.ɵfac = function NzSelectSearchComponent_Factory(t) { return new (t || NzSelectSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"])); };
NzSelectSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectSearchComponent, selectors: [["nz-select-search"]], viewQuery: function NzSelectSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mirrorElement = _t.first);
    } }, hostVars: 2, hostBindings: function NzSelectSearchComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-search", true);
    } }, inputs: { disabled: "disabled", mirrorSync: "mirrorSync", showInput: "showInput", focusTrigger: "focusTrigger", value: "value", autofocus: "autofocus" }, outputs: { valueChange: "valueChange", isComposingChange: "isComposingChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 6, consts: [["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModel", "disabled", "ngModelChange", "compositionstart", "compositionend"], ["inputElement", ""], ["class", "ant-select-selection-search-mirror", 4, "ngIf"], [1, "ant-select-selection-search-mirror"], ["mirrorElement", ""]], template: function NzSelectSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NzSelectSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.onValueChange($event); })("compositionstart", function NzSelectSearchComponent_Template_input_compositionstart_0_listener() { return ctx.setCompositionState(true); })("compositionend", function NzSelectSearchComponent_Template_input_compositionend_0_listener() { return ctx.setCompositionState(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectSearchComponent_span_2_Template, 2, 0, "span", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.showInput ? null : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autofocus", ctx.autofocus ? "autofocus" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mirrorSync);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"]], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NzSelectSearchComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }
];
NzSelectSearchComponent.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mirrorSync: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    focusTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autofocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isComposingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['inputElement', { static: true },] }],
    mirrorElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['mirrorElement', { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-top-control.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectTopControlComponent {
    /**
     * @param {?=} noAnimation
     */
    constructor(noAnimation) {
        this.noAnimation = noAnimation;
        this.showSearch = false;
        this.placeHolder = null;
        this.open = false;
        this.maxTagCount = Infinity;
        this.autofocus = false;
        this.disabled = false;
        this.mode = 'default';
        this.customTemplate = null;
        this.maxTagPlaceholder = null;
        this.removeIcon = null;
        this.listOfTopItem = [];
        this.tokenSeparators = [];
        this.tokenize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.animationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listOfSlicedItem = [];
        this.isShowPlaceholder = true;
        this.isShowSingleLabel = false;
        this.isComposing = false;
        this.inputValue = null;
    }
    /**
     * @return {?}
     */
    onHostClick() {
        if (!this.disabled) {
            this.openChange.next(!this.open);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onHostKeydown(e) {
        /** @type {?} */
        const inputValue = ((/** @type {?} */ (e.target))).value;
        if (e.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["BACKSPACE"] && this.mode !== 'default' && !inputValue && this.listOfTopItem.length > 0) {
            e.preventDefault();
            this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]);
        }
    }
    /**
     * @return {?}
     */
    updateTemplateVariable() {
        /** @type {?} */
        const isSelectedValueEmpty = this.listOfTopItem.length === 0;
        this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
        this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    }
    /**
     * @param {?} isComposing
     * @return {?}
     */
    isComposingChange(isComposing) {
        this.isComposing = isComposing;
        this.updateTemplateVariable();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onInputValueChange(value) {
        if (value !== this.inputValue) {
            this.inputValue = value;
            this.updateTemplateVariable();
            this.inputValueChange.emit(value);
            this.tokenSeparate(value, this.tokenSeparators);
        }
    }
    /**
     * @param {?} inputValue
     * @param {?} tokenSeparators
     * @return {?}
     */
    tokenSeparate(inputValue, tokenSeparators) {
        /** @type {?} */
        const includesSeparators = (/**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        (str, separators) => {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        });
        /** @type {?} */
        const splitBySeparators = (/**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        (str, separators) => {
            /** @type {?} */
            const reg = new RegExp(`[${separators.join()}]`);
            /** @type {?} */
            const array = ((/** @type {?} */ (str))).split(reg).filter((/**
             * @param {?} token
             * @return {?}
             */
            token => token));
            return [...new Set(array)];
        });
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.mode !== 'default' &&
            includesSeparators(inputValue, tokenSeparators)) {
            /** @type {?} */
            const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
            this.tokenize.next(listOfLabel);
        }
    }
    /**
     * @return {?}
     */
    clearInputValue() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.clearInputValue();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.blur();
        }
    }
    /**
     * @param {?} _index
     * @param {?} option
     * @return {?}
     */
    trackValue(_index, option) {
        return option.nzValue;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onDeleteItem(item) {
        if (!this.disabled && !item.nzDisabled) {
            this.deleteItem.next(item);
        }
    }
    /**
     * @return {?}
     */
    onAnimationEnd() {
        this.animationEnd.next();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { listOfTopItem, maxTagCount, customTemplate, maxTagPlaceholder } = changes;
        if (listOfTopItem) {
            this.updateTemplateVariable();
        }
        if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
            /** @type {?} */
            const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map((/**
             * @param {?} o
             * @return {?}
             */
            o => {
                return {
                    nzLabel: o.nzLabel,
                    nzValue: o.nzValue,
                    nzDisabled: o.nzDisabled,
                    contentTemplateOutlet: this.customTemplate,
                    contentTemplateOutletContext: o
                };
            }));
            if (this.listOfTopItem.length > this.maxTagCount) {
                /** @type {?} */
                const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
                /** @type {?} */
                const listOfSelectedValue = this.listOfTopItem.map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => item.nzValue));
                /** @type {?} */
                const exceededItem = {
                    nzLabel: exceededLabel,
                    nzValue: '$$__nz_exceeded_item',
                    nzDisabled: true,
                    contentTemplateOutlet: this.maxTagPlaceholder,
                    contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
                };
                listOfSlicedItem.push(exceededItem);
            }
            this.listOfSlicedItem = listOfSlicedItem;
        }
    }
}
NzSelectTopControlComponent.ɵfac = function NzSelectTopControlComponent_Factory(t) { return new (t || NzSelectTopControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], 9)); };
NzSelectTopControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectTopControlComponent, selectors: [["nz-select-top-control"]], viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NzSelectSearchComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectSearchComponent = _t.first);
    } }, hostVars: 2, hostBindings: function NzSelectTopControlComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectTopControlComponent_click_HostBindingHandler() { return ctx.onHostClick(); })("keydown", function NzSelectTopControlComponent_keydown_HostBindingHandler($event) { return ctx.onHostKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selector", true);
    } }, inputs: { showSearch: "showSearch", placeHolder: "placeHolder", open: "open", maxTagCount: "maxTagCount", autofocus: "autofocus", disabled: "disabled", mode: "mode", customTemplate: "customTemplate", maxTagPlaceholder: "maxTagPlaceholder", removeIcon: "removeIcon", listOfTopItem: "listOfTopItem", tokenSeparators: "tokenSeparators" }, outputs: { tokenize: "tokenize", inputValueChange: "inputValueChange", animationEnd: "animationEnd", deleteItem: "deleteItem", openChange: "openChange" }, exportAs: ["nzSelectTopControl"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "placeholder", 4, "ngIf"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext", 4, "ngIf"], [3, "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger", "isComposingChange", "valueChange"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "nzNoAnimation", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger", "isComposingChange", "valueChange"], [3, "nzNoAnimation", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete"], [3, "placeholder"]], template: function NzSelectTopControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectTopControlComponent_ng_container_1_Template, 3, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectTopControlComponent_ng_container_2_Template, 3, 8, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectTopControlComponent_nz_select_placeholder_3_Template, 1, 1, "nz-select-placeholder", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowPlaceholder);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], NzSelectSearchComponent,
        NzSelectItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], NzSelectPlaceholderComponent]; }, encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["zoomMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzSelectTopControlComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzSelectTopControlComponent.propDecorators = {
    showSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    open: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxTagCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autofocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxTagPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listOfTopItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tokenSeparators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    tokenize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    inputValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    animationEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    deleteItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    openChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzSelectSearchComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzSelectSearchComponent,] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultFilterOption = (/**
 * @param {?} searchValue
 * @param {?} item
 * @return {?}
 */
(searchValue, item) => {
    if (item && item.nzLabel) {
        return item.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
});
const ɵ0 = defaultFilterOption;
/** @type {?} */
const NZ_CONFIG_COMPONENT_NAME = 'select';
class NzSelectComponent {
    /**
     * @param {?} nzConfigService
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} platform
     * @param {?} focusMonitor
     * @param {?=} noAnimation
     */
    constructor(nzConfigService, cdr, elementRef, platform, focusMonitor, noAnimation) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.platform = platform;
        this.focusMonitor = focusMonitor;
        this.noAnimation = noAnimation;
        this.nzSize = 'default';
        this.nzOptionHeightPx = 32;
        this.nzOptionOverflowSize = 8;
        this.nzDropdownClassName = null;
        this.nzDropdownMatchSelectWidth = true;
        this.nzDropdownStyle = null;
        this.nzNotFoundContent = undefined;
        this.nzPlaceHolder = null;
        this.nzMaxTagCount = Infinity;
        this.nzDropdownRender = null;
        this.nzCustomTemplate = null;
        this.nzSuffixIcon = null;
        this.nzClearIcon = null;
        this.nzRemoveIcon = null;
        this.nzMenuItemSelectedIcon = null;
        this.nzShowArrow = true;
        this.nzTokenSeparators = [];
        this.nzMaxTagPlaceholder = null;
        this.nzMaxMultipleCount = Infinity;
        this.nzMode = 'default';
        this.nzFilterOption = defaultFilterOption;
        this.compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        this.nzAllowClear = false;
        this.nzBorderless = false;
        this.nzShowSearch = false;
        this.nzLoading = false;
        this.nzAutoFocus = false;
        this.nzAutoClearSearchValue = true;
        this.nzServerSearch = false;
        this.nzDisabled = false;
        this.nzOpen = false;
        this.nzOptions = [];
        this.nzOnSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzScrollToBottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nzFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listOfValue$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.listOfTemplateItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.listOfTagAndTemplateItem = [];
        this.searchValue = '';
        this.isReactiveDriven = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onChange = (/**
         * @return {?}
         */
        () => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this.dropDownPosition = 'bottom';
        this.triggerWidth = null;
        this.listOfContainerItem = [];
        this.listOfTopItem = [];
        this.activatedValue = null;
        this.listOfValue = [];
        this.focused = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    generateTagItem(value) {
        return {
            nzValue: value,
            nzLabel: value,
            type: 'item'
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onItemClick(value) {
        this.activatedValue = value;
        if (this.nzMode === 'default') {
            if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
                this.updateListOfValue([value]);
            }
            this.setOpenState(false);
        }
        else {
            /** @type {?} */
            const targetIndex = this.listOfValue.findIndex((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o, value)));
            if (targetIndex !== -1) {
                /** @type {?} */
                const listOfValueAfterRemoved = this.listOfValue.filter((/**
                 * @param {?} _
                 * @param {?} i
                 * @return {?}
                 */
                (_, i) => i !== targetIndex));
                this.updateListOfValue(listOfValueAfterRemoved);
            }
            else if (this.listOfValue.length < this.nzMaxMultipleCount) {
                /** @type {?} */
                const listOfValueAfterAdded = [...this.listOfValue, value];
                this.updateListOfValue(listOfValueAfterAdded);
            }
            this.focus();
            if (this.nzAutoClearSearchValue) {
                this.clearInput();
            }
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemDelete(item) {
        /** @type {?} */
        const listOfSelectedValue = this.listOfValue.filter((/**
         * @param {?} v
         * @return {?}
         */
        v => !this.compareWith(v, item.nzValue)));
        this.updateListOfValue(listOfSelectedValue);
        this.clearInput();
    }
    /**
     * @return {?}
     */
    updateListOfContainerItem() {
        /** @type {?} */
        let listOfContainerItem = this.listOfTagAndTemplateItem
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.nzHide))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (!this.nzServerSearch && this.searchValue) {
                return this.nzFilterOption(this.searchValue, item);
            }
            else {
                return true;
            }
        }));
        if (this.nzMode === 'tags' && this.searchValue) {
            /** @type {?} */
            const matchedItem = this.listOfTagAndTemplateItem.find((/**
             * @param {?} item
             * @return {?}
             */
            item => item.nzLabel === this.searchValue));
            if (!matchedItem) {
                /** @type {?} */
                const tagItem = this.generateTagItem(this.searchValue);
                listOfContainerItem = [tagItem, ...listOfContainerItem];
                this.activatedValue = tagItem.nzValue;
            }
            else {
                this.activatedValue = matchedItem.nzValue;
            }
        }
        if (this.listOfValue.length !== 0 &&
            listOfContainerItem.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, this.activatedValue))) === -1) {
            /** @type {?} */
            const activatedItem = listOfContainerItem.find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(item.nzValue, this.listOfValue[0]))) || listOfContainerItem[0];
            this.activatedValue = (activatedItem && activatedItem.nzValue) || null;
        }
        /** @type {?} */
        let listOfGroupLabel = [];
        if (this.isReactiveDriven) {
            listOfGroupLabel = [...new Set(this.nzOptions.filter((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => o.groupLabel)).map((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => (/** @type {?} */ (o.groupLabel)))))];
        }
        else {
            if (this.listOfNzOptionGroupComponent) {
                listOfGroupLabel = this.listOfNzOptionGroupComponent.map((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => o.nzLabel));
            }
        }
        /** insert group item **/
        listOfGroupLabel.forEach((/**
         * @param {?} label
         * @return {?}
         */
        label => {
            /** @type {?} */
            const index = listOfContainerItem.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => label === item.groupLabel));
            if (index > -1) {
                /** @type {?} */
                const groupItem = (/** @type {?} */ ({ groupLabel: label, type: 'group', key: label }));
                listOfContainerItem.splice(index, 0, groupItem);
            }
        }));
        this.listOfContainerItem = [...listOfContainerItem];
        this.updateCdkConnectedOverlayPositions();
    }
    /**
     * @return {?}
     */
    clearInput() {
        this.nzSelectTopControlComponent.clearInputValue();
    }
    /**
     * @param {?} listOfValue
     * @return {?}
     */
    updateListOfValue(listOfValue) {
        /** @type {?} */
        const covertListToModel = (/**
         * @param {?} list
         * @param {?} mode
         * @return {?}
         */
        (list, mode) => {
            if (mode === 'default') {
                if (list.length > 0) {
                    return list[0];
                }
                else {
                    return null;
                }
            }
            else {
                return list;
            }
        });
        /** @type {?} */
        const model = covertListToModel(listOfValue, this.nzMode);
        if (this.value !== model) {
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.value = model;
            this.onChange(this.value);
        }
    }
    /**
     * @param {?} listOfLabel
     * @return {?}
     */
    onTokenSeparate(listOfLabel) {
        /** @type {?} */
        const listOfMatchedValue = this.listOfTagAndTemplateItem
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => listOfLabel.findIndex((/**
         * @param {?} label
         * @return {?}
         */
        label => label === item.nzLabel)) !== -1))
            .map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzValue))
            .filter((/**
         * @param {?} item
         * @return {?}
         */
        item => this.listOfValue.findIndex((/**
         * @param {?} v
         * @return {?}
         */
        v => this.compareWith(v, item))) === -1));
        if (this.nzMode === 'multiple') {
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue]);
        }
        else if (this.nzMode === 'tags') {
            /** @type {?} */
            const listOfUnMatchedLabel = listOfLabel.filter((/**
             * @param {?} label
             * @return {?}
             */
            label => this.listOfTagAndTemplateItem.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            item => item.nzLabel === label)) === -1));
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
        }
        this.clearInput();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        const listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.type === 'item')).filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !item.nzDisabled));
        /** @type {?} */
        const activatedIndex = listOfFilteredOptionNotDisabled.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        item => this.compareWith(item.nzValue, this.activatedValue)));
        switch (e.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"]:
                e.preventDefault();
                if (this.nzOpen) {
                    /** @type {?} */
                    const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
                    this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]:
                e.preventDefault();
                if (this.nzOpen) {
                    /** @type {?} */
                    const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
                    this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ENTER"]:
                e.preventDefault();
                if (this.nzOpen) {
                    if (this.activatedValue) {
                        this.onItemClick(this.activatedValue);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["SPACE"]:
                if (!this.nzOpen) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["TAB"]:
                this.setOpenState(false);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ESCAPE"]:
                this.setOpenState(false);
                break;
            default:
                if (!this.nzOpen) {
                    this.setOpenState(true);
                }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setOpenState(value) {
        if (this.nzOpen !== value) {
            this.nzOpen = value;
            this.nzOpenChange.emit(value);
            this.onOpenChange();
            this.cdr.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    onOpenChange() {
        this.updateCdkConnectedOverlayStatus();
        this.clearInput();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onInputValueChange(value) {
        this.searchValue = value;
        this.updateListOfContainerItem();
        this.nzOnSearch.emit(value);
        this.updateCdkConnectedOverlayPositions();
    }
    /**
     * @return {?}
     */
    onClearSelection() {
        this.updateListOfValue([]);
    }
    /**
     * @return {?}
     */
    focus() {
        this.nzSelectTopControlComponent.focus();
    }
    /**
     * @return {?}
     */
    blur() {
        this.nzSelectTopControlComponent.blur();
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        this.dropDownPosition = position.connectionPair.originY;
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
        if (this.platform.isBrowser && this.originElement.nativeElement) {
            this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
        }
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayPositions() {
        if (this.cdkConnectedOverlay.overlayRef) {
            this.cdkConnectedOverlay.overlayRef.updatePosition();
        }
    }
    /**
     * @param {?} modelValue
     * @return {?}
     */
    writeValue(modelValue) {
        /** https://github.com/angular/angular/issues/14988 **/
        if (this.value !== modelValue) {
            this.value = modelValue;
            /** @type {?} */
            const covertModelToList = (/**
             * @param {?} model
             * @param {?} mode
             * @return {?}
             */
            (model, mode) => {
                if (model === null || model === undefined) {
                    return [];
                }
                else if (mode === 'default') {
                    return [model];
                }
                else {
                    return model;
                }
            });
            /** @type {?} */
            const listOfValue = covertModelToList(modelValue, this.nzMode);
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.cdr.markForCheck();
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.nzDisabled = disabled;
        if (disabled) {
            this.setOpenState(false);
        }
        this.cdr.markForCheck();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzOpen, nzDisabled, nzOptions } = changes;
        if (nzOpen) {
            this.onOpenChange();
        }
        if (nzDisabled && this.nzDisabled) {
            this.setOpenState(false);
        }
        if (nzOptions) {
            this.isReactiveDriven = true;
            /** @type {?} */
            const listOfOptions = this.nzOptions || [];
            /** @type {?} */
            const listOfTransformedItem = listOfOptions.map((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                return {
                    template: item.label instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] ? item.label : null,
                    nzLabel: typeof item.label === 'string' ? item.label : null,
                    nzValue: item.value,
                    nzDisabled: item.disabled || false,
                    nzHide: item.hide || false,
                    nzCustomContent: item.label instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
                    groupLabel: item.groupLabel || null,
                    type: 'item',
                    key: item.value
                };
            }));
            this.listOfTemplateItem$.next(listOfTransformedItem);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        focusOrigin => {
            if (!focusOrigin) {
                this.focused = false;
                this.cdr.markForCheck();
                this.nzBlur.emit();
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this.onTouched();
                }));
            }
            else {
                this.focused = true;
                this.cdr.markForCheck();
                this.nzFocus.emit();
            }
        }));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.listOfValue$, this.listOfTemplateItem$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([listOfSelectedValue, listOfTemplateItem]) => {
            /** @type {?} */
            const listOfTagItem = listOfSelectedValue
                .filter((/**
             * @return {?}
             */
            () => this.nzMode === 'tags'))
                .filter((/**
             * @param {?} value
             * @return {?}
             */
            value => listOfTemplateItem.findIndex((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, value))) === -1))
                .map((/**
             * @param {?} value
             * @return {?}
             */
            value => this.listOfTopItem.find((/**
             * @param {?} o
             * @return {?}
             */
            o => this.compareWith(o.nzValue, value))) || this.generateTagItem(value)));
            this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
            this.listOfTopItem = this.listOfValue
                .map((/**
             * @param {?} v
             * @return {?}
             */
            v => (/** @type {?} */ ([...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find((/**
             * @param {?} item
             * @return {?}
             */
            item => this.compareWith(v, item.nzValue)))))))
                .filter((/**
             * @param {?} item
             * @return {?}
             */
            item => !!item));
            this.updateListOfContainerItem();
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateCdkConnectedOverlayStatus();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.isReactiveDriven) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((/**
             * @return {?}
             */
            () => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(...[
                this.listOfNzOptionComponent.changes,
                this.listOfNzOptionGroupComponent.changes,
                ...this.listOfNzOptionComponent.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.changes)),
                ...this.listOfNzOptionGroupComponent.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => option.changes))
            ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(true)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                .subscribe((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    const { template, nzLabel, nzValue, nzDisabled, nzHide, nzCustomContent, groupLabel } = item;
                    return { template, nzLabel, nzValue, nzDisabled, nzHide, nzCustomContent, groupLabel, type: 'item', key: nzValue };
                }));
                this.listOfTemplateItem$.next(listOfOptionInterface);
                this.cdr.markForCheck();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSelectComponent.ɵfac = function NzSelectComponent_Factory(t) { return new (t || NzSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], 9)); };
NzSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectComponent, selectors: [["nz-select"]], contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NzOptionGroupComponent, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionComponent = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listOfNzOptionGroupComponent = _t);
    } }, viewQuery: function NzSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzSelectTopControlComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzOptionGroupComponent, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](NzSelectTopControlComponent, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.originElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cdkConnectedOverlay = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzOptionGroupComponentElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nzSelectTopControlComponentElement = _t.first);
    } }, hostVars: 24, hostBindings: function NzSelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select", true)("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-show-arrow", ctx.nzShowArrow && ctx.nzMode === "default")("ant-select-disabled", ctx.nzDisabled)("ant-select-show-search", ctx.nzShowSearch || ctx.nzMode !== "default")("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-borderless", ctx.nzBorderless)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused)("ant-select-single", ctx.nzMode === "default")("ant-select-multiple", ctx.nzMode !== "default");
    } }, inputs: { nzSize: "nzSize", nzOptionHeightPx: "nzOptionHeightPx", nzOptionOverflowSize: "nzOptionOverflowSize", nzDropdownClassName: "nzDropdownClassName", nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth", nzDropdownStyle: "nzDropdownStyle", nzNotFoundContent: "nzNotFoundContent", nzPlaceHolder: "nzPlaceHolder", nzMaxTagCount: "nzMaxTagCount", nzDropdownRender: "nzDropdownRender", nzCustomTemplate: "nzCustomTemplate", nzSuffixIcon: "nzSuffixIcon", nzClearIcon: "nzClearIcon", nzRemoveIcon: "nzRemoveIcon", nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon", nzShowArrow: "nzShowArrow", nzTokenSeparators: "nzTokenSeparators", nzMaxTagPlaceholder: "nzMaxTagPlaceholder", nzMaxMultipleCount: "nzMaxMultipleCount", nzMode: "nzMode", nzFilterOption: "nzFilterOption", compareWith: "compareWith", nzAllowClear: "nzAllowClear", nzBorderless: "nzBorderless", nzShowSearch: "nzShowSearch", nzLoading: "nzLoading", nzAutoFocus: "nzAutoFocus", nzAutoClearSearchValue: "nzAutoClearSearchValue", nzServerSearch: "nzServerSearch", nzDisabled: "nzDisabled", nzOpen: "nzOpen", nzOptions: "nzOptions" }, outputs: { nzOnSearch: "nzOnSearch", nzScrollToBottom: "nzScrollToBottom", nzOpenChange: "nzOpenChange", nzBlur: "nzBlur", nzFocus: "nzFocus" }, exportAs: ["nzSelect"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */() => NzSelectComponent)),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 23, consts: [["cdkOverlayOrigin", "", 3, "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem", "inputValueChange", "tokenize", "animationEnd", "deleteItem", "keydown", "openChange"], ["origin", "cdkOverlayOrigin"], [3, "clearIcon", "clear", 4, "ngIf"], [3, "loading", "search", "suffixIcon", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "backdropClick", "detach", "positionChange"], [3, "clearIcon", "clear"], [3, "loading", "search", "suffixIcon"], [3, "ngStyle", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode", "keydown", "itemClick", "scrollToBottom"]], template: function NzSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select-top-control", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputValueChange", function NzSelectComponent_Template_nz_select_top_control_inputValueChange_0_listener($event) { return ctx.onInputValueChange($event); })("tokenize", function NzSelectComponent_Template_nz_select_top_control_tokenize_0_listener($event) { return ctx.onTokenSeparate($event); })("animationEnd", function NzSelectComponent_Template_nz_select_top_control_animationEnd_0_listener() { return ctx.updateCdkConnectedOverlayPositions(); })("deleteItem", function NzSelectComponent_Template_nz_select_top_control_deleteItem_0_listener($event) { return ctx.onItemDelete($event); })("keydown", function NzSelectComponent_Template_nz_select_top_control_keydown_0_listener($event) { return ctx.onKeyDown($event); })("openChange", function NzSelectComponent_Template_nz_select_top_control_openChange_0_listener($event) { return ctx.setOpenState($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzSelectComponent_nz_select_clear_2_Template, 1, 1, "nz-select-clear", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzSelectComponent_nz_select_arrow_3_Template, 1, 3, "nz-select-arrow", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NzSelectComponent_ng_template_4_Template, 1, 19, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function NzSelectComponent_Template_ng_template_backdropClick_4_listener() { return ctx.setOpenState(false); })("detach", function NzSelectComponent_Template_ng_template_detach_4_listener() { return ctx.setOpenState(false); })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_4_listener($event) { return ctx.onPositionChange($event); });
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("mode", ctx.nzMode)("@.disabled", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("maxTagPlaceholder", ctx.nzMaxTagPlaceholder)("removeIcon", ctx.nzRemoveIcon)("placeHolder", ctx.nzPlaceHolder)("maxTagCount", ctx.nzMaxTagCount)("customTemplate", ctx.nzCustomTemplate)("tokenSeparators", ctx.nzTokenSeparators)("showSearch", ctx.nzShowSearch)("autofocus", ctx.nzAutoFocus)("listOfTopItem", ctx.listOfTopItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.listOfValue.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nzShowArrow && ctx.nzMode === "default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown")("cdkConnectedOverlayPanelClass", ctx.nzDropdownClassName)("cdkConnectedOverlayOpen", ctx.nzOpen);
    } }, directives: function () { return [ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], NzSelectTopControlComponent, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzConnectedOverlayDirective"], NzSelectClearComponent,
        NzSelectArrowComponent,
        NzOptionContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"]]; }, encapsulation: 2, data: { animation: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["slideMotion"]] }, changeDetection: 0 });
/** @nocollapse */
NzSelectComponent.ctorParameters = () => [
    { type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] },
    { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
NzSelectComponent.propDecorators = {
    nzSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOptionHeightPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOptionOverflowSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDropdownClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDropdownMatchSelectWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDropdownStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzNotFoundContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzPlaceHolder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMaxTagCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDropdownRender: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzCustomTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzSuffixIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzClearIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzRemoveIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMenuItemSelectedIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzShowArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzTokenSeparators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMaxTagPlaceholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMaxMultipleCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzFilterOption: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAllowClear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzBorderless: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzShowSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAutoFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzAutoClearSearchValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzServerSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    nzOnSearch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzScrollToBottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzOpenChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    nzFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    originElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
    cdkConnectedOverlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], { static: true },] }],
    nzSelectTopControlComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzSelectTopControlComponent, { static: true },] }],
    listOfNzOptionComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NzOptionComponent, { descendants: true },] }],
    listOfNzOptionGroupComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [NzOptionGroupComponent, { descendants: true },] }],
    nzOptionGroupComponentElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzOptionGroupComponent, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }],
    nzSelectTopControlComponentElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [NzSelectTopControlComponent, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzSuffixIcon", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzAllowClear", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["WithConfig"])(NZ_CONFIG_COMPONENT_NAME), Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzBorderless", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzShowSearch", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzLoading", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzAutoFocus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzAutoClearSearchValue", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzServerSearch", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_4__["InputBoolean"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
], NzSelectComponent.prototype, "nzOpen", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-option-group',
                exportAs: 'nzOptionGroup',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: ` <ng-content></ng-content> `
            }]
    }], function () { return []; }, { nzLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-option-container',
                exportAs: 'nzOptionContainer',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                preserveWhitespaces: false,
                template: `
    <div>
      <div *ngIf="listOfContainerItem.length === 0" class="ant-select-item-empty">
        <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!"></nz-embed-empty>
      </div>
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize * maxItemLength"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          <ng-container [ngSwitch]="item.type">
            <nz-option-item-group *ngSwitchCase="'group'" [nzLabel]="item.groupLabel"></nz-option-item-group>
            <nz-option-item
              *ngSwitchCase="'item'"
              [icon]="menuItemSelectedIcon"
              [customContent]="item.nzCustomContent"
              [template]="item.template"
              [grouped]="!!item.groupLabel"
              [disabled]="item.nzDisabled"
              [showState]="mode === 'tags' || mode === 'multiple'"
              [label]="item.nzLabel"
              [compareWith]="compareWith"
              [activatedValue]="activatedValue"
              [listOfSelectedValue]="listOfSelectedValue"
              [value]="item.nzValue"
              (itemHover)="onItemHover($event)"
              (itemClick)="onItemClick($event)"
            ></nz-option-item>
          </ng-container>
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender"></ng-template>
    </div>
  `,
                host: {
                    '[class.ant-select-dropdown]': 'true'
                }
            }]
    }], function () { return []; }, { notFoundContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], menuItemSelectedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dropdownRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activatedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listOfSelectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], matchWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxItemLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listOfContainerItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scrollToBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cdkVirtualScrollViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-option',
                exportAs: 'nzOption',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
            }]
    }], function () { return [{ type: NzOptionGroupComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { nzLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCustomContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], { static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-search',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <input
      #inputElement
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `,
                host: {
                    '[class.ant-select-selection-search]': 'true'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mirrorSync: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], focusTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isComposingChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['inputElement', { static: true }]
        }], mirrorElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mirrorElement', { static: false }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectTopControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-top-control',
                exportAs: 'nzSelectTopControl',
                preserveWhitespaces: false,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["zoomMotion"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <nz-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].nzLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></nz-select-item>
        <nz-select-search
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="open && showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <nz-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [@zoomMotion]
          [@.disabled]="noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          [removeIcon]="removeIcon"
          [label]="item.nzLabel"
          [disabled]="item.nzDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (@zoomMotion.done)="onAnimationEnd()"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        >
        </nz-select-item>
        <nz-select-search
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
      </ng-container>
    </ng-container>
    <nz-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></nz-select-placeholder>
  `,
                host: {
                    '[class.ant-select-selector]': 'true',
                    '(click)': 'onHostClick()',
                    '(keydown)': 'onHostKeydown($event)'
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { showSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxTagCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxTagPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listOfTopItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tokenSeparators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tokenize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], inputValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], animationEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deleteItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], openChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzSelectSearchComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzSelectSearchComponent]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select',
                exportAs: 'nzSelect',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                         * @return {?}
                         */() => NzSelectComponent)),
                        multi: true
                    }
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: [ng_zorro_antd_core_animation__WEBPACK_IMPORTED_MODULE_11__["slideMotion"]],
                template: `
    <nz-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [open]="nzOpen"
      [disabled]="nzDisabled"
      [mode]="nzMode"
      [@.disabled]="noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [maxTagPlaceholder]="nzMaxTagPlaceholder"
      [removeIcon]="nzRemoveIcon"
      [placeHolder]="nzPlaceHolder"
      [maxTagCount]="nzMaxTagCount"
      [customTemplate]="nzCustomTemplate"
      [tokenSeparators]="nzTokenSeparators"
      [showSearch]="nzShowSearch"
      [autofocus]="nzAutoFocus"
      [listOfTopItem]="listOfTopItem"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (animationEnd)="updateCdkConnectedOverlayPositions()"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
      (openChange)="setOpenState($event)"
    ></nz-select-top-control>
    <nz-select-clear
      *ngIf="nzAllowClear && !nzDisabled && listOfValue.length"
      [clearIcon]="nzClearIcon"
      (clear)="onClearSelection()"
    ></nz-select-clear>
    <nz-select-arrow
      *ngIf="nzShowArrow && nzMode === 'default'"
      [loading]="nzLoading"
      [search]="nzOpen && nzShowSearch"
      [suffixIcon]="nzSuffixIcon"
    ></nz-select-arrow>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-dropdown'"
      [cdkConnectedOverlayPanelClass]="nzDropdownClassName!"
      (backdropClick)="setOpenState(false)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
      [cdkConnectedOverlayOpen]="nzOpen"
    >
      <nz-option-container
        [ngStyle]="nzDropdownStyle"
        [itemSize]="nzOptionHeightPx"
        [maxItemLength]="nzOptionOverflowSize"
        [matchWidth]="nzDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottom'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'top'"
        [@slideMotion]="'enter'"
        [@.disabled]="noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="nzMenuItemSelectedIcon"
        [notFoundContent]="nzNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="nzDropdownRender"
        [compareWith]="compareWith"
        [mode]="nzMode"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="nzScrollToBottom.emit()"
      ></nz-option-container>
    </ng-template>
  `,
                host: {
                    '[class.ant-select]': 'true',
                    '[class.ant-select-lg]': 'nzSize === "large"',
                    '[class.ant-select-sm]': 'nzSize === "small"',
                    '[class.ant-select-show-arrow]': `nzShowArrow && nzMode === 'default'`,
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-show-search]': `nzShowSearch || nzMode !== 'default'`,
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-borderless]': 'nzBorderless',
                    '[class.ant-select-open]': 'nzOpen',
                    '[class.ant-select-focused]': 'nzOpen || focused',
                    '[class.ant-select-single]': `nzMode === 'default'`,
                    '[class.ant-select-multiple]': `nzMode !== 'default'`
                }
            }]
    }], function () { return [{ type: ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_12__["NzConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }, { type: ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { nzSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOptionHeightPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOptionOverflowSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDropdownClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDropdownMatchSelectWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDropdownStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzNotFoundContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzPlaceHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMaxTagCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDropdownRender: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzCustomTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzSuffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzClearIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzRemoveIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMenuItemSelectedIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzShowArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzTokenSeparators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMaxTagPlaceholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMaxMultipleCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzFilterOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzAllowClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzBorderless: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzShowSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzAutoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzAutoClearSearchValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzServerSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nzOnSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzScrollToBottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzOpenChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], nzFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], originElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], cdkConnectedOverlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], { static: true }]
        }], nzSelectTopControlComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzSelectTopControlComponent, { static: true }]
        }], listOfNzOptionComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzOptionComponent, { descendants: true }]
        }], listOfNzOptionGroupComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [NzOptionGroupComponent, { descendants: true }]
        }], nzOptionGroupComponentElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzOptionGroupComponent, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }], nzSelectTopControlComponentElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [NzSelectTopControlComponent, { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: option-item-group.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzOptionItemGroupComponent {
    constructor() {
        this.nzLabel = null;
    }
}
NzOptionItemGroupComponent.ɵfac = function NzOptionItemGroupComponent_Factory(t) { return new (t || NzOptionItemGroupComponent)(); };
NzOptionItemGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionItemGroupComponent, selectors: [["nz-option-item-group"]], hostVars: 4, hostBindings: function NzOptionItemGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-item", true)("ant-select-item-group", true);
    } }, inputs: { nzLabel: "nzLabel" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"]], template: function NzOptionItemGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzLabel);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzOptionItemGroupComponent.propDecorators = {
    nzLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionItemGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-option-item-group',
                template: ` <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container> `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: {
                    '[class.ant-select-item]': 'true',
                    '[class.ant-select-item-group]': 'true'
                }
            }]
    }], function () { return []; }, { nzLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: option-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzOptionItemComponent {
    constructor() {
        this.selected = false;
        this.activated = false;
        this.grouped = false;
        this.customContent = false;
        this.template = null;
        this.disabled = false;
        this.showState = false;
        this.label = null;
        this.value = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.icon = null;
        this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    onHostMouseEnter() {
        if (!this.disabled) {
            this.itemHover.next(this.value);
        }
    }
    /**
     * @return {?}
     */
    onHostClick() {
        if (!this.disabled) {
            this.itemClick.next(this.value);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { value, activatedValue, listOfSelectedValue } = changes;
        if (value || listOfSelectedValue) {
            this.selected = this.listOfSelectedValue.some((/**
             * @param {?} v
             * @return {?}
             */
            v => this.compareWith(v, this.value)));
        }
        if (value || activatedValue) {
            this.activated = this.compareWith(this.activatedValue, this.value);
        }
    }
}
NzOptionItemComponent.ɵfac = function NzOptionItemComponent_Factory(t) { return new (t || NzOptionItemComponent)(); };
NzOptionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzOptionItemComponent, selectors: [["nz-option-item"]], hostVars: 12, hostBindings: function NzOptionItemComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function NzOptionItemComponent_mouseenter_HostBindingHandler() { return ctx.onHostMouseEnter(); })("click", function NzOptionItemComponent_click_HostBindingHandler() { return ctx.onHostClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-item", true)("ant-select-item-option", true)("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
    } }, inputs: { grouped: "grouped", customContent: "customContent", template: "template", disabled: "disabled", showState: "showState", label: "label", value: "value", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", icon: "icon", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", itemHover: "itemHover" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 3, consts: [[1, "ant-select-item-option-content"], [4, "ngIf"], ["class", "ant-select-item-option-state", "style", "user-select: none", "unselectable", "on", 4, "ngIf"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state", 2, "user-select", "none"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]], template: function NzOptionItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzOptionItemComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NzOptionItemComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NzOptionItemComponent_div_3_Template, 2, 2, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.customContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showState && ctx.selected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
NzOptionItemComponent.propDecorators = {
    grouped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    customContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activatedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    listOfSelectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    itemClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzOptionItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-option-item',
                template: `
    <div class="ant-select-item-option-content">
      <ng-container *ngIf="!customContent">{{ label }}</ng-container>
      <ng-container *ngIf="customContent">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </ng-container>
    </div>
    <div *ngIf="showState && selected" class="ant-select-item-option-state" style="user-select: none" unselectable="on">
      <i nz-icon nzType="check" class="ant-select-selected-icon" *ngIf="!icon; else icon"></i>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: {
                    '[class.ant-select-item]': 'true',
                    '[class.ant-select-item-option]': 'true',
                    '[class.ant-select-item-option-grouped]': 'grouped',
                    '[class.ant-select-item-option-selected]': 'selected && !disabled',
                    '[class.ant-select-item-option-disabled]': 'disabled',
                    '[class.ant-select-item-option-active]': 'activated && !disabled',
                    '(mouseenter)': 'onHostMouseEnter()',
                    '(click)': 'onHostClick()'
                }
            }]
    }], function () { return []; }, { grouped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activatedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], listOfSelectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-arrow.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectArrowComponent {
    constructor() {
        this.loading = false;
        this.search = false;
        this.suffixIcon = null;
    }
}
NzSelectArrowComponent.ɵfac = function NzSelectArrowComponent_Factory(t) { return new (t || NzSelectArrowComponent)(); };
NzSelectArrowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectArrowComponent, selectors: [["nz-select-arrow"]], hostVars: 4, hostBindings: function NzSelectArrowComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-arrow", true)("ant-select-arrow-loading", ctx.loading);
    } }, inputs: { loading: "loading", search: "search", suffixIcon: "suffixIcon" }, decls: 3, vars: 2, consts: [["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], ["defaultArrow", ""], ["nz-icon", "", "nzType", "loading"], [4, "ngIf", "ngIfElse"], ["suffixTemplate", ""], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "search", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], ["nz-icon", "", "nzType", "search"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]], template: function NzSelectArrowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectArrowComponent_i_0_Template, 1, 0, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectArrowComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzSelectArrowComponent.propDecorators = {
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    suffixIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectArrowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-arrow',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <i nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></i>
    <ng-template #defaultArrow>
      <ng-container *ngIf="!suffixIcon; else suffixTemplate">
        <i nz-icon nzType="down" *ngIf="!search"></i>
        <i nz-icon nzType="search" *ngIf="search"></i>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <i nz-icon [nzType]="suffixIcon"></i>
        </ng-container>
      </ng-template>
    </ng-template>
  `,
                host: {
                    '[class.ant-select-arrow]': 'true',
                    '[class.ant-select-arrow-loading]': 'loading'
                }
            }]
    }], function () { return []; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], suffixIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-clear.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectClearComponent {
    constructor() {
        this.clearIcon = null;
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.clear.emit(e);
    }
}
NzSelectClearComponent.ɵfac = function NzSelectClearComponent_Factory(t) { return new (t || NzSelectClearComponent)(); };
NzSelectClearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectClearComponent, selectors: [["nz-select-clear"]], hostVars: 2, hostBindings: function NzSelectClearComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NzSelectClearComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-clear", true);
    } }, inputs: { clearIcon: "clearIcon" }, outputs: { clear: "clear" }, decls: 1, vars: 2, consts: [["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]], template: function NzSelectClearComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectClearComponent_i_0_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.clearIcon)("ngIfElse", ctx.clearIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
NzSelectClearComponent.propDecorators = {
    clearIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    clear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectClearComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-clear',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: ` <i nz-icon nzType="close-circle" nzTheme="fill" *ngIf="!clearIcon; else clearIcon" class="ant-select-close-icon"></i> `,
                host: {
                    '(click)': 'onClick($event)',
                    '[class.ant-select-clear]': 'true'
                }
            }]
    }], function () { return []; }, { clearIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectItemComponent {
    constructor() {
        this.disabled = false;
        this.label = null;
        this.deletable = false;
        this.removeIcon = null;
        this.contentTemplateOutletContext = null;
        this.contentTemplateOutlet = null;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDelete(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.disabled) {
            this.delete.next(e);
        }
    }
}
NzSelectItemComponent.ɵfac = function NzSelectItemComponent_Factory(t) { return new (t || NzSelectItemComponent)(); };
NzSelectItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectItemComponent, selectors: [["nz-select-item"]], hostVars: 5, hostBindings: function NzSelectItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-item", true)("ant-select-selection-item-disabled", ctx.disabled);
    } }, inputs: { disabled: "disabled", label: "label", deletable: "deletable", removeIcon: "removeIcon", contentTemplateOutletContext: "contentTemplateOutletContext", contentTemplateOutlet: "contentTemplateOutlet" }, outputs: { delete: "delete" }, decls: 2, vars: 5, consts: [[4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-select-selection-item-remove", 3, "click", 4, "ngIf"], ["class", "ant-select-selection-item-content", 4, "ngIf", "ngIfElse"], ["labelTemplate", ""], [1, "ant-select-selection-item-content"], [1, "ant-select-selection-item-remove", 3, "click"], ["nz-icon", "", "nzType", "close", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]], template: function NzSelectItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectItemComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NzSelectItemComponent_span_1_Template, 2, 2, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx.contentTemplateOutletContext));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deletable && !ctx.disabled);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchDirective"]], encapsulation: 2, changeDetection: 0 });
NzSelectItemComponent.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    deletable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    removeIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    contentTemplateOutletContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    contentTemplateOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-item',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <i nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></i>
    </span>
  `,
                host: {
                    '[attr.title]': 'label',
                    '[class.ant-select-selection-item]': 'true',
                    '[class.ant-select-selection-item-disabled]': 'disabled'
                }
            }]
    }], function () { return []; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deletable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentTemplateOutletContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentTemplateOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], delete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select-placeholder.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectPlaceholderComponent {
    constructor() {
        this.placeholder = null;
    }
}
NzSelectPlaceholderComponent.ɵfac = function NzSelectPlaceholderComponent_Factory(t) { return new (t || NzSelectPlaceholderComponent)(); };
NzSelectPlaceholderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NzSelectPlaceholderComponent, selectors: [["nz-select-placeholder"]], hostVars: 2, hostBindings: function NzSelectPlaceholderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ant-select-selection-placeholder", true);
    } }, inputs: { placeholder: "placeholder" }, decls: 1, vars: 1, consts: [[4, "nzStringTemplateOutlet"]], template: function NzSelectPlaceholderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NzSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.placeholder);
    } }, directives: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzStringTemplateOutletDirective"]], encapsulation: 2, changeDetection: 0 });
NzSelectPlaceholderComponent.propDecorators = {
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectPlaceholderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nz-select-placeholder',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `,
                host: {
                    '[class.ant-select-selection-placeholder]': 'true'
                }
            }]
    }], function () { return []; }, { placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: select.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSelectModule {
}
NzSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NzSelectModule });
NzSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NzSelectModule_Factory(t) { return new (t || NzSelectModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__["NzI18nModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
            ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"],
            ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmptyModule"],
            ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzOverlayModule"],
            ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationModule"],
            ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NzSelectModule, { declarations: function () { return [NzOptionComponent,
        NzSelectComponent,
        NzOptionContainerComponent,
        NzOptionGroupComponent,
        NzOptionItemComponent,
        NzSelectTopControlComponent,
        NzSelectSearchComponent,
        NzSelectItemComponent,
        NzSelectClearComponent,
        NzSelectArrowComponent,
        NzSelectPlaceholderComponent,
        NzOptionItemGroupComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
        ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__["NzI18nModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
        ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"],
        ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmptyModule"],
        ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzOverlayModule"],
        ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationModule"],
        ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]]; }, exports: function () { return [NzOptionComponent,
        NzSelectComponent,
        NzOptionGroupComponent,
        NzSelectArrowComponent,
        NzSelectClearComponent,
        NzSelectItemComponent,
        NzSelectPlaceholderComponent,
        NzSelectSearchComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NzSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
                    ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_19__["NzI18nModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["PlatformModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
                    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconModule"],
                    ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_15__["NzOutletModule"],
                    ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_18__["NzEmptyModule"],
                    ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_16__["NzOverlayModule"],
                    ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_13__["NzNoAnimationModule"],
                    ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_17__["ɵNzTransitionPatchModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"]
                ],
                declarations: [
                    NzOptionComponent,
                    NzSelectComponent,
                    NzOptionContainerComponent,
                    NzOptionGroupComponent,
                    NzOptionItemComponent,
                    NzSelectTopControlComponent,
                    NzSelectSearchComponent,
                    NzSelectItemComponent,
                    NzSelectClearComponent,
                    NzSelectArrowComponent,
                    NzSelectPlaceholderComponent,
                    NzOptionItemGroupComponent
                ],
                exports: [
                    NzOptionComponent,
                    NzSelectComponent,
                    NzOptionGroupComponent,
                    NzSelectArrowComponent,
                    NzSelectClearComponent,
                    NzSelectItemComponent,
                    NzSelectPlaceholderComponent,
                    NzSelectSearchComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: select.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * @record
 */
function NzSelectItemInterface() { }
if (false) {}
/**
 * @record
 */
function NzSelectOptionInterface() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-zorro-antd-select.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-zorro-antd-select.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/results/results.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/results/results.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <div class=\"p-3 bg-color2 row justify-content-between align-items-center m-0\">\n    <button [routerLink]=\"['/tabs']\" class=\"btn5 pt-2 pb-2\">Regresar</button>\n    <p class=\"titlep mt-2 text-white\">{{formatId(id)}}</p>\n    <div class=\"row align-items-center m-0\">\n      <img [routerLink]=\"['/tabs']\" width=\"60\" src=\"/assets/img/logo.jpeg\">\n    </div>\n  </div>\n</ion-header>\n\n<div *ngIf=\"isVisibleModal\" id=\"modal\" class=\"row justify-content-center align-items-center m-0\">\n  <div class=\"contentModal bg-white col-11 row justify-content-center align-items-center m-0 p-4\">\n    <h4>¡Advertencia! </h4>\n    <p class=\"mt-3\">{{contentModal}}</p>\n    <button class=\"btn1 mt-4 pt-2 pb-2 \" (click)=\"closeModal()\">Aceptar</button>\n  </div>\n</div>\n\n<ion-content>\n  <div class=\"p-3 row m-0\" >\n\n        <div class=\"col-12 p-0 mb-4 row m-0 align-items-center\">\n          <nz-select class=\"select100 mr-2\" [nzMaxTagCount]=\"3\" [nzMaxTagPlaceholder]=\"tagPlaceHolder\" nzMode=\"multiple\"\n            nzPlaceHolder=\"Filtrar por distritos\" [(ngModel)]=\"districts\" >\n            <nz-option *ngFor=\"let item of listOptionsDistrict\" [nzLabel]=\"item\" [nzValue]=\"item\"></nz-option>\n          </nz-select>\n          <ng-template #tagPlaceHolder let-selectedList> y {{ selectedList.length }} más seleccionados </ng-template>\n          <button (click)=onDistrictChange() class=\"btn1 pt-2 pb-2\">Filtrar</button>\n        </div>\n\n\n        <div *ngFor=\"let companyData of companiesData\"  class=\"item row m-0 col-12 p-0 mb-4\">\n            <div [routerLink]=\"['/tabs/home/profile/'+companyData.id]\" class=\"col-12 m-0 p-0 row justify-content-center\">\n                <div *ngIf=\"companyData.image\" class=\"img-item\" [ngStyle]=\"{'background-image': 'url('+companyData.image+')'}\"></div>    \n                <div *ngIf=\"!companyData.image\" class=\"img-item\"></div>            \n            </div>\n            <div class=\"p-3 col-12\">\n                <div [routerLink]=\"['/tabs/home/profile/'+companyData.id]\" class=\"row m-0 justify-content-between\">\n                    <span class=\"f-11 font-700\">{{companyData.comercialname}}</span>\n                    <div class=\"row m-0\">\n                      <img *ngIf=\"companyData.tienda\" width=\"22\" class=\"ml-2\" src=\"/assets/img/icons/tienda.png\" alt=\"Recojo en tienda\">\n                      <img *ngIf=\"companyData.delivery\" width=\"22\" class=\"ml-2\" src=\"/assets/img/icons/delivery.png\" alt=\"Delivery\">\n                    </div>\n                    <div class=\"col-12 p-0\">\n                      <span class=\"f-11 font-700 text-color6\">{{companyData.distance == 1000000 ? '-': companyData.distance }} Km</span>\n                      <!-- <span class=\"f-11 font-700 text-color6 ml-2\">{{companyData.district }}</span> -->\n                    </div>\n                    <div *ngIf=\"companyData.starthour && companyData.endhour\" class=\"col-12 p-0 m-0 row align-items-end\">\n                        <img *ngIf=\"general.apertura(companyData.starthour, companyData.endhour)\" width=\"34\" class=\"\" src=\"/assets/img/icons/open.svg\" alt=\"Abierto\">\n                        <img *ngIf=\"!general.apertura(companyData.starthour, companyData.endhour)\" width=\"34\" class=\"\" src=\"/assets/img/icons/close.svg\" alt=\"Cerrado\">\n                        <span class=\"f-11 font-700 text-color6 ml-2\">{{companyData.starthour }}</span>\n                        <span class=\"f-11 font-700 text-color6 ml-2\">- {{companyData.endhour }}</span>\n                    </div>\n                </div>\n                <div [routerLink]=\"['/tabs/home/profile/'+companyData.id]\" class=\"row m-0 justify-content-between mt-2\">\n                    <p class=\"f-10\" *ngIf=\"companyData.address2 && companyData.address2 != '' && companyData.address2 != 'null'\">{{companyData.address2.substring(0,80)}}<ng-container *ngIf=\"companyData.address2.length > 79\">...</ng-container></p>         \n                </div>   \n                <div class=\"row m-0 justify-content-between align-items-start\">\n                    <div class=\"row m-0\">\n                        <a (click)=\"general.saveEvent('call', companyData.id)\" href=\"tel:{{companyData.phone1}}\" class=\"btn1 flex-1 pt-2 pb-2 mr-2 font-700 text-center link-unstyled\">LLAMADA</a>\n                        <button (click)=\"message(companyData.userid, companyData.id, companyData.phone1)\" class=\"btn2 flex-1 pt-2 pb-2 font-700\">WHATSAPP</button>\n                    </div>\n                    <div>\n                        <img (click)=\"addFeaturedCompanies(companyData.id, $event)\" width=\"30\" [src]=\"companyData.idfeatured ? '/assets/img/partials/star.svg' : '/assets/img/partials/star-g.svg'\" alt=\"\">\n                        <img (click)=\"share(companyData.url, companyData.comercialname)\" width=\"22\" class=\"ml-2\" src=\"/assets/img/partials/share.svg\" alt=\"\">\n                    </div>\n                   \n                   \n                </div>            \n            </div>\n        </div>\n\n    </div>\n    <div #map id=\"map\"></div>\n\n</ion-content>\n\n\n\n<div *ngIf=\"isLoad\" class=\"load\">\n  <img src=\"/assets/img/partials/load.svg\">\n</div>");

/***/ }),

/***/ "./src/app/pages/tabs/home/results/results-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/home/results/results-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ResultsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageRoutingModule", function() { return ResultsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _results_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results.page */ "./src/app/pages/tabs/home/results/results.page.ts");




const routes = [
    {
        path: '',
        component: _results_page__WEBPACK_IMPORTED_MODULE_3__["ResultsPage"]
    }
];
let ResultsPageRoutingModule = class ResultsPageRoutingModule {
};
ResultsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResultsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/home/results/results.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/home/results/results.module.ts ***!
  \***********************************************************/
/*! exports provided: ResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageModule", function() { return ResultsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _results_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./results-routing.module */ "./src/app/pages/tabs/home/results/results-routing.module.ts");
/* harmony import */ var _results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./results.page */ "./src/app/pages/tabs/home/results/results.page.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");










let ResultsPageModule = class ResultsPageModule {
};
ResultsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _results_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultsPageRoutingModule"],
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__["NzModalModule"],
            ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectModule"]
        ],
        declarations: [_results_page__WEBPACK_IMPORTED_MODULE_6__["ResultsPage"]],
        providers: [
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]
        ]
    })
], ResultsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/home/results/results.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/home/results/results.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* FONTS */\n.titlep {\n  max-width: 50%;\n  text-align: center;\n}\n.linea {\n  border-bottom: solid 3px #e6e6e6;\n}\n.content {\n  min-height: 100vh;\n}\n.content .menu p {\n  min-width: 20px;\n  min-height: 2px;\n  background-color: white;\n}\n.content .search {\n  flex: 1;\n  position: relative;\n}\n.content .search ::-moz-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.content .search ::-ms-input-placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.content .search ::placeholder {\n  color: #808080;\n  font-size: 12pt;\n}\n.content .search img {\n  position: absolute;\n  top: 27%;\n  left: 20px;\n  max-width: 26px;\n}\n.content .search input {\n  font-size: 12pt;\n  width: 100%;\n  border: 2.5px solid #ffe266;\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0);\n  color: #333333;\n  border-radius: 50px;\n  padding-left: 58px;\n  min-height: 60px;\n}\n.content .search :focus {\n  outline: 0;\n}\n.content .search button {\n  border-radius: 50px !important;\n  position: absolute;\n  right: 0px;\n  top: 3px;\n}\n.item {\n  box-shadow: 1px 3px 8px 5px #c2c2c2;\n  border-radius: 10px;\n}\n.item .img-item {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-color: #c2c2c2;\n  border-radius: 10px 10px 0 0;\n  max-width: 100%;\n  min-width: 100%;\n  max-height: 90.8vw;\n  min-height: 90.8vw;\n}\n.load {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-width: 100vw;\n  min-height: 100vh;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.load img {\n  opacity: 0.9;\n}\n:focus {\n  outline: 0;\n}\n.img-item2 {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  min-height: 360px !important;\n  min-width: 100% !important;\n}\nbutton:disabled {\n  background-color: #e6e6e6 !important;\n}\nnz-select {\n  flex: 1;\n  max-width: 60%;\n}\nnz-select:hover, nz-select:focus {\n  border: 2px solid #ffe266 !important;\n  border-radius: 8px;\n}\nnz-select {\n  border: 2px solid #ffe266 !important;\n  border-radius: 8px;\n}\n.ant-select-focused.ant-select-multiple .ant-select-selector {\n  border-color: #13bf9e !important;\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9ob21lL3Jlc3VsdHMvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFicy9ob21lL3Jlc3VsdHMvQzpcXHdhbXA2NFxcd3d3XFx2YW9wZXJ1L3NyY1xcYXBwXFxwYWdlc1xcdGFic1xcaG9tZVxccmVzdWx0c1xccmVzdWx0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYnMvaG9tZS9yZXN1bHRzL3Jlc3VsdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQUE7QUNFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxnQ0FBQTtBQ0FKO0FER0E7RUFDSSxpQkFBQTtBQ0FKO0FERVE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQVo7QURHSTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtBQ0RSO0FERVE7RUFDSSxjRFhIO0VDWUcsZUFBQTtBQ0FaO0FERlE7RUFDSSxjRFhIO0VDWUcsZUFBQTtBQ0FaO0FERlE7RUFDSSxjRFhIO0VDWUcsZUFBQTtBQ0FaO0FERVE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0FaO0FERVE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0Q1Qkg7RUM2QkcsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQVo7QURHUTtFQUNJLFVBQUE7QUNEWjtBRElRO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDRlo7QURXQTtFQUdJLG1DQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFNJO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEY0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1hKO0FEWUk7RUFDSSxZQUFBO0FDVlI7QURjQTtFQUNJLFVBQUE7QUNYSjtBRGNBO0VBQ1Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ1hSO0FEY0E7RUFDSSxvQ0FBQTtBQ1hKO0FEY0E7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQ1hKO0FEY0E7RUFDSSxvQ0FBQTtFQUNBLGtCQUFBO0FDWEo7QURjQTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7QUNYSjtBRGNBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy9ob21lL3Jlc3VsdHMvcmVzdWx0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGT05UUyAqL1xyXG5cclxuJGZvbnRNOiBNeXJpYWRQcm87XHJcbiRmb250VDogVHJlYnVjaGV0TVM7XHJcblxyXG5cclxuLy8gQ09MT1JTIFxyXG5cclxuXHJcbiRjb2xvcjE6ICNmZmUyNjY7XHJcbiRjb2xvcjI6ICMxM2JmOWU7XHJcbiRjb2xvcjM6ICMzMzMzMzM7XHJcbiRjb2xvcjQ6ICM0ZDRkNGQ7XHJcbiRjb2xvcjU6ICM4MDgwODA7XHJcbiRjb2xvcjY6ICNBOUFCQUU7XHJcbiRjb2xvcjc6ICNlNmU2ZTY7XHJcbiRjb2xvcjg6ICNlYzdjOGI7XHJcbiRjb2xvcjk6ICMwMGExOTg7XHJcbiRjb2xvcjEwOiAjMzE0ODhhO1xyXG4iLCJAaW1wb3J0ICcuLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xyXG5cclxuLnRpdGxlcHtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubGluZWF7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggJGNvbG9yNztcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIC5tZW51e1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoe1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIDo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3I1O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDI3JTtcclxuICAgICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAyLjVweCBzb2xpZCAgJGNvbG9yMTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwKTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcjM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNThweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpmb2N1c3tcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5pdGVte1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggcmdiYSgxOTQsMTk0LDE5NCwxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4IHJnYmEoMTk0LDE5NCwxOTQsMSk7XHJcbiAgICBib3gtc2hhZG93OiAxcHggM3B4IDhweCA1cHggcmdiYSgxOTQsMTk0LDE5NCwxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAuaW1nLWl0ZW17XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7ICAgICAgICBcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogOTAuOHZ3O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDkwLjh2dztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vTE9BRFxyXG5cclxuLmxvYWR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogLjkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZ3tcclxuICAgICAgICBvcGFjaXR5OiAuOTtcclxuICAgIH1cclxufVxyXG5cclxuOmZvY3Vze1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLmltZy1pdGVtMntcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG5idXR0b246ZGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm56LXNlbGVjdCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbm56LXNlbGVjdDpob3Zlciwgbnotc2VsZWN0OmZvY3Vze1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yMSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5uei1zZWxlY3R7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3IxICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5hbnQtc2VsZWN0LWZvY3VzZWQuYW50LXNlbGVjdC1tdWx0aXBsZSAuYW50LXNlbGVjdC1zZWxlY3RvcntcclxuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yMiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbiIsIi8qIEZPTlRTICovXG4udGl0bGVwIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxpbmVhIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICNlNmU2ZTY7XG59XG5cbi5jb250ZW50IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4uY29udGVudCAubWVudSBwIHtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNvbnRlbnQgLnNlYXJjaCB7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250ZW50IC5zZWFyY2ggOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBmb250LXNpemU6IDEycHQ7XG59XG4uY29udGVudCAuc2VhcmNoIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNyU7XG4gIGxlZnQ6IDIwcHg7XG4gIG1heC13aWR0aDogMjZweDtcbn1cbi5jb250ZW50IC5zZWFyY2ggaW5wdXQge1xuICBmb250LXNpemU6IDEycHQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDIuNXB4IHNvbGlkICNmZmUyNjY7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogNThweDtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cbi5jb250ZW50IC5zZWFyY2ggOmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbn1cbi5jb250ZW50IC5zZWFyY2ggYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogM3B4O1xufVxuXG4uaXRlbSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4ICNjMmMyYzI7XG4gIC1tb3otYm94LXNoYWRvdzogMXB4IDNweCA4cHggNXB4ICNjMmMyYzI7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggOHB4IDVweCAjYzJjMmMyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLml0ZW0gLmltZy1pdGVtIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogOTAuOHZ3O1xuICBtaW4taGVpZ2h0OiA5MC44dnc7XG59XG5cbi5sb2FkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvYWQgaW1nIHtcbiAgb3BhY2l0eTogMC45O1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uaW1nLWl0ZW0yIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzNjBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNiAhaW1wb3J0YW50O1xufVxuXG5uei1zZWxlY3Qge1xuICBmbGV4OiAxO1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cblxubnotc2VsZWN0OmhvdmVyLCBuei1zZWxlY3Q6Zm9jdXMge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZlMjY2ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxubnotc2VsZWN0IHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZTI2NiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5hbnQtc2VsZWN0LWZvY3VzZWQuYW50LXNlbGVjdC1tdWx0aXBsZSAuYW50LXNlbGVjdC1zZWxlY3RvciB7XG4gIGJvcmRlci1jb2xvcjogIzEzYmY5ZSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tabs/home/results/results.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tabs/home/results/results.page.ts ***!
  \*********************************************************/
/*! exports provided: ResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPage", function() { return ResultsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/general.service */ "./src/app/services/general.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");











const { Geolocation, Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let ResultsPage = class ResultsPage {
    constructor(route, router, api, cookie, general, socialSharing, modal, store) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.cookie = cookie;
        this.general = general;
        this.socialSharing = socialSharing;
        this.modal = modal;
        this.store = store;
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.urlBackEnd = this.general.getUrlImages('profile');
        this.companiesData = [];
        this.isLoad = true;
        this.search = '';
        this.response = false;
        this.isVisibleModal = false;
        //POSITION
        this.currentPosition = {};
        this.districts = [];
        this.valid = false;
        this.listOptionsDistrict = [
            'ANCON',
            'ATE',
            'BARRANCO',
            'BREÑA',
            'CARABAYLLO',
            'CHACLACAYO',
            'CHORRILLOS',
            'CIENEGUILLA',
            'COMAS',
            'EL AGUSTINO',
            'INDEPENDENCIA',
            'JESUS MARIA',
            'LA MOLINA',
            'LA VICTORIA',
            'LIMA',
            'LINCE',
            'LOS OLIVOS',
            'LURIGANCHO',
            'LURIN',
            'MAGDALENA DEL MAR',
            'MIRAFLORES',
            'PACHACAMAC',
            'PUCUSANA',
            'PUEBLO LIBRE',
            'PUENTE PIEDRA',
            'PUNTA HERMOSA',
            'PUNTA NEGRA',
            'RIMAC',
            'SAN BARTOLO',
            'SAN BORJA',
            'SAN ISIDRO',
            'SAN JUAN DE LURIGANCHO',
            'SAN JUAN DE MIRAFLORES',
            'SAN LUIS',
            'SAN MARTIN DE PORRES',
            'SAN MIGUEL',
            'SANTA ANITA',
            'SANTA MARIA DEL MAR',
            'SANTA ROSA',
            'SANTIAGO DE SURCO',
            'SURQUILLO',
            'VILLA EL SALVADOR',
            'VILLA MARIA DEL TRIUNFO',
        ];
        this.id = this.route.snapshot.paramMap.get('id');
        // this.store.select('data').subscribe((data: any) => {
        //   this.api.c('DATA', data)
        //   this.companiesData = data
        // })
    }
    ngOnInit() {
        this.validateSession();
    }
    ngAfterViewInit() {
        this.service2 = new google.maps.places.PlacesService(new google.maps.Map(this.el.nativeElement, {
            center: new google.maps.LatLng(-12.0202343, -77.0502994),
            zoom: 15,
        }));
    }
    ionViewWillEnter() {
        this.getCompaniesData();
        this.getCategoriesAndSubcategories();
    }
    getCategoriesAndSubcategories() {
        let data = {
            service: 'get-categories-and-subcategories'
        };
        this.api.api(data).subscribe(result => {
            this.api.c('getCategoriesAndSubcategories result', result);
            this.categories = result;
            // this.isLoad = false
        }, error => {
            this.api.c('Error getCategoriesAndSubcategories', error);
        });
    }
    back() {
        window.history.back();
    }
    searchEvent() {
        this.router.navigate(['/results/' + this.search]).then(() => {
            window.location.reload();
        });
    }
    validateSession() {
        if (localStorage.getItem('ud')) {
            this.user = JSON.parse(localStorage.getItem('ud'));
            this.getFeaturedCompanies();
        }
    }
    getCompaniesData() {
        this.companiesData = [];
        let data = {
            search: this.id,
            service: 'get-companies-data',
            userid: this.user ? this.user.user.id : null
        };
        this.api.api(data).subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.status) {
                if (result.data.length > 0) {
                    this.companiesData = yield this.getCurrentPosition(this.deleteDuplicados(result.data));
                    this.isLoad = false;
                }
                else {
                    this.response = 'No hay resultados';
                    this.isLoad = false;
                }
            }
            else {
                this.api.c('getCompaniesData false', result);
            }
        }), error => {
            this.api.c('Error getCompaniesData', error);
        });
    }
    getUriImage(image) {
        return encodeURI(image);
    }
    rad(x) {
        return x * Math.PI / 180;
    }
    getKilometros(lat1, lon1, lat2, lon2) {
        var R = 6378.137; //Radio de la tierra en km
        var dLat = this.rad(lat2 - lat1);
        var dLong = this.rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.rad(lat1)) * Math.cos(this.rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d.toFixed(1); //Retorna un decimales
    }
    getCurrentPosition(companiesData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let newCompaniesData = [];
            return this.general.getPosition()
                .then((currentPosition) => {
                if (currentPosition) {
                    for (const element of companiesData) {
                        if (element.lat) {
                            element['distance'] = parseFloat(this.getKilometros(element.lat, element.lng, currentPosition.lat, currentPosition.lng));
                        }
                        else {
                            element['distance'] = 1000000;
                        }
                        newCompaniesData.push(element);
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
                    return newCompaniesData;
                }
            })
                .catch((error) => {
                this.error(error);
                this.api.c('CurrentPosition Error', error);
            });
        });
    }
    error(content) {
        this.contentModal = content;
        this.isVisibleModal = true;
    }
    closeModal() {
        this.isVisibleModal = false;
        this.router.navigate(['/']);
    }
    updateCoordinates(lat, lng, companyid) {
        let data = {
            token: this.user.token,
            companyid: companyid,
            service: 'update-coordinates',
            lat: lat,
            lng: lng,
        };
        this.api.api(data).subscribe((result) => {
            this.isLoad = false;
            this.api.c('addFeaturedCompanies', result);
        }, error => {
            this.api.c('Error addFeaturedCompanies', error);
        });
    }
    addFeaturedCompanies(companyid, e) {
        this.isLoad = true;
        if (e.target.src.indexOf('/assets/img/partials/star.svg') > -1) {
            this.deleteFeaturedCompanies(companyid, this.user.user.id, e);
        }
        else {
            if (!this.user) {
                this.router.navigate(['/login']);
            }
            else {
                let data = {
                    userid: this.user.user.id,
                    token: this.user.token,
                    companyid: companyid,
                    service: 'add-featured-companies'
                };
                this.api.api(data).subscribe((result) => {
                    this.isLoad = false;
                    this.api.c('addFeaturedCompanies', result);
                    this.general.saveEvent('featured', companyid);
                    if (result.status) {
                        this.api.c('addFeaturedCompanies true', e.target.disabled);
                        e.target.src = '/assets/img/partials/star.svg';
                    }
                    else {
                        this.api.c('addFeaturedCompanies false', result);
                    }
                }, error => {
                    this.api.c('Error addFeaturedCompanies', error);
                });
            }
        }
    }
    deleteFeaturedCompanies(companyid, userid, e) {
        let data = {
            token: this.user.token,
            companyid: companyid,
            userid: userid,
            service: 'delete-featured-companies'
        };
        this.api.api(data).subscribe((result) => {
            this.api.c('deleteFeaturedCompanies', result);
            this.isLoad = false;
            if (result.status) {
                e.target.src = '/assets/img/partials/star-g.svg';
            }
            else {
                this.api.c('deleteFeaturedCompanies false', result);
            }
        }, error => {
            this.api.c('Error deleteFeaturedCompanies', error);
        });
    }
    getFeaturedCompanies() {
        if (this.user) {
            let data = {
                userid: this.user.user.id,
                token: this.user.token,
                service: 'get-featured-companies'
            };
            this.api.api(data).subscribe((result) => {
                this.api.c('getFeaturedCompanies', result);
                if (result.status) {
                }
                else {
                    this.api.c('getFeaturedCompanies false', result);
                }
            }, error => {
                this.api.c('Error getFeaturedCompanies', error);
            });
        }
    }
    share(companyid, name) {
        const url = 'https://vaoperu.com/web/' + companyid;
        const text = name;
        this.socialSharing.share(text, document.title, null, url).then(_ => {
            this.general.saveEvent('share', companyid);
        });
    }
    toogleMenu() {
        this.api.c('toogleMenuFather', 'ok');
        this.eventsSubject.next();
    }
    deleteDuplicados(array) {
        let res = [];
        for (let index = 0; index < array.length; index++) {
            const e = array[index];
            if (this.general.searchIndexByNameKey(res, 'id', e.id) === false) {
                e['distanceValue'] = 0;
                e['distance'] = '';
                res.push(e);
            }
        }
        return res;
    }
    message(receptorid, companyDataID, phone1) {
        if (phone1) {
            window.location.href = `https://api.whatsapp.com/send?phone=51${phone1}&text=Hola, soy usuario VAO`;
        }
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
    issetDistrict(district) {
        let res = false;
        this.districts.forEach(d => {
            if (d == district) {
                res = true;
            }
        });
        return res;
    }
    onDistrictChange() {
        this.isLoad = true;
        if (this.valid === false) {
            this.companiesDataTemp = this.companiesData;
            this.valid = true;
        }
        let newCompaniesData = [];
        if (this.districts.length === 0) {
            this.companiesData = this.companiesDataTemp;
            this.isLoad = false;
        }
        else {
            this.companiesDataTemp.forEach(d => {
                if (this.issetDistrict(d.district)) {
                    newCompaniesData.push(d);
                }
            });
            this.isLoad = false;
            this.companiesData = newCompaniesData;
        }
    }
    capitalize(s) {
        if (typeof s !== 'string')
            return '';
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    formatId(id) {
        if (id.indexOf('#') > -1) {
            return this.capitalize(id.split('#')[0]);
        }
        else if (id.indexOf('&') > -1) {
            return this.capitalize(id.split('&')[0]);
        }
        else {
            return this.capitalize(id);
        }
    }
};
ResultsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__["SocialSharing"] },
    { type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__["NzModalService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map')
], ResultsPage.prototype, "el", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ResultsPage.prototype, "stateMenu", void 0);
ResultsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-results',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./results.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/home/results/results.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./results.page.scss */ "./src/app/pages/tabs/home/results/results.page.scss")).default]
    })
], ResultsPage);



/***/ })

}]);
//# sourceMappingURL=results-results-module-es2015.js.map
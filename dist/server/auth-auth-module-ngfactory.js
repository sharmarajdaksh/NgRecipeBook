exports.ids = [1];
exports.modules = {

/***/ "cAcB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__("8Y7J");

// CONCATENATED MODULE: ./src/app/auth/auth.module.ts
class AuthModule {
}

// EXTERNAL MODULE: ./node_modules/@angular/router/router.ngfactory.js
var router_ngfactory = __webpack_require__("pMnS");

// EXTERNAL MODULE: ./src/app/shared/alert/alert.component.ngfactory.js + 1 modules
var alert_component_ngfactory = __webpack_require__("4BU0");

// CONCATENATED MODULE: ./src/app/auth/auth.component.css.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];


// CONCATENATED MODULE: ./src/app/shared/loading-spinner.component.ts
class LoadingSpinnerComponent {
}

// CONCATENATED MODULE: ./src/app/shared/loading-spinner.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_LoadingSpinnerComponent = ["@keyframes lds-pacman-1 {\n\t\t\t\t0% {\n\t\t\t\t\t-webkit-transform: rotate(0deg);\n\t\t\t\t\ttransform: rotate(0deg);\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\t-webkit-transform: rotate(-45deg);\n\t\t\t\t\ttransform: rotate(-45deg);\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\t-webkit-transform: rotate(0deg);\n\t\t\t\t\ttransform: rotate(0deg);\n\t\t\t\t}\n\t\t\t}\n\t\t\t@-webkit-keyframes lds-pacman-1 {\n\t\t\t\t0% {\n\t\t\t\t\t-webkit-transform: rotate(0deg);\n\t\t\t\t\ttransform: rotate(0deg);\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\t-webkit-transform: rotate(-45deg);\n\t\t\t\t\ttransform: rotate(-45deg);\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\t-webkit-transform: rotate(0deg);\n\t\t\t\t\ttransform: rotate(0deg);\n\t\t\t\t}\n\t\t\t}\n\t\t\t@keyframes lds-pacman-2 {\n\t\t\t\t0% {\n\t\t\t\t\t-webkit-transform: rotate(180deg);\n\t\t\t\t\ttransform: rotate(180deg);\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\t-webkit-transform: rotate(225deg);\n\t\t\t\t\ttransform: rotate(225deg);\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\t-webkit-transform: rotate(180deg);\n\t\t\t\t\ttransform: rotate(180deg);\n\t\t\t\t}\n\t\t\t}\n\t\t\t@-webkit-keyframes lds-pacman-2 {\n\t\t\t\t0% {\n\t\t\t\t\t-webkit-transform: rotate(180deg);\n\t\t\t\t\ttransform: rotate(180deg);\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\t-webkit-transform: rotate(225deg);\n\t\t\t\t\ttransform: rotate(225deg);\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\t-webkit-transform: rotate(180deg);\n\t\t\t\t\ttransform: rotate(180deg);\n\t\t\t\t}\n\t\t\t}\n\t\t\t@keyframes lds-pacman-3 {\n\t\t\t\t0% {\n\t\t\t\t\t-webkit-transform: translate(190px, 0);\n\t\t\t\t\ttransform: translate(190px, 0);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t\t20% {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\t-webkit-transform: translate(70px, 0);\n\t\t\t\t\ttransform: translate(70px, 0);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\t@-webkit-keyframes lds-pacman-3 {\n\t\t\t\t0% {\n\t\t\t\t\t-webkit-transform: translate(190px, 0);\n\t\t\t\t\ttransform: translate(190px, 0);\n\t\t\t\t\topacity: 0;\n\t\t\t\t}\n\t\t\t\t20% {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\t-webkit-transform: translate(70px, 0);\n\t\t\t\t\ttransform: translate(70px, 0);\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\t\t\t}\n\t\t\t.lds-pacman[_ngcontent-%COMP%] {\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\t.lds-pacman[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%] {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 40px;\n\t\t\t\tleft: 40px;\n\t\t\t\twidth: 120px;\n\t\t\t\theight: 60px;\n\t\t\t\tborder-radius: 120px 120px 0 0;\n\t\t\t\tbackground: #aaa8a1;\n\t\t\t\t-webkit-animation: lds-pacman-1 1s linear infinite;\n\t\t\t\tanimation: lds-pacman-1 1s linear infinite;\n\t\t\t\t-webkit-transform-origin: 60px 60px;\n\t\t\t\ttransform-origin: 60px 60px;\n\t\t\t}\n\t\t\t.lds-pacman[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)   div[_ngcontent-%COMP%]:nth-child(2) {\n\t\t\t\t-webkit-animation: lds-pacman-2 1s linear infinite;\n\t\t\t\tanimation: lds-pacman-2 1s linear infinite;\n\t\t\t}\n\t\t\t.lds-pacman[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   div[_ngcontent-%COMP%] {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 92px;\n\t\t\t\tleft: -8px;\n\t\t\t\twidth: 16px;\n\t\t\t\theight: 16px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground: #f4f2ea;\n\t\t\t\t-webkit-animation: lds-pacman-3 1s linear infinite;\n\t\t\t\tanimation: lds-pacman-3 1s linear infinite;\n\t\t\t}\n\t\t\t.lds-pacman[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   div[_ngcontent-%COMP%]:nth-child(1) {\n\t\t\t\t-webkit-animation-delay: -0.67s;\n\t\t\t\tanimation-delay: -0.67s;\n\t\t\t}\n\t\t\t.lds-pacman[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   div[_ngcontent-%COMP%]:nth-child(2) {\n\t\t\t\t-webkit-animation-delay: -0.33s;\n\t\t\t\tanimation-delay: -0.33s;\n\t\t\t}\n\t\t\t.lds-pacman[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1)   div[_ngcontent-%COMP%]:nth-child(3) {\n\t\t\t\t-webkit-animation-delay: 0s;\n\t\t\t\tanimation-delay: 0s;\n\t\t\t}\n\t\t\t.lds-pacman[_ngcontent-%COMP%] {\n\t\t\t\twidth: 200px !important;\n\t\t\t\theight: 200px !important;\n\t\t\t\tmargin-right: 0;\n\t\t\t\t-webkit-transform: translate(-100px, -100px) scale(1)\n\t\t\t\t\ttranslate(100px, 100px);\n\t\t\t\ttransform: translate(-100px, -100px) scale(1)\n\t\t\t\t\ttranslate(100px, 100px);\n\t\t\t}"];
var RenderType_LoadingSpinnerComponent = core["Lb" /* ɵcrt */]({ encapsulation: 0, styles: styles_LoadingSpinnerComponent, data: {} });

function View_LoadingSpinnerComponent_0(_l) { return core["jc" /* ɵvid */](0, [(_l()(), core["Nb" /* ɵeld */](0, 0, null, null, 9, "div", [["style", "max-width: 200px; text-align: center"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](1, 0, null, null, 8, "div", [["class", "lds-css ng-scope"], ["style", "max-width: 200px; text-align: center"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](2, 0, null, null, 7, "div", [["class", "lds-pacman"], ["style", "width:100%;height:100%"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](3, 0, null, null, 3, "div", [], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](4, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](6, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](7, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](8, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](9, 0, null, null, 0, "div", [], null, null, null, null, null))], null, null); }
function View_LoadingSpinnerComponent_Host_0(_l) { return core["jc" /* ɵvid */](0, [(_l()(), core["Nb" /* ɵeld */](0, 0, null, null, 1, "app-loading-spinner", [], null, null, null, View_LoadingSpinnerComponent_0, RenderType_LoadingSpinnerComponent)), core["Mb" /* ɵdid */](1, 49152, null, 0, LoadingSpinnerComponent, [], null, null)], null, null); }
var LoadingSpinnerComponentNgFactory = core["Jb" /* ɵccf */]("app-loading-spinner", LoadingSpinnerComponent, View_LoadingSpinnerComponent_Host_0, {}, {}, []);


// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__("s7LF");

// CONCATENATED MODULE: ./src/app/shared/placeholder/placeholder.directive.ts

class PlaceholderDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__("SVse");

// EXTERNAL MODULE: ./src/app/shared/alert/alert.component.ts
var alert_component = __webpack_require__("VYMa");

// EXTERNAL MODULE: ./src/app/auth/store/auth.actions.ts
var auth_actions = __webpack_require__("/WaZ");

// CONCATENATED MODULE: ./src/app/auth/auth.component.ts





class auth_component_AuthComponent {
    constructor(
    // private authService: AuthService,
    // private router: Router,
    componentFactoryResolver, store) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.store = store;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
    }
    ngOnInit() {
        this.storeSub = this.store.select('auth').subscribe(authState => {
            this.isLoading = authState.loading;
            this.error = authState.authError;
            if (this.error) {
                this.showErrorAlert(this.error);
            }
        });
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(authForm) {
        if (!authForm.valid) {
            return;
        }
        const email = authForm.value.email;
        const password = authForm.value.password;
        this.isLoading = true;
        // let authObs: Observable<AuthResponseData>;
        if (this.isLoginMode) {
            // authObs = this.authService.login(email, password);
            this.store.dispatch(new auth_actions["k" /* LoginStart */]({ email, password }));
        }
        else {
            this.store.dispatch(new auth_actions["n" /* SignupStart */]({ email, password }));
        }
        // authObs.subscribe(
        // 	responseData => {
        // 		console.log(responseData);
        // 		this.isLoading = false;
        // 		this.router.navigate(['/recipes']);
        // 	},
        // 	errorMessage => {
        // 		this.error = errorMessage;
        // 		this.isLoading = false;
        // 		this.showErrorAlert(errorMessage);
        // 	}
        // );
        authForm.reset();
    }
    onHandleError() {
        // this.error = null;
        this.store.dispatch(new auth_actions["h" /* ClearError */]());
    }
    showErrorAlert(message) {
        // INCORRECT WAY: const alertComponent = new AlertComponent();
        const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(alert_component["a" /* AlertComponent */]);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);
        componentRef.instance.message = message;
        this.closedSub = componentRef.instance.closed.subscribe(() => {
            this.closedSub.unsubscribe();
            hostViewContainerRef.clear();
            this.error = null;
        });
    }
    ngOnDestroy() {
        if (this.closedSub) {
            this.closedSub.unsubscribe();
        }
        if (this.storeSub) {
            this.storeSub.unsubscribe();
        }
    }
}

// EXTERNAL MODULE: ./node_modules/@ngrx/store/fesm2015/store.js + 2 modules
var store = __webpack_require__("DQLy");

// CONCATENATED MODULE: ./src/app/auth/auth.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_AuthComponent = [styles];
var RenderType_AuthComponent = core["Lb" /* ɵcrt */]({ encapsulation: 0, styles: styles_AuthComponent, data: {} });

function View_AuthComponent_1(_l) { return core["jc" /* ɵvid */](0, [(_l()(), core["Db" /* ɵand */](0, null, null, 0))], null, null); }
function View_AuthComponent_2(_l) { return core["jc" /* ɵvid */](0, [(_l()(), core["Nb" /* ɵeld */](0, 0, null, null, 2, "div", [["class", "mx-auto"], ["style", "text-align: center; max-width: 200px"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](1, 0, null, null, 1, "app-loading-spinner", [], null, null, null, View_LoadingSpinnerComponent_0, RenderType_LoadingSpinnerComponent)), core["Mb" /* ɵdid */](2, 49152, null, 0, LoadingSpinnerComponent, [], null, null)], null, null); }
function View_AuthComponent_3(_l) { return core["jc" /* ɵvid */](0, [(_l()(), core["Nb" /* ɵeld */](0, 0, null, null, 35, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (core["Yb" /* ɵnov */](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["Yb" /* ɵnov */](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit(core["Yb" /* ɵnov */](_v, 2)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), core["Mb" /* ɵdid */](1, 16384, null, 0, fesm2015_forms["D" /* ɵangular_packages_forms_forms_z */], [], null, null), core["Mb" /* ɵdid */](2, 4210688, [["authForm", 4]], 0, fesm2015_forms["t" /* NgForm */], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), core["dc" /* ɵprd */](2048, null, fesm2015_forms["b" /* ControlContainer */], null, [fesm2015_forms["t" /* NgForm */]]), core["Mb" /* ɵdid */](4, 16384, null, 0, fesm2015_forms["s" /* NgControlStatusGroup */], [[4, fesm2015_forms["b" /* ControlContainer */]]], null, null), (_l()(), core["Nb" /* ɵeld */](5, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](6, 0, null, null, 1, "label", [["for", "email"]], null, null, null, null, null)), (_l()(), core["hc" /* ɵted */](-1, null, ["Email"])), (_l()(), core["Nb" /* ɵeld */](8, 0, null, null, 8, "input", [["class", "form-control"], ["email", ""], ["id", "email"], ["name", "email"], ["ngModel", ""], ["required", ""], ["type", "email"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (core["Yb" /* ɵnov */](_v, 9)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (core["Yb" /* ɵnov */](_v, 9).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (core["Yb" /* ɵnov */](_v, 9)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (core["Yb" /* ɵnov */](_v, 9)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), core["Mb" /* ɵdid */](9, 16384, null, 0, fesm2015_forms["c" /* DefaultValueAccessor */], [core["W" /* Renderer2 */], core["t" /* ElementRef */], [2, fesm2015_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["Mb" /* ɵdid */](10, 16384, null, 0, fesm2015_forms["y" /* RequiredValidator */], [], { required: [0, "required"] }, null), core["Mb" /* ɵdid */](11, 16384, null, 0, fesm2015_forms["d" /* EmailValidator */], [], { email: [0, "email"] }, null), core["dc" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALIDATORS */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [fesm2015_forms["y" /* RequiredValidator */], fesm2015_forms["d" /* EmailValidator */]]), core["dc" /* ɵprd */](1024, null, fesm2015_forms["p" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [fesm2015_forms["c" /* DefaultValueAccessor */]]), core["Mb" /* ɵdid */](14, 671744, null, 0, fesm2015_forms["u" /* NgModel */], [[2, fesm2015_forms["b" /* ControlContainer */]], [6, fesm2015_forms["o" /* NG_VALIDATORS */]], [8, null], [6, fesm2015_forms["p" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, null), core["dc" /* ɵprd */](2048, null, fesm2015_forms["q" /* NgControl */], null, [fesm2015_forms["u" /* NgModel */]]), core["Mb" /* ɵdid */](16, 16384, null, 0, fesm2015_forms["r" /* NgControlStatus */], [[4, fesm2015_forms["q" /* NgControl */]]], null, null), (_l()(), core["Nb" /* ɵeld */](17, 0, null, null, 11, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](18, 0, null, null, 1, "label", [["for", "password"]], null, null, null, null, null)), (_l()(), core["hc" /* ɵted */](-1, null, ["Password"])), (_l()(), core["Nb" /* ɵeld */](20, 0, null, null, 8, "input", [["class", "form-control"], ["id", "password"], ["minlength", "6"], ["name", "password"], ["ngModel", ""], ["required", ""], ["type", "password"]], [[1, "required", 0], [1, "minlength", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (core["Yb" /* ɵnov */](_v, 21)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (core["Yb" /* ɵnov */](_v, 21).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (core["Yb" /* ɵnov */](_v, 21)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (core["Yb" /* ɵnov */](_v, 21)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), core["Mb" /* ɵdid */](21, 16384, null, 0, fesm2015_forms["c" /* DefaultValueAccessor */], [core["W" /* Renderer2 */], core["t" /* ElementRef */], [2, fesm2015_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["Mb" /* ɵdid */](22, 16384, null, 0, fesm2015_forms["y" /* RequiredValidator */], [], { required: [0, "required"] }, null), core["Mb" /* ɵdid */](23, 540672, null, 0, fesm2015_forms["n" /* MinLengthValidator */], [], { minlength: [0, "minlength"] }, null), core["dc" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALIDATORS */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [fesm2015_forms["y" /* RequiredValidator */], fesm2015_forms["n" /* MinLengthValidator */]]), core["dc" /* ɵprd */](1024, null, fesm2015_forms["p" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [fesm2015_forms["c" /* DefaultValueAccessor */]]), core["Mb" /* ɵdid */](26, 671744, null, 0, fesm2015_forms["u" /* NgModel */], [[2, fesm2015_forms["b" /* ControlContainer */]], [6, fesm2015_forms["o" /* NG_VALIDATORS */]], [8, null], [6, fesm2015_forms["p" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, null), core["dc" /* ɵprd */](2048, null, fesm2015_forms["q" /* NgControl */], null, [fesm2015_forms["u" /* NgModel */]]), core["Mb" /* ɵdid */](28, 16384, null, 0, fesm2015_forms["r" /* NgControlStatus */], [[4, fesm2015_forms["q" /* NgControl */]]], null, null), (_l()(), core["Nb" /* ɵeld */](29, 0, null, null, 2, "div", [["class", "text-right"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](30, 0, null, null, 1, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), core["hc" /* ɵted */](31, null, [" ", " "])), (_l()(), core["Nb" /* ɵeld */](32, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](33, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](34, 0, null, null, 1, "button", [["class", "btn btn-primary col-sm-12"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onSwitchMode() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), core["hc" /* ɵted */](35, null, [" ", " "]))], function (_ck, _v) { var currVal_15 = ""; _ck(_v, 10, 0, currVal_15); var currVal_16 = ""; _ck(_v, 11, 0, currVal_16); var currVal_17 = "email"; var currVal_18 = ""; _ck(_v, 14, 0, currVal_17, currVal_18); var currVal_28 = ""; _ck(_v, 22, 0, currVal_28); var currVal_29 = "6"; _ck(_v, 23, 0, currVal_29); var currVal_30 = "password"; var currVal_31 = ""; _ck(_v, 26, 0, currVal_30, currVal_31); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["Yb" /* ɵnov */](_v, 4).ngClassUntouched; var currVal_1 = core["Yb" /* ɵnov */](_v, 4).ngClassTouched; var currVal_2 = core["Yb" /* ɵnov */](_v, 4).ngClassPristine; var currVal_3 = core["Yb" /* ɵnov */](_v, 4).ngClassDirty; var currVal_4 = core["Yb" /* ɵnov */](_v, 4).ngClassValid; var currVal_5 = core["Yb" /* ɵnov */](_v, 4).ngClassInvalid; var currVal_6 = core["Yb" /* ɵnov */](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (core["Yb" /* ɵnov */](_v, 10).required ? "" : null); var currVal_8 = core["Yb" /* ɵnov */](_v, 16).ngClassUntouched; var currVal_9 = core["Yb" /* ɵnov */](_v, 16).ngClassTouched; var currVal_10 = core["Yb" /* ɵnov */](_v, 16).ngClassPristine; var currVal_11 = core["Yb" /* ɵnov */](_v, 16).ngClassDirty; var currVal_12 = core["Yb" /* ɵnov */](_v, 16).ngClassValid; var currVal_13 = core["Yb" /* ɵnov */](_v, 16).ngClassInvalid; var currVal_14 = core["Yb" /* ɵnov */](_v, 16).ngClassPending; _ck(_v, 8, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_19 = (core["Yb" /* ɵnov */](_v, 22).required ? "" : null); var currVal_20 = (core["Yb" /* ɵnov */](_v, 23).minlength ? core["Yb" /* ɵnov */](_v, 23).minlength : null); var currVal_21 = core["Yb" /* ɵnov */](_v, 28).ngClassUntouched; var currVal_22 = core["Yb" /* ɵnov */](_v, 28).ngClassTouched; var currVal_23 = core["Yb" /* ɵnov */](_v, 28).ngClassPristine; var currVal_24 = core["Yb" /* ɵnov */](_v, 28).ngClassDirty; var currVal_25 = core["Yb" /* ɵnov */](_v, 28).ngClassValid; var currVal_26 = core["Yb" /* ɵnov */](_v, 28).ngClassInvalid; var currVal_27 = core["Yb" /* ɵnov */](_v, 28).ngClassPending; _ck(_v, 20, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_32 = !core["Yb" /* ɵnov */](_v, 2).valid; _ck(_v, 30, 0, currVal_32); var currVal_33 = (_co.isLoginMode ? "Log In" : "Sign Up"); _ck(_v, 31, 0, currVal_33); var currVal_34 = (_co.isLoginMode ? "New here? Sign Up" : "Already a member? Log In"); _ck(_v, 35, 0, currVal_34); }); }
function View_AuthComponent_0(_l) { return core["jc" /* ɵvid */](0, [core["ec" /* ɵqud */](671088640, 1, { alertHost: 0 }), (_l()(), core["Nb" /* ɵeld */](1, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](2, 0, null, null, 6, "div", [["class", "col-sm-12 col-md-6 offset-md-3"]], null, null, null, null, null)), (_l()(), core["Db" /* ɵand */](16777216, null, null, 1, null, View_AuthComponent_1)), core["Mb" /* ɵdid */](4, 16384, [[1, 4]], 0, PlaceholderDirective, [core["jb" /* ViewContainerRef */]], null, null), (_l()(), core["Db" /* ɵand */](16777216, null, null, 1, null, View_AuthComponent_2)), core["Mb" /* ɵdid */](6, 16384, null, 0, common["k" /* NgIf */], [core["jb" /* ViewContainerRef */], core["gb" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Db" /* ɵand */](16777216, null, null, 1, null, View_AuthComponent_3)), core["Mb" /* ɵdid */](8, 16384, null, 0, common["k" /* NgIf */], [core["jb" /* ViewContainerRef */], core["gb" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isLoading; _ck(_v, 6, 0, currVal_0); var currVal_1 = !_co.isLoading; _ck(_v, 8, 0, currVal_1); }, null); }
function View_AuthComponent_Host_0(_l) { return core["jc" /* ɵvid */](0, [(_l()(), core["Nb" /* ɵeld */](0, 0, null, null, 1, "app-auth", [], null, null, null, View_AuthComponent_0, RenderType_AuthComponent)), core["Mb" /* ɵdid */](1, 245760, null, 0, auth_component_AuthComponent, [core["p" /* ComponentFactoryResolver */], store["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AuthComponentNgFactory = core["Jb" /* ɵccf */]("app-auth", auth_component_AuthComponent, View_AuthComponent_Host_0, {}, {}, []);


// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 8 modules
var router = __webpack_require__("iInd");

// EXTERNAL MODULE: ./src/app/shared/shared.module.ts
var shared_module = __webpack_require__("PCNd");

// CONCATENATED MODULE: ./src/app/auth/auth.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModuleNgFactory", function() { return AuthModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var AuthModuleNgFactory = core["Kb" /* ɵcmf */](AuthModule, [], function (_l) { return core["Vb" /* ɵmod */]([core["Wb" /* ɵmpd */](512, core["p" /* ComponentFactoryResolver */], core["vb" /* ɵCodegenComponentFactoryResolver */], [[8, [router_ngfactory["a" /* ɵangular_packages_router_router_lNgFactory */], alert_component_ngfactory["a" /* AlertComponentNgFactory */], AuthComponentNgFactory]], [3, core["p" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["Wb" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["x" /* ɵangular_packages_common_common_a */]]]), core["Wb" /* ɵmpd */](4608, fesm2015_forms["B" /* ɵangular_packages_forms_forms_o */], fesm2015_forms["B" /* ɵangular_packages_forms_forms_o */], []), core["Wb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Wb" /* ɵmpd */](1073742336, fesm2015_forms["A" /* ɵangular_packages_forms_forms_d */], fesm2015_forms["A" /* ɵangular_packages_forms_forms_d */], []), core["Wb" /* ɵmpd */](1073742336, fesm2015_forms["m" /* FormsModule */], fesm2015_forms["m" /* FormsModule */], []), core["Wb" /* ɵmpd */](1073742336, router["s" /* RouterModule */], router["s" /* RouterModule */], [[2, router["y" /* ɵangular_packages_router_router_a */]], [2, router["o" /* Router */]]]), core["Wb" /* ɵmpd */](1073742336, shared_module["a" /* SharedModule */], shared_module["a" /* SharedModule */], []), core["Wb" /* ɵmpd */](1073742336, AuthModule, AuthModule, []), core["Wb" /* ɵmpd */](1024, router["m" /* ROUTES */], function () { return [[{ path: "", component: auth_component_AuthComponent }]]; }, [])]); });



/***/ })

};;
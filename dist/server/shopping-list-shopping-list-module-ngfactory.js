exports.ids = [4];
exports.modules = {

/***/ "ZPmh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__("8Y7J");

// CONCATENATED MODULE: ./src/app/shopping-list/shopping-list.module.ts
class ShoppingListModule {
}

// EXTERNAL MODULE: ./src/app/shared/alert/alert.component.ngfactory.js + 1 modules
var alert_component_ngfactory = __webpack_require__("4BU0");

// EXTERNAL MODULE: ./node_modules/@angular/router/router.ngfactory.js
var router_ngfactory = __webpack_require__("pMnS");

// CONCATENATED MODULE: ./src/app/shopping-list/shopping-list.component.css.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [""];


// CONCATENATED MODULE: ./src/app/shopping-list/shopping-edit/shopping-edit.component.css.shim.ngstyle.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var shopping_edit_component_css_shim_ngstyle_styles = [""];


// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__("s7LF");

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__("SVse");

// EXTERNAL MODULE: ./src/app/shared/ingredient.model.ts
var ingredient_model = __webpack_require__("9rNa");

// EXTERNAL MODULE: ./src/app/shopping-list/store/shopping-list.actions.ts
var shopping_list_actions = __webpack_require__("sPvp");

// CONCATENATED MODULE: ./src/app/shopping-list/shopping-edit/shopping-edit.component.ts




// import { ShoppingListService } from '../shopping-list.service';

class shopping_edit_component_ShoppingEditComponent {
    constructor(
    // private shoppingListService: ShoppingListService,
    store) {
        this.store = store;
        this.editMode = false;
    }
    ngOnInit() {
        this.store.select('shoppingList').subscribe(stateData => {
            if (stateData.editedIngredientIndex > -1) {
                this.editMode = true;
                this.editItem = stateData.editedIngredient;
                this.slForm.setValue({
                    name: this.editItem.ingName,
                    amount: this.editItem.amount
                });
            }
            else {
                this.editMode = false;
            }
        });
        // this.subscription = this.shoppingListService.startedEditing.subscribe(
        // 	(index: number) => {
        // 		this.editItemIndex = index;
        // 		this.editMode = true;
        // 		this.editItem = this.shoppingListService.getIngredient(index);
        // 		this.slForm.setValue({
        // 			name: this.editItem.ingName,
        // 			amount: this.editItem.amount
        // 		});
        // 	}
        // );
    }
    onSubmit() {
        const value = this.slForm.value;
        const newIngredient = new ingredient_model["a" /* Ingredient */](value.name, value.amount);
        if (this.editMode) {
            // this.shoppingListService.updateIngredient(
            // 	this.editItemIndex,
            // 	newIngredient
            // );
            this.store.dispatch(new shopping_list_actions["l" /* UpdateIngredient */](newIngredient));
        }
        else {
            // this.shoppingListService.addIngredient(newIngredient);
            this.store.dispatch(new shopping_list_actions["c" /* AddIngredient */](newIngredient));
        }
        this.editMode = false;
        this.slForm.reset();
    }
    onClear() {
        this.slForm.reset();
        this.editMode = false;
        this.store.dispatch(new shopping_list_actions["j" /* StopEdit */]());
    }
    onDelete() {
        // this.shoppingListService.deleteIngredient(this.editItemIndex);
        this.store.dispatch(new shopping_list_actions["f" /* DeleteIngredient */]());
        this.onClear();
    }
    ngOnDestroy() {
        this.store.dispatch(new shopping_list_actions["j" /* StopEdit */]());
        // this.subscription.unsubscribe();
    }
}

// EXTERNAL MODULE: ./node_modules/@ngrx/store/fesm2015/store.js + 2 modules
var store = __webpack_require__("DQLy");

// CONCATENATED MODULE: ./src/app/shopping-list/shopping-edit/shopping-edit.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_ShoppingEditComponent = [shopping_edit_component_css_shim_ngstyle_styles];
var RenderType_ShoppingEditComponent = core["Lb" /* ɵcrt */]({ encapsulation: 0, styles: styles_ShoppingEditComponent, data: {} });

function View_ShoppingEditComponent_1(_l) { return core["jc" /* ɵvid */](0, [(_l()(), core["Nb" /* ɵeld */](0, 0, null, null, 1, "button", [["class", "btn btn-danger mr-1"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onDelete() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), core["hc" /* ɵted */](-1, null, [" Delete "]))], null, null); }
function View_ShoppingEditComponent_0(_l) { return core["jc" /* ɵvid */](0, [core["ec" /* ɵqud */](671088640, 1, { slForm: 0 }), (_l()(), core["Nb" /* ɵeld */](1, 0, null, null, 39, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](2, 0, null, null, 38, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](3, 0, null, null, 37, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (core["Yb" /* ɵnov */](_v, 5).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["Yb" /* ɵnov */](_v, 5).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmit() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), core["Mb" /* ɵdid */](4, 16384, null, 0, fesm2015_forms["D" /* ɵangular_packages_forms_forms_z */], [], null, null), core["Mb" /* ɵdid */](5, 4210688, [[1, 4], ["f", 4]], 0, fesm2015_forms["t" /* NgForm */], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), core["dc" /* ɵprd */](2048, null, fesm2015_forms["b" /* ControlContainer */], null, [fesm2015_forms["t" /* NgForm */]]), core["Mb" /* ɵdid */](7, 16384, null, 0, fesm2015_forms["s" /* NgControlStatusGroup */], [[4, fesm2015_forms["b" /* ControlContainer */]]], null, null), (_l()(), core["Nb" /* ɵeld */](8, 0, null, null, 24, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](9, 0, null, null, 10, "div", [["class", "col-sm-5 form-group"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](10, 0, null, null, 1, "label", [["for", "name"]], null, null, null, null, null)), (_l()(), core["hc" /* ɵted */](-1, null, ["Name"])), (_l()(), core["Nb" /* ɵeld */](12, 0, null, null, 7, "input", [["class", "form-control"], ["id", "name"], ["name", "name"], ["ngModel", ""], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (core["Yb" /* ɵnov */](_v, 13)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (core["Yb" /* ɵnov */](_v, 13).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (core["Yb" /* ɵnov */](_v, 13)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (core["Yb" /* ɵnov */](_v, 13)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), core["Mb" /* ɵdid */](13, 16384, null, 0, fesm2015_forms["c" /* DefaultValueAccessor */], [core["W" /* Renderer2 */], core["t" /* ElementRef */], [2, fesm2015_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["Mb" /* ɵdid */](14, 16384, null, 0, fesm2015_forms["y" /* RequiredValidator */], [], { required: [0, "required"] }, null), core["dc" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [fesm2015_forms["y" /* RequiredValidator */]]), core["dc" /* ɵprd */](1024, null, fesm2015_forms["p" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [fesm2015_forms["c" /* DefaultValueAccessor */]]), core["Mb" /* ɵdid */](17, 671744, null, 0, fesm2015_forms["u" /* NgModel */], [[2, fesm2015_forms["b" /* ControlContainer */]], [6, fesm2015_forms["o" /* NG_VALIDATORS */]], [8, null], [6, fesm2015_forms["p" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, null), core["dc" /* ɵprd */](2048, null, fesm2015_forms["q" /* NgControl */], null, [fesm2015_forms["u" /* NgModel */]]), core["Mb" /* ɵdid */](19, 16384, null, 0, fesm2015_forms["r" /* NgControlStatus */], [[4, fesm2015_forms["q" /* NgControl */]]], null, null), (_l()(), core["Nb" /* ɵeld */](20, 0, null, null, 12, "div", [["class", "col-sm-2 form-group"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](21, 0, null, null, 1, "label", [["for", "amount"]], null, null, null, null, null)), (_l()(), core["hc" /* ɵted */](-1, null, ["Amount"])), (_l()(), core["Nb" /* ɵeld */](23, 0, null, null, 9, "input", [["class", "form-control"], ["id", "amount"], ["name", "amount"], ["ngModel", ""], ["pattern", "^[1-9]+[0-9]*$"], ["required", ""], ["type", "number"]], [[1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (core["Yb" /* ɵnov */](_v, 24)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (core["Yb" /* ɵnov */](_v, 24).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (core["Yb" /* ɵnov */](_v, 24)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (core["Yb" /* ɵnov */](_v, 24)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (core["Yb" /* ɵnov */](_v, 25).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (core["Yb" /* ɵnov */](_v, 25).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (core["Yb" /* ɵnov */](_v, 25).onTouched() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), core["Mb" /* ɵdid */](24, 16384, null, 0, fesm2015_forms["c" /* DefaultValueAccessor */], [core["W" /* Renderer2 */], core["t" /* ElementRef */], [2, fesm2015_forms["a" /* COMPOSITION_BUFFER_MODE */]]], null, null), core["Mb" /* ɵdid */](25, 16384, null, 0, fesm2015_forms["v" /* NumberValueAccessor */], [core["W" /* Renderer2 */], core["t" /* ElementRef */]], null, null), core["Mb" /* ɵdid */](26, 16384, null, 0, fesm2015_forms["y" /* RequiredValidator */], [], { required: [0, "required"] }, null), core["Mb" /* ɵdid */](27, 540672, null, 0, fesm2015_forms["w" /* PatternValidator */], [], { pattern: [0, "pattern"] }, null), core["dc" /* ɵprd */](1024, null, fesm2015_forms["o" /* NG_VALIDATORS */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [fesm2015_forms["y" /* RequiredValidator */], fesm2015_forms["w" /* PatternValidator */]]), core["dc" /* ɵprd */](1024, null, fesm2015_forms["p" /* NG_VALUE_ACCESSOR */], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [fesm2015_forms["c" /* DefaultValueAccessor */], fesm2015_forms["v" /* NumberValueAccessor */]]), core["Mb" /* ɵdid */](30, 671744, null, 0, fesm2015_forms["u" /* NgModel */], [[2, fesm2015_forms["b" /* ControlContainer */]], [6, fesm2015_forms["o" /* NG_VALIDATORS */]], [8, null], [6, fesm2015_forms["p" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, null), core["dc" /* ɵprd */](2048, null, fesm2015_forms["q" /* NgControl */], null, [fesm2015_forms["u" /* NgModel */]]), core["Mb" /* ɵdid */](32, 16384, null, 0, fesm2015_forms["r" /* NgControlStatus */], [[4, fesm2015_forms["q" /* NgControl */]]], null, null), (_l()(), core["Nb" /* ɵeld */](33, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](34, 0, null, null, 6, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](35, 0, null, null, 1, "button", [["class", "btn btn-success mr-1"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), core["hc" /* ɵted */](36, null, [" ", " "])), (_l()(), core["Db" /* ɵand */](16777216, null, null, 1, null, View_ShoppingEditComponent_1)), core["Mb" /* ɵdid */](38, 16384, null, 0, common["k" /* NgIf */], [core["jb" /* ViewContainerRef */], core["gb" /* TemplateRef */]], { ngIf: [0, "ngIf"] }, null), (_l()(), core["Nb" /* ɵeld */](39, 0, null, null, 1, "button", [["class", "btn btn-primary mr-1"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onClear() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), core["hc" /* ɵted */](-1, null, [" Clear "]))], function (_ck, _v) { var _co = _v.component; var currVal_15 = ""; _ck(_v, 14, 0, currVal_15); var currVal_16 = "name"; var currVal_17 = ""; _ck(_v, 17, 0, currVal_16, currVal_17); var currVal_27 = ""; _ck(_v, 26, 0, currVal_27); var currVal_28 = "^[1-9]+[0-9]*$"; _ck(_v, 27, 0, currVal_28); var currVal_29 = "amount"; var currVal_30 = ""; _ck(_v, 30, 0, currVal_29, currVal_30); var currVal_33 = _co.editMode; _ck(_v, 38, 0, currVal_33); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["Yb" /* ɵnov */](_v, 7).ngClassUntouched; var currVal_1 = core["Yb" /* ɵnov */](_v, 7).ngClassTouched; var currVal_2 = core["Yb" /* ɵnov */](_v, 7).ngClassPristine; var currVal_3 = core["Yb" /* ɵnov */](_v, 7).ngClassDirty; var currVal_4 = core["Yb" /* ɵnov */](_v, 7).ngClassValid; var currVal_5 = core["Yb" /* ɵnov */](_v, 7).ngClassInvalid; var currVal_6 = core["Yb" /* ɵnov */](_v, 7).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (core["Yb" /* ɵnov */](_v, 14).required ? "" : null); var currVal_8 = core["Yb" /* ɵnov */](_v, 19).ngClassUntouched; var currVal_9 = core["Yb" /* ɵnov */](_v, 19).ngClassTouched; var currVal_10 = core["Yb" /* ɵnov */](_v, 19).ngClassPristine; var currVal_11 = core["Yb" /* ɵnov */](_v, 19).ngClassDirty; var currVal_12 = core["Yb" /* ɵnov */](_v, 19).ngClassValid; var currVal_13 = core["Yb" /* ɵnov */](_v, 19).ngClassInvalid; var currVal_14 = core["Yb" /* ɵnov */](_v, 19).ngClassPending; _ck(_v, 12, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = (core["Yb" /* ɵnov */](_v, 26).required ? "" : null); var currVal_19 = (core["Yb" /* ɵnov */](_v, 27).pattern ? core["Yb" /* ɵnov */](_v, 27).pattern : null); var currVal_20 = core["Yb" /* ɵnov */](_v, 32).ngClassUntouched; var currVal_21 = core["Yb" /* ɵnov */](_v, 32).ngClassTouched; var currVal_22 = core["Yb" /* ɵnov */](_v, 32).ngClassPristine; var currVal_23 = core["Yb" /* ɵnov */](_v, 32).ngClassDirty; var currVal_24 = core["Yb" /* ɵnov */](_v, 32).ngClassValid; var currVal_25 = core["Yb" /* ɵnov */](_v, 32).ngClassInvalid; var currVal_26 = core["Yb" /* ɵnov */](_v, 32).ngClassPending; _ck(_v, 23, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_31 = !core["Yb" /* ɵnov */](_v, 5).valid; _ck(_v, 35, 0, currVal_31); var currVal_32 = (_co.editMode ? "Update" : "Add"); _ck(_v, 36, 0, currVal_32); }); }
function View_ShoppingEditComponent_Host_0(_l) { return core["jc" /* ɵvid */](0, [(_l()(), core["Nb" /* ɵeld */](0, 0, null, null, 1, "app-shopping-edit", [], null, null, null, View_ShoppingEditComponent_0, RenderType_ShoppingEditComponent)), core["Mb" /* ɵdid */](1, 245760, null, 0, shopping_edit_component_ShoppingEditComponent, [store["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShoppingEditComponentNgFactory = core["Jb" /* ɵccf */]("app-shopping-edit", shopping_edit_component_ShoppingEditComponent, View_ShoppingEditComponent_Host_0, {}, {}, []);


// EXTERNAL MODULE: ./src/app/logging.service.ts
var logging_service = __webpack_require__("7F1V");

// CONCATENATED MODULE: ./src/app/shopping-list/shopping-list.component.ts





class shopping_list_component_ShoppingListComponent {
    // private subscription: Subscription;
    constructor(
    // private shoppingListService: ShoppingListService,
    loggingService, store) {
        this.loggingService = loggingService;
        this.store = store;
    }
    ngOnInit() {
        this.ingredients = this.store.select('shoppingList');
        // this.ingredients = this.shoppingListService.getIngredients();
        // this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
        // 	(ingredients: Ingredient[]) => (this.ingredients = ingredients)
        // );
        // this.loggingService.printLog('Hello from ShoppingListComponent');
    }
    onEditItem(index) {
        // this.shoppingListService.startedEditing.next(index);
        this.store.dispatch(new shopping_list_actions["i" /* StartEdit */](index));
    }
    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }
}

// CONCATENATED MODULE: ./src/app/shopping-list/shopping-list.component.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_ShoppingListComponent = [styles];
var RenderType_ShoppingListComponent = core["Lb" /* ɵcrt */]({ encapsulation: 0, styles: styles_ShoppingListComponent, data: {} });

function View_ShoppingListComponent_1(_l) { return core["jc" /* ɵvid */](0, [(_l()(), core["Nb" /* ɵeld */](0, 0, null, null, 1, "a", [["class", "list-group-item list-group-item-action"], ["style", "cursor: pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.onEditItem(_v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), core["hc" /* ɵted */](1, null, [" ", " (", ") "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.ingName; var currVal_1 = _v.context.$implicit.amount; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_ShoppingListComponent_0(_l) { return core["jc" /* ɵvid */](0, [(_l()(), core["Nb" /* ɵeld */](0, 0, null, null, 8, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](1, 0, null, null, 7, "div", [["class", "col-sm-10"], ["style", "padding-left: 0"]], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](2, 0, null, null, 1, "app-shopping-edit", [], null, null, null, View_ShoppingEditComponent_0, RenderType_ShoppingEditComponent)), core["Mb" /* ɵdid */](3, 245760, null, 0, shopping_edit_component_ShoppingEditComponent, [store["m" /* Store */]], null, null), (_l()(), core["Nb" /* ɵeld */](4, 0, null, null, 0, "hr", [], null, null, null, null, null)), (_l()(), core["Nb" /* ɵeld */](5, 0, null, null, 3, "ul", [["class", "list-group"]], null, null, null, null, null)), (_l()(), core["Db" /* ɵand */](16777216, null, null, 2, null, View_ShoppingListComponent_1)), core["Mb" /* ɵdid */](7, 278528, null, 0, common["j" /* NgForOf */], [core["jb" /* ViewContainerRef */], core["gb" /* TemplateRef */], core["E" /* IterableDiffers */]], { ngForOf: [0, "ngForOf"] }, null), core["ac" /* ɵpid */](131072, common["b" /* AsyncPipe */], [core["k" /* ChangeDetectorRef */]])], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); var currVal_0 = core["ic" /* ɵunv */](_v, 7, 0, core["Yb" /* ɵnov */](_v, 8).transform(_co.ingredients)).ingredients; _ck(_v, 7, 0, currVal_0); }, null); }
function View_ShoppingListComponent_Host_0(_l) { return core["jc" /* ɵvid */](0, [(_l()(), core["Nb" /* ɵeld */](0, 0, null, null, 1, "app-shopping-list", [], null, null, null, View_ShoppingListComponent_0, RenderType_ShoppingListComponent)), core["Mb" /* ɵdid */](1, 245760, null, 0, shopping_list_component_ShoppingListComponent, [logging_service["a" /* LoggingService */], store["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShoppingListComponentNgFactory = core["Jb" /* ɵccf */]("app-shopping-list", shopping_list_component_ShoppingListComponent, View_ShoppingListComponent_Host_0, {}, {}, []);


// EXTERNAL MODULE: ./src/app/shared/shared.module.ts
var shared_module = __webpack_require__("PCNd");

// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 8 modules
var router = __webpack_require__("iInd");

// CONCATENATED MODULE: ./src/app/shopping-list/shopping-list.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListModuleNgFactory", function() { return ShoppingListModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 











var ShoppingListModuleNgFactory = core["Kb" /* ɵcmf */](ShoppingListModule, [], function (_l) { return core["Vb" /* ɵmod */]([core["Wb" /* ɵmpd */](512, core["p" /* ComponentFactoryResolver */], core["vb" /* ɵCodegenComponentFactoryResolver */], [[8, [alert_component_ngfactory["a" /* AlertComponentNgFactory */], router_ngfactory["a" /* ɵangular_packages_router_router_lNgFactory */], ShoppingListComponentNgFactory]], [3, core["p" /* ComponentFactoryResolver */]], core["L" /* NgModuleRef */]]), core["Wb" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["x" /* ɵangular_packages_common_common_a */]]]), core["Wb" /* ɵmpd */](4608, fesm2015_forms["B" /* ɵangular_packages_forms_forms_o */], fesm2015_forms["B" /* ɵangular_packages_forms_forms_o */], []), core["Wb" /* ɵmpd */](4608, logging_service["a" /* LoggingService */], logging_service["a" /* LoggingService */], []), core["Wb" /* ɵmpd */](1073742336, common["c" /* CommonModule */], common["c" /* CommonModule */], []), core["Wb" /* ɵmpd */](1073742336, shared_module["a" /* SharedModule */], shared_module["a" /* SharedModule */], []), core["Wb" /* ɵmpd */](1073742336, fesm2015_forms["A" /* ɵangular_packages_forms_forms_d */], fesm2015_forms["A" /* ɵangular_packages_forms_forms_d */], []), core["Wb" /* ɵmpd */](1073742336, fesm2015_forms["m" /* FormsModule */], fesm2015_forms["m" /* FormsModule */], []), core["Wb" /* ɵmpd */](1073742336, router["s" /* RouterModule */], router["s" /* RouterModule */], [[2, router["y" /* ɵangular_packages_router_router_a */]], [2, router["o" /* Router */]]]), core["Wb" /* ɵmpd */](1073742336, ShoppingListModule, ShoppingListModule, []), core["Wb" /* ɵmpd */](1024, router["m" /* ROUTES */], function () { return [[{ path: "", component: shopping_list_component_ShoppingListComponent }]]; }, [])]); });



/***/ })

};;
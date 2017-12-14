(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BD-Form"] = factory();
	else
		root["BD-Form"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractControl; });
var AbstractControl = /** @class */ (function () {
    function AbstractControl() {
        this._pristineListeners = [];
        this._untouchedListeners = [];
        this._validListeners = [];
        this._pristine = true;
        this._untouched = true;
        this._controlStates = {
            TOUCHED: 'bd-touched',
            UNTOUCHED: 'bd-untouched',
            PRISTINE: 'bd-pristine',
            DIRTY: 'bd-dirty',
            INVALID: 'bd-invalid',
            VALID: 'bd-valid'
        };
    }
    AbstractControl.prototype._updatePristine = function (isPristine, classEl) {
        var _this = this;
        if (isPristine) {
            classEl.classList.remove(this._controlStates.DIRTY);
            classEl.classList.add(this._controlStates.PRISTINE);
        }
        else {
            classEl.classList.remove(this._controlStates.PRISTINE);
            classEl.classList.add(this._controlStates.DIRTY);
        }
        this._pristine = isPristine;
        this._pristineListeners.forEach(function (callback) {
            callback(_this._pristine);
        });
    };
    AbstractControl.prototype._updateUnTouched = function (isUntouched, classEl) {
        var _this = this;
        if (isUntouched) {
            classEl.classList.remove(this._controlStates.TOUCHED);
            classEl.classList.add(this._controlStates.UNTOUCHED);
        }
        else {
            classEl.classList.remove(this._controlStates.UNTOUCHED);
            classEl.classList.add(this._controlStates.TOUCHED);
        }
        this._untouched = isUntouched;
        this._untouchedListeners.forEach(function (callback) {
            callback(_this._untouched);
        });
    };
    AbstractControl.prototype._updateValid = function (isValid, classEl) {
        var _this = this;
        if (isValid) {
            classEl.classList.remove(this._controlStates.INVALID);
            classEl.classList.add(this._controlStates.VALID);
        }
        else {
            classEl.classList.remove(this._controlStates.VALID);
            classEl.classList.add(this._controlStates.INVALID);
        }
        this._valid = isValid;
        this._validListeners.forEach(function (callback) {
            callback(_this._valid);
        });
    };
    return AbstractControl;
}());



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_builder__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BdFormBuilder", function() { return __WEBPACK_IMPORTED_MODULE_0__form_builder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_group_validators__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GroupValidators", function() { return __WEBPACK_IMPORTED_MODULE_1__validators_group_validators__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_control_validators__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ControlValidators", function() { return __WEBPACK_IMPORTED_MODULE_2__validators_control_validators__["a"]; });





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BdFormBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_control__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_group__ = __webpack_require__(5);


var BdFormBuilder = /** @class */ (function () {
    function BdFormBuilder(document) {
        this._document = document;
    }
    BdFormBuilder.prototype.group = function (groupName, formControls, validators) {
        if (formControls === void 0) { formControls = {}; }
        if (validators === void 0) { validators = []; }
        var formControlObjects = {};
        for (var formControlName in formControls) {
            var formControlValue = formControls[formControlName];
            var formControlValidators = [];
            if (formControlValue.validators) {
                formControlValidators = formControlValue.validators;
            }
            if (formControlValue instanceof __WEBPACK_IMPORTED_MODULE_1__form_group__["a" /* BdFormGroup */]) {
                formControlObjects[formControlName] = formControlValue;
                continue;
            }
            formControlObjects[formControlName] = this.control(formControlName, formControlValidators);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__form_group__["a" /* BdFormGroup */](groupName, formControlObjects, validators, this._document);
    };
    BdFormBuilder.prototype.control = function (controlName, controlValidators) {
        return new __WEBPACK_IMPORTED_MODULE_0__form_control__["a" /* BdFormControl */](controlName, controlValidators, this._document);
    };
    return BdFormBuilder;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BdFormControl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_control__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BdFormControl = /** @class */ (function (_super) {
    __extends(BdFormControl, _super);
    function BdFormControl(name, validators, document) {
        if (validators === void 0) { validators = []; }
        var _this = _super.call(this) || this;
        _this._document = document;
        _this._controlEls = _this._findControlsInDom(name);
        _this._originalValue = _this.getValue();
        _this._validators = validators;
        _this._elToPutClasses = _this._findElToPutClasses(name);
        _this._attachToDom();
        return _this;
    }
    /**
     * Unfortunately HTMLInputElements are not standardized very well, i.e. checkbox.value always being 'on', this should help standardize
     * @returns {string}
     */
    BdFormControl.prototype.getValue = function () {
        var value = '';
        this._controlEls.forEach(function (controlEl) {
            var controlElType = controlEl.type;
            switch (controlElType.toUpperCase()) {
                case 'CHECKBOX':
                    value = controlEl.checked;
                    break;
                case 'RADIO':
                    if (controlEl.checked) {
                        value = controlEl.value;
                    }
                    break;
                default:
                    value = controlEl.value;
            }
        });
        return value;
    };
    BdFormControl.prototype.setValue = function (value) {
        this._controlEls.forEach(function (controlEl) {
            var controlElType = controlEl.type;
            switch (controlElType.toUpperCase()) {
                case 'CHECKBOX':
                    controlEl.checked = value === true;
                    break;
                case 'RADIO':
                    var controlElValue = controlEl.value;
                    controlEl.checked = controlElValue === value;
                    break;
                default:
                    controlEl.value = value;
            }
        });
    };
    BdFormControl.prototype.isPristine = function () {
        return this._pristine;
    };
    BdFormControl.prototype.isUntouched = function () {
        return this._untouched;
    };
    BdFormControl.prototype.isValid = function () {
        return this._valid;
    };
    BdFormControl.prototype.disable = function () {
        this._controlEls.forEach(function (controlEl) {
            controlEl.disabled = true;
        });
    };
    BdFormControl.prototype.enable = function () {
        this._controlEls.forEach(function (controlEl) {
            controlEl.disabled = false;
        });
    };
    BdFormControl.prototype.reset = function () {
        this._resetControlStates();
        this._resetControlValues();
    };
    BdFormControl.prototype.registerPristineListener = function (callback) {
        this._pristineListeners.push(callback);
    };
    BdFormControl.prototype.registerUntouchedListener = function (callback) {
        this._untouchedListeners.push(callback);
    };
    BdFormControl.prototype.registerValidListener = function (callback) {
        this._validListeners.push(callback);
    };
    BdFormControl.prototype._findControlsInDom = function (controlName) {
        var controlNodeList = this._document.querySelectorAll("[data-bd-form-control=\"" + controlName + "\"]");
        if (controlNodeList.length === 0) {
            throw new Error("BdFormControl: One or more form controls should be found with name " + controlName);
        }
        var controlEls = [];
        for (var nodeKey in controlNodeList) {
            if (!controlNodeList.hasOwnProperty(nodeKey)) {
                continue;
            }
            controlEls.push(controlNodeList[nodeKey]);
        }
        return controlEls;
    };
    BdFormControl.prototype._addControlListeners = function () {
        var _this = this;
        this._controlEls.forEach(function (controlEl) {
            controlEl.addEventListener('blur', function (event) {
                _this._onControlBlur(event.currentTarget);
            });
            var controlElType = controlEl.type.toUpperCase();
            if (controlElType === 'CHECKBOX' || controlElType === 'RADIO') {
                controlEl.addEventListener('change', function (event) {
                    _this._onControlChange(event.target);
                });
            }
            else {
                controlEl.addEventListener('input', function (event) {
                    _this._onControlChange(event.target);
                });
            }
        });
    };
    BdFormControl.prototype._onControlChange = function (controlEl) {
        var elToPutClasses = this._elToPutClasses || controlEl;
        this._updateControlPristine(elToPutClasses);
        this._updateValid(this._checkValidity(), elToPutClasses);
    };
    BdFormControl.prototype._onControlBlur = function (controlEl) {
        var elToPutClasses = this._elToPutClasses || controlEl;
        this._updateUnTouched(false, elToPutClasses);
    };
    BdFormControl.prototype._updateControlPristine = function (controlEl) {
        var currentValue = this.getValue();
        var elToPutClasses = this._elToPutClasses || controlEl;
        if (currentValue === this._originalValue) {
            this._updatePristine(true, elToPutClasses);
        }
        else {
            this._updatePristine(false, elToPutClasses);
        }
    };
    BdFormControl.prototype._attachToDom = function () {
        this._resetControlStates();
        this._addControlListeners();
    };
    BdFormControl.prototype._resetControlStates = function () {
        var _this = this;
        this._controlEls.forEach(function (controlEl) {
            var elToPutClasses = _this._elToPutClasses || controlEl;
            _this._updatePristine(true, elToPutClasses);
            _this._updateUnTouched(true, elToPutClasses);
            _this._updateValid(_this._checkValidity(), elToPutClasses);
        });
    };
    BdFormControl.prototype._resetControlValues = function () {
        this.setValue(this._originalValue);
    };
    BdFormControl.prototype._checkValidity = function () {
        var _this = this;
        var isValid = true;
        this._validators.forEach(function (validator) {
            if (!validator(_this)) {
                isValid = false;
            }
        });
        return isValid;
    };
    BdFormControl.prototype._findElToPutClasses = function (name) {
        var elToPutClasses = this._document.querySelector("[data-bd-form-control-classes=\"" + name + "\"");
        if (!elToPutClasses)
            return;
        return elToPutClasses;
    };
    return BdFormControl;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_control__["a" /* AbstractControl */]));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BdFormGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_control__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BdFormGroup = /** @class */ (function (_super) {
    __extends(BdFormGroup, _super);
    function BdFormGroup(groupName, formControls, validators, document) {
        if (formControls === void 0) { formControls = {}; }
        if (validators === void 0) { validators = []; }
        var _this = _super.call(this) || this;
        _this._controls = formControls;
        _this._document = document;
        _this._groupEl = _this._findGroupInDom(groupName);
        _this._validators = validators;
        _this._attachToDom();
        return _this;
    }
    BdFormGroup.prototype.getValue = function () {
        var values = {};
        for (var controlKey in this._controls) {
            var control = this._controls[controlKey];
            values[controlKey] = control.getValue();
        }
        return values;
    };
    BdFormGroup.prototype.disable = function () {
        for (var controlKey in this._controls) {
            var control = this._controls[controlKey];
            control.disable();
        }
    };
    BdFormGroup.prototype.enable = function () {
        for (var controlKey in this._controls) {
            var control = this._controls[controlKey];
            control.enable();
        }
    };
    BdFormGroup.prototype.isPristine = function () {
        var isPristine = true;
        for (var controlKey in this._controls) {
            var control = this._controls[controlKey];
            if (control.isPristine() === false) {
                isPristine = false;
                break;
            }
        }
        return isPristine;
    };
    BdFormGroup.prototype.isUntouched = function () {
        var isUntouched = true;
        for (var controlKey in this._controls) {
            var control = this._controls[controlKey];
            if (control.isUntouched() === false) {
                isUntouched = false;
                break;
            }
        }
        return isUntouched;
    };
    BdFormGroup.prototype.isValid = function () {
        var isValid = true;
        for (var controlKey in this._controls) {
            var control = this._controls[controlKey];
            if (control.isValid() === false) {
                isValid = false;
                break;
            }
        }
        if (!isValid) {
            return isValid;
        }
        else {
            isValid = this._runThroughValidators();
        }
        return isValid;
    };
    BdFormGroup.prototype.reset = function () {
        for (var controlKey in this._controls) {
            var control = this._controls[controlKey];
            control.reset();
        }
        this._resetControlStates();
    };
    BdFormGroup.prototype.registerPristineListener = function (callback) {
        for (var controlKey in this._controls) {
            var control = this._controls[controlKey];
            control.registerPristineListener(function () {
                callback();
            });
        }
    };
    BdFormGroup.prototype.registerUntouchedListener = function (callback) {
        for (var controlKey in this._controls) {
            var control = this._controls[controlKey];
            control.registerUntouchedListener(function () {
                callback();
            });
        }
    };
    BdFormGroup.prototype.registerValidListener = function (callback) {
        for (var controlKey in this._controls) {
            var control = this._controls[controlKey];
            control.registerValidListener(function () {
                callback();
            });
        }
    };
    BdFormGroup.prototype.getControl = function (controlName) {
        return this._controls[controlName];
    };
    BdFormGroup.prototype._findGroupInDom = function (groupName) {
        var formGroupEls = this._document.querySelectorAll("[data-bd-form-group=\"" + groupName + "\"]");
        if (formGroupEls.length !== 1) {
            throw new Error("BdFormGroup: Exactly 1 form group should be found with name " + groupName + ", but found " + formGroupEls.length);
        }
        return formGroupEls[0];
    };
    BdFormGroup.prototype._attachToDom = function () {
        var _this = this;
        this.reset();
        this.registerUntouchedListener(function (isUntouched) {
            if (_this._untouched === false) {
                return;
            }
            _this._updateUnTouched(isUntouched, _this._groupEl);
        });
        this.registerPristineListener(function (isPristine) {
            _this._updatePristine(_this.isPristine(), _this._groupEl);
        });
        this.registerValidListener(function (isValid) {
            _this._updateValid(_this.isValid(), _this._groupEl);
        });
    };
    BdFormGroup.prototype._resetControlStates = function () {
        this._updatePristine(true, this._groupEl);
        this._updateUnTouched(true, this._groupEl);
        this._updateValid(this.isValid(), this._groupEl);
    };
    BdFormGroup.prototype._runThroughValidators = function () {
        var _this = this;
        var isValid = true;
        this._validators.forEach(function (validator) {
            if (!validator(_this._controls)) {
                isValid = false;
            }
        });
        return isValid;
    };
    return BdFormGroup;
}(__WEBPACK_IMPORTED_MODULE_0__abstract_control__["a" /* AbstractControl */]));



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupValidators; });
var GroupValidators = /** @class */ (function () {
    function GroupValidators() {
    }
    GroupValidators.atLeastOneSelected = function (controls) {
        var oneSelected = false;
        for (var controlKey in controls) {
            var control = controls[controlKey];
            var controlValue = control.getValue();
            if (controlValue !== false && controlValue !== null && controlValue !== undefined && controlValue !== '') {
                oneSelected = true;
            }
        }
        return oneSelected;
    };
    return GroupValidators;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlValidators; });
var ControlValidators = /** @class */ (function () {
    function ControlValidators() {
    }
    ControlValidators.required = function (control) {
        var controlValue = control.getValue();
        return (controlValue !== false && controlValue !== null && controlValue !== undefined && controlValue !== '');
    };
    ControlValidators.email = function (control) {
        var emailRegEx = /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-‌​9-]+)*/;
        return emailRegEx.test(control.getValue());
    };
    return ControlValidators;
}());



/***/ })
/******/ ]);
});
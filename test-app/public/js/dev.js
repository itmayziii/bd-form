/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40);
module.exports = __webpack_require__(43);


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _form = __webpack_require__(41);

(function () {
    var fb = new _form.BdFormBuilder(document);
    var testForm = fb.group('test-form', {
        "first-name": {
            value: ""
        },
        "last-name": {
            value: "",
            validators: [_form.ControlValidators.required]
        },
        "email": {
            email: "",
            validators: [_form.ControlValidators.email]
        },
        "option": fb.group('test-option[]', {
            "option-one": "",
            "option-two": "",
            "option-three": ""
        }, [_form.GroupValidators.atLeastOneSelected]),
        "test-radio": {
            validators: [_form.ControlValidators.required]
        }
    });

    document.getElementById('disable-button').addEventListener('click', function () {
        testForm.disable();
    });
    //
    // document.getElementById('enable-button').addEventListener('click', () => {
    //     testForm.reset();
    // });
})();

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["BD-Form"] = factory();else root["BD-Form"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 1);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return AbstractControl;
            });
            var AbstractControl = /** @class */function () {
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
                    } else {
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
                    } else {
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
                    } else {
                        classEl.classList.remove(this._controlStates.VALID);
                        classEl.classList.add(this._controlStates.INVALID);
                    }
                    this._valid = isValid;
                    this._validListeners.forEach(function (callback) {
                        callback(_this._valid);
                    });
                };
                return AbstractControl;
            }();

            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {

            module.exports = __webpack_require__(2);

            /***/
        },
        /* 2 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__form_builder__ = __webpack_require__(3);
            /* harmony namespace reexport (by provided) */__webpack_require__.d(__webpack_exports__, "BdFormBuilder", function () {
                return __WEBPACK_IMPORTED_MODULE_0__form_builder__["a"];
            });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__validators_group_validators__ = __webpack_require__(6);
            /* harmony namespace reexport (by provided) */__webpack_require__.d(__webpack_exports__, "GroupValidators", function () {
                return __WEBPACK_IMPORTED_MODULE_1__validators_group_validators__["a"];
            });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__validators_control_validators__ = __webpack_require__(7);
            /* harmony namespace reexport (by provided) */__webpack_require__.d(__webpack_exports__, "ControlValidators", function () {
                return __WEBPACK_IMPORTED_MODULE_2__validators_control_validators__["a"];
            });

            /***/
        },
        /* 3 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return BdFormBuilder;
            });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__form_control__ = __webpack_require__(4);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__form_group__ = __webpack_require__(5);

            var BdFormBuilder = /** @class */function () {
                function BdFormBuilder(document) {
                    this._document = document;
                }
                BdFormBuilder.prototype.group = function (groupName, formControls, validators) {
                    if (formControls === void 0) {
                        formControls = {};
                    }
                    if (validators === void 0) {
                        validators = [];
                    }
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
            }();

            /***/
        },
        /* 4 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return BdFormControl;
            });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__abstract_control__ = __webpack_require__(0);
            var __extends = this && this.__extends || function () {
                var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                    d.__proto__ = b;
                } || function (d, b) {
                    for (var p in b) {
                        if (b.hasOwnProperty(p)) d[p] = b[p];
                    }
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();

            var BdFormControl = /** @class */function (_super) {
                __extends(BdFormControl, _super);
                function BdFormControl(name, validators, document) {
                    if (validators === void 0) {
                        validators = [];
                    }
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
                        } else {
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
                    } else {
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
                    var elToPutClasses = this._document.querySelector("[data-bd-form-control-classes=\"" + name + "\"]");
                    if (!elToPutClasses) return;
                    return elToPutClasses;
                };
                return BdFormControl;
            }(__WEBPACK_IMPORTED_MODULE_0__abstract_control__["a" /* AbstractControl */]);

            /***/
        },
        /* 5 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return BdFormGroup;
            });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__abstract_control__ = __webpack_require__(0);
            var __extends = this && this.__extends || function () {
                var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                    d.__proto__ = b;
                } || function (d, b) {
                    for (var p in b) {
                        if (b.hasOwnProperty(p)) d[p] = b[p];
                    }
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();

            var BdFormGroup = /** @class */function (_super) {
                __extends(BdFormGroup, _super);
                function BdFormGroup(groupName, formControls, validators, document) {
                    if (formControls === void 0) {
                        formControls = {};
                    }
                    if (validators === void 0) {
                        validators = [];
                    }
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
                    } else {
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
            }(__WEBPACK_IMPORTED_MODULE_0__abstract_control__["a" /* AbstractControl */]);

            /***/
        },
        /* 6 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return GroupValidators;
            });
            var GroupValidators = /** @class */function () {
                function GroupValidators() {}
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
            }();

            /***/
        },
        /* 7 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return ControlValidators;
            });
            var ControlValidators = /** @class */function () {
                function ControlValidators() {}
                ControlValidators.required = function (control) {
                    var controlValue = control.getValue();
                    return controlValue !== false && controlValue !== null && controlValue !== undefined && controlValue !== '';
                };
                ControlValidators.email = function (control) {
                    var emailRegEx = /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-‌​9-]+)*/;
                    return emailRegEx.test(control.getValue());
                };
                return ControlValidators;
            }();

            /***/
        }]
        /******/)
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(42)(module)))

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(46)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./main.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  height: 100%;\n  width: 100%; }\n\n.button {\n  background-color: deepskyblue;\n  color: black;\n  padding: 15px 30px;\n  text-transform: uppercase; }\n\n.form-group.bd-invalid h5, .form-group.bd-invalid label {\n  color: red; }\n\n.form-group.bd-valid h5, .form-group.bd-valid label {\n  color: green; }\n\n.form.bd-invalid {\n  border: 5px solid firebrick; }\n\n.form.bd-valid {\n  border: 5px solid darkgreen; }\n\ninput[type=\"text\"].form-control.bd-invalid {\n  border-left: 5px solid firebrick; }\n\ninput[type=\"text\"].form-control.bd-valid {\n  border-left: 5px solid darkgreen; }\n\ninput[type=\"text\"].form-control.bd-pristine {\n  background-color: palegoldenrod; }\n\ninput[type=\"text\"].form-control.bd-dirty {\n  background-color: dimgrey; }\n\ninput[type=\"text\"].form-control.bd-untouched {\n  border-right: 5px solid blueviolet; }\n\ninput[type=\"text\"].form-control.bd-touched {\n  border-right: 5px solid black; }\n", ""]);

// exports


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(47);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 47:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

/******/ });
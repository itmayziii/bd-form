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
class AbstractControl {
    constructor() {
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
    _updatePristine(isPristine, classEl) {
        if (isPristine) {
            classEl.classList.remove(this._controlStates.DIRTY);
            classEl.classList.add(this._controlStates.PRISTINE);
        }
        else {
            classEl.classList.remove(this._controlStates.PRISTINE);
            classEl.classList.add(this._controlStates.DIRTY);
        }
        this._pristine = isPristine;
        this._pristineListeners.forEach((callback) => {
            callback(this._pristine);
        });
    }
    _updateUnTouched(isUntouched, classEl) {
        if (isUntouched) {
            classEl.classList.remove(this._controlStates.TOUCHED);
            classEl.classList.add(this._controlStates.UNTOUCHED);
        }
        else {
            classEl.classList.remove(this._controlStates.UNTOUCHED);
            classEl.classList.add(this._controlStates.TOUCHED);
        }
        this._untouched = isUntouched;
        this._untouchedListeners.forEach((callback) => {
            callback(this._untouched);
        });
    }
    _updateValid(isValid, classEl) {
        if (isValid) {
            classEl.classList.remove(this._controlStates.INVALID);
            classEl.classList.add(this._controlStates.VALID);
        }
        else {
            classEl.classList.remove(this._controlStates.VALID);
            classEl.classList.add(this._controlStates.INVALID);
        }
        this._valid = isValid;
        this._validListeners.forEach((callback) => {
            callback(this._valid);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AbstractControl;



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_0__form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_builder__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "BdFormBuilder", function() { return __WEBPACK_IMPORTED_MODULE_1__form_builder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validators_group_validators__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "GroupValidators", function() { return __WEBPACK_IMPORTED_MODULE_2__validators_group_validators__["a"]; });





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Form {
    constructor(formSelector, document, classPrefix = 'bd') {
        this._originalFormValues = {};
        this._validFormInputs = [
            'INPUT', 'SELECT', 'TEXTAREA'
        ];
        this._formInputStates = {
            TOUCHED: '-touched',
            UNTOUCHED: '-untouched',
            PRISTINE: '-pristine',
            DIRTY: '-dirty',
            INVALID: '-invalid',
            VALID: '-valid'
        };
        this._formStates = {
            PRISTINE: '-pristine',
            DIRTY: '-dirty',
            INVALID: '-invalid',
            VALID: '-valid',
            SUBMITTED: '-submitted'
        };
        this._document = document;
        this._setClassPrefix(classPrefix);
        this._attachToDom(formSelector);
        this._setOriginalFormValues();
    }
    getValues() {
        const formValues = {};
        this._retrieveFormInputs().forEach((formInput) => {
            formValues[formInput.getAttribute('name')] = formInput.value;
        });
        return formValues;
    }
    disable() {
        this._retrieveFormInputs().forEach((formInput) => {
            formInput.setAttribute('disabled', 'true');
        });
    }
    enable() {
        this._retrieveFormInputs().forEach((formInput) => {
            formInput.removeAttribute('disabled');
        });
    }
    isValid() {
        return this._form.checkValidity();
    }
    _attachToDom(formSelector) {
        this._form = HTMLFormElement = this._document.querySelector(formSelector);
        this._addInputListeners();
        this._resetFormClasses();
        this._resetInputClasses();
    }
    _resetFormClasses() {
        this._form.classList.remove(this._formStates.DIRTY);
        this._form.classList.remove(this._formStates.SUBMITTED);
        if (this._form.checkValidity()) {
            this._form.classList.remove(this._formStates.INVALID);
            this._form.classList.add(this._formStates.VALID);
        }
        else {
            this._form.classList.remove(this._formStates.VALID);
            this._form.classList.add(this._formStates.INVALID);
        }
        this._form.classList.add(this._formStates.PRISTINE);
    }
    _resetInputClasses() {
        this._retrieveFormInputs().forEach((formInput) => {
            const inputClassEl = this._getInputClassElement(formInput);
            inputClassEl.classList.remove(this._formInputStates.DIRTY);
            inputClassEl.classList.add(this._formInputStates.PRISTINE);
            inputClassEl.classList.remove(this._formInputStates.TOUCHED);
            inputClassEl.classList.add(this._formInputStates.UNTOUCHED);
            if (formInput.checkValidity()) {
                inputClassEl.classList.remove(this._formInputStates.INVALID);
                inputClassEl.classList.add(this._formInputStates.VALID);
            }
            else {
                inputClassEl.classList.remove(this._formInputStates.VALID);
                inputClassEl.classList.add(this._formInputStates.INVALID);
            }
        });
    }
    _addInputListeners() {
        this._retrieveFormInputs().forEach((formInput) => {
            formInput.addEventListener('blur', (event) => {
                this._onInputBlur(event.currentTarget);
            });
            const formInputType = formInput.getAttribute('type');
            if (formInputType === 'checkbox' || formInputType === 'radio') {
                formInput.addEventListener('change', (event) => {
                    this._onInputChange(event.target);
                });
            }
            else {
                formInput.addEventListener('keyup', (event) => {
                    this._onInputChange(event.target);
                });
            }
        });
    }
    _onInputBlur(target) {
        this._updateValidTouchedInputClasses(target);
    }
    _onInputChange(target) {
        this._updatePristineInputClasses(target);
        this._updateFormPristineClass();
    }
    _updatePristineInputClasses(formInput) {
        const formInputValue = this.getInputValue(formInput);
        const inputName = formInput.getAttribute('name');
        const inputClassEl = this._getInputClassElement(formInput);
        if (this._originalFormValues[inputName] === formInputValue) {
            inputClassEl.classList.remove(this._formInputStates.DIRTY);
            inputClassEl.classList.add(this._formInputStates.PRISTINE);
        }
        else {
            inputClassEl.classList.remove(this._formInputStates.PRISTINE);
            inputClassEl.classList.add(this._formInputStates.DIRTY);
        }
    }
    _updateFormPristineClass() {
        const nonPristineInput = this._retrieveFormInputs().find((formInput) => {
            const formInputValue = this.getInputValue(formInput);
            const formInputName = formInput.getAttribute('name');
            return formInputValue !== this._originalFormValues[formInputName];
        });
        if (nonPristineInput) {
            this._form.classList.remove(this._formStates.PRISTINE);
            this._form.classList.add(this._formStates.DIRTY);
        }
        else {
            this._form.classList.remove(this._formStates.DIRTY);
            this._form.classList.add(this._formStates.PRISTINE);
        }
    }
    _updateValidTouchedInputClasses(formInput) {
        const inputClassEl = this._getInputClassElement(formInput);
        inputClassEl.classList.remove(this._formInputStates.UNTOUCHED);
        inputClassEl.classList.add(this._formInputStates.TOUCHED);
        if (formInput.checkValidity()) {
            inputClassEl.classList.remove(this._formInputStates.INVALID);
            inputClassEl.classList.add(this._formInputStates.VALID);
        }
        else {
            inputClassEl.classList.remove(this._formInputStates.VALID);
            inputClassEl.classList.add(this._formInputStates.INVALID);
        }
    }
    _retrieveFormInputs() {
        const formInputs = [];
        const formControls = this._form.elements;
        for (let i = 0; i < formControls.length; i++) {
            const formControl = formControls[i];
            if (this._validFormInputs.indexOf(formControl.tagName) === -1) {
                continue;
            }
            formInputs.push(formControl);
        }
        return formInputs;
    }
    _setOriginalFormValues() {
        this._retrieveFormInputs().forEach((formInput) => {
            const formInputName = formInput.getAttribute('name');
            this._originalFormValues[formInputName] = this.getInputValue(formInput);
        });
    }
    // noinspection JSMethodCanBeStatic
    _getInputClassElement(formInput) {
        let inputClassEl;
        if (formInput.parentElement.tagName !== 'FORM') {
            inputClassEl = formInput.parentElement;
        }
        else {
            inputClassEl = formInput;
        }
        return inputClassEl;
    }
    // noinspection JSMethodCanBeStatic
    getInputValue(input) {
        const inputType = input.getAttribute('type');
        let inputValue = input.value;
        if ((inputType === 'checkbox' || inputType === 'radio') && input.checked === true) {
            inputValue = (input.checked) ? 'on' : 'off';
        }
        return inputValue;
    }
    _setClassPrefix(classPrefix) {
        for (let inputState in this._formInputStates) {
            if (this._formInputStates.hasOwnProperty(inputState)) {
                this._formInputStates[inputState] = `${classPrefix}${this._formInputStates[inputState]}`;
            }
        }
        for (let formState in this._formStates) {
            if (this._formStates.hasOwnProperty(formState)) {
                this._formStates[formState] = `${classPrefix}${this._formStates[formState]}`;
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Form;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_control__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_group__ = __webpack_require__(6);


class BdFormBuilder {
    constructor(document) {
        this._document = document;
    }
    group(groupName, formControls = {}, validators = []) {
        const formControlObjects = {};
        for (let formControlName in formControls) {
            const formControlValue = formControls[formControlName];
            if (formControlValue instanceof __WEBPACK_IMPORTED_MODULE_1__form_group__["a" /* BdFormGroup */]) {
                formControlObjects[formControlName] = formControlValue;
                continue;
            }
            formControlObjects[formControlName] = this.control(formControlName);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__form_group__["a" /* BdFormGroup */](groupName, formControlObjects, validators, this._document);
    }
    control(controlName) {
        return new __WEBPACK_IMPORTED_MODULE_0__form_control__["a" /* BdFormControl */](controlName, this._document);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BdFormBuilder;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_control__ = __webpack_require__(0);

class BdFormControl extends __WEBPACK_IMPORTED_MODULE_0__abstract_control__["a" /* AbstractControl */] {
    constructor(name, document) {
        super();
        this._document = document;
        this._controlEls = this._findControlsInDom(name);
        this._originalValue = this.getValue();
        this._attachToDom();
    }
    /**
     * Unfortunately HTMLInputElements are not standardized very well, i.e. checkbox.value always being 'on', this should help standardize
     * @returns {string}
     */
    getValue() {
        let value = '';
        this._controlEls.forEach((controlEl) => {
            const controlElType = controlEl.getAttribute('type');
            switch (controlElType.toUpperCase()) {
                case 'CHECKBOX':
                    if (controlEl.checked) {
                        value = controlEl.value;
                    }
                    else {
                        value = 'off';
                    }
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
    }
    setValue(value) {
        this._controlEls.forEach((controlEl) => {
            const controlElType = controlEl.getAttribute('type');
            switch (controlElType.toUpperCase()) {
                case 'CHECKBOX':
                    controlEl.checked = value === true;
                    break;
                case 'RADIO':
                    const controlElValue = controlEl.getAttribute('value');
                    controlEl.checked = controlElValue === value;
                    break;
                default:
                    controlEl.value = value;
            }
        });
    }
    isPristine() {
        return this._pristine;
    }
    isUntouched() {
        return this._untouched;
    }
    isValid() {
        return this._valid;
    }
    disable() {
        this._controlEls.forEach((controlEl) => {
            controlEl.setAttribute('disabled', 'true');
        });
    }
    enable() {
        this._controlEls.forEach((controlEl) => {
            controlEl.removeAttribute('disabled');
        });
    }
    reset() {
        this._resetControlStates();
        this._resetControlValues();
    }
    registerPristineListener(callback) {
        this._pristineListeners.push(callback);
    }
    registerUntouchedListener(callback) {
        this._untouchedListeners.push(callback);
    }
    registerValidListener(callback) {
        this._validListeners.push(callback);
    }
    _findControlsInDom(controlName) {
        const controlNodeList = this._document.querySelectorAll(`[data-bd-form-control="${controlName}"]`);
        if (controlNodeList.length === 0) {
            throw new Error(`BdFormControl: One or more form controls should be found with name ${controlName}`);
        }
        const controlEls = [];
        for (let nodeKey in controlNodeList) {
            if (!controlNodeList.hasOwnProperty(nodeKey)) {
                continue;
            }
            controlEls.push(controlNodeList[nodeKey]);
        }
        return controlEls;
    }
    _addControlListeners() {
        this._controlEls.forEach((controlEl) => {
            controlEl.addEventListener('blur', (event) => {
                this._onControlBlur(event.currentTarget);
            });
            const controlElType = controlEl.getAttribute('type').toUpperCase();
            if (controlElType === 'CHECKBOX' || controlElType === 'RADIO') {
                controlEl.addEventListener('change', (event) => {
                    this._onControlChange(event.target);
                });
            }
            else {
                controlEl.addEventListener('keyup', (event) => {
                    this._onControlChange(event.target);
                });
            }
        });
    }
    _onControlChange(controlEl) {
        this._updateControlPristine(controlEl);
        this._updateValid(controlEl.checkValidity(), controlEl);
    }
    _onControlBlur(controlEl) {
        this._updateUnTouched(false, controlEl);
    }
    _updateControlPristine(controlEl) {
        const currentValue = this.getValue();
        if (currentValue === this._originalValue) {
            this._updatePristine(true, controlEl);
        }
        else {
            this._updatePristine(false, controlEl);
        }
    }
    _attachToDom() {
        this._resetControlStates();
        this._addControlListeners();
    }
    _resetControlStates() {
        this._controlEls.forEach((controlEl) => {
            this._updatePristine(true, controlEl);
            this._updateUnTouched(true, controlEl);
            this._updateValid(controlEl.checkValidity(), controlEl);
        });
    }
    _resetControlValues() {
        this.setValue(this._originalValue);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BdFormControl;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_control__ = __webpack_require__(0);

class BdFormGroup extends __WEBPACK_IMPORTED_MODULE_0__abstract_control__["a" /* AbstractControl */] {
    constructor(groupName, formControls = {}, validators = [], document) {
        super();
        this._controls = formControls;
        this._document = document;
        this._groupEl = this._findGroupInDom(groupName);
        this._validators = validators;
        this._attachToDom();
    }
    getValue() {
        let values = {};
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            values[controlKey] = control.getValue();
        }
        return values;
    }
    disable() {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.disable();
        }
    }
    enable() {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.enable();
        }
    }
    isPristine() {
        let isPristine = true;
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            if (control.isPristine() === false) {
                isPristine = false;
                break;
            }
        }
        return isPristine;
    }
    isUntouched() {
        let isUntouched = true;
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            if (control.isUntouched() === false) {
                isUntouched = false;
                break;
            }
        }
        return isUntouched;
    }
    isValid() {
        let isValid = true;
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
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
    }
    reset() {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.reset();
        }
        this._resetControlStates();
    }
    registerPristineListener(callback) {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.registerPristineListener(() => {
                callback();
            });
        }
    }
    registerUntouchedListener(callback) {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.registerUntouchedListener(() => {
                callback();
            });
        }
    }
    registerValidListener(callback) {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.registerValidListener(() => {
                callback();
            });
        }
    }
    getControl(controlName) {
        return this._controls[controlName];
    }
    _findGroupInDom(groupName) {
        const formGroupEls = this._document.querySelectorAll(`[data-bd-form-group="${groupName}"]`);
        if (formGroupEls.length !== 1) {
            throw new Error(`BdFormGroup: Exactly 1 form group should be found with name ${groupName}, but found ${formGroupEls.length}`);
        }
        return formGroupEls[0];
    }
    _attachToDom() {
        this.reset();
        this.registerUntouchedListener((isUntouched) => {
            if (this._untouched === false) {
                return;
            }
            this._updateUnTouched(isUntouched, this._groupEl);
        });
        this.registerPristineListener((isPristine) => {
            this._updatePristine(this.isPristine(), this._groupEl);
        });
        this.registerValidListener((isValid) => {
            this._updateValid(this.isValid(), this._groupEl);
        });
    }
    _resetControlStates() {
        this._updatePristine(true, this._groupEl);
        this._updateUnTouched(true, this._groupEl);
        this._updateValid(this.isValid(), this._groupEl);
    }
    _runThroughValidators() {
        let isValid = true;
        this._validators.forEach((validator) => {
            if (!validator(this._controls)) {
                isValid = false;
            }
        });
        return isValid;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BdFormGroup;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class GroupValidators {
    constructor() {
    }
    static atLeastOneSelected(controls) {
        let oneSelected = false;
        for (let controlKey in controls) {
            const control = controls[controlKey];
            const controlValue = control.getValue();
            if (controlValue !== 'off' && controlValue !== null && controlValue !== undefined && controlValue !== '') {
                oneSelected = true;
            }
        }
        return oneSelected;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GroupValidators;



/***/ })
/******/ ]);
});
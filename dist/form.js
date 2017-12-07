(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Form"] = factory();
	else
		root["Form"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_0__form__["a"]; });

// export * from './form-builder'; 


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Form {
    constructor(selector, document, fields = []) {
        this.originalFormValues = {};
        this.validFormInputs = [
            'INPUT', 'SELECT', 'TEXTAREA'
        ];
        this.formInputStates = {
            TOUCHED: 'bd-touched',
            UNTOUCHED: 'bd-untouched',
            PRISTINE: 'bd-pristine',
            DIRTY: 'bd-dirty',
            INVALID: 'bd-invalid',
            VALID: 'bd-valid'
        };
        this.formStates = {
            PRISTINE: 'bd-pristine',
            DIRTY: 'bd-dirty',
            INVALID: 'bd-invalid',
            VALID: 'bd-valid',
            SUBMITTED: 'bd-submitted'
        };
        this.selector = selector;
        this.fields = fields;
        this.document = document;
        this.attachToDom();
        this.setOriginalFormValues();
    }
    getValues() {
        const formValues = {};
        this.retrieveFormInputs().forEach((formInput) => {
            formValues[formInput.getAttribute('name')] = formInput.value;
        });
        return this.getValues();
    }
    disable() {
        this.retrieveFormInputs().forEach((formInput) => {
            formInput.setAttribute('disabled', 'true');
        });
    }
    enable() {
        this.retrieveFormInputs().forEach((formInput) => {
            formInput.removeAttribute('disabled');
        });
    }
    attachToDom() {
        this.form = HTMLFormElement = this.document.querySelector(this.selector);
        this.addInputListeners();
        this.resetFormClasses();
        this.resetInputClasses();
    }
    resetFormClasses() {
        this.form.classList.remove(this.formStates.DIRTY);
        this.form.classList.remove(this.formStates.SUBMITTED);
        if (this.form.checkValidity()) {
            this.form.classList.remove(this.formStates.INVALID);
            this.form.classList.add(this.formStates.VALID);
        }
        else {
            this.form.classList.remove(this.formStates.VALID);
            this.form.classList.add(this.formStates.INVALID);
        }
        this.form.classList.add(this.formStates.PRISTINE);
    }
    resetInputClasses() {
        this.retrieveFormInputs().forEach((formInput) => {
            const inputClassEl = this.getInputClassElement(formInput);
            inputClassEl.classList.remove(this.formInputStates.DIRTY);
            inputClassEl.classList.add(this.formInputStates.PRISTINE);
            inputClassEl.classList.remove(this.formInputStates.TOUCHED);
            inputClassEl.classList.add(this.formInputStates.UNTOUCHED);
            if (formInput.checkValidity()) {
                inputClassEl.classList.remove(this.formInputStates.INVALID);
                inputClassEl.classList.add(this.formInputStates.VALID);
            }
            else {
                inputClassEl.classList.remove(this.formInputStates.VALID);
                inputClassEl.classList.add(this.formInputStates.INVALID);
            }
        });
    }
    addInputListeners() {
        this.retrieveFormInputs().forEach((formInput) => {
            formInput.addEventListener('blur', (event) => {
                this.onInputBlur(event.currentTarget);
            });
            formInput.addEventListener('keyup', (event) => {
                this.onInputChange(event.target);
            });
        });
    }
    onInputBlur(target) {
        this.updateValidTouchedInputClasses(target);
    }
    onInputChange(target) {
        this.updatePristineInputClasses(target);
        this.updateFormPristineClass();
    }
    updatePristineInputClasses(formInput) {
        const inputName = formInput.getAttribute('name');
        const inputClassEl = this.getInputClassElement(formInput);
        if (this.originalFormValues[inputName] === formInput.value) {
            inputClassEl.classList.remove(this.formInputStates.DIRTY);
            inputClassEl.classList.add(this.formInputStates.PRISTINE);
        }
        else {
            inputClassEl.classList.remove(this.formInputStates.PRISTINE);
            inputClassEl.classList.add(this.formInputStates.DIRTY);
        }
    }
    updateFormPristineClass() {
        const nonPristineInput = this.retrieveFormInputs().find((formInput) => {
            const formInputName = formInput.getAttribute('name');
            return formInput.value !== this.originalFormValues[formInputName];
        });
        if (nonPristineInput) {
            this.form.classList.remove(this.formStates.PRISTINE);
            this.form.classList.add(this.formStates.DIRTY);
        }
        else {
            this.form.classList.remove(this.formStates.DIRTY);
            this.form.classList.add(this.formStates.PRISTINE);
        }
    }
    updateValidTouchedInputClasses(formInput) {
        const inputClassEl = this.getInputClassElement(formInput);
        inputClassEl.classList.remove(this.formInputStates.UNTOUCHED);
        inputClassEl.classList.add(this.formInputStates.TOUCHED);
        if (formInput.checkValidity()) {
            inputClassEl.classList.remove(this.formInputStates.INVALID);
            inputClassEl.classList.add(this.formInputStates.VALID);
        }
        else {
            inputClassEl.classList.remove(this.formInputStates.VALID);
            inputClassEl.classList.add(this.formInputStates.INVALID);
        }
    }
    retrieveFormInputs() {
        const formInputs = [];
        const formControls = this.form.elements;
        for (let i = 0; i < formControls.length; i++) {
            const formControl = formControls[i];
            if (this.validFormInputs.indexOf(formControl.tagName) === -1) {
                continue;
            }
            formInputs.push(formControl);
        }
        return formInputs;
    }
    setOriginalFormValues() {
        this.retrieveFormInputs().forEach((formInput) => {
            const formInputName = formInput.getAttribute('name');
            this.originalFormValues[formInputName] = formInput.value;
        });
    }
    getInputClassElement(formInput) {
        let inputClassEl;
        if (formInput.parentElement.tagName !== 'FORM') {
            inputClassEl = formInput.parentElement;
        }
        else {
            inputClassEl = formInput;
        }
        return inputClassEl;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Form;



/***/ })
/******/ ]);
});
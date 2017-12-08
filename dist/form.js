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
        this._setClassSelectors(classPrefix);
        this._attachToDom(formSelector);
        this._setOriginalFormValues();
    }
    getValues() {
        const formValues = {};
        this._retrieveFormInputs().forEach((formInput) => {
            formValues[formInput.getAttribute('name')] = formInput.value;
        });
        return this.getValues();
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
            formInput.addEventListener('keyup', (event) => {
                this._onInputChange(event.target);
            });
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
        const inputName = formInput.getAttribute('name');
        const inputClassEl = this._getInputClassElement(formInput);
        if (this._originalFormValues[inputName] === formInput.value) {
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
            const formInputName = formInput.getAttribute('name');
            return formInput.value !== this._originalFormValues[formInputName];
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
            this._originalFormValues[formInputName] = formInput.value;
        });
    }
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
    _setClassSelectors(classPrefix) {
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



/***/ })
/******/ ]);
});
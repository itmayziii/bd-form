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
class Form {

    constructor(selector, fields, document) {
        this._selector = selector;
        this._fields = fields;
        this._document = document;
    }

    onSubmit(callback) {
        const formEl = this._findForm();
        const submitButtonsEl = formEl.querySelector('[type="submit"]');

        submitButtonsEl.addEventListener('click', (event) => {
            event.preventDefault();
        callback(formEl);
    });
    }

    validate() {
        let valid = true;
        const formEl = this._findForm();

        this._fields.forEach((field) => {
            const fieldEl = this._findField(formEl, field.dataSelector);
        const fieldErrorEl = this._document.querySelector(`[${field.dataSelector}-error]`);
        if (!fieldEl || !fieldErrorEl) {
            return;
        }

        const fieldValidity = fieldEl.checkValidity();
        field.validationCallback(fieldValidity, fieldEl, fieldErrorEl);
        if (!fieldValidity) {
            valid = false; // If one field is invalid then the whoe form is invalid
        }
    });

        return valid;
    }

    disable() {
        const formEl = this._findForm();
        this._fields.forEach((field) => {
            const fieldEl = this._findField(formEl, field.dataSelector);
        if (!fieldEl) {
            return;
        }

        fieldEl.setAttribute('disabled', 'true');
    });

        const submitButtonsEl = formEl.querySelector('[type="submit"]');
        submitButtonsEl.setAttribute('disabled', 'true');
    }

    enable() {
        const formEl = this._findForm();
        this._fields.forEach((field) => {
            const fieldEl = this._findField(formEl, field.dataSelector);
        if (!fieldEl) {
            return;
        }

        fieldEl.removeAttribute('disabled');
    });

        const submitButtonsEl = formEl.querySelector('[type="submit"]');
        submitButtonsEl.removeAttribute('disabled');
    }

    getValues() {
        const formValues = {};

        const formEl = this._findForm();
        this._fields.forEach((field) => {
            const fieldEl = this._findField(formEl, field.dataSelector);
        if (!fieldEl) {
            return;
        }

        const fieldName = fieldEl.getAttribute('name');
        formValues[fieldName] = fieldEl.value || '';
    });

        return formValues;
    }

    _findForm() {
        return this._document.querySelector(`[${this._selector}]`);
    }

    _findField(form, fieldSelector) {
        const fieldEl = form.querySelectorAll(`[${fieldSelector}]`);

        if (fieldEl.length !== 1) {
            console.error(`Form: More than 1 or 0 fields are found with selector ${fieldSelector} inside of form: ${this._selector}`);
            return false;
        }

        return fieldEl[0];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Form;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_0__form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_builder__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return __WEBPACK_IMPORTED_MODULE_1__form_builder__["a"]; });


console.log('blah');


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form__ = __webpack_require__(0);


class FormBuilder {
    constructor(document) {
        this._document = document;
    }

    build(formDataSelector, fields) {
        const formEl = this._document.querySelectorAll(`[${formDataSelector}]`);
        const validForm = this.validateFormExists(formEl);
        if (!validForm) {
            return false;
        }

        return new __WEBPACK_IMPORTED_MODULE_0__form__["a" /* Form */](formDataSelector, fields, this._document);
    }

    validateFormExists(form, formDataSelector) {
        if (form.length > 1) {
            console.error(`FormBuilder: More than one form found with selector - ${formDataSelector}`);
            return false;
        }

        if (form.length < 1) {
            console.error(`FormBuilder: No form found with selector - ${formDataSelector}`);
            return false;
        }

        return true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FormBuilder;


/***/ })
/******/ ]);
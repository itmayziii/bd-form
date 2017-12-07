export class Form {

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
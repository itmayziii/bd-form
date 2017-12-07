import { Form } from "./form";

export class FormBuilder {
    constructor(document) {
        this._document = document;
    }

    build(formDataSelector, fields) {
        const formEl = this._document.querySelectorAll(`[${formDataSelector}]`);
        const validForm = this.validateFormExists(formEl);
        if (!validForm) {
            return false;
        }

        return new Form(formDataSelector, fields, this._document);
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
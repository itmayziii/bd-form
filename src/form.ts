import { FieldInterface } from "./field-interface";

export class Form {
    private selector: string;
    private fields: FieldInterface[];
    private document: any;
    private form: HTMLFormElement;
    private originalFormValues: any = {};

    private readonly validFormInputs: string[] = [
        'INPUT', 'SELECT', 'TEXTAREA'
    ];

    private readonly formInputStates: any = {
        TOUCHED: 'bd-touched',
        UNTOUCHED: 'bd-untouched',
        PRISTINE: 'bd-pristine',
        DIRTY: 'bd-dirty',
        INVALID: 'bd-invalid',
        VALID: 'bd-valid'
    };

    private readonly formStates: any = {
        PRISTINE: 'bd-pristine',
        DIRTY: 'bd-dirty',
        INVALID: 'bd-invalid',
        VALID: 'bd-valid',
        SUBMITTED: 'bd-submitted'
    };


    public constructor(selector: string, document: any, fields: FieldInterface[] = []) {
        this.selector = selector;
        this.fields = fields;
        this.document = document;

        this.attachToDom();
        this.setOriginalFormValues();
    }

    public getValues(): any {
        const formValues: any = {};
        this.retrieveFormInputs().forEach((formInput: HTMLInputElement) => {
            formValues[formInput.getAttribute('name')] = formInput.value;
        });

        return this.getValues();
    }

    public disable(): void {
        this.retrieveFormInputs().forEach((formInput: HTMLInputElement) => {
            formInput.setAttribute('disabled', 'true');
        });
    }

    public enable(): void {
        this.retrieveFormInputs().forEach((formInput: HTMLInputElement) => {
            formInput.removeAttribute('disabled');
        });
    }

    private attachToDom(): void {
        this.form = HTMLFormElement = this.document.querySelector(this.selector);
        this.addInputListeners();
        this.resetFormClasses();
        this.resetInputClasses();
    }

    private resetFormClasses(): void {
        this.form.classList.remove(this.formStates.DIRTY);
        this.form.classList.remove(this.formStates.SUBMITTED);

        if (this.form.checkValidity()) {
            this.form.classList.remove(this.formStates.INVALID);
            this.form.classList.add(this.formStates.VALID);
        } else {
            this.form.classList.remove(this.formStates.VALID);
            this.form.classList.add(this.formStates.INVALID);
        }

        this.form.classList.add(this.formStates.PRISTINE);
    }

    private resetInputClasses(): void {
        this.retrieveFormInputs().forEach((formInput: HTMLInputElement) => {
            const inputClassEl = this.getInputClassElement(formInput);

            inputClassEl.classList.remove(this.formInputStates.DIRTY);
            inputClassEl.classList.add(this.formInputStates.PRISTINE);

            inputClassEl.classList.remove(this.formInputStates.TOUCHED);
            inputClassEl.classList.add(this.formInputStates.UNTOUCHED);

            if (formInput.checkValidity()) {
                inputClassEl.classList.remove(this.formInputStates.INVALID);
                inputClassEl.classList.add(this.formInputStates.VALID);
            } else {
                inputClassEl.classList.remove(this.formInputStates.VALID);
                inputClassEl.classList.add(this.formInputStates.INVALID);
            }
        });
    }

    private addInputListeners(): void {
        this.retrieveFormInputs().forEach((formInput: any) => {
            formInput.addEventListener('blur', (event: any) => {
                this.onInputBlur(event.currentTarget);
            });

            formInput.addEventListener('keyup', (event: any) => {
                this.onInputChange(event.target);
            });
        });
    }

    private onInputBlur(target: HTMLInputElement): void {
        this.updateValidTouchedInputClasses(target);
    }

    private onInputChange(target: HTMLInputElement): void {
        this.updatePristineInputClasses(target);
        this.updateFormPristineClass();
    }

    private updatePristineInputClasses(formInput: HTMLInputElement): void {
        const inputName = formInput.getAttribute('name');
        const inputClassEl = this.getInputClassElement(formInput);

        if (this.originalFormValues[inputName] === formInput.value) {
            inputClassEl.classList.remove(this.formInputStates.DIRTY);
            inputClassEl.classList.add(this.formInputStates.PRISTINE);
        } else {
            inputClassEl.classList.remove(this.formInputStates.PRISTINE);
            inputClassEl.classList.add(this.formInputStates.DIRTY);
        }
    }

    private updateFormPristineClass(): void {
        const nonPristineInput = this.retrieveFormInputs().find((formInput: HTMLInputElement) => {
            const formInputName = formInput.getAttribute('name');
            return formInput.value !== this.originalFormValues[formInputName];
        });

        if (nonPristineInput) {
            this.form.classList.remove(this.formStates.PRISTINE);
            this.form.classList.add(this.formStates.DIRTY);
        } else {
            this.form.classList.remove(this.formStates.DIRTY);
            this.form.classList.add(this.formStates.PRISTINE);
        }
    }

    private updateValidTouchedInputClasses(formInput: HTMLInputElement): void {
        const inputClassEl = this.getInputClassElement(formInput);

        inputClassEl.classList.remove(this.formInputStates.UNTOUCHED);
        inputClassEl.classList.add(this.formInputStates.TOUCHED);

        if (formInput.checkValidity()) {
            inputClassEl.classList.remove(this.formInputStates.INVALID);
            inputClassEl.classList.add(this.formInputStates.VALID);
        } else {
            inputClassEl.classList.remove(this.formInputStates.VALID);
            inputClassEl.classList.add(this.formInputStates.INVALID);
        }
    }

    private retrieveFormInputs(): HTMLInputElement[] {
        const formInputs: HTMLInputElement[] = [];
        const formControls = this.form.elements;

        for (let i = 0; i < formControls.length; i++) {
            const formControl: HTMLInputElement = <HTMLInputElement>formControls[i];
            if (this.validFormInputs.indexOf(formControl.tagName) === -1) {
                continue;
            }

            formInputs.push(formControl);
        }

        return formInputs;
    }

    private setOriginalFormValues(): void {
        this.retrieveFormInputs().forEach((formInput) => {
            const formInputName = formInput.getAttribute('name');
            this.originalFormValues[formInputName] = formInput.value;
        });
    }

    private getInputClassElement(formInput: HTMLInputElement): Element {
        let inputClassEl;

        if (formInput.parentElement.tagName !== 'FORM') {
            inputClassEl = formInput.parentElement;
        } else {
            inputClassEl = formInput;
        }

        return inputClassEl;
    }

    // public onSubmit(callback: any) {
    //     const formEl = this.findForm();
    //     const submitButtonsEl = formEl.querySelector('[type="submit"]');
    //
    //     submitButtonsEl.addEventListener('click', (event: Event) => {
    //         event.preventDefault();
    //         callback(formEl);
    //     });
    // }
    //
    // public validate() {
    //     let valid = true;
    //     const formEl = this.findForm();
    //
    //     this.fields.forEach((field) => {
    //         const fieldEl = this.findField(formEl, field.dataSelector);
    //         const fieldErrorEl = this.document.querySelector(`[${field.dataSelector}-error]`);
    //         if (!fieldEl || !fieldErrorEl) {
    //             return;
    //         }
    //
    //         const fieldValidity = fieldEl.checkValidity();
    //         field.validationCallback(fieldValidity, fieldEl, fieldErrorEl);
    //         if (!fieldValidity) {
    //             valid = false; // If one field is invalid then the whoe form is invalid
    //         }
    //     });
    //
    //     return valid;
    // }
    //

    //
    // public enable() {
    //     const formEl = this.findForm();
    //     this.fields.forEach((field) => {
    //         const fieldEl = this.findField(formEl, field.dataSelector);
    //         if (!fieldEl) {
    //             return;
    //         }
    //
    //         fieldEl.removeAttribute('disabled');
    //     });
    //
    //     const submitButtonsEl = formEl.querySelector('[type="submit"]');
    //     submitButtonsEl.removeAttribute('disabled');
    // }
    //

    //
    // private findForm() {
    //     return this.document.querySelector(`[${this.selector}]`);
    // }
    //
    // private findField(form: HTMLFormElement, fieldSelector: string): any {
    //     const fieldEl = form.querySelectorAll(`[${fieldSelector}]`);
    //
    //     if (fieldEl.length !== 1) {
    //         console.error(`Form: More than 1 or 0 fields are found with selector ${fieldSelector} inside of form: ${this.selector}`);
    //         return;
    //     }
    //
    //     return fieldEl[0];
    // }
}
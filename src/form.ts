export class Form {
    private _document: any;
    private _form: HTMLFormElement;
    private _originalFormValues: any = {};

    private readonly _validFormInputs: string[] = [
        'INPUT', 'SELECT', 'TEXTAREA'
    ];

    private _formInputStates: any = {
        TOUCHED: '-touched',
        UNTOUCHED: '-untouched',
        PRISTINE: '-pristine',
        DIRTY: '-dirty',
        INVALID: '-invalid',
        VALID: '-valid'
    };

    private _formStates: any = {
        PRISTINE: '-pristine',
        DIRTY: '-dirty',
        INVALID: '-invalid',
        VALID: '-valid',
        SUBMITTED: '-submitted'
    };


    public constructor(formSelector: string, document: any, classPrefix: string = 'bd') {
        this._document = document;

        this._setClassPrefix(classPrefix);
        this._attachToDom(formSelector);
        this._setOriginalFormValues();
    }

    public getValues(): any {
        const formValues: any = {};
        this._retrieveFormInputs().forEach((formInput: HTMLInputElement) => {
            formValues[formInput.getAttribute('name')] = formInput.value;
        });

        return formValues;
    }

    public disable(): void {
        this._retrieveFormInputs().forEach((formInput: HTMLInputElement) => {
            formInput.setAttribute('disabled', 'true');
        });
    }

    public enable(): void {
        this._retrieveFormInputs().forEach((formInput: HTMLInputElement) => {
            formInput.removeAttribute('disabled');
        });
    }

    public isValid(): boolean {
        return this._form.checkValidity();
    }

    private _attachToDom(formSelector: string): void {
        this._form = HTMLFormElement = this._document.querySelector(formSelector);
        this._addInputListeners();
        this._resetFormClasses();
        this._resetInputClasses();
    }

    private _resetFormClasses(): void {
        this._form.classList.remove(this._formStates.DIRTY);
        this._form.classList.remove(this._formStates.SUBMITTED);

        if (this._form.checkValidity()) {
            this._form.classList.remove(this._formStates.INVALID);
            this._form.classList.add(this._formStates.VALID);
        } else {
            this._form.classList.remove(this._formStates.VALID);
            this._form.classList.add(this._formStates.INVALID);
        }

        this._form.classList.add(this._formStates.PRISTINE);
    }

    private _resetInputClasses(): void {
        this._retrieveFormInputs().forEach((formInput: HTMLInputElement) => {
            const inputClassEl = this._getInputClassElement(formInput);

            inputClassEl.classList.remove(this._formInputStates.DIRTY);
            inputClassEl.classList.add(this._formInputStates.PRISTINE);

            inputClassEl.classList.remove(this._formInputStates.TOUCHED);
            inputClassEl.classList.add(this._formInputStates.UNTOUCHED);

            if (formInput.checkValidity()) {
                inputClassEl.classList.remove(this._formInputStates.INVALID);
                inputClassEl.classList.add(this._formInputStates.VALID);
            } else {
                inputClassEl.classList.remove(this._formInputStates.VALID);
                inputClassEl.classList.add(this._formInputStates.INVALID);
            }
        });
    }

    private _addInputListeners(): void {
        this._retrieveFormInputs().forEach((formInput: any) => {
            formInput.addEventListener('blur', (event: any) => {
                this._onInputBlur(event.currentTarget);
            });

            const formInputType = formInput.getAttribute('type');
            if (formInputType === 'checkbox' || formInputType === 'radio') {
                formInput.addEventListener('change', (event: any) => {
                    this._onInputChange(event.target);
                });
            } else {
                formInput.addEventListener('keyup', (event: any) => {
                    this._onInputChange(event.target);
                });
            }

        });
    }

    private _onInputBlur(target: HTMLInputElement): void {
        this._updateValidTouchedInputClasses(target);
    }

    private _onInputChange(target: HTMLInputElement): void {
        this._updatePristineInputClasses(target);
        this._updateFormPristineClass();
    }

    private _updatePristineInputClasses(formInput: HTMLInputElement): void {
        const formInputValue = this.getInputValue(formInput);
        const inputName = formInput.getAttribute('name');
        const inputClassEl = this._getInputClassElement(formInput);

        if (this._originalFormValues[inputName] === formInputValue) {
            inputClassEl.classList.remove(this._formInputStates.DIRTY);
            inputClassEl.classList.add(this._formInputStates.PRISTINE);
        } else {
            inputClassEl.classList.remove(this._formInputStates.PRISTINE);
            inputClassEl.classList.add(this._formInputStates.DIRTY);
        }
    }

    private _updateFormPristineClass(): void {
        const nonPristineInput = this._retrieveFormInputs().find((formInput: HTMLInputElement) => {
            const formInputValue = this.getInputValue(formInput);
            const formInputName = formInput.getAttribute('name');
            return formInputValue !== this._originalFormValues[formInputName];
        });

        if (nonPristineInput) {
            this._form.classList.remove(this._formStates.PRISTINE);
            this._form.classList.add(this._formStates.DIRTY);
        } else {
            this._form.classList.remove(this._formStates.DIRTY);
            this._form.classList.add(this._formStates.PRISTINE);
        }
    }

    private _updateValidTouchedInputClasses(formInput: HTMLInputElement): void {
        const inputClassEl = this._getInputClassElement(formInput);

        inputClassEl.classList.remove(this._formInputStates.UNTOUCHED);
        inputClassEl.classList.add(this._formInputStates.TOUCHED);

        if (formInput.checkValidity()) {
            inputClassEl.classList.remove(this._formInputStates.INVALID);
            inputClassEl.classList.add(this._formInputStates.VALID);
        } else {
            inputClassEl.classList.remove(this._formInputStates.VALID);
            inputClassEl.classList.add(this._formInputStates.INVALID);
        }
    }

    private _retrieveFormInputs(): HTMLInputElement[] {
        const formInputs: HTMLInputElement[] = [];
        const formControls = this._form.elements;

        for (let i = 0; i < formControls.length; i++) {
            const formControl: HTMLInputElement = <HTMLInputElement>formControls[i];
            if (this._validFormInputs.indexOf(formControl.tagName) === -1) {
                continue;
            }

            formInputs.push(formControl);
        }

        return formInputs;
    }

    private _setOriginalFormValues(): void {
        this._retrieveFormInputs().forEach((formInput) => {
            const formInputName = formInput.getAttribute('name');
            this._originalFormValues[formInputName] = this.getInputValue(formInput);
        });
    }

    // noinspection JSMethodCanBeStatic
    private _getInputClassElement(formInput: HTMLInputElement): Element {
        let inputClassEl;

        if (formInput.parentElement.tagName !== 'FORM') {
            inputClassEl = formInput.parentElement;
        } else {
            inputClassEl = formInput;
        }

        return inputClassEl;
    }

    // noinspection JSMethodCanBeStatic
    private getInputValue(input: HTMLInputElement) {
        const inputType = input.getAttribute('type');

        let inputValue = input.value;
        if ((inputType === 'checkbox' || inputType === 'radio') && input.checked === true) {
            inputValue = (input.checked) ? 'on' : 'off';
        }

        return inputValue;
    }

    private _setClassPrefix(classPrefix: string) {
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
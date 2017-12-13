import { ControlInterface } from "./control-interface";
import { AbstractControl } from "./abstract-control";

export class BdFormControl extends AbstractControl implements ControlInterface {
    private _controlEls: HTMLInputElement[];
    private _document: any;
    private _originalValue: any;
    private _validators: { (c: BdFormControl): boolean }[];

    public constructor(name: string, validators: { (c: BdFormControl): boolean }[] = [], document: any) {
        super();
        this._document = document;
        this._controlEls = this._findControlsInDom(name);
        this._originalValue = this.getValue();
        this._validators = validators;

        this._attachToDom();
    }

    /**
     * Unfortunately HTMLInputElements are not standardized very well, i.e. checkbox.value always being 'on', this should help standardize
     * @returns {string}
     */
    public getValue(): any {
        let value: any = '';
        this._controlEls.forEach((controlEl: HTMLInputElement) => {
            const controlElType = controlEl.type;
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
    }

    public setValue(value: any): void {
        this._controlEls.forEach((controlEl: HTMLInputElement) => {
            const controlElType = controlEl.type;
            switch (controlElType.toUpperCase()) {
                case 'CHECKBOX':
                    controlEl.checked = value === true;
                    break;

                case 'RADIO':
                    const controlElValue = controlEl.value;
                    controlEl.checked = controlElValue === value;
                    break;

                default:
                    controlEl.value = value;
            }
        });
    }

    public isPristine(): boolean {
        return this._pristine;
    }

    public isUntouched(): boolean {
        return this._untouched;
    }

    public isValid(): boolean {
        return this._valid;
    }

    public disable(): void {
        this._controlEls.forEach((controlEl) => {
            controlEl.disabled = true;
        });
    }

    public enable(): void {
        this._controlEls.forEach((controlEl) => {
            controlEl.disabled = false;
        });
    }

    public reset(): void {
        this._resetControlStates();
        this._resetControlValues();
    }

    public registerPristineListener(callback: any): void {
        this._pristineListeners.push(callback);
    }

    public registerUntouchedListener(callback: any): void {
        this._untouchedListeners.push(callback);
    }

    public registerValidListener(callback: any): void {
        this._validListeners.push(callback);
    }

    private _findControlsInDom(controlName: string): HTMLInputElement[] {
        const controlNodeList = this._document.querySelectorAll(`[data-bd-form-control="${controlName}"]`);
        if (controlNodeList.length === 0) {
            throw new Error(`BdFormControl: One or more form controls should be found with name ${controlName}`);
        }

        const controlEls = [];
        for (let nodeKey in controlNodeList) {
            if (!controlNodeList.hasOwnProperty(nodeKey)) {
                continue;
            }

            controlEls.push(<HTMLInputElement> controlNodeList[nodeKey]);
        }

        return controlEls;
    }

    private _addControlListeners(): void {
        this._controlEls.forEach((controlEl) => {
            controlEl.addEventListener('blur', (event: any) => {
                this._onControlBlur(event.currentTarget);
            });

            const controlElType = controlEl.type.toUpperCase();
            if (controlElType === 'CHECKBOX' || controlElType === 'RADIO') {
                controlEl.addEventListener('change', (event: any) => {
                    this._onControlChange(event.target);
                });
            } else {
                controlEl.addEventListener('input', (event: any) => {
                    this._onControlChange(event.target);
                });
            }

        });
    }

    private _onControlChange(controlEl: HTMLInputElement): void {
        this._updateControlPristine(controlEl);
        this._updateValid(this._checkValidity(), controlEl);
    }

    private _onControlBlur(controlEl: HTMLInputElement): void {
        this._updateUnTouched(false, controlEl);
    }

    private _updateControlPristine(controlEl: HTMLInputElement): void {
        const currentValue = this.getValue();
        if (currentValue === this._originalValue) {
            this._updatePristine(true, controlEl);
        } else {
            this._updatePristine(false, controlEl);
        }
    }

    private _attachToDom(): void {
        this._resetControlStates();
        this._addControlListeners();
    }

    private _resetControlStates(): void {
        this._controlEls.forEach((controlEl) => {
            this._updatePristine(true, controlEl);
            this._updateUnTouched(true, controlEl);
            this._updateValid(this._checkValidity(), controlEl);
        });
    }

    private _resetControlValues(): void {
        this.setValue(this._originalValue);
    }

    private _checkValidity(): boolean {
        let isValid = true;
        this._validators.forEach((validator) => {
            if (!validator(this)) {
                isValid = false;
            }
        });

        return isValid;
    }
}
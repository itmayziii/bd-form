import { ControlInterface } from "./control-interface";
import { AbstractControl } from "./abstract-control";

export class BdFormControl extends AbstractControl implements ControlInterface {
    private _controlEls: HTMLInputElement[];
    private _document: any;
    private _originalValue: any;
    private _validators: { (c: BdFormControl): boolean }[];
    private _elToPutClasses: HTMLElement;

    public constructor(name: string, validators: { (c: BdFormControl): boolean }[] = [], document: any) {
        super();
        this._document = document;
        this._controlEls = this._findControlsInDom(name);
        this._originalValue = this.getValue();
        this._validators = validators;

        this._elToPutClasses = this._findElToPutClasses(name);
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

    private _onControlChange(controlEl: HTMLElement): void {
        const elToPutClasses: HTMLElement = this._elToPutClasses || controlEl;
        this._updateControlPristine(elToPutClasses);
        this._updateValid(this._checkValidity(), elToPutClasses);
    }

    private _onControlBlur(controlEl: HTMLElement): void {
        const elToPutClasses = this._elToPutClasses || controlEl;
        this._updateUnTouched(false, elToPutClasses);
    }

    private _updateControlPristine(controlEl: HTMLElement): void {
        const currentValue = this.getValue();
        const elToPutClasses = this._elToPutClasses || controlEl;
        if (currentValue === this._originalValue) {
            this._updatePristine(true, elToPutClasses);
        } else {
            this._updatePristine(false, elToPutClasses);
        }
    }

    private _attachToDom(): void {
        this._resetControlStates();
        this._addControlListeners();
    }

    private _resetControlStates(): void {
        this._controlEls.forEach((controlEl) => {
            const elToPutClasses = this._elToPutClasses || controlEl;
            this._updatePristine(true, elToPutClasses);
            this._updateUnTouched(true, elToPutClasses);
            this._updateValid(this._checkValidity(), elToPutClasses);
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

    private _findElToPutClasses(name: string): HTMLElement {
        const elToPutClasses = this._document.querySelector(`[data-bd-form-control-classes="${name}"`);
        if (!elToPutClasses) return;

        return elToPutClasses
    }
}
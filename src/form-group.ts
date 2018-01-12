import { ControlInterface } from "./control-interface";
import { AbstractControl } from "./abstract-control";

export class BdFormGroup extends AbstractControl implements ControlInterface {
    private _controls: { [key: string]: ControlInterface };
    private _document: any;
    private _groupEl: HTMLElement;
    private _validators: any;

    public constructor(groupName: string, formControls: { [key: string]: ControlInterface } = {}, validators: any[] = [], document: any) {
        super();
        this._controls = formControls;
        this._document = document;
        this._groupEl = this._findGroupInDom(groupName);
        this._validators = validators;

        this._attachToDom();
    }

    public getValue(): any {
        let values: { [key: string]: any } = {};
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            values[controlKey] = control.getValue();
        }

        return values;
    }

    public disable(): void {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.disable();
        }
    }

    public enable(): void {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.enable();
        }
    }

    public isPristine(): boolean {
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

    public isUntouched(): boolean {
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

    public isValid(): boolean {
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
        } else {
            isValid = this._runThroughValidators();
        }

        return isValid;
    }

    public reset(): void {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.reset();
        }

        this._resetControlStates();
    }

    public registerPristineListener(callback: any): void {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.registerPristineListener(() => {
                callback();
            });
        }
    }

    public registerUntouchedListener(callback: any): void {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.registerUntouchedListener(() => {
                callback();
            });
        }
    }

    public registerValidListener(callback: any): void {
        for (let controlKey in this._controls) {
            const control = this._controls[controlKey];
            control.registerValidListener(() => {
                callback();
            });
        }
    }

    public getControl(controlName: string) {
        return this._controls[controlName];
    }

    private _findGroupInDom(groupName: string): HTMLElement {
        const formGroupEls: NodeList = this._document.querySelectorAll(`[data-bd-form-group="${groupName}"]`);
        if (formGroupEls.length !== 1) {
            throw new Error(`BdFormGroup: Exactly 1 form group should be found with name ${groupName}, but found ${formGroupEls.length}`);
        }

        return <HTMLElement>formGroupEls[0];
    }

    private _attachToDom() {
        this.reset();

        this.registerUntouchedListener((isUntouched: boolean) => {
            if (this._untouched === false) {
                return;
            }

            this._updateUnTouched(isUntouched, this._groupEl);
        });

        this.registerPristineListener((isPristine: boolean) => {
            this._updatePristine(this.isPristine(), this._groupEl);
        });

        this.registerValidListener((isValid: boolean) => {
            this._updateValid(this.isValid(), this._groupEl);
        });
    }

    private _resetControlStates() {
        this._updatePristine(true, this._groupEl);
        this._updateUnTouched(true, this._groupEl);
        this._updateValid(this.isValid(), this._groupEl);
    }

    private _runThroughValidators(): boolean {
        let isValid = true;
        this._validators.forEach((validator: any) => {
            if (!validator(this._controls)) {
                isValid = false;
            }
        });

        return isValid;
    }
}
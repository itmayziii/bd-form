export class AbstractControl {
    protected _pristineListeners: any[] = [];
    protected _untouchedListeners: any[] = [];
    protected _validListeners: any[] = [];
    protected _pristine: boolean = true;
    protected _untouched: boolean = true;
    protected _valid: boolean;
    protected readonly _controlStates: { [key: string]: string } = {
        TOUCHED: 'bd-touched',
        UNTOUCHED: 'bd-untouched',
        PRISTINE: 'bd-pristine',
        DIRTY: 'bd-dirty',
        INVALID: 'bd-invalid',
        VALID: 'bd-valid'
    };

    protected _updatePristine(isPristine: boolean, classEl: HTMLElement) {
        if (isPristine) {
            classEl.classList.remove(this._controlStates.DIRTY);
            classEl.classList.add(this._controlStates.PRISTINE);
        } else {
            classEl.classList.remove(this._controlStates.PRISTINE);
            classEl.classList.add(this._controlStates.DIRTY);
        }
        this._pristine = isPristine;

        this._pristineListeners.forEach((callback) => {
            callback(this._pristine);
        });
    }

    protected _updateUnTouched(isUntouched: boolean, classEl: HTMLElement) {
        if (isUntouched) {
            classEl.classList.remove(this._controlStates.TOUCHED);
            classEl.classList.add(this._controlStates.UNTOUCHED);
        } else {
            classEl.classList.remove(this._controlStates.UNTOUCHED);
            classEl.classList.add(this._controlStates.TOUCHED);
        }
        this._untouched = isUntouched;

        this._untouchedListeners.forEach((callback) => {
            callback(this._untouched);
        });
    }

    protected _updateValid(isValid: boolean, classEl: HTMLElement) {
        if (isValid) {
            classEl.classList.remove(this._controlStates.INVALID);
            classEl.classList.add(this._controlStates.VALID);
        } else {
            classEl.classList.remove(this._controlStates.VALID);
            classEl.classList.add(this._controlStates.INVALID);
        }
        this._valid = isValid;

        this._validListeners.forEach((callback) => {
            callback(this._valid);
        });
    }
}
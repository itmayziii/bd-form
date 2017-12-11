import { BdFormControl } from "../form-control";

export class ControlValidators {
    public constructor() {

    }

    public static required(control: BdFormControl): boolean {
        const controlValue = control.getValue();
        return (controlValue !== false && controlValue !== null && controlValue !== undefined && controlValue !== '');
    }

    public static email(control: BdFormControl): boolean {
        const emailRegEx = /[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-‌​9-]+)*/;
        return emailRegEx.test(control.getValue());
    }
}
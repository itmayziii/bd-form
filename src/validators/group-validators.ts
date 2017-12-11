import { ControlInterface } from "../control-interface";

export class GroupValidators {
    public constructor() {

    }

    public static atLeastOneSelected(controls: { [key: string]: ControlInterface }): boolean {
        let oneSelected = false;
        for (let controlKey in controls) {
            const control = controls[controlKey];
            const controlValue = control.getValue();
            if (controlValue !== 'off' && controlValue !== null && controlValue !== undefined && controlValue !== '') {
                oneSelected = true;
            }
        }

        return oneSelected;
    }
}
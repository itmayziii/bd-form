import { BdFormControl } from "./form-control";
import { BdFormGroup } from "./form-group";
import { ControlInterface } from "./control-interface";

export class BdFormBuilder {
    private _document: any;

    public constructor(document: any) {
        this._document = document;
    }

    public group(groupName: string, formControls: { [key: string]: string | BdFormGroup } = {}, validators: any[] = []) {
        const formControlObjects: { [key: string]: ControlInterface } = {};
        for (let formControlName in formControls) {
            const formControlValue = formControls[formControlName];

            if (formControlValue instanceof BdFormGroup) {
                formControlObjects[formControlName] = formControlValue;
                continue;
            }

            formControlObjects[formControlName] = this.control(formControlName);
        }

        return new BdFormGroup(groupName, formControlObjects, validators, this._document);
    }

    public control(controlName: string) {
        return new BdFormControl(controlName, this._document);
    }
}
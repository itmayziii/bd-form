import { ControlInterface } from "./control-interface";

export interface GroupInterface {
    getControl(controlName: string): ControlInterface;

    addControl(control: ControlInterface): void;

    removeControl(controlName: string): void;
}
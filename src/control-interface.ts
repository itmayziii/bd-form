export interface ControlInterface {
    getValue(): any,

    disable(): void,

    enable(): void,

    reset(): void,

    isValid(): boolean,

    isPristine(): boolean,

    isUntouched(): boolean,

    isValid(): boolean,

    registerPristineListener?(callback: any): void,

    registerUntouchedListener?(callback: any): void,

    registerValidListener?(callback: any): void
}
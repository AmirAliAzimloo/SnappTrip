
export interface InputProps {
    id: string;
    element: string;
    type: string;
    placeholder: string;
    className: string;
    validations: any;
    formReseted:boolean;
    onInputHandler: (id: string, value: string, isValid: boolean) => void;
    resetForm:()=>void;
}

export interface InputState {
    value: string;
    isValid: boolean;
}

export enum InputActionKind {
    CHANGE = "CHANGE",
     RESET = "FORM_RESET"
}

export type InputAction = {
    type: InputActionKind;
    value: string;
    validations: any;
};
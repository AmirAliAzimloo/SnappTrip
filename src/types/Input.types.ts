
export interface InputProps {
    id: string;
    element: string;
    type: string;
    placeholder: string;
    className: string;
    validations: any;
    onInputHandler: (id: string, value: string, isValid: boolean) => void;
}

export interface InputState {
    value: string;
    isValid: boolean;
}

export enum InputActionKind {
    CHANGE = "CHANGE"
}

export type InputAction = {
    type: InputActionKind;
    value: string;
    validations: any;
};
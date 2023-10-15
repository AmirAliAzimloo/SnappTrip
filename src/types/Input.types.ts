
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

export type InputAction = {
    type: "CHANGE";
    value: string;
    validations: any;
};
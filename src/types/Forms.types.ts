

export interface FormState {
  inputs: {
    [key: string]: {
      value: string;
      isValid: boolean;
    };
  };
  isFormValid: boolean;
}

export enum FormActionEnum{
  CHANGE = "INPUT_CHANGE",
  RESET = "FORM_RESET"
}

export interface FormAction {
  type: FormActionEnum;
  value?: string;
  isValid?: boolean;
  inputID?: string;
}


export interface FormState {
  inputs: {
    [key: string]: {
      value: string;
      isValid: boolean;
    };
  };
  isFormValid: boolean;
}

export enum FormActionType{
  CHANGE = "INPUT_CHANGE"
}

export interface FormAction {
  type: FormActionType;
  value?: string;
  isValid?: boolean;
  inputID?: string;
}
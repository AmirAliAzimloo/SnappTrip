import { ChangeEvent, FormEvent } from "react";


// types for first hook =>

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

// types for second hook =>

export type FormValues = Record<string, any>;

export type ValidationRule = (value: any) => string | undefined;

export type ValidationRules = Record<string, ValidationRule>;

export interface FormHook {
  values: FormValues;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  setValues: React.Dispatch<React.SetStateAction<FormValues>>;
  validationErrors: Record<string, string | undefined>;
  setValidationRules: React.Dispatch<React.SetStateAction<ValidationRules>>;
}

  
import { useMemo, useReducer } from "react";
import { FormAction, FormActionType, FormState } from "../types/Forms.types";


const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case FormActionType.CHANGE : {
      let isFormValid = true;
      for (const inputID in state.inputs) {
        if (inputID === action.inputID) {
          isFormValid = isFormValid && action.isValid!;
        } else {
          isFormValid = isFormValid && state.inputs[inputID].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputID!]: {
            value: action.value!,
            isValid: action.isValid!,
          },
        },
        isFormValid: isFormValid,
      };
    }
    default: {
      return state;
    }
  }
};

export const useForm = (
  initInputs: FormState["inputs"],
  initFormIsValid: boolean
): [FormState, (id: string, value: string, isValid: boolean) => void] => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initInputs,
    isFormValid: initFormIsValid,
  });

  const onInputHandler = useMemo(() => {
    return (id: string, value: string, isValid: boolean) => {
      dispatch({
        type: FormActionType.CHANGE,
        value,
        isValid,
        inputID: id,
      });
    };
  }, [initInputs]);

  return [formState, onInputHandler];
};
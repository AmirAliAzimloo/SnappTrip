

// Hi 😉💚🌹,
// In this hook i use reducer and handel events and methods with reducer and I think is good but not Enough
// Cause this hook It depends on component Input so I write useForm2 but I let it stay To see you both.


import { useCallback, useReducer } from "react";
import { FormAction, FormActionEnum, FormState } from "../types/Forms.types";


const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case FormActionEnum.CHANGE : {
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
    case FormActionEnum.RESET : {
      return {
        inputs: {
        },
        isFormValid: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const useForm = (initInputs: FormState["inputs"],initFormIsValid: boolean): [FormState, (id: string, value: string, isValid: boolean) => void,()=>void] => {
  
  // state & reducer =>
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initInputs,
    isFormValid: initFormIsValid,
  });


  // methods =>
  const onInputHandler = useCallback(() => {
    return (id: string, value: string, isValid: boolean) => {
      dispatch({
        type: FormActionEnum.CHANGE,
        value,
        isValid,
        inputID: id,
      });
    };
  }, [initInputs]);

  const resetForm = ()=>{
    dispatch({
      type:FormActionEnum.RESET,
    })
  }


  // finally =>

  return [formState, onInputHandler , resetForm];
};
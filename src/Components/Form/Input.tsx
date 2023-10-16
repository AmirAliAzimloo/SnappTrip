import React, { useEffect, useReducer, ChangeEvent, useState } from "react";
import validator from "../../validators/validator";
import { InputAction, InputActionKind, InputProps, InputState } from "../../types/Input.types";
import "./Input.css";

const inputReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case InputActionKind.CHANGE: {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      };
    }
    case InputActionKind.RESET:{
      return {
        ...state,
        value: action.value,
        isValid: false,
      };
    }
    default: {
      return state;
    }
  }
};

const Input: React.FC<InputProps> = (props) => {

  const { id, onInputHandler , resetForm , formReseted  } = props;
  
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const { value, isValid } = mainInput;

  useEffect(() => {
    const timeoutId = setTimeout(() =>onInputHandler(id, value, isValid), 1000);

    return () => clearTimeout(timeoutId);
  }, [value]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  
    dispatch({
      type: InputActionKind.CHANGE,
      value:event.target.value,
      validations: props.validations,
    });
  };

  useEffect(()=>{
    if(formReseted){
    resetForm()
    dispatch({
      type: InputActionKind.RESET,
      value:"",
      validations: props.validations,
    })

      
    }
  },[formReseted])

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${
          mainInput.isValid ? "success" : "error"
        }`}
        value={ mainInput.value}
        onChange={(event)=>{
          onChangeHandler(event)
        }}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={`${props.className} ${
          mainInput.isValid ? "success" : "error"
        }`}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    );

  return <div>{element}</div>;
};

export default Input;
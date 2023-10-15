import React, { useEffect, useReducer, ChangeEvent } from "react";
import validator from "../../validators/validator";

import "./Input.css";

interface InputProps {
  id: string;
  element: string;
  type: string;
  placeholder: string;
  className: string;
  validations: any;
  onInputHandler: (id: string, value: string, isValid: boolean) => void;
}

interface InputState {
  value: string;
  isValid: boolean;
}

type InputAction = {
  type: "CHANGE";
  value: string;
  validations: any;
};

const inputReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      };
    }
    default: {
      return state;
    }
  }
};

const Input: React.FC<InputProps> = (props) => {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const { value, isValid } = mainInput;
  const { id, onInputHandler } = props;

  useEffect(() => {
    onInputHandler(id, value, isValid);
  }, [value]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validations: props.validations,
    });
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${
          mainInput.isValid ? "success" : "error"
        }`}
        value={mainInput.value}
        onChange={onChangeHandler}
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
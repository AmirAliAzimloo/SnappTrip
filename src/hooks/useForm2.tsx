
// Hi 😉💚🌹,
// I write it with only states and functions and I think is faster and better and flexible
// Cause according to S.O.L.I.D methods this hook It only depends on itself.

import { useState,ChangeEvent, FormEvent } from "react";
import { FormHook, FormValues, ValidationRules } from "../types/Forms.types";


export function useForm2(initialValues: FormValues): FormHook {

  // states =>
  const [values, setValues] = useState<FormValues>(initialValues);
  const [validationErrors, setValidationErrors] = useState< Record<string, string | undefined> >({});
  const [validationRules, setValidationRules] = useState<ValidationRules>({});


  // methods =>
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== undefined
    );
    if (!hasErrors) {
      // validation is ok and we can send data to server
      console.log("ارسال داده‌ها", values);
    } else {
     // validation is failed
    }
  };

  const validateField = (fieldName: string, value: any) => {
    if (fieldName in validationRules) {
      const rule = validationRules[fieldName];
      const error = rule(value);
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: error,
      }));
    }
  };

  // finally =>
  return {
    values,
    handleChange,
    handleSubmit,
    setValues,
    validationErrors,
    setValidationRules,
  };
}

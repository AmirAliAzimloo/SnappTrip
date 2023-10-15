import rules from "./rules";
import regex from "./regex";

const validator = (value: string, validations: { value: string, min?: number, max?: number }[]) => {

  let validationResults: boolean[] = [];

  for (const validator of validations) {
    if (validator.value === rules.requiredValue) {
      value.trim().length === 0 && validationResults.push(false);
    }
    if (validator.value === rules.minValue) {
      value.trim().length < validator.min! && validationResults.push(false);
    }
    if (validator.value === rules.maxValue) {
      value.trim().length > validator.max! && validationResults.push(false);
    }
    if (validator.value === rules.emailValue) {
      !regex.testEmail(value) && validationResults.push(false);
    }
  }

  if (validationResults.length) {
    return false;
  } else {
    return true;
  }
};

export default validator;
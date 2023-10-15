const requiredValue: string = "REQUIRED_VALUE";
const minValue: string = "MIN_VALUE";
const maxValue: string = "MAX_VALUE";
const emailValue: string = "EMAIL_VALUE";

export const requiredValidator = (): { value: string } => ({
  value: requiredValue,
});

export const minValidator = (min: number): { value: string, min: number } => ({
  value: minValue,
  min,
});

export const maxValidator = (max: number): { value: string, max: number } => ({
  value: maxValue,
  max,
});

export const emailValidator = (): { value: string } => ({
  value: emailValue,
});

export default { requiredValue, minValue, maxValue, emailValue };
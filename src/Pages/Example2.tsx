
// Hi 😉💚🌹,
// In this example I write faster and better hook and only use this hook without any custom input component
// And handle validation with my pure code without any pakages.

import React , { useRef } from "react";
import { useForm2 } from "../hooks/useForm2";

function Example2() {

  const usernameRef = useRef("")
  const emailRef = useRef("")

  const {
    values,
    handleChange,
    handleSubmit,
    validationErrors,
    setValidationRules,
  } = useForm2({
    username: "",
    email: "",
  });

  // Set validation rules for each field
  React.useEffect(() => {
    const initialValidationRules = {
      username: (value:string) => {
        if (value.length < 3) {
          return "نام کاربری باید حداقل 3 حرف داشته باشد";
        }
        return undefined;
      },
      email: (value:string) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "ایمیل نامعتبر است";
        }
        return undefined;
      },
    };
    setValidationRules(initialValidationRules);
  }, [setValidationRules]);

  return (

    <div className="container-fluid bg-success " >
    <div className="
    container
    d-flex align-items-center justify-content-center flex-column
    vh-100 
    ">
       <form onSubmit={handleSubmit}>
      <div className="col-12 mt-2 d-flex align-items-center justify-content-center flex-column ">
        <label>نام کاربری</label>
        <input
        className="p-3 rounded "
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <div>{validationErrors.username}</div>
      </div>
      <div className="col-12 mt-2 d-flex align-items-center justify-content-center flex-column ">
        <label>ایمیل</label>
        <input
        className="p-3 rounded "
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <div>{validationErrors.email}</div>
      </div>
      <button type="submit" className=" bg-primary rounded p-1 col-12 mt-2">ثبت</button>
    </form>
</div>
  </div>


   
  );
}

export default Example2;
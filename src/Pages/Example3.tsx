
// Hi 😉💚🌹,
// It's same hook in Example2 but for validation I use Yup for show you than this hook is very flexible.


import React from "react";
import * as yup from "yup";
import { useForm2 } from "../hooks/useForm2"; 


// Define validation rules using Yup =>
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "نام کاربری باید حداقل 3 حرف داشته باشد")
    .required("نام کاربری ضروری است"),
  email: yup.string().email("ایمیل نامعتبر است").required("ایمیل ضروری است"),
});

function Example3() {
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

  // Set validation rules using Yup =>
  React.useEffect(() => {
  //Convert yup validation rules to validation functions =>
  
    const initialValidationRules = {
      username: (value:string) => {
        try {
          validationSchema.validateSyncAt("username", { username: value });
          return undefined;
        } catch (error:any) {
          return error.message;
        }
      },
      email: (value:string) => {
        try {
          validationSchema.validateSyncAt("email", { email: value });
          return undefined;
        } catch (error:any) {
          return error.message;
        }
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
      <div  className="col-12 mt-2 d-flex align-items-center justify-content-center flex-column ">
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
      <div  className="col-12 mt-2 d-flex align-items-center justify-content-center flex-column ">
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

export default Example3;
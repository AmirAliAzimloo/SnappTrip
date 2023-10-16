
// Hi 😉💚🌹,
// In this example I write faster and better hook and only use this hook without any custom input component
// And handle validation with my pure code without any pakages and also in this example I use Controlled 
// And Uncontrolled Field together for show you that this hook can use for both type of components

import React , { useRef } from "react";
import { useForm2 } from "../hooks/useForm2";

function Example2() {

  const uncontrolledField = useRef<HTMLInputElement>(null)

  const {
    values,
    handleChange,
    handleSubmit,
    validationErrors,
    setValidationRules,
    resetForm
  } = useForm2({
    username: "",
    email: "",
    uncontrolledField: (uncontrolledField.current !== null && !!uncontrolledField.current.value) ? uncontrolledField.current.value : ""
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
        <label>Username</label>
        <input
        className="p-2 rounded "
        placeholder=" completed please ... "
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <div>{validationErrors.username}</div>
      </div>

      <div className="col-12 mt-2 d-flex align-items-center justify-content-center flex-column ">
        <label>Email</label>
        <input
        className="p-2 rounded "
        placeholder=" completed please ... "
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <div>{validationErrors.email}</div>
      </div>

      <div className="col-12 mt-2 d-flex align-items-center justify-content-center flex-column ">
        <label>uncontrolledField</label>
        <input
        ref={uncontrolledField}
        className="p-2 rounded "
          placeholder=" completed please ... "
          type="text"
          name="uncontrolledField"
          value={values.uncontrolledField}
          onChange={handleChange}
        />
        <div>{validationErrors.email}</div>
      </div>

      <button type="submit" className={` btn bg-primary rounded p-1 col-12 mt-2  ${(!!values.username.trim() && !!values.email.trim() && !!values.uncontrolledField.trim()) ? "" : "disabled"} `}>submit</button>
      <button onClick={(e)=>resetForm(e)}  className=" btn  bg-danger rounded p-1 col-12 mt-2" >
                reset
        </button>
    </form>
</div>
  </div>


   
  );
}

export default Example2;
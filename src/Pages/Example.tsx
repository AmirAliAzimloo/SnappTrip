

// Hi 😉💚🌹,
// In this example I use my custom hook with custom validator that I write and get help from my custom component Input.


import React, { useState } from "react";
import { useForm } from '../hooks/useForm'
import Input from "../Components/Form/Input";
import {
  minValidator,
} from '../validators/rules'


export default function Courses() {

  const [formReseted,setFormReseted] = useState<boolean>(false)

  const [formState, onInputHandler , resetForm] = useForm({
    val1: {
      value: '',
      isValid: false
    },
    val2: {
      value: '',
      isValid: false
    },
  }, false);

  const submitter = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log("Your Data Is => " , formState)
  }



  return (
    <>
      <div className="container-fluid bg-success " >
        <div className="
        container
        d-flex align-items-center justify-content-center flex-column
        vh-100 
        ">
          <form className="form" onSubmit={submitter}>
            <div className="col-12 mt-2 d-flex align-items-center justify-content-center flex-column ">
              <label>val1</label>
              <div >
                <Input
                resetForm={resetForm}
                formReseted={formReseted}
                 className="p-3 rounded "
                  id="val1"
                  element="input"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  type="text"
                  placeholder=" completed please ... "
                />
              </div>
            </div>
            <div className="col-12 mt-2 d-flex align-items-center justify-content-center flex-column ">
            <label>val2</label>
              <div >
                <Input
                resetForm={resetForm}
                formReseted={formReseted}
                 className="p-3 rounded "
                  id="val2"
                  element="input"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  type="text"
                  placeholder=" completed please ... "
                />
              </div>
            </div>
            <button type="submit" className=" bg-primary rounded p-1 col-12 mt-2" >
                submit
            </button>
            <button onClick={()=>{
              setFormReseted(true)
              setTimeout(()=>{
                setFormReseted(false)
              },1000)
            }}  className=" bg-danger rounded p-1 col-12 mt-2" >
                reset
            </button>
          </form>

        </div>
      </div>
    </>
  );
}
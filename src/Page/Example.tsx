import React from "react";
import { useForm } from '../hooks/useForm'
import Input from "../Components/Form/Input";
import {
  minValidator,
} from '../validators/rules'


export default function Courses() {

  const [formState, onInputHandler] = useForm({
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
      <div className="container-fluid" >
        <div className="container">
          <div >
            <span>Title</span>
          </div>
          <form className="form" onSubmit={submitter}>
            <div className="col-6 mt-2 ">
              <div className="name input">
                <Input
                 className=""
                  id="val1"
                  element="input"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  type="text"
                  placeholder=" completed please ... "
                />
                <span className="error-message text-danger"></span>
              </div>
            </div>
            <div className="col-6 mt-2 ">
              <div >
                <Input
                 className=""
                  id="val2"
                  element="input"
                  onInputHandler={onInputHandler}
                  validations={[minValidator(5)]}
                  type="text"
                  placeholder=" completed please ... "
                />
                <span className="error-message text-danger"></span>
              </div>
            </div>
            <button type="submit" className="mt-2" >
                submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
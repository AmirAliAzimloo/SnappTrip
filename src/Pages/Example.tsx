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
      <div className="container-fluid bg-success " >
        <div className="
        container
        d-flex align-items-center justify-content-center flex-column
        vh-100
        ">
          
          <form className="form" onSubmit={submitter}>
            <div className="col-12 mt-2 ">
              <label>val1 : </label>
              <div >
                <Input
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
            <div className="col-12 mt-2 ">
            <label>val2 : </label>
              <div >
                <Input
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
            <button type="submit" className=" bg-danger rounded p-1 col-12 mt-2" >
                submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
import React,{useState} from 'react'

function UseInput(intialValue) {
    const [value,setValue]=useState(intialValue);
    const reset = () =>{
        setValue(intialValue);
    }
    const bind ={
        value,
        onchange:e=>{
            setValue(e.target.value)

        }
    }
  return [value,bind,reset]
}

export default UseInput
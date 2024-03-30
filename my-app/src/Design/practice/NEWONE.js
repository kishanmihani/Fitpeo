import React,{useState} from 'react'

function NEWONE() {
    const [first,setfirst]=useState('')
    const SubmitHandler = e =>{
   e.preventDefault();
     setfirst(first)
     alert(setfirst)
    }
  return (
    <div>
        <form onSubmit={SubmitHandler}>
        <textarea id="textarea" className={first}    />
        <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default NEWONE
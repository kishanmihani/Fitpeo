import React,{useState} from 'react'
import UseInput
 from '../../UseInput';
function InputForm() {
    //const [firstName,setfirstName] =useState('');
    //const [lastName,setlastName] =useState('');
    const [firstName,bindFirstName, resetFirstName] =UseInput('');
    const [lastName,bindlastName, resetlastName] =UseInput('');

    const SubmitHandler=e=>{
     e.preventDefault();
     alert(`Hello ${firstName} ${lastName}`)
     resetFirstName();
     resetlastName();
    }
  return (
    <div>
        <form onSubmit={SubmitHandler}>
            <div>
                <label>First Name</label>
               <input type="text"
               // value={firstName}
               {...bindFirstName}
               //onChange={e=> setfirstName(e.target.value)}
               ></input>
            </div>

            <div>
                <label>Last Name</label>
               <input type="text" //value={lastName}
               //onChange={e=> setlastName(e.target.value)}
               {...bindlastName}>
               
               </input>
            </div>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default InputForm
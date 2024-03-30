import React, {useMemo,useEffect, useReducer, useState ,useRef} from "react";
import Practice from './Practice.js'
function PracticeClass(){

const inputRef=useRef(null );
const intervalRef=useRef()
const [timer,setTimer] =useState(0);

const [CounterOne,setCounterOne] = useState(0);
const [CounterTwo,setCounterTwo] = useState(0);


const incrementOne = () =>{
	setCounterOne(CounterOne + 1)
}

const incrementTwo = () =>{
	setCounterTwo(CounterTwo + 1)
}

const isEven = useMemo(()=>{
let i=0;
while(i < 2000000) i++
	return CounterOne % 2 === 0
},[CounterOne])
	


useEffect(()=>{
debugger;
	inputRef.current.focus();
	intervalRef.current = setInterval(()=>{
	setTimer(prevTimer => prevTimer + 1)
	},1000)
	return ()=>{
	clearInterval(intervalRef.current)
	}
},[])
	
	return (

	 <div>
	  <input value={timer} />
	  <button onClick={()=>clearInterval(intervalRef.current)}>clear hook timer</button>
        <input ref={inputRef} type='text' value='jfjf' />
        <Practice />
        <div style={{border:'1px solid black',padding:'5px'}}>
           <div>
           <button onClick={incrementOne}>count one - {CounterOne}</button>
           <span>{isEven ? 'Even' : 'Odd'}</span>
           </div>
           <div>
           <button onClick={incrementTwo}>count Two - {CounterTwo}</button>
           </div>
        </div>
	 </div>
	)
}

export default PracticeClass
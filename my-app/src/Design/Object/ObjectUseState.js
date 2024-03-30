import React, {useState,useEffect} from 'react';

function ObjectUseState({children}) {
  const [count, setCount] = useState(0)
  //console.log(props)
const [txtvalue,settxtvalue] = useState('')

const handlering = e =>{
  console.log(settxtvalue(e.target.value));;
  console.log(txtvalue + settxtvalue(e.target.value) )
}
const onClickto=e =>{
  alert("kishan this is value  ="+txtvalue)
}

useEffect(()=>{
  // console.log(`hi, ${txtvalue} You Clicked ${count} times`)
   console.log(`hi,  You Clicked  times`)
},[])
  return (
    <div>
      <p>You clicked {count} times</p>
      <textarea  value={txtvalue} onChange={handlering}/>
      <button onClick={onClickto}>submit</button>
      <button onClick={() => setCount(count + 1)}>Click</button>
      {/* <p>{ myprop }</p> */}
      <p>{children}</p>
    </div>
  )
}

export default ObjectUseState;
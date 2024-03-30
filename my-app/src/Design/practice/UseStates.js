import React,{useState} from 'react'

export default function UseStates() {
    const [count, setCount]=useState(0);
console.log('UseState Render');
  return (
    <div>
        <button onClick={()=>setCount(c=> c + 1)}>Count - {count}</button>
    </div>
  )
}

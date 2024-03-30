import React,{useReducer} from 'react'

const initialState =0;
const reducer =(state, action)=>{
    switch(action){
        case 'increment' : return  state + 1;
        case 'decrement' : return state - 1;
        case 'reset':return initialState;;
        default : return state;

    }
}
const UseRaducerprograms = () => {
    const  [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>{count}</div>
        <div onClick={()=>dispatch('increment')}>increment</div>
        <div onClick={()=>dispatch('decrement')}>dcrement</div>
        <div onClick={()=>dispatch('reset')}>reset</div>
    </div>
  )
}

export default UseRaducerprograms
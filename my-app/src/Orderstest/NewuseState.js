import React from 'react'
import { useState,useReducer } from 'react';
// import { View,Text,Button } from 'react-native';
const currencyOptions=[
  // minimumFractionNumber=2,
  // maxmumFractionNumber=2
]
export default function NewuseState() {
    const products = [
        {
         emoji: '🍦',
         name: 'ice cream',
         price: 5
        },
        {
         emoji: '🍩',
         name: 'donuts',
         price: 2.5,
        },
        {
         emoji: '🍉',
         name: 'watermelon',
         price: 4
        }
        ];
        
        function cartReducer(state, product) {
          debugger;
          return [...state, product]
          }
              
    const [cart,setcart]=useReducer(cartReducer, []);
    const [total,settotal]=useState(0);
    function getToal(total){

       return total.toLocaleString(undefined,currencyOptions)
    }
    function add(product1){
      //  debugger;
        setcart(current =>[...current,product1.name])
        settotal(current => current + product1.price)
        console.log(1+"  hi shital")
    }
  return (
    <div>
        
        <p>Shopping cart : {cart.length} total item</p>
        <p>Total : {getToal(total)}</p>
        <p>Total : {getToal(total)}</p>
        <div>
            {products.map(product1 =>(
       <div><p>{product1.emoji}</p>      
       <p>{product1.name}</p>
       <div>
       <button title="Add" onClick={()=>add(product1)}>Add</button>
       <button title="Remove" onClick={()=>{
        setcart([])
        settotal(0)
       }}>Remove</button>
       </div>
       </div>
            ) )}
        </div>
        </div>
  )
}

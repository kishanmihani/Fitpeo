import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function OrderSummary() {
    const navigator= useNavigate();
  return (
    <>
    <div>Order confirmed!</div>
    <button onClick={()=> navigator(-1)}>Go back</button>
    </>
  )
}

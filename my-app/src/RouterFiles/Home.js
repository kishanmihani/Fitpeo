import React from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigator= useNavigate();
  return (
    <>
    <div>Home</div>
    <button onClick={()=> navigator('order-summary')}>Place order</button>
    </>
  )
}

export default Home
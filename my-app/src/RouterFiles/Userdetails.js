import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

function Userdetails() {
  const [searchParams, setsearchParam] = useSearchParams();
  const showActiveUser=searchParams.get('filter') === 'Active';
  return (
    <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Outlet />
        <div>
          <button onClick={()=>setsearchParam({filter:'Active'})}>Active</button>
          <button onClick={()=>setsearchParam({})}> Reset</button>
        </div>
        {
          showActiveUser  ?(
             <h2>Show Active user</h2>) :
             ( <h2>Show all user</h2>)
        }
    </div>
  )
}

export default Userdetails
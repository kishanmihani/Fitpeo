import React from 'react'
import { useParams } from 'react-router-dom';
function Userdetailsid() {
  const params=useParams();
  const userid=params.UserDetailsid;
  return (
    <div>Userdetailsid dynamic {userid}</div>
  )
}

export default Userdetailsid
import React,{useState} from 'react';
import LOLODATA from 'file:///D:/react/my-app/src/Design/kishan.json';
import './CSSFiles/styles.css';
import { FaChevronLeft } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
//import { PiHeartThin } from "react-icons/pi";
import { useEffect } from 'react';
import { TfiAngleUp } from "react-icons/tfi";
import { TfiAngleDown } from "react-icons/tfi";
import { MdOutlineImportantDevices } from 'react-icons/md';
// import LeftSide from './LeftSide';
function MAINDDIV() {
  const [toggle, setToggle] = useState(false)
  const [toggle0, setToggle0] = useState(false)
  const [toggle1, setToggle1] = useState(false)
    const [users, setUsers] = useState([]);
    const [isUp, setIsUp] = useState(true);
    const userlength=users;
    const imgheight=350;
    const imgwidth=350;
    useEffect(() => {
    function fetchData()  {
      debugger;
        fetch('https://fakestoreapi.com/products') //https://fakestoreapi.com/products
          .then(response => response.json())
           .then(data => setUsers(data));
       // console.log(Response + " data" + data)
      };fetchData() 
    }, []);
  return (
    <div>
      
         {/* <button class='button-53' onClick={fetchData}>Fetch Users</button> */}
         <div className='headerproduct'><div><h4 className="headernavlemgth">{users.length} ITEMS</h4></div>
         <div className='lefthide' >
         <FaChevronLeft /> <p id="hidetext">HIDE FILTER</p></div>  </div>

         <div className='productContainer'>
         <div className='parenttagBoxOne'>
          {/* <LeftSide /> */}
          <div id='CUSTOMIZIBLEinput'><input type='checkbox' id="inputcheckboc" /><p id="custotext">CUSTOMIZIBLE</p></div>
         <div id="biglefttog">
          <div onClick={() => setToggle(!toggle)}  id="leftBox"><p id="IDELtext">IDEL FOR</p>
          <p id="Alltext">All</p>{toggle ? <div id="Arrowev"><TfiAngleUp /></div> :<div id="Arrowev"><TfiAngleDown /></div>}</div>
          
          {toggle && (
        <div id="boxtog">
          <p id="unselecttext">unselect all</p>
          <div className="rowdiv">
            <input type='checkbox'  /> <p>Men</p>
          </div>
          <div className="rowdiv">
            <input type='checkbox'  /> <p>Women</p>
          </div>
          <div className="rowdiv">
            <input type='checkbox'  /> <p>Baby & kide</p>
          </div>
        </div>
      )}
      </div>

      <div id="biglefttog">
          <div onClick={() => setToggle0(!toggle0)}  id="leftBox"><p id="IDELtext">OCCASION</p>
          <p id="Alltext">All</p>{toggle0 ? <div id="Arrowev"><TfiAngleUp /></div> :<div id="Arrowev"><TfiAngleDown /></div>}</div>
          
          {toggle0 && (
        <div id="boxtog">
          <p id="unselecttext">unselect all</p>
          <div className="rowdiv">
            <input type='checkbox'  /> <p>Men</p>
          </div>
          <div className="rowdiv">
            <input type='checkbox'  /> <p>Women</p>
          </div>
          <div className="rowdiv">
            <input type='checkbox'  /> <p>Baby & kide</p>
          </div>
        </div>
      )}
      </div>

      <div id="biglefttog">
          <div onClick={() => setToggle1(!toggle1)}  id="leftBox"><p id="IDELtext">WORK</p>
          <p id="Alltext">All</p>{toggle1 ? <div id="Arrowev"><TfiAngleUp /></div> :<div id="Arrowev"><TfiAngleDown /></div>}</div>
          
          {toggle1 && (
        <div id="boxtog">
          <p id="unselecttext">unselect all</p>
          <div className="rowdiv">
            <input type='checkbox'  /> <p>Men</p>
          </div>
          <div className="rowdiv">
            <input type='checkbox'  /> <p>Women</p>
          </div>
          <div className="rowdiv">
            <input type='checkbox'  /> <p>Baby & kide</p>
          </div>
        </div>
      )}
      </div>
          
          </div>
        {users.length > 0 && (
       <div className='parenttagBox'>
         {users.map(user => (
            <div className='Box' title={user.title}>
           {/* <div key={user.id}><span className='boxId'>Id :</span><span>  {user.id}</span></div> */}
           <div key={user.id}><img id="productimg" src={user.image} height={imgheight} width={imgwidth} />  </div>
           <div key={user.id}><p id="ProductName" >{user.title}</p></div>
           <div key={user.id} id="Producttext-parent"><p id="Productothertext" ><span id="text-span">Sign in</span> or Create an Account to see priceing</p><div id="heatProduct"><CiHeart /></div></div>
           {/* <div key={user.id}>{user["data"]["color"]}</div> */}
           {/* <div key={user.id}>{user.data.price}</div>
           <div key={user.id}>{user.data.generation}</div> */}
           
           </div>
         ))}
       </div>
     )}
     </div>
    </div>
  )
}

export default MAINDDIV;
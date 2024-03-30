import React from 'react'
import Manatee from './Manatee';
import {Routes,Link,BrowserRouter,Route, Switch } from 'react-router-dom';
import Whale from './Whale';
import Narehal from './Narehal';
function RouterJs() {
  return (
    <div>
        <div className="wrapper">
 <h1>Marine Mammals</h1>
 <nav>
 <ul>
 <li><Link to="/manatee">Manatee</Link></li>
 <li><Link to="/Narwhal">Narwhal</Link></li>
 <li><Link to="/Whale">Whale</Link></li>
 </ul>
 </nav>
 {/* <BrowserRouter >
 <Routes> 
 <Switch>
 <Route path="/manatee">
 <Manatee />
 </Route>
 <Route path="/Narehal">
<Narehal />
 </Route>
 <Route path="/whale">
<whale />
 </Route>
 </Switch> 
 </Routes> 
   </BrowserRouter  > */}
 </div>

    </div>
  )
}

export default RouterJs
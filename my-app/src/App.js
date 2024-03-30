// import { ObjectUseState } from "./Design/Object/ObjectUseState";
import ObjectUseState from "./Design/Object/ObjectUseState";
import "../node_modules/video-react/dist/video-react.css";
import { UseReducerser } from "./Design/practice/UseReducerser";
import UseStates from "./Design/practice/UseStates";
import  './App.css';
 import React, { useReducer, useState } from "react";
import data from "./AnimalDesign/data";
// import './AnimalDesign/AnimalDesign.css'
import AnimalDesign from "./AnimalDesign/AnimalDesign";

import UseRaducerprograms from "./UseRaducerprograms";

import {
  Routes,
  Link,
  BrowserRouter,
  Route,
  Switch,
  Links,
} from "react-router-dom";
import Practice from "./Practice/Practice";
import PracticeClass from "./Practice/PracticeClass";
import Home from "./RouterFiles/Home";
// import About from "./RouterFiles/About";
import Navbar from "./RouterFiles/Navbar";
import OrderSummary from "./RouterFiles/OrderSummary";
// import Orderheader from "./Orderstest/Orderheader";
import Nomatch from "./RouterFiles/Nomatch";
import Products from "./RouterFiles/Products";
import New from "./RouterFiles/New";
import Featured from "./RouterFiles/Featured";
import Userdetails from "./RouterFiles/Userdetails";
import Userdetailsid from "./RouterFiles/Userdetailsid";
import Profiles from "./RouterFiles/Profiles";
import { AuthProvider } from "./RouterFiles/auth";
import Login from "./RouterFiles/Login";
import RequireAuth from "./RouterFiles/RequireAuth";
import Squar from "./RouterFiles/Squar";
import Board from "./RouterFiles/Board";
import CakeOfContainer from "./Redux-Component/CakeOfContainer";
import { Provider } from "react-redux";
import store from "./React-redux-Demo/Cake/store";
import ProtIndex from "./Portfolio/ProtIndex";
import VeedHome from "./Veed/VeedHome";
import NewwVeed from "./Veed/NewwVeed";
import DashboardIndex from './DashboardAssigment/DashboardIndex';
import Imagedata from "./Portfolio/Imagedata.json";
const LazyAbout=React.lazy(()=>import('./RouterFiles/About'))
export const UserContext= React.createContext();
export const ChannelContext= React.createContext();

const initialState ={
  firstCounter:0
};
const reducer = (state, action)=>{
  switch(action.type){
    case 'increment':
      return {firstCounter: state.firstCounter + 1};
      case 'Decrement':
        return {firstCounter: state.firstCounter - 1};  
        case 'Reset':
          return initialState;
    default :
       return state;   
  }
}
function App() {
    const [count , dispatch]=useReducer(reducer, initialState)
  return (

    <div className="App">
    {/* <Manatee props="sduh" /> */}
    {/* <AuthProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={
      <React.Suspense fallback='Loading...'>
      <LazyAbout />
      </React.Suspense>} />
      <Route path="order-summary" element={<OrderSummary />} />
      <Route path='*' element={<Nomatch />} /> 
      <Route path='product' element={<Products />} > 
              <Route index element={<New />} /> 
              <Route path='new' element={<New />} /> 
              <Route path='Featured' element={<Featured />} /> 
       </Route>
       <Route path='UserDetails' element={<Userdetails />}>
               <Route path=':UserDetailsid' element={<Userdetailsid />}></Route>
      </Route>         
      <Route path='Profiles' element={<RequireAuth><Profiles /> </RequireAuth> }></Route>
      <Route path='Login' element={<Login />}></Route>
    </Routes>
    </AuthProvider>
    
    <div>
    </div>
    <Board /> */}
    {/* <Squar  prop="lcsdo" /> */}
  {/*  <CakeOfContainer /> */}
  {/* <VeedHome /> */}
  <Routes>
      <Route path="/" element={<DashboardIndex />} />
      {/*<Route path="/Newproject" element={<NewwVeed />} />*/}
      {/*<Route path="/Practie" element={<PracticeClass />} />*/}
      {/*<Route path="/Practievgg" element={<DashboardIndex />} />*/}
      </Routes>
      
{/* <NewwVeed /> */}
  <div style={{display:'none'}}>
    <div>Count - {count.firstCounter}</div>
    <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
    <button onClick={()=> dispatch({type:'Decrement'})}>Decrement</button>
    <button onClick={()=> dispatch({type:'Reset'})}>Reset</button>
  </div>
   {/* <UserContext.Provider value={'king kishan'} style={{display:'none'}}>   
   <ChannelContext.Provider value={'star pluse'}>
    <ProtIndex style={{display:'none'}} />
    </ChannelContext.Provider>
    </UserContext.Provider> */}
    </div>

  );
}

export default App;

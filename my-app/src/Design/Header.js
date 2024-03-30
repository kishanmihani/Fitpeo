import React from 'react';
import src from '../logo.svg';
import './CSSFiles/styles.css';
import src2 from './img/Icons.svg';
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
var imgsp=src;var  sizeimg=36;
var imgsp2=src2;

function Header() {
  return (
    <div className='headerContainer'>
        <div className="headerFirstContainer">
            {/* header img */}
            <div><img src={imgsp} width={sizeimg} height={sizeimg} /></div>

            {/* herder heading */}
            <div><p style={{fontSize:36,fontWeight:'bolder',marginTop:-10}}>Logo</p></div>

            {/* header left side select box and icon */}
            <div id="headerICon"><select id="selecttag">    
              <option>ENG</option>
              <option>ENG</option>
              <option>ENG</option>
              <option>ENG</option>
              </select>

              <div id="heatsymbol"><CiHeart /></div>
              <div id="Shopsymbol"><MdOutlineShoppingCart /></div>
              <div id="Usersymbol"><CiUser /></div>
              {/* <img src={imgsp2}  height='20' /> */}</div>
        </div>

        <div className="headerSecondContainer">
            <div className='headernav'><p>Ship</p></div>
            <div className='headernav'><p>Shop</p></div>
            <div className='headernav'><p>Orders</p></div>
            <div className='headernav'><p>Deliver</p></div>
        </div>
    </div>
  )
}

export default Header
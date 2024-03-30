import React from 'react';
import { FaGooglePay } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import './CSSFiles/styles.css';
function Footer() {
  return (
    <div id="Footeru">
       <div id="Footeru" style={{width:"96%",justifyContent:'centers'}}>        <div style={{width:'58%'}}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for Updates abc.</p>
          <div id="inputsbus">
            <input type='text' id="inputsbusbtn"></input>
            <button id="subscbtn">SUBSCRIBE</button>
          </div>
        </div>

        <div>
            <ul id="footerlist">
                <li id="listhead">Contact Us</li>
                <li>+44 221 133 5360</li>
                <li>customercare@abc.com</li>

                <li id="listhead" >CURRENCY</li>
                <li>USD</li>
                <li id="smalltext">Tranction will be completed Euros and a currency refference is avaliable on hover.</li>
            </ul>
        </div>
        </div>
        <div id="nextfootetline">
            <ul id="footerlist">
                <li id="listhead">abc</li>
                <li>About us</li>
                <li>stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact us</li>
            </ul>

            <ul id="footerlist">
                <li id="listhead">Quick Link</li>
                <li>Orders shipping</li>
                <li>Join as a sellect</li>
                <li>Payment</li>
                <li>Returns & Refunds</li>
                <li>FAQ</li>
            </ul>

            <ul id="footerlist">
                <li id="listhead">Follow Up</li>
                <li id="ciond"><FaGooglePay /><FaAmazonPay /></li>
                <li id="listhead">Abc Accept</li>
                <li id="ciond"><FaGooglePay /><FaAmazonPay /></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
import { FaArrowPointer,FaCrop } from "react-icons/fa6";
import { FaRegHandPaper } from "react-icons/fa";
// import { TbPlayerTrackPrev } from "react-icons/tb";  previous icon
// import { TbPlayerTrackNext } from "react-icons/tb"; next icon
// import { MdOutlinePlayCircle } from "react-icons/md"; play button
import { MdFileUpload } from "react-icons/md";
import React, { Component } from 'react';
import { upload } from '@testing-library/user-event/dist/upload';
import './VeedHome.css';
import { FigureCaption } from 'react-bootstrap';
import { Player } from 'video-react';
import poster from '../Images/Profile.jpg';
import logoimg  from '../Images/veed.io-black.svg'
import { CgMenuGridR } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdAddBox } from "react-icons/md";
import { MdOutlineRefresh } from "react-icons/md";
import Audio from './Audio'


export default class NewwVeed extends Component {
    constructor(props){
        super(props)
          this.state={
            cardNumber:'000000012341234',
            cartExpary:'12/24',
            CountryCode:'+91',
            mobileNumber:'9977305440'
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(element){
        console.log(element.target.value)
        debugger;
        if(element.target.id =="CardNumber" ){
        this.setState({cardNumber: element.target.value})
        }
        if(element.target.id =="CountryCode" ){
        this.setState({CountryCode: element.target.value})
        }
        if(element.target.id =="mobileNumber" ){
        this.setState({mobileNumber: element.target.value})
        }
        if(element.target.id =="cartExpary" ){
        this.setState({cartExpary: element.target.value})
        }
    }
  render() {
    return (
      <div>
      <div id="Container-card" style={{display:'none'}}>
        <div id="card-container">
            {/* card design display */}
            <div id="cardnumber-div">
                <h3 id="cardnumber-val">{this.state.cardNumber}</h3>
            </div>
            <div id="name-ext-container">
                <div>
                    <p>John Doe</p>
                    <p>{this.state.CountryCode} {this.state.mobileNumber}</p>
                </div>
                <div>
                    <p>Expery Dt</p>
                    <p>{this.state.cartExpary}</p>
                </div>
            </div>
          </div>
        <div id="forminput">  
            {/* card input feild  form */}
            <form>
     <div>
    <label>Card Name</label>
    <input onChange={this.handleChange} id="CardNumber" value={this.state.cardNumber}></input>
</div>
<div>
    <label>Mobile Number</label>
    <div style={{display:'flex'}}>
    <input id="CountryCode" style={{width:'80px'}} onChange={this.handleChange}value={this.state.CountryCode}/><input id="mobileNumber" onChange={this.handleChange}  value={this.state.mobileNumber}></input></div>
</div>
<div>
    <label>Expery Date</label>
    <input id="cartExpary" onChange={this.handleChange}  value={this.state.cartExpary}></input>
</div>
            </form>
        </div>
      </div>

      {/* video editor design */}
      <div id="editor-page">
        <div id="editor-first-container"> 
          {/*  First Container */}
           <div id="first-container">
              <div id="Assets-text">
               <p>Assets</p>
               </div>
              <div id="first-container-last">
                 <ul id="small-video-parent">
                    <li id="small-video">
                        <figure>
                            <div >
                            <Player
                              playsInline
                               poster={poster}
                               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                              />
                            </div>
                            <FigureCaption>projectA1</FigureCaption>
                        </figure>
                    </li>

                    <li id="small-video">
                        <figure>
                            <div >
                            <Player
                              playsInline
                               poster={poster}
                               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                              />
                            </div>
                            <FigureCaption>projectA1</FigureCaption>
                        </figure>
                    </li>
                    </ul>
                   
                </div>
                 <div id="first-container-icon-bottom">
                    <MdAddBox />
                    <div id="bottom-first-two-icon">
                    <TfiMenuAlt />
                    <CgMenuGridR />
                    </div>
                    </div>               
           </div>
           {/*   first  container*/}
           {/* Second container */}
           <div>
                 <div id="second-edit-container">
                  <p><FaArrowPointer /></p>
                  <p><FaRegHandPaper /></p>
                  <p>< FaCrop /></p>
                   <select value='25' type='number'>
                   <option>0%</option>
                  <option>25%</option>
                  <option>50%</option>
                  <option>75%</option>
                  <option>100%</option>
                   </select>
                 </div>
                 <div id="video-view">
                  <div >
                            <Player
                              playsInline
                               poster={poster}
                               src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                              />
                            </div>
                 </div>
           </div>
           <div>
            <div  id="first-third-box-icon">
               <i>< MdFileUpload /></i>
               <i id="Export">Export</i>
            </div>
            <div>
               <div> <h3>Properties</h3>
                 <div id="property-first-box">
                   <div  > 
                   <p>Scale </p>
                    <input type='range' />
                    <input value='100%' type='text'/>
                   </div>

                   <div style={{display:'flex'}} > 
                   <p>Opacity </p>
                    <input type='range' />
                    <input value='100%' type='text'/>
                   </div>

                   <div style={{display:'flex'}} > 
                   <p >Rotation </p>
                    <input type='range' value="100%" style={{display:'none'}} />
                    <div id="refresh-container"><MdOutlineRefresh />x
                    <input value='0.0' type='text'/></div>
                   </div>

                   <div style={{display:'flex'}} > 
                   <p className="hidden">Opacity </p>
                    <input type='range' value="100%" style={{display:'none'}} />
                    <div id="refresh-container"><MdOutlineRefresh />y
                    <input value='0.0' type='text'/></div>
                   </div>
                    
                    <div style={{display:'flex'}} > 
                   <p  className="hidden">Opacity </p>
                   <input type='range' value="100%" style={{display:'none'}} />
                    <div id="refresh-container"><MdOutlineRefresh />z
                    <input value='0.0' type='text'/></div>
                   </div>

                  </div>  
                </div>
               <div>  </div>
            </div>
           </div>
        </div>
       {/* audio */}
       <div id="edit-second-container">
        {/* <Audio /> */}      
       </div>
      </div>
      </div>
    )
  }
}

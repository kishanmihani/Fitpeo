import React, { Component } from 'react'
import { FigureCaption } from 'react-bootstrap'
import './VeedHome.css';
import { Link, NavLink } from 'react-router-dom'
import { Player } from 'video-react';
import { CgProfile,CgSearch } from "react-icons/cg";
import { IoCutOutline } from "react-icons/io5";
// import { BiVideoRecording } from "react-icons/bi";
import { MdEmergencyRecording } from "react-icons/md";
import poster from '../Images/Profile.jpg';
import logoimg  from '../Images/veed.io-black.svg'
export default class VeedHome extends Component {
    constructor(props){
        super(props);
    
    }
  render() {
    return (
      <div id="container">
        <div id="left-side" >
            <div id="logoimg-div"><img src={logoimg } alt="Logoimage" /></div>
            <div id="button-list-lifte">
                <ol>
                    <li><NavLink  to='Newproject' ><button>New Video+</button></NavLink></li>
                    <li>
                    <button 
                    onClick={()=>window.location='https://www.veed.io/'}>
                    Home</button>
                    </li>
                    <li><button>Template</button></li>
                    <li><button>All Video</button></li>
                </ol>
            </div>
        </div>
        <div id="right-side">
            <div id="first-header-section">
                <div id="input-search-div">
                    <div id="Search-icon">
                <CgSearch />
               </div>
                    <input placeholder="Search" id="search"></input>
                </div>
                <div id="logoprofile-div">
                    {/* <img src="" alt="logoprofile" /> */}
                    <CgProfile />
                </div>
            </div>

            <div id="second-header-section">
               <div id="second-header-button">
                <ol>
                <li>
                <NavLink  to='Newproject' > 
                    <button><span id="CutOutimg"><IoCutOutline /></span>&nbsp;<span id="CutOut-text">Create Project</span></button>
                    </NavLink>
                    </li>
                <li><button><span id="Recordingimg"><MdEmergencyRecording />&nbsp;</span><span  id="Recording-text">Record Video</span></button></li>
                </ol>
                </div>
               <div id="second-header-text"><p>All Video &gt;</p></div>             
            </div>

            <div id="Video-container">
                <div id="Video-container-text"><p>Recent Videos</p></div>
                <div id="Video-container-video">
                    <ul>
                    <li>
                        <figure>
                            <div id="ProjectImg">
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
            </div>
        </div>
       </div>
    )
  }
}

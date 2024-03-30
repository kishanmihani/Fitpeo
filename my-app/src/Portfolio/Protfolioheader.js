import React, { Component } from "react";
import "./PortIndex.css";
import imgprofile from "../Images/Profile.jpg";
import { RxHamburgerMenu} from "react-icons/rx";
import { FaLinkedinIn,FaGithub } from "react-icons/fa6";
import { IoMdCall ,IoLogoInstagram} from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { ChannelContext, UserContext } from "../App";
import Imagedata from './Imagedata.json'
import Protfoliofooter from './Protfoliofooter.js'
console.log(Imagedata.list)
class Protfoliheader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0,
      headingname: "Kishan Mihani",
      profileimg: imgprofile,
      randomcolor:'',
      countries: [
        { name: "Indian", value: "IN", cities: ["Delhi", "Mumbai"] },
        { name: "Pak", value: "Pk", cities: ["Lahore", "Karachi"] },
        { name: "Banladesh", value: "BG", cities: ["Dhaka", "Chittagonng"] },
      ],
      cites: [" "],
      ImagesSkilldata:['']
    };
    this.handChange = this.handChange.bind(this);
  }
  randomnumberrange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  async handlClickrandom() {
    await this.setState({
      randomNumber: this.randomnumberrange(1, 5),
    }); //this.state.randomNumber
    let colorrandom;

    switch (this.state.randomNumber) {
      case 1:
        colorrandom = "rgb(251 196 106)";
        this.themcolor(colorrandom);
        break;

      case 2:
        colorrandom = "aqua";
        this.themcolor(colorrandom);
        break;

      case 3:
        colorrandom = "#3fff00";
        this.themcolor(colorrandom);
        break;

      case 4:
        colorrandom =
          "linear-gradient(180deg, hsl(323.6842105263158, 100%, 45%) 0%, hsl(323.6842105263158, 70%, 35%) 100%)";
        this.themcolor(colorrandom);
        break;

      case 5:
        colorrandom = "#644117";
        this.themcolor(colorrandom);
        break;

      default:
        document.querySelector("#postposition").style = "background:aqua";
    }
  }


  /*skill design image fetch*/


  componentDidMount() {
    // alert(234)
    this.handlClickrandom();
  }
  themcolor(colorrandom) {
    //colorrandom ="rgb(251 196 106)";
    document.querySelector("#postposition").style =
      "background:" + colorrandom + ";color: black";
    document.querySelector("#devfirst").style = "color:" + colorrandom;
    document.querySelector("#threelinebutton").style =
      "box-shadow: 0px 0px 1px 1px " + colorrandom;
      document.querySelector("#FooterPort").style="color:" + colorrandom + ";background-color: black;font-size:1.5rem;font-family: monospace;";
      document.getElementsByClassName('App').style='height:'+window.innerHeight+'px';
    this.setState({ randomcolor:this.state.randomcolor + colorrandom})
  }
  handChange(element, countries) {
    console.log(element);
    let i = 0;
    console.log(element.target.value);
    let countriess = document.querySelector("#counteries");
    let cites = document.querySelector("#cites");
    if (
      countriess.value === element.target.value &&
      element.target.value !== "Select"
    ) {
      cites.style = "display:block";
    } else {
      cites.style = "display:none";
    }
    console.log(this.state.countries);
    for (i in this.state.countries) {
      if (element.target.value === this.state.countries[i].name) {
        let findcitite = this.state.countries[i].cities;
        debugger;
        console.log(findcitite);

        this.setState({ cites: findcitite });
        console.log(cites);
      }
    }
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <div id="heardercolmemu">
            <div id="devfirst">
              <p>
                &lt;<span style={{ color: "black" }}>devkishan</span>&gt;
              </p>
            </div>
            <button id="threelinebutton">
              <RxHamburgerMenu />
            </button>
          </div>
          <div id="headercol">
            <div id="logo">
              <img
                src={this.state.profileimg}
                alt="headingImage"
                id="headingImage"
              />
            </div>
            <h1 className="headingOne">
              Hi, I am <br />
              <span style={{ fontWeight: 600 }}>
                {this.state.headingname}{" "}
              </span>{" "}
            </h1>
            <div id="postposition">
              {" "}
              <p>Front-End Dev</p>
            </div>
          </div>
        </header>
        <select
          onChange={this.handChange}
          id="counteries"
          onClick={() => {
            console.log("click");
          }} 
          style={{display:'none'}} 
          >
          <option>Select </option>
          {this.state.countries.map((countries) => (
            <option key={countries.values} value={countries.values}>
              {countries.name}
            </option>
          ))}
        </select>
          
           {/* <UserContext.Consumer>
            {
               user =>{
                return (
                  <ChannelContext.Consumer>
                    {
                      channel =>{
                        return <div>User name is {user} and channel name is {channel}</div> 
                      }
                    }
                  </ChannelContext.Consumer>
                )
               }
            }
            </UserContext.Consumer>*/}
        
        <select id="cites" style={{ display: "none" }}>
          {/* {findcitite} */}
          {/* {this.state.cites} */}
          {/* {this.state.cites} */}
          {this.state.cites.map((value, index) => {
            return <option key={index}>{value}</option>;
          })}
        </select>

        {/*<div id="kishan-new-2">
        {Imagedata.list.map((user,index )=>{
         <div> <img src={user.imgs} />
          <li key={index}>
              {user.imgs} - {index}
            </li></div>
        })}*/}
          <Protfoliofooter color={this.state.randomcolor} />
        
        <footer id="FooterPort">
            <div style={{width:'49%'}}>
                 <img src={imgprofile} style={{height:'150px',width:'155px',borderRadius:'50%'}} />
                <p id="gmailitext"> <span style={{fontSize:'1.2rem',fontWeight:600,fontFamily:'monospace'}}>Kishan Mihani</span></p>
             
            <div>
                <ul id="footericon">
                <li onClick={()=> window.location ='mailto:kishanmihani918@gmail.com'}>< CgMail /></li>
                    <li onClick={()=>window.open("https://www.instagram.com/kishan45646/" ,"_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=300,width=600,height=600")}>< IoLogoInstagram /></li>
                    <li onClick={()=>window.open("https://github.com/kishanmihani/" ,"_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=300,width=600,height=600")}>< FaGithub /></li>
                    <li onClick={()=>window.open("https://www.linkedin.com/in/kishan-mihani-34ba6b22b/" ,"_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=300,width=600,height=600")}><  FaLinkedinIn /></li>
                    <li onClick={()=>window.location ='tel:+919977305440'}>< IoMdCall /></li>                    
                </ul>
            </div>
            </div >
            <div id="footer-part-two">
            <ul id="footer-two-ul">
            <li id="footer-menu-header">Menu Form</li>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
            </ul>
            </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default React.memo(Protfoliheader)
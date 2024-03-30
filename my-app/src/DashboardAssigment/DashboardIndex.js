import React from 'react';
import './DashboardIndex.css';
import { CgSearch } from "react-icons/cg";
// import { PiHandsClappingLight } from "react-icons/pi";
import { FaHandsClapping,FaChevronRight } from "react-icons/fa6";
import imgprofile from "../Images/Profile.jpg";
import { PieChart } from '@mui/x-charts/PieChart';
import { ChartContainer, BarPlot,DefaultChartsLegend } from '@mui/x-charts';
import { BarChart } from '@mui/x-charts/BarChart';
import { AiOutlineDollar } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa"
import { MdOutlineAccountBalanceWallet,MdOutlineLiveHelp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { LiaProductHunt } from "react-icons/lia"
import { GrMoney } from "react-icons/gr";
import { RxHamburgerMenu} from "react-icons/rx";
import { RiCodepenFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
// import { FaChevronRight } from "react-icons/fa6";
import { TbSettings2 } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa6";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490,2000,1500,2500,1900,2300];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Jan',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JULY',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC'
];


function DasboardIndex(){

	return (
	        <div id="page-Container">
	             <div id="left-container">

                    <div id="Dashboardheading">
                    <button onClick={()=> document.getElementById('left-container').style='display:none'} id="cross-button"><MdCancel /></button>
                      <h3><span id="dasboard-icon"><TbSettings2 /></span> <span>Dashboard</span></h3>
                    </div>
                    <div id="menu-list">
                         <ul>
                             <li id='list-menu-one'className="list-menu"><div><p className="list-menu-text"><span className="list-menu-first"><CgSearch /></span>Dashboard<span id="list-menu-last" style={{display:'none'}}><FaChevronRight /></span></p></div></li>
                             <li className="list-menu"><div><p className="list-menu-text"><span className="list-menu-first"><LiaProductHunt /></span>Product<span id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu"><div><p className="list-menu-text"><span className="list-menu-first"><CgProfile  /></span>Customers<span id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu"><div><p className="list-menu-text"><span className="list-menu-first"><GrMoney /></span>Income<span id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu"><div><p className="list-menu-text"><span className="list-menu-first"><RiCodepenFill /></span>Promote<span  id="list-menu-last"><FaChevronRight /></span></p></div></li>
                             <li className="list-menu"><div><p className="list-menu-text"><span className="list-menu-first"><MdOutlineLiveHelp /></span>Help<span id="list-menu-last"><FaChevronRight /></span></p></div></li>
                         </ul>
                    </div>
                    
                    <div id="profile-conteiner-box">
                      <div id="profile-logo-contianer">
                     <img src={imgprofile} id="profile-logo-image"/>
                      </div>
                      <div id="profile-container-text">
                         <h4>Enovo</h4>
                         <p>Product Manager</p>

                      </div>
                      <span id="downicon"><FaChevronDown /></span>
                    </div>

                 </div>
	             <div id="right-container">
                  <header id="first-header">  
                   <div id="profile-name">
                   <button onClick={()=> document.getElementById('left-container').style='display:block'} id="menu-button"><RxHamburgerMenu /></button>
                   <h3 > Hello Kishan <span id="handicon"><FaHandsClapping /></span></h3>
                   </div>

                   <div id="input-container">
                   <span id="search-icon"><CgSearch /></span>
                   <input type='text' id="input-search" placeholder='search'/> 
                   </div>
                  </header>
                  {/*All card*/}
                  <section id="card-container-only">
                  {/* first card*/}
                  <div id="card">
                    <div id="card-image-container">
                    <div id="card-image" className="card-image-zero">
                  <  AiOutlineDollar />
                    </div>
                    </div>
                    <div id="card-text">
                    <p id="card-first-heading">Earning</p>
                     <h3 id="card-first-rate">$198k</h3>
                     <p id="card-first-text"><span className="profit"><FaArrowUp /> 37.8%</span> <span>this month</span></p>
                    
                   </div>
                   </div>

                   <div id="card">
                    <div id="card-image-container">
                    <div id="card-image" className="card-image-first">
                    <MdOutlineSpeakerNotes  />
                    </div>
                    </div>
                    <div id="card-text">
                    <p id="card-first-heading">Order</p>
                     <h3 id="card-first-rate">$2.4k</h3>
                     <p id="card-first-text"><span className="lose"><FaArrowDown /> 2%</span> <span>this month</span></p>
                    </div>
                   </div>

                   {/* Second card*/}
                   <div id="card">
                    <div id="card-image-container">
                    <div id="card-image" className="card-image-Second">
                    <MdOutlineAccountBalanceWallet />
                    </div>
                    </div>
                    <div id="card-text">
                    <p id="card-first-heading">Balance</p>
                     <h3 id="card-first-rate">$2.4k</h3>
                     <p id="card-first-text"><span className="lose"><FaArrowDown /> 2%</span> <span>this month</span></p>
                    </div>
                   </div>

                   {/* Third card*/}
                   <div id="card">
                    <div id="card-image-container">
                    <div id="card-image" className="card-image-third">
                   < BsHandbag />
                    </div>
                    </div>
                    <div id="card-text">
                    <p id="card-first-heading">Total Sales</p>
                     <h3 id="card-first-rate">$89k</h3>
                     <p id="card-first-text"><span className="profit"><FaArrowUp /> 11%</span> <span>this month</span></p>
                    </div>
                    </div>

                    {/* fourth card*/}
                   
                  </section>

                    {/*graph section*/}

                    <section id="graph">
                   <div id="graph-part-one">
                     {/*<ChartContainer width={500} height={300}
                          series={[{ data: uData, label: 'uv', type: 'bar' }]}
                          xAxis={[{ scaleType: 'band', data: xLabels }]}
                          >
                           <BarPlot />
                        </ChartContainer>*/}
                   <div id="header-part">
                    <h4>Overview</h4>
                    <p>Monthly Earning</p>
                   </div>
                   <div id="header-prat-two">
                     <select>
                           <option>Quaterly</option>
                     </select>
                   </div>

                   <div id="barchart-container">
                    <BarChart
      
      height={283}
      series={[
         
        { data: uData, label: 'uv', id: 'uvId', color: '#2a20c2' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' },{stroke: 'none',ticks:{display:true}}]}
      
    />               
                   </div>
                   </div>
                    <div id="graph-part-two">
                    <div id="Customers-container">
                    <h4>Customers</h4>
                    <p>Customers that buy products</p>
                    </div>
                      <PieChart   width={400}
  height={250} colors={['red', 'blue', 'green']} 
                    series={[
                    {
                      data:[
        { id: 0, value: 10, label: 'series A' },
        { id: 2, value: 20, label: 'series C' },
      ],
                      innerRadius: 60 ,
                      outerRadius: 90,
                      paddingAngle: 0,
                      cornerRadius: 0,
                      startAngle: 0,
                      endAngle: 220,
                      cx: 150,
                      cy: 150,
                    }]}
                    />

                    <div id="Customer-pertsentage">
                       <h3>65%</h3>
                       <p>Total New<br/>Customers</p>
                    </div>
                    </div>
                    </section>
                   {/*last table*/}

                  <section id="product-table-list">
                   <div id="product-first-header">
                     <div id="product-text-heading">
                     <h3>Product Sell</h3>
                     </div>

                     <div id="input-select-container" >
                      <div id="input-container-product"  className='input-cntainer-table'>
                   <span id="search-icon-product"><CgSearch /></span>
                   <input type='text' id="input-search-product" placeholder='search'/> 
                   </div>

                   <div>
                    <select id="select-record">
                       <option>Last 30day</option>
                    </select>
                   </div>
                     </div>
                   </div>

                   <div id='product-table-div'>
                    <table id='product-table'>
                     <thead>
                             <tr>
                              <th id="first-thead">Product Name</th>
                              <th>Stock</th>
                              <th>Price</th>
                              <th>Total Sales</th>
                             </tr>
                     </thead>

                     <tbody>
                             <tr>
                              <td>
                              <div id="contins-small">
                              <div id="imgbox"><img src={imgprofile}  id='imgbox-img' /></div>
                              <div id="textbox">
                              <p id="bold">Abstract</p>
                              <p>lorem one tow three
                              </p>
                              </div>
                              </div>
                              </td>
                              <td>32 in Stock</td>
                              <td>$45.99</td>
                              <td>20</td>
                             </tr>
                             <tr>
                              <td><div id="contins-small">
                              <div id="imgbox"><img src={imgprofile}  id='imgbox-img' /></div>
                              <div id="textbox">
                              <p id="bold">Abstract</p>
                              <p>lorem one tow three
                              </p>
                              </div>
                              </div></td>
                              <td>32 in Stock</td>
                              <td>$45.99</td>
                              <td>20</td>
                             </tr>
                     </tbody>
                    </table>
                   </div>
                  </section>
	             </div>
	        </div>

	       ) 

}

export default DasboardIndex;
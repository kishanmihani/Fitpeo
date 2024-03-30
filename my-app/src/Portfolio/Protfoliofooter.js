import React, { Component } from 'react'
import Imagedata from './Imagedata.json'
 function Protfoliofooter(props){
  console.log(props.color)
  
    return (
      <div id="Work-design-part-section" style={{background:props.color}}>
        
            <h1 id="">My work design</h1>
            <div>
                
                <ul id='imageskill-design-ul'>{Imagedata.list.map((item,index)=>{
                  return <li id="imageskill-design-li"><img id="imageskill-design" src={item.imgs}></img></li>
                })}</ul>
            </div>
       
      </div>
    )
  
}
export default React.memo(Protfoliofooter)
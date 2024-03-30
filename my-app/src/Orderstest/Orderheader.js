import React, { Component } from 'react'
import './Orderherder.css';
import searchimg from '../Images/search.svg'
import NewuseState from './NewuseState';
const searchimgs=searchimg;
export default class Orderheader extends Component {
  
  render() {
    return (
      <div>
        <header>
            <h4>Orders</h4>
            <button>Create New</button>
        </header>

        <div>
            <div>
                <div>
                <label>What are you looking for ?</label>
                <div>
                <img src={searchimgs}></img>
                <input></input>
                </div>
                </div>
            </div>
            <div>
                <div>
                <label>Category</label>
                <div>
                <img src={searchimgs}></img>
                <select></select>
                </div>
                </div>
            </div>
        </div>
        <div>
                <div>
                <label>State</label>
                <div>
                <img src={searchimgs}></img>
                <select></select>
                <input type='image' src={searchimgs}></input>
                <button>Search</button>
                </div>
                </div>
              <  NewuseState />
            </div>
      </div>
    )
  }
}

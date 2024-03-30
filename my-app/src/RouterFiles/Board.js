import React, { Component } from 'react'
import Squar from './Squar';

export default class Board extends Component {
    constructor(props){
        super(props);
        this.state={
            squares:Array(9).fill(null)
        }
    }
    render(i) {
        return <Squar value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
      }
}

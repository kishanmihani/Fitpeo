import React, { Component } from 'react'
import { render } from 'react-dom';
export default class COComponent extends Component {
    constructor(props){
        super(props);
        let firstName=this.props.name.split(" ")[0];
        this.state={
            name:firstName
        }
    }
  render() {
    return (
      <div> {this.props.name}!</div>
    )
  }
}
render(
    <COComponent name={ 'User' } />,
    document.getElementById('content')
   );
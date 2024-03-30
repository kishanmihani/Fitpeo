// import React from "react";
import react,{Component} from "react";

class Squar extends  Component{
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }
render(){
    return (
        <div>
            <button class="square" onClick={() => this.setState({value: 'X'})}>
                {this.props.value}
            </button>
        </div>
    )
}
}
export default Squar
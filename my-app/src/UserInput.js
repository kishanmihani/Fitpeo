import React, { Component } from 'react'

export default class UserInput extends Component {
    
    constructor(props) {
        debugger;
      super(props)
    
      console.log(props+ "   sdkkxznckdsncc  "  );
      this.myRef=React.createRef()
    }
    handlesubmit =(e)=>{
        console.log("Input value is: ",  this.input.value);
        e.preventDefault()
    }
    
   
  render() {
    this.changeEmailHandle=(event) =>{
        this.state={
            email:''
        }
        this.setState({email:event.target.value})
    }
    return (
      <div>
        <form  onSubmit={this.handlesubmit}>
            <input type="text" ref={(input) => this.input = input} />
            <input type="text" value={this.state.email} onChange={this.changeEmailHandle} />
            <button type="submit">Click</button>
        </form>
        <div ref={this.myRef}></div>
      </div>
    )
  }
}

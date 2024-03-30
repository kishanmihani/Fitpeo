import React, { Component } from 'react'

export default class Practice extends Component {
  interval
    constructor(props) {
      super(props);
    
      this.state = { hello:"Topper is kishan",displayBio:true,timer:0};
     // this.state = { displayBio:true};
      this.changeState=this.changeState.bind(this)
    }
  render() {
    const  bio=this.state.displayBio?(
  <div>
    <p>
        <h3>new is new</h3>
    </p>
  </div>
    ):null;
    return (
      <div>
        <h1>React js component life cycle</h1>
        <h3>Hello,{this.state.hello}</h3>
        <button onClick={this.changeState}>Click Here</button>
        {bio}
         <button >{this.state.timer}</button>
        <button onClick={()=>clearInterval(this.interval)}>Clear</button>
      </div>
    )
  }

  
  componentWillMount(){
    console.log('Component Will Mount');
  }
  componentDidMount(){
    console.log('Component Did Mount');
    this.interval = setInterval(()=>{
      this.setState(prevState =>({timer:prevState.timer + 1}))
    },1000)
  }
  componentWillReceiveProps(newProps){
    console.log('Component Will Receice Props!');
  }
  
  componentWillUnmount(){
    console.log('componet will unmount');
    clearInterval(this.interval);
  }
  componentDidUpdate(preProps,preState){
    console.log('component did  update')
  }
  componentWillUpdate(nextProps,nextState){
    console.log('component will update');
  }
  changeState(){
    this.setState({hello:"All ! - It's  a  great reactjs tutorial "})
  }
}

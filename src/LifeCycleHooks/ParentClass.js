import React, { Component } from 'react'
import ClassComp from './ClassCom'
class ParentClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count:0,
      bool:true,
    }
  }

  handleClick=()=>{
    this.setState({
      count:this.state.count+1,
    })
  } 
  handleName=()=>{
    this.setState({
      bool:!this.state.bool,

    })
  }

 

  render() {
    console.log("parent render")
    return (
      <div>
        <h2>Parent  Component</h2>
        <h2>Count :- {this.state.count}</h2>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.handleName}>{this.state.bool?"UnMount":"Mount"}</button>
       { (this.state.bool)?<ClassComp count={this.state.count}></ClassComp>:null}
      </div>
    )
  }
}

export default ParentClass
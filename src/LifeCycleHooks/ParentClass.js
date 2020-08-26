import React, { Component } from 'react'
import ClassComp from './ClassCom'
class ParentClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count:0
    }
  }

  handleClick=()=>{
    this.setState({
      count:this.state.count+1,
    })
  }

  render() {
    return (
      <div>
        <h2>Parent  Component</h2>
        <h2>Count :- {this.state.count}</h2>
        <button onClick={this.handleClick}>Increment</button>
        <ClassComp count={this.state.count}></ClassComp>
      </div>
    )
  }
}

export default ParentClass
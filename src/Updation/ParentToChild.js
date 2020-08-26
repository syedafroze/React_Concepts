import React, { Component } from 'react'
import ChildComponent from './ChildComp'
class ParentToChild extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count:0,
    }
  }

  handleClick=()=>{

      this.setState({
        count:this.state.count+1,
      })


  }

  render() {
    return (<div>
      <h2>Parent Component</h2>
      <h2>{this.state.count}</h2>
      {/* <button onClick={this.handleClick}>Click</button> */}
      <ChildComponent count={this.state.count} handleClick={this.handleClick}></ChildComponent>
      </div>
    )
  }
}

export default ParentToChild
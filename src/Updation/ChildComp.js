import React, { Component } from 'react'

class ChildComp extends Component {
  constructor(props) {
    super(props)

   
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2> Child Component </h2>
      <h2>{this.props.count}</h2>
      <button onClick={()=>this.props.handleClick()}>Update</button>
      </div>
    )
  }
}

export default ChildComp
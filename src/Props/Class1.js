import React, { Component } from 'react'

class Class1 extends Component {
  constructor(props) {  //{name:propsfromfun}
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
    <div> {this.props.name}</div>
    )
  }
}

export default Class1
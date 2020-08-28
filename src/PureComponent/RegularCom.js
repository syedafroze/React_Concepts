import React, { Component } from 'react'

class RegularCom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    console.log("-----Regular Component--------")
    return (
     <> Regular Component  {this.props.name}</>
    )
  }
}

export default RegularCom
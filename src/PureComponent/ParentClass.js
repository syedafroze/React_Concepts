import React, { Component } from 'react'
import PureCom from './PureCom'
import RegularComp from './RegularCom'
import FunctionalCom from './memo'
class ParentClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:"js"
    }
  }

componentDidMount(){

  setInterval(()=>this.setState({
    name:"js"
  }),5000)
}


  render() {
    console.log("-------Parent Component----------")
    return (
      <div>
   <PureCom name={this.state.name}></PureCom>
   <RegularComp name={this.state.name}></RegularComp >
   <FunctionalCom name={this.state.name}></FunctionalCom>
      </div>
    )
  }
}

export default ParentClass
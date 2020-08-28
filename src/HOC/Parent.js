import React, { PureComponent, Component } from 'react'
import Hover from './Hover'
import Counter from './counter'


class  Parent  extends Component {
  constructor(){
    super()
   this. state = {
      count:0
    }
  }
  
  
 handleClick(){
 
    return this.setState({
      count:this.state.count+1
    })
  
}

render(){
  return (<>
    <Hover handleClick={this.handleClick} state={this.state}></Hover>
    <Counter handleClick={this.handleClick} state={this.state}></Counter>
    </>
  )
}
   

}

export default Parent
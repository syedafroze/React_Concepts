import React, { PureComponent } from 'react'

class Counter extends PureComponent {
  constructor(props) {
    super(props)

    this.state=this.props.state
    
  }

  render() {
  
    const {handleClick} =this.props
   
    console.log("Hover");
    console.log(this.state.count);
    return (
      <h2  onMouseOver={handleClick.bind(this)}>Clicked for {this.state.count} times</h2>
    )
  }
}

export default Counter
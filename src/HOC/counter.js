import React, { PureComponent } from 'react'

class Counter extends PureComponent {
  constructor(props) {
    super(props)
 this.state=this.props.state;
  }

  
  render() {
     const {handleClick}=this.props

    console.log("Counter")
    console.log(this.state.count)
    return (<div>
      <button onClick={handleClick.bind(this)}>Clicked for {this.state.count} times</button>
      </div>
    )
  }
}

export default Counter
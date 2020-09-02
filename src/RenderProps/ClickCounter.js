import React, { PureComponent } from 'react'

class ClickCounter extends PureComponent {
 

  render() {
    const {state,handleClick}=this.props
    return (
      <>
      <h2>Click Counter Component {state.count}</h2>
      <button  onClick={handleClick}>Count is </button>
      </>
    )
  }
}

export default ClickCounter
import React, { PureComponent } from 'react'
import UpdateFunction from './UpdateFunction'
class Counter extends PureComponent {
 

  
  render() {
    console.log(this.props)
     const {count,handleClick}=this.props
    return (<div>
      <button onClick={handleClick}>Clicked for {count} times</button>
      </div>
    )
  }
}

export default UpdateFunction(Counter)
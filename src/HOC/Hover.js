import React, { PureComponent } from 'react'
import UpdateFunction from './UpdateFunction'
class Hover extends PureComponent {
  

  render() {
  
    const {count,handleClick} =this.props
   
    
    return (
      <h2  onMouseOver={handleClick}>Clicked for {count} times</h2>
    )
  }
}
export default UpdateFunction(Hover)
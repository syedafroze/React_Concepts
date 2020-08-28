import React, { PureComponent } from 'react'

class PureCom extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    console.log("-----PureComponent-------")
    return (
      <div>
        PureComponent  {this.props.name}
      </div>
    )
  }
}

export default PureCom
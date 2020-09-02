import React, { PureComponent } from "react";

class Hover extends PureComponent {
  render() {
    const { state, handleClick } = this.props;

    return (
      <>
        <h2>Hover Component</h2>

        <h2 onMouseOver={handleClick}>Count is {state.count}</h2>
      </>
    );
  }
}

export default Hover;

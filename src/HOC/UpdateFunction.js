import React from "react";

function UpdateFunction(OriginalComponent) {
  return class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }

    handleClick = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          handleClick={this.handleClick}
        ></OriginalComponent>
      );
    }
  };
}

export default UpdateFunction;

import React, { PureComponent } from "react";

class Counter extends PureComponent {
  constructor(props) {
    super(props);

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
    return <>{this.props.Comp1(this.state, this.handleClick)}</>;
  }
}

export default Counter;

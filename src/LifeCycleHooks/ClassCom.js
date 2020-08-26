import React, { Component } from "react";

class ClassCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count2: 2,
    };

    console.log("in child  constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("----------in getDerivedStateFromProps----------------");
    console.log(props, state);
    if (props.count == Math.pow(state.count2, 2)) {
      return { count2: props.count };
    } else {
      return null;
    }
  }

  //count =2 count2 = 4
  componentDidMount() {
    console.log("------componentDIDMount------------");
    //this is place where u make Api calls
  } //this gets executed for initial render  for first render of child component

  render() {
    console.log("-----child render---------");
    return (
      <div>
        <h2>Child Component</h2>
        <h2>Count2 :-{this.state.count2}</h2>
      </div>
    );
  }
}

export default ClassCom;

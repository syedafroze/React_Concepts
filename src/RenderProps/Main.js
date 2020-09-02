import React, { PureComponent } from "react";
import Counter from "./Counter";
import Hover from "./Hover";
import ClickCounter from "./ClickCounter";
class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (<>
      <Counter Comp1={(state, ClickFunction) => (
          <Hover state={state} handleClick={ClickFunction}></Hover>
        )}
      ></Counter>
      <Counter Comp1={(state, ClickFunction) => (
          <ClickCounter state={state} handleClick={ClickFunction}></ClickCounter>
        )}
      ></Counter>
      </>
    );
  }
}

export default Main;

import React, { Component } from "react";

class ClassCom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boolean: false,
      name:"js",
      count2:0

    };
    this.set=0;

   
  }

  componentDidMount(){
   this.set = setInterval(()=>console.log("Timer "),3000)
  }

 



  componentDidUpdate(prevProps,prevState){
    console.log("inComponentDidUpdate")
    console.log(prevProps,prevState);

  }
  handleClick=()=>{
    this.setState({
      count2:this.state.count2+1,
    })
  } 
 
componentWillUnmount(){
  console.log("clear timer")
 clearInterval(this.set);
}


  render() {
    console.log("-----child render---------");
    return (
      <div>
        <h2>Child Component</h2>
        <h2>count2:-{this.state.count2}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default ClassCom;


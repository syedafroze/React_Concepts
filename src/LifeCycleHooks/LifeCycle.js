import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bool:true
    }
    console.log("----- in constructor--------")

  }
   static getDerivedStateFromProps(props,state){
      //to update state when ur state property depends on props passed to it 
      console.log("----------in getDerivedStateFromPorps--------")
   return null;
   }


   getSnapshotBeforeUpdate(){
     console.log("-----getsnapshotbeforeUpdate");
     return null;


   }

    shouldComponentUpdate(nextprops,nextstate){
      console.log("----in shouldcomponentUpdate----");
      return true;
    }

   componentDidMount(){
     console.log("------- componentDidMount------------");
     //api calls
   }


   componentDidUpdate(prevProp,prevState,snapshot){
     console.log("--------componentDidUpdate------------")
   }

handleClick=()=>{
  this.setState({
    bool:!this.state.bool
  })
}

  render() {

    console.log("------------render method----------------")
    return (
      <div>
        LifeCycle
        <button onClick={this.handleClick}>toggle</button>
      </div>
    )
  }
}

export default LifeCycle
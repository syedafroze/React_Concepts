import React, { Component } from 'react'

class ClassWithState extends Component {
  constructor(props) {
    super(props)
     
     this.state={
       count:0,
     }
   this.list=[
     {name:"syed",id:5},
     {name:"adi" ,id:6},
     {name:"retiche",id:7}
   ]

  }

handleClick(){
   
  this.setState({
count:this.state.count+1,
  })

}

//constructor()  render()   state={} setState()
//state={}  setState  
  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleClick.bind(this)}>Click</button>
    {this.list.map((ele) => <h2 key ={ele.id}>{ele.name+" "+ele.id}</h2>)}
      </div>
    )
  }
}

export default ClassWithState
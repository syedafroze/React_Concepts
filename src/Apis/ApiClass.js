import React, { PureComponent } from 'react'

class ApiClass extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      list:[]
    }
    
  }

  handleClick=()=>{          

      fetch('https://jsonplaceholder.typicode.com/users/1').then((res)=>res.json())
      .then((data)=>this.setState({list:[].concat(data)}))
        
      

  }

  handlePost=()=>{
   
  let data ={name:"JS",id:5}
    fetch('https://jsonplaceholder.typicode.com/users',{
      method:'POST',
      header:{'Content-Type':'application/json'},
      body:JSON.stringify(data),
    })
    .then((response)=>response.json())
    .then((revData)=>console.log(revData))

  }
  

  render() {
    console.log(this.state.list)
    return (
      <>
      <button onClick={this.handleClick}>Get Data</button>
      <button onClick={this.handlePost}>Post Data</button>
    {this.state.list.map((user,index)=><h2 key={index}>{user.name}</h2>)}
    </>
    )
  }
}

export default ApiClass
import React from 'react'

function Fun2(props) {
if(props.name.includes('@')){
  throw Error("invalid name")
}
else{

  return (
    <h2>{props.name}</h2>
    )

}

}

export default Fun2

import React from 'react'

function Memo(props) {
  console.log(" in functional component")
  return (
    <div>Function Component {props.name}</div>
  )
}

export default React.memo(Memo);


//React.memo(Memo) //Higher Order function   
//caching prevprop 
///if same datat is passed it wont re render 

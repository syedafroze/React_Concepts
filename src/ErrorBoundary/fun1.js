import React from 'react'
import Fun2 from './fun2'
import Err from './ErrorHandler'
function Fun1() {
  return (<>
   <Err> <Fun2 name={"java@"}></Fun2> </Err>
   <Err> <Fun2 name={"java"}></Fun2></Err>
   <Err><Fun2 name={"javascript"}></Fun2></Err> 
    </>
  )
}

export default Fun1

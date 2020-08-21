import React from 'react';
import './App.css';
import FunctionalComp from './Components/FunctionalComp'
import ClassComp from './Components/ClassComp'
import Fun1 from './Props/Function1'
import ClassWithState from './State/ClassWithState'
function App() {
  return (
    <div className="App">
      <ClassWithState></ClassWithState>

      {/* <FunctionalComp></FunctionalComp>
      <ClassComp></ClassComp>
      <Fun1></Fun1> */}

    </div>
  );
}

export default App;

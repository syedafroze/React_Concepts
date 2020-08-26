import React from 'react';
import './App.css';
import FunctionalComp from './Components/FunctionalComp'
import ClassComp from './Components/ClassComp'
import Fun1 from './Props/Function1'
import ClassWithState from './State/ClassWithState'
import Todo from './Task/Todo.js'
import ParentComponent from './Updation/ParentToChild'
import ParentClass from './LifeCycleHooks/ParentClass'
function App() {
  return (
    <div className="App">
    <ParentClass></ParentClass>

      {/* <FunctionalComp></FunctionalComp>
        <Todo></Todo>
      <ClassWithState></ClassWithState>
      <ClassComp></ClassComp>
      <Fun1></Fun1> */}

    </div>
  );
}

export default App;

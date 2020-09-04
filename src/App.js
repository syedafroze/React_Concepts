import React from "react";
import "./App.css";
import FunctionalComp from "./Components/FunctionalComp";
import ClassComp from "./Components/ClassComp";
import Fun1 from "./Props/Function1";
import ClassWithState from "./State/ClassWithState";
import Todo from "./Task/Todo.js";
import ParentComponent from "./Updation/ParentToChild";
import ParentClass from "./LifeCycleHooks/ParentClass";
import LifeCycle from './LifeCycleHooks/LifeCycle'
import ParentClass2 from './PureComponent/ParentClass'
import Parent from './HOC/Parent'
import Counter from './HOC/counter'
import Hover from './HOC/Hover'
import Main from './RenderProps/Main'
import ErrorFun1 from './ErrorBoundary/fun1'
import ApiClass from './Apis/ApiClass'
function App() {
  return (
    <div className="App">

<ApiClass></ApiClass>


    {/* <Main></Main> */}
{/* <ErrorFun1></ErrorFun1> */}

{/* 
<Counter></Counter>
<Hover></Hover> */}

{/* <Parent></Parent> */}

      {/* <ParentClass></ParentClass>
  <ParentClass></ParentClass>
      <LifeCycle></LifeCycle>

      <FunctionalComp></FunctionalComp>
          <Todo></Todo>
      <ClassWithState></ClassWithState>
      <ClassComp></ClassComp>
      <Fun1></Fun1> */}
    </div>
  );
}

export default App;

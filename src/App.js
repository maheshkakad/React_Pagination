
import './App.css';
import { useState } from "react";
import Todos from './components/Todos';
import Timer from './components/Timer';
import Todosaxios from './components/Todosaxios';

function App() {
  const [show,setShow] =useState(true);


  return (
    <div className="App">
      {show?<Timer/>:null}
  <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
     <Todos />
     <Todosaxios />
    
    </div>
  );
}

export default App;

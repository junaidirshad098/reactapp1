import React,{useState} from 'react';
import './App.css';
import Fun1 from './dinner.js';

function App() {

let [count,setCount]=useState(0);

  return (
    <div className="App">
     <h1>Hello world</h1>
     <h1>Secrets token my create new it can be error </h1>
     <Fun1 foodname="Chicken"/>

<h1>Counter ++ =:{count}</h1>
     <button onClick={()=>setCount(count++)}>
Update Count
     </button>
    </div >
  );
}

export default App;

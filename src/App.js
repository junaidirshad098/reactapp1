import React,{useState} from 'react';
import './App.css';
import Fun1 from './dinner.js';

function App() {

let [count,setCount]=useState(0);

  return (
    <div className="App">
     <h1>Hello world</h1>
     <h1>Secrets token create new it can be error </h1>
     <Fun1 foodname="Chicken"/>

<H1>Counter ++ =:{count}<h1>
     <Button onClick={()=>setCount(count++)}>
Update Count
     </Button>
    </div>
  );
}

export default App;

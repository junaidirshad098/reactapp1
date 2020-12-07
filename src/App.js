import React,{useState} from 'react';
import './App.css';
import Fun1 from './dinner.js';

export default function App() {

let [count,setCount]=useState(0);
let [count1,setCount1]=useState(0);
let [isMorning,setMorning]=useState(false);

  return (
    // <div className={`box ${isMorning ? 'dayLight' : ''}`}>
    
    <div className={` ${isMorning ? ' day-night'  :  'day-morning ' }`} >
     <h1>Hello world</h1>
     <h1>Secrets token my create new it can be error </h1>
     <Fun1 foodname="Chicken"/>

<h1>++Counter =:{count}</h1>
     <button onClick={()=>setCount(++count)}>
Update ++Count
     </button>
     <h2>Counter++=:{count1}</h2>
     <button onClick={()=>setCount1(count1++)}>Count++</button>
     <br></br>
  <button onClick={()=>setMorning(!isMorning)}>{isMorning? "Morning":"Night"}</button>
    </div >
  );



}

// export default App;

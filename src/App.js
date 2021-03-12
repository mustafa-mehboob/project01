import React, {useState} from 'react';
import './App.css';
import Product from './product.js';

export default function App() {

  let [count , setcount] = useState(100);
  let [isMorning, setMorning] = useState(true);

  return (

    <div className={`box ${isMorning ? 'secondcolor' : ''}`}>

    <h1>MOBILE</h1>
    <Product modelNumber="12"  memory="128"/>

    <h3> {isMorning ? 'red' : 'royalblue'}</h3>
    
    <button onClick={() => setMorning(!isMorning)}> 
        Slect Color
      </button>
      <br />
      <br />

      <h3>$999</h3>

    <button onClick={
      () => setcount(--count)
    }>BUY</button>
    <h3>ITEM LEFT{count}</h3>
    <hr/>

  </div>
  );
}



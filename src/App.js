import Sdata from './data';
import Card from './card';
import React, {useState} from 'react';
Hello

const App=()=>{

  const [name,setName]=useState("a");

const inputEvent=(event)=>{
  console.log(event.target.value)
  setName(event.target.value);
}
  return (
    <div>
      <h1>Hello {name}</h1>
      <input type="text" placeholder="Enter your name" onChange={inputEvent} value={name}/>
      <button>Click Me</button>


    </div>
  );
  

}

export default App;

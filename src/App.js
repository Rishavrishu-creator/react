import Card from './comp1';
import React, {createContext, useState} from 'react';


const App=()=>{

  const [num,setNum]=useState(0);

  const inputEvent=()=>{
    setNum(num+1);
    alert("This button is clicked")
  }


  return (
    <button type='submit' onClick={inputEvent} style={{width:50,height:100}}>{num}</button>
  )


}




export default App;

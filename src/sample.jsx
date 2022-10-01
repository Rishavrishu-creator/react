import Card from './comp1';
import React, {useState} from 'react';


const Sample=()=>{

  const [fullName,setName]=useState({
    firstName:"",
    lastName:'',
    email:''
  })

  const inputEvent=(event)=>{
    setName((prevValue)=>{
      if(event.target.name=='first')
      {
        return({
          firstName:event.target.value,
          lastName:prevValue.lastName,
          email:prevValue.email
        })
      }
      else if(event.target.name=='last'){
        return({
          firstName:prevValue.firstName,
          lastName:event.target.value,
          email:prevValue.email
        })
      }
      else{
        return({
          firstName:prevValue.firstName,
          lastName:prevValue.lastName,
          email:event.target.value
        })
      }
    })
  }


  return (
    <>
      <h3>My name is {fullName.firstName} {fullName.lastName}</h3>
      <span>{fullName.email}</span>
      <br/>
      <input type="text" placeholder="Enter your first name" name="first" value={fullName.firstName} onChange={inputEvent}/>
      <br></br>
      <input type="text" placeholder="Enter your last name" name="last" value={fullName.lastName} onChange={inputEvent}/>
      <br>
      </br>
      <input type="email" placeholder="Enter your email" name="email" value={fullName.email} onChange={inputEvent}/>
    </>
  )
}

export default Sample;

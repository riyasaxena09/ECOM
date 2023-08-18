import { useRef, useState } from 'react'
import './Login.css';
import { useContext } from 'react';
import { Cartoon } from '../Comtext';
import {  useNavigate } from 'react-router-dom';
import Header from './Header';
function Login(){
  const nav=useNavigate();
    const email=useRef();
    const pass=useRef();
 const {login,setlogin}=useContext(Cartoon);
    function submithandler(e){
e.preventDefault();

const enteredemail=email.current.value;
    const enteredpass=pass.current.value;
console.log(enteredemail);
fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYsYcrYpz7W7qDyNOAW40gZkLu4RKKWBQ',
  {
   method:'POST',
   body:JSON.stringify({
     email:enteredemail,
     password:enteredpass,
     returnSecureToken:true,
   }),
  
  headers:{
 'Content-Type':'application/json'
  },
}).then((res)=>{

  if(res.ok){
return res.json();
  }else{
return res.json().then((data)=>{
  let errormsg='Authen failed';
  throw new Error(errormsg);
})
  }
}).then((data)=>{
   console.log(data)
   nav('/App')
setlogin(true);
    }).catch((err)=>{
      alert(err.message);
    })
 
    }
    return(
<>
<Header></Header>
<form onSubmit={submithandler}>
   <div><label>Email:</label>
    <input ref={email} type="email"></input></div> <br></br>
   <div> <label>Password:</label>
    <input ref={pass} type="password"></input></div> <br></br>
    <div>
<button>Login</button></div>
</form>
</>
    )
}
export default Login;
import { useRef } from 'react';
import {  useNavigate } from 'react-router-dom';
function Login(){
  const nav=useNavigate();
    const email=useRef();
    const pass=useRef();
    
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
   nav('/')

    }).catch((err)=>{
      alert(err.message);
    })
 
    }
    return(
<>
<form onSubmit={submithandler}>
    <label>Email</label>
    <input ref={email} type="email"></input>
    <label>Password</label>
    <input ref={pass} type="password"></input>
<button>Login</button>
</form>
</>
    )
}
export default Login;
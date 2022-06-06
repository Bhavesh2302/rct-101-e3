import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const {isAuth,setisAuth,login,logout}=useContext(AuthContext)
  const [email, setemail] = useState("")
const [password, setpassword] = useState("")
  const handleSubmit=(e)=>{


    
  
    e.preventDefault()
    alert("login success")
   return  <Navigate to="/"></Navigate>
  
   
  }


  return (
    <div>

      <form action="">
      <input data-cy="login-email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)}/>
      <input data-cy="login-password"  placeholder="Enter password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
      <button data-cy="login-submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;

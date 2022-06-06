import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {

  const [state]=useContext(AuthContext)

  if(state.isAuth){
    return <Navigate to="/"></Navigate>
  }
  return children;
};

export default RequiredAuth;

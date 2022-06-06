import React, { createContext, useState } from "react";
import { useReducer } from "react";

export const AuthContext = createContext();



export const AuthProvider = ({ children }) => {

  const initstate={
isAuth:false,
token:null
  }

  const reducer=(state,action)=>{
switch(action.type){


  case "login_success":
    return {
      ...state,
      isAuth:true,
      token:action.token
    }

    
  case "login_failure":
    return {
      ...state,
      isAuth:false,
      token:null
    }

    default :{
      return state
    }
}





  }



  const [state, dispatch] = useReducer(reducer,initstate)






  return <AuthContext.Provider value={[state,dispatch]}>{children}</AuthContext.Provider>;
};

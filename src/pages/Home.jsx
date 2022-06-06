import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Products from "../components/Products/Products";
import { AuthContext } from "../context/AuthContext";


const Home = () => {

  const [state]=useContext(AuthContext)
  return <div > {/* Code here */}
  {/* if(state.isAuth){
   <Navigate to="/login"></Navigate>
  } */}

  <Products/>
  </div>;
};

export default Home;

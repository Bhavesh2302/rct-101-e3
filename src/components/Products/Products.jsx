import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import Product from "./Product/Product";

// import Product from "./Product/Product";

const Products = () => {

  // const [prod, setprod] = useState([])


// useEffect(()=>{
// axios({
//   url:"http://localhost:8080/products",
//   method:"GET"
// })
// .then((res)=>{
//   // console.log(res)
//   setprod(res.data)
// })


// },[prod])

  return (
  <div>{/* Code here */}

<Product/>
  </div>
  )
};

export default Products;

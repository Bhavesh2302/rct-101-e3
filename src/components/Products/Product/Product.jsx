import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

const Product = () => {
  // Note: this id should come from api
const [prod, setprod] = useState([])


useEffect(()=>{
axios({
  url:"http://localhost:8080/products",
  method:"GET",

})
.then((res)=>{
  
  setprod(res.data)
})


},[prod])



  const product = { id: 1 };
  return (


  

    <div data-cy={`product-${product.id}`} >

      
    {prod.map((p)=>(

<div>
      <h3 data-cy="product-name"> {p.name}</h3>
      <h6 data-cy="product-description">{p.description}</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">remove</button>
      </div>

      </div>
        ))}
    </div>


  );
};

export default Product;

import React from "react";

function Product(props) {
    return(
       <div>
           <h1>iphone {props.modelNumber}  </h1>
           <h2>{props.memory}</h2>
       </div>
    )
};

export default Product;
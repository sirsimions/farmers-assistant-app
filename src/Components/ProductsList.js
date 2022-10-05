import React from "react";
import Product from "./Product";

function ProductsList( {products}) {
    let array = products.map(productObj => {
        return <Product 
                key={productObj.id} 
                product={productObj} 
              /> 
      })
      
    return(
        <div>
        {array}
        </div>
    )
}

export default ProductsList;
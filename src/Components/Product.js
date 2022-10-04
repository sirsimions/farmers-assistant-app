import React from "react";

function Product(props){

    let {image, product, category, preparation, marketinfo} = props.product
    return(
        <div>
            <div>image</div>
            <div>product</div>
            <div>category</div>
            <div>preparation</div>
            <div>marketinfo</div>
        </div>
    );
}

export default Product ;
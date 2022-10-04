import React from "react";
import React, {useEffect, useState} from "react"
import ProductsList from "./ProductsList";

function AddProductContainer(){
const [searchItem, setSearchItem] = useState('')
const [products, setProducts] = useState([])

useEffect(()=>{
    fetch('http://localhost:3002/crops')
    .then(res=>res.json())
    .then((prod)=>{
        setProducts(prod)
    })
    
}, [])

    return(
        <div>
            <Search setSearchItem = {setSearchItem} />
            <AddProductForm products = {products} setProducts = {setProducts}/>
            <ProductsList products = {products.filter(product=>{
                    if(searchItem== ''){
                        return true;
                    }
                    return product.preparation.includes('searchItem')
                })
            }/>
        </div>
    )
}

export default AddProductContainer ;
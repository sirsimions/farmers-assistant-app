import React from "react";
import React, {useEffect, useState} from "react"
import ProductsList from "./ProductsList";
import AddProductForm from "./AddProductForm";
import Search from "./Search"

function AddProductContainer(){

const [searchItem, setSearchItem] = useState('')
const [products, setProducts] = useState([])

useEffect(()=> {
    fetch('http://localhost:3002/crops')
    .then(res=>res.json())
    .then(data=>{
      setProducts(data);
      console.log(products)
    });
  }, []);
   
  return (
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
    );
}

export default AddProductContainer ;
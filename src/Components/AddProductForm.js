import React, {useState} from "react";

function AddProductForm( {products, setProducts} ){
    
    const [state, setState] = useState({})

    function handleSubmit(){
    fetch('http://localhost:3002/crops', {
       method: "POST",
       headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
       body: JSON.stringify(state)
    })
    .then(re=>re.json())
    .then(input=>{
        setProducts([
            ...products, input
        ])
    })
}
function handleChange(event){
    setState({
        ...state, [event.target.name]:event.target.value,
    })
}
    return(
        <div className="container">
        <form onSubmit={handleSubmit} className = "subo">
          <div className = "fields">
            <input onChange={handleChange} type="text" name="product" placeholder="Crop product" />
            <input onChange={handleChange} type="text" name="category" placeholder="Category" />
            <input onChange={handleChange} type="text" name="preparation" placeholder="land preparations and other operations" />
            <input onChange={handleChange} type="text" name="storage" placeholder="Product storage" />
            <input onChange={handleChange} type="text" name="markets" placeholder="Market information"/>
          </div>
          <button className="butt" type="submit">
            Add information
          </button>
        </form>
      </div>
    );
}

export default AddProductForm;
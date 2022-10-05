import React from "react"

function Search( {setSearchItem} ){

    function handleChange(event){
     
        setSearchItem(event.target.value)
      }
      return (
        <div className = "searching">
          <input 
            type="text"
            placeholder="enter crop to display information"
            onChange={(handleChange)}
          />
          
        </div>
      );
}
export default Search;
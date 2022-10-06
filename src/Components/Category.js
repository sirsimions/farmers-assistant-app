import {useState} from 'react';

function Category({categoryAdded}) {
    const emptyCategory = '';
    const [categoryName, setCategoryName] = useState(emptyCategory);

    function handleSubmit(event) {
        event.preventDefault();
        categoryAdded(categoryName);
        setCategoryName(emptyCategory);
    }

    function handleChange(event) {
        setCategoryName(event.target.value);
    }

    return (
        <div>
            <h3>New Crop Category</h3>
            <form class="signupForm" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input class="inputFields" type={'text'} name='categoryName' value={categoryName} onChange={handleChange} required/>
                </label>
                <button id="join-btn" type='submit'>Add Category</button>
            </form>
        </div>
    ) 
}

export default Category;
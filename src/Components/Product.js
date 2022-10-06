import { useState } from "react";

function Product({expenseAdded, categories}) {
    const formObject = {
        product: '',
        category: '',
        date: '',
        note: '',
        amount: 0,
    };
    const [formData, setFormData] = useState(formObject);

    function handleSubmit(event) {
        event.preventDefault();
        formData.date = new Date(Date.now()).toString();
        expenseAdded(formData);
        setFormData(formObject);
    }

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    function categoryOptionsUi() { 
        return categories.map(category => <option value={category.name}>{category.name}</option>)
    };

    return (
        <>
        <small>Please feel free to add useful information to the current database pertaining crop production</small>
        <h3>New Crop:</h3>
        <section class="signupSection">
            
            <form class="signupForm" onSubmit={handleSubmit}>
                <label>
                    Crop: 
                    <input class="inputFields" type={'text'} name='product' value={formData.product} onChange={handleChange}/>
                </label>
                <label>
                <br /> Amount per unit: 
                    <input class="inputFields" type={'number'} name='amount' value={formData.amount} onChange={handleChange}/>
                </label>
                <label>
                <br /> Category: 
                    <select class="inputFields" name='category' value={formData.category} onChange={handleChange}>
                    {categoryOptionsUi()}
                    </select>
                </label>
                <label>
                <br /> Note (land preparation etc):
                    <input class="inputFields" type={'text'} name='note' value={formData.note} onChange={handleChange}/>
                </label>

                <label>
                <br /> Sample url: 
                    <input class="inputFields" type={'text'} name='note' value={formData.note} onChange={handleChange}/>
                </label>
                <button id="join-btn" type={'submit'}> <br /> Add Product</button>
            </form>
        </section>
        </>
    )
}

export default Product;
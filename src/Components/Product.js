import { useState } from "react";

function Product({expenseAdded, categories}) {
    const formObject = {
        product: 'tomato',
        category: 'vegetable',
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
        <section>
            <h3>New Product:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Note:
                    <input type={'text'} name='note' value={formData.product} onChange={handleChange}/>
                </label>
                <label>
                    Amount:
                    <input type={'number'} name='amount' value={formData.amount} onChange={handleChange}/>
                </label>
                <label>
                    Category:
                    <select name='category' value={formData.category} onChange={handleChange}>
                    {categoryOptionsUi()}
                    </select>
                </label>
                <label>
                    Note:
                    <input type={'text'} name='note' value={formData.note} onChange={handleChange}/>
                </label>
                <button type={'submit'}>Add Product</button>
            </form>
        </section>
    )
}

export default Product;
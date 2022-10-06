function ProductCard({expense}) {
    function formatAmount(amount) {
        const amountFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
        return amountFormatter.format(amount);
    }

    return (
        <div>
            <img className="image" src = {expense.image} alt="crop image"/>
            <h4>{expense.product}</h4>
            <h4>{expense.category}</h4>
            <p>{expense.date}</p>
            <h2>{formatAmount(expense.amount)}</h2>
            <p style={{'fontStyle': 'italic'}}>{expense.note}</p>
        </div>
    )
}

export default ProductCard;
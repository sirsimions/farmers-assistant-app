import ProductCard from './ProductCard';

function Home({expenses}) {
    const expenseListUi = expenses.map( expense => <li key={expense.id}><ProductCard key={expense.id} expense={expense}/></li>)
    return (
        <div>
            <p>Information on Crop Farming and Market Statistics:</p>
            <ul>{expenseListUi}</ul>
        </div>
    )
}

export default Home;
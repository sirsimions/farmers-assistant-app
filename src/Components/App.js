import {Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Product from './Product';
import Category from './Category';
import Home from './Home';
import { useEffect, useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const expensesUrl ='http://localhost:3004/expenses';
  const categoriesUrl = 'http://localhost:3004/categories';

  useEffect(fetchExpenses, []);
  useEffect(fetchCategories, []);
  
  function fetchExpenses() {
    fetchData(expensesUrl, setExpenses);
  }

  function fetchCategories() {
    fetchData(categoriesUrl, setCategories);
  }

  function fetchData(url, setDataFunction) {
    fetch(url)
      .then(response => response.json())
      .then(data => setDataFunction(data));
  }

  function onCategoryAdded(categoryName) {
    const category = {
      name: categoryName
    }
    postData(categoriesUrl, category, categories, setCategories);
  }

  function onExpenseAdded(expense) {
    postData(expensesUrl, expense, expenses, setExpenses);
  }

  function postData(url, data, dataSet, setDataFunction) {
    const stringData = JSON.stringify(data);
    const settings = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: stringData
    }

    fetch(url, settings)
      .then(response => response.json())
      .then(responseData => setDataFunction([...dataSet, responseData]));
  }

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/product' element={<Product expenseAdded={onExpenseAdded} categories={categories}/>} />
        <Route path='/category' element={<Category categoryAdded={onCategoryAdded}/>}/>
        <Route path='/' element={<Home expenses={expenses}/>}/>
        <Route path='*' element={<div>Not Found!</div>}/>
      </Routes>
    </div>
  );
}

export default App;



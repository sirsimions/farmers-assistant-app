import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProductForm from "./AddProductForm";
import Home from "./Home"
import Plants from "./Plants"
import Header from './Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/addProdutForm" element={<AddProductForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;



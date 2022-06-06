import "./App.css";
import {Routes,Route} from "react-router-dom"
import Home from"./pages/Home"
import Login from"./pages/Login"
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product/Product";
import Products from "./components/Products/Products";
function App() {
  return (
    <div className="App">
      {
        // Code here
      }
<Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/products/" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;

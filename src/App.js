import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from './components/SearchBar'
import Home from "./components/Home";
import Products from "./components/Products";


const App = () => {
  const [products, setProducts] = useState([]);


useEffect(() => {
  fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
  .then((response) => response.json())
  .then((data) => setProducts(data));
},[])

  //  console.log(products[0])
  return (
    <div>
      <Navbar/>
      <SearchBar products={products} setProducts={setProducts} />
       {/* <Home/> */}
       {/* <Contactinfo/> */}
      <Products products={products}/>
    </div>
  );
}
export default App

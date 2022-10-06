import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from './components/SearchBar'
import Home from "./components/Home";
import Products from "./components/Products";
import Contactinfo from "./components/Contactinfo";
const App = () => {
  const [products, setProducts] = useState([]);

  // const fetchData = () => {
    // return fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
          // .then((response) => response.json())
          // .then((data) => setProducts(data));
  // }
// 
  useEffect(() => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
.then((response) => response.json())
.then((data) => setProducts(data));
  },[])
  //  console.log(user)
  return (
    <div>
      
      <Navbar/>
      <SearchBar/>
       <Home/>
      <Products products={products}/>
       <Contactinfo/>
    </div>
  );
}
export default App
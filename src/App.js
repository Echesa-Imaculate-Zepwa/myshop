import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import SearchBar from './components/searchBar'
import Home from "./components/Home";
import Products from "./components/products";
import Contactinfo from "./components/contactinfo";
const App = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
      <Navbar />
      <SearchBar/>
       <Home/>
       <Products/>
       <Contactinfo/>
    </div>
  );
}
export default App
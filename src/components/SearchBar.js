import React, { useEffect, useState } from "react";

function SearchBar({products, setProducts}) {
  const [ searchValue, setSearchValue ] = useState("")
//   console.log(products[0])


    useEffect(() => {
      const filteredProducts = products.filter(product => {
        const lowerProdDescription = product.name.toLowerCase()
        return lowerProdDescription.includes(searchValue.toLowerCase())
        })
        setProducts(filteredProducts)
    }, [searchValue]);

    const onChange = (e) => setSearchValue(e.target.value)
//   console.log(products)

    return (<div>
         <form >
          <label>
              <span>ITEMS HERE: </span>
          </label>
          <input
              type="text"
              id="header-search"
              placeholder="Search item"
              onChange={onChange}
          />
          <button type="submit">Search</button>
      </form>
    </div>)
};

export default SearchBar;
                      
                      

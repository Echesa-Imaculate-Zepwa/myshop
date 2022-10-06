import React from "react";

const Products = ({products}) => {

    // console.log(products[0].price)

    return (
         <div className="card-container">
        {products.map(product => (
          <div className="card">
              <img src={product.image_link} alt="Denim Jeans" className="card-image" /> 
              <h1>{product.name}</h1>
              <p className="price">Price: {product.price}</p>
              <p className="description">Description: {product.description}</p>
              <p><button>Add to Cart</button></p>
          </div>
           
        ) )}
        </div>
    );
}

export default Products;
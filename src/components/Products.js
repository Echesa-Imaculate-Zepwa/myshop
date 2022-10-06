import React from "react";

const Products = ({products}) => {

    // console.log(products[0].price)

    return (
         <div className="card-container">
            <h1>Our products</h1>
        {products.map(product => (
          <div className="card">
              <img src={product.image_link} alt="my-cosmetics" className="card-image" /> 
              <h1>{product.name}</h1>
              <p className="price">Price: {product.price}</p>
              <p className="description">Description: {product.description}</p>
              <p className="currency">Currency: {product.currency}</p>
              <p className="brand">Brand: {product.brand}</p>
              <p className="price_sign">Price_sign: {product.price_sign}</p>
              <p className="category">Category: {product.category}</p>
              {/* <p><button>Add to Cart</button></p> */}
          </div>
           
        ) )}
        </div>
    );
}

export default Products;
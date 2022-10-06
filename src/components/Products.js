import React from "react";

const Products = ({products}) => {

    // console.log(products[0].price)

    return (
        // <div>
        //   <p>HERE ARE OUR PRODUCTS</p>
        //   <h2>{products[0].name}</h2> 
        //   <img src={products[0].image_link} alt="W3Schools.com" width="100" height="132"/>
        //   <h3>{products[0].price}</h3>
        // </div>
        <div className="card">
        <img src={products[0].image_link} alt="Denim Jeans" className="card-image" /> 
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
        <p><button>Add to Cart</button></p>
        </div>
      


    );
}

export default Products;
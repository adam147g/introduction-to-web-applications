// src/components/ProductsList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductsList = ({ products, loggedIn }) => {
  return (
    <div>
      <h2>Products List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {loggedIn && (
            <Link to={`/edit/${product.id}`}>
              <button>Edit</button>
            </Link>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;

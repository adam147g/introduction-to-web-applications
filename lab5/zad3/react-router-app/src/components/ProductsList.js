// src/components/ProductsList.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductsList = ({ products }) => {
  return (
    <div>
      <h2>Lista Produktów</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
            <p>{product.description} 
            <Link to={`/edit/${product.id}`}>
              <button>Edytuj</button>
            </Link></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;

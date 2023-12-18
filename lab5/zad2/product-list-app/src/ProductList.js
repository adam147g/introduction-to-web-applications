// ProductList.js
import React from 'react';
import Product from './Product';

const ProductList = ({ products, filter, sortOrder }) => {
  const customCompare = (a, b, sortOrder) => {
    const normalize = (str) => str.replace(/[a-zA-Z]/g, (match) => match.toLowerCase());
    const normalizedA = normalize(a);
    const normalizedB = normalize(b);
    return sortOrder * normalizedA.localeCompare(normalizedB);
  };

  let filteredProducts = [...products];

  if (filter) {
    filteredProducts = filteredProducts.filter(product =>
      product.nazwa.toLowerCase().includes(filter.toLowerCase())
    );
  }

  if (sortOrder !== 0) {
    filteredProducts.sort((a, b) => customCompare(a.nazwa, b.nazwa, sortOrder));
  }

  const limitedResults = filteredProducts.slice(0, 30);

  return (
    <ul>
      {limitedResults.map((result, index) => (
        <Product key={index} {...result} />
      ))}
    </ul>
  );
};

export default ProductList;

// App.js
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';


const App = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const results = data.products.map(product => ({
          nazwa: product.title,
          opis: product.description,
          ikonka: product.thumbnail,
        }));
        setProducts(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleSort = () => {
    setSortOrder(prevSortOrder =>
      prevSortOrder === 1 ? -1 : prevSortOrder === -1 ? 0 : 1
    );
  };

  return (
    <div>
      <h1>Lista Produktów</h1>
      <input
        type="text"
        placeholder="Wprowadź tekst do filtra"
        value={filter}
        onChange={handleFilter}
      />
      <button onClick={handleSort}>Sort {sortOrder !== 0 && `(${sortOrder === 1 ? 'asc' : 'dsc'})`}</button>
      <ProductList products={products} filter={filter} sortOrder={sortOrder} />
    </div>
  );
};

export default App;

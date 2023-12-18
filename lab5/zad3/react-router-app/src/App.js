// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import ProductsList from './components/ProductsList';
import EditProduct from './components/EditProduct';

const App = () => {
  const [products, setProducts] = React.useState([
    { id: 1, name: 'Marchewka', description: 'Świeża marchewka z ogrodu', price: 2.5 },
    { id: 2, name: 'Jabłko', description: 'Słodkie i soczyste jabłko', price: 3.0 },
    { id: 3, name: 'Brokuł', description: 'Zdrowy brokuł prosto z pola', price: 4.0 },
    { id: 4, name: 'Pomidor', description: 'Czerwony pomidor do sałatek', price: 2.0 },
    { id: 5, name: 'Banany', description: 'Zestaw dojrzałych bananów', price: 5.0 },
    { id: 6, name: 'Dynia', description: 'Kolorowa dynia na Halloween', price: 6.0 },
    { id: 7, name: 'Arbuz', description: 'Słodki arbuz na upalne dni', price: 8.0 },
    { id: 8, name: 'Kapusta', description: 'Zielona kapusta do bigosu', price: 2.5 },
    { id: 9, name: 'Truskawki', description: 'Soczyste truskawki z ogródka', price: 4.5 },
    { id: 10, name: 'Cebula', description: 'Świeża cebula do zup', price: 1.5 },
    { id: 11, name: 'Papryka', description: 'Kolorowa papryka do sałatek', price: 3.5 },
    { id: 12, name: 'Winogrona', description: 'Słodkie winogrona', price: 6.5 },
    { id: 13, name: 'Czosnek', description: 'Aromatyczny czosnek na potrawy', price: 2.0 },
    { id: 14, name: 'Kiwi', description: 'Egzotyczne kiwi', price: 4.0 },
    { id: 15, name: 'Maliny', description: 'Soczyste maliny', price: 5.0 },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/edit/:id" element={<EditProduct products={products} setProducts={setProducts} />} />
          <Route path="/products" element={<ProductsList products={products} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import ProductsList from './components/ProductsList';
import EditProduct from './components/EditProduct';
import Login from './components/Login';
import ProtectedHome from './components/ProtectedHome';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products.json');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return (
    <Router>
      <nav>
          {!loggedIn ? (
            <div>
              <Link to="/login">Login</Link>
            </div>
          ) : (
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
      </nav>

      <Routes>
        <Route path="/" element={<Layout />}>
          {loggedIn ? (
            <Route index element={<ProtectedHome />} />
          ) : (
            <Route index element={<Home />} />
          )}
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/edit/:id" element={<EditProduct products={products} setProducts={setProducts} />} />
          <Route path="/products" element={<ProductsList products={products} loggedIn={loggedIn}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

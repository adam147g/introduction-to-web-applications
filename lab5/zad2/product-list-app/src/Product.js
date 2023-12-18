// Product.js
import React from 'react';

const Product = ({ nazwa, opis, ikonka }) => (
  <li>
    <strong>Nazwa: {nazwa}</strong><br />
    Opis: {opis}<br />
    <img src={ikonka} alt="Ikonka produktu" />
  </li>
);

export default Product;

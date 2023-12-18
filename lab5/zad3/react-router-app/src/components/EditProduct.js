import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditProductForm from './EditProductForm';

const EditProduct = ({ products, setProducts }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const handleSave = (updatedProduct) => {
    const updatedProducts = products.map(p =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updatedProducts);
    navigate('/products');
  };

  return (
    <div>
      <h2>Edycja Produktu</h2>
      <EditProductForm product={product} onSave={handleSave} />
    </div>
  );
};

export default EditProduct;

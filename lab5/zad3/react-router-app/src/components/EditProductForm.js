import React, { useState } from 'react';

const EditProductForm = ({ product, onSave }) => {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  const handleSave = () => {
    onSave({ ...product, name, description, price });
  };

  return (
    <div>
      <h2>Formularz edycji</h2>
      <label>
        Nazwa:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Opis:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Cena:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSave}>Zapisz zmiany</button>
    </div>
  );
};

export default EditProductForm;

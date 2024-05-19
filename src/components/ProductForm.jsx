import React, { useState } from 'react';

function ProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, code, quantity: 1 });
    setName('');
    setCode('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nombre del producto" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Código EAN" 
        value={code} 
        onChange={(e) => setCode(e.target.value)} 
      />
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default ProductForm;

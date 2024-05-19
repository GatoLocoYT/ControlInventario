import React, { useState } from 'react';
import './List.css';

function ProductItem({ product, updateProduct, deleteProduct }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(product.name);
  const [code, setCode] = useState(product.code);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleSave = () => {
    updateProduct({ name, code, quantity });
    setIsEditing(false);
  };

  return (
    <div className='product'>
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button onClick={handleSave}>Guardar</button>
        </>
      ) : (
        <>
          <div className='Lista'>
            <span>{name} ({code}) - Cantidad: {quantity}</span>
            <button onClick={() => setIsEditing(true)}>Editar</button>
            <button onClick={() => deleteProduct(product.code)}>Eliminar</button>
            <button onClick={() => updateProduct({ ...product, quantity: product.quantity + 1 })}>+</button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductItem;

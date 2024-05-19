import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, updateProduct, deleteProduct }) {
  const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      {sortedProducts.map(product => (
        <ProductItem 
          key={product.code} 
          product={product} 
          updateProduct={updateProduct} 
          deleteProduct={deleteProduct} 
        />
      ))}
    </div>
  );
}

export default ProductList;

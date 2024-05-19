import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => 
      product.code === updatedProduct.code ? updatedProduct : product
    ));
  };

  const deleteProduct = (productCode) => {
    setProducts(products.filter(product => product.code !== productCode));
  };

  return (
    <div className="App">
      <h1>Control de Inventario</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList 
        products={products} 
        updateProduct={updateProduct} 
        deleteProduct={deleteProduct} 
      />
    </div>
  );
}

export default App;

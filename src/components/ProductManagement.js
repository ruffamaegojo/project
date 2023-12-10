import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  }, []);

  const addProduct = (product) => {
    setProducts([...products, product]);
  }

  const updateProduct = (productId, updatedProduct) => {
    setProducts(products.map(product => product.id === productId ? updatedProduct : product));
  }

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  }

  return (
    <div>
      <h2>Product Management</h2>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} updateProduct={updateProduct} deleteProduct={deleteProduct} />
    </div>
  );
}

export default ProductManagement;
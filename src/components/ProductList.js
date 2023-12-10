import React, { useState } from 'react';
import { Table, Button, Input } from 'reactstrap';

const ProductList = ({ products, updateProduct, deleteProduct }) => {
  const [editedProductName, setEditedProductName] = useState('');

  const handleUpdateProduct = (productId, currentProduct) => {
    if (editedProductName.trim() === '') {
      alert('Please enter a new product name.');
      return;
    }

    updateProduct(productId, { ...currentProduct, name: editedProductName });
    
    setEditedProductName('');
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>
              <Input
                type="text"
                value={editedProductName === '' ? product.name : editedProductName}
                onChange={(e) => setEditedProductName(e.target.value)}
              />
            </td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td>{product.category}</td>
            <td>
              <Button color="info" onClick={() => handleUpdateProduct(product.id, product)}>Update</Button>
              {' '}
              <Button color="danger" onClick={() => deleteProduct(product.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductList;
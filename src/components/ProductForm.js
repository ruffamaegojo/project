import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './ProductForm.css';

const ProductForm = ({ addProduct }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productCategory, setProductCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const newProduct = {
      id: Date.now(),
      name: productName,
      price: productPrice,
      stock: productStock,
      category: productCategory,
    };

    addProduct(newProduct);

    setProductName('');
    setProductPrice('');
    setProductStock('');
    setProductCategory('');
  }

  return (
    <Form onSubmit={handleSubmit} className="form-container">
      <FormGroup className="form-group">
        <Label for="productName">Product Name </Label>
        <Input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="productPrice">Product Price </Label>
        <Input type="number" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="productStock">Product Stock </Label>
        <Input type="number" id="productStock" value={productStock} onChange={(e) => setProductStock(e.target.value)} required />
      </FormGroup>
      <FormGroup className="form-group">
        <Label for="productCategory">Product Category </Label>
        {/* Auto-populate categories based on the category management module */}
        <Input type="select" id="productCategory" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} required>
          <option value="Category1">Category1</option>
          <option value="Category2">Category2</option>
          {/* Add more categories */}
        </Input>
      </FormGroup>
      <Button type="submit" color="primary">Add Product</Button>
    </Form>
  );
}

export default ProductForm;

import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const CategoryForm = ({ onCategoryAdd }) => {
  const [newCategory, setNewCategory] = useState('');

  const addCategory = () => {
    if (newCategory.trim() === '') {
      alert('Please enter a category name.');
      return;
    }

    onCategoryAdd(newCategory);
    setNewCategory('');
  };

  return (
    <Form>
      <FormGroup>
        <Label for="newCategory">New Category</Label>
        <Input
          type="text"
          id="newCategory"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
      </FormGroup>
      <Button color="primary" onClick={addCategory}>
        Add Category
      </Button>
    </Form>
  );
};

export default CategoryForm;
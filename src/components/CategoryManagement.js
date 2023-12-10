import React, { useState } from 'react';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);

  const handleCategoryAdd = (newCategory) => {
    setCategories([...categories, newCategory]);
  };

  const handleDeleteCategory = (category) => {
    setCategories(categories.filter(c => c !== category));
  };

  return (
    <div>
      <CategoryForm onCategoryAdd={handleCategoryAdd} />
      <CategoryList categories={categories} deleteCategory={handleDeleteCategory} />
    </div>
  );
};

export default CategoryManagement;
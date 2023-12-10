import React from 'react';
import { Table, Button } from 'reactstrap';

const CategoryList = ({ categories, deleteCategory }) => {
  return (
    <div>
      <h2>Category List</h2>
      <Table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category}>
              <td>{category}</td>
              <td>
                <Button color="danger" onClick={() => deleteCategory(category)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryList;
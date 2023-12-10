import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';

const TransactionManagement = () => {
  const [transactions] = useState([]);

  useEffect(() => {
  }, []);


  return (
    <div>
      <h2>Transaction Management</h2>
      <Table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.productName}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TransactionManagement;
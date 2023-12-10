import React from 'react';
import { Table, Button } from 'reactstrap';

const StocksList = ({ stocks, handleStockUpdate }) => {
  return (
    <div>
      <h2>Stocks List</h2>
      {stocks.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Current Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map(stock => (
              <tr key={stock.id}>
                <td>{stock.productName}</td>
                <td>{stock.currentStock}</td>
                <td>
                  <Button color="info" onClick={() => handleStockUpdate(stock.id)}>
                    Update Stock
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No stocks available. Add new products to manage stocks.</p>
      )}
    </div>
  );
};

export default StocksList;


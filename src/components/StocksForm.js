import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const StocksForm = ({ onStockUpdate }) => {
  const [stockId, setStockId] = useState('');

  const handleUpdateStock = () => {
    if (stockId.trim() === '') {
      alert('Please enter a stock ID.');
      return;
    }

    onStockUpdate(stockId);
    setStockId('');
  };

  return (
    <Form>
      <FormGroup>
        <Label for="stockId">Stock ID</Label>
        <Input
          type="text"
          id="stockId"
          value={stockId}
          onChange={(e) => setStockId(e.target.value)}
        />
      </FormGroup>
      <Button color="info" onClick={handleUpdateStock}>
        Update Stock
      </Button>
    </Form>
  );
};

export default StocksForm;
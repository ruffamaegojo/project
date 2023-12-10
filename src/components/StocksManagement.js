
import React, { useState, useEffect } from 'react';
import StocksForm from './StocksForm';
import StocksList from './StocksList';

const StocksManagement = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    setStocks([]);
  }, []);

  const handleStockUpdate = async (stockId) => {
    const updatedStocks = await fetchUpdatedStocks();
    setStocks(updatedStocks);
  };

  const fetchUpdatedStocks = async () => {
 
    return [];
  };

  return (
    <div>
      <h2>Stocks Management</h2>
      <StocksForm onStockUpdate={handleStockUpdate} />
      <StocksList stocks={stocks} handleStockUpdate={handleStockUpdate} />
    </div>
  );
};

export default StocksManagement;

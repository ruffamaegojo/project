import React, { useState } from 'react';
import { Container } from 'reactstrap';
import ProductManagement from './components/ProductManagement';
import CategoryManagement from './components/CategoryManagement';
import TransactionManagement from './components/TransactionManagement';
import StocksManagement from './components/StocksManagement';
import TransactionReport from './components/TransactionReport';
import './App.css';

const App = () => {
  const [currentModule, setCurrentModule] = useState('products');

  const renderModule = () => {
    switch (currentModule) {
      case 'products':
        return <ProductManagement />;
      case 'categories':
        return <CategoryManagement />;
      case 'transactions':
        return <TransactionManagement />;
      case 'stocks':
        return <StocksManagement />;
      case 'reports':
        return <TransactionReport />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <nav>
        <ul>
          <li onClick={() => setCurrentModule('products')}>Products</li>
          <li onClick={() => setCurrentModule('categories')}>Categories</li>
          <li onClick={() => setCurrentModule('transactions')}>Transactions</li>
          <li onClick={() => setCurrentModule('stocks')}>Stocks</li>
          <li onClick={() => setCurrentModule('reports')}>Reports</li>
        </ul>
      </nav>
      {renderModule()}
    </Container>
  );
}

export default App;
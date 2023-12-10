import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import Chart from 'chart.js/auto';


const TransactionReport = () => {
  const [transactionReports, setTransactionReports] = useState([]);

  useEffect(() => {
    // Mock data for transaction reports
    const mockTransactionReports = [
      { id: 1, productName: 'Product 1', sales: 65, stockLevel: 65 },
      { id: 2, productName: 'Product 2', sales: 59, stockLevel: 59 },
      { id: 3, productName: 'Product 3', sales: 80, stockLevel: 80 },
      { id: 4, productName: 'Product 4', sales: 81, stockLevel: 81 },
      { id: 5, productName: 'Product 5', sales: 56, stockLevel: 56 },
    ];

    setTransactionReports(mockTransactionReports);
  }, []);

  useEffect(() => {
    // Initialize and destroy charts when component mounts/unmounts
    const barChartCanvas = document.getElementById('salesBarChart');
    const lineChartCanvas = document.getElementById('stockLineChart');

    const barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: {
        labels: transactionReports.map(report => report.productName),
        datasets: [
          {
            label: 'Sales',
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: transactionReports.map(report => report.sales),
          },
        ],
      },
    });

    const lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: {
        labels: transactionReports.map(report => report.productName),
        datasets: [
          {
            label: 'Stock Levels',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: transactionReports.map(report => report.stockLevel),
          },
        ],
      },
    });

    return () => {
      // Destroy charts when component unmounts
      barChart.destroy();
      lineChart.destroy();
    };
  }, [transactionReports]);

  return (
    <div>
      <h2>Transaction Report</h2>
      <div>
        <h3>Sales Bar Chart</h3>
        <canvas id="salesBarChart" />
      </div>
      <div>
        <h3>Stock Levels Line Chart</h3>
        <canvas id="stockLineChart" />
      </div>
      <Table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Product Name</th>
            <th>Sales</th>
            <th>Stock Level</th>
          </tr>
        </thead>
        <tbody>
          {transactionReports.map(report => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.productName}</td>
              <td>{report.sales}</td>
              <td>{report.stockLevel}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionReport;



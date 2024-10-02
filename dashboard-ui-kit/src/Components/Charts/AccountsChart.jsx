import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

// Registery the CategoryScale

const AccountsChart = () => {
  // Define chart data

  const chart2Data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
    {
        data: [220, 170, 160, 430, 270, 295, 320],
        label: "Debit",
        borderColor: "#16DBCC",
        backgroundColor: "rgba(26, 22, 243, 1)",
        borderRadius: 10,
        barPercentage: 0.6,
        fill: true
        },
      {
        data: [450, 350, 250, 210, 430, 170, 400],
        label: "Credit",
        borderColor: "#1814F3",
        backgroundColor: "rgba(245, 165, 30, 1)",
        borderRadius: 10,
        barPercentage: 0.6,
        fill: true
      },
    ]
  };

  // Define chart options
  const options = {
    scales: {
      x: {
        type: 'category',
        display: true,
        grid: { // Add this line
          display: false,
        },
      },
      y: {
        type: 'linear',
        display: true,
        grid: { // Add this line
          display: false,
        },
        ticks: { // Add this line
          display: false,
        },
      }
    },
  };

  // Define charts array
  const charts = [
    {
      id: 1,
      data: chart2Data
    }
  ];

  // Map charts array to chart components
  const chartComponents = charts.map((chart) => (
    <div key={chart.id}>
      <Bar
        data={chart.data}
        options={options}
      />
    </div>
  ));

  return (
    <div>
      {chartComponents}
    </div>
  );
};
Chart.register(...registerables);
export default AccountsChart;
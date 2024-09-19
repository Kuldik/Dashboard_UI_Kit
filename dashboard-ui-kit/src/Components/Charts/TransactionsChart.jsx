import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

// Registery the CategoryScale

const Charts = () => {
  // Define chart data

  const chart2Data = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        data: [8300, 13500, 9000, 4300, 12500, 8600],
        label: "Diposit",
        borderColor: "#1814F3",
        backgroundColor: "rgba(237, 240, 247, 1)",
        fill: true,
        borderRadius: 10,
        hoverBackgroundColor: "#16DBCC", // Add this line
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
export default Charts;
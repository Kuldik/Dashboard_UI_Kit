import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

// Registery the CategoryScale

const Charts = () => {
  // Define chart data

  const chart2Data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        data: [499, 350, 310, 480, 150, 380, 400],
        label: "Withdraw",
        borderColor: "#1814F3",
        backgroundColor: "rgba(24, 20, 243, 1)",
        borderRadius: 50,
        barPercentage: 0.4,
        fill: true
      },
      {
        data: [220, 120, 250, 360, 230, 235, 320],
        label: "Diposit",
        borderColor: "#16DBCC",
        backgroundColor: "rgba(22, 219, 204, 1)",
        borderRadius: 50,
        barPercentage: 0.4,
        fill: true
      },
    ]
  };

  // Define chart options
  const options = {
    scales: {
      x: {
        type: 'category',
        display: true
      },
      y: {
        type: 'linear',
        display: true,
        gridLines: {
          display: false
        }
      }
    }
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
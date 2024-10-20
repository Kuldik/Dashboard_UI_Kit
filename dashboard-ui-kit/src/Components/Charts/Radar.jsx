import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = () => {
    const radarChartData = {
        labels: ["Your Raiting", "Rate of Closed Loans", "Amount of money invested", "Total Transactions", "Number of Cards", "Invoices",],
        datasets: [{
          label: "Privileges level",
          data: [9, 7, 10, 7, 8, 6],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
        }]
    };

    const options = {
        title: {
          display: true,
          text: "Radar Chart",
          fontSize: 20
        },
        interaction: {
          intersect: false
        },
        legend: {
          display: true,
          position: "top"
        },
        scale: {
          suggestedMin: 0
        }
      };

  return (
    <Radar
      data={radarChartData}
      options={options}
      width={400}
      height={200}
    />
  );
};

export default RadarChart;
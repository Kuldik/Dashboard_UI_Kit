import React from "react";
import { Line } from "react-chartjs-2";

const Yearly = () => {
  const lineChartData = {
    labels: ["0", "2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        data: [0, 5000, 23000, 17000, 37000, 21000, 30000],
        label: "",
        borderColor: "#EDA10D",
        fill: false,
        lineTension: 0,
      },
    ]
  };

  return (
    <Line
      type="line"
      width={160}
      height={60}
      options={{
        title: {
          display: true,
          text: "",
          fontSize: 20
        },
        legend: {
          display: true, //Is the legend shown?
          position: "top" //Position of the legend.
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false, 
              offset: true, 
            }
          }]
        }
      }}
      data={lineChartData}
    />
  );
};
export default Yearly;
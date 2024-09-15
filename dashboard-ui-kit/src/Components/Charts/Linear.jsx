import React from "react";
import { Line } from "react-chartjs-2";

const Linear = () => {
  const lineChartData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [0, 100, 365, 240, 450, 410, 780, 200, 580, 240, 610, 580],
        label: "",
        borderColor: "#3333ff",
        fill: true,
        lineTension: 0.5
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
        }
      }}
      data={lineChartData}
    />
  );
};
export default Linear;
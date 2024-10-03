import React from "react";
import { Line } from "react-chartjs-2";

const Monthly = () => {
  const lineChartData = {
    labels: ["0", "2016", "2017", "2018", "2019", "2020", "2021",],
    datasets: [
      {
        data: [0, 10500, 13000, 37000, 34000, 16000, 20000],
        label: "",
        borderColor: "#16DBCC",
        fill: false,
        lineTension: 0.7,
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
export default Monthly;
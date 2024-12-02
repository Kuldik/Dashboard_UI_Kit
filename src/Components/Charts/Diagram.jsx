import React from "react";
import { Pie } from "react-chartjs-2";

const Diagram = () => {
  const pieDiagramData = {
    labels: ["30% Entertainment", "20% Investment", "35% Others", "15% Bill Expence"],
    datasets: [{
      data: [30, 20, 35, 15],
      label: "Costs in %",
      backgroundColor: ["#343C6A", "#FA00FF", "#1814F3", "#FC7900"],
      hoverBackgroundColor: ["#212643", "#8c028f", "#0c0a74", "#8b4401"],
      borderWidth: 10, 
    }]
  };
  const pieDiagram = (
    <Pie
      type="pie"
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 3 Months",
          fontSize: 15
        },
        legend: {
          display: true,
          position: "top"
        },
        cutoutPercentage: 20,
        rotation: 90
      }}
      data={pieDiagramData}
    />
  );
  return pieDiagram;
};
export default Diagram;
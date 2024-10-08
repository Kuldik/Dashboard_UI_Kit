import React from "react";
import { Doughnut } from "react-chartjs-2";


const Donut = () => {
  const donutChartData = {
    labels: ["DBL Bank", "ABM Bank", "BRC Bank", "MCP Bank"],
    datasets: [{
      data: [25, 25, 25, 25],
      label: "Bank name",
      backgroundColor: ["#4C78FF", "#16DBCC", "#FF82AC", "#FFB11F"],
      hoverBackgroundColor: ["#2A4D9C", "#056A7C", "#993F6C", "#996300"],
      rotate: 180
    }]
  };


  const customPlugin = {
    id: 'customSegmentSize',
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;
      const segments = chart.data.datasets[0].segments;
  
      ctx.save();
      ctx.translate(chartArea.left + chartArea.width / 2, chartArea.top + chartArea.height / 2);
  
      segments.forEach((segment, index) => {
        const startAngle = segment.startAngle;
        const endAngle = segment.endAngle;
        const radius = 200; // задайте радиус сегментов
  
        ctx.beginPath();
        ctx.arc(0, 0, radius, startAngle, endAngle);
        ctx.fillStyle = segment.backgroundColor;
        ctx.fill();
      });
  
      ctx.restore();
    }
  };


  const donutChart = (
    <Doughnut
      type="doughnut"
      width={130}
      height={50}
      options={{
        title: {
          display: true,
          fontSize: 15
        },
        plugins: {
          doughnut: {
            segmentSize: 200 
          }
        },
        legend: {
          display: true,
          position: "top"
        },
        rotation: 270,
        responsive: true,
        cutoutPercentage: 90,
      }}
      data={donutChartData}
    />
  );
  return donutChart;
};
export default Donut;
import React from "react";
import { Bubble } from "react-chartjs-2";
import seedrandom from 'seedrandom';

const Utils = {
  rand: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  srand: (seed) => {
    const random = seedrandom(seed);
    Utils.rand = function(min, max) {
      return Math.floor(random() * (max - min + 1)) + min;
    };
  },
  color: (index) => {
    const colors = [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ];
    return colors[index % colors.length];
  }
};

const DATA_COUNT = 16;
const MIN_XY = -150;
const MAX_XY = 100;
Utils.srand(110);

function channelValue(x, y, values) {
  return x < 0 && y < 0 ? values[0] : x < 0 ? values[1] : y < 0 ? values[2] : values[3];
}

function colorize(opaque, context) {
  const value = context.raw;
  const x = value.x / 100;
  const y = value.y / 100;
  const r = channelValue(x, y, [250, 150, 50, 0]);
  const g = channelValue(x, y, [0, 50, 150, 250]);
  const b = channelValue(x, y, [0, 150, 150, 250]);
  const a = opaque ? 1 : 0.5 * value.v / 1000;

  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

function generateData() {
  const data = [];
  let i;

  for (i = 0; i < DATA_COUNT; ++i) {
    data.push({
      x: Utils.rand(MIN_XY, MAX_XY),
      y: Utils.rand(MIN_XY, MAX_XY),
      v: Utils.rand(0, 1000)
    });
  }

  return data;
}

const data = {
  datasets: [{
    data: generateData()
  }, {
    data: generateData()
  }]
};

const config = {
  type: 'bubble',
  data: data,
  options: {
    aspectRatio: 1,
    plugins: {
      legend: false,
      tooltip: false,
    },
    elements: {
      point: {
        backgroundColor: colorize.bind(null, false),

        borderColor: colorize.bind(null, true),

        borderWidth: function(context) {
          return Math.min(Math.max(1, context.datasetIndex + 1), 8);
        },

        hoverBackgroundColor: 'transparent',

        hoverBorderColor: function(context) {
          return Utils.color(context.datasetIndex);
        },

        hoverBorderWidth: function(context) {
          return Math.round(8 * context.raw.v / 1000);
        },

        radius: function(context) {
          const size = context.chart.width;
          const base = Math.abs(context.raw.v) / 1000;
          return (size / 24) * base;
        }
      }
    }
  }
};

const actions = [
  {
    name: 'Randomize',
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = generateData();
      });
      chart.update();
    }
  },
];

const BubbleChart = () => {
  return (
    <div>
      <Bubble
        data={config.data}
        options={config.options}
      />
    </div>
  );
};

export default BubbleChart;
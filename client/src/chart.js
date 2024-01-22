import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { useApexCharts } from "react-apexcharts";

const MultiChartLine = () => {
  const [chartData, setChartData] = React.useState([]);

  const options = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: ["Apple", "Microsoft", "Google"]
    }
  };

  React.useEffect(() => {
    const randomData = () => {
      let data = [];
      for (let i = 0; i < 3; i++) {
        data.push({
          name: options.xaxis.categories[i],
          data: [Math.floor(Math.random() * 100)]
        });
      }
      setChartData(data);
    };
    randomData();
    const interval = setInterval(() => {
      randomData();
    }, 3000);
    return () => clearInterval(interval);
  }, [options.xaxis.categories]);

  const { chart } = useApexCharts(options);

  React.useEffect(() => {
    chart.updateSeries(chartData);
  }, [chart, chartData]);

  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="data" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default MultiChartLine;
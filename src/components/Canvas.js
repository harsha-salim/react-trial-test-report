import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Canvas = ({ passCount, failCount }) => {
  const labels = ["PASSED", "FAILED"];

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Test Execution Result",
        data: [passCount, failCount],
        backgroundColor: ["rgb(46,139,87)", "rgb(255, 99, 132)"],
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

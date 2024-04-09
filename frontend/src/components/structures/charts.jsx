// SalesChart.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto"; // Import Chart.js

function SalesChart() {
  const [salesData, setSalesData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    let chartInstance = null;

    axios
      .get("http://localhost:5000/sales")
      .then((response) => {
        const data = response.data;
        const chartData = {
          labels: data.map((item) => item.range),
          datasets: [
            {
              label: "Sales",
              data: data.map((item) => item.sales),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        };

        // Destroy the previous chart instance before rendering a new one
        if (chartInstance) {
          chartInstance.destroy();
        }

        setSalesData(chartData);
        chartInstance = new Chart(document.getElementById("sales-chart"), {
          type: "bar",
          data: chartData,
          options: {
            scales: {
              y: {
                type: "linear",
                beginAtZero: true,
              },
            },
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
      });

    // Clean up function to ensure the previous chart instance is destroyed
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="chartdiv">
      <h2>Sales Chart</h2>
      <canvas id="sales-chart" />
    </div>
  );
}

export default SalesChart;

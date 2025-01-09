import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function DashboardGm() {
  const canvasRef = useRef(null);
  const canvasSelloutRef = useRef(null);
  const canvasTargetVsAchievementRef = useRef(null);
  const canvasSelloutByProductRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const target = [100, 120, 140, 150, 160, 180, 200, 220, 240, 260, 280, 300];
    const achievement = [
      90, 110, 130, 140, 150, 170, 190, 210, 230, 250, 270, 290,
    ];

    const percentages = achievement.map((ach, index) =>
      ((ach / target[index]) * 100).toFixed(2)
    );

    const data = {
      labels,
      datasets: [
        {
          label: "Target",
          data: target,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Achievement",
          data: achievement,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: "bar",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const { datasetIndex, dataIndex } = tooltipItem;
                if (datasetIndex === 1) {
                  return `Achievement: ${achievement[dataIndex]} (${percentages[dataIndex]}%)`;
                }
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
              },
            },
          },
          legend: { position: "top" },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "Sellout (in units)" },
          },
        },
      },
    };

    const myChart = new Chart(ctx, config);

    const areas = ["Gamma", "Ruby", "Onyx", "Alfa", "Saffir"];
    const selloutByArea = [120, 150, 180, 200, 220];

    const selloutAreaConfig = {
      labels: areas,
      datasets: [
        {
          label: "Sellout by Area",
          data: selloutByArea,
          backgroundColor: "rgba(153, 102, 255, 0.6)",
          borderColor: "rgba(153, 102, 255, 1)",
          borderWidth: 1,
        },
      ],
    };

    const selloutAreaConfigChart = {
      type: "bar",
      data: selloutAreaConfig,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `Sellout: ${selloutByArea[tooltipItem.dataIndex]}`;
              },
            },
          },
          legend: { position: "top" },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "Sellout (in units)" },
          },
        },
      },
    };

    const selloutAreaChart = new Chart(
      canvasSelloutRef.current,
      selloutAreaConfigChart
    );

    const targetVsAchievementData = {
      labels: ["Target", "Achievement"],
      datasets: [
        {
          data: [
            target.reduce((a, b) => a + b, 0),
            achievement.reduce((a, b) => a + b, 0),
          ],
          backgroundColor: [
            "rgba(54, 162, 235, 0.6)",
            "rgba(75, 192, 192, 0.6)",
          ],
          borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
          borderWidth: 1,
        },
      ],
    };

    const targetVsAchievementConfig = {
      type: "pie",
      data: targetVsAchievementData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "top" } },
      },
    };

    const targetVsAchievementChart = new Chart(
      canvasTargetVsAchievementRef.current,
      targetVsAchievementConfig
    );

    const products = [
      "STERICLIN",
      "AHLSTROM",
      "PETERS",
      "PHARMAPLAST",
      "TROGE",
    ];
    const selloutByProduct = [250, 300, 350, 400, 450];

    const selloutByProductConfig = {
      labels: products,
      datasets: [
        {
          label: "Sellout by Product Principal",
          data: selloutByProduct,
          backgroundColor: "rgba(255, 159, 64, 0.6)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
        },
      ],
    };

    const selloutByProductConfigChart = {
      type: "bar",
      data: selloutByProductConfig,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `Sellout: ${selloutByProduct[tooltipItem.dataIndex]}`;
              },
            },
          },
          legend: { position: "top" },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "Sellout (in units)" },
          },
        },
      },
    };

    const selloutByProductChart = new Chart(
      canvasSelloutByProductRef.current,
      selloutByProductConfigChart
    );

    return () => {
      if (myChart) myChart.destroy();
      if (selloutAreaChart) selloutAreaChart.destroy();
      if (targetVsAchievementChart) targetVsAchievementChart.destroy();
      if (selloutByProductChart) selloutByProductChart.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <h1 className="text-2xl font-bold text-center mb-6">Sellout Report GM</h1>

      {/* Target vs Achievement Pie Chart */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex items-center bg-blue-100 p-4 rounded-lg shadow">
          <div>
            <h3 className="font-semibold text-lg">Target vs Achievement</h3>
            <div className="h-72">
              <canvas
                ref={canvasTargetVsAchievementRef}
                className="w-full h-full"
              ></canvas>
            </div>
          </div>
        </div>

        {/* Sellout by Area */}
        <div className="flex items-center bg-green-100 p-4 rounded-lg shadow">
          <div>
            <h3 className="font-semibold text-lg">Sellout by Area</h3>
            <div className="h-72">
              <canvas ref={canvasSelloutRef} className="w-full h-full"></canvas>
            </div>
          </div>
        </div>
      </div>

      {/* Sellout by Product Principal */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Sellout by Product Principal
        </h2>
        <div className="h-72">
          <canvas
            ref={canvasSelloutByProductRef}
            className="w-full h-full"
          ></canvas>
        </div>
      </div>

      {/* Sales Target vs Achievement */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Sellout History</h2>
        <div className="h-72">
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>
      </div>
    </div>
  );
}

export default DashboardGm;

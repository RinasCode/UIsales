import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function DashboardDirut() {
  const canvasRef = useRef(null);
  const canvasSelloutRef = useRef(null);
  const canvasTargetVsSalesEastRef = useRef(null);
  const canvasTargetVsSalesWestRef = useRef(null);
  const canvasTop5SalesEastRef = useRef(null);
  const canvasTop5SalesWestRef = useRef(null);

  useEffect(() => {
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

    const targetEast = [
      100, 120, 140, 150, 160, 180, 200, 220, 240, 260, 280, 300,
    ];
    const achievementEast = [
      90, 110, 130, 140, 150, 170, 190, 210, 230, 250, 270, 290,
    ];

    const targetWest = [
      95, 115, 135, 145, 155, 175, 195, 215, 235, 255, 275, 295,
    ];
    const achievementWest = [
      85, 105, 125, 135, 145, 165, 185, 205, 225, 245, 265, 285,
    ];

    const percentagesEast = achievementEast.map((ach, index) =>
      ((ach / targetEast[index]) * 100).toFixed(2)
    );
    const percentagesWest = achievementWest.map((ach, index) =>
      ((ach / targetWest[index]) * 100).toFixed(2)
    );

    const dataTargetVsSalesEast = {
      labels,
      datasets: [
        {
          label: "Target East",
          data: targetEast,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Achievement East",
          data: achievementEast,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    const dataTargetVsSalesWest = {
      labels,
      datasets: [
        {
          label: "Target West",
          data: targetWest,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Achievement West",
          data: achievementWest,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    const configTargetVsSales = {
      type: "bar",
      data: dataTargetVsSalesEast,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const { datasetIndex, dataIndex } = tooltipItem;
                if (datasetIndex === 1) {
                  return `Achievement: ${achievementEast[dataIndex]} (${percentagesEast[dataIndex]}%)`;
                }
                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
              },
            },
          },
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Sales (in value)",
            },
          },
        },
      },
    };

    const top5SalesEast = [100, 95, 90, 85, 80];
    const top5SalesWest = [110, 105, 100, 95, 90];

    const top5ConfigEast = {
      labels: ["TROGE", "PHARMAPLAST", "AHLSTROM", "STERICLIN", "MEDIPRO"],
      datasets: [
        {
          label: "Top 5 Sales East",
          data: top5SalesEast,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    const top5ConfigWest = {
      labels: ["TROGE", "PHARMAPLAST", "AHLSTROM", "STERICLIN", "MEDIPRO"],
      datasets: [
        {
          label: "Top 5 Sales West",
          data: top5SalesWest,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    const myChartEast = new Chart(canvasTargetVsSalesEastRef.current, {
      type: "bar",
      data: dataTargetVsSalesEast,
      options: configTargetVsSales.options,
    });

    const myChartWest = new Chart(canvasTargetVsSalesWestRef.current, {
      type: "bar",
      data: dataTargetVsSalesWest,
      options: configTargetVsSales.options,
    });
    const top5SalesEastChart = new Chart(canvasTop5SalesEastRef.current, {
      type: "bar",
      data: top5ConfigEast,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              },
            },
          },
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Sales (in value)",
            },
          },
        },
      },
    });

    const top5SalesWestChart = new Chart(canvasTop5SalesWestRef.current, {
      type: "bar",
      data: top5ConfigWest,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              },
            },
          },
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Sales (in value)",
            },
          },
        },
      },
    });

    return () => {
      if (myChartEast) myChartEast.destroy();
      if (myChartWest) myChartWest.destroy();
      if (top5SalesEastChart) top5SalesEastChart.destroy();
      if (top5SalesWestChart) top5SalesWestChart.destroy();
    };
  }, []);

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
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Sellout (in value)",
            },
          },
        },
      },
    };

    const myChart = new Chart(ctx, config);

    const productNames = [
      "TROGE",
      "AHLSTROM",
      "PETERS",
      "PHARMAPLAST",
      "STERICLIN",
    ];
    const selloutData = [
      [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
      [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
      [15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
      [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
      [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    ];

    const selloutConfig = {
      labels,
      datasets: productNames.map((productName, index) => ({
        label: productName,
        data: selloutData[index],
        backgroundColor: `rgba(${(index + 1) * 50}, ${(index + 1) * 60}, ${
          (index + 1) * 70
        }, 0.6)`,
        borderColor: `rgba(${(index + 1) * 50}, ${(index + 1) * 60}, ${
          (index + 1) * 70
        }, 1)`,
        borderWidth: 1,
      })),
    };

    const selloutChartConfig = {
      type: "bar",
      data: selloutConfig,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const { datasetIndex, dataIndex } = tooltipItem;
                return `${productNames[datasetIndex]}: ${selloutData[datasetIndex][dataIndex]}`;
              },
            },
          },
          legend: {
            position: "top",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Sellout (in value)",
            },
          },
        },
      },
    };

    const selloutChart = new Chart(
      canvasSelloutRef.current,
      selloutChartConfig
    );

    return () => {
      if (myChart) {
        myChart.destroy();
      }
      if (selloutChart) {
        selloutChart.destroy();
      }
    };
  }, []);
  return (
    <div>
      {/* Sales Report */}
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mb-6">
        <h1 className="text-2xl font-bold text-center mb-6">Sellout Report Global Dispomedika</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-center bg-blue-100 p-4 rounded-lg shadow-md">
            <div>
              <h3 className="font-semibold text-lg">Sellout History</h3>
              <div className="h-72">
                <canvas ref={canvasRef} className="w-full h-full"></canvas>
              </div>
            </div>
          </div>

          <div className="flex items-center bg-green-100 p-4 rounded-lg shadow-md">
            <div>
              <h3 className="font-semibold text-lg">Sellout History by Principal</h3>
              <div className="h-72">
                <canvas
                  ref={canvasSelloutRef}
                  className="w-full h-full"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Report (Target vs Sales) */}
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mb-6">
        <h1 className="text-2xl font-bold text-center mb-6">Sales vs Target</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-center bg-blue-100 p-4 rounded-lg shadow-md">
            <div>
              <h3 className="font-semibold text-lg">Target vs Sales (East)</h3>
              <div className="h-72">
                <canvas
                  ref={canvasTargetVsSalesEastRef}
                  className="w-full h-full"
                ></canvas>
              </div>
            </div>
          </div>

          <div className="flex items-center bg-green-100 p-4 rounded-lg shadow-md">
            <div>
              <h3 className="font-semibold text-lg">Target vs Sales (West)</h3>
              <div className="h-72">
                <canvas
                  ref={canvasTargetVsSalesWestRef}
                  className="w-full h-full"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top 5 Sales Report */}
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mb-6">
        <h1 className="text-2xl font-bold text-center mb-6">Top 5 Sales</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-center bg-blue-100 p-4 rounded-lg shadow-md">
            <div>
              <h3 className="font-semibold text-lg">Top 5 Sales East</h3>
              <div className="h-72">
                <canvas
                  ref={canvasTop5SalesEastRef}
                  className="w-full h-full"
                ></canvas>
              </div>
            </div>
          </div>

          <div className="flex items-center bg-green-100 p-4 rounded-lg shadow-md">
            <div>
              <h3 className="font-semibold text-lg">Top 5 Sales West</h3>
              <div className="h-72">
                <canvas
                  ref={canvasTop5SalesWestRef}
                  className="w-full h-full"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardDirut;

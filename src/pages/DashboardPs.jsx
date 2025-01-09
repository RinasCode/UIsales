import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { FaRegClock, FaUsers } from "react-icons/fa";

function DashboardPs() {
  const canvasRef = useRef(null);
  const canvasSelloutRef = useRef(null);
  const canvasTargetVsAchievementRef = useRef(null);
  const canvasSelloutByProductRef = useRef(null);


  const totalJamKunjunganHariIni = 3; 
  const targetJamKunjungan = 6; 
  const totalKunjunganHariIni = 2; 
  const targetKunjungan = 8; 

  const sisaJam = targetJamKunjungan - totalJamKunjunganHariIni; 
  const sisaKunjungan = targetKunjungan - totalKunjunganHariIni; 

  const persenJam = (
    (totalJamKunjunganHariIni / targetJamKunjungan) *
    100
  ).toFixed(2); 
  const persenKunjungan = (
    (totalKunjunganHariIni / targetKunjungan) *
    100
  ).toFixed(2); 

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
            title: { display: true, text: "Sellout (in value)" },
          },
        },
      },
    };

    const myChart = new Chart(ctx, config);

    const areas = [
      "RSUD Cinangka",
      "RS Amanda",
      "Apotek Ridwan",
      "RSIA Ananda",
      "RS Kencana",
    ];
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
            title: { display: true, text: "Sellout (in value)" },
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
            title: { display: true, text: "Sellout (in value)" },
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
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg overflow-hidden mt-5">
      {/* Card for Jam Kunjungan dan Kunjungan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="flex items-center bg-blue-100 p-4 rounded-lg shadow">
          <div>
            <h3 className="font-semibold text-lg">Jam Kunjungan</h3>
            <p>
              {totalJamKunjunganHariIni} jam dari {targetJamKunjungan} jam
            </p>
            <p className="text-sm text-gray-500">({persenJam}%)</p>
          </div>
        </div>

        <div className="flex items-center bg-green-100 p-4 rounded-lg shadow">
          <div>
            <h3 className="font-semibold text-lg">Kunjungan Hari Ini</h3>
            <p>
              {totalKunjunganHariIni} dari {targetKunjungan} kunjungan minggu ini
            </p>
            <p className="text-sm text-gray-500">({persenKunjungan}%)</p>
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center mb-6">Sellout Report PS</h1>

      {/* Target vs Achievement Pie Chart */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Target vs Achievement</h2>
        <div className="h-72">
          <canvas ref={canvasTargetVsAchievementRef}></canvas>
        </div>
      </div>

      {/* Sellout By Area Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Sellout by Outlet</h2>
        <div className="h-72">
          <canvas ref={canvasSelloutRef}></canvas>
        </div>
      </div>

      {/* Sellout By Product Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Sellout by Product Principal
        </h2>
        <div className="h-72">
          <canvas ref={canvasSelloutByProductRef}></canvas>
        </div>
      </div>

      {/* Monthly Report Bar Chart */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Monthly Report</h2>
        <div className="h-72">
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  );
}

export default DashboardPs;

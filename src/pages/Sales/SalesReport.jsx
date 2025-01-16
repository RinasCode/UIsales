import React, { useState } from "react";

function SalesReport() {
  const [period, setPeriod] = useState({
    startPeriod1: "",
    endPeriod1: "",
    startPeriod2: "",
    endPeriod2: "",
  });

  const handlePeriodChange = (e) => {
    const { name, value } = e.target;
    setPeriod({ ...period, [name]: value });
  };

  // Mock data untuk hasil growth
  const growthData = {
    value: {
      period1: 467000000,
      period2: 520000000,
    },
    qty: {
      period1: 15000,
      period2: 16500,
    },
  };

  // Mock data untuk tabel
  const tableData = {
    period1: [
      {
        id: 1,
        itemName: "Item A",
        principal: "Troge",
        Distro: "MPI",
        qty: 5000,
        value: 150000000,
        Discount: 43,
        Total_HNA: 198000000,
      },
      {
        id: 2,
        itemName: "Item B",
        principal: "Troge",
        Distro: "MPI",
        qty: 10000,
        value: 317000000,
        Discount: 50,
        Total_HNA: 360000000,
      },
    ],
    period2: [
      {
        id: 1,
        itemName: "Item A",
        principal: "Troge",
        Distro: "MPI",
        qty: 5500,
        value: 165000000,
        Discount: 45,
        Total_HNA: 210000000,
      },
      {
        id: 2,
        itemName: "Item B",
        principal: "Troge",
        Distro: "MPI",
        qty: 11000,
        value: 355000000,
        Discount: 55,
        Total_HNA: 400000000,
      },
    ],
  };

  // Hitung growth percentage
  const growthValue =
    ((growthData.value.period2 - growthData.value.period1) /
      growthData.value.period1) *
    100;
  const growthQty =
    ((growthData.qty.period2 - growthData.qty.period1) /
      growthData.qty.period1) *
    100;

  // Komponen tabel untuk setiap periode
  const SalesTable = ({ title, data }) => (
    <div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="px-4 py-2 border">NO</th>
              <th className="px-4 py-2 border">Item Name</th>
              <th className="px-4 py-2 border">Principal</th>
              <th className="px-4 py-2 border">Distro</th>
              <th className="px-4 py-2 border">Qty</th>
              <th className="px-4 py-2 border">Value</th>
              <th className="px-4 py-2 border">Discount</th>
              <th className="px-4 py-2 border">Total HNA</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="bg-white text-sm">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{item.itemName}</td>
                <td className="px-4 py-2 border">{item.principal}</td>
                <td className="px-4 py-2 border">{item.Distro}</td>
                <td className="px-4 py-2 border">{item.qty.toLocaleString()}</td>
                <td className="px-4 py-2 border">
                  IDR {item.value.toLocaleString()}
                </td>
                <td className="px-4 py-2 border">{item.Discount}%</td>
                <td className="px-4 py-2 border">
                  IDR {item.Total_HNA.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      {/* Filter Section */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2">
          <h2 className="font-bold text-lg mb-4">Pilih Periode 1</h2>
          <div className="mb-4">
            <label className="block">Tanggal Awal:</label>
            <input
              type="date"
              name="startPeriod1"
              value={period.startPeriod1}
              onChange={handlePeriodChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block">Tanggal Akhir:</label>
            <input
              type="date"
              name="endPeriod1"
              value={period.endPeriod1}
              onChange={handlePeriodChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="font-bold text-lg mb-4">Pilih Periode 2</h2>
          <div className="mb-4">
            <label className="block">Tanggal Awal:</label>
            <input
              type="date"
              name="startPeriod2"
              value={period.startPeriod2}
              onChange={handlePeriodChange}
              className="input input-bordered w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block">Tanggal Akhir:</label>
            <input
              type="date"
              name="endPeriod2"
              value={period.endPeriod2}
              onChange={handlePeriodChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>
      </div>

      {/* Growth Report Section */}
      <div className="mt-6">
        <h1 className="text-2xl font-bold mb-4">Growth Report</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-blue-600">
              Growth by Value
            </h3>
            <p className="text-sm text-gray-500">
              Period 1: IDR {growthData.value.period1.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">
              Period 2: IDR {growthData.value.period2.toLocaleString()}
            </p>
            <p className="text-lg font-bold text-blue-600">
              Growth: {growthValue.toFixed(2)}%
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-green-600">
              Growth by Qty
            </h3>
            <p className="text-sm text-gray-500">
              Period 1: {growthData.qty.period1.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">
              Period 2: {growthData.qty.period2.toLocaleString()}
            </p>
            <p className="text-lg font-bold text-green-600">
              Growth: {growthQty.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>

      {/* Detail Tables */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Detail Sales Update</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SalesTable title="Periode 1" data={tableData.period1} />
          <SalesTable title="Periode 2" data={tableData.period2} />
        </div>
      </div>
    </div>
  );
}

export default SalesReport;

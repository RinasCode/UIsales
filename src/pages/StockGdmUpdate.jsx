import React, { useState } from "react";
import { Link } from "react-router-dom";

function StockGdmUpdate() {
  const [searchDesc, setSearchDesc] = useState(""); 
  const [startDate, setStartDate] = useState(""); 
  const [endDate, setEndDate] = useState(""); 

  const handleSearchDesc = (e) => {
    setSearchDesc(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const filterByDesc = (desc) => {
    return desc.toLowerCase().includes(searchDesc.toLowerCase());
  };

  return (
    <>
    <br />
    <br />
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        {/* Pencarian berdasarkan DESC */}
        <div className="flex items-center mb-4 sm:mb-0">
          <label className="mr-2">Search by DESC:</label>
          <input
            type="text"
            value={searchDesc}
            onChange={handleSearchDesc}
            className="input input-bordered"
            placeholder="Search by description"
          />
        </div>

        {/* Filter per tanggal */}
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="mb-4 sm:mb-0">
            <label className="mr-2">Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="input input-bordered"
            />
          </div>
          <div>
            <label className="mr-2">End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              className="input input-bordered"
            />
          </div>
        </div>
      </div>

      {/* Judul "Stock GDM Update" */}
      <h2 className="text-center text-2xl font-bold mb-4">STOCK GDM UPDATE</h2>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-center">No</th>
              <th className="border border-gray-300 px-4 py-2 text-center">PART_GDM</th>
              <th className="border border-gray-300 px-4 py-2 text-center">PRODUSEN</th>
              <th className="border border-gray-300 px-4 py-2 text-center">KEMASAN</th>
              <th className="border border-gray-300 px-4 py-2 text-center">PRODUSEN2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">PART_PPG</th>
              <th className="border border-gray-300 px-4 py-2 text-center">PART_MPI</th>
              <th className="border border-gray-300 px-4 py-2 text-center">DESC</th>
              <th className="border border-gray-300 px-4 py-2 text-center">STATUS KODE</th>
              <th className="border border-gray-300 px-4 py-2 text-center">STATUS BRG</th>
              <th className="border border-gray-300 px-4 py-2 text-center">HNA</th>
              <th className="border border-gray-300 px-4 py-2 text-center">ED &lt; 1 TH_QTY</th>
              <th className="border border-gray-300 px-4 py-2 text-center">ED &gt; 1 TH_QTY</th>
              <th className="border border-gray-300 px-4 py-2 text-center">TOTAL_Stock_QTY</th>
              <th className="border border-gray-300 px-4 py-2 text-center">ED &lt; 1 TH_VAL</th>
              <th className="border border-gray-300 px-4 py-2 text-center">ED &gt; 1 TH_VAL</th>
              <th className="border border-gray-300 px-4 py-2 text-center">TOTAL_Stock_VAL</th>
            </tr>
          </thead>
          <tbody>
            {/* Filter rows by DESC */}
            {[
              {
                desc: "WRAP PPR SMS 75X75CM",
                part_gdm: "2ASTWPS75",
                produsen: "AHLSTROM",
                produsen2: "AHLSTROM",
                kemasan: "BOX",
                part_ppg: "A60459",
                part_mpi: "G@0212",
                status_kode: "Active",
                status_brg: "REGULER",
                hna: "1.408.000",
                ed_kurang_satu_qty: "-",
                ed_lebih_satu_qty: "2",
                total_stock_qty: "2",
                ed_kurang_satu_val: "2.816.000",
                ed_lebih_satu_val: "2.816.000",
                total_stock_val: "2.816.000",
              },
              {
                desc: "WRAP PPR SMS 50X50CM",
                part_gdm: "2ASTWPS50",
                produsen: "AHLSTROM",
                produsen2: "AHLSTROM",
                kemasan: "BOX",
                part_ppg: "A60458",
                part_mpi: "G@0211",
                status_kode: "Active",
                status_brg: "REGULER",
                hna: "1.265.000",
                ed_kurang_satu_qty: "-",
                ed_lebih_satu_qty: "1",
                total_stock_qty: "1",
                ed_kurang_satu_val: "1.265.000",
                ed_lebih_satu_val: "1.265.000",
                total_stock_val: "1.265.000",
              },
              {
                desc: "WRAP PPR SMS 40X40CM",
                part_gdm: "2ASTWPS50",
                produsen: "AHLSTROM",
                produsen2: "AHLSTROM",
                kemasan: "BOX",
                part_ppg: "A60458",
                part_mpi: "G@0211",
                status_kode: "Active",
                status_brg: "REGULER",
                hna: "1.265.000",
                ed_kurang_satu_qty: "-",
                ed_lebih_satu_qty: "1",
                total_stock_qty: "1",
                ed_kurang_satu_val: "1.265.000",
                ed_lebih_satu_val: "1.265.000",
                total_stock_val: "1.265.000",
              },
              {
                desc: "WRAP PPR SMS 30X30CM",
                part_gdm: "2ASTWPS50",
                produsen: "AHLSTROM",
                produsen2: "AHLSTROM",
                kemasan: "BOX",
                part_ppg: "A60458",
                part_mpi: "G@0211",
                status_kode: "Active",
                status_brg: "REGULER",
                hna: "1.265.000",
                ed_kurang_satu_qty: "-",
                ed_lebih_satu_qty: "1",
                total_stock_qty: "1",
                ed_kurang_satu_val: "1.265.000",
                ed_lebih_satu_val: "1.265.000",
                total_stock_val: "1.265.000",
              },
              {
                desc: "WRAP PPR SMS 20X20CM",
                part_gdm: "2ASTWPS50",
                produsen: "AHLSTROM",
                produsen2: "AHLSTROM",
                kemasan: "BOX",
                part_ppg: "A60458",
                part_mpi: "G@0211",
                status_kode: "Active",
                status_brg: "REGULER",
                hna: "1.265.000",
                ed_kurang_satu_qty: "-",
                ed_lebih_satu_qty: "1",
                total_stock_qty: "1",
                ed_kurang_satu_val: "1.265.000",
                ed_lebih_satu_val: "1.265.000",
                total_stock_val: "1.265.000",
              },
              {
                desc: "WRAP PPR SMS 10X10CM",
                part_gdm: "2ASTWPS50",
                produsen: "AHLSTROM",
                produsen2: "AHLSTROM",
                kemasan: "BOX",
                part_ppg: "A60458",
                part_mpi: "G@0211",
                status_kode: "Active",
                status_brg: "REGULER",
                hna: "1.265.000",
                ed_kurang_satu_qty: "-",
                ed_lebih_satu_qty: "1",
                total_stock_qty: "1",
                ed_kurang_satu_val: "1.265.000",
                ed_lebih_satu_val: "1.265.000",
                total_stock_val: "1.265.000",
              },
              {
                desc: "WRAP PPR SMS 55X55CM",
                part_gdm: "2ASTWPS50",
                produsen: "AHLSTROM",
                produsen2: "AHLSTROM",
                kemasan: "BOX",
                part_ppg: "A60458",
                part_mpi: "G@0211",
                status_kode: "Active",
                status_brg: "REGULER",
                hna: "1.265.000",
                ed_kurang_satu_qty: "-",
                ed_lebih_satu_qty: "1",
                total_stock_qty: "1",
                ed_kurang_satu_val: "1.265.000",
                ed_lebih_satu_val: "1.265.000",
                total_stock_val: "1.265.000",
              },
              {
                desc: "WRAP PPR SMS 65X65CM",
                part_gdm: "2ASTWPS50",
                produsen: "AHLSTROM",
                produsen2: "AHLSTROM",
                kemasan: "BOX",
                part_ppg: "A60458",
                part_mpi: "G@0211",
                status_kode: "Active",
                status_brg: "REGULER",
                hna: "1.265.000",
                ed_kurang_satu_qty: "-",
                ed_lebih_satu_qty: "1",
                total_stock_qty: "1",
                ed_kurang_satu_val: "1.265.000",
                ed_lebih_satu_val: "1.265.000",
                total_stock_val: "1.265.000",
              },
              {
                desc: "WRAP PPR SMS 45X45CM",
                part_gdm: "2ASTWPS50",
                produsen: "AHLSTROM",
                produsen2: "AHLSTROM",
                kemasan: "BOX",
                part_ppg: "A60458",
                part_mpi: "G@0211",
                status_kode: "Active",
                status_brg: "REGULER",
                hna: "1.265.000",
                ed_kurang_satu_qty: "-",
                ed_lebih_satu_qty: "1",
                total_stock_qty: "1",
                ed_kurang_satu_val: "1.265.000",
                ed_lebih_satu_val: "1.265.000",
                total_stock_val: "1.265.000",
              },
              {
                desc: "WRAP PPR SMS 25X25CM",
                part_gdm: "2ASTWPS50",
                produsen: "AHLSTROM",
                produsen2: "AHLSTROM",
                kemasan: "BOX",
                part_ppg: "A60458",
                part_mpi: "G@0211",
                status_kode: "Active",
                status_brg: "REGULER",
                hna: "1.265.000",
                ed_kurang_satu_qty: "-",
                ed_lebih_satu_qty: "1",
                total_stock_qty: "1",
                ed_kurang_satu_val: "1.265.000",
                ed_lebih_satu_val: "1.265.000",
                total_stock_val: "1.265.000",
              }
            ]
              .filter((item) => filterByDesc(item.desc))
              .map((item, index) => (
                <tr key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.part_gdm}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.produsen}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.kemasan}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.produsen2}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.part_ppg}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.part_mpi}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.desc}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.status_kode}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.status_brg}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.hna}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.ed_kurang_satu_qty}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.ed_lebih_satu_qty}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.total_stock_qty}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.ed_kurang_satu_val}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.ed_lebih_satu_val}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.total_stock_val}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <br />
      <div className="flex justify-center">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 22</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </>
  );
}

export default StockGdmUpdate;

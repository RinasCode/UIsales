import React, { useState } from "react";

function StockDetailCabang() {
  const downloadSalesData = async () => {
    try {
      const response = await fetch("http://localhost:3000/export-stock-excel", {
        method: "GET",
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "transaksi_gabungan.xlsx";
      link.click();
    } catch (error) {
      console.error(error);
      alert("Gagal mendownload data Sales.");
    }
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterData = (item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.DESC.toLowerCase().includes(query) ||
      item.PART_PPG.toLowerCase().includes(query) ||
      item.PART_MPI.toLowerCase().includes(query) ||
      item.PART_GDM.toLowerCase().includes(query) ||
      item.LOKASI_STOCK.toLowerCase().includes(query)
    );
  };

  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          {/* Pencarian berdasarkan DESC */}
          <div className="flex items-center mb-4 sm:mb-0 text-xl p-4">
            <label className="mr-2">Search :</label>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              className="input input-bordered text-lg py-3 px-4 w-80"
              placeholder="Search kode, desc & lokasi stock"
            />
          </div>
        </div>

        <div>
          {/* Tombol Download Data Transaksi */}
          <div>
            <button className="btn btn-primary" onClick={downloadSalesData}>
              Download Data Transaksi
            </button>
          </div>
        </div>

        {/* Judul "Stock GDM Update" */}
        <h2 className="text-center text-2xl font-bold mb-4">
          STOCK DETAIL CABANG
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-center">
                  No
                </th>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  PART_GDM
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  PRODUSEN
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  PRODUSEN2
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  PART PPG
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  PART MPI
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  DESC
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  STATUS KODE
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  STATUS BRG
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  HNA
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  EXP DATE
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  BATCH NO
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  lOKASI STOCK
                </td>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  PART_GDM: "2ALKCID10",
                  PRODUSEN: "ALKAPHARM",
                  PRODUSEN2: "ALKAPHARM",
                  PART_PPG: "A62ALKCID10",
                  PART_MPI: "G@2ALKCID10",
                  DESC: "ALKACIDE 1L",
                  STATUS_KODE: "Active",
                  STATUS_BRG: "REGULER",
                  HNA: "2.925.000",
                  EXP_DATE: "2025-02-01",
                  BATCH_NO: "2025-02(2S13N0769)",
                  LOKASI_STOCK: "GDM",
                },
                {
                  PART_GDM: "2ALKCID10",
                  PRODUSEN: "ALKAPHARM",
                  PRODUSEN2: "ALKAPHARM",
                  PART_PPG: "2ALKCID10",
                  PART_MPI: "2ALKCID10",
                  DESC: "ALKACIDE 1L",
                  STATUS_KODE: "Active",
                  STATUS_BRG: "REGULER",
                  HNA: "2.925.000",
                  EXP_DATE: "2025-02-28",
                  BATCH_NO: "2025-02 (2S13N0769)",
                  LOKASI_STOCK: "GDM",
                },
                {
                  PART_GDM: "2ALKCID10",
                  PRODUSEN: "ALKAPHARM",
                  PRODUSEN2: "ALKAPHARM",
                  PART_PPG: "A60463",
                  PART_MPI: "G@0262",
                  DESC: "ALKACIDE 1L",
                  STATUS_KODE: "Active",
                  STATUS_BRG: "REGULER",
                  HNA: "2.925.000",
                  EXP_DATE: "2025-08-31",
                  BATCH_NO: "2025-08 (2S13N0769)",
                  LOKASI_STOCK: "PPG",
                },
                {
                  PART_GDM: "2ASTR3050",
                  PRODUSEN: "AHLSTROM",
                  PRODUSEN2: "AHLSTROM",
                  PART_PPG: "A60766",
                  PART_MPI: "G@0520",
                  DESC: "RELIANCE® Crepe 50X50 CM",
                  STATUS_KODE: "Active",
                  STATUS_BRG: "REGULER",
                  HNA: "1.732.500",
                  EXP_DATE: "2029-02-28",
                  BATCH_NO: "2029-02 (24080452)",
                  LOKASI_STOCK: "PPG",
                },
                {
                  PART_GDM: "2ASTR3050",
                  PRODUSEN: "AHLSTROM",
                  PRODUSEN2: "AHLSTROM",
                  PART_PPG: "A60766",
                  PART_MPI: "G@0520",
                  DESC: "RELIANCE® Crepe 50X50 CM",
                  STATUS_KODE: "Active",
                  STATUS_BRG: "REGULER",
                  HNA: "1.732.500",
                  EXP_DATE: "2029-10-31",
                  BATCH_NO: "2029-10 (24370858)",
                  LOKASI_STOCK: "MPI",
                },
              ]
                .filter((item) => filterData(item))
                .map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.PART_GDM}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.PRODUSEN}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.PRODUSEN2}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.PART_PPG}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.PART_MPI}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.DESC}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.STATUS_KODE}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.STATUS_BRG}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.HNA}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.EXP_DATE}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.BATCH_NO}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {item.LOKASI_STOCK}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default StockDetailCabang;

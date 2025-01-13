import React, { useState } from "react";
import { Link } from "react-router-dom";

function StockDetailCabang() {
  const [ppgFile, setPpgFile] = useState(null);
  const [mpiFile, setMpiFile] = useState(null);
  const [gdmFile, setGdmFile] = useState(null);

  const uploadStockPPG = async () => {
    if (!ppgFile) return alert("Pilih file PPG terlebih dahulu.");
    const formData = new FormData();
    formData.append("file", ppgFile);

    try {
      const response = await fetch("http://localhost:3000/upload-stockppg", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Gagal mengupload file Sales PPG.");
    }
  };

  const uploadStockMPI = async () => {
    if (!mpiFile) return alert("Pilih file MPI terlebih dahulu.");
    const formData = new FormData();
    formData.append("file", mpiFile);

    try {
      const response = await fetch("http://localhost:3000/upload-stockmpi", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Gagal mengupload file Sales MPI.");
    }
  };

  const uploadStockGDM = async () => {
    if (!mpiFile) return alert("Pilih file MPI terlebih dahulu.");
    const formData = new FormData();
    formData.append("file", gdmFile);

    try {
      const response = await fetch("http://localhost:3000/upload-stockgdm", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Gagal mengupload file Sales MPI.");
    }
  };

  const processStock = async () => {
    try {
      const response = await fetch("http://localhost:3000/process-stock", {
        method: "POST",
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Gagal memproses transaksi.");
    }
  };

  const downloadSalesData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/export-stock-excel",
        {
          method: "GET",
        }
      );
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
          <label className="mr-2">Search By Desc:</label>
          <input
            type="text"
            value={searchDesc}
            onChange={handleSearchDesc}
            className="input input-bordered"
            placeholder="Search Description"
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
              },
            ]
              .filter((item) => filterByDesc(item.DESC))
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
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <br />
      <br />
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {/* Tombol Upload Stock PPG */}
        <div>
          <button
            className="btn btn-outline"
            onClick={() => document.getElementById("upload_modal_stock_ppg").showModal()}
          >
            Upload Stock PPG
          </button>
        </div>

        {/* Tombol Upload Stock MPI */}
        <div>
          <button
            className="btn btn-outline btn-primary"
            onClick={() =>
              document.getElementById("upload_modal_stock_mpi").showModal()
            }
          >
            Upload Stock MPI
          </button>
        </div>

         {/* Tombol Upload Sales GDM */}
         <div>
          <button
            className="btn btn-outline btn-primary"
            onClick={() =>
              document.getElementById("upload_modal_stock_gdm").showModal()
            }
          >
            Upload Stock GDM
          </button>
        </div>

        {/* Tombol Gabung Data Stock */}
        <div>
          <button
            className="btn btn-outline btn-secondary"
            onClick={processStock}
          >
            Gabung Data Stock
          </button>
        </div>

        {/* Tombol Download Data Transaksi */}
        <div>
          <button
            className="btn btn-outline btn-accent"
            onClick={downloadSalesData}
          >
            Download Data Transaksi
          </button>
        </div>
      </div>

      {/* Modal Upload Stock PPG */}
      <dialog id="upload_modal_stock_ppg" 
      className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Upload Stock PPG</h3>
          <p className="py-4">Silakan unggah file yang sesuai:</p>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pilih File</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                accept=".csv, .xlsx"
                onChange={(e) => setPpgFile(e.target.files[0])}
              />
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("upload_modal_stock_ppg").close()}
              >
                Batal
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={uploadStockPPG}
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Modal Upload Stock MPI */}
      <dialog
        id="upload_modal_stock_mpi"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Upload Stock MPI</h3>
          <p className="py-4">Silakan unggah file yang sesuai:</p>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pilih File</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                accept=".csv, .xlsx"
                onChange={(e) => setMpiFile(e.target.files[0])}
              />
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("upload_modal_stock_mpi").close()
                }
              >
                Batal
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={uploadStockMPI}
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </dialog>

            {/* Modal Upload Stock GDM*/}
            <dialog
        id="upload_modal_stock_gdm"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Upload Stock GDM:</h3>
          <p className="py-4">Silakan unggah file yang sesuai:</p>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pilih File</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                accept=".csv, .xlsx"
                onChange={(e) => setGdmFile(e.target.files[0])}
              />
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("upload_modal_stock_gdm").close()
                }
              >
                Batal
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={uploadStockGDM}
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default StockDetailCabang;

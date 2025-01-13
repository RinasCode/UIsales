import React, { useState } from "react";
import * as XLSX from "xlsx";

function DaftarPE() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState(null);
  const [fotoUploadTime, setFotoUploadTime] = useState("");

  const itemsPerPage = 5;

  const users = [
    {
      tanggal: "2025-01-01",
      nama_ps: "rizky alamsyah",
      jam_in_pe: "17.50",
      jam_out_pe: "19.30",
      lokasi: "GBK",
      keterangan: "Physical Exercise",
      total_jam_pe: "1 jam 40 menit",
      foto_kegiatan:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
        tanggal: "2025-01-01",
        nama_ps: "rizky alamsyah",
        jam_in_pe: "17.50",
        jam_out_pe: "19.30",
        lokasi: "GBK",
        keterangan: "Physical Exercise",
        total_jam_pe: "1 jam 40 menit",
        foto_kegiatan:
          "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      },
      {
        tanggal: "2025-01-01",
        nama_ps: "rizky alamsyah",
        jam_in_pe: "17.50",
        jam_out_pe: "19.30",
        lokasi: "GBK",
        keterangan: "Physical Exercise",
        total_jam_pe: "1 jam 40 menit",
        foto_kegiatan:
          "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      },
      {
        tanggal: "2025-01-01",
        nama_ps: "rizky alamsyah",
        jam_in_pe: "17.50",
        jam_out_pe: "19.30",
        lokasi: "GBK",
        keterangan: "Physical Exercise",
        total_jam_pe: "1 jam 40 menit",
        foto_kegiatan:
          "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      },
      {
        tanggal: "2025-01-01",
        nama_ps: "rizky alamsyah",
        jam_in_pe: "17.50",
        jam_out_pe: "19.30",
        lokasi: "GBK",
        keterangan: "Physical Exercise",
        total_jam_pe: "1 jam 40 menit",
        foto_kegiatan:
          "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      },
      {
        tanggal: "2025-01-01",
        nama_ps: "rizky alamsyah",
        jam_in_pe: "17.50",
        jam_out_pe: "19.30",
        lokasi: "GBK",
        keterangan: "Physical Exercise",
        total_jam_pe: "1 jam 40 menit",
        foto_kegiatan:
          "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      }
  ];

  
  const filteredUsers = users
    .filter((user) => {
      const matchSearch = user.nama_ps
        .toLowerCase()
        .includes(search.toLowerCase());

      const userDate = new Date(user.tanggal);
      const withinDateRange =
        (!startDate || userDate >= new Date(startDate)) &&
        (!endDate || userDate <= new Date(endDate));
      return matchSearch && withinDateRange;
    })
    .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

  console.log("Filtered Users:", filteredUsers);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(filteredUsers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Absensi");
    XLSX.writeFile(wb, "absensi.xlsx");
  };

  const openModal = (foto, uploadTime) => {
    setSelectedFoto(foto);
    setFotoUploadTime(uploadTime);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFoto(null);
    setFotoUploadTime("");
  };

  return (
    <>
      <div>
        <h2 className="text-center text-2xl font-bold mb-2 mt-4">
          DAFTAR KEGIATAN PE
        </h2>
        <div className="flex justify-start mt-6 ml-10"></div>
        {/* Filter dan Search */}
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Cari nama..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border p-2 rounded"
            />
          </div>
        </div>
        <button
          onClick={handleDownload}
          className="bg-blue-500 text-white px-4 py-2 rounded  ml-4 mb-4 "
        >
          Download Excel
        </button>
        {/* Tabel User */}
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-center">
                  No
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Tanggal
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nama PS
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jam In PE
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jam Out PE
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Lokasi
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Keterangan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Total Jam PE
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Foto Kegiatan
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.tanggal}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.nama_ps}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.jam_in_pe}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.jam_out_pe}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.lokasi}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.keterangan}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.total_jam_pe}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() =>
                        openModal(user.foto_kegiatan, user.tanggal)
                      }
                      className="text-blue-500"
                    >
                      Lihat Foto
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-gray-300 rounded"
          >
            Prev
          </button>
          <span className="px-4 py-2">
            {currentPage} of {totalPages} Pages
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-gray-300 rounded"
          >
            Next
          </button>
        </div>
        
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-4 rounded-lg max-w-full sm:w-80 sm:max-w-md md:max-w-lg lg:max-w-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl">Foto Absen</h3>
                <button onClick={closeModal} className="text-red-500">
                  X
                </button>
              </div>
              <img
                src={selectedFoto}
                alt="Foto Absen"
                className="w-full mb-2"
              />
              <p className="text-sm">Jam Foto: {fotoUploadTime}</p>
              <p className="text-sm">
                Jam Upload: {new Date().toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DaftarPE;

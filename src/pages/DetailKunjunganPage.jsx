import React, { useState } from "react";
import * as XLSX from "xlsx";

function DetailKunjungan() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [cabangFilter, setCabangFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState(null);
  const [fotoUploadTime, setFotoUploadTime] = useState("");

  const itemsPerPage = 5;

  const users = [
    {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "11.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "14.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "02.30",
      User: "Dr Budi",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Bedah",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "14.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "16.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "00.30",
      User: "Dr Amel",
      Profesi: "Sp.P.",
      Jabatan: "Kepala IGD",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "17.00",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "18.30",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "01.30",
      User: "Dr Clara",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Rawat",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "11.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "14.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "02.30",
      User: "Dr Budi",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Bedah",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "14.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "16.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "00.30",
      User: "Dr Amel",
      Profesi: "Sp.P.",
      Jabatan: "Kepala IGD",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "17.00",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "18.30",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "01.30",
      User: "Dr Clara",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Rawat",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "11.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "14.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "02.30",
      User: "Dr Budi",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Bedah",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "14.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "16.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "00.30",
      User: "Dr Amel",
      Profesi: "Sp.P.",
      Jabatan: "Kepala IGD",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "17.00",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "18.30",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "01.30",
      User: "Dr Clara",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Rawat",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "11.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "14.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "02.30",
      User: "Dr Budi",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Bedah",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "14.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "16.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "00.30",
      User: "Dr Amel",
      Profesi: "Sp.P.",
      Jabatan: "Kepala IGD",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "17.00",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "18.30",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "01.30",
      User: "Dr Clara",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Rawat",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
        {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "11.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "14.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "02.30",
      User: "Dr Budi",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Bedah",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "14.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "16.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "00.30",
      User: "Dr Amel",
      Profesi: "Sp.P.",
      Jabatan: "Kepala IGD",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "17.00",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "18.30",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "01.30",
      User: "Dr Clara",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Rawat",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "11.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "14.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "02.30",
      User: "Dr Budi",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Bedah",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "14.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "16.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "00.30",
      User: "Dr Amel",
      Profesi: "Sp.P.",
      Jabatan: "Kepala IGD",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-01",
      nama_ps: "rizky alamsyah",
      lokasi: "RSUD Cibinong",
      In_Outlet: "17.00",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "18.30",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "01.30",
      User: "Dr Clara",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Rawat",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "11.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "14.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "02.30",
      User: "Dr Budi",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Bedah",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "14.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "16.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "00.30",
      User: "Dr Amel",
      Profesi: "Sp.P.",
      Jabatan: "Kepala IGD",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-01",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "17.00",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "18.30",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "01.30",
      User: "Dr Clara",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Rawat",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "11.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "14.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "02.30",
      User: "Dr Budi",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Bedah",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "14.30",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "16.00",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "00.30",
      User: "Dr Amel",
      Profesi: "Sp.P.",
      Jabatan: "Kepala IGD",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      region: "Rubby",
      Cabang: "JKT-02",
      nama_ps: "jupri",
      lokasi: "RSUD Cibinong",
      In_Outlet: "17.00",
      Jarak_In_Outlet: "0 km",
      Out_Outlet: "18.30",
      Jarak_Out_Outlet: "1 km",
      Total_jam_kunjungan: "01.30",
      User: "Dr Clara",
      Profesi: "Sp.P.",
      Jabatan: "Kepala Ruang Rawat",
      Keterangan: "Demo Product",
      foto_in_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_out_outlet:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
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

      const matchRegion = regionFilter ? user.region === regionFilter : true;
      const matchCabang = cabangFilter ? user.Cabang === cabangFilter : true;

      return matchSearch && withinDateRange && matchRegion && matchCabang;
    })
    .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDownload = () => {
    const ws = XLSX.utils.json_to_sheet(filteredUsers);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Detail Kunjungan");
    XLSX.writeFile(wb, "detail_kunjungan.xlsx");
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
          DETAIL KUNJUNGAN
        </h2>

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
            <select
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">Pilih Region</option>
              <option value="Rubby">Rubby</option>
              <option value="Onyx">Onyx</option>
            </select>
            <select
              value={cabangFilter}
              onChange={(e) => setCabangFilter(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">Pilih Cabang</option>
              <option value="JKT-01">JKT-01</option>
              <option value="JKT-02">JKT-02</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-4 mb-4"
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
                  Region
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Cabang
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Nama PS
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Lokasi
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  In Outlet
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jarak In Outlet
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Out Outlet
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jarak Out Outlet
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Total Jam Kunjungan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  User
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Profesi
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Jabatan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Keterangan
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Foto In Outlet
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Foto Out Outlet
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
                    {user.region}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.Cabang}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.nama_ps}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.lokasi}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.In_Outlet}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.Jarak_In_Outlet}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.Out_Outlet}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.Jarak_Out_Outlet}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.Total_jam_kunjungan}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.User}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.Profesi}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.Jabatan}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {user.Keterangan}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() =>
                        openModal(user.foto_in_outlet, user.tanggal)
                      }
                      className="text-blue-500"
                    >
                      Lihat Foto
                    </button>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() =>
                        openModal(user.foto_out_outlet, user.tanggal)
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
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            className="px-4 py-2 bg-gray-200 rounded-l"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            className="px-4 py-2 bg-gray-200 rounded-r"
          >
            Next
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
            <div className="bg-white p-4 rounded-lg max-w-full sm:w-80 sm:max-w-md md:max-w-lg lg:max-w-xl">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl">Foto Kunjungan</h3>
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

export default DetailKunjungan;

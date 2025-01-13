import React, { useState } from "react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

function DaftarPS() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState(null);

  const users = [
    {
      kode_ps: 1968,
      nama_ps: "Riana Jelita",
      divisi_ps: "MIX",
      nama_dm:"Sri Rahayu",
      area: "WEST",
      region: "SAFIR",
      cabang: "JKT-01",
      outlet_saat_ini: [
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
      history_outlet: [
        {
          tanggal_cover_awal: "2024-01-01",
          tanggal_cover_akhir: "2025-01-01",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2023-01-01",
          tanggal_cover_akhir: "2024-01-01",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
    },
    {
      kode_ps: 1968,
      nama_ps: "Riana Jelita",
      divisi_ps: "MIX",
      nama_dm:"Sri Rahayu",
      area: "WEST",
      region: "SAFIR",
      cabang: "JKT-01",
      outlet_saat_ini: [
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
      history_outlet: [
        {
          tanggal_cover_awal: "2024-01-01",
          tanggal_cover_akhir: "2025-01-01",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2023-01-01",
          tanggal_cover_akhir: "2024-01-01",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
    },
    {
      kode_ps: 1968,
      nama_ps: "Riana Jelita",
      divisi_ps: "MIX",
      nama_dm:"Sri Rahayu",
      area: "WEST",
      region: "SAFIR",
      cabang: "JKT-01",
      outlet_saat_ini: [
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
      history_outlet: [
        {
          tanggal_cover_awal: "2024-01-01",
          tanggal_cover_akhir: "2025-01-01",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2023-01-01",
          tanggal_cover_akhir: "2024-01-01",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
    },
    {
      kode_ps: 1968,
      nama_ps: "Riana Jelita",
      divisi_ps: "MIX",
      nama_dm:"Sri Rahayu",
      area: "WEST",
      region: "SAFIR",
      cabang: "JKT-01",
      outlet_saat_ini: [
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
      history_outlet: [
        {
          tanggal_cover_awal: "2024-01-01",
          tanggal_cover_akhir: "2025-01-01",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2023-01-01",
          tanggal_cover_akhir: "2024-01-01",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
    },
    {
      kode_ps: 1968,
      nama_ps: "Riana Jelita",
      divisi_ps: "MIX",
      nama_dm:"Sri Rahayu",
      area: "WEST",
      region: "SAFIR",
      cabang: "JKT-01",
      outlet_saat_ini: [
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
      history_outlet: [
        {
          tanggal_cover_awal: "2024-01-01",
          tanggal_cover_akhir: "2025-01-01",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2023-01-01",
          tanggal_cover_akhir: "2024-01-01",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
    },
    {
      kode_ps: 1968,
      nama_ps: "Riana Jelita",
      divisi_ps: "MIX",
      nama_dm:"Sri Rahayu",
      area: "WEST",
      region: "SAFIR",
      cabang: "JKT-01",
      outlet_saat_ini: [
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
      history_outlet: [
        {
          tanggal_cover_awal: "2024-01-01",
          tanggal_cover_akhir: "2025-01-01",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2023-01-01",
          tanggal_cover_akhir: "2024-01-01",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
    },
    {
      kode_ps: 1968,
      nama_ps: "Riana Jelita",
      divisi_ps: "MIX",
      nama_dm:"Sri Rahayu",
      area: "WEST",
      region: "SAFIR",
      cabang: "JKT-01",
      outlet_saat_ini: [
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
      history_outlet: [
        {
          tanggal_cover_awal: "2024-01-01",
          tanggal_cover_akhir: "2025-01-01",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2023-01-01",
          tanggal_cover_akhir: "2024-01-01",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
    },
    {
      kode_ps: 1968,
      nama_ps: "Riana Jelita",
      divisi_ps: "MIX",
      nama_dm:"Sri Rahayu",
      area: "WEST",
      region: "SAFIR",
      cabang: "JKT-01",
      outlet_saat_ini: [
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2025-10-01",
          tanggal_cover_akhir: "",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
      history_outlet: [
        {
          tanggal_cover_awal: "2024-01-01",
          tanggal_cover_akhir: "2025-01-01",
          nama_outlet: "RSUD CIBINONG",
          lama_cover: "1 tahun",
        },
        {
          tanggal_cover_awal: "2023-01-01",
          tanggal_cover_akhir: "2024-01-01",
          nama_outlet: "RS MELATI",
          lama_cover: "1 tahun",
        },
      ],
    }
  ];

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Daftar Outlet");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, "daftar_outlet.xlsx");
  };

  const openModal = (history) => {
    setSelectedFoto(history);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFoto(null);
  };

  const filteredUsers = users.filter((user) =>
    Object.values(user)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="text-2xl font-semibold text-center w-full mt-6">
        DAFTAR OUTLET
      </h1>
      <div className="mb-4 flex justify-between items-center mt-3 ml-6">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={downloadExcel}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
          >
            Download Excel
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Kode PS</th>
              <th className="border border-gray-300 px-4 py-2">Nama PS</th>
              <th className="border border-gray-300 px-4 py-2">Divisi PS</th>
              <th className="border border-gray-300 px-4 py-2">Nama DM</th>
              <th className="border border-gray-300 px-4 py-2">Area</th>
              <th className="border border-gray-300 px-4 py-2">Region</th>
              <th className="border border-gray-300 px-4 py-2">Cabang</th>
              <th className="border border-gray-300 px-4 py-2">Outlet Saat ini</th>
              <th className="border border-gray-300 px-4 py-2">History Outlet</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.kode_ps}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.nama_ps}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.divisi_ps}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.nama_dm}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.area}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.region}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.cabang}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => openModal(user.outlet_saat_ini)}
                    className="text-blue-500 hover:underline"
                  >
                    Lihat Outlet Sekarang
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => openModal(user.history_outlet)}
                    className="text-blue-500 hover:underline"
                  >
                    Lihat History Outlet 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Riwayat */}
      {isModalOpen && selectedFoto && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h2 className="text-xl font-semibold mb-4">Riwayat PS</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">
                    Tanggal Cover Awal
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Tanggal Cover Akhir
                  </th>
                  <th className="border border-gray-300 px-4 py-2">Nama PS</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Lama Cover
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedFoto.map((history, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {history.tanggal_cover_awal}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {history.tanggal_cover_akhir}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {history.nama_outlet}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {history.lama_cover}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DaftarPS;

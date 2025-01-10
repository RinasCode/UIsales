import React, { useState } from "react";
import { Link } from "react-router-dom";

function PEProductSpecialist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState(null);
  const [fotoUploadTime, setFotoUploadTime] = useState("");
  const [currentFoto, setCurrentFoto] = useState("");

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
      foto_kegiatan: "",
    },
  ];

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

  const openUploadModal = (type) => {
    setCurrentFoto(type);
    setIsUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
    setCurrentFoto("");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Foto yang di-upload: ", file);

      const fotoUrl = URL.createObjectURL(file);
      alert("Foto berhasil di-upload!");
    }
  };

  return (
    <>
      <div>
        <h2 className="text-center text-2xl font-bold mb-2 mt-4">
          DAFTAR PE PS
        </h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4 mb-4">
          <a href="/form_pe">Physical Exercise</a>
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
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
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
                    <span
                      onClick={() =>
                        user.foto_kegiatan
                          ? openModal(user.foto_kegiatan, user.tanggal)
                          : openUploadModal("foto_kegiatan")
                      }
                      className={`${
                        !user.foto_kegiatan
                          ? "text-red-400 cursor-pointer"
                          : "text-blue-500 cursor-pointer"
                      } text-sm font-medium hover:underline`}
                    >
                      {user.foto_kegiatan ? "Lihat Foto" : "Upload Foto"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Foto Upload */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">
              Upload{" "}
              {currentFoto === "foto_absen_masuk"
                ? "Foto Absen Masuk"
                : "Foto Absen Pulang"}
            </h3>
            <input type="file" onChange={handleFileUpload} className="mb-4" />
            <div className="flex justify-end">
              <button
                onClick={closeUploadModal}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
            <img src={selectedFoto} alt="Foto Absen" className="w-full mb-2" />
            <p className="text-sm">Jam Foto: {fotoUploadTime}</p>
            <p className="text-sm">Jam Upload: {new Date().toLocaleString()}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default PEProductSpecialist;

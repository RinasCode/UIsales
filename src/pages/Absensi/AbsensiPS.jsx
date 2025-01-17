import React, { useState } from "react";
import { Link } from "react-router-dom";

function AbsensiPs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState(null);
  const [fotoUploadTime, setFotoUploadTime] = useState("");
  const [currentFoto, setCurrentFoto] = useState("");

  const users = [
    {
      tanggal: "2025-01-01",
      nama_ps: "anita susanti",
      jam_masuk: "07.50",
      jarak_dengan_cabang: "1 km",
      jam_pulang: "18.00",
      lokasi_absen_pulang: "RS Harapan",
      keterangan: "Hadir",
      total_jam_kerja: 10.17,
      foto_absen_masuk:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_absen_pulang:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-02",
      nama_ps: "anita susanti",
      jam_masuk: "07.50",
      jarak_dengan_cabang: "1 km",
      jam_pulang: "18.00",
      lokasi_absen_pulang: "RS Harapan",
      keterangan: "Hadir",
      total_jam_kerja: 10.17,
      foto_absen_masuk:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_absen_pulang:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-03",
      nama_ps: "anita susanti",
      jam_masuk: "07.50",
      jarak_dengan_cabang: "1 km",
      jam_pulang: "18.00",
      lokasi_absen_pulang: "kantor GDM",
      keterangan: "Training Full Day",
      total_jam_kerja: 9.07,
      foto_absen_masuk:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_absen_pulang:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-04",
      nama_ps: "anita susanti",
      jam_masuk: "",
      jarak_dengan_cabang: "",
      jam_pulang: "",
      lokasi_absen_pulang: "",
      keterangan: "Izin",
      total_jam_kerja: null,
      foto_absen_masuk: "",
      foto_absen_pulang:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
    },
    {
      tanggal: "2025-01-05",
      nama_ps: "anita susanti",
      jam_masuk: "07.50",
      jarak_dengan_cabang: "1 km",
      jam_pulang: "18.00",
      lokasi_absen_pulang: "RS Harapan",
      keterangan: "Hadir",
      total_jam_kerja: 10.17,
      foto_absen_masuk:
        "https://res.cloudinary.com/dcisb7ayn/image/upload/v1736309532/foto_sampel_r9dhzv.jpg",
      foto_absen_pulang: "",
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
      <div className="p-6 bg-gray-50 min-h-screen">
        <div>
          <h2 className="text-center text-2xl font-bold mb-2 mt-4">
            DAFTAR ABSENSI PS
          </h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4 mb-4">
            <a href="/form_absen">Absen</a>
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
                    Jam Masuk
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Jarak dengan Cabang
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Jam Pulang
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Lokasi absen pulang
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Keterangan
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Total Jam kerja
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Foto Absen Masuk
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Foto Absen Pulang
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
                      {user.jam_masuk}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {user.jarak_dengan_cabang}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {user.jam_pulang}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {user.lokasi_absen_pulang}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {user.keterangan}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      {user.total_jam_kerja}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <span
                        onClick={() =>
                          user.foto_absen_masuk
                            ? openModal(user.foto_absen_masuk, user.tanggal)
                            : openUploadModal("foto_absen_masuk")
                        }
                        className={`${
                          !user.foto_absen_masuk
                            ? "text-red-400 cursor-pointer"
                            : "text-blue-500 cursor-pointer"
                        } text-sm font-medium hover:underline`}
                      >
                        {user.foto_absen_masuk ? "Lihat Foto" : "Upload Foto"}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <span
                        onClick={() =>
                          user.foto_absen_pulang
                            ? openModal(user.foto_absen_pulang, user.tanggal)
                            : openUploadModal("foto_absen_pulang")
                        }
                        className={`${
                          !user.foto_absen_pulang
                            ? "text-red-400 cursor-pointer"
                            : "text-blue-500 cursor-pointer"
                        } text-sm font-medium hover:underline`}
                      >
                        {user.foto_absen_pulang ? "Lihat Foto" : "Upload Foto"}
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

export default AbsensiPs;

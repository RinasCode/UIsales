import React, { useState } from "react";
import { Link } from "react-router-dom";

function KunjunganPs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFoto, setSelectedFoto] = useState(null);
  const [fotoUploadTime, setFotoUploadTime] = useState("");
  const [currentFoto, setCurrentFoto] = useState("");

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
          DAFTAR KUNJUNGAN PS
        </h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4 mb-4">
          <a href="/form_kunjungan"> Tambah Kunjungan</a>
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

export default KunjunganPs;

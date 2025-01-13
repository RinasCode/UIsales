import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function FormKunjungan() {
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");
  const [outlet, setOutlet] = useState("");
  const [user, setUser] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [foto, setFoto] = useState(null);
  const [isAbsenMasuk, setIsAbsenMasuk] = useState(true); // Menentukan apakah ini In Outlet atau Out Outlet
  const [lokasi, setLokasi] = useState({ latitude: "", longitude: "" }); // Menyimpan lokasi GPS

  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const time = now.toTimeString().split(" ")[0].slice(0, 5);
    setTanggal(today);
    setJam(time);

    // Mendapatkan lokasi GPS
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLokasi({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: "Tidak dapat mengambil lokasi GPS.",
          });
        }
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!outlet || !user || !foto || !keterangan) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Harap lengkapi semua data sebelum menyimpan.",
      });
      return;
    }

    const formData = {
      outlet,
      user,
      tanggal,
      jam,
      keterangan,
      foto,
      lokasi, // Menyertakan lokasi GPS dalam form data
    };

    // Menampilkan notifikasi berdasarkan status absen
    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: isAbsenMasuk
        ? "In Outlet berhasil disimpan!"
        : "Out Outlet berhasil disimpan!",
    });

    setIsAbsenMasuk(!isAbsenMasuk); // Toggle antara In Outlet dan Out Outlet
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow mt-7">
      <h2 className="text-center text-2xl font-bold mb-4">Form Kunjungan</h2>
      <form onSubmit={handleSubmit}>
        {/* Nama Outlet */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Nama Outlet</label>
          <select
            value={outlet}
            onChange={(e) => setOutlet(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="" disabled>
              Pilih Nama Outlet
            </option>
            <option value="RSUD Cibinong">RSUD Cibinong</option>
            <option value="RS Permata Bogor">RS Permata Bogor</option>
            <option value="RSIA Ananda">RSIA Ananda</option>
          </select>
        </div>

        {/* User */}
        <div className="mb-4">
          <label className="block font-medium mb-2">User</label>
          <select
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="" disabled>
              Pilih User
            </option>
            <option value="Dr Nita">Dr Nita</option>
            <option value="Dr Lyani">Dr Lyani</option>
            <option value="Dr Abdul">Dr Abdul</option>
          </select>
        </div>

        {/* Tanggal */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Tanggal</label>
          <input
            type="date"
            value={tanggal}
            disabled
            className="w-full px-3 py-2 border rounded bg-gray-200"
          />
        </div>

        {/* Jam */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            {isAbsenMasuk ? "Jam In Outlet" : "Jam Out Outlet"}
          </label>
          <input
            type="time"
            value={jam}
            disabled
            className="w-full px-3 py-2 border rounded bg-gray-200"
          />
        </div>

        {/* Keterangan */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Keterangan</label>
          <textarea
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Masukkan keterangan"
            required
          ></textarea>
        </div>

        {/* Upload Foto */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Upload Foto</label>
          <input
            type="file"
            onChange={(e) => setFoto(e.target.files[0])}
            className="w-full"
            required
          />
        </div>

        {/* Lokasi GPS */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Lokasi GPS</label>
          <div className="w-full px-3 py-2 border rounded bg-gray-200">
            <p>Latitude: {lokasi.latitude}</p>
            <p>Longitude: {lokasi.longitude}</p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full px-4 py-2 text-white rounded ${
            isAbsenMasuk ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isAbsenMasuk ? "In Outlet" : "Out Outlet"}
        </button>
      </form>
    </div>
  );
}

export default FormKunjungan;

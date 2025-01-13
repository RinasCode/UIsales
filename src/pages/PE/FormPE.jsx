import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function FormPE() {
  const [tanggal] = useState(() => new Date().toISOString().split("T")[0]); 
  const [jam, setJam] = useState("");
  const [jamIn, setJamIn] = useState(null);
  const [jamOut, setJamOut] = useState(null);
  const [lokasi, setLokasi] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    const getGeolocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLokasi(`Lat: ${latitude}, Long: ${longitude}`);
          },
          () => {
            Swal.fire({
              icon: "warning",
              title: "Lokasi",
              text: "Gagal mendapatkan lokasi. Pastikan GPS aktif.",
            });
          }
        );
      }
    };

    getGeolocation();

    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toTimeString().split(" ")[0].slice(0, 5);
      setJam(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jamIn) {
      setJamIn(jam);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Jam Out PE berhasil disimpan!",
      });
    } else if (!jamOut) {
      setJamOut(jam);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Jam Out PE berhasil disimpan!",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Sudah Absen",
        text: "Anda sudah melakukan jadwal PE.",
      });
    }
  };

  const handleFotoSubmit = (e) => {
    e.preventDefault();

    if (!foto) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Harap upload foto terlebih dahulu.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Foto kegiatan berhasil diupload!",
    });

    console.log("Foto:", foto);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow mt-7">
      <h2 className="text-center text-2xl font-bold mb-4">Form Physical Exercise</h2>
      <form onSubmit={handleSubmit}>
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

        {/* Lokasi */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Lokasi</label>
          <input
            type="text"
            value={lokasi}
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

        {/* Jam Masuk atau Jam Pulang */}
        <div className="mb-4">
          <label className="block font-medium mb-2">
            {jamIn && !jamOut ? "Jam Pulang" : "Jam Masuk"}
          </label>
          <input
            type="text"
            value={jamIn && !jamOut ? jam : jamIn || jam}
            disabled
            className="w-full px-3 py-2 border rounded bg-gray-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full px-4 py-2 rounded text-white ${
            jamOut ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={jamOut}
        >
          {jamIn ? (jamOut ? "Sudah Absen" : "Simpan Jam Pulang") : "Simpan Jam Masuk"}
        </button>
      </form>

      {/* Form Upload Foto (Muncul setelah Jam In) */}
      {jamIn && !jamOut && (
        <form onSubmit={handleFotoSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block font-medium mb-2">Upload Foto</label>
            <input
              type="file"
              onChange={(e) => setFoto(e.target.files[0])}
              className="w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Upload Foto
          </button>
        </form>
      )}
    </div>
  );
}

export default FormPE;

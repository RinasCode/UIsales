import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function FormKunjungan() {
  const [tanggal, setTanggal] = useState("");
  const [jamLogin, setJamLogin] = useState("");
  const [outlet, setOutlet] = useState("");
  const [user, setUser] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const time = now.toTimeString().split(" ")[0].slice(0, 5);
    setTanggal(today);
    setJamLogin(time);
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
      jamLogin,
      keterangan,
      foto,
    };

    console.log("Form Data:", formData);

    Swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Data kunjungan berhasil disimpan!",
    });
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

        {/* Jam Login */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Jam Login</label>
          <input
            type="time"
            value={jamLogin}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

export default FormKunjungan;

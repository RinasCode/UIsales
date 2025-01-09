import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function FormAbsen() {
  const [tanggal, setTanggal] = useState("");
  const [jam, setJam] = useState("");
  const [jamMasuk, setJamMasuk] = useState("");
  const [jamPulang, setJamPulang] = useState("");
  const [lokasi] = useState("RSUD Cibinong");
  const [jarak] = useState("0 km");
  const [keterangan, setKeterangan] = useState("");
  const [foto, setFoto] = useState(null);
  const [nama] = useState("Rizky Andara");
  const [jenisAbsen, setJenisAbsen] = useState("");
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const time = now.toTimeString().split(" ")[0].slice(0, 5);
    setTanggal(today);
    setJam(time);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!foto) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Harap upload foto terlebih dahulu.",
      });
      return;
    }

    if (!keterangan && ["IZIN", "SAKIT", "CUTI", "TRAINING", "KOORDINASI_KANTOR_GDM"].includes(jenisAbsen)) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Harap isi keterangan.",
      });
      return;
    }

    if (
      (jenisAbsen === "HADIR" ||
        jenisAbsen === "TRAINING" ||
        jenisAbsen === "KOORDINASI_KANTOR_GDM") &&
      !isLogout
    ) {
      setJamMasuk(jam);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Jam masuk berhasil disimpan!",
      });
      setIsLogout(true);
    } else if (
      (jenisAbsen === "HADIR" ||
        jenisAbsen === "TRAINING" ||
        jenisAbsen === "KOORDINASI_KANTOR_GDM") &&
      isLogout
    ) {
      const now = new Date();
      const time = now.toTimeString().split(" ")[0].slice(0, 5);
      setJamPulang(time);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Jam pulang berhasil disimpan!",
      });
      setIsLogout(false);
    } else {
      const alertMessage = `Absensi ${jenisAbsen} berhasil disimpan!`;
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: alertMessage,
      });
    }

    const dataAbsen = {
      nama,
      tanggal,
      jenisAbsen,
      jamMasuk:
        jenisAbsen === "HADIR" ||
        jenisAbsen === "TRAINING" ||
        jenisAbsen === "KOORDINASI_KANTOR_GDM"
          ? jamMasuk
          : jam,
      jamPulang:
        (jenisAbsen === "HADIR" ||
          jenisAbsen === "TRAINING" ||
          jenisAbsen === "KOORDINASI_KANTOR_GDM") &&
        jamPulang
          ? jamPulang
          : null,
      lokasi,
      jarak,
      keterangan,
      foto,
    };

    console.log("Data Absen:", dataAbsen);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow mt-7">
      <h2 className="text-center text-2xl font-bold mb-4">Form Absensi</h2>
      <form onSubmit={handleSubmit}>
        {/* Jenis Absensi */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Jenis Absensi</label>
          <select
            value={jenisAbsen}
            onChange={(e) => {
              setJenisAbsen(e.target.value);
              if (
                e.target.value !== "HADIR" &&
                e.target.value !== "TRAINING" &&
                e.target.value !== "KOORDINASI_KANTOR_GDM"
              )
                setIsLogout(false);
            }}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="" disabled>
              Pilih jenis absensi
            </option>
            <option value="HADIR">Hadir</option>
            <option value="IZIN">Izin</option>
            <option value="SAKIT">Sakit</option>
            <option value="CUTI">Cuti</option>
            <option value="TRAINING">Training</option>
            <option value="KOORDINASI_KANTOR_GDM">Koordinasi Kantor GDM</option>
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

        {/* Jam Masuk atau Jam Pulang */}
        {(jenisAbsen === "HADIR" ||
          jenisAbsen === "TRAINING" ||
          jenisAbsen === "KOORDINASI_KANTOR_GDM") && (
          <div className="mb-4">
            <label className="block font-medium mb-2">
              {isLogout ? "Jam Pulang" : "Jam Masuk"}
            </label>
            <input
              type="text"
              value={isLogout ? jamPulang || jam : jamMasuk || jam}
              disabled
              className="w-full px-3 py-2 border rounded bg-gray-200"
            />
          </div>
        )}

        {/* Keterangan */}
        {["IZIN", "SAKIT", "CUTI", "TRAINING", "KOORDINASI_KANTOR_GDM"].includes(
          jenisAbsen
        ) && (
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
        )}

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
          className={`w-full px-4 py-2 rounded text-white ${
            !jenisAbsen
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={!jenisAbsen}
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

export default FormAbsen;

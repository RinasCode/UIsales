import React, { useState } from "react";
import * as XLSX from "xlsx";

function Kunjungan() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filterCabang, setFilterCabang] = useState("");
  const [filterNamaPS, setFilterNamaPS] = useState("");

  const users = [
    {
      tanggal: "2025-01-01",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 5,
    },
    {
      tanggal: "2025-01-02",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-03",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 3,
      total_jam_kunjungan: 5,
    },
    {
      tanggal: "2025-01-06",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 4,
    },
    {
      tanggal: "2025-01-07",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 3,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-08",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 5,
    },
    {
      tanggal: "2025-01-09",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 3,
      total_jam_kunjungan: 4,
    },
    {
      tanggal: "2025-01-13",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 3,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-14",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 5,
    },
    {
      tanggal: "2025-01-15",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 4,
    },
    {
      tanggal: "2025-01-16",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 3,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-17",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 5,
    },
    {
      tanggal: "2025-01-20",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 3,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-21",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 5,
    },
    {
      tanggal: "2025-01-22",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 4,
    },
    {
      tanggal: "2025-01-23",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 5,
    },
    {
      tanggal: "2025-01-24",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 3,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-27",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 3,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-28",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 5,
    },
    {
      tanggal: "2025-01-29",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 2,
      total_jam_kunjungan: 4,
    },
    {
      tanggal: "2025-01-30",
      nama_ps: "Andini",
      cabang: "JKT-02 RAWAMANGUN",
      total_kunjungan: 3,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-01",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-02",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-03",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-06",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-07",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-08",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-09",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-13",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-14",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-15",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-16",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-17",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-20",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-21",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-22",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-23",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-24",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-27",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-28",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-29",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },
    {
      tanggal: "2025-01-30",
      nama_ps: "Suryawan",
      cabang: "JKT-03 HARKIT",
      total_kunjungan: 2,
      total_jam_kunjungan: 3,
    },

    {
      tanggal: "2025-01-01",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-02",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-03",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-06",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 8,
    },
    {
      tanggal: "2025-01-07",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 7,
    },
    {
      tanggal: "2025-01-08",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 8,
    },
    {
      tanggal: "2025-01-09",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-13",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 8,
    },
    {
      tanggal: "2025-01-14",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 8,
    },
    {
      tanggal: "2025-01-15",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 8,
    },
    {
      tanggal: "2025-01-16",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 8,
    },
    {
      tanggal: "2025-01-17",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 8,
    },
    {
      tanggal: "2025-01-20",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-21",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-22",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-23",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-24",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-27",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-28",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-29",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
    {
      tanggal: "2025-01-30",
      nama_ps: "Dewi Ayu",
      cabang: "JKT-01 FATMAWATI",
      total_kunjungan: 2,
      total_jam_kunjungan: 6,
    },
  ];
  const calculateWeeklyStats = (users) => {
    const weeks = {};
    users.forEach((user) => {
      const weekNumber = getWeekNumber(new Date(user.tanggal)); 
      const psName = user.nama_ps;

      if (!weeks[weekNumber]) {
        weeks[weekNumber] = {};
      }
      if (!weeks[weekNumber][psName]) {
        weeks[weekNumber][psName] = { totalVisits: 0, totalHours: 0 };
      }
      weeks[weekNumber][psName].totalVisits += user.total_kunjungan;
      weeks[weekNumber][psName].totalHours += user.total_jam_kunjungan;
    });

    return weeks;
  };

  const getWeekNumber = (date) => {
    const startDate = new Date(date.getFullYear(), 0, 1); 
    const diff = date - startDate; 
    const oneDay = 1000 * 60 * 60 * 24; 
    const dayOfYear = Math.floor(diff / oneDay); 

    if (dayOfYear <= 4) {
      return 1; 
    } else {
      return Math.ceil((dayOfYear - 4) / 7) + 1; 
    }
  };

  const filteredUsers = users
    .filter((user) => {
      const userDate = new Date(user.tanggal);
      const withinDateRange =
        (!startDate || userDate >= new Date(startDate)) &&
        (!endDate || userDate <= new Date(endDate));

      const matchCabang = !filterCabang || user.cabang.includes(filterCabang);
      const matchNamaPS =
        !filterNamaPS ||
        user.nama_ps.toLowerCase().includes(filterNamaPS.toLowerCase());

      return withinDateRange && matchCabang && matchNamaPS;
    })
    .map((user) => {
      return {
        ...user,
        target_kunjungan_harian: user.target_kunjungan_harian || 0,
      };
    })
    .sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

  const weeklyStats = calculateWeeklyStats(filteredUsers);

  const handleDownload = () => {

    const updatedUsers = filteredUsers.map((user) => ({
      ...user,
      target_kunjungan_harian:
        user.total_jam_kunjungan === 6
          ? "Tercapai"
          : `Kurang ${6 - user.total_jam_kunjungan} jam`,
    }));

    const userSheet = XLSX.utils.json_to_sheet(updatedUsers);

    const visitStatus = filteredUsers.map((user) => ({
      nama_ps: user.nama_ps,
      tanggal: user.tanggal,
      total_kunjungan: user.total_kunjungan,
      total_jam_kunjungan: user.total_jam_kunjungan,
      status:
        user.total_jam_kunjungan === 6
          ? "Tercapai"
          : `Kurang ${6 - user.total_jam_kunjungan} jam`,
    }));

    const visitStatusSheet = XLSX.utils.json_to_sheet(visitStatus);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, userSheet, "Absensi Pengguna");
    XLSX.utils.book_append_sheet(wb, visitStatusSheet, "Status Kunjungan");

    XLSX.writeFile(wb, "absensi.xlsx");
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-2 mt-4">
        DAFTAR KUNJUNGAN
      </h2>

      {/* Filter */}
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex items-center space-x-4">
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

      <select
        value={filterCabang}
        onChange={(e) => setFilterCabang(e.target.value)}
        className="border border-gray-300 px-4 py-2"
      >
        <option value="">Semua Cabang</option>
        <option value="JKT-01 FATMAWATI">JKT-01 FATMAWATI</option>
        <option value="JKT-02 RAWAMANGUN">JKT-02 RAWAMANGUN</option>
        <option value="JKT-03 HARKIT">JKT-03 HARKIT</option>
      </select>

      <input
        type="text"
        placeholder="Search by Nama PS"
        value={filterNamaPS}
        onChange={(e) => setFilterNamaPS(e.target.value)}
        className="border border-gray-300 px-4 py-2 ml-4"
      />

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
                Nama PS
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Cabang
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Total Kunjungan
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Total Jam Kunjungan
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Target Jam Kunjungan Harian
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
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
                  {user.cabang}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.total_kunjungan}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.total_jam_kunjungan}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {user.total_jam_kunjungan >= 6
                    ? "Tercapai"
                    : `Kurang ${6 - user.total_jam_kunjungan} jam`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Weekly Stats */}
      <div className="mt-6">
        <h3 className="font-semibold">Total Stats per Week</h3>
        <table className="table-auto border-collapse border border-gray-300 w-full mt-4 mb-10">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-center">
                Minggu
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Nama PS
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Total Kunjungan
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Total Jam Kunjungan
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Target Kunjungan
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Target Jam
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(weeklyStats).map(([weekNumber, stats]) =>
              Object.entries(stats).map(([psName, psStats]) => (
                <tr key={`${weekNumber}-${psName}`}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {weekNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {psName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {psStats.totalVisits >= 8
                      ? "Tercapai"
                      : `Kurang ${8 - psStats.totalVisits}`}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {psStats.totalHours >= 40
                      ? "Tercapai"
                      : `Kurang ${40 - psStats.totalHours} jam`}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    8
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    40
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Kunjungan;

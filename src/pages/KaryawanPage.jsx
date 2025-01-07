import React, { useState } from "react";

function Karyawan() {
  const [searchDesc, setSearchDesc] = useState(""); 
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(""); 

  const handleSearchDesc = (e) => {
    setSearchDesc(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const filterByDesc = (desc) => {
    return data.filter(item => {
      // Ganti NAMA dengan DESC yang sesuai
      const nama = item.NAMA || '';  // Pastikan jika item.NAMA undefined, akan diganti dengan string kosong
      return nama.toLowerCase().includes(desc.toLowerCase());
    });
  };

  const handleEditClick = (id) => {
    console.log("Edit button clicked for ID:", id);
    // Implementasi navigasi ke halaman edit atau tampilan modal untuk editing
  };

  // Data dummy untuk tabel
  const data = [
    {
      NAMA: "Ade Oki Agus Pradana",
      REGION: "Gamma",
      NIK: 2022020701,
      NIK_LAMA: 2202104,
      TANGGAL_JOIN: "18/07/2022",
      NO_REK_MANDIR: 1450014494443,
      JENIS_KELAMIN: "LAKI-LAKI",
      AGAMA: "HINDU",
      STATUS: "TETAP",
      NO_TLP: "0831 - 1722 8922",
      NO_TLP2: "",
      EMAIL: "",
      USAI_KONTRAK: "",
      SISA_KONTRAK: "2 tahun 4 bulan",
      LAMA_KERJA: "",
      DIVISI: "Ps Mix",
      LEVEL: "",
      JABATAN: "",
      LOKASI: "",
      PANGGILAN: "",
      PENDIDIKAN: "",
      JURUSAN: "",
      KONTRAK_1: "18/01/2023",
      EXP: "Exp.",
      KONTRAK_2: "",
      EXP_2: "",
      KODE_PS: 692,
      WE_EA: "EAST",
      REG24: "R2-GAMMA",
      CAB: "DPS-01",
      AREA: "BALI BARAT_(F)",
      DIV_PS: "MIX"
    },
    {
        NAMA: "Ade Oki Agus Pradana",
        REGION: "Gamma",
        NIK: 2022020701,
        NIK_LAMA: 2202104,
        TANGGAL_JOIN: "18/07/2022",
        NO_REK_MANDIR: 1450014494443,
        JENIS_KELAMIN: "LAKI-LAKI",
        AGAMA: "HINDU",
        STATUS: "TETAP",
        NO_TLP: "0831 - 1722 8922",
        NO_TLP2: "0851 - 2345 6789",
        EMAIL: "ade.oki@mail.com",
        USAI_KONTRAK: "1 tahun 8 bulan",
        SISA_KONTRAK: "2 tahun 4 bulan",
        LAMA_KERJA: "1 tahun 8 bulan",
        DIVISI: "Ps Mix",
        LEVEL: "Junior",
        JABATAN: "Staff",
        LOKASI: "Bali",
        PANGGILAN: "Ade",
        PENDIDIKAN: "S1 Teknik Informatika",
        JURUSAN: "Informatika",
        KONTRAK_1: "18/01/2023",
        EXP: "Exp.",
        KONTRAK_2: "18/01/2025",
        EXP_2: "1 tahun 3 bulan",
        KODE_PS: 692,
        WE_EA: "EAST",
        REG24: "R2-GAMMA",
        CAB: "DPS-01",
        AREA: "BALI BARAT_(F)",
        DIV_PS: "MIX"
      },
      {
        NAMA: "Rina Melati Sari",
        REGION: "Beta",
        NIK: 2023040902,
        NIK_LAMA: 2203047,
        TANGGAL_JOIN: "12/09/2023",
        NO_REK_MANDIR: 1450022334555,
        JENIS_KELAMIN: "PEREMPUAN",
        AGAMA: "ISLAM",
        STATUS: "TETAP",
        NO_TLP: "0812 - 9087 1234",
        NO_TLP2: "0852 - 3344 5566",
        EMAIL: "rina.sari@mail.com",
        USAI_KONTRAK: "1 tahun 6 bulan",
        SISA_KONTRAK: "6 bulan",
        LAMA_KERJA: "6 bulan",
        DIVISI: "HRD",
        LEVEL: "Senior",
        JABATAN: "Manager",
        LOKASI: "Surabaya",
        PANGGILAN: "Rina",
        PENDIDIKAN: "S1 Psikologi",
        JURUSAN: "Psikologi Industri",
        KONTRAK_1: "01/10/2023",
        EXP: "Exp.",
        KONTRAK_2: "01/04/2024",
        EXP_2: "1 bulan",
        KODE_PS: 543,
        WE_EA: "WEST",
        REG24: "R2-BETA",
        CAB: "SUB-02",
        AREA: "JAWA TIMUR",
        DIV_PS: "HRD"
      },
      {
        NAMA: "Ade Oki Agus Pradana",
        REGION: "Gamma",
        NIK: 2022020701,
        NIK_LAMA: 2202104,
        TANGGAL_JOIN: "18/07/2022",
        NO_REK_MANDIR: 1450014494443,
        JENIS_KELAMIN: "LAKI-LAKI",
        AGAMA: "HINDU",
        STATUS: "TETAP",
        NO_TLP: "0831 - 1722 8922",
        NO_TLP2: "0851 - 2345 6789",
        EMAIL: "ade.oki@mail.com",
        USAI_KONTRAK: "1 tahun 8 bulan",
        SISA_KONTRAK: "2 tahun 4 bulan",
        LAMA_KERJA: "1 tahun 8 bulan",
        DIVISI: "Ps Mix",
        LEVEL: "Junior",
        JABATAN: "Staff",
        LOKASI: "Bali",
        PANGGILAN: "Ade",
        PENDIDIKAN: "S1 Teknik Informatika",
        JURUSAN: "Informatika",
        KONTRAK_1: "18/01/2023",
        EXP: "Exp.",
        KONTRAK_2: "18/01/2025",
        EXP_2: "1 tahun 3 bulan",
        KODE_PS: 692,
        WE_EA: "EAST",
        REG24: "R2-GAMMA",
        CAB: "DPS-01",
        AREA: "BALI BARAT_(F)",
        DIV_PS: "MIX"
      },
      {
        NAMA: "Rina Melati Sari",
        REGION: "Beta",
        NIK: 2023040902,
        NIK_LAMA: 2203047,
        TANGGAL_JOIN: "12/09/2023",
        NO_REK_MANDIR: 1450022334555,
        JENIS_KELAMIN: "PEREMPUAN",
        AGAMA: "ISLAM",
        STATUS: "TETAP",
        NO_TLP: "0812 - 9087 1234",
        NO_TLP2: "0852 - 3344 5566",
        EMAIL: "rina.sari@mail.com",
        USAI_KONTRAK: "1 tahun 6 bulan",
        SISA_KONTRAK: "6 bulan",
        LAMA_KERJA: "6 bulan",
        DIVISI: "HRD",
        LEVEL: "Senior",
        JABATAN: "Manager",
        LOKASI: "Surabaya",
        PANGGILAN: "Rina",
        PENDIDIKAN: "S1 Psikologi",
        JURUSAN: "Psikologi Industri",
        KONTRAK_1: "01/10/2023",
        EXP: "Exp.",
        KONTRAK_2: "01/04/2024",
        EXP_2: "1 bulan",
        KODE_PS: 543,
        WE_EA: "WEST",
        REG24: "R2-BETA",
        CAB: "SUB-02",
        AREA: "JAWA TIMUR",
        DIV_PS: "HRD"
      },
      {
        NAMA: "Ade Oki Agus Pradana",
        REGION: "Gamma",
        NIK: 2022020701,
        NIK_LAMA: 2202104,
        TANGGAL_JOIN: "18/07/2022",
        NO_REK_MANDIR: 1450014494443,
        JENIS_KELAMIN: "LAKI-LAKI",
        AGAMA: "HINDU",
        STATUS: "TETAP",
        NO_TLP: "0831 - 1722 8922",
        NO_TLP2: "0851 - 2345 6789",
        EMAIL: "ade.oki@mail.com",
        USAI_KONTRAK: "1 tahun 8 bulan",
        SISA_KONTRAK: "2 tahun 4 bulan",
        LAMA_KERJA: "1 tahun 8 bulan",
        DIVISI: "Ps Mix",
        LEVEL: "Junior",
        JABATAN: "Staff",
        LOKASI: "Bali",
        PANGGILAN: "Ade",
        PENDIDIKAN: "S1 Teknik Informatika",
        JURUSAN: "Informatika",
        KONTRAK_1: "18/01/2023",
        EXP: "Exp.",
        KONTRAK_2: "18/01/2025",
        EXP_2: "1 tahun 3 bulan",
        KODE_PS: 692,
        WE_EA: "EAST",
        REG24: "R2-GAMMA",
        CAB: "DPS-01",
        AREA: "BALI BARAT_(F)",
        DIV_PS: "MIX"
      },
      {
        NAMA: "Rina Melati Sari",
        REGION: "Beta",
        NIK: 2023040902,
        NIK_LAMA: 2203047,
        TANGGAL_JOIN: "12/09/2023",
        NO_REK_MANDIR: 1450022334555,
        JENIS_KELAMIN: "PEREMPUAN",
        AGAMA: "ISLAM",
        STATUS: "TETAP",
        NO_TLP: "0812 - 9087 1234",
        NO_TLP2: "0852 - 3344 5566",
        EMAIL: "rina.sari@mail.com",
        USAI_KONTRAK: "1 tahun 6 bulan",
        SISA_KONTRAK: "6 bulan",
        LAMA_KERJA: "6 bulan",
        DIVISI: "HRD",
        LEVEL: "Senior",
        JABATAN: "Manager",
        LOKASI: "Surabaya",
        PANGGILAN: "Rina",
        PENDIDIKAN: "S1 Psikologi",
        JURUSAN: "Psikologi Industri",
        KONTRAK_1: "01/10/2023",
        EXP: "Exp.",
        KONTRAK_2: "01/04/2024",
        EXP_2: "1 bulan",
        KODE_PS: 543,
        WE_EA: "WEST",
        REG24: "R2-BETA",
        CAB: "SUB-02",
        AREA: "JAWA TIMUR",
        DIV_PS: "HRD"
      },
      {
        NAMA: "Ade Oki Agus Pradana",
        REGION: "Gamma",
        NIK: 2022020701,
        NIK_LAMA: 2202104,
        TANGGAL_JOIN: "18/07/2022",
        NO_REK_MANDIR: 1450014494443,
        JENIS_KELAMIN: "LAKI-LAKI",
        AGAMA: "HINDU",
        STATUS: "TETAP",
        NO_TLP: "0831 - 1722 8922",
        NO_TLP2: "0851 - 2345 6789",
        EMAIL: "ade.oki@mail.com",
        USAI_KONTRAK: "1 tahun 8 bulan",
        SISA_KONTRAK: "2 tahun 4 bulan",
        LAMA_KERJA: "1 tahun 8 bulan",
        DIVISI: "Ps Mix",
        LEVEL: "Junior",
        JABATAN: "Staff",
        LOKASI: "Bali",
        PANGGILAN: "Ade",
        PENDIDIKAN: "S1 Teknik Informatika",
        JURUSAN: "Informatika",
        KONTRAK_1: "18/01/2023",
        EXP: "Exp.",
        KONTRAK_2: "18/01/2025",
        EXP_2: "1 tahun 3 bulan",
        KODE_PS: 692,
        WE_EA: "EAST",
        REG24: "R2-GAMMA",
        CAB: "DPS-01",
        AREA: "BALI BARAT_(F)",
        DIV_PS: "MIX"
      },
      {
        NAMA: "Rina Melati Sari",
        REGION: "Beta",
        NIK: 2023040902,
        NIK_LAMA: 2203047,
        TANGGAL_JOIN: "12/09/2023",
        NO_REK_MANDIR: 1450022334555,
        JENIS_KELAMIN: "PEREMPUAN",
        AGAMA: "ISLAM",
        STATUS: "TETAP",
        NO_TLP: "0812 - 9087 1234",
        NO_TLP2: "0852 - 3344 5566",
        EMAIL: "rina.sari@mail.com",
        USAI_KONTRAK: "1 tahun 6 bulan",
        SISA_KONTRAK: "6 bulan",
        LAMA_KERJA: "6 bulan",
        DIVISI: "HRD",
        LEVEL: "Senior",
        JABATAN: "Manager",
        LOKASI: "Surabaya",
        PANGGILAN: "Rina",
        PENDIDIKAN: "S1 Psikologi",
        JURUSAN: "Psikologi Industri",
        KONTRAK_1: "01/10/2023",
        EXP: "Exp.",
        KONTRAK_2: "01/04/2024",
        EXP_2: "1 bulan",
        KODE_PS: 543,
        WE_EA: "WEST",
        REG24: "R2-BETA",
        CAB: "SUB-02",
        AREA: "JAWA TIMUR",
        DIV_PS: "HRD"
      }
  ];

  return (
    <>
      <br />
      <br />
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        {/* Pencarian berdasarkan DESC */}
        <div className="flex items-center mb-4 sm:mb-0">
          <label className="mr-2">Search by DESC:</label>
          <input
            type="text"
            value={searchDesc}
            onChange={handleSearchDesc}
            className="input input-bordered"
            placeholder="Search by description"
          />
        </div>

        {/* Filter per tanggal */}
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="mb-4 sm:mb-0">
            <label className="mr-2">Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={handleStartDateChange}
              className="input input-bordered"
            />
          </div>
          <div>
            <label className="mr-2">End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={handleEndDateChange}
              className="input input-bordered"
            />
          </div>
        </div>
      </div>

      {/* Judul "Stock GDM Update" */}
      <h2 className="text-center text-2xl font-bold mb-4">DATA KARYAWAN</h2>

      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-center">No</th>
              <th className="border border-gray-300 px-4 py-2 text-center">NAMA</th>
              <th className="border border-gray-300 px-4 py-2 text-center">REGION</th>
              <th className="border border-gray-300 px-4 py-2 text-center">NIK</th>
              <th className="border border-gray-300 px-4 py-2 text-center">NIK LAMA</th>
              <th className="border border-gray-300 px-4 py-2 text-center">TANGGAL JOIN</th>
              <th className="border border-gray-300 px-4 py-2 text-center">NO REK MANDIRI</th>
              <th className="border border-gray-300 px-4 py-2 text-center">JENIS KELAMIN</th>
              <th className="border border-gray-300 px-4 py-2 text-center">AGAMA</th>
              <th className="border border-gray-300 px-4 py-2 text-center">STATUS</th>
              <th className="border border-gray-300 px-4 py-2 text-center">NO TELP</th>
              <th className="border border-gray-300 px-4 py-2 text-center">NO TELP2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">EMAIL</th>
              <th className="border border-gray-300 px-4 py-2 text-center">USAI KONTRAK</th>
              <th className="border border-gray-300 px-4 py-2 text-center">LAMA KERJA</th>
              <th className="border border-gray-300 px-4 py-2 text-center">DIVISI</th>
              <th className="border border-gray-300 px-4 py-2 text-center">LEVEL</th>
              <th className="border border-gray-300 px-4 py-2 text-center">JABATAN</th>
              <th className="border border-gray-300 px-4 py-2 text-center">LOKASI</th>
              <th className="border border-gray-300 px-4 py-2 text-center">PANGGILAN</th>
              <th className="border border-gray-300 px-4 py-2 text-center">PENDIDIKAN</th>
              <th className="border border-gray-300 px-4 py-2 text-center">JURUSAN</th>
              <th className="border border-gray-300 px-4 py-2 text-center">KONTRAK 1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">EXP</th>
              <th className="border border-gray-300 px-4 py-2 text-center">KONTRAK 2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">EXP 2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">PANGGILAN</th>
              <th className="border border-gray-300 px-4 py-2 text-center">KODE PS</th>
              <th className="border border-gray-300 px-4 py-2 text-center">WE/EA</th>
              <th className="border border-gray-300 px-4 py-2 text-center">REGION</th>
              <th className="border border-gray-300 px-4 py-2 text-center">CABANG</th>
              <th className="border border-gray-300 px-4 py-2 text-center">AREA</th>
              <th className="border border-gray-300 px-4 py-2 text-center">DIVISI PS</th>
              <th className="border border-gray-300 px-4 py-2 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* Filter rows by DESC */}
            {
              data.filter(item => filterByDesc(searchDesc)).map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.NAMA}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.REGION}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.NIK}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.NIK_LAMA}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.TANGGAL_JOIN}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.NO_REK_MANDIR}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.JENIS_KELAMIN}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.AGAMA}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.STATUS}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.NO_TLP}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.NO_TLP2}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.EMAIL}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.USAI_KONTRAK}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.LAMA_KERJA}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.DIVISI}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.LEVEL}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.JABATAN}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.LOKASI}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.PANGGILAN}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.PENDIDIKAN}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.JURUSAN}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.KONTRAK_1}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.EXP}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.KONTRAK_2}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.EXP_2}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.PANGGILAN}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.KODE_PS}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.WE_EA}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.REG24}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.CAB}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.AREA}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{item.DIV_PS}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button onClick={() => handleEditClick(item.NIK)} className="btn btn-primary">Edit</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Karyawan;

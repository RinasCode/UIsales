import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

function SalesHistory() {
  const data = [
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2025-01-03",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      AREA: "WEST",
      REGION: "ALFA",
      CABANG: "JKT-01",
      AREA_CABANG: "PS-JKT01-HC-562",
      OUTLET: "RS Ananda",
      NAMA_PS: "Fitriani",
      NETT_VAL: 11704500,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2025-01-04",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      AREA: "WEST",
      REGION: "ALFA",
      CABANG: "JKT-01",
      AREA_CABANG: "PS-JKT01-HC-562",
      OUTLET: "RS Ananda",
      NAMA_PS: "Fitriani",
      NETT_VAL: 11704500,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2025-01-05",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      AREA: "WEST",
      REGION: "ALFA",
      CABANG: "JKT-01",
      AREA_CABANG: "PS-JKT01-MC-563",
      OUTLET: "RS Ananda",
      NAMA_PS: "Fitriani",
      NETT_VAL: 11704500,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2025-01-06",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      AREA: "WEST",
      REGION: "ALFA",
      CABANG: "JKT-01",
      AREA_CABANG: "PS-JKT01-MC-563",
      OUTLET: "RS Ananda",
      NAMA_PS: "Fitriani",
      NETT_VAL: 11704500,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2025-01-07",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      AREA: "WEST",
      REGION: "ALFA",
      CABANG: "JKT-01",
      AREA_CABANG: "PS-JKT01-MC-563",
      OUTLET: "RS Ananda",
      NAMA_PS: "Fitriani",
      NETT_VAL: 11704500,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2025-01-08",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      AREA: "EAST",
      REGION: "GAMMA",
      CABANG: "JKT-02",
      AREA_CABANG: "PS-JKT02-HC-462",
      OUTLET: "RS Ananda",
      NAMA_PS: "Fitriani",
      NETT_VAL: 11704500,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2025-01-09",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      AREA: "EAST",
      REGION: "GAMMA",
      CABANG: "JKT-02",
      AREA_CABANG: "PS-JKT02-HC-462",
      OUTLET: "RS Ananda",
      NAMA_PS: "Fitriani",
      NETT_VAL: 11704500,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2025-01-10",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      AREA: "EAST",
      REGION: "GAMMA",
      CABANG: "JKT-02",
      AREA_CABANG: "PS-JKT02-MC-463",
      OUTLET: "RS Ananda",
      NAMA_PS: "Vacant",
      NETT_VAL: 11704500,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2025-01-11",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      AREA: "EAST",
      REGION: "GAMMA",
      CABANG: "JKT-02",
      AREA_CABANG: "PS-JKT02-MC-463",
      OUTLET: "RS Ananda",
      NAMA_PS: "vacant",
      NETT_VAL: 11704500,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2025-01-12",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      AREA: "EAST",
      REGION: "GAMMA",
      CABANG: "JKT-02",
      AREA_CABANG: "PS-JKT02-MC-462",
      OUTLET: "RS Ananda",
      NAMA_PS: "Fitriani",
      NETT_VAL: 11704500,
    },
  ];

  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    producer: "All",
    market: "All",
    area: "All",
    region: "All",
    cabang: "All",
    area_cabang: "All",
    nama_ps: "All",
    outlet: "All",
    personal: "All",
  });

  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    let filtered = data;

    if (filters.startDate) {
      filtered = filtered.filter(
        (item) => new Date(item.TANGGAL) >= new Date(filters.startDate)
      );
    }
    if (filters.endDate) {
      filtered = filtered.filter(
        (item) => new Date(item.TANGGAL) <= new Date(filters.endDate)
      );
    }
    if (filters.producer !== "All") {
      filtered = filtered.filter((item) => item.PRINCIPAL === filters.producer);
    }
    if (filters.market !== "All") {
      filtered = filtered.filter((item) => item.MARK_DESC === filters.market);
    }
    if (filters.area !== "All") {
      filtered = filtered.filter((item) => item.AREA === filters.area);
    }
    if (filters.region !== "All") {
      filtered = filtered.filter((item) => item.REGION === filters.region);
    }
    if (filters.cabang !== "All") {
      filtered = filtered.filter((item) => item.CABANG === filters.cabang);
    }
    if (filters.area_cabang !== "All") {
      filtered = filtered.filter(
        (item) => item.AREA_CABANG === filters.area_cabang
      );
    }
    if (filters.outlet !== "All") {
      filtered = filtered.filter((item) => item.OUTLET === filters.outlet);
    }
    if (filters.nama_ps !== "All") {
      filtered = filtered.filter((item) => item.NAMA_PS === filters.nama_ps);
    }

    setFilteredData(filtered);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "SalesHistory");

    // Export to Excel file
    XLSX.writeFile(workbook, "SalesHistory.xlsx");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Filters Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Filter Data</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Start Date:
            </label>
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date:</label>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Producer:</label>
            <select
              name="producer"
              value={filters.producer}
              onChange={handleFilterChange}
              className="select select-bordered w-full"
            >
              <option>All</option>
              <option>ALSHTROM</option>
              <option>TROGE</option>
              <option>PETERS</option>
              <option>PETERS CVT</option>
              <option>MEDIPRO</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Market:</label>
            <select
              name="market"
              value={filters.market}
              onChange={handleFilterChange}
              className="select select-bordered w-full"
            >
              <option>All</option>
              <option>GOVERNMENT</option>
              <option>PRIVATE</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Area:</label>
            <select
              name="area"
              value={filters.area}
              onChange={handleFilterChange}
              className="select select-bordered w-full"
            >
              <option>All</option>
              <option>EAST</option>
              <option>WEST</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Region:</label>
            <select
              name="region"
              value={filters.region}
              onChange={handleFilterChange}
              className="select select-bordered w-full"
            >
              <option>All</option>
              <option>ALFA</option>
              <option>GAMMA</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">CABANG :</label>
            <select
              name="cabang"
              value={filters.cabang}
              onChange={handleFilterChange}
              className="select select-bordered w-full"
            >
              <option>All</option>
              <option>JKT-01</option>
              <option>JKT-02</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              AREA CABANG :
            </label>
            <select
              name="area_cabang"
              value={filters.area_cabang}
              onChange={handleFilterChange}
              className="select select-bordered w-full"
            >
              <option>All</option>
              <option>PS-JKT01-HC-562</option>
              <option>PS-JKT01-MC-563</option>
              <option>PS-JKT02-HC-462</option>
              <option>PS-JKT02-MC-463</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Outlet:</label>
            <select
              name="outlet"
              value={filters.outlet}
              onChange={handleFilterChange}
              className="select select-bordered w-full"
            >
              <option>All</option>
              <option>RS Ananda</option>
              <option>RS Jakarta</option>
              <option>RSUD Cibinong</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nama PS:</label>
            <select
              name="nama_ps"
              value={filters.nama_ps}
              onChange={handleFilterChange}
              className="select select-bordered w-full"
            >
              <option>All</option>
              <option>Tuti</option>
              <option>Handayani</option>
              <option>Maryati</option>
            </select>
          </div>

          {/* Download Button */}
          <div className="col-span-full flex justify-end mt-4">
            <button
              onClick={downloadExcel}
              className="btn btn-primary px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Download to Excel
            </button>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center mt-3">
          History Sellout
        </h2>
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">KODE PPG</th>
              <th className="px-4 py-2 border">Tanggal</th>
              <th className="px-4 py-2 border">Nama Outlet</th>
              <th className="px-4 py-2 border">Principal</th>
              <th className="px-4 py-2 border">Market</th>
              <th className="px-4 py-2 border">Area</th>
              <th className="px-4 py-2 border">Region</th>
              <th className="px-4 py-2 border">Cabang</th>
              <th className="px-4 py-2 border">Area Cabang</th>
              <th className="px-4 py-2 border">Outlet</th>
              <th className="px-4 py-2 border">Nama PS</th>
              <th className="px-4 py-2 border">Nett Value</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{item.KODE_GDM}</td>
                <td className="px-4 py-2 border">{item.TANGGAL}</td>
                <td className="px-4 py-2 border">{item.NAMA_ITEM}</td>
                <td className="px-4 py-2 border">{item.PRINCIPAL}</td>
                <td className="px-4 py-2 border">{item.MARK_DESC}</td>
                <td className="px-4 py-2 border">{item.AREA}</td>
                <td className="px-4 py-2 border">{item.REGION}</td>
                <td className="px-4 py-2 border">{item.CABANG}</td>
                <td className="px-4 py-2 border">{item.AREA_CABANG}</td>
                <td className="px-4 py-2 border">{item.OUTLET}</td>
                <td className="px-4 py-2 border">{item.NAMA_PS}</td>
                <td className="px-4 py-2 border">{item.NETT_VAL}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesHistory;

import React, { useState, useEffect } from "react";

function SalesHistory() {
  const data = [
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2024-12-09",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      JOB_TITLE: "PS",
      DIVISION: "MC",
      OUTLET: "Outlet A",
      PERSONAL: "Tuti",
      NETT_VAL: 11704500,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2024-12-10",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "TROGE",
      MARK_DESC: "PRIVATE",
      JOB_TITLE: "DM",
      DIVISION: "HC",
      OUTLET: "Outlet B",
      PERSONAL: "Handayani",
      NETT_VAL: 13004500,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2024-12-11",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "ALSHTROM",
      MARK_DESC: "GOVERNMENT",
      JOB_TITLE: "SM",
      DIVISION: "MIX",
      OUTLET: "Outlet C",
      PERSONAL: "Maryati",
      NETT_VAL: 20000000,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2024-12-12",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS CVT",
      MARK_DESC: "PRIVATE",
      JOB_TITLE: "GM",
      DIVISION: "MC",
      OUTLET: "Outlet A",
      PERSONAL: "Tuti",
      NETT_VAL: 15000000,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2024-12-13",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "MEDIPRO",
      MARK_DESC: "PRIVATE",
      JOB_TITLE: "DM",
      DIVISION: "HC",
      OUTLET: "Outlet D",
      PERSONAL: "Handayani",
      NETT_VAL: 18000000,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2024-12-14",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "TROGE",
      MARK_DESC: "GOVERNMENT",
      JOB_TITLE: "PS",
      DIVISION: "HC",
      OUTLET: "Outlet B",
      PERSONAL: "Maryati",
      NETT_VAL: 12000000,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2024-12-15",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "ALSHTROM",
      MARK_DESC: "PRIVATE",
      JOB_TITLE: "SM",
      DIVISION: "MC",
      OUTLET: "Outlet C",
      PERSONAL: "Tuti",
      NETT_VAL: 11000000,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2024-12-16",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS",
      MARK_DESC: "GOVERNMENT",
      JOB_TITLE: "GM",
      DIVISION: "MIX",
      OUTLET: "Outlet D",
      PERSONAL: "Handayani",
      NETT_VAL: 19000000,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2024-12-17",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "PETERS CVT",
      MARK_DESC: "PRIVATE",
      JOB_TITLE: "DM",
      DIVISION: "HC",
      OUTLET: "Outlet A",
      PERSONAL: "Maryati",
      NETT_VAL: 16000000,
    },
    {
      KODE_GDM: "2TRG3WAYS",
      TANGGAL: "2024-12-18",
      NAMA_ITEM: "TRO-VENOFLOW 3-WAY-2TRG3WAYS",
      PRINCIPAL: "MEDIPRO",
      MARK_DESC: "GOVERNMENT",
      JOB_TITLE: "PS",
      DIVISION: "MC",
      OUTLET: "Outlet B",
      PERSONAL: "Tuti",
      NETT_VAL: 12500000,
    },
  ];

  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    producer: "All",
    market: "All",
    jobTitle: "All",
    division: "All",
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
    if (filters.jobTitle !== "All") {
      filtered = filtered.filter((item) => item.JOB_TITLE === filters.jobTitle);
    }
    if (filters.division !== "All") {
      filtered = filtered.filter((item) => item.DIVISION === filters.division);
    }
    if (filters.outlet !== "All") {
      filtered = filtered.filter((item) => item.OUTLET === filters.outlet);
    }
    if (filters.personal !== "All") {
      filtered = filtered.filter((item) => item.PERSONAL === filters.personal);
    }

    setFilteredData(filtered);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
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
            <label className="block text-sm font-medium mb-1">Job Title:</label>
            <select
              name="jobTitle"
              value={filters.jobTitle}
              onChange={handleFilterChange}
              className="select select-bordered w-full"
            >
              <option>All</option>
              <option>PS</option>
              <option>DM</option>
              <option>SM</option>
              <option>GM</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Division:</label>
            <select
              name="division"
              value={filters.division}
              onChange={handleFilterChange}
              className="select select-bordered w-full"
            >
              <option>All</option>
              <option>HC</option>
              <option>MC</option>
              <option>MIX</option>
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
              <option>Outlet A</option>
              <option>Outlet B</option>
              <option>Outlet C</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Personal:</label>
            <select
              name="personal"
              value={filters.personal}
              onChange={handleFilterChange}
              className="select select-bordered w-full"
            >
              <option>All</option>
              <option>Tuti</option>
              <option>Handayani</option>
              <option>Maryati</option>
            </select>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-md">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">KODE PPG</th>
              <th className="px-4 py-2 border">Tanggal</th>
              <th className="px-4 py-2 border">Nama Outlet</th>
              <th className="px-4 py-2 border">Principal</th>
              <th className="px-4 py-2 border">Market</th>
              <th className="px-4 py-2 border">Job Title</th>
              <th className="px-4 py-2 border">Division</th>
              <th className="px-4 py-2 border">Outlet</th>
              <th className="px-4 py-2 border">Personal</th>
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
                <td className="px-4 py-2 border">{item.JOB_TITLE}</td>
                <td className="px-4 py-2 border">{item.DIVISION}</td>
                <td className="px-4 py-2 border">{item.OUTLET}</td>
                <td className="px-4 py-2 border">{item.PERSONAL}</td>
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

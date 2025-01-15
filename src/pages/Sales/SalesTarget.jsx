import React, { useState, useEffect } from "react";

function SalesTarget() {
  const data = [
    {
      KODE_PPG: "A60214",
      KODE_MPI: "",
      BULAN: "Desember",
      TANGGAL: "09/12/2024",
      KODE_DISTRIBUTOR: "8010619041",
      KODE_OUTLET: "1133",
      KODE_PS: "74",
      DISTRO: "PPG",
      NO_FAKTUR: "8360206658",
      kode_gdm_reguler: "2PTROS20F",
      DISCOUNT: 10,
      DISC_DB: 15,
      EKAT_SPC_GEN: "REG",
      INVOICED_QTY: 180,
      TOTAL_HNA: 15606000,
      V_disc_on_GDM: 1560600,
      V_disc_off_GDM: 2340900,
      NETT_VAL: 11704500,
      NAMA_OUTLET: "OTORITA BATAM RS ()",
      ITEM_NAME: "OPTIME 18S20F. 3/0-2PTROS20F",
      DIV_ITEM: "MC",
      PRINCIPAL: "PETERS",
      P_PROGRAM: "PETERS",
      GUGUS: "MC",
      NET_DISC: 25,
      WE_EA: "WEST",
      REG24: "R1-SAFIR",
      CAB: "BTM-01",
      NAMA_PS: "Khaidir Ramadhan",
      AREA: "BATAM_(B)",
      DIV_PS: "HC",
      MARK_DESC: "RS. PEMERINTAH",
      GOV_PRV: "GOVERNMENT",
      AKD_AKL: "AKD",
      CAB_GDM: "BTM-01/BATAM",
      CATEGORY: "0",
    },
    {
      KODE_PPG: "A60365",
      KODE_MPI: "",
      BULAN: "Desember",
      TANGGAL: "09/12/2024",
      KODE_DISTRIBUTOR: "8010619041",
      KODE_OUTLET: "1133",
      KODE_PS: "74",
      DISTRO: "PPG",
      NO_FAKTUR: "8360206658",
      kode_gdm_reguler: "2VPSPST10",
      DISCOUNT: 7,
      DISC_DB: 1,
      EKAT_SPC_GEN: "REG",
      INVOICED_QTY: 5,
      TOTAL_HNA: 4475000,
      V_disc_on_GDM: 313250,
      V_disc_off_GDM: 805500,
      NETT_VAL: 3356250,
      NAMA_OUTLET: "OTORITA BATAM RS ()",
      ITEM_NAME: "STERICLIN FLT 10CM/200M-2VPSPST10",
      DIV_ITEM: "HC",
      PRINCIPAL: "STERICLIN",
      P_PROGRAM: "STERICLIN",
      GUGUS: "HC",
      NET_DISC: 25,
      WE_EA: "WEST",
      REG24: "R1-SAFIR",
      CAB: "BTM-01",
      NAMA_PS: "Khaidir Ramadhan",
      AREA: "BATAM_(B)",
      DIV_PS: "HC",
      MARK_DESC: "RS. PEMERINTAH",
      GOV_PRV: "GOVERNMENT",
      AKD_AKL: "AKD",
      CAB_GDM: "BTM-01/BATAM",
      CATEGORY: "FLT",
    },
  ];

  const [area, setArea] = useState("");
  const [region, setRegion] = useState("");
  const [branch, setBranch] = useState("");
  const [ps, setPs] = useState("");
  const [month, setMonth] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [startDate, setStartDate] = useState("");

  const areas = ["WEST", "EAST"];
  const regions = {
    WEST: ["R1-SAFIR", "R2-SAFIR"],
    EAST: ["R1-EAST", "R2-EAST"],
  };
  const branches = {
    "R1-SAFIR": ["BTM-01", "BTM-02"],
    "R2-SAFIR": ["BTM-03", "BTM-04"],
    "R1-EAST": ["EAST-01", "EAST-02"],
    "R2-EAST": ["EAST-03", "EAST-04"],
  };
  const psOptions = {
    "BTM-01": ["Khaidir Ramadhan", "Ali Ramadhan"],
    "BTM-02": ["Siti Ramadhan", "Dewi Ramadhan"],
  };

  useEffect(() => {
    let filtered = data;

    if (month) {
      filtered = filtered.filter((item) => item.BULAN === month);
    }

    if (area) {
      filtered = filtered.filter((item) => item.AREA === area);
    }
    if (region) {
      filtered = filtered.filter((item) => item.REG24 === region);
    }
    if (branch) {
      filtered = filtered.filter((item) => item.CAB === branch);
    }
    if (ps) {
      filtered = filtered.filter((item) => item.NAMA_PS === ps);
    }

    setFilteredData(filtered);
  }, [area, region, branch, ps, month]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Filter Section */}
        <div className="w-full lg:w-1/2 p-4">
          {/* Filter Form Content */}
          <div>
            <label className="mr-2">Bulan dan tahun:</label>
            <input
              type="month"
              value={startDate}
              onChange={handleStartDateChange}
              className="input input-bordered mb-4"
            />
          </div>
          <div>
            <label htmlFor="area" className="block font-semibold text-sm">
              Area:
            </label>
            <select
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="border p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Area</option>
              {areas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          {area && (
            <div>
              <label
                htmlFor="region"
                className="block font-semibold text-sm mt-3"
              >
                Region:
              </label>
              <select
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="border p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Region</option>
                {regions[area].map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
          )}

          {region && (
            <div>
              <label
                htmlFor="branch"
                className="block font-semibold text-sm mt-3"
              >
                Branch:
              </label>
              <select
                id="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="border p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Branch</option>
                {branches[region].map((branch, index) => (
                  <option key={index} value={branch}>
                    {branch}
                  </option>
                ))}
              </select>
            </div>
          )}

          {branch && (
            <div>
              <label htmlFor="ps" className="block font-semibold text-sm mt-3">
                PS:
              </label>
              <select
                id="ps"
                value={ps}
                onChange={(e) => setPs(e.target.value)}
                className="border p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select PS</option>
                {psOptions[branch]?.map((psOption, index) => (
                  <option key={index} value={psOption}>
                    {psOption}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Sales Info Card Section */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 grid grid-cols-2 gap-4 h-full">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg shadow-md">
              <i className="fas fa-bullseye text-blue-600 text-2xl"></i>
              <div className="text-right">
                <p className="text-xs text-gray-500">Target by Value</p>
                <p className="text-lg font-bold text-blue-600">IDR 467M</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg shadow-md">
              <i className="fas fa-check-circle text-green-600 text-2xl"></i>
              <div className="text-right">
                <p className="text-xs text-gray-500">Pencapaian by Value</p>
                <p className="text-lg font-bold text-green-600">IDR 468M</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg shadow-md">
              <i className="fas fa-chart-line text-yellow-600 text-2xl"></i>
              <div className="text-right">
                <p className="text-xs text-gray-500">
                  Persentase Target vs Pencapaian
                </p>
                <p className="text-lg font-bold text-yellow-600">101%</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg shadow-md">
              <i className="fas fa-tags text-red-600 text-2xl"></i>
              <div className="text-right">
                <p className="text-xs text-gray-500">Disc by Value</p>
                <p className="text-lg font-bold text-red-600">IDR 40M</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg shadow-md">
              <i className="fas fa-percentage text-indigo-600 text-2xl"></i>
              <div className="text-right">
                <p className="text-xs text-gray-500">Disc by Percentage</p>
                <p className="text-lg font-bold text-indigo-600">8.5%</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-teal-50 rounded-lg shadow-md">
              <i className="fas fa-money-bill-alt text-teal-600 text-2xl"></i>
              <div className="text-right">
                <p className="text-xs text-gray-500">Disc DA by Value</p>
                <p className="text-lg font-bold text-teal-600">IDR 15M</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Sales Update Section */}
      <div className="p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Detail Sales Update</h1>
        <div className="overflow-x-auto bg-white shadow-md rounded-md">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100 text-sm text-gray-600">
              <tr>
                <th className="px-4 py-2 border">NO</th>
                <th className="px-4 py-2 border">KODE_PPG</th>
                <th className="px-4 py-2 border">KODE_MPI</th>
                <th className="px-4 py-2 border">BULAN</th>
                <th className="px-4 py-2 border">TANGGAL</th>
                <th className="px-4 py-2 border">KODE_DISTRIBUTOR</th>
                <th className="px-4 py-2 border">KODE_OUTLET</th>
                <th className="px-4 py-2 border">KODE_PS</th>
                <th className="px-4 py-2 border">DISTRO</th>
                <th className="px-4 py-2 border">NO_FAKTUR</th>
                <th className="px-4 py-2 border">KODE_GDM_REGULER</th>
                <th className="px-4 py-2 border">DISCOUNT</th>
                <th className="px-4 py-2 border">DISC_DB</th>
                <th className="px-4 py-2 border">EKAT_SPC_GEN</th>
                <th className="px-4 py-2 border">INVOICED_QTY</th>
                <th className="px-4 py-2 border">TOTAL_HNA</th>
                <th className="px-4 py-2 border">V_disc_on_GDM</th>
                <th className="px-4 py-2 border">V_disc_off_GDM</th>
                <th className="px-4 py-2 border">NETT_VAL</th>
                <th className="px-4 py-2 border">NAMA_OUTLET</th>
                <th className="px-4 py-2 border">ITEM_NAME</th>
                <th className="px-4 py-2 border">DIV_ITEM</th>
                <th className="px-4 py-2 border">PRINCIPAL</th>
                <th className="px-4 py-2 border">P_PROGRAM</th>
                <th className="px-4 py-2 border">GUGUS</th>
                <th className="px-4 py-2 border">NET_DISC</th>
                <th className="px-4 py-2 border">WE_EA</th>
                <th className="px-4 py-2 border">REG24</th>
                <th className="px-4 py-2 border">CAB</th>
                <th className="px-4 py-2 border">NAMA_PS</th>
                <th className="px-4 py-2 border">AREA</th>
                <th className="px-4 py-2 border">DIV_PS</th>
                <th className="px-4 py-2 border">MARK_DESC</th>
                <th className="px-4 py-2 border">GOV_PRV</th>
                <th className="px-4 py-2 border">AKD_AKL</th>
                <th className="px-4 py-2 border">CAB_GDM</th>
                <th className="px-4 py-2 border">CATEGORY</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={`text-sm ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{item.KODE_PPG}</td>
                  <td className="px-4 py-2 border">{item.KODE_MPI}</td>
                  <td className="px-4 py-2 border">{item.BULAN}</td>
                  <td className="px-4 py-2 border">{item.TANGGAL}</td>
                  <td className="px-4 py-2 border">{item.KODE_DISTRIBUTOR}</td>
                  <td className="px-4 py-2 border">{item.KODE_OUTLET}</td>
                  <td className="px-4 py-2 border">{item.KODE_PS}</td>
                  <td className="px-4 py-2 border">{item.DISTRO}</td>
                  <td className="px-4 py-2 border">{item.NO_FAKTUR}</td>
                  <td className="px-4 py-2 border">{item.kode_gdm_reguler}</td>
                  <td className="px-4 py-2 border">{item.DISCOUNT}</td>
                  <td className="px-4 py-2 border">{item.DISC_DB}</td>
                  <td className="px-4 py-2 border">{item.EKAT_SPC_GEN}</td>
                  <td className="px-4 py-2 border">{item.INVOICED_QTY}</td>
                  <td className="px-4 py-2 border">{item.TOTAL_HNA}</td>
                  <td className="px-4 py-2 border">{item.V_disc_on_GDM}</td>
                  <td className="px-4 py-2 border">{item.V_disc_off_GDM}</td>
                  <td className="px-4 py-2 border">{item.NETT_VAL}</td>
                  <td className="px-4 py-2 border">{item.NAMA_OUTLET}</td>
                  <td className="px-4 py-2 border">{item.ITEM_NAME}</td>
                  <td className="px-4 py-2 border">{item.DIV_ITEM}</td>
                  <td className="px-4 py-2 border">{item.PRINCIPAL}</td>
                  <td className="px-4 py-2 border">{item.P_PROGRAM}</td>
                  <td className="px-4 py-2 border">{item.GUGUS}</td>
                  <td className="px-4 py-2 border">{item.NET_DISC}</td>
                  <td className="px-4 py-2 border">{item.WE_EA}</td>
                  <td className="px-4 py-2 border">{item.REG24}</td>
                  <td className="px-4 py-2 border">{item.CAB}</td>
                  <td className="px-4 py-2 border">{item.NAMA_PS}</td>
                  <td className="px-4 py-2 border">{item.AREA}</td>
                  <td className="px-4 py-2 border">{item.DIV_PS}</td>
                  <td className="px-4 py-2 border">{item.MARK_DESC}</td>
                  <td className="px-4 py-2 border">{item.GOV_PRV}</td>
                  <td className="px-4 py-2 border">{item.AKD_AKL}</td>
                  <td className="px-4 py-2 border">{item.CAB_GDM}</td>
                  <td className="px-4 py-2 border">{item.CATEGORY}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default SalesTarget;

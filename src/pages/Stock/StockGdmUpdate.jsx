import React, { useState } from "react";

function StockGdmUpdate() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterBySearch = (item) => {
    const searchLower = search.toLowerCase();
    return (
      item.desc.toLowerCase().includes(searchLower) ||
      item.produsen.toLowerCase().includes(searchLower) ||
      item.part_gdm.toLowerCase().includes(searchLower) ||
      item.part_mpi.toLowerCase().includes(searchLower) ||
      item.part_ppg.toLowerCase().includes(searchLower)
    );
  };
  return (
    <>
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          {/* Pencarian berdasarkan DESC */}
          <div className="flex items-center mb-4 sm:mb-0">
            <label className="mr-2">Search :</label>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              className="input input-bordered text-lg py-3 px-4 w-80"
              placeholder="description, produsen, part"
            />
          </div>
        </div>

        {/* Judul "Stock GDM Update" */}
        <h2 className="text-center text-2xl font-bold mb-4">
          STOCK GDM UPDATE
        </h2>

        <div className="overflow-x-auto bg-white shadow-md rounded-md">
          <table className="min-w-full border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr className="bg-gray-200">
                <th className="px-3 py-1 border font-bold">
                  No
                </th>
                <th className="px-3 py-1 border font-bold">
                  PART_GDM
                </th>
                <th className="px-3 py-1 border font-bold">
                  PRODUSEN
                </th>
                <th className="px-3 py-1 border font-bold">
                  KEMASAN
                </th>
                <th className="px-3 py-1 border font-bold">
                  PRODUSEN2
                </th>
                <th className="px-3 py-1 border font-bold">
                  PART_PPG
                </th>
                <th className="px-3 py-1 border font-bold">
                  PART_MPI
                </th>
                <th className="px-3 py-1 border font-bold">
                  DESC
                </th>
                <th className="px-3 py-1 border font-bold">
                  STATUS KODE
                </th>
                <th className="px-3 py-1 border font-bold">
                  STATUS BRG
                </th>
                <th className="px-3 py-1 border font-bold">
                  HNA
                </th>
                <th className="px-3 py-1 border font-bold">
                  ED &lt; 1 TH_QTY
                </th>
                <th className="px-3 py-1 border font-bold">
                  ED &gt; 1 TH_QTY
                </th>
                <th className="px-3 py-1 border font-bold">
                  TOTAL_Stock_QTY
                </th>
                <th className="px-3 py-1 border font-bold">
                  ED &lt; 1 TH_VAL
                </th>
                <th className="px-3 py-1 border font-bold">
                  ED &gt; 1 TH_VAL
                </th>
                <th className="px-3 py-1 border font-bold">
                  TOTAL_Stock_VAL
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Filter rows by DESC */}
              {[
                {
                  desc: "WRAP PPR SMS 75X75CM",
                  part_gdm: "2ASTWPS75",
                  produsen: "AHLSTROM",
                  produsen2: "AHLSTROM",
                  kemasan: "BOX",
                  part_ppg: "A60459",
                  part_mpi: "G@0212",
                  status_kode: "Active",
                  status_brg: "REGULER",
                  hna: "1.408.000",
                  ed_kurang_satu_qty: "-",
                  ed_lebih_satu_qty: "2",
                  total_stock_qty: "2",
                  ed_kurang_satu_val: "2.816.000",
                  ed_lebih_satu_val: "2.816.000",
                  total_stock_val: "2.816.000",
                },
                {
                  desc: "WRAP PPR SMS 50X50CM",
                  part_gdm: "2ASTWPS50",
                  produsen: "AHLSTROM",
                  produsen2: "AHLSTROM",
                  kemasan: "BOX",
                  part_ppg: "A60458",
                  part_mpi: "G@0211",
                  status_kode: "Active",
                  status_brg: "REGULER",
                  hna: "1.265.000",
                  ed_kurang_satu_qty: "-",
                  ed_lebih_satu_qty: "1",
                  total_stock_qty: "1",
                  ed_kurang_satu_val: "1.265.000",
                  ed_lebih_satu_val: "1.265.000",
                  total_stock_val: "1.265.000",
                },
                {
                  desc: "WRAP PPR SMS 40X40CM",
                  part_gdm: "2ASTWPS50",
                  produsen: "AHLSTROM",
                  produsen2: "AHLSTROM",
                  kemasan: "BOX",
                  part_ppg: "A60458",
                  part_mpi: "G@0211",
                  status_kode: "Active",
                  status_brg: "REGULER",
                  hna: "1.265.000",
                  ed_kurang_satu_qty: "-",
                  ed_lebih_satu_qty: "1",
                  total_stock_qty: "1",
                  ed_kurang_satu_val: "1.265.000",
                  ed_lebih_satu_val: "1.265.000",
                  total_stock_val: "1.265.000",
                },
                {
                  desc: "WRAP PPR SMS 30X30CM",
                  part_gdm: "2ASTWPS50",
                  produsen: "AHLSTROM",
                  produsen2: "AHLSTROM",
                  kemasan: "BOX",
                  part_ppg: "A60458",
                  part_mpi: "G@0211",
                  status_kode: "Active",
                  status_brg: "REGULER",
                  hna: "1.265.000",
                  ed_kurang_satu_qty: "-",
                  ed_lebih_satu_qty: "1",
                  total_stock_qty: "1",
                  ed_kurang_satu_val: "1.265.000",
                  ed_lebih_satu_val: "1.265.000",
                  total_stock_val: "1.265.000",
                },
                {
                  desc: "WRAP PPR SMS 20X20CM",
                  part_gdm: "2ASTWPS50",
                  produsen: "AHLSTROM",
                  produsen2: "AHLSTROM",
                  kemasan: "BOX",
                  part_ppg: "A60458",
                  part_mpi: "G@0211",
                  status_kode: "Active",
                  status_brg: "REGULER",
                  hna: "1.265.000",
                  ed_kurang_satu_qty: "-",
                  ed_lebih_satu_qty: "1",
                  total_stock_qty: "1",
                  ed_kurang_satu_val: "1.265.000",
                  ed_lebih_satu_val: "1.265.000",
                  total_stock_val: "1.265.000",
                },
                {
                  desc: "WRAP PPR SMS 10X10CM",
                  part_gdm: "2ASTWPS50",
                  produsen: "AHLSTROM",
                  produsen2: "AHLSTROM",
                  kemasan: "BOX",
                  part_ppg: "A60458",
                  part_mpi: "G@0211",
                  status_kode: "Active",
                  status_brg: "REGULER",
                  hna: "1.265.000",
                  ed_kurang_satu_qty: "-",
                  ed_lebih_satu_qty: "1",
                  total_stock_qty: "1",
                  ed_kurang_satu_val: "1.265.000",
                  ed_lebih_satu_val: "1.265.000",
                  total_stock_val: "1.265.000",
                },
                {
                  desc: "WRAP PPR SMS 55X55CM",
                  part_gdm: "2ASTWPS50",
                  produsen: "AHLSTROM",
                  produsen2: "AHLSTROM",
                  kemasan: "BOX",
                  part_ppg: "A60458",
                  part_mpi: "G@0211",
                  status_kode: "Active",
                  status_brg: "REGULER",
                  hna: "1.265.000",
                  ed_kurang_satu_qty: "-",
                  ed_lebih_satu_qty: "1",
                  total_stock_qty: "1",
                  ed_kurang_satu_val: "1.265.000",
                  ed_lebih_satu_val: "1.265.000",
                  total_stock_val: "1.265.000",
                },
                {
                  desc: "WRAP PPR SMS 65X65CM",
                  part_gdm: "2ASTWPS50",
                  produsen: "AHLSTROM",
                  produsen2: "AHLSTROM",
                  kemasan: "BOX",
                  part_ppg: "A60458",
                  part_mpi: "G@0211",
                  status_kode: "Active",
                  status_brg: "REGULER",
                  hna: "1.265.000",
                  ed_kurang_satu_qty: "-",
                  ed_lebih_satu_qty: "1",
                  total_stock_qty: "1",
                  ed_kurang_satu_val: "1.265.000",
                  ed_lebih_satu_val: "1.265.000",
                  total_stock_val: "1.265.000",
                },
                {
                  desc: "WRAP PPR SMS 45X45CM",
                  part_gdm: "2ASTWPS50",
                  produsen: "AHLSTROM",
                  produsen2: "AHLSTROM",
                  kemasan: "BOX",
                  part_ppg: "A60458",
                  part_mpi: "G@0211",
                  status_kode: "Active",
                  status_brg: "REGULER",
                  hna: "1.265.000",
                  ed_kurang_satu_qty: "-",
                  ed_lebih_satu_qty: "1",
                  total_stock_qty: "1",
                  ed_kurang_satu_val: "1.265.000",
                  ed_lebih_satu_val: "1.265.000",
                  total_stock_val: "1.265.000",
                },
                {
                  desc: "WRAP PPR SMS 25X25CM",
                  part_gdm: "2ASTWPS50",
                  produsen: "AHLSTROM",
                  produsen2: "AHLSTROM",
                  kemasan: "BOX",
                  part_ppg: "A60458",
                  part_mpi: "G@0211",
                  status_kode: "Active",
                  status_brg: "REGULER",
                  hna: "1.265.000",
                  ed_kurang_satu_qty: "-",
                  ed_lebih_satu_qty: "1",
                  total_stock_qty: "1",
                  ed_kurang_satu_val: "1.265.000",
                  ed_lebih_satu_val: "1.265.000",
                  total_stock_val: "1.265.000",
                },
              ]
                .filter(filterBySearch)
                .map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-3 py-1 border">
                      {index + 1}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.part_gdm}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.produsen}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.kemasan}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.produsen2}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.part_ppg}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.part_mpi}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.desc}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.status_kode}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.status_brg}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.hna}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.ed_kurang_satu_qty}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.ed_lebih_satu_qty}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.total_stock_qty}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.ed_kurang_satu_val}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.ed_lebih_satu_val}
                    </td>
                    <td className="px-3 py-1 border">
                      {item.total_stock_val}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <br />
        <div className="flex justify-center">
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn">Page 22</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StockGdmUpdate;

import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";

function ResumePage() {
  const [isOpen, setIsOpen] = useState(false); 

  const data = [
    ["AHLSTROM", "13.696.500", "5.428.125.504", "5.441.822.004"],
    ["ALKAPHARM", "40.950.000", "-", "40.950.000"],
    ["CRYOLIFE", "70.650.000", "2.081.950.000", "2.152.600.000"],
    ["EMI", "-", "-", "-"],
    ["MEDICOPLAST", "-", "-", "-"],
    ["MEDIPRO", "140.216.990", "39.170.117.840", "39.310.334.830"],
    ["MMP", "-", "15.008.246.700", "15.008.246.700"],
    ["PETERS CVT", "91.123.350", "15.358.682.000", "15.449.805.350"],
    ["PETERS GEN", "146.897.410", "44.024.491.890", "44.171.389.300"],
    ["PHARMAPLAST", "8.523.200", "10.977.386.350", "10.985.909.550"],
    ["SAFELOCK", "-", "15.184.821.250", "15.184.821.250"],
    ["STERICLIN", "-", "6.734.925.000", "6.734.925.000"],
    ["TROGE", "4.280.600", "168.808.492.700", "168.812.773.300"],
    ["TROVENSITE", "-", "17.056.803.900", "17.056.803.900"],
  ];

  return (

      <div className="p-6">
        {/* Header */}
        <h1 className="text-center text-2xl font-bold mb-4">
          STOCK GDM UPDATE (RESUME)
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full">
            {/* Table Header */}
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-center">No</th>
                <th className="border border-gray-300 px-4 py-2 text-center">PRODUSEN</th>
                <th className="border border-gray-300 px-4 py-2 text-center">ED &lt; 1 TAHUN_VAL</th>
                <th className="border border-gray-300 px-4 py-2 text-center">ED &gt; 1 TAHUN_VAL</th>
                <th className="border border-gray-300 px-4 py-2 text-center">TOTAL_Stock_VAL</th>
              </tr>
            </thead>
            {/* Table Body */}
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{row[0]}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{row[1]}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{row[2]}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">{row[3]}</td>
                </tr>
              ))}

              {/* Grand Total */}
              <tr className="bg-gray-300 font-bold">
                <td className="border border-gray-300 px-4 py-2 text-center"></td>
                <td className="border border-gray-300 px-4 py-2 text-center">GRAND TOTAL</td>
                <td className="border border-gray-300 px-4 py-2 text-center">516.338.050</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  339.834.043.134
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  340.350.381.184
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

  );
}

export default ResumePage;

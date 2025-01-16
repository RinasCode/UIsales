import React, { useState } from "react";

const data = {
  Keseluruhan: {
    TROGE: 34000000000,
    STERICLIN: 15000000000,
    AHLSTROM: 10000000000,
    ALKAPHARM : 20000000000,
    CRYOLIFE: 23000000000,
    PETERS_CVT: 12000000000,
    PETERS: 32000000000,
    PHARMAPLAST: 21000000000,
    MEDIPRO: 17000000000,
    PROGRAM1: 13000000000,
    MMP : 10000000000,
    SFLMEDICAL : 20000000000,
    EMI : 30000000000,
  },
  MPI: {
    TROGE: 34000000000,
    STERICLIN: 15000000000,
    AHLSTROM: 10000000000,
    ALKAPHARM : 20000000000,
    CRYOLIFE: 23000000000,
    PETERS_CVT: 12000000000,
    PETERS: 32000000000,
    PHARMAPLAST: 21000000000,
    MEDIPRO: 17000000000,
    PROGRAM1: 13000000000,
    MMP : 10000000000,
    SFLMEDICAL : 20000000000,
    EMI : 30000000000,
  },
  PPG: {
    TROGE: 34000000000,
    STERICLIN: 15000000000,
    AHLSTROM: 10000000000,
    ALKAPHARM : 20000000000,
    CRYOLIFE: 23000000000,
    PETERS_CVT: 12000000000,
    PETERS: 32000000000,
    PHARMAPLAST: 21000000000,
    MEDIPRO: 17000000000,
    PROGRAM1: 13000000000,
    MMP : 10000000000,
    SFLMEDICAL : 20000000000,
    EMI : 30000000000,
  },
};

function SalesTarget() {
  const [targets, setTargets] = useState(data);
  const [editMode, setEditMode] = useState({
    Keseluruhan: false,
    MPI: false,
    PPG: false,
  });
  const [tempTargets, setTempTargets] = useState({
    Keseluruhan: { ...data.Keseluruhan },
    MPI: { ...data.MPI },
    PPG: { ...data.PPG },
  });

  const handleEdit = (category) => {
    setEditMode((prev) => ({ ...prev, [category]: true }));
    setTempTargets((prev) => ({
      ...prev,
      [category]: { ...targets[category] },
    }));
  };

  const handleSave = (category) => {
    setTargets((prev) => ({
      ...prev,
      [category]: { ...tempTargets[category] },
    }));
    setEditMode((prev) => ({ ...prev, [category]: false }));
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const calculateTotal = (category) => {
    return Object.values(targets[category]).reduce(
      (sum, value) => sum + parseInt(value),
      0
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
        Sales Target
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.keys(targets).map((category) => (
          <div
            key={category}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Target {category}
            </h2>
            <div className="space-y-4">
              {Object.entries(targets[category]).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">{key}</span>
                  {editMode[category] ? (
                    <input
                      type="text"
                      value={tempTargets[category]?.[key] || ""}
                      onChange={(e) =>
                        setTempTargets((prev) => ({
                          ...prev,
                          [category]: {
                            ...prev[category],
                            [key]: e.target.value,
                          },
                        }))
                      }
                      className="border rounded-md p-2 w-2/3"
                    />
                  ) : (
                    <span className="text-gray-800 font-bold">
                      {formatCurrency(value)}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 border-t pt-4">
              <p className="text-lg font-bold text-gray-700">
                Total Target:{" "}
                <span className="text-green-500">
                  {formatCurrency(calculateTotal(category))}
                </span>
              </p>
            </div>
            <div className="mt-4 text-center">
              <button
                onClick={() =>
                  editMode[category] ? handleSave(category) : handleEdit(category)
                }
                className={`px-6 py-2 rounded-lg text-white ${
                  editMode[category]
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } transition-colors`}
              >
                {editMode[category] ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesTarget;

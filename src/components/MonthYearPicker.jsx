import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MonthYearPicker = ({ setMonth }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => {
    setSelectedDate(date);
    const monthYear = `${date.getMonth() + 1}-${date.getFullYear()}`;
    setMonth(monthYear); 
  };

  return (
    <div className="w-full">
      <label htmlFor="monthYear" className="block font-semibold text-sm ml-1">
        Pilih Bulan dan Tahun:
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="MM/yyyy"
        showMonthYearPicker
        className="ml-1 mb-2 border p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        id="monthYear"
      />
    </div>
  );
};

export default MonthYearPicker;

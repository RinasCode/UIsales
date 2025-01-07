import React from "react";
import Sidebar from "./Sidebar"; // Pastikan Sidebar ada di folder components

const BaseLayout = ({ children }) => {
  return (
    <div >
      {/* Sidebar di atas */}
        <Sidebar />
      {/* Konten utama di bawah */}
        {children}

    </div>
  );
};

export default BaseLayout;

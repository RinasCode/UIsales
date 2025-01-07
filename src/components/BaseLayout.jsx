import React from "react";
import Sidebar from "./Sidebar"; 

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

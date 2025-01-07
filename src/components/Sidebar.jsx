import React, { useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle sidebar
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State untuk toggle dropdown menu Dashboard
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State untuk toggle user menu

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar state
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen); // Toggle user menu state
  };

  const handleLogout = () => {
    alert("Logout berhasil!"); // Ganti dengan logika logout-mu
    window.location.href = "/"; // Redirect setelah logout
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Menutup sidebar ketika menu diklik
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-0"
        } overflow-hidden`}
      >
        <h1
          className="text-xl font-bold p-4 cursor-pointer"
          onClick={() => setIsOpen(false)} // Menutup sidebar ketika judul diklik
        >
          Global Dispomedika
        </h1>
        <ul className="mt-4 space-y-2 px-4">
          {/* Dashboard Menu */}
          <li>
            <button
              onClick={toggleDropdown}
              className="flex justify-between w-full p-2 rounded hover:bg-gray-700"
            >
              Stock
              <span>{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {/* Dropdown Items */}
            {isDropdownOpen && (
              <ul className="mt-2 ml-4 space-y-2">
                <li>
                  <a
                    href="/stockdetail"
                    onClick={handleLinkClick}
                    className="block p-2 rounded hover:bg-gray-700"
                  >
                    Stock Detail Cabang
                  </a>
                </li>
                <li>
                  <a
                    href="/stockgdm"
                    onClick={handleLinkClick}
                    className="block p-2 rounded hover:bg-gray-700"
                  >
                    Stock GDM Update
                  </a>
                </li>
                <li>
                  <a
                    href="/resume"
                    onClick={handleLinkClick}
                    className="block p-2 rounded hover:bg-gray-700"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Menu Item Stok Detail Cabang */}
          <li>
            <a
              href="/sales"
              onClick={handleLinkClick} // Menutup sidebar ketika diklik
              className="block p-2 rounded hover:bg-gray-700"
            >
              Sales
            </a>
          </li>
          <li>
            <a
              href="/sku"
              onClick={handleLinkClick} // Menutup sidebar ketika diklik
              className="block p-2 rounded hover:bg-gray-700"
            >
              SKU
            </a>
          </li>
          <li>
            <a
              href="/settings"
              onClick={handleLinkClick} // Menutup sidebar ketika diklik
              className="block p-2 rounded hover:bg-gray-700"
            >
              Absensi
            </a>
          </li>
          <li>
            <a
              href="/karyawan"
              onClick={handleLinkClick} // Menutup sidebar ketika diklik
              className="block p-2 rounded hover:bg-gray-700"
            >
              Karyawan
            </a>
          </li>
          <li>
            <a
              href="/user"
              onClick={handleLinkClick} // Menutup sidebar ketika diklik
              className="block p-2 rounded hover:bg-gray-700"
            >
              User
            </a>
          </li>
        </ul>
      </div>

      {/* Navbar */}
      <div className="flex-1">
        <div className="flex justify-between items-center bg-white shadow p-4">
          <button
            style={{
              backgroundColor: "#CD583D",
              hover: { backgroundColor: "#808283" },
            }}
            className="text-white px-4 py-2 rounded"
            onClick={toggleSidebar}
          >
            {isOpen ? "Close Menu" : "Menu"}
          </button>

          <img
            src={logo}
            alt="Global Dispomedika Logo"
            className="w-auto h-12"
          />

          {/* User Menu */}
          <div className="relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleUserMenu}
            >
              <img
                src={user}
                alt="User Avatar"
                className="rounded-full w-10 h-10"
              />
              <span className="ml-2">David Jody Patrick Pello</span>
            </div>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 transition-all duration-300 ease-in-out rounded-md shadow-md"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

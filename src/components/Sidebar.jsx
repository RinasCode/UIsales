import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import Swal from "sweetalert2";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpenStock, setIsDropdownOpenStock] = useState(false);
  const [isDropdownOpenAbsensi, setIsDropdownOpenAbsensi] = useState(false);
  const [isDropdownOpenSales, setIsDropdownOpenSales] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");

  const roles = {
    PS: "Product Specialist",
    DM: "District Manager",
    SM: "Sales Manager",
    GM: "General Manager",
    DR: "Direktur",
    ADM: "Admin",
  };

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole && roles[storedRole]) {
      setUserName(roles[storedRole]);
      setRole(storedRole);
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownStock = () => {
    setIsDropdownOpenStock(!isDropdownOpenStock);
  };

  const toggleDropdownAbsensi = () => {
    setIsDropdownOpenAbsensi(!isDropdownOpenAbsensi);
  };

  const toggleDropdownSales = () => {
    setIsDropdownOpenSales(!isDropdownOpenSales);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire(
          "Logged out!",
          "You have been logged out successfully.",
          "success"
        ).then(() => {
          window.location.href = "/";
        });
      }
    });
  };

  const getDashboardLink = () => {
    switch (role) {
      case "ADM":
      case "DR":
        return "/dashboard_dirut";
      case "GM":
        return "/dashboard_gm";
      case "SM":
        return "/dashboard_sm";
      case "DM":
        return "/dashboard_dm";
      case "PS":
        return "/dashboard_ps";
      default:
        return "/";
    }
  };

  const renderMenu = () => {
    switch (role) {
      case "ADM":
      case "DR":
        return (
          <>
            <li>
              <a
                href={getDashboardLink()}
                className="block p-2 rounded hover:bg-gray-700"
              >
                Dashboard
              </a>
            </li>
             {/* Menu Sales */}
            <li>
              <button
                onClick={toggleDropdownSales}
                className="flex justify-between w-full p-2 rounded hover:bg-gray-700"
              >
                Sales
                <span>{isDropdownOpenSales ? "▲" : "▼"}</span>
              </button>
              {isDropdownOpenSales && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <a
                      href="/sales"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Upload Sales
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sales_update"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Sales Update
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sales_update_ps"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Sales History
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resume"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Sales Target
                    </a>
                  </li>
                </ul>
              )}
            </li>
            {/* Menu Stock */}
            <li>
              <button
                onClick={toggleDropdownStock}
                className="flex justify-between w-full p-2 rounded hover:bg-gray-700"
              >
                Stock
                <span>{isDropdownOpenStock ? "▲" : "▼"}</span>
              </button>
              {isDropdownOpenStock && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <a
                      href="/stockdetail"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Upload Stock
                    </a>
                  </li>
                  <li>
                    <a
                      href="/stockdetail"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Stock Detail Cabang
                    </a>
                  </li>
                  <li>
                    <a
                      href="/stockgdm"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Stock GDM Update
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resume"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/sku" className="block p-2 rounded hover:bg-gray-700">
                SKU
              </a>
            </li>
            {/* Menu Absensi */}
            <li>
              <button
                onClick={toggleDropdownAbsensi}
                className="flex justify-between w-full p-2 rounded hover:bg-gray-700"
              >
                Absensi
                <span>{isDropdownOpenAbsensi ? "▲" : "▼"}</span>
              </button>
              {isDropdownOpenAbsensi && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <a
                      href="/absensi"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Absensi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/absensi_ps"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Absensi PS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kunjungan"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Kunjungan
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kunjungan_ps"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Kunjungan PS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/detail_kunjungan"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Detail Kunjungan
                    </a>
                  </li>
                  <li>
                    <a
                      href="/daftar_pe"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Kegiatan
                    </a>
                  </li>
                  <li>
                    <a
                      href="/daftar_pe_ps"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Kegiatan PS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/daftar_outlet"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Daftar Outlet
                    </a>
                  </li>
                  <li>
                    <a
                      href="/daftar_ps"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Daftar PS
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="/karyawan"
                className="block p-2 rounded hover:bg-gray-700"
              >
                Karyawan
              </a>
            </li>
            <li>
              <a href="/user" className="block p-2 rounded hover:bg-gray-700">
                User
              </a>
            </li>
          </>
        );

      case "GM":
      case "SM":
      case "DM":
        return (
          <>
            <li>
              <a
                href={getDashboardLink()}
                className="block p-2 rounded hover:bg-gray-700"
              >
                Dashboard
              </a>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                className="flex justify-between w-full p-2 rounded hover:bg-gray-700"
              >
                Stock
                <span>{isDropdownOpen ? "▲" : "▼"}</span>
              </button>
              {isDropdownOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <a
                      href="/stockdetail"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Stock Detail Cabang
                    </a>
                  </li>
                  <li>
                    <a
                      href="/stockgdm"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Stock GDM Update
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resume"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/sales" className="block p-2 rounded hover:bg-gray-700">
                Sales
              </a>
            </li>
            <li>
              <a href="/sku" className="block p-2 rounded hover:bg-gray-700">
                SKU
              </a>
            </li>
          </>
        );

      case "PS":
        return (
          <>
            <li>
              <a
                href={getDashboardLink()}
                className="block p-2 rounded hover:bg-gray-700"
              >
                Dashboard
              </a>
            </li>
                         {/* Menu Sales */}
                         <li>
              <button
                onClick={toggleDropdownSales}
                className="flex justify-between w-full p-2 rounded hover:bg-gray-700"
              >
                Sales
                <span>{isDropdownOpenSales ? "▲" : "▼"}</span>
              </button>
              {isDropdownOpenSales && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <a
                      href="/sales"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Upload Sales
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sales_update_ps"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Sales Update
                    </a>
                  </li>
                  <li>
                    <a
                      href="/sales_update_ps"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Sales History
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resume"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Sales Target
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={toggleDropdownStock}
                className="flex justify-between w-full p-2 rounded hover:bg-gray-700"
              >
                Stock
                <span>{isDropdownOpenStock ? "▲" : "▼"}</span>
              </button>
              {isDropdownOpenStock && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <a
                      href="/stockdetail"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Stock Detail Cabang
                    </a>
                  </li>
                  <li>
                    <a
                      href="/stockgdm"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Stock GDM Update
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resume"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/sku" className="block p-2 rounded hover:bg-gray-700">
                SKU
              </a>
            </li>
            <li>
              <button
                onClick={toggleDropdownAbsensi}
                className="flex justify-between w-full p-2 rounded hover:bg-gray-700"
              >
                Absensi
                <span>{isDropdownOpenAbsensi ? "▲" : "▼"}</span>
              </button>
              {isDropdownOpenAbsensi && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <a
                      href="/absensi_ps"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Absensi PS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kunjungan_ps"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Kunjungan PS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/daftar_pe_ps"
                      className="block p-2 rounded hover:bg-gray-700"
                    >
                      Kegiatan PS
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-0"
        } overflow-auto`}
      >
        <h1
          className="text-xl font-bold p-4 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Global Dispomedika
        </h1>
        <ul className="mt-4 space-y-2 px-4">{renderMenu()}</ul>
      </div>

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
              <span className="ml-2">{userName || "User"}</span>
            </div>
            {isUserMenuOpen && (
              <ul className="absolute right-0 bg-white text-black shadow rounded mt-2 w-40">
                <li
                  className="hover:bg-gray-200 px-4 py-2 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
 
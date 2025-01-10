import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const validUsers = [
      {
        username: "ps",
        password: "123",
        role: "PS",
        nama: "Product Specialist",
      },
      { username: "dm", password: "123", role: "DM", nama: "District Manager" },
      { username: "sm", password: "123", role: "SM", nama: "Sales Manager" },
      {
        username: "ms",
        password: "123",
        role: "MS",
        nama: "Marketing Specialist",
      },
      { username: "gm", password: "123", role: "GM", nama: "General Manager" },
      { username: "direktur", password: "123", role: "DR", nama: "Direktur" },
      { username: "admin", password: "123", role: "ADM", nama: "Admin" },
    ];

    const user = validUsers.find(
      (u) => u.username === username && u.password === password
    );
    console.log("User found:", user);

    if (user) {
      localStorage.setItem("role", user.role);
      Swal.fire({
        title: `Welcome, ${user.nama}!`,
        text: "Login successful!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        if (user.role === "ADM" || user.role === "DR") {
          navigate("/dashboard_dirut");
        } else if (user.role === "GM") {
          navigate("/dashboard_gm");
        } else if (user.role === "SM") {
          navigate("/dashboard_sm");
        } else if (user.role === "DM") {
          navigate("/dashboard_dm");
        } else if (user.role === "PS") {
          navigate("/dashboard_ps");
        } else {
          navigate("/");
        }
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Invalid username or password.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role === "ADM" || role === "DR") {
      navigate("/dashboard_dirut");
    } else if (role === "GM") {
      navigate("/dashboard_gm");
    } else if (role === "SM") {
      navigate("/dashboard_sm");
    } else if (role === "DM") {
      navigate("/dashboard_dm");
    } else if (role === "PS") {
      navigate("/dashboard_ps");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div
        className="hero bg-base-200 min-h-screen"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dcisb7ayn/image/upload/v1736514104/medical-banner-with-doctor-wearing-goggles_rnjyze.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-black">Global Dispomedika</h1>
            <p className="py-6  text-black">
              Provide the highest quality medical device with the most complete
              product range and excellence services through continuous
              competency improvement, caring of health as well
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Global Dispomedika</h1>
            <p className="py-6">
              Provide the highest quality medical device with the most complete
              product range and excellence services through continuous
              competency improvement, caring of health as well
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="username"
                  placeholder="username"
                  className="input input-bordered"
                  required
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
                />
              </div>
              <div className="form-control mt-6">
                <Link to="/resume" className="btn btn-primary">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

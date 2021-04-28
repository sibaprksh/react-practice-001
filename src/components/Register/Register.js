import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

export default function Register() {
  return (
    <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-6 offset-sm-3 mt-5">
    <div className="card">
      <div className="card-header">
        <h3> Sign Up !! </h3>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}

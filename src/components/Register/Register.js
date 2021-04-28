import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { _set } from "../../utils";

export default function Register() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: {
      first: "",
      last: ""
    }
  });

  const [isSubmitted, setSubmitted] = useState(false);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  function handleChange(e) {
    const {
      target: { name, value }
    } = e;

    setInputs(inputs => ({ ..._set(inputs, name, value) }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);

    if (
      inputs.email &&
      inputs.name.first &&
      inputs.name.last &&
      inputs.password
    ) {
      console.log(inputs);
    }
  }

  const { name, email, password } = inputs;

  return (
    <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-6 offset-sm-3 mt-5">
      <div className="card">
        <div className="card-header">
          <h3> Sign Up !! </h3>
        </div>
        <div className="card-body">
          <form name="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                name="name.first"
                value={name.first}
                onChange={handleChange}
                className={
                  "form-control" +
                  (isSubmitted && !name.first ? " is-invalid" : "")
                }
              />
              {isSubmitted && !name.first && (
                <div className="invalid-feedback">First name is required</div>
              )}
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                name="name.last"
                value={name.last}
                onChange={handleChange}
                className={
                  "form-control" +
                  (isSubmitted && !name.last ? " is-invalid" : "")
                }
              />
              {isSubmitted && !name.last && (
                <div className="invalid-feedback">Last name is required</div>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
                className={
                  "form-control" + (isSubmitted && !email ? " is-invalid" : "")
                }
              />
              {isSubmitted && !email && (
                <div className="invalid-feedback">Email is required</div>
              )}
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={handleChange}
                className={
                  "form-control" +
                  (isSubmitted && !password ? " is-invalid" : "")
                }
              />
              {isSubmitted && !password && (
                <div className="invalid-feedback">Password is required</div>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              {loading && (
                <span className="spinner-border spinner-border-sm mr-1" />
              )}
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

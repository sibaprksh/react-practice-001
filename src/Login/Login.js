import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const loggingIn = false;

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const {
      target: { name, value }
    } = e;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit() {
    setSubmitted(true);
    alert("submited");
  }

  const { username, password } = inputs;
  return (
    <div>
      <h1> Login !! </h1>
      <form name="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !username ? " is-invalid" : "")
            }
          />
          {submitted && !username && (
            <div className="invalid-feedback">Username is required</div>
          )}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={
              "form-control" + (submitted && !password ? " is-invalid" : "")
            }
          />
          {submitted && !password && (
            <div className="invalid-feedback">Password is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {loggingIn && (
              <span className="spinner-border spinner-border-sm mr-1" />
            )}
            Login
          </button>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </div>
      </form>
    </div>
  );
}

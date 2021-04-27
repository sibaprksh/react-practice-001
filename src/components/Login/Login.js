import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { alertActions } from "../../actions";
//import { history } from "../../history";

export default function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const loading = false;

  const [isSubmitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const {
      target: { name, value }
    } = e;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    //setSubmitted(true);

    debugger;

    localStorage.setItem("user", JSON.stringify(inputs));

    // get return url from location state or default to home page
    const { from } = location.state || { from: { pathname: "/" } };
    history.push(from);

    //dispatch(alertActions.success("Testing"));
  }

  const { username, password } = inputs;
  return (
    <div className="jumbotron">
      <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
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
                "form-control" + (isSubmitted && !username ? " is-invalid" : "")
              }
            />
            {isSubmitted && !username && (
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
                "form-control" + (isSubmitted && !password ? " is-invalid" : "")
              }
            />
            {isSubmitted && !password && (
              <div className="invalid-feedback">Password is required</div>
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              {loading && (
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
    </div>
  );
}
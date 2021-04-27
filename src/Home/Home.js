import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1> Home !! </h1>
      <p>
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

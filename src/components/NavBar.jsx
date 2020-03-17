import React from "react";
import logo from "../assets/weatherLogo.svg";
function Navbar({ setquery, query }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-5">
      <a className="navbar-brand" href="/#" onClick={e => e.preventDefault()}>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top mx-2"
          alt=""
        />
        Weather
      </a>
      <span className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          value={query}
          onChange={setquery}
          placeholder="Search"
          aria-label="Search"
        />
      </span>
    </nav>
  );
}

export default Navbar;

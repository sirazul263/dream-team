import React from "react";
import "./Header.css";
import football from "../../image/download.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFutbol } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://google.com">
            <img src={football} alt="" />
            {/* <FontAwesomeIcon icon={faFutbol} /> */}
          </a>
          <form action="" className="d-flex">
            <input
              id="search-box"
              className="form-control me-2"
              type="search"
              placeholder="Search Player"
              aria-label="Search"
            />
            <button
              className="btn search-btn btn-outline-success"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul id="nav-item" className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://google.com"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://google.com"
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://google.com"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

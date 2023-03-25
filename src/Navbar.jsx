import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../node_modules/bootstrap/js/dist/dropdown";
import $ from "jquery";

export default function Navbar() {
  function closeButton() {
    $("#navbarResponsive")[0].classList.toggle("d-block");
  }
  return (
    <nav
      className="navbar navbar-expand-lg bg-Nav text-uppercase fixed-top"
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to={""}>
          Start React
        </Link>
        <button
          onClick={closeButton}
          id="dropNav"
          className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse w-100 justify-content-end"
          id="navbarResponsive"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger active"
                    : "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                }
                to="portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger active"
                    : "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                }
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger active"
                    : "nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                }
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

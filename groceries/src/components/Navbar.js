import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {NavDropdown} from 'react-bootstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Sidebar from "./Sidebar";

function Navbar() {
  let colors = {
    color: "#17a2b8",
  };
  let bcolors = {
    backgroundColor: "#17a2b8",
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Sidebar />
        <a className="navbar-brand" href="#">
          Grocery <b style={colors}>Store</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify content-start"
          id="navbarCollapse"
        >
          <div className="navbar-nav">
          <Link to="/home" className="nav-item nav-link">
              Home
            </Link>
            <a href="/categoryDashboard" className="nav-item nav-link">
              Category
            </a>
            <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
               
                  <NavDropdown.Item href="/customerDashboard">CustomerDashboard</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/AdminDashboard">Admin dashboard </NavDropdown.Item>
                  </NavDropdown>
            
            <a href="/order" className="nav-item nav-link active">OrderHistory</a>
            <a className="nav-link disabled" href="/Cart">
              Cart
            </a>
            <Link to="/contact" className="nav-item nav-link">
              ContactUs
            </Link>
          </div>
          <Nav>
        <NavItem className="ml-5">
          <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/registration">Sign Up</NavLink>
        </NavItem>
        </Nav>
          <form className="navbar-form form-inline"></form>

          </div>
      </nav>

      <div className="search-box-wrapper">
        <div className="input-group search-box search-box">
          <input
            type="text"
            id="search"
            class="form-control"
            placeholder="Search products.."
          />
          <button
            className="u-margin-left-20 btn btn-outline-info my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

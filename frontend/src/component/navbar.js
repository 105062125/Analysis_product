import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo_main.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} alt="react-router-breadcrumb" width="30" height="30" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Timer">
              Timer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/JSTimer">
              JSTimer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/name">
              Name
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/GetDbUser">
              GetDbUser
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/function_display"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              function display
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/function_display/func1">
                Func1
              </Link>
              <Link className="dropdown-item" to="/function_display/func2">
                Func2
              </Link>
              
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
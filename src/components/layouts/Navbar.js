import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, heading }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {heading}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  heading: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  heading: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;

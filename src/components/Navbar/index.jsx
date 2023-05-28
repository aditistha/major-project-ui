import { Link, NavLink } from "react-router-dom";
import { NavbarContainerMain } from "./Navbar.styled";
import styled from "styled-components";


const Navbar = () => {
  return (
    <>
      <NavbarContainerMain>
        <div className="nav-bar-wrapper">
          <ul className="d-flex list-unstyled">
            <li className="red mx-2">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="btn btn-primary">Contact</li>
          </ul>
        </div>
      </NavbarContainerMain>
    </>
  );
};

export default Navbar;

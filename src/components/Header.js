import { React, useState } from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = ({ currentUser, logout }) => {
  const [displayNav, setDisplayNav] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    logout();
    navigate("/");
  };
  return (
    <header style={{ backgroundColor: "#F57417" }}>
      <Nav
        role="navigation"
        aria-label="navigation"
        className="d-md-flex flex-column flex-md-row justify-content-around align-items-center gap-5 w-100 p-3"
        style={{ display: displayNav ? "flex" : "none" }}
      >
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/courtindex">View Courts</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/aboutus">About Us</NavLink>
        </NavItem>
        {currentUser && (
          <>
            <NavItem>
              <NavLink to="/mycourts">My Courts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/courtnew">Create Courts</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleClick} to="/">
                Log Out
              </NavLink>
            </NavItem>
          </>
        )}
        {!currentUser && (
          <>
            <NavItem>
              <NavLink to="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">Log In</NavLink>
            </NavItem>
          </>
        )}
      </Nav>

      <nav id="hamburger" className="p-3 d-md-none">
        {" "}
        <IoMenu
          onClick={() => setDisplayNav((prev) => !prev)}
          className="fs-1 d-block ms-auto"
        />
      </nav>
    </header>
  );
};

export default Header;

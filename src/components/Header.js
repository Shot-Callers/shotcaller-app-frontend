import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink, useNavigate } from 'react-router-dom'


const Header = ({currentUser, logout}) => {
  const navigate = useNavigate()
  const handleClick = (e)  => {
    logout()
    navigate("/")
  }
  return (
    <header style={{backgroundColor: "#F57417"}}>
      <Nav
        role="navigation"
        aria-label="navigation"
        className="d-flex justify-content-around align-items-center gap-5 w-100 p-3"
      >
        <NavItem>
          <NavLink  to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  to="/courtindex">
            View Courts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  to="/aboutus">
            About Us
          </NavLink>
        </NavItem>
        {currentUser && (
          <>
            <NavItem>
              <NavLink to="/mycourts">
                My Courts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/courtnew">
                Create Courts
              </NavLink>
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
              <NavLink to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">
                Log In
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </header>
  );
}

export default Header
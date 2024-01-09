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
    <header className='bg-secondary'>
      <Nav
        role="navigation"
        aria-label="navigation"
        className="d-flex justify-content-around align-items-center gap-5 w-100 p-3"
      >
        <NavItem>
          <NavLink className="text-dark" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="text-dark" to="/courtindex">
            View Courts
          </NavLink>
        </NavItem>
        {currentUser && (
          <>
            <NavItem>
              <NavLink className="text-dark" to="/mycourts">
                My Courts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" to="/courtnew">
                Create Courts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleClick} className="text-dark" to="#">
                Log Out
              </NavLink>
            </NavItem>
          </>
        )}
        {!currentUser && (
          <>
            <NavItem>
              <NavLink className="text-dark" to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-dark" to="/login">
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
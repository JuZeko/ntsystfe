import React, { Component, useContext } from 'react';
import { Navbar, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { UserContext } from '../../Context/UserContext';

export function NavMenu() {

  const { user, setUser } = useContext(UserContext)
  console.log(user)
  function handleLogout() {
    const profile = {
      name: '',
      email: '',
      role: ''
    }
    setUser(profile)

  }
  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
        <ul className="navbar-nav flex-grow">
          <NavItem>
            <NavLink tag={Link} className="text-dark" to="/">Namai</NavLink>
          </NavItem>
          {user.name.length !== 0 ?
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/viewobjects"> Objektai </NavLink>
            </NavItem>
            :
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/register"> Registruotis</NavLink>
            </NavItem>}
          {user.role === 'Admin' ?
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/admin/category">Kategorijos</NavLink>
            </NavItem>
            : <></>}
          {user.name.length !== 0 ?
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/agreements">Sutartys</NavLink>
            </NavItem>
            : <></>}
          {user.name.length !== 0 ?
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/profile">Profilis</NavLink>
            </NavItem>
            : <></>}
          {user.name.length !== 0 ?
            <NavItem>
              <NavLink tag={Link} type="button" to="/" className="text-dark" onClick={() => handleLogout()}>Atsijungti</NavLink>
            </NavItem>
            :
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/login"> Prisijungti</NavLink>
            </NavItem>}

        </ul>
      </Navbar>
    </header>
  );

}

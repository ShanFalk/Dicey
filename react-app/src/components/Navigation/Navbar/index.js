import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../../auth/LogoutButton';
import Search from '../Search';
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className='nav'>
      <Link className='nav-logo' to='/'>
        <h2>Dicey</h2>
      </Link>
      <Search />
      <ul>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li>
        <NavLink to='/brew' exact={true} activeClassName='active'>
            Create Brew
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

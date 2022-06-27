import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../../auth/LogoutButton';
import Search from '../Search';
import "./navbar.css";

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionButton;
  if (sessionUser) {
    sessionButton = (
      <LogoutButton />
    );
  } else {
    sessionButton = (
      <button className='button purple'>
        Log In
      </button>
    );
  }

  return (
    <nav className='nav'>
      <Link className='nav-logo' to='/'>
        <h2>Dicey</h2>
      </Link>
      <Search />
      { sessionButton }
      <Link className='button purple' to='/shopping-cart'>
        <i className="fa-solid fa-cart-shopping"></i>
      </Link>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../../auth/LogoutButton';
import Search from '../Search';
import "./navbar.css";
import LoginFormModal from '../../LoginForms';
import SignupFormModal from '../../SignupForms';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionButton;
  if (sessionUser) {
    sessionButton = (
      <>
        <Link className='button purple' to={`/profile/${sessionUser.id}`} >
          <i className="fa-solid fa-user"></i>
        </Link>
        <LogoutButton />
      </>
    );
  } else {
    sessionButton = (
      <>
      <LoginFormModal />
      <SignupFormModal />
      </>
    );
  }

  return (
    <nav className='nav'>
      <Link className='nav-logo cardo' to='/'>
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

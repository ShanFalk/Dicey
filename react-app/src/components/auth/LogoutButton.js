import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import {removeRecommended} from '../../store/recommend'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(removeRecommended())
    await dispatch(logout());
  };

  return <button className='button purple' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;

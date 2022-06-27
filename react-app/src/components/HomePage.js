import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrews} from '../store/brew';
import { NavLink } from 'react-router-dom';
import BrewCard from './BrewCard';


function HomePage() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllBrews());
    }, [dispatch]);

    const brews = useSelector(state => state.brews?.brews)

    if (!brews) return null;
    
  return (
    <div className='home-page'>

    <div className='room-section'>
      {brews.map((brew) => {
      return (
        <div className='room-card-link'>
         <NavLink   to={`/brew/${brew.id}`} brew={brew} className="room-nav-link">
        <BrewCard key={brew.id} brew={brew} />
        </NavLink>
        </div>
      );
    })}
    </div>
    ))
</div>
  )
}

export default HomePage

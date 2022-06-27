import FeaturedBrewsCollection from "./FeaturedBrewsCollection";
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrews} from '../../../store/brew';
import { NavLink } from 'react-router-dom';


function MainPageDisplay () {

    const brews = Object.values(useSelector(state => state.brews))

    if (!brews) return null;
    return (
        <div>
        <h2>This is the BrewsColComponents - MainPageDisplay Component</h2>
        <div className='home-page'>

    <div className='room-section'>
      {brews.map((brew) => {
      return (
        <div className='room-card-link'>
         <NavLink   to={`/brew/${brew.id}`} brew={brew} className="room-nav-link">
        <FeaturedBrewsCollection key={brew.id} brew={brew} />
        </NavLink>
        </div>
      );
    })}
    </div>
</div>
        </div>
    )
}

export default MainPageDisplay;

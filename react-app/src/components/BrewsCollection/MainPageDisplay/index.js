import FeaturedBrewsCollection from "./FeaturedBrewsCollection";
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrews} from '../../../store/brew';
import { Link } from 'react-router-dom';
import FilterBar from "./FilterBar";


function MainPageDisplay () {
    const [filter, setFilter] = useState(false)

    const brews = Object.values(useSelector(state => state.brews))

    const firstHalf = brews.slice(0, Math.ceil(brews.length / 2))
    const secondHalf = brews.slice(-(Math.ceil(brews.length / 2)))

    if (!brews) return null;
    return (
      <div>
      <FilterBar brews={brews} setFilter={() => setFilter(true)}/>
      <h2 className="bottom-border">Featured Brews</h2>
      <div className='container flow'>
      <div className='scroller'>
        {firstHalf.map((brew) => {
          return (
          <div className='brew-card-link' key={brew.id}>
            <Link to={`/brews/${brew.id}`} brew={brew} className="room-nav-link">
              <FeaturedBrewsCollection key={brew.id} brew={brew} />
            </Link>
          </div>
      );
    })}
    </div>
</div>
<div className='container flow'>
      <div className='scroller'>
        {secondHalf.map((brew) => {
          return (
          <div className='brew-card-link' key={brew.id}>
            <Link to={`/brews/${brew.id}`} brew={brew} className="room-nav-link">
              <FeaturedBrewsCollection key={brew.id} brew={brew} />
            </Link>
          </div>
      );
    })}
    </div>
</div>
        </div>
    )
}

export default MainPageDisplay;

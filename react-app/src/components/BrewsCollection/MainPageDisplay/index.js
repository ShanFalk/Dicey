import FeaturedBrewsCollection from "./FeaturedBrewsCollection";
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrews} from '../../../store/brew';
import { Link } from 'react-router-dom';
import FilterBar from "./FilterBar";


function MainPageDisplay () {
    const [filter, setFilter] = useState(false)

    const brews = Object.values(useSelector(state => state.brews))

    if (!brews) return null;
    return (
      <div>
      <h2>This is the BrewsColComponents - MainPageDisplay Component</h2>
      <FilterBar brews={brews} setFilter={() => setFilter(true)}/>
      <div className='container flow'>
      <div className='scroller'>
        {brews.map((brew) => {
          return (
          <div className='brew-card-link' key={brew.id}>
<<<<<<< HEAD
            <NavLink   to={`/brews/${brew.id}`} brew={brew} className="room-nav-link">
=======
            <Link to={`/brew/${brew.id}`} brew={brew} className="room-nav-link">
>>>>>>> main
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

import FeaturedBrewsCollection from "./FeaturedBrewsCollection";
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrews} from '../../../store/brew';
import { Link } from 'react-router-dom';
import { recommendBrews } from "../../../store/recommend";
import FilterBar from "./FilterBar";


function MainPageDisplay () {
    const [filter, setFilter] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    let content = null
    

    useEffect(() => {
      if(user) dispatch(recommendBrews(user?.id))
    }, [dispatch])

    const brews = Object.values(useSelector(state => state.brews))
    const recommend = Object.values(useSelector(state => state.recommended))

    const firstHalf = brews.slice(0, Math.ceil(brews.length / 2))
    const secondHalf = brews.slice(-(Math.ceil(brews.length / 2)))

    if (!brews || !recommend) return null;

    let title = recommend.pop()

    if(recommend.length > 0) {
      content = (
        <>
        <h2 className="bottom-border">Because you liked {title}</h2>
        <div className='container flow'>
        <div className='scroller'>
        {recommend.map((brew) => {
          if(typeof brew == "string") return null
         else {
          return (
            <> 
          <div className='brew-card-link' key={brew.id}>
            <Link to={`/brews/${brew.id}`} brew={brew} className="room-nav-link">
              <FeaturedBrewsCollection key={brew.id} brew={brew} />
            </Link>
          </div>
          </>
      );
          }
    })}
    </div>
</div>
</>
      )
    }


    return (
      <div>
      <FilterBar brews={brews} setFilter={() => setFilter(true)}/>
      {content}
      <h2 className="bottom-border">Featured Brews</h2>
      <div className='container flow'>
      <div className='scroller'>
        {firstHalf.map((brew) => {
          return (
          <div className='brew-card-link' key={brew.id}>
            <Link to={`/brews/${brew.id}`} brew={brew} className="no-decor">
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
            <Link to={`/brews/${brew.id}`} brew={brew} className="no-decor">
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

import React from "react";
import { useSelector } from "react-redux";
import "../../../display.css"
import UsersList from "../../UsersList";
import FeaturedBrewsCollection from "../../BrewsCollection/MainPageDisplay/FeaturedBrewsCollection";
import { Link, useHistory } from 'react-router-dom';


function ProfilePage () {
  const history  = useHistory()
  const user = useSelector(state => state.session.user)
  //const purchased = user.purchases
  const allBrews = Object.values(useSelector(state => state.brews))

  const owned = allBrews.filter(brew => brew.user_id === user.id)

  const allPurchased = Object.values(useSelector(state => state.purchases))

  const ids = allPurchased.filter(purchase => purchase.user_id === user.id).map(purchase => purchase.brew_id)

  const purchased = allBrews.filter(brew => ids.includes(brew.id))

  console.log(purchased)
    const handleCreateClick = () => {
      history.push("/brew")
    }

    return (
        <div className="profile-page">
            <div className="user-info">
            <h2>{user?.username}</h2>
            <p>{user?.email}</p>
            <img className="profile-image" src={user?.image_url}
        alt="" />

        <button onClick={handleCreateClick} className="button purple">Add Brew</button>
        </div>
        <h2 className="bottom-border">Owned Brews</h2>
        <div className="brew-section">   
        {owned.map((brew) => {
          return (
          <div className='brew-card-link' key={brew.id}>
            <Link to={`/brews/${brew.id}`} brew={brew} className="room-nav-link">
              <FeaturedBrewsCollection key={brew.id} brew={brew} />
            </Link>
          </div>
          
      );
    })}
    </div>
    <h2 className="bottom-border">Purchased Brews</h2>
    <div className="brew-section">   
        {purchased.map((brew) => {
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
    )
}

export default ProfilePage;

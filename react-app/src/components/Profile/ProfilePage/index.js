import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../display.css"
import UsersList from "../../UsersList";
import FeaturedBrewsCollection from "../../BrewsCollection/MainPageDisplay/FeaturedBrewsCollection";
import { Link, useHistory } from 'react-router-dom';
import {getPurchases} from '../../../store/purchases'


function ProfilePage () {
  const history  = useHistory()
  const dispatch = useDispatch()

  const user = useSelector(state => state.session.user)
  useEffect(() => {
    dispatch(getPurchases(user.id))
 }, [dispatch])

  const allBrews = Object.values(useSelector(state => state.brews))
  const allPurchased = Object.values(useSelector(state => state.purchases))
  const owned = allBrews.filter(brew => brew.user_id === user.id)
  const ids = allPurchased.filter(purchase => purchase.user_id === user.id).map(purchase => purchase.brew_id)
  const purchased = allBrews.filter(brew => ids.includes(brew.id))

  
  const member = new Date(user?.created_at)
  const date = member.getDate();
  const month = member.getMonth(); 
  const year = member.getFullYear();
  const monthDateYear  = (month+1) + "/" + date + "/" + year; 

    const handleCreateClick = () => {
      history.push("/brew")
    }

    return (
        <div className="profile-page">
            <div className="user-info">
              <div>
              <img className="profile-image" src={user?.image_url}
        alt="" />
            <h2>{user?.username}</h2>
            <h4>Member Since: {monthDateYear}</h4>
              </div>
              <div>
                <h3 className="profile-header">User Information</h3>
              <p>Email: {user?.email}</p>
              <p>Bio: {user?.bio}</p>
              </div>
     
            
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

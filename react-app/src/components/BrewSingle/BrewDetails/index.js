import BrewUpdateForm from "../BrewUpdateForm";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {getPurchases} from '../../../store/purchases'
import AddToCart from "../AddToCart"
import './BrewDetail.css';

function BrewDetails ({brew, setShowEditForm}) {
    const users = useSelector(state => state.users);
    const images = brew?.images
    const sessionUser = useSelector(state => state.session.user);
    const [centerDisplayImage, setCenterDisplay] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
    if (sessionUser) {
      dispatch(getPurchases(sessionUser?.id))
    }
   }, [dispatch])

   const ids = Object.values(useSelector(state => state.purchases)).filter(purchase => purchase.user_id === sessionUser.id).map(purchase => purchase.brew_id)




    if(!brew) return null

    return (
        <div className="brew-block">
            <div className="images-field">
            <div className="listed-images">
            {images && images.map((image, idx) => {
                return (
            <div className="brew-image-block" key={image.id}>
            <button className="img-button" onClick={() => setCenterDisplay(idx)} ><img className="brew-image" src={image?.img_url}alt="" /></button>
            </div>
            )}
            )}
            </div>
            <div className="center-image-container">
                <img className="center-image" src={images[centerDisplayImage].img_url}alt="" />
            </div>
            </div>

            <div className="brew-details-block">
                <div>
            <div className="user-snippet">{users && <img className="profile-image" src={users[brew.user_id]["image_url"]}
            alt="" />} {users && users[brew.user_id]['username']}</div>
            <h3 className="brew-title">{brew?.title}</h3>
            </div>
            <div><p>{brew?.description}</p>
            {brew.brew_tags.map(tag => {
                <p>Tags: {tag?.name}</p>
            })}</div>

            <div>{ids.includes(brew.id) && <a href={brew?.pdf_url} download="true">Download</a>}
            <p><b>${brew?.price}</b></p>
            {brew?.for_sale ? <AddToCart brew={brew}/> : "No longer for Sale" }
            {(brew?.for_sale && sessionUser?.id === brew?.user_id) && (
            <button onClick={() => setShowEditForm(true)}>Show Edit Form</button>
            )}
            </div>

            </div>
        </div>

    )
}

{/* <div className="user-info">
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
        </div> */}

export default BrewDetails;

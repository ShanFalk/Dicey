import BrewUpdateForm from "../BrewUpdateForm";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {getPurchases} from '../../../store/purchases'
import './BrewDetail.css';

function BrewDetails ({brew, setShowEditForm}) {
    const images = brew?.images
    const sessionUser = useSelector(state => state.session.user);
    const [centerDisplayImage, setCenterDisplay] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPurchases(sessionUser.id))
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
            <button onClick={() => setCenterDisplay(idx)} ><img className="brew-image" src={image?.img_url}alt="" /></button>
            </div>
            )}
            )}
            </div>
            <div className="center-image-container">
                <img className="brew-image center-image" src={images[centerDisplayImage].img_url}alt="" />
            </div>
            </div>

            <div className="brew-details-block">
            <h3>Title: {brew?.title}</h3>
            <p>Description: {brew?.description}</p>
            {ids.includes(brew.id) && <a href={brew?.pdf_url} download="true">Download</a>}
            <p>User: {brew?.user_id}</p>
            <p>Price: {brew?.price}</p>
            {brew.brew_tags.map(tag => {
                <p>Tags: {tag?.name}</p>
            })}
            {(brew?.for_sale && sessionUser?.id === brew?.user_id) && (
            <button onClick={() => setShowEditForm(true)}>Show Edit Form</button>
            )}
            </div>
        </div>

    )
}

export default BrewDetails;

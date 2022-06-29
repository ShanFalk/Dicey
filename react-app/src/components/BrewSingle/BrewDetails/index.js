import BrewUpdateForm from "../BrewUpdateForm";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import './BrewDetail.css';

function BrewDetails ({brew, setShowEditForm}) {
    // const images = brew?.images

    const sessionUser = useSelector(state => state.session.user);
    const [images, setImages] = useState(brew?.images);
    const [centerDisplayImage, setCenterDisplay] = useState(images[0].img_url);
    // const [centerDisplayImage, setCenterDisplay] = useState("");


    // useEffect(() => {
    //     if (images) {
    //     setCenterDisplay(images[0].img_url);
    //     }
    // }, [images])


    //console.log(brew?.images)

    return (
        <div className="brew-block">
            <div className="images-field">
            <div className="listed-images">
            { images && images.map((image) => {
                return (
            <div className="brew-image-block" key={image.id}>
            <img className="brew-image" src={image?.img_url}alt="" />
            </div>
            )}
            )}
            </div>
            <div className="center-image-container">
                <img className="brew-image center-image" src={centerDisplayImage}alt="" />
            </div>
            </div>

            <div className="brew-details-block">
            <h3>Title: {brew?.title}</h3>
            <p>Description: {brew?.description}</p>
            <a href={brew?.pdf_url} download="true">Download</a>
            <p>User: {brew?.user_id}</p>
            <p>Price: {brew?.price}</p>
            {/* <p>Tags: {brew?.brew_tags}</p> */}
            {sessionUser?.id === brew?.user_id && (
            <button onClick={() => setShowEditForm(true)}>Show Edit Form</button>
            )}
            </div>
        </div>

    )
}

export default BrewDetails;

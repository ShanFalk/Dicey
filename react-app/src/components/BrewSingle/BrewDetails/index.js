import BrewUpdateForm from "../BrewUpdateForm";
import { useSelector } from "react-redux";
// import AddToCart from "../AddToCart";

function BrewDetails ({brew, setShowEditForm}) {
    const sessionUser = useSelector(state => state.session.user);

    const image = brew?.images[0]

    return (
        <div className="brew-block">
            <h2>This is the BrewSingleComponents - BrewDetails Component</h2>
            <div className="brew-image-block">
            <img className="brew-image" src={image?.img_url}
        alt="" />
            </div>
            <div className="brew-details-block">
            <h3>Title: {brew?.title}</h3>
            <p>Description: {brew?.description}</p>
            <a href={brew?.pdf_url} download="true">Download</a>
            <p>User: {brew?.user_id}</p>
            <p>Price: {brew?.price}</p>
            <p>Tags: {brew?.brew_tags}</p>
            {/* <AddToCart brew={brew}/> */}
            {sessionUser?.id === brew?.user_id && (
            <button onClick={() => setShowEditForm(true)}>Show Edit Form</button>
            )}
            </div>
        </div>

    )
}

export default BrewDetails;

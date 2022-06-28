import BrewUpdateForm from "../BrewUpdateForm";
import { useSelector } from "react-redux";
import { useEffect, useState} from 'react'

function BrewDetails ({brew, setShowEditForm}) {
    const sessionUser = useSelector(state => state.session.user);
    const [cart, setCart] = useState([]);
    console.log('THIS IS A BREW', brew)
    //TODO: optional chaining
    const image = brew?.images[0]

    useEffect(()=> {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    if (!brew) return null;

    const brewObj = Object.fromEntries(Object.entries(brew)
        .filter(([key, value]) =>
        key.includes('title') ||
        key.includes('description') ||
        key.includes('images') ||
        key.includes('price')))

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
            <button onClick={() => setCart(brewObj)}>
                Add to Cart
            </button>
            {sessionUser?.id === brew?.user_id && (
            <button onClick={() => setShowEditForm(true)}>Show Edit Form</button>
            )}
            </div>
        </div>

    )
}

export default BrewDetails;

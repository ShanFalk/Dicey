import BrewUpdateForm from "../BrewUpdateForm";
import { useSelector } from "react-redux";
import { useEffect, useState} from 'react'

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
console.log(cartFromLocalStorage)

function BrewDetails ({brew, setShowEditForm}) {
    const sessionUser = useSelector(state => state.session.user);
    const [cart, setCart] = useState(cartFromLocalStorage);

    const image = brew?.images[0]

    useEffect(()=> {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    const addToCart = () => {
        if (JSON.parse(localStorage.getItem('cart')).includes(brew?.id)) {
            return (
                alert('Item already in cart!')
            )
        } else (setCart([...cart, brew?.id]));

    };

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
            <button onClick={addToCart}>
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

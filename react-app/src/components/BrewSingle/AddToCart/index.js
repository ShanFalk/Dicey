import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../../context/Modal';

function AddToCart ({ brew }) {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
    const sessionUser = useSelector(state => state.session.user);
    const purchases = useSelector(state => state.purchases);
    const brewsPurchased = Object.values(purchases);

    const purchased = brewsPurchased.find(purchase => sessionUser?.id === purchase.user_id && brew.id === purchase.brew_id)

    const [cart, setCart] = useState(cartFromLocalStorage);
    const [showModal, setShowModal] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isOwned, setIsOwned] = useState(false);



    useEffect(()=> {
        localStorage.setItem('cart', JSON.stringify(cart));
        if (JSON.parse(localStorage.getItem('cart')).includes(brew?.id)) setIsDisabled(true);
        else if (sessionUser?.id === brew?.user_id) setIsOwned(true);
        else if (purchased) setIsOwned(true);
    }, [cart, isDisabled]);

    const addToCart = () => {
        setCart([...cart, brew?.id]);
        setShowModal(true);
    };

    return (
        <>
            {!isOwned && (
                <button className="purple button" disabled={isDisabled} onClick={addToCart}>
                    Add to Cart
                </button>
            )}
            {isOwned && (
                <p>In Library</p>
            )}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h4><i className="fa-solid fa-check"></i>Added to cart</h4>
                    <div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default AddToCart;

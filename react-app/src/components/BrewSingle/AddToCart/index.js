import { useEffect, useState } from 'react';
import { Modal } from '../../../context/Modal';

function AddToCart ({ brew }) {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

    const [cart, setCart] = useState(cartFromLocalStorage);
    const [showModal, setShowModal] = useState(false);

    useEffect(()=> {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    const addToCart = () => {
        if (JSON.parse(localStorage.getItem('cart')).includes(brew?.id)) {
            return (
                alert('Item already in cart!')
            )
        } else {
            setCart([...cart, brew?.id]);
            setShowModal(true);
        };
    };

    return (
        <>
        {/* TODO: Add go to cart button, brew image, title, price */}
            <button onClick={addToCart}>
                Add to Cart
            </button>
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

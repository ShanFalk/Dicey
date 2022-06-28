import { useEffect, useState } from 'react';

function AddToCart ({ brew }) {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

    const [cart, setCart] = useState(cartFromLocalStorage);

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
        <>
            <button onClick={addToCart}>
                Add to Cart
            </button>
        </>
    )
}

export default AddToCart;

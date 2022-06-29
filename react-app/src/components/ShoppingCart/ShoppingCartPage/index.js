import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RemoveItem from '../RemoveItem';

function ShoppingCartPage () {
    const brews = useSelector(state => state.brews);
    const [brewIds, updatebrewIds] = useState(JSON.parse(localStorage.getItem('cart')));
    const [isDeleted, setIsDeleted] = useState(false)

    const numItems = brewIds.length;

    //function to pass as props
    const onDeleteEnd = () => {
        setIsDeleted(true);
    };

    //re-rendering after remove button is clicked
    useEffect(()=> {
        updatebrewIds(JSON.parse(localStorage.getItem('cart')));
        setIsDeleted(false)
    },[isDeleted])

    if(numItems === 0) {
        return (
            <div>
                Your cart is empty.
            </div>
        )
    }

    //
    const sum = brewIds.map((brewId) => brews[brewId]?.price).reduce((accum, currVal) => accum + currVal)


    return (
        <div>
            <div>
                <p>{numItems} item(s) in your cart</p>
            </div>
            <div>
            {brewIds.map((id) => {
                const brew = brews[id];
            return (
                <>
                <ul key={brew?.id}>
                    <li>{brew?.title}</li>
                    <li>{brew?.description}</li>
                    <li>{brew?.images}</li>
                    <li>${brew?.price}</li>
                </ul>
                <RemoveItem brewIds={brewIds} brewId={brew?.id} deleteEnd={onDeleteEnd}/>
                </>
              );
            })}
            </div>
            <div>
                <p>Item(s) total ${sum}</p>
                <p>Coupon Applied!</p>
                <p>NAT20 -${sum}</p>
                <p>Total $0.00</p>
                <button>Checkout</button>
            </div>
        </div>

    )
}

export default ShoppingCartPage;

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Checkout from '../Checkout';
import RemoveItem from '../RemoveItem';

function ShoppingCartPage () {
    const brews = useSelector(state => state.brews);
    console.log(brews);
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

    //if the shopping cart is empty
    if(numItems === 0) {
        return (
            <div>
                Your cart is empty!
            </div>
        )
    }

    //array methods to get the prices for the shopping cart items and total them
    const prices = brewIds.map((brewId) => brews[brewId]?.price)
    const sum = prices.reduce((prevPrice, currPrice) => prevPrice + currPrice)


    return (
        <div>
            <div>
                <p>{numItems} item(s) in your cart</p>
            </div>
            {brewIds.map((id) => {
                const brew = brews[id];
            return (
                <div key={brew?.id}>
                    <ul>
                        <li>{brew?.title}</li>
                        <li>{brew?.description}</li>
                        {/* <img src={brew?.images[0].img_url} alt="A fantastic scene"/> */}
                        <li>${brew?.price}</li>
                    </ul>
                    <RemoveItem brewIds={brewIds} brewId={brew?.id} deleteEnd={onDeleteEnd}/>
                </div>
              );
            })}
            <div>
                <p>Item(s) total ${sum}</p>
                <p>Coupon Applied!</p>
                <p>NAT20 -${sum}</p>
                <p>Total $0.00</p>
                <Checkout brewIds={brewIds}/>
            </div>
        </div>

    )
}

export default ShoppingCartPage;

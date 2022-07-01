import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Checkout from '../Checkout';
import RemoveItem from '../RemoveItem';
import './ShoppingCart.css'


function ShoppingCartPage() {
    const brews = useSelector(state => state.brews);
    const sessionUser = useSelector(state => state.session.user);

    const [brewIds, updatebrewIds] = useState(JSON.parse(localStorage.getItem('cart')));
    const [isDeleted, setIsDeleted] = useState(false)
    const [duplicates, setDuplicates] = useState([])

    const numItems = brewIds.length;

    //function to pass as props
    const onDeleteEnd = () => {
        setIsDeleted(true);
    };

    //function to check for duplicates in user's library and cart
    const checkForDuplicates = () => {
        return brewIds.filter((brewId) => {
            return brews[brewId]?.user_id === sessionUser?.id
        })
    }

    //re-rendering after remove button is clicked
    useEffect(() => {
        updatebrewIds(JSON.parse(localStorage.getItem('cart')));
        setIsDeleted(false)
    }, [isDeleted])

    //re-rendering if a user logs in or cart is updated
    useEffect(() => {
        if (sessionUser) {
            setDuplicates(checkForDuplicates());
        }
    }, [sessionUser, brewIds])

    //if the shopping cart is empty
    if (numItems === 0) {
        return (
            <div>
                Your cart is empty!
            </div>
        )
    }

    //array methods to get the prices for the shopping cart items and total them
    const prices = brewIds.map((brewId) => brews[brewId]?.price)
    const sum = prices.reduce((prevPrice, currPrice) => prevPrice + currPrice)
    const total = sum?.toFixed(2)


    return (
        <div>
            <div>
                <h3>{numItems} item(s) in your cart</h3>
            </div>
            <div className='shopping-cart'>
                <div>
                    {brewIds.map((id) => {
                        const brew = brews[id];
                        return (
                            <div key={brew?.id}>
                                <div className='cart-item'>
                                    <img className='thumbnail thumbnail-image' src={brew?.images[0].img_url} alt="A fantastic scene" />
                                    <ul className='cart-list'>
                                        <li>{brew?.title}</li>
                                        <li>{brew?.description}</li>
                                        <li>${brew?.price}</li>
                                        {duplicates?.includes(brew?.id) && (
                                            <li>Already in library</li>
                                        )}
                                        <RemoveItem brewIds={brewIds} brewId={brew?.id} deleteEnd={onDeleteEnd} />
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <div className='checkout-container'>
                        <table className='checkout-table'>
                            <tbody>
                                <tr className='checkout-rows'>
                                    <th className='checkout-headers'>Item(s) total</th>
                                    <td className='checkout-data'>${total}</td>
                                </tr>
                                <tr className='checkout-rows'>
                                    <th className='checkout-headers'>Coupon Applied!</th>
                                </tr>
                                <tr className='checkout-rows'>
                                    <th className='checkout-headers'>NAT20</th>
                                    <td id='total-line' className='checkout-data'>-${total}</td>
                                </tr>
                                <tr className='checkout-rows'>
                                    <th className='checkout-headers'>Total</th>
                                    <td className='checkout-data'>$0.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <Checkout duplicates={duplicates} brewIds={brewIds} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShoppingCartPage;

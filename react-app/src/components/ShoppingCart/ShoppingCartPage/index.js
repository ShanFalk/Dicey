import { useSelector } from 'react-redux';

function ShoppingCartPage () {
    const brews = useSelector(state => state.brews);
    const brewIds = JSON.parse(localStorage.getItem('cart'));

    const numItems = brewIds.length;

    const sum = brewIds.reduce(function(accum, currValue){
        return parseFloat(brews[accum]?.price) + parseFloat(brews[currValue]?.price);
    })

    return (
        <div>
            <div>
                <p>{numItems} item(s) in your cart</p>
            </div>
            <div>
            {brewIds.map((id) => {
                const brew = brews[id];
            return (
                <ul key={brew?.id}>
                    <li>{brew?.title}</li>
                    <li>{brew?.description}</li>
                    <li>{brew?.images}</li>
                    <li>${brew?.price}</li>
                </ul>
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

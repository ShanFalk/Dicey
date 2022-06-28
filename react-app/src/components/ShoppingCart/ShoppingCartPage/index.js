import { useSelector } from 'react-redux';

function ShoppingCartPage () {
    const brews = useSelector(state => state.brews);
    const brewIds = JSON.parse(localStorage.getItem('cart'));

    const cartItems = brewIds.map((id) => brews[id]);
    const numItems = cartItems.length;

    const sum = cartItems?.reduce(function(accum, currValue){
        console.log('THIS IS THE ACCUM PRICE', parseFloat(accum.price))
        return parseFloat(accum.price) + parseFloat(currValue.price);
    })

    return (
        <div>
            <div>
                <p>{numItems} item(s) in your cart</p>
            </div>
            <div>
            {cartItems?.map((item) => {
            return (
                <ul key={item.id}>
                    <li>{item.title}</li>
                    <li>{item.description}</li>
                    <li>{item.images}</li>
                    <li>${item.price}</li>
                </ul>
              );
            })}
            </div>
            <div>
                <p>Item(s) total ${sum}</p>
                <p>Coupon Applied!</p>
                <p>NAT20</p>
                <p>Total </p>
                <button>Checkout</button>
            </div>
        </div>

    )
}

export default ShoppingCartPage;

function RemoveItem({ brewIds, brewId, deleteEnd}) {

    function remove(e) {
        e.preventDefault();

        const updatedCart = brewIds.filter((ele) => ele !== brewId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        deleteEnd();
    }
    return (
        <button className="red button" onClick={remove}>Remove</button>
    )
}

export default RemoveItem;

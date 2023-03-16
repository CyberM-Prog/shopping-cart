function CartItem(props) {
    function handleQuantityChange(e) {
        const cartCopy = [...props.cart];

        cartCopy.forEach((object) => {
            if (object.name === props.name) {
                object.quantity = +e.target.value;
            }
        });

        props.setCart(cartCopy);
    }

    if (props.quantity > 0) {
        return (
            <div className="cartitem" data-testid="cart-item">
                <img src={props.img} alt=""></img>
                <div className="cartitemdetails">
                    <h1>{props.name}</h1>
                    <p data-testid="final-item-price">
                        ${(props.price * props.quantity).toFixed(2)}
                    </p>
                    <input
                        type="number"
                        value={props.quantity}
                        onChange={handleQuantityChange}
                    ></input>
                </div>
            </div>
        );
    }
}

export default CartItem;

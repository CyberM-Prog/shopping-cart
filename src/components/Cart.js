function Cart(props) {
    if (props.isCartHidden === false) {
        return (
            <div className="cartdiv">
                <div className="darkeneddiv"></div>
                <div>
                    <button className="closebtn" onClick={props.hideCart}>
                        X
                    </button>
                    <h1 className="carttitle">Your shopping cart</h1>
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        );
    }
}

export default Cart;

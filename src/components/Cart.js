import { useEffect, useState } from "react";
import CartItem from "./CartItem";

function Cart(props) {
    const [itemsList, setItemsList] = useState([]);

    const [total, setTotal] = useState(0.0);

    useEffect(() => {
        let itemsList = [];
        let total = 0;

        props.cart.forEach((object) => {
            itemsList.push(
                <CartItem
                    name={object.name}
                    img={object.img}
                    price={object.price}
                    quantity={object.quantity}
                    cart={props.cart}
                    setCart={props.setCart}
                />
            );

            total += object.price * object.quantity;
        });

        setItemsList(itemsList);
        setTotal(total);
    }, [props.cart]);

    if (props.isCartHidden === false) {
        return (
            <div className="cartdiv">
                <div className="darkeneddiv"></div>
                <div>
                    <button className="closebtn" onClick={props.hideCart}>
                        X
                    </button>
                    <h1 className="carttitle">Your shopping cart</h1>
                    <div className="cartitems">{itemsList}</div>
                    <p className="total">Total: ${total.toFixed(2)}</p>
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        );
    }
}

export default Cart;

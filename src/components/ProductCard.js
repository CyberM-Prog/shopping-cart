import { useState } from "react";

function ProductCard(props) {
    const [chosenQuantity, setChosenQuantity] = useState(1);

    function addToCart() {
        const cartCopy = [...props.cart];

        let isAlreadyOnCart = false;

        cartCopy.forEach((object) => {
            if (object.name === props.name) {
                isAlreadyOnCart = true;
                object.quantity += chosenQuantity;
                props.setCart(cartCopy);
            }
        });

        if (isAlreadyOnCart === false) {
            props.addToCart({
                name: props.name,
                img: props.img,
                price: props.price,
                quantity: chosenQuantity,
            });
        }
    }

    function handleQuantityChange(e) {
        setChosenQuantity(+e.target.value);
    }

    return (
        <div className="product">
            <img src={props.img} alt=""></img>
            <div className="separator"></div>
            <h1 className="producttitle">{props.name}</h1>
            <div>
                <p className="price">${props.price}</p>
                <input
                    type="number"
                    value={chosenQuantity}
                    className="quantity"
                    onChange={handleQuantityChange}
                ></input>
                <button className="addtocartbtn" onClick={addToCart}>
                    Add To Cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;

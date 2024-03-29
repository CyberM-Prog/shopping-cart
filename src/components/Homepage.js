import { Link } from "react-router-dom";
import Cart from "./Cart";
import TopSection from "./TopSection";

function Homepage(props) {
    return (
        <div className="App">
            <Cart
                isCartHidden={props.isCartHidden}
                hideCart={props.hideCart}
                cart={props.cart}
                setCart={props.setCart}
            />
            <TopSection
                cartQuantity={props.cartQuantity}
                unhideCart={props.unhideCart}
            />
            <div className="main">
                <p>Discover The Best Gaming Products</p>
                <Link to="/products">
                    <button className="shopnowbtn">Shop Now</button>
                </Link>
            </div>
        </div>
    );
}

export default Homepage;

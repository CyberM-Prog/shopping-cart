import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

function TopSection(props) {
    return (
        <div className="topsection">
            <Link to="/">
                <h1 className="header">The Gaming Store</h1>
            </Link>
            <div className="navbar">
                <Link to="/">
                    <h2>Home</h2>
                </Link>
                <Link to="/products">
                    <h2>Products</h2>
                </Link>
                <div className="cart" onClick={props.unhideCart}>
                    <CgShoppingCart className="icon" />
                    <div className="cartquantity">{props.cartQuantity}</div>
                </div>
            </div>
        </div>
    );
}

export default TopSection;

import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

function TopSection(props) {
    return (
        <div className="topsection">
            <Link to="/">
                <h1 className="header">The Gaming Store</h1>
            </Link>
            <div className="navbar">
                <h2>Home</h2>
                <h2>Products</h2>
                <div className="cart">
                    <CgShoppingCart className="icon" />
                    <div className="cartquantity">{props.cartQuantity}</div>
                </div>
            </div>
        </div>
    );
}

export default TopSection;

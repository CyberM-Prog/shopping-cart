import { CgShoppingCart } from "react-icons/cg";

function TopSection() {
    return (
        <div className="topsection">
            <h1>The Gaming Store</h1>
            <div className="navbar">
                <h2>Home</h2>
                <h2>Products</h2>
                <CgShoppingCart className="icon" />
            </div>
        </div>
    );
}

export default TopSection;

import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="topsection">
                <h1>The Gaming Store</h1>
                <div className="navbar">
                    <h2>Home</h2>
                    <h2>Products</h2>
                    <CgShoppingCart className="icon" />
                </div>
            </div>
            <div className="main">
                <p>Discover The Best Gaming Products</p>
                <Link to="/products">
                    <button>Shop Now</button>
                </Link>
            </div>
        </div>
    );
}

export default App;

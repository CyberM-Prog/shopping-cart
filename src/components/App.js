import { Link } from "react-router-dom";
import TopSection from "./TopSection";

function App(props) {
    return (
        <div className="App">
            <TopSection cartQuantity={props.cartQuantity} />
            <div className="main">
                <p>Discover The Best Gaming Products</p>
                <Link to="/products">
                    <button className="shopnowbtn">Shop Now</button>
                </Link>
            </div>
        </div>
    );
}

export default App;

import { Link } from "react-router-dom";
import TopSection from "./TopSection";

function App() {
    return (
        <div className="App">
            <TopSection />
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

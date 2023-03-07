import App from "./components/App";
import ProductsPage from "./components/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function RouteSwitch() {
    const [cartQuantity, setCartQuantity] = useState(0);

    function changeCartQuantity(number) {
        setCartQuantity(cartQuantity + number);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App cartQuantity={cartQuantity} />} />
                <Route
                    path="/products"
                    element={
                        <ProductsPage
                            cartQuantity={cartQuantity}
                            changeCartQuantity={changeCartQuantity}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;

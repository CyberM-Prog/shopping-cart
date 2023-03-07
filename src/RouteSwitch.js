import App from "./components/App";
import ProductsPage from "./components/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function RouteSwitch() {
    const [cartQuantity, setCartQuantity] = useState(0);

    function changeCartQuantity(number) {
        setCartQuantity(cartQuantity + number);
    }

    const [isCartHidden, setIsCartHidden] = useState(true);

    function unhideCart() {
        setIsCartHidden(false);
    }

    function hideCart() {
        setIsCartHidden(true);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <App
                            cartQuantity={cartQuantity}
                            isCartHidden={isCartHidden}
                            unhideCart={unhideCart}
                            hideCart={hideCart}
                        />
                    }
                />
                <Route
                    path="/products"
                    element={
                        <ProductsPage
                            cartQuantity={cartQuantity}
                            changeCartQuantity={changeCartQuantity}
                            isCartHidden={isCartHidden}
                            unhideCart={unhideCart}
                            hideCart={hideCart}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;

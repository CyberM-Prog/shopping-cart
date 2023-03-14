import App from "./components/App";
import ProductsPage from "./components/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function RouteSwitch() {
    const [cartQuantity, setCartQuantity] = useState(0);

    const [cart, setCart] = useState([]);

    function addToCart(object) {
        setCart(cart.concat(object));
    }

    const [isCartHidden, setIsCartHidden] = useState(true);

    function unhideCart() {
        setIsCartHidden(false);
    }

    function hideCart() {
        setIsCartHidden(true);
    }

    useEffect(() => {
        let total = 0;

        cart.forEach((object) => {
            total += object.quantity;
        });

        setCartQuantity(total);
    }, [cart]);

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
                            cart={cart}
                            setCart={setCart}
                        />
                    }
                />
                <Route
                    path="/products"
                    element={
                        <ProductsPage
                            cartQuantity={cartQuantity}
                            isCartHidden={isCartHidden}
                            unhideCart={unhideCart}
                            hideCart={hideCart}
                            cart={cart}
                            addToCart={addToCart}
                            setCart={setCart}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;

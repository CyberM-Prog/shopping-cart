import ProductsPage from "./components/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";

function App() {
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
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Homepage
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
        </HashRouter>
    );
}

export default App;

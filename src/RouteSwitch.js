import App from "./components/App";
import ProductsPage from "./components/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/products" element={<ProductsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;

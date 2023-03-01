import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;

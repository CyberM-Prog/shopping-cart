import React from "react";
import { render, screen } from "@testing-library/react";
import CartItem from "../components/CartItem";

describe("Cart item component", () => {
    it("doesn't appear when the quantity is 0", () => {
        let quantityMock = 0;
        render(<CartItem quantity={quantityMock} />);
        const item = screen.queryByTestId("cart-item");

        expect(item).not.toBeInTheDocument();
    });

    it("multiplies the item price by the quantity", () => {
        let quantityMock = 3;
        let priceMock = 100;
        render(<CartItem quantity={quantityMock} price={priceMock} />);
        const item = screen.queryByTestId("final-item-price");

        expect(item).toHaveTextContent(300);
    });
});

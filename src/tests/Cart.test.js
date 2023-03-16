import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";

describe("Cart component", () => {
    it("doesn't appear when isCardHidden is true", () => {
        const isCartHiddenMock = true;
        const cartMock = [];
        render(<Cart isCartHidden={isCartHiddenMock} cart={cartMock} />);
        const cartDiv = screen.queryByTestId("cart-div");

        expect(cartDiv).not.toBeInTheDocument();
    });

    it("appears when isCardHidden is false", () => {
        const isCartHiddenMock = false;
        const cartMock = [];
        render(<Cart isCartHidden={isCartHiddenMock} cart={cartMock} />);
        const cartDiv = screen.queryByTestId("cart-div");

        expect(cartDiv).toBeInTheDocument();
    });
});

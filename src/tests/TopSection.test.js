import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TopSection from "../components/TopSection";
import { MemoryRouter } from "react-router-dom";

describe("Top section component", () => {
    it("calls the unhideCart function on cart icon click", () => {
        const unhideCartMock = jest.fn();
        render(
            <MemoryRouter>
                <TopSection unhideCart={unhideCartMock} />
            </MemoryRouter>
        );
        const cartIcon = screen.getByTestId("cart-icon");

        userEvent.click(cartIcon);

        expect(unhideCartMock).toHaveBeenCalledTimes(1);
    });
});

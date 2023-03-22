import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import CreditCardDetails from "./CreditCardDetails"

describe("CreditCardDetails component", () => {
    it("renders all form fields correctly", () => {
        render(<CreditCardDetails />)
        expect(screen.getByLabelText(/credit card number/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/cvc/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/expiry date/i)).toBeInTheDocument()
        expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument()
    })

    it.todo("submits form with valid input"
        //, () => {
        // const mockSubmit = jest.fn()
        // render(<CreditCardDetails onSubmit={mockSubmit} />)
        // const creditCardNumber = screen.getByLabelText(/credit card number/i)
        // const cvc = screen.getByLabelText(/cvc/i)
        // const expiryDate = screen.getByLabelText(/expiry date/i)
        // const submitButton = screen.getByRole("button", { name: "Submit" })

        // fireEvent.change(creditCardNumber, { target: { value: "4111111111111111" } })
        // fireEvent.change(cvc, { target: { value: "123" } })
        // fireEvent.change(expiryDate, { target: { value: "2023-12" } })
        // fireEvent.click(submitButton)

        // expect(mockSubmit).toHaveBeenCalledTimes(1)
        // expect(mockSubmit).toHaveBeenCalledWith(expect.anything())
        //}
    )

    it.todo("disables submit button with incomplete input")

    it.todo("displays error message with invalid input")

    it.todo("displays logs with valid inputs")

    it.todo("displays logs with valid inputs")
})

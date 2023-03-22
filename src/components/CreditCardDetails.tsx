import { Box, Button, Grid, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { validateCreditCardNumber, validateCVC, validateDate } from "../util/validateCreditCardDetails"

interface CreditCardDetails {
    creditCardNumber: string
    cvc: string
    expiryDate: string
}

const CreaditCardDetails = () => {
    const initialState = {
        creditCardNumber: "",
        cvc: "",
        expiryDate: ""
    }

    const [creditCardDetails, setCreditCardDetails] = useState<CreditCardDetails>({
        ...initialState
    })

    const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)

    const onValueChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const target = event.target as HTMLTextAreaElement | HTMLInputElement
        const { name, value } = target

        setCreditCardDetails(previousDetails => ({
            ...previousDetails,
            [name]: value
        }))

    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log("Credit Card Number: " + creditCardDetails.creditCardNumber)
        console.log("CVC: " + creditCardDetails.cvc)
        console.log("Expiry Date: " + creditCardDetails.expiryDate)

        setIsSubmitButtonDisabled(true)
    }

    useEffect(() => {
        if (validateCreditCardNumber(creditCardDetails.creditCardNumber) &&
            validateCVC(creditCardDetails.cvc) &&
            validateDate(creditCardDetails.expiryDate)) {
            setIsSubmitButtonDisabled(false)
        } else {
            setIsSubmitButtonDisabled(true)
        }
    }, [creditCardDetails.creditCardNumber, creditCardDetails.cvc, creditCardDetails.expiryDate])


    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
        >
            <Grid item >
                <TextField type="text"
                    name="creditCardNumber"
                    label="Credit Card Number"
                    id="creditCardNumber"
                    value={creditCardDetails.creditCardNumber}
                    onChange={event => onValueChange(event)}
                    error={(creditCardDetails.creditCardNumber !== "") &&
                        !validateCreditCardNumber(creditCardDetails.creditCardNumber)}
                    helperText={(creditCardDetails.creditCardNumber === "") ||
                        validateCreditCardNumber(creditCardDetails.creditCardNumber) ?
                        "" :
                        "Invalid Credit Card Number! Please use the format: xxxx-xxxx-xxxx-xxxx"}
                    required />
            </Grid>
            <Grid item>
                <TextField type="text"
                    name="cvc"
                    label="CVC"
                    id="cvc"
                    value={creditCardDetails.cvc}
                    onChange={event => onValueChange(event)}
                    error={(creditCardDetails.cvc !== "") && !validateCVC(creditCardDetails.cvc)}
                    helperText={(creditCardDetails.cvc === "") ||
                        validateCVC(creditCardDetails.cvc) ?
                        "" :
                        "Invalid CVC!"}
                    required />
            </Grid>
            <Grid item>
                {/* this should be updated with a DatePicker and disable previous months */}
                <TextField type="month"
                    name="expiryDate"
                    label="Expiry Date"
                    id="expiryDate"
                    value={creditCardDetails.expiryDate}
                    onChange={event => onValueChange(event)}
                    error={(creditCardDetails.expiryDate !== "") && !validateDate(creditCardDetails.expiryDate)}
                    helperText={(creditCardDetails.expiryDate === "") ||
                        validateDate(creditCardDetails.expiryDate) ?
                        "" :
                        "Invalid Month-Year!"}
                    required />
            </Grid>
            <Grid item>
                <Button type="submit"
                    data-testid="submit"
                    disabled={isSubmitButtonDisabled}
                    variant="contained">
                    Submit
                </Button>
            </Grid>
        </Box >
    )

}

export default CreaditCardDetails
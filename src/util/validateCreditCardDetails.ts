import { getCurrentMonth, getCurrentYear } from "./getCurrentMonthYear"

const validateCreditCardNumber = (creditCardNumber: string) => {
    const creditCardNumberRegex = /^(\d{4}-){3}\d{4}$/

    if (creditCardNumberRegex.test(creditCardNumber)) {
        return true
    }
    return false
}

const validateCVC = (cvc: string) => {
    const cvcRegex = /^\d{3}$/

    if (cvcRegex.test(cvc)) {
        return true
    }
    return false
}

const validateDate = (date: string) => {
    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])$/
    const currentMonth = getCurrentMonth()
    const currentYear = getCurrentYear()
    const [inputYear, inputMonth] = date.split('-')

    // this checks if the user input value is in 'YYYY-MM' format and is not a previous year-month
    if (dateRegex.test(date) &&
        (parseInt(inputYear) >= currentYear && parseInt(inputMonth) >= currentMonth)) {
        return true
    }
    return false
}

export { validateCVC, validateCreditCardNumber, validateDate }
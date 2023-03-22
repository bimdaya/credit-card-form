import { validateCVC, validateCreditCardNumber, validateDate } from './validateCreditCardDetails'

describe('validateCreditCardNumber function', () => {
    it('returns true when the input is a valid credit card number', () => {
        const validCreditCardNumber = '1234-5678-9012-3456'
        const result = validateCreditCardNumber(validCreditCardNumber)
        expect(result).toEqual(true)
    })

    test('returns false when the input is not a valid credit card number', () => {
        const invalidCreditCardNumber = '1234-5678-9012'
        const result = validateCreditCardNumber(invalidCreditCardNumber)
        expect(result).toEqual(false)
    })
})

describe('validateCVC function', () => {
    it('returns true when the input is a valid CVC number', () => {
        const validCVC = '123'
        const result = validateCVC(validCVC)
        expect(result).toEqual(true)
    })

    it('returns false when the input is not a valid CVC number', () => {
        const invalidCVC = '1234'
        const result = validateCVC(invalidCVC)
        expect(result).toEqual(false)
    })
})

describe('validateDate function', () => {

    it('returns false when the input is not a valid date in YYYY-MM format', () => {
        const invalidDate = 'June 2022'
        const result = validateDate(invalidDate)
        expect(result).toEqual(false)
    })

    it('returns false when the input is a previous year-month', () => {
        const previousYearMonth = '2022-01'
        const result = validateDate(previousYearMonth)
        expect(result).toEqual(false)
    })
})

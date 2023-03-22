import { getCurrentMonth, getCurrentYear } from './getCurrentMonthYear'

describe('getCurrentMonth function', () => {
    it('returns the current month as a number', () => {
        const expectedMonth = new Date().getMonth() + 1
        const currentMonth = getCurrentMonth()
        expect(currentMonth).toEqual(expectedMonth)
    })
})

describe('getCurrentYear function', () => {
    it('returns the current year as a number', () => {
        const expectedYear = new Date().getFullYear()
        const currentYear = getCurrentYear()
        expect(currentYear).toEqual(expectedYear)
    })
})
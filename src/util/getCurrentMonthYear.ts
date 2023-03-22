const getCurrentMonth = () => {
    const currentDate = new Date()
    return currentDate.getMonth() + 1
}

const getCurrentYear = () => {
    const currentDate = new Date()
    return currentDate.getFullYear()
}

export { getCurrentMonth, getCurrentYear }
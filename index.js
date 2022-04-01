function findMatching(array, driver) {
    const result = array.filter(element => element.toLowerCase() === driver.toLowerCase())
    return result
}

function fuzzyMatch(array, driver) {
    const result = array.filter(element => element.charAt(0) === driver.charAt(0))
    return result
}

function matchName(driver, name) {
    const result = driver.filter(element => element.name === name)
    return result
}
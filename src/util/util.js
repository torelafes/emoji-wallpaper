/**
 * Returns the greatest common divisor of two given numbers.
 *
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - Greatest common divisor of first and second number.
 */
export const gcd = (a, b) => {
    if (b == 0) {
        return a
    } else {
        return gcd(b, a % b)
    }
}

/**
 * Returns the simplified fraction of two given numbers.
 *
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number[]} - Array containing the simplified fraction of first and second number.
 */
export const simplify = (a, b) => {
    const g = gcd(a, b)
    return [a / g, b / g]
}

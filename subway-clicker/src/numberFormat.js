/**
 * @function
 * @name numberFormat
 * @description Returns a formatted string representation of value with comma every three decimal places if it is greater than 999.
 * @param {number} value - The number to format.
 * @returns {string} The formatted number as string.
 */
export function numberFormat (value) {
  return new Intl.NumberFormat({ minimumFractionDigits: 0 }).format(value)
}

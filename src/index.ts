/**
 * This program reverses a string using recursion.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-11-09
 */

/**
 * Reverses a string with recursion.
 *
 * @param {string} input - input from main
 * @returns {string} reversed string
 */
function reverse(input: string): string {
  if (input === '') {
    return input
  } else {
    return reverse(input.slice(1)) + input.slice(0, 1)
  }
}

const toBeReversed = 'recursion'

console.log(`\nOriginal String: ${toBeReversed}`)
console.log(`\nReversed String: ${reverse(toBeReversed)}`)

console.log('\nDone.')

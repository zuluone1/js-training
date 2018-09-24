'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase (str){
	return str.split(' ').map(eachStr => eachStr.replace(eachStr.charAt(0), eachStr.charAt(0).toUpperCase())).join(' ')

}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(jadenCase("how are you? i hope bad jules"),"How Are You? I Hope Bad Jules")
// End of tests */

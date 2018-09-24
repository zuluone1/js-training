'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
function multiply(num1, num2) {
    if (num1 === 0 || num2 === 0) return 0;
    if (num1 === num2) return 1;
    if (num1 > 0 && num2 > 0) {
        return num2 + multiply(num1 - 1, num2);
    } else if (num1 < 0 && num2 < 0) {
        return Math.abs(num2) + multiply(Math.abs(num1) - 1, Math.abs(num2));
    } else if (num1 < 0 && !(num2 < 0)) {
        return num1 + multiply(num1, num2 - 1);
    } else if (num2 < 0 && !(num1 < 0)) {
        return num2 + multiply(num1 - 1, num2);
    }
};


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */

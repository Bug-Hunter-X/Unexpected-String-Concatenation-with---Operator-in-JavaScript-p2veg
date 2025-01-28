# Unexpected String Concatenation in JavaScript

This repository demonstrates a common, yet easily overlooked, JavaScript bug related to type coercion and the `+` operator.  When adding numbers and strings, JavaScript implicitly converts the number to a string and performs string concatenation instead of numerical addition. This can lead to unexpected behavior and difficult-to-debug errors.

## The Bug
The `bug.js` file contains a simple function that adds two arguments.  However, when one argument is a number and the other is a string, the result is string concatenation, rather than the expected numerical sum. 

## The Solution
The `bugSolution.js` file shows how to fix this issue using explicit type conversion (e.g., `parseInt()` or `parseFloat()`) to ensure both operands are numbers before the addition is performed.  This approach prevents unintended type coercion and guarantees correct numerical addition.
function foo(a, b) {
  // Explicit type conversion to numbers
  a = parseFloat(a);
  b = parseFloat(b);

  // Check for NaN (Not a Number) after conversion
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Arguments must be numbers or numeric strings";
  }

  return a + b;
}

console.log(foo(2, 3)); // Expected Output: 5
console.log(foo(2, "3")); // Expected Output: 5
console.log(foo("hello",3)); //Expected Output: Invalid input: Arguments must be numbers or numeric strings
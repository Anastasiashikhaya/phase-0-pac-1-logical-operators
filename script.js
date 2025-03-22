// Logical NOT (!): Negates the truthiness of a value
const truthyValue = 'This value is truthy.';
const falseyValue = 0;

console.log(!truthyValue); // false
console.log(!falseyValue); // true

// Convert an expression to a Boolean using !!
console.log(!!truthyValue); // true
console.log(!!falseyValue); // false

// Logical AND (&&)
console.log(0 && false); // 0 (falsey)
console.log(0 && true);  // 0 (falsey)
console.log(true && NaN); // NaN (falsey)
console.log(true && !1);  // false (falsey)
console.log(!0 && "This is a string"); // "This is a string" (truthy)
console.log(!0 && ""); // "" (falsey)
console.log(!0 && !!""); // false (falsey)

// Logical OR (||)
console.log(0 || false); // false (falsey)
console.log(true || false); // true (truthy)
console.log(true || 1); // true (truthy)
console.log(!true || !false); // true (truthy)
console.log(!1 || !0); // false (falsey)

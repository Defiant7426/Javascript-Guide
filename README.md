# Javascript-Guide

In this repository, I will provide a simple guide to JavaScript.

# Variables with let

```jsx
let client = "Luis"; // can be reassigned
client = 123

console.log(client);

let client2; // can be declared worthless
client2 = "Pedro";
console.log(client2);

let client3; 
console.log(client3); // undefined data type
```

The code above demonstrates how to use the `let` keyword to declare variables in JavaScript. Variables declared with `let` can be reassigned new values, and if declared without an initial value, they will be `undefined` until a value is assigned.

# Variables with const

```jsx
const client = "Luis"; // it can't be reassigned
client = 123

console.log(client);

const client2; // it can't be declared without a value
client2 = "Pedro";
console.log(client2);

const client3 = "Juan"; // this is correct way to declare a constant
```

The code above demonstrates how to use the `const` keyword to declare variables in JavaScript. Variables declared with `const` cannot be reassigned new values, and they must be initialized at the time of declaration. Attempting to reassign or declare a `const` variable without an initial value will result in an error.

# Type of data

## Number

```jsx
// 1. Number
let num = 123; 
let num2 = 1.23;
let num3 = -123;

console.log(typeof num);
console.log(typeof num2);
console.log(typeof num3);
```

The code above shows how to declare and use number variables in JavaScript. The `typeof` operator is used to determine the data type of a variable, which in this case will return "number" for all the variables.

Output:

![Untitled](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled.png)

## String

```jsx
// 2. String
let name1 = "Luis";
let name2 = 'Luis';

console.log(typeof name1);
console.log(typeof name2);
```

The code above demonstrates how to declare and use string variables in JavaScript. Both double quotes (`"`) and single quotes (`'`) can be used to create string literals, and the `typeof` operator will return "string" for both variables.

Output:

![Untitled](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%201.png)

## Boolean

```jsx
// 3. Boolean
let isActive = true;
let isInactive = false;

console.log(typeof isActive);
console.log(typeof isInactive);
```

The code above demonstrates how to declare and use boolean variables in JavaScript. The `typeof` operator will return "boolean" for both `isActive` and `isInactive`.

Output:

![Untitled](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%202.png)

## Null

```jsx
// 4. Null
let nullVar = null;

console.log(nullVar);
```

The code above demonstrates how to assign a `null` value to a variable in JavaScript. A `null` value represents the intentional absence of any object value, and when logged, it outputs `null`.

Output:

![Untitled](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%203.png)

## Undefined

```jsx
// 5. Undefined
let undefinedVar;

console.log(typeof undefinedVar);  
```

The code above shows how a variable is assigned an `undefined` value if it has been declared but not initialized. The `typeof` operator will return "undefined" for such variables.

Output:

![Untitled](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%204.png)

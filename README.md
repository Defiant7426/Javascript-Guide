# Javascript-Guide

In this repository, I will provide a simple guide to JavaScript.

# 1. Variables with let

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

# 2. Variables with const

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

# 3. Type of data

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

![Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%205.png](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%205.png)

# 4. Objects

```jsx
// Objects
const product = {
    name: 'TV',
    price: 500,
    available: true
}

console.log(product);
console.log(typeof product);
console.table(product);

// Accessing object properties
console.log(product.name);
console.log(product['name']);

// Add new properties
product.image = 'image.jpg';
console.log(product);

// Delete properties
delete product.available;
console.log(product);
```

The code above illustrates how to create and manipulate objects in JavaScript. Objects can store multiple values as properties, which can be accessed, added, and deleted using dot notation or bracket notation.
Output:

![Untitled](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%206.png)

## Destructuring

```jsx
// Destructuring
const { name, price } = product;
console.log(name);
console.log(price);
```

Destructuring allows you to unpack values from arrays or properties from objects into distinct variables. It simplifies the code and makes it more readable.

![Untitled](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%207.png)

## Object literal enhancement

```jsx
const band = 'Metallica';
const genre = 'Heavy Metal';
const songs = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

const metallica = { band, genre, songs };

console.log(metallica);
```

Object literal enhancement allows you to create objects with properties that have the same name as variables, reducing redundancy and simplifying code.

![Untitled](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%208.png)

## Object freeze

```jsx
// Objects Freeze
const product = {
    name: 'Laptop',
    price: 1200,
    stock: 5
}

Object.freeze(product);

product.stock = 10;

console.log(product.stock); // 5
```

The code above demonstrates how to use `Object.freeze()` to make an object immutable. Once an object is frozen, you cannot add, delete, or modify its properties.

## Object seal

```jsx
// Objects Seal

const product = {
    name: 'Laptop',
    price: 1200,
    stock: 5
}

Object.seal(product);

product.stock = 10;

console.log(product.stock); // 10

delete product.stock;

console.log(product.stock); // 10
```

The code above demonstrates how to use `Object.seal()` to prevent adding or removing properties from an object, while still allowing modification of existing properties.

## Destructuring two objects

```jsx
const product = {
    name: 'Laptop',
    price: 1200,
    stock: 5
}

const client = {
    name: 'Luis',
    lastname: 'Gomez',
    balance: 500
}

const { name } = product;
//const { name } = client; // Error because the variable name is already declared

const { name: nameProduct } = product; 
const { name: nameClient } = client; // The variable name is declared as nameClient

console.log(nameProduct);
console.log(nameClient);
```

The code above shows how to avoid naming conflicts when destructuring properties from multiple objects by using aliases.

```jsx
const client2 = {
    name: 'Luis',
    lastname: 'Gomez',
    address: {
        city: 'New York',
        country: 'USA'
    }
}

//const { address: { city } } = client2; // Destructuring of nested objects

//console.log(city); // New York

const { address: { city: cityClient } } = client2; // Destructuring of nested objects

console.log(cityClient); // New York

const { address: city } = client2; // Access to the object address

console.log(city); // { city: 'New York', country: 'USA' }
```

The code above demonstrates how to destructure nested objects, allowing you to extract specific properties from deep within an object structure. By using aliases, you can avoid variable naming conflicts and access the desired values easily.

## Join two or more objects

```jsx
// Join two or more objects

const product = {
    name: 'Laptop',
    price: 1200,
    stock: 5
}

const client = {
    name: 'Luis',
    lastname: 'Gomez',
    balance: 500
}

const shoppingCart = {
    amount: 1,
    ...product,
    ...client // spread operator
}

console.log(shoppingCart); 
// { amount: 1, name: 'Laptop', price: 1200, stock: 5,
// name: 'Luis', lastname: 'Gomez', balance: 500 }

const shoppingCart2 = Object.assign({amount: 2}, product, client);

console.log(shoppingCart2);
```

The code above demonstrates how to join two or more objects using the spread operator (`...`) and `Object.assign()`. This technique allows you to merge properties from multiple objects into a new object, creating a combined structure.

# 5. Strings and concatenation

```jsx
// Strings and concatenation

const product = "20 Inch Monitor";
const price = "300";
const brand = "Dell";

console.log("The product is " + product); // The product is 20 Inch Monitor
console.log(`The product is ${product}`); // The product is 20 Inch Monitor
console.log(`The product is ${product} and its price is $${price} USD`); 
// The product is 20 Inch Monitor and its price is 300
```

![Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%209.png](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%209.png)

The code above showcases different ways to concatenate strings in JavaScript. Using template literals (backticks) is a more modern and readable approach compared to the traditional concatenation using the plus (`+`) operator.

# 6. Arrays

```jsx
// Arrays

const numbers = [20, 30, 40, 50, 60];

console.table(numbers); // Shows the array in a table format

console.log(numbers[2]); // Access the element in the 3nd position

console.log(numbers[10]); // undefined

const elements = ['Hello', 123, true, null, undefined]; // Different types of data

console.table(elements);
```

The code above demonstrates how to create and use arrays in JavaScript. Arrays can contain elements of different data types and can be accessed using their index positions. The `console.table()` method provides a convenient way to display array elements in a tabular format.

Output:

![Untitled](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%2010.png)

## Modify the Array

```jsx
const tech = ['HTML', 'CSS', 'JavaScript', 'React'];

console.table(tech);

tech[3] = 'React Native'; // Modify the element in the 4th position

console.table(tech);

tech.push('Node.js'); // Add an element at the end of the array

console.table(tech);

tech.unshift('Angular'); // Add an element at the beginning of the array

console.table(tech);

tech.pop(); // Remove the last element of the array

console.table(tech);

tech.shift(); // Remove the first element of the array

console.table(tech);
```

The code above shows various methods to modify an array in JavaScript. These methods allow you to change elements, add new elements to the beginning or end of the array, and remove elements from the beginning or end of the array, providing flexible ways to manage array contents.

## Spread Operator

```jsx
const newArray = [...tech, "Vue.js"]; // Add an element at the end of the array

console.table(newArray);

console.table(tech); // The original array remains the same
```

The spread operator (`...`) allows you to create a new array by combining elements from an existing array with additional elements. This method keeps the original array unchanged while creating a modified copy.

## Filter and map

```jsx
// Filter and Map

const tech = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Vue.js'];

const tech2 = tech.filter(function (element) {
    return element !== 'React';
});

console.table(tech2); // ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Vue.js']

const tech3 = tech.map(function (element) {
    return element.toUpperCase();
});

console.table(tech3); // ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODE.JS', 'VUE.JS']
```

The code above demonstrates how to use the `filter` and `map` methods to manipulate arrays. `filter` creates a new array with all elements that pass the test implemented by the provided function, while `map` creates a new array with the results of calling a provided function on every element in the calling array.

Filter can also be written as following:

```jsx
const tech3 = tech.filter((element) => element !== 'React'))
```

or

```jsx
const tech3 = tech.filter(element => element !== 'React'))
```

## Array Destructuring

```jsx
const tech = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Vue.js'];

const [html, css] = tech;

console.log(html); // Output: HTML
console.log(css); // Output: CSS

const [ , , js, react] = tech; // Skip HTML and CSS

console.log(js); // Output: JavaScript
console.log(react); // Output: React
```

The code above shows how to use array destructuring to extract values from an array into distinct variables. By using commas, you can skip elements you don't need, making the code more concise and readable.

## Includes

```jsx
const fruits = ['Apple', 'Banana', 'Orange', 'Grape'];

const res = fruits.includes('Banana');

console.log(res);
```

Explicaction:

The `includes` method checks if a certain element exists in an array, returning `true` if it is found and `false` otherwise. This method is useful for quickly determining the presence of a specific value within an array.

## Some

```jsx
const ages = [20, 30, 40, 50, 60];

const res2 = ages.some(age => age > 50);

console.log(res2);
```

The `some` method checks if at least one element meets the condition.

## Find

```jsx
const ages = [20, 30, 40, 50, 60];

const res4 = ages.find(age => age > 40);

console.log(res4);

```

The `find` method returns the value of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns `undefined`.

## Every

```jsx
const ages = [20, 30, 40, 50, 60];

const res3 = ages.every(age => age > 10);

console.log(res3);

```

The `every` method tests whether all elements in the array pass the test implemented by the provided function. It returns `true` if all elements pass the test, otherwise `false`.

## Reduce

```jsx
const numbers2 = [1, 2, 3, 4, 5];

const res3 = numbers2.reduce((total, current) => total + current, 0);

console.log(res3); // 15
```

The `reduce` method accumulates the values of an array.

## Iterating through arrays

### For loop

```sql
const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// for loop
for (let i = 0; i < technologies.length; i++) {
    console.log(technologies[i]);
}
```

This traditional loop allows you to access each element in the array by its index, making it useful for performing operations on array elements.

### For-each

```sql
// forEach
technologies.forEach(function(technology) {
    console.log(technology);
});
```

The `forEach` method executes a provided function once for each array element, making it a more concise and readable alternative to the traditional `for` loop.

### For of

```sql
// for of
for (let technology of technologies) {
    console.log(technology);
}
```

The `for...of` loop provides a clean and concise syntax for iterating over iterable objects like arrays, making it easier to read and maintain.

# 7. Functions

## Function declaration

```jsx
function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3));
```

## Function expression

```jsx
function sum2(a, b) {
    return a + b;
}

console.log(sum2(4, 3));
```

## Arrow functions

```jsx
const sum3 = (a, b) => a + b; // If the function has only one line, the return statement is implicit

console.log(sum3(5, 3));
```

# 8. Optional chaining

Optional chaining is a new feature in JavaScript that allows you to access deeply nested object properties without worrying if the property exists or not. It is a way to simplify the process of accessing nested properties of an object.

```jsx
const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        zipCode: '10001'
    }
};

console.log(user.name); // John

console.log("This line is executed");

console.log(user.address.street); // Uncaught TypeError: Cannot read property 'street' of undefined

console.log("This line is not executed");

// The error occurs because the street property does not exist in the address object. To avoid this error, you can use the optional chaining operator ?. to access the street property.

console.log(user.address?.street); // undefined

console.log("This line is executed");
```

# 9. Nullish coalescing operator

The nullish coalescing operator ?? is another new feature in JavaScript that allows you to provide a default value when accessing a property that may be null or undefined.

```jsx
const street = user.address?.street ?? 'Other street';

console.log(street); // Other street
```

In this example, the street property does not exist in the address object, so the nullish coalescing operator returns the default value 'Other street'.

# 10. ECMAScript Modules

ECMAScript modules are the official standard format to package JavaScript code for reuse. They are defined in the ECMAScript standard on a high level, and supported in most modern browsers. The old-school approach was using scripts to load files, but that has some disadvantages, such as global variables, no dependency management, and no way to share code between files. Modules solve these problems.

First, in the HTML file, do:

```jsx
<script src="js/ECMAScript_Modules.js" type="module"></script>
```

Then, in your JavaScript files, you can use the `import` and `export` keywords to share code between files.

For example, in `funcions2.js`:

```jsx
export function sum(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
} 

```

And in `ECMAScript_Modules.js` :

```jsx
import { sum, subtract } from './functions2.js'; // Import the functions

console.log(sum(2, 3)); // 5

console.log(subtract(5, 3)); // 2
```

It can also be exported in the following way:

```jsx
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

export { sum, subtract };
```

you can put an alias as:

```jsx
import { sum as sumFuntion,subtract as subtractFunction } from './functions2.js'; // Import the functions
```

## Export default

```jsx
// Export default

export default function multiply(a, b) {
    return a * b;
}

```

The `export default` syntax allows you to export a single value from a module, which can be imported without curly braces in other files. This is useful for exporting the main functionality of a module.

```jsx
import mp, { sum, subtract } from './functions2.js'; // Import the functions

console.log(sum(2, 3)); // 5

console.log(subtract(5, 3)); // 2

console.log(mp(2, 3)); // 6
```

# 11. Fetch API with Promises

The Fetch API provides an easy way to make network requests and handle responses. It returns a promise that resolves to the Response object representing the response to the request.

```jsx
const url = 'https://jsonplaceholder.typicode.com/comments';

fetch(url)
    .then(response => { // The response object contains the response from the server
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // The json() method returns a promise that resolves with the result of parsing the body text as JSON
    })  // The json() method returns a promise that resolves with the result of parsing the body text as JSON
    .then(data => { 
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```

# 12. Fetch API with Async/Await

The Fetch API can also be used with async/await syntax, which makes the code more readable and easier to understand.

```jsx
const url = 'https://jsonplaceholder.typicode.com/comments';

const fetchData = async () => { // The async function declaration defines an asynchronous function
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();
```

Using async/await allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

# 13. Measure performance

You can measure the performance of your JavaScript code using the `performance` API. This allows you to time the execution of code blocks and identify bottlenecks.

```jsx
const url = 'https://jsonplaceholder.typicode.com/comments';

const fetchData = async () => { // The async function declaration defines an asynchronous function
    try {

        const start = performance.now();

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        const end = performance.now();

        console.log(`Time taken: ${end - start}ms`);
        
    } catch (error) {
        console.log(error);
    }
}

fetchData();
```

The code above demonstrates how to use the `performance.now()` method to measure the execution time of a code block. 

![Untitled](Javascript-Guide%2039f176c34d9c40fdb1fcd5cc2e1d4790/Untitled%2011.png)
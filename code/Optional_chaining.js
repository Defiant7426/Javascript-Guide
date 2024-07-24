// Optional chaining is a new feature in JavaScript that allows you to access deeply nested object properties without worrying if the property exists or not. It is a way to simplify the process of accessing nested properties of an object.

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

// The optional chaining operator ?. returns undefined if the property does not exist. This way, you can avoid the error and continue the execution of the program.


// Nullish coalescing operator (??)

// The nullish coalescing operator ?? is another new feature in JavaScript that allows you to provide a default value when accessing a property that may be null or undefined.

const street = user.address?.street ?? 'Other street';

console.log(street); // Other street

// In this example, the street property does not exist in the address object, so the nullish coalescing operator returns the default value 'Other street'.
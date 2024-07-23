// Arrays

const numbers = [20, 30, 40, 50, 60];

console.table(numbers); // Shows the array in a table format

console.log(numbers[2]); // Access the element in the 3nd position

console.log(numbers[10]); // undefined

const elements = ['Hello', 123, true, null, undefined]; // Different types of data

console.table(elements);

// Modify the array

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

const newArray = [...tech, "Vue.js"]; // Add an element at the end of the array

console.table(newArray);

console.table(tech); // The original array remains the same

// includes

const fruits = ['Apple', 'Banana', 'Orange', 'Grape'];

const res = fruits.includes('Banana');

console.log(res);
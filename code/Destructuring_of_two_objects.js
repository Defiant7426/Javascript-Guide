// Destructuring of two objects

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
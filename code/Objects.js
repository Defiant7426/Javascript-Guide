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

// Destructuring
const { name, price } = product;
console.log(name);
console.log(price);

// Object literal enhancement

const band = 'Metallica';
const genre = 'Heavy Metal';
const songs = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

const metallica = { band, genre, songs };

console.log(metallica);

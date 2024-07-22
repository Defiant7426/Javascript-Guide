// Objects Freeze

const product = {
    name: 'Laptop',
    price: 1200,
    stock: 5
}

Object.freeze(product);

product.stock = 10;

console.log(product.stock); // 5
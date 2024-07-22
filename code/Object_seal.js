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
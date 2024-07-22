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
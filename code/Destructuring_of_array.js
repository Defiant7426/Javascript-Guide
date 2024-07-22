const tech = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Vue.js'];

const [html, css] = tech;

console.log(html); // Output: HTML
console.log(css); // Output: CSS

const [ , , js, react] = tech; // Skip HTML and CSS

console.log(js); // Output: JavaScript
console.log(react); // Output: React
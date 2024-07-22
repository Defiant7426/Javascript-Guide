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
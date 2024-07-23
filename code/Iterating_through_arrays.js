// Iteranting through arrays

const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// for loop
for (let i = 0; i < technologies.length; i++) {
    console.log(technologies[i]);
}

// forEach
technologies.forEach(function(technology) {
    console.log(technology);
});

// for of
for (let technology of technologies) {
    console.log(technology);
}

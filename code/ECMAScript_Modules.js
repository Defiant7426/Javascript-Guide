// ECMAScript modules

// ECMAScript modules are the official standard format to package JavaScript code for reuse. They are defined in the ECMAScript standard on a high level, and supported in most modern browsers. The old-school approach was using scripts to load files, but that has some disadvantages, such as global variables, no dependency management, and no way to share code between files. Modules solve these problems.

import mp, { sum, subtract } from './functions2.js'; // Import the functions

console.log(sum(2, 3)); // 5

console.log(subtract(5, 3)); // 2

console.log(mp(2, 3)); // 6


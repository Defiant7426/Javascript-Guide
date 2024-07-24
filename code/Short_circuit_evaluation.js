// short circuit evaluation - logical operators are evaluated left to right. As soon as the result is known, the evaluation stops.

const auth = true;

auth && console.log('Authenticated'); // If the first value is true, the second value is executed

const user = null;

user || console.log('User not found'); // If the first value is false, the second value is executed

const age = 25;

age > 18 && console.log('Adult'); // If the first value is true, the second value is executed

age < 18 || console.log('Minor'); // If the first value is false, the second value is executed


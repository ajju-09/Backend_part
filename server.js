// Slugify library use for remove space between two string with some character 

let slugify = require('slugify');
const a = slugify('Some string');// by default '-'
console.log(a);

const b = slugify('Its a string', '%'); // setting character
console.log(b);

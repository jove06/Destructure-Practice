//Destructuring Arrays
const names = ['John', 'Jacob', 'Jingleheimer'];
const [firstName, secondName] = names;
console.log(`${firstName} ${secondName}`);
// => John Jacob

//Destructuring Functions
const foo = () => [1, 2, 3];
const [one, two] = foo();
console.log(two, one);
// => 1 2
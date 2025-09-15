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

//Destructuring Objects
const twoNames = {
    a: 'Jack',
    b: 'Jill'
};
const {a, b} = twoNames;
console.log('a:', a, 'b:',b);

console.log('a:', a, 'b:',b);
// => a: Jill b: Jack
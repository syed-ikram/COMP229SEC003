let numbers=[1,2,3,4,5,6];

const squares = numbers.map(n => n * n);
console.log(numbers);
console.log(squares);
let evens= [];
numbers.forEach(n => {if (n % 2 === 0) { evens.push(n);}});
console.log(evens);

let add = (a,b)=> a+b;
console.log(4+5);
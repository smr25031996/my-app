const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.map((number) => number * 2);

console.log(numbers);
console.log(doubled);

const object={
    name: "John Doe",
    age:30,
    address:"123 Main Street"
}

const properties=Object.keys(object).map((property)=>object[property]);
console.log(properties);
console.log(object.name);

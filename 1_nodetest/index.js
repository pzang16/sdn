import {add, sub, mul, showData} from './calc.js';

const data = [
    {"id": 1, "Name": "John", "Age": 20},
    {"id": 2, "Name": "david", "Age": 21},
    {"id": 3, "Name": "may", "Age": 22},
]

console.log(`x + y = ${add(10,20)}`);
console.log(`x - y = ${sub(10,20)}`);
console.log(`x * y = ${mul(10,20)}`);

showData(data);
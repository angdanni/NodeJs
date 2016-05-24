'use strict';

const AssemblyLine = require('./AssemblyLine').Factory(5);
const Car = require('./Car');
const types = Car.types();

AssemblyLine.on('error', (exception) => {
    console.error(exception.message);
});

console.log('Type of vehicle:');
for(let type in types) {
    console.log(`${type}: ${types[type]}`);
}

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let chunk = process.stdin.read();

    if (chunk !== null) {
        chunk = chunk.replace(/\n$/, '');

        let car = new Car(~~chunk);

        AssemblyLine.assemble(car);
    }
});
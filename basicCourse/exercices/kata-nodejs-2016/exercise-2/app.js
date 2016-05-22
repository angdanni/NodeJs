'use strict';

const Car = require('./Car');
var types = Car.types();

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

        car.on('assembled', (error, trace) => {
            if (error) {
                console.error(error);
            } else {
                console.log(trace);
                car.test();
            }
        });

        car.assemble();
    }
});
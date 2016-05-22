'use strict';

const Car = require('./Car');

var car = new Car(Car.types().sport);

car.on('assembled', (error, trace) => {
    if (error) {
        console.log(error);
    } else {
        console.log(trace);
        car.test();
    }
});

car.assemble();

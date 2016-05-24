'use strict';

const EventEmitter = require('events');

class Vehicle extends EventEmitter {

    constructor(wheels) {
        super();
        this.wheels = wheels;
    }

    test() {
        if (this.assembled) {
            console.log('Success in test');
        }
    }
}

module.exports = Vehicle;
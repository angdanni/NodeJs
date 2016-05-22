'use strict';

const EventEmitter = require('events');

class Vehicle extends EventEmitter {

    constructor(wheels) {
        super();
        this.wheels = wheels;
        this.assembled = false;
    }

    assemble() {
        console.log('It is assembling...');
        setTimeout(() => {
            this.assembled = true;
            this.emit('assembled', null, 'Vehicle assembled');
        }, 1000);
    }

    test() {
        if (this.assembled) {
            console.log('Success in test');
        }
    }
}

module.exports = Vehicle;
'use strict';

const _ = require('lodash');
const Vehicle = require('./Vehicle');

class Car extends Vehicle {

    constructor(type) {
        super(4);
        this.type = type;
        this.assembled = false;
    }

    static types() {
        return ['sport', 'berlina'];
    }

    assemble() {
        if (Car.types()[this.type]) {
            console.log('It is assembling...');
            setTimeout(() => {
                this.assembled = true;
                this.emit('assembled', null, 'Car assembled in ' + Car.types()[this.type] + ' type with ' + this.wheels + ' wheels');
            }, 1000);
        } else {
            this.emit('assembled', 'Cannot assemble');
        }
    }
}

module.exports = Car;

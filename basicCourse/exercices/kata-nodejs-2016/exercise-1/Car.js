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
        return {
            sport: 'sport',
            berlina: 'berlina'
        };
    }

    assemble() {
        if (this.type && Car.types().hasOwnProperty(this.type)) {
            setTimeout(() => {
                this.assembled = true;
                this.emit('assembled', null, 'Car assemble in ' + this.type + ' type and ' + this.wheels + ' wheels');
            }, 1000);
        } else {
            this.emit('assembled', 'Cannot assemble')
        }
    }
}

module.exports = Car;

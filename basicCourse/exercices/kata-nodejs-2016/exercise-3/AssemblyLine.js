'use strict';

const EventEmitter = require('events');
const Vehicle = require('./Vehicle');

class AssemblyLine extends EventEmitter {

    constructor(size) {
        super();
        this.maxSize = size;
        this.currentSize = 0;
    }

    assemble(vehicle) {

        if (!(vehicle instanceof Vehicle)) {

            this.emit('error', new TypeError('Assembly line only accepts vehicles!'));

        } else if (this.currentSize >= this.maxSize) {
            
            this.emit('error', new Error('The assembly line is at full capacity'));

        } else {

            this.currentSize ++;

            vehicle.on('assembled', (error, trace) => {
                this.currentSize --;
                if (error) {
                    console.error(error);
                } else {
                    console.log(trace);
                    vehicle.test();
                }
            });

            vehicle.assemble();
        }
    }
}

var factory;

module.exports.Factory = (size) => {
    if (!factory) {
        factory = new AssemblyLine(size);
    }
    return factory;
};
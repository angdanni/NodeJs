'use strict'

const Person = require('./Person');

class Student extends Person {

	constructor(name, teacher) {
		super(name);
		teacher.on("check", (name) => {
			if (name === this.name) {
				console.log(`${this.name}: Hello ${teacher.name}`);
				this.emit("greet");
			}
		});
	}
}

module.exports = Student;
		
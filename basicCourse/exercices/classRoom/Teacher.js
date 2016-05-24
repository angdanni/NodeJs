'use strict';

const Person = require('./Person');
const readline = require('readline');
const fs = require('fs');

class Teacher extends Person {

	constructor(name) {
		super(name);
	}

	checkStudents(names, students) {
		students.forEach((student, index)=> {
			student.on("greet", ()=> {
			console.log(`${this.name}: ${student.name} is present`);	
			});
		});

		names.forEach((studentName, index)=> {
			console.log(`${this.name}: Is ${studentName}?`);
			this.emit("check", studentName);
		});
	}
}

module.exports = Teacher;
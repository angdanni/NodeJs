'use strict';

const Person = require('./Person');
const readline = require('readline');
const logger = require('./ClassRoomLogger');
const fs = require('fs');

class Teacher extends Person {

	constructor(name) {
		super(name);
	}

	checkStudents(namesFile, annotationsFile, students) {
		students.forEach((student, index)=> {
			student.on("greet", ()=> {
				logger.log(`${this.name}: ${student.name} is present`);
				var annotationStream = fs.createWriteStream(annotationsFile, {flags: 'a', defaultEncoding: 'utf8'});

				annotationStream.write(`${student.name} is present\n`);
				annotationStream.end();
			});
		});

		var namesFileStream = fs.createReadStream(namesFile, {encoding:'utf8'});
		var studentsNames = [];

		namesFileStream.on('readable', () => {
			var name = '';
			var chunk;
			while(null !== (chunk = namesFileStream.read(1))) {
				if (chunk === '\n') {
					studentsNames.push(name);
					name = '';
				} else {
					name += chunk;
				}
			}
		}).on('close', () => {
			studentsNames.forEach((studentName, index)=> {
				logger.log(`${this.name}: Is ${studentName}?`);
				this.emit("check", studentName);
			});
		});
	}
}
module.exports = Teacher;
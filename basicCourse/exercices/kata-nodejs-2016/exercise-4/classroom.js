'use strict';

const Student = require('./Student');
const Teacher = require('./Teacher');
const filePath = __dirname + '/data/students.txt';


var nodeTeacher = new Teacher("Tarriño");

//Students who are in classroom
var students = [new Student("Dani", nodeTeacher), new Student("Juan", nodeTeacher)];


var namesList = ["Dani", "Juan"];

nodeTeacher.checkStudents(namesList, students);
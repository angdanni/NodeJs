'use strict';

const Student = require('./Student');
const Teacher = require('./Teacher');
const filePath = __dirname + '/data/students.txt';


var nodeTeacher = new Teacher("Tarriño");

//Students who are in classroom
var students = [new Student("Federico García-Lorca Hernández", nodeTeacher),
	new Student("Carlos Jesus Barron Jurado", nodeTeacher),
	new Student("Victor Manuel Puebla Hernández", nodeTeacher),
	new Student("Juan Jose Antequera Flores", nodeTeacher),
	new Student("Jose Maria Gutierrez Gutierrez", nodeTeacher),
	new Student("Jesús Diaz Vico", nodeTeacher),
	new Student("Fernando Robledo Suarez", nodeTeacher)
	];

var namesList = ["Dani", "Juan"];

nodeTeacher.checkStudents(namesList, students);
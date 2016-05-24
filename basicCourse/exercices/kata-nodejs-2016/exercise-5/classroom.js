'use strict';

const fs = require('fs');
const path = require('path');
const Student = require('./Student');
const Teacher = require('./Teacher');

var namesFile = path.join(__dirname,'data','students.txt');
var annotationsFile = path.join(__dirname,'data','studentsAnnotations.txt');
var nodeTeacher = new Teacher("Mr. Teacher");

//Students who are in classroom
var students = [new Student("Federico García-Lorca Hernández", nodeTeacher),
	new Student("Carlos Jesus Barron Jurado", nodeTeacher),
	new Student("Victor Manuel Puebla Hernández", nodeTeacher),
	new Student("Juan Jose Antequera Flores", nodeTeacher),
	new Student("Jose Maria Gutierrez Gutierrez", nodeTeacher),
	new Student("Jesús Diaz Vico", nodeTeacher),
	new Student("Fernando Robledo Suarez", nodeTeacher)
	];

nodeTeacher.checkStudents(namesFile, annotationsFile, students);
'use strict';

const fs = require('fs');
const path = require('path');
const Student = require('./Student');
const Teacher = require('./Teacher');

var namesFile = path.join(__dirname,'data','students.txt');
var annotationsFile = path.join(__dirname,'data','studentsAnnotations.txt');
var nodeTeacher = new Teacher("Tarriño");

//Students who are in classroom
var students = [new Student("Dani", nodeTeacher), new Student("Juan", nodeTeacher)];

nodeTeacher.checkStudents(namesFile, annotationsFile, students);
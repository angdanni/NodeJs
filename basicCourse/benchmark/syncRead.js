'use strict'

const fs = require('fs');

var file1Content = fs.readFileSync('./archivo1.txt');
//console.log(`Readed File 1: ${file1Content.length}`);

var file2Content = fs.readFileSync('./archivo2.txt');
//console.log(`Readed File 2: ${file2Content.length}`);

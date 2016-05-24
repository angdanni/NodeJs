'use strict'

const fs = require('fs');

fs.readFile('./archivo1.txt', (err, data)=> {
//	console.log(`Readed File 1: ${data.length}`);
});

fs.readFile('./archivo2.txt', (err, data)=> {
//	console.log(`Readed File 2: ${data.length}`);
});

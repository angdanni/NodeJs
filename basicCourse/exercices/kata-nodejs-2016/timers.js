'use strict';

setTimeout(() => {
    console.log('checkpoint 1');
    setImmediate(() => { console.log('checkpoint 2') });
}, 0);

setImmediate(() => { console.log('checkpoint 3') });

console.log('checkpoint 4');

setInterval(() => {
    console.log('checkpoint 5');
}, 1000);

//checkpoint4
//checkpoint1
//checkpoint3
//checkpoint2

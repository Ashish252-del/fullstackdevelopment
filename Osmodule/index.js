// operating system module

const os = require('os');
console.log(os.arch());

const freeMemory = os.freemem(); // gives memory in byte
console.log(freeMemory);
console.log(`${freeMemory / 1024 / 1024 / 1024}`); // ram memory
const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`)// total  gb ram I have

console.log(os.hostname);
console.log(os.platform());
console.log(os.type());


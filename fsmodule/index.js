// nodejs core  module
// it is set of code library which help us too much
//Module in Node.js is a simple or complex functionality
//organized in single or multiple JavaScript files which can be reused throughout the Node.js application.
//Node.js Module Types
// Node.js includes three types of modules:

// Core Modules
// Local Modules
// Third Party Modules
// Node.js is a light weight framework.The core modules
// include bare minimum functionalities of Node.js.These core modules are compiled into its binary distribution and
// load automatically when Node.js process starts.However, you need to
// import the core module first in order to use it in your application.
// importing fs(file system) module
const fs = require('fs')
//1 sycnchronous file module
//creat a file directly
//fs.writeFileSync("read.txt", "welcome juniors");
// if we creat file with same name is already present then content will be override
//fs.writeFileSync("read.txt", "welcome juniors in RC");

 // to concat the data
//fs.appendFileSync("read.txt", "  I am technical lead");

//to read the file
const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);

// output will be , buffer is another data type in nodejs
/* <Buffer 77 65 6c 63 6f 6d 65 20 6a 75 6e 69 6f 72 73 20 69 6e 20 52
43 49 20 61 6d 20 74 65 63 68 6e 69 63 61 6c 20 6c 65 61 64 > */
console.log(buf_data.toString());
console.log("after the sycn data") // sycnchronous will follow the sequencial order of code

// to rename the file
// fs.renameSync("read.txt", "readwrite.txt");

// Asynchronous system core modules
// in all theasynchronous functions you need to give a call back function
// otherwise it will give the error

// here ./ shows current directory
// fs.writeFile("./fsmodule/read2.txt", "haan bhai asynchronous padh rhe", (error) => {
//      if (error) console.log(error)
//     else console.log("successfully created")
// })
// fs.appendFile("./fsmodule/read2.txt", " appended successfully", (error) => {
//     if (error) console.log(error);
//     else console.log("Task completed");
// });
fs.readFile("./fsmodule/read2.txt", "utf-8", (error, data) => { console.log(data) });
console.log("after the asyndata"); // if above operation is taking time then it will excute first

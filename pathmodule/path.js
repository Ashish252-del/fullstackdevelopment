// the path module provide utilities for working with file and directory paths. It can be accessed using

const path = require('path');
// to dee the directory of file
console.log(path.dirname('E:/self-practice/bio.txt'))
// to see the extainsion name
console.log(path.extname('E:/self-practice/bio.txt'))
// to see the name of file
console.log(path.basename('E:/self-practice/Osmodule/osmod.js'))
// to get all properties of file as a object
const mypath = path.parse('E:/self-practice/Osmodule/osmod.js')
console.log(mypath);
// to get the particular value of key for ex name of the file
console.log(mypath.name);



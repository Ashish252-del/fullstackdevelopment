// CRUD operation

const fs = require('fs');
// first parameter should be name and path of folder
//fs.writeFileSync("bio.txt", "haan bhai ho gya kaam");
//fs.appendFileSync("bio.txt", " Nhi karunga");
// to read the data without getting the buffer data we need to do encoding

// UTF - 8(UCS Transformation Format 8) is the World Wide Web's most common character encoding. Each character is represented by one to four bytes.
// UTF - 8 is backward - compatible with ASCII and can represent any standard Unicode character.
 const data = fs.readFileSync("bio.txt", "utf-8");
console.log(data);

// to delete file
//

// to delete the folder
// fs.rmdir("thapa") // pass the path as parameter

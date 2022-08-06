// JSON stands for JavaScript Object Notation.
//JSON is lightweight format for storing and transporting data.
// JSON is often used when data is sent from server  
const bioData = {
    name: "Ashish",
    age: 21,
    college: "mmmut"
};
// to convert object in json we use function JSON.stringify();
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
// output will be json (string)

// to convert from json to object we use function JSON.parse();
const objData = JSON.parse(jsonData);
console.log(objData);
 
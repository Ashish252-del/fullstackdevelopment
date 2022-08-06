// convert to JSON
// add in another file
//read file
// again convert back to js obj orinal
const fs = require("fs");
const { fstat } = require("fs");

// console.log
const profile = {
    name: "Manish",
    age: 18,
    channel: "neet"
};
const jsonData = JSON.stringify(profile);

fs.writeFile("./json.txt", jsonData, (err) => {
    if (err) console.log(err.message);
    console.log("done")
});
fs.readFile("json.txt", "utf-8", (err, data) => {
    const org = JSON.parse(data);
    console.log(data);
    console.log(org);
})
 
// nmp is node package manager which provides us different modules
//npm install chalk@4.1.2
// scope of npm module chalk and validator is only till npmmod
// it will not work for other file outside the npmmod
// here we have imported chalk which give us many functionalities for 
// colour nd all

const chalk = require('chalk');
// importing validator
// npm install validator
const validator = require("validator");
console.log(chalk.red.inverse("Ashish")); 
// checking for email
const res = validator.isEmail("ashishpatel3946@gmail.com")
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));
const re = validator.isEmail("ashishpatel394mail.com")
console.log(re ? chalk.green.inverse(re) : chalk.red.inverse(re));

// to install nodemon globlly , it is accessible for all the file
// it will work for all file
// npm i nodemon -g and press enter
// to go outside the nodemon press ctrl+c twice
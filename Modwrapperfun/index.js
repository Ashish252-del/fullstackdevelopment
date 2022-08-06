// in node js every file is known as module
//() is grouping function
// syntaax of Module wrapper function
// everything inside will be private
// whenever we write code then node js itself attached the wrapper function
// that's why we are able to eccess the require , exports etc
(function (email, require, module, _filename, _dirname) {
    const name = "Ashish";
    console.log(name);
})(); 
// it call it self no need to call 
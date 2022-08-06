// Event Module
// Node.js has a built-in module , called "Events",
// where you can create-, fire , listen for - your own event

// Example 1 - Registering for the event to be fired only one time using once
// Example 2 - Create an Event emitter instance and register a couple of callbacks
// Example 3 - Registering for the event with callback parameter

// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
// To include the built -in Events module use the require() method.In addition,
//     all event properties and methods are an instance of an EventEmitter object.
//  To be able to access these properties and methods, create an EventEmitter object:
// const EventEmitter = require("events");
 // creating object
 const events = require('events');
const event = new events.EventEmitter();


// we have to register brfore emitting

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
event.on('scream', myEventHandler);

//Fire the 'scream' event:
event.emit('scream'); // event name in emit

event.on('saymyname', () => {
    console.log("my name is Ashish")
})
event.on('saymyname', () => {
    console.log("my name is Manish")
})
event.on('saymyname', () => {
    console.log("my name is Abhay")
})
event.emit("saymyname");

event.on('checkpage', (a,b) => {
    console.log("my name is   ", a, b)
})

 // creating my own event

event.emit("checkpage",20,"ok") 

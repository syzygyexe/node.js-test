// let time = 0;

// setInterval(function () {
//   time += 2;
//   console.log(time + " seconds passsed");
//   if (time > 5) {
//     clearInterval(timer);
//   }
// }, 3000);

// console.log(__dirname);
// console.log(__filename);

// normal function statement
// function sayHi() {
//   console.log("Hi");
// }

// sayHi();

// function callFunction(fun) {
//   fun();
// }

// // function expression
// const sayBye = function () {
//   console.log("bye");
// };

// callFunction(sayBye);

// var stuff = require("./counter");

// console.log(stuff.counter(["shaun", "crystal", "ryu"]));
// console.log(stuff.adder(5, 6));
// console.log(stuff.adder(stuff.pi, 5));

// var events = require("events");

// var myEmmiter = new events.EventEmitter();

// myEmmiter.on("someEvent", function (msg) {
//   console.log(msg);
// });

// myEmmiter.emit("someEvent", "The event was emitted");

// var events = require("events");
// var util = require("util");

// var Person = function (name) {
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person("james");
// var mary = new Person("mary");
// var ryu = new Person("ryu");
// var People = [james, mary, ryu];

// People.forEach(function (Person) {
//   Person.on("speak", function (mssg) {
//     console.log(Person.name + " said: " + mssg);
//   });
// });

// james.emit("speak", "hello everyone");
// code

// var fs = require("fs");

// fs.readFile("readme.txt", "utf8", function (err, data) {
//   fs.writeFile("writeme.txt", data, (err) => {
//     console.log(err);
//   });
// });

var fs = require("fs");

// fs.unlink("writeme.txt", function (err) {
//   if (err) throw err;
//   console.log("File deleted");
// });

// fs.mkdirSync("stuff");
// fs.rmdirSync("stuff");

// fs.mkdir("stuff", function () {
//   fs.readFile("readme.txt", "utf8", function (err, data) {
//     console.log("readFile ERROR: ", err);
//     fs.writeFile("./stuff/writeme.txt", data, (err) => {
//       console.log("File has been succesfully created");
//       console.log("writeFile ERROR: ", err);
//     });
//   });
// });

// fs.unlink("./stuff/writeme.txt", function () {
//   fs.rmdir("stuff", function (err) {
//     console.log(err);
//   });
// });

// const http = require("http");

// const server = http.createServer(function (req, res) {
//   console.log("request was made: " + req.url);
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   // sending headers and response body
//   res.end("Hey ninjas");
// });

// server.listen(3000, "127.0.0.1");
// console.log("yo dawgs, now listening to port 3000");

// var http = require("http");
// var fs = require("fs");

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/profile/name:", function (req, res) {
  res.send("You are vievwing the profile of " + req.params.name);
});


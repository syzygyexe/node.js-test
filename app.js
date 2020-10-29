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

// var myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf8");
// var myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt");

// listen for an event data, and fire chunk whenever we receive any chunk of the data
// myReadStream.on("data", function (chunk) {
//   console.log("new chunk received:");
//   myWriteStream.write(chunk);
// });

// var http = require("http");
// var fs = require("fs");

// const server = http.createServer(function (req, res) {
//   console.log("request was made: " + req.url);
//   res.writeHead(200, { "Content-Type": "text/html" });
//   var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
//   myReadStream.pipe(res);
// });

// server.listen(3000, "127.0.0.1");
// console.log("Server is running");

// var http = require("http");
// var fs = require("fs");

// const server = http.createServer(function (req, res) {
//   console.log("request was made: " + req.url);
//   res.writeHead(200, { "Content-Type": "application/json" });
//   const myObj = {
//     name: "Ryu",
//     job: "Ninja",
//     age: 29,
//   };
//   res.end(JSON.stringify(myObj));
// });

// server.listen(3000, "127.0.0.1");
// console.log("Server is running");

// var http = require("http");
// var fs = require("fs");

// const server = http.createServer(function (req, res) {
//   console.log("request was made: " + req.url);
//   if (req.url === "/home" || req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/index.html").pipe(res);
//   } else if (req.url === "/contact") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/contact.html").pipe(res);
//   } else if (req.url === "/api/ninjas") {
//     var ninjas = [
//       { name: "ryu", age: 29 },
//       { name: "yoshi", age: 32 },
//     ];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(ninjas));
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/404.html").pipe(res);
//   }
// });

// server.listen(3000, "127.0.0.1");
// console.log("Server is running");

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("this is the home page");
});

app.get("/contact", function (req, res) {
  res.send("this is the contact page");
});

app.get("/profile/:id", function (req, res) {
  res.send("You requested to see a profile with the id of " + req.params.id);
});

app.listen(3000);


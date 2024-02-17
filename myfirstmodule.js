//exports.myDateTime = function () {
  //return Date();
//};

// var http = require('http');
// http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/html'});
//  res.write(req.url);
//  res.end();
// }).listen(8080);


// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);

//////////////////////////////////////////////
// Read Files

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('first.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);


/////////////////////////////////////////
// Creating Files

// var fs = require('fs');

// fs.appendFile('learn.txt', 'Hello content Updated!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

/////////////////////////////
// Create empty file using the open()
// var fs = require('fs');

// fs.open('abcd.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// ////////////////////////////

// Create a new file using the writeFile() method:

  // var fs = require('fs');

  // fs.writeFile('abcd.txt', 'Hello Ashfaque! UPDATED', function (err) {
  //   if (err) throw err;
  //   console.log('Saved!');
  // });


////////////////////////////////////////////

// Delete "mynewfile2.txt":
// var fs = require('fs');

// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

///////////////////////////////////

// Rename "mynewfile1.txt" to "myrenamedfile.txt":

// var fs = require('fs');

// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

///////////////////////////////////

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

// /*The parse method returns an object containing url properties*/
console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// /*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.month);


/////////////////////////////

// var http = require('http');
// var url = require('url');
// var fs = require('fs');


// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);



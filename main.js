var one = require('./subfolderOfSorts/one.js').addStuffFunc
var theNumbers = require('./two.js')
var fs = require('fs');

var commandLineArgOfSorts = process.argv[2];
console.log(commandLineArgOfSorts)

fs.readFile('./' + commandLineArgOfSorts, 'utf8', function(err, data) {
  var theData = JSON.parse(data);
  theData[0].age = 42;
  var changedData = JSON.stringify(theData);
  console.log("changed data", changedData)
  fs.writeFile('./something.json', 'hello world', function(err) {
  })
})
//
// console.log(process.argv);
//[{"name":"John Doe","age":42}]

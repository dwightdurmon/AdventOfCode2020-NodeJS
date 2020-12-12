const lineReader = require('line-reader');




let invalidEntries = 0

lineReader.eachLine('password-input.txt', function(line) {
  invalidPassword = false
  var [min,max,char,pass] = line.split(",");


  console.log("Pass : [" + pass + "]");
  console.log("Char : [" + char + "]");
  console.log("Min  : [" + min + "]");
  console.log("Max  : [" + max + "]");

  var charCount = pass.split(char).length - 1;
  console.log("Count: [" + charCount + "]");

  if (charCount < min || charCount > max) invalidPassword = true 
  


  if (invalidPassword) invalidEntries = invalidEntries + 1  
//  console.log("[" + charCount+"]");
//  console.log("[" + charCount+"]");
//   console.log(charCount + ":" + data);
console.log("Total valid: " + (1000 - invalidEntries))

});


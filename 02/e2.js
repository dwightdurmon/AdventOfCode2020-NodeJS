const lineReader = require('line-reader');




let validEntries = 0

lineReader.eachLine('password-input.txt', function(line) {
  validPassword = false
  var [min,max,char,pass] = line.split(",");


  console.log("Pass : [" + pass + "]");
  console.log("Char : [" + char + "]");
  console.log("Min  : [" + min + "]");
  console.log("Max  : [" + max + "]");

  console.log("Cmin : " + pass[min-1])

  if (pass[min-1] != char && pass[max-1] == char)
    validEntries = validEntries + 1
  else if (pass[min-1] == char && pass[max-1] != char)
    validEntries = validEntries + 1
  
  console.log("Total valid: " + (validEntries))

});


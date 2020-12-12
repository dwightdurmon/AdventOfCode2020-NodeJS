var lineReader = require('line-reader');
let Validator = require('validatorjs');

var passportData = new Map();

validPassports=0

lineReader.eachLine('input.txt', function(line, last) {
    if (line.length == 0) {
        validatePassport()
    } else {
        addMapData(line)
    }
  
    if (last) {
        addMapData(line)
        validatePassport()
        console.log('Valid Passport Count: ' + validPassports)
        return false; // stop reading
    }
  });

function validatePassport() {
    isValidPassport = checkData()
    if (isValidPassport) {
        validPassports++
    }
    passportData.clear()
}

function addMapData(data) {
            keys = data.split(" ")
            keys.forEach(element => {
                [k,v] = element.split(':')
                passportData.set(k,v)
            });
}
function checkData() {
    let rules = {
        ecl: 'required',
        byr: 'required',
        iyr: 'required',
        eyr: 'required',
        pid: 'required',
        hgt: 'required',
        hcl: 'required'
    };

    const passportObject = {};
    for (const key of passportData.keys()) {
        passportObject[key] = passportData.get(key);
    }
    let validation = new Validator(passportObject, rules);
    if (validation.passes()) {
        return true
    } else {
        return false
    }
    
}
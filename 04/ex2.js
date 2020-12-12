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


Validator.register('validPid', function(value, requirement, attribute) { // requirement parameter defaults to null
    return value.match(/^[0-9]{9}$/);
} , 'The :attribute pid is not a valid pid');

Validator.register('validHcl', function(value, requirement, attribute) { // requirement parameter defaults to null
    return value.match(/^#[0-9a-z]{6}$/);
} , 'The :attribute hcl is not valid');

Validator.register('validHgt', function(value, requirement, attribute) { // requirement parameter defaults to null
    [_,number,scale] = value.split(/^(\d+)(cm|in)$/) 

    if (scale == 'in' && (number >= 59 && number <= 76)) {
        return true
    } else if (scale == 'cm' && (number >= 150 && number <= 193)) {
        return true
    } else {
        return false
    }
} , 'The :attribute hgt is not valid');

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
        byr: "required|min:1920|max:2002",
        iyr: 'required|min:2010|max:2020',
        eyr: 'required|min:2020|max:2030',
        pid: 'required|validPid',
        hgt: 'required|validHgt',
        ecl: 'required|in:amb,blu,brn,gry,grn,hzl,oth',
        hcl: 'required|validHcl'
    };

    const passportObject = {};
    for (const key of passportData.keys()) {
        if (key == 'byr' || key == 'iyr' || key == 'eyr') {
            passportObject[key] = parseInt(passportData.get(key));
        } else {
            passportObject[key] = passportData.get(key);
        }
        
    }
    let validation = new Validator(passportObject, rules);
    if (validation.passes()) {
        return true
    } else {
        return false
    }
    
}
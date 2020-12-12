var fs = require('fs');
var patterns = fs.readFileSync('input.txt').toString().split("\n");

var totalLines = patterns.length

//console.log('Total Lines: ' + totalLines)

function countTrees(moveRight,moveDown) {
    var tempCol
    var currentCol=0 // 0-based
    var treesFound = 0

    for (let row = 0; row < patterns.length; row=row+moveDown) {
        const line = patterns[row];

        tempCol = currentCol

        if (tempCol > line.length) tempCol = (tempCol % line.length)

        checkChar = line[tempCol]

        if (checkChar == "#") treesFound++

        //console.log(tempCol,checkChar)
        currentCol = currentCol + moveRight
        
    }
    return treesFound
}

var answer = countTrees(3,1)

  console.log("Trees Found: " + answer)
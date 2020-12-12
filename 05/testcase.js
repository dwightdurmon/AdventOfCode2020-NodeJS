function createData(max) {
    var dataset = []
    for (let index = 0; index <= max; index++) {
        dataset.push(index);
        
    }
    return dataset
}

function splitData(type,data, keepSection) {
    var firstIndicator, secondIndicator
    const half = Math.ceil(data.length / 2);    
    const firstHalf = data.splice(0, half)
    const secondHalf = data.splice(-half)

    switch (type) {
        case 'R':
            firstIndicator = "F"
            secondIndicator = "B"
            break;
        case 'S':
            firstIndicator = "L"
            secondIndicator = "R"        
            break;
        
        default:
            break;
    }
    switch (keepSection) {
        case firstIndicator:
            dataset = firstHalf
            break;
        case secondIndicator:
                dataset = secondHalf
                break;           
        default:
            break;
    }
    return dataset
}


function getPos(dataset) {
     
    
    return dataset
}

function splitRowSeat(code) {
    row = code.substr(0,7)
    seat = code.substr(7)
    return [row,seat]
}

function checkcase(code,answer) {
    dataRset = createData(127)
    dataSset = createData(7)
    
    rowSteps = splitRowSeat(code)[0].split('')
    seatSteps = splitRowSeat(code)[1].split('')
    rowSteps.forEach(element => {
        dataRset = splitData('R',dataRset,element)
    });

    seatSteps.forEach(element => {
        dataSset = splitData('S',dataSset,element)
    });



    answer = dataRset[0] * 8 + dataSset[0]
    console.log("Row: " + dataRset[0] + ", Seat: " + dataSset[0] + ", Seat ID: " +  answer)
    console.log("Seat ID should be " + answer + ".")
    console.log("------------------------")
}
  
function main() {
    checkcase('FBFBBFFRLR',357)
    checkcase('BFFFBBFRRR',567)
    checkcase('FFFBBBFRRR',119)
    checkcase('BBFFBBFRLL',820)
}

if (require.main === module) {
    main();
}


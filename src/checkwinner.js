export default function checkWinner(boardArray, updateSize) {
			
    //[1,2,3,4,5,6,7,8,9]
    let testX = 0
    let testO = 0
    var blockStart = 0
    var blockEnd = updateSize
    let lastPosition = []


    

    //For each lines
    for (let i = 0; i < updateSize; i++) {
        lastPosition = []
        //For each buttons
        for (let j = blockStart; j < blockEnd; j++) {
            if (boardArray[j] === 'X') {
                testX += 1
            } else if (boardArray[j] === 'O') {
                testO += 1
            }
            lastPosition.push(j)
        }
        if (testX === updateSize || testO === updateSize) {
            return lastPosition
        }

        testX = 0
        testO = 0
        blockStart += updateSize
        blockEnd += updateSize
    }

    testX = 0
    testO = 0
    blockStart = 0
    blockEnd = updateSize * updateSize - 2

    //[1,2,3,4,5,6,7,8,9]
    //[1,2,3,4, 5,6,7,8,  9,10,11,12,   13,14,15,16]

    //For each columns
    for (let i = 0; i < updateSize; i++) {
        lastPosition = []
        //For each buttons
        for (let j = blockStart; j < blockEnd; j += updateSize) {
            // console.log(j)
            if (boardArray[j] === 'X') {
                testX += 1
            } else if (boardArray[j] === 'O') {
                testO += 1
            }
            lastPosition.push(j)
        }
        if (testX === updateSize || testO === updateSize) {
            return lastPosition
        }

        testX = 0
        testO = 0
        blockStart += 1
        blockEnd += 1
    }

    testX = 0
    testO = 0
    blockStart = 0
    blockEnd = updateSize * updateSize
    let increment = updateSize + 1
    //[1,2,3,4,5,6,7,8,9]
    //[0,4,8]
    //[6,4,2]
    //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    //[0,4,8]
    //[6,4,2]
    //For each diags
    for (let index = 0; index < 2; index++) {
        lastPosition = []
        for (let i = blockStart; i < blockEnd; i += increment) {
            // console.log(i)
            if (boardArray[i] === 'X') {
                testX += 1
            } else if (boardArray[i] === 'O') {
                testO += 1
            }
            lastPosition.push(i)
        }
        if (testX === updateSize || testO === updateSize) {
            return lastPosition
        }

        testX = 0
        testO = 0
        blockStart = updateSize - 1
        blockEnd = updateSize * updateSize - 2
        increment = updateSize - 1 //2 4 6, or 3,6,9,12
    }

}
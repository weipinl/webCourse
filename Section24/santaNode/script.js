const fs = require('fs');
let leftParam = 0; 
let rightParam = 0;
let totalStair = [];

fs.readFile('./input.txt', (err, data) => {
    console.time('calculateStairs');
    if (err) {
        console.log('errrr');
    }

    totalStair = data.toString();

    for (i = 0; i < totalStair.length; i++) {
        if (totalStair[i] === '(') {
            leftParam++;
        } else {
            rightParam++;
        }
        if ((leftParam - rightParam) === -1) {
            console.log('count ', i, 'right paranthesis: ',rightParam, 'left paranthesis ', leftParam);
        }
    }

    if (rightParam >= leftParam) {
        console.log('you are at floor 0')
    } else {
        console.log('you are at floor ', leftParam-rightParam);
    }

    console.timeEnd('calculateStairs');
})

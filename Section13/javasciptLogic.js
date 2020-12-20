const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let dupNum = [];


function compareNumber(a, b) {
    return a -b;
}

const sortedArray = array.sort(compareNumber);

// function answer(someArray) {
//     for (let i = 0; i < someArray.length; i++) {
//         console.log(`the number is ${someArray[i]}`)
//         if ((i === 0) || (someArray[i] === someArray[i-1])) {
//             dupNum.push(someArray[i]);
//         } else {
//             result.push(dupNum);
//             dupNum = [];
//             dupNum.push(someArray[i]);
//         }
//     }ddd
//     return result;
// }

// console.log(answer(sortedArray))

let repeatedValue = 0;
let tempArray = [];
let result = [];

function answer1(someArray) {
    
    for (i = 0; i < someArray.length; i++) {
        debugger
        if ((i === 0) || (someArray[i] === tempArray[tempArray.length-1])) { //if it's the first number of if the number is the same as the previous number
            tempArray.push(someArray[i]) //add it to temp array 
            console.log(tempArray)
        } else {
            if(tempArray.length === 1){
                result.push(tempArray[0]);
            }else{
                result.push(tempArray);
            }
            console.log(tempArray);
            tempArray = [someArray[i]];
        }
    }
    result.push(tempArray); //takes care of the last cycle
    return result;
}

console.log(answer1(sortedArray))

//idea
// function answer2(someArray) {
//     for (i = 0; i < someArray.length; i++) {
//         if (it's the first digit or same as the next one) {
//             push it to tempArray
//         } else if (if the current number is different than the previous one, reset the temp and push it to result) {

//         } else {
//             push the current number to result
//         }
//     }
// }

// function answer2(someArray) {
//     debugger
//     for (i = 0; i<someArray.length; i++) {
//         if ((i === 0) || (someArray[i] === someArray[i+1])){ //if it's the first number or if the current num is the same as the next number
//             tempArray.push(someArray[i]);
//         } else if (someArray[i] !== someArray[i-1]) {
//             result.push(tempArray);
//             temp = [];
//         } else {
//             result.push(someArray[i]);
//         }
//     }
//     return result;
// }

// console.log(answer2(sortedArray));
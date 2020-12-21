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

const arr2 = [1,"2","3",5,3,6,"7","4","6",4];
let newArray = [];
let sorted = arr2.sort((a,b) => a - b); 
console.log(sorted)
const someNumber = sorted.filter(element => typeof(element) === 'number');
console.log(someNumber);
const someArray = sorted.filter(element2 => typeof(element2) === 'string');
console.log(someArray);
newArray.splice(0, 0, someNumber, someArray);
console.log(newArray);

const numbers = [1,2,3,4,5,6,7];
const resultArray = []

function findTwoSum (someArray, target) {
    for (i = 0; i < someArray.length; i++) {
        for (nextIndex = i + 1; nextIndex < someArray.length; nextIndex++) {
            if ((someArray[i] + someArray[nextIndex]) === target) {
                console.log(`i = ${someArray[i]}, and nextIndex = ${someArray[nextIndex]}`);
                resultArray.push(someArray[i],someArray[nextIndex]);
                return resultArray
            } 
        }
    }
    console.log('target number is not acheievable with these number')
}

console.log(findTwoSum(numbers, 13))
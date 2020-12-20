const flattened = [[0,1], [2,3], [4,5]].reduce(
    (a, b) => a.concat(b), []
);
//a is the accumulator
//b is the array 

const flattened = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array) => {
        console.log('array', array);
        console.log('accumulator', accumulator);
        return accumulator.concat(array);
    }, []);
//wants the accumulator to starts out with an emtpy array []
//concat does shallow copy


//instead of console.log, we can use debugger
const flattened = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array) => {
        debugger
        return accumulator.concat(array);
    }, []);
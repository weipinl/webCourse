const array = [1, 2, 10, 16];
const double = [];

const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log(double);

// map, filter, reduce 

const mapArray = array.map((num) => {
    return num * 2; //map would always have to return something 
})

//critical difference between map and forEach 
//whenever you want to take some action on something like an array, you want to use map instead of forEach
//map has a restrction on the operataion, it expects the operatraion to return an element 


//filter

const filterArray = array.filter(num => {
    return num > 5
}) //filter would return just like map

console.log(filterArray);

//reduce 

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 10);

console.log('reduce', reduceArray);
//accumulator is something where we can store the information that happens in the body of the function
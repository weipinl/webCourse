//Pass by Value
var a = 5;
var b = 6;

b++; 

console.log(a); //return 5
console.log(b); //return 6

//Pass by reference
let obj1 = {name: "Yao", password: 123};
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1); //return {name: "Yao", password: "easypeasy"}
console.log(obj2); //return {name: "Yao", password: "easypeasy"}


var c = [1,2,3,4,5];
// var d = c; //pass by reference
var d = [].concat(c); //this would clone the array
d.push(1234123523)
console.log(c);

let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj); //this would clone the obj. assign has two parameber, (where, from)
let clone2 = {...obj}; // this would clone the object as well

obj.c = 5;
console.log(clone); //THIS IS NOT EFFECTED 
console.log(obj);
console.log(clone2);

//obj inside of an obj

let obj = {
    a: 'a', 
    b: 'b', 
    c: {
        deep: 'try and copy me'
    } 
};
let clone = Object.assign({}, obj); //this would clone the obj. assign has two parameber, (where, from)
let clone2 = {...obj}; //this is shallow cloning
let superClone = JSON.parse(JSON.stringify(obj)) //this would covert the obj to string first and then change it to obj 
//deep cloning would have performance issue if the obj is big.

obj.c.deep = "hahahahhaa";
console.log(clone); //all of these output would get effected if it's shallow cloning (first layer)
console.log(obj);
console.log(clone2);
console.log(superClone); //this would properly clone the obj and obj.c.deep would NOT get affected. deep: 'try and copy me'
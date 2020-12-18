function bb() {
    var a = "hello";
}

// Root Scope (window)
var fun = 5; 

function funFunction() {
    //child scope
    var fun = "hellooooo";
    console.log(1, fun);
}

function funerFunction() {
    //child scope
    var fun = "Byeee";
    console.log(2, fun);
}

function funnestFunction() {
    //child scope
    fun = "AHHHHH";  //this would replace the global variable
    console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funnestFunction();

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = "Your account # is " + ( isUserValid(false) ? "1234" : "not available");

//new way to declare variable let + const

const player = 'bobby'; //you cannot reassign to a new variable
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;  //for let, anytime it is wrapped around {}, it would create a new scope
    console.log('inside', wizardLevel);
} //if this was a function and wizardLevel is variable, then the wizard would be false for both output
console.log('outside ' + wizardLevel);

const obj = {
    player: 'booby',
    experience: 100,
    wizardLevel: false
} //you cannot reasign the obj (ex. obj = 5;), BUT, you can change the property of the obj (obj.wizardLevel = false);

//Destructuring 
const obj = {
    player: 'booby',
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj; //same as line 64/65
let { wizardLevel } = obj; //same as line 66

const name = 'john snow';

const obj = {
    [name]: 'hello', 
    ['ray' + 'smith']: 'hihi'
}

const a = "Simon";
const b = true;
const c = {};

//Template strings
const name = "Sally";
const age = 34;
const pet = "horse";

const greeting = "Hello" + name + "you seem to be doing"; // usual way
const greetingBest = `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`;

//default arguments 

function greet(name='', age=30, pet='cat'){
    return `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`;
}

//Symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// symbol are use to create unique type, so you are sure there won't be any conflict

//arrow functions

function add(a,b) {
    return a + b;
}

const add = (a, b) => a + b; //if you have single line return, you can write it in one line 

const add = (a, b) => {
    return a + b;    //if there are other lines
}
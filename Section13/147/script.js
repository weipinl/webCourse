function first() {
    var greet = 'Hi';
    function second() {
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();

//Modern way to write it 

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran, the function executed. It is never going to be executed again. BUT it is going to remmeber that there are reference to those variables so the child scope always has access to the parents scope

//Currying 
//accept parameter one at a time
const multiply = (a,b) => a * b;
const curriedMultiple = (a) => (b) => a * b;
curriedMultiple(3)(4);
// why do we use currying? more extensible 
const multiplyBy5 = curriedMultiple(5); //multiple number by 5

//Compose
//act of putting two function together to form a third function where the output of one function is the input of the other
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

//Avoiding Side Effects, functional purity
//side effect 
var a = 1;
function b() { 
    a = 2; //affecting the outside
} //function should be in its own universe 

//functional purity 
//we always return something (deterministic)

//1. reference type 
[] === [] //false
[1] === [1] //false

var obj1 = { value: 10 };
var obj2 = obj1;
var obj3 = { value: 10 }

obj1 === obj2 //true
obj1 === obj3 //false

obj1 = 15;
obj1 //return 15
obj2 //would return 15 as well

//2. context vs scope
//scope is created when you see {}
function b() {
    //new scope in here
    let a = 5;
}

const obj4 = {
    a: function() {
        console.log(this);
    }
}
//this = what object it is inside of


//3. instantiation 
//make a copy of an obj and reuse the code
class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}.`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        //console.log('wizard', this); //this line wouldn't work, has to call "super" first before access "this"
        super(name, type);
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEEEEEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer'); 
const wizard2 = new Wizard('Sean', 'Dark Magic'); 
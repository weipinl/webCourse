//ES2020

// BigInt
// new Type in javascript
// MAX_SAFE_INTERGER
// https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin
// BigInt is when we want to use a number bigger than MAX_SAFE_INTEGER and want to do something calculation with it

9007199254740991 + 10; //will not have the proper result
9007199254740991n + 10n; //will output the result properly


//Operation Chaining Operator
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let andrei_pokemon = {
    raichi: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    }
}

//what we usually do 
let weight = will_pokemon.pikachu.weight
console.log(weight)

let weight2 = andrei_pokemon.pikachu.weight //this wouldn't work because andrei does NOT have pikachu
console.log(weight)


if (andrei_pokemon && andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
    let weight2 = andrei_pokemon.pikachu.weight;
    console.log(weight2)
} else {
    let weight2 = undefined;
    console.log(weight2)
}

//instead of the above if statement, NOW we can write it as the following

let weight3 = andrei_pokemon?.pikachu?.weight

console.log(weight3); // would output the same as the previous if statement. would return undefined


//Nullish Coalescing Operator ??
//can be use instead of the || (or operator)

let andrei_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

let power = andrei_pokemon?.pikachu?.power || 'no power' // or operator (||) checks if the statement is true, if it's not, it would output 'no power'
console.log(power); //would output as false, because empty string = false


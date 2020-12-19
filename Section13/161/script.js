//flat() 
//can use on array

const array = [1,2,3,4,5];
const array2 = [1,[2,3],[4,5]];
const array3 = [1,2,[3,4,[5]]];
array.flat();
array2.flat(); //no nested array anymore
array3.flat(); //[1, 2, 3, 4, Array(1)] only flatten one level 
array3.flat(2) //it would flatten two layers
//if you don't know how many layers, you could give a big number that would cover it. ex array.flat(10);

const entries = ['bob', 'sally' ,,,,,'cindy']
entries.flat(); //we can use flat() to clean up the data as well

//flatMap()


const userEmail = '              edddddddeagle@gmail.com';
const userEmail2 = 'jonnnydadaf@gmail.com          ';

userEmail.trimStart(); //would trim the beginning
userEmail2.trimEnd(); //would trim the end.


//fromEntries
//transform a list value pairs into an object
userProfiles = [['commanderTom', 23], ['derekZlander', 40],['hansel', 18]]

Object.fromEntries(userProfiles);

const obj = Object.fromEntries(userProfiles);
Object.entries(obj) //does the opposite 

//update try/catch block
try {
    bob + 'hi'; //this would throw an error and go to the catch block
} catch(error) {  //before you would have to pass in a parameter, but with ES10, you dont have to 
    console.log('you mesed up' + error);
}

//ES10 update
try {
    bob + 'hi'; //this would throw an error and go to the catch block
} catch { 
    console.log('you mesed up');
}
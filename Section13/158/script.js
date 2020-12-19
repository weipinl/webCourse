//string paddings
//.padStart();
//.padEnd();

'Turtle'.padStart(10); //would use up total of 10 spaces.
'Turtle'.padEnd(10); //10 "total" space used including the string

//trailing comma/parameter and call
const fun = (a,b,c,d,) => {
    console.log(a)
}

fun(1,2,3,4,) //this is still valid javascript

Object.values
Object.entries 
Object.keys

let obj = {
    username0: 'Santa', 
    username1: 'Rudolf', 
    username2: 'Mr.Grinch'
} 
//because it's not an array, you cannot do map/filter/reduce

//before you can use the following 
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})
//output
    //username0 Santa
    //username1 Rudolf
    // username2 Mr.Grinch

//Thing gets simpler when you use Object.values && Object.entries 

Object.values(obj).forEach(value => {
    console.log(value);
})

Object.entries(obj).forEach(value => {
    console.log(value);
})


Object.entries(obj).map(value =>{
    return value[1] + value[0].replace('username', '');
})

//Async Await
const basket = ['apple', 'orange', 'grapes'];
const detailedBasket = {
    apple: 5, 
    orange: 10, 
    grapes: 100
}

for ( let i = 0; i < basket.length; i++ ){
    console.log(basket[i])
}  //first way

basket.forEach(item => {
    console.log(item); 
}) //second way

// for of loop (new feature of javascript)
// Iterating over the array, strings 
for (item of basket) {
    console.log(item);
}

// for in loop
// allows us to loop over and see the object property
// we are NOT ITERATING HERE, we are "enumerating"
for (item in detailedBasket) {
    console.log(item); // we can know what we are shopping here 
} 
//output 
    //apple
    //orange
    //grapes


//this would work as well, since we can enumerating array
    for (item in basket) {
        console.log(item); //this would return 0 1 2
    } 

//basket in obj form would be like 
basket = {
    0: 'apple', 
    1: 'oranges',
    2: 'grape' 
}
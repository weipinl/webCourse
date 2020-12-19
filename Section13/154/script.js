//Type Coercion
1 == '1' //true 

if (1) {
    console.log(5);
} //coerce 1 to true

-0 === +0 //true
Object.is(-0,+0) //false 
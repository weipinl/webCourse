const fs = require('fs'); //fs = filesystem

//if no encoding is specified, then the raw buffer is returned
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('errrr');
    }
    console.log('1 ', data.toString()); //without toString(), it would return <Buffer 68 65 6c 6c 6c 6c 6f 6f 6f 6f 21>
})

//append
const file = fs.readFileSync('./hello.txt');
console.log('2', file.toString());

fs.appendFile('./hello.txt', ' This is so cool!', err => {
if (err) {
    console.log(err);
}
})

//write
// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err);
//     }
// })

//Delete
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err);
    }
    console.log('Inception');
})
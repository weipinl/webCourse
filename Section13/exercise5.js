// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const bonusArray = array.map(user =>{
  user.items = user.items.map(item => {
    return item + '!';
  })
  return user;
})

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const newArray = [];
array.forEach(user => {
  let {username, team, score, items} = user;
  console.log(username, team, score, items);
  username = username + '!';
  newArray.push(username);
})
console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map(user => {
  return user.username + "?";
 })

//Filter the array to only include users who are on team: red

const filterArray = array.filter(user => {
  return user.team === "red";
})
console.log(filterArray);

//Find out the total score of all users using reduce
const total = array.reduce((acc, user) => {
  return acc + user.score 
}, 0);
console.log(total);


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);

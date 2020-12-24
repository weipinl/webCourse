import React from 'react';
import Card from './Card'

//Way number 1 
// const CardList = ({robots}) => {
//     const cardArray = robots.map((user, i) => {
//         return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
//          //for looping we should include a key prop key={i} so react can keep track
//     })

//     return (
//     <div>
//         {cardArray};
//     </div>
//     );
// }

//Way Number 2
const CardList = ({robots}) => {
    return (
    <div>
        {
            robots.map((user, i) => {
                return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
            })
        }   
    </div>
    );
}

export default CardList;
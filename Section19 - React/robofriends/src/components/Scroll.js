import React from 'react';

//children [stuff that is getting wrap around]
//example 
/* <Scroll>
    <CardList robots={filteredRobot}/>
</Scroll> */

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '10px solid black', height: '800px'}}>
            {props.children}
        </div> 
    )
};

export default Scroll;
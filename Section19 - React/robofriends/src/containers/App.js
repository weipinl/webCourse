import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
//import { robots } from './robots'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

//declaring a class
//these are called smart componenet because it has states
class App extends Component {
    constructor() {
        super()
        this.state = {
            //robots: robots, 
            robots: [], //usually it would be an empty array
            searchfield: ''
        }
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users').then(response=> {
        //     return response.json();
        // })
        // .then(users => {
        //     this.setState( {robots: users} )
        // })

        //one line instead
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState( {robots: users} ))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) //if you want to change state
    }

    render () {
        const { robots, searchfield } = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        // if (!robots.length) { //this if statement is here for API files that takes too long to load
        //     return <h1>Loading</h1>
        // } else {
        //     return (
        //         <div className='tc'>
        //             <h1 className='f1'>RoboFriends</h1>
        //             <SearchBox searchChange={this.onSearchChange}/>
        //             <Scroll>
        //                 <CardList robots={filteredRobot}/>
        //             </Scroll>
        //         </div>
        //     );    
        // }

        //writing in turnary function
            return !robots.length ? 
            <h1>Loading</h1> : 
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobot}/>                          
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}

export default App;
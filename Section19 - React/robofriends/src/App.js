import React, {Component} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import { robots } from './robots'

//declaring a class
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots, 
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) //if you want to change state
    }

    render () {
        const filteredRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobot}/>
            </div>
        );    
    }
}

export default App;
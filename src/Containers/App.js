import React, { Component } from "react";
import { robots } from '../robotsName'; // this is from the robots 
import CardList from "../Components/cardList";
import 'tachyons';
import SearchBox from "../Components/SearchBox";
import "./App.css";
import "tachyons";
import Scroll from "../Components/Scroll"



class App extends Component {
    constructor() { // constructor is needed to use state
        super() // to use "this" keyword, you must use super(), which calls the constructor of component
        this.state = { // this.state === App.state, which is an object that can change and affect our app
            robots: robots, // now the "robots" array from ./robotsName is being passed by the robots key
            searchField: "" //this is what will be used toto search for robots
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value }) //this is the function that is responsible for updating searchField
    }
    render () {
        const filteredBots = this.state.robots.filter(bot => { //this will have robots filtered down to whatever searchField will be
            return bot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        return (
            <div className = "tc">
                <h1 className ="robo_book_header">Robo_Book</h1>
                <SearchBox searchChange = {this.onSearchChange}/> {/*App.onSearchChange */}
               <Scroll>
                    <CardList robots = {filteredBots}/> {/* we use this instead of robots because we can access it through the object "app"*/}
               </Scroll>
            </div>
        );
    }

};

export default App;
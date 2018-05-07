import React, { Component } from 'react'

class FilterString extends Component{
    constructor(){
        super();
        this.state = {
            pokemon: ['Swampert', 'Metagross', 'Snorlax', 'Infernape', 'Gardevoir', 'Jolteon'],
            userInput: " ",
            filteredArray: []
        };
    }

handleUserInput(e){
    this.setState({ userInput : e})
}

doesNotInclude(userInput){
    var filteredArray = [];
    var pokemon = this.state.pokemon;
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].includes(userInput)){
            filteredArray.push(pokemon[i]);
        }
    }
    this.setState({ filteredArray: filteredArray });
}

    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4> Filter String </h4>
            <span className="puzzleText"> Pokemon: { JSON.stringify(this.state.pokemon, null, 10) }></span>
            <input className="inputLine" onChange={ (e) => this.handleUserInput(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.doesNotInclude(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterStringPB"> Filtered Pokemon: { JSON.stringify(this.state.filteredArray, null, 10) }></span>
            </div>
        )
    }
}

export default FilterString;
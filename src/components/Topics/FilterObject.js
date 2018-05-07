import React, { Component } from 'react';

class FilterObject extends Component{
    constructor(){
        super();
        this.state = {
            pokemon: [
                {
                    name: 'Pikachu',
                    type: 'Electric',
                    'battles won': 500
                },
                {
                    name: 'Krabby',
                    animal: 'crab',
                    age: 22
                },
                {
                    name: 'Mew',
                    color: 'pink',
                    'can fly': 'yes'
                }
                ],
            userInput: " ",
            filteredPokemon: []
        }
    }

handleUserInputValue(e){
    this.setState({ userInput: e });
    }

filterNewArray(battlesWon) {
    var strongPokemon = [];
    var pokemon = this.state.pokemon;
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].hasOwnProperty(battlesWon)){
            strongPokemon.push(pokemon[i]);
        }
    }
    this.setState({ filteredPokemon: strongPokemon });
}

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Pokemon: { JSON.stringify(this.state.pokemon, null, 10) }></span>
            <input className="inputLine" onChange={ (e) => this.handleUserInputValue(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterNewArray(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Pokemon: { JSON.stringify(this.state.filteredPokemon, null, 10) }></span>
            </div>
        )
    }
}

export default FilterObject;
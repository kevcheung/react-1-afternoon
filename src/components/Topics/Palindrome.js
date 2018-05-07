import React, { Component } from 'react'

class Palindrome extends Component{
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        };
    }

changeUserInput(e){
        this.setState({ userInput: e })
    }

backwardsForwards(userInput){
    for (var i = 0; i < userInput.length; i++){
        if ((userInput.split('').reverse('').join('')) === userInput){
            this.setState({ palindrome: 'true'})
        }else
        this.setState({ palindrome: 'false'})
    }
}

    render(){
        return(
            <div className="puzzleBox filterStringPB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={ (e) => this.changeUserInput(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.backwardsForwards(this.state.userInput) }> Check </button>
            <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
            </div>
        )
    };
}

export default Palindrome;
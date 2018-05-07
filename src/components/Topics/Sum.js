import React, { Component } from 'react'

class Sum extends Component{
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

updateNumberOne(e){
    this.setState({ number1: parseInt(e, 10)  })
    }

updateNumberTwo(e){
    this.setState({ number2: parseInt(e, 10) })
}

sum(number1, number2){
    this.setState({ sum: number1 + number2 });
}

    render(){
        return(
            <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" onChange={ (e) => this.updateNumberOne(e.target.value) }></input>
            <input className="inputLine" onChange={ (e) => this.updateNumberTwo(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.sum(this.state.number1, this.state.number2) }> Add </button>
            <span className="resultsBox"> Sum: { this.state.sum } </span>
            </div>
        )
    }
}

export default Sum;
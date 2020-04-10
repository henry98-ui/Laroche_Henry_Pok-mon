import React, { Component } from 'react';
import Pokemons from '../list-pokemons.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class NextEvolution extends Component {
    constructor(props) {
        super(props);
        switch (this.props.type) {
            case "Fire":
                this.color = "#ff3f34"
                break;
            case "Grass":
                this.color = "#05c46b";
                break;
            case "Water":
                this.color = "#0fbcf9";
                break;
            case "Normal":
                this.color = "#d2dae2";
                break;
            case "Electric":
                this.color = "#ffd32a";
                break;
            case "Ice":
                this.color = "#7efff5";
                break;
            case "Fighting":
                this.color = "#c23616";
                break;
            case "Poison":
                this.color = "#8e44ad";
                break;
            case "Ground":
                this.color = "#fdcb6e";
                break;
            case "Flying":
                this.color = "#a29bfe";
                break;
            case "Pyshic":
                this.color = "#e84393";
                break;
            case "Bug":
                this.color = "#b8e994";
                break;
            case "Rock":
                this.color = "#e58e26";
                break;
            case "Ghost":
                this.color = "#3B3B98";
                break;
            case "Dark":
                this.color = "#2C3A47";
                break;
            case "Dragon":
                this.color = "#1B1464";
                break;
            case "Steel":
                this.color = "#8395a7";
                break;
            case "Fairy":
                this.color = "#ff9ff3";
                break;
        }
    }

    render() {
        
        return(
            <div className="one_pokemon_one_type" style={{backgroundColor:this.color}}>
                {this.props.type}
            </div>
        )
    }
}
import React, { Component } from 'react';
import Pokemons from '../list-pokemons.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class PreviousEvolution extends Component {
    constructor(props)
    {
        super(props);
        var name=-1;
        if (Pokemons[this.props.index].hasOwnProperty('prev_evolution'))
        {
            name = Pokemons[this.props.index].prev_evolution[Pokemons[this.props.index].prev_evolution.length - 1].name;
        }
        this.state = {
            index:this.props.index,
            name:name
        }
    }

    render() {
        if ( this.state.name !== -1)
        {
            return (
                <Link to={`/pokemon/${this.state.name}`}>
                    <div className="one_pokemon_previous_evolution">
                        {this.state.name}
                    </div>
                </Link>
             );
        }

        else
        {
            return(
            <div className="one_pokemon_previous_evolution">
               
            </div>);
        }
       
    }
}
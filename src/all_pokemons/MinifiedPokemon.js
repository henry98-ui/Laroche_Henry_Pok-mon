import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class MinifiedPokemon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Link to={`/pokemon/${this.props.pokemon.name}`}>
                <div className="minified_pokemon">
                    <div className="minified_pokemon_name">
                        {this.props.pokemon.name}
                    </div>
                    <img src={this.props.pokemon.img} />
                </div>
            </Link>
        );
    }
}
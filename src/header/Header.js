import React, { Component } from 'react';
import Pokemons from '../list-pokemons.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import image from '../img/logo_pokemon.png'
export default class Header extends Component {

    render() {
        return(
            
                <Link to="/">
                    <div className="header"></div>
                    
                </Link>
            
        )
    }
}
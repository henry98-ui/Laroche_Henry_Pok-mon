import React, { Component } from 'react';

import PokemonList from "../list-pokemons.json";
import MinifiedPokemon from './MinifiedPokemon';
export default class AllPokemons extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            limit: 50
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    handleScroll = (e) => {
        if (!(this.state.limit > 150)) { //Pour empecher une boucle infinie
            var el = document.getElementById('all_pokemons')
            
            const bottom = el.getBoundingClientRect().bottom <= window.innerHeight + 1;
            if (bottom) {
                var limit = this.state.limit + 20;
                this.setState(
                    {
                        limit: limit
                    }
                )
            }
        }
    }

    render() {
        return (
            <div className="all_pokemons" id="all_pokemons">
                {PokemonList.map((pokemon, index) => {
                    //Pour que l'on affiche que le nombre de pokémon demandé sur une page
                    if (index < this.state.limit) {

                        return (
                                <MinifiedPokemon pokemon={pokemon} />

                        );
                    }
                })}
            </div>
        );
    }
}
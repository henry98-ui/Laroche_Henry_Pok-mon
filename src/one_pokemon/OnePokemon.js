import React, { Component } from 'react';
import Pokemons from '../list-pokemons.json';
import Error from '../error/Error';
import PreviousEvolution from './PreviousEvolution';
import NextEvolution from './NextEvolution';
import Type from './Type';
export default class OnePokemons extends Component {
    constructor(props) {
        super(props);

        var index, name;
        name = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

        //Si le pokémon n'existe pas, ou on va sur une page non existante
        if ((index = Pokemons.findIndex((pokemon) => pokemon.name == name)) === -1) {
            name = -1;
        }

        //Prend le nom du pokemon à partir de l'URL
        this.state = {
            name: name,
            index: index
        }
    }

    //Pour faire en sorte que la page se réactualise
    componentWillUpdate(nextProps, nextState) {
        window.location.reload();
    }

    render() {
        console.log("In render, state is " + this.state.name, this.state.index)
        if (this.state.index !== -1) {
            return (
                <div className="one_pokemon">
                    <div className="one_pokemon_name">
                        {Pokemons[this.state.index].name}
                    </div>
                    <div className="one_pokemon_type">
                        {Pokemons[this.state.index].type.map( (type)=>
                        {
                            return(
                                <Type type={type}/>
                            )
                        })}
                    </div>
                    <img className="one_pokemon_image" src={Pokemons[this.state.index].img} />
                    <div className="one_pokemon_evolutions">
                    <PreviousEvolution index={this.state.index} />
                    <NextEvolution index={this.state.index} />
                    </div>
                    
                </div>
            );
        }
        else {
            return (<Error />);
        }

    }
}
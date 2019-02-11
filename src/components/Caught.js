import React, { Component } from 'react';
import PokemonCaught from './PokemonCaught';


class Caught extends Component {

    componentDidMount() {
        this.props.fetchCaught();
    }

    render() {
        return ( 
            <main> 
                {this.props.data.caught.map(
                    pokemon => <PokemonCaught key={pokemon.id} 
                                        name={pokemon.name} 
                                        id={pokemon.id} 
                                        isCaught={pokemon.isCaught}/>
                )}
            </main>
        );
    }
}

export default Caught;
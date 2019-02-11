import React, { Component } from 'react';
import PokemonFull from './PokemonFull';


class Single extends Component {

    componentDidMount() {
        const name = this.props.location.pathname.split('/')[2];
        this.props.fetchSingle(name);
    }

    render() {
        
        const pokemon = this.props.data.single;
            if (pokemon) {
                return (
                    <main> 
                        <PokemonFull name={pokemon.name} 
                                    id={pokemon.id} 
                                    isCaught={pokemon.isCaught} 
                                    date={pokemon.date || null}/>
                    </main> 
                );
            } else {
                return <p>Loading</p>;
            }
    }
}

export default Single;
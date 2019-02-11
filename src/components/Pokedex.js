import React from 'react';
import PokemonCard from './PokemonCard';


class Pokedex extends React.Component {
    componentDidMount() {

        if (this.props.data.pokemons.length === 0) {
            this.props.fetchPokemons();
        }
    }

    render() {
        const { setPokemon, catchPokemon } = this.props;
        return (
            <React.Fragment>
                <main className="App">
                    {this.props.data.pokemons.map(
                        pokemon => <PokemonCard set={() => {setPokemon(pokemon)}} 
                                            catch={() => {catchPokemon(pokemon)}} 
                                            key={pokemon.id} 
                                            name={pokemon.name} 
                                            id={pokemon.id} 
                                            isCaught={pokemon.isCaught}/>
                        )}
                </main>
                <div className="load-wrapper">
                    <button className="load-more" onClick={() => this.props.fetchPokemons()}>Load More</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Pokedex;

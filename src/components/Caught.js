import React, { Component } from 'react';
import PokemonCaught from './PokemonCaughtCard';


class Caught extends Component {

    componentDidMount() {
        this.props.fetchCaught();
    }

    render() {
        return ( 
            <React.Fragment>
            {this.props.data.loading ? <div className="status status--loading"> Loading </div> : ''}
            {this.props.data.catching ? <div className="status status--catch"> Catching </div> : ''}
            {this.props.data.error ? <div className="status status--error"> Error: {this.props.data.error} </div> : ''}   
            <main> 
                {this.props.data.caught.map(
                    pokemon => <PokemonCaught key={pokemon.id} 
                                        name={pokemon.name} 
                                        id={pokemon.id} 
                                        isCaught={pokemon.isCaught}/>
                )}
            </main>
            </React.Fragment>
        );
    }
}

export default Caught;
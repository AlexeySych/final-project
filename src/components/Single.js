import React, { Component } from 'react';
import PokemonFull from './PokemonFullCard';
import Statusbar from './Statusbar';

class Single extends Component {

    componentDidMount() {
        const name = this.props.location.pathname.split('/')[2];
        this.props.fetchSingle(name);
    }
    componentWillUnmount() {
        this.props.clearSingle();
    }

    render() {
        
        const pokemon = this.props.data.single;
            if (pokemon) {
                return (
                    <React.Fragment>
                    
                    <main> 
                        <PokemonFull name={pokemon.name} 
                                    id={pokemon.id} 
                                    isCaught={pokemon.isCaught} 
                                    date={pokemon.date || null}/>
                    </main> 
                    </React.Fragment>
                );
            } else {
                return <Statusbar data={this.props.data}/>;
            }
    }
}

export default Single;
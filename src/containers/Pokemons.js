import { connect } from 'react-redux';
import Pokedex from '../components/Pokedex';
import fetchPokemons from '../actions/fetchPokemons';
import catchPokemon from '../actions/catchPokemon';
import fetchCaught from '../actions/fetchCaught';

const mapStateToProps = (state) => ({
    data: state,
})

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPokemons: () => {
            dispatch(fetchPokemons())
        },
        catchPokemon: (pokemon) => {
            dispatch(catchPokemon(pokemon))
        },
        fetchCaught: () => {
            dispatch(fetchCaught())
        },
    }
}

const PokemonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Pokedex);

export default PokemonsContainer;
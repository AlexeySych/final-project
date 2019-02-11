import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import fetchPokemons from './reducers/fetchPokemons';


export default createStore(
    fetchPokemons, 
    applyMiddleware(promise)
);
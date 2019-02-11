import UsersStore from '../store';


export default function fetchPokemons() {
    const state = UsersStore.getState();
    return {
        type: 'FETCH_POKEMONS',
        payload: fetch(`http://localhost:3004/pokemons?_page=${state.page || 1}&_limit=40`)
        .then(response => response.json()),
    }
}


export default function fetchSingle(pokemon) {
    return {
        type: 'FETCH_SINGLE',
        payload: fetch(`http://localhost:3004/pokemons?name=${pokemon}`)
        .then(response => response.json()),
    }
}
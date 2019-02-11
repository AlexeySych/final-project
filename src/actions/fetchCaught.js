export default function fetchCaught() {
    return {
        type: 'FETCH_CAUGHT',
        payload: fetch(`http://localhost:3004/pokemons?isCaught=true`)
                .then(response => response.json())
    }
}
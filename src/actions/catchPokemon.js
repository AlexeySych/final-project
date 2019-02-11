export default function catchPokemon(pokemon) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let date = new Date(Date.now())
    let formatedDate = date.getDate() + '/' +  date.getMonth() + 1 + '/' +  date.getFullYear()
    return {
        type: 'CATCH_POKEMON',
        payload: fetch(`http://localhost:3004/pokemons/${pokemon.id}`, {
            credentials: 'same-origin',
            method: 'PUT', 
            headers: headers, 
            body: JSON.stringify({isCaught: true, 
                                  date: formatedDate, 
                                  name: pokemon.name, 
                                  id: pokemon.id}),
            })
        .then(response => response.json()),
    }
}


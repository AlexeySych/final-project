const initialState = {
    page: 1,
    pokemons: [],
    caught: [],
    loading: false,
    catching: false,
    error: null,
    single: null,
}

function fetchPokemons(state=initialState, action) {
    switch (action.type) {

        //FETCH ALL
        case 'FETCH_POKEMONS_PENDING':
            return {...state, loading: true};

        case 'FETCH_POKEMONS_FULFILLED':
            return {...state, 
                    pokemons: state.pokemons.concat(action.payload), 
                    loading: false, 
                    page: state.page + 1,
                };

        case 'FETCH_POKEMONS_REJECTED':
            return {...state, 
                    loading: false, 
                    error: `${action.payload.message}`,
                };
        

        //CATCH
        case 'CATCH_POKEMON_PENDING':
            return {...state, 
                    catching: true,
                };

        case 'CATCH_POKEMON_FULFILLED':
            let list = [...state.pokemons].map(
                    (item) => item.name === action.payload.name ? item = action.payload : item
                )
            return {...state, 
                    pokemons: list, 
                    catching: false,
                };

        case 'CATCH_POKEMON_REJECTED':
            return {...state, 
                    catching: false, 
                    error: `${action.payload.message}`,
                };
        

        //FETCH CAUGHT
        case 'FETCH_CAUGHT_PENDING':
            return {...state, 
                    loading: true,
                };

        case 'FETCH_CAUGHT_FULFILLED':
            return {...state, 
                    caught: action.payload, 
                    loading: false,
                };

        case 'FETCH_CAUGHT_REJECTED':
            return {...state, 
                    loading: false, 
                    error: `${action.payload.message}`,
                };
        

        //FETCH SINGLE
        case 'FETCH_SINGLE_PENDING':
            return {...state, 
                    loading: true,
                };

        case 'FETCH_SINGLE_FULFILLED':
            return {...state, 
                    single: action.payload[0], 
                    loading: false,
                };

        case 'FETCH_SINGLE_REJECTED':
            return {...state, 
                    loading: false, 
                    error: `${action.payload.message}`,
                };
        
        //CLEAR SINGLE
        case 'CLEAR_SINGLE':
                return {...state,
                    single: null,
                };
                
        //DEFAULT
        default:
            return state;
    }
}

export default fetchPokemons;
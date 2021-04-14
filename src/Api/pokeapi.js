export const searchPokemon = async (poke) =>{
    try {
        let url =`https://pokeapi.co/api/v2/pokemon/${poke}`
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        
    }
}
export const getPokemons = async (limit=24, offset=0) =>{
    try {
        let url =`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const results = await fetch(url);
        const data = await results.json();
        return data;
    } catch (error) {
        
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        
    }
}
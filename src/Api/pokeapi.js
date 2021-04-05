export const buscaPokemon = async (poke) =>{
    try {
        let url =`https://pokeapi.co/api/v2/pokemon/${poke}`
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        
    }
}
export const getPokemons = async (limit=10, offset=0) =>{
    try {
        let url =`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        
    }
}
export const buscaPokemon = async (poke) =>{
    try {
        let url =`https://pokeapi.co/api/v2/pokemon/${poke}`
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        
    }
}
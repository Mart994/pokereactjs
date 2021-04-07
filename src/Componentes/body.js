import React from 'react'
import Pokemon from './card';
import Paginacion from './paginacion';

const Pokedex = (props) => {
    const { pokemons, pagina, setPagina, total, loading } = props;
    const lastPage = () => {
        const next = Math.max(pagina -1, 0)
        setPagina(next)
    }
    const nextPage = () => {
        const next = Math.min(pagina +1, total -1)
        setPagina(next)
    }

    return (
        <div>
            <div className="paginacion">
                <h1>Pokedex</h1>
                <Paginacion 
                pagina={pagina + 1}
                totalPagina={total}
                onLeft={lastPage}
                onRight={nextPage}/>
            </div>
            {loading ? (
                <div>Cargando pokemones...</div>
            ) : (
                <div className="pokedex-grid">
                    {pokemons.map((pokemon, idx) => {
                        return <Pokemon pokemon={pokemon} key={pokemon.name} />;
                    })}
                </div>)}
        </div>
    )
}

export default Pokedex;

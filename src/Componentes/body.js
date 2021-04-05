import React from 'react'
import Pokemon from './card';
import Paginacion from './paginacion';

const Pokedex = (props) => {
    const { pokemons, page, setPage } = props;
    const lastPage = () => {
        const next = Math.max(page, 0)
        setPage(next)
    }
    const nextPage = () => {
        const next = Math.min(page, 0)
        setPage(next)
    }

    return (
        <div>
            <div className="paginacion">
                <h1>Pokedex</h1>
                <Paginacion 
                page={page + 1}
                totalPage={10}
                onLeft={lastPage}
                onRight={nextPage}/>
            </div>

            <div className="pokedex-grid">
                {pokemons.map((pokemon, idx) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name} />;
                })}
            </div>
        </div>
    )
}

export default Pokedex;

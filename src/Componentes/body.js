import React from 'react'
import Pokemon from './card';

const Pokedex = (props) => {
    const { pokemons } = props;
    return (
        <div>
            <div className="paginacion">
                <h1>Pokedex</h1>

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

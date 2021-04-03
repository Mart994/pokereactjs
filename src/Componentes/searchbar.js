import React, { useState } from 'react';
import { buscaPokemon } from '../Api/pokeapi';

export const Searchbar = () => {
    
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();

    const handleChange = (e) =>{
        setSearch(e.target.value);
    }
    const handleClick = async(e) =>{
        const data = await buscaPokemon(search);
        setPokemon(data);
    }

    return (
        <>
          <div>
              <input placeholder="Buscar Pokemon..." 
                    type="text"
                    onChange={handleChange}
                    />
            <button onClick={handleClick}>Buscar</button>
          </div>
          <div>
            {pokemon && 
                <div>
                    <div>Nombre: {pokemon.name}</div>
                    <img src={pokemon.sprites.front_default} />
                </div>
            }
          </div>
        </>
    )
}

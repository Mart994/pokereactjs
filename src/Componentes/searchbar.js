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
          <div className="searchbar-container">
              <div className="searchbar">
                <input placeholder="Buscar Pokemon..." 
                    type="text"
                    onChange={handleChange}
                    />
              </div>
                <div className="searchbar-btn">
                    <button onClick={handleClick}>
                        Buscar 
                    </button>
                </div>
          </div>

          
        </>
    )
}

import React from 'react'
import Pokemon from './card';
import Paginacion from './paginacion';
import '../css/spin.css'

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
                
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>

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

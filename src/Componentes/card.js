import React from 'react'

const Pokemon = (props) => {
    const { pokemon } = props
    return (
        <div className= "pokemon-card">
            <div className = "poke-img">
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>
            <div>
                <div>
                    <h3>{pokemon.name}</h3>
                    <div><h3>#{pokemon.id}</h3></div>
                </div>
                <div>
                    <div>{pokemon.types.map((type, idx) =>{
                        return(
                            <div key={idx}>{type.type.name}</div>
                        )})}
                    </div>
                    <div>❤</div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;

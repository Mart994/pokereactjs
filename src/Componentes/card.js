import React from 'react'

const Pokemon = (props) => {
    const { pokemon } = props
    return (
        <div className= "pokemon-card">
            <div className = "pokemon-img-container">
                <img src={pokemon.sprites.front_default}
                     alt={pokemon.name}
                     className = "pokemon-img"/>
            </div>
            <div className="card-body">
                <div className="card-tittle">
                    <h3>{pokemon.name}</h3>
                    <div><h3>#{pokemon.id}</h3></div>
                </div>
                <div className="card-botton">
                    <div className="pokemon-type">
                        <div>{pokemon.types.map((type, idx) =>{
                            return(
                                <div key={idx} className="pokemon-type-text">{type.type.name}</div>
                            )})}
                        </div>
                    </div>
                    <div className="pokemon-favorite">&#10084;&#65039;</div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;
import React from 'react';
import tipoColor from '../Helper/tipoColor';
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
                    <h3>#{pokemon.id} {pokemon.name}</h3>
                    
                </div>
                <div className="card-botton">
                    <div className="pokemon-type">
                        <div>{pokemon.types.map((type, idx) =>{
                            return(
                                <div key={idx} 
                                     className="pokemon-type-text"
                                     style={{ backgroundColor: tipoColor[type.type.name] }}>
                                    {type.type.name}
                                </div>
                            )})}
                        </div>
                    </div>
                    {/* <div className="pokemon-favorite">&#10084;&#65039;</div> */}
                </div>
            </div>
        </div>
    )
}

export default Pokemon;

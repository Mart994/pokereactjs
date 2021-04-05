import { React, useEffect, useState } from "react";
import "./css/styles.css";
import Navbar from "./Componentes/navbar";
import Searchbar from "./Componentes/searchbar";
import Pokedex from "./Componentes/body";
import { getPokemons, getPokemonData, searchPokemon } from "./Api/pokeapi";

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [pagina, setPagina]=useState(0);
  const [total,setTotal]=useState(0);
  const [loading, setLoading]=useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(25, 25 * pagina);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 25));
      setNotFound(false);
    } catch (error) {}
  }

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [pagina]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPagina(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="App">
          <Searchbar onSearch={onSearch}/>
          {notFound ? (
              <div className="not-found-text">
                No se encontro el Pokemon que buscabas 😭
              </div>
            ) : (
            <Pokedex
              loading={loading}
              pokemons={pokemons}
              pagina={pagina}
              setPagina={setPagina}
              total={total}/>
            )}
        </div>
      </div>
    </>
  );
}

export default App;

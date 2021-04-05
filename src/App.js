import { React, useEffect, useState } from "react";
import "./css/styles.css";
import Navbar from "./Componentes/navbar";
import { Searchbar } from "./Componentes/searchbar";
import Pokedex from "./Componentes/body";
import { getPokemons, getPokemonData } from "./Api/pokeapi";

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage]=useState;
  // const [total,setTotal]=useState;
  const [loading, setLoading]=useState(true);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(25, 25*page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {}
  }

  useEffect(() => {
    fetchPokemons();
  }, [page])

  return (
    <>
      <div>
        <Navbar />
        <div className="App">
          <Searchbar />
          {loading ? <div>Cargando...</div> :
            <Pokedex
              pokemons={pokemons}
              page={page}
              setPage={setPage}/>
          }
        </div>
      </div>
    </>
  );
}

export default App;

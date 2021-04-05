import { React, useEffect, useState } from "react";
import "./css/styles.css";
import Navbar from "./Componentes/navbar";
import { Searchbar } from "./Componentes/searchbar";
import Pokedex from "./Componentes/body";
import { getPokemons } from "./Api/pokeapi";

function App() {

  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      setPokemons(data.results);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [])

  return (
    <>
      <div>
        <Navbar />
        <div className="App">
          <Searchbar />
          <Pokedex pokemons={pokemons}/>
        </div>
      </div>
    </>
  );
}

export default App;

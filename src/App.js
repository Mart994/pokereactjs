import { React } from "react";
import "./css/styles.css";
import Navbar from "./Componentes/navbar";
import { Searchbar } from "./Componentes/searchbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <Searchbar />
        </div>
      </div>
    </>
  );
}

export default App;

import { React } from "react";

const Navbar = () => {
    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    const handleClick =() => {
        window.location = '/';
    }
    
    return (
    <nav>
        <div>
            <img src={ imgUrl }
            alt="pokeapi-logo"
            className="navbar-image"
            onClick={handleClick}
            />
        </div>
    </nav>
    );
}

export default Navbar;
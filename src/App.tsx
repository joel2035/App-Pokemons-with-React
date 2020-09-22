import React, { FunctionComponent,useState, useEffect} from "react";
import POKEMONS from './models/moc-pokemon';
import Pokemon from "./models/pokemon";

const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    useEffect( () => {
       setPokemons(POKEMONS)
    },[])

    return (
        <h1>il y'a, {pokemons.length} !</h1>
    )
}
export default App;
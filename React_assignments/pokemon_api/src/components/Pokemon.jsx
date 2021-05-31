import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pokemon = props =>{
    const [pokeDex, setPokeDex] = useState([])
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then( res => res.json())
            .then( res => setPokeDex(res.results))
            .catch( err => console.log(err))
    }, []);

    const PokemonFetch = e =>{
        e.preventDefault();
        fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807" )
            .then( res => res.json())
            .then( res => setPokeDex(res.results))
            .catch(err => console.log(err))
    }

    return(
       <div>
            <Button variant="secondary" size="lg" style={{ marginBottom: '50px',marginTop: '30px', width:"300px"}}  onClick={PokemonFetch}>Fetch Pokemon</Button>
            
            {pokeDex.map((pokemon, idx) => {
                return(
                    <div key={idx}>
                        <h1 style={{ margin: "10px", textAlign: 'center'}}><li>{pokemon.name}</li></h1>
                        
                    </div>
                )
            })}
    </div>
    )
}

export default Pokemon;
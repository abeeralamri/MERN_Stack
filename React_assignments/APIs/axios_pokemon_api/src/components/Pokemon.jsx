import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pokemon = props =>{
    const [pokeDex, setPokeDex] = useState([])
    
    const PokemonFetch = e =>{
        e.preventDefault();
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807" )
       
            .then( response => setPokeDex(response.data.results))
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
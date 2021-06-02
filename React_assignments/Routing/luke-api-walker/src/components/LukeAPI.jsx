import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LukeAPI = props =>{
    const [pokeDex, setPokeDex] = useState([])
    const arr = ["people","plant", "starships"]
    const PokemonFetch = e =>{
        e.preventDefault();
        axios.get("https://swapi.dev/api/{arr[0]}" )
       
            .then( response => setPokeDex(response.data.results))
            .catch(err => console.log(err))
    }

    return(
       <div>
     
            <select >
                <option >{arr[0]}</option>
                <option >{arr[1]}</option>
                <option >{arr[2]}</option>
               
            </select>
            <p>ID: <input/></p>
        
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

export default LukeAPI;
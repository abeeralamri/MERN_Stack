import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const Startships = ({id}) =>{
    const [starships, setStarships] = useState([])
    
   
    useEffect( ()=>{
            axios.get(`https://swapi.dev/api/starships/${id}`)
        
                .then( response => setStarships(response.data))
                .catch(err => navigate("/error"))
        }, [id])
    
    return(
        <div>
            <h1>{starships.name}</h1>
            <p>Model: {starships.model} </p>
            <p>Manufacturer: {starships.manufacturer} </p>
            <p>Cost in credits: {starships.cost_in_credits}</p>
            <p>Length: {starships.length}</p>
                
            
            
        </div>
    )
}

export default Startships;
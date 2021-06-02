import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const Planets = ({id}) =>{
    const [planets, setPlanets] = useState([])
    
   
    useEffect( ()=>{
            axios.get(`https://swapi.dev/api/planets/${id}`)
        
                .then( response => setPlanets(response.data))
                .catch(err => navigate("/error"))
        }, [id])
    
    return(
        <div>
            <h1>{planets.name}</h1>
            <p>Rotation Period: {planets.rotation_period} </p>
            <p>Orbital Period: {planets.orbital_period} </p>
            <p>Diameter: {planets.diameter}</p>
            <p>Climate: {planets.climate}</p>
                
            
            
        </div>
    )
}

export default Planets;
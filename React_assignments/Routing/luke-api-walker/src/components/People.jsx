import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const People = ({id}) =>{
    const [people, setPeople] = useState([])
    
   
    useEffect( ()=>{
            axios.get(`https://swapi.dev/api/people/${id}`)
        
                .then( response => setPeople(response.data))
                .catch(err => navigate("/error"))
        }, [id])
    
    return(
        <div>
            <h1>{people.name}</h1>
            <p>Height: {people.height} cm</p>
            <p>Mass: {people.mass} kg</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color: {people.skin_color}</p>
                
                
            
        </div>
    )
}

export default People;
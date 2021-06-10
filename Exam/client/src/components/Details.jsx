import {  navigate } from '@reach/router';
import axios from 'axios';
import React, {useEffect} from 'react';
import Headers from './Headers';
import { useState } from 'react';

const Details = (props) => {

    const [like, setLike] = useState(0);
    const [disable, setDisable] = useState(false);

    const [pets, setPets] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/pets/" + props.id)
            .then(res => setPets(res.data))
    }, [])
 
   
    const { remove } = props;
    const DeletePets = (id) =>{
        axios.delete(`http://localhost:8000/pets/delete/${id}`)
        .then(res => remove(id))
        navigate('/')
    }
       

   
    const LikeHandler = (e) => {
        e.preventDefault();
        setLike( like + 1);
        setDisable(true);
  
}

return(
    <div>
    
        <Headers />
      
     
          
                 <div >
                    <button style = {{marginLeft: "30px"}} type="submit" className="btn btn-danger" onClick = {(e)=> {DeletePets(pets._id)}} >Adopt {pets.PetName}</button>
                    <h1 style = {{textAlign: "center", marginTop : "30px"}}>Details about: {pets.PetName}</h1>
                    <p style = {{textAlign: "center"}}>Pet type: {pets.PetType}</p>
                    <p style = {{textAlign: "center"}}>Description: {pets.desc}</p>
                    <p style = {{textAlign: "center"}}>Skills: </p>
                    <p>skill 1: {pets.skill_1}</p>
                    <p>{pets.skill_2}</p>
                    <p>{pets.skill_3}</p>
                    <p>like: {like}</p>
                    <button disabled={disable} onClick={LikeHandler}>Like {pets.PetName}</button>
                </div>
                 
          



           
           
        </div>
      
    )
}

export default Details
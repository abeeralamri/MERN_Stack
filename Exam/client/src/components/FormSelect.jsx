import React, {useState} from 'react';
import {Router} from '@reach/router';
import PetPerent from './PetPerent';
import AddPet from './AddPet';
import Update from "./Update";
import Details from './Details';

const FormSelect = (props) => {
    const [pets, setPets] = useState([{
        PetName: "",
        PetType: "",
        desc: "",
        skill_1: "",
        skill_2: "",
        skill_3: "",
        

       
    }])
    const remove = id =>{
        setPets(pets.filter(pet => pet._id !== id));
    }
    return(
        <div>
            <Router>
                <PetPerent path="/" 
                pets={pets}
                setPets={setPets}
                />
                <AddPet 
                    pets={pets} 
                    setPets={setPets}
                    path="pets/new"
                />
                <Update 
                    pets={pets} 
                    setPets={setPets}
                    path="pets/edit/:id"
                />
                <Details 
                pets= {pets}
                setPets = {setPets}
                remove= {remove}
                path = "pets/:id"
                
                />
            </Router>
        </div>
    )
}

export default FormSelect;
import React, {useState} from 'react';
import axios from "axios";
import { navigate} from '@reach/router'
import Headers from './Headers';
import PetForm from './PetForm';

const AddPet = ({id, pets, setPets}) => {
    const [PetName, setPetName] = useState("");
    const [PetType, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skill_1, setSkill_1] = useState("");
    const [skill_2, setSkill_2] = useState("");
    const [skill_3, setSkill_3] = useState("");
    
    const [errors, setErrors] = useState([]);

    const createHandler = e => {
        e.preventDefault();
        const newPet = {
            PetName,
            PetType,
            desc, 
            skill_1,
            skill_2,
            skill_3
            
        }
        axios.post("http://localhost:8000/pets/new", newPet)
            .then( res => {
                setPets([...pets, res.data]);
                navigate('/');
            })
            .catch(err => {
                const errRes = err.response.data.errors;
                const errArr = [];
                console.log(errRes);
                for (const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message);
                }
                setErrors(errArr);
            })
    }
    return(
        <div>
            <Headers />
            <h4>Know a pet neading a home:</h4>
            {errors.map((err, idx) => {
                return(
                    <p key={idx}>{err}</p>
                )
            })}
            <PetForm
                formHandler={createHandler}
                PetName ={PetName}
                setPetName = {setPetName}

                PetType={PetType} 
                setType = {setType}

                desc = {desc}
                setDesc = {setDesc}

                skill_1 = {skill_1}
                setSkill_1 = {setSkill_1}

                skill_2 = {skill_2}
                setSkill_2 = {setSkill_2}

                skill_3 = {skill_3}
                setSkill_3 = {setSkill_3}
              
            />

           

        </div>

        )
}

export default AddPet;
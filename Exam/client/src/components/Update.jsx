import React, {useState, useEffect} from 'react';

import axios from 'axios';
import { navigate } from '@reach/router';
import Headers from './Headers';
import PetForm from './PetForm';


const Update = ({id, pets, setPets}) => {
    const [PetName, setPetName] = useState("");
    const [PetType, setType] = useState("");
    const [desc, setDesc] = useState("");
    const [skill_1, setSkill_1] = useState("");
    const [skill_2, setSkill_2] = useState("");
    const [skill_3, setSkill_3] = useState("");

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/pets/${id}`)
            .then(res => {
                setPetName(res.data.PetName);
                setType(res.data.PetType);
                setDesc(res.data.desc)

                setSkill_1(res.data.skill_1)
                setSkill_2(res.data.skill_2)
                setSkill_3(res.data.skill_3)

            })
    }, [])

    const updateHandler = e =>{
        e.preventDefault();
        const updatedPet = {
         PetName,
         PetType,
         desc, 
         skill_1,
         skill_2,
         skill_3

        }
        axios.put(`http://localhost:8000/pets/edit/${id}`, updatedPet)
            .then( res => {
                let tempArr = [...pets];
                for (let i=0; i< tempArr.length; i++){
                    if(tempArr[i]._id === id){
                        tempArr[i] = res.data;
                    }
                }
                setPets(tempArr);
                navigate("/");
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
            <h1>Edit {PetName}</h1>
         
              {errors.map((err, idx) => {
                return(
                    <p style = {{ marginTop : "40px"}}key={idx}>{err}</p>
                )
            })} 

            <PetForm
            formHandler={updateHandler}
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

export default Update;
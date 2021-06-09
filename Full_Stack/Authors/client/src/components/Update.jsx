import React, {useState, useEffect} from 'react';
import AuthorForm from './AuthorForm';
import axios from 'axios';
import { navigate } from '@reach/router';


const UpdatePerson = ({id, Authors, setAuthors}) => {
    const [Name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(()=>{
        const ThisAuthor = Authors.filter(author => author._id === id)[0];
        console.log(ThisAuthor);
        setName(ThisAuthor.Name);
    }, [id, Authors])

    const updateHandler = e =>{
        e.preventDefault();
        const updatedAuthor = {
         Name
        }
        axios.put(`http://localhost:8000/edit/${id}`, updatedAuthor)
            .then( res => {
                let tempArr = [...Authors];
                for (let i=0; i< tempArr.length; i++){
                    if(tempArr[i]._id === id){
                        tempArr[i] = res.data;
                    }
                }
                setAuthors(tempArr);
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
            
            <h1>Update {Name}</h1>
            
              {errors.map((err, idx) => {
                return(
                    <p style = {{ marginTop : "40px"}}key={idx}>{err}</p>
                )
            })} 

            <AuthorForm 
            formHandler={updateHandler}
            Name={Name}
            setName={setName}
      
            />
           
        </div>
        
    )
}

export default UpdatePerson;
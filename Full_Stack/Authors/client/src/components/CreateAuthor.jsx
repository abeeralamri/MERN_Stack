import React, {useState} from 'react';
import AuthorForm from './AuthorForm';
import axios from "axios";
import {Link, navigate} from '@reach/router'

const CreateAuthor = ({Authors, setAuthors}) => {
    const [Name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const createHandler = e => {
        e.preventDefault();
        const newAuthor = {
            Name,
            
        }
        axios.post("http://localhost:8000/new", newAuthor)
            .then( res => {
                setAuthors([...Authors, res.data]);
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
            <Link to = "/">Home</Link>
            <h4>Create a new author:</h4>
          
            <AuthorForm 
            formHandler={createHandler}
            Name={Name}
            setName={setName}
            />
            {errors.map((err, idx) => {
                return(
                    <p key={idx}>{err}</p>
                )
            })}
        </div>

    )
}

export default CreateAuthor;
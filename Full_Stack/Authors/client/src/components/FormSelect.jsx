import React, {useState} from 'react';
import {Router} from '@reach/router';
import AuthorPerent from './AuthorPerent';
import CreateAuthor from './CreateAuthor';
import Update from "./Update";

const FormSelect = (props) => {
    const [Authors, setAuthors] = useState([{
        Name: "",
       
    }])
    return(
        <div>
            <Router>
                <AuthorPerent path="/" 
                Authors={Authors}
                setAuthors={setAuthors}
                />
                <CreateAuthor 
                    Authors={Authors} 
                    setAuthors={setAuthors}
                    path="/new"
                />
                <Update 
                    Authors={Authors} 
                    setAuthors={setAuthors}
                    path="/edit/:id"
                />
            </Router>
        </div>
    )
}

export default FormSelect;
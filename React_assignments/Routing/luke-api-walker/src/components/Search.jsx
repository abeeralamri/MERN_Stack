import React, { useState } from 'react';

import {navigate} from '@reach/router';



import 'bootstrap/dist/css/bootstrap.min.css';

const Search = props =>{
    const [Catigories, setCatigories] = useState("people")
    const [ID, setID] = useState(0)


  

    const SumbitHandler = (e) =>{
        e.preventDefault();
        navigate(`/${Catigories}/${ID}`);
    }
   
  
    
    return(
        <form style ={{ margin : "50px"}} className= "row pt-5" onSubmit = {SumbitHandler} >
           <div className = "col-sm-6">
               <div className = "row">
                   <label class = "col-sm-5">Search for:</label>
                    <select class = "col-sm-4" value  = {Catigories} onChange = {(e) => setCatigories(e.target.value)}>
                        <option value = "people">People</option>
                        <option value = "planets">Planets</option>
                        <option value = "starships">Starships</option>
                    </select>
                </div>
            </div>
            <div className = "col-sm-6">
                <div className = "row">
                    <div className= "col-sm-5 row">
                        <label className= "col-sm-4" htmlFor="id">ID:</label>
                        <input className= "col-sm-8" value = {ID} type="number" name="id" onChange = { (e) => setID(e.target.value) } />
                    </div>
                        <div className= "col-sm-5 ">
                            <button className = "col-sm-12 btn btn-primary">Search</button>
                        </div>
                </div>
            </div>
        </form>
            
            
    )
}

export default Search;



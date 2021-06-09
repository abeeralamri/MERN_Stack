import React, {useState} from 'react';
import axios from "axios";
import { navigate} from '@reach/router'
import Headers from './Headers';

const AddPlayer = (props) => {
    const [TeamName, setTeam] = useState("");
    const [Postion, setPostion] = useState("");
    const [errors, setErrors] = useState([]);

    const createHandler = e => {
        e.preventDefault();
        const newAuthor = {
            TeamName,
            Postion,
            
        }
        axios.post("http://localhost:8000/players/addPlayer", newAuthor)
            .then( res => {
                setTeam([...TeamName, res.data]);
                navigate('/players/list');
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
               <Headers/>
            <form style = {{textAlign : "center"}} onSubmit={createHandler}>
        
                <div  className="form-group">
                    <span style = {{width : "470px", height :"80px" , margin : "auto", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                        <label style = {{ marginRight : "30px", color : "grey"}}>Player Name:</label>
                        <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text" name = "TeamName" onChange={(e)=> setTeam(e.target.value)} value={TeamName}/>
                    </span>
                </div>
                <div  className="form-group">
                    <span style = {{width : "470px", height :"80px" , margin : "auto", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                        <label style = {{ marginRight : "30px", color : "grey"}}>Preffered Postion:</label>
                        <input style = {{marginTop : "5px"}} className = "col-sm-7" type="text" name = "Postion" onChange={(e)=> setPostion(e.target.value)} value={Postion}/>
                    </span>
                </div>

               
                <button style = {{marginTop : "30px"}} type="submit" className="col-sm-5 btn btn-dark">Add</button>
        
        
            </form>
            {errors.map((err, idx) => {
                return(
                    <p key={idx}>{err}</p>
                )
            })}
        </div>

    )
}

export default AddPlayer;
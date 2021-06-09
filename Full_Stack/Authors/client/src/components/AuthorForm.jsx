import { Link } from '@reach/router';
import React from 'react';

const AuthorForm = ({formHandler, Name, setName}) => {

    
    return(
        <form style = {{textAlign : "center"}} onSubmit={formHandler}>
 
            <div  className="form-group">
                <span style = {{width : "400px", height :"80px" , margin : "auto", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                    <label style = {{ marginRight : "30px", color : "grey"}}>Name</label>
                    <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text" name = "Name" onChange={(e)=> setName(e.target.value)} value={Name}/>
                </span>
            </div>

                <Link to = "/"><button style = {{marginTop : "30px", marginRight:"10px"}} type="submit" className="btn btn-primary">Cancel</button></Link>
            <button style = {{marginTop : "30px"}} type="submit" className="btn btn-primary">Sumbit</button>
            
            
    </form>
           
   
    )
}

export default AuthorForm;
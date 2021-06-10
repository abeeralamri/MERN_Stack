import { Link } from '@reach/router';
import React from 'react';

const Headers = (props) => {
    return(
       
        <div style = {{display : "flex", marginLeft: "600px", marginTop : "30px",  marginBottom : "40px"}}>
           <h1>Pet Shelter</h1>
           <h6 style = {{marginTop: "15px", marginLeft: "150px"}}><Link to = "/">back to home</Link></h6>
        
        </div>
    )
}
export default Headers;
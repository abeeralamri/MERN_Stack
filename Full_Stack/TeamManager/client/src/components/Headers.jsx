import { Link } from '@reach/router';
import React from 'react';

const Headers = (props) => {
    return(
       
        <div >
            <div style = {{display : "flex",  marginBottom : "30px", marginTop: "50px"}}>
                <Link style = {{marginRight : "180px", marginLeft : "350px"}} to = {""}> Manage Player </Link> 
               
        
            </div>
            <div>
                 <Link style = {{marginRight : "300px"}} to = {"/players/list"}>List</Link> 
                 <Link  style = {{marginLeft : "15px", marginRight : "20px"}} to = {"/players/addPlayer"}>Add player</Link> 
            </div>
        
        </div>
    )
}
export default Headers;
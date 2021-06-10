import { Link } from '@reach/router';
import axios from 'axios';
import React, {useEffect, useState} from 'react';



const PetPerent = () => {
    
    const [pets, setPets] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/")
        .then(res=> setPets(res.data))
        .catch(err => console.log(err));
    }, [])
 

   
return(
    <div>
      <div style = {{display : "flex", marginLeft: "600px", marginTop : "30px"}}>
           <h1>Pet Shelter</h1>
         
           <h6 style = {{marginTop: "15px", marginLeft: "150px"}}><Link to = "/pets/new">add a pet to the shelter</Link></h6>
        
        </div>
        <h4 style = {{marginTop: "50px"}}>These pets are looking for a good home</h4>

        <table className="table" style = {{margin : "auto",marginTop : "50px", width : "500px"}}>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Actions</td>
                    </tr>
                {
                    pets.map((pet, idx)=>{
                        return(
                            <tr key={idx}>
                                <td>
                                   {pet.PetName}
                                </td>
                                <td>
                                    {pet.PetType}
                                </td>
                                <td><Link style = {{marginRight:"15px"}}to={`/pets/edit/${pet._id}`}>Edit</Link>
                            
                                <Link to = {`/pets/${pet._id}`} >Details</Link></td>

                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
                
    </div>
)

}

export default PetPerent;
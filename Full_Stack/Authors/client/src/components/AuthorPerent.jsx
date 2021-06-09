import axios from 'axios';
import React, {useEffect} from 'react';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

const AuthorPerant = ({Authors, setAuthors}) => {
   

    useEffect(() => {
        axios.get("http://localhost:8000")
        .then(res=> setAuthors(res.data))
        .catch(err => console.log(err));
    }, [setAuthors])
 
const deleteHandler = AuhtorId => {
    const tempArr = Authors.filter( author => author._id !== AuhtorId);
    setAuthors(tempArr);
}

return(
    <div>
        <h4  style = {{marginTop : "20px"}}> <Link to = {"/new"}>Add an author</Link> </h4>

        <h4 style = {{marginTop : "50px"}}>We have quotes by: </h4>

        <table className="table" style = {{margin : "auto",marginTop : "50px", width : "350px"}}>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Actions</td>
                    </tr>
                {
                    Authors.sort((author, idx)=> (author.Name > idx.Name) ? 1 : -1).map((author, idx)=>{
                        return(
                            <tr key={idx}>
                                <td>
                                    {author.Name}
                                </td>
                            
                                <td><Link to={`/edit/${author._id}`}><button style = {{width : "70px"}} type="submit" className="btn btn-primary">Edit</button></Link>
                                <DeleteButton deleteId={author._id} callback={deleteHandler}/></td>

                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
                
    </div>
)

}

export default AuthorPerant;
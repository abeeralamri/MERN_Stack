import React from 'react'
import {Link} from '@reach/router'
import axios from 'axios';
const PersonList = props => {
    const { remove } = props;
    const DeleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/product/${id}/delete`)
        .then(res => remove(id))

    }
    return (
        <div>
            {props.product.map((product, idx)=>{
                return( 
                    <div>
                    <li style = {{textAlign: "center"}} key={idx} key={idx}><Link to={`/api/product/${product._id}`}>{product.title} </Link>
                   <Link to={`/api/product/${product._id}/edit`}> <button style = {{marginLeft: "30px"}} type="submit" className="btn btn-primary" >edit</button></Link> 
                    <button style = {{marginLeft: "30px"}} type="submit" className="btn btn-dark" onClick = {(e)=> {DeleteProduct(product._id)}} >delete</button>
                    </li><br></br>
                    </div>
               )
            })}
        </div>
    )
}
export default PersonList;
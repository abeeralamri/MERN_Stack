import React from 'react'
import {Link} from '@reach/router'
const PersonList = props => {
    return (
        <div>
            {props.product.map((product, idx)=>{
                return( 
                    <li style = {{textAlign: "center"}} key={idx} key={idx}><Link to={`/api/product/${product._id}`}>{product.title}</Link></li>
              
              
               )
            })}
        </div>
    )
}
export default PersonList;
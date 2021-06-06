import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <p style = {{textAlign: "center"}}>Title: {product.title}</p>
            <p style = {{textAlign: "center"}}>Price: {product.price}$</p>
            <p style = {{textAlign: "center"}}>Description: {product.desc}</p>

        </div>
      
    )
}
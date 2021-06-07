import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[])

    const remove = id =>{
        setProduct(product.filter(product => product._id !== id));
    }
    return (
        <div>
           <ProductForm/>
           <hr/>
           {loaded && <ProductList product = {product} remove = {remove}/>}
        </div>
    )}
export default Main;
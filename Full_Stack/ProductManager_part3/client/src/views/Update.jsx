import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Update = props => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc)
            })
    }, [])
    const UpdateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}/edit`, {
            title,
            price,
            desc,
        })
            .then(res => console.log(res));
    }

    return(
        <form style = {{textAlign : "center"}} onSubmit={UpdateProduct}>
        <h1>Product Manager</h1>
            <div className="form-group">
                <span style = {{width : "400px", height :"80px" , marginLeft : "650px", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                    <label style = {{ marginRight : "30px", color : "grey"}}>Title</label>
                    <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text"  name= "title" value = {title} onChange={(e)=>setTitle(e.target.value)} />
                </span>
            </div>

           <div className="form-group">
                <span style = {{width : "400px", height :"80px" , marginLeft : "650px", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                    <label style = {{ marginRight : "30px", color : "grey"}}>Price</label>
                    <input style = {{marginTop : "5px"}} className = "col-sm-8" type="number"  name= "price" value = {price} onChange={(e)=>setPrice(e.target.value)} />
                </span>
            </div>
            
            <div className="form-group">
                <span style = {{width : "400px", height :"80px" , marginLeft : "650px", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                    <label style = {{ marginRight : "30px", color : "grey"}}>Description</label>
                    <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text"  name= "desc" value = {desc} onChange={(e)=>setDesc(e.target.value)} />
                </span>
            </div>
                
            <button style = {{marginTop : "30px",marginRight: "30px"}} type="submit" className="btn btn-light">Update</button>
            
    </form>
    )
}
export default Update;
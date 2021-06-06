import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
   
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
   
    const onSubmitHandler = e => {
      
        e.preventDefault();
    
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            desc,
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
 
    return (
        <form style = {{textAlign : "center"}} onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
                <div className="form-group">
                    <span style = {{width : "400px", height :"80px" , marginLeft : "650px", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                        <label style = {{ marginRight : "30px", color : "grey"}}>Title</label>
                        <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                    </span>
                </div>

               <div className="form-group">
                    <span style = {{width : "400px", height :"80px" , marginLeft : "650px", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                        <label style = {{ marginRight : "30px", color : "grey"}}>Price</label>
                        <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                    </span>
                </div>
                
                <div className="form-group">
                    <span style = {{width : "400px", height :"80px" , marginLeft : "650px", marginTop : "50px" , backgroundColor :"#F6F6F6"}}  className="input-group-text" >
                        <label style = {{ marginRight : "30px", color : "grey"}}>Description</label>
                        <input style = {{marginTop : "5px"}} className = "col-sm-8" type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
                    </span>
                </div>
                    
                <button style = {{marginTop : "30px",marginRight: "30px"}} type="submit" className="btn btn-light">Create</button>
                
        </form>
    )
}

export default ProductForm;
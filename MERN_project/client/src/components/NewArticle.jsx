import '../style/style.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { navigate } from '@reach/router';


const NewArticle = () =>{

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [content,setContent] = useState("");
    const [url,setUrl] = useState("");
    const [writtenByUser,setWrittenByUser] = useState("true");
    const [image,setImage] = useState("");
    const [articleId,set_id] = useState("");

    const [userArticles, setUserArticles] = useState([]);
    const [lodaed, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/articles/')
        .then(res => {setUserArticles(res.data.filter(art => art.writtenByUser === false));
            setLoaded(true);})
        .then(console.log("ADDED"))
        .catch(err => console.log(err))
    },[])


    const createHandler = e => {
        e.preventDefault();
        const newArticle ={
            title,
            description,
            content,
            url,
            writtenByUser:writtenByUser,
            image,
            articleId,
        };

        axios.post('http://localhost:8000/api/articles/new', newArticle)
        .then(res => navigate('/user/articles'))
        .catch( err => console.log(err));
    }

    return (
        <div>
        <form onSubmit={createHandler} >
            <div className="active-pink active-pink mb "  style={{ marginBottom:20,marginTop:20}}>
                <h2 style={{textAlign:"left", marginTop:20, marginTop:50}}>Add a new Article</h2>
                <input style={{ marginBottom:20,marginTop:40}} className="form-control" type="text" name="title" placeholder="Title" onChange={e => setTitle(e.target.value)}/>
                <textarea style={{ marginBottom:20,marginTop:20,height:"150px"}} className="form-control" type="text"  name="content" placeholder="Content"  onChange={e => setContent(e.target.value)}/>
                <textarea style={{ marginBottom:20,marginTop:20, height:"150px"}} className="form-control" type="text" rows="4"  name="description" placeholder="Description"  onChange={e => setDescription(e.target.value)}/>
                {/* <input style={{ marginBottom:20,marginTop:20}} className="form-control" type="url"  name="url" placeholder="URL"  onChange={e => setTitle(e.target.value)}/> */}
                
                <div style={{textAlign:"left",color:"#1e3685"}}>
                    <label ><b>Resource :</b></label>
                </div>
                <select  onChange={e => set_id(e.target.value)}>
                {/* <option value={art.title}>{art.title}</option> */}

                {   lodaed&&
                    userArticles.map((art, idx) => {
                        return( 
                            <option value={art._id} >{art.title}</option>
                            // <input>{art.title}</input>
                            // <label>{art.title} </label>
                            // <input  type="checkbox"/>
                        )
                    })
                }
                </select>
                <button style={{ marginBottom:20,marginTop:1, width:400}} className="btn-hover color-9" >Add</button>
            </div>
        </form>
        </div>      
    );

}
export default NewArticle;
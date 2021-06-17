import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react';
import '../style/style.css';

const ViewArt = ({articles, id}) =>{


    const thisArticle = {
        title : articles[id].title,
        description: articles[id].description,
        content: articles[id].content,
        url: articles[id].url,
        image: articles[id].image
    }

    const addHandler = e => {
        axios.post('http://localhost:8000/api/articles/new', thisArticle)
        .then(res => navigate('/favorites'))
        .catch( err => console.log(err));
    }

    return (

        <div>
        <div className="courses-container">
            <div className="course">
                <div className="course-preview">
                <img style ={{marginTop:"20px", marginBottom: "20px", width: "450px",height: "400px"}} src={`${articles[id].image}`} height="350px" width="700px"/>

                </div>
                <div className="course-info">
                    <h3 style = {{marginBottom:"20px"}}>{articles[id].title}</h3>
                    <p style = {{marginBottom:"23px"}}>{articles[id].description}</p>
                        <p style = {{marginBottom:"23px"}}>{articles[id].content}</p>
                        <p>published at: {articles[id].publishedAt}</p>
                        <a  href={articles[id].url} target="_blank"><button className="btn-hover1 color-1" >Read From the Orignal Source</button></a>
                        <button style= {{marginTop: "20px"}}  className="btn-hover1 color-1" onClick={addHandler}>Add to favorite</button>

                
                </div>
            </div>
        </div>
        
    </div>
            
                
   
        
    )
}

export default ViewArt;
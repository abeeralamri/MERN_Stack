import axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../style/style.css';

const ViewLocalArt = props =>{

    const [articles, setArticles] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/articles/${props.id}`)
        .then(res => setArticles(res.data));
    },[])


return (          
    <div>
        <div class="courses-container">
            <div class="course">
                <div class="course-preview">
                <img style ={{marginTop:"20px", marginBottom: "20px", width: "450px",height: "400px"}} src={`${articles.image}`} height="350px" width="700px"/>

                </div>
                <div class="course-info">
                    <h3 style = {{marginBottom:"20px"}}>{articles.title}</h3>
                    <p style = {{marginBottom:"23px"}}>{articles.description}</p>
                        <p style = {{marginBottom:"23px"}}>{articles.content}</p>
                        <p>published at: {articles.createdAt}</p>
                        <a  href={articles.url} target="_blank"><button className="btn-hover1 color-1" >Read From the Orignal Source</button></a>

                
                </div>
            </div>
        </div>
        
    </div>   

)
}

export default ViewLocalArt
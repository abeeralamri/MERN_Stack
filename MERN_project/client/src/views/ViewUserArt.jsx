import axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../style/style.css';

const ViewUserArt = props =>{

    const [articles, setArticles] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/articles/${props.id}`)
        .then(res => setArticles(res.data));
    },[])


return (          
    <div>
        <div  class="courses-container">
            <div  style = {{width:"800px", marginLeft:"160px" ,marginTop:"100px"}} class="course">
                <div style = {{marginRight:"-500px" , }} class="course-preview">

                </div>
                <div  class="course-info">
                    <h3 style = {{marginBottom:"20px" , textAlign:"center"}}>{articles.title}</h3>
                    <p style = {{marginBottom:"23px"}}>{articles.description}</p>
                        <p style = {{marginBottom:"23px"}}>{articles.content}</p>
                        <p>published at: {articles.createdAt}</p>
                        <a  href={`/user/articles/source/${articles.articleId}`} ><button className="btn-hover1 color-1" >View Source Used</button></a>
                </div>
            </div>
        </div>
        
    </div>   

)
}

export default ViewUserArt;
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "@reach/router";
import '../style/style.css';
import UserArticleList from "../components/UserArticleList";



const UserArticles = (props) => {

    
    const [articles, setArticles] = useState([]);
    const [lodaed, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/articles/')
        .then(res => {setArticles(res.data.filter(art => art.writtenByUser !== false));
            setLoaded(true);})
        .catch(err => console.log(err))
    },[articles])

    const removeFromDom = artId => {
        setArticles(articles.filter(art => art._id !== artId));
    }
    return (
        <div>
            { lodaed &&
            <div>
            
                <UserArticleList articles={articles} removeFromDom={removeFromDom}/>
            </div>
            }
        </div>
    );
};

export default UserArticles;

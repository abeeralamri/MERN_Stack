import React, { useState, useEffect } from "react";
import axios from "axios";
import '../style/style.css';
import FavoritesList from "../components/FavoritesList";

import UserArticleList from "../components/UserArticleList";




const Favorites = (props) => {

    const [articles, setArticles] = useState([]);
    const [lodaed, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/articles/')
        .then(res => {setArticles(res.data.filter(art => art.writtenByUser !== true));
            setLoaded(true);})
        .catch(err => console.log(err))
    },[articles])

    const removeFromDom = artId => {
        setArticles(articles.filter(art => art._id !== artId));
    }
    return (
        <div>
            <div>
            { lodaed &&
            <div>
            
                <FavoritesList articles={articles} removeFromDom={removeFromDom}/>
            </div>
            }

        </div>
        </div>
    );
};

export default Favorites;

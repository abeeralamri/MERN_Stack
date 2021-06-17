import React from 'react'
import axios from 'axios';
import {navigate} from '@reach/router'


const DeleteButton = props =>{
    const {articleId, removeFromDom} = props;

    const deleteArticle = e  =>
    {
        axios.delete('http://localhost:8000/api/articles/delete/' + articleId)
        .then(res => navigate('/favorites'))
        .catch(err => console.log(err));

    }

    return <button variant="danger" onClick={deleteArticle}> Unfavorite </button>
    

}

export default DeleteButton;
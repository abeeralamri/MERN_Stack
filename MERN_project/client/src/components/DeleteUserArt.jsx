import React from 'react'
import axios from 'axios';
import {navigate} from '@reach/router'


const DeleteButton = props =>{
    const {articleId, removeFromDom} = props;

    const deleteArticle = e  =>
    {
        axios.delete('http://localhost:8000/api/articles/delete/' + articleId)
        .then(res => navigate('/user/articles'))
        .catch(err => console.log(err));

    }

    return <button style= {{marginLeft:25}} variant="danger" onClick={deleteArticle}> Delete </button>
    

}

export default DeleteButton;
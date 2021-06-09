import axios from 'axios';
import React from 'react';

const DeleteButton = ({deleteId, callback}) => {

    const clickHandler = e => {
        axios.delete(`http://localhost:8000/players/${deleteId}`)
            .then( res => {
                callback(deleteId)
            })
    }
    return(
        <button style = {{marginLeft : "30px"}} className="btn btn-danger" onClick={clickHandler}>Delete</button>
    )
}

export default DeleteButton;
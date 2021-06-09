import axios from 'axios';
import React from 'react';

const DeleteButton = ({deleteId, callback}) => {

    const clickHandler = e => {
        axios.delete(`http://localhost:8000/delete/${deleteId}`)
            .then( res => {
                callback(deleteId)
            })
    }
    return(
        <button style = {{marginLeft : "30px"}} className="btn btn-dark" onClick={clickHandler}>Delete</button>
    )
}

export default DeleteButton;
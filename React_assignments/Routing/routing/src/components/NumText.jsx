import React from 'react';
import './style.css';

const NumText = props => {
    let num = true;
    if(isNaN(+props.num_text)){
        num = false;
    }

    return (
        <div>
       {num ? <p>The number is : {props.num_text}</p> : <p>The word is: {props.num_text}</p> }
       </div>
    )
    }

export default NumText
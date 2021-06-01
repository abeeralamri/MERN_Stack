import React from 'react';
import './style.css';

const TextColor = props => {
    let num = true;
    if(isNaN(+props.num_text)){
        num = false;
    }

    return (
        <div>
       {num ? <p>The number is : {props.num_text}</p> : <p style={{backgroundColor: props.bgColor, color : props.color, height: "100px", paddingTop: "50px", textAlign:'center'}}>The word is: {props.num_text}</p> }
       </div>
    )
    }

export default TextColor;
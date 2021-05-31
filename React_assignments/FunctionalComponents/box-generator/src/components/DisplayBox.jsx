import React  from 'react';
    
    
const DisplayBox = ({boxes}) => {
    const renderBoxes = (box, idx) => {
        return(
            <div key={idx} style={{backgroundColor: box.color, width: box.size + "px", height: box.size + "px", display: 'inline-block', margin: "10px"}}></div>
        )
    }
    return(
        <div>
            {boxes.map(renderBoxes)}
        </div>
    )
}
    
export default DisplayBox;
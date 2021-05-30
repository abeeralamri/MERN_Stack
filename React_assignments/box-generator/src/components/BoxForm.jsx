import React, {useState} from 'react';

const BoxForm = ({boxes, setBoxes}) => {
    let [BoxColor, setBoxColor] = useState(" ");
    let [BoxSize, setBoxSize] = useState("0");
    const colorHandler = e => {
        setBoxColor(e.target.value);
    }
    const sizeHandler = e => {
        setBoxSize(e.target.value);
    }
   
    const formHandler = e => {
        e.preventDefault();
     
        const thisBox = {
            size: BoxSize,
            color: BoxColor
        }
        setBoxes([...boxes, thisBox]);
        setBoxSize("0");
        setBoxColor(" ");
    }

   
    return(
        <form onSubmit={formHandler}>
            <div>
                <label>Size</label>
                <input type="number" onChange={sizeHandler} value={BoxSize}/>
            </div>
            <div>
                <label>Color</label>
                <input type="text" onChange={colorHandler} value = {BoxColor}/>
            </div>
            <button>Submit</button>
        </form>
    )
}

export default BoxForm;
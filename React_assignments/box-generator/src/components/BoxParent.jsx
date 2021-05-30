import React, {useState} from 'react';
import BoxForm from './BoxForm';
import DisplayBox from './DisplayBox';


const BoxParent = props => {

const [boxes, setBoxes] = useState ([{
    size:  "100",
    color: "#ff0000"

}])

return(

    <div>
        <BoxForm boxes = {boxes} setBoxes = {setBoxes}/>

        <DisplayBox boxes = {boxes}/>

    </div>

)













}

export default BoxParent;
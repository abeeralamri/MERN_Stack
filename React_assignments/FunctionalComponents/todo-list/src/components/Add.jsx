import React, {useState} from 'react';

const Add = ({taskList, setTaskList}) => {
    const [task, setTask] = useState("")
    const formHandler = e => {
        e.preventDefault();
        const newTask = {text: task, isCompleted: false}
        setTaskList([...taskList, newTask])
        setTask("")
    }
    return(
        <form onSubmit={formHandler}>
            <input style = {{marginTop : "50px"}} className = "col-sm-5" type="text" value={task} onChange={ e => setTask(e.target.value)}/>
            <div  >
            <button style = {{marginTop : "10px"}} className = "col-sm-1 btn btn-primary">Add</button>
            </div> 
        </form>
    )
}

export default Add;
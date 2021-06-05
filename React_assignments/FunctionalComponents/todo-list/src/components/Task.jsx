import React from 'react';

const Task = ({taskList, setTaskList}) => {
    const checkHandler = e => {
        let updateList = [...taskList]
        let thisTask = taskList[e.target.name];
        console.log(thisTask)
        if (taskList[e.target.name].isCompleted){
            thisTask.isCompleted = false;
        } else {
            thisTask.isCompleted = true;
        }
        updateList[e.target.name] = thisTask;
        setTaskList(updateList);
    }

    const deleteHandler = e =>{
        setTaskList(taskList.filter((task, idx) => {
            return idx != e.target.name;
        }))
    }
    return(
        <div>
            {taskList.map((task, idx) => {
                return(
                    <div style = {{marginTop : "50px"}} key ={idx}>
                        {
                            taskList[idx].isCompleted ?
                            <label style={{fontSize : "25px", textDecoration: "line-through"}}>{task.text}</label> : 
                            <label style={{fontSize : "25px"}}>{task.text}</label>
                        }
                        <input style={{fontSize : "25px",marginLeft : "15px", marginRight : "20px"}}  type="checkbox" checked={taskList[idx].isCompleted} onChange={checkHandler} name={idx}/>
                        <button className =" col-sm-2 btn btn-dark" onClick={deleteHandler} name={idx}>DELETE</button>
                    </div>
                )
            })}

        </div>
    )
}


export default Task;
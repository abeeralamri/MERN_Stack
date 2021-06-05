import React, {useState} from 'react';
import Add from './Add';
import Task from './Task';

const List = props => {
    const [taskList, setTaskList] = useState([]);

    return(
        <div>
            <Add taskList={taskList} setTaskList={setTaskList}/>
            <Task taskList={taskList} setTaskList={setTaskList}/>
        </div>
    )
}

export default List;
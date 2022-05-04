import React, { useState, useEffect } from 'react';
import TDLButton from './TDLButton';
import TDLSwitch from './TDLSwitch';

const TDLTaskItem = (props)=> {

    const [task, setTask] = useState(props);

    useEffect(() => {
        setTask(props);
    },[props]);

    function onClickEdit() {
    }

    function onClickDelete() {
        console.log('delete');
    }

    function onChangeValue(value) {
        let updatedTask = {status:value};
        setTask(task=> ({...task,...updatedTask}));
    }


    return (
        <article className='TDLTaskItem'>
            <span className="content">{task.content}</span>
            <span className='status'>{task.status ? "completed" : "to do"}</span>
            <div className='buttons-row'>
                <TDLSwitch initialValue={task.status} callback={onChangeValue} />
                <TDLButton icon="edit" label="Edit" color="#1e88e5" callback={onClickEdit} />
                <TDLButton icon="delete" label="Delete" color="#e53935" callback={onClickDelete} />
            </div>
        </article>
    );
}

export default TDLTaskItem;
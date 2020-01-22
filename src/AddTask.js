import React, {Fragment, useState } from 'react'
import initialData from './initial-data';
import { Button, Input } from 'semantic-ui-react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addTask } from './actions/addTask';


const AddTask = ({reducer, addTask}) => {

    const [task, setTask] = useState('');

    const onChange = (event) => {
        event.preventDefault();
        setTask(event.target.value)
    }

    const onSubmit = () => {
        const taskMessage = {
            id: uuid().v4,
            content: task
        }
        addTask(taskMessage);
        return;
    }
        // const column = this.state.columns[source.droppableId];
        // const newTaskIds = Array.from(column.taskIds);
        // newTaskIds.splice(source.index, 1);
        // newTaskIds.splice(destination.index, 0, draggableId);

        // const newColumn = {
        //     ...column,
        //     taskIds: newTaskIds
        // }

        // const newState = {
        //     ...this.state,
        //     columns: {
        //         ...this.state.columns,
        //         [newColumn.id]: newColumn
        //     }
        // }

        // this.setState(newState)
    
    return (
      <Fragment>
      <Input name="task" value={task} onChange={onChange}></Input>
        <Button onClick={() => onSubmit()}>Add Task to the Progress</Button>
      </Fragment>
    )

}

const mapStateToProps = ({reducer}) => ({
    reducer: reducer
})

export default connect(mapStateToProps, {
    addTask
})(AddTask);

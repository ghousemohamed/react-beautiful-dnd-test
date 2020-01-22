import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './initial-data';
import {DragDropContext} from 'react-beautiful-dnd';
import Column from './Column';
import '@atlaskit/css-reset'
import {Grid} from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
import styled from 'styled-components';
import AddTask from './AddTask';
import {Provider} from 'react-redux';
import store from './store';


const Container = styled.div`
    height: 100%
`

class App extends React.Component {
    state = initialData;

    onDragEnd = result => {
        const {destination, source, draggableId} = result;

        if(!destination) {
            return ;
        }
        if(
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const fromColumn = this.state.columns[source.droppableId];
        const toColumn = this.state.columns[destination.droppableId];
        if(source.droppableId !== destination.droppableId){
            const fromNewTaskIds = Array.from(fromColumn.taskIds);
            const toNewTaskIds = Array.from(toColumn.taskIds);
            fromNewTaskIds.splice(source.index, 1)
            toNewTaskIds.splice(destination.index, 0, draggableId);

            

            const fromNewState = {
                ...fromColumn,
                taskIds: fromNewTaskIds
            }

            const toNewState = {
                ...toColumn,
                taskIds: toNewTaskIds
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [fromNewState.id]: fromNewState,
                    [toNewState.id]: toNewState
                }
            }

            this.setState(newState);
        } else {
        
        const column = this.state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
            taskIds: newTaskIds
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn
            }
        }

        this.setState(newState)
    }
    }
    
    render(){
        return (<Provider store={store}><Container><DragDropContext onDragEnd={this.onDragEnd}><Grid ><Grid.Row columns={this.state.columnOrder.length}>{this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

            return <Grid.Column key={column.id}><Column key={column.id} column={column} tasks={tasks} /></Grid.Column>
        })
    }}</Grid.Row></Grid></DragDropContext>
    <AddTask />
    </Container></Provider>)
}
}

ReactDOM.render(<App />, document.getElementById('root'));
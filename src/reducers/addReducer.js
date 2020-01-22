import { ADD_TASK } from "../actions/types";

const initialState= {
    tasks: {
        'task-1': {id: 'task-1', content: 'Coding'},
        'task-2': {id: 'task-2', content: 'Engineering'},
        'task-3': {id: 'task-3', content: 'Develop'},
        'task-4': {id: 'task-4', content: 'Contribute'},
        'task-5': {id: 'task-5', content: 'Design'},
        'task-6': {id: 'task-6', content: 'Deploy'},
        'task-7': {id: 'task-7', content: 'Scale'},
        'task-8': {id: 'task-8', content: 'Cloud Function'},
        'task-9': {id: 'task-9', content: 'Integrations'},
        'task-10': {id: 'task-10', content: 'Review'},
        'task-11': {id: 'task-11', content: 'Database'},
        'task-12': {id: 'task-12', content: 'React Integration'},
        'task-13': {id: 'task-13', content: 'CRM Board'}
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            taskIds: ['task-5', 'task-6', 'task-7']
        },
        'column-3': {
            id: 'column-3',
            title: 'Review',
            taskIds: ['task-8', 'task-9', 'task-10']
        },
        'column-4': {
            id: 'column-4',
            title: 'Completed',
            taskIds: ['task-11', 'task-12', 'task-13']
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
    total: 14
    
}

export default function(state=initialState, action){
    const {type, payload} = action
    switch(type){
        case ADD_TASK:
            return {
                ...state,
                tasks: {...state.tasks, payload}
            }
        default:
            return state;
    }
}  
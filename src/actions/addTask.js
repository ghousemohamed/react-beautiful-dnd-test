import { ADD_TASK } from "./types";

export const addTask = (content) => dispatch => {
    dispatch({
        type: ADD_TASK,
        payload: content
    })
}
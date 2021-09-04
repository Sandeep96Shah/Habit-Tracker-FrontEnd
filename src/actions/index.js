import { ADD, UPDATE } from "./actionTypes";

//action to add the habit
export function addHabit(data){
    return {
        type : ADD,
        payload : data,
    }
}

//action to update the status for the habit
export function updateHabit(status, data, index){
    return {
        type: UPDATE,
        payload : data,
        status,
        index,
    }
}
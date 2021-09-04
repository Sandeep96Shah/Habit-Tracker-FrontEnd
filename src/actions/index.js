import { ADD, UPDATE } from "./actionTypes";

export function addHabit(data){
    return {
        type : ADD,
        payload : data,
    }
}

export function updateHabit(status, data, index){
    return {
        type: UPDATE,
        payload : data,
        status,
        index,
    }
}
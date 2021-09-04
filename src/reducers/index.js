import { ADD, UPDATE } from "../actions/actionTypes";

const initialState = {
    habits : [ ]
};

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

export default function habitTracker(state = initialState, action){
    switch(action.type){
        case ADD:
            const newHabit = {
                name : action.payload,
                daily : [ 0, 0, 0, 0, 0, 0, 0 ],
                time :  formatAMPM(new Date()),
            }
            state.habits.push(newHabit);
            return {
                ...state,
            }
        case UPDATE:
            const index = state.habits.findIndex((habit) => habit.name === action.payload);
            const value = action.status ? 1 : -1;
            state.habits[index].daily[action.index] = value;
            const newHabits = [...state.habits];
            return{
                ...state,
                habits : newHabits,
            }
        default:
            return state;
    }
}
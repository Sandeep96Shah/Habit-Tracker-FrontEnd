import React, { useState } from 'react';
import { connect } from 'react-redux';
import Habit from './Habit';
import { addHabit } from '../actions';

//component to show the header and the lists of habits.
const App = (props) => {

  const [ showAdd, setShowAdd ] = useState(false);
  const [ habit, setHabit ] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    props.dispatch(addHabit(habit));
    setHabit("");
    setShowAdd(false);
  }

  const habits = props.habits;

  return (
    <div className="habit">
        <div className="container">
          <div className="header">
            <p className="header_title">Habit Tracker</p>
            <p className="header_add" onClick={ () => setShowAdd(!showAdd) }>ADD</p>
          </div>
          {
            showAdd && 
            <div className="add">
              <div className="add_container">
                <label htmlFor="habit">Habit</label>
                <input name="habit" type="text" onChange={ (e) => setHabit(e.target.value) } />
                <button onClick={ (e) => handleAdd(e) }>ADD</button>
              </div>
            </div>
          }
          <div className="habit_list">
            {
              habits.length>0 ? 
                habits.map((habit, index) => <Habit habit={habit} key={index} />)
                : <h1>No habit is added!</h1>
            }
          </div>
        </div>
    </div>
  );
}

//function to fetch the data from the store.
function mapStateToProps(state){
  return {
    habits : state.habits,
  }
}

export default connect(mapStateToProps)(App);

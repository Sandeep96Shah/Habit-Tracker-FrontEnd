import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import Daily from './Daily';
import { updateHabit } from '../actions';

//component to show each habit
const Habit = (props) => {

    const [ eachDay, setEachDay ] = useState(false); 
    
    const { name, time, daily } = props.habit;

    const handleStatus = (status, name, index) => {
        props.dispatch(updateHabit(status, name, index));
    }

    return (
        <div className="each_habit">
            <div className="h_l_header">
                <div className="h_l_header_title" onClick={ () => setEachDay(!eachDay) }><p>{name}</p></div>
                <div>
                    <div className="time"><p>{time}</p></div>
                    <div className="star_yellow"><p><FaStar /></p></div>
                </div>
            </div>
            { !eachDay ? <div className="each_detail">
                <div><p>1 day</p></div>
                <div><p>9 best</p></div>
                <div><p>20/30</p></div>
                <div><p>daily</p></div>
            </div> :
            <div className="daily">
                {
                    daily.map((each, index) => <Daily each={each} name={name} key={index} index={index} dispatch={props.dispatch} handleStatus={handleStatus} />)
                }
            </div> }
        </div>
    )
}

//function to fetch the data from the store.
function mapStateToProps(state){
    return {
      habits : state.habits,
    }
}

export default connect(mapStateToProps)(Habit);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FaTimes, FaCheck } from 'react-icons/fa';

//component is used to show and update the current and previous day status. 
 const Daily = (props) => {
     
     const [ status, setStatus ] = useState(true);

     const { each, name, index, handleStatus } = props;

     const handleClick = (status) => {
        handleStatus(status, name, index);
     }

    return (
        <div onDoubleClick={ () => handleClick(true) } onClick={ () => handleClick(false) }>
            {each === 0 ? <div className="habit_display" ><p>{index}</p></div> : 
                each === 1 ? <div className="habit_display"><p>{index}</p><p><FaCheck /></p></div> : 
                    <div className="habit_display"><p>{index}</p><p><FaTimes /></p></div>}
            
        </div>
    )
}

//function to fetch the data from the store
function mapStateToProps(state){
    return {
      habits : state.habits,
    }
}

export default connect(mapStateToProps)(Daily);
